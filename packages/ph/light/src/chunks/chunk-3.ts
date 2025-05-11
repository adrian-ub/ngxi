import { Component, input } from '@angular/core'

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
