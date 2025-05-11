import { Component, input } from '@angular/core'

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
