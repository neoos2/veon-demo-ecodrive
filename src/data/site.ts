// Real channels and facts from veon/client.json (company.contacts). The phone number is the demo choice; the client picks the main one.
export const PHONE = { tel: "tel:+380631539383", text: "+380 63 153 93 83" };
export const TELEGRAM = "https://t.me/ecodrive_manager_bot";
export const VIBER = "viber://pa?chatURI=ecodriveweb";
export const EMAIL = "dopomoga@ecodrive.in.ua";
export const HOURS = "Пн–Нд 10:00–19:00";
export const ADDRESS = "65049, м. Одеса, Фонтанська дорога, буд. 6, корп. 1, офіс 11Н";
export const SOON = "Розділ у розробці";

// Width axis for power figures: wdth = 60 + 140 * log10(P / 2400) / log10(20000 / 2400), see design/concept.md 8.3
export const wdth = (watts: number) =>
  Math.round(60 + (140 * Math.log10(watts / 2400)) / Math.log10(20000 / 2400));
// Fill of the scale bar: log scale 1 kW .. 20 kW
export const fill = (watts: number) => (Math.log10(watts / 1000) / Math.log10(20)).toFixed(3);

export const BRANCHES = [
  { id: "flat", watts: 2400, value: "2 400", unit: "Вт", label: "Квартира", model: "Fossibot F2400" },
  { id: "home", watts: 6500, value: "6,5", unit: "кВт", label: "Дім", model: "LuxPower SNA PRO-EU 6.5K" },
  { id: "business", watts: 20000, value: "20", unit: "кВт", label: "Бізнес", model: "Deye SUN-20K" },
] as const;
