importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs');
importScripts('https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd');

let modelPromise = cocoSsd.load();

onmessage = async (event) => {
  const imageData = event.data;
  const model = await modelPromise;
  const predictions = await model.detect(imageData);
  postMessage(predictions);
};
