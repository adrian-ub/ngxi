import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHandHeartFillIcon],svg[ph-hand-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.34 24.34 0 0 0-18.61-4.77C230.5 117.33 240 98.48 240 80c0-26.47-21.29-48-47.46-48A47.58 47.58 0 0 0 156 48.75A47.58 47.58 0 0 0 119.46 32C93.29 32 72 53.53 72 80c0 11 3.24 21.69 10.06 33a31.87 31.87 0 0 0-14.75 8.4L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56Zm-10.9 27.15l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Z"></svg:path>`,
})
export class PhHandHeartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartLightIcon],svg[ph-hand-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-4.32 1C227 119.55 238 99.51 238 80c0-25.36-20.39-46-45.46-46A45.51 45.51 0 0 0 156 52a45.51 45.51 0 0 0-36.54-18C94.39 34 74 54.64 74 80c0 11.38 3.63 22.49 11.29 34.36a29.73 29.73 0 0 0-16.56 8.43L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM119.46 46a33.16 33.16 0 0 1 31 20.28a6 6 0 0 0 11.1 0a33.16 33.16 0 0 1 31-20.28C210.68 46 226 61.57 226 80c0 20.24-16.18 43-46.8 65.75l-14.87 3.42A26 26 0 0 0 140 114H99.67C90.36 101.67 86 90.81 86 80c0-18.43 15.32-34 33.46-34M14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62"></svg:path>`,
})
export class PhHandHeartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartThinIcon],svg[ph-hand-heart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53l-11.95 2.75C223.26 121.88 236 100.58 236 80c0-24.26-19.5-44-43.46-44A43.41 43.41 0 0 0 156 55.44A43.41 43.41 0 0 0 119.46 36C95.5 36 76 55.74 76 80c0 11.85 4.11 23.44 12.81 36a27.8 27.8 0 0 0-18.67 8.17L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM119.46 44a35.15 35.15 0 0 1 32.84 21.52a4 4 0 0 0 7.4 0A35.15 35.15 0 0 1 192.54 44C211.76 44 228 60.49 228 80c0 21.27-16.13 44-47.94 67.61L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H98.69C88.69 103 84 91.5 84 80c0-19.51 16.24-36 35.46-36M12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38Z"></svg:path>`,
})
export class PhHandHeartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandLightIcon],svg[ph-hand-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 50a25.8 25.8 0 0 0-14 4.11V44a26 26 0 0 0-51.41-5.51A26 26 0 0 0 82 60v71l-7.53-12.1a26 26 0 0 0-45.11 25.87C60.76 211 78.51 238 128 238a86.1 86.1 0 0 0 86-86V76a26 26 0 0 0-26-26m14 102a74.09 74.09 0 0 1-74 74c-21 0-34.51-5.05-46.75-17.45C67.81 195 55.54 172 40.1 139.43l-.23-.43a14 14 0 0 1 24.25-14l.1.17l18.68 30A6 6 0 0 0 94 152V60a14 14 0 0 1 28 0v60a6 6 0 0 0 12 0V44a14 14 0 0 1 28 0v76a6 6 0 0 0 12 0V76a14 14 0 0 1 28 0Z"></svg:path>`,
})
export class PhHandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPalmIcon],svg[ph-hand-palm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 88a27.75 27.75 0 0 0-12 2.71V60a28 28 0 0 0-41.36-24.6A28 28 0 0 0 80 44v6.71A27.75 27.75 0 0 0 68 48a28 28 0 0 0-28 28v76a88 88 0 0 0 176 0v-36a28 28 0 0 0-28-28m12 64a72 72 0 0 1-144 0V76a12 12 0 0 1 24 0v44a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0V60a12 12 0 0 1 24 0v68.67A48.08 48.08 0 0 0 120 176a8 8 0 0 0 16 0a32 32 0 0 1 32-32a8 8 0 0 0 8-8v-20a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhHandPalmIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPalmBoldIcon],svg[ph-hand-palm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 84a32 32 0 0 0-8 1V60a32 32 0 0 0-43.21-30A32 32 0 0 0 76 44v1a32 32 0 0 0-40 31v76a92 92 0 0 0 184 0v-36a32 32 0 0 0-32-32m8 68a68 68 0 0 1-136 0V76a8 8 0 0 1 16 0v40a12 12 0 0 0 24 0V44a8 8 0 0 1 16 0v64a12 12 0 0 0 24 0V60a8 8 0 0 1 16 0v65.4a52.09 52.09 0 0 0-40 50.6a12 12 0 0 0 24 0a28 28 0 0 1 28-28a12 12 0 0 0 12-12v-20a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhHandPalmBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPalmDuotoneIcon],svg[ph-hand-palm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 116v36a80 80 0 0 1-160 0V76a20 20 0 0 1 40 0V44a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M188 88a27.75 27.75 0 0 0-12 2.71V60a28 28 0 0 0-41.36-24.6A28 28 0 0 0 80 44v6.71A27.75 27.75 0 0 0 68 48a28 28 0 0 0-28 28v76a88 88 0 0 0 176 0v-36a28 28 0 0 0-28-28m12 64a72 72 0 0 1-144 0V76a12 12 0 0 1 24 0v44a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0V60a12 12 0 0 1 24 0v68.67A48.08 48.08 0 0 0 120 176a8 8 0 0 0 16 0a32 32 0 0 1 32-32a8 8 0 0 0 8-8v-20a12 12 0 0 1 24 0Z"></svg:path></svg:g>`,
})
export class PhHandPalmDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPalmFillIcon],svg[ph-hand-palm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104v48a88 88 0 0 1-176 0V64a16 16 0 0 1 32 0v56a8 8 0 0 0 16 0V32a16 16 0 0 1 32 0v80a8 8 0 0 0 16 0V48a16 16 0 0 1 32 0v80.67A48.08 48.08 0 0 0 128 176a8 8 0 0 0 16 0a32 32 0 0 1 32-32a8 8 0 0 0 8-8v-32a16 16 0 0 1 32 0"></svg:path>`,
})
export class PhHandPalmFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPalmLightIcon],svg[ph-hand-palm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 90a25.8 25.8 0 0 0-14 4.11V60a26 26 0 0 0-40.59-21.51A26 26 0 0 0 82 44v10.11A26 26 0 0 0 42 76v76a86 86 0 0 0 172 0v-36a26 26 0 0 0-26-26m14 62a74 74 0 0 1-148 0V76a14 14 0 0 1 28 0v44a6 6 0 0 0 12 0V44a14 14 0 0 1 28 0v68a6 6 0 0 0 12 0V60a14 14 0 0 1 28 0v70.39A46.07 46.07 0 0 0 122 176a6 6 0 0 0 12 0a34 34 0 0 1 34-34a6 6 0 0 0 6-6v-20a14 14 0 0 1 28 0Z"></svg:path>`,
})
export class PhHandPalmLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPalmThinIcon],svg[ph-hand-palm-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 92a23.9 23.9 0 0 0-16 6.13V60a24 24 0 0 0-40.07-17.8A24 24 0 0 0 84 44v14.13A24 24 0 0 0 44 76v76a84 84 0 0 0 168 0v-36a24 24 0 0 0-24-24m16 60a76 76 0 0 1-152 0V76a16 16 0 0 1 32 0v44a4 4 0 0 0 8 0V44a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0V60a16 16 0 0 1 32 0v72.18A44.06 44.06 0 0 0 124 176a4 4 0 0 0 8 0a36 36 0 0 1 36-36a4 4 0 0 0 4-4v-20a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhHandPalmThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPeaceIcon],svg[ph-hand-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 30A28 28 0 0 0 161 36.77l-13 48.32l-12.95-48.32A28 28 0 1 0 81 51.26l9.38 35l-8.73-1.68a28 28 0 0 0-24.85 47.8a27.86 27.86 0 0 0-8.8 20.49V160a80 80 0 0 0 80 80h.61c43.78-.33 79.39-36.62 79.39-80.9v-3.34a55.88 55.88 0 0 0-11.77-34.27L215 51.26A27.8 27.8 0 0 0 212.24 30M97.61 38a12 12 0 0 1 22 2.9l14.77 55.15a28 28 0 0 0-14 4.77a2 2 0 0 0-.16-.26A27.65 27.65 0 0 0 108 90.35L96.42 47.12A11.94 11.94 0 0 1 97.61 38m-33.36 71.6a12 12 0 0 1 14.25-9.34l20.71 4a12 12 0 0 1 9.36 14.16a12 12 0 0 1-14.25 9.34l-20.75-4a12 12 0 0 1-9.32-14.15Zm0 40.72a12 12 0 0 1 14-9.37l10.11 2a12 12 0 0 1 9.36 14.15a12 12 0 0 1-14.2 9.35l-10-2a12 12 0 0 1-9.34-14.16ZM192 159.1c0 35.53-28.49 64.64-63.5 64.9a64.08 64.08 0 0 1-61.56-44.78a31 31 0 0 0 3.48.95l10 2a28.3 28.3 0 0 0 5.61.57a28 28 0 0 0 24.16-42.14c.79-.43 1.57-.89 2.32-1.4l.16.26a27.82 27.82 0 0 0 17.78 12l6.32 1.26a36 36 0 0 0 9.53 32.49A8 8 0 0 0 157.71 174a20 20 0 0 1-3.31-23.51a8 8 0 0 0-5.46-11.66l-15.34-3.07a12 12 0 0 1-9.35-14.15a12 12 0 0 1 14.18-9.35l21.41 4.28A40.1 40.1 0 0 1 192 155.76Zm7.59-112l-16.62 62a55.6 55.6 0 0 0-20-8.28l-2.5-.5l15.93-59.41a12 12 0 1 1 23.18 6.21Z"></svg:path>`,
})
export class PhHandPeaceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPeaceBoldIcon],svg[ph-hand-peace-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.7 28a32 32 0 0 0-58.62 7.72L148 69.64l-9.09-33.91A32 32 0 0 0 77.1 52.3l7.72 28.82l-2.49-.48a32 32 0 0 0-33 49c.63.95 1.31 1.86 2 2.73a31.7 31.7 0 0 0-6.67 14a32 32 0 0 0-.65 6.59V160a84 84 0 0 0 84 84h.64c46-.34 83.36-38.43 83.36-84.9v-3.34a59.83 59.83 0 0 0-11.41-35.1l18.3-68.36a31.84 31.84 0 0 0-3.2-24.3m-35.44 13.94a8 8 0 0 1 15.46 4.14L180.47 103a59.6 59.6 0 0 0-15-5.67ZM101.08 40a8 8 0 0 1 14.65 1.93l13.61 50.78a32.2 32.2 0 0 0-7.92 2.83a31.9 31.9 0 0 0-10-8l-11.1-41.43a8 8 0 0 1 .76-6.11M69.33 157.14a8 8 0 0 1 8.18-12.26l10.09 2a8 8 0 0 1 6.24 9.43a8 8 0 0 1-9.49 6.23l-10-2a8 8 0 0 1-5.02-3.4m-1.16-46.73a8 8 0 0 1 9.44-6.24h.13l20.73 4a8 8 0 0 1-3.26 15.67h-.13l-20.72-4a8 8 0 0 1-6.19-9.43M188 159.1c0 33.34-26.7 60.66-59.53 60.9a60.09 60.09 0 0 1-55.1-35.17l6.24 1.25a32 32 0 0 0 38.1-35.82a32 32 0 0 0 12 5.11l2.56.51A41 41 0 0 0 132 160a39.8 39.8 0 0 0 11.43 28a12 12 0 0 0 17.14-16.8a16 16 0 0 1-2.66-18.8a12 12 0 0 0-8.19-17.49l-15.32-3.06a8 8 0 1 1 3.25-15.67l21.4 4.28a36.09 36.09 0 0 1 28.95 35.3Z"></svg:path>`,
})
export class PhHandPeaceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPeaceDuotoneIcon],svg[ph-hand-peace-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M187.43 123.37A47.9 47.9 0 0 1 200 155.76v3.34c0 39.7-31.75 72.6-71.45 72.9A72 72 0 0 1 56 160v-7.28a19.5 19.5 0 0 1 .41-4a20 20 0 0 1 23.46-15.62L72 131.6a20 20 0 0 1 8-39.19l20.81 4l.57.14l-12.69-47.37a20 20 0 1 1 38.63-10.35l17.85 66.61l5.37 1.07l18.14-67.68a20 20 0 0 1 38.63 10.35Z" opacity=".2"></svg:path><svg:path d="M212.24 30A28 28 0 0 0 161 36.77l-13 48.32l-12.95-48.32A28 28 0 1 0 81 51.26l9.38 35l-8.73-1.68a28 28 0 0 0-24.85 47.8a27.86 27.86 0 0 0-8.8 20.49V160a80 80 0 0 0 80 80h.61c43.78-.33 79.39-36.62 79.39-80.9v-3.34a55.88 55.88 0 0 0-11.77-34.27L215 51.26A27.8 27.8 0 0 0 212.24 30M97.61 38a12 12 0 0 1 22 2.9l14.77 55.15a28 28 0 0 0-14 4.77a2 2 0 0 0-.16-.26A27.65 27.65 0 0 0 108 90.35L96.42 47.12A11.94 11.94 0 0 1 97.61 38m-33.36 71.6a12 12 0 0 1 14.25-9.34l20.71 4a12 12 0 0 1 9.36 14.16a12 12 0 0 1-14.25 9.34l-20.75-4a12 12 0 0 1-9.32-14.15Zm0 40.72a12 12 0 0 1 14-9.37l10.11 2a12 12 0 0 1 9.36 14.15a12 12 0 0 1-14.2 9.35l-10-2a12 12 0 0 1-9.34-14.16ZM192 159.1c0 35.53-28.49 64.64-63.5 64.9a64.08 64.08 0 0 1-61.56-44.78a31 31 0 0 0 3.48.95l10 2a28.3 28.3 0 0 0 5.61.57a28 28 0 0 0 24.16-42.14c.79-.43 1.57-.89 2.32-1.4l.16.26a27.82 27.82 0 0 0 17.78 12l6.32 1.26a36 36 0 0 0 9.53 32.49A8 8 0 0 0 157.71 174a20 20 0 0 1-3.31-23.51a8 8 0 0 0-5.46-11.66l-15.34-3.07a12 12 0 0 1-9.35-14.15a12 12 0 0 1 14.18-9.35l21.41 4.28A40.1 40.1 0 0 1 192 155.76Zm7.59-112l-16.62 62a55.6 55.6 0 0 0-20-8.28l-2.5-.5l15.93-59.41a12 12 0 1 1 23.18 6.21Z"></svg:path></svg:g>`,
})
export class PhHandPeaceDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPeaceFillIcon],svg[ph-hand-peace-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.55 36.14a16 16 0 0 1 11-19.52c8.61-2.46 17.65 3 20 11.65l16 59.78a4 4 0 0 1-3.18 5A31.8 31.8 0 0 0 128 98c-.56.37-1.1.76-1.64 1.17c-.33-.58-.67-1.16-1-1.72a31.74 31.74 0 0 0-14-11.72a3.94 3.94 0 0 1-2.25-2.62ZM80.4 176.65a16 16 0 0 0 3.23.33a16 16 0 0 0 3.17-31.68l-19.59-4a16 16 0 0 0-6.41 31.35Zm-19.6-53l34.64 7.07a16 16 0 1 0 6.4-31.35l-34.63-7.04a16 16 0 0 0-18.88 12.47a16 16 0 0 0 12.47 18.88Zm102-28.16l23.55 4.81a4 4 0 0 0 4.65-2.86l16.42-61.3a16 16 0 0 0-30.91-8.28l-16.8 62.7a4 4 0 0 0 3.1 4.96Zm37.34 31.74a23.9 23.9 0 0 0-15.67-11l-35.6-7.23a16 16 0 0 0-15.12 5a14 14 0 0 0-2.43 3.57a16 16 0 0 0 1.72 17a16.5 16.5 0 0 0 9.8 5.93l15.24 3.11a8.06 8.06 0 0 1 6.32 9.36a28 28 0 0 0 2.77 19a8.19 8.19 0 0 1-1.93 10.41a8 8 0 0 1-11.94-2.43a44 44 0 0 1-5.48-22.09l-8.55-1.86A31.78 31.78 0 0 1 119 142.32c-.38-.57-.73-1.15-1.06-1.74a32 32 0 0 1-6.87 4A32 32 0 0 1 83.63 193a32.3 32.3 0 0 1-6.43-.65l-19.59-4h-.06a2.61 2.61 0 0 0-3 3.57A80.19 80.19 0 0 0 128 240h.61c43.77-.33 79.39-36.62 79.39-80.9v-3.34a55.7 55.7 0 0 0-7.85-28.5Z"></svg:path>`,
})
export class PhHandPeaceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPeaceLightIcon],svg[ph-hand-peace-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.51 31a26 26 0 0 0-47.63 6.27L148 92.82l-14.88-55.54a26 26 0 0 0-50.23 13.46L93.1 88.82l-11.89-2.29a26 26 0 0 0-21.37 45.85a25.8 25.8 0 0 0-9.31 15.15a26.7 26.7 0 0 0-.53 5.32V160a78 78 0 0 0 78 78h.6c42.68-.32 77.4-35.71 77.4-78.9v-3.34a53.86 53.86 0 0 0-12-33.82l19.07-71.2A25.83 25.83 0 0 0 210.51 31M95.88 37a14 14 0 0 1 25.65 3.38L137 98a26 26 0 0 0-17.23 5.71c-.38-.7-.79-1.39-1.24-2.07a25.7 25.7 0 0 0-12.18-9.85L94.48 47.63A13.94 13.94 0 0 1 95.88 37m-33.59 72.2a14 14 0 0 1 16.58-10.9l20.74 4A14 14 0 1 1 94 129.71l-12-2.31l-.72-.14l-.4-.07l-7.63-1.47a14 14 0 0 1-10.89-16.51Zm0 40.72A14 14 0 0 1 78.66 139l1 .2l9.14 1.8a14 14 0 1 1-5.63 27.42l-10-2a14 14 0 0 1-10.9-16.51ZM194 159.1c0 36.62-29.39 66.63-65.5 66.9a66.06 66.06 0 0 1-64.61-50.26a25.7 25.7 0 0 0 6.92 2.46l10 2a27 27 0 0 0 5.25.53a26 26 0 0 0 21.64-40.34l-.42-.6a26.3 26.3 0 0 0 5.81-3.52q.57 1.06 1.23 2.07a25.86 25.86 0 0 0 16.52 11.15l8.34 1.66A34.3 34.3 0 0 0 138 160a33.85 33.85 0 0 0 9.71 23.8a6 6 0 0 0 8.57-8.4a22 22 0 0 1-3.64-25.86a6 6 0 0 0-4.1-8.75l-15.34-3.07a14 14 0 1 1 5.63-27.42l21.4 4.27A42.12 42.12 0 0 1 194 155.76Zm7.51-111.47l-17.36 64.79a53.6 53.6 0 0 0-21.57-9.61l-4.59-.92l16.48-61.5a14 14 0 0 1 27 7.24Z"></svg:path>`,
})
export class PhHandPeaceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPeaceThinIcon],svg[ph-hand-peace-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.77 32a24 24 0 0 0-44 5.79L148 100.54L131.19 37.8a24 24 0 0 0-46.37 12.42l11 41.17l-15-2.9a24 24 0 0 0-17.49 43.87l-.55.35a23.85 23.85 0 0 0-10.28 15.22a24.7 24.7 0 0 0-.49 4.89V160a76 76 0 0 0 76 76h.59c41.58-.31 75.42-34.81 75.42-76.9v-3.34a51.9 51.9 0 0 0-12.17-33.35l19.34-72.19A23.82 23.82 0 0 0 208.77 32M94.15 36a16 16 0 0 1 29.31 3.86l16.19 60.42a24 24 0 0 0-20.58 6.72a24.4 24.4 0 0 0-2.24-4.25a23.75 23.75 0 0 0-12.17-9.41L92.55 48.15A15.9 15.9 0 0 1 94.15 36m-33.82 72.8a16 16 0 0 1 18.92-12.46l20.76 4a16 16 0 1 1-6.44 31.34l-20.79-4a16 16 0 0 1-12.45-18.87Zm0 40.72A16 16 0 0 1 79.09 137l10.11 2a16 16 0 1 1-6.42 31.35l-10-2a16 16 0 0 1-12.47-18.88ZM196 159.1c0 37.71-30.28 68.62-67.48 68.9A68 68 0 0 1 61 171.43a23.75 23.75 0 0 0 10.24 4.81l10 2a24 24 0 0 0 4.85.49A23.9 23.9 0 0 0 104 138.88a24.1 24.1 0 0 0 9.75-5.89a25 25 0 0 0 2.24 4.25a23.83 23.83 0 0 0 15.24 10.28l10.5 2.11A32.3 32.3 0 0 0 140 160a31.85 31.85 0 0 0 9.14 22.4a4 4 0 0 0 5.71-5.6a24 24 0 0 1-4-28.22a4 4 0 0 0-2.73-5.83l-15.35-3.07a16 16 0 1 1 6.42-31.35l21.4 4.28A44.12 44.12 0 0 1 196 155.76Zm7.45-110.95l-18.15 67.73a51.6 51.6 0 0 0-23.11-11.11l-6.68-1.34l17-63.56a16 16 0 0 1 30.91 8.28Z"></svg:path>`,
})
export class PhHandPeaceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPointingIcon],svg[ph-hand-pointing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 88a27.86 27.86 0 0 0-13.35 3.39A28 28 0 0 0 144 74.7V44a28 28 0 0 0-56 0v80l-3.82-6.13A28 28 0 0 0 35.73 146l4.67 8.23C74.81 214.89 89.05 240 136 240a88.1 88.1 0 0 0 88-88v-36a28 28 0 0 0-28-28m12 64a72.08 72.08 0 0 1-72 72c-37.63 0-47.84-18-81.68-77.68l-4.69-8.27V138A12 12 0 0 1 54 121.61a11.9 11.9 0 0 1 6-1.6a12 12 0 0 1 10.41 6a2 2 0 0 0 .14.23l18.67 30A8 8 0 0 0 104 152V44a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhHandPointingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPointingBoldIcon],svg[ph-hand-pointing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 84a32 32 0 0 0-11.22 2A32 32 0 0 0 148 69V44a32 32 0 0 0-64 0v66.83A32 32 0 0 0 32.25 148l4.68 8.24C71.11 216.48 86.72 244 136 244a92.1 92.1 0 0 0 92-92v-36a32 32 0 0 0-32-32m8 68a68.08 68.08 0 0 1-68 68c-34 0-43.49-14.45-78.2-75.65l-4.69-8.28a.2.2 0 0 1 0-.07a8 8 0 0 1 13.86-8c.06.12.13.23.2.35l18.68 30A12 12 0 0 0 108 152V44a8 8 0 0 1 16 0v68a12 12 0 0 0 24 0v-12a8 8 0 0 1 16 0v20a12 12 0 0 0 24 0v-4a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhHandPointingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPointingDuotoneIcon],svg[ph-hand-pointing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 116v36a80 80 0 0 1-80 80c-44.18 0-55.81-24-93.32-90a20 20 0 0 1 34.64-20L96 152V44a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M196 88a27.86 27.86 0 0 0-13.35 3.39A28 28 0 0 0 144 74.7V44a28 28 0 0 0-56 0v80l-3.82-6.13A28 28 0 0 0 35.73 146l4.67 8.23C74.81 214.89 89.05 240 136 240a88.1 88.1 0 0 0 88-88v-36a28 28 0 0 0-28-28m12 64a72.08 72.08 0 0 1-72 72c-37.63 0-47.84-18-81.68-77.68l-4.69-8.27V138A12 12 0 0 1 54 121.61a11.9 11.9 0 0 1 6-1.6a12 12 0 0 1 10.41 6a2 2 0 0 0 .14.23l18.67 30A8 8 0 0 0 104 152V44a12 12 0 0 1 24 0v68a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Z"></svg:path></svg:g>`,
})
export class PhHandPointingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPointingFillIcon],svg[ph-hand-pointing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 104v50.93c0 46.2-36.85 84.55-83 85.06a83.7 83.7 0 0 1-60.4-24.59C58.79 192.33 34.15 136 34.15 136a16 16 0 0 1 6.53-22.23c7.66-4 17.1-.84 21.4 6.62l21 36.44a6.09 6.09 0 0 0 6 3.09h.12a8.19 8.19 0 0 0 6.8-8.18V32a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V104a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V88a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V112a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25v-7.28c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 104"></svg:path>`,
})
export class PhHandPointingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPointingLightIcon],svg[ph-hand-pointing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 90a25.87 25.87 0 0 0-14.59 4.49A26 26 0 0 0 142 78.1V44a26 26 0 0 0-52 0v87l-7.53-12.1a26 26 0 0 0-45 26.07l4.67 8.25c34 60 48.07 84.77 93.86 84.77a86.1 86.1 0 0 0 86-86V116a26 26 0 0 0-26-26m14 62a74.09 74.09 0 0 1-74 74c-38.8 0-50-19.83-83.42-78.69L47.89 139A14 14 0 0 1 53 119.88a13.87 13.87 0 0 1 7-1.88a14 14 0 0 1 12.15 7l.1.17l18.68 30A6 6 0 0 0 102 152V44a14 14 0 0 1 28 0v68a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0v20a6 6 0 0 0 12 0v-4a14 14 0 0 1 28 0Z"></svg:path>`,
})
export class PhHandPointingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandPointingThinIcon],svg[ph-hand-pointing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 92a23.88 23.88 0 0 0-16.07 6.19A24 24 0 0 0 140 82.13V44a24 24 0 0 0-48 0v94l-11.25-18.06A24 24 0 0 0 39.2 144l4.68 8.25C61.21 182.8 72.66 203 85.66 216.33C99.28 230.3 113.86 236 136 236a84.09 84.09 0 0 0 84-84v-36a24 24 0 0 0-24-24m16 60a76.09 76.09 0 0 1-76 76c-40 0-51.35-20.08-85.16-79.71L46.15 140a16 16 0 0 1 27.71-16a1 1 0 0 1 .07.12l18.68 30A4 4 0 0 0 100 152V44a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0v20a4 4 0 0 0 8 0v-4a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhHandPointingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSoapIcon],svg[ph-hand-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 96.8V88a32 32 0 0 0-32-32h-16V32h32a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-64a8 8 0 0 0 0 16h16v24h-16a32 32 0 0 0-32 32v8.8A40.07 40.07 0 0 0 40 136v80a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-80a40.07 40.07 0 0 0-32-39.2M104 72h48a16 16 0 0 1 16 16v8H88v-8a16 16 0 0 1 16-16m96 144H56v-80a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24z"></svg:path>`,
})
export class PhHandSoapIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSoapBoldIcon],svg[ph-hand-soap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 97.68V92a36 36 0 0 0-36-36h-12V36h28a4 4 0 0 1 4 4a12 12 0 0 0 24 0a28 28 0 0 0-28-28h-64a12 12 0 0 0 0 24h12v20h-12a36 36 0 0 0-36 36v5.68A44.06 44.06 0 0 0 36 140v76a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-76a44.06 44.06 0 0 0-32-42.32M104 80h48a12 12 0 0 1 12 12v4H92v-4a12 12 0 0 1 12-12m92 132H60v-72a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhHandSoapBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSoapDuotoneIcon],svg[ph-hand-soap-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 136v80a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-80a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M184 96.8V88a32 32 0 0 0-32-32h-16V32h32a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-64a8 8 0 0 0 0 16h16v24h-16a32 32 0 0 0-32 32v8.8A40.07 40.07 0 0 0 40 136v80a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-80a40.07 40.07 0 0 0-32-39.2M104 72h48a16 16 0 0 1 16 16v8H88v-8a16 16 0 0 1 16-16m96 144H56v-80a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24z"></svg:path></svg:g>`,
})
export class PhHandSoapDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSoapFillIcon],svg[ph-hand-soap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 96.8V88a32 32 0 0 0-32-32h-16V32h32a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-64a8 8 0 0 0 0 16h16v24h-16a32 32 0 0 0-32 32v8.8A40.07 40.07 0 0 0 40 136v80a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-80a40.07 40.07 0 0 0-32-39.2M104 72h48a16 16 0 0 1 16 16v8H88v-8a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhHandSoapFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSoapLightIcon],svg[ph-hand-soap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 98.48V88a30 30 0 0 0-30-30h-18V30h34a10 10 0 0 1 10 10a6 6 0 0 0 12 0a22 22 0 0 0-22-22h-64a6 6 0 0 0 0 12h18v28h-18a30 30 0 0 0-30 30v10.48A38.05 38.05 0 0 0 42 136v80a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-80a38.05 38.05 0 0 0-32-37.52M104 70h48a18 18 0 0 1 18 18v10H86V88a18 18 0 0 1 18-18m98 146a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-80a26 26 0 0 1 26-26h96a26 26 0 0 1 26 26Z"></svg:path>`,
})
export class PhHandSoapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSoapThinIcon],svg[ph-hand-soap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 100.23V88a28 28 0 0 0-28-28h-20V28h36a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20h-64a4 4 0 0 0 0 8h20v32h-20a28 28 0 0 0-28 28v12.23A36 36 0 0 0 44 136v80a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-80a36 36 0 0 0-32-35.77M104 68h48a20 20 0 0 1 20 20v12H84V88a20 20 0 0 1 20-20m100 148a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-80a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28Z"></svg:path>`,
})
export class PhHandSoapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeLeftIcon],svg[ph-hand-swipe-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 140v36c0 25.59-8.49 42.85-8.85 43.58A8 8 0 0 1 200 224a7.9 7.9 0 0 1-3.57-.85a8 8 0 0 1-3.58-10.73c.06-.12 7.16-14.81 7.16-36.42v-36a12 12 0 0 0-24 0v4a8 8 0 0 1-16 0v-20a12 12 0 0 0-24 0v12a8 8 0 0 1-16 0V68a12 12 0 0 0-24 0v108a8 8 0 0 1-14.79 4.23l-18.68-30l-.14-.23a12 12 0 1 0-20.8 12l29.29 50a8 8 0 1 1-13.81 8l-29.32-50a28 28 0 0 1 48.41-28.17L80 148V68a28 28 0 0 1 56 0v30.7a28 28 0 0 1 38.65 16.69A28 28 0 0 1 216 140m32-92h-52.69l18.34-18.34a8 8 0 0 0-11.31-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.31-11.32L195.31 64H248a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhHandSwipeLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeLeftBoldIcon],svg[ph-hand-swipe-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 56a12 12 0 0 1-12 12h-43l11.51 11.51a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L201 44h43a12 12 0 0 1 12 12m-68 60a31.9 31.9 0 0 0-11.22 2A32 32 0 0 0 140 101V76a32 32 0 0 0-64 0v66.83A32 32 0 0 0 24.28 180l.12.2l25.31 42a12 12 0 0 0 20.56-12.4L45 167.92A8 8 0 0 1 58.92 160l.21.34l18.68 30A12 12 0 0 0 100 184V76a8 8 0 0 1 16 0v68a12 12 0 0 0 24 0v-12a8 8 0 0 1 16 0v20a12 12 0 0 0 24 0v-4a8 8 0 0 1 16 0v36c0 11.08-1.28 21.67-3.42 28.32a12 12 0 1 0 22.84 7.36c3-9.16 4.58-21.83 4.58-35.68v-36a32 32 0 0 0-32-32"></svg:path>`,
})
export class PhHandSwipeLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeLeftDuotoneIcon],svg[ph-hand-swipe-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 140v36c0 24-8 40-8 40H64l-29.32-50a20 20 0 0 1 34.64-20L88 176V68a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M216 140v36c0 25.59-8.49 42.85-8.85 43.58A8 8 0 0 1 200 224a7.9 7.9 0 0 1-3.57-.85a8 8 0 0 1-3.58-10.73c.06-.12 7.16-14.81 7.16-36.42v-36a12 12 0 0 0-24 0v4a8 8 0 0 1-16 0v-20a12 12 0 0 0-24 0v12a8 8 0 0 1-16 0V68a12 12 0 0 0-24 0v108a8 8 0 0 1-14.79 4.23l-18.68-30l-.14-.23a12 12 0 1 0-20.8 12l29.29 50a8 8 0 1 1-13.81 8l-29.32-50a28 28 0 0 1 48.41-28.17L80 148V68a28 28 0 0 1 56 0v30.7a28 28 0 0 1 38.65 16.69A28 28 0 0 1 216 140m32-92h-52.69l18.34-18.34a8 8 0 0 0-11.31-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.31-11.32L195.31 64H248a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhHandSwipeLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeLeftFillIcon],svg[ph-hand-swipe-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128v50.93c0 25.59-8.48 39.93-8.84 40.65A8 8 0 0 1 200 224H64a8 8 0 0 1-6.9-3.95L26.15 160a16 16 0 0 1 6.53-22.23c7.66-4 17.1-.84 21.4 6.62l21 36.44a6.09 6.09 0 0 0 6 3.09h.12a8.19 8.19 0 0 0 6.8-8.18V56a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V128a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V112a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V136a8 8 0 0 0 8.53 8a8.18 8.18 0 0 0 7.47-8.25v-7.28c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 216 128m32-80h-52.69l18.35-18.34a8 8 0 1 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32L195.31 64H248a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhHandSwipeLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeLeftLightIcon],svg[ph-hand-swipe-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 140v36c0 25.13-8.28 42-8.64 42.68a6 6 0 1 1-10.73-5.36c.07-.14 7.37-15.19 7.37-37.32v-36a14 14 0 0 0-28 0v4a6 6 0 0 1-12 0v-20a14 14 0 0 0-28 0v12a6 6 0 0 1-12 0V68a14 14 0 0 0-28 0v108a6 6 0 0 1-11.09 3.17l-18.68-30a1 1 0 0 1-.1-.17a14 14 0 0 0-24.25 14l29.29 50a6 6 0 0 1-10.36 6l-29.32-50a26 26 0 0 1 45-26.13L82 155V68a26 26 0 0 1 52 0v34.1a26 26 0 0 1 39.42 16.39A26 26 0 0 1 214 140m34-90h-57.52l21.76-21.76a6 6 0 0 0-8.49-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.49-8.48L190.48 62H248a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhHandSwipeLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeLeftThinIcon],svg[ph-hand-swipe-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 140v36c0 24.66-8.08 41.1-8.42 41.79a4 4 0 1 1-7.16-3.58c.07-.15 7.58-15.55 7.58-38.21v-36a16 16 0 0 0-32 0v4a4 4 0 0 1-8 0v-20a16 16 0 0 0-32 0v12a4 4 0 0 1-8 0V68a16 16 0 0 0-32 0v108a4 4 0 0 1-7.39 2.11l-18.68-30a1 1 0 0 1-.07-.12a16 16 0 0 0-27.72 16l29.31 50a4 4 0 0 1-6.9 4L31.22 168a24 24 0 0 1 41.52-24.09L84 162V68a24 24 0 0 1 48 0v38.13a24 24 0 0 1 39.94 16.06A24 24 0 0 1 212 140m36-88h-62.35l25.18-25.17a4 4 0 1 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 1 0 5.66-5.66L185.65 60H248a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhHandSwipeLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeRightIcon],svg[ph-hand-swipe-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 140v36c0 25.59-8.49 42.85-8.85 43.58A8 8 0 0 1 200 224a7.9 7.9 0 0 1-3.57-.85a8 8 0 0 1-3.58-10.73c.06-.12 7.16-14.81 7.16-36.42v-36a12 12 0 0 0-24 0v4a8 8 0 0 1-16 0v-20a12 12 0 0 0-24 0v12a8 8 0 0 1-16 0V68a12 12 0 0 0-24 0v108a8 8 0 0 1-14.79 4.23l-18.68-30l-.14-.23a12 12 0 1 0-20.8 12l29.29 50a8 8 0 1 1-13.81 8l-29.32-50a28 28 0 0 1 48.41-28.17L80 148V68a28 28 0 0 1 56 0v30.7a28 28 0 0 1 38.65 16.69A28 28 0 0 1 216 140m37.66-89.66l-32-32a8 8 0 0 0-11.31 11.32L228.68 48H176a8 8 0 0 0 0 16h52.69l-18.35 18.34a8 8 0 0 0 11.31 11.32l32-32a8 8 0 0 0 .01-11.32"></svg:path>`,
})
export class PhHandSwipeRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeRightBoldIcon],svg[ph-hand-swipe-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 148v36c0 13.85-1.63 26.52-4.58 35.68a12 12 0 0 1-22.84-7.36c2.14-6.65 3.42-17.24 3.42-28.32v-36a8 8 0 0 0-16 0v4a12 12 0 0 1-24 0v-20a8 8 0 0 0-16 0v12a12 12 0 0 1-24 0V76a8 8 0 0 0-16 0v108a12 12 0 0 1-22.18 6.34l-18.68-30l-.21-.34A8 8 0 0 0 45 167.92l25.27 41.88a12 12 0 0 1-20.56 12.39l-25.31-42l-.12-.2A32 32 0 0 1 76 142.83V76a32 32 0 0 1 64 0v25a32 32 0 0 1 36.78 17A32 32 0 0 1 220 148m32.48-100.49l-32-32a12 12 0 0 0-17 17L215 44h-43a12 12 0 0 0 0 24h43l-11.49 11.51a12 12 0 1 0 17 17l32-32a12 12 0 0 0-.03-17"></svg:path>`,
})
export class PhHandSwipeRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeRightDuotoneIcon],svg[ph-hand-swipe-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 140v36c0 24-8 40-8 40H64l-29.32-50a20 20 0 0 1 34.64-20L88 176V68a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M216 140v36c0 25.59-8.49 42.85-8.85 43.58A8 8 0 0 1 200 224a7.9 7.9 0 0 1-3.57-.85a8 8 0 0 1-3.58-10.73c.06-.12 7.16-14.81 7.16-36.42v-36a12 12 0 0 0-24 0v4a8 8 0 0 1-16 0v-20a12 12 0 0 0-24 0v12a8 8 0 0 1-16 0V68a12 12 0 0 0-24 0v108a8 8 0 0 1-14.79 4.23l-18.68-30l-.14-.23a12 12 0 1 0-20.8 12l29.29 50a8 8 0 1 1-13.81 8l-29.32-50a28 28 0 0 1 48.41-28.17L80 148V68a28 28 0 0 1 56 0v30.7a28 28 0 0 1 38.65 16.69A28 28 0 0 1 216 140m37.66-89.66l-32-32a8 8 0 0 0-11.31 11.32L228.68 48H176a8 8 0 0 0 0 16h52.69l-18.35 18.34a8 8 0 0 0 11.31 11.32l32-32a8 8 0 0 0 .01-11.32"></svg:path></svg:g>`,
})
export class PhHandSwipeRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeRightFillIcon],svg[ph-hand-swipe-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 128v50.93c0 25.59-8.48 39.93-8.84 40.65A8 8 0 0 1 200 224H64a8 8 0 0 1-6.9-3.95L26.15 160a16 16 0 0 1 6.53-22.23c7.66-4 17.1-.84 21.4 6.62l21 36.44a6.09 6.09 0 0 0 6 3.09h.12a8.19 8.19 0 0 0 6.8-8.18V56a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V128a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V112a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V136a8 8 0 0 0 8.53 8a8.18 8.18 0 0 0 7.47-8.25v-7.28c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 216 128m37.66-77.66l-32-32a8 8 0 0 0-11.32 11.32L228.69 48H176a8 8 0 0 0 0 16h52.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhHandSwipeRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeRightLightIcon],svg[ph-hand-swipe-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 140v36c0 25.13-8.28 42-8.64 42.68A6 6 0 0 1 200 222a5.9 5.9 0 0 1-2.68-.64a6 6 0 0 1-2.68-8c.07-.14 7.37-15.19 7.37-37.32V140a14 14 0 0 0-28 0v4a6 6 0 0 1-12 0v-20a14 14 0 0 0-28 0v12a6 6 0 0 1-12 0V68a14 14 0 0 0-28 0v108a6 6 0 0 1-11.09 3.17l-18.68-30a1 1 0 0 1-.1-.17a14 14 0 0 0-24.25 14l29.29 50a6 6 0 0 1-10.37 6l-29.32-50a26 26 0 0 1 45-26.13L82 155V68a26 26 0 0 1 52 0v34.1a26 26 0 0 1 39.42 16.39A26 26 0 0 1 214 140m38.24-88.24l-32-32a6 6 0 0 0-8.48 8.48L233.51 50H176a6 6 0 1 0 0 12h57.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhHandSwipeRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandSwipeRightThinIcon],svg[ph-hand-swipe-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 140v36c0 24.66-8.08 41.1-8.42 41.79a4 4 0 1 1-7.16-3.58c.07-.15 7.58-15.55 7.58-38.21v-36a16 16 0 0 0-32 0v4a4 4 0 0 1-8 0v-20a16 16 0 0 0-32 0v12a4 4 0 0 1-8 0V68a16 16 0 0 0-32 0v108a4 4 0 0 1-7.39 2.11l-18.68-30a1 1 0 0 1-.07-.12a16 16 0 0 0-27.72 16l29.31 50a4 4 0 0 1-6.9 4L31.22 168a24 24 0 0 1 41.52-24.09L84 162V68a24 24 0 0 1 48 0v38.13a24 24 0 0 1 39.94 16.06A24 24 0 0 1 212 140m38.83-86.83l-32-32a4 4 0 0 0-5.66 5.66L238.34 52H176a4 4 0 0 0 0 8h62.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhHandSwipeRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandTapIcon],svg[ph-hand-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 76a60 60 0 0 1 120 0a8 8 0 0 1-16 0a44 44 0 0 0-88 0a8 8 0 1 1-16 0m140 44a27.9 27.9 0 0 0-13.36 3.39A28 28 0 0 0 144 106.7V76a28 28 0 0 0-56 0v80l-3.82-6.13a28 28 0 0 0-48.41 28.17l29.32 50a8 8 0 1 0 13.8-8.04L49.6 170a12 12 0 1 1 20.78-12l.14.23l18.68 30A8 8 0 0 0 104 184V76a12 12 0 0 1 24 0v68a8 8 0 1 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0v36c0 21.61-7.1 36.3-7.16 36.42a8 8 0 0 0 3.58 10.73a7.9 7.9 0 0 0 3.58.85a8 8 0 0 0 7.16-4.42c.37-.73 8.85-18 8.85-43.58v-36A28 28 0 0 0 196 120"></svg:path>`,
})
export class PhHandTapIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandTapBoldIcon],svg[ph-hand-tap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 156v36c0 13.85-1.63 26.52-4.58 35.68a12 12 0 1 1-22.84-7.36c2.14-6.65 3.42-17.24 3.42-28.32v-36a8 8 0 0 0-16 0v4a12 12 0 0 1-24 0v-20a8 8 0 0 0-16 0v12a12 12 0 0 1-24 0V84a8 8 0 0 0-16 0v108a12 12 0 0 1-22.18 6.34l-18.68-30l-.21-.34A8 8 0 0 0 53 175.92l25.27 41.88a12 12 0 0 1-20.56 12.39l-25.31-42l-.12-.2A32 32 0 0 1 84 150.83V84a32 32 0 0 1 64 0v25a32 32 0 0 1 36.78 17A32 32 0 0 1 228 156M56 96a12 12 0 0 0 12-12a48 48 0 0 1 96 0a12 12 0 0 0 24 0a72 72 0 0 0-144 0a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhHandTapBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandTapDuotoneIcon],svg[ph-hand-tap-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 148v36c0 24-8 40-8 40H72l-29.32-50a20 20 0 0 1 34.64-20L96 184V76a20 20 0 0 1 40 0v56a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M56 76a60 60 0 0 1 120 0a8 8 0 0 1-16 0a44 44 0 0 0-88 0a8 8 0 1 1-16 0m140 44a27.9 27.9 0 0 0-13.36 3.39A28 28 0 0 0 144 106.7V76a28 28 0 0 0-56 0v80l-3.82-6.13a28 28 0 0 0-48.41 28.17l29.32 50a8 8 0 1 0 13.8-8.04L49.6 170a12 12 0 1 1 20.78-12l.14.23l18.68 30A8 8 0 0 0 104 184V76a12 12 0 0 1 24 0v68a8 8 0 1 0 16 0v-12a12 12 0 0 1 24 0v20a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0v36c0 21.61-7.1 36.3-7.16 36.42a8 8 0 0 0 3.58 10.73a7.9 7.9 0 0 0 3.58.85a8 8 0 0 0 7.16-4.42c.37-.73 8.85-18 8.85-43.58v-36A28 28 0 0 0 196 120"></svg:path></svg:g>`,
})
export class PhHandTapDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandTapFillIcon],svg[ph-hand-tap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 64a48 48 0 0 1 96 0a8 8 0 0 1-16 0a32 32 0 0 0-64 0a8 8 0 0 1-16 0m143.23 56c-8.61.4-15.23 7.82-15.23 16.43v7.28a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-23.51c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 144 120v15.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V64.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 96 64v119.74a8.19 8.19 0 0 1-6.72 8.16h-.12a6.09 6.09 0 0 1-6-3.09l-21-36.44c-4.3-7.46-13.74-10.57-21.4-6.62A16 16 0 0 0 34.15 168l30.95 60.05A8 8 0 0 0 72 232h136a8 8 0 0 0 7.16-4.42c.36-.72 8.84-15.06 8.84-40.65V136a16 16 0 0 0-16.77-16"></svg:path>`,
})
export class PhHandTapFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandTapLightIcon],svg[ph-hand-tap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58 76a58 58 0 0 1 116 0a6 6 0 0 1-12 0a46 46 0 0 0-92 0a6 6 0 0 1-12 0m138 46a25.87 25.87 0 0 0-14.59 4.49A26 26 0 0 0 142 110.1V76a26 26 0 0 0-52 0v87l-7.53-12.1a26 26 0 0 0-45 26.13l29.32 50A6 6 0 0 0 77.16 221l-29.29-50a14 14 0 0 1 24.25-14a1 1 0 0 0 .1.17l18.68 30A6 6 0 0 0 102 184V76a14 14 0 0 1 28 0v68a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0v20a6 6 0 0 0 12 0v-4a14 14 0 0 1 28 0v36c0 22.13-7.3 37.18-7.37 37.32a6 6 0 0 0 2.69 8a5.8 5.8 0 0 0 2.68.68a6 6 0 0 0 5.38-3.32c.35-.7 8.63-17.55 8.63-42.68v-36A26 26 0 0 0 196 122"></svg:path>`,
})
export class PhHandTapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandTapThinIcon],svg[ph-hand-tap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 76a56 56 0 0 1 112 0a4 4 0 0 1-8 0a48 48 0 0 0-96 0a4 4 0 1 1-8 0m136 48a23.88 23.88 0 0 0-16.07 6.19A24 24 0 0 0 140 114.13V76a24 24 0 0 0-48 0v94l-11.26-18.06A24 24 0 0 0 39.22 176l29.32 50a4 4 0 0 0 6.9-4l-29.31-50a16 16 0 0 1 27.72-16l.07.12l18.68 30A4 4 0 0 0 100 184V76a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0v20a4 4 0 0 0 8 0v-4a16 16 0 0 1 32 0v36c0 22.66-7.51 38.06-7.58 38.21a4 4 0 0 0 1.79 5.37a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 3.58-2.21c.34-.69 8.42-17.13 8.42-41.79v-36a24 24 0 0 0-24-24"></svg:path>`,
})
export class PhHandTapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandThinIcon],svg[ph-hand-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 52a23.9 23.9 0 0 0-16 6.13V44a24 24 0 0 0-47.93-1.8A24 24 0 0 0 84 60v78l-11.25-18.06a24 24 0 0 0-41.62 23.92C64.44 214.12 82.17 236 128 236a84.09 84.09 0 0 0 84-84V76a24 24 0 0 0-24-24m16 100a76.09 76.09 0 0 1-76 76c-37.29 0-53.59-11.51-89.71-87.71l-.15-.29a16 16 0 0 1 27.71-16a1 1 0 0 1 .07.12l18.68 30A4 4 0 0 0 92 152V60a16 16 0 0 1 32 0v60a4 4 0 0 0 8 0V44a16 16 0 0 1 32 0v76a4 4 0 0 0 8 0V76a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhHandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWavingIcon],svg[ph-hand-waving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.17 100l-17.31-30a28 28 0 0 0-38.24-10.25a27.7 27.7 0 0 0-9 8.34L138.2 38a28 28 0 0 0-48.48 0a28 28 0 0 0-41.57 36l1.59 2.76A27.7 27.7 0 0 0 38 80.41a28 28 0 0 0-10.24 38.25l40 69.32a87.47 87.47 0 0 0 53.43 41a88.6 88.6 0 0 0 22.92 3a88 88 0 0 0 76.06-132Zm-6.66 62.64A72 72 0 0 1 81.62 180l-40-69.32a12 12 0 0 1 20.78-12L81.63 132a8 8 0 1 0 13.85-8L62 66a12 12 0 1 1 20.78-12L114 108a8 8 0 1 0 13.85-8l-24.28-42a12 12 0 1 1 20.78-12l33.42 57.9a48 48 0 0 0-5.54 60.6a8 8 0 0 0 13.24-9a32 32 0 0 1 7.31-43.5a8 8 0 0 0 2.13-10.4L168.23 90A12 12 0 1 1 189 78l17.31 30a71.56 71.56 0 0 1 7.2 54.62ZM184.25 31.71A8 8 0 0 1 194 26a59.62 59.62 0 0 1 36.53 28l.33.57a8 8 0 1 1-13.85 8l-.33-.57a43.67 43.67 0 0 0-26.8-20.5a8 8 0 0 1-5.63-9.79M80.89 237a8 8 0 0 1-11.23 1.33A119.6 119.6 0 0 1 40.06 204a8 8 0 0 1 13.86-8a103.7 103.7 0 0 0 25.64 29.72A8 8 0 0 1 80.89 237"></svg:path>`,
})
export class PhHandWavingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWavingBoldIcon],svg[ph-hand-waving-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.63 23.14a12 12 0 0 1 15-8A72.34 72.34 0 0 1 228.4 32a12 12 0 0 1-16.58 17.35a48.3 48.3 0 0 0-19.2-11.2a12 12 0 0 1-7.99-15.01m48.22 144.66A92 92 0 0 1 64.31 190l-40-69.32A32 32 0 0 1 36 77a31.7 31.7 0 0 1 7.54-3.14a32 32 0 0 1 45.11-41.41a32 32 0 0 1 53 3.55l14.53 25.17A32 32 0 0 1 206.35 68l17.31 30a91.38 91.38 0 0 1 9.19 69.8m-30-57.81L185.57 80a8 8 0 0 0-13.86 8l6.68 11.57a12 12 0 0 1-3.18 15.59a28 28 0 0 0-6.41 38.1a12 12 0 1 1-19.86 13.46a52.05 52.05 0 0 1 3.9-63.4L120.9 48a8 8 0 0 0-13.9 8l24.25 42a12 12 0 1 1-20.78 12L79.33 56a8 8 0 0 0-13.85 8L99 122a12 12 0 0 1-20.78 12l-19.29-33.33a8 8 0 1 0-13.85 8L85.1 178a68 68 0 0 0 117.78-68ZM50.46 198a12 12 0 1 0-20.78 12a132.8 132.8 0 0 0 20 26.38a12 12 0 1 0 17.17-16.76A109.2 109.2 0 0 1 50.46 198"></svg:path>`,
})
export class PhHandWavingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWavingDuotoneIcon],svg[ph-hand-waving-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 213.27A80 80 0 0 1 74.7 184l-40-69.32a20 20 0 0 1 34.64-20L55.08 70a20 20 0 0 1 34.65-20l6.92 12a20 20 0 0 1 34.64-20l30 52A20 20 0 0 1 196 74l17.31 30A80 80 0 0 1 184 213.27" opacity=".2"></svg:path><svg:path d="m220.17 100l-17.31-30a28 28 0 0 0-38.24-10.25a27.7 27.7 0 0 0-9 8.34L138.2 38a28 28 0 0 0-48.48 0a28 28 0 0 0-41.57 36l1.59 2.76A27.7 27.7 0 0 0 38 80.41a28 28 0 0 0-10.24 38.25l40 69.32a87.47 87.47 0 0 0 53.43 41a88.6 88.6 0 0 0 22.92 3a88 88 0 0 0 76.06-132Zm-6.66 62.64A72 72 0 0 1 81.62 180l-40-69.32a12 12 0 0 1 20.78-12L81.63 132a8 8 0 1 0 13.85-8L62 66a12 12 0 1 1 20.78-12L114 108a8 8 0 1 0 13.85-8l-24.28-42a12 12 0 1 1 20.78-12l33.42 57.9a48 48 0 0 0-5.54 60.6a8 8 0 0 0 13.24-9a32 32 0 0 1 7.31-43.5a8 8 0 0 0 2.13-10.4L168.23 90A12 12 0 1 1 189 78l17.31 30a71.56 71.56 0 0 1 7.2 54.62ZM184.25 31.71A8 8 0 0 1 194 26a59.62 59.62 0 0 1 36.53 28l.33.57a8 8 0 1 1-13.85 8l-.33-.57a43.67 43.67 0 0 0-26.8-20.5a8 8 0 0 1-5.63-9.79M80.89 237a8 8 0 0 1-11.23 1.33A119.6 119.6 0 0 1 40.06 204a8 8 0 0 1 13.86-8a103.7 103.7 0 0 0 25.64 29.72A8 8 0 0 1 80.89 237"></svg:path></svg:g>`,
})
export class PhHandWavingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWavingFillIcon],svg[ph-hand-waving-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.31 98.46a88 88 0 1 1-152.23 88.31l-40.93-70.89a16 16 0 0 1 27.69-16L72.4 132a8 8 0 0 0 13.86-8L47 56a16 16 0 0 1 27.69-16L114 108a8 8 0 1 0 13.85-8l-30-52a16 16 0 0 1 27.71-16L166 102.12A48.25 48.25 0 0 0 152 136a47.6 47.6 0 0 0 9.6 28.8a8 8 0 1 0 12.79-9.61a32 32 0 0 1 6.61-44.93a8 8 0 0 0 2.17-10.43L171.71 80a16 16 0 0 1 27.71-16zm-29.37-57A43.74 43.74 0 0 1 216.74 62l.33.57a8 8 0 0 0 13.86-8l-.33-.57a59.64 59.64 0 0 0-36.54-28a8 8 0 0 0-4.12 15.46M79.58 225.72A103.6 103.6 0 0 1 53.93 196a8 8 0 0 0-13.86 8a119.6 119.6 0 0 0 29.6 34.28a8 8 0 0 0 9.91-12.56"></svg:path>`,
})
export class PhHandWavingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWavingLightIcon],svg[ph-hand-waving-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.44 101l-17.31-30a26 26 0 0 0-45.58 1l-19.08-33a26 26 0 0 0-46.14 2.19A26 26 0 0 0 49.88 73l3.29 5.7a26 26 0 0 0-23.69 39L69.5 187a85.44 85.44 0 0 0 52.21 40.08a86.7 86.7 0 0 0 22.4 3a86 86 0 0 0 74.33-129Zm-3 62.16A74 74 0 0 1 79.89 181l-40-69.32a14 14 0 0 1 24.25-14L83.36 131a6 6 0 0 0 10.39-6L60.27 67a14 14 0 1 1 24.25-14l31.17 54a6 6 0 0 0 5.2 3a5.9 5.9 0 0 0 3-.81a6 6 0 0 0 2.2-8.2L101.83 59a14 14 0 0 1 24.25-14l34.2 59.23a46 46 0 0 0-6.4 59.13a6 6 0 0 0 9.94-6.73a34 34 0 0 1 7.76-46.26a6 6 0 0 0 1.6-7.8L166.49 91a14 14 0 1 1 24.25-14l17.31 30a73.53 73.53 0 0 1 7.39 56.14ZM186.18 32.22a6 6 0 0 1 7.34-4.22a57.6 57.6 0 0 1 35.32 27l.33.57a6 6 0 1 1-10.39 6l-.33-.57a45.7 45.7 0 0 0-28-21.43a6 6 0 0 1-4.27-7.35M79.32 235.71a6 6 0 0 1-8.42 1A117.8 117.8 0 0 1 41.79 203a6 6 0 0 1 10.4-6a105.5 105.5 0 0 0 26.14 30.29a6 6 0 0 1 .99 8.42"></svg:path>`,
})
export class PhHandWavingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWavingThinIcon],svg[ph-hand-waving-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.71 102L199.4 72a24 24 0 0 0-43.57 4.52L134.74 40a24 24 0 0 0-43.69 4.9A24 24 0 0 0 51.61 72l5.31 9.19a24 24 0 0 0-25.71 35.47l40 69.32a83.4 83.4 0 0 0 51 39.14a84.5 84.5 0 0 0 21.88 2.9a84 84 0 0 0 72.6-126Zm.67 61.67A76 76 0 0 1 78.16 182l-40-69.32a16 16 0 0 1 27.71-16L85.09 130a4 4 0 0 0 6.91-4L58.54 68a16 16 0 1 1 27.71-16l31.17 54a4 4 0 1 0 6.93-4L100.1 60a16 16 0 0 1 27.72-16l35 60.63a44 44 0 0 0-7.28 57.61a4 4 0 1 0 6.62-4.49a36 36 0 0 1 8.22-49a4 4 0 0 0 1.07-5.2L164.76 92a16 16 0 1 1 27.71-16l17.31 30a75.52 75.52 0 0 1 7.6 57.65ZM188.12 32.74A4 4 0 0 1 193 29.9A55.65 55.65 0 0 1 227.11 56l.33.58A4 4 0 0 1 226 62a4 4 0 0 1-5.47-1.46l-.33-.57A47.62 47.62 0 0 0 191 37.63a4 4 0 0 1-2.88-4.89M77.75 234.48a4 4 0 0 1-3.14 1.52a4 4 0 0 1-2.47-.86A115.6 115.6 0 0 1 43.53 202a4 4 0 1 1 6.92-4a107.7 107.7 0 0 0 26.64 30.86a4 4 0 0 1 .66 5.62"></svg:path>`,
})
export class PhHandWavingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWithdrawIcon],svg[ph-hand-withdraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 198.65V240a8 8 0 0 1-16 0v-41.35A74.84 74.84 0 0 0 192 144v58.35a8 8 0 0 1-14.69 4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12 12 0 0 0-20.89 11.83l22.13 33.79a8 8 0 0 1-13.39 8.76l-22.26-34l-.24-.38A28 28 0 0 1 176 176.4V64h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16v59.62a90.89 90.89 0 0 1 40 75.03M88 56a8 8 0 0 0-8-8H64a16 16 0 0 0-16 16v136a8 8 0 0 0 16 0V64h16a8 8 0 0 0 8-8m69.66 42.34a8 8 0 0 0-11.32 0L128 116.69V16a8 8 0 0 0-16 0v100.69L93.66 98.34a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhHandWithdrawIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWithdrawBoldIcon],svg[ph-hand-withdraw-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 198.65V240a12 12 0 0 1-24 0v-41.35A70.66 70.66 0 0 0 196 154v48.27a12 12 0 0 1-22 6.57l-10.67-16.3a7 7 0 0 1-.36-.58a8 8 0 0 0-14 7.77l22 33.66a12 12 0 1 1-20.08 13.14l-22.26-34c-.12-.19-.24-.38-.35-.58A32 32 0 0 1 172 168.3V68h-8a12 12 0 0 1 0-24h12a20 20 0 0 1 20 20v57.52a94.91 94.91 0 0 1 40 77.13M88 56a12 12 0 0 0-12-12H64a20 20 0 0 0-20 20v136a12 12 0 0 0 24 0V68h8a12 12 0 0 0 12-12m68.49 60.48a12 12 0 0 0-17-17L132 107V16a12 12 0 0 0-24 0v91l-7.51-7.52a12 12 0 0 0-17 17l28 28a12 12 0 0 0 17 0Z"></svg:path>`,
})
export class PhHandWithdrawBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWithdrawDuotoneIcon],svg[ph-hand-withdraw-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 64v138.31L173.32 186a20 20 0 0 0-36.9 14H56V64a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 198.65V240a8 8 0 0 1-16 0v-41.35A74.84 74.84 0 0 0 192 144v58.35a8 8 0 0 1-14.69 4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12 12 0 0 0-20.89 11.83l22.13 33.79a8 8 0 0 1-13.39 8.76l-22.26-34l-.24-.38A28 28 0 0 1 176 176.4V64h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16v59.62a90.89 90.89 0 0 1 40 75.03M88 56a8 8 0 0 0-8-8H64a16 16 0 0 0-16 16v136a8 8 0 0 0 16 0V64h16a8 8 0 0 0 8-8m69.66 42.34a8 8 0 0 0-11.32 0L128 116.69V16a8 8 0 0 0-16 0v100.69L93.66 98.34a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhHandWithdrawDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWithdrawFillIcon],svg[ph-hand-withdraw-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 56h-16V16a8 8 0 0 1 16 0Zm64 67.62V72a16 16 0 0 0-16-16h-48v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L112 116.69V56H64a16 16 0 0 0-16 16v128a8 8 0 0 0 8 8h74.7c.32.67.67 1.34 1.05 2l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03"></svg:path>`,
})
export class PhHandWithdrawFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWithdrawLightIcon],svg[ph-hand-withdraw-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 198.65V240a6 6 0 0 1-12 0v-41.35a76.83 76.83 0 0 0-28-59.08v62.74a6 6 0 0 1-11 3.28l-10.68-16.3a3 3 0 0 1-.17-.29a14 14 0 0 0-24.33 13.87L166 236.71a6 6 0 0 1-10 6.58l-22.26-34c-.06-.1-.12-.19-.17-.29A26 26 0 0 1 178 182.14V64a2 2 0 0 0-2-2h-16a6 6 0 0 1 0-12h16a14 14 0 0 1 14 14v60.69a88.88 88.88 0 0 1 40 73.96M86 56a6 6 0 0 0-6-6H64a14 14 0 0 0-14 14v136a6 6 0 0 0 12 0V64a2 2 0 0 1 2-2h16a6 6 0 0 0 6-6m70.24 43.76a6 6 0 0 0-8.48 0L126 121.51V16a6 6 0 0 0-12 0v105.51L92.24 99.76a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhHandWithdrawLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandWithdrawThinIcon],svg[ph-hand-withdraw-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 198.65V240a4 4 0 0 1-8 0v-41.35a78.83 78.83 0 0 0-32-63.18v66.84a4 4 0 0 1-7.35 2.19L170 188.19l-.12-.19a16 16 0 0 0-27.77 15.91l22.2 33.9a4 4 0 1 1-6.69 4.38l-22.26-34a1.2 1.2 0 0 1-.12-.19a24 24 0 0 1 41.51-24.1l3.27 5V64a4 4 0 0 0-4-4H160a4 4 0 0 1 0-8h16a12 12 0 0 1 12 12v61.78a86.84 86.84 0 0 1 40 72.87M80 52H64a12 12 0 0 0-12 12v136a4 4 0 0 0 8 0V64a4 4 0 0 1 4-4h16a4 4 0 0 0 0-8m74.83 49.17a4 4 0 0 0-5.66 0L124 126.34V16a4 4 0 0 0-8 0v110.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhHandWithdrawThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagIcon],svg[ph-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32M32 200L46.33 80H80v24a8 8 0 0 0 16 0V80h64v24a8 8 0 0 0 16 0V80h33.75l14.17 120Z"></svg:path>`,
})
export class PhHandbagIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagBoldIcon],svg[ph-handbag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.86 197.65l-14.25-120A20.06 20.06 0 0 0 209.67 60h-29.84a52 52 0 0 0-103.66 0H46.33a20.06 20.06 0 0 0-19.94 17.65l-14.25 120A20 20 0 0 0 32.08 220h191.84a20 20 0 0 0 19.94-22.35M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36M36.5 196L49.81 84H76v20a12 12 0 0 0 24 0V84h56v20a12 12 0 0 0 24 0V84h26.19l13.31 112Z"></svg:path>`,
})
export class PhHandbagBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagDuotoneIcon],svg[ph-handbag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M223.92 208H32.08a8 8 0 0 1-8-8.93l14.25-120a8.06 8.06 0 0 1 8-7.07h163.34a8.06 8.06 0 0 1 8 7.07l14.25 120a8 8 0 0 1-8 8.93" opacity=".2"></svg:path><svg:path d="m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32M32 200L46.33 80H80v24a8 8 0 0 0 16 0V80h64v24a8 8 0 0 0 16 0V80h33.75l14.17 120Z"></svg:path></svg:g>`,
})
export class PhHandbagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagFillIcon],svg[ph-handbag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48M96 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-72a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m48 72a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhHandbagFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagLightIcon],svg[ph-handbag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.9 198.36l-14.25-120a14.06 14.06 0 0 0-14-12.36H174v-2a46 46 0 0 0-92 0v2H46.33a14.06 14.06 0 0 0-14 12.36l-14.25 120a14 14 0 0 0 14 15.64h191.84a14 14 0 0 0 14-15.64ZM94 64a34 34 0 0 1 68 0v2H94Zm131.5 137.3a2.07 2.07 0 0 1-1.58.7H32.08a2.07 2.07 0 0 1-1.58-.7a1.92 1.92 0 0 1-.49-1.53l14.26-120A2 2 0 0 1 46.33 78H82v26a6 6 0 0 0 12 0V78h68v26a6 6 0 0 0 12 0V78h35.67a2 2 0 0 1 2.06 1.77l14.26 120a1.92 1.92 0 0 1-.49 1.53"></svg:path>`,
})
export class PhHandbagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleIcon],svg[ph-handbag-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32M32 200L46.33 80h163.42l14.17 120Z"></svg:path>`,
})
export class PhHandbagSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleBoldIcon],svg[ph-handbag-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.86 197.65l-14.25-120A20.06 20.06 0 0 0 209.67 60h-29.84a52 52 0 0 0-103.66 0H46.33a20.06 20.06 0 0 0-19.94 17.65l-14.25 120A20 20 0 0 0 32.08 220h191.84a20 20 0 0 0 19.94-22.35M128 36a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36M36.5 196L49.81 84h156.38l13.31 112Z"></svg:path>`,
})
export class PhHandbagSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleDuotoneIcon],svg[ph-handbag-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M223.92 208H32.08a8 8 0 0 1-8-8.93l14.25-120a8.06 8.06 0 0 1 8-7.07h163.34a8.06 8.06 0 0 1 8 7.07l14.25 120a8 8 0 0 1-8 8.93" opacity=".2"></svg:path><svg:path d="m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32M32 200L46.33 80h163.42l14.17 120Z"></svg:path></svg:g>`,
})
export class PhHandbagSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleFillIcon],svg[ph-handbag-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhHandbagSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleLightIcon],svg[ph-handbag-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.9 198.36l-14.25-120a14.06 14.06 0 0 0-14-12.36H174v-2a46 46 0 0 0-92 0v2H46.33a14.06 14.06 0 0 0-14 12.36l-14.25 120a14 14 0 0 0 14 15.64h191.84a14 14 0 0 0 14-15.64ZM94 64a34 34 0 0 1 68 0v2H94Zm131.5 137.3a2.07 2.07 0 0 1-1.58.7H32.08a2.07 2.07 0 0 1-1.58-.7a1.92 1.92 0 0 1-.49-1.53l14.26-120A2 2 0 0 1 46.33 78h163.34a2 2 0 0 1 2.06 1.77l14.26 120a1.92 1.92 0 0 1-.49 1.53"></svg:path>`,
})
export class PhHandbagSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagSimpleThinIcon],svg[ph-handbag-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.92 198.59l-14.26-120a12 12 0 0 0-12-10.59H172v-4a44 44 0 0 0-88 0v4H46.33a12 12 0 0 0-12 10.59l-14.26 120a12 12 0 0 0 2.93 9.35a12.1 12.1 0 0 0 9.08 4.06h191.84a12.1 12.1 0 0 0 9.06-4.06a12 12 0 0 0 2.94-9.35M92 64a36 36 0 0 1 72 0v4H92Zm135 138.63a4.08 4.08 0 0 1-3.08 1.37H32.08a4.08 4.08 0 0 1-3.08-1.37a3.9 3.9 0 0 1-1-3.09l14.25-120a4 4 0 0 1 4-3.54h163.42a4 4 0 0 1 4.05 3.54l14.25 120a3.9 3.9 0 0 1-.97 3.09"></svg:path>`,
})
export class PhHandbagSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandbagThinIcon],svg[ph-handbag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.92 198.59l-14.26-120a12 12 0 0 0-12-10.59H172v-4a44 44 0 0 0-88 0v4H46.33a12 12 0 0 0-12 10.59l-14.26 120a12 12 0 0 0 2.93 9.35a12.1 12.1 0 0 0 9.08 4.06h191.84a12.1 12.1 0 0 0 9.06-4.06a12 12 0 0 0 2.94-9.35M92 64a36 36 0 0 1 72 0v4H92Zm135 138.63a4.08 4.08 0 0 1-3.08 1.37H32.08a4.08 4.08 0 0 1-3.08-1.37a3.9 3.9 0 0 1-1-3.09l14.25-120a4 4 0 0 1 4-3.54H84v28a4 4 0 0 0 8 0V76h72v28a4 4 0 0 0 8 0V76h37.67a4 4 0 0 1 4.05 3.54l14.25 120a3.9 3.9 0 0 1-.97 3.09"></svg:path>`,
})
export class PhHandbagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsClappingIcon],svg[ph-hands-clapping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160.22 24V8a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m35.88 17a7.9 7.9 0 0 0 4.17 1.17a8 8 0 0 0 6.84-3.83l8-13.11a8 8 0 0 0-13.68-8.33l-8 13.1a8 8 0 0 0 2.67 11m47.51 12.59a8 8 0 0 0-10.08-5.16l-15.06 4.85a8 8 0 0 0 2.46 15.62a8.2 8.2 0 0 0 2.46-.39l15.05-4.85a8 8 0 0 0 5.17-10.11ZM217 97.58a80.22 80.22 0 0 1-10.22 94c-.34 1.73-.72 3.46-1.19 5.18A80.17 80.17 0 0 1 58.77 216L23.5 155a26 26 0 0 1 19.24-38.79l-3-5.2a26 26 0 0 1 19.2-38.78l-.7-1.23a26 26 0 0 1 37.23-34.47a26.06 26.06 0 0 1 44.83.47l12.26 21.2a26.07 26.07 0 0 1 43.25 2.8ZM109.07 55l25 43.17a26 26 0 0 1 17.33-10L126.42 45a10 10 0 1 0-17.35 10m-36.95 8l6.46 11.17a26.05 26.05 0 0 1 17.32-10L89.45 53a10 10 0 1 0-17.33 10m111.54 81l-20.22-35a10 10 0 0 0-17.74 9.25L158.3 140a8 8 0 0 1-13.87 8l-36.5-63a10 10 0 1 0-17.35 10l26.05 45a8 8 0 0 1-13.87 8L71 93a10 10 0 0 0-17.33 10l35.22 61A8 8 0 0 1 75 172l-20.28-35a10 10 0 0 0-17.34 10l35.27 61a64.12 64.12 0 0 0 117.42-15.44a63.52 63.52 0 0 0-6.41-48.56m19.41-38.42L181.93 69a10 10 0 0 0-17.38 10l33 57.05a80.2 80.2 0 0 1 9.45 25.46a64.23 64.23 0 0 0-3.93-55.93"></svg:path>`,
})
export class PhHandsClappingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsClappingBoldIcon],svg[ph-hands-clapping-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.77 83.57L199.59 47a30.14 30.14 0 0 0-41.11-11a30.5 30.5 0 0 0-4.92 3.52L144 23a30.16 30.16 0 0 0-49.55-3.78a30.18 30.18 0 0 0-28.59.8a29.95 29.95 0 0 0-12.78 37.45A29.7 29.7 0 0 0 47.32 60a30 30 0 0 0-11 41l.3.52A31 31 0 0 0 31 104a30 30 0 0 0-11 41l35.33 61a84.48 84.48 0 0 0 115.12 30.75a83.5 83.5 0 0 0 39.27-51c.39-1.45.73-2.89 1-4.35a84.13 84.13 0 0 0 10.05-97.83m-53.06-23.12a6 6 0 0 1 11-1.45l21.18 36.57a59.85 59.85 0 0 1 7.34 39a85 85 0 0 0-5.9-12.57l-33-57a5.94 5.94 0 0 1-.62-4.55m-55.61-24a6 6 0 0 1 7.38-4.25a6 6 0 0 1 3.65 2.8l22.33 38.55A30.7 30.7 0 0 0 140 76a30.2 30.2 0 0 0-4.9 3.52L112.7 41a6 6 0 0 1-.6-4.55m-37 8a6 6 0 0 1 7.37-4.25a6.05 6.05 0 0 1 3.62 2.8l3.77 6.58A30 30 0 0 0 84.34 52a30.4 30.4 0 0 0-4.88 3.5L75.68 49a5.93 5.93 0 0 1-.6-4.55ZM158.44 216a60.37 60.37 0 0 1-82.23-22l-35.33-61a6 6 0 0 1 2.2-8.2a6 6 0 0 1 8.22 2.2l20.29 35a12 12 0 0 0 20.85-12L57.15 89a6 6 0 0 1 10.41-6l31.86 55a12 12 0 0 0 20.85-12L94.2 81.05V81a6 6 0 0 1 10.44-6l36.57 63A12 12 0 0 0 162 126l-12.55-21.61A6 6 0 0 1 160.21 99l20.27 35a60 60 0 0 1-22.04 82"></svg:path>`,
})
export class PhHandsClappingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsClappingDuotoneIcon],svg[ph-hands-clapping-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M199 187.76a71.67 71.67 0 0 0-8.66-47.76l-20.2-35a18 18 0 0 0-31.55 17.26L114.71 81a18 18 0 1 0-31.17 18l-5.73-10L65.1 67a18 18 0 1 1 31.18-18L102 59a18 18 0 1 1 31.17-18l24.23 42a18 18 0 0 1 31.2-18l21.11 36.57A72 72 0 0 1 199 187.76" opacity=".2"></svg:path><svg:path d="M160.22 24V8a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m35.88 17a7.9 7.9 0 0 0 4.17 1.17a8 8 0 0 0 6.84-3.83l8-13.11a8 8 0 0 0-13.68-8.33l-8 13.1a8 8 0 0 0 2.67 11m47.51 12.59a8 8 0 0 0-10.08-5.16l-15.06 4.85a8 8 0 0 0 2.46 15.62a8.2 8.2 0 0 0 2.46-.39l15.05-4.85a8 8 0 0 0 5.17-10.11ZM217 97.58a80.22 80.22 0 0 1-10.22 94c-.34 1.73-.72 3.46-1.19 5.18A80.17 80.17 0 0 1 58.77 216L23.5 155a26 26 0 0 1 19.24-38.79l-3-5.2a26 26 0 0 1 19.2-38.78l-.7-1.23a26 26 0 0 1 37.23-34.47a26.06 26.06 0 0 1 44.83.47l12.26 21.2a26.07 26.07 0 0 1 43.25 2.8ZM109.07 55l25 43.17a26 26 0 0 1 17.33-10L126.42 45a10 10 0 1 0-17.35 10m-36.95 8l6.46 11.17a26.05 26.05 0 0 1 17.32-10L89.45 53a10 10 0 1 0-17.33 10m111.54 81l-20.22-35a10 10 0 0 0-17.74 9.25L158.3 140a8 8 0 0 1-13.87 8l-36.5-63a10 10 0 1 0-17.35 10l26.05 45a8 8 0 0 1-13.87 8L71 93a10 10 0 0 0-17.33 10l35.22 61A8 8 0 0 1 75 172l-20.28-35a10 10 0 0 0-17.34 10l35.27 61a64.12 64.12 0 0 0 117.42-15.44a63.52 63.52 0 0 0-6.41-48.56m19.41-38.42L181.93 69a10 10 0 0 0-17.38 10l33 57.05a80.2 80.2 0 0 1 9.45 25.46a64.23 64.23 0 0 0-3.93-55.93"></svg:path></svg:g>`,
})
export class PhHandsClappingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsClappingFillIcon],svg[ph-hands-clapping-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.87 65a18 18 0 0 0-31.25 18l-24.26-42a18 18 0 0 0-31.22 18L96.4 49a18 18 0 0 0-31.22 18l3.34 5.77A26 26 0 0 0 39.74 111l3 5.2A26 26 0 0 0 23.5 155l35.27 61a80.14 80.14 0 0 0 149.52-39.57a71.92 71.92 0 0 0 1.71-74.85Zm1.2 127.56A64.12 64.12 0 0 1 72.65 208l-35.27-61a10 10 0 0 1 17.34-10L75 172a8 8 0 0 0 13.87-8l-35.25-61A10 10 0 0 1 71 93l31.81 55a8 8 0 0 0 13.87-8l-26-45a10 10 0 0 1 17.35-10l36.5 63a8 8 0 0 0 13.87-8l-12.6-21.75a10 10 0 0 1 17.64-9.25l20.22 35a63.52 63.52 0 0 1 6.41 48.57ZM160.22 24V8a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m33.22 6l8-13.1a8 8 0 0 1 13.68 8.33l-8 13.11a8 8 0 0 1-6.84 3.83A8 8 0 0 1 193.44 30m45 33.66l-15.05 4.85a8.2 8.2 0 0 1-2.46.39a8 8 0 0 1-2.46-15.62l15.06-4.85a8 8 0 1 1 4.91 15.23"></svg:path>`,
})
export class PhHandsClappingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsClappingLightIcon],svg[ph-hands-clapping-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.21 24V8a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m34.93 15.25a6 6 0 0 0 8.26-2l8-13.11a6 6 0 0 0-10.26-6.25l-8 13.11a6 6 0 0 0 2 8.25m44.57 14.91a6 6 0 0 0-7.57-3.87l-15 4.85a6 6 0 0 0 1.84 11.72a5.9 5.9 0 0 0 1.84-.3l15.06-4.84a6 6 0 0 0 3.83-7.56m-26.49 44.42a78.2 78.2 0 0 1-10.35 92c-.36 1.87-.76 3.74-1.26 5.6A78.18 78.18 0 0 1 60.49 215l-35.27-61a24 24 0 0 1 20.85-36l-4.61-8a24 24 0 0 1 20.82-36L60 70a24 24 0 0 1 36.11-30.46A24.05 24.05 0 0 1 138.56 38l13.89 24a24 24 0 0 1 41.62 0ZM107.33 56L134 102a24 24 0 0 1 20.8-12l-26.65-46a12 12 0 1 0-20.82 12m-37 8l8.08 14a24 24 0 0 1 20.82-12l-8.06-14a12 12 0 0 0-22 2.91a11.9 11.9 0 0 0 1.2 9.09Zm115 79l-20.23-35a12 12 0 0 0-21.1 11.27L156.56 141a6 6 0 0 1-10.4 6l-36.51-63a12 12 0 0 0-20.82 12l26 45a6 6 0 0 1-10.4 6L72.68 92a12 12 0 0 0-20.81 12l35.23 61a6 6 0 0 1-10.41 6l-20.25-35a12 12 0 1 0-20.81 12l35.27 61A66.13 66.13 0 0 0 192 193.09a65.53 65.53 0 0 0-6.6-50.09Zm19.41-38.42L183.66 68a12 12 0 0 0-16.42-4.39A12 12 0 0 0 162.82 80l33 57a77.7 77.7 0 0 1 10.14 31.54a66.25 66.25 0 0 0-1.15-63.96Z"></svg:path>`,
})
export class PhHandsClappingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsClappingThinIcon],svg[ph-hands-clapping-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.22 24V8a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m34 13.55a4 4 0 0 0 5.51-1.33l8-13.11a4 4 0 0 0-6.84-4.17l-8 13.11a4 4 0 0 0 1.3 5.5Zm41.62 17.23a4 4 0 0 0-5.05-2.58l-15.09 4.85a4 4 0 0 0 1.23 7.8a4 4 0 0 0 1.23-.19l15.06-4.85a4 4 0 0 0 2.59-5.03ZM203 189.66c-.37 2-.81 4-1.34 6A76.18 76.18 0 0 1 62.22 214L27 153a22 22 0 0 1 22.76-32.69L43.19 109a22 22 0 0 1 22.73-32.68L61.69 69a22 22 0 0 1 35.18-26a21.83 21.83 0 0 1 9.85-12a22.08 22.08 0 0 1 30.1 8l15.79 27.3a22.05 22.05 0 0 1 39.73-3.3l21.14 36.57A76.19 76.19 0 0 1 203 189.66M161.08 81l33 57.05a75.5 75.5 0 0 1 10.21 37.24a68.26 68.26 0 0 0 2.27-71.66L185.4 67a14 14 0 0 0-24.32 14m-55.49-24l28.54 49.29a22 22 0 0 1 24.28-14L129.88 43a14 14 0 1 0-24.29 14m-37 8l10 17.27a22 22 0 0 1 24.27-14L92.91 51a14 14 0 1 0-24.28 14Zm118.5 77l-20.19-35a14 14 0 0 0-24.67 13.26l12.6 21.74a4 4 0 1 1-6.93 4l-36.51-63a14 14 0 0 0-19.15-5.11A14 14 0 0 0 87.09 97l26.05 45a4 4 0 0 1-1.46 5.47a4 4 0 0 1-5.48-1.46L74.42 91a14 14 0 0 0-24.28 14l35.23 61a4 4 0 0 1-6.94 4l-20.25-35a14 14 0 0 0-24.29 14l35.27 61a68.09 68.09 0 0 0 118-68Z"></svg:path>`,
})
export class PhHandsClappingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsPrayingIcon],svg[ph-hands-praying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.32 180l-36.24-36.25l-36.46-120.29A21.76 21.76 0 0 0 128 12.93a21.76 21.76 0 0 0-34.62 10.53l-36.46 120.3L20.68 180a16 16 0 0 0 0 22.62l32.69 32.69a16 16 0 0 0 22.63 0L124.28 187a41 41 0 0 0 3.72-4.29a41 41 0 0 0 3.72 4.29L180 235.32a16 16 0 0 0 22.63 0l32.69-32.69a16 16 0 0 0 0-22.63M64.68 224L32 191.32l12.69-12.69l32.69 32.69ZM120 158.75a23.85 23.85 0 0 1-7 17L88.68 200L56 167.32l13.65-13.66a8 8 0 0 0 2-3.34l37-122.22A5.78 5.78 0 0 1 120 29.78Zm23 17a23.85 23.85 0 0 1-7-17v-129a5.78 5.78 0 0 1 11.31-1.68l37 122.22a8 8 0 0 0 2 3.34l14.49 14.49l-33.4 32ZM191.32 224l-12.56-12.57l33.39-32L224 191.32Z"></svg:path>`,
})
export class PhHandsPrayingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsPrayingBoldIcon],svg[ph-hands-praying-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.15 177.18l-35.53-35.53L166.45 22.3A25.75 25.75 0 0 0 128 8a25.75 25.75 0 0 0-38.45 14.3L53.38 141.65l-35.53 35.53a20 20 0 0 0 0 28.28l32.69 32.69a20 20 0 0 0 28.28 0l48.29-48.28c.31-.31.6-.62.89-.94c.29.32.58.63.89.94l48.29 48.28a20 20 0 0 0 28.28 0l32.69-32.69a20 20 0 0 0 0-28.28M64.68 218.35l-27-27l11-11l27 27Zm51.32-59.6a19.85 19.85 0 0 1-5.86 14.14l-17.46 17.46l-27-27l6.83-6.83a11.94 11.94 0 0 0 3-5l37-122.23a1.78 1.78 0 0 1 3.48.52Zm47.5 31.78l-17.64-17.64a19.85 19.85 0 0 1-5.86-14.14v-129a1.78 1.78 0 0 1 3.48-.52l37 122.23a11.94 11.94 0 0 0 3 5l7.6 7.6Zm27.82 27.82l-10.85-10.84l27.63-26.44l10.25 10.25Z"></svg:path>`,
})
export class PhHandsPrayingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsPrayingDuotoneIcon],svg[ph-hands-praying-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M229.66 197L197 229.66a8 8 0 0 1-11.31 0l-18.35-18.35l44-44l18.35 18.35a8 8 0 0 1-.03 11.34M26.34 185.66a8 8 0 0 0 0 11.31L59 229.66a8 8 0 0 0 11.31 0l18.35-18.35l-44-44Z" opacity=".2"></svg:path><svg:path d="m235.32 180l-36.24-36.25l-36.46-120.29A21.76 21.76 0 0 0 128 12.93a21.76 21.76 0 0 0-34.62 10.53l-36.46 120.3L20.68 180a16 16 0 0 0 0 22.62l32.69 32.69a16 16 0 0 0 22.63 0L124.28 187a41 41 0 0 0 3.72-4.29a41 41 0 0 0 3.72 4.29L180 235.32a16 16 0 0 0 22.63 0l32.69-32.69a16 16 0 0 0 0-22.63M64.68 224L32 191.32l12.69-12.69l32.69 32.69ZM120 158.75a23.85 23.85 0 0 1-7 17L88.68 200L56 167.32l13.65-13.66a8 8 0 0 0 2-3.34l37-122.22A5.78 5.78 0 0 1 120 29.78Zm23 17a23.85 23.85 0 0 1-7-17v-129a5.78 5.78 0 0 1 11.31-1.68l37 122.22a8 8 0 0 0 2 3.34l14.49 14.49l-33.4 32ZM191.32 224l-12.56-12.57l33.39-32L224 191.32Z"></svg:path></svg:g>`,
})
export class PhHandsPrayingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsPrayingFillIcon],svg[ph-hands-praying-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.32 180l-36.24-36.25l-36.46-120.29A21.76 21.76 0 0 0 128 12.93a21.76 21.76 0 0 0-34.62 10.53l-36.46 120.3L20.68 180a16 16 0 0 0 0 22.62l32.69 32.69a16 16 0 0 0 22.63 0L124.28 187a41 41 0 0 0 3.72-4.29a41 41 0 0 0 3.72 4.29L180 235.32a16 16 0 0 0 22.63 0l32.69-32.69a16 16 0 0 0 0-22.63M120 158.75a23.85 23.85 0 0 1-7 17L88.68 200L56 167.32l13.65-13.66a8 8 0 0 0 2-3.34l37-122.22A5.78 5.78 0 0 1 120 29.78Zm47.44 41.38L143 175.72a23.85 23.85 0 0 1-7-17v-129a5.78 5.78 0 0 1 11.31-1.68l37 122.22a8 8 0 0 0 2 3.34l14.49 14.49Z"></svg:path>`,
})
export class PhHandsPrayingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsPrayingLightIcon],svg[ph-hands-praying-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m233.9 181.42l-36.59-36.6L160.71 24A19.75 19.75 0 0 0 128 15.62A19.75 19.75 0 0 0 95.29 24l-36.6 120.82l-36.59 36.6a14 14 0 0 0 0 19.79l32.69 32.69a14 14 0 0 0 19.79 0l48.29-48.28a38 38 0 0 0 5.13-6.38a38 38 0 0 0 5.13 6.38l48.29 48.28a14 14 0 0 0 19.79 0l32.69-32.69a14 14 0 0 0 0-19.79m-167.8 44a2 2 0 0 1-2.83 0l-32.69-32.69a2 2 0 0 1 0-2.83l14.11-14.1l35.51 35.51Zm48.28-48.29l-25.69 25.7l-35.52-35.52l15.07-15.07a6 6 0 0 0 1.5-2.5l37-122.22A7.78 7.78 0 0 1 122 29.78v129a25.83 25.83 0 0 1-7.62 18.35M134 158.75v-129a7.78 7.78 0 0 1 15.22-2.26l37 122.22a6 6 0 0 0 1.5 2.5l15.93 15.94l-36.28 34.74l-25.79-25.79a25.83 25.83 0 0 1-7.58-18.35m91.42 34l-32.69 32.69a2 2 0 0 1-2.83 0l-14-14l36.29-34.74l13.24 13.23a2 2 0 0 1-.01 2.8Z"></svg:path>`,
})
export class PhHandsPrayingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandsPrayingThinIcon],svg[ph-hands-praying-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 182.83l-37-37l-36.7-121.21A17.77 17.77 0 0 0 128 18.56a17.77 17.77 0 0 0-30.79 6.06L60.46 145.88l-36.95 37a12 12 0 0 0 0 17l32.69 32.61a12 12 0 0 0 17 0l48.28-48.29a36 36 0 0 0 6.55-8.94a36 36 0 0 0 6.55 8.94l48.28 48.29a12 12 0 0 0 17 0l32.69-32.69a12 12 0 0 0-.06-16.97m-165 44a4 4 0 0 1-5.66 0l-32.66-32.68a4 4 0 0 1 0-5.66L44.68 173L83 211.32Zm48.29-48.28l-27.1 27.11l-38.34-38.34l16.48-16.49a3.9 3.9 0 0 0 1-1.67l37-122.22A9.78 9.78 0 0 1 124 29.78v129a27.8 27.8 0 0 1-8.2 19.77Zm16.2-19.8v-129a9.78 9.78 0 0 1 19.14-2.84l37 122.22a3.9 3.9 0 0 0 1 1.67l17.38 17.38l-39.18 37.51l-27.12-27.14a27.8 27.8 0 0 1-8.2-19.8Zm94.83 35.4l-32.68 32.68a4 4 0 0 1-5.66 0L173 211.38l39.18-37.51l14.61 14.62a4 4 0 0 1 .04 5.66Z"></svg:path>`,
})
export class PhHandsPrayingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandshakeIcon],svg[ph-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.3 107.91l-25.52-51.06a16 16 0 0 0-21.47-7.15l-24.87 12.43l-52.39-13.86a8.14 8.14 0 0 0-4.1 0L73.56 62.13L48.69 49.7a16 16 0 0 0-21.47 7.15L1.7 107.9a16 16 0 0 0 7.15 21.47l27 13.51l55.49 39.63a8.1 8.1 0 0 0 2.71 1.25l64 16a8 8 0 0 0 7.6-2.1l55.07-55.08l26.42-13.21a16 16 0 0 0 7.15-21.46Zm-54.89 33.37L165 113.72a8 8 0 0 0-10.68.61C136.51 132.27 116.66 130 104 122l43.24-42h31.81l27.21 54.41ZM41.53 64L62 74.22l-25.57 51.05L16 115.06Zm116 119.13l-58.11-14.52l-49.2-35.14l28-56L128 64.28l9.8 2.59l-45 43.68l-.08.09a16 16 0 0 0 2.72 24.81c20.56 13.13 45.37 11 64.91-5L188 152.66Zm62-57.87l-25.52-51L214.47 64L240 115.06Zm-87.75 92.67a8 8 0 0 1-7.75 6.06a8 8 0 0 1-1.95-.24l-41.67-10.42a7.9 7.9 0 0 1-2.71-1.25l-26.35-18.82a8 8 0 0 1 9.3-13l25.11 17.94L126 208.24a8 8 0 0 1 5.82 9.7Z"></svg:path>`,
})
export class PhHandshakeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandshakeBoldIcon],svg[ph-handshake-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.88 108.11l-25.53-51a20 20 0 0 0-26.83-9L178.34 59.7L131.7 44.58a12.14 12.14 0 0 0-7.4 0L77.66 59.7L54.48 48.11a20 20 0 0 0-26.83 9l-25.53 51a20 20 0 0 0 9 26.83l26.67 13.34l51.18 37.41a12.2 12.2 0 0 0 4.03 1.93l62 16a12.3 12.3 0 0 0 3 .38a12 12 0 0 0 8.48-3.52l52.62-52.62l25.83-12.92a20 20 0 0 0 8.95-26.83m-58.12 29.15l-27.52-26a12 12 0 0 0-16.76.26c-9.66 9.74-25.06 16.81-40.81 9.55l38.19-37h22.72l25.81 51.63ZM47.32 71.37L60.59 78l-22 43.9l-13.27-6.63Zm107 107.3L101.23 165l-42-30.66L85.17 82.5L128 68.61l1.69.55L90 107.68l-.13.12a20 20 0 0 0 3.4 31c20.95 13.39 46 12.07 66.33-2.73l19.2 18.15Zm63-56.77l-22-43.9l13.27-6.63l21.95 43.9ZM118.55 219a12 12 0 0 1-14.62 8.62l-26.6-6.87a12 12 0 0 1-4.08-1.93L48.92 201a12 12 0 0 1 14.16-19.37l22.47 16.42l24.38 6.29a12 12 0 0 1 8.62 14.66"></svg:path>`,
})
export class PhHandshakeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandshakeDuotoneIcon],svg[ph-handshake-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 152l-40 40l-64-16l-56-40l32.68-65.37L128 56l55.32 14.63l.28 1.37H144l-45.66 44.29a8 8 0 0 0 1.38 12.42C117.23 139.9 141 139.13 160 120Z" opacity=".2"></svg:path><svg:path d="m254.3 107.91l-25.52-51.06a16 16 0 0 0-21.47-7.15l-24.87 12.43l-52.39-13.86a8.14 8.14 0 0 0-4.1 0L73.56 62.13L48.69 49.7a16 16 0 0 0-21.47 7.15L1.7 107.9a16 16 0 0 0 7.15 21.47l27 13.51l55.49 39.63a8.1 8.1 0 0 0 2.71 1.25l64 16a8 8 0 0 0 7.6-2.1l55.07-55.08l26.42-13.21a16 16 0 0 0 7.15-21.46Zm-54.89 33.37L165 113.72a8 8 0 0 0-10.68.61C136.51 132.27 116.66 130 104 122l43.24-42h31.81l27.21 54.41ZM41.53 64L62 74.22l-25.57 51.05L16 115.06Zm116 119.13l-58.11-14.52l-49.2-35.14l28-56L128 64.28l9.8 2.59l-45 43.68l-.08.09a16 16 0 0 0 2.72 24.81c20.56 13.13 45.37 11 64.91-5L188 152.66Zm62-57.87l-25.52-51L214.47 64L240 115.06Zm-87.75 92.67a8 8 0 0 1-7.75 6.06a8 8 0 0 1-1.95-.24l-41.67-10.42a7.9 7.9 0 0 1-2.71-1.25l-26.35-18.82a8 8 0 0 1 9.3-13l25.11 17.94L126 208.24a8 8 0 0 1 5.82 9.7Z"></svg:path></svg:g>`,
})
export class PhHandshakeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandshakeFillIcon],svg[ph-handshake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m254.3 107.91l-25.52-51.06a16 16 0 0 0-21.47-7.15l-24.87 12.43l-52.39-13.86a8.14 8.14 0 0 0-4.1 0L73.56 62.13L48.69 49.7a16 16 0 0 0-21.47 7.15L1.7 107.9a16 16 0 0 0 7.15 21.47l27 13.51l55.49 39.63a8.1 8.1 0 0 0 2.71 1.25l64 16a8 8 0 0 0 7.6-2.1l40-40l15.08-15.08l26.42-13.21a16 16 0 0 0 7.15-21.46m-54.89 33.37L165 113.72a8 8 0 0 0-10.68.61C136.51 132.27 116.66 130 104 122l43.24-42h31.81l27.21 54.41Zm-41.87 41.86l-58.12-14.53l-49.2-35.14l28-56L128 64.28l9.8 2.59l-45 43.68l-.08.09a16 16 0 0 0 2.72 24.81c20.56 13.13 45.37 11 64.91-5L188 152.66Zm-25.72 34.8a8 8 0 0 1-7.75 6.06a8 8 0 0 1-1.95-.24l-41.71-10.43a7.9 7.9 0 0 1-2.71-1.25l-26.35-18.82a8 8 0 0 1 9.3-13l25.11 17.94L126 208.24a8 8 0 0 1 5.82 9.7"></svg:path>`,
})
export class PhHandshakeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandshakeLightIcon],svg[ph-handshake-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.51 108.8L227 57.75a14 14 0 0 0-18.78-6.27l-25.56 12.78l-53.13-14.06a6.1 6.1 0 0 0-3.06 0L73.34 64.26L47.79 51.48A14 14 0 0 0 29 57.75L3.49 108.8a14 14 0 0 0 6.26 18.78l27.15 13.58l55.61 39.72a6 6 0 0 0 2 .94l64 16a6 6 0 0 0 1.49.18a6 6 0 0 0 4.24-1.76l55.31-55.31l26.7-13.35a14 14 0 0 0 6.26-18.78m-53 35.16l-35.8-28.68a6 6 0 0 0-8 .45c-18.65 18.79-39.5 16.42-52.79 7.92a2 2 0 0 1-.94-1.5a1.9 1.9 0 0 1 .51-1.55L146.43 78h33.86l28.41 56.82Zm-185.4-28.27a2 2 0 0 1 .11-1.52l25.52-51.06a2 2 0 0 1 1.8-1.1a2 2 0 0 1 .89.21l22.21 11.1L37.32 128l-22.21-11.1a2 2 0 0 1-1-1.21m144.05 69.67l-59.6-14.9l-50.9-36.36l29.18-58.35L128 62.21l14.8 3.92a5.9 5.9 0 0 0-3 1.57l-45.7 44.35a14 14 0 0 0 2.39 21.72c20.22 12.92 44.75 10.49 63.8-5.89L191 152.5Zm83.73-69.67a2 2 0 0 1-1 1.16L218.68 128l-27.32-54.68l22.21-11.1a2 2 0 0 1 1.53-.11a2 2 0 0 1 1.16 1l25.52 51.06a2 2 0 0 1 .11 1.52m-112 101.76a6 6 0 0 1-7.27 4.37l-41.73-10.43a5.9 5.9 0 0 1-2-.94l-26.37-18.81a6 6 0 1 1 7-9.77L84.91 200l40.61 10.15a6 6 0 0 1 4.36 7.3Z"></svg:path>`,
})
export class PhHandshakeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandshakeThinIcon],svg[ph-handshake-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.73 109.69l-25.53-51a12 12 0 0 0-16.1-5.37l-26.22 13.06L129 52.14a3.9 3.9 0 0 0-2 0L73.12 66.38L46.9 53.27a12 12 0 0 0-16.1 5.37L5.27 109.69a12 12 0 0 0 5.37 16.1l27.29 13.65l55.75 39.82a3.9 3.9 0 0 0 1.35.62l64 16a4 4 0 0 0 3.8-1l55.54-55.54l27-13.5a12 12 0 0 0 5.37-16.1Zm-51 36.95l-37.2-29.8a4 4 0 0 0-5.34.3c-19.49 19.64-41.34 17.11-55.29 8.2a4.07 4.07 0 0 1-1.85-3a3.91 3.91 0 0 1 1.11-3.21L145.62 76h35.91l29.6 59.21ZM12.21 116.32a4 4 0 0 1 .22-3L38 62.22A4 4 0 0 1 41.54 60a4 4 0 0 1 1.78.43l24 12l-29.11 58.21l-24-12a4 4 0 0 1-2-2.32m146.56 71.25L97.71 172.3l-52.6-37.57L75.45 74L128 60.14L157.72 68H144a4 4 0 0 0-2.79 1.13l-45.7 44.33a12 12 0 0 0 2.06 18.62c19.88 12.71 44.13 10 62.66-6.81L194 152.33Zm85-71.25a4 4 0 0 1-2 2.32l-24 12l-29.09-58.21l24-12a4 4 0 0 1 5.32 1.79l25.53 51.05a4 4 0 0 1 .26 3.05ZM127.94 217a4 4 0 0 1-3.88 3a4 4 0 0 1-1-.12l-41.68-10.43a4 4 0 0 1-1.36-.62L53.68 190a4 4 0 0 1 4.65-6.51l25.72 18.37l41 10.25a4 4 0 0 1 2.89 4.89"></svg:path>`,
})
export class PhHandshakeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDriveIcon],svg[ph-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 112H32V80h192zm-24-48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhHardDriveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDriveBoldIcon],svg[ph-hard-drive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m-4 112H36V84h184Zm-56-44a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhHardDriveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDriveDuotoneIcon],svg[ph-hard-drive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v96a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 64H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 112H32V80h192zm-24-48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhHardDriveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDriveFillIcon],svg[ph-hard-drive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-36 76a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhHardDriveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDriveLightIcon],svg[ph-hard-drive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66H32a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Zm-28-48a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhHardDriveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDriveThinIcon],svg[ph-hard-drive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68H32a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 108a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-32-48a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhHardDriveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesIcon],svg[ph-hard-drives-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H48v-48h160zm0-160H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H48V56h160zm-16-24a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 96a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhHardDrivesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesBoldIcon],svg[ph-hard-drives-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v56H52V60ZM52 196v-56h152v56ZM160 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 80a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhHardDrivesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesDuotoneIcon],svg[ph-hard-drives-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 152v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8m-8-104H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 136H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H48v-48h160zm0-160H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H48V56h160zm-16-24a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 96a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhHardDrivesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesFillIcon],svg[ph-hard-drives-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-28 52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m28 44H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m-28 52a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhHardDrivesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesLightIcon],svg[ph-hard-drives-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 138H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-158H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-20-24a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 96a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhHardDrivesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesThinIcon],svg[ph-hard-drives-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-156H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-24 72a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0-96a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhHardDrivesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardHatIcon],svg[ph-hard-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152v-16a96.37 96.37 0 0 0-64-90.51V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v5.49A96.37 96.37 0 0 0 32 136v16a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m-16-16v16h-48V62.67A80.36 80.36 0 0 1 208 136m-64-96v112h-32V40Zm-96 96a80.36 80.36 0 0 1 48-73.33V152H48Zm176 56H32v-24h192z"></svg:path>`,
})
export class PhHardHatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardHatBoldIcon],svg[ph-hard-hat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 148.4V136a100.41 100.41 0 0 0-64-93.3V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v2.7A100.41 100.41 0 0 0 28 136v12.4A20 20 0 0 0 12 168v24a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-24a20 20 0 0 0-16-19.6M204 136v12h-40V69.07A76.35 76.35 0 0 1 204 136m-64-92v104h-24V44ZM92 69.07V148H52v-12a76.35 76.35 0 0 1 40-66.93M220 188H36v-16h184Z"></svg:path>`,
})
export class PhHardHatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardHatDuotoneIcon],svg[ph-hard-hat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 51.31V160H40v-24a88 88 0 0 1 64-84.69m48 0V160h64v-24a88 88 0 0 0-64-84.69" opacity=".2"></svg:path><svg:path d="M224 152v-16a96.37 96.37 0 0 0-64-90.51V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v5.49A96.37 96.37 0 0 0 32 136v16a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m-16-16v16h-48V62.67A80.36 80.36 0 0 1 208 136m-64-96v112h-32V40Zm-96 96a80.36 80.36 0 0 1 48-73.33V152H48Zm176 56H32v-24h192z"></svg:path></svg:g>`,
})
export class PhHardHatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardHatFillIcon],svg[ph-hard-hat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 152h-48V40a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm72 16H32a16 16 0 0 0-16 16v8a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-8a16 16 0 0 0-16-16m0-20v-12a96.44 96.44 0 0 0-50.11-84.31a4 4 0 0 0-5.89 3.53V152h52a4 4 0 0 0 4-4m-188 4h52V55.22a4 4 0 0 0-5.89-3.53A96.44 96.44 0 0 0 32 136v12a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhHardHatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardHatLightIcon],svg[ph-hard-hat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 154h-2v-18a94.37 94.37 0 0 0-64-89.1V40a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v6.9A94.37 94.37 0 0 0 34 136v18h-2a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m-14-18v18h-52V59.68A82.33 82.33 0 0 1 210 136m-98-98h32a2 2 0 0 1 2 2v114h-36V40a2 2 0 0 1 2-2m-66 98a82.33 82.33 0 0 1 52-76.32V154H46Zm180 56a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhHardHatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHardHatThinIcon],svg[ph-hard-hat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 156h-4v-20a92.35 92.35 0 0 0-64-87.65V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v8.35A92.35 92.35 0 0 0 36 136v20h-4a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m-12-20v20h-56V56.8a84.33 84.33 0 0 1 56 79.2M112 36h32a4 4 0 0 1 4 4v116h-40V40a4 4 0 0 1 4-4M44 136a84.33 84.33 0 0 1 56-79.2V156H44Zm184 56a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhHardHatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashIcon],svg[ph-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88h-48.6l8.47-46.57a8 8 0 0 0-15.74-2.86l-9 49.43H111.4l8.47-46.57a8 8 0 0 0-15.74-2.86L95.14 88H48a8 8 0 0 0 0 16h44.23l-8.73 48H32a8 8 0 0 0 0 16h48.6l-8.47 46.57a8 8 0 0 0 6.44 9.3A8 8 0 0 0 80 224a8 8 0 0 0 7.86-6.57l9-49.43h47.74l-8.47 46.57a8 8 0 0 0 6.44 9.3a8 8 0 0 0 1.43.13a8 8 0 0 0 7.86-6.57l9-49.43H208a8 8 0 0 0 0-16h-44.23l8.73-48H224a8 8 0 0 0 0-16m-76.5 64H99.77l8.73-48h47.73Z"></svg:path>`,
})
export class PhHashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashBoldIcon],svg[ph-hash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 84h-43.8l7.61-41.85a12 12 0 0 0-23.62-4.3L155.8 84h-39.6l7.61-41.85a12 12 0 1 0-23.62-4.3L91.8 84H48a12 12 0 0 0 0 24h39.44l-7.27 40H32a12 12 0 0 0 0 24h43.8l-7.61 41.85a12 12 0 0 0 9.66 14A11.4 11.4 0 0 0 80 228a12 12 0 0 0 11.8-9.86l8.4-46.14h39.6l-7.61 41.85a12 12 0 0 0 9.66 14a11.4 11.4 0 0 0 2.16.2a12 12 0 0 0 11.8-9.86L164.2 172H208a12 12 0 0 0 0-24h-39.44l7.27-40H224a12 12 0 0 0 0-24m-79.83 64h-39.61l7.27-40h39.61Z"></svg:path>`,
})
export class PhHashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashDuotoneIcon],svg[ph-hash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m165.82 96l-11.64 64h-64l11.64-64Z" opacity=".2"></svg:path><svg:path d="M224 88h-48.6l8.47-46.57a8 8 0 0 0-15.74-2.86l-9 49.43H111.4l8.47-46.57a8 8 0 0 0-15.74-2.86L95.14 88H48a8 8 0 0 0 0 16h44.23l-8.73 48H32a8 8 0 0 0 0 16h48.6l-8.47 46.57a8 8 0 0 0 6.44 9.3A8 8 0 0 0 80 224a8 8 0 0 0 7.86-6.57l9-49.43h47.74l-8.47 46.57a8 8 0 0 0 6.44 9.3a8 8 0 0 0 1.43.13a8 8 0 0 0 7.86-6.57l9-49.43H208a8 8 0 0 0 0-16h-44.23l8.73-48H224a8 8 0 0 0 0-16m-76.5 64H99.77l8.73-48h47.73Z"></svg:path></svg:g>`,
})
export class PhHashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashFillIcon],svg[ph-hash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.25 112h31.5l-8 32h-31.5ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 56a8 8 0 0 0-8-8h-31.75l7.51-30.06a8 8 0 0 0-15.52-3.88L151.75 96h-31.5l7.51-30.06a8 8 0 0 0-15.52-3.88L103.75 96H64a8 8 0 0 0 0 16h35.75l-8 32H56a8 8 0 0 0 0 16h31.75l-7.51 30.06a8 8 0 0 0 5.82 9.7a8 8 0 0 0 2 .24a8 8 0 0 0 7.75-6.06l8.44-33.94h31.5l-7.51 30.06a8 8 0 0 0 5.82 9.7a8 8 0 0 0 1.94.24a8 8 0 0 0 7.75-6.06l8.5-33.94H192a8 8 0 0 0 0-16h-35.75l8-32H200a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhHashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashLightIcon],svg[ph-hash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 90h-51l8.89-48.93a6 6 0 1 0-11.8-2.14L160.81 90H109l8.89-48.93a6 6 0 0 0-11.8-2.14L96.81 90H48a6 6 0 0 0 0 12h46.63l-9.46 52H32a6 6 0 0 0 0 12h51l-8.9 48.93a6 6 0 0 0 4.83 7A5.6 5.6 0 0 0 80 222a6 6 0 0 0 5.89-4.93l9.3-51.07H147l-8.89 48.93a6 6 0 0 0 4.83 7a5.6 5.6 0 0 0 1.08.1a6 6 0 0 0 5.89-4.93l9.28-51.1H208a6 6 0 0 0 0-12h-46.63l9.46-52H224a6 6 0 0 0 0-12m-74.83 64h-51.8l9.46-52h51.8Z"></svg:path>`,
})
export class PhHashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashStraightIcon],svg[ph-hash-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152h-48v-48h48a8 8 0 0 0 0-16h-48V40a8 8 0 0 0-16 0v48h-48V40a8 8 0 0 0-16 0v48H40a8 8 0 0 0 0 16h48v48H40a8 8 0 0 0 0 16h48v48a8 8 0 0 0 16 0v-48h48v48a8 8 0 0 0 16 0v-48h48a8 8 0 0 0 0-16m-112 0v-48h48v48Z"></svg:path>`,
})
export class PhHashStraightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashStraightBoldIcon],svg[ph-hash-straight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 148h-44v-40h44a12 12 0 0 0 0-24h-44V40a12 12 0 0 0-24 0v44h-40V40a12 12 0 0 0-24 0v44H40a12 12 0 0 0 0 24h44v40H40a12 12 0 0 0 0 24h44v44a12 12 0 0 0 24 0v-44h40v44a12 12 0 0 0 24 0v-44h44a12 12 0 0 0 0-24m-108 0v-40h40v40Z"></svg:path>`,
})
export class PhHashStraightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashStraightDuotoneIcon],svg[ph-hash-straight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 96v64H96V96Z" opacity=".2"></svg:path><svg:path d="M216 152h-48v-48h48a8 8 0 0 0 0-16h-48V40a8 8 0 0 0-16 0v48h-48V40a8 8 0 0 0-16 0v48H40a8 8 0 0 0 0 16h48v48H40a8 8 0 0 0 0 16h48v48a8 8 0 0 0 16 0v-48h48v48a8 8 0 0 0 16 0v-48h48a8 8 0 0 0 0-16m-112 0v-48h48v48Z"></svg:path></svg:g>`,
})
export class PhHashStraightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashStraightFillIcon],svg[ph-hash-straight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 112h32v32h-32Zm112-64v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-64 96v-32h32a8 8 0 0 0 0-16h-32V64a8 8 0 0 0-16 0v32h-32V64a8 8 0 0 0-16 0v32H64a8 8 0 0 0 0 16h32v32H64a8 8 0 0 0 0 16h32v32a8 8 0 0 0 16 0v-32h32v32a8 8 0 0 0 16 0v-32h32a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhHashStraightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashStraightLightIcon],svg[ph-hash-straight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 154h-50v-52h50a6 6 0 0 0 0-12h-50V40a6 6 0 0 0-12 0v50h-52V40a6 6 0 0 0-12 0v50H40a6 6 0 0 0 0 12h50v52H40a6 6 0 0 0 0 12h50v50a6 6 0 0 0 12 0v-50h52v50a6 6 0 0 0 12 0v-50h50a6 6 0 0 0 0-12m-114 0v-52h52v52Z"></svg:path>`,
})
export class PhHashStraightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashStraightThinIcon],svg[ph-hash-straight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 156h-52v-56h52a4 4 0 0 0 0-8h-52V40a4 4 0 0 0-8 0v52h-56V40a4 4 0 0 0-8 0v52H40a4 4 0 0 0 0 8h52v56H40a4 4 0 0 0 0 8h52v52a4 4 0 0 0 8 0v-52h56v52a4 4 0 0 0 8 0v-52h52a4 4 0 0 0 0-8m-116 0v-56h56v56Z"></svg:path>`,
})
export class PhHashStraightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHashThinIcon],svg[ph-hash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 92h-53.39l9.33-51.28a4 4 0 1 0-7.88-1.44L162.48 92h-55.87l9.33-51.28a4 4 0 1 0-7.88-1.44L98.48 92H48a4 4 0 0 0 0 8h49l-10.16 56H32a4 4 0 0 0 0 8h53.39l-9.33 51.28a4 4 0 0 0 3.22 4.65a3.7 3.7 0 0 0 .72.07a4 4 0 0 0 3.94-3.29L93.52 164h55.87l-9.33 51.28a4 4 0 0 0 3.22 4.65a3.7 3.7 0 0 0 .72.07a4 4 0 0 0 3.94-3.29l9.58-52.71H208a4 4 0 0 0 0-8h-49l10.19-56H224a4 4 0 0 0 0-8m-73.16 64H95l10.19-56H161Z"></svg:path>`,
})
export class PhHashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadCircuitIcon],svg[ph-head-circuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhHeadCircuitIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadCircuitBoldIcon],svg[ph-head-circuit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.91 230.51a12 12 0 0 1-10.42 13.4a13 13 0 0 1-1.49.09a12 12 0 0 1-11.89-10.51l-8-64a12 12 0 0 1 4.7-11.08a68.26 68.26 0 0 0 27.19-56c0-.81-.07-1.6-.11-2.4h-14.27l-23.1 27.72A23.7 23.7 0 0 1 168 136a24.07 24.07 0 1 1-19.92-23.64l26.7-32A12 12 0 0 1 184 76h13.91a68.19 68.19 0 0 0-58.22-39.9q-1.84-.1-3.69-.1v19.23a24 24 0 1 1-24 0V40.34A68.11 68.11 0 0 0 68 104a12 12 0 0 1-1.36 5.54l-21.13 40.61L69 160.9a12 12 0 0 1 7 10.91V204h44a12 12 0 0 1 0 24H72a20 20 0 0 1-20-20v-28.49l-20.57-9.42a3 3 0 0 1-.38-.18a20 20 0 0 1-9.43-25.76a8 8 0 0 1 .38-.81l22-42.37a92 92 0 0 1 97-88.84c47.7 2.51 85.93 41.92 87 89.71a92.33 92.33 0 0 1-31.25 71.26Z"></svg:path>`,
})
export class PhHeadCircuitBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadCircuitDuotoneIcon],svg[ph-head-circuit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215.93 100.72A80 80 0 0 0 56 104l-23.35 44.87a8 8 0 0 0 3.77 10.31L64 171.81V208a8 8 0 0 0 8 8h48a16 16 0 0 0 16 16h56l-8-64a79.86 79.86 0 0 0 31.93-67.28m-103.8-26.64a16 16 0 1 1 13.79 13.79a16 16 0 0 1-13.79-13.79m34 77.79a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.84 13.79Z" opacity=".2"></svg:path><svg:path d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhHeadCircuitDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadCircuitFillIcon],svg[ph-head-circuit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 72a8 8 0 1 1 8 8a8 8 0 0 1-8-8m24 64a8 8 0 1 0 8-8a8 8 0 0 0-8 8m48.5 35.47a88.32 88.32 0 0 0 31.5-69.58q0-1.1-.09-2.19a4 4 0 0 0-4-3.75h-24.16l-23.13 27.75a24 24 0 1 1-12.28-10.25l25.51-30.62A8 8 0 0 1 192 80h23.14a4 4 0 0 0 3.77-5.35C207.27 42 176.86 18 140.74 16.08h-.59a4 4 0 0 0-4.15 4v29.25a24 24 0 1 1-16 0v-27a4 4 0 0 0-4.89-3.91A88.16 88.16 0 0 0 48 102l-22.45 43.14l-.22.45a16 16 0 0 0 7.51 20.7l.25.12L56 176.9v31a16 16 0 0 0 16 16h40v8a8 8 0 0 0 8 8h71.77a8.4 8.4 0 0 0 4.06-1a8 8 0 0 0 4.11-8Z"></svg:path>`,
})
export class PhHeadCircuitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadCircuitLightIcon],svg[ph-head-circuit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190.37 170.62A86.27 86.27 0 0 0 222 102c-1-44.68-36.76-81.51-81.34-83.86A86 86 0 0 0 50 102.51l-22.69 43.6c-.07.13-.13.26-.19.4a14 14 0 0 0 6.61 18l.18.09l24.08 11V208a14 14 0 0 0 14 14h48a6 6 0 0 0 0-12H72a2 2 0 0 1-2-2v-36.19a6 6 0 0 0-3.5-5.46L39 153.78a2 2 0 0 1-.93-2.4l23.21-44.61A6 6 0 0 0 62 104a74.05 74.05 0 0 1 60-72.68v19.52a22 22 0 1 0 12 0V30.05c2-.05 4-.05 6 .06A74.29 74.29 0 0 1 206.63 82H184a6 6 0 0 0-4.61 2.16l-26.45 31.74a22.06 22.06 0 1 0 9.21 7.69L186.81 94h22.5a72 72 0 0 1 .67 8.26a74.24 74.24 0 0 1-29.58 60.94a6 6 0 0 0-2.35 5.54l8 64A6 6 0 0 0 192 238a6 6 0 0 0 .75-.05a6 6 0 0 0 5.21-6.7ZM138 72a10 10 0 1 1-10-10a10 10 0 0 1 10 10m6 74a10 10 0 1 1 10-10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhHeadCircuitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadCircuitThinIcon],svg[ph-head-circuit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.25 169.77A84.3 84.3 0 0 0 220 102c-1-43.64-35.9-79.62-79.45-81.91A84 84 0 0 0 52 103l-22.9 44c-.05.09-.09.18-.13.27a12 12 0 0 0 5.66 15.46l.13.06L60 174.38V208a12 12 0 0 0 12 12h48a4 4 0 0 0 0-8H72a4 4 0 0 1-4-4v-36.19a4 4 0 0 0-2.34-3.64l-27.5-12.59a4 4 0 0 1-1.88-5l23.27-44.72A4.1 4.1 0 0 0 60 104a76 76 0 0 1 64-75v23.4a20 20 0 1 0 8 0V28.11a78 78 0 0 1 8.11 0c33.13 1.74 60.72 25 69.2 55.89H184a4 4 0 0 0-3.07 1.44l-27.46 33a20.12 20.12 0 1 0 6.13 5.13L185.87 92H211a75.9 75.9 0 0 1-29.44 72.8a4 4 0 0 0-1.57 3.7l8 64a4 4 0 0 0 4 3.5h.5a4 4 0 0 0 3.51-4.5ZM140 72a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4 76a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhHeadCircuitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadlightsIcon],svg[ph-headlights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16h-72a8 8 0 0 1-8-8m80 88h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0-64h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 32h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m-96-72v128a16 16 0 0 1-16 16H88a80 80 0 0 1-80-80.61C8.33 83.62 44.62 48 88.9 48H128a16 16 0 0 1 16 16m-16 0H88.9C53.38 64 24.26 92.49 24 127.51A64 64 0 0 0 88 192h40Z"></svg:path>`,
})
export class PhHeadlightsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadlightsBoldIcon],svg[ph-headlights-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 80a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m76 84h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m0-48h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m-92-52v128a20 20 0 0 1-20 20H88a84 84 0 0 1-84-84.63C4.34 81.4 42.43 44 88.9 44H128a20 20 0 0 1 20 20m-24 4H88.9C55.57 68 28.25 94.71 28 127.54A60 60 0 0 0 88 188h36Z"></svg:path>`,
})
export class PhHeadlightsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadlightsDuotoneIcon],svg[ph-headlights-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 64v128a8 8 0 0 1-8 8H88a72 72 0 0 1-72-72.55C16.3 87.75 49.2 56 88.9 56H128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M160 80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16h-72a8 8 0 0 1-8-8m80 88h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0-64h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 32h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m-96-72v128a16 16 0 0 1-16 16H88a80 80 0 0 1-80-80.61C8.33 83.62 44.62 48 88.9 48H128a16 16 0 0 1 16 16m-16 0H88.9C53.38 64 24.26 92.49 24 127.51A64 64 0 0 0 88 192h40Z"></svg:path></svg:g>`,
})
export class PhHeadlightsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadlightsFillIcon],svg[ph-headlights-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16h-72a8 8 0 0 1-8-8m80 88h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0-64h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 32h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16M128 48H88.9C44.62 48 8.33 83.62 8 127.39A80 80 0 0 0 88 208h40a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhHeadlightsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadlightsLightIcon],svg[ph-headlights-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162 80a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12h-72a6 6 0 0 1-6-6m78 90h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0-64h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 32h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m-98-74v128a14 14 0 0 1-14 14H88a78 78 0 0 1-78-78.59C10.32 84.73 45.71 50 88.9 50H128a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H88.9C52.28 62 22.27 91.38 22 127.5A66 66 0 0 0 88 194h40a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhHeadlightsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadlightsThinIcon],svg[ph-headlights-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 80a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8h-72a4 4 0 0 1-4-4m76 92h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0-64h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 32h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8M140 64v128a12 12 0 0 1-12 12H88a76 76 0 0 1-76-76.58C12.31 85.83 46.81 52 88.9 52H128a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H88.9C51.19 60 20.28 90.27 20 127.48A68 68 0 0 0 88 196h40a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhHeadlightsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadphonesIcon],svg[ph-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.89 54.66A103.43 103.43 0 0 0 128.79 24H128A104 104 0 0 0 24 128v56a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-40a24 24 0 0 0-24-24H40.36A88 88 0 0 1 128 40h.67a87.71 87.71 0 0 1 87 80H192a24 24 0 0 0-24 24v40a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-56a103.4 103.4 0 0 0-30.11-73.34M64 136a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48Zm152 48a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h24Z"></svg:path>`,
})
export class PhHeadphonesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadphonesBoldIcon],svg[ph-headphones-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.73 51.85A108.07 108.07 0 0 0 20 128v56a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-40a28 28 0 0 0-28-28H44.84A84.05 84.05 0 0 1 128 44h.64a83.7 83.7 0 0 1 82.52 72H192a28 28 0 0 0-28 28v40a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-56a107.34 107.34 0 0 0-31.27-76.15M64 140a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-44Zm148 44a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h20Z"></svg:path>`,
})
export class PhHeadphonesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadphonesDuotoneIcon],svg[ph-headphones-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 144v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56h32a16 16 0 0 1 16 16m112-16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-56Z" opacity=".2"></svg:path><svg:path d="M201.89 54.66A104.08 104.08 0 0 0 24 128v56a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-40a24 24 0 0 0-24-24H40.36A88 88 0 0 1 128 40h.67a87.71 87.71 0 0 1 87 80H192a24 24 0 0 0-24 24v40a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-56a103.4 103.4 0 0 0-30.11-73.34M64 136a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48Zm152 48a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h24Z"></svg:path></svg:g>`,
})
export class PhHeadphonesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadphonesFillIcon],svg[ph-headphones-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128v56a24 24 0 0 1-24 24h-16a24 24 0 0 1-24-24v-40a24 24 0 0 1 24-24h23.65a87.71 87.71 0 0 0-87-80H128a88 88 0 0 0-87.64 80H64a24 24 0 0 1 24 24v40a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24v-56a104.11 104.11 0 0 1 177.89-73.34A103.4 103.4 0 0 1 232 128"></svg:path>`,
})
export class PhHeadphonesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadphonesLightIcon],svg[ph-headphones-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.47 56.07A101.37 101.37 0 0 0 128.77 26H128A102 102 0 0 0 26 128v56a22 22 0 0 0 22 22h16a22 22 0 0 0 22-22v-40a22 22 0 0 0-22-22H38.2A90.12 90.12 0 0 1 192 64.52A89.4 89.4 0 0 1 217.81 122H192a22 22 0 0 0-22 22v40a22 22 0 0 0 22 22h16a22 22 0 0 0 22-22v-56a101.44 101.44 0 0 0-29.53-71.93M64 134a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10v-50Zm154 50a10 10 0 0 1-10 10h-16a10 10 0 0 1-10-10v-40a10 10 0 0 1 10-10h26Z"></svg:path>`,
})
export class PhHeadphonesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadphonesThinIcon],svg[ph-headphones-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.05 57.48A100.07 100.07 0 0 0 28 128v56a20 20 0 0 0 20 20h16a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20H36.08A92 92 0 0 1 128 36h.7a91.75 91.75 0 0 1 91.22 88H192a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h16a20 20 0 0 0 20-20v-56a99.43 99.43 0 0 0-28.95-70.52M64 132a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-52Zm156 52a12 12 0 0 1-12 12h-16a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h28Z"></svg:path>`,
})
export class PhHeadphonesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadsetIcon],svg[ph-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.89 54.66A103.43 103.43 0 0 0 128.79 24H128A104 104 0 0 0 24 128v56a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-40a24 24 0 0 0-24-24H40.36a88.12 88.12 0 0 1 150.18-54.07A87.4 87.4 0 0 1 215.65 120H192a24 24 0 0 0-24 24v40a24 24 0 0 0 24 24h24a24 24 0 0 1-24 24h-56a8 8 0 0 0 0 16h56a40 40 0 0 0 40-40v-80a103.4 103.4 0 0 0-30.11-73.34M64 136a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48Zm128 56a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h24v56Z"></svg:path>`,
})
export class PhHeadsetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadsetBoldIcon],svg[ph-headset-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.73 51.85A108.07 108.07 0 0 0 20 128v56a28 28 0 0 0 28 28h16a28 28 0 0 0 28-28v-40a28 28 0 0 0-28-28H44.84A84.05 84.05 0 0 1 128 44h.64a83.7 83.7 0 0 1 82.52 72H192a28 28 0 0 0-28 28v40a28 28 0 0 0 28 28h19.6a20 20 0 0 1-19.6 16h-56a12 12 0 0 0 0 24h56a44.05 44.05 0 0 0 44-44v-80a107.34 107.34 0 0 0-31.27-76.15M64 140a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-44Zm124 44v-40a4 4 0 0 1 4-4h20v48h-20a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhHeadsetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadsetDuotoneIcon],svg[ph-headset-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 144v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56h32a16 16 0 0 1 16 16m112-16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h32v-72Z" opacity=".2"></svg:path><svg:path d="M201.89 54.66A104.08 104.08 0 0 0 24 128v56a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24v-40a24 24 0 0 0-24-24H40.36a88.12 88.12 0 0 1 150.18-54.07A87.4 87.4 0 0 1 215.65 120H192a24 24 0 0 0-24 24v40a24 24 0 0 0 24 24h24a24 24 0 0 1-24 24h-56a8 8 0 0 0 0 16h56a40 40 0 0 0 40-40v-80a103.4 103.4 0 0 0-30.11-73.34M64 136a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48Zm128 56a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h24v56Z"></svg:path></svg:g>`,
})
export class PhHeadsetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadsetFillIcon],svg[ph-headset-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128v80a40 40 0 0 1-40 40h-56a8 8 0 0 1 0-16h56a24 24 0 0 0 24-24h-24a24 24 0 0 1-24-24v-40a24 24 0 0 1 24-24h23.65A88 88 0 0 0 66 65.54A87.3 87.3 0 0 0 40.36 120H64a24 24 0 0 1 24 24v40a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24v-56a104.11 104.11 0 0 1 177.89-73.34A103.4 103.4 0 0 1 232 128"></svg:path>`,
})
export class PhHeadsetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadsetLightIcon],svg[ph-headset-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.47 56.07A101.37 101.37 0 0 0 128.77 26H128A102 102 0 0 0 26 128v56a22 22 0 0 0 22 22h16a22 22 0 0 0 22-22v-40a22 22 0 0 0-22-22H38.2A90 90 0 0 1 128 38h.68a89.71 89.71 0 0 1 89.13 84H192a22 22 0 0 0-22 22v40a22 22 0 0 0 22 22h26v2a26 26 0 0 1-26 26h-56a6 6 0 0 0 0 12h56a38 38 0 0 0 38-38v-80a101.44 101.44 0 0 0-29.53-71.93M64 134a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10v-50Zm118 50v-40a10 10 0 0 1 10-10h26v60h-26a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhHeadsetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeadsetThinIcon],svg[ph-headset-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.05 57.48A100.07 100.07 0 0 0 28 128v56a20 20 0 0 0 20 20h16a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20H36.08A92 92 0 0 1 128 36h.7a91.75 91.75 0 0 1 91.22 88H192a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h28v4a28 28 0 0 1-28 28h-56a4 4 0 0 0 0 8h56a36 36 0 0 0 36-36v-80a99.44 99.44 0 0 0-28.95-70.52M64 132a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-52Zm116 52v-40a12 12 0 0 1 12-12h28v64h-28a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhHeadsetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartIcon],svg[ph-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"></svg:path>`,
})
export class PhHeartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartBoldIcon],svg[ph-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 36c-20.09 0-37.92 7.93-50 21.56C115.92 43.93 98.09 36 78 36a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 232.14 244 174.34 244 102a66.08 66.08 0 0 0-66-66m-5.49 142.36a328.7 328.7 0 0 1-44.51 31.8a328.7 328.7 0 0 1-44.51-31.8C61.82 159.77 36 131.42 36 102a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 69.4 160.2 60 178 60a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36"></svg:path>`,
})
export class PhHeartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartBreakIcon],svg[ph-heart-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 40a61.6 61.6 0 0 0-43.84 18.16L128 64.32l-6.16-6.16A62 62 0 0 0 16 102c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46 46 0 0 1 78.53-32.53l6.16 6.16L106.34 86a8 8 0 0 0 0 11.31l24.53 24.53l-16.53 16.52a8 8 0 0 0 11.32 11.32l22.18-22.19a8 8 0 0 0 0-11.31l-24.53-24.55l22.16-22.16A46 46 0 0 1 224 102c0 53.61-77.76 102.15-96 112.8"></svg:path>`,
})
export class PhHeartBreakIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartBreakBoldIcon],svg[ph-heart-break-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 36a65.6 65.6 0 0 0-46.67 19.33L128 58.66l-3.33-3.33A66 66 0 0 0 12 102c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 232.14 244 174.34 244 102a66.08 66.08 0 0 0-66-66m-5.49 142.36a328.7 328.7 0 0 1-44.51 31.8a328.7 328.7 0 0 1-44.51-31.8C61.82 159.77 36 131.42 36 102a42 42 0 0 1 71.7-29.7l3.3 3.33l-7.52 7.52a12 12 0 0 0 0 17l21.7 21.7l-13.7 13.69a12 12 0 1 0 17 17l22.18-22.19a12 12 0 0 0 0-17L129 91.63l19.3-19.33A42 42 0 0 1 220 102c0 29.42-25.82 57.77-47.49 76.36"></svg:path>`,
})
export class PhHeartBreakBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartBreakDuotoneIcon],svg[ph-heart-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 102c0 66-104 122-104 122S24 168 24 102a54 54 0 0 1 92.18-38.18L128 75.63l11.82-11.81A54 54 0 0 1 232 102" opacity=".2"></svg:path><svg:path d="M178 40a61.6 61.6 0 0 0-43.84 18.16L128 64.32l-6.16-6.16A62 62 0 0 0 16 102c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46 46 0 0 1 78.53-32.53l6.16 6.16L106.34 86a8 8 0 0 0 0 11.31l24.53 24.53l-16.53 16.52a8 8 0 0 0 11.32 11.32l22.18-22.19a8 8 0 0 0 0-11.31l-24.53-24.55l22.16-22.16A46 46 0 0 1 224 102c0 53.61-77.76 102.15-96 112.8"></svg:path></svg:g>`,
})
export class PhHeartBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartBreakFillIcon],svg[ph-heart-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.81 107.5c-5.19 67.42-103.7 121.23-108 123.54a8 8 0 0 1-7.58 0C119.8 228.67 16 172 16 102a62 62 0 0 1 96.47-51.55a4 4 0 0 1 .61 6.17L99.72 70a8 8 0 0 0 0 11.31l32.53 32.53L111 135a8 8 0 1 0 11.31 11.31l26.88-26.87a8 8 0 0 0 0-11.31l-32.49-32.5l17.47-17.47A61.63 61.63 0 0 1 178.41 40c36.32.23 64.18 31.29 61.4 67.5"></svg:path>`,
})
export class PhHeartBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartBreakLightIcon],svg[ph-heart-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 42a59.63 59.63 0 0 0-42.43 17.57L128 67.15l-7.57-7.58A60 60 0 0 0 18 102c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48 48 0 0 1 81.94-33.94l7.57 7.57l-11.75 11.76a6 6 0 0 0 0 8.49l25.94 25.94l-17.94 17.94a6 6 0 0 0 8.48 8.48l22.19-22.18a6 6 0 0 0 0-8.49l-25.94-25.94l23.57-23.57A48 48 0 0 1 226 102c0 55.72-81.59 105.64-98 115.11"></svg:path>`,
})
export class PhHeartBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartBreakThinIcon],svg[ph-heart-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 44a57.6 57.6 0 0 0-41 17l-9 9l-9-9a58 58 0 0 0-99 41c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58m-50 175.42c-14-8-100-59.35-100-117.42a50 50 0 0 1 85.36-35.36l9 9l-13.19 13.16a4 4 0 0 0 0 5.66l27.36 27.36l-19.36 19.35a4 4 0 0 0 5.66 5.66L145 124.64a4 4 0 0 0 0-5.65l-27.34-27.36l13.16-13.16l11.8-11.81A50 50 0 0 1 228 102c0 58-86 109.46-100 117.42"></svg:path>`,
})
export class PhHeartBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartDuotoneIcon],svg[ph-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 102c0 66-104 122-104 122S24 168 24 102a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54" opacity=".2"></svg:path><svg:path d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"></svg:path></svg:g>`,
})
export class PhHeartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartFillIcon],svg[ph-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"></svg:path>`,
})
export class PhHeartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartHalfIcon],svg[ph-heart-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.47 56.79a8 8 0 0 0-2.94-15.73C150.42 44.08 137 52.18 128 64c-11.26-15-29.36-24-50-24a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a7.93 7.93 0 0 0 7.58 0a332.6 332.6 0 0 0 41.09-27.22a8 8 0 1 0-9.76-12.67c-10.31 7.94-20 14.37-27.12 18.82V81.7c5.84-12.95 17.94-22 33.47-24.91M120 210c-26.42-16.59-88-60.29-88-108a46.06 46.06 0 0 1 46-46c18.91 0 34.86 9.78 42 25.64Zm112.55-106a9 9 0 0 1-.89 0a8 8 0 0 1-7.94-7.12a45.88 45.88 0 0 0-20.17-33.14a8 8 0 1 1 8.9-13.29a61.83 61.83 0 0 1 27.17 44.67a8 8 0 0 1-7.07 8.88m-2.09 35.62c-5.67 11.37-13.94 23-24.59 34.49a8 8 0 1 1-11.74-10.86c9.61-10.4 17-20.75 22-30.77a8 8 0 1 1 14.31 7.14Z"></svg:path>`,
})
export class PhHeartHalfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartHalfBoldIcon],svg[ph-heart-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.21 60.72a12 12 0 0 0-4.42-23.59C150.5 40 137.49 47.2 128.08 57.66C116 44 98.14 36 78 36a66.08 66.08 0 0 0-66 66c0 31 18.91 63 56.2 94.87a342.7 342.7 0 0 0 54.11 37.7A12.1 12.1 0 0 0 128 236a11.9 11.9 0 0 0 5.68-1.46A340 340 0 0 0 175.32 207a12 12 0 0 0-14.64-19A334 334 0 0 1 140 202.68V82.55c5.43-11.32 16.31-19.23 30.21-21.83M116 202.66a319 319 0 0 1-32.51-24.3C61.82 159.77 36 131.42 36 102a42 42 0 0 1 42-42c17 0 31.35 8.57 38 22.52Zm117-94.73a12 12 0 0 1-13.25-10.61a41.89 41.89 0 0 0-18.41-30.25a12 12 0 0 1 13.34-19.95a65.84 65.84 0 0 1 28.92 47.56a12 12 0 0 1-10.6 13.25m1 33.42c-5.84 11.72-14.33 23.63-25.23 35.43a12 12 0 0 1-17.62-16.29c9.36-10.13 16.55-20.17 21.38-29.84a12 12 0 1 1 21.47 10.7"></svg:path>`,
})
export class PhHeartHalfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartHalfDuotoneIcon],svg[ph-heart-half-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80v144S24 168 24 102a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32" opacity=".2"></svg:path><svg:path d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62M32 102a46.06 46.06 0 0 1 46-46c18.91 0 34.86 9.79 42 25.65V210c-26.41-16.56-88-60.22-88-108m104 108V81.65C143.14 65.79 159.09 56 178 56a46.06 46.06 0 0 1 46 46c0 47.71-61.58 91.41-88 108"></svg:path></svg:g>`,
})
export class PhHeartHalfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartHalfFillIcon],svg[ph-heart-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8V104a48 48 0 0 1 41.61-47.56A84 84 0 0 1 178 56a46.06 46.06 0 0 1 46 46c0 53.61-77.75 102.15-96 112.8"></svg:path>`,
})
export class PhHeartHalfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartHalfLightIcon],svg[ph-heart-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.1 54.82A6 6 0 1 0 166.9 43c-16.6 3.13-30.25 11.82-38.9 24.4C117.3 51.5 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a5.93 5.93 0 0 0 5.68 0a329.4 329.4 0 0 0 40.82-27a6 6 0 0 0-7.32-9.51A342 342 0 0 1 134 213.56V81.28c6-13.78 18.76-23.4 35.1-26.46M122 213.54C97.4 198.51 30 152.7 30 102a48.05 48.05 0 0 1 48-48c19.87 0 36.62 10.4 44 27.22ZM232.33 102a5 5 0 0 1-.67 0a6 6 0 0 1-5.95-5.34a47.89 47.89 0 0 0-21.05-34.58a6 6 0 1 1 6.68-10a59.85 59.85 0 0 1 26.29 43.23a6 6 0 0 1-5.3 6.69m-3.66 36.72c-5.58 11.2-13.75 22.65-24.26 34a6 6 0 0 1-8.82-8.15c9.75-10.54 17.27-21.05 22.35-31.24a6 6 0 1 1 10.73 5.36Z"></svg:path>`,
})
export class PhHeartHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartHalfThinIcon],svg[ph-heart-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.74 52.86a4 4 0 0 0-1.48-7.86c-17.17 3.21-31.07 12.57-39.26 26.12C118 54.21 99.46 44 78 44a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 1.9.48a4 4 0 0 0 1.89-.49a329 329 0 0 0 40.54-26.87a4 4 0 1 0-4.88-6.33A344 344 0 0 1 132 217.09V80.85c6.24-14.59 19.58-24.78 36.74-27.99M124 217.08c-21.73-13-96-61.16-96-115.08a50.06 50.06 0 0 1 50-50c20.83 0 38.39 11 46 28.8ZM232.11 100h-.44a4 4 0 0 1-4-3.56a49.88 49.88 0 0 0-21.92-36a4 4 0 0 1 4.44-6.65a57.88 57.88 0 0 1 25.43 41.79a4 4 0 0 1-3.51 4.42m-5.23 37.81c-5.5 11-13.55 22.32-23.94 33.56a4 4 0 0 1-5.88-5.43c9.88-10.68 17.5-21.35 22.66-31.71a4 4 0 1 1 7.16 3.58"></svg:path>`,
})
export class PhHeartHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartLightIcon],svg[ph-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"></svg:path>`,
})
export class PhHeartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightIcon],svg[ph-heart-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82m-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"></svg:path>`,
})
export class PhHeartStraightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBoldIcon],svg[ph-heart-straight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.84 54.13a62.07 62.07 0 0 0-87.52-.13L128 63.58L117.68 54a62 62 0 0 0-87.58 87.8l89.35 90.65a12 12 0 0 0 17.1 0l89.29-90.59a62 62 0 0 0 0-87.7Zm-17 70.79L128 206.9l-80.87-82.05a38 38 0 0 1 53.74-53.74c.1.1.2.2.31.29l18.64 17.36a12 12 0 0 0 16.36 0l18.64-17.36c.11-.09.21-.19.31-.29a38 38 0 1 1 53.68 53.81Z"></svg:path>`,
})
export class PhHeartStraightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBreakIcon],svg[ph-heart-straight-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 57a58.1 58.1 0 0 0-82-.06l-13 12.53l-13-12.56a58 58 0 0 0-82 82.05l89.37 90.66a8 8 0 0 0 11.4 0L223 139a58.09 58.09 0 0 0 0-82m-11.36 70.76L128 212.6l-83.71-84.92a42 42 0 1 1 59.41-59.4l.1.1l12.67 12.19l-10 9.65a8 8 0 0 0-.11 11.42L132.69 128l-10.35 10.35a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0 0-11.31l-26.24-26.27l28.78-27.71l.11-.1a42 42 0 1 1 59.37 59.44Z"></svg:path>`,
})
export class PhHeartStraightBreakIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBreakBoldIcon],svg[ph-heart-straight-break-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.84 54.16a62 62 0 0 0-87.6-.08L128 63.94l-10.24-9.86a62 62 0 0 0-87.66 87.7l89.35 90.64a12 12 0 0 0 17.1 0l89.29-90.58a62 62 0 0 0 0-87.68m-17 70.77l-80.81 82l-80.87-82a38 38 0 1 1 53.74-53.74l.16.16l9.67 9.31l-7 6.76a12 12 0 0 0-.17 17.13L127 128l-7.52 7.51a12 12 0 1 0 17 17l16-16a12 12 0 0 0 0-17l-23.35-23.35L155 71.29l.16-.16a38 38 0 1 1 53.68 53.8"></svg:path>`,
})
export class PhHeartStraightBreakBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBreakDuotoneIcon],svg[ph-heart-straight-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M217.36 133.36L128 224l-89.36-90.64a50 50 0 0 1 70.72-70.72L128 80l18.64-17.36a50 50 0 1 1 70.72 70.72" opacity=".2"></svg:path><svg:path d="M223 57a58.1 58.1 0 0 0-82-.06l-13 12.53l-13-12.56a58 58 0 0 0-82 82.05l89.37 90.66a8 8 0 0 0 11.4 0L223 139a58.09 58.09 0 0 0 0-82m-11.36 70.76L128 212.6l-83.71-84.92a42 42 0 1 1 59.41-59.4l.1.1l12.67 12.19l-10 9.65a8 8 0 0 0-.11 11.42L132.69 128l-10.35 10.35a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0 0-11.31l-26.24-26.27l28.78-27.71l.11-.1a42 42 0 1 1 59.37 59.44Z"></svg:path></svg:g>`,
})
export class PhHeartStraightBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBreakFillIcon],svg[ph-heart-straight-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M113.29 55.31A58 58 0 0 0 32.93 139l89.37 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0-82-82.1l-24.4 23l26.4 26.42a8 8 0 0 1 0 11.32l-20.69 20.69A8 8 0 1 1 111 127l15-15l-26.5-26.58a8 8 0 0 1 .22-11.53l13.55-12.78a4 4 0 0 0 0-5.8Z"></svg:path>`,
})
export class PhHeartStraightBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBreakLightIcon],svg[ph-heart-straight-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.62 58.38a56.06 56.06 0 0 0-79.16 0L128 72.24l-14.44-13.9a56 56 0 0 0-79.2 79.21l89.37 90.66a6 6 0 0 0 8.55 0l89.33-90.63a56.06 56.06 0 0 0 .01-79.2m-8.51 70.75L128 215.45L42.89 129.1a44 44 0 0 1 62.23-62.24l.08.08l14.16 13.64l-11.51 11.08a6 6 0 0 0-.08 8.56L135.53 128l-11.76 11.76a6 6 0 1 0 8.49 8.48l16-16a6 6 0 0 0 0-8.49l-27.68-27.69l30.24-29.12a.3.3 0 0 0 .08-.08a44 44 0 1 1 62.21 62.27"></svg:path>`,
})
export class PhHeartStraightBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightBreakThinIcon],svg[ph-heart-straight-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.21 59.8a54.06 54.06 0 0 0-76.34 0L128 75l-15.82-15.2a54 54 0 0 0-76.4 76.35l89.37 90.66a4 4 0 0 0 5.7 0l89.36-90.64a54.07 54.07 0 0 0 0-76.37m-5.68 70.74L128 218.3l-86.55-87.78a46 46 0 0 1 65.13-65l15.65 15.07l-13 12.52A4 4 0 0 0 108 96a4 4 0 0 0 1.17 2.86L138.35 128l-13.18 13.17a4 4 0 1 0 5.66 5.66l16-16a4 4 0 0 0 0-5.66L117.71 96l31.77-30.58a46 46 0 1 1 65.05 65.08Z"></svg:path>`,
})
export class PhHeartStraightBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightDuotoneIcon],svg[ph-heart-straight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M217.36 133.36L128 224l-89.36-90.64a50 50 0 0 1 70.72-70.72L128 80l18.64-17.36a50 50 0 1 1 70.72 70.72" opacity=".2"></svg:path><svg:path d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82m-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"></svg:path></svg:g>`,
})
export class PhHeartStraightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightFillIcon],svg[ph-heart-straight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98"></svg:path>`,
})
export class PhHeartStraightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightLightIcon],svg[ph-heart-straight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.6 58.38a56.06 56.06 0 0 0-79.12-.08L128 71.78L113.52 58.3a56 56 0 0 0-79.15 79.25l89.36 90.66a6 6 0 0 0 8.54 0l89.33-90.62a56 56 0 0 0 0-79.21m-8.52 70.75L128 215.45L42.89 129.1a44 44 0 0 1 62.22-62.23a1 1 0 0 0 .16.14l18.64 17.36a6 6 0 0 0 8.18 0L150.73 67a1 1 0 0 0 .16-.14a44 44 0 1 1 62.19 62.26Z"></svg:path>`,
})
export class PhHeartStraightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartStraightThinIcon],svg[ph-heart-straight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.18 59.79a54.05 54.05 0 0 0-76.31 0L128 74.51l-15.87-14.77a54 54 0 0 0-76.33 76.41l89.35 90.66a4 4 0 0 0 5.7 0l89.33-90.64a54 54 0 0 0 0-76.38m-5.67 70.74L128 218.3l-86.53-87.79a46 46 0 0 1 65.06-65.06l.1.1l18.64 17.36a4 4 0 0 0 5.46 0l18.64-17.36l.1-.1a46 46 0 1 1 65 65.08Z"></svg:path>`,
})
export class PhHeartStraightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartThinIcon],svg[ph-heart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 44c-21.44 0-39.92 10.19-50 27.07C117.92 54.19 99.44 44 78 44a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58m-50 175.42c-14-8-100-59.35-100-117.42a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 63.31 156.89 52 178 52a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42"></svg:path>`,
})
export class PhHeartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartbeatIcon],svg[ph-heartbeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 144H32a8 8 0 0 1 0-16h35.72l13.62-20.44a8 8 0 0 1 13.32 0l25.34 38l9.34-14A8 8 0 0 1 136 128h24a8 8 0 0 1 0 16h-19.72l-13.62 20.44a8 8 0 0 1-13.32 0L88 126.42l-9.34 14A8 8 0 0 1 72 144M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62v2.25a8 8 0 1 0 16-.5V102a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8c-10.83-6.31-42.63-26-66.68-52.21a8 8 0 1 0-11.8 10.82c31.17 34 72.93 56.68 74.69 57.63a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62"></svg:path>`,
})
export class PhHeartbeatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartbeatBoldIcon],svg[ph-heartbeat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.76 148H31.7a12 12 0 1 1 0-24h33.63l12.45-18.66a12 12 0 0 1 20 0l22 33l6-9a12 12 0 0 1 10-5.34h24a12 12 0 1 1 0 24h-17.6l-12.46 18.66a12 12 0 0 1-20 0l-22-33l-6 9a12 12 0 0 1-9.96 5.34M177.91 36c-20.12 0-38 7.93-50.07 21.56C115.74 43.93 97.89 36 77.76 36a66 66 0 0 0-65.69 58.68A12 12 0 0 0 36 97.32A42 42 0 0 1 77.76 60c17.83 0 32.75 9.4 38.95 24.54a12 12 0 0 0 22.25 0C145.16 69.4 160.08 60 177.91 60A42.08 42.08 0 0 1 220 102c0 29.42-25.86 57.77-47.56 76.36a329 329 0 0 1-44.58 31.81c-10.87-6.45-35.37-22-56.51-42.73a12 12 0 1 0-16.84 17.12c30.39 29.81 66.15 49.2 67.66 50a12.06 12.06 0 0 0 11.39 0C138 232.14 244 174.34 244 102a66.12 66.12 0 0 0-66.09-66"></svg:path>`,
})
export class PhHeartbeatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartbeatDuotoneIcon],svg[ph-heartbeat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 102c0 66-104 122-104 122S24 168 24 102a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54" opacity=".2"></svg:path><svg:path d="M72 144H32a8 8 0 0 1 0-16h35.72l13.62-20.44a8 8 0 0 1 13.32 0l25.34 38l9.34-14A8 8 0 0 1 136 128h24a8 8 0 0 1 0 16h-19.72l-13.62 20.44a8 8 0 0 1-13.32 0L88 126.42l-9.34 14A8 8 0 0 1 72 144M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62v2.25a8 8 0 1 0 16-.5V102a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8c-10.83-6.31-42.63-26-66.68-52.21a8 8 0 1 0-11.8 10.82c31.17 34 72.93 56.68 74.69 57.63a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62"></svg:path></svg:g>`,
})
export class PhHeartbeatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartbeatFillIcon],svg[ph-heartbeat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0c-3.35-1.8-63.55-34.69-92.68-80.89a4 4 0 0 1 3.39-6.11H72a8 8 0 0 0 6.66-3.56l9.34-14l25.34 38a8 8 0 0 0 9.16 3.16a8.23 8.23 0 0 0 4.28-3.34l13.5-20.26H160a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.25-7.47H136a8 8 0 0 0-6.66 3.56l-9.34 14l-25.34-38a8 8 0 0 0-9.17-3.16a8.25 8.25 0 0 0-4.27 3.34L67.72 128H23.53a4 4 0 0 1-3.83-2.81A77 77 0 0 1 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"></svg:path>`,
})
export class PhHeartbeatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartbeatLightIcon],svg[ph-heartbeat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 142H32a6 6 0 0 1 0-12h36.79L83 108.67a6 6 0 0 1 10 0l27 40.51l11-16.51a6 6 0 0 1 5-2.67h24a6 6 0 0 1 0 12h-20.79L125 163.33a6 6 0 0 1-10 0l-27-40.51l-11 16.51a6 6 0 0 1-5 2.67M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60v2.19a6 6 0 0 0 12-.38V102a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.73-81.61 105.65-98 115.11c-9.84-5.66-43.09-25.82-68.16-53.16a6 6 0 1 0-8.84 8.1c30.94 33.77 72.41 56.29 74.16 57.23a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60"></svg:path>`,
})
export class PhHeartbeatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHeartbeatThinIcon],svg[ph-heartbeat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 140H32a4 4 0 0 1 0-8h37.86l14.81-22.22a4 4 0 0 1 6.66 0l28.67 43l12.67-19A4 4 0 0 1 136 132h24a4 4 0 0 1 0 8h-21.86l-14.81 22.22a4 4 0 0 1-6.66 0L88 119.21l-12.67 19A4 4 0 0 1 72 140m106-96c-21.44 0-39.92 10.19-50 27.07C117.92 54.19 99.44 44 78 44a58.07 58.07 0 0 0-58 58v2.13a4 4 0 1 0 8-.26V102a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 63.31 156.89 52 178 52a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42c-8.47-4.82-43.5-25.61-69.63-54.12a4 4 0 0 0-5.9 5.4c30.72 33.52 71.9 55.89 73.63 56.82a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58"></svg:path>`,
})
export class PhHeartbeatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHexagonIcon],svg[ph-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M216 175.82L128 224l-88-48.18V80.18L128 32l88 48.17Z"></svg:path>`,
})
export class PhHexagonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHexagonBoldIcon],svg[ph-hexagon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.6 62.64l-88-48.17a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.17a20 20 0 0 0 10.4-17.55V80.19a20 20 0 0 0-10.4-17.55M212 173.44l-84 46l-84-46V82.56l84-46l84 46Z"></svg:path>`,
})
export class PhHexagonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHexagonDuotoneIcon],svg[ph-hexagon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80.18v95.64a8 8 0 0 1-4.16 7l-88 48.18a8 8 0 0 1-7.68 0l-88-48.18a8 8 0 0 1-4.16-7V80.18a8 8 0 0 1 4.16-7l88-48.18a8 8 0 0 1 7.68 0l88 48.18a8 8 0 0 1 4.16 7" opacity=".2"></svg:path><svg:path d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M216 175.82L128 224l-88-48.18V80.18L128 32l88 48.17Z"></svg:path></svg:g>`,
})
export class PhHexagonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHexagonFillIcon],svg[ph-hexagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80.18v95.64a16 16 0 0 1-8.32 14l-88 48.17a15.88 15.88 0 0 1-15.36 0l-88-48.17a16 16 0 0 1-8.32-14V80.18a16 16 0 0 1 8.32-14l88-48.17a15.88 15.88 0 0 1 15.36 0l88 48.17a16 16 0 0 1 8.32 14"></svg:path>`,
})
export class PhHexagonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHexagonLightIcon],svg[ph-hexagon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.72 67.91l-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.27M218 175.82a2 2 0 0 1-1 1.75l-88 48.18a2 2 0 0 1-1.92 0L39 177.57a2 2 0 0 1-1-1.75V80.18a2 2 0 0 1 1-1.75l88-48.18a2 2 0 0 1 1.92 0l88 48.18a2 2 0 0 1 1 1.75Z"></svg:path>`,
})
export class PhHexagonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHexagonThinIcon],svg[ph-hexagon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.18a4 4 0 0 1-2.08-3.5V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z"></svg:path>`,
})
export class PhHexagonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionIcon],svg[ph-high-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 72h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24a56 56 0 0 0 0-112m0 96h-16V88h16a40 40 0 0 1 0 80m-64 8v-40H56v40a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v40h56V80a8 8 0 0 1 16 0v96a8 8 0 0 1-16 0M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m208 160a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhHighDefinitionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionBoldIcon],svg[ph-high-definition-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 68h-24a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h24a60 60 0 0 0 0-120m0 96h-12V92h12a36 36 0 0 1 0 72m-76 12v-36H56v36a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0v36h48V80a12 12 0 0 1 24 0v96a12 12 0 0 1-24 0M20 44a12 12 0 0 1 12-12h192a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m216 168a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhHighDefinitionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionDuotoneIcon],svg[ph-high-definition-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160H32V48Z" opacity=".2"></svg:path><svg:path d="M176 72h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24a56 56 0 0 0 0-112m0 96h-16V88h16a40 40 0 0 1 0 80m-64 8v-40H56v40a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v40h56V80a8 8 0 0 1 16 0v96a8 8 0 0 1-16 0M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m208 160a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhHighDefinitionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionFillIcon],svg[ph-high-definition-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 128a32 32 0 0 1-32 32h-12V96h12a32 32 0 0 1 32 32m36-72v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M120 88a8 8 0 0 0-16 0v32H64V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm92 40a48.05 48.05 0 0 0-48-48h-20a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h20a48.05 48.05 0 0 0 48-48"></svg:path>`,
})
export class PhHighDefinitionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionLightIcon],svg[ph-high-definition-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 74h-24a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6h24a54 54 0 0 0 0-108m0 96h-18V86h18a42 42 0 0 1 0 84m-62 6v-42H54v42a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0v42h60V80a6 6 0 0 1 12 0v96a6 6 0 0 1-12 0M26 48a6 6 0 0 1 6-6h192a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m204 160a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhHighDefinitionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighDefinitionThinIcon],svg[ph-high-definition-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 76h-24a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h24a52 52 0 0 0 0-104m0 96h-20V84h20a44 44 0 0 1 0 88m-60 4v-44H52v44a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0v44h64V80a4 4 0 0 1 8 0v96a4 4 0 0 1-8 0M28 48a4 4 0 0 1 4-4h192a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m200 160a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhHighDefinitionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighHeelIcon],svg[ph-high-heel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231 156.19l-51-11.49L69.66 34.34a8 8 0 0 0-11.56.26C36.11 58.64 24 89 24 120v72a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-48.94c2.49 1.45 4.94 3 7.34 4.64a112.45 112.45 0 0 1 40.55 50.39a15.9 15.9 0 0 0 14.83 9.91H240a16 16 0 0 0 16-16v-4.73a31.72 31.72 0 0 0-25-31.08M72 192H40v-63.71a110.9 110.9 0 0 1 32 7.12Zm168 0h-89.32a128.36 128.36 0 0 0-46.27-57.46a126.9 126.9 0 0 0-64.12-22.26a110.67 110.67 0 0 1 24.17-60.5l105.88 105.88a8 8 0 0 0 3.9 2.14l53.24 12A15.81 15.81 0 0 1 240 187.31Z"></svg:path>`,
})
export class PhHighHeelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighHeelBoldIcon],svg[ph-high-heel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.93 152.31l-45.82-11.17L72.49 31.51a12 12 0 0 0-17.34.39C32.48 56.68 20 88 20 120v72a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-41.71l1.07.71a108.44 108.44 0 0 1 39.11 48.6a19.9 19.9 0 0 0 18.54 12.4H236a20 20 0 0 0 20-20v-4.73a35.68 35.68 0 0 0-28.07-34.96M68 188H44v-55.33a106.7 106.7 0 0 1 24 5.51Zm164 0h-78.65a132.44 132.44 0 0 0-46.67-56.77a131.1 131.1 0 0 0-62-22.63a106.7 106.7 0 0 1 20.19-50.76l102.64 102.65a12.06 12.06 0 0 0 5.65 3.17l49.2 12l.25.06a11.84 11.84 0 0 1 9.39 11.6Z"></svg:path>`,
})
export class PhHighHeelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighHeelDuotoneIcon],svg[ph-high-heel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 187.31V192a8 8 0 0 1-8 8h-89.28a8 8 0 0 1-7.42-4.92C125.51 151.28 82.38 120 32 120c0-31 12.59-58.78 32-80l112 112l53.21 12A23.92 23.92 0 0 1 248 187.31" opacity=".2"></svg:path><svg:path d="m231 156.19l-51-11.48L69.66 34.34a8 8 0 0 0-11.56.26C36.11 58.64 24 89 24 120v72a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-48.94c2.49 1.45 4.94 3 7.34 4.64a112.45 112.45 0 0 1 40.55 50.39a15.9 15.9 0 0 0 14.83 9.91H240a16 16 0 0 0 16-16v-4.73a31.72 31.72 0 0 0-25-31.08M72 192H40v-63.71a110.9 110.9 0 0 1 32 7.12Zm168 0h-89.32a128.36 128.36 0 0 0-46.27-57.46a126.9 126.9 0 0 0-64.12-22.26a110.67 110.67 0 0 1 24.17-60.5l105.88 105.88a8 8 0 0 0 3.9 2.14l53.24 12A15.81 15.81 0 0 1 240 187.31Z"></svg:path></svg:g>`,
})
export class PhHighHeelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighHeelFillIcon],svg[ph-high-heel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 144a95.3 95.3 0 0 1 37.53 7.67a4 4 0 0 1 2.47 3.7V192a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-44a4 4 0 0 1 4-4Zm199 12.19l-51-11.48L69.66 34.34a8 8 0 0 0-11.56.26C36.11 58.64 24 89 24 120a8 8 0 0 0 8 8a111.2 111.2 0 0 1 63.34 19.7a112.45 112.45 0 0 1 40.55 50.39a15.9 15.9 0 0 0 14.83 9.91H240a16 16 0 0 0 16-16v-4.73a31.72 31.72 0 0 0-25-31.08"></svg:path>`,
})
export class PhHighHeelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighHeelLightIcon],svg[ph-high-heel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.53 158.14L179 146.53L68.24 35.76a6 6 0 0 0-8.67.19C37.92 59.62 26 89.47 26 120v72a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-52.35a115 115 0 0 1 51.74 57.69a13.92 13.92 0 0 0 13 8.66H240a14 14 0 0 0 14-14v-4.73a29.73 29.73 0 0 0-23.47-29.13M74 192a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-65.82A112.8 112.8 0 0 1 74 134Zm168 0a2 2 0 0 1-2 2h-89.28a2 2 0 0 1-1.86-1.18a126.53 126.53 0 0 0-45.58-56.65a125.13 125.13 0 0 0-65.12-22c1.31-23.51 10.44-46.34 26.15-65.38l107.45 107.45a6 6 0 0 0 2.92 1.61l53.23 12A17.81 17.81 0 0 1 242 187.31Z"></svg:path>`,
})
export class PhHighHeelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighHeelThinIcon],svg[ph-high-heel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.09 160.09L178 148.35L66.83 37.17A4 4 0 0 0 63.91 36a4 4 0 0 0-2.86 1.3C39.74 60.6 28 90 28 120v72a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-55.64a116.73 116.73 0 0 1 55.59 60.23a11.93 11.93 0 0 0 11.13 7.41H240a12 12 0 0 0 12-12v-4.73a27.74 27.74 0 0 0-21.91-27.18M76 192a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-67.92a114.9 114.9 0 0 1 40 8.62Zm168 0a4 4 0 0 1-4 4h-89.28a4 4 0 0 1-3.71-2.42a124.36 124.36 0 0 0-44.87-55.76a123.1 123.1 0 0 0-66.07-21.75c.93-25.33 10.8-50 28.11-70.23l109 109a4 4 0 0 0 2 1.07l53.22 12a19.79 19.79 0 0 1 15.6 19.4Z"></svg:path>`,
})
export class PhHighHeelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterIcon],svg[ph-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69L107.31 72l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.19-21.18a16 16 0 0 0 18.81-2.82l50.35-50.34a8 8 0 0 0 0-11.32M93.84 206.85l-55-18.35L88 139.31L124.69 176ZM152 180.69L83.31 112L104 91.31L172.69 160Z"></svg:path>`,
})
export class PhHighlighterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterBoldIcon],svg[ph-highlighter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.49 107.51a12 12 0 0 0-17 0L192 151l-79-79l43.52-43.51a12 12 0 0 0-17-17L93.17 57.86a20 20 0 0 0-4.72 20.72L69.17 97.86a20 20 0 0 0 0 28.28L71 128l-55.49 55.51a12 12 0 0 0 4.7 19.87l72 24A11.8 11.8 0 0 0 96 228a12 12 0 0 0 8.49-3.52L136 193l1.86 1.86a20 20 0 0 0 28.28 0l19.27-19.27a20.3 20.3 0 0 0 6.59 1.13a19.86 19.86 0 0 0 14.14-5.86l46.35-46.34a12 12 0 0 0 0-17.01M92.76 202.27l-46.55-15.51L88 145l31 31ZM152 175l-55.51-55.48L89 112l15-15l63 63Z"></svg:path>`,
})
export class PhHighlighterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterCircleIcon],svg[ph-highlighter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M96 210v-58h64v58a88.33 88.33 0 0 1-64 0m48-74h-32v-35.06l32-16Zm46.22 54.22A88 88 0 0 1 176 201.77V152a16 16 0 0 0-16-16V72a8 8 0 0 0-11.58-7.16l-48 24A8 8 0 0 0 96 96v40a16 16 0 0 0-16 16v49.77a88 88 0 1 1 110.22-11.55"></svg:path>`,
})
export class PhHighlighterCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterCircleBoldIcon],svg[ph-highlighter-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.37 51.59A108 108 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.41M140 136h-24v-24.61l24-12Zm-40 71.25V160h56v47.25a84.73 84.73 0 0 1-56 0m87.4-19.84a85 85 0 0 1-7.4 6.55V156a20 20 0 0 0-16-19.6V80a12 12 0 0 0-17.37-10.73l-48 24A12 12 0 0 0 92 104v32.41A20 20 0 0 0 76 156v38a85 85 0 0 1-7.4-6.55a84 84 0 1 1 118.8 0Z"></svg:path>`,
})
export class PhHighlighterCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterCircleDuotoneIcon],svg[ph-highlighter-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88A95.7 95.7 0 0 1 168 215.29V152a8 8 0 0 0-8-8h-8V72l-48 24v48h-8a8 8 0 0 0-8 8v63.29a96 96 0 1 1 107.88-19.41" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M96 210v-58h64v58a88.33 88.33 0 0 1-64 0m48-74h-32v-35.06l32-16Zm46.22 54.22A88 88 0 0 1 176 201.77V152a16 16 0 0 0-16-16V72a8 8 0 0 0-11.58-7.16l-48 24A8 8 0 0 0 96 96v40a16 16 0 0 0-16 16v49.77a88 88 0 1 1 110.22-11.55"></svg:path></svg:g>`,
})
export class PhHighlighterCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterCircleFillIcon],svg[ph-highlighter-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M96 210v-58h64v58a88.33 88.33 0 0 1-64 0m94.22-19.78A88 88 0 0 1 176 201.77V152a16 16 0 0 0-16-16V72a8 8 0 0 0-11.58-7.16l-48 24A8 8 0 0 0 96 96v40a16 16 0 0 0-16 16v49.77a88 88 0 1 1 110.22-11.55"></svg:path>`,
})
export class PhHighlighterCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterCircleLightIcon],svg[ph-highlighter-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M94 211.37V152a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v59.37a90.5 90.5 0 0 1-68 0M146 138h-36V99.71l36-18Zm45.64 53.64A91 91 0 0 1 174 205.39V152a14 14 0 0 0-14-14h-2V72a6 6 0 0 0-8.68-5.37l-48 24A6 6 0 0 0 98 96v42h-2a14 14 0 0 0-14 14v53.39a91 91 0 0 1-17.64-13.75a90 90 0 1 1 127.28 0"></svg:path>`,
})
export class PhHighlighterCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterCircleThinIcon],svg[ph-highlighter-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29M92 212.7V152a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v60.7a92.42 92.42 0 0 1-72 0m56-72.7h-40V98.47l40-20Zm45.05 53.05A92 92 0 0 1 172 208.83V152a12 12 0 0 0-12-12h-4V72a4 4 0 0 0-5.79-3.58l-48 24A4 4 0 0 0 100 96v44h-4a12 12 0 0 0-12 12v56.83a92 92 0 1 1 109.05-15.78"></svg:path>`,
})
export class PhHighlighterCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterDuotoneIcon],svg[ph-highlighter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m136 176l-40 40l-72-24l64-64Z" opacity=".2"></svg:path><svg:path d="M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69l-82.34-82.35l-2.35-2.34l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.18-21.18a16 16 0 0 0 18.82-2.82l50.35-50.34a8 8 0 0 0 0-11.32M93.84 206.85l-55-18.35L88 139.31L124.69 176ZM152 180.69l-10.34-10.35l-48-48L83.31 112L104 91.31L172.69 160Z"></svg:path></svg:g>`,
})
export class PhHighlighterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterFillIcon],svg[ph-highlighter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69L107.31 72l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.18-21.18a16 16 0 0 0 18.82-2.82l50.35-50.34a8 8 0 0 0 0-11.32M152 180.69L83.31 112L104 91.31L172.69 160Z"></svg:path>`,
})
export class PhHighlighterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterLightIcon],svg[ph-highlighter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.24 107.76a6 6 0 0 0-8.48 0l-50.35 50.34a2 2 0 0 1-2.82 0L105.9 73.41a2 2 0 0 1 0-2.82l50.34-50.35a6 6 0 0 0-8.48-8.48L97.41 62.1a14 14 0 0 0-1.71 17.71L73.41 102.1a14 14 0 0 0 0 19.8l6.1 6.1l-59.75 59.76a6 6 0 0 0 2.34 9.93l72 24a6 6 0 0 0 6.14-1.45L136 184.49l6.1 6.1a14 14 0 0 0 19.8 0l22.28-22.29a14 14 0 0 0 17.72-1.71l50.34-50.35a6 6 0 0 0 0-8.48M94.38 209.14l-59.27-19.76L88 136.49L127.51 176Zm59-27a2 2 0 0 1-2.82 0l-10.35-10.34l-48-48l-10.31-10.39a2 2 0 0 1 0-2.82l22.1-22.1L175.51 160Z"></svg:path>`,
})
export class PhHighlighterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHighlighterThinIcon],svg[ph-highlighter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.83 109.17a4 4 0 0 0-5.66 0l-50.34 50.34a4 4 0 0 1-5.66 0l-84.68-84.68a4 4 0 0 1 0-5.66l50.34-50.34a4 4 0 0 0-5.66-5.66L98.83 63.51A12 12 0 0 0 98.37 80l-23.54 23.51a12 12 0 0 0 0 17l7.51 7.49l-61.17 61.17a4 4 0 0 0 1.57 6.62l72 24A3.9 3.9 0 0 0 96 220a4 4 0 0 0 2.83-1.17L136 181.66l7.51 7.51a12 12 0 0 0 17 0L184 165.63a12 12 0 0 0 16.47-.46l50.34-50.34a4 4 0 0 0 .02-5.66M94.92 211.42L31.4 190.25L88 133.66L130.34 176Zm59.91-27.91a4 4 0 0 1-5.66 0l-68.68-68.68a4 4 0 0 1 0-5.66L104 85.66L178.34 160Z"></svg:path>`,
})
export class PhHighlighterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHockeyIcon],svg[ph-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152h-93.1L38.1 42.82a8 8 0 0 0-12.2 10.36l133.61 157.18A16 16 0 0 0 171.7 216H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-79.5 16H192v32h-20.3Zm79.5 32h-16v-32h16Zm-111.82-20.45a8 8 0 0 0-11.27.91L84.3 200H64v-32h21.2a8 8 0 0 0 0-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h52.3a16 16 0 0 0 12.19-5.64l16.61-19.53a8 8 0 0 0-.92-11.28M32 168h16v32H32Zm117.9-45.18l68-80a8 8 0 0 1 12.2 10.36l-68 80a8 8 0 1 1-12.2-10.36"></svg:path>`,
})
export class PhHockeyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHockeyBoldIcon],svg[ph-hockey-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 148h-91.25L41.14 40.23a12 12 0 0 0-18.28 15.54l95.16 112l.06.07L156.46 213a20 20 0 0 0 15.24 7H224a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20m-70.85 24H180v24h-6.45ZM220 196h-16v-24h16Zm-66.34-83.77l61.2-72a12 12 0 0 1 18.28 15.54l-61.2 72a12 12 0 1 1-18.28-15.54m-44.14 70.45a12 12 0 0 0-16.91 1.37L82.45 196H76v-24.07A12 12 0 0 0 74.7 148H32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h52.3a20 20 0 0 0 15.24-7l11.35-13.36a12 12 0 0 0-1.37-16.96M36 172h16v24H36Z"></svg:path>`,
})
export class PhHockeyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHockeyDuotoneIcon],svg[ph-hockey-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 160v48h-28.3a8 8 0 0 1-6.1-2.82l-38-44.7l-37.2 44.64a8 8 0 0 1-6.15 2.88H56v-48z" opacity=".2"></svg:path><svg:path d="M224 152h-93.1L38.1 42.82a8 8 0 0 0-12.2 10.36l133.61 157.18A16 16 0 0 0 171.7 216H224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-79.5 16H192v32h-20.3Zm79.5 32h-16v-32h16Zm-111.82-20.45a8 8 0 0 0-11.27.92L84.3 200H64v-32h21.2a8 8 0 0 0 0-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h52.3a16 16 0 0 0 12.19-5.64l16.61-19.53a8 8 0 0 0-.92-11.28M32 168h16v32H32Zm117.9-45.18l68-80a8 8 0 0 1 12.2 10.36l-68 80a8 8 0 1 1-12.2-10.36"></svg:path></svg:g>`,
})
export class PhHockeyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHockeyFillIcon],svg[ph-hockey-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149.9 122.82l68-80a8 8 0 0 1 12.2 10.36l-68 80a8 8 0 1 1-12.2-10.36M240 168v32a16 16 0 0 1-16 16h-52.3a16 16 0 0 1-12.19-5.64L25.9 53.18a8 8 0 0 1 12.2-10.36L130.9 152H224a16 16 0 0 1 16 16m-16 0h-16v32h16Zm-108.7 15.06a4 4 0 0 1 0 5.18l-18.81 22.12A16 16 0 0 1 84.3 216H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h55.05a4 4 0 0 1 3 1.41ZM48 168H32v32h16Z"></svg:path>`,
})
export class PhHockeyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHockeyLightIcon],svg[ph-hockey-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 154h-94L36.57 44.12a6 6 0 1 0-9.14 7.77L161 209.07a14 14 0 0 0 10.7 4.93H224a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14m-53.82 47.3l-30-35.3H194v36h-22.3a2 2 0 0 1-1.52-.7M226 200a2 2 0 0 1-2 2h-18v-36h18a2 2 0 0 1 2 2Zm-115.11-18.92a6 6 0 0 0-8.46.68L85.82 201.3a2 2 0 0 1-1.52.7H62v-36h23.2a6 6 0 0 0 0-12H32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h52.3a14 14 0 0 0 10.7-4.93l16.6-19.54a6 6 0 0 0-.71-8.45M30 200v-32a2 2 0 0 1 2-2h18v36H32a2 2 0 0 1-2-2m121.43-75.88l68-80a6 6 0 1 1 9.14 7.77l-68 80a6 6 0 0 1-9.14-7.77"></svg:path>`,
})
export class PhHockeyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHockeyThinIcon],svg[ph-hockey-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 156h-94.95l-94-110.59A4 4 0 1 0 29 50.59l133.56 157.18a12 12 0 0 0 9.14 4.23H224a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12m-55.35 46.59L135.85 164H196v40h-24.3a4 4 0 0 1-3.05-1.41M228 200a4 4 0 0 1-4 4h-20v-40h20a4 4 0 0 1 4 4Zm-124-16.94l-16.6 19.53a4 4 0 0 1-3 1.41H60v-40h25.2a4 4 0 0 0 0-8H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h52.3a12 12 0 0 0 9.14-4.23l16.61-19.53a4 4 0 0 0-6.1-5.18ZM28 200v-32a4 4 0 0 1 4-4h20v40H32a4 4 0 0 1-4-4m125.41-68.95a4 4 0 0 1-.46-5.64l68-80a4 4 0 1 1 6.1 5.18l-68 80a4 4 0 0 1-5.64.46"></svg:path>`,
})
export class PhHockeyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHoodieIcon],svg[ph-hoodie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.31 120.53L183 39.12A16 16 0 0 0 169.73 32H86.27A16 16 0 0 0 73 39.12l-54.31 81.41a16 16 0 0 0-2.13 13.09L38 212.21A16 16 0 0 0 53.43 224H80a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h26.57A16 16 0 0 0 218 212.21l21.44-78.59a16 16 0 0 0-2.13-13.09M80 176V69l24 14.15V136a8 8 0 0 0 16 0V92.57l3.94 2.32a8 8 0 0 0 8.12 0l3.94-2.32V128a8 8 0 0 0 16 0V83.14L176 69v107Zm89.73-128l2.92 4.39L128 78.71L83.35 52.39L86.27 48ZM80 208H53.43L32 129.41l32-48V176a16 16 0 0 0 16 16Zm122.57 0H176v-16a16 16 0 0 0 16-16V81.41l32 48Z"></svg:path>`,
})
export class PhHoodieIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHoodieBoldIcon],svg[ph-hoodie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.64 118.31l-54.27-81.4A20 20 0 0 0 173.73 28H82.27a20 20 0 0 0-16.64 8.91l-54.27 81.4a20 20 0 0 0-2.65 16.36l21.43 78.59A20 20 0 0 0 49.43 228H76a20 20 0 0 0 20-20v-12h64v12a20 20 0 0 0 20 20h26.57a20 20 0 0 0 19.29-14.74l21.43-78.59a20 20 0 0 0-2.65-16.36M84 172V70.64l12 7.5V136a12 12 0 0 0 24 0V93.15l1.64 1a12 12 0 0 0 12.72 0l1.64-1V128a12 12 0 0 0 24 0V78.14l12-7.5V172Zm44-102.15L99.46 52h57.08ZM52.49 204l-20.15-73.89L60 88.62V176a20 20 0 0 0 12 18.32V204Zm151 0H184v-9.68A20 20 0 0 0 196 176V88.62l27.66 41.49Z"></svg:path>`,
})
export class PhHoodieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHoodieDuotoneIcon],svg[ph-hoodie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m231.72 131.51l-21.44 78.59a8 8 0 0 1-7.71 5.9H176a8 8 0 0 1-8-8v-24H88v24a8 8 0 0 1-8 8H53.43a8 8 0 0 1-7.71-5.9l-21.44-78.59a8 8 0 0 1 1.06-6.51L72 55l56 33l56-33l46.66 70a8 8 0 0 1 1.06 6.51" opacity=".2"></svg:path><svg:path d="M237.31 120.53L183 39.12A16 16 0 0 0 169.73 32H86.27A16 16 0 0 0 73 39.12l-54.31 81.41a16 16 0 0 0-2.13 13.09L38 212.21A16 16 0 0 0 53.43 224H80a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h26.57A16 16 0 0 0 218 212.21l21.44-78.59a16 16 0 0 0-2.13-13.09M80 176V69l24 14.15V136a8 8 0 0 0 16 0V92.57l3.94 2.32a8 8 0 0 0 8.12 0l3.94-2.32V128a8 8 0 0 0 16 0V83.14L176 69v107Zm89.73-128l2.92 4.39L128 78.71L83.35 52.39L86.27 48ZM80 208H53.43L32 129.41l32-48V176a16 16 0 0 0 16 16Zm122.57 0H176v-16a16 16 0 0 0 16-16V81.41l32 48Z"></svg:path></svg:g>`,
})
export class PhHoodieDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHoodieFillIcon],svg[ph-hoodie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.31 120.53L183 39.12A16 16 0 0 0 169.73 32H86.27A16 16 0 0 0 73 39.12l-54.31 81.41a16 16 0 0 0-2.13 13.09L38 212.21A16 16 0 0 0 53.43 224H80a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h26.57A16 16 0 0 0 218 212.21l21.44-78.59a16 16 0 0 0-2.13-13.09M80 208H53.43L32 129.41l32-48V176a16 16 0 0 0 16 16Zm40-72a8 8 0 0 1-16 0V97.14a8 8 0 1 1 16 0Zm32-8a8 8 0 0 1-16 0V97.14a8 8 0 1 1 16 0Zm-24-49.29L83.35 52.39L86.27 48h83.46l2.92 4.39ZM202.57 208H176v-16a16 16 0 0 0 16-16V81.41l32 48Z"></svg:path>`,
})
export class PhHoodieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHoodieLightIcon],svg[ph-hoodie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.65 121.64l-54.27-81.41A14 14 0 0 0 169.73 34H86.27a14 14 0 0 0-11.65 6.23l-54.27 81.41a14 14 0 0 0-1.86 11.45l21.44 78.59A14 14 0 0 0 53.43 222H80a14 14 0 0 0 14-14v-18h68v18a14 14 0 0 0 14 14h26.57a14 14 0 0 0 13.5-10.32l21.44-78.59a14 14 0 0 0-1.86-11.45M80 178a2 2 0 0 1-2-2V65.49L106 82v54a6 6 0 0 0 12 0V89.07l7 4.1a6 6 0 0 0 6.1 0l6.95-4.1V128a6 6 0 0 0 12 0V82l28-16.51V176a2 2 0 0 1-2 2Zm6.27-132h83.46a2 2 0 0 1 1.66.89l4.1 6.15L128 81L80.51 53l4.1-6.15a2 2 0 0 1 1.66-.85M82 208a2 2 0 0 1-2 2H53.43a2 2 0 0 1-1.92-1.47l-21.44-78.6a2 2 0 0 1 .27-1.63L66 74.8V176a14 14 0 0 0 14 14h2Zm143.93-78.07l-21.44 78.6a2 2 0 0 1-1.92 1.47H176a2 2 0 0 1-2-2v-18h2a14 14 0 0 0 14-14V74.8l35.66 53.5a2 2 0 0 1 .27 1.63"></svg:path>`,
})
export class PhHoodieLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHoodieThinIcon],svg[ph-hoodie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234 122.75l-54.29-81.41a12 12 0 0 0-10-5.34H86.27a12 12 0 0 0-10 5.34L22 122.75a12 12 0 0 0-1.6 9.82l21.44 78.59A12 12 0 0 0 53.43 220H80a12 12 0 0 0 12-12v-20h72v20a12 12 0 0 0 12 12h26.57a12 12 0 0 0 11.57-8.84l21.44-78.59a12 12 0 0 0-1.58-9.82M80 180a4 4 0 0 1-4-4V62l32 18.86V136a4 4 0 0 0 8 0V85.57l10 5.88a4 4 0 0 0 4.06 0l10-5.88V128a4 4 0 0 0 8 0V80.85L180 62v114a4 4 0 0 1-4 4Zm2.94-134.22A4 4 0 0 1 86.27 44h83.46a4 4 0 0 1 3.33 1.78l5.27 7.91L128 83.36L77.67 53.69ZM84 208a4 4 0 0 1-4 4H53.43a4 4 0 0 1-3.85-2.95l-21.44-78.59a4 4 0 0 1 .53-3.27L68 68.2V176a12 12 0 0 0 12 12h4Zm143.86-77.54l-21.44 78.59a4 4 0 0 1-3.85 2.95H176a4 4 0 0 1-4-4v-20h4a12 12 0 0 0 12-12V68.2l39.33 59a4 4 0 0 1 .53 3.26"></svg:path>`,
})
export class PhHoodieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHorseIcon],svg[ph-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 29.48A104.29 104.29 0 0 1 130.1 232h-2.17a103.32 103.32 0 0 1-69.26-26a8 8 0 1 1 10.67-12a84.7 84.7 0 0 0 20.1 13.37L116 170.84c-22.78-9.83-47.47-5.65-61.4-3.29a31.84 31.84 0 0 1-31.3-12.83l-.3-.43l-13.78-22a8 8 0 0 1 2.59-11.05L112 59.53V32a8 8 0 0 1 8-8h8a104 104 0 0 1 104 105.48m-16-.22A88 88 0 0 0 128 40v24a8 8 0 0 1-3.81 6.81l-97.13 59.78l9.36 15A15.92 15.92 0 0 0 52 151.77c16-2.7 48.77-8.24 78.07 8.18A40.06 40.06 0 0 0 168 120a8 8 0 0 1 16 0a56.07 56.07 0 0 1-51.8 55.83l-27.11 37.28a91 91 0 0 0 24.69 2.89A88.29 88.29 0 0 0 216 129.26"></svg:path>`,
})
export class PhHorseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHorseBoldIcon],svg[ph-horse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 104a16 16 0 1 1-16-16a16 16 0 0 1 16 16m92 25.53A108.3 108.3 0 0 1 130.18 236h-2.25A107.3 107.3 0 0 1 56 208.94a12 12 0 1 1 16-17.88a81.4 81.4 0 0 0 16.2 11.26l21.54-29.62c-20.4-7-41.91-3.33-54.43-1.21a35.79 35.79 0 0 1-35.25-14.43c-.16-.21-.31-.43-.45-.65l-13.78-22A12 12 0 0 1 9.43 118L108 53.51V32a12 12 0 0 1 12-12h8a108 108 0 0 1 108 109.53m-24-.33a84 84 0 0 0-80-85.11V60a12 12 0 0 1-5.43 10l-94.16 61.61l7.31 11.68a12 12 0 0 0 11.58 4.54c16.23-2.75 49.4-8.36 79.64 8A36 36 0 0 0 164 120a12 12 0 0 1 24 0a60.09 60.09 0 0 1-53.64 59.66l-22.45 30.87a87.6 87.6 0 0 0 17.8 1.45A84.29 84.29 0 0 0 212 129.2"></svg:path>`,
})
export class PhHorseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHorseDuotoneIcon],svg[ph-horse-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 129.37c-.72 51.48-42.57 93.59-94.05 94.61a98.1 98.1 0 0 1-37.81-6.66L128 168c-26.64-16-57.23-11.3-74.7-8.34A24 24 0 0 1 29.79 150L16 128l104-64V32h8a96 96 0 0 1 96 97.37" opacity=".2"></svg:path><svg:path d="M136 100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 29.48A104.29 104.29 0 0 1 130.1 232h-2.17a103.32 103.32 0 0 1-69.26-26a8 8 0 1 1 10.67-12a84.7 84.7 0 0 0 20.1 13.37L116 170.84c-22.78-9.83-47.47-5.65-61.4-3.29a31.84 31.84 0 0 1-31.3-12.83l-.3-.43l-13.78-22a8 8 0 0 1 2.59-11.05L112 59.53V32a8 8 0 0 1 8-8h8a104 104 0 0 1 104 105.48m-16-.22A88 88 0 0 0 128 40v24a8 8 0 0 1-3.81 6.81l-97.13 59.78l9.36 15A15.92 15.92 0 0 0 52 151.77c16-2.7 48.77-8.24 78.07 8.18A40.06 40.06 0 0 0 168 120a8 8 0 0 1 16 0a56.07 56.07 0 0 1-51.8 55.83l-27.11 37.28a91 91 0 0 0 24.69 2.89A88.29 88.29 0 0 0 216 129.26"></svg:path></svg:g>`,
})
export class PhHorseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHorseFillIcon],svg[ph-horse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.05 55A103.24 103.24 0 0 0 128 24h-8a8 8 0 0 0-8 8v27.53L11.81 121.19a8 8 0 0 0-2.59 11.05l13.78 22l.3.43a31.84 31.84 0 0 0 31.34 12.83c13.93-2.36 38.62-6.54 61.4 3.29l-26.6 36.57A84.7 84.7 0 0 1 69.34 194a8 8 0 1 0-10.67 12a103.32 103.32 0 0 0 69.26 26h2.17a104 104 0 0 0 72-177ZM124 112a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhHorseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHorseLightIcon],svg[ph-horse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 100a10 10 0 1 1-10-10a10 10 0 0 1 10 10m96 29.45A102.29 102.29 0 0 1 130.06 230h-2.13A101.33 101.33 0 0 1 60 204.47a6 6 0 1 1 8-8.94a87.1 87.1 0 0 0 22.09 14.39l29-39.89c-23.93-11.37-50.18-6.93-64.8-4.45a29.84 29.84 0 0 1-29.38-12a4 4 0 0 1-.22-.32l-13.79-22a6 6 0 0 1 1.95-8.29L114 60.65V32a6 6 0 0 1 6-6h8a102 102 0 0 1 102 103.45m-12-.17A90 90 0 0 0 128 38h-2v26a6 6 0 0 1-2.86 5.11l-98.85 60.83l10.47 16.74a17.91 17.91 0 0 0 17.54 7.06c15.82-2.67 48.42-8.18 77.23 8.22A42 42 0 0 0 170 120a6 6 0 0 1 12 0a54.06 54.06 0 0 1-50.87 53.9l-29.36 40.37a92.8 92.8 0 0 0 28.05 3.73A90.28 90.28 0 0 0 218 129.28"></svg:path>`,
})
export class PhHorseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHorseThinIcon],svg[ph-horse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 100a8 8 0 1 1-8-8a8 8 0 0 1 8 8m96 29.42A100.29 100.29 0 0 1 130 228h-2.09a99.37 99.37 0 0 1-66.6-25a4 4 0 1 1 5.34-6a89.1 89.1 0 0 0 24.09 15.39l31.35-43.11c-25.16-13-53.95-8.1-68.14-5.7a27.85 27.85 0 0 1-27.43-11.22c-.05-.07-.1-.14-.14-.21l-13.79-22a3.94 3.94 0 0 1-.5-3a4 4 0 0 1 1.79-2.5L116 61.76V32a4 4 0 0 1 4-4h8a100 100 0 0 1 100 101.42m-34.48-66A91.35 91.35 0 0 0 128 36h-4v28a4 4 0 0 1-1.9 3.41L21.53 129.29l11.58 18.52a19.89 19.89 0 0 0 19.52 7.91c15.68-2.66 48.08-8.13 76.39 8.25a44 44 0 0 0 43-44a4 4 0 0 1 8 0A52.06 52.06 0 0 1 130.07 172l-31.56 43.4a94.5 94.5 0 0 0 31.35 4.6a92 92 0 0 0 63.65-156.6Z"></svg:path>`,
})
export class PhHorseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHospitalIcon],svg[ph-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208h-8v-80a16 16 0 0 0-16-16h-56V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160h-8a8 8 0 0 0 0 16h216a8 8 0 0 0 0-16m-24-80v80h-56v-80ZM56 48h96v160h-16v-48a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v48H56Zm64 160H88v-40h32ZM72 96a8 8 0 0 1 8-8h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H80a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhHospitalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHospitalBoldIcon],svg[ph-hospital-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 204h-4v-76a20 20 0 0 0-20-20h-48V48a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v156h-4a12 12 0 0 0 0 24h212a12 12 0 0 0 0-24m-28-72v72h-44v-72ZM60 52h88v152h-12v-44a12 12 0 0 0-12-12H84a12 12 0 0 0-12 12v44H60Zm52 152H96v-32h16ZM72 96a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhHospitalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHospitalDuotoneIcon],svg[ph-hospital-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 48v168h-32v-56H80v56H48V48a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M248 208h-8v-80a16 16 0 0 0-16-16h-56V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160h-8a8 8 0 0 0 0 16h216a8 8 0 0 0 0-16m-24-80v80h-56v-80ZM56 48h96v160h-16v-48a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v48H56Zm64 160H88v-40h32ZM72 96a8 8 0 0 1 8-8h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H80a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhHospitalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHospitalFillIcon],svg[ph-hospital-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 208h-8v-80a16 16 0 0 0-16-16h-56V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160h-8a8 8 0 0 0 0 16h216a8 8 0 0 0 0-16m-120 0H80v-48h48Zm0-104h-16v16a8 8 0 0 1-16 0v-16H80a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m96 104h-56v-80h56Z"></svg:path>`,
})
export class PhHospitalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHospitalLightIcon],svg[ph-hospital-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 210h-10v-82a14 14 0 0 0-14-14h-58V48a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v162H32a6 6 0 0 0 0 12h216a6 6 0 0 0 0-12m-24-84a2 2 0 0 1 2 2v82h-60v-84ZM54 48a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2v162h-20v-50a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v50H54Zm68 162H86v-44h36ZM74 96a6 6 0 0 1 6-6h18V72a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0v-18H80a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhHospitalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHospitalThinIcon],svg[ph-hospital-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 212h-12v-84a12 12 0 0 0-12-12h-60V48a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v164H32a4 4 0 0 0 0 8h216a4 4 0 0 0 0-8m-24-88a4 4 0 0 1 4 4v84h-64v-88ZM52 48a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4v164h-24v-52a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v52H52Zm72 164H84v-48h40ZM76 96a4 4 0 0 1 4-4h20V72a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0v-20H80a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhHospitalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassIcon],svg[ph-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.6A16.05 16.05 0 0 0 200 75.64M184 216H72v-36l56-42l56 42.35Zm0-140.36L128 118L72 76V40h112Z"></svg:path>`,
})
export class PhHourglassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassBoldIcon],svg[ph-hourglass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 75.64V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36l-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4A20.13 20.13 0 0 0 204 75.64M180 212H76v-30l52-39l52 39.33Zm0-138.35L128 113L76 74V44h104Z"></svg:path>`,
})
export class PhHourglassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassDuotoneIcon],svg[ph-hourglass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M188.82 82L128 128L67.2 82.4A8 8 0 0 1 64 76V40a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v35.64a8 8 0 0 1-3.18 6.36M64 180v36a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-35.64a8 8 0 0 0-3.18-6.38L128 128l-60.8 45.6A8 8 0 0 0 64 180" opacity=".2"></svg:path><svg:path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M184 216H72v-36l56-42l56 42.35Zm0-140.36L128 118L72 76V40h112Z"></svg:path></svg:g>`,
})
export class PhHourglassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassFillIcon],svg[ph-hourglass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.08 16.08 0 0 0 6.41 12.8l52.26 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16 16 0 0 0-6.36-12.77L141.26 128l52.38-39.59A16.05 16.05 0 0 0 200 75.64"></svg:path>`,
})
export class PhHourglassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassHighIcon],svg[ph-hourglass-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.6A16.05 16.05 0 0 0 200 75.64V40a16 16 0 0 0-16-16m0 16v16H72V40Zm0 176H72v-36l56-42l56 42.35Zm-56-98L72 76v-4h112v3.64Z"></svg:path>`,
})
export class PhHourglassHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassHighBoldIcon],svg[ph-hourglass-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36l-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4a20.13 20.13 0 0 0 7.94-16V40a20 20 0 0 0-20-20m-4 24v16H76V44Zm-52 69L89.33 84h77Zm52 99H76v-30l52-39l52 39.33Z"></svg:path>`,
})
export class PhHourglassHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassHighDuotoneIcon],svg[ph-hourglass-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 64v11.64a8 8 0 0 1-3.18 6.36L128 128L67.2 82.4A8 8 0 0 1 64 76V64Z" opacity=".2"></svg:path><svg:path d="M184 24H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64V40a16 16 0 0 0-16-16m0 16v16H72V40Zm0 176H72v-36l56-42l56 42.35Zm-56-98L72 76v-4h112v3.64Z"></svg:path></svg:g>`,
})
export class PhHourglassHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassHighFillIcon],svg[ph-hourglass-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M184 40v24H72V40Zm0 176H72v-36l56-42l56 42.35Z"></svg:path>`,
})
export class PhHourglassHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassHighLightIcon],svg[ph-hourglass-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 26H72a14 14 0 0 0-14 14v36a14.06 14.06 0 0 0 5.6 11.2L118 128l-54.4 40.8A14.06 14.06 0 0 0 58 180v36a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-35.64a14.08 14.08 0 0 0-5.56-11.17L138 128l54.49-41.19A14.08 14.08 0 0 0 198 75.64V40a14 14 0 0 0-14-14M72 38h112a2 2 0 0 1 2 2v18H70V40a2 2 0 0 1 2-2m114 142.36V216a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2v-36a2 2 0 0 1 .8-1.6l57.2-42.89l57.22 43.25a2 2 0 0 1 .78 1.6m-.79-103.12L128 120.49L70.8 77.6A2 2 0 0 1 70 76v-6h116v5.64a2 2 0 0 1-.79 1.6"></svg:path>`,
})
export class PhHourglassHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassHighThinIcon],svg[ph-hourglass-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a12 12 0 0 0-12 12v36a12 12 0 0 0 4.8 9.6l56.53 42.4l-56.53 42.4A12 12 0 0 0 60 180v36a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-35.64a12.05 12.05 0 0 0-4.76-9.57L134.63 128l56.61-42.79a12.05 12.05 0 0 0 4.76-9.57V40a12 12 0 0 0-12-12M72 36h112a4 4 0 0 1 4 4v20H68V40a4 4 0 0 1 4-4m116 144.36V216a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-36a4 4 0 0 1 1.6-3.2L128 133l58.42 44.16a4 4 0 0 1 1.58 3.2m-1.59-101.53L128 123L69.6 79.2A4 4 0 0 1 68 76v-8h120v7.64a4 4 0 0 1-1.59 3.19"></svg:path>`,
})
export class PhHourglassHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassLightIcon],svg[ph-hourglass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 75.64V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v36a14.06 14.06 0 0 0 5.6 11.2L118 128l-54.4 40.8A14.06 14.06 0 0 0 58 180v36a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-35.64a14.08 14.08 0 0 0-5.56-11.17L138 128l54.49-41.19A14.08 14.08 0 0 0 198 75.64m-12 104.72V216a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2v-36a2 2 0 0 1 .8-1.6l57.2-42.89l57.22 43.25a2 2 0 0 1 .78 1.6m0-104.72a2 2 0 0 1-.79 1.6L128 120.49L70.8 77.6A2 2 0 0 1 70 76V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhHourglassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassLowIcon],svg[ph-hourglass-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.08 16.08 0 0 0-6.35-12.76L141.27 128l52.38-39.6A16.05 16.05 0 0 0 200 75.64M178.23 176H77.33L128 138ZM72 216v-24h112v24ZM184 75.64L128 118L72 76V40h112Z"></svg:path>`,
})
export class PhHourglassLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassLowBoldIcon],svg[ph-hourglass-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 75.64V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36l-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4A20.13 20.13 0 0 0 204 75.64M166.31 172h-77L128 143ZM76 212v-16h104v16ZM180 73.65L128 113L76 74V44h104Z"></svg:path>`,
})
export class PhHourglassLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassLowDuotoneIcon],svg[ph-hourglass-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 184v32a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8v-32Z" opacity=".2"></svg:path><svg:path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.08 16.08 0 0 0-6.35-12.76L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M178.23 176H77.33L128 138ZM72 216v-24h112v24ZM184 75.64L128 118L72 76V40h112Z"></svg:path></svg:g>`,
})
export class PhHourglassLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassLowFillIcon],svg[ph-hourglass-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.08 16.08 0 0 0-6.35-12.76L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M178.23 176H77.33L128 138ZM184 75.64L128 118L72 76V40h112Z"></svg:path>`,
})
export class PhHourglassLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassLowLightIcon],svg[ph-hourglass-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 75.64V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v36a14.06 14.06 0 0 0 5.6 11.2L118 128l-54.4 40.8A14.06 14.06 0 0 0 58 180v36a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-35.64a14.08 14.08 0 0 0-5.56-11.17L138 128l54.49-41.19A14.08 14.08 0 0 0 198 75.64M184.2 178H71.33L128 135.51Zm-.2 40H72a2 2 0 0 1-2-2v-26h116v26a2 2 0 0 1-2 2m2-142.36a2 2 0 0 1-.79 1.6L128 120.49L70.8 77.6A2 2 0 0 1 70 76V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhHourglassLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassLowThinIcon],svg[ph-hourglass-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 75.64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v36a12 12 0 0 0 4.8 9.6l56.53 42.4l-56.53 42.4A12 12 0 0 0 60 180v36a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-35.64a12.05 12.05 0 0 0-4.76-9.57L134.63 128l56.61-42.79a12.05 12.05 0 0 0 4.76-9.57M184 220H72a4 4 0 0 1-4-4v-28h120v28a4 4 0 0 1-4 4m4-40H68a4 4 0 0 1 1.6-3.2L128 133l58.42 44.16A4 4 0 0 1 188 180m0-104.36a4 4 0 0 1-1.59 3.19L128 123L69.6 79.2A4 4 0 0 1 68 76V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhHourglassLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassMediumIcon],svg[ph-hourglass-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.6A16.05 16.05 0 0 0 200 75.64M72 40h112v35.64L178.23 80H77.33L72 76Zm56 78L98.67 96h58.4Zm56 98H72v-36l48-36v24a8 8 0 0 0 16 0v-23.92l48 36.28Z"></svg:path>`,
})
export class PhHourglassMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassMediumBoldIcon],svg[ph-hourglass-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 75.64V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36l-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4A20.13 20.13 0 0 0 204 75.64M180 44v28H76V44Zm-52 69l-22.67-17h45.1Zm52 99H76v-30l40-30v16a12 12 0 0 0 24 0v-15.89l40 30.24Z"></svg:path>`,
})
export class PhHourglassMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassMediumDuotoneIcon],svg[ph-hourglass-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M180.92 88L128 128L74.67 88Z" opacity=".2"></svg:path><svg:path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M72 40h112v35.64L178.23 80H77.33L72 76Zm56 78L98.67 96h58.4Zm56 98H72v-36l48-36v24a8 8 0 0 0 16 0v-23.92l48 36.28Z"></svg:path></svg:g>`,
})
export class PhHourglassMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassMediumFillIcon],svg[ph-hourglass-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64m-16 104.72V216H72v-36l48-36v24a8 8 0 0 0 16 0v-23.92Zm0-104.72L178.23 80H77.33L72 76V40h112Z"></svg:path>`,
})
export class PhHourglassMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassMediumLightIcon],svg[ph-hourglass-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 75.64V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v36a14.06 14.06 0 0 0 5.6 11.2L118 128l-54.4 40.8A14.06 14.06 0 0 0 58 180v36a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-35.64a14.08 14.08 0 0 0-5.56-11.17L138 128l54.49-41.19A14.08 14.08 0 0 0 198 75.64M70 40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v35.64a2 2 0 0 1-.79 1.6L178.9 82H76.67l-5.87-4.4A2 2 0 0 1 70 76Zm58 80.49L92.67 94H163Zm58 59.87V216a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2v-36a2 2 0 0 1 .8-1.6L122 140v28a6 6 0 0 0 12 0v-27.94l51.21 38.7a2 2 0 0 1 .79 1.6"></svg:path>`,
})
export class PhHourglassMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassMediumThinIcon],svg[ph-hourglass-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 75.64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v36a12 12 0 0 0 4.8 9.6l56.53 42.4l-56.53 42.4A12 12 0 0 0 60 180v36a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-35.64a12.05 12.05 0 0 0-4.76-9.57L134.63 128l56.61-42.79a12.05 12.05 0 0 0 4.76-9.57M128 123L86.67 92H169Zm60 57.37V216a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-36a4 4 0 0 1 1.6-3.2L124 136v32a4 4 0 0 0 8 0v-32l54.41 41.13a4 4 0 0 1 1.59 3.23Zm0-104.72a4 4 0 0 1-1.59 3.19L179.58 84H76l-6.4-4.8A4 4 0 0 1 68 76V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhHourglassMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleIcon],svg[ph-hourglass-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.3 27.31l.12.13L116.43 128l-71.61 68.56l-.12.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M200 48l-72 68.92L56 48ZM56 208l72-68.92L200 208Z"></svg:path>`,
})
export class PhHourglassSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleBoldIcon],svg[ph-hourglass-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 193.68L145.35 128L214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18l68.6 65.68l-68.6 65.68l-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM190 52l-62 59.39L66 52ZM66 204l62-59.39L190 204Z"></svg:path>`,
})
export class PhHourglassSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleDuotoneIcon],svg[ph-hourglass-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M205.64 53.66L128 128L50.36 53.66A8 8 0 0 1 56 40h144a8 8 0 0 1 5.64 13.66M128 128l-77.64 74.34A8 8 0 0 0 56 216h144a8 8 0 0 0 5.66-13.66Z" opacity=".2"></svg:path><svg:path d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M200 48l-72 68.92L56 48ZM56 208l72-68.92L200 208Z"></svg:path></svg:g>`,
})
export class PhHourglassSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleFillIcon],svg[ph-hourglass-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.31 196.69A16 16 0 0 1 200 224H56a16 16 0 0 1-11.32-27.31a2 2 0 0 0 .13-.13L116.43 128L44.82 59.44a2 2 0 0 0-.13-.13A16 16 0 0 1 56 32h144a16 16 0 0 1 11.32 27.31a2 2 0 0 0-.13.13L139.57 128l71.61 68.56a2 2 0 0 0 .13.13"></svg:path>`,
})
export class PhHourglassSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleHighIcon],svg[ph-hourglass-simple-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.3 27.31l.12.13L116.43 128l-71.61 68.56l-.12.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M89.43 80h77.14L128 116.92ZM200 48l-16.7 16H72.72L56 48ZM56 208l72-68.92L200 208Z"></svg:path>`,
})
export class PhHourglassSimpleHighIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleHighBoldIcon],svg[ph-hourglass-simple-high-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 193.68L145.35 128L214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18l68.6 65.68l-68.6 65.68l-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM103.58 88h48.84L128 111.39ZM190 52l-12.51 12h-99L66 52ZM66 204l62-59.39L190 204Z"></svg:path>`,
})
export class PhHourglassSimpleHighBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleHighDuotoneIcon],svg[ph-hourglass-simple-high-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M186.48 72L128 128L69.52 72Z" opacity=".2"></svg:path><svg:path d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M89.43 80h77.14L128 116.92ZM200 48l-16.7 16H72.72L56 48ZM56 208l72-68.92L200 208Z"></svg:path></svg:g>`,
})
export class PhHourglassSimpleHighDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleHighFillIcon],svg[ph-hourglass-simple-high-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M200 48l-16.7 16H72.72L56 48ZM56 208l72-68.92L200 208Z"></svg:path>`,
})
export class PhHourglassSimpleHighFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleHighLightIcon],svg[ph-hourglass-simple-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.8 198l-73.12-70l73.12-70l.09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09l73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM84.45 78h87.1L128 119.69ZM54.16 47.23A1.91 1.91 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L184.08 66H71.92L54.56 49.38a1.91 1.91 0 0 1-.4-2.15m147.68 161.54A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L128 136.31l73.44 70.31a1.91 1.91 0 0 1 .4 2.15"></svg:path>`,
})
export class PhHourglassSimpleHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleHighThinIcon],svg[ph-hourglass-simple-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m133.78 128l74.68-71.51A12 12 0 0 0 200 36H56a12 12 0 0 0-8.49 20.49l.07.06L122.22 128l-74.61 71.45l-.07.06A12 12 0 0 0 56 220h144a12 12 0 0 0 8.42-20.55ZM79.49 76h97L128 122.46ZM52.33 46.47A3.93 3.93 0 0 1 56 44h144a4 4 0 0 1 2.89 6.77L184.87 68H71.13l-18-17.2a3.92 3.92 0 0 1-.8-4.33m151.34 163.06A3.93 3.93 0 0 1 200 212H56a4 4 0 0 1-2.86-6.8L128 133.54l74.8 71.63a3.93 3.93 0 0 1 .87 4.36"></svg:path>`,
})
export class PhHourglassSimpleHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleLightIcon],svg[ph-hourglass-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.8 198l-73.12-70l73.12-70l.09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09l73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM54.16 47.23A1.91 1.91 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L128 119.69L54.56 49.38a1.91 1.91 0 0 1-.4-2.15m147.68 161.54A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L128 136.31l73.44 70.31a1.91 1.91 0 0 1 .4 2.15"></svg:path>`,
})
export class PhHourglassSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleLowIcon],svg[ph-hourglass-simple-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.3 27.31l.12.13L116.43 128l-71.61 68.56l-.12.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M158.21 168H97.79L128 139.08ZM200 48l-72 68.92L56 48ZM56 208l25.06-24h93.84l25.1 24Z"></svg:path>`,
})
export class PhHourglassSimpleLowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleLowBoldIcon],svg[ph-hourglass-simple-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 193.68L145.35 128L214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18l68.6 65.68l-68.6 65.68l-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM148.25 164h-40.5L128 144.61ZM190 52l-62 59.39L66 52ZM66 204l16.71-16h90.62L190 204Z"></svg:path>`,
})
export class PhHourglassSimpleLowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleLowDuotoneIcon],svg[ph-hourglass-simple-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 216H56a8 8 0 0 1-5.66-13.66L77.87 176h100.26l27.51 26.34A8 8 0 0 1 200 216" opacity=".2"></svg:path><svg:path d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M158.21 168H97.79L128 139.08ZM200 48l-72 68.92L56 48ZM56 208l25.06-24h93.84l25.1 24Z"></svg:path></svg:g>`,
})
export class PhHourglassSimpleLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleLowFillIcon],svg[ph-hourglass-simple-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M158.21 168H97.79L128 139.08ZM200 48l-72 68.92L56 48Z"></svg:path>`,
})
export class PhHourglassSimpleLowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleLowLightIcon],svg[ph-hourglass-simple-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.8 198l-73.12-70l73.12-70l.09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09l73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM54.56 49.38A2 2 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L128 119.69ZM128 136.31L163.19 170H92.81Zm73.84 72.46A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L80.28 182h95.44l25.72 24.62a1.91 1.91 0 0 1 .4 2.15"></svg:path>`,
})
export class PhHourglassSimpleLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleLowThinIcon],svg[ph-hourglass-simple-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m133.78 128l74.68-71.51A12 12 0 0 0 200 36H56a12 12 0 0 0-8.49 20.49l.07.06L122.22 128l-74.61 71.45l-.07.06A12 12 0 0 0 56 220h144a12 12 0 0 0 8.42-20.55Zm34.38 44H87.84L128 133.54ZM52.33 46.47A3.93 3.93 0 0 1 56 44h144a4 4 0 0 1 2.89 6.77L128 122.46L53.17 50.8a3.92 3.92 0 0 1-.84-4.33m151.34 163.06A3.93 3.93 0 0 1 200 212H56a4 4 0 0 1-2.86-6.8L79.49 180h97l26.28 25.17a3.93 3.93 0 0 1 .9 4.36"></svg:path>`,
})
export class PhHourglassSimpleLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleMediumIcon],svg[ph-hourglass-simple-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.3 27.31l.12.13L116.43 128l-71.61 68.56l-.12.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M97.79 88h60.42L128 116.92ZM200 48l-25.08 24H81.08L56 48ZM56 208l64-61.26V168a8 8 0 0 0 16 0v-21.26L200 208Z"></svg:path>`,
})
export class PhHourglassSimpleMediumIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleMediumBoldIcon],svg[ph-hourglass-simple-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 193.68L145.35 128L214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18l68.6 65.68l-68.6 65.68l-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM107.75 92h40.5L128 111.39ZM190 52l-16.69 16H82.69L66 52ZM66 204l50-47.9V168a12 12 0 0 0 24 0v-11.9l50 47.9Z"></svg:path>`,
})
export class PhHourglassSimpleMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleMediumDuotoneIcon],svg[ph-hourglass-simple-medium-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M178.13 80L128 128L77.87 80Z" opacity=".2"></svg:path><svg:path d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M97.79 88h60.42L128 116.92ZM200 48l-25.08 24H81.08L56 48ZM56 208l64-61.26V168a8 8 0 0 0 16 0v-21.26L200 208Z"></svg:path></svg:g>`,
})
export class PhHourglassSimpleMediumDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleMediumFillIcon],svg[ph-hourglass-simple-medium-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.18 196.56L139.57 128l71.61-68.56a2 2 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31a2 2 0 0 1 .13.13L116.43 128l-71.61 68.56a2 2 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31a2 2 0 0 1-.14-.13M200 48l-25.08 24H81.08L56 48ZM56 208l64-61.26V168a8 8 0 0 0 16 0v-21.26L200 208Z"></svg:path>`,
})
export class PhHourglassSimpleMediumFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleMediumLightIcon],svg[ph-hourglass-simple-medium-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.8 198l-73.12-70l73.12-70l.09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09l73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM92.81 86h70.38L128 119.69ZM54.16 47.23A1.91 1.91 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L175.72 74H80.28L54.56 49.38a1.91 1.91 0 0 1-.4-2.15m147.68 161.54A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L122 142.05V168a6 6 0 0 0 12 0v-25.95l67.44 64.57a1.91 1.91 0 0 1 .4 2.15"></svg:path>`,
})
export class PhHourglassSimpleMediumLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleMediumThinIcon],svg[ph-hourglass-simple-medium-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m133.78 128l74.68-71.51A12 12 0 0 0 200 36H56a12 12 0 0 0-8.49 20.49l.07.06L122.22 128l-74.61 71.45l-.07.06A12 12 0 0 0 56 220h144a12 12 0 0 0 8.42-20.55ZM87.84 84h80.32L128 122.46ZM52.33 46.47A3.93 3.93 0 0 1 56 44h144a4 4 0 0 1 2.89 6.77L176.51 76h-97L53.17 50.8a3.92 3.92 0 0 1-.84-4.33m151.34 163.06A3.93 3.93 0 0 1 200 212H56a4 4 0 0 1-2.86-6.8L124 137.37V168a4 4 0 0 0 8 0v-30.63l70.8 67.8a3.93 3.93 0 0 1 .87 4.36"></svg:path>`,
})
export class PhHourglassSimpleMediumThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleThinIcon],svg[ph-hourglass-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m133.78 128l74.68-71.51A12 12 0 0 0 200 36H56a12 12 0 0 0-8.49 20.49l.07.06L122.22 128l-74.61 71.45l-.07.06A12 12 0 0 0 56 220h144a12 12 0 0 0 8.42-20.55ZM52.33 46.47A3.93 3.93 0 0 1 56 44h144a4 4 0 0 1 2.89 6.77L128 122.46L53.17 50.8a3.92 3.92 0 0 1-.84-4.33m151.34 163.06A3.93 3.93 0 0 1 200 212H56a4 4 0 0 1-2.86-6.8L128 133.54l74.8 71.63a3.93 3.93 0 0 1 .87 4.36"></svg:path>`,
})
export class PhHourglassSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHourglassThinIcon],svg[ph-hourglass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 75.64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v36a12 12 0 0 0 4.8 9.6l56.53 42.4l-56.53 42.4A12 12 0 0 0 60 180v36a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-35.64a12.05 12.05 0 0 0-4.76-9.57L134.63 128l56.61-42.79a12.05 12.05 0 0 0 4.76-9.57m-8 104.72V216a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-36a4 4 0 0 1 1.6-3.2L128 133l58.42 44.16a4 4 0 0 1 1.58 3.2m0-104.72a4 4 0 0 1-1.59 3.19L128 123L69.6 79.2A4 4 0 0 1 68 76V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhHourglassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseIcon],svg[ph-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56h32v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48v-88l80-80l80 80Z"></svg:path>`,
})
export class PhHouseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseBoldIcon],svg[ph-house-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.14 105.85l-80-80a20 20 0 0 0-28.28 0l-80 80A19.86 19.86 0 0 0 28 120v96a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-52h24v52a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-96a19.86 19.86 0 0 0-5.86-14.15M204 204h-40v-52a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H52v-82.35l76-76l76 76Z"></svg:path>`,
})
export class PhHouseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseDuotoneIcon],svg[ph-house-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 120v96h-64v-64h-48v64H40v-96a8 8 0 0 1 2.34-5.66l80-80a8 8 0 0 1 11.32 0l80 80A8 8 0 0 1 216 120" opacity=".2"></svg:path><svg:path d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56h32v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48v-88l80-80l80 80Z"></svg:path></svg:g>`,
})
export class PhHouseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseFillIcon],svg[ph-house-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 120v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8v-52a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v52a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a16 16 0 0 1 4.69-11.31l80-80a16 16 0 0 1 22.62 0l80 80A16 16 0 0 1 224 120"></svg:path>`,
})
export class PhHouseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseLightIcon],svg[ph-house-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.9 110.1l-80-80a14 14 0 0 0-19.8 0l-80 80A13.92 13.92 0 0 0 34 120v96a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-58h36v58a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6v-96a13.92 13.92 0 0 0-4.1-9.9M210 210h-52v-58a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v58H46v-90a2 2 0 0 1 .58-1.42l80-80a2 2 0 0 1 2.84 0l80 80A2 2 0 0 1 210 120Z"></svg:path>`,
})
export class PhHouseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseLineIcon],svg[ph-house-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M48 120l80-80l80 80v88h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48Zm96 88h-32v-48h32Z"></svg:path>`,
})
export class PhHouseLineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseLineBoldIcon],svg[ph-house-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 204h-12v-60a12 12 0 0 0 12.49-19.78l-98.35-98.37a20 20 0 0 0-28.28 0L15.51 124.2A12 12 0 0 0 28 144v60H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M52 121.65l76-76l76 76V204h-40v-52a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H52ZM140 204h-24v-40h24Z"></svg:path>`,
})
export class PhHouseLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseLineDuotoneIcon],svg[ph-house-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 116.69V216h-64v-64h-48v64H40v-99.31l82.34-82.35a8 8 0 0 1 11.32 0Z" opacity=".2"></svg:path><svg:path d="M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M48 120l80-80l80 80v88h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48Zm96 88h-32v-48h32Z"></svg:path></svg:g>`,
})
export class PhHouseLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseLineFillIcon],svg[ph-house-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-88 0h-48v-48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhHouseLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseLineLightIcon],svg[ph-house-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 210h-18v-78.83l5.76 5.76a6 6 0 0 0 8.48-8.49L137.9 30.09a14 14 0 0 0-19.8 0l-98.34 98.35a6 6 0 0 0 8.48 8.49l5.76-5.76V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M46 119.17l80.58-80.59a2 2 0 0 1 2.84 0L210 119.17V210h-52v-58a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v58H46ZM146 210h-36v-52h36Z"></svg:path>`,
})
export class PhHouseLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseLineThinIcon],svg[ph-house-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 212h-20v-85.66l9.17 9.17a4 4 0 1 0 5.66-5.66l-98.34-98.34a12 12 0 0 0-17 0l-98.32 98.34a4 4 0 1 0 5.66 5.66l9.17-9.17V212H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M44 118.34l81.17-81.17a4 4 0 0 1 5.66 0L212 118.34V212h-56v-60a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v60H44ZM148 212h-40v-56h40Z"></svg:path>`,
})
export class PhHouseLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseSimpleIcon],svg[ph-house-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208H48v-88l80-80l80 80Z"></svg:path>`,
})
export class PhHouseSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseSimpleBoldIcon],svg[ph-house-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.14 105.85l-80-80a20 20 0 0 0-28.28 0l-80 80A19.86 19.86 0 0 0 28 120v96a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12v-96a19.86 19.86 0 0 0-5.86-14.15M204 204H52v-82.35l76-76l76 76Z"></svg:path>`,
})
export class PhHouseSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseSimpleDuotoneIcon],svg[ph-house-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 120v96H40v-96a8 8 0 0 1 2.34-5.66l80-80a8 8 0 0 1 11.32 0l80 80A8 8 0 0 1 216 120" opacity=".2"></svg:path><svg:path d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208H48v-88l80-80l80 80Z"></svg:path></svg:g>`,
})
export class PhHouseSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseSimpleFillIcon],svg[ph-house-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 120v96a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a15.87 15.87 0 0 1 4.69-11.32l80-80a16 16 0 0 1 22.62 0l80 80A15.87 15.87 0 0 1 224 120"></svg:path>`,
})
export class PhHouseSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseSimpleLightIcon],svg[ph-house-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.9 110.1l-80-80a14 14 0 0 0-19.8 0l-80 80A13.92 13.92 0 0 0 34 120v96a6 6 0 0 0 6 6h176a6 6 0 0 0 6-6v-96a13.92 13.92 0 0 0-4.1-9.9M210 210H46v-90a2 2 0 0 1 .58-1.42l80-80a2 2 0 0 1 2.84 0l80 80A2 2 0 0 1 210 120Z"></svg:path>`,
})
export class PhHouseSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseSimpleThinIcon],svg[ph-house-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 111.51l-80-80a12 12 0 0 0-17 0l-80 80A12 12 0 0 0 36 120v96a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4v-96a12 12 0 0 0-3.51-8.49M212 212H44v-92a4 4 0 0 1 1.17-2.83l80-80a4 4 0 0 1 5.66 0l80 80A4 4 0 0 1 212 120Z"></svg:path>`,
})
export class PhHouseSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHouseThinIcon],svg[ph-house-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 111.51l-80-80a12 12 0 0 0-17 0l-80 80A12 12 0 0 0 36 120v96a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-60h40v60a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-96a12 12 0 0 0-3.51-8.49M212 212h-56v-60a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v60H44v-92a4 4 0 0 1 1.17-2.83l80-80a4 4 0 0 1 5.66 0l80 80A4 4 0 0 1 212 120Z"></svg:path>`,
})
export class PhHouseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHurricaneIcon],svg[ph-hurricane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m30.32-98.64l9.41-35.3a8 8 0 0 0-9.41-9.88a195.9 195.9 0 0 0-58.65 25.09C60.63 50.37 40 85.89 40 128a88.11 88.11 0 0 0 57.68 82.64l-9.41 35.3a8 8 0 0 0 9.41 9.88a195.9 195.9 0 0 0 58.65-25.09C195.37 205.63 216 170.11 216 128a88.1 88.1 0 0 0-57.68-82.64M148.06 217a184 184 0 0 1-40.68 19.37l7.73-29a8 8 0 0 0-5.67-9.79A72.06 72.06 0 0 1 56 128c0-36.77 17.48-66.72 51.94-89a184 184 0 0 1 40.68-19.37l-7.73 29a8 8 0 0 0 5.67 9.79A72.06 72.06 0 0 1 200 128c0 36.77-17.48 66.72-51.94 89"></svg:path>`,
})
export class PhHurricaneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHurricaneBoldIcon],svg[ph-hurricane-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m35.37-97l8.14-27.65A12 12 0 0 0 157.89.19a194 194 0 0 0-60.12 23.55C57.36 48.28 36 84.33 36 128a92.15 92.15 0 0 0 56.63 85l-8.14 27.65A12 12 0 0 0 96 256a11.6 11.6 0 0 0 2.11-.19a194 194 0 0 0 60.12-23.55C198.64 207.72 220 171.67 220 128a92.15 92.15 0 0 0-56.63-85m-17 168.35a168.7 168.7 0 0 1-32.74 15.28l5.28-18a12 12 0 0 0-8.42-15A68 68 0 0 1 60 128c0-35.12 16.7-63.18 49.65-83.39a169 169 0 0 1 32.74-15.29l-5.28 18a12 12 0 0 0 8.42 15A68 68 0 0 1 196 128c0 35.12-16.7 63.17-49.65 83.39Z"></svg:path>`,
})
export class PhHurricaneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHurricaneDuotoneIcon],svg[ph-hurricane-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M148.62 50.68L160 8S48 32 48 128a80 80 0 0 0 59.38 77.32L96 248s112-24 112-120a80 80 0 0 0-59.38-77.32M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m30.32-98.64l9.41-35.3a8 8 0 0 0-9.41-9.88a195.9 195.9 0 0 0-58.65 25.09C60.63 50.37 40 85.89 40 128a88.11 88.11 0 0 0 57.68 82.64l-9.41 35.3a8 8 0 0 0 9.41 9.88a195.9 195.9 0 0 0 58.65-25.09C195.37 205.63 216 170.11 216 128a88.1 88.1 0 0 0-57.68-82.64M148.06 217a184 184 0 0 1-40.68 19.37l7.73-29a8 8 0 0 0-5.67-9.79A72.06 72.06 0 0 1 56 128c0-36.77 17.48-66.72 51.94-89a184 184 0 0 1 40.68-19.37l-7.73 29a8 8 0 0 0 5.67 9.79A72.06 72.06 0 0 1 200 128c0 36.77-17.48 66.72-51.94 89"></svg:path></svg:g>`,
})
export class PhHurricaneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHurricaneFillIcon],svg[ph-hurricane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158.32 45.36l9.41-35.3a8 8 0 0 0-9.41-9.88a195.9 195.9 0 0 0-58.65 25.09C60.63 50.37 40 85.89 40 128a88.11 88.11 0 0 0 57.68 82.64l-9.41 35.3a8 8 0 0 0 9.41 9.88a195.9 195.9 0 0 0 58.65-25.09C195.37 205.63 216 170.11 216 128a88.1 88.1 0 0 0-57.68-82.64M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhHurricaneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHurricaneLightIcon],svg[ph-hurricane-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m27.91-99.37l9.89-37.09a6 6 0 0 0-7.06-7.41a194 194 0 0 0-58 24.82C62.32 51.66 42 86.6 42 128a86.1 86.1 0 0 0 58.09 81.37l-9.89 37.08a6 6 0 0 0 7.06 7.42a194 194 0 0 0 58-24.82C193.68 204.34 214 169.4 214 128a86.09 86.09 0 0 0-58.09-81.37m-6.86 172.13a187.6 187.6 0 0 1-44.55 20.67l8.68-32.57a6 6 0 0 0-4.26-7.34A74.06 74.06 0 0 1 54 128c0-37.53 17.82-68.07 53-90.77a188 188 0 0 1 44.5-20.66l-8.68 32.57a6 6 0 0 0 4.26 7.34A74.06 74.06 0 0 1 202 128c0 37.53-17.82 68.07-52.95 90.76"></svg:path>`,
})
export class PhHurricaneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHurricaneThinIcon],svg[ph-hurricane-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m25.49-100.06L163.87 9a4 4 0 0 0-4.71-4.94a191.4 191.4 0 0 0-57.32 24.54C64 53 44 87.32 44 128a84.08 84.08 0 0 0 58.51 80.06L92.13 247a4 4 0 0 0 4.71 4.94a191.3 191.3 0 0 0 57.32-24.55C192 203 212 168.68 212 128a84.08 84.08 0 0 0-58.51-80.06M150 220.51a190 190 0 0 1-48.39 21.87l9.61-36a4 4 0 0 0-2.84-4.9A76.06 76.06 0 0 1 52 128c0-38.29 18.16-69.41 54-92.51a190 190 0 0 1 48.39-21.87l-9.61 36a4 4 0 0 0 2.84 4.9A76.06 76.06 0 0 1 204 128c0 38.29-18.16 69.41-54 92.51"></svg:path>`,
})
export class PhHurricaneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIceCreamIcon],svg[ph-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 97.37V96a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 144h3.29l54.82 95.94a16 16 0 0 0 27.78 0L196.71 144H200a24 24 0 0 0 8-46.63M77.71 144h19.36l40.61 71.06L128 232Zm57.08 0l21.75 38.06l-9.65 16.88L115.5 144Zm31 21.94L153.21 144h25.08ZM200 128H56a8 8 0 0 1 0-16a8 8 0 0 0 8-8v-8a64 64 0 0 1 128 0v8a8 8 0 0 0 8 8a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhIceCreamIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIceCreamBoldIcon],svg[ph-ice-cream-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 116a32.14 32.14 0 0 0-16.37-27.92a84 84 0 0 0-167.26 0a32 32 0 0 0 12.51 59.77l53.75 94.07a20 20 0 0 0 34.74 0l53.75-94.07A32 32 0 0 0 228 116m-169.61-7.84A12 12 0 0 0 68 96.4V96a60 60 0 0 1 120 0v.4a12 12 0 0 0 9.61 11.76A8 8 0 0 1 196 124H60a8 8 0 0 1-1.61-15.84m113 39.84l-16.5 28.88l-16.5-28.88Zm-86.78 0h26.14l30.32 53.06L128 223.94Z"></svg:path>`,
})
export class PhIceCreamBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIceCreamDuotoneIcon],svg[ph-ice-cream-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 120a16 16 0 0 1-16 16H56a16 16 0 0 1 0-32v-8a72 72 0 0 1 144 0v8a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 97.37V96a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 144h3.29l54.82 95.94a16 16 0 0 0 27.78 0L196.71 144H200a24 24 0 0 0 8-46.63M77.71 144h19.36l40.61 71.06L128 232Zm57.08 0l21.75 38.06l-9.65 16.88L115.5 144Zm31 21.94L153.21 144h25.08ZM200 128H56a8 8 0 0 1 0-16a8 8 0 0 0 8-8v-8a64 64 0 0 1 128 0v8a8 8 0 0 0 8 8a8 8 0 0 1 0 16"></svg:path></svg:g>`,
})
export class PhIceCreamDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIceCreamFillIcon],svg[ph-ice-cream-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 97.37V96a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 144h3.29l54.82 95.94a16 16 0 0 0 27.78 0L196.71 144H200a24 24 0 0 0 8-46.63m-61.11 101.57L115.5 144h19.29l21.75 38.06ZM77.71 144h19.36l40.61 71.06L128 232Zm88 21.94L153.21 144h25.08Z"></svg:path>`,
})
export class PhIceCreamFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIceCreamLightIcon],svg[ph-ice-cream-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 98.83V96a78 78 0 0 0-156 0v2.83A22 22 0 0 0 56 142h4.45l55.39 97a14 14 0 0 0 24.32 0l55.39-97H200a22 22 0 0 0 6-43.17M129.74 233a2 2 0 0 1-3.48 0l-52-91h24L140 215.06Zm6.26-91l22.89 40.06l-12 20.91l-34.84-61Zm29.8 28l-16-28h32Zm34.2-40H56a10 10 0 0 1 0-20a6 6 0 0 0 6-6v-8a66 66 0 0 1 132 0v8a6 6 0 0 0 6 6a10 10 0 0 1 0 20"></svg:path>`,
})
export class PhIceCreamLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIceCreamThinIcon],svg[ph-ice-cream-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 100.4V96a76 76 0 0 0-152 0v4.4a20 20 0 0 0 4 39.6h5.61l56 97.95a12 12 0 0 0 20.84 0l56-97.95H200a20 20 0 0 0 4-39.6M131.47 234a4 4 0 0 1-6.94 0l-53.71-94h28.57l42.9 75.06Zm5.64-94l24 42.06L146.89 207l-38.28-67Zm28.64 34l-19.43-34h38.86ZM200 132H56a12 12 0 0 1 0-24a4 4 0 0 0 4-4v-8a68 68 0 0 1 136 0v8a4 4 0 0 0 4 4a12 12 0 0 1 0 24"></svg:path>`,
})
export class PhIceCreamThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationBadgeIcon],svg[ph-identification-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M75.19 198.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.9 67.9 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 73.6 187.2a8 8 0 0 0 1.59 11.2M128 112a24 24 0 1 1-24 24a24 24 0 0 1 24-24m72-88H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144ZM88 64a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhIdentificationBadgeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationBadgeBoldIcon],svg[ph-identification-badge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM84 68a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m8.8 127.37a48 48 0 0 1 70.4 0a12 12 0 0 0 17.6-16.32a72 72 0 0 0-19.21-14.68a44 44 0 1 0-67.19 0a72.1 72.1 0 0 0-19.2 14.68a12 12 0 0 0 17.6 16.32M128 116a20 20 0 1 1-20 20a20 20 0 0 1 20-20"></svg:path>`,
})
export class PhIdentificationBadgeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationBadgeDuotoneIcon],svg[ph-identification-badge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 32H56a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-72 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M75.19 198.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.9 67.9 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.9 67.9 0 0 0 73.6 187.2a8 8 0 0 0 1.59 11.2M128 112a24 24 0 1 1-24 24a24 24 0 0 1 24-24m72-88H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144ZM88 64a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhIdentificationBadgeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationBadgeFillIcon],svg[ph-identification-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M96 48h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m84.81 150.4a8 8 0 0 1-11.21-1.6a52 52 0 0 0-83.2 0a8 8 0 1 1-12.8-9.6a67.9 67.9 0 0 1 27.4-21.69a40 40 0 1 1 53.94 0a67.9 67.9 0 0 1 27.46 21.69a8 8 0 0 1-1.59 11.2M152 136a24 24 0 1 1-24-24a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhIdentificationBadgeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationBadgeLightIcon],svg[ph-identification-badge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M151.11 166.13a38 38 0 1 0-46.22 0A65.75 65.75 0 0 0 75.2 188.4a6 6 0 0 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.2a65.75 65.75 0 0 0-29.69-22.27M128 110a26 26 0 1 1-26 26a26 26 0 0 1 26-26m72-84H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2ZM90 64a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhIdentificationBadgeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationBadgeThinIcon],svg[ph-identification-badge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.7 166.75a36 36 0 1 0-37.4 0a63.6 63.6 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8a56 56 0 0 1 89.6 0a4 4 0 0 0 6.4-4.8a63.65 63.65 0 0 0-32.5-22.85M100 136a28 28 0 1 1 28 28a28 28 0 0 1-28-28M200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM92 64a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhIdentificationBadgeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationCardIcon],svg[ph-identification-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 112a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m-8 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m40-80v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144zm-80.26-34a8 8 0 1 1-15.5 4c-2.63-10.26-13.06-18-24.25-18s-21.61 7.74-24.25 18a8 8 0 1 1-15.5-4a39.84 39.84 0 0 1 17.19-23.34a32 32 0 1 1 45.12 0a39.76 39.76 0 0 1 17.2 23.34ZM96 136a16 16 0 1 0-16-16a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhIdentificationCardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationCardBoldIcon],svg[ph-identification-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 108a12 12 0 0 1 12-12h28a12 12 0 0 1 0 24h-28a12 12 0 0 1-12-12m40 28h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m48-80v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v136h168ZM58.28 159.37A43.8 43.8 0 0 1 71.53 142a36 36 0 1 1 56.94 0a43.84 43.84 0 0 1 13.26 17.37a12 12 0 0 1-22.15 9.26C116.48 161.19 108.42 156 100 156s-16.47 5.2-19.59 12.63a12 12 0 1 1-22.13-9.26M88 120a12 12 0 1 0 12-12a12 12 0 0 0-12 12"></svg:path>`,
})
export class PhIdentificationCardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationCardDuotoneIcon],svg[ph-identification-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 144a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M200 112a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m-8 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m40-80v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144zm-80.26-34a8 8 0 1 1-15.5 4c-2.63-10.26-13.06-18-24.25-18s-21.61 7.74-24.25 18a8 8 0 1 1-15.5-4a39.84 39.84 0 0 1 17.19-23.34a32 32 0 1 1 45.12 0a39.76 39.76 0 0 1 17.2 23.34ZM96 136a16 16 0 1 0-16-16a16 16 0 0 0 16 16"></svg:path></svg:g>`,
})
export class PhIdentificationCardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationCardFillIcon],svg[ph-identification-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 120a16 16 0 1 1-16-16a16 16 0 0 1 16 16m120-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-96.25 110a39.76 39.76 0 0 0-17.19-23.34a32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4M200 144a8 8 0 0 0-8-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8m0-32a8 8 0 0 0-8-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhIdentificationCardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationCardLightIcon],svg[ph-identification-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 112a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-6 26h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m38-82v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Zm-84.19 110.51a6 6 0 0 1-11.62 3C119.34 158.38 108.08 150 96 150s-23.33 8.38-26.19 19.5a6 6 0 0 1-11.62-3A38 38 0 0 1 76.78 143a30 30 0 1 1 38.45 0a38 38 0 0 1 18.58 23.51M96 138a18 18 0 1 0-18-18a18 18 0 0 0 18 18"></svg:path>`,
})
export class PhIdentificationCardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIdentificationCardThinIcon],svg[ph-identification-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 112a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-4 28h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m36-84v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Zm-88.13 111a4 4 0 1 1-7.74 2C121.06 157 109 148 96 148s-25 9-28.13 21a4 4 0 0 1-3.87 3a4 4 0 0 1-1-.13a4 4 0 0 1-2.87-4.87a36.28 36.28 0 0 1 20.43-23.66a28 28 0 1 1 30.88 0A36.2 36.2 0 0 1 131.87 167M96 140a20 20 0 1 0-20-20a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhIdentificationCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageIcon],svg[ph-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52l80 80H40Zm176 28h-21.37l-36-36l20-20L216 181.38zm-72-100a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhImageIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageBoldIcon],svg[ph-image-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 96a16 16 0 1 1 16 16a16 16 0 0 1-16-16m92-40v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20M44 60v79.72l33.86-33.86a20 20 0 0 1 28.28 0L147.31 147l17.18-17.17a20 20 0 0 1 28.28 0L212 149.09V60Zm0 136h118.34L92 125.66l-48 48Zm168 0v-13l-33.37-33.37L164.28 164l32 32Z"></svg:path>`,
})
export class PhImageBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageBrokenIcon],svg[ph-image-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h64a8 8 0 0 0 7.59-5.47l14.83-44.48L163 151.43a8.07 8.07 0 0 0 4.46-4.46l14.62-36.55l44.48-14.83A8 8 0 0 0 232 88V56a16 16 0 0 0-16-16M112.41 157.47L98.23 200H40v-28l52-52l30.42 30.42l-5.42 2.15a8 8 0 0 0-4.59 4.9M216 82.23l-42.53 14.18a8 8 0 0 0-4.9 4.62l-14.72 36.82l-15.27 6.15l-35.27-35.27a16 16 0 0 0-22.62 0L40 149.37V56h176Zm12.68 33a8 8 0 0 0-7.21-1.1l-23.8 7.94a8 8 0 0 0-4.9 4.61l-14.31 35.77l-35.77 14.31a8 8 0 0 0-4.61 4.9l-7.94 23.8a8 8 0 0 0 7.59 10.54H216a16 16 0 0 0 16-16v-78.27a8 8 0 0 0-3.32-6.49ZM216 200h-67.17l3.25-9.75l35.51-14.2a8.07 8.07 0 0 0 4.46-4.46l14.2-35.51l9.75-3.25Z"></svg:path>`,
})
export class PhImageBrokenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageBrokenBoldIcon],svg[ph-image-broken-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231 112a12 12 0 0 0-10.81-1.65l-23.81 7.93a12 12 0 0 0-7.34 6.93l-13.67 34.18l-34.18 13.67a12 12 0 0 0-6.93 7.34l-7.93 23.81a12 12 0 0 0 11.4 15.79H216a20 20 0 0 0 20-20v-78.27a12 12 0 0 0-5-9.73m-19 84h-57.62l.91-2.73l33.79-13.51a12 12 0 0 0 6.68-6.68l13.51-33.79l2.73-.91Zm4-160H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h55.57a12 12 0 0 0 11.43-8.21L123.21 163l35.09-14a12 12 0 0 0 6.7-6.7l14-35.09L227.79 91A12 12 0 0 0 236 79.57V56a20 20 0 0 0-20-20M102.2 150.16L86.92 196H44v-22.34l48-48l17.14 17.14a12 12 0 0 0-6.94 7.36M212 70.92L166.16 86.2a12 12 0 0 0-7.35 6.93l-14.2 35.48l-11.22 4.49l-27.25-27.24a20 20 0 0 0-28.28 0L44 139.72V60h168Z"></svg:path>`,
})
export class PhImageBrokenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageBrokenDuotoneIcon],svg[ph-image-broken-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v32l-48 16l-16 40l-23.35 9.34l-39-39a8 8 0 0 0-11.32 0L32 168.69V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h64a8 8 0 0 0 7.59-5.47l14.83-44.48L163 151.43a8.07 8.07 0 0 0 4.46-4.46l14.62-36.55l44.48-14.83A8 8 0 0 0 232 88V56a16 16 0 0 0-16-16M112.41 157.47L98.23 200H40v-28l52-52l30.42 30.42l-5.42 2.15a8 8 0 0 0-4.59 4.9M216 82.23l-42.53 14.18a8 8 0 0 0-4.9 4.62l-14.72 36.82l-15.27 6.15l-35.27-35.27a16 16 0 0 0-22.62 0L40 149.37V56h176Zm12.68 33a8 8 0 0 0-7.21-1.1l-23.8 7.94a8 8 0 0 0-4.9 4.61l-14.31 35.77l-35.77 14.31a8 8 0 0 0-4.61 4.9l-7.94 23.8a8 8 0 0 0 7.59 10.54H216a16 16 0 0 0 16-16v-78.27a8 8 0 0 0-3.32-6.49ZM216 200h-67.17l3.25-9.75l35.51-14.2a8.07 8.07 0 0 0 4.46-4.46l14.2-35.51l9.75-3.25Z"></svg:path></svg:g>`,
})
export class PhImageBrokenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageBrokenFillIcon],svg[ph-image-broken-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h64a8 8 0 0 0 7.59-5.47l14.83-44.48L163 151.43a8.07 8.07 0 0 0 4.46-4.46l14.62-36.55l44.48-14.83A8 8 0 0 0 232 88V56a16 16 0 0 0-16-16m-99 112.57a8 8 0 0 0-4.62 4.9L98.23 200H40v-39.31l46.34-46.35a8 8 0 0 1 11.32 0l32.84 32.84Zm115-30.84V200a16 16 0 0 1-16 16h-78.27a8 8 0 0 1-7.59-10.53l7.94-23.8a8 8 0 0 1 4.61-4.9l35.77-14.31l14.31-35.77a8 8 0 0 1 4.9-4.61l23.8-7.94a8 8 0 0 1 10.53 7.59"></svg:path>`,
})
export class PhImageBrokenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageBrokenLightIcon],svg[ph-image-broken-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h64a6 6 0 0 0 5.69-4.1l15.12-45.36l37.42-15a6 6 0 0 0 3.34-3.34l15-37.42l45.33-15.09A6 6 0 0 0 230 88V56a14 14 0 0 0-14-14m-98.23 112.43a6 6 0 0 0-3.46 3.67L99.68 202H40a2 2 0 0 1-2-2v-28.83l52.58-52.58a2 2 0 0 1 2.83 0L126 151.15ZM218 83.68l-43.9 14.63a6 6 0 0 0-3.67 3.46l-15.05 37.61l-17.28 6.92l-36.2-36.2a14 14 0 0 0-19.8 0L38 154.2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm9.51 33.18a6 6 0 0 0-5.41-.82L198.3 124a6 6 0 0 0-3.67 3.47L180 164l-36.56 14.63a6 6 0 0 0-3.44 3.67l-8 23.8a6 6 0 0 0 5.69 7.9H216a14 14 0 0 0 14-14v-78.27a6 6 0 0 0-2.49-4.87M218 200a2 2 0 0 1-2 2h-69.94l4.42-13.26l36.37-14.55a6 6 0 0 0 3.34-3.34l14.55-36.37l13.26-4.42Z"></svg:path>`,
})
export class PhImageBrokenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageBrokenThinIcon],svg[ph-image-broken-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h64a4 4 0 0 0 3.79-2.74L123.21 163l38.28-15.31a4 4 0 0 0 2.22-2.22L179 107.21l46.24-15.42A4 4 0 0 0 228 88V56a12 12 0 0 0-12-12m-97.49 112.29a4 4 0 0 0-2.3 2.45L101.12 204H40a4 4 0 0 1-4-4v-29.66l53.17-53.17a4 4 0 0 1 5.66 0l34.71 34.71ZM220 85.12l-45.26 15.09a4 4 0 0 0-2.45 2.3l-15.37 38.41l-19.3 7.73l-37.13-37.14a12 12 0 0 0-17 0L36 159V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm6.34 33.37a4 4 0 0 0-3.6-.55l-23.81 7.93a4 4 0 0 0-2.44 2.31l-15 37.36l-37.36 15a4 4 0 0 0-2.31 2.44l-7.93 23.81a4 4 0 0 0 .55 3.6a4 4 0 0 0 3.24 1.66H216a12 12 0 0 0 12-12v-78.32a4 4 0 0 0-1.66-3.24M220 200a4 4 0 0 1-4 4h-72.72l5.59-16.78l37.23-14.89a4 4 0 0 0 2.23-2.23l14.89-37.23l16.78-5.59Z"></svg:path>`,
})
export class PhImageBrokenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageDuotoneIcon],svg[ph-image-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v122.06l-39.72-39.72a8 8 0 0 0-11.31 0L147.31 164l-49.65-49.66a8 8 0 0 0-11.32 0L32 168.69V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52l80 80H40Zm176 28h-21.37l-36-36l20-20L216 181.38zm-72-100a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhImageDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageFillIcon],svg[ph-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-60 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m60 112H40v-39.31l46.34-46.35a8 8 0 0 1 11.32 0L165 181.66a8 8 0 0 0 11.32-11.32l-17.66-17.65L173 138.34a8 8 0 0 1 11.31 0L216 170.07z"></svg:path>`,
})
export class PhImageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageLightIcon],svg[ph-image-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v107.57l-29.47-29.47a14 14 0 0 0-19.8 0l-21.42 21.42l-45.41-45.42a14 14 0 0 0-19.8 0L38 154.2V56a2 2 0 0 1 2-2m-2 146v-28.83l52.58-52.58a2 2 0 0 1 2.84 0L176.83 202H40a2 2 0 0 1-2-2m178 2h-22.2l-38-38l21.41-21.42a2 2 0 0 1 2.83 0l38 38V200a2 2 0 0 1-2.04 2m-70-102a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhImageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageSquareIcon],svg[ph-image-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 48h160v77.38l-24.69-24.7a16 16 0 0 0-22.62 0L53.37 208H48Zm160 160H76l96-96l36 36zM96 120a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhImageSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageSquareBoldIcon],svg[ph-image-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v63.72l-17.86-17.86a20 20 0 0 0-28.28 0L52 203.72V52ZM85.66 204L172 117.66l32 32V204ZM76 96a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhImageSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageSquareDuotoneIcon],svg[ph-image-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40H48a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h8.69l109.65-109.66a8 8 0 0 1 11.32 0L216 144.69V48a8 8 0 0 0-8-8M96 112a16 16 0 1 1 16-16a16 16 0 0 1-16 16" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 48h160v77.38l-24.69-24.7a16 16 0 0 0-22.62 0L53.37 208H48Zm160 160H76l96-96l36 36zM96 120a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path></svg:g>`,
})
export class PhImageSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageSquareFillIcon],svg[ph-image-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 48h160v77.38l-24.69-24.7a16 16 0 0 0-22.62 0L53.37 208H48Zm32 48a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhImageSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageSquareLightIcon],svg[ph-image-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M46 208V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2v82.2l-28.1-28.1a14 14 0 0 0-19.8 0L54.2 210H48a2 2 0 0 1-2-2m162 2H71.17l99.41-99.41a2 2 0 0 1 2.83 0L210 147.17V208a2 2 0 0 1-2 2M96 118a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10"></svg:path>`,
})
export class PhImageSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageSquareThinIcon],svg[ph-image-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M44 208V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v87l-31.51-31.52a12 12 0 0 0-17 0L55 212h-7a4 4 0 0 1-4-4m164 4H66.34l102.83-102.83a4 4 0 0 1 5.66 0L212 146.34V208a4 4 0 0 1-4 4M96 116a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhImageSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImageThinIcon],svg[ph-image-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v112.4l-32.89-32.89a12 12 0 0 0-17 0l-22.83 22.83l-46.82-46.83a12 12 0 0 0-17 0L36 159V56a4 4 0 0 1 4-4m-4 148v-29.66l53.17-53.17a4 4 0 0 1 5.66 0L181.66 204H40a4 4 0 0 1-4-4m180 4h-23l-40-40l22.83-22.83a4 4 0 0 1 5.66 0L220 179.71V200a4 4 0 0 1-4 4m-68-104a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhImageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesIcon],svg[ph-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 56h144v62.75l-10.07-10.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L72 109.37Zm112 144H40V88h16v80a16 16 0 0 0 16 16h112Zm32-32H72v-36l36-36l49.66 49.66a8 8 0 0 0 11.31 0L194.63 120L216 141.38zm-56-84a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhImagesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesBoldIcon],svg[ph-images-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m76-32v104a20 20 0 0 1-20 20h-12v20a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h20V56a20 20 0 0 1 20-20h136a20 20 0 0 1 20 20m-56 124H80a20 20 0 0 1-20-20V92H44v104h136Zm-21.66-24L124 121.66L89.66 156ZM212 60H84v67.72l25.86-25.86a20 20 0 0 1 28.28 0L192.28 156H212Z"></svg:path>`,
})
export class PhImagesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesDuotoneIcon],svg[ph-images-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v82.06l-23.72-23.72a8 8 0 0 0-11.31 0L163.31 140l-49.65-49.66a8 8 0 0 0-11.32 0L64 128.69V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 56h144v62.75l-10.07-10.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L72 109.37Zm112 144H40V88h16v80a16 16 0 0 0 16 16h112Zm32-32H72v-36l36-36l49.66 49.66a8 8 0 0 0 11.31 0L194.63 120L216 141.38zm-56-84a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhImagesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesFillIcon],svg[ph-images-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-44 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 128H40V88h16v80a16 16 0 0 0 16 16h112Zm32-32H72v-47.31l30.34-30.35a8 8 0 0 1 11.32 0L163.31 140L189 114.34a8 8 0 0 1 11.31 0L216 130.07z"></svg:path>`,
})
export class PhImagesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesLightIcon],svg[ph-images-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M70 56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2v67.57l-13.47-13.47a14 14 0 0 0-19.8 0l-21.42 21.41L117.9 86.1a14 14 0 0 0-19.8 0L70 114.2Zm116 144a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h18v82a14 14 0 0 0 14 14h114Zm30-30H72a2 2 0 0 1-2-2v-36.83l36.58-36.58a2 2 0 0 1 2.83 0l49.66 49.66a6 6 0 0 0 8.49 0l25.65-25.66a2 2 0 0 1 2.83 0l22 22V168a2 2 0 0 1-2.04 2m-54-86a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhImagesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesSquareIcon],svg[ph-images-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H80a16 16 0 0 0-16 16v16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h128v69.38l-16.7-16.7a16 16 0 0 0-22.62 0L93.37 176H80Zm96 160H48V80h16v96a16 16 0 0 0 16 16h96Zm32-32h-92l64-64l28 28zm-88-64a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhImagesSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesSquareBoldIcon],svg[ph-images-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H88a20 20 0 0 0-20 20v12H48a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-20h12a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M92 52h112v59.72l-9.86-9.86a20 20 0 0 0-28.28 0L103.72 164H92Zm80 152H52V84h16v84a20 20 0 0 0 20 20h84Zm-34.34-40L180 121.66l24 24V164ZM108 88a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhImagesSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesSquareDuotoneIcon],svg[ph-images-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40H80a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h16.69l77.65-77.66a8 8 0 0 1 11.32 0L216 136.69V48a8 8 0 0 0-8-8m-88 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16" opacity=".2"></svg:path><svg:path d="M208 32H80a16 16 0 0 0-16 16v16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h128v69.38l-16.7-16.7a16 16 0 0 0-22.62 0L93.37 176H80Zm96 160H48V80h16v96a16 16 0 0 0 16 16h96Zm32-32h-92l64-64l28 28zm-88-64a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path></svg:g>`,
})
export class PhImagesSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesSquareFillIcon],svg[ph-images-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H80a16 16 0 0 0-16 16v16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 48h128v69.38l-16.7-16.7a16 16 0 0 0-22.62 0L93.37 176H80Zm96 160H48V80h16v96a16 16 0 0 0 16 16h96ZM104 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhImagesSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesSquareLightIcon],svg[ph-images-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H80a14 14 0 0 0-14 14v18H48a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M78 48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v74.2l-20.1-20.1a14 14 0 0 0-19.8 0L94.2 178H80a2 2 0 0 1-2-2Zm100 160a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h18v98a14 14 0 0 0 14 14h98Zm30-30h-96.83l67.41-67.41a2 2 0 0 1 2.83 0L210 139.17V176a2 2 0 0 1-2 2m-88-68a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10"></svg:path>`,
})
export class PhImagesSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesSquareThinIcon],svg[ph-images-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H80a12 12 0 0 0-12 12v20H48a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M76 48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v79l-23.51-23.52a12 12 0 0 0-17 0L95 180H80a4 4 0 0 1-4-4Zm104 160a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h20v100a12 12 0 0 0 12 12h100Zm28-28H106.34l70.83-70.83a4 4 0 0 1 5.66 0L212 138.34V176a4 4 0 0 1-4 4m-88-72a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhImagesSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phImagesThinIcon],svg[ph-images-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M68 56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v72.4l-16.89-16.89a12 12 0 0 0-17 0l-22.83 22.83l-46.79-46.83a12 12 0 0 0-17 0L68 119Zm120 144a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h20v84a12 12 0 0 0 12 12h116Zm28-28H72a4 4 0 0 1-4-4v-37.66l37.17-37.17a4 4 0 0 1 5.66 0l49.66 49.66a4 4 0 0 0 5.65 0l25.66-25.66a4 4 0 0 1 5.66 0L220 139.71V168a4 4 0 0 1-4 4m-52-88a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhImagesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfinityIcon],svg[ph-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a56 56 0 0 1-95.6 39.6l-.33-.35l-59.95-67.7a40 40 0 1 0 0 56.9l8.52-9.62a8 8 0 1 1 12 10.61l-8.69 9.81l-.33.35a56 56 0 1 1 0-79.2l.33.35l59.95 67.7a40 40 0 1 0 0-56.9l-8.52 9.62a8 8 0 1 1-12-10.61l8.69-9.81l.33-.35A56 56 0 0 1 248 128"></svg:path>`,
})
export class PhInfinityIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfinityBoldIcon],svg[ph-infinity-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 128a60 60 0 0 1-102.43 42.43l-.49-.53l-59.86-67.59a36 36 0 1 0 0 51.38l3.08-3.48a12 12 0 1 1 18 15.91l-3.35 3.78l-.49.53a60 60 0 1 1 0-84.86l.49.53l59.86 67.59a36 36 0 1 0 0-51.38l-3.08 3.48a12 12 0 1 1-18-15.91l3.35-3.78l.49-.53A60 60 0 0 1 252 128"></svg:path>`,
})
export class PhInfinityBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfinityDuotoneIcon],svg[ph-infinity-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M225.94 161.94a48 48 0 0 1-67.88 0L128 128l30.06-33.94a48 48 0 0 1 67.88 67.88M30.06 94.06a48 48 0 0 0 67.88 67.88L128 128L97.94 94.06a48 48 0 0 0-67.88 0" opacity=".2"></svg:path><svg:path d="M248 128a56 56 0 0 1-95.6 39.6l-.33-.35l-59.95-67.7a40 40 0 1 0 0 56.9l8.52-9.62a8 8 0 1 1 12 10.61l-8.69 9.81l-.33.35a56 56 0 1 1 0-79.2l.33.35l59.95 67.7a40 40 0 1 0 0-56.9l-8.52 9.62a8 8 0 1 1-12-10.61l8.69-9.81l.33-.35A56 56 0 0 1 248 128"></svg:path></svg:g>`,
})
export class PhInfinityDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfinityFillIcon],svg[ph-infinity-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-11.72 116.28a40 40 0 0 1-56.4.17l-50.59-45.11L97 111a24 24 0 1 0 0 34c.36-.36.71-.73 1-1.1a8 8 0 1 1 12 10.6c-.55.62-1.13 1.23-1.71 1.81a40 40 0 1 1-.17-56.73l50.58 45.11l.33.31a24 24 0 1 0-.03-34c-.36.36-.7.72-1 1.1a8 8 0 0 1-12-10.59c.54-.62 1.12-1.24 1.71-1.82a40 40 0 0 1 56.57 56.56Z"></svg:path>`,
})
export class PhInfinityFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfinityLightIcon],svg[ph-infinity-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a54 54 0 0 1-92.18 38.18a3 3 0 0 1-.25-.26l-60-67.74a42 42 0 1 0 0 59.64l8.57-9.67a6 6 0 1 1 9 8l-8.69 9.81a3 3 0 0 1-.25.26a54 54 0 1 1 0-76.36a3 3 0 0 1 .25.26l60 67.74a42 42 0 1 0 0-59.64l-8.57 9.67a6 6 0 1 1-9-8l8.69-9.81a3 3 0 0 1 .25-.26A54 54 0 0 1 246 128"></svg:path>`,
})
export class PhInfinityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfinityThinIcon],svg[ph-infinity-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a52 52 0 0 1-88.77 36.77l-.17-.18L95 96.8a44 44 0 1 0 0 62.4l8.6-9.72a4 4 0 0 1 6 5.3l-8.68 9.81l-.17.18a52 52 0 1 1 0-73.54l.17.18l60 67.79a44 44 0 1 0 0-62.4l-8.6 9.72a4 4 0 0 1-6-5.3l8.68-9.81l.17-.18A52 52 0 0 1 244 128"></svg:path>`,
})
export class PhInfinityThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfoIcon],svg[ph-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-40a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m-32-92a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhInfoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfoBoldIcon],svg[ph-info-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 84a16 16 0 1 1 16 16a16 16 0 0 1-16-16m128 44A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84m-72 36.68V132a20 20 0 0 0-20-20a12 12 0 0 0-4 23.32V168a20 20 0 0 0 20 20a12 12 0 0 0 4-23.32"></svg:path>`,
})
export class PhInfoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfoDuotoneIcon],svg[ph-info-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M144 176a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m88-48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-92-32a12 12 0 1 0-12-12a12 12 0 0 0 12 12"></svg:path></svg:g>`,
})
export class PhInfoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfoFillIcon],svg[ph-info-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhInfoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfoLightIcon],svg[ph-info-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 176a6 6 0 0 1-6 6a14 14 0 0 1-14-14v-40a2 2 0 0 0-2-2a6 6 0 0 1 0-12a14 14 0 0 1 14 14v40a2 2 0 0 0 2 2a6 6 0 0 1 6 6m-18-82a10 10 0 1 0-10-10a10 10 0 0 0 10 10m106 34A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhInfoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInfoThinIcon],svg[ph-info-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 176a4 4 0 0 1-4 4a12 12 0 0 1-12-12v-40a4 4 0 0 0-4-4a4 4 0 0 1 0-8a12 12 0 0 1 12 12v40a4 4 0 0 0 4 4a4 4 0 0 1 4 4m-16-84a8 8 0 1 0-8-8a8 8 0 0 0 8 8m104 36A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhInfoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInstagramLogoIcon],svg[ph-instagram-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhInstagramLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInstagramLogoBoldIcon],svg[ph-instagram-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhInstagramLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInstagramLogoDuotoneIcon],svg[ph-instagram-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhInstagramLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInstagramLogoFillIcon],svg[ph-instagram-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32"></svg:path>`,
})
export class PhInstagramLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInstagramLogoLightIcon],svg[ph-instagram-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m48-136H80a54.06 54.06 0 0 0-54 54v96a54.06 54.06 0 0 0 54 54h96a54.06 54.06 0 0 0 54-54V80a54.06 54.06 0 0 0-54-54m42 150a42 42 0 0 1-42 42H80a42 42 0 0 1-42-42V80a42 42 0 0 1 42-42h96a42 42 0 0 1 42 42ZM190 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhInstagramLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInstagramLogoThinIcon],svg[ph-instagram-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m48-136H80a52.06 52.06 0 0 0-52 52v96a52.06 52.06 0 0 0 52 52h96a52.06 52.06 0 0 0 52-52V80a52.06 52.06 0 0 0-52-52m44 148a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h96a44.05 44.05 0 0 1 44 44ZM188 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhInstagramLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectIcon],svg[ph-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M100.69 136L120 155.31A63.5 63.5 0 0 1 96 160a63.5 63.5 0 0 1 4.69-24m33.75 11.13l-25.57-25.57a64.7 64.7 0 0 1 12.69-12.69l25.57 25.57a64.7 64.7 0 0 1-12.69 12.69M155.31 120L136 100.69A63.5 63.5 0 0 1 160 96a63.5 63.5 0 0 1-4.69 24M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path>`,
})
export class PhIntersectIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectBoldIcon],svg[ph-intersect-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 78A84 84 0 1 0 78 178A84 84 0 1 0 178 78m-22.19 22.19a59.57 59.57 0 0 1-9.81 28.9L126.94 110a59.57 59.57 0 0 1 28.9-9.84Zm-79.5 52.51a60 60 0 1 1 76.33-76.33a84.11 84.11 0 0 0-76.3 76.3Zm23.82 3.17a59.57 59.57 0 0 1 9.81-28.9L129.06 146a59.57 59.57 0 0 1-28.9 9.84ZM160 220a60.09 60.09 0 0 1-56.67-40.34a84.11 84.11 0 0 0 76.33-76.33A60 60 0 0 1 160 220"></svg:path>`,
})
export class PhIntersectBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectDuotoneIcon],svg[ph-intersect-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 96a72 72 0 0 1-72 72a73 73 0 0 1-7.6-.4a73 73 0 0 1-.4-7.6a72 72 0 0 1 72-72a73 73 0 0 1 7.6.4a73 73 0 0 1 .4 7.6" opacity=".2"></svg:path><svg:path d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 0a64.07 64.07 0 0 1-64 64a64.07 64.07 0 0 1 64-64m0 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path></svg:g>`,
})
export class PhIntersectDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectFillIcon],svg[ph-intersect-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path>`,
})
export class PhIntersectFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectLightIcon],svg[ph-intersect-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.91 83.09a78 78 0 1 0-89.82 89.82a78 78 0 1 0 89.82-89.82M30 96a66 66 0 0 1 130.49-14H160a78.09 78.09 0 0 0-78 78v.49A66.1 66.1 0 0 1 30 96m64 64a65.6 65.6 0 0 1 6-27.49L123.49 156A65.6 65.6 0 0 1 96 162c-.65 0-1.3 0-2-.05zm40.23-10.25l-28-28a66.5 66.5 0 0 1 15.52-15.52l28 28a66.5 66.5 0 0 1-15.52 15.52M162 96a65.6 65.6 0 0 1-6 27.49L132.51 100A65.6 65.6 0 0 1 160 94h1.95c.05.7.05 1.35.05 2m-2 130a66.1 66.1 0 0 1-64.49-52H96a78.09 78.09 0 0 0 78-78v-.49A66 66 0 0 1 160 226"></svg:path>`,
})
export class PhIntersectLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectSquareIcon],svg[ph-intersect-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 152V48h104v40H96a8 8 0 0 0-8 8v56Zm56-36.69L140.69 152H104Zm48 25.38L115.31 104H152ZM208 208H104v-40h56a8 8 0 0 0 8-8v-56h40Z"></svg:path>`,
})
export class PhIntersectSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectSquareBoldIcon],svg[ph-intersect-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M52 148V52h96v32H96a12 12 0 0 0-12 12v52Zm56-23l23 23h-23Zm40 6l-23-23h23Zm56 73h-96v-32h52a12 12 0 0 0 12-12v-52h32Z"></svg:path>`,
})
export class PhIntersectSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectSquareDuotoneIcon],svg[ph-intersect-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 96v64H96V96Z" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 152V48h104v40H96a8 8 0 0 0-8 8v56Zm104-48v48h-48v-48Zm56 104H104v-40h56a8 8 0 0 0 8-8v-56h40Z"></svg:path></svg:g>`,
})
export class PhIntersectSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectSquareFillIcon],svg[ph-intersect-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 152V48h104v40H96a8 8 0 0 0-8 8v56Zm160 56H104v-40h56a8 8 0 0 0 8-8v-56h40Z"></svg:path>`,
})
export class PhIntersectSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectSquareLightIcon],svg[ph-intersect-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6M46 154V46h108v44H96a6 6 0 0 0-6 6v58Zm56-43.52L145.52 154H102Zm52 35L110.48 102H154ZM210 210H102v-44h58a6 6 0 0 0 6-6v-58h44Z"></svg:path>`,
})
export class PhIntersectSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectSquareThinIcon],svg[ph-intersect-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4M44 156V44h112v48H96a4 4 0 0 0-4 4v60Zm56-50.34L150.34 156H100Zm56 44.68L105.66 100H156ZM212 212H100v-48h60a4 4 0 0 0 4-4v-60h48Z"></svg:path>`,
})
export class PhIntersectSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectThinIcon],svg[ph-intersect-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.17 84.83a76 76 0 1 0-86.34 86.34a76 76 0 1 0 86.34-86.34M28 96a68 68 0 0 1 134.93-11.93c-1 0-2-.07-2.93-.07a76.08 76.08 0 0 0-76 76c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96m136 0a67.6 67.6 0 0 1-7.45 30.89l-27.44-27.44A67.6 67.6 0 0 1 160 92c1.3 0 2.6 0 3.88.12c.12 1.28.12 2.58.12 3.88m-72 64a67.6 67.6 0 0 1 7.45-30.89l27.44 27.44A67.6 67.6 0 0 1 96 164c-1.3 0-2.6-.05-3.88-.12c-.07-1.28-.12-2.58-.12-3.88m42-7.64L103.64 122A68.7 68.7 0 0 1 122 103.64L152.36 134A68.7 68.7 0 0 1 134 152.36M160 228a68.1 68.1 0 0 1-66.93-56.07c1 0 2 .07 2.93.07a76.08 76.08 0 0 0 76-76c0-1 0-2-.07-2.93A68 68 0 0 1 160 228"></svg:path>`,
})
export class PhIntersectThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectThreeIcon],svg[ph-intersect-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.88 96c.07-1.31.12-2.63.12-4a68 68 0 0 0-136 0c0 1.33 0 2.65.12 4A68 68 0 1 0 128 213.65A68 68 0 1 0 195.88 96M128 193.47a51.9 51.9 0 0 1-16-35.38a67.55 67.55 0 0 0 31.9 0a51.9 51.9 0 0 1-15.9 35.38m0-49.47a52 52 0 0 1-14.08-1.95A52.06 52.06 0 0 1 128 118.53a52.06 52.06 0 0 1 14.08 23.52A52 52 0 0 1 128 144m-28.77-8.71A52.2 52.2 0 0 1 77.92 106a51.88 51.88 0 0 1 36.79 3.28a68.2 68.2 0 0 0-15.48 26.01m42.06-26.06a51.88 51.88 0 0 1 36.79-3.23a52.2 52.2 0 0 1-21.31 29.34a68.2 68.2 0 0 0-15.48-26.11M128 40a52.06 52.06 0 0 1 52 49.91a67.72 67.72 0 0 0-52 8.44a67.72 67.72 0 0 0-51.95-8.44A52.06 52.06 0 0 1 128 40M40 156a52 52 0 0 1 23.23-43.29A68.36 68.36 0 0 0 96.12 152c-.07 1.31-.12 2.63-.12 4a67.74 67.74 0 0 0 18.71 46.77A52 52 0 0 1 40 156m124 52a51.65 51.65 0 0 1-22.71-5.23A67.74 67.74 0 0 0 160 156c0-1.33-.05-2.65-.12-4a68.36 68.36 0 0 0 32.89-39.33A52 52 0 0 1 164 208"></svg:path>`,
})
export class PhIntersectThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectThreeBoldIcon],svg[ph-intersect-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 93.66V92a72 72 0 0 0-144 0v1.66a72 72 0 1 0 72 124.65a72 72 0 1 0 72-124.65m-41.28 35.22A71.7 71.7 0 0 0 148 110.77a47.7 47.7 0 0 1 25-1.92a48.2 48.2 0 0 1-14.32 20.03ZM128 187.7a47.8 47.8 0 0 1-11.47-24.62a72 72 0 0 0 22.94 0A47.8 47.8 0 0 1 128 187.7m-44.94-78.85a47.7 47.7 0 0 1 25 1.92a71.7 71.7 0 0 0-10.72 18.11a48.2 48.2 0 0 1-14.28-20.03M128 140a48 48 0 0 1-8.94-.85A48 48 0 0 1 128 124.3a48 48 0 0 1 8.94 14.85a48 48 0 0 1-8.94.85m0-96a48.07 48.07 0 0 1 47.47 40.92A71.77 71.77 0 0 0 128 93.69a71.77 71.77 0 0 0-47.47-8.77A48.07 48.07 0 0 1 128 44M44 156a47.89 47.89 0 0 1 17.32-36.88A72.45 72.45 0 0 0 92 154.34V156a71.64 71.64 0 0 0 16 45.23A48 48 0 0 1 44 156m120 48a47.7 47.7 0 0 1-16-2.77A71.64 71.64 0 0 0 164 156v-1.66a72.45 72.45 0 0 0 30.72-35.22A48 48 0 0 1 164 204"></svg:path>`,
})
export class PhIntersectThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectThreeDuotoneIcon],svg[ph-intersect-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104.64 147.28a60 60 0 0 1-36-46.56A60.06 60.06 0 0 1 128 108a59.94 59.94 0 0 0-23.36 39.28m0 0A60 60 0 0 0 128 204a60 60 0 0 0 23.36-56.72a60.17 60.17 0 0 1-46.72 0m82.72-46.56A60.06 60.06 0 0 0 128 108a59.94 59.94 0 0 1 23.36 39.28a60 60 0 0 0 36-46.56" opacity=".2"></svg:path><svg:path d="M195.88 96c.07-1.31.12-2.63.12-4a68 68 0 0 0-136 0c0 1.33 0 2.65.12 4A68 68 0 1 0 128 213.65A68 68 0 1 0 195.88 96M128 193.47a51.9 51.9 0 0 1-16-35.38a67.55 67.55 0 0 0 31.9 0a51.9 51.9 0 0 1-15.9 35.38m0-49.47a52 52 0 0 1-14.08-1.95A52.06 52.06 0 0 1 128 118.53a52.06 52.06 0 0 1 14.08 23.52A52 52 0 0 1 128 144m-28.77-8.71A52.2 52.2 0 0 1 77.92 106a51.88 51.88 0 0 1 36.79 3.28a68.2 68.2 0 0 0-15.48 26.01m42.06-26.06a51.88 51.88 0 0 1 36.79-3.23a52.2 52.2 0 0 1-21.31 29.34a68.2 68.2 0 0 0-15.48-26.11M128 40a52.06 52.06 0 0 1 52 49.91a67.72 67.72 0 0 0-52 8.44a67.72 67.72 0 0 0-51.95-8.44A52.06 52.06 0 0 1 128 40M40 156a52 52 0 0 1 23.23-43.29A68.36 68.36 0 0 0 96.12 152c-.07 1.31-.12 2.63-.12 4a67.74 67.74 0 0 0 18.71 46.77A52 52 0 0 1 40 156m124 52a51.65 51.65 0 0 1-22.71-5.23A67.74 67.74 0 0 0 160 156c0-1.33-.05-2.65-.12-4a68.36 68.36 0 0 0 32.89-39.33A52 52 0 0 1 164 208"></svg:path></svg:g>`,
})
export class PhIntersectThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectThreeFillIcon],svg[ph-intersect-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.88 96c.07-1.31.12-2.63.12-4a68 68 0 0 0-136 0c0 1.33 0 2.65.12 4A68 68 0 1 0 128 213.65A68 68 0 1 0 195.88 96M128 193.47a51.9 51.9 0 0 1-16-35.38a67.55 67.55 0 0 0 31.9 0a51.9 51.9 0 0 1-15.9 35.38m-28.77-58.18A52.2 52.2 0 0 1 77.92 106a51.88 51.88 0 0 1 36.79 3.28a68.2 68.2 0 0 0-15.48 26.01m42.06-26.06a51.88 51.88 0 0 1 36.79-3.23a52.2 52.2 0 0 1-21.31 29.34a68.2 68.2 0 0 0-15.48-26.11M128 40a52.06 52.06 0 0 1 52 49.91a67.72 67.72 0 0 0-52 8.44a67.72 67.72 0 0 0-51.95-8.44A52.06 52.06 0 0 1 128 40M40 156a52 52 0 0 1 23.23-43.29A68.36 68.36 0 0 0 96.12 152c-.07 1.31-.12 2.63-.12 4a67.74 67.74 0 0 0 18.71 46.77A52 52 0 0 1 40 156m124 52a51.65 51.65 0 0 1-22.71-5.23A67.74 67.74 0 0 0 160 156c0-1.33-.05-2.65-.12-4a68.36 68.36 0 0 0 32.89-39.33A52 52 0 0 1 164 208"></svg:path>`,
})
export class PhIntersectThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectThreeLightIcon],svg[ph-intersect-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M193.78 97.13c.13-1.69.22-3.4.22-5.13a66 66 0 0 0-132 0c0 1.73.09 3.44.22 5.13A66 66 0 1 0 128 211.27a66 66 0 1 0 65.78-114.14M74 92a54 54 0 0 1 108 0v.51a65.75 65.75 0 0 0-54 8.22a65.75 65.75 0 0 0-54-8.22zm72 64a53.88 53.88 0 0 1-18 40.21A53.88 53.88 0 0 1 110 156v-.51a65.73 65.73 0 0 0 36 0zm-18-10a53.6 53.6 0 0 1-16.5-2.59a54.1 54.1 0 0 1 16.5-27.62a54.1 54.1 0 0 1 16.5 27.62A53.6 53.6 0 0 1 128 146m-27.6-7.61a54.14 54.14 0 0 1-24.9-33.8a53.85 53.85 0 0 1 42.5 4.12a66.1 66.1 0 0 0-17.6 29.68m37.6-29.68a53.85 53.85 0 0 1 42.53-4.12a54.14 54.14 0 0 1-24.9 33.8A66.1 66.1 0 0 0 138 108.71M92 210a54 54 0 0 1-27.6-100.39a66.3 66.3 0 0 0 33.82 41.26c-.13 1.69-.22 3.4-.22 5.13a65.8 65.8 0 0 0 20 47.29A53.64 53.64 0 0 1 92 210m72 0a53.64 53.64 0 0 1-26-6.71A65.8 65.8 0 0 0 158 156c0-1.73-.09-3.44-.22-5.13a66.3 66.3 0 0 0 33.82-41.26A54 54 0 0 1 164 210"></svg:path>`,
})
export class PhIntersectThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectThreeThinIcon],svg[ph-intersect-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M191.69 98.3c.2-2.07.31-4.17.31-6.3a64 64 0 0 0-128 0c0 2.13.11 4.23.31 6.3A64 64 0 1 0 128 208.88A64 64 0 1 0 191.69 98.3M72 92a56 56 0 0 1 112 0c0 1.07 0 2.13-.1 3.18a63.84 63.84 0 0 0-55.9 7.94a63.84 63.84 0 0 0-55.9-7.94C72 94.13 72 93.07 72 92m76 64a55.88 55.88 0 0 1-20 42.85A55.88 55.88 0 0 1 108 156c0-1.07 0-2.13.1-3.18a63.86 63.86 0 0 0 39.8 0c.1 1.05.1 2.11.1 3.18m-20-8a55.6 55.6 0 0 1-18.86-3.28A56.06 56.06 0 0 1 128 113.15a56.06 56.06 0 0 1 18.86 31.57A55.6 55.6 0 0 1 128 148m-26.3-6.58a56.18 56.18 0 0 1-28.56-38.14a55.87 55.87 0 0 1 48.21 5a64.06 64.06 0 0 0-19.65 33.14m33-33.09a55.87 55.87 0 0 1 48.21-5a56.18 56.18 0 0 1-28.56 38.14a64.06 64.06 0 0 0-19.7-33.14ZM92 212a56 56 0 0 1-26.3-105.42a64.26 64.26 0 0 0 34.61 43.12c-.2 2.07-.31 4.17-.31 6.3a63.87 63.87 0 0 0 21.35 47.67A55.7 55.7 0 0 1 92 212m72 0a55.7 55.7 0 0 1-29.35-8.33A63.87 63.87 0 0 0 156 156c0-2.13-.11-4.23-.31-6.3a64.26 64.26 0 0 0 34.61-43.12A56 56 0 0 1 164 212"></svg:path>`,
})
export class PhIntersectThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectionIcon],svg[ph-intersection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 120v80a8 8 0 0 1-16 0v-80a64 64 0 0 0-128 0v80a8 8 0 0 1-16 0v-80a80 80 0 0 1 160 0"></svg:path>`,
})
export class PhIntersectionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectionBoldIcon],svg[ph-intersection-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 120v80a12 12 0 0 1-24 0v-80a60 60 0 0 0-120 0v80a12 12 0 0 1-24 0v-80a84 84 0 0 1 168 0"></svg:path>`,
})
export class PhIntersectionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectionDuotoneIcon],svg[ph-intersection-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 120v80H56v-80a72 72 0 0 1 144 0" opacity=".2"></svg:path><svg:path d="M208 120v80a8 8 0 0 1-16 0v-80a64 64 0 0 0-128 0v80a8 8 0 0 1-16 0v-80a80 80 0 0 1 160 0"></svg:path></svg:g>`,
})
export class PhIntersectionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectionFillIcon],svg[ph-intersection-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 144a8 8 0 0 1-16 0v-56a40 40 0 0 0-80 0v56a8 8 0 0 1-16 0v-56a56 56 0 0 1 112 0Z"></svg:path>`,
})
export class PhIntersectionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectionLightIcon],svg[ph-intersection-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 120v80a6 6 0 0 1-12 0v-80a66 66 0 0 0-132 0v80a6 6 0 0 1-12 0v-80a78 78 0 0 1 156 0"></svg:path>`,
})
export class PhIntersectionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIntersectionThinIcon],svg[ph-intersection-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 120v80a4 4 0 0 1-8 0v-80a68 68 0 0 0-136 0v80a4 4 0 0 1-8 0v-80a76 76 0 0 1 152 0"></svg:path>`,
})
export class PhIntersectionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInvoiceIcon],svg[ph-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 128a8 8 0 0 1 0-16h28a8 8 0 0 0 0-16H40a24 24 0 0 1 0-48a8 8 0 0 1 16 0h8a8 8 0 0 1 0 16H40a8 8 0 0 0 0 16h16a24 24 0 0 1 0 48a8 8 0 0 1-16 0Zm204-72v136a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-40a8 8 0 0 1 16 0v40h120v-32H80a8 8 0 0 1 0-16h80v-32h-56a8 8 0 0 1 0-16h112V64H96a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m-56 88h40v-32h-40Zm40 48v-32h-40v32Z"></svg:path>`,
})
export class PhInvoiceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInvoiceBoldIcon],svg[ph-invoice-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 132a12 12 0 0 1 0-24h28a4 4 0 0 0 0-8H40a28 28 0 0 1-3.38-55.79A12 12 0 0 1 59.3 44H64a12 12 0 0 1 0 24H40a4 4 0 0 0 0 8h16a28 28 0 0 1 3.38 55.79a12 12 0 0 1-22.68.21Zm208-76v136a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20v-28a12 12 0 0 1 24 0v24h112v-24H88a12 12 0 0 1 0-24h68v-24h-44a12 12 0 0 1 0-24h100V68H104a12 12 0 0 1 0-24h120a12 12 0 0 1 12 12m-56 84h32v-24h-32Zm32 48v-24h-32v24Z"></svg:path>`,
})
export class PhInvoiceBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInvoiceDuotoneIcon],svg[ph-invoice-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104v88a8 8 0 0 1-8 8h-48v-96Z" opacity=".2"></svg:path><svg:path d="M28 128a8 8 0 0 1 0-16h28a8 8 0 0 0 0-16H40a24 24 0 0 1 0-48a8 8 0 0 1 16 0h8a8 8 0 0 1 0 16H40a8 8 0 0 0 0 16h16a24 24 0 0 1 0 48a8 8 0 0 1-16 0Zm204-72v136a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-40a8 8 0 0 1 16 0v40h120v-32H80a8 8 0 0 1 0-16h80v-32h-56a8 8 0 0 1 0-16h112V64H96a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m-56 88h40v-32h-40Zm40 48v-32h-40v32Z"></svg:path></svg:g>`,
})
export class PhInvoiceDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInvoiceFillIcon],svg[ph-invoice-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 128a8 8 0 0 1 0-16h28a8 8 0 0 0 0-16H40a24 24 0 0 1 0-48a8 8 0 0 1 16 0h8a8 8 0 0 1 0 16H40a8 8 0 0 0 0 16h16a24 24 0 0 1 0 48a8 8 0 0 1-16 0Zm196-80H96a8 8 0 0 0 0 16h120v32H104a8 8 0 0 0 0 16h56v32H80a8 8 0 0 0 0 16h80v32H40v-40a8 8 0 0 0-16 0v40a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhInvoiceFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInvoiceLightIcon],svg[ph-invoice-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 126a6 6 0 0 1 0-12h28a10 10 0 0 0 0-20H40a22 22 0 0 1 0-44h2v-2a6 6 0 0 1 12 0v2h10a6 6 0 0 1 0 12H40a10 10 0 0 0 0 20h16a22 22 0 0 1 0 44h-2v2a6 6 0 0 1-12 0v-2Zm202-70v136a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-40a6 6 0 0 1 12 0v40a2 2 0 0 0 2 2h122v-36H80a6 6 0 0 1 0-12h82v-36h-58a6 6 0 0 1 0-12h114V62H96a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m-56 90h44v-36h-44Zm44 46v-34h-44v36h42a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhInvoiceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phInvoiceThinIcon],svg[ph-invoice-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 124a4 4 0 0 1 0-8h28a12 12 0 0 0 0-24H40a20 20 0 0 1 0-40h4v-4a4 4 0 0 1 8 0v4h12a4 4 0 0 1 0 8H40a12 12 0 0 0 0 24h16a20 20 0 0 1 0 40h-4v4a4 4 0 0 1-8 0v-4Zm200-68v136a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-40a4 4 0 0 1 8 0v40a4 4 0 0 0 4 4h124v-40H80a4 4 0 0 1 0-8h84v-40h-60a4 4 0 0 1 0-8h116V60H96a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m-56 92h48v-40h-48Zm48 44v-36h-48v40h44a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhInvoiceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIslandIcon],svg[ph-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.25 229a8 8 0 0 1-11.25 1.25c-.37-.3-38.82-30.25-99-30.25s-98.64 30-99 30.26a8 8 0 0 1-10-12.51c1.63-1.3 38.52-30.26 98.29-33.45a120 120 0 0 1-3.29-37.93c1.74-21.71 10.92-50.63 43-72.48A64.7 64.7 0 0 0 140.26 72c-19 .62-30.94 11.71-36.5 33.92A8 8 0 0 1 96 112a7.6 7.6 0 0 1-1.94-.24a8 8 0 0 1-5.82-9.7c9.25-36.95 33.11-45.42 51.5-46a81.5 81.5 0 0 1 21.68 2.45c-3.83-6.33-9.43-12.93-17.21-16.25c-10-4.24-22.17-2.39-36.31 5.51a8 8 0 0 1-7.8-14c18.74-10.45 35.72-12.54 50.48-6.2c12.49 5.36 20.73 15.78 25.87 25c6.18-9.64 13.88-16.17 22.39-18.94c11.86-3.87 24.64-.72 38 9.37a8 8 0 0 1-9.64 12.76c-8.91-6.73-16.77-9.06-23.35-6.93c-7.29 2.35-12.87 10-16.37 16.61A70.5 70.5 0 0 1 208 73.07c14.61 8.35 32 26.05 32 62.94a8 8 0 0 1-16 0c0-23.46-8.07-40-24-49a51 51 0 0 0-5.75-2.8a55.64 55.64 0 0 1 5.06 33.06a59.4 59.4 0 0 1-8.86 23.41a8 8 0 0 1-13.09-9.2c.74-1.09 16.33-24.38-3.26-49.37c-27 15.21-41.89 37.25-44.16 65.59a104.3 104.3 0 0 0 3.83 36.44c62.65 1.81 101.52 32.33 103.2 33.66a8 8 0 0 1 1.28 11.2M24 140a28 28 0 1 1 28 28a28 28 0 0 1-28-28m16 0a12 12 0 1 0 12-12a12 12 0 0 0-12 12"></svg:path>`,
})
export class PhIslandIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIslandBoldIcon],svg[ph-island-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.37 231.5a12 12 0 0 1-16.87 1.87c-.34-.27-37.86-29.37-96.5-29.37s-96.17 29.1-96.54 29.39a12 12 0 0 1-15-18.76c1.62-1.3 37.57-29.53 95.85-34a123.3 123.3 0 0 1-2.31-34.57c1.67-20.79 9.88-47.91 37-69.78a53 53 0 0 0-6.68-.23c-17.2.56-27.61 10.37-32.74 30.88A12 12 0 0 1 96 116a11.8 11.8 0 0 1-2.92-.36a12 12 0 0 1-8.73-14.55c4.46-17.79 17.56-47.82 55.26-49a79 79 0 0 1 14.8 1c-3.47-4.89-7.81-9.21-13.08-11.39c-8.28-3.43-18.73-1.33-31.06 6.23a12 12 0 1 1-12.55-20.5c19.3-11.84 37.11-14.5 52.93-7.89c10.46 4.37 19.63 12.92 26.75 24.88c5.86-7.19 12.72-12.18 20.2-14.61c16.42-5.35 31.7 2.47 41.63 10a12 12 0 1 1-14.47 19.14c-7.79-5.89-14.42-8-19.68-6.32c-4.57 1.47-8.45 5.67-11.43 10.19A73.4 73.4 0 0 1 210 69.61c15.48 8.87 34 27.6 34 66.39a12 12 0 0 1-24 0c0-20-6.13-34.43-18.21-43.15a61.84 61.84 0 0 1-7.33 49a12 12 0 1 1-20.28-12.78a40.6 40.6 0 0 0 5.51-15.76c1.18-9.09-1.07-17.81-6.66-26c-23.61 14.28-36.72 34.36-39 59.8a99.8 99.8 0 0 0 2.87 33.06c62.23 2.71 100.91 33.07 102.6 34.42a12 12 0 0 1 1.87 16.91M20 144a32 32 0 1 1 32 32a32 32 0 0 1-32-32m24 0a8 8 0 1 0 8-8a8 8 0 0 0-8 8"></svg:path>`,
})
export class PhIslandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIslandDuotoneIcon],svg[ph-island-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 140a20 20 0 1 1 20 20a20 20 0 0 1-20-20m96 52c-64 0-104 32-104 32h208s-40-32-104-32" opacity=".2"></svg:path><svg:path d="M238.25 229a8 8 0 0 1-11.25 1.25c-.37-.3-38.82-30.25-99-30.25s-98.64 30-99 30.26a8 8 0 0 1-10-12.51c1.63-1.3 38.52-30.26 98.29-33.45a120 120 0 0 1-3.29-37.93c1.74-21.71 10.92-50.63 43-72.48a66.2 66.2 0 0 0-15-1.87h-1.67c-19 .62-30.94 11.71-36.5 33.92A8 8 0 0 1 96 112a7.6 7.6 0 0 1-1.94-.24a8 8 0 0 1-5.82-9.7c9.25-36.95 33.11-45.42 51.5-46a81.5 81.5 0 0 1 21.68 2.45c-3.83-6.33-9.43-12.93-17.21-16.25c-10-4.24-22.17-2.39-36.31 5.51a8 8 0 0 1-7.8-14c18.74-10.45 35.72-12.54 50.48-6.2c12.49 5.36 20.73 15.78 25.87 25c6.18-9.64 13.88-16.17 22.39-18.94c11.86-3.87 24.64-.72 38 9.37a8 8 0 0 1-9.64 12.76c-8.91-6.73-16.77-9.06-23.35-6.93c-7.29 2.35-12.87 10-16.37 16.61A70.5 70.5 0 0 1 208 73.07c14.61 8.35 32 26.05 32 62.94a8 8 0 0 1-16 0c0-23.46-8.07-40-24-49a51 51 0 0 0-5.75-2.8a55.64 55.64 0 0 1 5.06 33.06a59.4 59.4 0 0 1-8.86 23.41a8 8 0 0 1-13.09-9.2c.74-1.09 16.33-24.38-3.26-49.37c-27 15.21-41.89 37.25-44.16 65.59a104.3 104.3 0 0 0 3.83 36.44c62.65 1.81 101.52 32.33 103.2 33.66a8 8 0 0 1 1.28 11.2M24 140a28 28 0 1 1 28 28a28 28 0 0 1-28-28m16 0a12 12 0 1 0 12-12a12 12 0 0 0-12 12"></svg:path></svg:g>`,
})
export class PhIslandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIslandFillIcon],svg[ph-island-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.55 226.65A8 8 0 0 1 232 232H24a8 8 0 0 1-5-14.25c1.63-1.3 38.53-30.26 98.29-33.45a120 120 0 0 1-3.29-37.93c1.73-21.71 10.91-50.63 42.95-72.48a66.3 66.3 0 0 0-15-1.87h-1.67c-19 .62-30.94 11.71-36.5 33.92A8 8 0 0 1 96 112a7.7 7.7 0 0 1-2-.24a8 8 0 0 1-5.82-9.7c9.25-36.95 33.11-45.42 51.5-46a81.4 81.4 0 0 1 21.68 2.45c-3.82-6.33-9.42-12.93-17.21-16.25c-10-4.24-22.17-2.39-36.31 5.51a8 8 0 0 1-7.8-14c18.74-10.45 35.72-12.54 50.48-6.2c12.49 5.36 20.73 15.78 25.88 25c6.17-9.64 13.87-16.17 22.38-18.94c11.86-3.87 24.64-.72 38 9.37a8 8 0 0 1-9.64 12.76c-8.91-6.73-16.77-9.06-23.34-6.93c-7.3 2.35-12.87 10-16.38 16.61A70.5 70.5 0 0 1 208 73.07c14.61 8.35 32 26.05 32 62.94a8 8 0 0 1-16 0c0-23.46-8.06-40-24-49a51 51 0 0 0-5.75-2.8a55.64 55.64 0 0 1 5.06 33.06a59.4 59.4 0 0 1-8.86 23.41a8 8 0 0 1-13.09-9.2c.75-1.09 16.33-24.38-3.26-49.37c-27 15.21-41.89 37.25-44.16 65.59a104.3 104.3 0 0 0 3.83 36.44c62.65 1.81 101.52 32.33 103.2 33.66a8 8 0 0 1 2.58 8.85M52 168a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhIslandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIslandLightIcon],svg[ph-island-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.69 227.75a6 6 0 0 1-8.44.94C227.87 228.38 189 198 128 198c-61.19 0-99.87 30.38-100.25 30.69a6 6 0 0 1-7.5-9.38c1.63-1.3 39-30.65 99.59-33.14a118.3 118.3 0 0 1-3.84-39.64c1.76-22.07 11.39-51.75 45.8-73.43a70.5 70.5 0 0 0-21.61-3.1c-19.74.64-32.65 12.56-38.37 35.43A6 6 0 0 1 96 110a6 6 0 0 1-1.46-.18a6 6 0 0 1-4.36-7.28c8.95-35.74 31.92-43.93 49.63-44.5a83 83 0 0 1 25.64 3.61C161.55 54 155 44.69 145 40.41c-10.55-4.51-23.36-2.62-38.09 5.59a6 6 0 1 1-5.84-10.47c18.17-10.14 34.56-12.2 48.71-6.12c13.42 5.76 21.77 17.64 26.57 27.16c4.65-8.13 12.14-17.51 23.1-21.08c11.2-3.65 23.37-.6 36.16 9.07a6 6 0 1 1-7.24 9.57c-9.46-7.15-17.93-9.59-25.17-7.24c-9.3 3-15.45 13.07-18.7 20A68.9 68.9 0 0 1 207 74.8c14.15 8.09 31 25.27 31 61.21a6 6 0 0 1-12 0c0-37.92-21.2-51-36-55.59a54.08 54.08 0 0 1 7.38 36.49a57.2 57.2 0 0 1-8.51 22.56a6 6 0 0 1-9.82-6.91c.78-1.12 17.81-26.37-4.39-53.06C146.19 95 130.5 117.69 128 147.05a106.7 106.7 0 0 0 4.3 39c62.82 1.35 101.77 31.92 103.43 33.25a6 6 0 0 1 .96 8.45M26 140a26 26 0 1 1 26 26a26 26 0 0 1-26-26m12 0a14 14 0 1 0 14-14a14 14 0 0 0-14 14"></svg:path>`,
})
export class PhIslandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phIslandThinIcon],svg[ph-island-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.12 226.5a4 4 0 0 1-5.62.62c-.39-.31-39.78-31.12-101.5-31.12S26.89 226.81 26.5 227.13a4 4 0 0 1-5-6.25c1.63-1.31 39.56-31.08 101-32.79a116.1 116.1 0 0 1-4.45-41.4c1.79-22.37 11.85-52.74 48.61-74.16c-6.46-2.24-16.29-4.83-26.49-4.49c-20.74.67-34.28 13.1-40.25 36.94a4 4 0 1 1-7.8-1.98c8.64-34.54 30.74-42.45 47.75-43c11.46-.36 22.22 2.44 29.34 4.91c-3.63-8.39-10.93-21-23.4-26.37c-11.15-4.77-24.56-2.87-39.86 5.67a4 4 0 1 1-3.9-7c17.6-9.82 33.4-11.85 47-6c14.6 6.28 23 20.15 27.23 29.74c4.21-8.4 11.87-19.69 23.84-23.59c10.55-3.43 22.1-.49 34.33 8.76a4 4 0 1 1-4.82 6.38c-10-7.57-19.1-10.11-27-7.54c-11.14 3.61-18 16.42-21 23.46A67.5 67.5 0 0 1 206 76.53c24.81 14.18 30 40.17 30 59.47a4 4 0 0 1-8 0c0-43.89-27.5-55.67-42.53-58.83c10.67 15 11.46 29.37 9.92 39.44a54.8 54.8 0 0 1-8.18 21.7a4 4 0 0 1-3.27 1.69a3.92 3.92 0 0 1-2.3-.73a4 4 0 0 1-1-5.57c.85-1.22 19.26-28.4-5.57-56.73c-30 15.86-46.55 39.42-49.1 70.06a108.8 108.8 0 0 0 4.84 41c63 .91 102 31.5 103.65 32.83a4 4 0 0 1 .66 5.64M28 140a24 24 0 1 1 24 24a24 24 0 0 1-24-24m8 0a16 16 0 1 0 16-16a16 16 0 0 0-16 16"></svg:path>`,
})
export class PhIslandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarIcon],svg[ph-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32Zm96 168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Z"></svg:path>`,
})
export class PhJarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarBoldIcon],svg[ph-jar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 49.68V32a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v17.68A44.06 44.06 0 0 0 36 92v108a44.05 44.05 0 0 0 44 44h96a44.05 44.05 0 0 0 44-44V92a44.06 44.06 0 0 0-32-42.32M164 48h-24V36h24Zm-48-12v12H92V36Zm80 164a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhJarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarDuotoneIcon],svg[ph-jar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v112a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32V88a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32Zm96 168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V88a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Z"></svg:path></svg:g>`,
})
export class PhJarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarFillIcon],svg[ph-jar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M120 48V32h16v16Zm48 0h-16V32h16Zm-64-16v16H88V32Z"></svg:path>`,
})
export class PhJarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarLabelIcon],svg[ph-jar-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M56 112h144v64H56Zm112-64h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32ZM80 64h96a24 24 0 0 1 24 24v8H56v-8a24 24 0 0 1 24-24m96 160H80a24 24 0 0 1-24-24v-8h144v8a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhJarLabelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarLabelBoldIcon],svg[ph-jar-label-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 49.68V32a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v17.68A44.06 44.06 0 0 0 36 92v108a44.05 44.05 0 0 0 44 44h96a44.05 44.05 0 0 0 44-44V92a44.06 44.06 0 0 0-32-42.32M60 120h136v48H60Zm104-72h-24V36h24Zm-48-12v12H92V36ZM80 72h96a20 20 0 0 1 20 20v4H60v-4a20 20 0 0 1 20-20m96 148H80a20 20 0 0 1-20-20v-8h136v8a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhJarLabelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarLabelDuotoneIcon],svg[ph-jar-label-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104v80H48v-80Z" opacity=".2"></svg:path><svg:path d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M56 112h144v64H56Zm112-64h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32ZM80 64h96a24 24 0 0 1 24 24v8H56v-8a24 24 0 0 1 24-24m96 160H80a24 24 0 0 1-24-24v-8h144v8a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhJarLabelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarLabelFillIcon],svg[ph-jar-label-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M168 48h-16V32h16Zm-48 0V32h16v16Zm-16-16v16H88V32ZM80 64h96a24 24 0 0 1 24 24v8H56v-8a24 24 0 0 1 24-24m96 160H80a24 24 0 0 1-24-24v-8h144v8a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhJarLabelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarLabelLightIcon],svg[ph-jar-label-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 50.48V32a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v18.48A38.05 38.05 0 0 0 42 88v112a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38V88a38.05 38.05 0 0 0-32-37.52M54 110h148v68H54Zm116-78v18h-20V30h18a2 2 0 0 1 2 2m-52 18V30h20v20ZM88 30h18v20H86V32a2 2 0 0 1 2-2m-8 32h96a26 26 0 0 1 26 26v10H54V88a26 26 0 0 1 26-26m96 164H80a26 26 0 0 1-26-26v-10h148v10a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhJarLabelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarLabelThinIcon],svg[ph-jar-label-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 52.23V32a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v20.23A36 36 0 0 0 44 88v112a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36V88a36 36 0 0 0-32-35.77M52 108h152v72H52Zm120-76v20h-24V28h20a4 4 0 0 1 4 4m-56 20V28h24v24ZM88 28h20v24H84V32a4 4 0 0 1 4-4m-8 32h96a28 28 0 0 1 28 28v12H52V88a28 28 0 0 1 28-28m96 168H80a28 28 0 0 1-28-28v-12h152v12a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhJarLabelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarLightIcon],svg[ph-jar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 50.48V32a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v18.48A38.05 38.05 0 0 0 42 88v112a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38V88a38.05 38.05 0 0 0-32-37.52M170 32v18h-20V30h18a2 2 0 0 1 2 2m-52 18V30h20v20ZM88 30h18v20H86V32a2 2 0 0 1 2-2m114 170a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26V88a26 26 0 0 1 26-26h96a26 26 0 0 1 26 26Z"></svg:path>`,
})
export class PhJarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJarThinIcon],svg[ph-jar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 52.23V32a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v20.23A36 36 0 0 0 44 88v112a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36V88a36 36 0 0 0-32-35.77M172 32v20h-24V28h20a4 4 0 0 1 4 4m-56 20V28h24v24ZM88 28h20v24H84V32a4 4 0 0 1 4-4m116 172a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V88a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28Z"></svg:path>`,
})
export class PhJarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJeepIcon],svg[ph-jeep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 88h-9.53l-9.29-43.35A16.08 16.08 0 0 0 205.53 32H50.47a16.08 16.08 0 0 0-15.65 12.65L25.53 88H16a8 8 0 0 0 0 16h8v96a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-24h96v24a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-96h8a8 8 0 0 0 0-16M50.47 48h155.06l8.57 40H41.9ZM64 200H40v-24h24Zm128 0v-24h24v24Zm24-40h-64v-32a8 8 0 0 0-16 0v32h-16v-32a8 8 0 0 0-16 0v32H40v-56h176ZM56 132a12 12 0 1 1 12 12a12 12 0 0 1-12-12m120 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhJeepIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJeepBoldIcon],svg[ph-jeep-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 84h-6.3l-8.61-40.19A20.11 20.11 0 0 0 205.53 28H50.47a20.11 20.11 0 0 0-19.56 15.81L22.3 84H16a12 12 0 0 0 0 24h4v92a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-20h80v20a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-92h4a12 12 0 0 0 0-24M53.7 52h148.6l6.86 32H46.84ZM64 196H44v-16h20Zm128 0v-16h20v16Zm20-40h-32v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24H44v-48h168Z"></svg:path>`,
})
export class PhJeepBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJeepDuotoneIcon],svg[ph-jeep-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 96H32l10.65-49.68A8 8 0 0 1 50.47 40h155.06a8 8 0 0 1 7.82 6.32Z" opacity=".2"></svg:path><svg:path d="M240 88h-9.53l-9.29-43.35A16.08 16.08 0 0 0 205.53 32H50.47a16.08 16.08 0 0 0-15.65 12.65L25.53 88H16a8 8 0 0 0 0 16h8v96a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-24h96v24a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-96h8a8 8 0 0 0 0-16M50.47 48h155.06l8.57 40H41.9ZM64 200H40v-24h24Zm128 0v-24h24v24Zm24-40h-64v-32a8 8 0 0 0-16 0v32h-16v-32a8 8 0 0 0-16 0v32H40v-56h176ZM56 132a12 12 0 1 1 12 12a12 12 0 0 1-12-12m120 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path></svg:g>`,
})
export class PhJeepDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJeepFillIcon],svg[ph-jeep-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 103.47a8.17 8.17 0 0 0-8.27-7.47H232a8 8 0 0 0-.18-1.68l-10.64-49.67A16.08 16.08 0 0 0 205.53 32H50.47a16.08 16.08 0 0 0-15.65 12.65L24.18 94.32A8 8 0 0 0 24 96h-7.73A8.17 8.17 0 0 0 8 103.47a8 8 0 0 0 8 8.53h8v88a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h20a4 4 0 0 0 4-4v-51.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v52a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-51.75a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v52a4 4 0 0 0 4 4h20v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V112h8a8 8 0 0 0 8-8.53M68 144a12 12 0 1 1 12-12a12 12 0 0 1-12 12m120 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12M40.18 96l10.29-48h155.06l10.29 48Z"></svg:path>`,
})
export class PhJeepFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJeepLightIcon],svg[ph-jeep-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 90h-11.15l-9.63-44.93A14.06 14.06 0 0 0 205.53 34H50.47a14.06 14.06 0 0 0-13.69 11.07L27.15 90H16a6 6 0 0 0 0 12h10v98a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-26h100v26a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-98h10a6 6 0 0 0 0-12M48.51 47.58a2 2 0 0 1 2-1.58h155.02a2 2 0 0 1 2 1.58L216.58 90H39.42ZM66 200a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-26h28Zm150 2h-24a2 2 0 0 1-2-2v-26h28v26a2 2 0 0 1-2 2m2-40h-68v-34a6 6 0 0 0-12 0v34h-20v-34a6 6 0 0 0-12 0v34H38v-60h180ZM58 132a10 10 0 1 1 10 10a10 10 0 0 1-10-10m120 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhJeepLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJeepThinIcon],svg[ph-jeep-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 92h-12.77l-10-46.51a12.07 12.07 0 0 0-11.7-9.49H50.47a12.07 12.07 0 0 0-11.74 9.49L28.77 92H16a4 4 0 0 0 0 8h12v100a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-28h104v28a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V100h12a4 4 0 0 0 0-8M46.56 47.16A4 4 0 0 1 50.47 44h155.06a4 4 0 0 1 3.91 3.16L219.05 92H37ZM68 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-28h32Zm148 4h-24a4 4 0 0 1-4-4v-28h32v28a4 4 0 0 1-4 4m4-40h-72v-36a4 4 0 0 0-8 0v36h-24v-36a4 4 0 0 0-8 0v36H36v-64h184ZM60 132a8 8 0 1 1 8 8a8 8 0 0 1-8-8m120 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhJeepThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJoystickIcon],svg[ph-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 144h-72V95.19a40 40 0 1 0-16 0V144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16M104 56a24 24 0 1 1 24 24a24 24 0 0 1-24-24m104 152H48v-48h160zm-40-96h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16"></svg:path>`,
})
export class PhJoystickIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJoystickBoldIcon],svg[ph-joystick-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 144h-68V98.32a44 44 0 1 0-24 0V144H48a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20M108 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20m96 148H52v-36h152Zm-32-100h32a12 12 0 0 1 0 24h-32a12 12 0 0 1 0-24"></svg:path>`,
})
export class PhJoystickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJoystickDuotoneIcon],svg[ph-joystick-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 160v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8m-88-72a32 32 0 1 0-32-32a32 32 0 0 0 32 32" opacity=".2"></svg:path><svg:path d="M208 144h-72V95.19a40 40 0 1 0-16 0V144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16M104 56a24 24 0 1 1 24 24a24 24 0 0 1-24-24m104 152H48v-48h160zm-40-96h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16"></svg:path></svg:g>`,
})
export class PhJoystickDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJoystickFillIcon],svg[ph-joystick-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160v48a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h72V95.19a40 40 0 1 1 16 0V144h72a16 16 0 0 1 16 16m-64-40a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8"></svg:path>`,
})
export class PhJoystickFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJoystickLightIcon],svg[ph-joystick-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 146h-74V93.52a38 38 0 1 0-12 0V146H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14M102 56a26 26 0 1 1 26 26a26 26 0 0 1-26-26m108 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-42-94h32a6 6 0 0 1 0 12h-32a6 6 0 0 1 0-12"></svg:path>`,
})
export class PhJoystickLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phJoystickThinIcon],svg[ph-joystick-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 148h-76V91.77a36 36 0 1 0-8 0V148H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12M100 56a28 28 0 1 1 28 28a28 28 0 0 1-28-28m112 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-48-88a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhJoystickThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKanbanIcon],svg[ph-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a8 8 0 0 0-8 8v152a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-48h48v16a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8M88 208H48v-80h40Zm0-96H48V64h40Zm64 32h-48V64h48Zm56 32h-40v-48h40Zm0-64h-40V64h40Z"></svg:path>`,
})
export class PhKanbanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKanbanBoldIcon],svg[ph-kanban-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v152a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-44h40v12a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-12 64h-32V68h32ZM84 68v40H52V68Zm0 136H52v-72h32Zm24-64V68h40v72Zm64 32v-40h32v40Z"></svg:path>`,
})
export class PhKanbanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKanbanDuotoneIcon],svg[ph-kanban-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v64h-56V56ZM40 208a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-88H40Z" opacity=".2"></svg:path><svg:path d="M216 48H40a8 8 0 0 0-8 8v152a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-48h48v16a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-8 64h-40V64h40ZM88 64v48H48V64Zm0 144H48v-80h40Zm16-64V64h48v80Zm64 32v-48h40v48Z"></svg:path></svg:g>`,
})
export class PhKanbanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKanbanFillIcon],svg[ph-kanban-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 56v96a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m64-8h-40a8 8 0 0 0-8 8v52a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V56a8 8 0 0 0-8-8m4 80h-48a4 4 0 0 0-4 4v44a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-44a4 4 0 0 0-4-4M80 48H40a8 8 0 0 0-8 8v52a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V56a8 8 0 0 0-8-8m4 80H36a4 4 0 0 0-4 4v76a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-76a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhKanbanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKanbanLightIcon],svg[ph-kanban-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a6 6 0 0 0-6 6v152a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-50h52v18a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6m-6 64h-44V62h44ZM90 62v52H46V62Zm0 146a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-82h44Zm12-62V62h52v84Zm106 32h-40a2 2 0 0 1-2-2v-50h44v50a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhKanbanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKanbanThinIcon],svg[ph-kanban-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a4 4 0 0 0-4 4v152a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-52h56v20a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4M92 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-84h48Zm0-92H44V60h48Zm64 32h-56V60h56Zm56 28a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4v-52h48Zm0-60h-48V60h48Z"></svg:path>`,
})
export class PhKanbanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyIcon],svg[ph-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M224 98.1c-1.09 34.09-29.75 61.86-63.89 61.9H160a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A63.7 63.7 0 0 1 96 95.92c0-34.14 27.81-62.8 61.9-63.89A64 64 0 0 1 224 98.1M192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhKeyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyBoldIcon],svg[ph-key-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 22.74A84.3 84.3 0 0 1 160.11 180H160a83.5 83.5 0 0 1-23.65-3.38l-7.86 7.87A12 12 0 0 1 120 188h-12v12a12 12 0 0 1-12 12H84v12a12 12 0 0 1-12 12H40a20 20 0 0 1-20-20v-28.69a19.86 19.86 0 0 1 5.86-14.14l53.52-53.52A84 84 0 1 1 244 98.74m-41.57-45.17A59.48 59.48 0 0 0 158 36c-32 1-58 27.89-58 59.89a59.7 59.7 0 0 0 4.2 22.19a12 12 0 0 1-2.55 13.21L44 189v23h16v-12a12 12 0 0 1 12-12h12v-12a12 12 0 0 1 12-12h19l9.65-9.65a12 12 0 0 1 13.22-2.55A59.6 59.6 0 0 0 160 156h.08c32 0 58.87-26.07 59.89-58a59.55 59.55 0 0 0-17.54-44.43"></svg:path>`,
})
export class PhKeyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyDuotoneIcon],svg[ph-key-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 98.36c-1.27 38.56-33.33 69.64-71.91 69.64a71.7 71.7 0 0 1-26.92-5.17L120 176H96v24H72v24H40a8 8 0 0 1-8-8v-28.69a8 8 0 0 1 2.34-5.65l58.83-58.83A71.7 71.7 0 0 1 88 95.91c0-38.58 31.08-70.64 69.64-71.87A72 72 0 0 1 232 98.36" opacity=".2"></svg:path><svg:path d="M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M224 98.1c-1.09 34.09-29.75 61.86-63.89 61.9H160a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A63.7 63.7 0 0 1 96 95.92c0-34.14 27.81-62.8 61.9-63.89A64 64 0 0 1 224 98.1M192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhKeyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyFillIcon],svg[ph-key-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M180 92a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhKeyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyLightIcon],svg[ph-key-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.15 40.85A78 78 0 0 0 86.2 121.31l-56.1 56.1a13.94 13.94 0 0 0-4.1 9.9V216a14 14 0 0 0 14 14h32a6 6 0 0 0 6-6v-18h18a6 6 0 0 0 6-6v-18h18a6 6 0 0 0 4.24-1.76l10.45-10.44A77.6 77.6 0 0 0 160 174h.1a78 78 0 0 0 55.05-133.15M226 98.16c-1.12 35.16-30.67 63.8-65.88 63.84a65.9 65.9 0 0 1-24.51-4.67a6 6 0 0 0-6.64 1.26L117.51 170H96a6 6 0 0 0-6 6v18H72a6 6 0 0 0-6 6v18H40a2 2 0 0 1-2-2v-28.69a2 2 0 0 1 .58-1.41l58.83-58.83a6 6 0 0 0 1.26-6.64A65.6 65.6 0 0 1 94 95.92c0-35.21 28.68-64.76 63.83-65.92A66 66 0 0 1 226 98.16M190 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhKeyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyReturnIcon],svg[ph-key-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 104v32a8 8 0 0 1-8 8H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 128H168v-24a8 8 0 0 1 16 0m48-48v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"></svg:path>`,
})
export class PhKeyReturnIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyReturnBoldIcon],svg[ph-key-return-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71.51 144.49a12 12 0 0 1 0-17l24-24a12 12 0 0 1 17 17L109 124h55v-20a12 12 0 0 1 24 0v32a12 12 0 0 1-12 12h-67l3.52 3.51a12 12 0 0 1-17 17ZM236 56v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v136h168Z"></svg:path>`,
})
export class PhKeyReturnBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyReturnDuotoneIcon],svg[ph-key-return-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M184 104v32a8 8 0 0 1-8 8H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 128H168v-24a8 8 0 0 1 16 0m48-48v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"></svg:path></svg:g>`,
})
export class PhKeyReturnDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyReturnFillIcon],svg[ph-key-return-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 96a8 8 0 0 1-8 8H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 128H168v-24a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhKeyReturnFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyReturnLightIcon],svg[ph-key-return-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 104v32a6 6 0 0 1-6 6H94.48l13.76 13.76a6 6 0 1 1-8.48 8.48l-24-24a6 6 0 0 1 0-8.48l24-24a6 6 0 0 1 8.48 8.48L94.48 130H170v-26a6 6 0 0 1 12 0m48-48v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhKeyReturnLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyReturnThinIcon],svg[ph-key-return-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 104v32a4 4 0 0 1-4 4H89.66l17.17 17.17a4 4 0 0 1-5.66 5.66l-24-24a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 5.66L89.66 132H172v-28a4 4 0 0 1 8 0m48-48v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhKeyReturnThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyThinIcon],svg[ph-key-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.74 42.26a76 76 0 0 0-125.23 79.58l-57 57a11.93 11.93 0 0 0-3.51 8.47V216a12 12 0 0 0 12 12h32a4 4 0 0 0 4-4v-20h20a4 4 0 0 0 4-4v-20h20a4 4 0 0 0 2.83-1.17l11.33-11.34A75.7 75.7 0 0 0 160 172h.1a76 76 0 0 0 53.64-129.74m14.22 56c-1.15 36.22-31.6 65.72-67.87 65.77H160a67.5 67.5 0 0 1-25.21-4.83a4 4 0 0 0-4.45.83l-12 12H96a4 4 0 0 0-4 4v20H72a4 4 0 0 0-4 4v20H40a4 4 0 0 1-4-4v-28.72a4.06 4.06 0 0 1 1.17-2.83L96 125.66a4 4 0 0 0 .83-4.45A67.5 67.5 0 0 1 92 95.91c0-36.27 29.55-66.72 65.77-67.91A68 68 0 0 1 228 98.23ZM188 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhKeyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyboardIcon],svg[ph-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zm-16-64a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m0-32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M72 160a8 8 0 0 1-8 8h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8m96 0a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m40 0a8 8 0 0 1-8 8h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhKeyboardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyboardBoldIcon],svg[ph-keyboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H36V68h184ZM52 128a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12m0-36a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12m0 72a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m108 0a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m44 0a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhKeyboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyboardDuotoneIcon],svg[ph-keyboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v128a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zm-16-64a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m0-32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M72 160a8 8 0 0 1-8 8h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8m96 0a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m40 0a8 8 0 0 1-8 8h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhKeyboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyboardFillIcon],svg[ph-keyboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M64 168H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m96 0H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m48 0h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhKeyboardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyboardLightIcon],svg[ph-keyboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Zm-20-64a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m0-32a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6M70 160a6 6 0 0 1-6 6h-8a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6m96 0a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m40 0a6 6 0 0 1-6 6h-8a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhKeyboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyboardThinIcon],svg[ph-keyboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-24-64a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m0-32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M68 160a4 4 0 0 1-4 4h-8a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4m96 0a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m40 0a4 4 0 0 1-4 4h-8a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhKeyboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyholeIcon],svg[ph-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-104a40 40 0 1 0-65.94 30.44l-13.38 30.33A8 8 0 0 0 96 184h64a8 8 0 0 0 7.32-11.23l-13.38-30.33A40.14 40.14 0 0 0 168 112m-31.32 31l11 25.05h-39.41l11-25.05a8 8 0 0 0-3.27-10.21a24 24 0 1 1 24 0a8 8 0 0 0-3.32 10.21"></svg:path>`,
})
export class PhKeyholeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyholeBoldIcon],svg[ph-keyhole-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-144a44 44 0 0 0-33.61 72.41l-9.86 32.06A12 12 0 0 0 96 188h64a12 12 0 0 0 11.47-15.53l-9.86-32.06A44 44 0 0 0 128 68m8.53 72.51l7.22 23.49h-31.5l7.22-23.49a12 12 0 0 0-4-12.89a20 20 0 1 1 25 0a12 12 0 0 0-3.94 12.89"></svg:path>`,
})
export class PhKeyholeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyholeDuotoneIcon],svg[ph-keyhole-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 139.72L160 176H96l16-36.28a32 32 0 1 1 32 0" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-104a40 40 0 1 0-65.94 30.44l-13.38 30.33A8 8 0 0 0 96 184h64a8 8 0 0 0 7.32-11.23l-13.38-30.33A40.14 40.14 0 0 0 168 112m-31.32 31l11 25.05h-39.41l11-25.05a8 8 0 0 0-3.27-10.21a24 24 0 1 1 24 0a8 8 0 0 0-3.32 10.21"></svg:path></svg:g>`,
})
export class PhKeyholeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyholeFillIcon],svg[ph-keyhole-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m29.52 146.39a4 4 0 0 1-3.66 5.61h-51.72a4 4 0 0 1-3.66-5.61L112 139.72a32 32 0 1 1 32 0Z"></svg:path>`,
})
export class PhKeyholeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyholeLightIcon],svg[ph-keyhole-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-106a38 38 0 1 0-61.5 29.86l-14 31.72A6 6 0 0 0 96 182h64a6 6 0 0 0 5.49-8.42l-14-31.72A38.16 38.16 0 0 0 166 112m-25 22.53a6 6 0 0 0-2.49 7.61L150.8 170h-45.6l12.29-27.86a6 6 0 0 0-2.49-7.61a26 26 0 1 1 26 0"></svg:path>`,
})
export class PhKeyholeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKeyholeThinIcon],svg[ph-keyhole-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-108a36 36 0 1 0-57 29.22l-14.66 33.17A4 4 0 0 0 96 180h64a4 4 0 0 0 3.66-5.61L149 141.22A36.15 36.15 0 0 0 164 112m-23.66 29.33L153.86 172h-51.72l13.52-30.67a4 4 0 0 0-1.66-5.07a28 28 0 1 1 28 0a4 4 0 0 0-1.66 5.07"></svg:path>`,
})
export class PhKeyholeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKnifeIcon],svg[ph-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.87 32.13a27.84 27.84 0 0 0-39.32 0L18.34 206.4a8 8 0 0 0 3.86 13.45A160.7 160.7 0 0 0 58.4 224c32.95 0 65.92-10.2 96.95-30.23c31.76-20.5 50.19-43.82 51-44.81a8 8 0 0 0-.64-10.59L185.32 118l46.55-46.56a27.85 27.85 0 0 0 0-39.31M189.1 144.44a220.4 220.4 0 0 1-42.86 36.16c-34.43 22.1-69.94 30.92-105.77 26.3L146 101.33Zm31.46-84.3L174 106.7L157.32 90l46.55-46.56a11.8 11.8 0 0 1 16.69 16.69Z"></svg:path>`,
})
export class PhKnifeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKnifeBoldIcon],svg[ph-knife-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.7 29.3a31.83 31.83 0 0 0-45 0L15.52 203.56a12 12 0 0 0 5.78 20.19A165 165 0 0 0 58.42 228c33.71 0 67.41-10.42 99.1-30.87c32.32-20.86 51.16-44.7 51.94-45.7a12 12 0 0 0-1-15.89L191 118l43.7-43.71a31.86 31.86 0 0 0 0-44.99m-90.83 148.06C113 197.12 81.28 206 49.28 203.74L146 107l19.5 19.51l18 18a216.7 216.7 0 0 1-39.63 32.85m73.86-120L174 101l-11-11l43.7-43.72a7.8 7.8 0 0 1 11 11Z"></svg:path>`,
})
export class PhKnifeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKnifeDuotoneIcon],svg[ph-knife-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M226.2 65.8L174 118l-28-28l52.2-52.2a19.8 19.8 0 0 1 28 0a19.8 19.8 0 0 1 0 28" opacity=".2"></svg:path><svg:path d="M231.87 32.13a27.84 27.84 0 0 0-39.32 0L18.34 206.4a8 8 0 0 0 3.86 13.45A160.7 160.7 0 0 0 58.4 224c32.95 0 65.92-10.2 96.95-30.23c31.76-20.5 50.19-43.82 51-44.81a8 8 0 0 0-.64-10.59L185.32 118l46.55-46.56a27.85 27.85 0 0 0 0-39.31M189.1 144.44a220.4 220.4 0 0 1-42.86 36.16c-34.43 22.1-69.94 30.92-105.77 26.3L146 101.33Zm31.46-84.3L174 106.7L157.32 90l46.55-46.56a11.8 11.8 0 0 1 16.69 16.69Z"></svg:path></svg:g>`,
})
export class PhKnifeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKnifeFillIcon],svg[ph-knife-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 49a25 25 0 0 0-42.63-17.66l-50.21 50.2L18.34 206.4a8 8 0 0 0 3.86 13.45A160.7 160.7 0 0 0 58.4 224c32.95 0 65.91-10.2 96.94-30.23c31.76-20.5 50.19-43.82 51-44.8a8 8 0 0 0-.64-10.59L181.31 114l47.38-47.39A24.84 24.84 0 0 0 236 49m-89.77 131.6c-34.43 22.1-69.94 30.92-105.76 26.3L146 101.34l43.09 43.1a220 220 0 0 1-42.86 36.16"></svg:path>`,
})
export class PhKnifeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKnifeLightIcon],svg[ph-knife-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.46 33.55a25.81 25.81 0 0 0-36.49 0L19.76 207.82a6 6 0 0 0 2.89 10.09A159 159 0 0 0 58.39 222c32.57 0 65.17-10.1 95.87-29.91c31.49-20.32 49.72-43.39 50.48-44.36a6 6 0 0 0-.49-7.94L182.49 118l48-48a25.86 25.86 0 0 0-.03-36.45m-38.6 110.82A221 221 0 0 1 147.75 182C111.5 205.4 74 214.23 36.23 208.32L146 98.5ZM222 61.56l-48 48L154.49 90l48-48A13.81 13.81 0 0 1 222 61.56"></svg:path>`,
})
export class PhKnifeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phKnifeThinIcon],svg[ph-knife-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229 35a23.83 23.83 0 0 0-33.66 0L21.17 209.22a4 4 0 0 0 1.93 6.72A156.2 156.2 0 0 0 58.4 220c39.41 0 72.27-15.08 94.78-29.6c31.21-20.14 49.23-43 50-43.91a4 4 0 0 0-.32-5.29L179.67 118L229 68.63A23.84 23.84 0 0 0 229 35m-34.41 109.27a222.4 222.4 0 0 1-46 39.55c-37.85 24.35-77 33-116.55 25.81L146 95.67ZM223.38 63L174 112.36L151.66 90L201 40.62A15.8 15.8 0 0 1 223.38 63"></svg:path>`,
})
export class PhKnifeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderIcon],svg[ph-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.52 213.26L164.51 73l9.09-25H184a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h4.58l-60.1 165.26a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 40 224a8 8 0 0 0 7.52-5.27L57.24 192h47l-7.74 21.26a8 8 0 0 0 4.79 10.26a8.1 8.1 0 0 0 2.71.48a8 8 0 0 0 7.52-5.27L130 168h52l18.45 50.73A8 8 0 0 0 208 224a8.1 8.1 0 0 0 2.73-.48a8 8 0 0 0 4.79-10.26m-88-85.26h-47l11.63-32h47Zm29.09-80l-11.67 32H98l11.6-32ZM63.06 176l11.64-32h47L110 176Zm72.72-24L156 96.41L176.21 152Z"></svg:path>`,
})
export class PhLadderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderBoldIcon],svg[ph-ladder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.27 211.9L168.77 73l7.63-21h7.6a12 12 0 0 0 0-24H88a12 12 0 0 0-1.11 23.94l-58.16 160a12 12 0 0 0 7.17 15.37a11.8 11.8 0 0 0 4.1.69a12 12 0 0 0 11.28-7.9L60 196h38.5l-5.78 15.9a12 12 0 0 0 7.18 15.37a11.8 11.8 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l17.49-48.1h46.46l17.49 48.1A12 12 0 0 0 208 228a11.8 11.8 0 0 0 4.1-.73a12 12 0 0 0 7.17-15.37M124.69 124H86.22L95 100h38.46Zm17.45-48h-38.46l8.73-24h38.46Zm-73.37 96l8.73-24H116l-8.73 24Zm72.73-24l14.5-39.89L170.5 148Z"></svg:path>`,
})
export class PhLadderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderDuotoneIcon],svg[ph-ladder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M187.64 160h-63.28L156 73Z" opacity=".2"></svg:path><svg:path d="M215.52 213.26L164.51 73l9.09-25H184a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h4.58l-60.1 165.26a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 40 224a8 8 0 0 0 7.52-5.27L57.24 192h47l-7.74 21.26a8 8 0 0 0 4.79 10.26a8.1 8.1 0 0 0 2.71.48a8 8 0 0 0 7.52-5.27L130 168h52l18.45 50.73A8 8 0 0 0 208 224a8.1 8.1 0 0 0 2.73-.48a8 8 0 0 0 4.79-10.26m-88-85.26h-47l11.63-32h47Zm29.09-80l-11.67 32H98l11.6-32ZM63.06 176l11.64-32h47L110 176Zm72.72-24L156 96.41L176.21 152Z"></svg:path></svg:g>`,
})
export class PhLadderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderFillIcon],svg[ph-ladder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.52 213.26L164.51 73l9.09-25H184a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h4.58l-60.1 165.26a8 8 0 0 0 4.79 10.26A8.1 8.1 0 0 0 40 224a8 8 0 0 0 7.52-5.27L57.24 192h47l-7.74 21.26a8 8 0 0 0 4.79 10.26a8.1 8.1 0 0 0 2.71.48a8 8 0 0 0 7.52-5.27L130 168h52l18.45 50.73A8 8 0 0 0 208 224a8.1 8.1 0 0 0 2.73-.48a8 8 0 0 0 4.79-10.26M109.39 64h30a8 8 0 0 1 0 16h-30a8 8 0 1 1 0-16m.86 96H80.3a8 8 0 0 1 0-16h30a8 8 0 0 1 0 16Zm14.54-40H94.84a8 8 0 0 1 0-16h30a8 8 0 0 1 0 16Zm11 32L156 96.41L176.21 152Z"></svg:path>`,
})
export class PhLadderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderLightIcon],svg[ph-ladder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.64 214L162.38 73l9.82-27H184a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h7.43L34.36 214a6 6 0 0 0 3.64 7.64a6.2 6.2 0 0 0 2 .36a6 6 0 0 0 5.64-3.95L55.84 190h51.23l-8.71 24a6 6 0 0 0 3.59 7.69a6.2 6.2 0 0 0 2 .36a6 6 0 0 0 5.64-3.95l18.98-52.1h54.86l18.93 52.05A6 6 0 0 0 208 222a6.2 6.2 0 0 0 2.05-.36a6 6 0 0 0 3.59-7.64m-84.75-84H77.66l13.09-36H142Zm30.54-84l-13.09 36H95.11l13.09-36ZM60.2 178l13.09-36h51.23l-13.09 36Zm72.73-24L156 90.56L179.07 154Z"></svg:path>`,
})
export class PhLadderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleIcon],svg[ph-ladder-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24a8 8 0 0 0-8 8v32H72V32a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-8 56v40H72V80ZM72 176v-40h112v40Z"></svg:path>`,
})
export class PhLadderSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleBoldIcon],svg[ph-ladder-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20a12 12 0 0 0-12 12v28H76V32a12 12 0 0 0-24 0v192a12 12 0 0 0 24 0v-28h104v28a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-12 64v32H76V84ZM76 172v-32h104v32Z"></svg:path>`,
})
export class PhLadderSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleDuotoneIcon],svg[ph-ladder-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 32v192H64V32Z" opacity=".2"></svg:path><svg:path d="M192 24a8 8 0 0 0-8 8v32H72V32a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-8 56v40H72V80ZM72 176v-40h112v40Z"></svg:path></svg:g>`,
})
export class PhLadderSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleFillIcon],svg[ph-ladder-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24a8 8 0 0 0-8 8v8H72v-8a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-8h112v8a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-16 160H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLadderSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleLightIcon],svg[ph-ladder-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26a6 6 0 0 0-6 6v34H70V32a6 6 0 0 0-12 0v192a6 6 0 0 0 12 0v-34h116v34a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-6 52v44H70V78ZM70 178v-44h116v44Z"></svg:path>`,
})
export class PhLadderSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleThinIcon],svg[ph-ladder-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28a4 4 0 0 0-4 4v36H68V32a4 4 0 0 0-8 0v192a4 4 0 0 0 8 0v-36h120v36a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-4 48v48H68V76ZM68 180v-48h120v48Z"></svg:path>`,
})
export class PhLadderSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLadderThinIcon],svg[ph-ladder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.76 214.63L160.26 73l10.54-29H184a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h10.29l-62 170.63a4 4 0 0 0 2.39 5.13A4.2 4.2 0 0 0 40 220a4 4 0 0 0 3.76-2.63L54.44 188h55.49l-9.69 26.63a4 4 0 0 0 2.39 5.13a4.1 4.1 0 0 0 1.37.24a4 4 0 0 0 3.76-2.63L127.17 164h57.66l19.41 53.37A4 4 0 0 0 208 220a4.2 4.2 0 0 0 1.37-.24a4 4 0 0 0 2.39-5.13M130.29 132H74.8l14.55-40h55.48Zm32-88l-14.55 40H92.26l14.54-40ZM57.35 180l14.54-40h55.49l-14.55 40Zm72.72-24L156 84.7l25.92 71.3Z"></svg:path>`,
})
export class PhLadderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampIcon],svg[ph-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.35 148.85l-48-112A8 8 0 0 0 192 32H64a8 8 0 0 0-7.35 4.85l-48 112A8 8 0 0 0 16 160h104v48H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-48h56v32a8 8 0 0 0 16 0v-32h32a8 8 0 0 0 7.35-11.15M28.13 144l41.15-96h117.44l41.15 96Z"></svg:path>`,
})
export class PhLampIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampBoldIcon],svg[ph-lamp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251 147.27l-48-112A12 12 0 0 0 192 28H64a12 12 0 0 0-11 7.27l-48 112A12 12 0 0 0 16 164h100v40H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-40h48v28a12 12 0 0 0 24 0v-28h28a12 12 0 0 0 11-16.73M34.2 140l37.71-88h112.18l37.71 88Z"></svg:path>`,
})
export class PhLampBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampDuotoneIcon],svg[ph-lamp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 152H16L64 40h128Z" opacity=".2"></svg:path><svg:path d="m247.35 148.85l-48-112A8 8 0 0 0 192 32H64a8 8 0 0 0-7.35 4.85l-48 112A8 8 0 0 0 16 160h104v48H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-48h56v32a8 8 0 0 0 16 0v-32h32a8 8 0 0 0 7.35-11.15M28.13 144l41.15-96h117.44l41.15 96Z"></svg:path></svg:g>`,
})
export class PhLampDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampFillIcon],svg[ph-lamp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.68 156.4A8 8 0 0 1 240 160h-32v32a8 8 0 0 1-16 0v-32h-56v48h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-48H16a8 8 0 0 1-7.35-11.15l48-112A8 8 0 0 1 64 32h128a8 8 0 0 1 7.35 4.85l48 112a8 8 0 0 1-.67 7.55"></svg:path>`,
})
export class PhLampFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampLightIcon],svg[ph-lamp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.51 149.64l-48-112A6 6 0 0 0 192 34H64a6 6 0 0 0-5.51 3.64l-48 112A6 6 0 0 0 16 158h106v52H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-52h60v34a6 6 0 0 0 12 0v-34h34a6 6 0 0 0 5.51-8.36M25.1 146L68 46h120l42.9 100Z"></svg:path>`,
})
export class PhLampLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampPendantIcon],svg[ph-lamp-pendant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 74.78V72a16 16 0 0 0-16-16h-24V16a8 8 0 0 0-16 0v40H96a16 16 0 0 0-16 16v2.78A111.73 111.73 0 0 0 16 176a8 8 0 0 0 8 8h64a40 40 0 0 0 80 0h64a8 8 0 0 0 8-8a111.73 111.73 0 0 0-64-101.22M128 208a24 24 0 0 1-24-24h48a24 24 0 0 1-24 24m-95.67-40a95.79 95.79 0 0 1 58.75-80.65A8 8 0 0 0 96 80v-8h64v8a8 8 0 0 0 4.92 7.38A95.79 95.79 0 0 1 223.67 168Z"></svg:path>`,
})
export class PhLampPendantIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampPendantBoldIcon],svg[ph-lamp-pendant-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72.28V72a20 20 0 0 0-20-20h-20V16a12 12 0 0 0-24 0v36H96a20 20 0 0 0-20 20v.28A115.7 115.7 0 0 0 12 176a12 12 0 0 0 12 12h60.19a44 44 0 0 0 87.62 0H232a12 12 0 0 0 12-12a115.7 115.7 0 0 0-64-103.72M128 204a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16m-91.22-40a91.75 91.75 0 0 1 55.84-72.95A12 12 0 0 0 100 80v-4h56v4a12 12 0 0 0 7.38 11.08a91.75 91.75 0 0 1 55.84 73Z"></svg:path>`,
})
export class PhLampPendantBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampPendantDuotoneIcon],svg[ph-lamp-pendant-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 176H24a104 104 0 0 1 64-96v-8a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v8a104 104 0 0 1 64 96" opacity=".2"></svg:path><svg:path d="M176 74.78V72a16 16 0 0 0-16-16h-24V16a8 8 0 0 0-16 0v40H96a16 16 0 0 0-16 16v2.78A111.73 111.73 0 0 0 16 176a8 8 0 0 0 8 8h64a40 40 0 0 0 80 0h64a8 8 0 0 0 8-8a111.73 111.73 0 0 0-64-101.22M128 208a24 24 0 0 1-24-24h48a24 24 0 0 1-24 24m-95.67-40a95.79 95.79 0 0 1 58.75-80.65A8 8 0 0 0 96 80v-8h64v8a8 8 0 0 0 4.92 7.38A95.79 95.79 0 0 1 223.67 168Z"></svg:path></svg:g>`,
})
export class PhLampPendantDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampPendantFillIcon],svg[ph-lamp-pendant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 74.78V72a16 16 0 0 0-16-16h-24V16a8 8 0 0 0-16 0v40H96a16 16 0 0 0-16 16v2.78A111.73 111.73 0 0 0 16 176a8 8 0 0 0 8 8h64a40 40 0 0 0 80 0h64a8 8 0 0 0 8-8a111.73 111.73 0 0 0-64-101.22M128 208a24 24 0 0 1-24-24h48a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhLampPendantFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampPendantLightIcon],svg[ph-lamp-pendant-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 76.05V72a14 14 0 0 0-14-14h-26V16a6 6 0 0 0-12 0v42H96a14 14 0 0 0-14 14v4a109.76 109.76 0 0 0-64 100a6 6 0 0 0 6 6h66v2a38 38 0 0 0 76 0v-2h66a6 6 0 0 0 6-6a109.76 109.76 0 0 0-64-99.95M154 184a26 26 0 0 1-52 0v-2h52ZM30.18 170a97.76 97.76 0 0 1 60.13-84.49A6 6 0 0 0 94 80v-8a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v8a6 6 0 0 0 3.69 5.54A97.76 97.76 0 0 1 225.82 170Z"></svg:path>`,
})
export class PhLampPendantLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampPendantThinIcon],svg[ph-lamp-pendant-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 77.34V72a12 12 0 0 0-12-12h-28V16a4 4 0 0 0-8 0v44H96a12 12 0 0 0-12 12v5.34A107.75 107.75 0 0 0 20 176a4 4 0 0 0 4 4h68v4a36 36 0 0 0 72 0v-4h68a4 4 0 0 0 4-4a107.75 107.75 0 0 0-64-98.66M156 184a28 28 0 0 1-56 0v-4h56ZM28.08 172a99.77 99.77 0 0 1 61.46-88.34A4 4 0 0 0 92 80v-8a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v8a4 4 0 0 0 2.46 3.69A99.77 99.77 0 0 1 227.92 172Z"></svg:path>`,
})
export class PhLampPendantThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLampThinIcon],svg[ph-lamp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.68 150.42l-48-112A4 4 0 0 0 192 36H64a4 4 0 0 0-3.68 2.42l-48 112A4 4 0 0 0 16 156h108v56H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-56h64v36a4 4 0 0 0 8 0v-36h36a4 4 0 0 0 3.68-5.58M22.07 148L66.64 44h122.72l44.57 104Z"></svg:path>`,
})
export class PhLampThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLaptopIcon],svg[ph-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8M48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLaptopIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLaptopBoldIcon],svg[ph-laptop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 156h-4V72a28 28 0 0 0-28-28H56a28 28 0 0 0-28 28v84h-4a12 12 0 0 0-12 12v24a28 28 0 0 0 28 28h176a28 28 0 0 0 28-28v-24a12 12 0 0 0-12-12M52 72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v84H52Zm168 120a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-12h184Zm-64-96a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhLaptopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLaptopDuotoneIcon],svg[ph-laptop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v104H40V72a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8M48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhLaptopDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLaptopFillIcon],svg[ph-laptop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8M112 72h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16m112 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192Z"></svg:path>`,
})
export class PhLaptopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLaptopLightIcon],svg[ph-laptop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 170h-10V72a22 22 0 0 0-22-22H56a22 22 0 0 0-22 22v98H24a6 6 0 0 0-6 6v16a22 22 0 0 0 22 22h176a22 22 0 0 0 22-22v-16a6 6 0 0 0-6-6M46 72a10 10 0 0 1 10-10h144a10 10 0 0 1 10 10v98H46Zm180 120a10 10 0 0 1-10 10H40a10 10 0 0 1-10-10v-10h196ZM150 88a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhLaptopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLaptopThinIcon],svg[ph-laptop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 172h-12V72a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v100H24a4 4 0 0 0-4 4v16a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20v-16a4 4 0 0 0-4-4M44 72a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v100H44Zm184 120a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-12h200ZM148 88a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhLaptopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLassoIcon],svg[ph-lasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.73 59.93C184.85 47.08 157.24 40 128 40s-56.85 7.08-77.73 19.93C28.17 73.52 16 92 16 112s12.17 38.44 34.27 52c19 11.67 43.49 18.56 69.73 19.73a37.35 37.35 0 0 1-18.58 33c-14.64 8.86-34.62 9.52-49.72 1.64a8 8 0 1 0-7.4 14.18A66.4 66.4 0 0 0 75 240a67.3 67.3 0 0 0 34.74-9.5c17-10.27 26.29-26.86 26.29-46.7c26.24-1.17 50.76-8.06 69.73-19.73C227.83 150.44 240 132 240 112s-12.17-38.48-34.27-52.07M67.41 155.18c5.24-9.55 15.44-12 23.53-11c10.9 1.42 21.86 9.13 26.61 23.42c-18.44-1.15-35.7-5.44-50.14-12.42m129.94-4.77c-16.95 10.43-39.17 16.53-63.13 17.43a54.4 54.4 0 0 0-11.39-23.07A47.17 47.17 0 0 0 93 128.35c-17-2.2-31.72 5.11-39.38 18.7C39.64 137 32 124.73 32 112c0-14.21 9.47-27.86 26.65-38.43C77.05 62.23 101.68 56 128 56s51 6.23 69.35 17.55C214.53 84.12 224 97.77 224 112s-9.47 27.84-26.65 38.41"></svg:path>`,
})
export class PhLassoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLassoBoldIcon],svg[ph-lasso-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.83 56.53C186.32 43.29 158 36 128 36s-58.32 7.29-79.83 20.53C24.85 70.89 12 90.6 12 112s12.85 41.14 36.17 55.5c18.48 11.37 42 18.34 67.29 20.08c-2 11.07-9.09 17.75-15.22 21.54c-13.48 8.31-32.75 9.18-46.86 2.1a12 12 0 1 0-10.76 21.48a71.76 71.76 0 0 0 32 7.3a73.2 73.2 0 0 0 38.18-10.43c15.45-9.54 25-24.58 26.83-41.9c25.6-1.64 49.47-8.65 68.16-20.15C231.15 153.16 244 133.45 244 112s-12.85-41.11-36.17-55.47m-134.44 97a21 21 0 0 1 20.16-9.35c10.36 1.39 16.54 9.43 19.72 19.13a135.3 135.3 0 0 1-39.88-9.75Zm64.87 10.14a61.8 61.8 0 0 0-10.76-24.82a46.08 46.08 0 0 0-30.75-18.46c-18-2.41-34.52 5.89-44.1 21C42.2 133 36 122.84 36 112c0-28.19 42.13-52 92-52s92 23.82 92 52c0 26.26-36.49 48.71-81.74 51.7Z"></svg:path>`,
})
export class PhLassoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLassoDuotoneIcon],svg[ph-lasso-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 112c0 35.35-46.56 64-104 64S24 147.35 24 112s46.56-64 104-64s104 28.65 104 64" opacity=".2"></svg:path><svg:path d="M205.73 59.93C184.85 47.08 157.24 40 128 40s-56.85 7.08-77.73 19.93C28.17 73.52 16 92 16 112s12.17 38.44 34.27 52c19 11.67 43.49 18.56 69.73 19.73a37.35 37.35 0 0 1-18.58 33c-14.64 8.86-34.62 9.52-49.72 1.64a8 8 0 1 0-7.4 14.18A66.4 66.4 0 0 0 75 240a67.3 67.3 0 0 0 34.74-9.5c17-10.27 26.29-26.86 26.29-46.7c26.24-1.17 50.76-8.06 69.73-19.73C227.83 150.44 240 132 240 112s-12.17-38.48-34.27-52.07M67.41 155.18c5.24-9.55 15.45-12 23.53-11c10.9 1.42 21.86 9.13 26.61 23.42c-18.44-1.15-35.7-5.44-50.14-12.42m129.94-4.77c-16.95 10.43-39.17 16.53-63.13 17.43a54.4 54.4 0 0 0-11.39-23.07A47.17 47.17 0 0 0 93 128.35c-17-2.2-31.72 5.11-39.38 18.7C39.64 137 32 124.73 32 112c0-14.21 9.47-27.86 26.65-38.43C77.05 62.23 101.68 56 128 56s51 6.23 69.35 17.55C214.53 84.12 224 97.77 224 112s-9.47 27.84-26.65 38.41"></svg:path></svg:g>`,
})
export class PhLassoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
