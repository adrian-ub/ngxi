import { Component, input } from '@angular/core'

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
