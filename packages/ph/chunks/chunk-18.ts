import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashDuotoneIcon],svg[ph-waveform-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 96v64H48V96Z" opacity=".2"></svg:path><svg:path d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-2.08-61.38a8 8 0 1 0-11.84 10.76L80 87.09V224a8 8 0 0 0 16 0V104.69l24 26.4V192a8 8 0 0 0 16 0v-43.31l66.08 72.69a8 8 0 1 0 11.84-10.76ZM88 44.43a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v4.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V64a8 8 0 0 0-16 0v16.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28.43a8 8 0 0 0 8 8M208 72a8 8 0 0 0-8 8v88.43a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhWaveformSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashFillIcon],svg[ph-waveform-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 56a8 8 0 0 1 16 0v50.75a8 8 0 0 1-16 0Zm-32 8a8 8 0 0 1 16 0v10.75a8 8 0 0 1-16 0Zm-80 48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm125.66 45.66a8 8 0 0 1-11.32 0L136 147.31V168a8 8 0 0 1-16 0v-36.69l-16-16V184a8 8 0 0 1-16 0V99.32L58.34 69.66a8 8 0 0 1 11.32-11.32l128 128a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhWaveformSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashLightIcon],svg[ph-waveform-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-1.56-60a6 6 0 0 0-8.88 8L82 86.32V224a6 6 0 0 0 12 0V99.52l28 30.8V192a6 6 0 0 0 12 0v-48.48L203.56 220a6 6 0 0 0 8.88-8.08ZM88 42.43a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v4.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V64a6 6 0 0 0-12 0v16.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V96a6 6 0 0 0-12 0v28.43a6 6 0 0 0 6 6M208 74a6 6 0 0 0-6 6v88.43a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhWaveformSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashThinIcon],svg[ph-waveform-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-1-58.69a4 4 0 0 0-6 5.38l39 42.86V224a4 4 0 0 0 8 0V94.35l32 35.2V192a4 4 0 0 0 8 0v-53.65l73 80.34a4 4 0 1 0 5.92-5.38Zm37 3.12a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v4.43a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V64a4 4 0 0 0-8 0v16.43a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V96a4 4 0 0 0-8 0v28.43a4 4 0 0 0 4 4M208 76a4 4 0 0 0-4 4v88.43a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhWaveformSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformThinIcon],svg[ph-waveform-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m36-68a4 4 0 0 0-4 4v192a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m40 32a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m40 32a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4m40-16a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhWaveformThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWavesIcon],svg[ph-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.16 177.25a8 8 0 0 1-1 11.25c-17.36 14.39-32.86 19.5-47 19.5c-18.58 0-34.82-8.82-49.93-17c-25.35-13.76-47.24-25.64-79.07.74a8 8 0 1 1-10.22-12.31c40.17-33.28 70.32-16.92 96.93-2.48c25.35 13.75 47.24 25.63 79.07-.74a8 8 0 0 1 11.22 1.04m-11.27-57c-31.83 26.38-53.72 14.5-79.07.74c-26.61-14.43-56.76-30.79-96.93 2.49a8 8 0 0 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74c15.11 8.19 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31ZM45.11 79.8c31.83-26.37 53.72-14.49 79.07-.74c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.12 47-19.5a8 8 0 1 0-10.22-12.31c-31.83 26.38-53.72 14.5-79.07.74c-26.61-14.41-56.76-30.77-96.93 2.51a8 8 0 1 0 10.22 12.3"></svg:path>`,
})
export class PhWavesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWavesBoldIcon],svg[ph-waves-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.24 174.74a12 12 0 0 1-1.58 16.89c-18.17 15.08-34.6 20.37-49.51 20.37c-19.76 0-36.86-9.29-51.88-17.44c-25.06-13.62-44.86-24.37-74.61.3a12 12 0 1 1-15.32-18.48c42.25-35 75-17.23 101.39-2.92c25.06 13.61 44.86 24.37 74.61-.3a12 12 0 0 1 16.9 1.58m-16.9-57.59c-29.75 24.67-49.55 13.91-74.61.3c-26.35-14.3-59.14-32.11-101.39 2.92a12 12 0 0 0 15.32 18.48c29.75-24.67 49.55-13.92 74.61-.3c15 8.15 32.12 17.44 51.88 17.44c14.91 0 31.34-5.29 49.51-20.36a12 12 0 0 0-15.32-18.48M47.66 82.84c29.75-24.67 49.55-13.92 74.61-.3c15 8.15 32.12 17.44 51.88 17.44c14.91 0 31.34-5.29 49.51-20.36a12 12 0 0 0-15.32-18.48c-29.75 24.67-49.55 13.92-74.61.3c-26.35-14.3-59.14-32.11-101.39 2.93a12 12 0 1 0 15.32 18.47"></svg:path>`,
})
export class PhWavesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWavesDuotoneIcon],svg[ph-waves-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 70.39v112c-72 59.69-104-56.47-176 3.22v-112c72-59.69 104 56.47 176-3.22" opacity=".2"></svg:path><svg:path d="M222.16 177.25a8 8 0 0 1-1 11.25c-17.36 14.39-32.86 19.5-47 19.5c-18.58 0-34.82-8.82-49.93-17c-25.35-13.76-47.24-25.64-79.07.74a8 8 0 1 1-10.22-12.31c40.17-33.28 70.32-16.92 96.93-2.48c25.35 13.75 47.24 25.63 79.07-.74a8 8 0 0 1 11.22 1.04m-11.27-57c-31.83 26.38-53.72 14.5-79.07.74c-26.61-14.43-56.76-30.79-96.93 2.49a8 8 0 0 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74c15.11 8.19 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31ZM45.11 79.8c31.83-26.37 53.72-14.49 79.07-.74c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.12 47-19.5a8 8 0 1 0-10.22-12.31c-31.83 26.38-53.72 14.5-79.07.74c-26.61-14.41-56.76-30.77-96.93 2.51a8 8 0 1 0 10.22 12.3"></svg:path></svg:g>`,
})
export class PhWavesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWavesFillIcon],svg[ph-waves-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-10.8 144.87c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 1 1-10.4-12.16c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 0 1 10.4 12.16Zm0-44c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 0 1-10.4-12.16c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 1 1 10.4 12.16Zm0-44c-13.07 11.18-24.9 15.1-35.64 15.1c-14.26 0-26.62-6.92-37.47-13c-18.41-10.31-32.95-18.45-54.89.31a8 8 0 0 1-10.4-12.15c30.42-26 54.09-12.76 73.11-2.11c18.41 10.31 33 18.45 54.89-.31a8 8 0 1 1 10.4 12.16"></svg:path>`,
})
export class PhWavesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWavesLightIcon],svg[ph-waves-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.62 178.58a6 6 0 0 1-.79 8.45c-16.87 14-32 19-45.75 19c-18.19 0-34.13-8.66-48.94-16.7c-26-14.12-48.44-26.31-81.31 1a6 6 0 0 1-7.66-9.33c39.13-32.45 68.65-16.41 94.69-2.26s48.44 26.31 81.31-1a6 6 0 0 1 8.45.84m-8.45-56.81c-32.87 27.27-55.32 15.07-81.31 1S75.3 92.54 36.17 125a6 6 0 0 0 7.66 9.25c32.87-27.27 55.32-15.08 81.31-1c14.81 8 30.75 16.71 48.94 16.71c13.79 0 28.88-5 45.75-19a6 6 0 0 0-7.66-9.24ZM43.83 78.21c32.87-27.27 55.32-15.07 81.31-1C140 85.3 155.89 94 174.08 94c13.79 0 28.88-5 45.75-19a6 6 0 1 0-7.66-9.24c-32.87 27.27-55.32 15.07-81.31 1S75.3 36.52 36.17 69a6 6 0 1 0 7.66 9.24Z"></svg:path>`,
})
export class PhWavesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWavesThinIcon],svg[ph-waves-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.08 179.84a4 4 0 0 1-.53 5.63C203.56 197.9 188.9 204 173.93 204a55 55 0 0 1-6.12-.34c-15-1.65-28.6-9-41.72-16.14c-25.52-13.86-49.62-27-83.54 1.18a4 4 0 0 1-5.1-6.16c17-14.12 33.62-20.08 50.74-18.19c15 1.64 28.6 9 41.72 16.14c25.52 13.86 49.62 26.94 83.54-1.18a4 4 0 0 1 5.63.53m-5.63-56.53c-33.92 28.12-58 15-83.54 1.17c-13.12-7.12-26.69-14.49-41.72-16.14c-17.12-1.88-33.72 4.07-50.74 18.19a4 4 0 1 0 5.1 6.16c33.92-28.12 58-15 83.54-1.17c13.12 7.12 26.69 14.49 41.72 16.14a57 57 0 0 0 6.12.34c15 0 29.63-6.1 44.62-18.53a4 4 0 1 0-5.1-6.16M42.55 76.69c33.92-28.13 58-15 83.54-1.18c13.12 7.13 26.69 14.5 41.72 16.14a55 55 0 0 0 6.12.34c15 0 29.63-6.1 44.62-18.53a4 4 0 1 0-5.1-6.16c-33.92 28.13-58 15-83.54 1.18c-13.12-7.13-26.69-14.48-41.72-16.14c-17.12-1.88-33.72 4.07-50.74 18.19a4 4 0 1 0 5.1 6.16"></svg:path>`,
})
export class PhWavesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamIcon],svg[ph-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 104a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24m120 96h-88v-16.4a80 80 0 1 0-16 0V200H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M64 104a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64"></svg:path>`,
})
export class PhWebcamIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamBoldIcon],svg[ph-webcam-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 104a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-56 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m112 92h-84v-8.87a84 84 0 1 0-24 0V196H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M68 104a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"></svg:path>`,
})
export class PhWebcamBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamDuotoneIcon],svg[ph-webcam-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a72 72 0 1 0 72 72a72 72 0 0 0-72-72m0 104a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M168 104a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24m120 96h-88v-16.4a80 80 0 1 0-16 0V200H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M64 104a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64"></svg:path></svg:g>`,
})
export class PhWebcamDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamFillIcon],svg[ph-webcam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 104a32 32 0 1 1-32-32a32 32 0 0 1 32 32m72 104a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h88v-16.4a80 80 0 1 1 16 0V200h88a8 8 0 0 1 8 8m-104-56a48 48 0 1 0-48-48a48.05 48.05 0 0 0 48 48"></svg:path>`,
})
export class PhWebcamFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamLightIcon],svg[ph-webcam-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 104a38 38 0 1 0-38 38a38 38 0 0 0 38-38m-64 0a26 26 0 1 1 26 26a26 26 0 0 1-26-26m122 98h-90v-20.25a78 78 0 1 0-12 0V202H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M62 104a66 66 0 1 1 66 66a66.08 66.08 0 0 1-66-66"></svg:path>`,
})
export class PhWebcamLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamSlashIcon],svg[ph-webcam-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.92 210.62l-160-176a8 8 0 1 0-11.84 10.76L58.82 63.8A80 80 0 0 0 120 183.6V200H32a8 8 0 0 0 0 16h165.19l4.89 5.38a8 8 0 1 0 11.84-10.76M64 104a63.65 63.65 0 0 1 6.26-27.62l18.42 20.26A40 40 0 0 0 128 144c1.2 0 2.39-.06 3.58-.17L150 164.11A64 64 0 0 1 64 104m72 96v-16.41a79.9 79.9 0 0 0 25.44-6.91l21.2 23.32ZM85.52 45.31a8 8 0 0 1 3-10.91a80 80 0 0 1 105 115.5a8 8 0 1 1-13.1-9.19a64 64 0 0 0-84-92.4a8 8 0 0 1-10.9-3m65.31 66.12A24 24 0 0 0 128 80a24.2 24.2 0 0 0-5.24.57A8 8 0 1 1 119.3 65a40 40 0 0 1 46.7 51.38a8 8 0 0 1-15.21-4.95Z"></svg:path>`,
})
export class PhWebcamSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamSlashBoldIcon],svg[ph-webcam-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14l14.81 16.29A84 84 0 0 0 116 187.13V196H32a12 12 0 0 0 0 24h163.42l3.7 4.07a12 12 0 0 0 17.76-16.14M68 104a59.8 59.8 0 0 1 3.52-20.29l12.91 14.2A44 44 0 0 0 128 148c.64 0 1.28 0 1.92-.05l12.9 14.19A60 60 0 0 1 68 104m72 92v-8.87a84.4 84.4 0 0 0 20.42-5.63L173.6 196ZM88.89 42.35a12 12 0 0 1 6.37-15.73a84 84 0 0 1 106.65 117.32a12 12 0 0 1-10.56 6.29a11.84 11.84 0 0 1-5.7-1.45a12 12 0 0 1-4.84-16.26a60 60 0 0 0-76.19-83.8a12 12 0 0 1-15.73-6.37M172 103.64a12 12 0 0 1-11.9 12.1h-.1a12 12 0 0 1-12-11.91a20 20 0 0 0-17.94-19.73a12 12 0 1 1 2.42-23.87A43.92 43.92 0 0 1 172 103.64"></svg:path>`,
})
export class PhWebcamSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamSlashDuotoneIcon],svg[ph-webcam-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a72 72 0 1 0 72 72a72 72 0 0 0-72-72m0 104a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="m213.92 210.62l-160-176a8 8 0 1 0-11.84 10.76L58.82 63.8A80 80 0 0 0 120 183.6V200H32a8 8 0 0 0 0 16h165.19l4.89 5.38a8 8 0 1 0 11.84-10.76M64 104a63.65 63.65 0 0 1 6.26-27.62l18.42 20.26A40 40 0 0 0 128 144c1.2 0 2.39-.06 3.58-.17L150 164.11A64 64 0 0 1 64 104m72 96v-16.41a79.9 79.9 0 0 0 25.44-6.91l21.2 23.32ZM85.52 45.31a8 8 0 0 1 3-10.91a80 80 0 0 1 105 115.5a8 8 0 1 1-13.1-9.19a64 64 0 0 0-84-92.4a8 8 0 0 1-10.9-3m65.31 66.12A24 24 0 0 0 128 80a24.2 24.2 0 0 0-5.24.57A8 8 0 1 1 119.3 65a40 40 0 0 1 46.7 51.38a8 8 0 0 1-15.21-4.95Z"></svg:path></svg:g>`,
})
export class PhWebcamSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamSlashFillIcon],svg[ph-webcam-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.34 43.19a4 4 0 0 1 .78-6A80 80 0 0 1 190.39 154a4 4 0 0 1-6.11.22l-16.43-18.08a4 4 0 0 1-.3-5a48 48 0 0 0-62.84-69.11a4 4 0 0 1-4.94-.78ZM126.93 72a31.8 31.8 0 0 0-8.43 1.42a4 4 0 0 0-1.75 6.58l34.12 37.53a4 4 0 0 0 6.67-1.18A31.8 31.8 0 0 0 160 104a32.36 32.36 0 0 0-33.07-32m86.45 149.9a8 8 0 0 1-11.3-.54l-4.89-5.36H32a8 8 0 0 1-8-8.53a8.17 8.17 0 0 1 8.27-7.47H120v-16.4A79.93 79.93 0 0 1 58.86 63.84L42.08 45.38a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3ZM128 152a48 48 0 0 0 10-1.06l-13.79-15.17A32 32 0 0 1 96 104.71L82.23 89.55A48 48 0 0 0 128 152m54.64 48l-21.22-23.34A79.2 79.2 0 0 1 136 183.6V200Z"></svg:path>`,
})
export class PhWebcamSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamSlashLightIcon],svg[ph-webcam-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.44 212l-160-176a6 6 0 0 0-8.88 8l17.75 19.56A78 78 0 0 0 122 181.75V202H32a6 6 0 0 0 0 12h166.07l5.49 6a6 6 0 0 0 8.88-8.08Zm-91.67-83a26.05 26.05 0 0 1-18.31-20.15ZM62 104a65.6 65.6 0 0 1 7.78-31.12l21.07 23.18A38 38 0 0 0 128 142a38 38 0 0 0 4.38-.26l21.06 23.17A66 66 0 0 1 62 104m72 98v-20.24a78.3 78.3 0 0 0 27.93-7.51L187.16 202ZM87.26 44.32a6 6 0 0 1 2.26-8.18a78 78 0 0 1 102.37 112.61a6 6 0 1 1-9.82-6.89a66 66 0 0 0-86.63-95.29a6 6 0 0 1-8.18-2.25m65.47 67.73a26 26 0 0 0-30.4-33.43a6 6 0 1 1-2.6-11.72a38 38 0 0 1 44.41 48.86a6 6 0 0 1-11.41-3.71"></svg:path>`,
})
export class PhWebcamSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamSlashThinIcon],svg[ph-webcam-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 213.31l-160-176a4 4 0 0 0-6 5.38l18.8 20.63A76 76 0 0 0 124 179.89V204H32a4 4 0 0 0 0 8h167l6.08 6.69a4 4 0 1 0 5.92-5.38M100 103.18l26.14 28.75A28 28 0 0 1 100 104zM60 104a67.6 67.6 0 0 1 9.4-34.52l23.6 26a36 36 0 0 0 40.13 44.14l23.63 26A68 68 0 0 1 60 104m72 100v-24.11a76.1 76.1 0 0 0 30.39-8.11l29.3 32.22ZM89 43.33a4 4 0 0 1 1.5-5.45a76 76 0 0 1 99.76 109.72a4 4 0 1 1-6.55-4.59a68 68 0 0 0-89.25-98.18a4 4 0 0 1-5.46-1.5m65.63 69.34a28 28 0 0 0-32.73-36a4 4 0 0 1-1.74-7.81a36 36 0 0 1 42.08 46.28a4 4 0 0 1-3.8 2.77a4.1 4.1 0 0 1-1.24-.2a4 4 0 0 1-2.57-5.04"></svg:path>`,
})
export class PhWebcamSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebcamThinIcon],svg[ph-webcam-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 104a36 36 0 1 0-36 36a36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28m124 100h-92v-24.11a76 76 0 1 0-8 0V204H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M60 104a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"></svg:path>`,
})
export class PhWebcamThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebhooksLogoIcon],svg[ph-webhooks-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.16 176h-66.84a48 48 0 1 1-85.72-36.81a8 8 0 0 1 12.8 9.61A31.7 31.7 0 0 0 32 168a32 32 0 0 0 64 0a8 8 0 0 1 8-8h74.16a16 16 0 1 1 0 16M64 184a16 16 0 0 0 14.08-23.61l35.77-58.14a8 8 0 0 0-2.62-11a32 32 0 1 1 46.1-40.06a8 8 0 1 0 14.67-6.4a48 48 0 1 0-75.62 55.33L64.44 152H64a16 16 0 0 0 0 32m128-64a48.2 48.2 0 0 0-18 3.49L142.08 71.6A16 16 0 1 0 128 80h.44l35.78 58.15a8 8 0 0 0 11 2.61A32 32 0 1 1 192 200a8 8 0 0 0 0 16a48 48 0 0 0 0-96"></svg:path>`,
})
export class PhWebhooksLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebhooksLogoBoldIcon],svg[ph-webhooks-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 180h-73.29a56 56 0 1 1-104.6-37.46a12 12 0 1 1 21.37 10.92A31.64 31.64 0 0 0 32 168a32 32 0 0 0 64 0a12 12 0 0 1 12-12h84a12 12 0 0 1 0 24m0-68a55.9 55.9 0 0 0-18.45 3.12l-35.33-57.41a12 12 0 0 0-20.44 12.58l40.94 66.52a12 12 0 0 0 16.52 3.93a32 32 0 1 1 19.68 59.13a12 12 0 0 0 1.08 23.95a10 10 0 0 0 1.09 0A56 56 0 0 0 192 112M57.71 178.22a12 12 0 0 0 16.51-3.93l40.94-66.52a12 12 0 0 0-3.92-16.51a32 32 0 1 1 45.28-41.8a12 12 0 1 0 21.37-10.92a56 56 0 1 0-88.79 65.78l-35.32 57.39a12 12 0 0 0 3.93 16.51"></svg:path>`,
})
export class PhWebhooksLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebhooksLogoDuotoneIcon],svg[ph-webhooks-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 104a40 40 0 1 1 40-40a40 40 0 0 1-40 40m64 24a40 40 0 1 0 40 40a40 40 0 0 0-40-40m-128 0a40 40 0 1 0 40 40a40 40 0 0 0-40-40" opacity=".2"></svg:path><svg:path d="M178.16 176h-66.84a48 48 0 1 1-85.72-36.81a8 8 0 0 1 12.8 9.61A31.7 31.7 0 0 0 32 168a32 32 0 0 0 64 0a8 8 0 0 1 8-8h74.16a16 16 0 1 1 0 16M64 184a16 16 0 0 0 14.08-23.61l35.77-58.14a8 8 0 0 0-2.62-11a32 32 0 1 1 46.1-40.06a8 8 0 1 0 14.67-6.4a48 48 0 1 0-75.62 55.33L64.44 152H64a16 16 0 0 0 0 32m128-64a48.2 48.2 0 0 0-18 3.49L142.08 71.6A16 16 0 1 0 128 80h.44l35.78 58.15a8 8 0 0 0 11 2.61A32 32 0 1 1 192 200a8 8 0 0 0 0 16a48 48 0 0 0 0-96"></svg:path></svg:g>`,
})
export class PhWebhooksLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebhooksLogoFillIcon],svg[ph-webhooks-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m50.15 160l38.92-67.43l-2.24-3.88a48 48 0 1 1 85.05-44.17a8.17 8.17 0 0 1-3.19 10.4a8 8 0 0 1-11.35-3.72a32 32 0 1 0-56.77 29.3a.6.6 0 0 1 .08.13l13.83 23.94a8 8 0 0 1 0 8L77.86 176a16 16 0 0 1-27.71-16m141-40h-12.34l-36.95-64a16 16 0 0 0-27.71 16l34.64 60a8 8 0 0 0 6.92 4h35.63c17.89 0 32.95 14.64 32.66 32.53A32 32 0 0 1 192.31 200a8.23 8.23 0 0 0-8.28 7.33a8 8 0 0 0 8 8.67a48.05 48.05 0 0 0 48-48.93c-.54-26.28-22.55-47.07-48.84-47.07ZM208 167.23c-.4-8.61-7.82-15.23-16.43-15.23h-76.76a8 8 0 0 0-6.93 4l-16.16 28a32 32 0 1 1-53.47-35a8.2 8.2 0 0 0-.92-11a8 8 0 0 0-11.72 1.17A47.63 47.63 0 0 0 16 167.54A48 48 0 0 0 105.55 192l4.62-8H192a16 16 0 0 0 16-16.77"></svg:path>`,
})
export class PhWebhooksLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebhooksLogoLightIcon],svg[ph-webhooks-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.37 174H109.6a46 46 0 1 1-82.4-33.61a6 6 0 0 1 9.6 7.21A33.68 33.68 0 0 0 30 168a34 34 0 0 0 68 0a6 6 0 0 1 6-6h75.37a14 14 0 1 1 0 12M64 182a14 14 0 0 0 11.73-21.62l36.42-59.18a6 6 0 0 0-2-8.25a34 34 0 1 1 49-42.57a6 6 0 1 0 11-4.79A46 46 0 1 0 99 99.7l-33.48 54.38c-.5-.05-1-.08-1.52-.08a14 14 0 0 0 0 28m128-60a46 46 0 0 0-18.8 4l-33.47-54.39A14 14 0 1 0 128 78a13 13 0 0 0 1.52-.09l36.4 59.17a6.05 6.05 0 0 0 3.73 2.69a6 6 0 0 0 4.53-.73A34 34 0 1 1 192 202a6 6 0 0 0 0 12a46 46 0 0 0 0-92"></svg:path>`,
})
export class PhWebhooksLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWebhooksLogoThinIcon],svg[ph-webhooks-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.7 172h-72.89a44 44 0 1 1-79-30.41a4 4 0 0 1 6.4 4.81A35.67 35.67 0 0 0 28 168a36 36 0 0 0 72 0a4 4 0 0 1 4-4h76.7a12 12 0 1 1 0 8M64 180a12 12 0 0 0 9.33-19.54l37.11-60.3a4 4 0 0 0-1.31-5.51A36 36 0 1 1 161 49.58a4 4 0 1 0 7.33-3.19a44 44 0 1 0-66.71 52.83l-35.1 57.05A11.6 11.6 0 0 0 64 156a12 12 0 0 0 0 24m128-56a44 44 0 0 0-19.56 4.58l-35.11-57A12 12 0 1 0 128 76a12.2 12.2 0 0 0 2.52-.27L167.63 136a4 4 0 0 0 5.5 1.31A36 36 0 1 1 192 204a4 4 0 0 0 0 8a44 44 0 0 0 0-88"></svg:path>`,
})
export class PhWebhooksLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWechatLogoIcon],svg[ph-wechat-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05"></svg:path>`,
})
export class PhWechatLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWechatLogoBoldIcon],svg[ph-wechat-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 144a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m59.18 82.35a20 20 0 0 1-24.83 24.83l-23.26-6.84a84 84 0 0 1-111.37-41.23a83.2 83.2 0 0 1-22.82-6.77l-23.25 6.84A20.2 20.2 0 0 1 32 188a20 20 0 0 1-19.19-25.64l6.84-23.26a84 84 0 0 1 152.68-70.19a84 84 0 0 1 64 118.18Zm-166.72-49.6A83.94 83.94 0 0 1 145 69.37A60 60 0 0 0 43.08 132.3a12 12 0 0 1 .93 9.06l-6.09 20.72L58.64 156a12 12 0 0 1 9.06.93a60 60 0 0 0 8.76 3.82M220 152a60 60 0 1 0-31.7 52.92a12 12 0 0 1 9.06-.93l20.72 6.09l-6.08-20.72a12 12 0 0 1 .93-9.06A60.1 60.1 0 0 0 220 152"></svg:path>`,
})
export class PhWechatLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWechatLogoDuotoneIcon],svg[ph-wechat-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M163.94 80.11C162.63 80 161.32 80 160 80a72 72 0 0 0-67.93 95.88a71.5 71.5 0 0 1-30-8.39l-27.76 8.16a8 8 0 0 1-9.93-9.93L32.5 138a72 72 0 1 1 131.44-57.89" opacity=".2"></svg:path><svg:path d="M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05"></svg:path></svg:g>`,
})
export class PhWechatLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWechatLogoFillIcon],svg[ph-wechat-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.07 186.76a80 80 0 0 0-62.49-114.17a80 80 0 1 0-145.65 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a79 79 0 0 0 25.19 7.35a80 80 0 0 0 108.33 40.65l24.71 7.27a16 16 0 0 0 19.87-19.87ZM132 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-52 0a80.3 80.3 0 0 0 1.3 14.3a63.5 63.5 0 0 1-15.49-5.85a8 8 0 0 0-6-.63L32 168l8.17-27.76a8 8 0 0 0-.63-6a64 64 0 0 1 112.14-61.81A80.12 80.12 0 0 0 80 152m108 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhWechatLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWechatLogoLightIcon],svg[ph-wechat-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m46-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m49.42 82A14 14 0 0 1 220 229.42l-25.46-7.49a78 78 0 0 1-106.7-40.35a77 77 0 0 1-26.42-7.65L36 181.42A14 14 0 0 1 18.58 164l7.49-25.46a78 78 0 1 1 142.12-64.11a78 78 0 0 1 61.74 112.15ZM83.86 168.87a77.92 77.92 0 0 1 71-94.68a66 66 0 1 0-117.1 60.94a6.05 6.05 0 0 1 .47 4.53l-8.17 27.76a2 2 0 0 0 2.48 2.49l27.77-8.17a6.06 6.06 0 0 1 4.53.47a65.2 65.2 0 0 0 19.02 6.66m134.35 14.26a66 66 0 1 0-27.08 27.08a6.06 6.06 0 0 1 4.53-.47l27.77 8.17a2 2 0 0 0 2.48-2.48l-8.17-27.77a6.05 6.05 0 0 1 .47-4.53"></svg:path>`,
})
export class PhWechatLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWechatLogoThinIcon],svg[ph-wechat-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m48-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m47.5 80.6a12 12 0 0 1-14.9 14.9l-26.21-7.71a76 76 0 0 1-105.15-40.11a75 75 0 0 1-27.63-7.89L35.4 179.5a12 12 0 0 1-14.9-14.9l7.71-26.21a76 76 0 1 1 138.58-62.07a76 76 0 0 1 61 110.07Zm-149-41.28A76 76 0 0 1 158 76.05a68 68 0 1 0-122 60a4.07 4.07 0 0 1 .31 3l-8.17 27.76a4 4 0 0 0 5 5l27.76-8.17a4.07 4.07 0 0 1 3 .31a66.9 66.9 0 0 0 22.6 7.37m141.33 43.54l-8.17-27.76a4.07 4.07 0 0 1 .31-3a68 68 0 1 0-27.89 27.9a4.1 4.1 0 0 1 1.89-.47a4 4 0 0 1 1.13.16l27.76 8.17a4 4 0 0 0 5-5Z"></svg:path>`,
})
export class PhWechatLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWhatsappLogoIcon],svg[ph-whatsapp-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.61-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216"></svg:path>`,
})
export class PhWhatsappLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWhatsappLogoBoldIcon],svg[ph-whatsapp-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M187.3 159.06A36.09 36.09 0 0 1 152 188a84.09 84.09 0 0 1-84-84a36.09 36.09 0 0 1 28.94-35.3A12 12 0 0 1 110 75.1l11.48 23a12 12 0 0 1-.75 12l-8.52 12.78a44.56 44.56 0 0 0 20.91 20.91l12.78-8.52a12 12 0 0 1 12-.75l23 11.48a12 12 0 0 1 6.4 13.06M236 128a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.06a12 12 0 0 1 1 9.81l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"></svg:path>`,
})
export class PhWhatsappLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWhatsappLogoDuotoneIcon],svg[ph-whatsapp-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 0 0-83.11 144.07l-12.47 37.39a8 8 0 0 0 10.12 10.12l37.39-12.47A96 96 0 1 0 128 32m24 152a80 80 0 0 1-80-80a32 32 0 0 1 32-32l16 32l-12.32 18.47a48.2 48.2 0 0 0 25.85 25.85L152 136l32 16a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.62-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216"></svg:path></svg:g>`,
})
export class PhWhatsappLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWhatsappLogoFillIcon],svg[ph-whatsapp-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m152.58 145.23l23 11.48A24 24 0 0 1 152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155ZM232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-40 24a8 8 0 0 0-4.42-7.16l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40"></svg:path>`,
})
export class PhWhatsappLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWhatsappLogoLightIcon],svg[ph-whatsapp-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m186.68 146.63l-32-16a6 6 0 0 0-6 .38L133 141.46A42.5 42.5 0 0 1 114.54 123L125 107.33a6 6 0 0 0 .38-6l-16-32A6 6 0 0 0 104 66a38 38 0 0 0-38 38a86.1 86.1 0 0 0 86 86a38 38 0 0 0 38-38a6 6 0 0 0-3.32-5.37M152 178a74.09 74.09 0 0 1-74-74a26 26 0 0 1 22.42-25.75l12.66 25.32l-10.39 15.58a6 6 0 0 0-.54 5.63a54.43 54.43 0 0 0 29.07 29.07a6 6 0 0 0 5.63-.54l15.58-10.39l25.32 12.66A26 26 0 0 1 152 178M128 26a102 102 0 0 0-89.65 150.69l-11.62 34.87a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 1 0 128 26m0 192a90 90 0 0 1-45.06-12.08a6.1 6.1 0 0 0-3-.81a6.2 6.2 0 0 0-1.9.31l-37.39 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 1 1 128 218"></svg:path>`,
})
export class PhWhatsappLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWhatsappLogoThinIcon],svg[ph-whatsapp-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m185.79 148.42l-32-16a4 4 0 0 0-4 .25l-16.64 11.1a44.56 44.56 0 0 1-20.91-20.91l11.1-16.64a4 4 0 0 0 .25-4l-16-32A4 4 0 0 0 104 68a36 36 0 0 0-36 36a84.09 84.09 0 0 0 84 84a36 36 0 0 0 36-36a4 4 0 0 0-2.21-3.58M152 180a76.08 76.08 0 0 1-76-76a28 28 0 0 1 25.58-27.9l13.8 27.61l-11 16.54A4 4 0 0 0 104 124a52.43 52.43 0 0 0 28 28a4 4 0 0 0 3.76-.37l16.54-11l27.61 13.8A28 28 0 0 1 152 180M128 28a100 100 0 0 0-87.47 148.5l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9A100 100 0 1 0 128 28m0 192a92 92 0 0 1-46.07-12.35a4.05 4.05 0 0 0-2-.54a4 4 0 0 0-1.27.21l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 1 1 128 220"></svg:path>`,
})
export class PhWhatsappLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairIcon],svg[ph-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.59 189.47a8 8 0 0 0-10.12-5.06l-17.42 5.81l-28.9-57.8A8 8 0 0 0 192 128h-80v-24h56a8 8 0 0 0 0-16h-56v-9a32 32 0 1 0-16 0v10.81A72 72 0 0 0 112 232c33.52 0 63.69-22.71 71.75-54a8 8 0 1 0-15.5-4c-6.16 24-30.34 42-56.25 42a56 56 0 0 1-16-109.66V136a8 8 0 0 0 8 8h83.05l29.79 59.58a8 8 0 0 0 9.69 4l24-8a8 8 0 0 0 5.06-10.11M88 48a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhWheelchairIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairBoldIcon],svg[ph-wheelchair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.14 187.54a12 12 0 0 0-15.6-6.68l-9.75 3.9l-27.06-54.13A12 12 0 0 0 192 124h-76v-16h52a12 12 0 0 0 0-24h-52v-6.19a34 34 0 1 0-24 0v8.88a76 76 0 1 0 88.35 106.57a12 12 0 1 0-21.57-10.52A52 52 0 1 1 92 112v24a12 12 0 0 0 12 12h80.58l28.68 57.37a12 12 0 0 0 15.19 5.77l20-8a12 12 0 0 0 6.69-15.6M104 36a10 10 0 1 1-10 10a10 10 0 0 1 10-10"></svg:path>`,
})
export class PhWheelchairBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairDuotoneIcon],svg[ph-wheelchair-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 48a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M255.59 189.47a8 8 0 0 0-10.12-5.06l-17.42 5.81l-28.9-57.8A8 8 0 0 0 192 128h-80v-24h56a8 8 0 0 0 0-16h-56v-9a32 32 0 1 0-16 0v10.81A72 72 0 0 0 112 232c33.52 0 63.69-22.71 71.75-54a8 8 0 1 0-15.5-4c-6.16 24-30.34 42-56.25 42a56 56 0 0 1-16-109.66V136a8 8 0 0 0 8 8h83.05l29.79 59.58a8 8 0 0 0 9.69 4l24-8a8 8 0 0 0 5.06-10.11M88 48a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhWheelchairDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairFillIcon],svg[ph-wheelchair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.53 199.59l-24 8a8 8 0 0 1-9.69-4L187.05 144H104a8 8 0 0 1-8-8v-29.66A56 56 0 0 0 112 216c25.91 0 50.09-18.05 56.25-42a8 8 0 1 1 15.5 4c-8.06 31.3-38.23 54-71.75 54A72 72 0 0 1 96 89.81v-19a28 28 0 1 1 16 0V88h56a8 8 0 0 1 0 16h-56v24h80a8 8 0 0 1 7.15 4.42l28.9 57.8l17.42-5.81a8 8 0 0 1 5.06 15.18"></svg:path>`,
})
export class PhWheelchairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairLightIcon],svg[ph-wheelchair-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.69 190.1a6 6 0 0 0-7.59-3.79l-19.1 6.35l-29.68-59.34A6 6 0 0 0 192 130h-82v-27.95h58a6 6 0 0 0 0-12h-58V77.4a30 30 0 1 0-12 0v14A70 70 0 0 0 112 230c32.62 0 62-22.08 69.81-52.5a6 6 0 0 0-11.62-3c-6.49 25.21-31 43.5-58.19 43.5a58 58 0 0 1-14-114.28V136a6 6 0 0 0 6 6h84.29l30.34 60.68a6 6 0 0 0 7.27 3l24-8a6 6 0 0 0 3.79-7.58M86 48a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhWheelchairLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairMotionIcon],svg[ph-wheelchair-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-8 136a64 64 0 1 1-64-64a8 8 0 0 1 0 16a48 48 0 1 0 48 48a8 8 0 0 1 16 0m38.19-37.07a8 8 0 0 1 1.65 6.64l-16 80A8 8 0 0 1 184 224a7.8 7.8 0 0 1-1.58-.16a8 8 0 0 1-6.27-9.41L190.24 144H128a8 8 0 0 1-6.94-12l20.06-34.9a80.09 80.09 0 0 0-88 9.17A8 8 0 1 1 42.91 94a96 96 0 0 1 113.46-6.42a8 8 0 0 1 2.57 10.69L141.82 128H200a8 8 0 0 1 6.19 2.93"></svg:path>`,
})
export class PhWheelchairMotionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairMotionBoldIcon],svg[ph-wheelchair-motion-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 84a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m29.28 96.39a12 12 0 0 1 2.49 10l-16 80A12 12 0 0 1 180 232a12 12 0 0 1-2.36-.23a12 12 0 0 1-9.42-14.12L181.36 152H124a12 12 0 0 1-10.4-18l17.92-31.2a76.1 76.1 0 0 0-79.88 10.55a12 12 0 0 1-15.28-18.49a100 100 0 0 1 118.19-6.68a12 12 0 0 1 3.85 16L144.74 128H196a12 12 0 0 1 9.28 4.39m-41.47 44.52a64 64 0 1 1-73.64-68.16a12 12 0 0 1 3.66 23.72a40 40 0 1 0 46.05 42.62a12 12 0 1 1 23.93 1.82"></svg:path>`,
})
export class PhWheelchairMotionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairMotionDuotoneIcon],svg[ph-wheelchair-motion-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M176 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-8 136a64 64 0 1 1-64-64a8 8 0 0 1 0 16a48 48 0 1 0 48 48a8 8 0 0 1 16 0m38.19-37.07a8 8 0 0 1 1.65 6.64l-16 80A8 8 0 0 1 184 224a7.8 7.8 0 0 1-1.58-.16a8 8 0 0 1-6.27-9.41L190.24 144H128a8 8 0 0 1-6.94-12l20.06-34.9a80.09 80.09 0 0 0-88 9.17A8 8 0 1 1 42.91 94a96 96 0 0 1 113.46-6.42a8 8 0 0 1 2.57 10.69L141.82 128H200a8 8 0 0 1 6.19 2.93"></svg:path></svg:g>`,
})
export class PhWheelchairMotionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairMotionFillIcon],svg[ph-wheelchair-motion-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 48a32 32 0 1 1 32 32a32 32 0 0 1-32-32m16 112a8 8 0 0 0-8 8a48 48 0 1 1-48-48a8 8 0 0 0 0-16a64 64 0 1 0 64 64a8 8 0 0 0-8-8m40-32h-58.18l17.12-29.78a8 8 0 0 0-2.57-10.69A96 96 0 0 0 42.91 94a8 8 0 1 0 10.18 12.33a80.09 80.09 0 0 1 88-9.17L121.06 132a8 8 0 0 0 6.94 12h62.24l-14.08 70.43a8 8 0 0 0 6.27 9.41a7.8 7.8 0 0 0 1.57.16a8 8 0 0 0 7.83-6.43l16-80A8 8 0 0 0 200 128"></svg:path>`,
})
export class PhWheelchairMotionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairMotionLightIcon],svg[ph-wheelchair-motion-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m-10 138a62 62 0 1 1-62-62a6 6 0 0 1 0 12a50 50 0 1 0 50 50a6 6 0 0 1 12 0m38.64-35.8a6 6 0 0 1 1.24 5l-16 80A6 6 0 0 1 184 222a6 6 0 0 1-1.19-.12a6 6 0 0 1-4.7-7.06L192.68 142H128a6 6 0 0 1-5.2-9l21.07-36.68a82.05 82.05 0 0 0-92.05 8.41a6 6 0 1 1-7.64-9.25a94 94 0 0 1 111.1-6.28a6 6 0 0 1 1.92 8L138.37 130H200a6 6 0 0 1 4.64 2.2"></svg:path>`,
})
export class PhWheelchairMotionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairMotionThinIcon],svg[ph-wheelchair-motion-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 76a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m-12 140a60 60 0 1 1-60-60a4 4 0 0 1 0 8a52 52 0 1 0 52 52a4 4 0 0 1 8 0m39.09-34.54a4 4 0 0 1 .83 3.32l-16 80A4 4 0 0 1 184 220a3.4 3.4 0 0 1-.78-.08a4 4 0 0 1-3.14-4.7l15-75.22H128a4 4 0 0 1-3.47-6l22.08-38.42a84.05 84.05 0 0 0-96.06 7.61a4 4 0 0 1-5.1-6.19a92 92 0 0 1 108.73-6.15a4 4 0 0 1 1.29 5.34L134.91 132H200a4 4 0 0 1 3.09 1.46"></svg:path>`,
})
export class PhWheelchairMotionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWheelchairThinIcon],svg[ph-wheelchair-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.79 190.73a4 4 0 0 0-5.06-2.52l-20.7 6.9l-30.45-60.9A4 4 0 0 0 192 132h-84v-31.85c1.32-.09 2.65-.15 4-.15h56a4 4 0 0 0 0-8h-56c-1.34 0-2.68 0-4 .13V75.71a28 28 0 1 0-8 0v17.37A68 68 0 0 0 112 228c31.72 0 60.27-21.45 67.87-51a4 4 0 0 0-7.74-2c-6.71 26.08-32 45-60.13 45a60 60 0 0 1-12-118.79V136a4 4 0 0 0 4 4h85.53l30.89 61.79A4 4 0 0 0 224 204a3.9 3.9 0 0 0 1.26-.21l24-8a4 4 0 0 0 2.53-5.06M84 48a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhWheelchairThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiHighIcon],svg[ph-wifi-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m97.08-117a172 172 0 0 0-218.16 0a8 8 0 0 0 10.16 12.37a156 156 0 0 1 197.84 0A8 8 0 0 0 237.08 87M205 122.77a124 124 0 0 0-153.94 0A8 8 0 0 0 61 135.31a108 108 0 0 1 134.06 0a8 8 0 0 0 11.24-1.3a8 8 0 0 0-1.3-11.24m-32.26 35.76a76.05 76.05 0 0 0-89.42 0a8 8 0 0 0 9.42 12.94a60 60 0 0 1 70.58 0a8 8 0 1 0 9.42-12.94"></svg:path>`,
})
export class PhWifiHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiHighBoldIcon],svg[ph-wifi-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m95.61-120.09a176 176 0 0 0-223.22 0a12 12 0 1 0 15.23 18.55a152 152 0 0 1 192.76 0a12 12 0 1 0 15.23-18.55m-32.16 35.73a128 128 0 0 0-158.9 0a12 12 0 0 0 14.9 18.81a104 104 0 0 1 129.1 0a12 12 0 0 0 14.9-18.81m-32.38 35.66a80.05 80.05 0 0 0-94.14 0a12 12 0 0 0 14.14 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.14-19.4"></svg:path>`,
})
export class PhWifiHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiHighDuotoneIcon],svg[ph-wifi-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m238.2 87.69l-104 125.43a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21a180.75 180.75 0 0 1 217.78 0a7.79 7.79 0 0 1 1.31 11.21" opacity=".2"></svg:path><svg:path d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path></svg:g>`,
})
export class PhWifiHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiHighFillIcon],svg[ph-wifi-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.35 92.8l-104 125.43A15.93 15.93 0 0 1 128 224a15.93 15.93 0 0 1-12.31-5.77L11.65 92.8a15.65 15.65 0 0 1-3.54-11.89a15.93 15.93 0 0 1 6.17-10.81A186.67 186.67 0 0 1 128 32a186.67 186.67 0 0 1 113.72 38.1a15.93 15.93 0 0 1 6.17 10.81a15.65 15.65 0 0 1-3.54 11.89"></svg:path>`,
})
export class PhWifiHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiHighLightIcon],svg[ph-wifi-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10m97.81-115.45a170 170 0 0 0-215.62 0a6 6 0 1 0 7.62 9.27a158 158 0 0 1 200.38 0a6 6 0 1 0 7.62-9.27m-32.08 35.79a122 122 0 0 0-151.46 0a6 6 0 0 0 7.46 9.41a110 110 0 0 1 136.54 0A6 6 0 0 0 200 135a6 6 0 0 0 3.73-10.7Zm-32.2 35.81a74 74 0 0 0-87.06 0a6 6 0 0 0 7.06 9.7a62 62 0 0 1 72.94 0a6 6 0 0 0 8.38-1.32a6 6 0 0 0-1.32-8.38"></svg:path>`,
})
export class PhWifiHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiHighThinIcon],svg[ph-wifi-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m98.54-113.9a168 168 0 0 0-213.08 0a4 4 0 1 0 5.08 6.18a160 160 0 0 1 202.92 0a4 4 0 0 0 5.08-6.18m-32.06 35.81a120 120 0 0 0-149 0a4 4 0 0 0 5 6.27a112 112 0 0 1 139 0a4 4 0 0 0 5-6.27m-32.13 35.86a72 72 0 0 0-84.7 0a4 4 0 1 0 4.7 6.46a64.07 64.07 0 0 1 75.3 0a4 4 0 0 0 5.58-.87a4 4 0 0 0-.88-5.59"></svg:path>`,
})
export class PhWifiHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiLowIcon],svg[ph-wifi-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m32.71-45.47a76.05 76.05 0 0 0-89.42 0a8 8 0 0 0 9.42 12.94a60 60 0 0 1 70.58 0a8 8 0 1 0 9.42-12.94"></svg:path>`,
})
export class PhWifiLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiLowBoldIcon],svg[ph-wifi-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m31.06-48.7a80 80 0 0 0-94.12 0a12 12 0 1 0 14.13 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.13-19.4"></svg:path>`,
})
export class PhWifiLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiLowDuotoneIcon],svg[ph-wifi-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m171.68 167.88l-37.53 45.24a8 8 0 0 1-12.3 0l-37.53-45.24a68 68 0 0 1 87.36 0" opacity=".2"></svg:path><svg:path d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208l-32.1-38.7a60 60 0 0 1 64.2 0Zm42.37-51.08a75.89 75.89 0 0 0-84.74 0L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path></svg:g>`,
})
export class PhWifiLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiLowFillIcon],svg[ph-wifi-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89m-77.52 76a75.89 75.89 0 0 0-84.74 0L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path>`,
})
export class PhWifiLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiLowLightIcon],svg[ph-wifi-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10m33.53-43.85a74 74 0 0 0-87.06 0a6 6 0 0 0 7.06 9.7a62 62 0 0 1 72.94 0a6 6 0 0 0 8.38-1.32a6 6 0 0 0-1.32-8.38"></svg:path>`,
})
export class PhWifiLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiLowThinIcon],svg[ph-wifi-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m34.35-42.23a72 72 0 0 0-84.7 0a4 4 0 1 0 4.71 6.46a64 64 0 0 1 75.28 0a4 4 0 1 0 4.71-6.46"></svg:path>`,
})
export class PhWifiLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiMediumIcon],svg[ph-wifi-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m65-81.23a124 124 0 0 0-153.94 0A8 8 0 0 0 61 135.31a108 108 0 0 1 134.06 0a8 8 0 0 0 11.24-1.3a8 8 0 0 0-1.3-11.24m-32.26 35.76a76.05 76.05 0 0 0-89.42 0a8 8 0 0 0 9.42 12.94a60 60 0 0 1 70.58 0a8 8 0 1 0 9.42-12.94"></svg:path>`,
})
export class PhWifiMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiMediumBoldIcon],svg[ph-wifi-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m63.45-84.36a128 128 0 0 0-158.9 0a12 12 0 0 0 14.9 18.81a104 104 0 0 1 129.1 0a12 12 0 0 0 14.9-18.81m-32.38 35.66a80.05 80.05 0 0 0-94.14 0a12 12 0 0 0 14.14 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.14-19.4"></svg:path>`,
})
export class PhWifiMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiMediumDuotoneIcon],svg[ph-wifi-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m202.33 130.94l-68.18 82.18a8 8 0 0 1-12.3 0l-68.18-82.18a116 116 0 0 1 148.66 0" opacity=".2"></svg:path><svg:path d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208l-62.87-75.8a107.89 107.89 0 0 1 125.74 0Zm73.12-88.16a124 124 0 0 0-146.24 0l-30.79-37.1A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path></svg:g>`,
})
export class PhWifiMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiMediumFillIcon],svg[ph-wifi-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89m-46.77 38.94a124 124 0 0 0-146.24 0L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path>`,
})
export class PhWifiMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiMediumLightIcon],svg[ph-wifi-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10m65.73-79.66a122 122 0 0 0-151.46 0a6 6 0 0 0 7.46 9.41a110 110 0 0 1 136.54 0A6 6 0 0 0 200 135a6 6 0 0 0 3.73-10.7Zm-32.2 35.81a74 74 0 0 0-87.06 0a6 6 0 0 0 7.06 9.7a62 62 0 0 1 72.94 0a6 6 0 0 0 8.38-1.32a6 6 0 0 0-1.32-8.38"></svg:path>`,
})
export class PhWifiMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiMediumThinIcon],svg[ph-wifi-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m66.48-78.09a120 120 0 0 0-149 0a4 4 0 0 0 5 6.27a112 112 0 0 1 139 0a4 4 0 0 0 5-6.27m-32.13 35.86a72 72 0 0 0-84.7 0a4 4 0 1 0 4.71 6.46a64 64 0 0 1 75.28 0a4 4 0 1 0 4.71-6.46"></svg:path>`,
})
export class PhWifiMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneIcon],svg[ph-wifi-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhWifiNoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneBoldIcon],svg[ph-wifi-none-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhWifiNoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneDuotoneIcon],svg[ph-wifi-none-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path>`,
})
export class PhWifiNoneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneFillIcon],svg[ph-wifi-none-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z"></svg:path>`,
})
export class PhWifiNoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneLightIcon],svg[ph-wifi-none-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhWifiNoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiNoneThinIcon],svg[ph-wifi-none-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWifiNoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiSlashIcon],svg[ph-wifi-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-52-57.15a60 60 0 0 0-57.41 7.24a8 8 0 1 1-9.42-12.93A75.43 75.43 0 0 1 128 144c1.28 0 2.55 0 3.82.1l-26.92-29.61A108 108 0 0 0 61 135.31A8 8 0 0 1 49.73 134A8 8 0 0 1 51 122.77a124.3 124.3 0 0 1 41.71-21.66L69.37 75.4a155.4 155.4 0 0 0-40.29 24A8 8 0 0 1 18.92 87A172 172 0 0 1 58 62.86L42.08 45.38a8 8 0 1 1 11.84-10.76ZM128 192a12 12 0 1 0 12 12a12 12 0 0 0-12-12M237.08 87A172.3 172.3 0 0 0 106 49.4a8 8 0 1 0 2 15.87A158 158 0 0 1 128 64a156.25 156.25 0 0 1 98.92 35.37A8 8 0 0 0 237.08 87M195 135.31a8 8 0 0 0 11.24-1.3a8 8 0 0 0-1.3-11.24a124.25 124.25 0 0 0-51.73-24.2a8 8 0 1 0-3.21 15.67a108.1 108.1 0 0 1 45 21.07"></svg:path>`,
})
export class PhWifiSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiSlashBoldIcon],svg[ph-wifi-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.88 207.93a12 12 0 1 1-17.76 16.14l-51.34-56.47a56.06 56.06 0 0 0-52.71 7.1a12 12 0 0 1-14.14-19.4a79.35 79.35 0 0 1 41.92-15.12l-19.34-21.28a104.2 104.2 0 0 0-40.06 19.55a12 12 0 0 1-14.9-18.81a128.5 128.5 0 0 1 37.06-20.43l-17.31-19a151.1 151.1 0 0 0-36.68 22.28a12 12 0 1 1-15.23-18.58a175.5 175.5 0 0 1 35-22.38L39.12 48.07a12 12 0 1 1 17.76-16.14ZM128 188a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64.55-49.55a12 12 0 0 0 14.9-18.81A127.3 127.3 0 0 0 170 99.05a12 12 0 0 0-7.87 22.67a103.6 103.6 0 0 1 30.42 16.73m47.06-54.54A176.33 176.33 0 0 0 128 44c-3.94 0-7.93.13-11.86.39a12 12 0 1 0 1.59 24c3.4-.23 6.86-.34 10.27-.34a152.24 152.24 0 0 1 96.38 34.46a12 12 0 1 0 15.23-18.55Z"></svg:path>`,
})
export class PhWifiSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiSlashDuotoneIcon],svg[ph-wifi-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m238.2 87.69l-104 125.43a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21a180.75 180.75 0 0 1 217.78 0a7.79 7.79 0 0 1 1.31 11.21" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l4.55 5A188 188 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l28.1-33.88l33.67 37a8 8 0 1 0 11.84-10.76ZM128 208L24.09 82.74a171.5 171.5 0 0 1 33.82-19.95l99.63 109.6ZM244.35 92.8l-49.42 59.58a8 8 0 0 1-12.32-10.21l49.3-59.43A170.76 170.76 0 0 0 128 48a175 175 0 0 0-32.39 3a8 8 0 1 1-3-15.72A190.6 190.6 0 0 1 128 32a186.67 186.67 0 0 1 113.72 38.1a15.93 15.93 0 0 1 6.17 10.81a15.65 15.65 0 0 1-3.54 11.89"></svg:path></svg:g>`,
})
export class PhWifiSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiSlashFillIcon],svg[ph-wifi-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-33.67-37l-28.1 33.88A15.93 15.93 0 0 1 128 224a15.93 15.93 0 0 1-12.31-5.77L11.65 92.8a15.65 15.65 0 0 1-3.54-11.89a15.93 15.93 0 0 1 6.17-10.81A188.3 188.3 0 0 1 46.6 50.35l-4.29-4.72a8.22 8.22 0 0 1 .13-11.38a8 8 0 0 1 11.48.37Zm34-129.71a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32a191 191 0 0 0-42.49 4.75a4 4 0 0 0-2 6.59L186 156.07a4 4 0 0 0 6-.14l52.35-63.13a15.65 15.65 0 0 0 3.54-11.89Z"></svg:path>`,
})
export class PhWifiSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiSlashLightIcon],svg[ph-wifi-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10M52.44 36a6 6 0 0 0-8.88 8l17.77 19.58a169.4 169.4 0 0 0-41.14 25a6 6 0 1 0 7.62 9.27A157.6 157.6 0 0 1 69.91 73l26.48 29.13a122.2 122.2 0 0 0-44.12 22.19a6 6 0 0 0 7.46 9.41a110 110 0 0 1 45.87-21.47l31.13 34.25A74 74 0 0 0 128 146a73.44 73.44 0 0 0-43.53 14.15A6 6 0 0 0 88 171a5.93 5.93 0 0 0 3.53-1.15a62 62 0 0 1 59.76-7.31L203.56 220a6 6 0 0 0 8.88-8.08Zm183.37 52.55A170.32 170.32 0 0 0 128 50a174 174 0 0 0-21.76 1.38a6 6 0 1 0 1.52 11.9A161 161 0 0 1 128 62a158.26 158.26 0 0 1 100.19 35.82a6 6 0 1 0 7.62-9.27m-39.54 45.2A6 6 0 0 0 200 135a6 6 0 0 0 3.73-10.7a122.26 122.26 0 0 0-50.9-23.81a6 6 0 1 0-2.43 11.75a110 110 0 0 1 45.87 21.51"></svg:path>`,
})
export class PhWifiSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiSlashThinIcon],svg[ph-wifi-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8M51 37.31a4 4 0 0 0-6 5.38l19.72 21.65a167.6 167.6 0 0 0-43.26 25.75a4 4 0 1 0 5.08 6.19a159.4 159.4 0 0 1 43.93-25.62l29.64 32.61a120.1 120.1 0 0 0-46.6 22.64a4 4 0 0 0 5 6.27a112 112 0 0 1 47.85-22.07L142 149.37a72.6 72.6 0 0 0-14-1.37a71.5 71.5 0 0 0-42.36 13.77A4 4 0 0 0 88 169a4.07 4.07 0 0 0 2.36-.76a64 64 0 0 1 62.11-7.38L205 218.69a4 4 0 1 0 5.92-5.38Zm183.54 52.78A168.33 168.33 0 0 0 128 52a171 171 0 0 0-21.5 1.36a4 4 0 0 0 1 7.94A163 163 0 0 1 128 60a160.22 160.22 0 0 1 101.46 36.28a4 4 0 0 0 5.08-6.19m-37 42.09a4 4 0 1 0 5-6.27a120.2 120.2 0 0 0-50.06-23.42a4 4 0 1 0-1.62 7.83a112.2 112.2 0 0 1 46.66 21.86Z"></svg:path>`,
})
export class PhWifiSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiXIcon],svg[ph-wifi-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.66 98.34a8 8 0 0 1-11.32 11.32L200 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L188.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L200 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L211.31 80ZM128 192a12 12 0 1 0 12 12a12 12 0 0 0-12-12m44.71-33.47a76.05 76.05 0 0 0-89.42 0a8 8 0 0 0 9.42 12.94a60 60 0 0 1 70.58 0a8 8 0 1 0 9.42-12.94m-37.09-94.35a8 8 0 1 0 .76-16c-2.78-.13-5.6-.2-8.38-.2A172.35 172.35 0 0 0 18.92 87a8 8 0 1 0 10.16 12.37A156.25 156.25 0 0 1 128 64c2.53 0 5.09.06 7.62.18m-.16 48.07a8 8 0 1 0 1.08-16c-2.83-.19-5.7-.29-8.54-.29a122.74 122.74 0 0 0-77 26.77A8 8 0 0 0 56 137a7.93 7.93 0 0 0 5-1.73A106.87 106.87 0 0 1 128 112c2.48 0 5 .08 7.46.25"></svg:path>`,
})
export class PhWifiXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiXBoldIcon],svg[ph-wifi-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m73-124l15.52-15.51a12 12 0 0 0-17-17L200 63l-15.51-15.49a12 12 0 0 0-17 17L183 80l-15.49 15.51a12 12 0 0 0 17 17L200 97l15.51 15.52a12 12 0 0 0 17-17Zm-41.9 75.3a80 80 0 0 0-94.13 0a12 12 0 1 0 14.13 19.4a56 56 0 0 1 65.87 0a12 12 0 0 0 14.13-19.4M140 56a12 12 0 0 0-12-12A176.27 176.27 0 0 0 16.39 83.91a12 12 0 1 0 15.23 18.55A152.24 152.24 0 0 1 128 68a12 12 0 0 0 12-12m0 48a12 12 0 0 0-12-12a126.66 126.66 0 0 0-79.45 27.64a12 12 0 0 0 14.9 18.81A102.9 102.9 0 0 1 128 116a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhWifiXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiXDuotoneIcon],svg[ph-wifi-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224.39 104.34l-90.24 108.78a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21A179.58 179.58 0 0 1 128 40a182 182 0 0 1 33.06 3a7.94 7.94 0 0 1 4.17 2.21L224 104Z" opacity=".2"></svg:path><svg:path d="M229.66 98.34a8 8 0 0 1-11.32 11.32L200 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L188.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L200 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L211.31 80Zm-33.06 39.5a8 8 0 0 0-11.27 1L128 208L24.09 82.74A170.76 170.76 0 0 1 128 48c2.54 0 5.11.06 7.65.17a8 8 0 0 0 .7-16c-2.77-.12-5.58-.18-8.35-.18A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l57.34-69.12a8 8 0 0 0-1.05-11.27"></svg:path></svg:g>`,
})
export class PhWifiXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiXFillIcon],svg[ph-wifi-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.66 98.34a8 8 0 0 1-11.32 11.32L200 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L188.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L200 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L211.31 80ZM206.85 131a33 33 0 0 1-4.15-3.14a4 4 0 0 0-5.37 0a32 32 0 0 1-45.18-45.18a4 4 0 0 0 0-5.34A32 32 0 0 1 149 38.91a4 4 0 0 0-3.11-6.08Q137 32 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l67.45-81.31a4 4 0 0 0-.91-5.92"></svg:path>`,
})
export class PhWifiXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiXLightIcon],svg[ph-wifi-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10m70.48-124l19.76-19.76a6 6 0 0 0-8.48-8.48L200 71.52l-19.76-19.76a6 6 0 0 0-8.48 8.48L191.52 80l-19.76 19.76a6 6 0 1 0 8.48 8.48L200 88.48l19.76 19.76a6 6 0 0 0 8.48-8.48Zm-36.95 80.15a74 74 0 0 0-87.06 0a6 6 0 0 0 7.06 9.7a62 62 0 0 1 72.94 0a6 6 0 0 0 8.38-1.32a6 6 0 0 0-1.32-8.38m-35.82-98a6 6 0 0 0 .58-12c-2.75-.13-5.54-.2-8.29-.2a170.32 170.32 0 0 0-107.81 38.6a6 6 0 1 0 7.62 9.27A158.26 158.26 0 0 1 128 62c2.56 0 5.16.06 7.71.18Zm-.12 48.08a6 6 0 1 0 .82-12c-2.79-.19-5.62-.29-8.41-.29a120.75 120.75 0 0 0-75.73 26.34a6 6 0 0 0 7.46 9.41A108.78 108.78 0 0 1 128 110c2.52 0 5.08.09 7.59.26Z"></svg:path>`,
})
export class PhWifiXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWifiXThinIcon],svg[ph-wifi-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m69.66-124l21.17-21.17a4 4 0 1 0-5.66-5.66L200 74.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L194.34 80l-21.17 21.17a4 4 0 0 0 5.66 5.66L200 85.66l21.17 21.17a4 4 0 1 0 5.66-5.66Zm-35.31 81.77a72 72 0 0 0-84.71 0a4 4 0 0 0 4.71 6.46a64.05 64.05 0 0 1 75.29 0a4 4 0 1 0 4.71-6.46M135.81 60.19a4 4 0 1 0 .38-8c-2.71-.13-5.47-.2-8.19-.2a168.33 168.33 0 0 0-106.54 38.1a4 4 0 1 0 5.08 6.19A160.22 160.22 0 0 1 128 60c2.59 0 5.22.06 7.81.19m-.08 48.07a4 4 0 1 0 .54-8c-2.74-.19-5.52-.28-8.27-.28a118.72 118.72 0 0 0-74.48 25.91a4 4 0 0 0 5 6.27A110.84 110.84 0 0 1 128 108c2.57 0 5.17.09 7.73.26"></svg:path>`,
})
export class PhWifiXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindIcon],svg[ph-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32m-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64"></svg:path>`,
})
export class PhWindIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindBoldIcon],svg[ph-wind-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 104a12 12 0 0 1 0-24h96a12 12 0 0 0 0-24a15.07 15.07 0 0 0-10.26 4.45a12 12 0 0 1-17-16.9A39.34 39.34 0 0 1 120 32a36 36 0 0 1 0 72Zm184-36a39.34 39.34 0 0 0-27.3 11.55a12 12 0 0 0 17 16.9A15.07 15.07 0 0 1 208 92a12 12 0 0 1 0 24H32a12 12 0 0 0 0 24h176a36 36 0 0 0 0-72m-56 84H40a12 12 0 0 0 0 24h112a12 12 0 0 1 0 24a15.1 15.1 0 0 1-10.27-4.45a12 12 0 1 0-17 16.9A39.34 39.34 0 0 0 152 224a36 36 0 0 0 0-72"></svg:path>`,
})
export class PhWindBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindDuotoneIcon],svg[ph-wind-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M120 96a24 24 0 1 1 24-24a24 24 0 0 1-24 24m88-16a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-56 80a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32m-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64"></svg:path></svg:g>`,
})
export class PhWindDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindFillIcon],svg[ph-wind-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 104H24a8 8 0 0 1-8-8.53A8.17 8.17 0 0 1 24.27 88H112a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47H92.29a4 4 0 0 1-4-4.58A32 32 0 1 1 120 104m119.92-2.29a32 32 0 0 0-63.59-2.29a4 4 0 0 0 4 4.58h19.44a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H32.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h176a32 32 0 0 0 31.92-34.29M152 152H40.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h103.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-19.69a4 4 0 0 0-4 4.58A32 32 0 1 0 152 152"></svg:path>`,
})
export class PhWindFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindLightIcon],svg[ph-wind-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 184a30 30 0 0 1-30 30c-12.9 0-25.36-8.38-29.63-19.92a6 6 0 0 1 11.26-4.16C136.13 196.69 144.2 202 152 202a18 18 0 0 0 0-36H40a6 6 0 0 1 0-12h112a30 30 0 0 1 30 30M150 72a30 30 0 0 0-30-30c-12.9 0-25.36 8.38-29.63 19.92a6 6 0 1 0 11.26 4.16C104.13 59.31 112.2 54 120 54a18 18 0 0 1 0 36H24a6 6 0 0 0 0 12h96a30 30 0 0 0 30-30m58 2c-12.9 0-25.36 8.38-29.63 19.92a6 6 0 1 0 11.26 4.16C192.13 91.31 200.2 86 208 86a18 18 0 0 1 0 36H32a6 6 0 0 0 0 12h176a30 30 0 0 0 0-60"></svg:path>`,
})
export class PhWindLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindThinIcon],svg[ph-wind-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 184a28 28 0 0 1-28 28c-12.09 0-23.76-7.83-27.75-18.61a4 4 0 1 1 7.5-2.78C134.58 198.24 143.28 204 152 204a20 20 0 0 0 0-40H40a4 4 0 0 1 0-8h112a28 28 0 0 1 28 28M148 72a28 28 0 0 0-28-28c-12.09 0-23.76 7.83-27.75 18.61a4 4 0 0 0 7.5 2.78C102.58 57.76 111.28 52 120 52a20 20 0 0 1 0 40H24a4 4 0 0 0 0 8h96a28 28 0 0 0 28-28m60 4c-12.09 0-23.76 7.83-27.75 18.61a4 4 0 1 0 7.5 2.78C190.58 89.76 199.28 84 208 84a20 20 0 0 1 0 40H32a4 4 0 0 0 0 8h176a28 28 0 0 0 0-56"></svg:path>`,
})
export class PhWindThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindmillIcon],svg[ph-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 224h-41.06l-6.3-44.12l3.24 1.91a16 16 0 0 0 21.91-5.67l12-20.34a16 16 0 0 0-5.67-21.91l-35-20.61l40.69-69.13a16 16 0 0 0-5.67-21.91l-20.34-12a16 16 0 0 0-21.91 5.67l-20.61 35l-69.16-40.67a16 16 0 0 0-21.91 5.67l-12 20.33a16 16 0 0 0 5.67 21.92l35 20.61l-40.67 69.13a16 16 0 0 0 5.67 21.91l20.34 12a15.57 15.57 0 0 0 10.58 2L73.06 224H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16m-24-76.34L188 168l-69.13-40.69l12-20.35ZM179.66 24L200 36l-40.69 69.14L139 93.17ZM56 44.35L68 24l69.14 40.7l-12 20.35ZM76.34 168L56 156l40.69-69.14l20.36 12Zm12.88 56L98 162.8l12.77-21.7L159 169.5l7.79 54.5Z"></svg:path>`,
})
export class PhWindmillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindmillBoldIcon],svg[ph-windmill-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 220h-37.59l-4.72-33a20 20 0 0 0 23.55-8.83l12-20.33a20 20 0 0 0-7.09-27.4l-31.57-18.58l38.66-65.68a20 20 0 0 0-7.08-27.39l-20.34-12a20 20 0 0 0-27.39 7.09l-18.59 31.55L78.15 6.77a20 20 0 0 0-27.39 7.09l-12 20.33a20 20 0 0 0 7.09 27.4l31.58 18.58l-38.66 65.68a20 20 0 0 0 7.08 27.39l20.34 12a19.8 19.8 0 0 0 8 2.65L69.59 220H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24m-37.41-57.47l-62.26-36.64l7.93-13.46l62.26 36.65Zm-5.52-133l13.46 7.93l-36.64 62.21l-13.46-7.92Zm-111.66 0l62.26 36.64l-7.93 13.46l-62.26-36.7Zm-7.94 125.06l36.64-62.25l13.46 7.92l-36.64 62.26Zm40.34 9.56l10.35-17.57L155.3 172l6.86 48H93.84Z"></svg:path>`,
})
export class PhWindmillBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindmillDuotoneIcon],svg[ph-windmill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 232H80l10.27-71.89l17.63-30l58.46 34.41Z" opacity=".2"></svg:path><svg:path d="M224 224h-41.06l-6.3-44.12l3.24 1.91a16 16 0 0 0 21.91-5.67l12-20.34a16 16 0 0 0-5.67-21.91l-35-20.61l40.69-69.13a16 16 0 0 0-5.67-21.91l-20.34-12a16 16 0 0 0-21.91 5.67l-20.61 35l-69.16-40.67a16 16 0 0 0-21.91 5.67l-12 20.33a16 16 0 0 0 5.67 21.92l35 20.61l-40.67 69.13a16 16 0 0 0 5.67 21.91l20.34 12a15.57 15.57 0 0 0 10.58 2L73.06 224H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16m-24-76.34L188 168l-69.13-40.69l12-20.35ZM179.66 24L200 36l-40.69 69.14L139 93.17ZM56 44.35L68 24l69.14 40.7l-12 20.35ZM76.34 168L56 156l40.69-69.14l20.36 12Zm12.88 56L98 162.8l12.77-21.7L159 169.5l7.79 54.5Z"></svg:path></svg:g>`,
})
export class PhWindmillDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindmillFillIcon],svg[ph-windmill-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 231.47a8.17 8.17 0 0 0-8.25-7.47h-40.81l-6.3-44.12l3.24 1.91a16 16 0 0 0 21.91-5.67l11.81-20a16.5 16.5 0 0 0 2.11-11.49a15.92 15.92 0 0 0-7.6-10.74L148.93 99a8.18 8.18 0 0 1-3.33-10.63a8 8 0 0 1 11.21-3.3l20.95 12.33a4 4 0 0 0 5.48-1.4l30.55-51.9a16 16 0 0 0-5.67-21.92l-20.34-12a16 16 0 0 0-21.91 5.67l-35 59.42a8 8 0 0 1-11.79 2.27A8.13 8.13 0 0 1 117.21 67l12.23-20.78a4 4 0 0 0-1.44-5.46L76.12 10.22a16 16 0 0 0-21.91 5.67l-11.81 20a16.47 16.47 0 0 0-2.11 11.48a16 16 0 0 0 7.6 10.75L107.08 93a8.16 8.16 0 0 1 3.47 10.3a8 8 0 0 1-11.36 3.62l-21-12.34A4 4 0 0 0 72.76 96l-30.55 51.9a16 16 0 0 0 5.67 21.91l20.34 12a15.57 15.57 0 0 0 10.58 2L73.06 224H32.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h192a8 8 0 0 0 8-8.53M89.22 224L98 162.8l12.77-21.7L125 116.93a8.18 8.18 0 0 1 10.62-3.33a8 8 0 0 1 3.3 11.21l-12.33 21a4 4 0 0 0 1.42 5.47l31 18.25l7.77 54.47Z"></svg:path>`,
})
export class PhWindmillFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindmillLightIcon],svg[ph-windmill-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 226h-42.8l-7.13-49.95l6.82 4a14 14 0 0 0 19.18-4.95l12-20.34a14 14 0 0 0-5-19.18L170.36 114l41.7-70.86a14 14 0 0 0-5-19.17L186.77 12a14 14 0 0 0-19.18 5L146 53.65L75.11 11.94a14 14 0 0 0-19.18 5l-12 20.34a14 14 0 0 0 5 19.17L85.64 78l-41.7 70.85a14 14 0 0 0 5 19.18l20.33 12a13.9 13.9 0 0 0 7.05 1.97a13.7 13.7 0 0 0 3.53-.46c.46-.12.91-.26 1.36-.42L74.8 226H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12m-22.06-78.84a2 2 0 0 1-.22 1.51l-12 20.34a2 2 0 0 1-2.75.71L116.12 128l14-23.8L201 145.93a2 2 0 0 1 .94 1.23M177.93 23a2 2 0 0 1 1.23-.92a2 2 0 0 1 1.51.21l20.34 12a2 2 0 0 1 .71 2.76L160 107.88l-23.81-14ZM54.06 44.85a2 2 0 0 1 .22-1.52L66.27 23a2 2 0 0 1 2.73-.72L139.88 64l-14 23.8L55 46.07a2 2 0 0 1-.94-1.22M78.07 169a2 2 0 0 1-2.74.71L55 157.73a2 2 0 0 1-.71-2.75L96 84.12l23.81 14Zm18-6.88l14-23.77l50.8 29.9l8.21 57.75H86.92Z"></svg:path>`,
})
export class PhWindmillLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindmillThinIcon],svg[ph-windmill-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 228h-44.53l-8-55.78l10.4 6.12a12 12 0 0 0 16.45-4.25l12-20.34a12 12 0 0 0-4.26-16.43l-38.46-22.64l42.74-72.58a12 12 0 0 0-4.25-16.44l-20.34-12a12 12 0 0 0-16.44 4.25l-22.63 38.47L74.1 13.66a12 12 0 0 0-16.45 4.25l-12 20.34a12 12 0 0 0 4.26 16.44l38.47 22.64l-42.72 72.58a12 12 0 0 0 4.25 16.44l20.34 12a12 12 0 0 0 13.5-.91L76.53 228H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8m-20.13-81.34a3.93 3.93 0 0 1-.43 3l-12 20.34a4 4 0 0 1-5.49 1.42l-72.58-42.72l16-27.25L202 144.21a4 4 0 0 1 1.87 2.45M176.21 22a4 4 0 0 1 5.48-1.42l20.34 12a4 4 0 0 1 1.41 5.42l-42.71 72.58l-27.25-16ZM52.13 45.35a3.92 3.92 0 0 1 .43-3L64.55 22A4 4 0 0 1 70 20.56l72.58 42.72l-16 27.25L54 47.79a4 4 0 0 1-1.87-2.44m25.21 126.52a4 4 0 0 1-3-.42L54 159.46a4 4 0 0 1-1.41-5.5l42.68-72.58l27.25 16L79.79 170a4 4 0 0 1-2.45 1.87m16.78-10.41l15.2-25.84L162.68 167l8.71 61H84.61Z"></svg:path>`,
})
export class PhWindmillThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindowsLogoIcon],svg[ph-windows-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136h-80a8 8 0 0 0-8 8v57.45a8 8 0 0 0 6.57 7.88l80 14.54a7.6 7.6 0 0 0 1.43.13a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m-8 70.41l-64-11.63V152h64ZM96 136H32a8 8 0 0 0-8 8v40a8 8 0 0 0 6.57 7.87l64 11.64a8.5 8.5 0 0 0 1.43.13a8 8 0 0 0 8-8V144a8 8 0 0 0-8-8m-8 50.05l-48-8.73V152h48ZM213.13 33.86a8 8 0 0 0-6.56-1.73l-80 14.55a8 8 0 0 0-6.57 7.87V112a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8V40a8 8 0 0 0-2.87-6.14M200 104h-64V61.22l64-11.63Zm-98.87-49.78a8 8 0 0 0-6.56-1.73l-64 11.64A8 8 0 0 0 24 72v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V60.36a8 8 0 0 0-2.87-6.14M88 104H40V78.68L88 70Z"></svg:path>`,
})
export class PhWindowsLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindowsLogoBoldIcon],svg[ph-windows-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M99.69 51.88a12 12 0 0 0-9.84-2.6l-60 10.91A12 12 0 0 0 20 72v36a12 12 0 0 0 12 12h60a12 12 0 0 0 12-12V61.09a12 12 0 0 0-4.31-9.21M80 96H44V82l36-6.54Zm135.69-65.21a12 12 0 0 0-9.84-2.6l-76 13.81A12 12 0 0 0 120 53.82V108a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12V40a12 12 0 0 0-4.31-9.21M196 96h-52V63.83l52-9.45ZM92 136H32a12 12 0 0 0-12 12v36a12 12 0 0 0 9.85 11.81l60 10.91A12 12 0 0 0 104 194.91V148a12 12 0 0 0-12-12m-12 44.53L44 174v-14h36ZM208 136h-76a12 12 0 0 0-12 12v54.18a12 12 0 0 0 9.85 11.82l76 13.82A12 12 0 0 0 220 216v-68a12 12 0 0 0-12-12m-12 65.62l-52-9.45V160h52Z"></svg:path>`,
})
export class PhWindowsLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindowsLogoDuotoneIcon],svg[ph-windows-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 144h80v72l-80-14.55Zm-96 40l64 11.64V144H32Zm96-129.45V112h80V40ZM32 112h64V60.36L32 72Z" opacity=".2"></svg:path><svg:path d="M208 136h-80a8 8 0 0 0-8 8v57.45a8 8 0 0 0 6.57 7.88l80 14.54a7.6 7.6 0 0 0 1.43.13a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m-8 70.41l-64-11.63V152h64ZM96 136H32a8 8 0 0 0-8 8v40a8 8 0 0 0 6.57 7.87l64 11.64a8.5 8.5 0 0 0 1.43.13a8 8 0 0 0 8-8V144a8 8 0 0 0-8-8m-8 50.05l-48-8.73V152h48ZM213.13 33.86a8 8 0 0 0-6.56-1.73l-80 14.55a8 8 0 0 0-6.57 7.87V112a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8V40a8 8 0 0 0-2.87-6.14M200 104h-64V61.22l64-11.63Zm-98.87-49.78a8 8 0 0 0-6.56-1.73l-64 11.64A8 8 0 0 0 24 72v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V60.36a8 8 0 0 0-2.87-6.14M88 104H40V78.68L88 70Z"></svg:path></svg:g>`,
})
export class PhWindowsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindowsLogoFillIcon],svg[ph-windows-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 144v51.64a8 8 0 0 1-8 8a8.5 8.5 0 0 1-1.43-.13l-64-11.64A8 8 0 0 1 24 184v-40a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8m-2.87-89.78a8 8 0 0 0-6.56-1.73l-64 11.64A8 8 0 0 0 24 72v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V60.36a8 8 0 0 0-2.87-6.14M208 136h-80a8 8 0 0 0-8 8v57.45a8 8 0 0 0 6.57 7.88l80 14.54a7.6 7.6 0 0 0 1.43.13a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m5.13-102.14a8 8 0 0 0-6.56-1.73l-80 14.55a8 8 0 0 0-6.57 7.87V112a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8V40a8 8 0 0 0-2.87-6.14"></svg:path>`,
})
export class PhWindowsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindowsLogoLightIcon],svg[ph-windows-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 138h-80a6 6 0 0 0-6 6v57.45a6 6 0 0 0 4.93 5.91l80 14.54a5.5 5.5 0 0 0 1.07.1a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 70.81l-68-12.36V150h68ZM96 138H32a6 6 0 0 0-6 6v40a6 6 0 0 0 4.93 5.9l64 11.64a6.4 6.4 0 0 0 1.07.1a6 6 0 0 0 6-6V144a6 6 0 0 0-6-6m-6 50.45L38 179v-29h52ZM211.84 35.39a6 6 0 0 0-4.91-1.29l-80 14.54a6 6 0 0 0-4.93 5.91V112a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6V40a6 6 0 0 0-2.16-4.61M202 106h-68V59.55l68-12.36ZM99.84 55.76a6 6 0 0 0-4.91-1.3l-64 11.64A6 6 0 0 0 26 72v40a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V60.36a6 6 0 0 0-2.16-4.6M90 106H38V77l52-9.46Z"></svg:path>`,
})
export class PhWindowsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWindowsLogoThinIcon],svg[ph-windows-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140h-80a4 4 0 0 0-4 4v57.45a4 4 0 0 0 3.28 3.94l80 14.55a4.4 4.4 0 0 0 .72.06a4 4 0 0 0 2.56-.93A4 4 0 0 0 212 216v-72a4 4 0 0 0-4-4m-4 71.21l-72-13.09V148h72ZM96 140H32a4 4 0 0 0-4 4v40a4 4 0 0 0 3.28 3.94l64 11.63a3.5 3.5 0 0 0 .72.07a4 4 0 0 0 4-4V144a4 4 0 0 0-4-4m-4 50.84l-56-10.18V148h56ZM210.56 36.93a4 4 0 0 0-3.28-.87l-80 14.55a4 4 0 0 0-3.28 3.94V112a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4V40a4 4 0 0 0-1.44-3.07M204 108h-72V57.88l72-13.09ZM95.28 56.43l-64 11.63A4 4 0 0 0 28 72v40a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V60.36a4 4 0 0 0-4.72-3.93M92 108H36V75.34l56-10.18Z"></svg:path>`,
})
export class PhWindowsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWineIcon],svg[ph-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.33 103.67l-21.77-73.93a8 8 0 0 0-7.67-5.74H80.11a8 8 0 0 0-7.67 5.74l-21.77 73.93a63.46 63.46 0 0 0 17.42 64.67A87.4 87.4 0 0 0 120 191.63V232H88a8 8 0 1 0 0 16h80a8 8 0 1 0 0-16h-32v-40.37a87.4 87.4 0 0 0 51.91-23.29a63.46 63.46 0 0 0 17.42-64.67M86.09 40h83.82L190 108.19c.09.3.17.6.25.9c-21.42 7.68-45.54-1.6-58.63-8.23c-25.19-12.75-45.19-14.37-59.94-11.93ZM177 156.65a71.69 71.69 0 0 1-98 0a47.55 47.55 0 0 1-13-48.46l.45-1.52c12-4.06 31.07-5.14 57.93 8.47c11.15 5.65 29.16 12.85 48.43 12.85a68.6 68.6 0 0 0 19.05-2.6A47.2 47.2 0 0 1 177 156.65"></svg:path>`,
})
export class PhWineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWineBoldIcon],svg[ph-wine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.17 102.54l-21.78-73.93a12 12 0 0 0-11.5-8.61H80.11a12 12 0 0 0-11.5 8.61l-21.78 73.93a67.45 67.45 0 0 0 18.53 68.72A91.32 91.32 0 0 0 116 195.2V228H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-32.8a91.32 91.32 0 0 0 50.65-23.94a67.45 67.45 0 0 0 18.52-68.72M89.08 44h77.84l18.38 62.41c-10.88 2.8-28.05 3-51.88-9.12C110.68 85.78 91.92 83 77.24 84.22ZM128 172a67.5 67.5 0 0 1-46.26-18.27a43.55 43.55 0 0 1-12-43.89c18.44-5.33 38.64 1.66 52.87 8.87c11.55 5.85 30.18 13.28 50.26 13.28a74 74 0 0 0 14.29-1.35a43.2 43.2 0 0 1-12.87 23.09A67.5 67.5 0 0 1 128 172"></svg:path>`,
})
export class PhWineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWineDuotoneIcon],svg[ph-wine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M182.48 162.5a79.77 79.77 0 0 1-109 0a55.86 55.86 0 0 1-15.18-56.57l1.57-5.31C72.49 95.21 95.2 91.4 128 108c35.86 18.16 59.67 11.89 71.42 5.84a55.72 55.72 0 0 1-16.94 48.66" opacity=".2"></svg:path><svg:path d="m205.33 103.67l-21.77-73.93a8 8 0 0 0-7.67-5.74H80.11a8 8 0 0 0-7.67 5.74l-21.77 73.93a63.46 63.46 0 0 0 17.42 64.67A87.4 87.4 0 0 0 120 191.63V232H88a8 8 0 1 0 0 16h80a8 8 0 1 0 0-16h-32v-40.37a87.4 87.4 0 0 0 51.91-23.29a63.48 63.48 0 0 0 17.42-64.67M86.09 40h83.82L190 108.19c.09.3.17.6.25.9c-21.42 7.68-45.54-1.6-58.63-8.23c-25.19-12.75-45.19-14.37-59.94-11.93ZM177 156.65a71.69 71.69 0 0 1-98 0a47.55 47.55 0 0 1-13-48.46l.45-1.52c12-4.06 31.07-5.14 57.93 8.47c11.15 5.65 29.16 12.85 48.43 12.85a68.6 68.6 0 0 0 19.05-2.6A47.2 47.2 0 0 1 177 156.65"></svg:path></svg:g>`,
})
export class PhWineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWineFillIcon],svg[ph-wine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.33 103.67l-21.77-73.93a8 8 0 0 0-7.67-5.74H80.11a8 8 0 0 0-7.67 5.74l-21.77 73.93a63.46 63.46 0 0 0 17.42 64.67A87.4 87.4 0 0 0 120 191.63V232H88a8 8 0 1 0 0 16h80a8 8 0 1 0 0-16h-32v-40.37a87.4 87.4 0 0 0 51.91-23.29a63.48 63.48 0 0 0 17.42-64.67M86.09 40h83.82L190 108.19c.09.3.17.6.25.9c-21.42 7.68-45.54-1.6-58.63-8.23c-25.19-12.75-45.19-14.37-59.94-11.93Z"></svg:path>`,
})
export class PhWineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWineLightIcon],svg[ph-wine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.41 104.23L181.64 30.3a6 6 0 0 0-5.75-4.3H80.11a6 6 0 0 0-5.75 4.3l-21.77 73.93a61.48 61.48 0 0 0 16.87 62.65A85.35 85.35 0 0 0 122 189.77V234H88a6 6 0 1 0 0 12h80a6 6 0 1 0 0-12h-34v-44.23a85.38 85.38 0 0 0 52.54-22.89a61.48 61.48 0 0 0 16.87-62.65M84.6 38h86.8l20.51 69.63c.26.9.5 1.8.71 2.7c-22.54 9.07-48.17-.73-61.91-7.68c-26.61-13.48-47.23-14.31-61.88-11.13Zm93.75 120.11a73.67 73.67 0 0 1-100.7 0a49.53 49.53 0 0 1-13.56-50.48l.74-2.51c12.34-4.46 32.26-6.05 60.46 8.23c11 5.55 28.65 12.64 47.52 12.64a65.6 65.6 0 0 0 21.19-3.37a49.22 49.22 0 0 1-15.65 35.49"></svg:path>`,
})
export class PhWineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWineThinIcon],svg[ph-wine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m201.5 104.8l-21.78-73.93a4 4 0 0 0-3.83-2.87H80.11a4 4 0 0 0-3.83 2.87L54.5 104.8a59.51 59.51 0 0 0 16.32 60.62A83.4 83.4 0 0 0 124 187.91V236H88a4 4 0 1 0 0 8h80a4 4 0 1 0 0-8h-36v-48.09a83.4 83.4 0 0 0 53.18-22.49a59.51 59.51 0 0 0 16.32-60.62M83.1 36h89.8l20.93 71.06c.43 1.49.8 3 1.1 4.47c-23.64 10.47-50.76.18-65.12-7.1c-28.22-14.29-49.48-14.1-63.88-10.14Zm96.62 123.57a75.68 75.68 0 0 1-103.44 0a51.53 51.53 0 0 1-14.11-52.51l1-3.46c12.66-4.87 33.45-7 63 8C137 117 154.33 124 172.8 124a62.8 62.8 0 0 0 23.2-4.22a51.26 51.26 0 0 1-16.28 39.79"></svg:path>`,
})
export class PhWineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWrenchIcon],svg[ph-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.76 69a8 8 0 0 0-12.84-2.88l-40.3 37.19l-17.23-3.7l-3.7-17.23l37.19-40.3A8 8 0 0 0 187 29.24A72 72 0 0 0 88 96a72.3 72.3 0 0 0 6 28.94L33.79 177c-.15.12-.29.26-.43.39a32 32 0 0 0 45.26 45.26c.13-.13.27-.28.39-.42L131.06 162A72 72 0 0 0 232 96a71.6 71.6 0 0 0-5.24-27M160 152a56.14 56.14 0 0 1-27.07-7a8 8 0 0 0-9.92 1.77l-55.9 64.74a16 16 0 0 1-22.62-22.62L109.18 133a8 8 0 0 0 1.77-9.93a56 56 0 0 1 58.36-82.31l-31.2 33.81a8 8 0 0 0-1.94 7.1l5.66 26.33a8 8 0 0 0 6.14 6.14l26.35 5.66a8 8 0 0 0 7.1-1.94l33.81-31.2A56.06 56.06 0 0 1 160 152"></svg:path>`,
})
export class PhWrenchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWrenchBoldIcon],svg[ph-wrench-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.47 67.5a12 12 0 0 0-19.26-4.32L172.43 99l-12.68-2.72L157 83.57l35.79-38.78a12 12 0 0 0-4.32-19.26a76.07 76.07 0 0 0-100.06 96.11l-57.49 52.54a5 5 0 0 0-.39.38a36 36 0 0 0 50.91 50.91l.38-.39l52.54-57.49A76.05 76.05 0 0 0 230.47 67.5M160 148a51.5 51.5 0 0 1-23.35-5.52a12 12 0 0 0-14.26 2.62l-58.08 63.56a12 12 0 0 1-17-17l63.55-58.07a12 12 0 0 0 2.62-14.26A51.5 51.5 0 0 1 108 96a52.06 52.06 0 0 1 52-52h.89l-25.72 27.87a12 12 0 0 0-2.91 10.65l5.66 26.35a12 12 0 0 0 9.21 9.21l26.35 5.66a12 12 0 0 0 10.65-2.91L212 95.12v.89A52.06 52.06 0 0 1 160 148"></svg:path>`,
})
export class PhWrenchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWrenchDuotoneIcon],svg[ph-wrench-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 96a64 64 0 0 1-94.94 56L73 217a24 24 0 0 1-34-34l65-56.06a64 64 0 0 1 80-90.29L144 80l5.66 26.34L176 112l43.35-40A63.8 63.8 0 0 1 224 96" opacity=".2"></svg:path><svg:path d="M226.76 69a8 8 0 0 0-12.84-2.88l-40.3 37.19l-17.23-3.7l-3.7-17.23l37.19-40.3A8 8 0 0 0 187 29.24A72 72 0 0 0 88 96a72.3 72.3 0 0 0 6 28.94L33.79 177c-.15.12-.29.26-.43.39a32 32 0 0 0 45.26 45.26c.13-.13.27-.28.39-.42L131.06 162A72 72 0 0 0 232 96a71.6 71.6 0 0 0-5.24-27M160 152a56.14 56.14 0 0 1-27.07-7a8 8 0 0 0-9.92 1.77l-55.9 64.74a16 16 0 0 1-22.62-22.62L109.18 133a8 8 0 0 0 1.77-9.93a56 56 0 0 1 58.36-82.31l-31.2 33.81a8 8 0 0 0-1.94 7.1l5.66 26.33a8 8 0 0 0 6.14 6.14l26.35 5.66a8 8 0 0 0 7.1-1.94l33.81-31.2A56.06 56.06 0 0 1 160 152"></svg:path></svg:g>`,
})
export class PhWrenchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWrenchFillIcon],svg[ph-wrench-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 96a72 72 0 0 1-100.94 66L79 222.22c-.12.14-.26.29-.39.42a32 32 0 0 1-45.26-45.26c.14-.13.28-.27.43-.39L94 124.94a72.07 72.07 0 0 1 83.54-98.78a8 8 0 0 1 3.93 13.19L144 80l5.66 26.35L176 112l40.65-37.52a8 8 0 0 1 13.19 3.93A72.6 72.6 0 0 1 232 96"></svg:path>`,
})
export class PhWrenchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWrenchLightIcon],svg[ph-wrench-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.91 69.75a6 6 0 0 0-9.63-2.16l-41.07 37.9l-19.51-4.19l-4.19-19.51l37.9-41.07a6 6 0 0 0-2.16-9.63a70 70 0 0 0-89.77 94.39l-61.39 53c-.11.09-.21.19-.32.3a30 30 0 0 0 42.43 42.45c.11-.11.21-.21.3-.32l53-61.39a70 70 0 0 0 94.39-89.77ZM160 154a58 58 0 0 1-28-7.22a6 6 0 0 0-7.45 1.33l-55.98 64.77a18 18 0 0 1-25.45-25.45l64.76-55.94a6 6 0 0 0 1.32-7.49a58 58 0 0 1 64-84.53l-33.62 36.46a6 6 0 0 0-1.45 5.33l5.65 26.35a6 6 0 0 0 4.61 4.61l26.35 5.65a6 6 0 0 0 5.33-1.45l36.42-33.62A58.06 58.06 0 0 1 160 154"></svg:path>`,
})
export class PhWrenchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWrenchThinIcon],svg[ph-wrench-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.05 70.5a4 4 0 0 0-6.42-1.44l-41.82 38.6L153 103l-4.68-21.79l38.6-41.82a4 4 0 0 0-1.44-6.43A68 68 0 0 0 98.94 126L36.4 180l-.21.2a28 28 0 0 0 39.6 39.6l.2-.21l54-62.54A68 68 0 0 0 228 96a67.5 67.5 0 0 0-4.95-25.5M160 156a60 60 0 0 1-29-7.47a4 4 0 0 0-5 .89l-56 64.83A20 20 0 0 1 41.75 186l64.82-56a4 4 0 0 0 .89-5a60 60 0 0 1 69.46-86.59l-35.87 38.88a4 4 0 0 0-1 3.55l5.66 26.35a4 4 0 0 0 3.07 3.07l26.35 5.66a4 4 0 0 0 3.55-1l38.87-35.87A60.05 60.05 0 0 1 160 156"></svg:path>`,
})
export class PhWrenchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXIcon],svg[ph-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></svg:path>`,
})
export class PhXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXBoldIcon],svg[ph-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"></svg:path>`,
})
export class PhXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXCircleIcon],svg[ph-x-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhXCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXCircleBoldIcon],svg[ph-x-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.49 104.49L145 128l23.52 23.51a12 12 0 0 1-17 17L128 145l-23.51 23.52a12 12 0 0 1-17-17L111 128l-23.49-23.51a12 12 0 0 1 17-17L128 111l23.51-23.52a12 12 0 0 1 17 17ZM236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhXCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXCircleDuotoneIcon],svg[ph-x-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path></svg:g>`,
})
export class PhXCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXCircleFillIcon],svg[ph-x-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 130.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></svg:path>`,
})
export class PhXCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXCircleLightIcon],svg[ph-x-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.24 100.24L136.48 128l27.76 27.76a6 6 0 1 1-8.48 8.48L128 136.48l-27.76 27.76a6 6 0 0 1-8.48-8.48L119.52 128l-27.76-27.76a6 6 0 0 1 8.48-8.48L128 119.52l27.76-27.76a6 6 0 0 1 8.48 8.48M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhXCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXCircleThinIcon],svg[ph-x-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.83 98.83L133.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66L128 133.66l-29.17 29.17a4 4 0 0 1-5.66-5.66L122.34 128L93.17 98.83a4 4 0 0 1 5.66-5.66L128 122.34l29.17-29.17a4 4 0 1 1 5.66 5.66M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhXCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXDuotoneIcon],svg[ph-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></svg:path></svg:g>`,
})
export class PhXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXFillIcon],svg[ph-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-26.34 138.34a8 8 0 0 1-11.32 11.32L128 139.31l-42.34 42.35a8 8 0 0 1-11.32-11.32L116.69 128L74.34 85.66a8 8 0 0 1 11.32-11.32L128 116.69l42.34-42.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></svg:path>`,
})
export class PhXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXLightIcon],svg[ph-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"></svg:path>`,
})
export class PhXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXLogoIcon],svg[ph-x-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"></svg:path>`,
})
export class PhXLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXLogoBoldIcon],svg[ph-x-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.12 209.56l-61-95.8l59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84l-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8l-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84l37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44M166.59 204L69.86 52h19.55l96.73 152Z"></svg:path>`,
})
export class PhXLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXLogoDuotoneIcon],svg[ph-x-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 216h-48L48 40h48Z" opacity=".2"></svg:path><svg:path d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"></svg:path></svg:g>`,
})
export class PhXLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXLogoFillIcon],svg[ph-x-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215 219.85a8 8 0 0 1-7 4.15h-48a8 8 0 0 1-6.75-3.71l-40.49-63.63l-58.84 64.72a8 8 0 0 1-11.84-10.76l61.77-68l-62.6-98.32A8 8 0 0 1 48 32h48a8 8 0 0 1 6.75 3.71l40.49 63.63l58.84-64.72a8 8 0 0 1 11.84 10.76l-61.77 67.95l62.6 98.38a8 8 0 0 1 .25 8.14"></svg:path>`,
})
export class PhXLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXLogoLightIcon],svg[ph-x-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.06 212.78l-63.42-99.66L212.44 44a6 6 0 1 0-8.88-8L143 102.62l-41.9-65.84A6 6 0 0 0 96 34H48a6 6 0 0 0-5.06 9.22l63.42 99.66L43.56 212a6 6 0 0 0 8.88 8L113 153.38l41.9 65.84A6 6 0 0 0 160 222h48a6 6 0 0 0 5.06-9.22M163.29 210L58.93 46h33.78l104.36 164Z"></svg:path>`,
})
export class PhXLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXLogoThinIcon],svg[ph-x-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.37 213.85L147.13 112.9L211 42.69a4 4 0 0 0-6-5.38l-62.32 68.59l-43.3-68.05A4 4 0 0 0 96 36H48a4 4 0 0 0-3.37 6.15l64.24 100.95L45 213.31a4 4 0 1 0 6 5.38l62.36-68.59l43.3 68.05A4 4 0 0 0 160 220h48a4 4 0 0 0 3.37-6.15M162.2 212L55.29 44H93.8l106.91 168Z"></svg:path>`,
})
export class PhXLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXSquareIcon],svg[ph-x-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-106.34L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhXSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXSquareBoldIcon],svg[ph-x-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM87.51 151.51L111 128l-23.49-23.51a12 12 0 0 1 17-17L128 111l23.51-23.52a12 12 0 0 1 17 17L145 128l23.52 23.51a12 12 0 0 1-17 17L128 145l-23.51 23.52a12 12 0 0 1-17-17Z"></svg:path>`,
})
export class PhXSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXSquareDuotoneIcon],svg[ph-x-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-106.34L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhXSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXSquareFillIcon],svg[ph-x-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-42.34 122.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></svg:path>`,
})
export class PhXSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXSquareLightIcon],svg[ph-x-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-45.76-107.76L136.48 128l27.76 27.76a6 6 0 1 1-8.48 8.48L128 136.48l-27.76 27.76a6 6 0 0 1-8.48-8.48L119.52 128l-27.76-27.76a6 6 0 0 1 8.48-8.48L128 119.52l27.76-27.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhXSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXSquareThinIcon],svg[ph-x-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM162.83 98.83L133.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66L128 133.66l-29.17 29.17a4 4 0 0 1-5.66-5.66L122.34 128L93.17 98.83a4 4 0 0 1 5.66-5.66L128 122.34l29.17-29.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhXSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phXThinIcon],svg[ph-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 197.17a4 4 0 0 1-5.66 5.66L128 133.66l-69.17 69.17a4 4 0 0 1-5.66-5.66L122.34 128L53.17 58.83a4 4 0 0 1 5.66-5.66L128 122.34l69.17-69.17a4 4 0 1 1 5.66 5.66L133.66 128Z"></svg:path>`,
})
export class PhXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYarnIcon],svg[ph-yarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-48.61A103.95 103.95 0 1 0 128 232h104a8 8 0 1 0 0-16M128 40a87.5 87.5 0 0 1 43.93 11.77a222 222 0 0 0-27.88 15.09a222.2 222.2 0 0 0-45-22A87.5 87.5 0 0 1 128 40M78.56 55.24a206 206 0 0 1 51.11 21.57a226 226 0 0 0-19.57 16.55a181.5 181.5 0 0 0-52.37-18.27a88.7 88.7 0 0 1 20.83-19.85M48.72 89.82a165.8 165.8 0 0 1 49.67 15.51a228 228 0 0 0-15.63 19.17A142.7 142.7 0 0 0 41.28 113a87.5 87.5 0 0 1 7.44-23.18M40 129a126 126 0 0 1 33.63 9a222.4 222.4 0 0 0-19.07 38.45A87.5 87.5 0 0 1 40 129m26.42 61.81A209.36 209.36 0 0 1 187 62.74a89 89 0 0 1 16.22 19.57A183.89 183.89 0 0 0 87 205.82a88.6 88.6 0 0 1-20.57-15.01ZM125.66 216a87.7 87.7 0 0 1-23.83-4A167.84 167.84 0 0 1 210.28 96.79a87.4 87.4 0 0 1 5.38 23.55a144.59 144.59 0 0 0-90 95.66m89.82-78.44a88.19 88.19 0 0 1-72.67 77.22a128.64 128.64 0 0 1 72.67-77.25Z"></svg:path>`,
})
export class PhYarnIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYarnBoldIcon],svg[ph-yarn-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 212h-36.17A107.94 107.94 0 1 0 128 236h104a12 12 0 1 0 0-24M128 44a83.3 83.3 0 0 1 34.9 7.63q-9.69 4.82-18.9 10.51a227.6 227.6 0 0 0-32.13-16.58A84.5 84.5 0 0 1 128 44M79.33 59.6a201.6 201.6 0 0 1 43.17 17.71q-6.73 5.35-13 11.2A185.5 185.5 0 0 0 65 72.49A85 85 0 0 1 79.33 59.6M51.11 94.23a161.5 161.5 0 0 1 40.75 12.43q-5.44 6.25-10.44 12.9a146 146 0 0 0-35.37-9.92a83 83 0 0 1 5.06-15.41m2.76 73.23a83.5 83.5 0 0 1-9.66-33.83A122 122 0 0 1 67.79 140a229 229 0 0 0-13.92 27.46M71 189.67A205.38 205.38 0 0 1 186.1 67.42a85.4 85.4 0 0 1 11 12.86A187.87 187.87 0 0 0 84.55 199.86A84 84 0 0 1 71 189.67m51.67 22.15a84 84 0 0 1-16-2.55a163.87 163.87 0 0 1 101.07-107.4a83.4 83.4 0 0 1 3.52 15.78a148.76 148.76 0 0 0-88.55 94.17Zm26.4-2.51a124.78 124.78 0 0 1 61.31-65.15a84.25 84.25 0 0 1-61.27 65.15Z"></svg:path>`,
})
export class PhYarnBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYarnDuotoneIcon],svg[ph-yarn-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M232 216h-48.61A103.95 103.95 0 1 0 128 232h104a8 8 0 1 0 0-16M128 40a87.5 87.5 0 0 1 43.93 11.77a222 222 0 0 0-27.88 15.09a222.2 222.2 0 0 0-45-22A87.5 87.5 0 0 1 128 40M78.56 55.24a206 206 0 0 1 51.11 21.57a226 226 0 0 0-19.57 16.55a181.5 181.5 0 0 0-52.37-18.27a88.7 88.7 0 0 1 20.83-19.85M48.72 89.82a165.8 165.8 0 0 1 49.67 15.51a228 228 0 0 0-15.63 19.17A142.7 142.7 0 0 0 41.28 113a87.5 87.5 0 0 1 7.44-23.18M40 129a126 126 0 0 1 33.63 9a222.4 222.4 0 0 0-19.07 38.45A87.5 87.5 0 0 1 40 129m26.42 61.81A209.36 209.36 0 0 1 187 62.74a89 89 0 0 1 16.22 19.57A183.89 183.89 0 0 0 87 205.82a88.6 88.6 0 0 1-20.57-15.01ZM125.66 216a87.7 87.7 0 0 1-23.83-4A167.84 167.84 0 0 1 210.28 96.79a87.4 87.4 0 0 1 5.38 23.55a144.59 144.59 0 0 0-90 95.66m89.82-78.44a88.19 88.19 0 0 1-72.67 77.22a128.64 128.64 0 0 1 72.67-77.25Z"></svg:path></svg:g>`,
})
export class PhYarnDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYarnFillIcon],svg[ph-yarn-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M69.4 144.89a221 221 0 0 0-18.77 42.6a4 4 0 0 1-7 1.19a103.44 103.44 0 0 1-18.83-48.11a4 4 0 0 1 4.13-4.47a119 119 0 0 1 40.47 8.79M44 77.14a180.1 180.1 0 0 1 63 19.12a227 227 0 0 1 22.6-19.49a206.4 206.4 0 0 0-69.28-25.6a4 4 0 0 0-3.42 1A105.3 105.3 0 0 0 41.08 71A4 4 0 0 0 44 77.14m195.58 144.21A7.91 7.91 0 0 0 232 216h-48.64a104.25 104.25 0 0 0 46.89-69a4 4 0 0 0-5.27-4.52a120.6 120.6 0 0 0-74.1 73.52H134a136.55 136.55 0 0 1 94.78-91.37a4 4 0 0 0 2.92-4.15a102.6 102.6 0 0 0-3.58-20.56a4 4 0 0 0-4.89-2.8A164.53 164.53 0 0 0 103 225a4 4 0 0 0 3.08 4.69A104 104 0 0 0 128 232h104a8 8 0 0 0 7.58-10.65m-211-101.27a134.5 134.5 0 0 1 49.39 11a224 224 0 0 1 17.55-22.68a164.3 164.3 0 0 0-62.16-16.12a4 4 0 0 0-4 2.75a103 103 0 0 0-4.63 20.61a4 4 0 0 0 3.84 4.44Zm57.26-79.42A222.8 222.8 0 0 1 144 66.8a221.3 221.3 0 0 1 38.8-19.67a4 4 0 0 0 .7-7.08a103.86 103.86 0 0 0-98.2-6.85a4 4 0 0 0 .54 7.46M216 82.51a4 4 0 0 0 2.4-5.87a105 105 0 0 0-12.82-17.81a4 4 0 0 0-4.21-1.19A208.81 208.81 0 0 0 62.21 205.51a4 4 0 0 0 1.44 4.13a104.3 104.3 0 0 0 18.55 11.72a4 4 0 0 0 5.71-2.75A180.61 180.61 0 0 1 216 82.51"></svg:path>`,
})
export class PhYarnFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYarnLightIcon],svg[ph-yarn-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 218h-56a102 102 0 1 0-48 12h104a6 6 0 1 0 0-12M128 38a89.53 89.53 0 0 1 48.24 14a220 220 0 0 0-32.19 17.19A220.4 220.4 0 0 0 93.2 45a89.65 89.65 0 0 1 34.8-7M78.2 53.07a208.6 208.6 0 0 1 55.09 23.57a224 224 0 0 0-22.84 19.16a180 180 0 0 0-56.22-19.3A90.9 90.9 0 0 1 78.2 53.07M47.58 87.62a168.1 168.1 0 0 1 54.07 17.11A223 223 0 0 0 83.42 127A140.4 140.4 0 0 0 39 114.79a89.5 89.5 0 0 1 8.58-27.17m7.53 93.11A89.5 89.5 0 0 1 38 128v-1.25a128.5 128.5 0 0 1 38.6 10.33a220.5 220.5 0 0 0-21.49 43.65m9 10.64A211.27 211.27 0 0 1 187.39 60.44a90.6 90.6 0 0 1 18.76 23A181.86 181.86 0 0 0 88.22 208.71a90.4 90.4 0 0 1-24.07-17.34Zm63 26.62a89.7 89.7 0 0 1-27.75-4.65a169.86 169.86 0 0 1 112-119a89.1 89.1 0 0 1 6.34 27.41A142.57 142.57 0 0 0 127.15 218Zm90.62-83.53a90.15 90.15 0 0 1-77.88 82.75a130.62 130.62 0 0 1 77.92-82.75Z"></svg:path>`,
})
export class PhYarnLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYarnThinIcon],svg[ph-yarn-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-64.79a100 100 0 1 0-39.21 8h104a4 4 0 0 0 0-8M128 36a91.5 91.5 0 0 1 52.43 16.44a219.4 219.4 0 0 0-36.38 19.18a218.6 218.6 0 0 0-56.42-26.27A91.3 91.3 0 0 1 128 36M77.85 50.91a210.5 210.5 0 0 1 59 25.6a221 221 0 0 0-26.07 21.77A177.8 177.8 0 0 0 50.81 78a92.6 92.6 0 0 1 27.04-27.09M46.44 85.46a169.8 169.8 0 0 1 58.47 18.73a222 222 0 0 0-20.84 25.32a138.5 138.5 0 0 0-47.36-12.94a91.4 91.4 0 0 1 9.73-31.11m9.32 99.44A91.54 91.54 0 0 1 36 128c0-1.16 0-2.3.07-3.45a130.5 130.5 0 0 1 43.46 11.67a218.4 218.4 0 0 0-23.77 48.68m6.12 7A213.32 213.32 0 0 1 187.79 58.13a92.7 92.7 0 0 1 21.28 26.42a179.87 179.87 0 0 0-119.53 127a92.7 92.7 0 0 1-27.66-19.65M128 220a91.6 91.6 0 0 1-31-5.37A171.82 171.82 0 0 1 212.59 91.84a91.3 91.3 0 0 1 7.28 31.28A140.54 140.54 0 0 0 128.69 220Zm91.92-88.45a92.13 92.13 0 0 1-82.81 88a132.58 132.58 0 0 1 82.81-88"></svg:path>`,
})
export class PhYarnThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYinYangIcon],svg[ph-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-50.61 80A88 88 0 0 1 40 128m88 88a40 40 0 0 1 0-80a56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216m12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhYinYangIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYinYangBoldIcon],svg[ph-yin-yang-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M44 128a84.09 84.09 0 0 1 84-84a36 36 0 0 1 0 72a60 60 0 0 0-58.81 71.9A83.73 83.73 0 0 1 44 128m84 84a36 36 0 0 1 0-72a60 60 0 0 0 58.81-71.9A83.94 83.94 0 0 1 128 212m16-36a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-32-96a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhYinYangBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYinYangDuotoneIcon],svg[ph-yin-yang-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-96 96a48 48 0 0 1 0-96a48 48 0 0 0 0-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-50.61 80A88 88 0 0 1 40 128m88 88a40 40 0 0 1 0-80a56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216m12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhYinYangDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYinYangFillIcon],svg[ph-yin-yang-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m92 48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-92 48a12 12 0 1 0-12 12a12 12 0 0 0 12-12m32-92a44.05 44.05 0 0 0-44-44a88 88 0 0 0-46.91 162.42A52 52 0 0 1 128 128a44.05 44.05 0 0 0 44-44"></svg:path>`,
})
export class PhYinYangFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYinYangLightIcon],svg[ph-yin-yang-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M38 128a90.1 90.1 0 0 1 90-90a42 42 0 0 1 0 84a54 54 0 0 0-44.88 84A90.06 90.06 0 0 1 38 128m90 90a42 42 0 0 1 0-84a54 54 0 0 0 44.88-84A90 90 0 0 1 128 218m10-42a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-20-96a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhYinYangLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYinYangThinIcon],svg[ph-yin-yang-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M36 128a92.1 92.1 0 0 1 92-92a44 44 0 0 1 0 88a52 52 0 0 0-37.44 88A92.14 92.14 0 0 1 36 128m92 92a44 44 0 0 1 0-88a52 52 0 0 0 37.44-88A92 92 0 0 1 128 220m8-44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-16-96a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhYinYangThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYoutubeLogoIcon],svg[ph-youtube-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 145.05V111l25.58 17Zm114.33-75.53a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-15.49 113a8 8 0 0 1-4.77 5.49c-31.65 12.22-85.48 12-86 12H128c-.54 0-54.33.2-86-12a8 8 0 0 1-4.77-5.49C34.8 173.39 32 156.57 32 128s2.8-45.39 5.16-54.47A8 8 0 0 1 41.93 68c30.52-11.79 81.66-12 85.85-12h.27c.54 0 54.38-.18 86 12a8 8 0 0 1 4.77 5.49C221.2 82.61 224 99.43 224 128s-2.8 45.39-5.16 54.47Z"></svg:path>`,
})
export class PhYoutubeLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYoutubeLogoBoldIcon],svg[ph-youtube-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m170.49 117.91l-56-36A12 12 0 0 0 96 92v72a12 12 0 0 0 18.49 10.09l56-36a12 12 0 0 0 0-20.18M120 142v-28l21.81 14Zm118.21-73.5a28.05 28.05 0 0 0-16.93-19.14C186.4 35.91 131.29 36 128 36s-58.4-.09-93.28 13.38a28.05 28.05 0 0 0-16.93 19.14C15.15 78.72 12 97.32 12 128s3.15 49.28 5.79 59.48a28.05 28.05 0 0 0 16.93 19.14C68.21 219.55 120.36 220 127.37 220h1.26c7 0 59.16-.45 92.65-13.38a28.05 28.05 0 0 0 16.93-19.14c2.64-10.2 5.79-28.8 5.79-59.48s-3.15-49.28-5.79-59.48ZM215 181.46a4 4 0 0 1-2.34 2.77C182.78 195.76 132.27 196 128.32 196h-.39c-.53 0-53.64.17-84.56-11.77a4 4 0 0 1-2.37-2.77c-1.88-7.24-5-23.82-5-53.46s3.15-46.22 5-53.46a4 4 0 0 1 2.34-2.77C74.29 59.83 127.39 60 127.92 60h.15c.54 0 53.64-.17 84.56 11.77a4 4 0 0 1 2.37 2.77c1.88 7.24 5 23.82 5 53.46s-3.15 46.22-5 53.46"></svg:path>`,
})
export class PhYoutubeLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYoutubeLogoDuotoneIcon],svg[ph-youtube-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M226.59 71.53a16 16 0 0 0-9.63-11C183.48 47.65 128 48 128 48s-55.48-.35-89 12.58a16 16 0 0 0-9.63 11C27.07 80.54 24 98.09 24 128s3.07 47.46 5.41 56.47A16 16 0 0 0 39 195.42C72.52 208.35 128 208 128 208s55.48.35 89-12.58a16 16 0 0 0 9.63-10.95c2.34-9 5.41-26.56 5.41-56.47s-3.11-47.46-5.45-56.47M112 160V96l48 32Z" opacity=".2"></svg:path><svg:path d="m164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 145.05V111l25.58 17Zm114.33-75.53a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-15.49 113a8 8 0 0 1-4.77 5.49c-31.65 12.22-85.48 12-86.12 12s-54.37.18-86-12a8 8 0 0 1-4.77-5.49C34.8 173.39 32 156.57 32 128s2.8-45.39 5.16-54.47A8 8 0 0 1 41.93 68c31.65-12.18 85.47-12 86.12-12s54.37-.18 86 12a8 8 0 0 1 4.77 5.49C221.2 82.61 224 99.43 224 128s-2.8 45.39-5.16 54.47Z"></svg:path></svg:g>`,
})
export class PhYoutubeLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYoutubeLogoFillIcon],svg[ph-youtube-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-73.74 65l-40 28A8 8 0 0 1 108 156v-56a8 8 0 0 1 12.59-6.55l40 28a8 8 0 0 1 0 13.1Z"></svg:path>`,
})
export class PhYoutubeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYoutubeLogoLightIcon],svg[ph-youtube-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m163.33 123l-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M118 148.79v-41.58L149.18 128ZM232.4 70a22 22 0 0 0-13.28-15C185 41.79 130.27 42 128 42s-57-.21-91.16 13A22 22 0 0 0 23.6 70c-2.55 9.89-5.6 28-5.6 58s3.05 48.11 5.6 58a22 22 0 0 0 13.28 15C71 214.21 125.72 214 128 214h.71c6.91 0 58-.44 90.45-13a22 22 0 0 0 13.28-15c2.55-9.87 5.6-27.93 5.6-58S235 79.89 232.4 70m-11.62 113a10 10 0 0 1-6 6.86c-32 12.33-86.2 12.14-86.78 12.14s-54.71.2-86.75-12.17a10 10 0 0 1-6-6.86C32.84 173.78 30 156.78 30 128s2.84-45.78 5.22-55a10 10 0 0 1 6-6.86C72.06 54.26 123.53 54 127.76 54h.24c.54 0 54.71-.2 86.75 12.17a10 10 0 0 1 6 6.86c2.38 9.19 5.22 26.19 5.22 55s-2.81 45.75-5.19 54.97"></svg:path>`,
})
export class PhYoutubeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phYoutubeLogoThinIcon],svg[ph-youtube-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m162.22 124.67l-48-32A4 4 0 0 0 108 96v64a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M116 152.53v-49.06L152.79 128Zm114.46-82a20 20 0 0 0-12.06-13.68C184.6 43.79 130.27 44 128 44s-56.6-.21-90.4 12.85a20 20 0 0 0-12.06 13.67C23 80.27 20 98.16 20 128s3 47.73 5.54 57.48a20 20 0 0 0 12.06 13.67C71.4 212.21 125.73 212 128 212h.71c6.89 0 57.58-.43 89.72-12.85a20 20 0 0 0 12.06-13.67C233 175.72 236 157.84 236 128s-3-47.73-5.54-57.48Zm-7.74 113a12 12 0 0 1-7.21 8.22C183.14 204.19 128.57 204 128 204s-55.11.19-87.48-12.31a12 12 0 0 1-7.21-8.22C30.87 174.17 28 157 28 128s2.87-46.17 5.28-55.47a12 12 0 0 1 7.21-8.22C72.86 51.81 127.43 52 128 52s55.11-.2 87.48 12.31a12 12 0 0 1 7.21 8.22C225.13 81.83 228 99 228 128s-2.87 46.17-5.28 55.47Z"></svg:path>`,
})
export class PhYoutubeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
