import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleBoldIcon],svg[ph-wave-triangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.73 135l-52 72a12 12 0 0 1-19.46 0L76 76.5L33.73 135a12 12 0 1 1-19.46-14l52-72a12 12 0 0 1 19.46 0L180 179.5l42.27-58.5a12 12 0 1 1 19.46 14"></svg:path>`,
})
export class PhWaveTriangleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformBoldIcon],svg[ph-waveform-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m28-76a12 12 0 0 0-12 12v192a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m40 32a12 12 0 0 0-12 12v128a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m40 32a12 12 0 0 0-12 12v64a12 12 0 0 0 24 0V96a12 12 0 0 0-12-12m40-16a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0V80a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhWaveformBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashBoldIcon],svg[ph-waveform-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m-3.12-64.07a12 12 0 1 0-17.76 16.14L76 88.64V224a12 12 0 0 0 24 0V115l16 17.6V192a12 12 0 0 0 24 0v-33l59.12 65a12 12 0 0 0 17.76-16.14ZM128 80.54a12 12 0 0 0 12-12V64a12 12 0 0 0-24 0v4.54a12 12 0 0 0 12 12m40 44a12 12 0 0 0 12-12V96a12 12 0 0 0-24 0v16.54a12 12 0 0 0 12 12M208 68a12 12 0 0 0-12 12v76.54a12 12 0 0 0 24 0V80a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhWaveformSlashBoldIcon {
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
