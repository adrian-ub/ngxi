import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneFillIcon],svg[ph-microphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 128V64a48 48 0 0 1 96 0v64a48 48 0 0 1-96 0m128 0a8 8 0 0 0-16 0a64 64 0 0 1-128 0a8 8 0 0 0-16 0a80.11 80.11 0 0 0 72 79.6V240a8 8 0 0 0 16 0v-32.4a80.11 80.11 0 0 0 72-79.6"></svg:path>`,
})
export class PhMicrophoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneLightIcon],svg[ph-microphone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 174a46.06 46.06 0 0 0 46-46V64a46 46 0 0 0-92 0v64a46.06 46.06 0 0 0 46 46M94 64a34 34 0 0 1 68 0v64a34 34 0 0 1-68 0Zm40 141.75V240a6 6 0 0 1-12 0v-34.25A78.09 78.09 0 0 1 50 128a6 6 0 0 1 12 0a66 66 0 0 0 132 0a6 6 0 0 1 12 0a78.09 78.09 0 0 1-72 77.75"></svg:path>`,
})
export class PhMicrophoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneSlashIcon],svg[ph-microphone-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.92 218.62l-160-176a8 8 0 0 0-11.84 10.76L80 95.09V128a48 48 0 0 0 69.11 43.12l11.1 12.2A63.4 63.4 0 0 1 128 192a64.07 64.07 0 0 1-64-64a8 8 0 0 0-16 0a80.11 80.11 0 0 0 72 79.6V240a8 8 0 0 0 16 0v-32.41a78.8 78.8 0 0 0 35.16-12.22l30.92 34a8 8 0 1 0 11.84-10.76ZM128 160a32 32 0 0 1-32-32v-15.31l41.66 45.82A32 32 0 0 1 128 160m57.52-3.91A63.3 63.3 0 0 0 192 128a8 8 0 0 1 16 0a79.16 79.16 0 0 1-8.11 35.12a8 8 0 0 1-7.19 4.49a7.9 7.9 0 0 1-3.51-.82a8 8 0 0 1-3.67-10.7M84 44.87A48 48 0 0 1 176 64v64a49 49 0 0 1-.26 5a8 8 0 0 1-8 7.17a8 8 0 0 1-.84 0a8 8 0 0 1-7.12-8.79c.11-1.1.17-2.24.17-3.36V64a32 32 0 0 0-61.31-12.75A8 8 0 1 1 84 44.87"></svg:path>`,
})
export class PhMicrophoneSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneSlashBoldIcon],svg[ph-microphone-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 39.93a12 12 0 1 0-17.76 16.14L76 96.64V128a52 52 0 0 0 72.11 48l11.26 12.39A67.34 67.34 0 0 1 128 196a68.07 68.07 0 0 1-68-68a12 12 0 0 0-24 0a92.14 92.14 0 0 0 80 91.22V240a12 12 0 0 0 24 0v-20.77a90.4 90.4 0 0 0 35.92-12.68l23.2 25.52a12 12 0 0 0 17.76-16.14ZM128 156a28 28 0 0 1-28-28v-5l29.9 32.89c-.63.11-1.26.11-1.9.11m63-2.42a67.6 67.6 0 0 0 5-25.58a12 12 0 0 1 24 0a91.5 91.5 0 0 1-6.74 34.61a12 12 0 0 1-22.23-9ZM85.7 33.75A52 52 0 0 1 180 64v56.54a12 12 0 0 1-24 0V64a28 28 0 0 0-50.79-16.28a12 12 0 0 1-19.51-14Z"></svg:path>`,
})
export class PhMicrophoneSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneSlashDuotoneIcon],svg[ph-microphone-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 64v64a40 40 0 0 1-40 40a40 40 0 0 1-40-40V64a40 40 0 0 1 40-40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="m213.92 218.62l-160-176a8 8 0 0 0-11.84 10.76L80 95.09V128a48 48 0 0 0 69.11 43.12l11.1 12.2A63.4 63.4 0 0 1 128 192a64.07 64.07 0 0 1-64-64a8 8 0 0 0-16 0a80.11 80.11 0 0 0 72 79.6V240a8 8 0 0 0 16 0v-32.41a78.8 78.8 0 0 0 35.16-12.22l30.92 34a8 8 0 1 0 11.84-10.76ZM128 160a32 32 0 0 1-32-32v-15.31l41.66 45.82A32 32 0 0 1 128 160m57.52-3.91A63.3 63.3 0 0 0 192 128a8 8 0 0 1 16 0a79.16 79.16 0 0 1-8.11 35.12a8 8 0 0 1-7.19 4.49a7.9 7.9 0 0 1-3.51-.82a8 8 0 0 1-3.67-10.7M84 44.87A48 48 0 0 1 176 64v64a49 49 0 0 1-.26 5a8 8 0 0 1-8 7.17a8 8 0 0 1-.84 0a8 8 0 0 1-7.12-8.79c.11-1.1.17-2.24.17-3.36V64a32 32 0 0 0-61.31-12.75A8 8 0 1 1 84 44.87"></svg:path></svg:g>`,
})
export class PhMicrophoneSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneSlashFillIcon],svg[ph-microphone-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 229.92a8 8 0 0 1-11.3-.54l-30.92-34A78.8 78.8 0 0 1 136 207.59V240a8 8 0 0 1-16 0v-32.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64.07 64.07 0 0 0 64 64a63.4 63.4 0 0 0 32.21-8.68l-11.1-12.2A48 48 0 0 1 80 128V95.09L42.08 53.38a8 8 0 0 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3m-24.19-63.13a7.9 7.9 0 0 0 3.51.82a8 8 0 0 0 7.19-4.49A79.16 79.16 0 0 0 208 128a8 8 0 0 0-16 0a63.3 63.3 0 0 1-6.48 28.09a8 8 0 0 0 3.67 10.7m-27.33-29.22a8 8 0 0 0 13.88-4.57a50 50 0 0 0 .26-5V64a48 48 0 0 0-92-19.13a8 8 0 0 0 1.41 8.57Z"></svg:path>`,
})
export class PhMicrophoneSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneSlashLightIcon],svg[ph-microphone-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.44 220l-160-176a6 6 0 0 0-8.88 8L82 94.32V128a46 46 0 0 0 67.56 40.64l13.75 15.12A65.26 65.26 0 0 1 128 194a66.08 66.08 0 0 1-66-66a6 6 0 0 0-12 0a78.09 78.09 0 0 0 72 77.75V240a6 6 0 0 0 12 0v-34.23a76.93 76.93 0 0 0 37.48-13L203.56 228a6 6 0 0 0 8.88-8.08ZM128 162a34 34 0 0 1-34-34v-20.48l47.12 51.84A33.8 33.8 0 0 1 128 162m59.32-5a65.4 65.4 0 0 0 6.68-29a6 6 0 0 1 12 0a77.3 77.3 0 0 1-7.9 34.25a6 6 0 1 1-10.78-5.25M85.8 45.67A46 46 0 0 1 174 64v64a45 45 0 0 1-.25 4.81a6 6 0 0 1-6 5.38h-.63a6 6 0 0 1-5.34-6.59a35 35 0 0 0 .22-3.6V64a34 34 0 0 0-65.2-13.55a6 6 0 0 1-11-4.78"></svg:path>`,
})
export class PhMicrophoneSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneSlashThinIcon],svg[ph-microphone-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 221.31l-160-176a4 4 0 0 0-6 5.38l39 42.86V128a44 44 0 0 0 66 38.12l16.38 18A67.2 67.2 0 0 1 128 196a68.07 68.07 0 0 1-68-68a4 4 0 0 0-8 0a76.09 76.09 0 0 0 72 75.89V240a4 4 0 0 0 8 0v-36.11a75.1 75.1 0 0 0 39.79-13.77L205 226.69a4 4 0 1 0 5.92-5.38ZM128 164a36 36 0 0 1-36-36v-25.65L144.43 160a35.8 35.8 0 0 1-16.43 4m61.12-6.15A67.44 67.44 0 0 0 196 128a4 4 0 0 1 8 0a75.3 75.3 0 0 1-7.7 33.37a4 4 0 0 1-7.18-3.52M87.63 46.46A44 44 0 0 1 172 64v64a44 44 0 0 1-.24 4.61a4 4 0 0 1-4 3.58h-.42a4 4 0 0 1-3.57-4.39a37 37 0 0 0 .23-3.8V64a36 36 0 0 0-69-14.34a4 4 0 0 1-7.34-3.2Z"></svg:path>`,
})
export class PhMicrophoneSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneStageIcon],svg[ph-microphone-stage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 16a72.07 72.07 0 0 0-72 72a73 73 0 0 0 .63 9.42l-69.51 94.8A15.93 15.93 0 0 0 28.71 213L43 227.29a15.93 15.93 0 0 0 20.78 1.59l94.81-69.53a73 73 0 0 0 9.41.65a72 72 0 1 0 0-144m56 72a55.72 55.72 0 0 1-11.16 33.52l-78.35-78.36A56 56 0 0 1 224 88M54.32 216L40 201.68L102.14 117A72.37 72.37 0 0 0 139 153.86ZM112 88a55.67 55.67 0 0 1 11.16-33.51l78.34 78.34A56 56 0 0 1 112 88m-2.35 58.34a8 8 0 0 1 0 11.31l-8 8a8 8 0 1 1-11.31-11.31l8-8a8 8 0 0 1 11.33-.01Z"></svg:path>`,
})
export class PhMicrophoneStageIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneStageBoldIcon],svg[ph-microphone-stage-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 12a75.9 75.9 0 0 0-75.51 84.33l-68.58 93.52a19.89 19.89 0 0 0 2 26l14.29 14.29a19.89 19.89 0 0 0 26 2l93.52-68.58A76 76 0 1 0 168 12m52 76a51.66 51.66 0 0 1-7.75 27.27l-71.51-71.52A52 52 0 0 1 220 88M54.72 210.71l-9.43-9.43l56.19-76.63a76.46 76.46 0 0 0 29.87 29.87ZM116 88a51.63 51.63 0 0 1 7.75-27.27l71.51 71.51A52 52 0 0 1 116 88"></svg:path>`,
})
export class PhMicrophoneStageBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneStageDuotoneIcon],svg[ph-microphone-stage-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M156.5 151L59 222.45a8 8 0 0 1-10.38-.79l-14.3-14.3a8 8 0 0 1-.77-10.36L105 99.5a64 64 0 0 0 51.48 51.5Z" opacity=".2"></svg:path><svg:path d="M168 16a72.07 72.07 0 0 0-72 72a73 73 0 0 0 .63 9.42l-69.51 94.8A15.93 15.93 0 0 0 28.71 213L43 227.29a15.93 15.93 0 0 0 20.78 1.59l94.81-69.53a73 73 0 0 0 9.41.65a72 72 0 1 0 0-144m56 72a55.72 55.72 0 0 1-11.16 33.52l-78.35-78.36A56 56 0 0 1 224 88M54.32 216L40 201.68L102.14 117A72.37 72.37 0 0 0 139 153.86ZM112 88a55.67 55.67 0 0 1 11.16-33.51l78.34 78.34A56 56 0 0 1 112 88m-2.35 58.34a8 8 0 0 1 0 11.31l-8 8a8 8 0 1 1-11.31-11.31l8-8a8 8 0 0 1 11.33-.01Z"></svg:path></svg:g>`,
})
export class PhMicrophoneStageDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneStageFillIcon],svg[ph-microphone-stage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M115.06 46.36a4 4 0 0 0-6.11.54A71.54 71.54 0 0 0 96 88a73 73 0 0 0 .63 9.42l-69.51 94.8A15.93 15.93 0 0 0 28.71 213L43 227.29a15.93 15.93 0 0 0 20.78 1.59l94.81-69.53a73 73 0 0 0 9.41.65a71.54 71.54 0 0 0 41.09-12.93a4 4 0 0 0 .54-6.11Zm2.61 103.28l-16 16a8 8 0 1 1-11.31-11.31l16-16a8 8 0 0 1 11.31 11.31m109.4-20.56a4 4 0 0 1-6.12.54l-94.57-94.57a4 4 0 0 1 .54-6.12a71.93 71.93 0 0 1 100.15 100.15"></svg:path>`,
})
export class PhMicrophoneStageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneStageLightIcon],svg[ph-microphone-stage-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 18a69.94 69.94 0 0 0-69.26 80l-70 95.46a13.92 13.92 0 0 0 1.39 18.17l14.3 14.3a13.93 13.93 0 0 0 18.17 1.39l95.46-70A70 70 0 1 0 168 18m58 70a57.65 57.65 0 0 1-13 36.52L131.49 43A57.95 57.95 0 0 1 226 88M55.5 217.59a2 2 0 0 1-2.6-.2L38.61 203.1a2 2 0 0 1-.2-2.6l64.22-87.56a70.32 70.32 0 0 0 40.44 40.43ZM110 88a57.73 57.73 0 0 1 13-36.52L204.53 133A58 58 0 0 1 110 88m-1.75 59.75a6 6 0 0 1 0 8.49l-8 8a6 6 0 1 1-8.49-8.49l8-8a6 6 0 0 1 8.5-.01Z"></svg:path>`,
})
export class PhMicrophoneStageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneStageThinIcon],svg[ph-microphone-stage-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 20a68.08 68.08 0 0 0-68 68a67 67 0 0 0 .82 10.49l-70.48 96.1a11.94 11.94 0 0 0 1.2 15.58l14.29 14.3a11.95 11.95 0 0 0 15.58 1.19l96.11-70.48A68 68 0 1 0 168 20m60 68a59.7 59.7 0 0 1-14.87 39.47l-84.59-84.6A59.94 59.94 0 0 1 228 88M56.68 219.21a4 4 0 0 1-5.2-.4l-14.29-14.29a4 4 0 0 1-.4-5.2l66.46-90.62a68.31 68.31 0 0 0 44.05 44.05ZM108 88a59.77 59.77 0 0 1 14.87-39.47l84.6 84.6A60 60 0 0 1 108 88m-1.17 61.17a4 4 0 0 1 0 5.65l-8 8a4 4 0 1 1-5.65-5.65l8-8a4 4 0 0 1 5.66-.01Z"></svg:path>`,
})
export class PhMicrophoneStageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneThinIcon],svg[ph-microphone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 172a44.05 44.05 0 0 0 44-44V64a44 44 0 0 0-88 0v64a44.05 44.05 0 0 0 44 44M92 64a36 36 0 0 1 72 0v64a36 36 0 0 1-72 0Zm40 139.89V240a4 4 0 0 1-8 0v-36.11A76.09 76.09 0 0 1 52 128a4 4 0 0 1 8 0a68 68 0 0 0 136 0a4 4 0 0 1 8 0a76.09 76.09 0 0 1-72 75.89"></svg:path>`,
})
export class PhMicrophoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicroscopeIcon],svg[ph-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 208h-20.06A88.05 88.05 0 0 0 144 64.37V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V80.46A72 72 0 0 1 181.25 208H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16m-96-72H80V32h48zm-56 48a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z"></svg:path>`,
})
export class PhMicroscopeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicroscopeBoldIcon],svg[ph-microscope-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 204h-12a92.1 92.1 0 0 0-64-143.22V32a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V85.08A68.1 68.1 0 0 1 204 152a67.39 67.39 0 0 1-24.18 52H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24m-100-80H84V36h40Zm-52 64a12 12 0 0 1 0-24h64a12 12 0 0 1 0 24Z"></svg:path>`,
})
export class PhMicroscopeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicroscopeDuotoneIcon],svg[ph-microscope-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 32v104a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 208h-20.06A88.05 88.05 0 0 0 144 64.37V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V80.46A72 72 0 0 1 181.25 208H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16m-96-72H80V32h48zm-56 48a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z"></svg:path></svg:g>`,
})
export class PhMicroscopeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicroscopeFillIcon],svg[ph-microscope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h149.25A72 72 0 0 0 144 80.46V136a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v32.37A88.05 88.05 0 0 1 203.94 208H224a8 8 0 0 1 8 8m-96-32a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16Z"></svg:path>`,
})
export class PhMicroscopeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicroscopeLightIcon],svg[ph-microscope-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 210h-24.47A85.2 85.2 0 0 0 222 152a86.1 86.1 0 0 0-80-85.77V32a14 14 0 0 0-14-14H80a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V78.26A74 74 0 0 1 182 210H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12m-94-74a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2V32a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-58 46a6 6 0 0 1 0-12h64a6 6 0 0 1 0 12Z"></svg:path>`,
})
export class PhMicroscopeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicroscopeThinIcon],svg[ph-microscope-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 212h-29.2a83.2 83.2 0 0 0 25.2-60a84.1 84.1 0 0 0-80-83.9V32a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V76.11A76 76 0 0 1 182.64 212H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8m-92-76a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-60 44a4 4 0 0 1 0-8h64a4 4 0 0 1 0 8Z"></svg:path>`,
})
export class PhMicroscopeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoIcon],svg[ph-microsoft-excel-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 80h40v48h-40Zm40-16h-40v-8a16 16 0 0 0-16-16V40h56ZM72 40h56v24H72ZM40 80h104v96H40Zm32 112h56v24H72Zm72 24v-24a16 16 0 0 0 16-16v-8h40v48Zm-78.15-69.12L81.59 128l-15.74-18.88a8 8 0 0 1 12.3-10.24L92 115.5l13.85-16.62a8 8 0 1 1 12.3 10.24L102.41 128l15.74 18.88a8 8 0 0 1-12.3 10.24L92 140.5l-13.85 16.62a8 8 0 0 1-12.3-10.24"></svg:path>`,
})
export class PhMicrosoftExcelLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoBoldIcon],svg[ph-microsoft-excel-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20H72a20 20 0 0 0-20 20v16H36a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h16v16a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-32 88h28v40h-28Zm28-24h-28v-8a20 20 0 0 0-20-20V44h48ZM76 44h48v12H76ZM40 80h104v96H40Zm36 120h48v12H76Zm72 12v-12a20 20 0 0 0 20-20v-8h28v40Zm-83.68-50.78a12 12 0 0 1-1.54-16.9L76.38 128l-13.6-16.32a12 12 0 1 1 18.44-15.36L92 109.25l10.78-12.93a12 12 0 0 1 18.44 15.36L107.62 128l13.6 16.32a12 12 0 1 1-18.44 15.36L92 146.75l-10.78 12.93a12 12 0 0 1-16.9 1.54"></svg:path>`,
})
export class PhMicrosoftExcelLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoDuotoneIcon],svg[ph-microsoft-excel-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 80h40v48h-40Zm40-16h-40v-8a16 16 0 0 0-16-16V40h56ZM72 40h56v24H72ZM40 80h104v96H40Zm32 112h56v24H72Zm72 24v-24a16 16 0 0 0 16-16v-8h40v48Zm-78.15-69.12L81.59 128l-15.74-18.88a8 8 0 0 1 12.3-10.24L92 115.5l13.85-16.62a8 8 0 1 1 12.3 10.24L102.41 128l15.74 18.88a8 8 0 0 1-12.3 10.24L92 140.5l-13.85 16.62a8 8 0 0 1-12.3-10.24"></svg:path></svg:g>`,
})
export class PhMicrosoftExcelLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoFillIcon],svg[ph-microsoft-excel-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M72 160a8 8 0 0 1-6.15-13.12L81.59 128l-15.74-18.88a8 8 0 0 1 12.3-10.24L92 115.5l13.85-16.62a8 8 0 1 1 12.3 10.24L102.41 128l15.74 18.88a8 8 0 0 1-12.3 10.24L92 140.5l-13.85 16.62A8 8 0 0 1 72 160m56 56H72v-24h56Zm0-152H72V40h56Zm72 152h-56v-24a16 16 0 0 0 16-16v-8h40Zm0-64h-40v-48h40Zm0-64h-40v-8a16 16 0 0 0-16-16V40h56Z"></svg:path>`,
})
export class PhMicrosoftExcelLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoLightIcon],svg[ph-microsoft-excel-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2M70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m32 40v-26h60v28H72a2 2 0 0 1-2-2m130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2M67.39 148.16L84.19 128l-16.8-20.16a6 6 0 1 1 9.22-7.68L92 118.63l15.39-18.47a6 6 0 0 1 9.22 7.68L99.81 128l16.8 20.16a6 6 0 1 1-9.22 7.68L92 137.37l-15.39 18.47a6 6 0 0 1-9.22-7.68"></svg:path>`,
})
export class PhMicrosoftExcelLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftExcelLogoThinIcon],svg[ph-microsoft-excel-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H72a12 12 0 0 0-12 12v28H40a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h20v28a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-44 72h48v56h-48Zm48-60v52h-48V80a12 12 0 0 0-12-12h-4V36h60a4 4 0 0 1 4 4M68 40a4 4 0 0 1 4-4h60v32H68ZM36 176V80a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m32 40v-28h64v32H72a4 4 0 0 1-4-4m132 4h-60v-32h4a12 12 0 0 0 12-12v-12h48v52a4 4 0 0 1-4 4M68.93 149.44L86.79 128l-17.86-21.44a4 4 0 0 1 6.14-5.12L92 121.75l16.93-20.31a4 4 0 1 1 6.14 5.12L97.21 128l17.86 21.44a4 4 0 1 1-6.14 5.12L92 134.25l-16.93 20.31A4 4 0 0 1 72 156a3.94 3.94 0 0 1-2.56-.93a4 4 0 0 1-.51-5.63"></svg:path>`,
})
export class PhMicrosoftExcelLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftOutlookLogoIcon],svg[ph-microsoft-outlook-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 128a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m152-24h-16V40a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-96a8 8 0 0 0-8-8m-58.34 60L216 127.65v72.7ZM112 48h80v77.24l-40 28.89V80a16 16 0 0 0-16-16h-24ZM40 80h96v96H40Zm48 112h48a16 16 0 0 0 16-16v-2.13L199.26 208H88Z"></svg:path>`,
})
export class PhMicrosoftOutlookLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftOutlookLogoBoldIcon],svg[ph-microsoft-outlook-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 128a36 36 0 1 0-36 36a36 36 0 0 0 36-36m-48 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m148-28h-12V32a12 12 0 0 0-12-12h-96a12 12 0 0 0-12 12v24H36a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h32v16a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V112a12 12 0 0 0-12-12m-52.45 68L212 136.54v62.92ZM116 44h72v80.8l-28 21.78V76a20 20 0 0 0-20-20h-24ZM40 80h96v96H40Zm52 120h48a20 20 0 0 0 18.28-11.92L189 212H92Z"></svg:path>`,
})
export class PhMicrosoftOutlookLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftOutlookLogoDuotoneIcon],svg[ph-microsoft-outlook-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M120 128a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m152-24h-16V40a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-96a8 8 0 0 0-8-8m-58.34 60L216 127.65v72.7ZM112 48h80v77.24l-40 28.89V80a16 16 0 0 0-16-16h-24ZM40 80h96v96H40Zm48 112h48a16 16 0 0 0 16-16v-2.13L199.26 208H88Z"></svg:path></svg:g>`,
})
export class PhMicrosoftOutlookLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftOutlookLogoFillIcon],svg[ph-microsoft-outlook-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144-32v96a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-16H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h56V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v64h16a8 8 0 0 1 8 8M112 64h24a16 16 0 0 1 16 16v74.13l40-28.89V48h-80Zm-24 96a32 32 0 1 0-32-32a32 32 0 0 0 32 32m111.26 48L152 173.87V176a16 16 0 0 1-16 16H88v16ZM216 127.65L165.66 164L216 200.35Z"></svg:path>`,
})
export class PhMicrosoftOutlookLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftOutlookLogoLightIcon],svg[ph-microsoft-outlook-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 128a30 30 0 1 0-30 30a30 30 0 0 0 30-30m-48 0a18 18 0 1 1 18 18a18 18 0 0 1-18-18m154-22h-18V40a6 6 0 0 0-6-6h-96a6 6 0 0 0-6 6v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h34v18a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-96a6 6 0 0 0-6-6m-61.75 58L218 123.73v80.54ZM110 46h84v80.27l-42 30.33l-2-1.45V80a14 14 0 0 0-14-14h-26ZM38 176V80a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m48 32v-18h50a14 14 0 0 0 14-14v-6l55.44 40H88a2 2 0 0 1-2-2"></svg:path>`,
})
export class PhMicrosoftOutlookLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftOutlookLogoThinIcon],svg[ph-microsoft-outlook-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 128a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-48 0a20 20 0 1 1 20 20a20 20 0 0 1-20-20m156-20h-20V40a4 4 0 0 0-4-4h-96a4 4 0 0 0-4 4v28H40a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h36v20a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-96a4 4 0 0 0-4-4m-4 100.17L158.83 164L220 119.82V208a1 1 0 0 1 0 .17M211.63 116l-7.63 5.51V116ZM108 44h88v83.29l-44 31.78l-4-2.89V80a12 12 0 0 0-12-12h-28ZM36 176V80a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m48 32v-20h52a12 12 0 0 0 12-12v-9.95L211.63 212H88a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhMicrosoftOutlookLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftPowerpointLogoIcon],svg[ph-microsoft-powerpoint-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 96H80a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-8h8a24 24 0 0 0 0-48m0 32h-8v-16h8a8 8 0 0 1 0 16m40-104a104.33 104.33 0 0 0-82 40H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h14a104 104 0 1 0 82-168m87.63 96H160V80a16 16 0 0 0-16-16V40.37A88.13 88.13 0 0 1 223.63 120M128 40.37V64H75.63A88.36 88.36 0 0 1 128 40.37M40 80h104v47.9a.5.5 0 0 0 0 .2V176H40Zm88 112v23.63A88.36 88.36 0 0 1 75.63 192Zm16 23.63V192a16 16 0 0 0 16-16v-40h63.63A88.13 88.13 0 0 1 144 215.63"></svg:path>`,
})
export class PhMicrosoftPowerpointLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftPowerpointLogoBoldIcon],svg[ph-microsoft-powerpoint-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 88H76a12 12 0 0 0-12 12v52a12 12 0 0 0 24 0v-4h6a30 30 0 0 0 0-60m0 36h-6v-12h6a6 6 0 0 1 0 12m42-104a108.16 108.16 0 0 0-76.73 32H40a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h15.5A108 108 0 1 0 136 20m0 24a84.12 84.12 0 0 1 83.13 72H164V72a20 20 0 0 0-20-20h-43.73A83.9 83.9 0 0 1 136 44M44 76h96v100H44Zm92 136a83.67 83.67 0 0 1-43.32-12H144a20 20 0 0 0 20-20v-40h55.13A84.12 84.12 0 0 1 136 212"></svg:path>`,
})
export class PhMicrosoftPowerpointLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftPowerpointLogoDuotoneIcon],svg[ph-microsoft-powerpoint-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M96 96H80a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-8h8a24 24 0 0 0 0-48m0 32h-8v-16h8a8 8 0 0 1 0 16m40-104a104.33 104.33 0 0 0-82 40H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h14a104 104 0 1 0 82-168m87.63 96H160V80a16 16 0 0 0-16-16V40.37A88.13 88.13 0 0 1 223.63 120M128 40.37V64H75.63A88.36 88.36 0 0 1 128 40.37M40 80h104v47.9a.5.5 0 0 0 0 .2V176H40Zm88 112v23.63A88.36 88.36 0 0 1 75.63 192Zm16 23.63V192a16 16 0 0 0 16-16v-40h63.63A88.13 88.13 0 0 1 144 215.63"></svg:path></svg:g>`,
})
export class PhMicrosoftPowerpointLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftPowerpointLogoFillIcon],svg[ph-microsoft-powerpoint-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 24a104.33 104.33 0 0 0-82 40H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h14a104 104 0 1 0 82-168M72 152v-48a8 8 0 0 1 8-8h16a24 24 0 0 1 0 48h-8v8a8 8 0 0 1-16 0m56 63.63A88.36 88.36 0 0 1 75.63 192H128ZM128 64H75.63A88.36 88.36 0 0 1 128 40.37Zm16-23.63A88.13 88.13 0 0 1 223.63 120H160V80a16 16 0 0 0-16-16Zm0 175.26V192a16 16 0 0 0 16-16v-40h63.63A88.13 88.13 0 0 1 144 215.63M96 128h-8v-16h8a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMicrosoftPowerpointLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftPowerpointLogoLightIcon],svg[ph-microsoft-powerpoint-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 98H80a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-10h10a22 22 0 0 0 0-44m0 32H86v-20h10a10 10 0 0 1 0 20m40-104a102.35 102.35 0 0 0-81 40H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h15a102 102 0 1 0 81-164m89.8 96H158V80a14 14 0 0 0-14-14h-2V38.2a90.15 90.15 0 0 1 83.8 83.8M130 38.21V66H70.78A90.4 90.4 0 0 1 130 38.21M38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m32.78 14H130v27.79A90.4 90.4 0 0 1 70.78 190M142 217.8V190h2a14 14 0 0 0 14-14v-42h67.8a90.14 90.14 0 0 1-83.8 83.8"></svg:path>`,
})
export class PhMicrosoftPowerpointLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftPowerpointLogoThinIcon],svg[ph-microsoft-powerpoint-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 100H80a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-12h12a20 20 0 0 0 0-40m0 32H84v-24h12a12 12 0 0 1 0 24m40-104a100.3 100.3 0 0 0-80 40H40a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h16a100 100 0 1 0 80-160m91.91 96H156V80a12 12 0 0 0-12-12h-4V36.09A92.13 92.13 0 0 1 227.91 124M132 36.1V68H66.26A92.36 92.36 0 0 1 132 36.1M36 176V80a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m30.26 12H132v31.9A92.36 92.36 0 0 1 66.26 188M140 219.91V188h4a12 12 0 0 0 12-12v-44h71.91A92.13 92.13 0 0 1 140 219.91"></svg:path>`,
})
export class PhMicrosoftPowerpointLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftTeamsLogoIcon],svg[ph-microsoft-teams-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 104a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m120-11.26V152a40 40 0 0 1-36.63 39.85a64 64 0 0 1-118.7.15H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h56.81a40 40 0 0 1 73.31-28.85A32 32 0 0 1 211.69 80h7.57A12.76 12.76 0 0 1 232 92.74M112 56a23.8 23.8 0 0 0 1.38 8H136a16 16 0 0 1 15.07 10.68A24 24 0 1 0 112 56m24 120V80H40v96zm48-80h-32v80a16 16 0 0 1-16 16H94.44A48 48 0 0 0 184 168Zm16-32a16 16 0 0 0-24.4-13.6A39.9 39.9 0 0 1 168 80h16a16 16 0 0 0 16-16m16 32h-16v72a63 63 0 0 1-.36 6.75A24 24 0 0 0 216 152Z"></svg:path>`,
})
export class PhMicrosoftTeamsLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftTeamsLogoBoldIcon],svg[ph-microsoft-teams-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 104a12 12 0 0 1-12 12h-4v36a12 12 0 0 1-24 0v-36h-4a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m124-11.26V152a44 44 0 0 1-42 44a68 68 0 0 1-122 4H36a20 20 0 0 1-20-20V76a20 20 0 0 1 20-20h56a44 44 0 0 1 80.51-24.53A36 36 0 0 1 221.94 76h1.32A16.76 16.76 0 0 1 240 92.74m-60-37.65V56a44.14 44.14 0 0 1-4.77 20H188a12 12 0 1 0-8-20.91M116 56h24a19.93 19.93 0 0 1 14.86 6.66A20.3 20.3 0 0 0 156 56a20 20 0 0 0-40 0M40 176h96V80H40Zm140-8v-68h-20v80a20 20 0 0 1-20 20h-34.14A44 44 0 0 0 180 168m36-68h-12v68c0 .79 0 1.57-.06 2.35A20 20 0 0 0 216 152Z"></svg:path>`,
})
export class PhMicrosoftTeamsLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftTeamsLogoDuotoneIcon],svg[ph-microsoft-teams-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M80 152v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16h-8v40a8 8 0 0 1-16 0m152-59.26V152a40 40 0 0 1-36.63 39.85a64 64 0 0 1-118.7.15H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h56.81a40 40 0 0 1 73.31-28.85A32 32 0 0 1 211.69 80h7.57A12.76 12.76 0 0 1 232 92.74M175.6 50.4A39.9 39.9 0 0 1 168 80h16a16 16 0 1 0-8.4-29.6M113.38 64H136a16 16 0 0 1 15.07 10.68A24 24 0 1 0 113.38 64M40 176h96V80H40Zm144-8V96h-32v80a16 16 0 0 1-16 16H94.44A48 48 0 0 0 184 168m32-72h-16v72a63 63 0 0 1-.36 6.75A24 24 0 0 0 216 152Z"></svg:path></svg:g>`,
})
export class PhMicrosoftTeamsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftTeamsLogoFillIcon],svg[ph-microsoft-teams-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.26 80h-7.57A31.7 31.7 0 0 0 216 64a32 32 0 0 0-45.88-28.85A40 40 0 0 0 96.81 64H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h36.67a64 64 0 0 0 118.7-.15A40 40 0 0 0 232 152V92.74A12.76 12.76 0 0 0 219.26 80M136 32a24 24 0 0 1 15.07 42.68A16 16 0 0 0 136 64h-22.62A24 24 0 0 1 136 32M88 160a8 8 0 0 1-8-8v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16h-8v40a8 8 0 0 1-8 8m96 8a48 48 0 0 1-89.56 24H136a16 16 0 0 0 16-16V96h32Zm0-88h-16a39.9 39.9 0 0 0 7.6-29.6A16 16 0 1 1 184 80m32 72a24 24 0 0 1-16.36 22.75A63 63 0 0 0 200 168V96h16Z"></svg:path>`,
})
export class PhMicrosoftTeamsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftTeamsLogoLightIcon],svg[ph-microsoft-teams-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 110H72a6 6 0 0 1 0-12h32a6 6 0 0 1 0 12H94v42a6 6 0 0 1-12 0Zm148-17.26V152a38.05 38.05 0 0 1-36 38a62 62 0 0 1-116 0H40a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h59.34a38 38 0 0 1 70-28.19A30 30 0 0 1 208 82h11.28A10.75 10.75 0 0 1 230 92.74m-56.58-43.29A37.3 37.3 0 0 1 174 56a38 38 0 0 1-10.28 26H184a18 18 0 1 0-10.58-32.55M112 66h24a14 14 0 0 1 13.84 12A26 26 0 1 0 112 66M40 178h96a2 2 0 0 0 2-2V80a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2m146-10V96a2 2 0 0 0-2-2h-34v82a14 14 0 0 1-14 14H91.1a50 50 0 0 0 94.9-22m32-74h-20.16a15 15 0 0 1 .16 2v72a63 63 0 0 1-.72 9.46A26 26 0 0 0 218 152Z"></svg:path>`,
})
export class PhMicrosoftTeamsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftTeamsLogoThinIcon],svg[ph-microsoft-teams-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 104a4 4 0 0 1-4 4H92v44a4 4 0 0 1-8 0v-44H72a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m120-11.26V152a36 36 0 0 1-35.44 36a60 60 0 0 1-113.13 0H40a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h62.07a36 36 0 0 1 66.48-27.36a28 28 0 0 1 35 43.36h15.69a8.75 8.75 0 0 1 8.76 8.74m-56.77-44.13A36 36 0 0 1 158.64 84H184a20 20 0 1 0-12.77-35.39M110.71 68H136a12 12 0 0 1 12 12v1.29A28 28 0 1 0 110.71 68M40 180h96a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4m148-12V96a4 4 0 0 0-4-4h-36v84a12 12 0 0 1-12 12H88a52 52 0 0 0 100-20m32-75.26a.74.74 0 0 0-.74-.74h-24a11.8 11.8 0 0 1 .7 4v72a60 60 0 0 1-1.18 11.86A28 28 0 0 0 220 152Z"></svg:path>`,
})
export class PhMicrosoftTeamsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftWordLogoIcon],svg[ph-microsoft-word-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 80h40v48h-40ZM72 40h128v48h-40v-8a16 16 0 0 0-16-16H72ZM40 80h104v96H40Zm32 136v-24h72a16 16 0 0 0 16-16v-8h40v48Zm-3.76-62.06l-12-48a8 8 0 1 1 15.52-3.88l6.76 27l6.32-12.66a8 8 0 0 1 14.32 0l6.32 12.66l6.76-27a8 8 0 0 1 15.52 3.88l-12 48a8 8 0 0 1-6.89 6a9 9 0 0 1-.87.05a8 8 0 0 1-7.16-4.42L92 137.89l-8.84 17.69a8 8 0 0 1-14.92-1.64"></svg:path>`,
})
export class PhMicrosoftWordLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftWordLogoBoldIcon],svg[ph-microsoft-word-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20H72a20 20 0 0 0-20 20v16H36a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h16v16a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-32 88h28v40h-28ZM76 44h120v40h-28v-8a20 20 0 0 0-20-20H76ZM40 80h104v96H40Zm36 132v-12h72a20 20 0 0 0 20-20v-8h28v40Zm-11.64-57.09l-12-48a12 12 0 1 1 23.28-5.82l4.13 16.53l1.5-3a12 12 0 0 1 21.46 0l1.5 3l4.13-16.53a12 12 0 0 1 23.28 5.82l-12 48a12 12 0 0 1-10.33 9a12 12 0 0 1-1.31.09a12 12 0 0 1-10.73-6.63L92 146.83l-5.27 10.54a12 12 0 0 1-22.37-2.46"></svg:path>`,
})
export class PhMicrosoftWordLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftWordLogoDuotoneIcon],svg[ph-microsoft-word-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 80v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-40 80h40v48h-40ZM72 40h128v48h-40v-8a16 16 0 0 0-16-16H72ZM40 80h104v96H40Zm32 136v-24h72a16 16 0 0 0 16-16v-8h40v48Zm-3.76-62.06l-12-48a8 8 0 1 1 15.52-3.88l6.76 27l6.32-12.66a8 8 0 0 1 14.32 0l6.32 12.66l6.76-27a8 8 0 0 1 15.52 3.88l-12 48a8 8 0 0 1-6.89 6a9 9 0 0 1-.87.05a8 8 0 0 1-7.16-4.42L92 137.89l-8.84 17.69a8 8 0 0 1-14.92-1.64"></svg:path></svg:g>`,
})
export class PhMicrosoftWordLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftWordLogoFillIcon],svg[ph-microsoft-word-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H72a16 16 0 0 0-16 16v24H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h16v24a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M68.24 153.94l-12-48a8 8 0 1 1 15.52-3.88l6.76 27l6.32-12.66a8 8 0 0 1 14.32 0l6.32 12.66l6.76-27a8 8 0 0 1 15.52 3.88l-12 48a8 8 0 0 1-6.89 6a9 9 0 0 1-.87.05a8 8 0 0 1-7.16-4.42L92 137.89l-8.84 17.69a8 8 0 0 1-14.92-1.64M200 216H72v-24h72a16 16 0 0 0 16-16v-8h40Zm0-64h-40v-48h40Zm0-64h-40v-8a16 16 0 0 0-16-16H72V40h128Z"></svg:path>`,
})
export class PhMicrosoftWordLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftWordLogoLightIcon],svg[ph-microsoft-word-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-42 76h44v52h-44ZM70 40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v50h-44V80a14 14 0 0 0-14-14H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m162 42H72a2 2 0 0 1-2-2v-26h74a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2M70.18 153.46l-12-48a6 6 0 1 1 11.64-2.92l8.07 32.27l8.74-17.49a6 6 0 0 1 10.74 0l8.74 17.49l8.07-32.27a6 6 0 1 1 11.64 2.92l-12 48a6 6 0 0 1-5.17 4.5a5 5 0 0 1-.65 0a6 6 0 0 1-5.37-3.32L92 133.42l-10.63 21.26a6 6 0 0 1-11.19-1.22"></svg:path>`,
})
export class PhMicrosoftWordLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrosoftWordLogoThinIcon],svg[ph-microsoft-word-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H72a12 12 0 0 0-12 12v28H40a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h20v28a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-44 72h48v56h-48ZM68 40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v52h-48V80a12 12 0 0 0-12-12H68ZM36 176V80a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m164 44H72a4 4 0 0 1-4-4v-28h76a12 12 0 0 0 12-12v-12h48v52a4 4 0 0 1-4 4M72.12 153l-12-48a4 4 0 1 1 7.76-2l9.38 37.51l11.16-22.33a4 4 0 0 1 7.16 0l11.16 22.33l9.38-37.51a4 4 0 0 1 7.76 1.94l-12 48a4 4 0 0 1-3.44 3H108a4 4 0 0 1-3.58-2.21L92 128.94l-12.42 24.85a4 4 0 0 1-7.46-.82Z"></svg:path>`,
})
export class PhMicrosoftWordLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusIcon],svg[ph-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusBoldIcon],svg[ph-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusCircleIcon],svg[ph-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 128a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m56 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhMinusCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusCircleBoldIcon],svg[ph-minus-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 128a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12m56 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhMinusCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusCircleDuotoneIcon],svg[ph-minus-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M176 128a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m56 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path></svg:g>`,
})
export class PhMinusCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusCircleFillIcon],svg[ph-minus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 112H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMinusCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusCircleLightIcon],svg[ph-minus-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 128a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m56 0A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhMinusCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusCircleThinIcon],svg[ph-minus-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 128a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m56 0A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhMinusCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusDuotoneIcon],svg[ph-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusFillIcon],svg[ph-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusLightIcon],svg[ph-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusSquareIcon],svg[ph-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-32-80a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhMinusSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusSquareBoldIcon],svg[ph-minus-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM76 128a12 12 0 0 1 12-12h80a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhMinusSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusSquareDuotoneIcon],svg[ph-minus-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-32-80a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMinusSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusSquareFillIcon],svg[ph-minus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-40 104H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMinusSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusSquareLightIcon],svg[ph-minus-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-36-80a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhMinusSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusSquareThinIcon],svg[ph-minus-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40-80a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhMinusSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMinusThinIcon],svg[ph-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyIcon],svg[ph-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112-96H16a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m-46.35 128H62.35A56.78 56.78 0 0 0 24 145.65v-35.3A56.78 56.78 0 0 0 62.35 72h131.3A56.78 56.78 0 0 0 232 110.35v35.3A56.78 56.78 0 0 0 193.65 184M232 93.37A40.8 40.8 0 0 1 210.63 72H232ZM45.37 72A40.8 40.8 0 0 1 24 93.37V72ZM24 162.63A40.8 40.8 0 0 1 45.37 184H24ZM210.63 184A40.8 40.8 0 0 1 232 162.63V184Z"></svg:path>`,
})
export class PhMoneyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyBoldIcon],svg[ph-money-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 52H16A12 12 0 0 0 4 64v128a12 12 0 0 0 12 12h224a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-58.79 128H74.79A60.18 60.18 0 0 0 28 133.21v-10.42A60.18 60.18 0 0 0 74.79 76h106.42A60.18 60.18 0 0 0 228 122.79v10.42A60.18 60.18 0 0 0 181.21 180M228 97.94A36.23 36.23 0 0 1 206.06 76H228ZM49.94 76A36.23 36.23 0 0 1 28 97.94V76ZM28 158.06A36.23 36.23 0 0 1 49.94 180H28ZM206.06 180A36.23 36.23 0 0 1 228 158.06V180ZM128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhMoneyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyDuotoneIcon],svg[ph-money-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32m40-64a48.85 48.85 0 0 0 40 40V64Zm0 128h40v-40a48.85 48.85 0 0 0-40 40M16 152v40h40a48.85 48.85 0 0 0-40-40m0-48a48.85 48.85 0 0 0 40-40H16Z" opacity=".2"></svg:path><svg:path d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112-96H16a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M24 72h21.37A40.8 40.8 0 0 1 24 93.37Zm0 112v-21.37A40.8 40.8 0 0 1 45.37 184Zm208 0h-21.37A40.8 40.8 0 0 1 232 162.63Zm0-38.35A56.78 56.78 0 0 0 193.65 184H62.35A56.78 56.78 0 0 0 24 145.65v-35.3A56.78 56.78 0 0 0 62.35 72h131.3A56.78 56.78 0 0 0 232 110.35Zm0-52.28A40.8 40.8 0 0 1 210.63 72H232Z"></svg:path></svg:g>`,
})
export class PhMoneyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyFillIcon],svg[ph-money-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 128a40 40 0 1 1-40-40a40 40 0 0 1 40 40m80-64v128a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h224a8 8 0 0 1 8 8m-16 46.35A56.78 56.78 0 0 1 193.65 72H62.35A56.78 56.78 0 0 1 24 110.35v35.3A56.78 56.78 0 0 1 62.35 184h131.3A56.78 56.78 0 0 1 232 145.65Z"></svg:path>`,
})
export class PhMoneyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyLightIcon],svg[ph-money-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 166a38 38 0 1 0-38-38a38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26m112-44H16a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h224a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6M22 108.82A54.73 54.73 0 0 0 60.82 70h134.36A54.73 54.73 0 0 0 234 108.82v38.36A54.73 54.73 0 0 0 195.18 186H60.82A54.73 54.73 0 0 0 22 147.18Zm212-12.53A42.8 42.8 0 0 1 207.71 70H234ZM48.29 70A42.8 42.8 0 0 1 22 96.29V70ZM22 159.71A42.8 42.8 0 0 1 48.29 186H22ZM207.71 186A42.8 42.8 0 0 1 234 159.71V186Z"></svg:path>`,
})
export class PhMoneyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyThinIcon],svg[ph-money-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 164a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-64a28 28 0 1 1-28 28a28 28 0 0 1 28-28m112-40H16a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h224a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4M20 107.26A52.75 52.75 0 0 0 59.26 68h137.48A52.75 52.75 0 0 0 236 107.26v41.48A52.75 52.75 0 0 0 196.74 188H59.26A52.75 52.75 0 0 0 20 148.74ZM236 99a44.8 44.8 0 0 1-31-31h31ZM51 68a44.8 44.8 0 0 1-31 31V68Zm-31 89a44.8 44.8 0 0 1 31 31H20Zm185 31a44.8 44.8 0 0 1 31-31v31Z"></svg:path>`,
})
export class PhMoneyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyWavyIcon],svg[ph-money-wavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0"></svg:path>`,
})
export class PhMoneyWavyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyWavyBoldIcon],svg[ph-money-wavy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.36 56.55a12 12 0 0 0-11.63-.6c-41.48 20.29-71.4 10.71-103.07.56c-33.18-10.62-70.78-22.66-120.93 1.86A12 12 0 0 0 4 69.16v120.1a12 12 0 0 0 17.27 10.79c41.48-20.29 71.4-10.71 103.07-.56c18.83 6 39.08 12.51 62.24 12.51c17.66 0 37-3.77 58.69-14.37a12 12 0 0 0 6.73-10.79V66.74a12 12 0 0 0-5.64-10.19M228 179.12c-38 16.16-66.41 7.07-96.34-2.51c-18.83-6-39.08-12.52-62.24-12.52A124.9 124.9 0 0 0 28 171.24V76.88c38-16.16 66.41-7.08 96.34 2.51c29.26 9.37 61.95 19.84 103.66 5.37ZM128 96a32 32 0 1 0 32 32a32.06 32.06 0 0 0-32-32m0 40a8 8 0 1 1 8-8a8 8 0 0 1-8 8m-64-36v40a12 12 0 1 1-24 0v-40a12 12 0 1 1 24 0m128 56v-40a12 12 0 1 1 24 0v40a12 12 0 1 1-24 0"></svg:path>`,
})
export class PhMoneyWavyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyWavyDuotoneIcon],svg[ph-money-wavy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0"></svg:path></svg:g>`,
})
export class PhMoneyWavyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyWavyFillIcon],svg[ph-money-wavy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34.09-10.85-69.29-22.1-118 1.68A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M48 152a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm80 8a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 8a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhMoneyWavyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyWavyLightIcon],svg[ph-money-wavy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.18 61.72a6 6 0 0 0-5.81-.3c-43.66 21.32-74.69 11.39-107.54.88c-33.67-10.77-68.48-21.9-116.46 1.54A6 6 0 0 0 10 69.23v120a6 6 0 0 0 8.63 5.39c43.66-21.32 74.69-11.39 107.54-.88c19 6.09 38.46 12.3 60.42 12.3c16.85 0 35.21-3.66 56-13.84a6 6 0 0 0 3.37-5.39v-120a6 6 0 0 0-2.78-5.09M234 183c-41.9 19.21-72.17 9.53-104.17-.71C110.78 176.18 91.37 170 69.41 170c-14.49 0-30.08 2.7-47.41 9.92V73c41.9-19.21 72.17-9.53 104.17.71c31.61 10.13 64.24 20.57 107.83 2.4ZM128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18M54 96v48a6 6 0 0 1-12 0V96a6 6 0 1 1 12 0m148 64v-48a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhMoneyWavyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoneyWavyThinIcon],svg[ph-money-wavy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.12 63.39a4 4 0 0 0-3.88-.2c-44.37 21.68-75.77 11.64-109 1s-67.71-21.67-115 1.42a4 4 0 0 0-2.24 3.6v120a4 4 0 0 0 5.76 3.6c44.37-21.68 75.77-11.64 109-1c18.86 6 38.08 12.19 59.8 12.19c16.61 0 34.69-3.6 55.18-13.61a4 4 0 0 0 2.24-3.6v-120a4 4 0 0 0-1.86-3.4M236 184.27c-43.19 20.27-74.1 10.38-106.78-.08c-18.86-6-38.08-12.18-59.8-12.18c-15 0-31.28 3-49.42 10.94V71.73c43.19-20.27 74.1-10.38 106.78.08C158.7 82 191.67 92.57 236 73.05ZM128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20M52 96v48a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m152 64v-48a4 4 0 0 1 8 0v48a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhMoneyWavyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorIcon],svg[ph-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhMonitorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpIcon],svg[ph-monitor-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-10.34-117.66a8 8 0 0 1-11.32 11.32L136 107.31V152a8 8 0 0 1-16 0v-44.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path>`,
})
export class PhMonitorArrowUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpBoldIcon],svg[ph-monitor-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40 52a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-11.51-124.49a12 12 0 0 1-17 17L140 117v35a12 12 0 0 1-24 0v-35l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhMonitorArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpDuotoneIcon],svg[ph-monitor-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-10.34-117.66a8 8 0 0 1-11.32 11.32L136 107.31V152a8 8 0 0 1-16 0v-44.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhMonitorArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpFillIcon],svg[ph-monitor-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m64-160v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-74.34 42.34l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L120 107.31V152a8 8 0 0 0 16 0v-44.69l10.34 10.35a8 8 0 0 0 11.32-11.32"></svg:path>`,
})
export class PhMonitorArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpLightIcon],svg[ph-monitor-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10Zm-52 48a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-9.76-116.24a6 6 0 1 1-8.48 8.48L134 102.49V152a6 6 0 0 1-12 0v-49.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhMonitorArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpThinIcon],svg[ph-monitor-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Zm-56 48a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-9.17-114.83a4 4 0 0 1-5.66 5.66L132 97.66V152a4 4 0 0 1-8 0V97.66l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhMonitorArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorBoldIcon],svg[ph-monitor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40 52a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhMonitorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorDuotoneIcon],svg[ph-monitor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMonitorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorFillIcon],svg[ph-monitor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-72 152H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhMonitorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorLightIcon],svg[ph-monitor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10Zm-52 48a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhMonitorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorPlayIcon],svg[ph-monitor-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-3.56-110.66l-48-32A8 8 0 0 0 104 88v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 137.05V103l25.58 17Z"></svg:path>`,
})
export class PhMonitorPlayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorPlayBoldIcon],svg[ph-monitor-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 120a12 12 0 0 1-5.12 9.83l-40 28A12 12 0 0 1 104 148V92a12 12 0 0 1 18.88-9.83l40 28A12 12 0 0 1 168 120m68-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Zm-52 152H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhMonitorPlayBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorPlayDuotoneIcon],svg[ph-monitor-play-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-96 104V88l48 32Z" opacity=".2"></svg:path><svg:path d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-3.56-110.66l-48-32A8 8 0 0 0 104 88v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 137.05V103l25.58 17Z"></svg:path></svg:g>`,
})
export class PhMonitorPlayDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorPlayFillIcon],svg[ph-monitor-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m64-160v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-68 56a8 8 0 0 0-3.41-6.55l-40-28A8 8 0 0 0 108 92v56a8 8 0 0 0 12.59 6.55l40-28A8 8 0 0 0 164 120"></svg:path>`,
})
export class PhMonitorPlayFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorPlayLightIcon],svg[ph-monitor-play-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m163.33 115l-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M118 140.79V99.21L149.18 120ZM208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10Zm-52 48a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhMonitorPlayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorPlayThinIcon],svg[ph-monitor-play-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m162.22 116.67l-48-32A4 4 0 0 0 108 88v64a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M116 144.53V95.47L152.79 120ZM208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Zm-56 48a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhMonitorPlayThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMonitorThinIcon],svg[ph-monitor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Zm-56 48a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhMonitorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonIcon],svg[ph-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"></svg:path>`,
})
export class PhMoonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonBoldIcon],svg[ph-moon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.1 107.1 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97m-49.88 47.74A84 84 0 0 1 68.86 69.51a84.9 84.9 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.8 84.8 0 0 1-21.22 23.41"></svg:path>`,
})
export class PhMoonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonDuotoneIcon],svg[ph-moon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M227.89 147.89A96 96 0 1 1 108.11 28.11a96.09 96.09 0 0 0 119.78 119.78" opacity=".2"></svg:path><svg:path d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"></svg:path></svg:g>`,
})
export class PhMoonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonFillIcon],svg[ph-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.1 103.1 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"></svg:path>`,
})
export class PhMoonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonLightIcon],svg[ph-moon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.13 143.64a6 6 0 0 0-6-1.49a90.07 90.07 0 0 1-112.27-112.3a6 6 0 0 0-7.49-7.48a102.88 102.88 0 0 0-51.89 36.31a102 102 0 0 0 142.84 142.84a102.88 102.88 0 0 0 36.31-51.89a6 6 0 0 0-1.5-5.99m-42 48.29a90 90 0 0 1-126-126a90.9 90.9 0 0 1 35.52-28.27a102.06 102.06 0 0 0 118.69 118.69a90.9 90.9 0 0 1-28.24 35.58Z"></svg:path>`,
})
export class PhMoonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonStarsIcon],svg[ph-moon-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 96a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-96-40h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16m72.77 97a8 8 0 0 1 1.43 8A96 96 0 1 1 95.07 37.8a8 8 0 0 1 10.6 9.06a88.07 88.07 0 0 0 103.47 103.47a8 8 0 0 1 7.63 2.67m-19.39 14.88c-1.79.09-3.59.14-5.38.14A104.11 104.11 0 0 1 88 64c0-1.79 0-3.59.14-5.38a80 80 0 1 0 109.24 109.24Z"></svg:path>`,
})
export class PhMoonStarsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonStarsBoldIcon],svg[ph-moon-stars-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 96a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12V72a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12M144 60h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24m75.81 90.38A12 12 0 0 1 222 162.3A100 100 0 1 1 93.7 34a12 12 0 0 1 15.89 13.6A85 85 0 0 0 108 64a84.09 84.09 0 0 0 84 84a85 85 0 0 0 16.37-1.59a12 12 0 0 1 11.44 3.97M190 172A108.13 108.13 0 0 1 84 66a76 76 0 1 0 106 106"></svg:path>`,
})
export class PhMoonStarsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonStarsDuotoneIcon],svg[ph-moon-stars-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M210.69 158.18A88 88 0 1 1 97.82 45.31A96.08 96.08 0 0 0 192 160a97 97 0 0 0 18.69-1.82" opacity=".2"></svg:path><svg:path d="M240 96a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-96-40h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16m72.77 97a8 8 0 0 1 1.43 8A96 96 0 1 1 95.07 37.8a8 8 0 0 1 10.6 9.06a88.07 88.07 0 0 0 103.47 103.47a8 8 0 0 1 7.63 2.67m-19.39 14.88c-1.79.09-3.59.14-5.38.14A104.11 104.11 0 0 1 88 64c0-1.79 0-3.59.14-5.38a80 80 0 1 0 109.24 109.24Z"></svg:path></svg:g>`,
})
export class PhMoonStarsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonStarsFillIcon],svg[ph-moon-stars-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 96a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-96-40h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16m65.14 94.33A88.07 88.07 0 0 1 105.67 46.86a8 8 0 0 0-10.6-9.06A96 96 0 1 0 218.2 160.93a8 8 0 0 0-9.06-10.6"></svg:path>`,
})
export class PhMoonStarsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonStarsLightIcon],svg[ph-moon-stars-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 96a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18V72a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6m-94-42h10v10a6 6 0 0 0 12 0V54h10a6 6 0 0 0 0-12h-10V32a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12m71.25 100.28a6 6 0 0 1 1.07 6A94 94 0 1 1 95.76 39.68a6 6 0 0 1 7.94 6.79A90.11 90.11 0 0 0 192 154a91 91 0 0 0 17.53-1.7a6 6 0 0 1 5.72 1.98m-14.37 11.34q-4.42.38-8.88.38A102.12 102.12 0 0 1 90 64q0-4.45.38-8.88a82 82 0 1 0 110.5 110.5"></svg:path>`,
})
export class PhMoonStarsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonStarsThinIcon],svg[ph-moon-stars-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 96a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20V72a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-92-44h12v12a4 4 0 0 0 8 0V52h12a4 4 0 0 0 0-8h-12V32a4 4 0 0 0-8 0v12h-12a4 4 0 0 0 0 8m69.73 103.58a4 4 0 0 1 .71 4a92 92 0 1 1-118-118a4 4 0 0 1 5.29 4.54A93 93 0 0 0 100 64a92.1 92.1 0 0 0 92 92a93 93 0 0 0 17.91-1.74a4 4 0 0 1 3.82 1.32m-9.46 7.67A100 100 0 0 1 92.75 51.73a84 84 0 1 0 111.52 111.52"></svg:path>`,
})
export class PhMoonStarsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMoonThinIcon],svg[ph-moon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.72 145.06a4 4 0 0 0-4-1A92.08 92.08 0 0 1 111.94 29.27a4 4 0 0 0-5-5a100.78 100.78 0 0 0-50.86 35.61a100 100 0 0 0 140 140a100.78 100.78 0 0 0 35.59-50.87a4 4 0 0 0-.95-3.95m-39.42 48.47A92 92 0 0 1 62.47 64.7a93 93 0 0 1 39.88-30.35a100.09 100.09 0 0 0 119.3 119.3a93 93 0 0 1-30.35 39.88"></svg:path>`,
})
export class PhMoonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedIcon],svg[ph-moped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128a39 39 0 0 0-6.27.5l-34.24-91.31A8 8 0 0 0 168 32h-32a8 8 0 0 0 0 16h26.46l32.3 86.13a40.13 40.13 0 0 0-18 25.87h-40.22l-25-66.81A8 8 0 0 0 104 88H24a8 8 0 0 0 0 16h8v13.39A56.12 56.12 0 0 0 0 168a8 8 0 0 0 8 8h8.8a40 40 0 0 0 78.4 0h81.6a40 40 0 1 0 39.2-48m-173.33 2.27a8 8 0 0 0 5.33-7.54V104h50.46l21 56H16.81a40.07 40.07 0 0 1 25.86-29.73M56 192a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 56 192m160 0a24 24 0 0 1-15.43-42.36l7.94 21.17a8 8 0 0 0 15-5.62L215.55 144h.45a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhMopedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedBoldIcon],svg[ph-moped-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 124c-1.22 0-2.43.06-3.62.16l-33.14-88.37A12 12 0 0 0 164 28h-32a12 12 0 0 0 0 24h23.68l30.23 80.6A44.3 44.3 0 0 0 171 152h-29.2l-22.56-60.21A12 12 0 0 0 108 84H28a12 12 0 0 0 0 24h4v2.92A60.14 60.14 0 0 0 0 164a12 12 0 0 0 12 12h4.74a44 44 0 0 0 86.52 0h65.48A44 44 0 1 0 212 124m-164 6.05a12 12 0 0 0 8-11.32V108h43.68l16.5 44H26.06A36 36 0 0 1 48 130.05M60 188a20 20 0 0 1-18.32-12h36.64A20 20 0 0 1 60 188m152 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhMopedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedDuotoneIcon],svg[ph-moped-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M131 168H8a48 48 0 0 1 32-45.27V96h64Z" opacity=".2"></svg:path><svg:path d="M216 128a39 39 0 0 0-6.27.5l-34.24-91.31A8 8 0 0 0 168 32h-32a8 8 0 0 0 0 16h26.46l32.3 86.13a40.13 40.13 0 0 0-18 25.87h-40.22l-25-66.81A8 8 0 0 0 104 88H24a8 8 0 0 0 0 16h8v13.39A56.12 56.12 0 0 0 0 168a8 8 0 0 0 8 8h8.8a40 40 0 0 0 78.4 0h81.6a40 40 0 1 0 39.2-48M56 192a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 56 192m-39.19-32a40.07 40.07 0 0 1 25.86-29.73a8 8 0 0 0 5.33-7.54V104h50.46l21 56ZM216 192a24 24 0 0 1-15.43-42.36l7.94 21.17a8 8 0 0 0 15-5.62L215.55 144h.45a24 24 0 0 1 0 48"></svg:path></svg:g>`,
})
export class PhMopedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedFillIcon],svg[ph-moped-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128a39 39 0 0 0-6.27.5l-34.24-91.31A8 8 0 0 0 168 32h-32a8 8 0 0 0 0 16h26.46l32.3 86.13a40.13 40.13 0 0 0-18 25.87h-40.22l-25-66.81A8 8 0 0 0 104 88H24a8 8 0 0 0 0 16h8v13.39A56.12 56.12 0 0 0 0 168a8 8 0 0 0 8 8h8.8a40 40 0 0 0 78.4 0h81.6a40 40 0 1 0 39.2-48M56 192a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 56 192m160 0a24 24 0 0 1-15.43-42.36l7.94 21.17a8 8 0 0 0 15-5.62L215.55 144h.45a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhMopedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedFrontIcon],svg[ph-moped-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40h-40.8a40 40 0 0 0-78.4 0H48a8 8 0 0 0 0 16h40.8a40 40 0 0 0 12.58 21.82A64.08 64.08 0 0 0 64 136v64a16 16 0 0 0 16 16h16a32 32 0 0 0 64 0h16a16 16 0 0 0 16-16v-64a64.08 64.08 0 0 0-37.38-58.18A40 40 0 0 0 167.2 56H208a8 8 0 0 0 0-16m-64 176a16 16 0 0 1-32 0v-48a16 16 0 0 1 32 0Zm32-80v64h-16v-32a32 32 0 0 0-64 0v32H80v-64a48 48 0 0 1 96 0m-72-88a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path>`,
})
export class PhMopedFrontIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedFrontBoldIcon],svg[ph-moped-front-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-37.68a44 44 0 0 0-84.64 0H48a12 12 0 0 0 0 24h37.68a43.9 43.9 0 0 0 9 16.73A68 68 0 0 0 60 136v64a20 20 0 0 0 20 20h16a32 32 0 0 0 64 0h16a20 20 0 0 0 20-20v-64a68 68 0 0 0-34.72-59.27a43.9 43.9 0 0 0 9-16.73H208a12 12 0 0 0 0-24m-72 184a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0Zm36-24h-12v-32a32 32 0 0 0-64 0v32H84v-60a44 44 0 0 1 88 0ZM108 48a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhMopedFrontBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedFrontDuotoneIcon],svg[ph-moped-front-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 168v48a24 24 0 0 1-48 0v-48a24 24 0 0 1 48 0m-24-88a32 32 0 1 0-32-32a32 32 0 0 0 32 32" opacity=".2"></svg:path><svg:path d="M208 40h-40.8a40 40 0 0 0-78.4 0H48a8 8 0 0 0 0 16h40.8a40 40 0 0 0 12.58 21.82A64.08 64.08 0 0 0 64 136v64a16 16 0 0 0 16 16h16a32 32 0 0 0 64 0h16a16 16 0 0 0 16-16v-64a64.08 64.08 0 0 0-37.38-58.18A40 40 0 0 0 167.2 56H208a8 8 0 0 0 0-16m-64 176a16 16 0 0 1-32 0v-48a16 16 0 0 1 32 0Zm32-80v64h-16v-32a32 32 0 0 0-64 0v32H80v-64a48 48 0 0 1 96 0m-72-88a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path></svg:g>`,
})
export class PhMopedFrontDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedFrontFillIcon],svg[ph-moped-front-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40h-40.8a40 40 0 0 0-78.4 0H48a8 8 0 0 0 0 16h40.8a40 40 0 0 0 12.58 21.82A64.08 64.08 0 0 0 64 136v64a16 16 0 0 0 16 16h16a32 32 0 0 0 64 0h16a16 16 0 0 0 16-16v-64a64.08 64.08 0 0 0-37.38-58.18A40 40 0 0 0 167.2 56H208a8 8 0 0 0 0-16m-64 176a16 16 0 0 1-32 0v-48a16 16 0 0 1 32 0ZM128 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhMopedFrontFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedFrontLightIcon],svg[ph-moped-front-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42h-42.48a38 38 0 0 0-75 0H48a6 6 0 0 0 0 12h42.48a38 38 0 0 0 14.71 24.37A62.09 62.09 0 0 0 66 136v64a14 14 0 0 0 14 14h18v2a30 30 0 0 0 60 0v-2h18a14 14 0 0 0 14-14v-64a62.09 62.09 0 0 0-39.19-57.63A38 38 0 0 0 165.52 54H208a6 6 0 0 0 0-12m-62 174a18 18 0 0 1-36 0v-48a18 18 0 0 1 36 0Zm32-80v64a2 2 0 0 1-2 2h-18v-34a30 30 0 0 0-60 0v34H80a2 2 0 0 1-2-2v-64a50 50 0 0 1 100 0m-50-62a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhMopedFrontLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedFrontThinIcon],svg[ph-moped-front-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44h-44.23a36 36 0 0 0-71.54 0H48a4 4 0 0 0 0 8h44.23a36.06 36.06 0 0 0 17.34 26.91A60.11 60.11 0 0 0 68 136v64a12 12 0 0 0 12 12h20v4a28 28 0 0 0 56 0v-4h20a12 12 0 0 0 12-12v-64a60.11 60.11 0 0 0-41.57-57.09A36.06 36.06 0 0 0 163.77 52H208a4 4 0 0 0 0-8m-60 172a20 20 0 0 1-40 0v-48a20 20 0 0 1 40 0Zm32-80v64a4 4 0 0 1-4 4h-20v-36a28 28 0 0 0-56 0v36H80a4 4 0 0 1-4-4v-64a52 52 0 0 1 104 0m-52-60a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhMopedFrontThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedLightIcon],svg[ph-moped-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 130a37.7 37.7 0 0 0-7.56.76l-34.82-92.87A6 6 0 0 0 168 34h-32a6 6 0 0 0 0 12h27.84l33.37 89a38.08 38.08 0 0 0-18.73 27h-43.32l-25.54-68.11A6 6 0 0 0 104 90H24a6 6 0 0 0 0 12h10v16.67A54.12 54.12 0 0 0 2 168a6 6 0 0 0 6 6h10.48a38 38 0 0 0 75 0h85A38 38 0 1 0 216 130m-174-1.61a6 6 0 0 0 4-5.66V102h53.84l22.5 60H14.43A42.07 42.07 0 0 1 42 128.39M56 194a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 56 194m160 0a26 26 0 0 1-14.5-47.57l8.88 23.68a6 6 0 0 0 11.24-4.22l-8.88-23.68A27 27 0 0 1 216 142a26 26 0 0 1 0 52"></svg:path>`,
})
export class PhMopedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMopedThinIcon],svg[ph-moped-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 132a35.7 35.7 0 0 0-8.82 1.1l-35.43-94.5A4 4 0 0 0 168 36h-32a4 4 0 0 0 0 8h29.23l34.47 91.92A36.06 36.06 0 0 0 180.23 164h-46.46l-26-69.4A4 4 0 0 0 104 92H24a4 4 0 0 0 0 8h12v20a52.1 52.1 0 0 0-32 48a4 4 0 0 0 4 4h12.23a36 36 0 0 0 71.54 0h88.46A36 36 0 1 0 216 132m-174.67-5.5a4 4 0 0 0 2.67-3.77V100h57.23l24 64h-113a44.1 44.1 0 0 1 29.1-37.5M56 196a28 28 0 0 1-27.71-24h55.42A28 28 0 0 1 56 196m160 0a28 28 0 0 1-13.47-52.54l9.72 25.94a4 4 0 1 0 7.5-2.8L210 140.65a28 28 0 1 1 6 55.35"></svg:path>`,
})
export class PhMopedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMosqueIcon],svg[ph-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a23.8 23.8 0 0 0-8 1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16 41.06 136 33 136 24a8 8 0 0 0-16 0c0 9-12.16 17.06-26.24 26.44C71.07 65.54 40 86.22 40 128v1.38A24 24 0 0 0 8 152v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56a24 24 0 0 0-24-24M102.63 63.76c9.67-6.44 19-12.68 25.37-20c6.34 7.35 15.7 13.59 25.37 20c20 13.32 42.48 28.29 46.11 56.24h-143c3.67-27.95 26.12-42.92 46.15-56.24M24 152a8 8 0 0 1 16 0v48H24Zm136 0a24 24 0 0 0-24 24v24h-16v-24a24 24 0 0 0-48 0v24H56v-64h144v64h-16v-24a24 24 0 0 0-24-24m72 48h-16v-48a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhMosqueIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMosqueBoldIcon],svg[ph-mosque-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 124a32 32 0 0 0-8.06 1c-1.29-41.54-29.35-62.32-50-77.58C150.18 38.73 140 31.21 140 24a12 12 0 0 0-24 0c0 7.21-10.18 14.73-22 23.45c-20.63 15.26-48.69 36-50 77.58A32 32 0 0 0 4 156v52a12 12 0 0 0 12 12h224a12 12 0 0 0 12-12v-52a32 32 0 0 0-32-32M44 196H28v-40a8 8 0 0 1 16 0Zm64.31-129.26c7-5.14 14-10.36 19.69-16.27c5.68 5.91 12.74 11.13 19.69 16.27C164.8 79.4 182.4 92.44 186.9 116H69.1c4.5-23.56 22.1-36.6 39.21-49.26M188 196h-24v-28a12 12 0 0 0-24 0v28h-24v-28a12 12 0 0 0-24 0v28H68v-56h120Zm40 0h-16v-40a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhMosqueBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMosqueDuotoneIcon],svg[ph-mosque-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128H48c0-64 80-72 80-104c0 32 80 40 80 104" opacity=".2"></svg:path><svg:path d="M224 128a23.8 23.8 0 0 0-8 1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16 41.06 136 33 136 24a8 8 0 0 0-16 0c0 9-12.16 17.06-26.24 26.44C71.07 65.54 40 86.22 40 128v1.38A24 24 0 0 0 8 152v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56a24 24 0 0 0-24-24M40 200H24v-48a8 8 0 0 1 16 0Zm62.63-136.24c9.67-6.44 19-12.68 25.37-20c6.34 7.35 15.7 13.59 25.37 20c20 13.32 42.48 28.29 46.11 56.24h-143c3.67-27.95 26.12-42.92 46.15-56.24M200 200h-16v-24a24 24 0 0 0-48 0v24h-16v-24a24 24 0 0 0-48 0v24H56v-64h144Zm32 0h-16v-48a8 8 0 0 1 16 0Z"></svg:path></svg:g>`,
})
export class PhMosqueDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMosqueFillIcon],svg[ph-mosque-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a23.8 23.8 0 0 0-8 1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16 41.06 136 33 136 24a8 8 0 0 0-16 0c0 9-12.16 17.06-26.24 26.44C71.07 65.54 40 86.22 40 128v1.38A24 24 0 0 0 8 152v56a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8v-32a16 16 0 0 1 32 0v32a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-32a16 16 0 0 1 32 0v32a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8v-56a24 24 0 0 0-24-24M40 200H24v-48a8 8 0 0 1 16 0Zm192 0h-16v-48a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhMosqueFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMosqueLightIcon],svg[ph-mosque-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 130a21.84 21.84 0 0 0-10 2.41V128c0-40.71-29.31-60.22-52.87-75.9C146.57 42.41 134 34 134 24a6 6 0 0 0-12 0c0 10-12.57 18.41-27.13 28.1C71.31 67.78 42 87.29 42 128v4.41A22 22 0 0 0 10 152v56a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-32a10 10 0 0 1 20 0v32a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6v-32a10 10 0 0 1 20 0v32a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-56a22 22 0 0 0-22-22M101.52 62.09c10.37-6.9 20.38-13.56 26.48-21.57c6.1 8 16.11 14.67 26.48 21.57C175.41 76 199 91.71 201.73 122H54.27C57 91.71 80.59 76 101.52 62.09M22 152a10 10 0 0 1 20 0v50H22Zm138 2a22 22 0 0 0-22 22v26h-20v-26a22 22 0 0 0-44 0v26H54v-68h148v68h-20v-26a22 22 0 0 0-22-22m74 48h-20v-50a10 10 0 0 1 20 0Z"></svg:path>`,
})
export class PhMosqueLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMosqueThinIcon],svg[ph-mosque-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 132a19.9 19.9 0 0 0-12 4v-8c0-39.63-28.82-58.82-52-74.23c-15-10-28-18.66-28-29.77a4 4 0 0 0-8 0c0 11.11-13 19.76-28 29.77C72.82 69.18 44 88.37 44 128v8a20 20 0 0 0-32 16v56a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-32a12 12 0 0 1 24 0v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4v-32a12 12 0 0 1 24 0v32a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-56a20 20 0 0 0-20-20M100.41 60.43C112 52.71 122.51 45.71 128 37.14c5.49 8.57 16 15.57 27.59 23.29C177.41 75 202 91.34 203.87 124H52.13C54 91.34 78.59 75 100.41 60.43M20 152a12 12 0 0 1 24 0v52H20Zm140 4a20 20 0 0 0-20 20v28h-24v-28a20 20 0 0 0-40 0v28H52v-72h152v72h-24v-28a20 20 0 0 0-20-20m76 48h-24v-52a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhMosqueThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMotorcycleIcon],svg[ph-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 120a41 41 0 0 0-6.6.55l-5.82-15.14A55.6 55.6 0 0 1 216 104a8 8 0 0 0 0-16h-19.12l-13.41-34.87A8 8 0 0 0 176 48h-32a8 8 0 0 0 0 16h26.51l9.23 24H152c-18.5 0-33.5 4.31-43.37 12.46a16 16 0 0 1-16.76 2.07c-10.58-4.81-60.74-25.2-65.16-26.93L21 73.36A17.7 17.7 0 0 0 16 72a8 8 0 0 0-2.87 15.46c.46.18 47.19 18.3 72.13 29.63a32.15 32.15 0 0 0 33.56-4.29c4.86-4 14.57-8.8 33.19-8.8h18.82a71.74 71.74 0 0 0-24.17 36.59A15.86 15.86 0 0 1 131.32 152H79.2a40 40 0 1 0 0 16h52.12a31.91 31.91 0 0 0 30.74-23.1a56 56 0 0 1 26.59-33.72l5.82 15.13A40 40 0 1 0 216 120M40 168h22.62a24 24 0 1 1 0-16H40a8 8 0 0 0 0 16m176 16a24 24 0 0 1-15.58-42.23l8.11 21.1a8 8 0 1 0 14.94-5.74L215.35 136h.65a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhMotorcycleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMotorcycleBoldIcon],svg[ph-motorcycle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 112h-1.69l-3.5-11.8c1.71-.15 3.44-.24 5.19-.24a12 12 0 0 0 0-24h-12.37l-8.12-27.41A12 12 0 0 0 176 40h-32a12 12 0 0 0 0 24h23l3.56 12H152c-19.44 0-35.32 4.62-45.92 13.37a12 12 0 0 1-12.56 1.52c-13.13-6-57.19-25-61.65-26.89l-5.27-2.24S22.4 60 20 60a12 12 0 0 0-4.61 23.08c1.72.73 43.67 18.5 68.2 29.66a36.25 36.25 0 0 0 15 3.23a35.78 35.78 0 0 0 22.78-8.09c5.74-4.73 15.58-7.48 27.89-7.84a84 84 0 0 0-24.4 48H94.48a48 48 0 1 0 0 24H136a12 12 0 0 0 12-12a60 60 0 0 1 31.8-52.94l3.5 11.8A48 48 0 1 0 208 112M48 172h20.77a24 24 0 1 1 0-24H48a12 12 0 0 0 0 24m160 12a24 24 0 0 1-17.4-40.5l5.89 19.91A12 12 0 0 0 208 172a12.3 12.3 0 0 0 3.41-.49a12 12 0 0 0 8.1-14.92l-5.91-19.92A24 24 0 0 1 208 184"></svg:path>`,
})
export class PhMotorcycleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMotorcycleDuotoneIcon],svg[ph-motorcycle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 160a32 32 0 1 1-32-32a32 32 0 0 1 32 32M40 128a32 32 0 1 0 32 32a32 32 0 0 0-32-32" opacity=".2"></svg:path><svg:path d="M216 120a41 41 0 0 0-6.6.55l-5.82-15.14A55.6 55.6 0 0 1 216 104a8 8 0 0 0 0-16h-19.12l-13.41-34.87A8 8 0 0 0 176 48h-32a8 8 0 0 0 0 16h26.51l9.23 24H152c-18.5 0-33.5 4.31-43.37 12.46a16 16 0 0 1-16.76 2.07c-10.58-4.81-60.74-25.2-65.16-26.93L21 73.36A17.7 17.7 0 0 0 16 72a8 8 0 0 0-2.87 15.46c.46.18 47.19 18.3 72.13 29.63a32.15 32.15 0 0 0 33.56-4.29c4.86-4 14.57-8.8 33.19-8.8h18.82a71.74 71.74 0 0 0-24.17 36.59A15.86 15.86 0 0 1 131.32 152H79.2a40 40 0 1 0 0 16h52.12a31.91 31.91 0 0 0 30.74-23.1a56 56 0 0 1 26.59-33.72l5.82 15.13A40 40 0 1 0 216 120M40 168h22.62a24 24 0 1 1 0-16H40a8 8 0 0 0 0 16m176 16a24 24 0 0 1-15.58-42.23l8.11 21.1a8 8 0 1 0 14.94-5.74L215.35 136h.65a24 24 0 0 1 0 48"></svg:path></svg:g>`,
})
export class PhMotorcycleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMotorcycleFillIcon],svg[ph-motorcycle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 120a41 41 0 0 0-6.6.55l-5.82-15.14A55.6 55.6 0 0 1 216 104a8 8 0 0 0 0-16h-19.12l-13.41-34.87A8 8 0 0 0 176 48h-32a8 8 0 0 0 0 16h26.51l9.23 24H152c-18.5 0-33.5 4.31-43.37 12.46a16 16 0 0 1-16.76 2.07c-10.58-4.81-73.29-30.12-73.8-30.26a8 8 0 0 0-5 15.19s55.5 21.94 66.53 32.94A55.67 55.67 0 0 1 95.43 152H79.2a40 40 0 1 0 0 16h52.12a31.91 31.91 0 0 0 30.74-23.1a56 56 0 0 1 26.59-33.72l5.82 15.13A40 40 0 1 0 216 120M40 168h22.62a24 24 0 1 1 0-16H40a8 8 0 0 0 0 16m176 16a24 24 0 0 1-15.58-42.23l8.11 21.1a8 8 0 1 0 14.94-5.74L215.35 136h.65a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhMotorcycleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMotorcycleLightIcon],svg[ph-motorcycle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 122a38.5 38.5 0 0 0-7.87.82L200.9 104a57.8 57.8 0 0 1 15.1-2a6 6 0 0 0 0-12h-20.49L181.6 53.85A6 6 0 0 0 176 50h-32a6 6 0 0 0 0 12h27.88l10.77 28H152c-18 0-32.58 4.15-42.1 12a18.05 18.05 0 0 1-18.9 2.35c-13.1-5.97-60.6-25.16-65-26.89l-5.72-2.24A14.7 14.7 0 0 0 16 74a6 6 0 0 0-2.15 11.6c.46.18 47.13 18.26 72.23 29.67a30.12 30.12 0 0 0 31.47-4c7.34-6 19.25-9.25 34.46-9.25h24.89a70 70 0 0 0-28.32 39.13A17.85 17.85 0 0 1 131.32 154h-53.8a38 38 0 1 0 0 12h53.8a29.9 29.9 0 0 0 28.81-21.64a58 58 0 0 1 29.58-36l7.23 18.8A38 38 0 1 0 216 122M40 166h25.29a26 26 0 1 1 0-12H40a6 6 0 0 0 0 12m176 20a26 26 0 0 1-14.68-47.45l9.08 23.6a6 6 0 0 0 11.2-4.3l-9.08-23.61A27 27 0 0 1 216 134a26 26 0 0 1 0 52"></svg:path>`,
})
export class PhMotorcycleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMotorcycleThinIcon],svg[ph-motorcycle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 124a36 36 0 0 0-9.11 1.17l-8.64-22.46A59.6 59.6 0 0 1 216 100a4 4 0 0 0 0-8h-21.87l-14.4-37.44A4 4 0 0 0 176 52h-32a4 4 0 0 0 0 8h29.25l12.31 32H152c-17.56 0-31.67 4-40.83 11.54a20.05 20.05 0 0 1-21 2.63c-13.11-6-60.55-25.12-65-26.85C22.83 78.37 17.24 76 16 76a4 4 0 0 0-1.43 7.72c.46.18 47.42 18.4 72.34 29.72a28.12 28.12 0 0 0 29.37-3.74c7.7-6.35 20-9.71 35.73-9.71h32.08a68.05 68.05 0 0 0-33.58 41.67A19.86 19.86 0 0 1 131.32 156H75.77a36 36 0 1 0 0 8h55.55a27.9 27.9 0 0 0 26.89-20.18a60.06 60.06 0 0 1 32.58-38.22l8.64 22.46A36 36 0 1 0 216 124M40 164h27.71a28 28 0 1 1 0-8H40a4 4 0 0 0 0 8m176 24a28 28 0 0 1-13.68-52.42l10 25.86A4 4 0 0 0 216 164a3.9 3.9 0 0 0 1.44-.27a4 4 0 0 0 2.29-5.17l-9.94-25.86A28 28 0 1 1 216 188"></svg:path>`,
})
export class PhMotorcycleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMountainsIcon],svg[ph-mountains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m90.88 155.92l-54.56-92.08A15.87 15.87 0 0 0 186.55 96a15.85 15.85 0 0 0-13.76 7.84L146.63 148l-44.84-76.1a16 16 0 0 0-27.58 0L1.11 195.94A8 8 0 0 0 8 208h240a8 8 0 0 0 6.88-12.08M88 80l23.57 40H64.43ZM22 192l33-56h66l18.74 31.8L154 192Zm150.57 0l-16.66-28.28L186.55 112L234 192Z"></svg:path>`,
})
export class PhMountainsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMountainsBoldIcon],svg[ph-mountains-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8m94.32 153.88l-54.56-92.08a19.85 19.85 0 0 0-17.21-9.8a19.83 19.83 0 0 0-17.2 9.8l-18.7 31.55l-37.42-63.5a20 20 0 0 0-34.46 0L1.66 193.91A12 12 0 0 0 12 212h232a12 12 0 0 0 10.32-18.12M92 87.87L108.57 116H75.43ZM33 188l28.28-48h61.44L151 188Zm145.86 0l-18.3-31l22-37.1l40.38 68.1Z"></svg:path>`,
})
export class PhMountainsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMountainsDuotoneIcon],svg[ph-mountains-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 52a20 20 0 1 1 20 20a20 20 0 0 1-20-20m49.44 55.92a8 8 0 0 0-13.77 0l-33 55.75l-21-35.67H50.35L8 200h240Z" opacity=".2"></svg:path><svg:path d="M164 80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m90.88 155.92l-54.56-92.08A15.87 15.87 0 0 0 186.55 96a15.85 15.85 0 0 0-13.76 7.84L146.63 148l-44.84-76.1a16 16 0 0 0-27.58 0L1.11 195.94A8 8 0 0 0 8 208h240a8 8 0 0 0 6.88-12.08M88 80l23.57 40H64.43ZM22 192l33-56h66l33 56Zm150.57 0l-16.66-28.28L186.55 112L234 192Z"></svg:path></svg:g>`,
})
export class PhMountainsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMountainsFillIcon],svg[ph-mountains-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.88 195.92l-54.56-92.08A15.87 15.87 0 0 0 186.55 96a15.85 15.85 0 0 0-13.76 7.84l-15.64 26.39a4 4 0 0 0 0 4.07l26.8 45.47a8.13 8.13 0 0 1-1.89 10.55a8 8 0 0 1-11.8-2.26L101.79 71.88a16 16 0 0 0-27.58 0L1.11 195.94a8 8 0 0 0 1 9.52A8.23 8.23 0 0 0 8.23 208h239.54a8.3 8.3 0 0 0 6.09-2.55a8 8 0 0 0 1.02-9.53M64.43 120L88 80l23.57 40ZM140 52a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path>`,
})
export class PhMountainsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMountainsLightIcon],svg[ph-mountains-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 78a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m89.16 158.94l-54.56-92.08a13.9 13.9 0 0 0-12-6.86a13.88 13.88 0 0 0-12 6.86l-27.88 47.05l-46.56-79a14 14 0 0 0-24.13 0L2.83 197A6 6 0 0 0 8 206h240a6 6 0 0 0 5.16-9.06M86.27 79a2 2 0 0 1 3.46 0l25.34 43H60.93ZM18.5 194l35.36-60h68.29l19.3 32.77l16 27.2Zm152.93 0l-17.85-30.29L184.83 111a2 2 0 0 1 1.72-1a1.93 1.93 0 0 1 1.72 1l49.2 83Z"></svg:path>`,
})
export class PhMountainsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMountainsThinIcon],svg[ph-mountains-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m87.44 162l-54.56-92.08a11.91 11.91 0 0 0-10.33-5.92a11.89 11.89 0 0 0-10.32 5.88l-29.61 50l-48.28-81.97a12 12 0 0 0-20.68 0L4.55 198A4 4 0 0 0 8 204h240a4 4 0 0 0 3.44-6M84.55 78a4 4 0 0 1 6.9 0l27.12 46H57.43ZM15 196l37.71-64h70.58L161 196Zm155.29 0l-19-32.29L183.11 110a4 4 0 0 1 6.88 0l51 86Z"></svg:path>`,
})
export class PhMountainsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseIcon],svg[ph-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-80-48h8v72H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhMouseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseBoldIcon],svg[ph-mouse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 68v20h-48V36h4a44.05 44.05 0 0 1 44 44m-76-44h4v64H68V80a44.05 44.05 0 0 1 44-44m32 184h-32a44.05 44.05 0 0 1-44-44v-52h120v52a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMouseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseDuotoneIcon],svg[ph-mouse-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 112v64a56 56 0 0 1-56 56h-32a56 56 0 0 1-56-56v-64Z" opacity=".2"></svg:path><svg:path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-80-48h8v72H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhMouseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseFillIcon],svg[ph-mouse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-80-48h8v72H64V80a48.05 48.05 0 0 1 48-48"></svg:path>`,
})
export class PhMouseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickIcon],svg[ph-mouse-left-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-76.69 24l-46-46a48.5 48.5 0 0 1 11.2-14.18L120 83.31V104ZM64 80c0-1.51.08-3 .22-4.47L92.69 104H64Zm56-48v28.69L94.59 35.28A47.7 47.7 0 0 1 112 32Zm24 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhMouseLeftClickIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickBoldIcon],svg[ph-mouse-left-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 68v20h-48V36h4a44.05 44.05 0 0 1 44 44M68 80a43.6 43.6 0 0 1 2-13l33 33H68Zm48-44v43L83.49 46.52A43.83 43.83 0 0 1 112 36Zm28 184h-32a44.05 44.05 0 0 1-44-44v-52h120v52a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMouseLeftClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickDuotoneIcon],svg[ph-mouse-left-click-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 24v88H56V80a56 56 0 0 1 56-56Z" opacity=".2"></svg:path><svg:path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-76.69 24l-46-46a48.5 48.5 0 0 1 11.2-14.18L120 83.31V104ZM64 80c0-1.51.08-3 .22-4.47L92.69 104H64Zm56-48v28.69L94.59 35.28A47.7 47.7 0 0 1 112 32Zm24 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhMouseLeftClickDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickFillIcon],svg[ph-mouse-left-click-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-64V32h16a48.05 48.05 0 0 1 48 48m-48 144h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhMouseLeftClickFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickLightIcon],svg[ph-mouse-left-click-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-60V30h10a50.06 50.06 0 0 1 50 50m-72-50v35.51L91.09 34.6A49.7 49.7 0 0 1 112 30ZM80.62 41.11L122 82.49V106h-7.51L66.9 58.42a50.3 50.3 0 0 1 13.72-17.31M62 80a50 50 0 0 1 .78-8.73L97.51 106H62Zm82 146h-32a50.06 50.06 0 0 1-50-50v-58h132v58a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhMouseLeftClickLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickThinIcon],svg[ph-mouse-left-click-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 60v28h-64V28h12a52.06 52.06 0 0 1 52 52m-72-52v42.34L87.7 34.05A51.6 51.6 0 0 1 112 28ZM80.78 38.44L124 81.66V108h-10.34L64.51 58.85a52.5 52.5 0 0 1 16.27-20.41M60 80a51.6 51.6 0 0 1 1.59-12.75L102.34 108H60Zm84 148h-32a52.06 52.06 0 0 1-52-52v-60h136v60a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhMouseLeftClickThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseLightIcon],svg[ph-mouse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-60V30h10a50.06 50.06 0 0 1 50 50m-82-50h10v76H62V80a50.06 50.06 0 0 1 50-50m32 196h-32a50.06 50.06 0 0 1-50-50v-58h132v58a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhMouseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseMiddleClickIcon],svg[ph-mouse-middle-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-40V88a16 16 0 0 0-16-16V32h8a48.05 48.05 0 0 1 48 48m-56 56h-16V88h16v23.9a.5.5 0 0 0 0 .2ZM112 32h8v40a16 16 0 0 0-16 16v16H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h40v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-16h40v56a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhMouseMiddleClickIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseMiddleClickBoldIcon],svg[ph-mouse-middle-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 68v20h-28V88a20 20 0 0 0-20-20V36h4a44.05 44.05 0 0 1 44 44m-68 12h16v40h-16Zm-8-56h4v32a20 20 0 0 0-20 20v12H68V80a44.05 44.05 0 0 1 44-44m32 184h-32a44.05 44.05 0 0 1-44-44v-52h28v12a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-12h28v52a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMouseMiddleClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseMiddleClickDuotoneIcon],svg[ph-mouse-middle-click-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 88v48a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-40V88a16 16 0 0 0-16-16V32h8a48.05 48.05 0 0 1 48 48m-56 56h-16V88h16v23.9a.5.5 0 0 0 0 .2ZM112 32h8v40a16 16 0 0 0-16 16v16H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h40v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-16h40v56a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhMouseMiddleClickDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseMiddleClickFillIcon],svg[ph-mouse-middle-click-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-40V88a16 16 0 0 0-16-16V32h8a48.05 48.05 0 0 1 48 48m-80-48h8v40a16 16 0 0 0-16 16v16H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h40v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-16h40v56a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhMouseMiddleClickFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseMiddleClickLightIcon],svg[ph-mouse-middle-click-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-44V88a14 14 0 0 0-14-14h-2V30h10a50.06 50.06 0 0 1 50 50m-76 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2Zm-6-58h10v44h-2a14 14 0 0 0-14 14v18H62V80a50.06 50.06 0 0 1 50-50m32 196h-32a50.06 50.06 0 0 1-50-50v-58h44v18a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14v-18h44v58a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhMouseMiddleClickLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseMiddleClickThinIcon],svg[ph-mouse-middle-click-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 60v28h-48V88a12 12 0 0 0-12-12h-4V28h12a52.06 52.06 0 0 1 52 52m-80 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4Zm-4-60h12v48h-4a12 12 0 0 0-12 12v20H60V80a52.06 52.06 0 0 1 52-52m32 200h-32a52.06 52.06 0 0 1-52-52v-60h48v20a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12v-20h48v60a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhMouseMiddleClickThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseRightClickIcon],svg[ph-mouse-right-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m-8 67.31l39.49-39.49A48.5 48.5 0 0 1 186.66 58l-46 46H136Zm55.78-7.78c.14 1.47.22 3 .22 4.47v24h-28.69Zm-30.37-40.25L136 60.69V32h8a47.7 47.7 0 0 1 17.41 3.28M112 32h8v72H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhMouseRightClickIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseRightClickBoldIcon],svg[ph-mouse-right-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m42 55a43.6 43.6 0 0 1 2 13v20h-35Zm-13.49-20.48L140 79V36h4a43.83 43.83 0 0 1 28.51 10.52M112 36h4v64H68V80a44.05 44.05 0 0 1 44-44m32 184h-32a44.05 44.05 0 0 1-44-44v-52h120v52a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMouseRightClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseRightClickDuotoneIcon],svg[ph-mouse-right-click-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 80v32h-72V24h16a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-80-48h8v72H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhMouseRightClickDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseRightClickFillIcon],svg[ph-mouse-right-click-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m-32 16h16v72H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhMouseRightClickFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseRightClickLightIcon],svg[ph-mouse-right-click-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-35.51l34.73-34.73A50 50 0 0 1 194 80m-4.9-21.58L141.51 106H134V82.49l41.38-41.38a50.3 50.3 0 0 1 13.72 17.31M164.91 34.6L134 65.51V30h10a49.7 49.7 0 0 1 20.91 4.6M112 30h10v76H62V80a50.06 50.06 0 0 1 50-50m32 196h-32a50.06 50.06 0 0 1-50-50v-58h132v58a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhMouseRightClickLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseRightClickThinIcon],svg[ph-mouse-right-click-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 60v28h-42.34l40.75-40.75A51.6 51.6 0 0 1 196 80m-4.51-21.15L142.34 108H132V81.66l43.22-43.22a52.5 52.5 0 0 1 16.27 20.41m-23.19-24.8L132 70.34V28h12a51.6 51.6 0 0 1 24.3 6.05M112 28h12v80H60V80a52.06 52.06 0 0 1 52-52m32 200h-32a52.06 52.06 0 0 1-52-52v-60h136v60a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhMouseRightClickThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseScrollIcon],svg[ph-mouse-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 160a48.05 48.05 0 0 1-48 48h-32a48.05 48.05 0 0 1-48-48V80a48.05 48.05 0 0 1 48-48h32a48.05 48.05 0 0 1 48 48Zm-56-92.69v89.38l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 172.69V83.31l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32Z"></svg:path>`,
})
export class PhMouseScrollIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseScrollBoldIcon],svg[ph-mouse-scroll-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 164a44.05 44.05 0 0 1-44 44h-32a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h32a44.05 44.05 0 0 1 44 44Zm-48-83v70l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 163V93l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0l24 24a12 12 0 0 1-17 17Z"></svg:path>`,
})
export class PhMouseScrollBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseScrollDuotoneIcon],svg[ph-mouse-scroll-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 80v96a56 56 0 0 1-56 56h-32a56 56 0 0 1-56-56V80a56 56 0 0 1 56-56h32a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 160a48.05 48.05 0 0 1-48 48h-32a48.05 48.05 0 0 1-48-48V80a48.05 48.05 0 0 1 48-48h32a48.05 48.05 0 0 1 48 48Zm-56-92.69v89.38l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 172.69V83.31l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhMouseScrollDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseScrollFillIcon],svg[ph-mouse-scroll-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m2.34 146.34a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 172.69V83.31l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32L136 83.31v89.38Z"></svg:path>`,
})
export class PhMouseScrollFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseScrollLightIcon],svg[ph-mouse-scroll-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 158a50.06 50.06 0 0 1-50 50h-32a50.06 50.06 0 0 1-50-50V80a50.06 50.06 0 0 1 50-50h32a50.06 50.06 0 0 1 50 50Zm-60-97.51v99l13.76-13.75a6 6 0 0 1 8.48 8.48l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L122 177.51v-99l-13.76 13.73a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0l24 24a6 6 0 1 1-8.48 8.48Z"></svg:path>`,
})
export class PhMouseScrollLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseScrollThinIcon],svg[ph-mouse-scroll-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 156a52.06 52.06 0 0 1-52 52h-32a52.06 52.06 0 0 1-52-52V80a52.06 52.06 0 0 1 52-52h32a52.06 52.06 0 0 1 52 52ZM132 73.66v108.68l17.17-17.17a4 4 0 0 1 5.66 5.66l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L124 182.34V73.66l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0l24 24a4 4 0 0 1-5.66 5.66Z"></svg:path>`,
})
export class PhMouseScrollThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseSimpleIcon],svg[ph-mouse-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 160a48.05 48.05 0 0 1-48 48h-32a48.05 48.05 0 0 1-48-48V80a48.05 48.05 0 0 1 48-48h32a48.05 48.05 0 0 1 48 48ZM136 64v48a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhMouseSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseSimpleBoldIcon],svg[ph-mouse-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 164a44.05 44.05 0 0 1-44 44h-32a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h32a44.05 44.05 0 0 1 44 44ZM140 64v48a12 12 0 0 1-24 0V64a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhMouseSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseSimpleDuotoneIcon],svg[ph-mouse-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 80v96a56 56 0 0 1-56 56h-32a56 56 0 0 1-56-56V80a56 56 0 0 1 56-56h32a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 160a48.05 48.05 0 0 1-48 48h-32a48.05 48.05 0 0 1-48-48V80a48.05 48.05 0 0 1 48-48h32a48.05 48.05 0 0 1 48 48ZM136 64v48a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhMouseSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseSimpleFillIcon],svg[ph-mouse-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m-8 96a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhMouseSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseSimpleLightIcon],svg[ph-mouse-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 158a50.06 50.06 0 0 1-50 50h-32a50.06 50.06 0 0 1-50-50V80a50.06 50.06 0 0 1 50-50h32a50.06 50.06 0 0 1 50 50ZM134 64v48a6 6 0 0 1-12 0V64a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhMouseSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseSimpleThinIcon],svg[ph-mouse-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 156a52.06 52.06 0 0 1-52 52h-32a52.06 52.06 0 0 1-52-52V80a52.06 52.06 0 0 1 52-52h32a52.06 52.06 0 0 1 52 52ZM132 64v48a4 4 0 0 1-8 0V64a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhMouseSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMouseThinIcon],svg[ph-mouse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m52 60v28h-64V28h12a52.06 52.06 0 0 1 52 52m-84-52h12v80H60V80a52.06 52.06 0 0 1 52-52m32 200h-32a52.06 52.06 0 0 1-52-52v-60h136v60a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhMouseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteIcon],svg[ph-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V98.75l69.7 20.91A8 8 0 0 0 216 112V64a8 8 0 0 0-5.7-7.66M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112-114.75l-64-19.2v-31.3L200 70Z"></svg:path>`,
})
export class PhMusicNoteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteBoldIcon],svg[ph-music-note-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211.45 52.51l-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184v-79.87l64.55 19.36A12 12 0 0 0 220 112V64a12 12 0 0 0-8.55-11.49M88 212a28 28 0 1 1 28-28a28 28 0 0 1-28 28M196 95.87l-56-16.8V56.13l56 16.8Z"></svg:path>`,
})
export class PhMusicNoteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteDuotoneIcon],svg[ph-music-note-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 184a40 40 0 1 1-40-40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V98.75l69.7 20.91A8 8 0 0 0 216 112V64a8 8 0 0 0-5.7-7.66M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112-114.75l-64-19.2v-31.3L200 70Z"></svg:path></svg:g>`,
})
export class PhMusicNoteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteFillIcon],svg[ph-music-note-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V98.75l69.7 20.91A8 8 0 0 0 216 112V64a8 8 0 0 0-5.7-7.66"></svg:path>`,
})
export class PhMusicNoteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteLightIcon],svg[ph-music-note-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75M88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34m114-114.06l-68-20.4V48.06l68 20.4Z"></svg:path>`,
})
export class PhMusicNoteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteSimpleIcon],svg[ph-music-note-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V50.75l69.7 20.91a8 8 0 1 0 4.6-15.32M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhMusicNoteSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteSimpleBoldIcon],svg[ph-music-note-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211.45 52.51l-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184V56.13l64.55 19.36a12 12 0 1 0 6.9-23ZM88 212a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhMusicNoteSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteSimpleDuotoneIcon],svg[ph-music-note-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 184a40 40 0 1 1-40-40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V50.75l69.7 20.91a8 8 0 1 0 4.6-15.32M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path></svg:g>`,
})
export class PhMusicNoteSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteSimpleFillIcon],svg[ph-music-note-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V50.75l69.7 20.91a8 8 0 1 0 4.6-15.32"></svg:path>`,
})
export class PhMusicNoteSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteSimpleLightIcon],svg[ph-music-note-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V48.06l72.27 21.69a6 6 0 1 0 3.45-11.5M88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhMusicNoteSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteSimpleThinIcon],svg[ph-music-note-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.15 60.17l-80-24A4 4 0 0 0 124 40v118.75a44 44 0 1 0 8 25.25V45.38l74.85 22.45a4 4 0 0 0 2.3-7.66M88 220a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhMusicNoteSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNoteThinIcon],svg[ph-music-note-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.15 60.17l-80-24A4 4 0 0 0 124 40v118.75a44 44 0 1 0 8 25.25V93.38l74.85 22.45A4 4 0 0 0 212 112V64a4 4 0 0 0-2.85-3.83M88 220a36 36 0 1 1 36-36a36 36 0 0 1-36 36m116-113.38L132 85V45.38L204 67Z"></svg:path>`,
})
export class PhMusicNoteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesIcon],svg[ph-music-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.92 17.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 56v110.08A36 36 0 1 0 88 196v-85.75l112-28v51.83A36 36 0 1 0 216 164V24a8 8 0 0 0-3.08-6.31M52 216a20 20 0 1 1 20-20a20 20 0 0 1-20 20M88 93.75v-31.5l112-28v31.5ZM180 184a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhMusicNotesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesBoldIcon],svg[ph-music-notes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.38 14.54a12 12 0 0 0-10.29-2.18l-128 32A12 12 0 0 0 68 56v103.35A40 40 0 1 0 92 196v-82.63l104-26v40A40 40 0 1 0 220 164V24a12 12 0 0 0-4.62-9.46M52 212a16 16 0 1 1 16-16a16 16 0 0 1-16 16M92 88.63V65.37l104-26v23.26ZM180 180a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhMusicNotesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesDuotoneIcon],svg[ph-music-notes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 164a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-156 4a28 28 0 1 0 28 28a28 28 0 0 0-28-28" opacity=".2"></svg:path><svg:path d="M212.92 17.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 56v110.08A36 36 0 1 0 88 196v-85.75l112-28v51.83A36 36 0 1 0 216 164V24a8 8 0 0 0-3.08-6.31M52 216a20 20 0 1 1 20-20a20 20 0 0 1-20 20M88 93.75v-31.5l112-28v31.5ZM180 184a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhMusicNotesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesFillIcon],svg[ph-music-notes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.92 17.71a7.89 7.89 0 0 0-6.86-1.46l-128 32A8 8 0 0 0 72 56v110.1A36 36 0 1 0 88 196v-93.75l112-28v59.85a36 36 0 1 0 16 29.9V24a8 8 0 0 0-3.08-6.29"></svg:path>`,
})
export class PhMusicNotesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesLightIcon],svg[ph-music-notes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.69 19.27a6 6 0 0 0-5.15-1.09l-128 32A6 6 0 0 0 74 56v114.11A34 34 0 1 0 86 196v-87.32l116-29v58.43A34 34 0 1 0 214 164V24a6 6 0 0 0-2.31-4.73M52 218a22 22 0 1 1 22-22a22 22 0 0 1-22 22M86 96.32V60.68l116-29v35.64ZM180 186a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhMusicNotesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusIcon],svg[ph-music-notes-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-16 40v76a36 36 0 1 1-16-29.92V88a8 8 0 0 1 16 0m-16 76a20 20 0 1 0-20 20a20 20 0 0 0 20-20M88 110.25V196a36 36 0 1 1-16-29.92V56a8 8 0 0 1 6.06-7.76l56-14a8 8 0 0 1 3.88 15.52L88 62.25v31.5l70.06-17.51a8 8 0 0 1 3.88 15.52ZM72 196a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhMusicNotesMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusBoldIcon],svg[ph-music-notes-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 48a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12m-16 40v76a40 40 0 1 1-24-36.65V88a12 12 0 0 1 24 0m-24 76a16 16 0 1 0-16 16a16 16 0 0 0 16-16M92 113.37V196a40 40 0 1 1-24-36.65V56a12 12 0 0 1 9.09-11.64l56-14a12 12 0 0 1 5.82 23.28L92 65.37v23.26l65.09-16.27a12 12 0 0 1 5.82 23.28ZM68 196a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhMusicNotesMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusDuotoneIcon],svg[ph-music-notes-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 164a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-156 4a28 28 0 1 0 28 28a28 28 0 0 0-28-28" opacity=".2"></svg:path><svg:path d="M232 48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-16 40v76a36 36 0 1 1-16-29.92V88a8 8 0 0 1 16 0m-16 76a20 20 0 1 0-20 20a20 20 0 0 0 20-20M88 110.25V196a36 36 0 1 1-16-29.92V56a8 8 0 0 1 6.06-7.76l56-14a8 8 0 0 1 3.88 15.52L88 62.25v31.5l70.06-17.51a8 8 0 0 1 3.88 15.52ZM72 196a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path></svg:g>`,
})
export class PhMusicNotesMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusFillIcon],svg[ph-music-notes-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-61.87 36.5a31.57 31.57 0 0 1-16.44-38.76a4 4 0 0 0-4.69-5.21L78.06 48.25A8 8 0 0 0 72 56v110.1A36 36 0 1 0 52.42 232C72.25 231.77 88 215.13 88 195.3v-93.05l73.26-18.31a4 4 0 0 0 .87-7.44M212 80h-8a4 4 0 0 0-4 4v50.1a36 36 0 1 0-19.58 65.9c19.83-.23 35.58-16.86 35.58-36.7V84a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhMusicNotesMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusLightIcon],svg[ph-music-notes-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-16 40v76a34.06 34.06 0 1 1-12-25.89V88a6 6 0 0 1 12 0m-12 76a22 22 0 1 0-22 22a22 22 0 0 0 22-22M86 108.69V196a34.06 34.06 0 1 1-12-25.89V56a6 6 0 0 1 4.54-5.82l56-14a6 6 0 1 1 2.92 11.64L86 60.68v35.63l72.54-18.13a6 6 0 1 1 2.92 11.64ZM74 196a22 22 0 1 0-22 22a22 22 0 0 0 22-22"></svg:path>`,
})
export class PhMusicNotesMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesMinusThinIcon],svg[ph-music-notes-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-16 40v76a32.06 32.06 0 1 1-8-21.13V88a4 4 0 0 1 8 0m-8 76a24 24 0 1 0-24 24a24 24 0 0 0 24-24M84 107.12V196a32.06 32.06 0 1 1-8-21.13V56a4 4 0 0 1 3-3.88l56-14a4 4 0 0 1 2 7.76L84 59.12v39.76l75-18.76a4 4 0 0 1 2 7.76ZM76 196a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhMusicNotesMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesPlusIcon],svg[ph-music-notes-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0V56h-16a8 8 0 0 1 0-16h16V24a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-16 64v52a36 36 0 1 1-16-29.92V112a8 8 0 0 1 16 0m-16 52a20 20 0 1 0-20 20a20 20 0 0 0 20-20M88 110.25V196a36 36 0 1 1-16-29.92V56a8 8 0 0 1 6.06-7.76l56-14a8 8 0 0 1 3.88 15.52L88 62.25v31.5l70.06-17.51a8 8 0 0 1 3.88 15.52ZM72 196a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhMusicNotesPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesPlusBoldIcon],svg[ph-music-notes-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 48a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0V60h-12a12 12 0 0 1 0-24h12V24a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m-16 64v52a40 40 0 1 1-24-36.65V112a12 12 0 0 1 24 0m-24 52a16 16 0 1 0-16 16a16 16 0 0 0 16-16M92 113.37V196a40 40 0 1 1-24-36.65V56a12 12 0 0 1 9.09-11.64l56-14a12 12 0 0 1 5.82 23.28L92 65.37v23.26l65.09-16.27a12 12 0 0 1 5.82 23.28ZM68 196a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhMusicNotesPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesPlusDuotoneIcon],svg[ph-music-notes-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 164a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-156 4a28 28 0 1 0 28 28a28 28 0 0 0-28-28" opacity=".2"></svg:path><svg:path d="M232 48a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0V56h-16a8 8 0 0 1 0-16h16V24a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-16 64v52a36 36 0 1 1-16-29.92V112a8 8 0 0 1 16 0m-16 52a20 20 0 1 0-20 20a20 20 0 0 0 20-20M88 110.25V196a36 36 0 1 1-16-29.92V56a8 8 0 0 1 6.06-7.76l56-14a8 8 0 0 1 3.88 15.52L88 62.25v31.5l70.06-17.51a8 8 0 0 1 3.88 15.52ZM72 196a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path></svg:g>`,
})
export class PhMusicNotesPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesPlusFillIcon],svg[ph-music-notes-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0V56h-16a8 8 0 0 1 0-16h16V24a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-71.4 29.86l-6.76-6.76A32.85 32.85 0 0 1 144 49.33a31.9 31.9 0 0 1 1.67-11.66a4 4 0 0 0-4.76-5.14L78.06 48.25A8 8 0 0 0 72 56v110.1A36 36 0 1 0 52.42 232C72.25 231.77 88 215.13 88 195.3v-93.05l70.74-17.69a4 4 0 0 0 1.86-6.7m50.11 24.31a32 32 0 0 1-7.14 1.63a4 4 0 0 0-3.57 4v26.3a36 36 0 1 0-19.58 65.9c19.83-.23 35.58-16.86 35.58-36.7V106a4 4 0 0 0-5.29-3.83"></svg:path>`,
})
export class PhMusicNotesPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesPlusLightIcon],svg[ph-music-notes-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0V54h-18a6 6 0 0 1 0-12h18V24a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6m-16 64v52a34.06 34.06 0 1 1-12-25.89V112a6 6 0 0 1 12 0m-12 52a22 22 0 1 0-22 22a22 22 0 0 0 22-22M86 108.68V196a34.06 34.06 0 1 1-12-25.89V56a6 6 0 0 1 4.54-5.82l56-14a6 6 0 1 1 2.92 11.64L86 60.68v35.64l72.54-18.14a6 6 0 1 1 2.92 11.64ZM74 196a22 22 0 1 0-22 22a22 22 0 0 0 22-22"></svg:path>`,
})
export class PhMusicNotesPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesPlusThinIcon],svg[ph-music-notes-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V52h-20a4 4 0 0 1 0-8h20V24a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-16 64v52a32.06 32.06 0 1 1-8-21.13V112a4 4 0 0 1 8 0m-8 52a24 24 0 1 0-24 24a24 24 0 0 0 24-24M84 107.12V196a32.06 32.06 0 1 1-8-21.13V56a4 4 0 0 1 3-3.88l56-14a4 4 0 0 1 2 7.76L84 59.12v39.76l75-18.76a4 4 0 0 1 2 7.76ZM76 196a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhMusicNotesPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleIcon],svg[ph-music-notes-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.92 17.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 56v110.08A36 36 0 1 0 88 196V62.25l112-28v99.83A36 36 0 1 0 216 164V24a8 8 0 0 0-3.08-6.31M52 216a20 20 0 1 1 20-20a20 20 0 0 1-20 20m128-32a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhMusicNotesSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleBoldIcon],svg[ph-music-notes-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.38 14.54a12 12 0 0 0-10.29-2.18l-128 32A12 12 0 0 0 68 56v103.35A40 40 0 1 0 92 196V65.37l104-26v88A40 40 0 1 0 220 164V24a12 12 0 0 0-4.62-9.46M52 212a16 16 0 1 1 16-16a16 16 0 0 1-16 16m128-32a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhMusicNotesSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleDuotoneIcon],svg[ph-music-notes-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 164a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-156 4a28 28 0 1 0 28 28a28 28 0 0 0-28-28" opacity=".2"></svg:path><svg:path d="M212.92 17.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 56v110.08A36 36 0 1 0 88 196V62.25l112-28v99.83A36 36 0 1 0 216 164V24a8 8 0 0 0-3.08-6.31M52 216a20 20 0 1 1 20-20a20 20 0 0 1-20 20m128-32a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhMusicNotesSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleFillIcon],svg[ph-music-notes-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.92 17.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 56v110.08A36 36 0 1 0 88 196V62.25l112-28v99.83A36 36 0 1 0 216 164V24a8 8 0 0 0-3.08-6.31"></svg:path>`,
})
export class PhMusicNotesSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleLightIcon],svg[ph-music-notes-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.69 19.27a6 6 0 0 0-5.15-1.09l-128 32A6 6 0 0 0 74 56v114.11A34 34 0 1 0 86 196V60.68l116-29v106.43A34 34 0 1 0 214 164V24a6 6 0 0 0-2.31-4.73M52 218a22 22 0 1 1 22-22a22 22 0 0 1-22 22m128-32a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhMusicNotesSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesSimpleThinIcon],svg[ph-music-notes-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.46 20.85a4 4 0 0 0-3.43-.73l-128 32A4 4 0 0 0 76 56v118.87A32 32 0 1 0 84 196V59.12l120-30v113.75a32 32 0 1 0 8 21.13V24a4 4 0 0 0-1.54-3.15M52 220a24 24 0 1 1 24-24a24 24 0 0 1-24 24m128-32a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhMusicNotesSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMusicNotesThinIcon],svg[ph-music-notes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.46 20.85a4 4 0 0 0-3.43-.73l-128 32A4 4 0 0 0 76 56v118.87A32 32 0 1 0 84 196v-88.88l120-30v65.75a32 32 0 1 0 8 21.13V24a4 4 0 0 0-1.54-3.15M52 220a24 24 0 1 1 24-24a24 24 0 0 1-24 24m128-32a24 24 0 1 1 24-24a24 24 0 0 1-24 24M84 98.88V59.12l120-30v39.76Z"></svg:path>`,
})
export class PhMusicNotesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNavigationArrowIcon],svg[ph-navigation-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.33 106.21L61.41 41l-.16-.05a16 16 0 0 0-20.35 20.3a1 1 0 0 0 .05.16l65.26 175.92A15.77 15.77 0 0 0 121.28 248h.3a15.77 15.77 0 0 0 15-11.29l.06-.2l21.84-78l78-21.84l.2-.06a16 16 0 0 0 .62-30.38Zm-87.49 38.09a8 8 0 0 0-5.54 5.54l-23 82.16l-.06-.17L56 56l175.82 65.22l.16.06Z"></svg:path>`,
})
export class PhNavigationArrowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNavigationArrowBoldIcon],svg[ph-navigation-arrow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.7 102.46L62.81 37.21l-.25-.09a20 20 0 0 0-25.44 25.44l.09.25l65.25 175.89A20 20 0 0 0 121.3 252h.35a20 20 0 0 0 18.77-14.12l.09-.29l21.23-75.85l75.85-21.23l.29-.09a20 20 0 0 0 .82-38Zm-89.93 38a12 12 0 0 0-8.32 8.32l-19.68 70.29L62.8 62.8l156.26 58Z"></svg:path>`,
})
export class PhNavigationArrowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNavigationArrowDuotoneIcon],svg[ph-navigation-arrow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M234.35 129L152 152l-23 82.35a8 8 0 0 1-15.21.27l-65.28-176a8 8 0 0 1 10.12-10.16l176 65.28a8 8 0 0 1-.28 15.26" opacity=".2"></svg:path><svg:path d="M237.33 106.21L61.41 41l-.16-.05a16 16 0 0 0-20.35 20.3a1 1 0 0 0 .05.16l65.26 175.92A15.77 15.77 0 0 0 121.28 248h.3a15.77 15.77 0 0 0 15-11.29l.06-.2l21.84-78l78-21.84l.2-.06a16 16 0 0 0 .62-30.38Zm-87.49 38.09a8 8 0 0 0-5.54 5.54l-23 82.16l-.06-.17L56 56l175.82 65.22l.16.06Z"></svg:path></svg:g>`,
})
export class PhNavigationArrowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNavigationArrowFillIcon],svg[ph-navigation-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 121.58a15.76 15.76 0 0 1-11.29 15l-.2.06l-78 21.84l-21.84 78l-.06.2a15.77 15.77 0 0 1-15 11.29h-.3a15.77 15.77 0 0 1-15.07-10.67L41 61.41a1 1 0 0 1-.05-.16a16 16 0 0 1 20.3-20.35l.16.05l175.92 65.26A15.78 15.78 0 0 1 248 121.58"></svg:path>`,
})
export class PhNavigationArrowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNavigationArrowLightIcon],svg[ph-navigation-arrow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.65 108.1L60.72 42.83h-.13a14 14 0 0 0-17.81 17.76s0 .09 0 .13l65.32 175.93a13.77 13.77 0 0 0 13.18 9.35h.26a13.8 13.8 0 0 0 13.14-9.88v-.15l22.14-79.1L236 134.73h.15a14 14 0 0 0 .53-26.58Zm-4 15.1l-82.26 23a6 6 0 0 0-4.16 4.16l-23 82.26a1.85 1.85 0 0 1-1.86 1.36a1.82 1.82 0 0 1-1.92-1.35a.6.6 0 0 0 0-.12L54.11 56.62a2 2 0 0 1 2.51-2.51l175.91 65.26h.12a2 2 0 0 1 0 3.79Z"></svg:path>`,
})
export class PhNavigationArrowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNavigationArrowThinIcon],svg[ph-navigation-arrow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 110L59.93 44.67A12 12 0 0 0 44.69 60L110 235.93a11.83 11.83 0 0 0 11.28 8.07h.22a11.82 11.82 0 0 0 11.26-8.47v-.1l22.45-80.19l80.19-22.44h.1a12 12 0 0 0 .5-22.8m-2.79 15.12l-82.3 23a4 4 0 0 0-2.78 2.77l-23 82.3a3.88 3.88 0 0 1-3.74 2.78a4 4 0 0 1-3.88-2.77L52.22 57.32a3.93 3.93 0 0 1 1-4.14A4 4 0 0 1 56 52a3.9 3.9 0 0 1 1.25.21l176.08 65.32a4 4 0 0 1-.09 7.59Z"></svg:path>`,
})
export class PhNavigationArrowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNeedleIcon],svg[ph-needle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M189.66 66.34a8 8 0 0 1 0 11.32l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 0M224 72a39.7 39.7 0 0 1-11.72 28.28l-24 24a8 8 0 0 1-4.3 2.23c-51.49 8.84-137.46 94.28-138.32 95.15a8 8 0 0 1-11.31-11.32C36 208.73 120.69 123.28 129.49 72a8 8 0 0 1 2.23-4.3l24-24A40 40 0 0 1 224 72m-16 0a24 24 0 0 0-41-17l-22.23 22.29c-4.41 21.15-18.9 46.19-35.49 69.43c23.24-16.59 48.28-31.08 69.43-35.49L201 89a23.85 23.85 0 0 0 7-17"></svg:path>`,
})
export class PhNeedleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNeedleBoldIcon],svg[ph-needle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.11 40.89a44 44 0 0 0-62.22 0l-24 24a11.88 11.88 0 0 0-3.34 6.45c-7.15 41.66-70.24 112.36-94 136.14a12 12 0 0 0 17 17c23.75-23.73 94.49-86.88 136.18-94a12 12 0 0 0 6.45-3.34l24-24a44 44 0 0 0 0-62.22Zm-17 45.25l-21.42 21.43c-14.85 3.31-32.4 11.41-52.47 24.18c12.77-20.07 20.87-37.62 24.18-52.47l21.43-21.42a20 20 0 1 1 28.28 28.28"></svg:path>`,
})
export class PhNeedleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNeedleDuotoneIcon],svg[ph-needle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m206.63 94.63l-24 24C128 128 40 216 40 216s88-88 97.37-142.63l24-24a32 32 0 0 1 45.26 45.26" opacity=".2"></svg:path><svg:path d="M189.66 66.34a8 8 0 0 1 0 11.32l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 0M224 72a39.7 39.7 0 0 1-11.72 28.28l-24 24a8 8 0 0 1-4.3 2.23c-51.49 8.84-137.46 94.28-138.32 95.15a8 8 0 0 1-11.31-11.32C36 208.73 120.69 123.28 129.49 72a8 8 0 0 1 2.23-4.3l24-24A40 40 0 0 1 224 72m-16 0a24 24 0 0 0-41-17l-22.23 22.29c-4.41 21.15-18.9 46.19-35.49 69.43c23.24-16.59 48.28-31.08 69.43-35.49L201 89a23.85 23.85 0 0 0 7-17"></svg:path></svg:g>`,
})
export class PhNeedleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNeedleFillIcon],svg[ph-needle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.28 43.72a40 40 0 0 0-56.56 0l-24 24a8 8 0 0 0-2.23 4.3c-8.8 51.26-93.49 136.71-95.13 138.31a8 8 0 0 0 11.31 11.32c.86-.87 86.83-86.31 138.32-95.15a8 8 0 0 0 4.3-2.23l24-24a40 40 0 0 0 0-56.56Zm-22.62 33.94l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhNeedleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNeedleLightIcon],svg[ph-needle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 67.76a6 6 0 0 1 0 8.48l-16 16a6 6 0 0 1-8.48-8.48l16-16a6 6 0 0 1 8.48 0M222 72a37.74 37.74 0 0 1-11.13 26.87l-24 24a6 6 0 0 1-3.23 1.67c-52.14 9-138.53 94.84-139.4 95.7a5.8 5.8 0 0 1-1.82 1.25A6.1 6.1 0 0 1 40 222a6 6 0 0 1-4.24-10.24c1.4-1.41 86.78-87.44 95.69-139.39a6 6 0 0 1 1.67-3.23l24-24A38 38 0 0 1 222 72m-12 0a26 26 0 0 0-44.38-18.38L142.93 76.3c-4.14 20.79-18.62 47.61-43.13 79.9c32.29-24.51 59.11-39 79.9-43.13l22.68-22.69A25.8 25.8 0 0 0 210 72"></svg:path>`,
})
export class PhNeedleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNeedleThinIcon],svg[ph-needle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.83 69.17a4 4 0 0 1 0 5.66l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 0M220 72a35.76 35.76 0 0 1-10.54 25.46l-24 24a4.05 4.05 0 0 1-2.16 1.11c-21.65 3.72-52.74 21.46-89.91 51.33c-28.34 22.77-50.34 44.71-50.56 44.93l-.24.22a4 4 0 0 1-5.42-5.88c.22-.17 22.16-22.17 44.93-50.56c29.9-37.17 47.61-68.26 51.33-89.91a4.05 4.05 0 0 1 1.11-2.16l24-24A36 36 0 0 1 220 72m-8 0a28 28 0 0 0-47.8-19.8l-23.12 23.12c-5.33 28-29.48 63.42-52.51 92.11c28.69-23 64.16-47.18 92.11-52.52L203.8 91.8A27.8 27.8 0 0 0 212 72"></svg:path>`,
})
export class PhNeedleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkIcon],svg[ph-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm128 0h-32v-32h32Z"></svg:path>`,
})
export class PhNetworkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkBoldIcon],svg[ph-network-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108h-92V92h4a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v16H24a12 12 0 0 0 0 24h28v24h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-24h104v24h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-24h28a12 12 0 0 0 0-24M116 44h24v24h-24ZM76 204H52v-24h24Zm128 0h-24v-24h24Z"></svg:path>`,
})
export class PhNetworkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkDuotoneIcon],svg[ph-network-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 40v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 168H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8m128 0h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm128 0h-32v-32h32Z"></svg:path></svg:g>`,
})
export class PhNetworkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkFillIcon],svg[ph-network-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120a8 8 0 0 1-8 8h-32v32h8a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h8v-32H72v32h8a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h8v-32H24a8 8 0 0 1 0-16h96V88h-8a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-8v24h96a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhNetworkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkLightIcon],svg[ph-network-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 114h-98V86h10a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h10v28H24a6 6 0 0 0 0 12h34v36H48a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14H70v-36h116v36h-10a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-10v-36h34a6 6 0 0 0 0-12M110 72V40a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2M82 176v32a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2m128 0v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2"></svg:path>`,
})
export class PhNetworkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashIcon],svg[ph-network-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 54V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16.39a8 8 0 0 1 0-16H144V40h-32v14a8 8 0 0 1-16 0m117.92 156.62a8 8 0 1 1-11.84 10.76L117.19 128H72v32h8a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h8v-32H24a8 8 0 0 1 0-16h78.64L42.08 45.38a8 8 0 1 1 11.84-10.76ZM80 176H48v32h32Zm152-64h-68a8 8 0 0 0 0 16h20v22.83a8 8 0 1 0 16 0V128h32a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhNetworkSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashBoldIcon],svg[ph-network-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14L93.6 108H24a12 12 0 0 0 0 24h28v24h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-24h39.42l83.7 92.07a12 12 0 0 0 17.76-16.14ZM76 204H52v-24h24ZM92 42.14V40a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v32a20 20 0 0 1-20 20h-5.58a12 12 0 1 1 0-24H140V44h-24.14A12 12 0 0 1 92 42.14M244 120a12 12 0 0 1-12 12h-28v6.94a12 12 0 0 1-24 0V132h-5.21a12 12 0 1 1 0-24H232a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhNetworkSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashDuotoneIcon],svg[ph-network-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 176v32a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m56-144h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M96 54V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16.39a8 8 0 0 1 0-16H144V40h-32v14a8 8 0 0 1-16 0m117.92 156.62a8 8 0 1 1-11.84 10.76L117.19 128H72v32h8a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h8v-32H24a8 8 0 0 1 0-16h78.64L42.08 45.38a8 8 0 1 1 11.84-10.76ZM80 176H48v32h32Zm152-64h-68a8 8 0 0 0 0 16h20v22.83a8 8 0 1 0 16 0V128h32a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhNetworkSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashFillIcon],svg[ph-network-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.08 59.41A8 8 0 0 1 96 54V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16.39a8 8 0 0 1-5.92-2.62ZM53.92 34.62a8 8 0 1 0-11.84 10.76L102.64 112H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h45.19l84.89 93.38a8 8 0 1 0 11.84-10.76ZM232 112h-68a8 8 0 0 0 0 16h20v22.83a8 8 0 1 0 16 0V128h32a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhNetworkSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashLightIcon],svg[ph-network-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 54V40a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v32a14 14 0 0 1-14 14h-16.39a6 6 0 0 1 0-12H144a2 2 0 0 0 2-2V40a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2v14a6 6 0 0 1-12 0m114.44 158a6 6 0 0 1-8.88 8.08l-85.49-94H70v36h10a14 14 0 0 1 14 14v32a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V176a14 14 0 0 1 14-14h10v-36H24a6 6 0 0 1 0-12h83.16l-63.6-70a6 6 0 0 1 8.88-8ZM80 174H48a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2v-32a2 2 0 0 0-2-2m152-60h-68a6 6 0 0 0 0 12h22v24.83a6 6 0 1 0 12 0V126h34a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhNetworkSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkSlashThinIcon],svg[ph-network-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 54V40a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12h-16.39a4 4 0 0 1 0-8H144a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v14a4 4 0 0 1-8 0m111 159.31a4 4 0 1 1-5.92 5.38L119 124H68v40h12a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-32a12 12 0 0 1 12-12h12v-40H24a4 4 0 0 1 0-8h87.68L45 42.69a4 4 0 0 1 6-5.38ZM80 172H48a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4v-32a4 4 0 0 0-4-4m152-56h-68a4 4 0 0 0 0 8h24v26.83a4 4 0 1 0 8 0V124h36a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhNetworkSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkThinIcon],svg[ph-network-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116H132V84h12a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v32H24a4 4 0 0 0 0 8h36v40H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12H68v-40h120v40h-12a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-12v-40h36a4 4 0 0 0 0-8M108 72V40a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4M84 176v32a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4m128 0v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhNetworkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkXIcon],svg[ph-network-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v16a8 8 0 0 0 16 0v-16h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm141.65-34.34L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path>`,
})
export class PhNetworkXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkXBoldIcon],svg[ph-network-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108h-92V92h4a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v16H24a12 12 0 0 0 0 24h28v24h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-24h104v8a12 12 0 0 0 24 0v-8h28a12 12 0 0 0 0-24M116 44h24v24h-24ZM76 204H52v-24h24Zm148.49-27.51L209 192l15.52 15.51a12 12 0 0 1-17 17L192 209l-15.51 15.52a12 12 0 0 1-17-17L175 192l-15.52-15.51a12 12 0 0 1 17-17L192 175l15.51-15.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhNetworkXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkXDuotoneIcon],svg[ph-network-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 40v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 168H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v16a8 8 0 0 0 16 0v-16h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm141.65-34.34L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhNetworkXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkXFillIcon],svg[ph-network-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120a8 8 0 0 1-8 8h-32v16a8 8 0 0 1-16 0v-16H72v32h8a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h8v-32H24a8 8 0 0 1 0-16h96V88h-8a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-8v24h96a8 8 0 0 1 8 8m-18.34 42.34a8 8 0 0 0-11.32 0L192 180.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L180.69 192l-18.35 18.34a8 8 0 0 0 11.32 11.32L192 203.31l18.34 18.35a8 8 0 0 0 11.32-11.32L203.31 192l18.35-18.34a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhNetworkXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkXLightIcon],svg[ph-network-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 114h-98V86h10a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h10v28H24a6 6 0 0 0 0 12h34v36H48a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14H70v-36h116v18a6 6 0 0 0 12 0v-18h34a6 6 0 0 0 0-12M110 72V40a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2M82 176v32a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2m138.24-3.76L200.48 192l19.76 19.76a6 6 0 1 1-8.48 8.48L192 200.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L183.52 192l-19.76-19.76a6 6 0 0 1 8.48-8.48L192 183.52l19.76-19.76a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhNetworkXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNetworkXThinIcon],svg[ph-network-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116H132V84h12a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v32H24a4 4 0 0 0 0 8h36v40H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12H68v-40h120v20a4 4 0 0 0 8 0v-20h36a4 4 0 0 0 0-8M108 72V40a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4M84 176v32a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4m134.83-5.17L197.66 192l21.17 21.17a4 4 0 0 1-5.66 5.66L192 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L186.34 192l-21.17-21.17a4 4 0 0 1 5.66-5.66L192 186.34l21.17-21.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhNetworkXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperIcon],svg[ph-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 112a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h80a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m136-88v120a24 24 0 0 1-24 24H32a24 24 0 0 1-24-23.89V88a8 8 0 0 1 16 0v96a8 8 0 0 0 16 0V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H56v120a23.8 23.8 0 0 1-1.37 8H208a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhNewspaperIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperBoldIcon],svg[ph-newspaper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 108a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24h-72a12 12 0 0 1-12-12m12 52h72a12 12 0 0 0 0-24h-72a12 12 0 0 0 0 24m132-96v120a28 28 0 0 1-28 28H36a32 32 0 0 1-32-32V88a12 12 0 0 1 24 0v92a8 8 0 0 0 16 0V64a20 20 0 0 1 20-20h152a20 20 0 0 1 20 20m-24 4H68v112a32 32 0 0 1-1 8h141a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhNewspaperBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperClippingIcon],svg[ph-newspaper-clipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.15L64 208.94l28.42 14.21a8 8 0 0 0 7.16 0L128 208.94l28.42 14.21a8 8 0 0 0 7.16 0L192 208.94l28.42 14.21A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176ZM136 112a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m-72 24h48a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8m8-64h32v48H72Z"></svg:path>`,
})
export class PhNewspaperClippingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperClippingBoldIcon],svg[ph-newspaper-clipping-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v160a12 12 0 0 0 17.37 10.73L64 213.42l26.63 13.31a12 12 0 0 0 10.74 0L128 213.42l26.63 13.31a12 12 0 0 0 10.74 0L192 213.42l26.63 13.31A12 12 0 0 0 236 216V56a20 20 0 0 0-20-20m-4 160.58l-14.63-7.31a12 12 0 0 0-10.74 0L160 202.58l-26.63-13.31a12 12 0 0 0-10.74 0L96 202.58l-26.63-13.31a12 12 0 0 0-10.74 0L44 196.58V60h168ZM136 108a12 12 0 0 1 12-12h36a12 12 0 0 1 0 24h-36a12 12 0 0 1-12-12m0 40a12 12 0 0 1 12-12h36a12 12 0 0 1 0 24h-36a12 12 0 0 1-12-12m-64 24h40a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12m12-64h16v40H84Z"></svg:path>`,
})
export class PhNewspaperClippingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperClippingDuotoneIcon],svg[ph-newspaper-clipping-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48H40a8 8 0 0 0-8 8v160l32-16l32 16l32-16l32 16l32-16l32 16V56a8 8 0 0 0-8-8M112 160H64V96h48Z" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.15L64 208.94l28.42 14.21a8 8 0 0 0 7.16 0L128 208.94l28.42 14.21a8 8 0 0 0 7.16 0L192 208.94l28.42 14.21A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176ZM136 112a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m0 32a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m-72 24h48a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8m8-64h32v48H72Z"></svg:path></svg:g>`,
})
export class PhNewspaperClippingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperClippingFillIcon],svg[ph-newspaper-clipping-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.15L64 208.94l28.42 14.21a8 8 0 0 0 7.16 0L128 208.94l28.42 14.21a8 8 0 0 0 7.16 0L192 208.94l28.42 14.21A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16M116 160a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm76-8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhNewspaperClippingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperClippingLightIcon],svg[ph-newspaper-clipping-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v160a6 6 0 0 0 8.68 5.37L64 206.71l29.32 14.66a6 6 0 0 0 5.36 0L128 206.71l29.32 14.66a6 6 0 0 0 5.36 0L192 206.71l29.32 14.66a6 6 0 0 0 2.68.63a5.93 5.93 0 0 0 3.15-.9A6 6 0 0 0 230 216V56a14 14 0 0 0-14-14m2 164.29l-23.32-11.66a6 6 0 0 0-5.36 0L160 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L96 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L38 206.29V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM198 112a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-86-54H64a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-6 64H70v-52h36Z"></svg:path>`,
})
export class PhNewspaperClippingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperClippingThinIcon],svg[ph-newspaper-clipping-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v160a4 4 0 0 0 5.79 3.58L64 204.47l30.21 15.11a4 4 0 0 0 3.58 0L128 204.47l30.21 15.11a4 4 0 0 0 3.58 0L192 204.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 4-4V56a12 12 0 0 0-12-12m4 165.53l-26.21-13.11a4 4 0 0 0-3.58 0L160 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 209.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM196 112a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-84-52H64a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-4 64H68v-56h40Z"></svg:path>`,
})
export class PhNewspaperClippingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperDuotoneIcon],svg[ph-newspaper-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v120a16 16 0 0 1-16 16H32a16 16 0 0 0 16-16V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 112a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h80a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m136-88v120a24 24 0 0 1-24 24H32a24 24 0 0 1-24-23.89V88a8 8 0 0 1 16 0v96a8 8 0 0 0 16 0V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H56v120a23.8 23.8 0 0 1-1.37 8H208a8 8 0 0 0 8-8Z"></svg:path></svg:g>`,
})
export class PhNewspaperDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperFillIcon],svg[ph-newspaper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H56a16 16 0 0 0-16 16v120a8 8 0 0 1-16 0V88a8 8 0 0 0-16 0v96.11A24 24 0 0 0 32 208h176a24 24 0 0 0 24-24V64a16 16 0 0 0-16-16m-40 104H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhNewspaperFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperLightIcon],svg[ph-newspaper-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12m54-74v120a22 22 0 0 1-22 22H32a22 22 0 0 1-22-21.91V88a6 6 0 0 1 12 0v96a10 10 0 0 0 20 0V64a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H56a2 2 0 0 0-2 2v120a21.84 21.84 0 0 1-2.41 10H208a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhNewspaperLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNewspaperThinIcon],svg[ph-newspaper-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m52-76v120a20 20 0 0 1-20 20H32a20 20 0 0 1-20-19.92V88a4 4 0 0 1 8 0v96a12 12 0 0 0 24 0V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4v120a19.86 19.86 0 0 1-4 12h160a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhNewspaperThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsIcon],svg[ph-not-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160a8 8 0 0 1-8 8H102.45l-48.53 53.38a8 8 0 0 1-11.84-10.76L80.82 168H40a8 8 0 0 1 0-16h55.37L139 104H40a8 8 0 0 1 0-16h113.55l48.53-53.38a8 8 0 0 1 11.84 10.76L175.18 88H216a8 8 0 0 1 0 16h-55.37L117 152h99a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhNotEqualsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsBoldIcon],svg[ph-not-equals-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 160a12 12 0 0 1-12 12H104.22l-47.34 52.07a12 12 0 0 1-17.76-16.14L71.78 172H40a12 12 0 0 1 0-24h53.6l36.4-40H40a12 12 0 0 1 0-24h111.78l47.34-52.07a12 12 0 0 1 17.76 16.14L184.22 84H216a12 12 0 0 1 0 24h-53.6L126 148h90a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhNotEqualsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsDuotoneIcon],svg[ph-not-equals-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 160a8 8 0 0 1-8 8H102.45l-48.53 53.38a8 8 0 0 1-11.84-10.76L80.82 168H40a8 8 0 0 1 0-16h55.37L139 104H40a8 8 0 0 1 0-16h113.55l48.53-53.38a8 8 0 0 1 11.84 10.76L175.18 88H216a8 8 0 0 1 0 16h-55.37L117 152h99a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhNotEqualsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsFillIcon],svg[ph-not-equals-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 112a8 8 0 0 1 0 16h-73.37L78 197.27a8 8 0 0 1-12-10.54L89.37 160H72a8 8 0 0 1 0-16h31.37l28-32H72a8 8 0 0 1 0-16h73.37L178 58.73a8 8 0 1 1 12 10.54L166.63 96H184a8 8 0 0 1 0 16h-31.37l-28 32Z"></svg:path>`,
})
export class PhNotEqualsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsLightIcon],svg[ph-not-equals-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 160a6 6 0 0 1-6 6H101.56l-49.12 54a6 6 0 1 1-8.88-8l41.79-46H40a6 6 0 0 1 0-12h56.25l47.28-52H40a6 6 0 0 1 0-12h114.44l49.12-54a6 6 0 1 1 8.88 8l-41.79 46H216a6 6 0 0 1 0 12h-56.25l-47.28 52H216a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhNotEqualsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsThinIcon],svg[ph-not-equals-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 160a4 4 0 0 1-4 4H100.68L51 218.69a4 4 0 0 1-6-5.38L89.87 164H40a4 4 0 0 1 0-8h57.14l50.91-56H40a4 4 0 0 1 0-8h115.32L205 37.31a4 4 0 0 1 6 5.38L166.13 92H216a4 4 0 0 1 0 8h-57.14L108 156h108a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhNotEqualsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotMemberOfIcon],svg[ph-not-member-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 34.08a8 8 0 0 0-11.3.54L197.19 40H128a88 88 0 0 0-64.84 147.43l-21.08 23.19a8 8 0 1 0 11.84 10.76L75 198.2a87.5 87.5 0 0 0 53 17.8h72a8 8 0 0 0 0-16h-72a71.63 71.63 0 0 1-42.18-13.7l45.72-50.3H200a8 8 0 0 0 0-16h-53.92l67.84-74.62a8 8 0 0 0-.54-11.3M74 175.53A71.7 71.7 0 0 1 56.46 136h53.46ZM56.46 120A72.08 72.08 0 0 1 128 56h54.64l-58.18 64Z"></svg:path>`,
})
export class PhNotMemberOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotMemberOfBoldIcon],svg[ph-not-member-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.07 31.12a12 12 0 0 0-16.95.81l-3.7 4.07H128a91.95 91.95 0 0 0-70.2 151.39l-18.68 20.54a12 12 0 1 0 17.76 16.14l18.67-20.53A91.5 91.5 0 0 0 128 220h72a12 12 0 0 0 0-24h-72a67.5 67.5 0 0 1-36.12-10.43L133.31 140H200a12 12 0 0 0 0-24h-44.87l61.75-67.93a12 12 0 0 0-.81-16.95M74.13 169.42a67.75 67.75 0 0 1-13-29.42h39.79ZM61.08 116A68.1 68.1 0 0 1 128 60h45.6l-50.91 56Z"></svg:path>`,
})
export class PhNotMemberOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotMemberOfDuotoneIcon],svg[ph-not-member-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z" opacity=".2"></svg:path><svg:path d="M213.38 34.08a8 8 0 0 0-11.3.54L197.19 40H128a88 88 0 0 0-64.84 147.43l-21.08 23.19a8 8 0 1 0 11.84 10.76L75 198.2a87.5 87.5 0 0 0 53 17.8h72a8 8 0 0 0 0-16h-72a71.63 71.63 0 0 1-42.18-13.7l45.72-50.3H200a8 8 0 0 0 0-16h-53.92l67.84-74.62a8 8 0 0 0-.54-11.3M74 175.53A71.7 71.7 0 0 1 56.46 136h53.46ZM56.46 120A72.08 72.08 0 0 1 128 56h54.64l-58.18 64Z"></svg:path></svg:g>`,
})
export class PhNotMemberOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotMemberOfFillIcon],svg[ph-not-member-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-18 37.27L145.63 120H176a8 8 0 0 1 0 16h-44.37l-28.76 32.87A47.7 47.7 0 0 0 128 176h48a8 8 0 0 1 0 16h-48a63.6 63.6 0 0 1-35.78-11L78 197.27a8 8 0 0 1-12-10.54l14.21-16.24A64 64 0 0 1 128 64h45.37l4.63-5.27a8 8 0 1 1 12 10.54M128 80h31.37l-35 40H80.68A48.07 48.07 0 0 1 128 80m-47.32 56h29.69l-19.53 22.32A47.8 47.8 0 0 1 80.68 136"></svg:path>`,
})
export class PhNotMemberOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotMemberOfLightIcon],svg[ph-not-member-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 35.56a6 6 0 0 0-8.48.4l-5.49 6H128A85.93 85.93 0 0 0 65.9 187.4L43.56 212a6 6 0 0 0 8.88 8l22.33-24.57A85.52 85.52 0 0 0 128 214h72a6 6 0 0 0 0-12h-72a73.65 73.65 0 0 1-45.14-15.42L130.65 134H200a6 6 0 0 0 0-12h-58.44l70.88-78a6 6 0 0 0-.44-8.44M74 178.5A73.74 73.74 0 0 1 54.26 134h60.18ZM54.26 122A74.09 74.09 0 0 1 128 54h59.16l-61.81 68Z"></svg:path>`,
})
export class PhNotMemberOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotMemberOfThinIcon],svg[ph-not-member-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.69 37a4 4 0 0 0-5.65.27L199 44h-71a84 84 0 0 0-59.37 143.36L45 213.31a4 4 0 1 0 6 5.38l23.58-25.94A83.64 83.64 0 0 0 128 212h72a4 4 0 0 0 0-8h-72a75.66 75.66 0 0 1-48.07-17.18L129.77 132H200a4 4 0 0 0 0-8h-63l74-81.31a4 4 0 0 0-.31-5.69M74 181.43A75.7 75.7 0 0 1 52.11 132H119ZM52.11 124A76.09 76.09 0 0 1 128 52h63.69l-65.46 72Z"></svg:path>`,
})
export class PhNotMemberOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSubsetOfIcon],svg[ph-not-subset-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 34.08a8 8 0 0 0-11.3.54L197.19 40H128a88 88 0 0 0-64.84 147.43l-21.08 23.19a8 8 0 1 0 11.84 10.76L75 198.2a87.5 87.5 0 0 0 53 17.8h72a8 8 0 0 0 0-16h-72a71.63 71.63 0 0 1-42.18-13.7l128.1-140.92a8 8 0 0 0-.54-11.3M56 128a72.08 72.08 0 0 1 72-72h54.64L74 175.53A71.7 71.7 0 0 1 56 128"></svg:path>`,
})
export class PhNotSubsetOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSubsetOfBoldIcon],svg[ph-not-subset-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.07 31.12a12 12 0 0 0-16.95.81l-3.7 4.07H128a91.95 91.95 0 0 0-70.2 151.39l-18.68 20.54a12 12 0 1 0 17.76 16.14l18.67-20.53A91.5 91.5 0 0 0 128 220h72a12 12 0 0 0 0-24h-72a67.5 67.5 0 0 1-36.12-10.43l125-137.5a12 12 0 0 0-.81-16.95M60 128a68.07 68.07 0 0 1 68-68h45.6L74.13 169.42A67.62 67.62 0 0 1 60 128"></svg:path>`,
})
export class PhNotSubsetOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSubsetOfDuotoneIcon],svg[ph-not-subset-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z" opacity=".2"></svg:path><svg:path d="M213.38 34.08a8 8 0 0 0-11.3.54L197.19 40H128a88 88 0 0 0-64.84 147.43l-21.08 23.19a8 8 0 1 0 11.84 10.76L75 198.2a87.5 87.5 0 0 0 53 17.8h72a8 8 0 0 0 0-16h-72a71.63 71.63 0 0 1-42.18-13.7l128.1-140.92a8 8 0 0 0-.54-11.3M56 128a72.08 72.08 0 0 1 72-72h54.64L74 175.53A71.7 71.7 0 0 1 56 128"></svg:path></svg:g>`,
})
export class PhNotSubsetOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSubsetOfFillIcon],svg[ph-not-subset-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80h31.37l-68.54 78.33A48 48 0 0 1 128 80m96-32v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-34.73 10a8 8 0 0 0-11.29.75L173.37 64H128a64 64 0 0 0-47.81 106.49L66 186.73a8 8 0 0 0 12 10.54L92.22 181A63.6 63.6 0 0 0 128 192h48a8 8 0 0 0 0-16h-48a47.63 47.63 0 0 1-25.13-7.13L190 69.27a8 8 0 0 0-.73-11.27"></svg:path>`,
})
export class PhNotSubsetOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSubsetOfLightIcon],svg[ph-not-subset-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 35.56a6 6 0 0 0-8.48.4l-5.49 6H128A85.93 85.93 0 0 0 65.9 187.4L43.56 212a6 6 0 0 0 8.88 8l22.33-24.57A85.52 85.52 0 0 0 128 214h72a6 6 0 0 0 0-12h-72a73.65 73.65 0 0 1-45.14-15.42L212.44 44a6 6 0 0 0-.44-8.44M54 128a74.09 74.09 0 0 1 74-74h59.16L74 178.5A73.7 73.7 0 0 1 54 128"></svg:path>`,
})
export class PhNotSubsetOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSubsetOfThinIcon],svg[ph-not-subset-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.69 37a4 4 0 0 0-5.65.27L199 44h-71a84 84 0 0 0-59.37 143.36L45 213.31a4 4 0 1 0 6 5.38l23.58-25.94A83.64 83.64 0 0 0 128 212h72a4 4 0 0 0 0-8h-72a75.66 75.66 0 0 1-48.07-17.18L211 42.69a4 4 0 0 0-.31-5.69M52 128a76.08 76.08 0 0 1 76-76h63.69L74 181.43A75.75 75.75 0 0 1 52 128"></svg:path>`,
})
export class PhNotSubsetOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfIcon],svg[ph-not-superset-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 192H80.63l21.82-24H152a64 64 0 0 0 47.54-106.8l14.38-15.82a8 8 0 0 0-11.84-10.76l-14.65 16.11A63.66 63.66 0 0 0 152 40H56a8 8 0 0 0 0 16h96a47.7 47.7 0 0 1 24.51 6.75L95.37 152H56a8 8 0 0 0 0 16h24.82l-38.74 42.62a8 8 0 1 0 11.84 10.76L66.08 208H208a8 8 0 0 0 0-16M188.71 73.12A48 48 0 0 1 152 152h-35Z"></svg:path>`,
})
export class PhNotSupersetOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfBoldIcon],svg[ph-not-superset-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 188H89.67l14.55-16H152a68 68 0 0 0 52.86-110.71l12-13.22a12 12 0 0 0-17.76-16.14l-12.4 13.63A67.6 67.6 0 0 0 152 36H56a12 12 0 0 0 0 24h96a43.7 43.7 0 0 1 18.06 3.89L93.6 148H56a12 12 0 0 0 0 24h15.78l-32.66 35.93a12 12 0 1 0 17.76 16.14l11-12.07H208a12 12 0 0 0 0-24M188.44 79.36A44 44 0 0 1 152 148h-26Z"></svg:path>`,
})
export class PhNotSupersetOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfDuotoneIcon],svg[ph-not-superset-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a56 56 0 0 1-56 56H56V48h96a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M208 192H80.63l21.82-24H152a64 64 0 0 0 47.54-106.8l14.38-15.82a8 8 0 0 0-11.84-10.76l-14.65 16.11A63.66 63.66 0 0 0 152 40H56a8 8 0 0 0 0 16h96a47.7 47.7 0 0 1 24.51 6.75L95.37 152H56a8 8 0 0 0 0 16h24.82l-38.74 42.62a8 8 0 1 0 11.84 10.76L66.08 208H208a8 8 0 0 0 0-16M188.71 73.12A48 48 0 0 1 152 152h-35Z"></svg:path></svg:g>`,
})
export class PhNotSupersetOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfFillIcon],svg[ph-not-superset-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.09 98.9A24 24 0 0 1 144 136h-12.37ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-34.73 10a8 8 0 0 0-11.29.75l-15.56 17.76A39.8 39.8 0 0 0 144 72H80a8 8 0 0 0 0 16h64a23.9 23.9 0 0 1 7.36 1.16l-41 46.84H80a8 8 0 0 0 0 16h16.37L66 186.73a8 8 0 0 0 12 10.54L89.63 184H176a8 8 0 0 0 0-16h-72.37l14-16H144a40 40 0 0 0 30.87-65.41L190 69.27a8 8 0 0 0-.73-11.27"></svg:path>`,
})
export class PhNotSupersetOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfLightIcon],svg[ph-not-superset-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 194H76.11l25.45-28H152a62 62 0 0 0 44.81-104.78L212.44 44a6 6 0 1 0-8.88-8l-15.83 17.38A61.6 61.6 0 0 0 152 42H56a6 6 0 0 0 0 12h96a49.67 49.67 0 0 1 27.59 8.33L96.25 154H56a6 6 0 0 0 0 12h29.35l-41.79 46a6 6 0 0 0 8.88 8l12.76-14H208a6 6 0 0 0 0-12M188.73 70.12A50 50 0 0 1 152 154h-39.53Z"></svg:path>`,
})
export class PhNotSupersetOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfThinIcon],svg[ph-not-superset-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 196H71.59l29.09-32H152a60 60 0 0 0 42.07-102.73L211 42.69a4 4 0 0 0-6-5.38L188 56a59.73 59.73 0 0 0-36-12H56a4 4 0 0 0 0 8h96a51.75 51.75 0 0 1 30.6 10l-85.46 94H56a4 4 0 0 0 0 8h33.87L45 213.31a4 4 0 1 0 6 5.38L64.31 204H208a4 4 0 0 0 0-8M188.69 67.19A52 52 0 0 1 152 156h-44Z"></svg:path>`,
})
export class PhNotSupersetOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotchesIcon],svg[ph-notches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 133.66l-80 80a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 11.32m-16-99.32a8 8 0 0 0-11.32 0l-152 152a8 8 0 0 0 11.32 11.32l152-152a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhNotchesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotchesBoldIcon],svg[ph-notches-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 136.49l-80 80a12 12 0 1 1-17-17l80-80a12 12 0 1 1 17 17m-16-105a12 12 0 0 0-17 0l-152 152a12 12 0 0 0 17 17l152-152a12 12 0 0 0 0-16.98Z"></svg:path>`,
})
export class PhNotchesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotchesDuotoneIcon],svg[ph-notches-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v152H40Z" opacity=".2"></svg:path><svg:path d="M195.06 32.61a8 8 0 0 0-8.72 1.73l-152 152A8 8 0 0 0 40 200h152a8 8 0 0 0 8-8V40a8 8 0 0 0-4.94-7.39M184 184H59.31L184 59.31Z"></svg:path></svg:g>`,
})
export class PhNotchesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotchesFillIcon],svg[ph-notches-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40v152a8 8 0 0 1-8 8H40a8 8 0 0 1-5.66-13.66l152-152A8 8 0 0 1 200 40"></svg:path>`,
})
export class PhNotchesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotchesLightIcon],svg[ph-notches-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 132.24l-80 80a6 6 0 1 1-8.48-8.48l80-80a6 6 0 1 1 8.48 8.48m-16-96.48a6 6 0 0 0-8.48 0l-152 152a6 6 0 1 0 8.48 8.48l152-152a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhNotchesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotchesThinIcon],svg[ph-notches-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 130.83l-80 80a4 4 0 1 1-5.66-5.66l80-80a4 4 0 1 1 5.66 5.66m-16-93.66a4 4 0 0 0-5.66 0l-152 152a4 4 0 0 0 5.66 5.66l152-152a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhNotchesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteIcon],svg[ph-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 96a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m32 16H96a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m96-104v108.69a15.86 15.86 0 0 1-4.69 11.31L168 219.31a15.86 15.86 0 0 1-11.31 4.69H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h104v-48a8 8 0 0 1 8-8h48V48H48Zm120-40v28.7l28.69-28.7Z"></svg:path>`,
})
export class PhNoteIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteBlankIcon],svg[ph-note-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.69a15.86 15.86 0 0 0 11.31-4.69L219.31 168a15.86 15.86 0 0 0 4.69-11.31V48a16 16 0 0 0-16-16M48 48h160v104h-48a8 8 0 0 0-8 8v48H48Zm148.69 120L168 196.69V168Z"></svg:path>`,
})
export class PhNoteBlankIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteBlankBoldIcon],svg[ph-note-blank-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h108.69a19.86 19.86 0 0 0 14.14-5.86l51.31-51.31a19.86 19.86 0 0 0 5.86-14.14V48a20 20 0 0 0-20-20M52 52h152v92h-48a12 12 0 0 0-12 12v48H52Zm116 139v-23h23Z"></svg:path>`,
})
export class PhNoteBlankBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteBlankDuotoneIcon],svg[ph-note-blank-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 160l-56 56v-56Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.69a15.86 15.86 0 0 0 11.31-4.69L219.31 168a15.86 15.86 0 0 0 4.69-11.31V48a16 16 0 0 0-16-16M48 48h160v104h-48a8 8 0 0 0-8 8v48H48Zm148.69 120L168 196.69V168Z"></svg:path></svg:g>`,
})
export class PhNoteBlankDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteBlankFillIcon],svg[ph-note-blank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.69a15.86 15.86 0 0 0 11.31-4.69L219.31 168a15.86 15.86 0 0 0 4.69-11.31V48a16 16 0 0 0-16-16m-48 172.69V160h44.69Z"></svg:path>`,
})
export class PhNoteBlankFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteBlankLightIcon],svg[ph-note-blank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h108.69a13.94 13.94 0 0 0 9.9-4.1l51.31-51.31a13.94 13.94 0 0 0 4.1-9.9V48a14 14 0 0 0-14-14M46 208V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2v106h-50a6 6 0 0 0-6 6v50H48a2 2 0 0 1-2-2m120-6.49V166h35.52Z"></svg:path>`,
})
export class PhNoteBlankLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteBlankThinIcon],svg[ph-note-blank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h108.69a11.93 11.93 0 0 0 8.48-3.51l51.32-51.32a11.93 11.93 0 0 0 3.51-8.48V48a12 12 0 0 0-12-12M44 208V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v108h-52a4 4 0 0 0-4 4v52H48a4 4 0 0 1-4-4m120-1.66V164h42.35Z"></svg:path>`,
})
export class PhNoteBlankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteBoldIcon],svg[ph-note-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 108a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m32 28H96a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m112-88v108.69a19.86 19.86 0 0 1-5.86 14.14l-51.31 51.31a19.86 19.86 0 0 1-14.14 5.86H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20M52 204h92v-48a12 12 0 0 1 12-12h48V52H52Zm139-36h-23v23Z"></svg:path>`,
})
export class PhNoteBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteDuotoneIcon],svg[ph-note-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 160l-56 56v-56Z" opacity=".2"></svg:path><svg:path d="M88 96a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m32 16H96a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m96-104v108.69a15.86 15.86 0 0 1-4.69 11.31L168 219.31a15.86 15.86 0 0 1-11.31 4.69H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h104v-48a8 8 0 0 1 8-8h48V48H48Zm120-40v28.7l28.69-28.7Z"></svg:path></svg:g>`,
})
export class PhNoteDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteFillIcon],svg[ph-note-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.69a15.92 15.92 0 0 0 11.31-4.69L219.31 168a15.92 15.92 0 0 0 4.69-11.31V48a16 16 0 0 0-16-16M96 88h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m32 80H96a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m-32-32a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Zm64 68.69V160h44.7Z"></svg:path>`,
})
export class PhNoteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteLightIcon],svg[ph-note-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 96a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m6 38h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m32 20H96a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m94-106v108.69a13.94 13.94 0 0 1-4.1 9.9l-51.31 51.31a13.94 13.94 0 0 1-9.9 4.1H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M48 210h106v-50a6 6 0 0 1 6-6h50V48a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2m153.52-44H166v35.52Z"></svg:path>`,
})
export class PhNoteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotePencilIcon],svg[ph-note-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32M124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhNotePencilIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotePencilBoldIcon],svg[ph-note-pencil-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 55.51l-32-32a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 84 128v32a12 12 0 0 0 12 12h32a12 12 0 0 0 8.49-3.51l96-96a12 12 0 0 0 0-16.98M192 49l15 15l-11 11l-15-15Zm-69 99h-15v-15l56-56l15 15Zm105-7.43V208a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h67.43a12 12 0 0 1 0 24H52v152h152v-63.43a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhNotePencilBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotePencilDuotoneIcon],svg[ph-note-pencil-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 88l-72 72H96v-32l72-72Z" opacity=".2"></svg:path><svg:path d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32M124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhNotePencilDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotePencilFillIcon],svg[ph-note-pencil-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v160h160v-80a8 8 0 0 1 16 0m5.66-58.34l-96 96A8 8 0 0 1 128 168H96a8 8 0 0 1-8-8v-32a8 8 0 0 1 2.34-5.66l96-96a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32m-17-5.66L192 43.31L179.31 56L200 76.69Z"></svg:path>`,
})
export class PhNotePencilFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotePencilLightIcon],svg[ph-note-pencil-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 59.76l-32-32a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 90 128v32a6 6 0 0 0 6 6h32a6 6 0 0 0 4.24-1.76l96-96a6 6 0 0 0 0-8.48M125.51 154H102v-23.51l66-66L191.51 88ZM200 79.51L176.49 56L192 40.49L215.51 64ZM222 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhNotePencilLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotePencilThinIcon],svg[ph-note-pencil-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 61.17l-32-32a4 4 0 0 0-5.66 0l-96 96A4 4 0 0 0 92 128v32a4 4 0 0 0 4 4h32a4 4 0 0 0 2.83-1.17l96-96a4 4 0 0 0 0-5.66M126.34 156H100v-26.34l68-68L194.34 88ZM200 82.34L173.66 56L192 37.66L218.34 64ZM220 128v80a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h80a4 4 0 0 1 0 8H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-80a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhNotePencilThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNoteThinIcon],svg[ph-note-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 96a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m4 36h64a4 4 0 0 0 0-8H96a4 4 0 0 0 0 8m32 24H96a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m92-108v108.69a11.9 11.9 0 0 1-3.52 8.48l-51.31 51.32a11.93 11.93 0 0 1-8.48 3.51H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M48 212h108v-52a4 4 0 0 1 4-4h52V48a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4m158.35-48H164v42.35Z"></svg:path>`,
})
export class PhNoteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotebookIcon],svg[ph-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 112a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m48-88v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h24V48H48Zm160 0V48H88v160z"></svg:path>`,
})
export class PhNotebookIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotebookBoldIcon],svg[ph-notebook-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 108a12 12 0 0 1 12-12h56a12 12 0 0 1 0 24h-56a12 12 0 0 1-12-12m68 28h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m52-88v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20M52 204h16V52H52ZM204 52H92v152h112Z"></svg:path>`,
})
export class PhNotebookBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotebookDuotoneIcon],svg[ph-notebook-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 40v176H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M184 112a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m48-88v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h24V48H48Zm160 0V48H88v160z"></svg:path></svg:g>`,
})
export class PhNotebookDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotebookFillIcon],svg[ph-notebook-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 208H48V48h32Zm96-56h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhNotebookFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotebookLightIcon],svg[ph-notebook-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 112a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m46-90v160a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M48 210h26V46H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2M210 48a2 2 0 0 0-2-2H86v164h122a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhNotebookLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotebookThinIcon],svg[ph-notebook-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 112a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-92v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M48 212h28V44H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4M212 48a4 4 0 0 0-4-4H84v168h124a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhNotebookThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotepadIcon],svg[ph-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 128a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m56-112v160a32 32 0 0 1-32 32H72a32 32 0 0 1-32-32V40a8 8 0 0 1 8-8h24v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h24a8 8 0 0 1 8 8m-16 8h-16v8a8 8 0 0 1-16 0v-8h-32v8a8 8 0 0 1-16 0v-8H88v8a8 8 0 0 1-16 0v-8H56v152a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z"></svg:path>`,
})
export class PhNotepadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotepadBoldIcon],svg[ph-notepad-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 124a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m60-112v160a36 36 0 0 1-36 36H72a36 36 0 0 1-36-36V40a12 12 0 0 1 12-12h24v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h24a12 12 0 0 1 12 12m-24 12h-12v4a12 12 0 0 1-24 0v-4h-20v4a12 12 0 0 1-24 0v-4H96v4a12 12 0 0 1-24 0v-4H60v148a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhNotepadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotepadDuotoneIcon],svg[ph-notepad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v160a24 24 0 0 1-24 24H72a24 24 0 0 1-24-24V40Z" opacity=".2"></svg:path><svg:path d="M168 128a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m56-112v160a32 32 0 0 1-32 32H72a32 32 0 0 1-32-32V40a8 8 0 0 1 8-8h24v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h32v-8a8 8 0 0 1 16 0v8h24a8 8 0 0 1 8 8m-16 8h-16v8a8 8 0 0 1-16 0v-8h-32v8a8 8 0 0 1-16 0v-8H88v8a8 8 0 0 1-16 0v-8H56v152a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z"></svg:path></svg:g>`,
})
export class PhNotepadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotepadFillIcon],svg[ph-notepad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8h-32v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a8 8 0 0 0-8 8v160a32 32 0 0 0 32 32h112a32 32 0 0 0 32-32V40a8 8 0 0 0-8-8m-88 24a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0ZM80 72a8 8 0 0 1-8-8v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-8 8m80 96H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m24-72a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhNotepadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotepadLightIcon],svg[ph-notepad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 128a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m54-114v160a30 30 0 0 1-30 30H72a30 30 0 0 1-30-30V40a6 6 0 0 1 6-6h26V24a6 6 0 0 1 12 0v10h36V24a6 6 0 0 1 12 0v10h36V24a6 6 0 0 1 12 0v10h26a6 6 0 0 1 6 6m-12 6h-20v10a6 6 0 0 1-12 0V46h-36v10a6 6 0 0 1-12 0V46H86v10a6 6 0 0 1-12 0V46H54v154a18 18 0 0 0 18 18h112a18 18 0 0 0 18-18Z"></svg:path>`,
})
export class PhNotepadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotepadThinIcon],svg[ph-notepad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 128a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m52-116v160a28 28 0 0 1-28 28H72a28 28 0 0 1-28-28V40a4 4 0 0 1 4-4h28V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h28a4 4 0 0 1 4 4m-8 4h-24v12a4 4 0 0 1-8 0V44h-40v12a4 4 0 0 1-8 0V44H84v12a4 4 0 0 1-8 0V44H52v156a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhNotepadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotificationIcon],svg[ph-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0m16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36m-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhNotificationIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotificationBoldIcon],svg[ph-notification-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 132v76a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h76a12 12 0 0 1 0 24H52v144h144v-72a12 12 0 0 1 24 0m16-72a40 40 0 1 1-40-40a40 40 0 0 1 40 40m-24 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhNotificationBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotificationDuotoneIcon],svg[ph-notification-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 60a28 28 0 1 1-28-28a28 28 0 0 1 28 28" opacity=".2"></svg:path><svg:path d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0m16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36m-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path></svg:g>`,
})
export class PhNotificationDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotificationFillIcon],svg[ph-notification-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0M196 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36"></svg:path>`,
})
export class PhNotificationFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotificationLightIcon],svg[ph-notification-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v152a2 2 0 0 0 2 2h152a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0m16-68a34 34 0 1 1-34-34a34 34 0 0 1 34 34m-12 0a22 22 0 1 0-22 22a22 22 0 0 0 22-22"></svg:path>`,
})
export class PhNotificationLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotificationThinIcon],svg[ph-notification-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 128v80a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h80a4 4 0 0 1 0 8H48a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h152a4 4 0 0 0 4-4v-80a4 4 0 0 1 8 0m16-68a32 32 0 1 1-32-32a32 32 0 0 1 32 32m-8 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24"></svg:path>`,
})
export class PhNotificationThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoIcon],svg[ph-notion-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40h-48a8 8 0 0 0 0 16h16v120.85L111 44.14a8 8 0 0 0-7-4.14H40a8 8 0 0 0 0 16h16v144H40a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16H72V79.15l73 132.71a8 8 0 0 0 7 4.14h40a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16M77.53 56h21.74l79.2 144h-21.74Z"></svg:path>`,
})
export class PhNotionLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoBoldIcon],svg[ph-notion-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-40a12 12 0 0 0 0 24h8v101.28L118.51 42.22A12 12 0 0 0 108 36H40a12 12 0 0 0 0 24h8v136h-8a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24h-8V94.72l65.49 119.06A12 12 0 0 0 148 220h48a12 12 0 0 0 12-12V60h8a12 12 0 0 0 0-24M80.3 60h20.6l74.8 136h-20.6Z"></svg:path>`,
})
export class PhNotionLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoDuotoneIcon],svg[ph-notion-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 208h-40L64 48h40Z" opacity=".2"></svg:path><svg:path d="M216 40h-48a8 8 0 0 0 0 16h16v120.85L111 44.14a8 8 0 0 0-7-4.14H40a8 8 0 0 0 0 16h16v144H40a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16H72V79.15l73 132.71a8 8 0 0 0 7 4.14h40a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16m-59.27 160L77.53 56h21.74l79.2 144Z"></svg:path></svg:g>`,
})
export class PhNotionLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoFillIcon],svg[ph-notion-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48a8 8 0 0 1-8 8h-16v152a8 8 0 0 1-8 8h-40a8 8 0 0 1-7-4.14L72 79.15V200h16a8 8 0 0 1 0 16H40a8 8 0 0 1 0-16h16V56H40a8 8 0 0 1 0-16h64a8 8 0 0 1 7 4.14l73 132.71V56h-16a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhNotionLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoLightIcon],svg[ph-notion-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42h-48a6 6 0 0 0 0 12h18v130.64L109.26 45.11A6 6 0 0 0 104 42H40a6 6 0 0 0 0 12h18v148H40a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12H70V71.36l76.74 139.53A6 6 0 0 0 152 214h40a6 6 0 0 0 6-6V54h18a6 6 0 0 0 0-12M74.15 54h26.3l81.4 148h-26.3Z"></svg:path>`,
})
export class PhNotionLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoThinIcon],svg[ph-notion-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44h-48a4 4 0 0 0 0 8h20v140.43L107.5 46.07A4 4 0 0 0 104 44H40a4 4 0 0 0 0 8h20v152H40a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8H68V63.57l80.5 146.36A4 4 0 0 0 152 212h40a4 4 0 0 0 4-4V52h20a4 4 0 0 0 0-8M70.77 52h30.86l83.6 152h-30.86Z"></svg:path>`,
})
export class PhNotionLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNuclearPlantIcon],svg[ph-nuclear-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 32h24a8 8 0 0 0 8-8a8 8 0 0 1 16 0a24 24 0 0 1-24 24h-24a8 8 0 0 0-8 8a8 8 0 0 1-16 0a24 24 0 0 1 24-24m-48 32a8 8 0 0 0 8-8a40 40 0 0 1 40-40h8a8 8 0 0 0 0-16h-8a56.06 56.06 0 0 0-56 56a8 8 0 0 0 8 8m144 152a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h16.74c13.77-27.83 29.48-68.69 31.12-112.66A15.91 15.91 0 0 1 79.85 80h88.33a16 16 0 0 1 16 15.28c2.1 47.84 23.84 92.37 35.29 112.72H240a8 8 0 0 1 8 8M168.18 96h-16c1.77 43.72 17.39 84.32 31.09 112h18c-12.59-23.92-31.09-66.36-33.09-112M50.5 208h115c-13.5-28.91-27.73-68.91-29.35-112a7.5 7.5 0 0 1-1-.06l-55.3.06c-1.61 43.06-15.79 83.07-29.35 112"></svg:path>`,
})
export class PhNuclearPlantIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNuclearPlantBoldIcon],svg[ph-nuclear-plant-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92.83 50A59.79 59.79 0 0 1 152 0a12 12 0 0 1 0 24a35.85 35.85 0 0 0-35.5 30a12 12 0 0 1-11.82 10a11.3 11.3 0 0 1-2-.17A12 12 0 0 1 92.83 50M148 40a12 12 0 0 0 0 24h4a52.06 52.06 0 0 0 52-52a12 12 0 0 0-24 0a28 28 0 0 1-28 28Zm104 176a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h16.15c12.47-26.53 26.2-64.41 27.72-104.81A19.89 19.89 0 0 1 79.85 80h88.34a20 20 0 0 1 20 19.08c2 44.12 22.46 86.48 32.58 104.92H240a12 12 0 0 1 12 12m-87.6-112h-16c2.36 38.59 15.49 74.53 27.47 100h17.78c-11.73-23.48-26.65-60.34-29.25-100M58.48 204h91c-11.66-26.88-23.11-62.15-25.19-100H83.67c-2.08 37.85-13.53 73.12-25.19 100"></svg:path>`,
})
export class PhNuclearPlantBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNuclearPlantDuotoneIcon],svg[ph-nuclear-plant-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M178.33 216H37.67C51.16 189.65 70 144.55 71.86 95.64a8 8 0 0 1 8-7.64h56.3a8 8 0 0 1 8 7.64c1.84 48.91 20.68 94.01 34.17 120.36" opacity=".2"></svg:path><svg:path d="M240 208h-20.55c-11.45-20.35-33.19-64.88-35.29-112.72a16 16 0 0 0-16-15.28H79.85a15.91 15.91 0 0 0-16 15.34c-1.64 44-17.35 84.83-31.12 112.66H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-189.5 0c13.56-28.93 27.74-68.94 29.35-112l55.35-.06a7.5 7.5 0 0 0 1 .06c1.62 43.09 15.8 83.09 29.35 112Zm132.76 0c-13.7-27.69-29.32-68.29-31.09-112h16c2 45.66 20.5 88.1 33.06 112ZM152 32h24a8 8 0 0 0 8-8a8 8 0 0 1 16 0a24 24 0 0 1-24 24h-24a8 8 0 0 0-8 8a8 8 0 0 1-16 0a24 24 0 0 1 24-24M96 56a56.06 56.06 0 0 1 56-56h8a8 8 0 0 1 0 16h-8a40 40 0 0 0-40 40a8 8 0 0 1-16 0"></svg:path></svg:g>`,
})
export class PhNuclearPlantDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNuclearPlantFillIcon],svg[ph-nuclear-plant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 32h24a8 8 0 0 0 8-8a8 8 0 0 1 16 0a24 24 0 0 1-24 24h-24a8 8 0 0 0-8 8a8 8 0 0 1-16 0a24 24 0 0 1 24-24m-48 32a8 8 0 0 0 8-8a40 40 0 0 1 40-40h8a8 8 0 0 0 0-16h-8a56.06 56.06 0 0 0-56 56a8 8 0 0 0 8 8m144 152a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h16.74c13.77-27.83 29.48-68.69 31.12-112.66A15.91 15.91 0 0 1 79.85 80h88.33a16 16 0 0 1 16 15.28c2.1 47.84 23.84 92.37 35.29 112.72H240a8 8 0 0 1 8 8M168.18 96h-16c1.77 43.72 17.39 84.32 31.09 112h18c-12.59-23.92-31.09-66.36-33.09-112"></svg:path>`,
})
export class PhNuclearPlantFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNuclearPlantLightIcon],svg[ph-nuclear-plant-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 34h24a10 10 0 0 0 10-10a6 6 0 0 1 12 0a22 22 0 0 1-22 22h-24a10 10 0 0 0-10 10a6 6 0 0 1-12 0a22 22 0 0 1 22-22m-48 28a6 6 0 0 0 6-6a42 42 0 0 1 42-42h8a6 6 0 0 0 0-12h-8a54.06 54.06 0 0 0-54 54a6 6 0 0 0 6 6m142 154a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h18c14-28 30.2-69.68 31.88-114.59A13.92 13.92 0 0 1 79.85 82h88.33a14 14 0 0 1 14 13.37c2.14 49.08 24.74 94.63 36.1 114.63H240a6 6 0 0 1 6 6M168.18 94H150c.06.46.1.94.12 1.41C151.82 140.32 168 182 182 210h22.55c-12.44-23.1-32.32-66.9-34.4-114.11a2 2 0 0 0-1.97-1.89M47.34 210h121.32c-13.86-28.94-28.86-69.92-30.51-114.14a2 2 0 0 0-2-1.86h-56.3a2 2 0 0 0-2 1.86C76.2 140.08 61.2 181.06 47.34 210"></svg:path>`,
})
export class PhNuclearPlantLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNuclearPlantThinIcon],svg[ph-nuclear-plant-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 36h24a12 12 0 0 0 12-12a4 4 0 0 1 8 0a20 20 0 0 1-20 20h-24a12 12 0 0 0-12 12a4 4 0 0 1-8 0a20 20 0 0 1 20-20m-48 24a4 4 0 0 0 4-4a44.05 44.05 0 0 1 44-44h8a4 4 0 0 0 0-8h-8a52.06 52.06 0 0 0-52 52a4 4 0 0 0 4 4m140 156a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h19.21c14.21-28.21 30.94-70.65 32.65-116.51A11.93 11.93 0 0 1 79.85 84h88.33a12 12 0 0 1 12 11.46c2.21 50.34 25.71 97 37 116.54H240a4 4 0 0 1 4 4m-72.15-4c-14.14-28.88-30-70.85-31.7-116.21a4 4 0 0 0-4-3.79h-56.3a4 4 0 0 0-4 3.79c-1.69 45.36-17.56 87.33-31.7 116.21Zm36.09 0c-12.17-22-33.62-67.3-35.77-116.19a4 4 0 0 0-4-3.81h-20.68a11.9 11.9 0 0 1 .65 3.49c1.71 45.86 18.44 88.3 32.65 116.51Z"></svg:path>`,
})
export class PhNuclearPlantThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleEightIcon],svg[ph-number-circle-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m21.81-92.61a32 32 0 1 0-43.62 0a36 36 0 1 0 43.62 0M112 100a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhNumberCircleEightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleEightBoldIcon],svg[ph-number-circle-eight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m27.6-88.91a36 36 0 1 0-55.2 0a40 40 0 1 0 55.2 0M116 100a12 12 0 1 1 12 12a12 12 0 0 1-12-12m12 68a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhNumberCircleEightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleEightDuotoneIcon],svg[ph-number-circle-eight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m21.81-92.61a32 32 0 1 0-43.62 0a36 36 0 1 0 43.62 0M112 100a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhNumberCircleEightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleEightFillIcon],svg[ph-number-circle-eight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 152a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20-36a16 16 0 1 0-16-16a16 16 0 0 0 16 16m104 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-68 24a35.93 35.93 0 0 0-14.19-28.61a32 32 0 1 0-43.62 0A36 36 0 1 0 164 152"></svg:path>`,
})
export class PhNumberCircleEightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleEightLightIcon],svg[ph-number-circle-eight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m18.57-94.46a30 30 0 1 0-37.14 0a34 34 0 1 0 37.14 0M110 100a18 18 0 1 1 18 18a18 18 0 0 1-18-18m18 74a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhNumberCircleEightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleEightThinIcon],svg[ph-number-circle-eight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m14.9-96.31a28 28 0 1 0-29.8 0a32 32 0 1 0 29.8 0M108 100a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 76a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhNumberCircleEightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFiveIcon],svg[ph-number-circle-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-9.22-128l-4.19 25.14A38.8 38.8 0 0 1 124 112a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16Z"></svg:path>`,
})
export class PhNumberCircleFiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFiveBoldIcon],svg[ph-number-circle-five-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m-5.83-120l-2.71 16.23A45 45 0 0 1 124 108a40 40 0 0 1 0 80a39.53 39.53 0 0 1-28.57-11.6a12 12 0 1 1 17.14-16.8A15.54 15.54 0 0 0 124 164a16 16 0 0 0 0-32a15.54 15.54 0 0 0-11.43 4.4A12 12 0 0 1 92.16 126l8-48A12 12 0 0 1 112 68h40a12 12 0 0 1 0 24Z"></svg:path>`,
})
export class PhNumberCircleFiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFiveDuotoneIcon],svg[ph-number-circle-five-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-9.22-128l-4.19 25.14A38.8 38.8 0 0 1 124 112a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16Z"></svg:path></svg:g>`,
})
export class PhNumberCircleFiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFiveFillIcon],svg[ph-number-circle-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 88a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16h-33.22l-4.19 25.14A38.8 38.8 0 0 1 124 112"></svg:path>`,
})
export class PhNumberCircleFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFiveLightIcon],svg[ph-number-circle-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M117.08 86l-5 30a36 36 0 0 1 11.92-2a34 34 0 0 1 0 68a33.6 33.6 0 0 1-24.29-9.8a6 6 0 1 1 8.58-8.4A21.65 21.65 0 0 0 124 170a22 22 0 0 0 0-44a21.65 21.65 0 0 0-15.71 6.2a6 6 0 0 1-10.21-5.2l8-48a6 6 0 0 1 5.92-5h40a6 6 0 0 1 0 12Z"></svg:path>`,
})
export class PhNumberCircleFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFiveThinIcon],svg[ph-number-circle-five-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M115.39 84l-5.87 35.21A33.26 33.26 0 0 1 124 116a32 32 0 0 1 0 64a31.62 31.62 0 0 1-22.86-9.2a4 4 0 1 1 5.72-5.6A23.67 23.67 0 0 0 124 172a24 24 0 0 0 0-48a23.67 23.67 0 0 0-17.14 6.8a4 4 0 0 1-6.81-3.46l8-48A4 4 0 0 1 112 76h40a4 4 0 0 1 0 8Z"></svg:path>`,
})
export class PhNumberCircleFiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourIcon],svg[ph-number-circle-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-72h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 0-16m-24 0h-31.64L136 103.32Z"></svg:path>`,
})
export class PhNumberCircleFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourBoldIcon],svg[ph-number-circle-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32-72h-4V80a12 12 0 0 0-21.47-7.37l-56 72A12 12 0 0 0 88 164h44v12a12 12 0 0 0 24 0v-12h4a12 12 0 0 0 0-24m-28 0h-19.46L132 115Z"></svg:path>`,
})
export class PhNumberCircleFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourDuotoneIcon],svg[ph-number-circle-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-72h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 0-16m-24 0h-31.64L136 103.32Z"></svg:path></svg:g>`,
})
export class PhNumberCircleFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourFillIcon],svg[ph-number-circle-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104.36 144L136 103.32V144ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-64 24a8 8 0 0 0-8-8h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhNumberCircleFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourLightIcon],svg[ph-number-circle-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m32-72h-10V80a6 6 0 0 0-10.74-3.68l-56 72A6 6 0 0 0 88 158h50v18a6 6 0 0 0 12 0v-18h10a6 6 0 0 0 0-12m-22 0h-37.73L138 97.49Z"></svg:path>`,
})
export class PhNumberCircleFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourThinIcon],svg[ph-number-circle-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-72h-12V80a4 4 0 0 0-7.16-2.46l-56 72A4 4 0 0 0 88 156h52v20a4 4 0 0 0 8 0v-20h12a4 4 0 0 0 0-8m-20 0H96.18L140 91.66Z"></svg:path>`,
})
export class PhNumberCircleFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleNineIcon],svg[ph-number-circle-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m18-139.18A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77L159.18 126A36.05 36.05 0 0 0 146 76.82m-.67 41.18A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32Z"></svg:path>`,
})
export class PhNumberCircleNineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleNineBoldIcon],svg[ph-number-circle-nine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m20-138.64a40 40 0 1 0-25.06 74.32l-13.24 22.17a12 12 0 1 0 20.6 12.3L162.64 128A40 40 0 0 0 148 73.36M141.86 116A16 16 0 1 1 136 94.14a16 16 0 0 1 5.84 21.86Z"></svg:path>`,
})
export class PhNumberCircleNineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleNineDuotoneIcon],svg[ph-number-circle-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m18-139.18A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77L159.18 126A36.05 36.05 0 0 0 146 76.82m-.67 41.18A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32Z"></svg:path></svg:g>`,
})
export class PhNumberCircleNineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleNineFillIcon],svg[ph-number-circle-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.33 118A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-86-51.18A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77L159.18 126A36.05 36.05 0 0 0 146 76.82"></svg:path>`,
})
export class PhNumberCircleNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleNineLightIcon],svg[ph-number-circle-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145 78.55A34 34 0 1 0 127.94 142a33.6 33.6 0 0 0 5.67-.49l-18.76 31.42a6 6 0 0 0 10.3 6.16l32.3-54.09A34 34 0 0 0 145 78.55m2.06 40.45A22 22 0 1 1 139 89a22 22 0 0 1 8.05 30ZM128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90"></svg:path>`,
})
export class PhNumberCircleNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleNineThinIcon],svg[ph-number-circle-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 80.29a32 32 0 1 0-6.23 58.16L116.57 174a4 4 0 0 0 1.38 5.48a3.9 3.9 0 0 0 2 .57a4 4 0 0 0 3.43-1.95l32.33-54.1A32 32 0 0 0 144 80.29m4.8 39.71l-.06.09a22.62 22.62 0 1 1 .06-.09M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92"></svg:path>`,
})
export class PhNumberCircleNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleOneIcon],svg[ph-number-circle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-136v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80"></svg:path>`,
})
export class PhNumberCircleOneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleOneBoldIcon],svg[ph-number-circle-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m16-132v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58a12 12 0 0 1-13.32-20l24-16A12 12 0 0 1 144 80"></svg:path>`,
})
export class PhNumberCircleOneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleOneDuotoneIcon],svg[ph-number-circle-one-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-136v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80"></svg:path></svg:g>`,
})
export class PhNumberCircleOneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleOneFillIcon],svg[ph-number-circle-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m12 152a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80Z"></svg:path>`,
})
export class PhNumberCircleOneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleOneLightIcon],svg[ph-number-circle-one-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m10-138v96a6 6 0 0 1-12 0V91.21L111.33 101a6 6 0 0 1-6.66-10l24-16a6 6 0 0 1 9.33 5"></svg:path>`,
})
export class PhNumberCircleOneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleOneThinIcon],svg[ph-number-circle-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-140v96a4 4 0 0 1-8 0V87.47l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 136 80"></svg:path>`,
})
export class PhNumberCircleOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenIcon],svg[ph-number-circle-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m30.55-132.59a8 8 0 0 1 1 7.32l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 3.41"></svg:path>`,
})
export class PhNumberCircleSevenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenBoldIcon],svg[ph-number-circle-seven-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m33.83-130.88a12 12 0 0 1 1.45 11l-32 88a12 12 0 0 1-22.56-8.2L134.87 100H104a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 5.12"></svg:path>`,
})
export class PhNumberCircleSevenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenDuotoneIcon],svg[ph-number-circle-seven-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m30.55-132.59a8 8 0 0 1 1 7.32l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 3.41"></svg:path></svg:g>`,
})
export class PhNumberCircleSevenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenFillIcon],svg[ph-number-circle-seven-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m31.52 66.73l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 7.52 10.73"></svg:path>`,
})
export class PhNumberCircleSevenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenLightIcon],svg[ph-number-circle-seven-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m28.91-133.44a6 6 0 0 1 .73 5.49l-32 88A6 6 0 0 1 120 182a6.2 6.2 0 0 1-2-.36a6 6 0 0 1-3.59-7.69L143.43 94H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 2.56"></svg:path>`,
})
export class PhNumberCircleSevenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSevenThinIcon],svg[ph-number-circle-seven-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m27.28-134.29a4 4 0 0 1 .48 3.66l-32 88A4 4 0 0 1 120 180a4.1 4.1 0 0 1-1.37-.24a4 4 0 0 1-2.39-5.13L146.29 92H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 1.71"></svg:path>`,
})
export class PhNumberCircleSevenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSixIcon],svg[ph-number-circle-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-104h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2l-32.23 54A36 36 0 1 0 128 112m0 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhNumberCircleSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSixBoldIcon],svg[ph-number-circle-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m5.06-103.67l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.24 54a40 40 0 1 0 39.6-19.53ZM128 164a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhNumberCircleSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSixDuotoneIcon],svg[ph-number-circle-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-104h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2l-32.23 54A36 36 0 1 0 128 112m0 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhNumberCircleSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSixFillIcon],svg[ph-number-circle-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 148a20 20 0 1 1-20-20a20 20 0 0 1 20 20m84-20A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-68 20a36 36 0 0 0-36-36h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2s-32.4 54.28-32.47 54.42A36 36 0 1 0 164 148"></svg:path>`,
})
export class PhNumberCircleSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSixLightIcon],svg[ph-number-circle-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-104a34.5 34.5 0 0 0-5.6.47l18.75-31.39a6 6 0 0 0-10.3-6.16l-32.24 54A34 34 0 1 0 128 114m0 56a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhNumberCircleSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleSixThinIcon],svg[ph-number-circle-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-104a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.24 54A32 32 0 1 0 128 116m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhNumberCircleSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleThreeIcon],svg[ph-number-circle-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-64a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 166A20 20 0 1 0 124 132a8 8 0 0 1-6.55-12.59L136.63 92H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 152"></svg:path>`,
})
export class PhNumberCircleThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleThreeBoldIcon],svg[ph-number-circle-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m36-60a40 40 0 0 1-68.57 28a12 12 0 1 1 17.14-16.79A16 16 0 1 0 124 136a12 12 0 0 1-9.83-18.88L129 96h-25a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 18.88l-18.34 26.2A40 40 0 0 1 164 152"></svg:path>`,
})
export class PhNumberCircleThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleThreeDuotoneIcon],svg[ph-number-circle-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M160 152a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 166A20 20 0 1 0 124 132a8 8 0 0 1-6.55-12.59L136.63 92H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 152m72-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path></svg:g>`,
})
export class PhNumberCircleThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleThreeFillIcon],svg[ph-number-circle-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 164a35.7 35.7 0 0 1-25.71-10.81A8 8 0 1 1 109.71 166A20 20 0 1 0 124 132a8 8 0 0 1-6.55-12.59L136.63 92H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36 36 0 0 1 124 188"></svg:path>`,
})
export class PhNumberCircleThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleThreeLightIcon],svg[ph-number-circle-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m30-66a34 34 0 0 1-58.29 23.79a6 6 0 0 1 8.58-8.39A22 22 0 1 0 124 130a6 6 0 0 1-4.92-9.44L140.48 90H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18A34.06 34.06 0 0 1 158 152"></svg:path>`,
})
export class PhNumberCircleThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleThreeThinIcon],svg[ph-number-circle-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m28-68a32 32 0 0 1-54.86 22.4a4 4 0 1 1 5.72-5.6A24 24 0 1 0 124 128a4 4 0 0 1-3.28-6.29L144.32 88H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 156 152"></svg:path>`,
})
export class PhNumberCircleThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleTwoIcon],svg[ph-number-circle-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m25.56-92.74L120 168h32a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32 32 0 1 1 55.74 29.93Z"></svg:path>`,
})
export class PhNumberCircleTwoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleTwoBoldIcon],svg[ph-number-circle-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m28.75-86.33L128 164h24a12 12 0 0 1 0 24h-48a12 12 0 0 1-9.6-19.2l43.17-57.56A12 12 0 1 0 116.68 100a12 12 0 0 1-22.63-8a36.3 36.3 0 0 1 5.2-9.67a36 36 0 0 1 57.5 43.34"></svg:path>`,
})
export class PhNumberCircleTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleTwoDuotoneIcon],svg[ph-number-circle-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M153.56 123.26L120 168h32a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32 32 0 1 1 55.74 29.93ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path></svg:g>`,
})
export class PhNumberCircleTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleTwoFillIcon],svg[ph-number-circle-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m24 144a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32 32 0 1 1 55.74 29.93L120 168Z"></svg:path>`,
})
export class PhNumberCircleTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleTwoLightIcon],svg[ph-number-circle-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m24-95.95l-36 48h36a6 6 0 0 1 0 12h-48a6 6 0 0 1-4.8-9.6l43.17-57.56A18 18 0 1 0 111 98a6 6 0 1 1-11.31-4A30 30 0 1 1 152 122.05"></svg:path>`,
})
export class PhNumberCircleTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleTwoThinIcon],svg[ph-number-circle-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m22.36-99.15L112 172h40a4 4 0 0 1 0 8h-48a4 4 0 0 1-3.2-6.4L144 116a20 20 0 0 0-4-28a20 20 0 0 0-28 4a20 20 0 0 0-2.89 5.37a4 4 0 0 1-7.55-2.66a28.2 28.2 0 0 1 4-7.52a28 28 0 1 1 44.72 33.7Z"></svg:path>`,
})
export class PhNumberCircleTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleZeroIcon],svg[ph-number-circle-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144c-14.23 0-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.18 19.74 18.61 34 18.61s26-6.43 34-18.61c6.47-9.86 10-23.14 10-37.39s-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72m0 96c-22.1 0-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40s-5.9 40-28 40"></svg:path>`,
})
export class PhNumberCircleZeroIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleZeroBoldIcon],svg[ph-number-circle-zero-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-144c-28.26 0-48 24.67-48 60s19.74 60 48 60s48-24.67 48-60s-19.74-60-48-60m0 96c-23.33 0-24-32.32-24-36s.67-36 24-36s24 32.32 24 36s-.67 36-24 36"></svg:path>`,
})
export class PhNumberCircleZeroBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleZeroDuotoneIcon],svg[ph-number-circle-zero-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m0-144c-14.23 0-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.18 19.74 18.61 34 18.61s26-6.43 34-18.61c6.47-9.86 10-23.14 10-37.39s-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72m0 96c-22.1 0-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40s-5.9 40-28 40"></svg:path></svg:g>`,
})
export class PhNumberCircleZeroDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleZeroFillIcon],svg[ph-number-circle-zero-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128c0 14.86-5.9 40-28 40s-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40m76 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-60 0c0-14.25-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72s-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.18 19.74 18.61 34 18.61s26-6.43 34-18.61c6.44-9.86 10-23.14 10-37.39"></svg:path>`,
})
export class PhNumberCircleZeroFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleZeroLightIcon],svg[ph-number-circle-zero-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-144c-13.52 0-24.69 6.12-32.29 17.71C89.45 101.24 86 114.13 86 128s3.45 26.76 9.7 36.29C103.31 175.88 114.47 182 128 182s24.69-6.12 32.29-17.71c6.26-9.53 9.71-22.42 9.71-36.29s-3.45-26.76-9.7-36.29C152.69 80.12 141.52 74 128 74m0 96c-20.72 0-30-21.09-30-42s9.28-42 30-42s30 21.09 30 42s-9.28 42-30 42"></svg:path>`,
})
export class PhNumberCircleZeroLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleZeroThinIcon],svg[ph-number-circle-zero-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-144c-12.82 0-23.41 5.81-30.62 16.8C91.33 102 88 114.52 88 128s3.33 26 9.38 35.2c7.21 11 17.8 16.8 30.62 16.8s23.41-5.81 30.62-16.8c6-9.22 9.38-21.72 9.38-35.2s-3.33-26-9.38-35.19C151.41 81.81 140.82 76 128 76m0 96c-22.11 0-32-22.1-32-44s9.89-44 32-44s32 22.1 32 44s-9.89 44-32 44"></svg:path>`,
})
export class PhNumberCircleZeroThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberEightIcon],svg[ph-number-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhNumberEightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberEightBoldIcon],svg[ph-number-eight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.44 118.91a52 52 0 1 0-68.88 0a60 60 0 1 0 68.88 0M100 80a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 124a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhNumberEightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberEightDuotoneIcon],svg[ph-number-eight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhNumberEightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberEightFillIcon],svg[ph-number-eight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 92a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 36a28 28 0 1 0 28 28a28 28 0 0 0-28-28m88-88v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-44 116a44 44 0 0 0-20.23-37a36 36 0 1 0-47.54 0A44 44 0 1 0 172 156"></svg:path>`,
})
export class PhNumberEightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberEightLightIcon],svg[ph-number-eight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M151.62 119.45a46 46 0 1 0-47.24 0a54 54 0 1 0 47.24 0M94 80a34 34 0 1 1 34 34a34 34 0 0 1-34-34m34 130a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhNumberEightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberEightThinIcon],svg[ph-number-eight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.08 119.64a44 44 0 1 0-38.16 0a52 52 0 1 0 38.16 0M92 80a36 36 0 1 1 36 36a36 36 0 0 1-36-36m36 132a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhNumberEightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFiveIcon],svg[ph-number-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160"></svg:path>`,
})
export class PhNumberFiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFiveBoldIcon],svg[ph-number-five-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 160a60 60 0 0 1-100 44.72a12 12 0 1 1 16-17.88a36 36 0 1 0 .69-54.28a12 12 0 0 1-19.54-11.49l15.08-75.42A12 12 0 0 1 104 36h64a12 12 0 0 1 0 24h-54.16l-8.36 41.79A60 60 0 0 1 180 160"></svg:path>`,
})
export class PhNumberFiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFiveDuotoneIcon],svg[ph-number-five-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160"></svg:path></svg:g>`,
})
export class PhNumberFiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFiveFillIcon],svg[ph-number-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-76 80a44 44 0 1 1-34.22 71.66a8 8 0 0 1 12.44-10.06a28 28 0 1 0 .35-35.62a8 8 0 0 1-14-6.29l7.55-52.82A8 8 0 0 1 104 64h56a8 8 0 0 1 0 16h-49.06L107 107.4a44 44 0 0 1 17-3.4"></svg:path>`,
})
export class PhNumberFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFiveLightIcon],svg[ph-number-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 160a54 54 0 0 1-90 40.25a6 6 0 1 1 8-8.94a42 42 0 1 0 .8-63.31a6 6 0 0 1-9.8-5.75l15.12-75.43A6 6 0 0 1 104 42h64a6 6 0 0 1 0 12h-59.08l-11.38 56.89A54 54 0 0 1 174 160"></svg:path>`,
})
export class PhNumberFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFiveThinIcon],svg[ph-number-five-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 160a52 52 0 0 1-86.67 38.76a4 4 0 1 1 5.34-6a44 44 0 1 0 .84-66.33a4 4 0 0 1-6.51-3.79l15.09-75.42A4 4 0 0 1 104 44h64a4 4 0 0 1 0 8h-60.72l-12.51 62.53A52 52 0 0 1 172 160"></svg:path>`,
})
export class PhNumberFiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFourIcon],svg[ph-number-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z"></svg:path>`,
})
export class PhNumberFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFourBoldIcon],svg[ph-number-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 156h-12V48a12 12 0 0 0-21.37-7.5l-96 120A12 12 0 0 0 64 180h84v28a12 12 0 0 0 24 0v-28h12a12 12 0 0 0 0-24m-36 0H89l59-73.79Z"></svg:path>`,
})
export class PhNumberFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFourDuotoneIcon],svg[ph-number-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z"></svg:path></svg:g>`,
})
export class PhNumberFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFourFillIcon],svg[ph-number-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104.65 144L144 94.81V144ZM216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-32 112a8 8 0 0 0-8-8h-16V72a8 8 0 0 0-14.25-5l-64 80A8 8 0 0 0 88 160h56v24a8 8 0 0 0 16 0v-24h16a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhNumberFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFourLightIcon],svg[ph-number-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 162h-18V48a6 6 0 0 0-10.69-3.75l-96 120A6 6 0 0 0 64 174h90v34a6 6 0 0 0 12 0v-34h18a6 6 0 0 0 0-12m-30 0H76.48L154 65.1Z"></svg:path>`,
})
export class PhNumberFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberFourThinIcon],svg[ph-number-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 164h-20V48a4 4 0 0 0-7.12-2.5l-96 120A4 4 0 0 0 64 172h92v36a4 4 0 0 0 8 0v-36h20a4 4 0 0 0 0-8m-28 0H72.32L156 59.4Z"></svg:path>`,
})
export class PhNumberFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberNineIcon],svg[ph-number-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhNumberNineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberNineBoldIcon],svg[ph-number-nine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 96a60 60 0 1 0-60 60a59 59 0 0 0 7.81-.53l-26.27 46.64a12 12 0 0 0 20.92 11.78l49.54-88A59.57 59.57 0 0 0 188 96m-96 0a36 36 0 1 1 36 36a36 36 0 0 1-36-36"></svg:path>`,
})
export class PhNumberNineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberNineDuotoneIcon],svg[ph-number-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhNumberNineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberNineFillIcon],svg[ph-number-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-33.7 105.62L132.62 188a8 8 0 0 1-13.86-8l16.52-28.61a45 45 0 0 1-7.28.61a44.05 44.05 0 1 1 38.3-22.38M156 108a28 28 0 1 1-28-28a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhNumberNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberNineLightIcon],svg[ph-number-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42a54 54 0 1 0 19.94 104.17l-33.17 58.88a6 6 0 1 0 10.46 5.89l49.54-88A54 54 0 0 0 128 42m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhNumberNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberNineThinIcon],svg[ph-number-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 44a52 52 0 1 0 24.74 97.73L116.51 206a4 4 0 0 0 7 3.92L173 122a52 52 0 0 0-45-78m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhNumberNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberOneIcon],svg[ph-number-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48"></svg:path>`,
})
export class PhNumberOneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberOneBoldIcon],svg[ph-number-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 48v160a12 12 0 0 1-24 0V69.19l-21.83 13.1a12 12 0 0 1-12.34-20.58l40-24A12 12 0 0 1 148 48"></svg:path>`,
})
export class PhNumberOneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberOneDuotoneIcon],svg[ph-number-one-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48"></svg:path></svg:g>`,
})
export class PhNumberOneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberOneFillIcon],svg[ph-number-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-56 160a8 8 0 0 1-16 0V84.94l-20.42 10.22a8 8 0 1 1-7.16-14.32l32-16A8 8 0 0 1 144 72Z"></svg:path>`,
})
export class PhNumberOneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberOneLightIcon],svg[ph-number-one-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 48v160a6 6 0 0 1-12 0V58.6L99.09 77.14a6 6 0 0 1-6.18-10.29l40-24A6 6 0 0 1 142 48"></svg:path>`,
})
export class PhNumberOneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberOneThinIcon],svg[ph-number-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 48v160a4 4 0 0 1-8 0V55.06L98.06 75.43a4 4 0 0 1-4.12-6.86l40-24A4 4 0 0 1 140 48"></svg:path>`,
})
export class PhNumberOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenIcon],svg[ph-number-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m175.66 50.3l-48 160a8 8 0 0 1-15.32-4.6L157.25 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 7.66 10.3"></svg:path>`,
})
export class PhNumberSevenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenBoldIcon],svg[ph-number-seven-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m179.49 51.45l-48 160A12 12 0 0 1 120 220a11.8 11.8 0 0 1-3.45-.51a12 12 0 0 1-8-14.94L151.87 60H88a12 12 0 0 1 0-24h80a12 12 0 0 1 11.49 15.45"></svg:path>`,
})
export class PhNumberSevenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenDuotoneIcon],svg[ph-number-seven-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m175.66 50.3l-48 160a8 8 0 0 1-15.32-4.6L157.25 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 7.66 10.3"></svg:path></svg:g>`,
})
export class PhNumberSevenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenFillIcon],svg[ph-number-seven-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-32.47 50.69l-40 112a8 8 0 1 1-15.06-5.38L148.65 80H96a8 8 0 0 1 0-16h64a8 8 0 0 1 7.53 10.69"></svg:path>`,
})
export class PhNumberSevenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenLightIcon],svg[ph-number-seven-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m173.75 49.72l-48 160a6 6 0 1 1-11.5-3.45L159.94 54H88a6 6 0 0 1 0-12h80a6 6 0 0 1 5.75 7.72"></svg:path>`,
})
export class PhNumberSevenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSevenThinIcon],svg[ph-number-seven-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m171.83 49.15l-48 160A4 4 0 0 1 120 212a3.8 3.8 0 0 1-1.15-.17a4 4 0 0 1-2.68-5L162.62 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.83 5.15"></svg:path>`,
})
export class PhNumberSevenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSixIcon],svg[ph-number-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhNumberSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSixBoldIcon],svg[ph-number-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a59 59 0 0 0-7.81.53l26.27-46.64a12 12 0 0 0-20.92-11.78L76 130.13A60 60 0 1 0 128 100m0 96a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhNumberSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSixDuotoneIcon],svg[ph-number-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhNumberSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSixFillIcon],svg[ph-number-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 168a44 44 0 0 1-38.3-65.62L123.38 68a8 8 0 0 1 13.86 8l-16.52 28.61A45 45 0 0 1 128 104a44 44 0 0 1 0 88m28-44a28 28 0 1 1-28-28a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhNumberSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSixLightIcon],svg[ph-number-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 106a53.7 53.7 0 0 0-19.94 3.83L141.23 51a6 6 0 1 0-10.46-5.89l-49.54 88A54 54 0 1 0 128 106m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhNumberSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSixThinIcon],svg[ph-number-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 108a51.66 51.66 0 0 0-24.74 6.27L139.49 50a4 4 0 0 0-7-3.92L83 134.05A52 52 0 1 0 128 108m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhNumberSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareEightIcon],svg[ph-number-square-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-58.19-84.61a32 32 0 1 0-43.62 0a36 36 0 1 0 43.62 0M112 100a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhNumberSquareEightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareEightBoldIcon],svg[ph-number-square-eight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM88 152a40 40 0 1 0 67.6-28.91a36 36 0 1 0-55.2 0A39.87 39.87 0 0 0 88 152m40 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-12-68a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhNumberSquareEightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareEightDuotoneIcon],svg[ph-number-square-eight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-58.19-84.61a32 32 0 1 0-43.62 0a36 36 0 1 0 43.62 0M112 100a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhNumberSquareEightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareEightFillIcon],svg[ph-number-square-eight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 100a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 32a20 20 0 1 0 20 20a20 20 0 0 0-20-20m96-84v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-60 104a35.93 35.93 0 0 0-14.19-28.61a32 32 0 1 0-43.62 0A36 36 0 1 0 164 152"></svg:path>`,
})
export class PhNumberSquareEightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareEightLightIcon],svg[ph-number-square-eight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-63.43-84.46a30 30 0 1 0-37.14 0a34 34 0 1 0 37.14 0M110 100a18 18 0 1 1 18 18a18 18 0 0 1-18-18m18 74a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhNumberSquareEightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareEightThinIcon],svg[ph-number-square-eight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-69.1-84.31a28 28 0 1 0-29.8 0a32 32 0 1 0 29.8 0M108 100a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 76a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhNumberSquareEightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFiveIcon],svg[ph-number-square-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM118.78 88l-4.19 25.14A38.8 38.8 0 0 1 124 112a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16Z"></svg:path>`,
})
export class PhNumberSquareFiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFiveBoldIcon],svg[ph-number-square-five-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM92.16 126l8-48A12 12 0 0 1 112 68h40a12 12 0 0 1 0 24h-29.83l-2.71 16.23A45 45 0 0 1 124 108a40 40 0 0 1 0 80a39.53 39.53 0 0 1-28.57-11.6a12 12 0 1 1 17.14-16.8A15.54 15.54 0 0 0 124 164a16 16 0 0 0 0-32a15.54 15.54 0 0 0-11.43 4.4A12 12 0 0 1 92.16 126"></svg:path>`,
})
export class PhNumberSquareFiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFiveDuotoneIcon],svg[ph-number-square-five-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM118.78 88l-4.19 25.14A38.8 38.8 0 0 1 124 112a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16Z"></svg:path></svg:g>`,
})
export class PhNumberSquareFiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFiveFillIcon],svg[ph-number-square-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-84 80a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16h-33.22l-4.19 25.14A38.8 38.8 0 0 1 124 112"></svg:path>`,
})
export class PhNumberSquareFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFiveLightIcon],svg[ph-number-square-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM117.08 86l-5 30a36 36 0 0 1 11.92-2a34 34 0 0 1 0 68a33.6 33.6 0 0 1-24.29-9.8a6 6 0 1 1 8.58-8.4A21.65 21.65 0 0 0 124 170a22 22 0 0 0 0-44a21.65 21.65 0 0 0-15.71 6.2a6 6 0 0 1-10.21-5.2l8-48a6 6 0 0 1 5.92-5h40a6 6 0 0 1 0 12Z"></svg:path>`,
})
export class PhNumberSquareFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFiveThinIcon],svg[ph-number-square-five-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM115.39 84l-5.87 35.21A33.26 33.26 0 0 1 124 116a32 32 0 0 1 0 64a31.62 31.62 0 0 1-22.86-9.2a4 4 0 1 1 5.72-5.6A23.67 23.67 0 0 0 124 172a24 24 0 0 0 0-48a23.67 23.67 0 0 0-17.14 6.8a4 4 0 0 1-6.81-3.46l8-48A4 4 0 0 1 112 76h40a4 4 0 0 1 0 8Z"></svg:path>`,
})
export class PhNumberSquareFiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourIcon],svg[ph-number-square-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-64h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 0-16m-24 0h-31.64L136 103.32Z"></svg:path>`,
})
export class PhNumberSquareFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourBoldIcon],svg[ph-number-square-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM88 164h44v12a12 12 0 0 0 24 0v-12h4a12 12 0 0 0 0-24h-4V80a12 12 0 0 0-21.47-7.37l-56 72A12 12 0 0 0 88 164m44-49v25h-19.46Z"></svg:path>`,
})
export class PhNumberSquareFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourDuotoneIcon],svg[ph-number-square-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-64h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 0-16m-24 0h-31.64L136 103.32Z"></svg:path></svg:g>`,
})
export class PhNumberSquareFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourFillIcon],svg[ph-number-square-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48 128h-8v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 152 80v64h8a8 8 0 0 1 0 16m-55.64-16L136 103.32V144Z"></svg:path>`,
})
export class PhNumberSquareFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourLightIcon],svg[ph-number-square-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-50-62h-10V80a6 6 0 0 0-10.74-3.68l-56 72A6 6 0 0 0 88 158h50v18a6 6 0 0 0 12 0v-18h10a6 6 0 0 0 0-12m-22 0h-37.73L138 97.49Z"></svg:path>`,
})
export class PhNumberSquareFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourThinIcon],svg[ph-number-square-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-52-60h-12V80a4 4 0 0 0-7.16-2.46l-56 72A4 4 0 0 0 88 156h52v20a4 4 0 0 0 8 0v-20h12a4 4 0 0 0 0-8m-20 0H96.18L140 91.66Z"></svg:path>`,
})
export class PhNumberSquareFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareNineIcon],svg[ph-number-square-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM146 76.82A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77l32.24-54l.07-.1A36.05 36.05 0 0 0 146 76.82m-.67 41.18A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32Z"></svg:path>`,
})
export class PhNumberSquareNineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareNineBoldIcon],svg[ph-number-square-nine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-96-61.36a39.8 39.8 0 0 0 14.94 5l-13.24 22.21a12 12 0 1 0 20.6 12.3L162.64 128A40 40 0 1 0 108 142.64m6.14-42.64a16 16 0 0 1 27.72 16a16 16 0 0 1-27.7-16Z"></svg:path>`,
})
export class PhNumberSquareNineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareNineDuotoneIcon],svg[ph-number-square-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM146 76.82A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77l32.24-54l.07-.1A36.05 36.05 0 0 0 146 76.82m-.67 41.18A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32Z"></svg:path></svg:g>`,
})
export class PhNumberSquareNineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareNineFillIcon],svg[ph-number-square-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.33 118A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-78 28.82A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77L159.18 126A36.05 36.05 0 0 0 146 76.82"></svg:path>`,
})
export class PhNumberSquareNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareNineLightIcon],svg[ph-number-square-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM145 78.55A34 34 0 1 0 127.94 142a33.6 33.6 0 0 0 5.67-.49l-18.76 31.42a6 6 0 0 0 10.3 6.16l32.3-54.09A34 34 0 0 0 145 78.55m2.06 40.45A22 22 0 1 1 139 89a22 22 0 0 1 8.05 30Z"></svg:path>`,
})
export class PhNumberSquareNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareNineThinIcon],svg[ph-number-square-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM144 80.29a32 32 0 1 0-6.23 58.16L116.57 174a4 4 0 0 0 1.38 5.48a3.9 3.9 0 0 0 2 .57a4 4 0 0 0 3.43-1.95l32.33-54.1A32 32 0 0 0 144 80.29m4.8 39.71l-.06.09a22.62 22.62 0 1 1 .06-.09"></svg:path>`,
})
export class PhNumberSquareNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareOneIcon],svg[ph-number-square-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM140 80v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80"></svg:path>`,
})
export class PhNumberSquareOneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareOneBoldIcon],svg[ph-number-square-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM98 102.66A12 12 0 0 1 101.34 86l24-16A12 12 0 0 1 144 80v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58A12 12 0 0 1 98 102.66"></svg:path>`,
})
export class PhNumberSquareOneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareOneDuotoneIcon],svg[ph-number-square-one-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM140 80v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80"></svg:path></svg:g>`,
})
export class PhNumberSquareOneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareOneFillIcon],svg[ph-number-square-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-68 144a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80Z"></svg:path>`,
})
export class PhNumberSquareOneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareOneLightIcon],svg[ph-number-square-one-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM138 80v96a6 6 0 0 1-12 0V91.21L111.33 101a6 6 0 0 1-6.66-10l24-16a6 6 0 0 1 9.33 5"></svg:path>`,
})
export class PhNumberSquareOneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareOneThinIcon],svg[ph-number-square-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM136 80v96a4 4 0 0 1-8 0V87.47l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 136 80"></svg:path>`,
})
export class PhNumberSquareOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSevenIcon],svg[ph-number-square-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM158.55 83.41a8 8 0 0 1 1 7.32l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 3.41"></svg:path>`,
})
export class PhNumberSquareSevenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSevenBoldIcon],svg[ph-number-square-seven-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM92 88a12 12 0 0 1 12-12h48a12 12 0 0 1 11.28 16.1l-32 88a12 12 0 0 1-22.56-8.2l26.15-71.9H104a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhNumberSquareSevenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSevenDuotoneIcon],svg[ph-number-square-seven-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM158.55 83.41a8 8 0 0 1 1 7.32l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 3.41"></svg:path></svg:g>`,
})
export class PhNumberSquareSevenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSevenFillIcon],svg[ph-number-square-seven-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48.48 58.73l-32 88A8 8 0 0 1 120 184a7.9 7.9 0 0 1-2.73-.48a8 8 0 0 1-4.79-10.25L140.58 96H104a8 8 0 0 1 0-16h48a8 8 0 0 1 7.52 10.73"></svg:path>`,
})
export class PhNumberSquareSevenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSevenLightIcon],svg[ph-number-square-seven-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM156.91 84.56a6 6 0 0 1 .73 5.49l-32 88A6 6 0 0 1 120 182a6.2 6.2 0 0 1-2-.36a6 6 0 0 1-3.59-7.69L143.43 94H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 2.56"></svg:path>`,
})
export class PhNumberSquareSevenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSevenThinIcon],svg[ph-number-square-seven-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM155.28 85.71a4 4 0 0 1 .48 3.66l-32 88A4 4 0 0 1 120 180a4.1 4.1 0 0 1-1.37-.24a4 4 0 0 1-2.39-5.13L146.29 92H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 1.71"></svg:path>`,
})
export class PhNumberSquareSevenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixIcon],svg[ph-number-square-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-80-96h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2l-32.23 54A36 36 0 1 0 128 112m0 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhNumberSquareSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixBoldIcon],svg[ph-number-square-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-76-16a40 40 0 0 0 5.06-79.67l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.24 54A40 40 0 0 0 128 188m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhNumberSquareSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixDuotoneIcon],svg[ph-number-square-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-80-96h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2l-32.23 54A36 36 0 1 0 128 112m0 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhNumberSquareSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixFillIcon],svg[ph-number-square-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 148a20 20 0 1 1-20-20a20 20 0 0 1 20 20m76-100v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-60 100a36 36 0 0 0-36-36h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2s-32.4 54.28-32.47 54.42A36 36 0 1 0 164 148"></svg:path>`,
})
export class PhNumberSquareSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixLightIcon],svg[ph-number-square-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-82-94a34.5 34.5 0 0 0-5.6.47l18.75-31.39a6 6 0 0 0-10.3-6.16l-32.24 54A34 34 0 1 0 128 114m0 56a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhNumberSquareSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareSixThinIcon],svg[ph-number-square-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-92a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.24 54A32 32 0 1 0 128 116m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhNumberSquareSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareThreeIcon],svg[ph-number-square-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-60a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 162A20 20 0 1 0 124 128a8 8 0 0 1-6.55-12.59L136.63 88H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 148"></svg:path>`,
})
export class PhNumberSquareThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareThreeBoldIcon],svg[ph-number-square-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM92 80a12 12 0 0 1 12-12h48a12 12 0 0 1 9.83 18.88l-18.34 26.2A40 40 0 1 1 95.43 176a12 12 0 1 1 17.14-16.79A16 16 0 1 0 124 132a12 12 0 0 1-9.83-18.88L129 92h-25a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhNumberSquareThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareThreeDuotoneIcon],svg[ph-number-square-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-60a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 162A20 20 0 1 0 124 128a8 8 0 0 1-6.55-12.59L136.63 88H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 148"></svg:path></svg:g>`,
})
export class PhNumberSquareThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareThreeFillIcon],svg[ph-number-square-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-84 152a35.7 35.7 0 0 1-25.71-10.81A8 8 0 1 1 109.71 162A20 20 0 1 0 124 128a8 8 0 0 1-6.55-12.59L136.63 88H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36 36 0 0 1 124 184"></svg:path>`,
})
export class PhNumberSquareThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareThreeLightIcon],svg[ph-number-square-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-52-60a34 34 0 0 1-58.29 23.79a6 6 0 0 1 8.58-8.39A22 22 0 1 0 124 126a6 6 0 0 1-4.92-9.44L140.48 86H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18A34.06 34.06 0 0 1 158 148"></svg:path>`,
})
export class PhNumberSquareThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareThreeThinIcon],svg[ph-number-square-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-56-60a32 32 0 0 1-54.86 22.4a4 4 0 1 1 5.72-5.6A24 24 0 1 0 124 124a4 4 0 0 1-3.28-6.29L144.32 84H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 156 148"></svg:path>`,
})
export class PhNumberSquareThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareTwoIcon],svg[ph-number-square-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-32a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.4 32.4 0 0 1 4.62-8.59a32 32 0 1 1 51.11 38.52L120 168h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhNumberSquareTwoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareTwoBoldIcon],svg[ph-number-square-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Zm-66.43-92.76a12 12 0 0 0-2.35-16.82a12 12 0 0 0-16.8 2.36a11.7 11.7 0 0 0-1.74 3.22a12 12 0 0 1-22.63-8a36.5 36.5 0 0 1 5.2-9.67a36 36 0 0 1 57.5 43.34L128 164h24a12 12 0 0 1 0 24h-48a12 12 0 0 1-9.6-19.2Z"></svg:path>`,
})
export class PhNumberSquareTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareTwoDuotoneIcon],svg[ph-number-square-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-32a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.4 32.4 0 0 1 4.62-8.59a32 32 0 1 1 51.11 38.52L120 168h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhNumberSquareTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareTwoFillIcon],svg[ph-number-square-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 136a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32 32 0 1 1 55.74 29.93L120 168Z"></svg:path>`,
})
export class PhNumberSquareTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareTwoLightIcon],svg[ph-number-square-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-52-32a6 6 0 0 1-6 6h-48a6 6 0 0 1-4.8-9.6l43.17-57.56A18 18 0 1 0 111 98a6 6 0 1 1-11.31-4A30 30 0 1 1 152 122.06L116 170h36a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhNumberSquareTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareTwoThinIcon],svg[ph-number-square-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-56-32a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L144 116a20 20 0 0 0-4-28a20 20 0 0 0-28 4a20.2 20.2 0 0 0-2.89 5.37a4 4 0 0 1-7.55-2.66a28.3 28.3 0 0 1 4-7.52a28 28 0 1 1 44.72 33.7L112 172h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhNumberSquareTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareZeroIcon],svg[ph-number-square-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 72c-14.23 0-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.17 19.74 18.61 34 18.61s26-6.44 34-18.61c6.47-9.86 10-23.14 10-37.39s-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72m0 96c-22.1 0-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40s-5.9 40-28 40m80-136H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160z"></svg:path>`,
})
export class PhNumberSquareZeroIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareZeroBoldIcon],svg[ph-number-square-zero-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 188c28.26 0 48-24.67 48-60s-19.74-60-48-60s-48 24.67-48 60s19.74 60 48 60m0-96c23.33 0 24 32.32 24 36s-.67 36-24 36s-24-32.32-24-36s.67-36 24-36m80-64H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152Z"></svg:path>`,
})
export class PhNumberSquareZeroBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareZeroDuotoneIcon],svg[ph-number-square-zero-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M128 72c-14.23 0-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.17 19.74 18.61 34 18.61s26-6.44 34-18.61c6.47-9.86 10-23.14 10-37.39s-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72m0 96c-22.1 0-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40s-5.9 40-28 40m80-136H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160z"></svg:path></svg:g>`,
})
export class PhNumberSquareZeroDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareZeroFillIcon],svg[ph-number-square-zero-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128c0 14.86-5.9 40-28 40s-28-25.14-28-40s5.9-40 28-40s28 25.14 28 40m68-80v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-52 80c0-14.25-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72s-26 6.44-34 18.61c-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.17 19.74 18.61 34 18.61s26-6.44 34-18.61c6.44-9.86 10-23.14 10-37.39"></svg:path>`,
})
export class PhNumberSquareZeroFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareZeroLightIcon],svg[ph-number-square-zero-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 74c-13.52 0-24.69 6.12-32.29 17.71C89.45 101.24 86 114.13 86 128s3.45 26.76 9.7 36.29C103.31 175.88 114.47 182 128 182s24.69-6.12 32.29-17.71c6.26-9.53 9.71-22.42 9.71-36.29s-3.45-26.76-9.7-36.29C152.69 80.12 141.52 74 128 74m0 96c-20.72 0-30-21.09-30-42s9.28-42 30-42s30 21.09 30 42s-9.28 42-30 42m80-136H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhNumberSquareZeroLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareZeroThinIcon],svg[ph-number-square-zero-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76c-12.82 0-23.41 5.81-30.62 16.81C91.33 102 88 114.52 88 128s3.33 26 9.38 35.2c7.21 11 17.8 16.8 30.62 16.8s23.41-5.81 30.62-16.8c6-9.22 9.38-21.72 9.38-35.2s-3.33-26-9.38-35.19C151.41 81.81 140.82 76 128 76m0 96c-22.11 0-32-22.1-32-44s9.89-44 32-44s32 22.1 32 44s-9.89 44-32 44m80-136H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhNumberSquareZeroThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberThreeIcon],svg[ph-number-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160"></svg:path>`,
})
export class PhNumberThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberThreeBoldIcon],svg[ph-number-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 160a60 60 0 0 1-100 44.72a12 12 0 1 1 16-17.88A36 36 0 1 0 120 124a12 12 0 0 1-9.6-19.2L144 60H88a12 12 0 0 1 0-24h80a12 12 0 0 1 9.6 19.2l-36.48 48.64A60.11 60.11 0 0 1 180 160"></svg:path>`,
})
export class PhNumberThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberThreeDuotoneIcon],svg[ph-number-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160"></svg:path></svg:g>`,
})
export class PhNumberThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberThreeFillIcon],svg[ph-number-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-76 168a43.85 43.85 0 0 1-34.22-16.34a8 8 0 0 1 12.44-10.06A28 28 0 1 0 126 120.07a8 8 0 0 1-5.58-13.1l22.48-27H96a8 8 0 0 1 0-16h64a8 8 0 0 1 6.15 13.12l-25.23 30.27A44 44 0 0 1 124 192"></svg:path>`,
})
export class PhNumberThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberThreeLightIcon],svg[ph-number-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 160a54 54 0 0 1-90 40.25a6 6 0 1 1 8-8.94A42 42 0 1 0 120 118a6 6 0 0 1-4.8-9.6L156 54H88a6 6 0 0 1 0-12h80a6 6 0 0 1 4.8 9.6l-41.67 55.55A54.1 54.1 0 0 1 174 160"></svg:path>`,
})
export class PhNumberThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
