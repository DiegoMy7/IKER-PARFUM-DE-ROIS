import { SAMPLE_PERFUMES } from '../data/perfumes';

const STORAGE_KEY = 'iker-parfum-de-rois-perfumes-v3';

function clonePerfumes(perfumes) {
  return perfumes.map((perfume) => ({ ...perfume, notes: { ...(perfume.notes || {}) } }));
}

function readAll() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : clonePerfumes(SAMPLE_PERFUMES);
  } catch {
    return clonePerfumes(SAMPLE_PERFUMES);
  }
}

function writeAll(perfumes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(perfumes));
  window.dispatchEvent(new Event('iker-perfumes-change'));
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export async function getPerfumes() {
  return readAll().filter((perfume) => perfume.visible !== false);
}

export async function getAllPerfumes() {
  return readAll();
}

export async function createPerfume(data, imageFile) {
  const perfumes = readAll();
  const imageUrl = imageFile ? await fileToDataUrl(imageFile) : data.imageUrl;
  const id = `local-${Date.now()}`;

  perfumes.unshift({
    ...data,
    id,
    imageUrl,
    visible: data.visible !== false,
  });

  writeAll(perfumes);
  return id;
}

export async function updatePerfume(id, data, imageFile) {
  const perfumes = readAll();
  const imageUrl = imageFile ? await fileToDataUrl(imageFile) : data.imageUrl;

  writeAll(
    perfumes.map((perfume) =>
      perfume.id === id ? { ...perfume, ...data, imageUrl } : perfume
    )
  );
}

export async function deletePerfume(id) {
  writeAll(readAll().filter((perfume) => perfume.id !== id));
}

export async function toggleVisibility(id, current) {
  writeAll(
    readAll().map((perfume) =>
      perfume.id === id ? { ...perfume, visible: !current } : perfume
    )
  );
}

export async function resetPerfumes() {
  writeAll(clonePerfumes(SAMPLE_PERFUMES));
}
