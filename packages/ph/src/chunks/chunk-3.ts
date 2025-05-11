import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashIcon],svg[ph-waveform-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-2.08-61.38a8 8 0 1 0-11.84 10.76L80 87.09V224a8 8 0 0 0 16 0V104.69l24 26.4V192a8 8 0 0 0 16 0v-43.31l66.08 72.69a8 8 0 1 0 11.84-10.76ZM88 44.43a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v4.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V64a8 8 0 0 0-16 0v16.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28.43a8 8 0 0 0 8 8M208 72a8 8 0 0 0-8 8v88.43a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhWaveformSlashIcon {
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
