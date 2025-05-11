import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberThreeThinIcon],svg[ph-number-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 160a52 52 0 0 1-86.67 38.76a4 4 0 1 1 5.34-6A44 44 0 1 0 120 116a4 4 0 0 1-3.2-6.4L160 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.2 6.4l-43.61 58.15A52.08 52.08 0 0 1 172 160"></svg:path>`,
})
export class PhNumberThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberTwoThinIcon],svg[ph-number-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 208a4 4 0 0 1-4 4H88a4 4 0 0 1-3.2-6.4l71.94-95.92a36 36 0 1 0-57.49-43.34A36.6 36.6 0 0 0 95 73.61a4 4 0 0 1-7.33-3.21a44.4 44.4 0 0 1 5.2-8.87a44 44 0 0 1 70.28 53L96 204h72a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhNumberTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberZeroThinIcon],svg[ph-number-zero-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.87 65.35C167.65 46.15 149.71 36 128 36S88.35 46.15 76.13 65.35C65.73 81.69 60 103.94 60 128s5.73 46.31 16.13 62.65C88.35 209.85 106.29 220 128 220s39.65-10.15 51.87-29.35C190.27 174.31 196 152.06 196 128s-5.73-46.31-16.13-62.65M128 212c-41.45 0-60-42.19-60-84s18.55-84 60-84s60 42.19 60 84s-18.55 84-60 84"></svg:path>`,
})
export class PhNumberZeroThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumpadThinIcon],svg[ph-numpad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12m52-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M64 92a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M64 148a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 56a12 12 0 1 0 12 12a12 12 0 0 0-12-12m64-56a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhNumpadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNutThinIcon],svg[ph-nut-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m93.76-94.34l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M220 175.82a4 4 0 0 1-2.08 3.5l-88 48.18a4 4 0 0 1-3.84 0l-88-48.17a4 4 0 0 1-2.08-3.51V80.18a4 4 0 0 1 2.08-3.5l88-48.18a3.94 3.94 0 0 1 3.84 0l88 48.18a4 4 0 0 1 2.08 3.5Z"></svg:path>`,
})
export class PhNutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNyTimesLogoThinIcon],svg[ph-ny-times-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 140a8 8 0 1 1-8 8a8 8 0 0 1 8-8m14.31-40.38l-66.74-31.14A76 76 0 0 0 52 144c0 1.32 0 2.64.1 3.95l74-39.48A4 4 0 0 1 132 112v107.88a75.64 75.64 0 0 0 68.52-53.08a4 4 0 1 1 7.63 2.4A84 84 0 1 1 57.57 98.25A32 32 0 0 1 68 36a4 4 0 0 1 1.69.38L188.85 92a24 24 0 0 0-.85-48a4 4 0 0 1 0-8a32 32 0 0 1 0 64a4 4 0 0 1-1.69-.38m-62.31 19l-24 12.8v83.16a75.5 75.5 0 0 0 24 5.26Zm-70.95 37.89a76.15 76.15 0 0 0 39 54.4v-75.18Zm54-93.86L67.15 44a24 24 0 0 0-4.6 47.36c1.1-1.37 2.22-2.71 3.41-4a83.9 83.9 0 0 1 41.12-24.71Z"></svg:path>`,
})
export class PhNyTimesLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOctagonThinIcon],svg[ph-octagon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 83.06l-51.55-51.55a12 12 0 0 0-8.49-3.51h-72.9a12 12 0 0 0-8.49 3.51L31.51 83.06A12 12 0 0 0 28 91.55v72.9a12 12 0 0 0 3.51 8.49l51.55 51.55a12 12 0 0 0 8.49 3.51h72.9a12 12 0 0 0 8.49-3.51l51.55-51.55a12 12 0 0 0 3.51-8.49v-72.9a12 12 0 0 0-3.51-8.49M220 164.45a4 4 0 0 1-1.17 2.83l-51.55 51.55a4 4 0 0 1-2.83 1.17h-72.9a4 4 0 0 1-2.83-1.17l-51.55-51.55a4 4 0 0 1-1.17-2.83v-72.9a4 4 0 0 1 1.17-2.83l51.55-51.55A4 4 0 0 1 91.55 36h72.9a4 4 0 0 1 2.83 1.17l51.55 51.55a4 4 0 0 1 1.17 2.83Z"></svg:path>`,
})
export class PhOctagonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOfficeChairThinIcon],svg[ph-office-chair-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a4 4 0 0 1-4 4h-20.18A44.06 44.06 0 0 1 176 172h-44v32h28a28 28 0 0 1 28 28a4 4 0 0 1-8 0a20 20 0 0 0-20-20h-28v20a4 4 0 0 1-8 0v-20H96a20 20 0 0 0-20 20a4 4 0 0 1-8 0a28 28 0 0 1 28-28h28v-32H80a44.06 44.06 0 0 1-43.82-40H16a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4m-173.06 7.86a12 12 0 0 1-2.82-9.56l13.72-96A12.06 12.06 0 0 1 93.72 20h68.56a12.06 12.06 0 0 1 11.88 10.3l13.72 96A12 12 0 0 1 176 140H80a12 12 0 0 1-9.06-4.14m6-5.24A3.93 3.93 0 0 0 80 132h96a3.93 3.93 0 0 0 3-1.38a4 4 0 0 0 .94-3.19l-13.72-96a4 4 0 0 0-4-3.43h-68.5a4 4 0 0 0-4 3.43l-13.72 96a4 4 0 0 0 1 3.19Z"></svg:path>`,
})
export class PhOfficeChairThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOnigiriThinIcon],svg[ph-onigiri-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.11 148.63l-55.88-96l-.06-.09a52 52 0 0 0-88.34 0l-.06.09l-55.88 96A52 52 0 0 0 72.09 228h111.82a52 52 0 0 0 44.2-79.37M164 220H92v-52a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm58.36-22.61A43.43 43.43 0 0 1 183.91 220H172v-52a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12v52H72.09a44 44 0 0 1-37.37-67.2a.3.3 0 0 1 .05-.1l55.88-95.95a44 44 0 0 1 74.7 0l55.88 95.95a.3.3 0 0 1 .05.1a43.43 43.43 0 0 1 1.07 44.59Z"></svg:path>`,
})
export class PhOnigiriThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOpenAiLogoThinIcon],svg[ph-open-ai-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.68 114.91A52 52 0 0 0 162.49 42a52 52 0 0 0-91.67 13.15a52 52 0 0 0-34.5 85.94A52 52 0 0 0 70 213.16A52.3 52.3 0 0 0 83.59 215a51.7 51.7 0 0 0 9.93-1a52 52 0 0 0 91.66-13.13a52 52 0 0 0 34.5-85.94Zm-35.8-64.34a44 44 0 0 1 29.66 58.36a52 52 0 0 0-7-4.89L162 78.35a4 4 0 0 0-4 0l-50 28.87V79.5L150.5 55a43.7 43.7 0 0 1 33.38-4.43m-35.88 89l-20 11.54l-20-11.54v-23.1l20-11.54l20 11.54ZM76 72a44 44 0 0 1 78.25-27.62A52 52 0 0 0 146.5 48L102 73.73a4 4 0 0 0-2 3.46v57.74l-24-13.86ZM37.4 84.93a43.72 43.72 0 0 1 31.31-21.47A52 52 0 0 0 68 72v51.38a4 4 0 0 0 2 3.46l50 28.87l-24 13.86L53.5 145a44 44 0 0 1-16.1-60.07m34.72 120.5a44 44 0 0 1-29.66-58.36a52 52 0 0 0 7 4.89L94 177.65a4 4 0 0 0 4 0l50-28.87v27.72L105.5 201a43.7 43.7 0 0 1-33.38 4.43M180 184a44 44 0 0 1-78.26 27.61a51.7 51.7 0 0 0 7.76-3.61l44.5-25.73a4 4 0 0 0 2-3.46v-57.74l24 13.86Zm38.6-12.93a43.72 43.72 0 0 1-31.31 21.47A52 52 0 0 0 188 184v-51.38a4 4 0 0 0-2-3.46l-50-28.87l24-13.86L202.5 111a44 44 0 0 1 16.1 60.07"></svg:path>`,
})
export class PhOpenAiLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOptionThinIcon],svg[ph-option-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 192a4 4 0 0 1-4 4h-63.06a11.94 11.94 0 0 1-10.73-6.63L98.63 86.21A4 4 0 0 0 95.06 84H32a4 4 0 0 1 0-8h63.06a11.94 11.94 0 0 1 10.73 6.63l51.58 103.16a4 4 0 0 0 3.57 2.21H224a4 4 0 0 1 4 4M152 84h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhOptionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeSliceThinIcon],svg[ph-orange-slice-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 84H8a4 4 0 0 0-4 4a124 124 0 0 0 248 0a4 4 0 0 0-4-4M71.53 150.13L124 97.66v74.24a83.67 83.67 0 0 1-52.47-21.77m-5.66-5.66A83.67 83.67 0 0 1 44.1 92h74.24ZM132 97.66l52.47 52.47A83.67 83.67 0 0 1 132 171.9Zm58.13 46.81L137.66 92h74.24a83.67 83.67 0 0 1-21.77 52.47M128 204A116.14 116.14 0 0 1 12.07 92h24a92 92 0 0 0 183.82 0h24A116.14 116.14 0 0 1 128 204"></svg:path>`,
})
export class PhOrangeSliceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeThinIcon],svg[ph-orange-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.62 72.69A60.09 60.09 0 0 0 196 16a4 4 0 0 0-4-4h-8a60.09 60.09 0 0 0-56 38.5A60.09 60.09 0 0 0 72 12h-8a4 4 0 0 0 0 8h8a52.06 52.06 0 0 1 51.84 48.11a84 84 0 1 0 31.78 4.58M184 20h3.85A52.07 52.07 0 0 1 136 68h-3.85A52.07 52.07 0 0 1 184 20m-56 208a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76m51.94-67.34A53.45 53.45 0 0 1 136.66 204a5 5 0 0 1-.66.05a4 4 0 0 1-.66-7.95a45.33 45.33 0 0 0 36.72-36.71a4 4 0 1 1 7.88 1.32Z"></svg:path>`,
})
export class PhOrangeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOvenThinIcon],svg[ph-oven-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM76 76a8 8 0 1 1 8 8a8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m20 32H72a4 4 0 0 0-4 4v72a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4m-4 72H76v-64h104Z"></svg:path>`,
})
export class PhOvenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPackageThinIcon],svg[ph-package-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M126.08 28.5a3.94 3.94 0 0 1 3.84 0L216.67 76L178.5 96.89a4 4 0 0 0-.58-.4l-88-48.18Zm1.92 96L39.33 76l42.23-23.13l88.67 48.54Zm-89.92 54.8a4 4 0 0 1-2.08-3.5V83.29l88 48.16v94.91Zm179.84 0l-85.92 47v-94.85l40-21.89V152a4 4 0 0 0 8 0v-46.82l40-21.89v92.53a4 4 0 0 1-2.08 3.5Z"></svg:path>`,
})
export class PhPackageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushBroadThinIcon],svg[ph-paint-brush-broad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28H72a36 36 0 0 0-36 36v72a20 20 0 0 0 20 20h48a4 4 0 0 1 4 4.52l-7.9 46.81a4 4 0 0 0-.06.67a28 28 0 0 0 56 0a4 4 0 0 0-.06-.67L148 160.52a4 4 0 0 1 4-4.52h48a20 20 0 0 0 20-20V32a4 4 0 0 0-4-4M72 36h108v44a4 4 0 0 0 8 0V36h24v72H44V64a28 28 0 0 1 28-28m128 112h-48a12 12 0 0 0-11.88 13.7s0 .06 0 .1l7.88 46.52a20 20 0 0 1-40 0l7.86-46.52v-.1A12 12 0 0 0 104 148H56a12 12 0 0 1-12-12v-20h168v20a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhPaintBrushBroadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushHouseholdThinIcon],svg[ph-paint-brush-household-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.81 28.19a28 28 0 0 0-39.6 0l-.21.23l-56.22 65.69l-13.63-13.63a20 20 0 0 0-28.29 0l-76.69 76.69a4 4 0 0 0 0 5.65l80 80a4 4 0 0 0 5.65 0l76.69-76.69a20 20 0 0 0 0-28.29l-13.63-13.63L227.58 68l.23-.21a28 28 0 0 0 0-39.6M96 234.34L73.66 212l25.17-25.18a4 4 0 0 0-5.65-5.65L68 206.34L49.66 188l25.17-25.18a4 4 0 0 0-5.65-5.65L44 182.34L21.66 160L72 109.65L146.35 184ZM222.26 62l-68.85 59a4 4 0 0 0-.23 5.87l16.69 16.69a12 12 0 0 1 0 17L152 178.34L77.66 104l17.86-17.87a12 12 0 0 1 17 0l16.69 16.69a4 4 0 0 0 5.87-.23L194 33.74A20 20 0 0 1 222.26 62"></svg:path>`,
})
export class PhPaintBrushHouseholdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushThinIcon],svg[ph-paint-brush-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 28c-20.29 0-43.16 11.24-68 33.4c-18.47 16.49-34.39 35.83-45 49.93A56 56 0 0 0 36 164c0 33.22-21.26 48-22.22 48.68A4 4 0 0 0 16 220h76a56 56 0 0 0 52.67-75c14.11-10.63 33.44-26.55 49.93-45C216.76 75.16 228 52.29 228 32a4 4 0 0 0-4-4M92 212H26.35C33.91 203.69 44 188.08 44 164a48 48 0 1 1 48 48m26.52-97.31c4.13-5.44 9.32-12 15.29-18.9a80.1 80.1 0 0 1 26.4 26.4c-6.94 6-13.46 11.16-18.9 15.29a56.3 56.3 0 0 0-22.79-22.79m47.77 2.14a88.2 88.2 0 0 0-27.12-27.12c21.83-24.28 52.09-51.08 80.65-53.53c-2.45 28.56-29.25 58.82-53.53 80.65"></svg:path>`,
})
export class PhPaintBrushThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBucketThinIcon],svg[ph-paint-bucket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.33 165.78a4 4 0 0 0-6.66 0C228 166.8 212 191 212 208a20 20 0 0 0 40 0c0-17-16-41.2-16.67-42.22M232 220a12 12 0 0 1-12-12c0-10.25 7.49-24.64 12-32.37c4.51 7.73 12 22.1 12 32.37a12 12 0 0 1-12 12m3.89-87.6a4 4 0 0 0-1.06-3.74L119.34 13.17a4 4 0 0 0-5.65 0L70.25 56.6L42.82 29.17a4 4 0 0 0-5.65 5.66L64.6 62.26L17.86 109a20 20 0 0 0 0 28.29l84.85 84.85a20 20 0 0 0 28.29 0L210.16 143l23.1-7.7a4 4 0 0 0 2.63-2.9m-29.15 3.29a4.06 4.06 0 0 0-1.57 1l-79.83 79.82a12 12 0 0 1-17 0l-84.83-84.88a12 12 0 0 1 0-17l46.74-46.71l34.2 34.2A24 24 0 0 0 141 133a24 24 0 0 0-30.86-36.51l-34.2-34.2l40.61-40.6l108.04 108.05Zm-94.05-31a16 16 0 1 1 0 22.64a16 16 0 0 1 0-22.64"></svg:path>`,
})
export class PhPaintBucketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintRollerThinIcon],svg[ph-paint-roller-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 92h-20V64a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v28H16a4 4 0 0 0 0 8h20v28a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-28h20a4 4 0 0 1 4 4v50a4 4 0 0 1-2.9 3.84L132.7 186.5A12 12 0 0 0 124 198v34a4 4 0 0 0 8 0v-34a4 4 0 0 1 2.9-3.84l100.4-28.66A12 12 0 0 0 244 154v-50a12 12 0 0 0-12-12m-28 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h152a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhPaintRollerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaletteThinIcon],svg[ph-palette-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 56.74A99.3 99.3 0 0 0 128 28h-1a100 100 0 0 0-99 100c0 41.22 25.55 75.85 66.69 90.38a28.3 28.3 0 0 0 9.42 1.63A28 28 0 0 0 132 192a20 20 0 0 1 20-20h46.21a27.84 27.84 0 0 0 27.3-21.76a100.4 100.4 0 0 0 2.49-23.1a99.26 99.26 0 0 0-30-70.4m19.74 91.72A19.89 19.89 0 0 1 198.21 164H152a28 28 0 0 0-28 28a20 20 0 0 1-26.64 18.83C59.51 197.46 36 165.72 36 128a92 92 0 0 1 91.05-92h.95a92 92 0 0 1 89.72 112.46ZM136 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-44 24a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 56a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPaletteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPanoramaThinIcon],svg[ph-panorama-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.31 54.49a11.88 11.88 0 0 0-10.39-2.08l-3.47.93C206.47 58.47 171.14 68 128 68s-78.47-9.53-97.45-14.66l-3.47-.93A12 12 0 0 0 12 64v128a11.95 11.95 0 0 0 15.09 11.59l3.18-.85C49.27 197.58 84.64 188 128 188s78.73 9.58 97.73 14.73l3.18.85A12 12 0 0 0 244 192V64a11.92 11.92 0 0 0-4.69-9.51M21.57 60.83A4 4 0 0 1 24 60a4.2 4.2 0 0 1 1 .14l3.44.93C47.8 66.29 83.8 76 128 76s80.2-9.71 99.54-14.93l3.45-.93A4 4 0 0 1 236 64v128.37l-64.85-64.85a12 12 0 0 0-17 0l-22.83 22.83l-46.83-46.84a12 12 0 0 0-17 0L20 151V64a4 4 0 0 1 1.57-3.17M28.17 195l-3.15.85A4 4 0 0 1 20 192v-29.66l53.17-53.17a4 4 0 0 1 5.66 0l71.67 71.67c-7.24-.53-14.76-.84-22.5-.84c-44.43 0-81.84 10.13-99.83 15M163 182l-26-26l22.83-22.83a4 4 0 0 1 5.66 0l61.64 61.64C214 191.25 191.11 185.14 163 182m33-74a8 8 0 1 1 8 8a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhPanoramaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPantsThinIcon],svg[ph-pants-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.91 214.51l-22-176A12 12 0 0 0 186 28H70a12 12 0 0 0-11.91 10.51l-22 176A12 12 0 0 0 48 228h40.69a12 12 0 0 0 11.64-9.06L128 112l27.67 106.94a12 12 0 0 0 11.64 9.06H208a12 12 0 0 0 11.91-13.49M197.52 99.9A36 36 0 0 1 164.23 68h29.3ZM70 36h116a4 4 0 0 1 4 3.5l2.53 20.5H63.47L66 39.5a4 4 0 0 1 4-3.5m-7.53 32h29.3a36 36 0 0 1-33.29 31.9Zm30.1 149a4 4 0 0 1-3.88 3H48a4 4 0 0 1-4-4.5L57.47 108a44.05 44.05 0 0 0 42.34-40H124v27.49ZM211 218.65a4 4 0 0 1-3 1.35h-40.69a4 4 0 0 1-3.89-3.06L132 95.49V68h24.19a44.05 44.05 0 0 0 42.34 40L212 215.5a4 4 0 0 1-1 3.15"></svg:path>`,
})
export class PhPantsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneRightThinIcon],svg[ph-paper-plane-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.89 117.43l-168-95.88A12 12 0 0 0 44.7 36l31.08 92l-31.07 92A12 12 0 0 0 56 236a12.13 12.13 0 0 0 5.93-1.57l167.94-96.08a12 12 0 0 0 0-20.92Zm-4 14L58 227.47a4 4 0 0 1-5.72-4.83v-.07L82.87 132H144a4 4 0 0 0 0-8H82.87L52.26 33.37A3.89 3.89 0 0 1 53.44 29A4.13 4.13 0 0 1 56 28a3.9 3.9 0 0 1 1.93.54l168 95.87a4 4 0 0 1 0 7Z"></svg:path>`,
})
export class PhPaperPlaneRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneThinIcon],svg[ph-paper-plane-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.43 202.08L138.35 34.14a12 12 0 0 0-20.92 0l-95.88 168A12 12 0 0 0 36 219.3l92-31.08l91.94 31.06a12 12 0 0 0 14.49-17.2m-7.43 8.48a3.94 3.94 0 0 1-4.47 1.16L132 181.13V120a4 4 0 0 0-8 0v61.13l-90.63 30.61a4 4 0 0 1-4.85-5.69l95.87-168a4 4 0 0 1 7 0L227.47 206a3.91 3.91 0 0 1-.47 4.56"></svg:path>`,
})
export class PhPaperPlaneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneTiltThinIcon],svg[ph-paper-plane-tilt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.47 31.52a11.87 11.87 0 0 0-11.82-3L20.74 86.67a12 12 0 0 0-1.91 22.38L105 151l41.92 86.15a11.88 11.88 0 0 0 10.82 6.85h1a11.89 11.89 0 0 0 10.52-8.63l58.21-192v-.08a11.85 11.85 0 0 0-3-11.77m-4.62 9.54l-58.23 192a4 4 0 0 1-7.48.59l-41.3-84.86l50-50a4 4 0 1 0-5.66-5.66l-50 50l-84.9-41.31a3.88 3.88 0 0 1-2.27-4a3.93 3.93 0 0 1 3-3.54L214.9 36.16A4 4 0 0 1 216 36a4 4 0 0 1 2.79 1.19a3.93 3.93 0 0 1 1.06 3.87"></svg:path>`,
})
export class PhPaperPlaneTiltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipHorizontalThinIcon],svg[ph-paperclip-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a52.06 52.06 0 0 1-52 52H48a36 36 0 0 1 0-72h144a20 20 0 0 1 0 40H80a4 4 0 0 1 0-8h112a12 12 0 0 0 0-24H48a28 28 0 0 0 0 56h144a44 44 0 0 0 0-88H80a4 4 0 0 1 0-8h112a52.06 52.06 0 0 1 52 52"></svg:path>`,
})
export class PhPaperclipHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipThinIcon],svg[ph-paperclip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.83 125.17a4 4 0 0 1 0 5.66l-82.06 82a52 52 0 0 1-73.54-73.55l99.29-100.73a36 36 0 1 1 50.94 50.9l-99.3 100.69a20 20 0 1 1-28.3-28.27l83.29-84.68a4 4 0 1 1 5.7 5.61l-83.31 84.7a12 12 0 1 0 16.95 17l99.29-100.69a28 28 0 1 0-39.58-39.63L56.91 144.87a44 44 0 1 0 62.21 62.26l82-82a4 4 0 0 1 5.71.04"></svg:path>`,
})
export class PhPaperclipThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParachuteThinIcon],svg[ph-parachute-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 120a100 100 0 0 0-200 0a4 4 0 0 0 1.3 2.94a3 3 0 0 0 .3.26L124 194v26h-12a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8h-12v-26l94.4-70.8a4 4 0 0 0 1.6-3.2m-8.09-4H172c-1-48.62-19.87-75.14-32-87.21A92.14 92.14 0 0 1 219.91 116M128 28.89a76.7 76.7 0 0 1 17 18.75c8.36 12.69 18.27 34.71 19 68.36H92.05c.73-33.65 10.64-55.67 19-68.36A76.5 76.5 0 0 1 128 28.89M161.2 124L128 183.76L94.8 124Zm-75.55 0l29.74 53.54L44 124Zm84.7 0H212l-71.39 53.54ZM116 28.79C103.87 40.86 85 67.38 84 116H36.09A92.14 92.14 0 0 1 116 28.79"></svg:path>`,
})
export class PhParachuteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParagraphThinIcon],svg[ph-paragraph-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H96a60 60 0 0 0 0 120h44v44a4 4 0 0 0 8 0V52h32v156a4 4 0 0 0 8 0V52h20a4 4 0 0 0 0-8m-68 112H96a52 52 0 0 1 0-104h44Z"></svg:path>`,
})
export class PhParagraphThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParallelogramThinIcon],svg[ph-parallelogram-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.07 49.48A12 12 0 0 0 232 44H88.81a12 12 0 0 0-11 7.08l-64.8 144A12 12 0 0 0 24 212h143.19a12 12 0 0 0 10.95-7.08l64.8-144a12 12 0 0 0-.87-11.44m-6.43 8.16l-64.8 144a4 4 0 0 1-3.65 2.36H24a4 4 0 0 1-3.65-5.64l64.8-144A4 4 0 0 1 88.81 52H232a4 4 0 0 1 3.65 5.64Z"></svg:path>`,
})
export class PhParallelogramThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParkThinIcon],svg[ph-park-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 196h-36v-32h28a4 4 0 0 0 3.88-5l-32-128a4 4 0 0 0-7.76 0l-32 128a4 4 0 0 0 3.88 5h28v32h-72v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h12v24H40a4 4 0 0 0 0 8h12v24H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M192 48.49L218.88 156h-53.76ZM60 140h48v24H60Zm0 32h48v24H60Zm56-80a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhParkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPasswordThinIcon],svg[ph-password-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0m97.2 58.31l-25.2 8.18V96a4 4 0 0 0-8 0v26.49l-25.2-8.18a4 4 0 0 0-2.47 7.61l25.2 8.18L90 151.54a4 4 0 1 0 6.47 4.7L112 134.81l15.57 21.43a4 4 0 0 0 3.24 1.65a4 4 0 0 0 3.23-6.35l-15.57-21.44l25.2-8.18a4 4 0 0 0-2.47-7.61m101 2.57a4 4 0 0 0-5-2.57l-25.2 8.18V96a4 4 0 0 0-8 0v26.49l-25.2-8.18a4 4 0 0 0-2.47 7.61l25.2 8.18L186 151.54a4 4 0 1 0 6.47 4.7L208 134.81l15.57 21.43a4 4 0 0 0 3.24 1.65a4 4 0 0 0 3.23-6.35l-15.57-21.44l25.2-8.18a4 4 0 0 0 2.57-5.04Z"></svg:path>`,
})
export class PhPasswordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPathThinIcon],svg[ph-path-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 172a28 28 0 0 0-27.71 24H72a36 36 0 0 1 0-72h96a36 36 0 0 0 0-72H72a4 4 0 0 0 0 8h96a28 28 0 0 1 0 56H72a44 44 0 0 0 0 88h100.29A28 28 0 1 0 200 172m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhPathThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPatreonLogoThinIcon],svg[ph-patreon-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.85 35.7c-18.11-7.41-39.68-9.56-60.76-6.06C102.5 33.4 83 43.1 68.62 57.7C58 68.5 45.11 89.65 44.06 129c-.69 25.95 4.29 54.29 13.3 75.79C65.8 224.92 76.51 236 87.52 236c20.5 0 29.78-18.13 39.61-37.32c7.19-14.05 14.63-28.57 26.86-36.87c6.25-4.23 14.39-7.37 23-10.7c22.72-8.76 51-19.67 51-57.94c.01-25.57-15.35-46.51-42.14-57.47m-11.72 107.94c-9.06 3.5-17.63 6.8-24.63 11.55c-13.93 9.45-22.2 25.6-29.49 39.84c-9.06 17.69-16.88 33-32.49 33c-7.36 0-15.88-9.83-22.78-26.3c-8.6-20.51-13.34-47.61-12.68-72.49c1-36.75 12.64-56.12 22.26-65.9c18.86-19.19 45.53-27.23 70.33-27.23c13.88 0 27.18 2.52 38.17 7C215.17 56.34 220 80.15 220 93.17c0 32.83-23.32 41.83-45.87 50.47"></svg:path>`,
})
export class PhPatreonLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseCircleThinIcon],svg[ph-pause-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M108 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m48 0v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhPauseCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseThinIcon],svg[ph-pause-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36h-40a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4ZM96 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhPauseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPawPrintThinIcon],svg[ph-paw-print-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 84a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16M68 108a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-24 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48-40a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m72 40a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m21.18 108.36a39.32 39.32 0 0 1-18.77-23.52a40 40 0 0 0-76.82 0a39.3 39.3 0 0 1-18.73 23.51A36 36 0 0 0 102 217.17a68.14 68.14 0 0 1 51.95 0a36 36 0 0 0 31.23-64.79ZM168 212a27.8 27.8 0 0 1-11-2.23a76.16 76.16 0 0 0-58.11 0A27.7 27.7 0 0 1 88 212a28 28 0 0 1-13.29-52.65a47.23 47.23 0 0 0 22.56-28.29a32 32 0 0 1 61.46 0a47.26 47.26 0 0 0 22.6 28.3A28 28 0 0 1 168 212"></svg:path>`,
})
export class PhPawPrintThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaypalLogoThinIcon],svg[ph-paypal-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 96a51.7 51.7 0 0 0-21-16a52 52 0 0 0-52-52H84a12 12 0 0 0-11.65 9.09l-36 144A12 12 0 0 0 48 196h31.5a11 11 0 0 0 1.14-.06l-4.29 17.15A12 12 0 0 0 88 228h31.5a12 12 0 0 0 11.64-9.09l9-35.88a4 4 0 0 1 3.88-3h32a52 52 0 0 0 41-84ZM48 188a4 4 0 0 1-3.89-5l36-144A4 4 0 0 1 84 36h60a44 44 0 0 1 43.93 41.37A52.5 52.5 0 0 0 176 76h-56a12 12 0 0 0-11.65 9.09L83.39 185a4 4 0 0 1-3.88 3ZM187.63 85.56a43 43 0 0 1-1 5.11A43.94 43.94 0 0 1 144 124h-36a11 11 0 0 0-1.14.06l9.25-37A4 4 0 0 1 120 84h56a44.3 44.3 0 0 1 11.63 1.56m31 53.11A43.94 43.94 0 0 1 176 172h-32a12 12 0 0 0-11.64 9.09l-9 35.88a4 4 0 0 1-3.88 3H88a4 4 0 0 1-3.89-5l20-80a4 4 0 0 1 3.89-3h36a51.92 51.92 0 0 0 50.44-39.39c.35-1.39.62-2.79.85-4.19a44.08 44.08 0 0 1 23.39 50.25Z"></svg:path>`,
})
export class PhPaypalLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPeaceThinIcon],svg[ph-peace-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100a91.44 91.44 0 0 1-14.44 49.43L132 125.92V36.09A92.11 92.11 0 0 1 220 128m-96-91.91v89.83l-73.56 51.51A92 92 0 0 1 124 36.09M55 184l69-48.29v84.23A91.94 91.94 0 0 1 55 184m77 35.94v-84.26L201 184a91.94 91.94 0 0 1-69 35.91Z"></svg:path>`,
})
export class PhPeaceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibStraightThinIcon],svg[ph-pen-nib-straight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.75 125.66a1 1 0 0 0-.1-.19L188 70.94V32a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v39l-30.66 54.47l-.1.19a12 12 0 0 0 1.15 12.5l86.44 112.28a4 4 0 0 0 6.34 0l86.49-112.35a12 12 0 0 0 1.09-12.43M80 28h96a4 4 0 0 1 4 4v36H76V32a4 4 0 0 1 4-4m48 120a16 16 0 1 1 16-16a16 16 0 0 1-16 16m83.27-14.72L132 236.25v-80.59a24 24 0 1 0-8 0v80.58l-79.22-102.9a4 4 0 0 1-.4-4.06L74.35 76h107.31l30 53.28a4 4 0 0 1-.39 4"></svg:path>`,
})
export class PhPenNibStraightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibThinIcon],svg[ph-pen-nib-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 92.68a11.93 11.93 0 0 0-3.51-8.48L171.8 15.51a12 12 0 0 0-17 0l-29.02 29.05l-58.86 22.07a12.06 12.06 0 0 0-7.63 9.26L36.05 215.34A4 4 0 0 0 40 220a5 5 0 0 0 .66-.05L180.1 196.7a12 12 0 0 0 9.27-7.62l22.07-58.86l29-29a11.92 11.92 0 0 0 3.56-8.54m-62.12 93.59a4 4 0 0 1-3.09 2.54L51.66 210l58.45-58.45a24 24 0 1 0-5.66-5.66L46 204.35L67.19 77.21a4 4 0 0 1 2.54-3.09L127 52.64L203.35 129ZM108 132a16 16 0 1 1 16 16a16 16 0 0 1-16-16m126.83-36.49L208 122.34L133.66 48l26.82-26.82a4 4 0 0 1 5.66 0l68.69 68.69a4 4 0 0 1 0 5.65Z"></svg:path>`,
})
export class PhPenNibThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenThinIcon],svg[ph-pen-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 76.2L179.8 31.51a12 12 0 0 0-17 0L39.51 154.83a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h44.69a11.93 11.93 0 0 0 8.48-3.51l88.67-88.67l5.73 23l-38.39 38.4a4 4 0 1 0 5.65 5.66l40-40a4 4 0 0 0 1.06-3.8l-7.46-29.8l28.06-28.06a12 12 0 0 0 0-17.02M44 208v-38.34L86.35 212H48a4 4 0 0 1-4-4m52 2.34L45.66 160L136 69.66L186.35 120ZM218.83 87.51L192 114.34L141.66 64l26.83-26.83a4 4 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhPenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilCircleThinIcon],svg[ph-pencil-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-94 74.71h46.58l17.28 37.45A28 28 0 0 0 128 177.6a28 28 0 0 0-40.57-8.15Zm3.7-8L128 81.55L147.59 124ZM132 192a20 20 0 0 1 40 0v16.83a91.3 91.3 0 0 1-40 11.07Zm-48 0a20 20 0 0 1 40 0v27.9a91.3 91.3 0 0 1-40-11.07Zm109.05 1.05A92.4 92.4 0 0 1 180 203.9V176a4.1 4.1 0 0 0-.37-1.68l-48-104a4 4 0 0 0-7.26 0l-48 104A4.1 4.1 0 0 0 76 176v27.9a92.4 92.4 0 0 1-13-10.85a92 92 0 1 1 130.1 0Z"></svg:path>`,
})
export class PhPencilCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilLineThinIcon],svg[ph-pencil-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 76.2L179.8 31.51a12 12 0 0 0-17 0L39.51 154.83a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h168a4 4 0 0 0 0-8H105.66L224.49 93.17a12 12 0 0 0 0-16.97M73.66 188L164 97.66L186.35 120L96 210.34ZM68 182.34L45.66 160L136 69.66L158.35 92ZM44 208v-38.34l21.17 21.17L86.34 212H48a4 4 0 0 1-4-4M218.83 87.51L192 114.34L141.66 64l26.83-26.83a4 4 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhPencilLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilRulerThinIcon],svg[ph-pencil-ruler-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-36h28a4 4 0 0 0 0-8h-28v-32h28a4 4 0 0 0 0-8h-28V92h28a4 4 0 0 0 0-8h-28V48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4ZM74.83 29.17a4 4 0 0 0-5.66 0l-32 32A4 4 0 0 0 36 64v144a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V64a4 4 0 0 0-1.17-2.83ZM44 76h24v104H44Zm56 132a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-20h56Zm0-28H76V76h24Zm0-112H44v-2.34l28-28l28 28Z"></svg:path>`,
})
export class PhPencilRulerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleLineThinIcon],svg[ph-pencil-simple-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 76.2L179.8 31.51a12 12 0 0 0-17 0L39.51 154.83a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h168a4 4 0 0 0 0-8H105.66L224.49 93.17a12 12 0 0 0 0-16.97M94.34 212H48a4 4 0 0 1-4-4v-44.69a4 4 0 0 1 1.17-2.82L136 69.66L186.35 120ZM218.83 87.51L192 114.34L141.66 64l26.83-26.83a4 4 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhPencilSimpleLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleSlashThinIcon],svg[ph-pencil-simple-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l50.81 55.85l-56.3 56.29a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h44.69a11.93 11.93 0 0 0 8.48-3.51l53.36-53.36L205 218.69a4 4 0 1 0 5.92-5.38Zm44.52 173.52a4.06 4.06 0 0 1-2.83 1.17H48a4 4 0 0 1-4-4v-44.69a4 4 0 0 1 1.17-2.82l56-56l47.94 52.74Zm129-134.63L179.8 31.52a12 12 0 0 0-17 0l-41.64 41.67a4 4 0 0 0 5.66 5.65l9.18-9.18L186.35 120l-11.85 11.85a4 4 0 1 0 5.65 5.66l44.34-44.34a12 12 0 0 0 0-16.97Zm-5.66 11.31L192 114.34L141.66 64l26.83-26.83a4.1 4.1 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65Z"></svg:path>`,
})
export class PhPencilSimpleSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleThinIcon],svg[ph-pencil-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 76.2L179.8 31.51a12 12 0 0 0-17 0l-29.63 29.66l-93.65 93.66a11.9 11.9 0 0 0-3.52 8.48V208a12 12 0 0 0 12 12h44.69a12 12 0 0 0 8.48-3.51L224.48 93.17a12 12 0 0 0 0-17Zm-129 134.63a4 4 0 0 1-2.8 1.17H48a4 4 0 0 1-4-4v-44.69a4 4 0 0 1 1.17-2.83L136 69.65L186.34 120ZM218.83 87.51L192 114.34L141.66 64l26.82-26.83a4 4 0 0 1 5.66 0l44.69 44.68a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhPencilSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSlashThinIcon],svg[ph-pencil-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l50.81 55.85l-56.3 56.29a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h44.69a11.93 11.93 0 0 0 8.48-3.51l53.36-53.36L205 218.69a4 4 0 1 0 5.92-5.38Zm71.52 90.56L68 182.34L45.66 160l55.54-55.54ZM44 208v-38.34L86.34 212H48a4 4 0 0 1-4-4m52 2.34L73.66 188l54.2-54.21l21.28 23.41ZM224.49 76.2L179.8 31.52a12 12 0 0 0-17 0l-41.64 41.67a4 4 0 0 0 5.66 5.65l9.18-9.18L158.35 92l-10.52 10.52a4 4 0 1 0 5.65 5.66L164 97.66L186.35 120l-11.85 11.85a4 4 0 1 0 5.65 5.66l44.34-44.34a12 12 0 0 0 0-16.97m-5.66 11.31L192 114.34L141.66 64l26.83-26.83a4.1 4.1 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhPencilSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilThinIcon],svg[ph-pencil-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 76.2L179.8 31.51a12 12 0 0 0-17 0L39.52 154.83a11.9 11.9 0 0 0-3.52 8.48V208a12 12 0 0 0 12 12h44.69a12 12 0 0 0 8.48-3.51L224.48 93.17a12 12 0 0 0 0-17ZM45.66 160L136 69.65L158.34 92L68 182.34ZM44 208v-38.34l21.17 21.17L86.34 212H48a4 4 0 0 1-4-4m52 2.34L73.66 188L164 97.65L186.34 120ZM218.83 87.51L192 114.34L141.66 64l26.82-26.83a4 4 0 0 1 5.66 0l44.69 44.68a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhPencilThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagonThinIcon],svg[ph-pentagon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.14 90.74L135.19 22.4l-.09-.07a12 12 0 0 0-14.19 0l-.09.07l-87.95 68.34a12 12 0 0 0-4.3 13.26l32 107.7A12 12 0 0 0 72 220h112a12 12 0 0 0 11.44-8.41l32-107.53a12 12 0 0 0-4.3-13.32m-3.36 11l-32 107.54A4 4 0 0 1 184 212H72a4 4 0 0 1-3.79-2.69l-32-107.7a4 4 0 0 1 1.44-4.45l.09-.07l87.94-68.33a4 4 0 0 1 4.65 0l87.94 68.33l.09.07a4 4 0 0 1 1.42 4.53Z"></svg:path>`,
})
export class PhPentagonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagramThinIcon],svg[ph-pentagram-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.39 92.29A11.82 11.82 0 0 0 224 84h-64l-20.58-63.53a11.93 11.93 0 0 0-22.83 0L96 84H32a12 12 0 0 0-7 21.72L76.82 143L57 204.25a11.83 11.83 0 0 0 4.36 13.41a11.8 11.8 0 0 0 14.09 0L128 179.83l52.58 37.83a12 12 0 0 0 18.47-13.41L179.18 143L231 105.7a11.83 11.83 0 0 0 4.39-13.41M124.21 22.88a3.93 3.93 0 0 1 7.59 0L151.62 84h-47.24ZM29.67 99.23A4 4 0 0 1 32 92h61.37l-14 43Zm41 112a4 4 0 0 1-6.15-4.47l19.08-58.8l37.51 27Zm15.52-71.26L101.78 92h52.44l15.55 47.93L128 170Zm105.21 66.79a4 4 0 0 1-6.17 4.46l-50.38-36.32l37.51-27Zm34.9-107.5L176.59 135l-14-43H224a4 4 0 0 1 2.36 7.22Z"></svg:path>`,
})
export class PhPentagramThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPepperThinIcon],svg[ph-pepper-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.79 44.14A36.06 36.06 0 0 0 128 12a4 4 0 0 0 0 8a28 28 0 0 1 27.73 24.17A60.07 60.07 0 0 0 100 104c0 48.75-26.71 81.34-79.4 96.87a12 12 0 0 0 1.33 23.36A260.4 260.4 0 0 0 66.69 228a256.5 256.5 0 0 0 34.83-2.3c33.23-4.59 60.2-15.41 80.19-32.18C207.12 172.21 220 142.09 220 104a60.07 60.07 0 0 0-56.21-59.86M160 52a52.08 52.08 0 0 1 50.19 38.44L192 99.54l-30.21-15.11a4 4 0 0 0-3.58 0L128 99.54l-18.19-9.1A52.08 52.08 0 0 1 160 52m16.57 135.39c-25.47 21.37-80.88 41.77-153.24 29a4 4 0 0 1-.47-7.81C78.56 192.14 108 156 108 104a53 53 0 0 1 .28-5.39l17.93 9a4 4 0 0 0 3.58 0L160 92.48l30.21 15.11a4 4 0 0 0 3.58 0l17.93-9A53 53 0 0 1 212 104c0 35.62-11.92 63.67-35.43 83.39"></svg:path>`,
})
export class PhPepperThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPercentThinIcon],svg[ph-percent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 58.81l-144 144a4 4 0 0 1-5.66-5.66l144-144a4 4 0 1 1 5.66 5.65ZM53.37 98.62A32 32 0 1 1 76 108a31.82 31.82 0 0 1-22.63-9.38M52 76a24 24 0 1 0 7-17a23.85 23.85 0 0 0-7 17m160 104a32 32 0 1 1-9.37-22.63A31.82 31.82 0 0 1 212 180m-8 0a24 24 0 1 0-7 17a23.9 23.9 0 0 0 7-17"></svg:path>`,
})
export class PhPercentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonArmsSpreadThinIcon],svg[ph-person-arms-spread-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 68a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m99.6 68.57A15.7 15.7 0 0 0 212 76H44a16 16 0 0 0-6.7 30.52h.06l53.89 23.73l-21.92 83.3a16 16 0 0 0 7.9 20.91A15.8 15.8 0 0 0 84 236a16 16 0 0 0 14.42-9.07L128 176l29.58 51a16 16 0 0 0 29.07-13.35l-21.92-83.3l54-23.76a15.69 15.69 0 0 0 8.87-18.02m-12.21 10.66l-57 25.11a4 4 0 0 0-2.26 4.68L179 215.94a4 4 0 0 0 .24.67a8 8 0 0 1-3.87 10.63a8 8 0 0 1-10.63-3.87a3 3 0 0 0-.16-.31L131.46 166a4 4 0 0 0-6.92 0l-33.12 57.06a3 3 0 0 0-.16.31a8 8 0 1 1-14.5-6.76a4 4 0 0 0 .24-.67L99.87 129a4 4 0 0 0-2.26-4.68l-57-25.09A8 8 0 0 1 44 84h168a8 8 0 0 1 3.41 15.23Z"></svg:path>`,
})
export class PhPersonArmsSpreadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleBikeThinIcon],svg[ph-person-simple-bike-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m36 104a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28M56 140a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m136-88h-40a4 4 0 0 1-2.83-1.17L120 85.66L93.66 112l37.17 37.17A4 4 0 0 1 132 152v48a4 4 0 0 1-8 0v-46.34l-38.83-38.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0L153.66 108H192a4 4 0 0 1 0 8"></svg:path>`,
})
export class PhPersonSimpleBikeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleThinIcon],svg[ph-person-simple-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M116 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m64 32a4 4 0 0 1-4 4h-44v18.79l31.33 47a4 4 0 0 1-6.66 4.44l-28.67-43l-28.67 43a4 4 0 1 1-6.66-4.44l31.33-47V116H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPersonSimpleCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleHikeThinIcon],svg[ph-person-simple-hike-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 76a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m44 116v88a4 4 0 0 1-8 0v-84.08c-26.68-1.13-34.8-13.66-42.67-25.79c-3.53-5.46-6.87-10.61-12-15c-.66-.56-1.33-1.1-2-1.6l-16.83 38.76l39.83 28.45A4 4 0 0 1 156 176v56a4 4 0 0 1-8 0v-53.94l-36.77-26.26l-35.56 81.79A4 4 0 0 1 72 236a4.1 4.1 0 0 1-1.59-.33a4 4 0 0 1-2.08-5.27l57.53-132.31a4 4 0 0 1 5.5-2a37.2 37.2 0 0 1 7.26 4.94c5.94 5.15 9.74 11 13.42 16.71C159.77 129.7 166.45 140 192 140a4 4 0 0 1 4 4m-124 4a4 4 0 0 0 3.68-2.43l24-56a4 4 0 0 0-2.1-5.25l-28-12a4 4 0 0 0-5.26 2.1l-24 56a4 4 0 0 0 2.11 5.26l28 12A3.9 3.9 0 0 0 72 148m-22.75-18.1L70.1 81.25l20.65 8.85l-20.85 48.65Z"></svg:path>`,
})
export class PhPersonSimpleHikeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleRunThinIcon],svg[ph-person-simple-run-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 84a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m65.66 101c-.57.26-6.84 3-18.08 3c-13.86 0-35.25-4.15-62.81-22.16a162.6 162.6 0 0 1-19.49 40.78c9.47 2.56 23.08 7.5 35.14 16.67c18.3 13.92 27.58 33 27.58 56.68a4 4 0 0 1-8 0c0-15.89-5.88-53.77-59.7-66.37q-1.56 2.06-3.22 4.08c-18.85 22.83-42.42 34.72-68.6 34.72q-4.4 0-8.89-.45a4 4 0 1 1 .8-8c27.33 2.73 51.06-7.83 70.52-31.41c13.82-16.74 22.89-37.44 26.9-51.32c-42.84-26.69-71-4.8-71.32-4.57a4 4 0 1 1-5-6.24c.36-.29 9-7.1 23.84-9.58c13.5-2.27 35-1.26 60.91 16.34c25 17 44.41 21.64 56.29 22.56c12.75 1 19.77-2 19.84-2.05a4 4 0 0 1 3.29 7.29Z"></svg:path>`,
})
export class PhPersonSimpleRunThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSkiThinIcon],svg[ph-person-simple-ski-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 84a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16M38.88 83.84l112 32.65l6.33 6.33A4 4 0 0 0 160 124h40a4 4 0 0 0 0-8h-38.34l-30.83-30.83a4 4 0 0 0-5.66 0l-12 12l-72.05-21a4 4 0 0 0-2.24 7.68ZM128 93.65l11.07 11.08l-17.14-5Zm106.22 107.27a65.8 65.8 0 0 1-55 8.43L22.88 163.83a4 4 0 1 1 2.24-7.68l78.27 22.79l33-33l-49.49-14.1a4 4 0 1 1 2.2-7.69l56 16a4 4 0 0 1 1.73 6.67l-34.68 34.68l69.28 20.17a57.81 57.81 0 0 0 48.35-7.41a4 4 0 0 1 4.44 6.66"></svg:path>`,
})
export class PhPersonSimpleSkiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSnowboardThinIcon],svg[ph-person-simple-snowboard-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16m53.13 80.16l-136-40a4 4 0 0 0-2.26 7.68l46.06 13.54l-38.16 57.25l-47.54-13.78a21.18 21.18 0 1 0-11.9 40.66l157.44 45.63a21.5 21.5 0 0 0 6 .86a21.2 21.2 0 0 0 12.76-4.29a21 21 0 0 0 8.46-16.9a21.3 21.3 0 0 0-15.33-20.33l-56.15-16.27l22.8-34a4 4 0 0 0 .44-3.6a4 4 0 0 0-2.65-2.47l-40.56-11.74L133 99.75l81.9 24.09a4 4 0 0 0 1.1.16a4 4 0 0 0 1.13-7.84M204 206.81a13 13 0 0 1-5.26 10.5a13.25 13.25 0 0 1-11.74 2.15L29.55 173.82A13.26 13.26 0 0 1 20 161.18a13 13 0 0 1 5.26-10.5A13.23 13.23 0 0 1 37 148.54l157.44 45.63a13.25 13.25 0 0 1 9.56 12.64m-50.37-70.49l-21.17 31.55L94.83 157l21-31.59Z"></svg:path>`,
})
export class PhPersonSimpleSnowboardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSwimThinIcon],svg[ph-person-simple-swim-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 100a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m43.08 135.84a4 4 0 0 1-.53 5.63C203.56 205.9 188.9 212 173.93 212a55 55 0 0 1-6.12-.34c-15-1.65-28.6-9-41.72-16.14c-25.52-13.86-49.62-27-83.54 1.18a4 4 0 0 1-5.1-6.16c17-14.12 33.62-20.07 50.74-18.19c15 1.65 28.6 9 41.72 16.14c25.52 13.86 49.62 26.94 83.54-1.18a4 4 0 0 1 5.63.53M40 84h24.24a91.4 91.4 0 0 1 48.37 13.73l-34.42 34.43c-13.63 1-27 7-40.74 18.38a4 4 0 0 0 5.1 6.16c33.92-28.13 58-15 83.54-1.18c13.12 7.12 26.69 14.49 41.72 16.14a55 55 0 0 0 6.12.34c15 0 29.63-6.1 44.62-18.53a4 4 0 1 0-5.1-6.16c-8.12 6.73-15.68 11.1-22.83 13.66L135 105.29A99.34 99.34 0 0 0 64.24 76H40a4 4 0 0 0 0 8m141.66 79.32c-18.77 3.07-35-5.71-51.75-14.83c-12.83-7-26.09-14.15-40.73-16l30.16-30.16a94 94 0 0 1 9.95 8.63Z"></svg:path>`,
})
export class PhPersonSimpleSwimThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiThinIcon],svg[ph-person-simple-tai-chi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m92 76a4 4 0 0 1-4 4h-84v33.36l53.58 23A4 4 0 0 1 188 168v48a4 4 0 0 1-8 0v-45.36l-51.22-22L50.68 219a4 4 0 1 1-5.36-6L124 142.22V108H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPersonSimpleTaiChiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleThinIcon],svg[ph-person-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.43 130.06a4 4 0 0 1-5.49 1.37c-.38-.23-37.87-22.29-89.94-23.38v42.43l63 70.86a4 4 0 0 1-6 5.32L128 158l-61 68.66a4 4 0 0 1-6-5.32l63-70.86v-42.43c-52.07 1.09-89.56 23.15-89.94 23.38a4 4 0 0 1-4.12-6.86c1.67-1 41.6-24.57 98.06-24.57s96.39 23.57 98.06 24.57a4 4 0 0 1 1.37 5.49M100 48a28 28 0 1 1 28 28a28 28 0 0 1-28-28m8 0a20 20 0 1 0 20-20a20 20 0 0 0-20 20"></svg:path>`,
})
export class PhPersonSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleThrowThinIcon],svg[ph-person-simple-throw-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20M52 96a12 12 0 1 1 12 12a12 12 0 0 1-12-12m167.12 12.1a4 4 0 0 1-5.62.62c-1.2-.94-26.41-20.11-65.7 1.3v.84a210.6 210.6 0 0 1-3.43 33.54l34.23 28.53a4 4 0 0 1 1.23 4.33l-16 48A4 4 0 0 1 160 228a3.9 3.9 0 0 1-1.26-.21a4 4 0 0 1-2.53-5.06l15.13-45.41l-29-24.13a138 138 0 0 1-6.53 19.81c-13.26 31.58-37 52.71-70.66 62.8a3.8 3.8 0 0 1-1.15.2a4 4 0 0 1-1.15-7.83c69.32-20.8 75.54-86.09 76.74-113.21l-1.34.9C109.24 135.58 86.78 140 72.42 140c-11.24 0-17.51-2.73-18.08-3a4 4 0 1 1 3.32-7.28c.25.11 28.44 11.87 76.09-20.52c25.89-17.6 47.41-18.6 60.91-16.34c14.86 2.48 23.48 9.29 23.84 9.58a4 4 0 0 1 .62 5.66"></svg:path>`,
})
export class PhPersonSimpleThrowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleWalkThinIcon],svg[ph-person-simple-walk-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 76a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m60 116a4 4 0 0 1-4 4c-33.65 0-49.92-16.43-64.28-30.93c-3.52-3.57-6.86-6.93-10.34-10c-.66-.57-1.34-1.09-2-1.59l-16.86 38.77l39.84 28.45A4 4 0 0 1 156 176v56a4 4 0 0 1-8 0v-53.94l-36.77-26.26l-35.56 81.79a4 4 0 1 1-7.34-3.19l55.93-128.62c-29.7-10.55-73 29.64-73.52 30.09a4 4 0 1 1-5.48-5.87a173.4 173.4 0 0 1 32.84-23.41c25.15-13.54 46.07-14.06 60.52-1.52c3.71 3.23 7.15 6.7 10.79 10.37c13.9 14 28.28 28.56 58.59 28.56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPersonSimpleWalkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonThinIcon],svg[ph-person-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 68a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m87.42 116.78l-45.25-51.3a28 28 0 0 0-21-9.48h-42.34a28 28 0 0 0-21 9.48l-45.25 51.3a16 16 0 0 0 22.56 22.69L89 138.7l-19.7 74.88a16 16 0 0 0 29.08 13.35L128 176l29.58 51a16 16 0 0 0 29.08-13.35L167 138.7l25.9 20.77a16 16 0 0 0 22.56-22.69Zm-5.76 16.87a8 8 0 0 1-11.31 0a3 3 0 0 0-.33-.29l-35.51-28.48a4 4 0 0 0-6.38 4.13L179 215.94a4 4 0 0 0 .24.67a8 8 0 1 1-14.5 6.76c-.05-.11-.11-.21-.17-.32L131.46 166a4 4 0 0 0-6.92 0l-33.12 57.05c-.06.11-.12.21-.17.32a8 8 0 1 1-14.5-6.76a4 4 0 0 0 .24-.67L99.87 129a4 4 0 0 0-6.38-4.13L58 153.36a3 3 0 0 0-.33.29a8 8 0 0 1-11.31-11.31l.17-.18l45.3-51.39a20 20 0 0 1 15-6.77h42.34a20 20 0 0 1 15 6.77l45.32 51.39l.17.18a8 8 0 0 1 0 11.31"></svg:path>`,
})
export class PhPersonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPerspectiveThinIcon],svg[ph-perspective-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-20V48a12 12 0 0 0-14.15-11.81l-160 29.1A12 12 0 0 0 36 77.09V124H16a4 4 0 0 0 0 8h20v46.91a12 12 0 0 0 9.85 11.8l160 29.09a11.3 11.3 0 0 0 2.16.2a12 12 0 0 0 12-12v-76h20a4 4 0 0 0 0-8ZM44 77.09a4 4 0 0 1 3.28-3.93l160-29.09A4 4 0 0 1 212 48v76H44ZM212 208a4 4 0 0 1-4.72 3.93l-160-29.09a4 4 0 0 1-3.28-3.93V132h168Z"></svg:path>`,
})
export class PhPerspectiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneCallThinIcon],svg[ph-phone-call-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.14 47a4 4 0 0 1 4.86-2.87A82.24 82.24 0 0 1 211.86 103a4 4 0 0 1-2.83 4.89a3.7 3.7 0 0 1-1 .14a4 4 0 0 1-3.86-3A74.35 74.35 0 0 0 151 51.86a4 4 0 0 1-2.86-4.86M143 83.86C158 87.89 168.11 98 172.14 113a4 4 0 0 0 3.86 3a3.7 3.7 0 0 0 1-.14a4 4 0 0 0 2.83-4.89c-4.8-18-16.85-30-34.83-34.84a4 4 0 0 0-2 7.73m76.94 98.72A52.25 52.25 0 0 1 168 228C90.8 228 28 165.2 28 88a52.25 52.25 0 0 1 45.42-51.91a12 12 0 0 1 12.48 7.19L107 90.42a12 12 0 0 1-1 11.36c-.09.13-.18.26-.28.38l-21.2 25.21a3.9 3.9 0 0 0-.18 3.69c7.84 16.05 24.65 32.73 40.89 40.57a3.93 3.93 0 0 0 3.7-.21l24.87-21.12l.38-.29a12 12 0 0 1 11.38-1l47.22 21.16a12 12 0 0 1 7.13 12.41Zm-10.35-5.12l-47.24-21.16a3.93 3.93 0 0 0-3.57.27L134 177.69l-.37.28a12 12 0 0 1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27a12 12 0 0 1 .76-11.75c.09-.14.19-.26.29-.39l21.19-25.2a4 4 0 0 0 .23-3.6L78.57 46.49A4 4 0 0 0 74.9 44a4 4 0 0 0-.48 0A44.23 44.23 0 0 0 36 88c0 72.78 59.22 132 132 132a44.23 44.23 0 0 0 44-38.42a4 4 0 0 0-2.44-4.12Z"></svg:path>`,
})
export class PhPhoneCallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneDisconnectThinIcon],svg[ph-phone-disconnect-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.79 93C174.15 38.34 81.85 38.34 27.21 93c-18.52 18.5-20.31 45.81-4.36 66.39a12 12 0 0 0 13.83 3.77l49-17.39l.15-.06a12 12 0 0 0 7.31-8.79l5.9-29.51a3.93 3.93 0 0 1 2.51-3a80.6 80.6 0 0 1 52.5-.12a3.94 3.94 0 0 1 2.52 2.94l6.24 29.77a12 12 0 0 0 7.29 8.69l.15.06l49.07 17.41a12 12 0 0 0 13.83-3.77c15.95-20.58 14.16-47.89-4.36-66.39m-2 61.51a4 4 0 0 1-4.61 1.21l-.15-.06L173 138.24a4 4 0 0 1-2.37-2.87l-6.21-29.75a12 12 0 0 0-7.75-8.87a88.63 88.63 0 0 0-57.74.14a12 12 0 0 0-7.72 9l-5.9 29.51a4 4 0 0 1-2.31 2.86l-49 17.38l-.15.06a4 4 0 0 1-4.61-1.21c-13.42-17.3-11.9-40.26 3.69-55.85C58.65 72.85 93.33 60 128 60s69.35 12.89 95.13 38.68c15.58 15.55 17.11 38.51 3.69 55.81ZM220 200a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPhoneDisconnectThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneIncomingThinIcon],svg[ph-phone-incoming-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.78 170.13L165.56 149a12 12 0 0 0-11.38 1a3.4 3.4 0 0 0-.38.28L129 171.42a3.9 3.9 0 0 1-3.7.21c-16.24-7.84-33-24.52-40.89-40.57a3.9 3.9 0 0 1 .18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12 12 0 0 0 1-11.36L85.9 43.28a12 12 0 0 0-12.48-7.19A52.25 52.25 0 0 0 28 88c0 77.2 62.8 140 140 140a52.25 52.25 0 0 0 51.91-45.42a12 12 0 0 0-7.13-12.45m-.78 11.45A44.23 44.23 0 0 1 168 220C95.22 220 36 160.78 36 88a44.23 44.23 0 0 1 38.42-44a4 4 0 0 1 .48 0a4 4 0 0 1 3.67 2.49l21.11 47.14a4 4 0 0 1-.23 3.6l-21.19 25.2c-.1.13-.2.25-.29.39a12 12 0 0 0-.78 11.75c8.69 17.79 26.61 35.58 44.6 44.27a12 12 0 0 0 11.79-.87l.37-.28l24.83-21.12a3.93 3.93 0 0 1 3.57-.27l47.21 21.16a4 4 0 0 1 2.44 4.12M148 104V64a4 4 0 0 1 8 0v30.34l41.17-41.17a4 4 0 1 1 5.66 5.66L161.66 100H192a4 4 0 0 1 0 8h-40a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhPhoneIncomingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneListThinIcon],svg[ph-phone-list-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.78 170.13L165.56 149a12 12 0 0 0-11.38 1a3.4 3.4 0 0 0-.38.28L129 171.42a3.9 3.9 0 0 1-3.7.21c-16.24-7.84-33-24.52-40.89-40.57a3.9 3.9 0 0 1 .18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12 12 0 0 0 1-11.36L85.9 43.28a12 12 0 0 0-12.48-7.19A52.25 52.25 0 0 0 28 88c0 77.2 62.8 140 140 140a52.25 52.25 0 0 0 51.91-45.42a12 12 0 0 0-7.13-12.45m-.78 11.44A44.23 44.23 0 0 1 168 220C95.22 220 36 160.78 36 88a44.23 44.23 0 0 1 38.42-44a4 4 0 0 1 .48 0a4 4 0 0 1 3.67 2.49l21.11 47.14a4 4 0 0 1-.23 3.6l-21.19 25.2c-.1.13-.2.25-.29.39a12 12 0 0 0-.78 11.75c8.69 17.79 26.61 35.58 44.6 44.27a12 12 0 0 0 11.79-.87l.37-.28l24.83-21.12a3.93 3.93 0 0 1 3.57-.27l47.21 21.16a4 4 0 0 1 2.44 4.11M140 64a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4m0 40a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhPhoneListThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneOutgoingThinIcon],svg[ph-phone-outgoing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.17 106.83a4 4 0 0 1 0-5.66L190.34 60H160a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4v40a4 4 0 0 1-8 0V65.66l-41.17 41.17a4 4 0 0 1-5.66 0m70.74 75.75A52.25 52.25 0 0 1 168 228C90.8 228 28 165.2 28 88a52.25 52.25 0 0 1 45.42-51.91a12 12 0 0 1 12.48 7.19L107 90.42a12 12 0 0 1-1 11.36c-.09.13-.18.26-.28.38l-21.2 25.21a3.9 3.9 0 0 0-.18 3.69c7.84 16.05 24.65 32.73 40.89 40.57a3.9 3.9 0 0 0 3.7-.21l24.87-21.12a3.4 3.4 0 0 1 .38-.28a12 12 0 0 1 11.38-1.02l47.22 21.16a12 12 0 0 1 7.13 12.42m-10.35-5.12l-47.21-21.16a3.93 3.93 0 0 0-3.57.27L134 177.69l-.37.28a12 12 0 0 1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27a12 12 0 0 1 .76-11.75c.09-.14.19-.26.29-.39l21.19-25.2a4 4 0 0 0 .23-3.6L78.57 46.49A4 4 0 0 0 74.9 44a4 4 0 0 0-.48 0A44.23 44.23 0 0 0 36 88c0 72.78 59.22 132 132 132a44.23 44.23 0 0 0 44-38.42a4 4 0 0 0-2.44-4.12"></svg:path>`,
})
export class PhPhoneOutgoingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePauseThinIcon],svg[ph-phone-pause-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.78 170.13L165.56 149a12 12 0 0 0-11.38 1a3.4 3.4 0 0 0-.38.28L129 171.42a3.9 3.9 0 0 1-3.7.21c-16.24-7.84-33-24.52-40.89-40.57a3.9 3.9 0 0 1 .18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12 12 0 0 0 1-11.36L85.9 43.28a12 12 0 0 0-12.48-7.19A52.25 52.25 0 0 0 28 88c0 77.2 62.8 140 140 140a52.25 52.25 0 0 0 51.91-45.42a12 12 0 0 0-7.13-12.45m-.78 11.45A44.23 44.23 0 0 1 168 220C95.22 220 36 160.78 36 88a44.23 44.23 0 0 1 38.42-44a4 4 0 0 1 .48 0a4 4 0 0 1 3.67 2.49l21.11 47.14a4 4 0 0 1-.23 3.6l-21.19 25.2c-.1.13-.2.25-.29.39a12 12 0 0 0-.78 11.75c8.69 17.79 26.61 35.58 44.6 44.27a12 12 0 0 0 11.79-.87l.37-.28l24.83-21.12a3.93 3.93 0 0 1 3.57-.27l47.21 21.16a4 4 0 0 1 2.44 4.12M196 104V48a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m-40 0V48a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhPhonePauseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePlusThinIcon],svg[ph-phone-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.78 170.13L165.56 149a12 12 0 0 0-11.38 1a3.4 3.4 0 0 0-.38.28L129 171.42a3.9 3.9 0 0 1-3.7.21c-16.24-7.84-33-24.52-40.89-40.57a3.9 3.9 0 0 1 .18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12 12 0 0 0 1-11.36L85.9 43.28a12 12 0 0 0-12.48-7.19A52.25 52.25 0 0 0 28 88c0 77.2 62.8 140 140 140a52.25 52.25 0 0 0 51.91-45.42a12 12 0 0 0-7.13-12.45m-.78 11.44A44.23 44.23 0 0 1 168 220C95.22 220 36 160.78 36 88a44.23 44.23 0 0 1 38.42-44a4 4 0 0 1 .48 0a4 4 0 0 1 3.67 2.49l21.11 47.14a4 4 0 0 1-.23 3.6l-21.19 25.2c-.1.13-.2.25-.29.39a12 12 0 0 0-.78 11.75c8.69 17.79 26.61 35.58 44.6 44.27a12 12 0 0 0 11.79-.87l.37-.28l24.83-21.12a3.93 3.93 0 0 1 3.57-.27l47.21 21.16a4 4 0 0 1 2.44 4.11M140 80a4 4 0 0 1 4-4h28V48a4 4 0 0 1 8 0v28h28a4 4 0 0 1 0 8h-28v28a4 4 0 0 1-8 0V84h-28a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhPhonePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneSlashThinIcon],svg[ph-phone-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 1 0-6 5.38l31.52 34.63A137.7 137.7 0 0 0 27.21 109c-18.52 18.53-20.31 45.83-4.36 66.4a12 12 0 0 0 13.83 3.77l49-17.39l.15-.05a12 12 0 0 0 7.31-8.79l5.9-29.51a3.92 3.92 0 0 1 2.51-3a79.4 79.4 0 0 1 11.4-3l92.07 101.26a4 4 0 1 0 5.92-5.38Zm48 75.6a12 12 0 0 0-7.72 9l-5.9 29.51a4 4 0 0 1-2.37 2.9l-49 17.38l-.15.06a4 4 0 0 1-4.61-1.21c-13.42-17.29-11.9-40.25 3.69-55.84a130.06 130.06 0 0 1 49.39-30.99l24.44 26.88q-3.97.98-7.83 2.31Zm134.15 62.49a12 12 0 0 1-13.83 3.77l-9.31-3.3a4 4 0 1 1 2.68-7.54l9.37 3.32l.15.06a4 4 0 0 0 4.61-1.21c13.42-17.29 11.9-40.25-3.69-55.84c-26.47-26.46-63.79-40.48-102.41-38.47a4 4 0 1 1-.41-8c40.86-2.12 80.41 12.74 108.48 40.8c18.52 18.54 20.31 45.84 4.36 66.41"></svg:path>`,
})
export class PhPhoneSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneThinIcon],svg[ph-phone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.78 162.13L173.56 141a12 12 0 0 0-11.38 1a3.4 3.4 0 0 0-.38.28L137 163.42a3.93 3.93 0 0 1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9 3.9 0 0 1 .18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12 12 0 0 0 1-11.36L93.9 35.28a12 12 0 0 0-12.48-7.19A52.25 52.25 0 0 0 36 80c0 77.2 62.8 140 140 140a52.25 52.25 0 0 0 51.91-45.42a12 12 0 0 0-7.13-12.45m-.78 11.45A44.23 44.23 0 0 1 176 212c-72.78 0-132-59.22-132-132a44.23 44.23 0 0 1 38.42-44a4 4 0 0 1 .48 0a4 4 0 0 1 3.67 2.49l21.11 47.14a4 4 0 0 1-.23 3.6l-21.19 25.2c-.1.13-.2.25-.29.39a12 12 0 0 0-.78 11.75c8.69 17.79 26.61 35.58 44.6 44.27a12 12 0 0 0 11.79-.87l.37-.28l24.83-21.12a3.93 3.93 0 0 1 3.57-.27l47.21 21.16a4 4 0 0 1 2.44 4.12"></svg:path>`,
})
export class PhPhoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneTransferThinIcon],svg[ph-phone-transfer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 72a4 4 0 0 1 4-4h62.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L206.34 76H144a4 4 0 0 1-4-4m79.91 110.58A52.26 52.26 0 0 1 168 228C90.8 228 28 165.2 28 88a52.26 52.26 0 0 1 45.42-51.91a12 12 0 0 1 12.48 7.19L107 90.42a12 12 0 0 1-1 11.36a3.5 3.5 0 0 1-.29.38l-21.15 25.21a3.9 3.9 0 0 0-.18 3.69c7.83 16.05 24.65 32.73 40.89 40.57a3.9 3.9 0 0 0 3.7-.21l24.83-21.12a3 3 0 0 1 .37-.28a12 12 0 0 1 11.39-1.02l47.22 21.16a12 12 0 0 1 7.13 12.42m-10.35-5.12l-47.21-21.16a3.93 3.93 0 0 0-3.57.27L134 177.69l-.37.28a12 12 0 0 1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27a12 12 0 0 1 .76-11.75l.29-.39l21.19-25.2a4 4 0 0 0 .23-3.6L78.57 46.5A4 4 0 0 0 74.9 44a4 4 0 0 0-.48 0A44.23 44.23 0 0 0 36 88a132.14 132.14 0 0 0 132 132a44.23 44.23 0 0 0 44-38.42a4 4 0 0 0-2.44-4.12"></svg:path>`,
})
export class PhPhoneTransferThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneXThinIcon],svg[ph-phone-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.17 101.17L170.34 80l-21.17-21.17a4 4 0 0 1 5.66-5.66L176 74.34l21.17-21.17a4 4 0 1 1 5.66 5.66L181.66 80l21.17 21.17a4 4 0 0 1-5.66 5.66L176 85.66l-21.17 21.17a4 4 0 0 1-5.66-5.66m70.74 81.41A52.25 52.25 0 0 1 168 228C90.8 228 28 165.2 28 88a52.25 52.25 0 0 1 45.42-51.91a12 12 0 0 1 12.48 7.19L107 90.42a12 12 0 0 1-1 11.36c-.09.13-.18.26-.28.38l-21.2 25.21a3.9 3.9 0 0 0-.18 3.69c7.84 16.05 24.65 32.73 40.89 40.57a3.93 3.93 0 0 0 3.7-.21l24.87-21.12a3.4 3.4 0 0 1 .38-.28a12 12 0 0 1 11.38-1.02l47.22 21.16a12 12 0 0 1 7.13 12.42m-10.35-5.12l-47.21-21.16a3.93 3.93 0 0 0-3.57.27L134 177.69l-.37.28a12 12 0 0 1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27a12 12 0 0 1 .76-11.75c.09-.14.19-.26.29-.39l21.19-25.2a4 4 0 0 0 .23-3.6L78.57 46.49A4 4 0 0 0 74.9 44a4 4 0 0 0-.48 0A44.23 44.23 0 0 0 36 88c0 72.78 59.22 132 132 132a44.23 44.23 0 0 0 44-38.42a4 4 0 0 0-2.44-4.12"></svg:path>`,
})
export class PhPhoneXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhosphorLogoThinIcon],svg[ph-phosphor-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 36H72a4 4 0 0 0-4 4v128a76.08 76.08 0 0 0 76 76a4 4 0 0 0 4-4v-68h4a68 68 0 0 0 0-136M76 55.27L137.16 164H76Zm64 97.46L78.84 44H140ZM76.13 172H140v63.88A68.1 68.1 0 0 1 76.13 172m75.87-8h-4V44h4a60 60 0 0 1 0 120"></svg:path>`,
})
export class PhPhosphorLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiThinIcon],svg[ph-pi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 172a32 32 0 0 1-64 0V68H92v132a4 4 0 0 1-8 0V68H72a44.05 44.05 0 0 0-44 44a4 4 0 0 1-8 0a52.06 52.06 0 0 1 52-52h152a4 4 0 0 1 0 8h-52v104a24 24 0 0 0 48 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhPiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPianoKeysThinIcon],svg[ph-piano-keys-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M76 44h32v96H76Zm36 104a4 4 0 0 0 4-4V44h24v100a4 4 0 0 0 4 4h12v64h-56v-64Zm36-8V44h32v96ZM44 208V48a4 4 0 0 1 4-4h20v100a4 4 0 0 0 4 4h20v64H48a4 4 0 0 1-4-4m168 0a4 4 0 0 1-4 4h-44v-64h20a4 4 0 0 0 4-4V44h20a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhPianoKeysThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableThinIcon],svg[ph-picnic-table-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 132h-49.53l-32-64H192a4 4 0 0 0 0-8H64a4 4 0 0 0 0 8h25.53l-32 64H8a4 4 0 0 0 0 8h45.53l-25.11 50.21a4 4 0 0 0 1.79 5.37A4.1 4.1 0 0 0 32 196a4 4 0 0 0 3.58-2.21L62.47 140h131.06l26.89 53.79A4 4 0 0 0 224 196a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37L202.47 140H248a4 4 0 0 0 0-8m-181.53 0l32-64h59.06l32 64Z"></svg:path>`,
})
export class PhPicnicTableThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureThinIcon],svg[ph-picture-in-picture-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M36 192V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v60h-84a4 4 0 0 0-4 4v68H40a4 4 0 0 1-4-4m180 4h-76v-64h80v60a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhPictureInPictureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiggyBankThinIcon],svg[ph-piggy-bank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 116a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-36-48h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m92 44v32a20 20 0 0 1-20 20h-5.18l-17.16 48a12 12 0 0 1-11.3 8h-12.72a12 12 0 0 1-11.3-8l-2.87-8h-62.94l-2.87 8a12 12 0 0 1-11.3 8H73.64a12 12 0 0 1-11.3-8l-12.82-35.9a83.73 83.73 0 0 1-21.4-51.76A20 20 0 0 0 12 144a4 4 0 0 1-8 0a28 28 0 0 1 24.09-27.72A84.1 84.1 0 0 1 112 36h104a4 4 0 0 1 0 8h-36.2a84 84 0 0 1 41.31 42.63c.76 1.76 1.47 3.55 2.11 5.37h.78a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12h-3.66a4 4 0 0 1-3.82-2.8a75 75 0 0 0-2.75-7.39A76 76 0 0 0 144 44h-32a76 76 0 0 0-56 127.34a4 4 0 0 1 .82 1.36l13.09 36.65a4 4 0 0 0 3.73 2.65h12.72a4 4 0 0 0 3.77-2.65l3.87-10.7a4 4 0 0 1 3.71-2.65h68.58a4 4 0 0 1 3.76 2.65l3.82 10.7a4 4 0 0 0 3.77 2.65h12.72a4 4 0 0 0 3.77-2.65l18.1-50.7A4 4 0 0 1 216 156h8a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhPiggyBankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPillThinIcon],svg[ph-pill-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.84 85.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 1 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0m26.75 26.91L112.08 213.57a49.26 49.26 0 0 1-69.67-69.65L143.92 42.43a49.26 49.26 0 0 1 69.67 69.65M154.35 160L96 101.66l-47.94 47.91a41.26 41.26 0 0 0 58.36 58.35Zm53.59-111.92a41.28 41.28 0 0 0-58.36 0L101.65 96L160 154.34l47.93-47.91a41.32 41.32 0 0 0 .01-58.35"></svg:path>`,
})
export class PhPillThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPingPongThinIcon],svg[ph-ping-pong-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 196.36a12 12 0 0 0-5-8.77l-41.87-29.89l20.29-20.29a35.68 35.68 0 0 0 9.91-32.18a95.43 95.43 0 0 0-34-55.55A98.33 98.33 0 0 0 122.63 28A96.3 96.3 0 0 0 28 122.63a98.1 98.1 0 0 0 21.67 62.72a95.43 95.43 0 0 0 55.55 34a35.66 35.66 0 0 0 32.18-9.92l20.29-20.28l29.9 41.85a12 12 0 0 0 8.78 5h1a12 12 0 0 0 8.48-3.52l26.64-26.64a12 12 0 0 0 3.51-9.48m-180-16a90.1 90.1 0 0 1-20-57.62A88.27 88.27 0 0 1 122.75 36a90.13 90.13 0 0 1 57.59 19.9a89.1 89.1 0 0 1 21.28 24.81L80.72 201.62a89 89 0 0 1-24.81-21.29Zm170.92 19.85l-26.65 26.65A4 4 0 0 1 197 228a3.92 3.92 0 0 1-2.93-1.67l-32.64-45.69a4 4 0 0 0-2.92-1.66h-.33a4 4 0 0 0-2.83 1.17l-23.63 23.63a27.66 27.66 0 0 1-25 7.72a84.4 84.4 0 0 1-18.6-6L205.47 88.18a84.4 84.4 0 0 1 6 18.6a27.69 27.69 0 0 1-7.72 25l-23.63 23.63a4 4 0 0 0 .5 6.08l45.69 32.64a4 4 0 0 1 .51 6.08Z"></svg:path>`,
})
export class PhPingPongThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPintGlassThinIcon],svg[ph-pint-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203 29.35a4 4 0 0 0-3-1.35H56a4 4 0 0 0-4 4.48l23.15 193A12 12 0 0 0 87.1 236h81.8a12 12 0 0 0 11.92-10.57L204 32.48a4 4 0 0 0-1-3.13M195.49 36l-3.84 32H64.35l-3.84-32Zm-22.62 188.48a4 4 0 0 1-4 3.52H87.1a4 4 0 0 1-4-3.52L65.31 76h125.38Z"></svg:path>`,
})
export class PhPintGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinterestLogoThinIcon],svg[ph-pinterest-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 112c0 21.53-7.5 41.18-21.12 55.34C186.26 180.47 169.17 188 152 188c-21.35 0-33.52-8.76-39.76-15.57l-12.35 52.49A4 4 0 0 1 96 228a4.2 4.2 0 0 1-.92-.11a4 4 0 0 1-3-4.81l32-136a4 4 0 0 1 7.78 1.84l-17.28 73.45C117 166.42 127 180 152 180c29.49 0 60-25.44 60-68a76 76 0 1 0-141.83 38a4 4 0 0 1-6.93 4A84 84 0 1 1 220 112"></svg:path>`,
})
export class PhPinterestLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinwheelThinIcon],svg[ph-pinwheel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 221.17l-53.48-53.47a57 57 0 0 0 9.79-2.6a56 56 0 0 0 33.47-71.77a4 4 0 0 0-5.13-2.39l-55.31 20.13a56.8 56.8 0 0 0 7.06-11.38a56 56 0 0 0-69.9-76.28a4 4 0 0 0-2.39 5.12l20.13 55.32a56.3 56.3 0 0 0-11.38-7.06a56 56 0 0 0-76.28 69.9a4 4 0 0 0 2.06 2.31a4 4 0 0 0 3.06.13L83.85 129a56 56 0 0 0 62.84 87.66a4 4 0 0 0 2.39-5.13L129 156.17a56.5 56.5 0 0 0 11.38 7.06a55.9 55.9 0 0 0 22.48 5.24l58.36 58.36a4 4 0 0 0 5.66-5.66ZM99.88 29.71a48 48 0 0 1 32.72 89.9Zm25.21 92.67l-7.45 2.71l-2.72-7.45l7.46-2.72Zm-95.38 17.76a48 48 0 0 1 89.9-32.72Zm110.43 70.17a48 48 0 0 1-32.72-89.9Zm24.29-49.82a48.08 48.08 0 0 1-44-27.89l89.9-32.72a48 48 0 0 1-45.79 60.61Z"></svg:path>`,
})
export class PhPinwheelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeThinIcon],svg[ph-pipe-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108h-28V52h28a4 4 0 0 0 0-8h-28.7a12 12 0 0 0-11.3-8h-16a12 12 0 0 0-11.3 8H144A100.11 100.11 0 0 0 44 144v20.7a12 12 0 0 0-8 11.3v16a12 12 0 0 0 8 11.3V232a4 4 0 0 0 8 0v-28h56v28a4 4 0 0 0 8 0v-28.7a12 12 0 0 0 8-11.3v-16a12 12 0 0 0-8-11.3V144a28 28 0 0 1 28-28h20.7a12 12 0 0 0 11.3 8h16a12 12 0 0 0 11.3-8H232a4 4 0 0 0 0-8m-116 84a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm-8-48v20H52v-20a92.1 92.1 0 0 1 92-92h20v56h-20a36 36 0 0 0-36 36m84-28h-16a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v64a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhPipeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeWrenchThinIcon],svg[ph-pipe-wrench-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.46 57.85l-.09-.08l-44.93-42.31a12 12 0 0 0-16.91 0l-47.38 47l-4.35-4.39a21 21 0 0 0-29.68 29.71l4.25 4.31l-22.86 22.74a12 12 0 0 0 0 17l12.69 12.65a12 12 0 0 0 17 0l22.77-22.45l14.91 15.12a4 4 0 0 1 0 5.66L58.14 208.2a21 21 0 1 0 29.67 29.65l88.68-89.37a12 12 0 0 0 0-16.95L138 92.62l15.77-15.45a4 4 0 0 1 5.68 0l37.4 35.35a12 12 0 0 0 16.93 0l3.72-3.71a36 36 0 0 0 0-50.92Zm-137.95 81a4 4 0 0 1-5.65 0l-12.69-12.71a4 4 0 0 1 0-5.65L84 97.78l18.32 18.58Zm91.31 4L82.14 232.2a13 13 0 1 1-18.33-18.36l64.69-65.37a12 12 0 0 0 0-16.94L79.8 82.14a13 13 0 0 1 18.33-18.36l72.7 73.39a4 4 0 0 1-.01 5.67Zm41-39.73l-3.72 3.72a4 4 0 0 1-5.65 0l-.09-.08L165 71.42a12 12 0 0 0-16.85.06l-15.82 15.46l-18.55-18.73l47.39-47a4 4 0 0 1 5.66 0l.09.08l44.92 42.3a28 28 0 0 1 0 39.56Z"></svg:path>`,
})
export class PhPipeWrenchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPixLogoThinIcon],svg[ph-pix-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.5 119.55l-96.05-96a12 12 0 0 0-16.9 0l-96 96.05a12 12 0 0 0 0 16.9l96.05 96.05a12 12 0 0 0 16.9 0l96.05-96.05a12 12 0 0 0 0-16.9ZM125.21 29.16a3.94 3.94 0 0 1 5.58 0L193.64 92H160a4 4 0 0 0-2.83 1.17L128 122.34L98.83 93.17A4 4 0 0 0 96 92H62.36ZM28 128a3.9 3.9 0 0 1 1.16-2.79L54.36 100h40l28 28l-28 28h-40l-25.2-25.21A3.9 3.9 0 0 1 28 128m102.79 98.84a4 4 0 0 1-5.58 0L62.36 164H96a4 4 0 0 0 2.83-1.17L128 133.66l29.17 29.17A4 4 0 0 0 160 164h33.64Zm96.05-96.05L201.64 156h-40l-28-28l28-28h40l25.2 25.21a3.94 3.94 0 0 1 0 5.58"></svg:path>`,
})
export class PhPixLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPizzaThinIcon],svg[ph-pizza-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.66 63.94a11.94 11.94 0 0 0-5.44-7.43a197.51 197.51 0 0 0-204.44 0a12 12 0 0 0-4 16.47l96 157.27a12 12 0 0 0 20.54 0L234.25 73a11.9 11.9 0 0 0 1.41-9.06M58.59 118a28 28 0 1 1 27.66 45.3Zm94 73.41a28 28 0 0 1 29.15-47.76Zm33.33-54.61A35.66 35.66 0 0 0 168 132a36 36 0 0 0-19.56 66.22l-17 27.86a4 4 0 0 1-6.88 0l-34-55.67a36 36 0 1 0-36.33-59.54L43.33 93a156 156 0 0 1 169.34 0Zm41.48-68l-10.55 17.34a164.07 164.07 0 0 0-177.7 0L28.58 68.81a3.9 3.9 0 0 1-.46-3a4 4 0 0 1 1.82-2.48a189.47 189.47 0 0 1 196.12 0a4 4 0 0 1 1.82 2.48a3.9 3.9 0 0 1-.46 3Z"></svg:path>`,
})
export class PhPizzaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderThinIcon],svg[ph-placeholder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 12v158.34L49.66 44H208a4 4 0 0 1 4 4M44 208V49.66L206.34 212H48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhPlaceholderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlanetThinIcon],svg[ph-planet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.66 62.68c-6.73-11.58-26.58-13.8-56-6.3A92 92 0 0 0 37 141.7c-21.38 21.69-29.44 40-22.68 51.62c4.13 7.11 13 10.71 26 10.71A115.3 115.3 0 0 0 65 200.9c1.74-.39 3.52-.82 5.32-1.28A92 92 0 0 0 220 128a93 93 0 0 0-1-13.73c12.77-13 21.31-25.28 24-35.47c1.69-6.26 1.23-11.68-1.34-16.12M128 44a84.13 84.13 0 0 1 82.38 67.56c-16.17 15.69-38.8 32.48-64.49 47.24c-27.31 15.69-52.81 26.25-73.61 32A84 84 0 0 1 128 44M21.25 189.3C17 182 23.75 167.7 39 151.24a92 92 0 0 0 24 41.85c-22.14 4.91-37.53 3.49-41.75-3.79M128 212a83.6 83.6 0 0 1-48-15.1c21.58-6.58 45.83-17.37 69.85-31.16c24.25-13.94 45.61-29.46 61.83-44.44c.18 2.21.3 4.44.3 6.7A84.1 84.1 0 0 1 128 212M235.28 76.73c-2.13 8-8.58 17.65-18.25 28.06a92.07 92.07 0 0 0-24.12-41.92c21.85-4.82 37.59-3.46 41.83 3.83c1.46 2.53 1.65 5.9.54 10.03"></svg:path>`,
})
export class PhPlanetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlantThinIcon],svg[ph-plant-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.63 48.12a4 4 0 0 0-3.76-3.75c-50.25-3-90.44 12.1-107.52 40.29c-11.64 19.22-11.17 41.92 1.24 64.21a67.33 67.33 0 0 0-16.65 34.41l-23.49-23.49c8.63-16 8.81-32.33.42-46.19C81.45 93.09 52.35 82.13 16 84.26A4 4 0 0 0 12.26 88c-2.13 36.33 8.83 65.43 29.34 77.85a41.8 41.8 0 0 0 21.88 6.18a51.3 51.3 0 0 0 24.31-6.6L116 193.67V224a4 4 0 0 0 8 0v-29.49a59.57 59.57 0 0 1 15.29-40c11.49 6.36 23.07 9.56 34.24 9.56a57 57 0 0 0 29.81-8.41c28.18-17.09 43.25-57.28 40.29-107.54M45.74 159C28.47 148.56 19 123.69 20.08 92.08c31.61-1.09 56.48 8.39 67 25.66c6.48 10.71 6.59 23.37.46 36.09l-28.72-28.66a4 4 0 0 0-5.65 5.65l28.67 28.67c-12.73 6.13-25.39 6.02-36.1-.49m153.45-10.2c-16.05 9.72-35.09 9.59-54.08-.25l57.72-57.73a4 4 0 0 0-5.65-5.66l-57.73 57.73c-9.84-19-10-38-.25-54.08c15.11-25 51.08-38.53 96.63-36.64c1.9 45.55-11.68 81.52-36.64 96.63"></svg:path>`,
})
export class PhPlantThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayCircleThinIcon],svg[ph-play-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m46.12-95.39l-64-40A4 4 0 0 0 104 88v80a4 4 0 0 0 2.06 3.5a4.06 4.06 0 0 0 1.94.5a4 4 0 0 0 2.12-.61l64-40a4 4 0 0 0 0-6.78M112 160.78V95.22L164.45 128Z"></svg:path>`,
})
export class PhPlayCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayPauseThinIcon],svg[ph-play-pause-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 64v128a4 4 0 0 1-8 0V64a4 4 0 0 1 8 0m44-4a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m-84 68a11.76 11.76 0 0 1-5.48 10l-88.19 56.12a12 12 0 0 1-12.18.39A11.66 11.66 0 0 1 28 184.15V71.85a11.66 11.66 0 0 1 6.15-10.36a12 12 0 0 1 12.18.39L134.52 118a11.76 11.76 0 0 1 5.48 10m-8 0a3.77 3.77 0 0 0-1.78-3.22L42 68.63a3.94 3.94 0 0 0-2.09-.63a4 4 0 0 0-1.91.5a3.76 3.76 0 0 0-2 3.35v112.3a3.76 3.76 0 0 0 2 3.35a3.91 3.91 0 0 0 4-.13l88.18-56.15A3.77 3.77 0 0 0 132 128"></svg:path>`,
})
export class PhPlayPauseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayThinIcon],svg[ph-play-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.32 117.9L86.24 29.79a11.91 11.91 0 0 0-12.17-.23A11.71 11.71 0 0 0 68 39.89v176.22a11.71 11.71 0 0 0 6.07 10.33a11.91 11.91 0 0 0 12.17-.23l144.08-88.11a11.82 11.82 0 0 0 0-20.2m-4.18 13.37L82.06 219.39a4 4 0 0 1-4.07.07a3.77 3.77 0 0 1-2-3.35V39.89a3.77 3.77 0 0 1 2-3.35a4 4 0 0 1 4.07.07l144.08 88.12a3.8 3.8 0 0 1 0 6.54"></svg:path>`,
})
export class PhPlayThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaylistThinIcon],svg[ph-playlist-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h120a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m72 56H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m131.83-62.85a4 4 0 0 1-5 2.68L204 117.38V192a28 28 0 1 1-8-19.57V112a4 4 0 0 1 5.15-3.83l40 12a4 4 0 0 1 2.68 4.98M196 192a20 20 0 1 0-20 20a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhPlaylistThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugChargingThinIcon],svg[ph-plug-charging-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 60h-52V16a4 4 0 0 0-8 0v44H92V16a4 4 0 0 0-8 0v44H32.55C28.13 60 28 63.59 28 64a4 4 0 0 0 4 4h20v92a36 36 0 0 0 36 36h36v44a4 4 0 0 0 8 0v-44h36a36 36 0 0 0 36-36V68h20a4 4 0 0 0 0-8m-28 100a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28V68h136Zm-87.29-29.72a4 4 0 0 1-.46-3.68l12-32a4 4 0 0 1 7.5 2.8l-10 26.6H144a4 4 0 0 1 3.75 5.4l-12 32a4 4 0 1 1-7.5-2.8l10-26.6H112a4 4 0 0 1-3.29-1.72"></svg:path>`,
})
export class PhPlugChargingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugThinIcon],svg[ph-plug-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 69.17a4 4 0 0 0-5.66 0L192 106.34L149.66 64l37.17-37.17a4 4 0 1 0-5.66-5.66L144 58.34l-29.17-29.17a4 4 0 0 0-5.66 5.66l9.17 9.17l-55.8 55.8a36.05 36.05 0 0 0 0 50.91l18.55 18.54l-51.92 51.92a4 4 0 0 0 5.66 5.66l51.92-51.92l18.54 18.55a36.06 36.06 0 0 0 50.91 0l55.8-55.8l9.17 9.17a4 4 0 0 0 5.66-5.66L197.66 112l37.17-37.17a4 4 0 0 0 0-5.66M150.54 187.8a28 28 0 0 1-39.59 0L68.2 145.05a28 28 0 0 1 0-39.59l55.8-55.8L206.34 132Z"></svg:path>`,
})
export class PhPlugThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsConnectedThinIcon],svg[ph-plugs-connected-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 21.17a4 4 0 0 0-5.66 0L173.94 76.4l-8.2-8.2a28 28 0 0 0-39.6 0L100 94.34l-9.17-9.17a4 4 0 0 0-5.66 5.66l9.17 9.17l-26.14 26.14a28 28 0 0 0 0 39.6l8.2 8.2l-55.23 55.23a4 4 0 0 0 5.66 5.66l55.23-55.23l8.2 8.2a28 28 0 0 0 39.6 0L156 161.66l9.17 9.17a4 4 0 0 0 5.66-5.66l-9.17-9.17l26.14-26.14a28 28 0 0 0 0-39.6l-8.2-8.2l55.23-55.23a4 4 0 0 0 0-5.66m-110.63 161a20 20 0 0 1-28.28 0l-22.06-22.09a20 20 0 0 1 0-28.28L100 105.66L150.34 156Zm57.94-57.94L156 150.34L105.66 100l26.14-26.14a20 20 0 0 1 28.28 0l22.06 22.06a20 20 0 0 1 0 28.28ZM92.29 33.49a4 4 0 1 1 7.42-3l8 20a4 4 0 0 1-2.22 5.2A3.9 3.9 0 0 1 104 56a4 4 0 0 1-3.71-2.51Zm-64 61a4 4 0 0 1 5.2-2.22l20 8A4 4 0 0 1 52 108a3.9 3.9 0 0 1-1.49-.29l-20-8a4 4 0 0 1-2.22-5.2Zm199.42 67A4 4 0 0 1 224 164a3.9 3.9 0 0 1-1.49-.29l-20-8a4 4 0 1 1 3-7.42l20 8a4 4 0 0 1 2.2 5.2m-64 61a4 4 0 0 1-2.22 5.2a3.9 3.9 0 0 1-1.49.31a4 4 0 0 1-3.71-2.51l-8-20a4 4 0 0 1 7.42-3Z"></svg:path>`,
})
export class PhPlugsConnectedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsThinIcon],svg[ph-plugs-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.83 141.17a4 4 0 0 0-5.66 0L120 162.34L93.66 136l21.17-21.17a4 4 0 0 0-5.66-5.66L88 130.34l-21.17-21.17a4 4 0 0 0-5.66 5.66l9.17 9.17l-26.14 26.14a28 28 0 0 0 0 39.6l8.2 8.2l-31.23 31.23a4 4 0 0 0 5.66 5.66l31.23-31.23l8.2 8.2a28 28 0 0 0 39.6 0L132 185.66l9.17 9.17a4 4 0 0 0 5.66-5.66L125.66 168l21.17-21.17a4 4 0 0 0 0-5.66m-46.63 65a20 20 0 0 1-28.28 0l-22.06-22.09a20 20 0 0 1 0-28.28L76 129.66L126.34 180Zm134.63-185a4 4 0 0 0-5.66 0L197.94 52.4l-8.2-8.2a28 28 0 0 0-39.6 0L124 70.34l-9.17-9.17a4 4 0 0 0-5.66 5.66l80 80a4 4 0 0 0 5.66-5.66l-9.17-9.17l26.14-26.14a28 28 0 0 0 0-39.6l-8.2-8.2l31.23-31.23a4 4 0 0 0 0-5.66M212 86.06a19.86 19.86 0 0 1-5.86 14.14L180 126.34L129.66 76l26.14-26.14a20 20 0 0 1 28.28 0l22.06 22.06A19.85 19.85 0 0 1 212 86.06"></svg:path>`,
})
export class PhPlugsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusCircleThinIcon],svg[ph-plus-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-92a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H88a4 4 0 0 1 0-8h36V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPlusCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusThinIcon],svg[ph-plus-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 58.83l-144 144a4 4 0 0 1-5.66-5.66l144-144a4 4 0 1 1 5.66 5.66M68 112a4 4 0 0 0 8 0V76h36a4 4 0 0 0 0-8H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36Zm156 68h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhPlusMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusSquareThinIcon],svg[ph-plus-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40-80a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H88a4 4 0 0 1 0-8h36V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPlusSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusThinIcon],svg[ph-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4h-84v84a4 4 0 0 1-8 0v-84H40a4 4 0 0 1 0-8h84V40a4 4 0 0 1 8 0v84h84a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPokerChipThinIcon],svg[ph-poker-chip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 152a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52m39.47-97.13A59.7 59.7 0 0 0 132 68.15V36.09a91.64 91.64 0 0 1 58.13 24.12ZM124 68.15a59.7 59.7 0 0 0-35.47 14.72L65.87 60.21A91.64 91.64 0 0 1 124 36.09ZM82.87 88.53A59.7 59.7 0 0 0 68.15 124H36.09a91.64 91.64 0 0 1 24.12-58.13ZM68.15 132a59.7 59.7 0 0 0 14.72 35.47l-22.66 22.66A91.64 91.64 0 0 1 36.09 132Zm20.38 41.13A59.7 59.7 0 0 0 124 187.85v32.06a91.64 91.64 0 0 1-58.13-24.12ZM132 187.85a59.7 59.7 0 0 0 35.47-14.72l22.66 22.66A91.64 91.64 0 0 1 132 219.91Zm41.13-20.38A59.7 59.7 0 0 0 187.85 132h32.06a91.64 91.64 0 0 1-24.12 58.13ZM187.85 124a59.7 59.7 0 0 0-14.72-35.47l22.66-22.66A91.64 91.64 0 0 1 219.91 124Z"></svg:path>`,
})
export class PhPokerChipThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPoliceCarThinIcon],svg[ph-police-car-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-13.68l-28.54-49.95a12 12 0 0 0-10.42-6H68.64a12 12 0 0 0-10.42 6L29.68 108H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M65.17 62a4 4 0 0 1 3.47-2h118.72a4 4 0 0 1 3.47 2l26.28 46H38.89ZM68 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-20h32Zm148 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-32H36v-56h184ZM60 144a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m112 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4M100 24a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhPoliceCarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPolygonThinIcon],svg[ph-polygon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.81 52.19a28 28 0 0 0-39.6 0a27.8 27.8 0 0 0-5.88 8.65l-34.56-9.42a28 28 0 0 0-47.57-23.23a28.05 28.05 0 0 0-3.48 35.37L57.91 98.49a28 28 0 0 0-37.72 1.71a28 28 0 0 0 39.6 39.6l.18-.19l75.32 55.24A28 28 0 1 0 173 183.2l29.56-83.75a28.5 28.5 0 0 0 5.44.55a28 28 0 0 0 19.8-47.79ZM105.86 33.85a20 20 0 1 1 0 28.29a20 20 0 0 1 0-28.29m-80 100.29a20 20 0 1 1 28.28 0a20 20 0 0 1-28.29 0Zm148.3 88a20 20 0 1 1 0-28.28a20 20 0 0 1-.01 28.29Zm-8.7-41.6a28 28 0 0 0-25.25 7.66l-.18.19l-75.32-55.23a28.13 28.13 0 0 0-1.44-28.73l38.81-34.93a28 28 0 0 0 43.6-10.36l34.56 9.43a28 28 0 0 0 8 23.22a27.6 27.6 0 0 0 6.8 5Zm56.7-94.41a20 20 0 1 1 0-28.29a20 20 0 0 1-.01 28.3Z"></svg:path>`,
})
export class PhPolygonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopcornThinIcon],svg[ph-popcorn-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.76 77.11a4 4 0 0 0-3.86-1l-3.49 1a40 40 0 0 0-53.71-30.47a40 40 0 0 0-75.4 0a40 40 0 0 0-53.71 30.51l-3.49-1a4 4 0 0 0-5 4.77l30.56 129.83A11.94 11.94 0 0 0 70.34 220h115.32a11.94 11.94 0 0 0 11.68-9.25l30.55-129.83a4 4 0 0 0-1.13-3.81M76 52a32.1 32.1 0 0 1 15 3.72a4 4 0 0 0 5.78-2.66a32 32 0 0 1 62.47 0a4 4 0 0 0 5.75 2.66a32 32 0 0 1 46.65 23.64l-43.43 12.42l-35.76-14.31a12 12 0 0 0-8.92 0L87.78 91.78L44.33 79.36A32 32 0 0 1 76 52m-5.66 160a4 4 0 0 1-3.9-3.08l-29-123.2l46.94 13.41L99.43 212Zm37.16 0L92.38 98.56l34.14-13.66a4 4 0 0 1 3 0l34.13 13.66L148.5 212Zm82.06-3.08a4 4 0 0 1-3.9 3.08h-29.09l15.05-112.87l46.92-13.41Z"></svg:path>`,
})
export class PhPopcornThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopsicleThinIcon],svg[ph-popsicle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 12a68.07 68.07 0 0 0-68 68v96a12 12 0 0 0 12 12h36v44a20 20 0 0 0 40 0v-44h36a12 12 0 0 0 12-12V80a68.07 68.07 0 0 0-68-68m12 220a12 12 0 0 1-24 0v-44h24Zm48-56a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V80a60 60 0 0 1 120 0ZM116 72v80a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m32 0v80a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhPopsicleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPottedPlantThinIcon],svg[ph-potted-plant-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122.83 138.83L145 116.7c9 4.89 18.06 7.35 26.81 7.35a45.57 45.57 0 0 0 23.87-6.74c22.42-13.58 34.41-45.45 32.07-85.26a4 4 0 0 0-3.75-3.76c-39.81-2.35-71.68 9.65-85.26 32.07c-9.21 15.2-9 33.09.61 50.68L120 130.34l-17.06-17.06c6.66-12.78 6.71-26.2 0-37.22C92.89 59.4 69.33 50.49 40 52.21A4 4 0 0 0 36.21 56c-1.73 29.36 7.19 52.92 23.85 63A34.3 34.3 0 0 0 78 124a42 42 0 0 0 19.34-5l17 17.06l-12 12H56a4 4 0 0 0 0 8h12.79L82.7 218.6a11.93 11.93 0 0 0 11.72 9.4h67.17a11.93 11.93 0 0 0 11.71-9.4l13.91-62.6H200a4 4 0 0 0 0-8h-86.34zm22.7-74.32c11.62-19.2 39.27-29.71 74.37-28.41c1.29 35.1-9.21 62.74-28.41 74.37c-13.08 7.92-28.77 7.32-44.29-1.68c-8.99-15.51-9.59-31.2-1.67-44.28m-50.48 46.54c-10.84 6.19-21.76 6.59-30.84 1.08C50.78 104 43.35 84.68 44 60c24.64-.69 44 6.74 52.1 20.17c5.54 9.12 5.14 20.04-1.05 30.88m84 45l-13.53 60.87a4 4 0 0 1-3.9 3.13h-67.2a4 4 0 0 1-3.91-3.13L77 156Z"></svg:path>`,
})
export class PhPottedPlantThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPowerThinIcon],svg[ph-power-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 128V48a4 4 0 0 1 8 0v80a4 4 0 0 1-8 0m54.18-75.35a4 4 0 1 0-4.36 6.7C198.08 75.17 212 100.2 212 128a84 84 0 0 1-168 0c0-27.8 13.92-52.83 38.18-68.65a4 4 0 0 0-4.36-6.7C51.24 70 36 97.44 36 128a92 92 0 0 0 184 0c0-30.56-15.24-58-41.82-75.35"></svg:path>`,
})
export class PhPowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrescriptionThinIcon],svg[ph-prescription-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m177.66 188l25.17-25.17a4 4 0 0 0-5.66-5.66L172 182.34L121.66 132H124a48 48 0 0 0 0-96H72a4 4 0 0 0-4 4v152a4 4 0 0 0 8 0v-60h34.34l56 56l-25.17 25.17a4 4 0 0 0 5.66 5.66L172 193.66l25.17 25.17a4 4 0 0 0 5.66-5.66ZM76 44h48a40 40 0 0 1 0 80H76Z"></svg:path>`,
})
export class PhPrescriptionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationChartThinIcon],svg[ph-presentation-chart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44h-84V24a4 4 0 0 0-8 0v20H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h47.68l-26.8 33.5a4 4 0 1 0 6.24 5l30.8-38.5h60.16l30.8 38.5a4 4 0 0 0 6.24-5l-26.8-33.5H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-120-56v24a4 4 0 0 1-8 0v-24a4 4 0 0 1 8 0m32-16v40a4 4 0 0 1-8 0v-40a4 4 0 0 1 8 0m32-16v56a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhPresentationChartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationThinIcon],svg[ph-presentation-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44h-84V24a4 4 0 0 0-8 0v20H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h47.68l-26.8 33.5a4 4 0 1 0 6.24 5l30.8-38.5h60.16l30.8 38.5a4 4 0 0 0 6.24-5l-26.8-33.5H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhPresentationThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrinterThinIcon],svg[ph-printer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.67 76H196V40a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v36H41.33C29.57 76 20 85 20 96v80a4 4 0 0 0 4 4h36v36a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4v-36h36a4 4 0 0 0 4-4V96c0-11-9.57-20-21.33-20M68 44h120v32H68Zm120 168H68v-56h120Zm40-40h-32v-20a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v20H28V96c0-6.62 6-12 13.33-12h173.34C222 84 228 89.38 228 96Zm-32-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhPrinterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetThinIcon],svg[ph-prohibit-inset-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.83 157.17a4 4 0 0 1-5.66 5.66l-64-64a4 4 0 0 1 5.66-5.66ZM228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhProhibitInsetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitThinIcon],svg[ph-prohibit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100a91.67 91.67 0 0 1-24.21 62.13L65.87 60.21A92 92 0 0 1 220 128m-184 0a91.67 91.67 0 0 1 24.21-62.13l129.92 129.92A92 92 0 0 1 36 128"></svg:path>`,
})
export class PhProhibitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenChartThinIcon],svg[ph-projector-screen-chart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 144v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0m36 4a4 4 0 0 0 4-4v-24a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4m32 0a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m52-72v104h12a4 4 0 0 1 0 8h-92v24.4a20 20 0 1 1-8 0V188H32a4 4 0 0 1 0-8h12V76h-4a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12Zm-84 144a12 12 0 1 0 12 12a12 12 0 0 0-12-12M40 68h176a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4m164 8H52v104h152Z"></svg:path>`,
})
export class PhProjectorScreenChartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenThinIcon],svg[ph-projector-screen-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12h4v104H32a4 4 0 0 0 0 8h92v24.4a20 20 0 1 0 8 0V188h92a4 4 0 0 0 0-8h-12V76Zm-76 156a12 12 0 1 1-12-12a12 12 0 0 1 12 12M36 64V48a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m168 116H52V76h152Z"></svg:path>`,
})
export class PhProjectorScreenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPulseThinIcon],svg[ph-pulse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128a4 4 0 0 1-4 4h-29.53l-38.89 77.79A4 4 0 0 1 160 212h-.2a4 4 0 0 1-3.54-2.58l-60.59-159l-36 79.28A4 4 0 0 1 56 132H24a4 4 0 0 1 0-8h29.42l38.94-85.65a4 4 0 0 1 7.38.23l60.76 159.48l35.92-71.85A4 4 0 0 1 200 124h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPulseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleSlashThinIcon],svg[ph-push-pin-simple-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M87.25 40a4 4 0 0 1 4-4H192a4 4 0 0 1 0 8h-11.23l19.58 111a4 4 0 0 1-3.24 4.63a3.3 3.3 0 0 1-.7.07a4 4 0 0 1-3.93-3.31L172.64 44H91.25a4 4 0 0 1-4-4m123.44 179a4 4 0 0 1-5.65-.27L169.87 180H132v60a4 4 0 0 1-8 0v-60H40a4 4 0 0 1 0-8h12.64L70.52 70.72L45 42.69a4 4 0 0 1 6-5.38l160 176a4 4 0 0 1-.31 5.69m-48.1-47L77.32 78.2L60.77 172Z"></svg:path>`,
})
export class PhPushPinSimpleSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleThinIcon],svg[ph-push-pin-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 172h-12.64L180.77 44H192a4 4 0 0 0 0-8H64a4 4 0 0 0 0 8h11.23L52.64 172H40a4 4 0 0 0 0 8h84v60a4 4 0 0 0 8 0v-60h84a4 4 0 0 0 0-8M83.36 44h89.28l22.59 128H60.77Z"></svg:path>`,
})
export class PhPushPinSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSlashThinIcon],svg[ph-push-pin-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L75.35 76c-9.93.88-22.26 4.54-34.87 14.71a12 12 0 0 0-1 17.84l51.13 51.13l-45.44 45.49a4 4 0 0 0 5.66 5.66l45.46-45.47l51.12 51.12a12 12 0 0 0 8.49 3.52h.85a12 12 0 0 0 8.73-4.74a81 81 0 0 0 13.19-25.55l26.37 29a4 4 0 1 0 5.92-5.38Zm108.08 173.11a4 4 0 0 1-6 .4L45.17 102.93a4 4 0 0 1 .33-6c14.08-11.36 27.62-13.5 37-13.12l89.69 98.65c-2.12 11.46-8.19 21.46-13.11 27.96m73.41-109.25L187.85 146a4 4 0 0 1-5.67-5.64l44.65-44.8a4 4 0 0 0 0-5.66l-60.68-60.73a4 4 0 0 0-5.66 0l-41.22 41.36a4 4 0 0 1-5.67-5.65l41.23-41.36a12 12 0 0 1 17 0l60.66 60.68a12 12 0 0 1 0 16.97"></svg:path>`,
})
export class PhPushPinSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinThinIcon],svg[ph-push-pin-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.49 84.2L171.8 23.51a12 12 0 0 0-17 0L99.45 79.07c-8.08-3-32.79-9.45-59 11.67a12 12 0 0 0-1 17.84l51.13 51.13l-45.41 45.46a4 4 0 0 0 5.66 5.66l45.46-45.47l51.12 51.12a12 12 0 0 0 8.49 3.52h.85a12 12 0 0 0 8.73-4.74c19.83-26.36 16.51-47.18 11.71-58.57l55.3-55.49a12 12 0 0 0 0-17m-5.66 11.31L169.56 153a4 4 0 0 0-.75 4.61c10.43 20.85-1.62 42-9.73 52.83a4 4 0 0 1-6 .4L45.17 102.93a4 4 0 0 1 .33-6c12.94-10.4 25.36-13.19 34.94-13.19a43.9 43.9 0 0 1 18.16 3.64a4 4 0 0 0 4.62-.75l57.27-57.46a4 4 0 0 1 5.66 0l60.68 60.69a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhPushPinThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPuzzlePieceThinIcon],svg[ph-puzzle-piece-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.14 161.93a4 4 0 0 0-3.86-.24a24 24 0 0 1-34.23-23.25a24 24 0 0 1 34.23-20.13a4 4 0 0 0 5.72-3.61V72a12 12 0 0 0-12-12h-41a32 32 0 1 0-62.91-10.33A32.6 32.6 0 0 0 105 60H64a12 12 0 0 0-12 12v37a32 32 0 1 0-10.33 62.91A32.3 32.3 0 0 0 52 171v37a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-42.69a4 4 0 0 0-1.86-3.38M212 208a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4v-42.69a4 4 0 0 0-1.86-3.38a4 4 0 0 0-3.85-.24a24 24 0 0 1-34.24-20.13a24 24 0 0 1 34.24-23.25A4 4 0 0 0 60 114.7V72a4 4 0 0 1 4-4h46.69a4 4 0 0 0 3.62-5.71a24 24 0 0 1 20.13-34.24a24 24 0 0 1 23.25 34.24a4 4 0 0 0 3.62 5.71H208a4 4 0 0 1 4 4v37a32.6 32.6 0 0 0-10.33-.94A32 32 0 1 0 212 171Z"></svg:path>`,
})
export class PhPuzzlePieceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQrCodeThinIcon],svg[ph-qr-code-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 44H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-4 36H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-156h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-64 72v-32a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m72-16a4 4 0 0 1-4 4h-28v44a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h28v-60a4 4 0 0 1 8 0v12h28a4 4 0 0 1 4 4m0 32v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhQrCodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionMarkThinIcon],svg[ph-question-mark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 96c0 27.51-24.77 50.09-56 51.89V160a4 4 0 0 1-8 0v-16a4 4 0 0 1 4-4c28.67 0 52-19.74 52-44s-23.33-44-52-44s-52 19.74-52 44a4 4 0 0 1-8 0c0-28.67 26.92-52 60-52s60 23.33 60 52m-60 100a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhQuestionMarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionThinIcon],svg[ph-question-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-8-104c-19.85 0-36 14.36-36 32v4a4 4 0 0 0 8 0v-4c0-13.23 12.56-24 28-24s28 10.77 28 24s-12.56 24-28 24a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-4.2c18-1.77 32-15.36 32-31.8c0-17.64-16.15-32-36-32m100 52A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhQuestionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQueueThinIcon],svg[ph-queue-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m100 60H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m108-28a4 4 0 0 1-1.88 3.39l-64 40a4 4 0 0 1-2.12.61a4.06 4.06 0 0 1-1.94-.5A4 4 0 0 1 172 200v-80a4 4 0 0 1 6.12-3.39l64 40A4 4 0 0 1 244 160m-11.55 0L180 127.22v65.56Z"></svg:path>`,
})
export class PhQueueThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuotesThinIcon],svg[ph-quotes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 60H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Zm112-80h-60a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80h-64a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhQuotesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRabbitThinIcon],svg[ph-rabbit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 164a8 8 0 1 1-8-8a8 8 0 0 1 8 8m48-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56 32a48 48 0 0 1-84 31.75a48 48 0 1 1-67.51-68a67.6 67.6 0 0 1 7-22.78C48.85 92.61 36.63 41.7 49.06 21.15a17.92 17.92 0 0 1 16-9.15c12.17 0 23.19 11.41 32.76 33.92c6.71 15.78 11.55 34.08 14.63 47.87a68.44 68.44 0 0 1 31.1 0c3.08-13.8 7.92-32.09 14.63-47.87C167.75 23.41 178.77 12 190.94 12a17.92 17.92 0 0 1 16 9.15c12.43 20.55.21 71.46-18.4 107.86a67.6 67.6 0 0 1 7 22.78A47.8 47.8 0 0 1 212 188m-60.77-91.9a67.9 67.9 0 0 1 22.63 13.69a69 69 0 0 1 9.78 11.11c17.88-37.07 25.59-80.5 16.45-95.61a9.91 9.91 0 0 0-9.15-5.29c-14.4 0-29.16 28.37-39.71 76.1m-78.87 24.8a69 69 0 0 1 9.78-11.11a67.9 67.9 0 0 1 22.63-13.69C94.22 48.37 79.46 20 65.06 20a9.91 9.91 0 0 0-9.15 5.29c-9.14 15.11-1.43 58.54 16.45 95.61M204 188a39.86 39.86 0 0 0-14.82-31.08a4 4 0 0 1-1.46-2.72a60 60 0 0 0-119.44 0a4 4 0 0 1-1.46 2.72a40 40 0 1 0 55.64 57l-13-10.82a4 4 0 1 1 5.12-6.16L128 208.1l13.44-11.18a4 4 0 0 1 5.12 6.16l-13 10.82A40 40 0 0 0 204 188"></svg:path>`,
})
export class PhRabbitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRacquetThinIcon],svg[ph-racquet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.1 28.9C200.74 2.53 152.79 7.58 120.22 40.15c-31.39 31.39-37.2 77.07-14 103.94L71.33 179l-3.52-3.52a12 12 0 0 0-17 0l-27.29 27.34a12 12 0 0 0 0 17l12.69 12.69a12 12 0 0 0 17 0l27.29-27.34a12 12 0 0 0 0-17l-3.5-3.49l34.93-34.94c11 9.53 25.18 14.19 40.24 14.19c21.67 0 45.17-9.62 63.7-28.15c32.55-32.57 37.6-80.52 11.23-106.88M74.84 199.51l-27.32 27.32a4 4 0 0 1-5.66 0l-12.69-12.69a4 4 0 0 1 0-5.66l27.33-27.32a4 4 0 0 1 5.65 0l6.35 6.34l6.34 6.34a4 4 0 0 1 0 5.66ZM234.83 60h-38.78V21.17A48.55 48.55 0 0 1 234.83 60M183.9 20c1.39 0 2.77.06 4.14.15V60H148V29.37A77.3 77.3 0 0 1 183.9 20m4.1 48v40h-40V68Zm-62.12-22.2A95.3 95.3 0 0 1 140 34.16V60h-25.8a94.4 94.4 0 0 1 11.68-14.2M109.44 68H140v40h-39.83c-.84-13 2.32-26.93 9.27-40m-8.19 48H140v38.78A48.48 48.48 0 0 1 101.25 116M148 155.83V116h40v30.59c-13.07 6.92-27 10.09-40 9.24m62.17-25.71a95 95 0 0 1-14.15 11.65V116h25.8a94 94 0 0 1-11.62 14.12ZM226.63 108h-30.58V68h39.85c.85 12.89-2.32 26.86-9.27 40"></svg:path>`,
})
export class PhRacquetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadicalThinIcon],svg[ph-radical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80v24a4 4 0 0 1-8 0V84H130.77l-47 125.4a4 4 0 0 1-7.49 0l-48-128a4 4 0 1 1 7.49-2.81L80 196.61l44.26-118A4 4 0 0 1 128 76h112a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhRadicalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioButtonThinIcon],svg[ph-radio-button-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-144a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhRadioButtonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioThinIcon],svg[ph-radio-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 168a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m132-52v112a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V72a4 4 0 0 1 2.85-3.81l160-48a4 4 0 0 1 2.3 7.66L59.25 68H216a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H36v116a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Zm-24 56a36 36 0 1 1-36-36a36 36 0 0 1 36 36m-8 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-92-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhRadioThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioactiveThinIcon],svg[ph-radioactive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 132H40a12 12 0 0 1-8.81-3.91a12.2 12.2 0 0 1-3.14-9.31A99.82 99.82 0 0 1 70 46.2A12 12 0 0 1 87.29 50l25.94 45a4 4 0 0 1-6.92 4L80.36 54a4 4 0 0 0-5.78-1.27A91.83 91.83 0 0 0 36 119.5a4.2 4.2 0 0 0 1.08 3.2A3.9 3.9 0 0 0 40 124h52a4 4 0 0 1 0 8m136-13.22a99.82 99.82 0 0 0-42-72.58a12 12 0 0 0-17.28 3.8l-25.95 45a4 4 0 0 0 6.92 4l25.95-45a4 4 0 0 1 5.78-1.27A91.83 91.83 0 0 1 220 119.5a4.2 4.2 0 0 1-1.08 3.2A3.9 3.9 0 0 1 216 124h-52a4 4 0 0 0 0 8h52a12 12 0 0 0 8.81-3.91a12.2 12.2 0 0 0 3.19-9.31m-78.48 38.4a4 4 0 0 0-6.93 4l25.82 44.73a4 4 0 0 1 .35 3.22a3.9 3.9 0 0 1-2.12 2.41a92.24 92.24 0 0 1-77.18 0a3.9 3.9 0 0 1-2.12-2.41a4 4 0 0 1 .35-3.22l25.82-44.73a4 4 0 0 0-6.93-4l-25.87 44.73a12 12 0 0 0 5.34 16.89a100.24 100.24 0 0 0 83.9 0a12 12 0 0 0 5.34-16.89ZM128 136a8 8 0 1 0-8-8a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhRadioactiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowCloudThinIcon],svg[ph-rainbow-cloud-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 116a44.16 44.16 0 0 0-42 30.88a27.2 27.2 0 0 0-6-.66c-15.44 0-28 13-28 28.89S136.56 204 152 204h48a44 44 0 0 0 0-88m0 80h-48c-11 0-20-9.37-20-20.89s9-20.89 20-20.89a19.1 19.1 0 0 1 7.29 1.43a4 4 0 0 0 5.44-2.9A36 36 0 1 1 200 196M20 160v16a4 4 0 0 1-8 0v-16a100 100 0 0 1 169.71-71.69a4 4 0 0 1-5.57 5.69A92 92 0 0 0 20 160m92-60a60.07 60.07 0 0 0-60 60v16a4 4 0 0 1-8 0v-16a68 68 0 0 1 108.24-54.82a4 4 0 1 1-4.74 6.44A59.57 59.57 0 0 0 112 100m11.31 29.79a4 4 0 0 1-4.81 3A28 28 0 0 0 84 160v16a4 4 0 0 1-8 0v-16a36 36 0 0 1 36-36a36.6 36.6 0 0 1 8.35 1a4 4 0 0 1 2.96 4.79"></svg:path>`,
})
export class PhRainbowCloudThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowThinIcon],svg[ph-rainbow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 168v16a4 4 0 0 1-8 0v-16a44 44 0 0 0-88 0v16a4 4 0 0 1-8 0v-16a52 52 0 0 1 104 0m-52-84a84.09 84.09 0 0 0-84 84v16a4 4 0 0 0 8 0v-16a76 76 0 0 1 152 0v16a4 4 0 0 0 8 0v-16a84.09 84.09 0 0 0-84-84m0-32A116.13 116.13 0 0 0 12 168v16a4 4 0 0 0 8 0v-16a108 108 0 0 1 216 0v16a4 4 0 0 0 8 0v-16A116.13 116.13 0 0 0 128 52"></svg:path>`,
})
export class PhRainbowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRankingThinIcon],svg[ph-ranking-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.21 101.26a4 4 0 0 1 2.53-5.05l12-4A4 4 0 0 1 136 96v40a4 4 0 0 1-8 0v-34.45l-6.74 2.24a4 4 0 0 1-5.05-2.53M244 208a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h12V104a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v76h44a12 12 0 0 1 12 12v60h12a4 4 0 0 1 4 4m-72-68v64h48v-60a4 4 0 0 0-4-4Zm-80 64h72V56a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4Zm-56 0h48V100H40a4 4 0 0 0-4 4Z"></svg:path>`,
})
export class PhRankingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReadCvLogoThinIcon],svg[ph-read-cv-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.09 43.19l-130.25-23a12 12 0 0 0-13.91 9.73l-29.75 169a12 12 0 0 0 9.73 13.9l130.26 23a11.6 11.6 0 0 0 2.11.19a12 12 0 0 0 11.79-9.92l29.75-169a12 12 0 0 0-9.73-13.9m1.85 12.51l-29.75 169a4 4 0 0 1-4.63 3.25l-130.26-23a4 4 0 0 1-3.24-4.63l29.75-169a4 4 0 0 1 4.63-3.25l130.26 23a4 4 0 0 1 3.24 4.63m-27.8 19.47a4 4 0 0 1-3.93 3.3a4 4 0 0 1-.7-.06l-83-14.66a4 4 0 1 1 1.39-7.88l83 14.66a4 4 0 0 1 3.24 4.64m-5.54 31.51a4 4 0 0 1-3.94 3.31a3.4 3.4 0 0 1-.7-.07L91 95.27a4 4 0 1 1 1.39-7.88l83 14.66a4 4 0 0 1 3.21 4.63m-47 24.19a4 4 0 0 1-3.94 3.3a4 4 0 0 1-.7-.06l-41.49-7.33a4 4 0 1 1 1.39-7.87l41.49 7.32a4 4 0 0 1 3.21 4.64Z"></svg:path>`,
})
export class PhReadCvLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptThinIcon],svg[ph-receipt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 104a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m-4 28H80a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m52-76v152a4 4 0 0 1-4 4a4.05 4.05 0 0 1-1.79-.42L192 196.47l-30.21 15.11a4 4 0 0 1-3.58 0L128 196.47l-30.21 15.11a4 4 0 0 1-3.58 0L64 196.47l-30.21 15.11A4 4 0 0 1 28 208V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v145.53l26.21-13.11a4 4 0 0 1 3.58 0L96 203.53l30.21-15.11a4 4 0 0 1 3.58 0L160 203.53l30.21-15.11a4 4 0 0 1 3.58 0L220 201.53Z"></svg:path>`,
})
export class PhReceiptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptXThinIcon],svg[ph-receipt-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v152a4 4 0 0 0 5.79 3.58L64 196.47l30.21 15.11a4 4 0 0 0 3.58 0L128 196.47l30.21 15.11a4 4 0 0 0 3.58 0L192 196.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 4-4V56a12 12 0 0 0-12-12m4 157.53l-26.21-13.11a4 4 0 0 0-3.58 0L160 203.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 203.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 201.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-65.17-102.7L133.66 120l21.17 21.17a4 4 0 0 1-5.66 5.66L128 125.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 120l-21.17-21.17a4 4 0 0 1 5.66-5.66L128 114.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhReceiptXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecordThinIcon],svg[ph-record-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-160a68 68 0 1 0 68 68a68.07 68.07 0 0 0-68-68m0 128a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60"></svg:path>`,
})
export class PhRecordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleDashedThinIcon],svg[ph-rectangle-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 48a4 4 0 0 1-4 4H40a4 4 0 0 0-4 4v16a4 4 0 0 1-8 0V56a12 12 0 0 1 12-12h32a4 4 0 0 1 4 4M32 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m40 56H40a4 4 0 0 1-4-4v-16a4 4 0 0 0-8 0v16a12 12 0 0 0 12 12h32a4 4 0 0 0 0-8m72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m80-24a4 4 0 0 0-4 4v16a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12v-16a4 4 0 0 0-4-4m0-72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-8-64h-32a4 4 0 0 0 0 8h32a4 4 0 0 1 4 4v16a4 4 0 0 0 8 0V56a12 12 0 0 0-12-12m-72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhRectangleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleThinIcon],svg[ph-rectangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhRectangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecycleThinIcon],svg[ph-recycle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 208a4 4 0 0 1-4 4H40a20 20 0 0 1-17.31-30l39.14-67.62l-23.43 6.27a4 4 0 1 1-2.07-7.72l32.77-8.77A4 4 0 0 1 74 107l8.79 32.77a4 4 0 0 1-2.82 4.9a3.8 3.8 0 0 1-1 .14a4 4 0 0 1-3.86-3l-6.3-23.47L29.65 186A12 12 0 0 0 40 204h48a4 4 0 0 1 4 4m141.28-26l-23.14-40a4 4 0 0 0-6.93 4l23.14 40A12 12 0 0 1 216 204h-78.34l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 0 0 5.66-5.66L137.66 212H216a20 20 0 0 0 17.31-30Zm-94.9-148l39.14 67.62l-23.43-6.28a4 4 0 0 0-2.07 7.73l32.78 8.78a3.7 3.7 0 0 0 1 .14a4 4 0 0 0 3.86-3l8.79-32.79a4 4 0 1 0-7.72-2.07l-6.3 23.47L145.31 30a20 20 0 0 0-34.62 0L87.53 70a4 4 0 0 0 6.93 4l23.15-40a12 12 0 0 1 20.77 0"></svg:path>`,
})
export class PhRecycleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRedditLogoThinIcon],svg[ph-reddit-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 104a28 28 0 0 0-48.3-19.28c-17.9-10.11-40-15.94-63-16.65l6.59-39.52L164 32.36a20 20 0 1 0 1.46-7.87l-28.87-4.44a4 4 0 0 0-4.56 3.29l-7.43 44.71c-23.48.52-46.06 6.36-64.3 16.67A28 28 0 1 0 23 126.21A55.1 55.1 0 0 0 20 144c0 20.58 11.43 39.83 32.18 54.2C72.49 212.26 99.42 220 128 220s55.51-7.74 75.82-21.8C224.57 183.83 236 164.58 236 144a55.1 55.1 0 0 0-3-17.79A28.14 28.14 0 0 0 244 104m-60-84a12 12 0 1 1-12 12a12 12 0 0 1 12-12m40.53 106.25A47.7 47.7 0 0 1 228 144c0 37.5-44.86 68-100 68S28 181.5 28 144a47.7 47.7 0 0 1 3.45-17.72a4 4 0 0 0-1.62-5a20 20 0 1 1 26.35-29a4 4 0 0 0 5.19 1.13l.25-.16C80 82.11 103.51 76 128 76c24.48 0 48 6.11 66.37 17.21l.25.16a4 4 0 0 0 5.19-1.13a20 20 0 1 1 26.35 29a4 4 0 0 0-1.63 5.01m-61 47.88a4 4 0 0 1-1.65 5.4a72.22 72.22 0 0 1-67.76 0a4 4 0 0 1 3.76-7.06a64.23 64.23 0 0 0 60.24 0a4 4 0 0 1 5.41 1.66M88 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m92-12a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhRedditLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatOnceThinIcon],svg[ph-repeat-once-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 128a68.07 68.07 0 0 1 68-68h118.34l-17.17-17.17a4 4 0 0 1 5.66-5.66l24 24a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L214.34 68H96a60.07 60.07 0 0 0-60 60a4 4 0 0 1-8 0m196-4a4 4 0 0 0-4 4a60.07 60.07 0 0 1-60 60H41.66l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L41.66 196H160a68.07 68.07 0 0 0 68-68a4 4 0 0 0-4-4m-88 32a4 4 0 0 0 4-4v-48a4 4 0 0 0-5.79-3.58l-16 8a4 4 0 0 0 3.58 7.16l10.21-5.1V152a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhRepeatOnceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatThinIcon],svg[ph-repeat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 128a68.07 68.07 0 0 1 68-68h118.34l-17.17-17.17a4 4 0 0 1 5.66-5.66l24 24a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L214.34 68H96a60.07 60.07 0 0 0-60 60a4 4 0 0 1-8 0m196-4a4 4 0 0 0-4 4a60.07 60.07 0 0 1-60 60H41.66l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L41.66 196H160a68.07 68.07 0 0 0 68-68a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhRepeatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoThinIcon],svg[ph-replit-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-68V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h68v56H72a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-52h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m-76 124a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h68Zm0-124H72a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm80 60a4 4 0 0 1-4 4h-68v-56h68a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhReplitLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phResizeThinIcon],svg[ph-resize-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 116H48a4 4 0 0 0-4 4v88a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-88a4 4 0 0 0-4-4m-4 88H52v-80h80Zm80-20v16a12 12 0 0 1-12 12h-24a4 4 0 0 1 0-8h24a4 4 0 0 0 4-4v-16a4 4 0 0 1 8 0m0-72v32a4 4 0 0 1-8 0v-32a4 4 0 0 1 8 0m0-56v16a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4h-16a4 4 0 0 1 0-8h16a12 12 0 0 1 12 12m-64-8a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M44 80V56a12 12 0 0 1 12-12h16a4 4 0 0 1 0 8H56a4 4 0 0 0-4 4v24a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhResizeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleThinIcon],svg[ph-rewind-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M117.79 88.42a4 4 0 0 0-4.19.38l-48 36a4 4 0 0 0 0 6.4l48 36a4 4 0 0 0 2.4.8a4.05 4.05 0 0 0 1.79-.42A4 4 0 0 0 120 164V92a4 4 0 0 0-2.21-3.58M112 156l-37.33-28L112 100Zm61.79-67.58a4 4 0 0 0-4.19.38l-48 36a4 4 0 0 0 0 6.4l48 36a4 4 0 0 0 2.4.8a4.05 4.05 0 0 0 1.79-.42A4 4 0 0 0 176 164V92a4 4 0 0 0-2.21-3.58M168 156l-37.33-28L168 100Z"></svg:path>`,
})
export class PhRewindCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindThinIcon],svg[ph-rewind-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.85 61.48a12 12 0 0 0-12.18.39L124 116.43V71.84a11.66 11.66 0 0 0-6.15-10.36a12 12 0 0 0-12.18.39L17.48 118a11.81 11.81 0 0 0 0 19.94l88.19 56.16a12 12 0 0 0 12.18.39a11.66 11.66 0 0 0 6.15-10.33v-44.59l85.67 54.56a12 12 0 0 0 12.18.39a11.66 11.66 0 0 0 6.15-10.36V71.84a11.66 11.66 0 0 0-6.15-10.36M116 184.16a3.76 3.76 0 0 1-2 3.35a3.91 3.91 0 0 1-4-.13l-88.22-56.16a3.8 3.8 0 0 1 0-6.44L110 68.62a3.94 3.94 0 0 1 2.13-.63a4 4 0 0 1 1.91.5a3.76 3.76 0 0 1 2 3.35Zm104 0a3.76 3.76 0 0 1-2 3.35a3.91 3.91 0 0 1-4-.13l-88.18-56.16a3.8 3.8 0 0 1 0-6.44L214 68.62a3.94 3.94 0 0 1 2.13-.63a4 4 0 0 1 1.91.5a3.76 3.76 0 0 1 2 3.35Z"></svg:path>`,
})
export class PhRewindThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRoadHorizonThinIcon],svg[ph-road-horizon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.49 190a4 4 0 0 1-1.53 5.45a4.07 4.07 0 0 1-2 .51a4 4 0 0 1-3.49-2L157.66 68H132v12a4 4 0 0 1-8 0V68H98.34L27.49 194a4 4 0 0 1-3.49 2a4.07 4.07 0 0 1-2-.51a4 4 0 0 1-1.49-5.49L89.16 68H24a4 4 0 0 1 0-8h208a4 4 0 0 1 0 8h-65.16ZM128 116a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0v-16a4 4 0 0 0-4-4m0 56a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0v-16a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhRoadHorizonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRobotThinIcon],svg[ph-robot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 52h-68V16a4 4 0 0 0-8 0v36H56a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h144a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m20 140a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20ZM76 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m0 32H92a24 24 0 0 0 0 48h72a24 24 0 0 0 0-48m-20 8v32h-32v-32Zm-68 16a16 16 0 0 1 16-16h12v32H92a16 16 0 0 1-16-16m88 16h-12v-32h12a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhRobotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketLaunchThinIcon],svg[ph-rocket-launch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.86 47.36a12 12 0 0 0-11.22-11.22c-12-.71-42.82.38-68.35 25.91L134.35 68h-60a11.9 11.9 0 0 0-8.48 3.52l-34.35 34.33a12 12 0 0 0 6.81 20.37l39.79 5.55l46.11 46.11l5.55 39.81a12 12 0 0 0 20.37 6.79l34.34-34.35a11.9 11.9 0 0 0 3.52-8.48v-60l5.94-5.94c25.53-25.53 26.62-56.3 25.91-68.35M36.21 115.6a3.94 3.94 0 0 1 1-4.09l34.32-34.34A4 4 0 0 1 74.35 76h52l-47.77 47.76l-39.14-5.46a3.94 3.94 0 0 1-3.23-2.7M180 181.65a4 4 0 0 1-1.17 2.83l-34.35 34.34a4 4 0 0 1-6.79-2.25l-5.46-39.15L180 129.65Zm-52-11.31L85.66 128l60.28-60.29c23.24-23.24 51.25-24.23 62.22-23.58a3.93 3.93 0 0 1 3.71 3.71c.65 11-.35 39-23.58 62.22Zm-29.79 19.14C94 198.66 80 220 40 220a4 4 0 0 1-4-4c0-40 21.34-54 30.52-58.21a4 4 0 0 1 3.32 7.28c-7.46 3.41-24.43 14.66-25.76 46.85c32.19-1.33 43.44-18.3 46.85-25.76a4 4 0 1 1 7.28 3.32"></svg:path>`,
})
export class PhRocketLaunchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketThinIcon],svg[ph-rocket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 224a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-20-116a8 8 0 1 0-8-8a8 8 0 0 0 8 8m91.72 47l-12.37 55.6a11.9 11.9 0 0 1-7.72 8.71a12.2 12.2 0 0 1-4 .69a11.94 11.94 0 0 1-7.43-2.6L159.85 196h-63.7l-28.34 21.4a11.94 11.94 0 0 1-7.43 2.6a12.2 12.2 0 0 1-4-.69a11.9 11.9 0 0 1-7.72-8.71L36.28 155a12 12 0 0 1 2.5-10.28l29.35-35.23c3.3-53.33 41.83-86.68 52.52-94.94a12 12 0 0 1 14.7 0c10.69 8.26 49.22 41.61 52.52 94.94l29.35 35.23a12 12 0 0 1 2.5 10.28M97.11 188h61.78C214.07 92.49 145 32.05 130.46 20.84a4 4 0 0 0-4.92 0C111 32.05 41.93 92.49 97.11 188m-7.52 2.93C75.12 165.56 68.93 142.52 68 122.06L44.92 149.8a4 4 0 0 0-.83 3.43l12.36 55.63a4 4 0 0 0 6.41 2.26l.09-.07Zm121.49-41.13L188 122.06c-.89 20.46-7.08 43.5-21.55 68.87l26.64 20.12l.09.07a4 4 0 0 0 6.41-2.26l12.36-55.63a4 4 0 0 0-.87-3.43"></svg:path>`,
})
export class PhRocketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusBottomThinIcon],svg[ph-rows-plus-bottom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 116H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-108H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-56 136a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhRowsPlusBottomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusTopThinIcon],svg[ph-rows-plus-top-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 164H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-108H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM100 40a4 4 0 0 1 4-4h20V16a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0V44h-20a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhRowsPlusTopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsThinIcon],svg[ph-rows-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-140H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhRowsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleThinIcon],svg[ph-rss-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 192a4 4 0 0 1-8 0c0-81.61-66.39-148-148-148a4 4 0 0 1 0-8c86 0 156 70 156 156M64 108a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84m4 72a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhRssSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssThinIcon],svg[ph-rss-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104.08 151.92A67.52 67.52 0 0 1 124 200a4 4 0 0 1-8 0a60 60 0 0 0-60-60a4 4 0 0 1 0-8a67.52 67.52 0 0 1 48.08 19.92M56 84a4 4 0 0 0 0 8a108 108 0 0 1 108 108a4 4 0 0 0 8 0A116 116 0 0 0 56 84m116 0A162.92 162.92 0 0 0 56 36a4 4 0 0 0 0 8a155 155 0 0 1 110.31 45.69A155 155 0 0 1 212 200a4 4 0 0 0 8 0a162.92 162.92 0 0 0-48-116M60 188a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhRssThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugThinIcon],svg[ph-rug-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20a4 4 0 0 0-4 4v20h-40V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H60V24a4 4 0 0 0-8 0v208a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0V24a4 4 0 0 0-4-4M60 52h136v152H60Zm68 120a4 4 0 0 0 3.43-1.94l24-40a4 4 0 0 0 0-4.12l-24-40a4 4 0 0 0-6.86 0l-24 40a4 4 0 0 0 0 4.12l24 40A4 4 0 0 0 128 172m0-76.23L147.33 128L128 160.23L108.67 128Z"></svg:path>`,
})
export class PhRugThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerThinIcon],svg[ph-ruler-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.49 76.2L179.8 23.51a12 12 0 0 0-17 0L23.51 162.83a12 12 0 0 0 0 17l52.69 52.66a12 12 0 0 0 17 0L232.49 93.17a12 12 0 0 0 0-16.97m-5.66 11.31L87.51 226.83a4 4 0 0 1-5.65 0l-52.69-52.69a4 4 0 0 1 0-5.65L64 133.66l29.17 29.17a4 4 0 1 0 5.66-5.66L69.65 128L96 101.66l29.17 29.17a4 4 0 0 0 5.66-5.66L101.65 96L128 69.66l29.17 29.17a4 4 0 1 0 5.66-5.66L133.66 64l34.83-34.83a4 4 0 0 1 5.65 0l52.69 52.69a4 4 0 0 1 0 5.65"></svg:path>`,
})
export class PhRulerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatThinIcon],svg[ph-sailboat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.61 174.27A4 4 0 0 0 240 172H140v-32h76a4 4 0 0 0 3-6.69l-79-86.86V8a4 4 0 0 0-7.1-2.52l-104 128A4 4 0 0 0 32 140h100v32H16a4 4 0 0 0-3.12 6.5l29.59 37a12 12 0 0 0 9.37 4.5h152.32a12 12 0 0 0 9.37-4.5l29.59-37a4 4 0 0 0 .49-4.23M207 132h-67V58.35Zm-166.6 0L132 19.27V132Zm166.88 78.5a4 4 0 0 1-3.12 1.5H51.84a4 4 0 0 1-3.12-1.5L24.32 180h207.36Z"></svg:path>`,
})
export class PhSailboatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesThinIcon],svg[ph-scales-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.71 134.51l-32-80a4 4 0 0 0-4.57-2.41L132 67V40a4 4 0 0 0-8 0v28.79L55.13 84.1a4 4 0 0 0-2.84 2.41l-32 80A4 4 0 0 0 20 168c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49L61.46 90.88L124 77v135h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8h-20V75.21l61.47-13.66l-29.18 73A4 4 0 0 0 164 136c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49M56 188c-7.15 0-27.37-3.56-28-19.27l28-70l28 70C83.37 184.44 63.15 188 56 188m144-32c-7.15 0-27.37-3.56-28-19.27l28-70l28 70c-.63 15.71-20.85 19.27-28 19.27"></svg:path>`,
})
export class PhScalesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyThinIcon],svg[ph-scan-smiley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v36a4 4 0 0 1-8 0V44h-32a4 4 0 0 1 0-8h36a4 4 0 0 1 4 4m-4 136a4 4 0 0 0-4 4v32h-32a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M76 212H44v-32a4 4 0 0 0-8 0v36a4 4 0 0 0 4 4h36a4 4 0 0 0 0-8M40 80a4 4 0 0 0 4-4V44h32a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m88 116a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68m60-68a60 60 0 1 0-60 60a60.07 60.07 0 0 0 60-60m-76-12a8 8 0 1 0-8 8a8 8 0 0 0 8-8m40-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-2.65 41c-4.52 4-13.7 7-21.35 7s-16.83-3-21.35-7a4 4 0 0 0-5.3 6c6 5.3 17 9 26.65 9s20.64-3.7 26.65-9a4 4 0 1 0-5.3-6"></svg:path>`,
})
export class PhScanSmileyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanThinIcon],svg[ph-scan-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v40a4 4 0 0 1-8 0V44h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M80 212H44v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m136-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M40 84a4 4 0 0 0 4-4V44h36a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m40-8h96a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4m4 96h88V84H84Z"></svg:path>`,
})
export class PhScanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsThinIcon],svg[ph-scissors-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161 110.87a4 4 0 0 1 1.05-5.56L229.74 59a4 4 0 0 1 4.52 6.61l-67.67 46.3a4 4 0 0 1-5.56-1ZM235.3 196a4 4 0 0 1-5.56 1L136 132.85l-47.53 32.53a32 32 0 1 1-5.84-8c.45.45.89.92 1.31 1.4l45-30.78l-45-30.78c-.42.48-.86 1-1.31 1.4a31.86 31.86 0 1 1 5.84-8l49.69 34l96.09 65.76a4 4 0 0 1 1.05 5.62M77 93a24.4 24.4 0 0 0 2.82-3.38A24 24 0 1 0 77 93m7 87a23.75 23.75 0 0 0-4.15-13.49v-.06A24.5 24.5 0 0 0 77 163a24 24 0 1 0 0 34a23.85 23.85 0 0 0 7-17"></svg:path>`,
})
export class PhScissorsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterThinIcon],svg[ph-scooter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 140a31.3 31.3 0 0 0-6.24.62l-34-101.88A4 4 0 0 0 168 36h-32a4 4 0 0 0 0 8h29.12l19 57.14l-58 70.86H76a32 32 0 1 0-1 8h53a4 4 0 0 0 3.09-1.46l56.06-68.43l11 33A32 32 0 1 0 212 140M44 196a24 24 0 1 1 24-24a24 24 0 0 1-24 24m168 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhScooterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastThinIcon],svg[ph-screencast-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 56v144a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 1-8 0V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12M32 188a4 4 0 0 0 0 8a12 12 0 0 1 12 12a4 4 0 0 0 8 0a20 20 0 0 0-20-20m0-32a4 4 0 0 0 0 8a44.05 44.05 0 0 1 44 44a4 4 0 0 0 8 0a52.06 52.06 0 0 0-52-52m0-32a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84"></svg:path>`,
})
export class PhScreencastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverThinIcon],svg[ph-screwdriver-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 53.15a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66-5.66l56-56a4 4 0 0 1 5.66 0M244 58.41a46.13 46.13 0 0 1-13.6 32.83l-53.23 53.24a11.93 11.93 0 0 1-8.48 3.51H152a4 4 0 0 0-4 4v16.83a12.08 12.08 0 0 1-2.44 7.25c-.11.14-.23.28-.35.41l-8 8a12 12 0 0 1-17 0L98.7 163l-79.87 79.83a4 4 0 0 1-5.66-5.66l79.88-79.88l-21.54-21.54a12 12 0 0 1 0-17l8-8a3.6 3.6 0 0 1 .42-.36a12 12 0 0 1 7.24-2.39H104a4 4 0 0 0 4-4V87.3a12 12 0 0 1 3.51-8.49l53.24-53.23A46.43 46.43 0 0 1 244 58.41m-8 0a38.43 38.43 0 0 0-65.6-27.18l-53.23 53.24A4 4 0 0 0 116 87.3V104a12 12 0 0 1-12 12H87.17a4 4 0 0 0-2.23.68l-7.77 7.77a4 4 0 0 0 0 5.66l48.72 48.72a4 4 0 0 0 5.66 0l7.77-7.77a4 4 0 0 0 .68-2.23V152a12 12 0 0 1 12-12h16.69a4 4 0 0 0 2.82-1.17l53.24-53.24A38.2 38.2 0 0 0 236 58.41"></svg:path>`,
})
export class PhScrewdriverThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopThinIcon],svg[ph-scribble-loop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251 157.32c-1.32-1.46-24.47-26.63-61.79-40.43c-1.26-18.56-7.78-35.45-18.66-48.13C156.62 52.56 136.38 44 112 44c-49.49 0-81.9 44.58-83.26 46.48a4 4 0 0 0 6.51 4.65C35.56 94.7 66.68 52 112 52c22 0 40.11 7.6 52.45 22c9.11 10.61 14.81 24.62 16.46 40.13A137.8 137.8 0 0 0 140.6 108c-25.1 0-46.09 6.48-60.69 18.75C67.26 137.39 60 152.15 60 167.25a43.64 43.64 0 0 0 12.69 31.22C81.59 207.32 94 212 108.6 212c51.63 0 79.87-44.08 80.78-86.32c34.07 13.58 55.36 36.67 55.65 37a4 4 0 1 0 5.94-5.36Zm-88.4 21.47c-9.37 11.5-26.34 25.21-54 25.21c-27.89 0-40.6-19-40.6-36.75C68 142.57 90.72 116 140.6 116a129.2 129.2 0 0 1 40.8 6.77v.81c0 20.42-6.86 40.52-18.83 55.21Z"></svg:path>`,
})
export class PhScribbleLoopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleThinIcon],svg[ph-scribble-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.84 186.83a18.61 18.61 0 0 0 0 26.34a4 4 0 0 1-5.66 5.66a26.63 26.63 0 0 1 0-37.66l9.38-9.37a18.63 18.63 0 1 0-26.35-26.34l-66.76 66.74a26.63 26.63 0 0 1-37.66-37.66l98.76-98.74a18.63 18.63 0 1 0-26.35-26.34L81.45 116.2a26.63 26.63 0 0 1-37.66-37.66l41.38-41.37a4 4 0 1 1 5.65 5.66L49.44 84.2a18.63 18.63 0 1 0 26.35 26.34l66.76-66.74a26.63 26.63 0 0 1 37.66 37.66L81.45 180.2a18.63 18.63 0 1 0 26.35 26.34l66.75-66.74a26.63 26.63 0 0 1 37.66 37.66Z"></svg:path>`,
})
export class PhScribbleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollThinIcon],svg[ph-scroll-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 104a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4m4 36h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m124 52a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28V64a20 20 0 0 0-40 0c0 7.78 6.34 12.75 6.4 12.8a4 4 0 1 1-4.8 6.4c-.39-.29-9.6-7.34-9.6-19.2a28 28 0 0 1 28-28h136a28 28 0 0 1 28 28v108h12a4 4 0 0 1 2.4.8c.39.29 9.6 7.34 9.6 19.2m-120 0c0-7.78-6.34-12.75-6.4-12.8a4 4 0 0 1 2.4-7.2h92V64a20 20 0 0 0-20-20H59.57A27.9 27.9 0 0 1 68 64v128a20 20 0 0 0 40 0m112 0c0-6-3.74-10.3-5.5-12H112.61a23.3 23.3 0 0 1 3.39 12a27.94 27.94 0 0 1-8.42 20H200a20 20 0 0 0 20-20"></svg:path>`,
})
export class PhScrollThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckThinIcon],svg[ph-seal-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-9.95c-6.68-6.41-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.69-6.81 25.69c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 9.95c6.68 6.41 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.69-13.02-22.37m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88Zm-46.37-43.71a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhSealCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentThinIcon],svg[ph-seal-percent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-10c-6.68-6.4-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.74-6.81 25.74c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-10 12.8c-6.4 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 10c6.68 6.4 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 10-12.8c6.4-6.68 13-13.59 13-22.42s-6.64-15.74-13.02-22.42m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.34-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.23-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.34 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.23 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88ZM116 96a20 20 0 1 0-20 20a20 20 0 0 0 20-20m-32 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m76 44a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 32a12 12 0 1 1 12-12a12 12 0 0 1-12 12m10.83-81.17l-80 80a4 4 0 0 1-5.66-5.66l80-80a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhSealPercentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionThinIcon],svg[ph-seal-question-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-9.95c-6.68-6.41-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.69-6.81 25.69c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 9.95c6.68 6.41 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.69-13.02-22.37m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88ZM136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8m28-72c0 16.44-14 30-32 31.8v4.2a4 4 0 0 1-8 0v-8a4 4 0 0 1 4-4c15.44 0 28-10.77 28-24s-12.56-24-28-24s-28 10.77-28 24v4a4 4 0 0 1-8 0v-4c0-17.64 16.15-32 36-32s36 14.36 36 32"></svg:path>`,
})
export class PhSealQuestionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealThinIcon],svg[ph-seal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-10c-6.68-6.4-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.74-6.81 25.74c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74c6.55 6.54 16.75 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 10c6.68 6.4 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.74-13.02-22.42m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88Z"></svg:path>`,
})
export class PhSealThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningThinIcon],svg[ph-seal-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223 105.58c-4-4.2-8.2-8.54-10-12.8c-1.65-4-1.73-9.53-1.82-15.41c-.14-9-.29-19.19-6.83-25.74s-16.74-6.69-25.74-6.83c-5.88-.09-11.43-.17-15.41-1.82c-4.26-1.76-8.6-5.93-12.8-9.95c-6.68-6.41-13.59-13-22.42-13s-15.74 6.62-22.42 13c-4.2 4-8.54 8.2-12.8 10c-4 1.65-9.53 1.73-15.41 1.82c-9 .14-19.19.29-25.74 6.83s-6.67 16.69-6.81 25.69c-.09 5.88-.17 11.43-1.82 15.41c-1.76 4.26-5.93 8.6-9.95 12.8c-6.41 6.68-13 13.59-13 22.42s6.62 15.74 13 22.42c4 4.2 8.2 8.54 10 12.8c1.65 4 1.73 9.53 1.82 15.41c.14 9 .29 19.19 6.83 25.74s16.74 6.69 25.74 6.83c5.88.09 11.43.17 15.41 1.82c4.26 1.76 8.6 5.93 12.8 9.95c6.68 6.41 13.59 13 22.42 13s15.74-6.62 22.42-13c4.2-4 8.54-8.2 12.8-10c4-1.65 9.53-1.73 15.41-1.82c9-.14 19.19-.29 25.74-6.83s6.69-16.74 6.83-25.74c.09-5.88.17-11.43 1.82-15.41c1.76-4.26 5.93-8.6 9.95-12.8c6.41-6.68 13-13.59 13-22.42s-6.64-15.69-13.02-22.37m-5.78 39.3c-4.54 4.73-9.24 9.63-11.57 15.28c-2.23 5.39-2.33 12-2.43 18.35c-.12 8.2-.24 16-4.49 20.2s-12 4.37-20.2 4.49c-6.37.1-13 .2-18.35 2.43c-5.65 2.33-10.55 7-15.28 11.57c-5.81 5.55-11.28 10.8-16.9 10.8s-11.09-5.25-16.88-10.8c-4.73-4.54-9.63-9.24-15.28-11.57c-5.39-2.23-12-2.33-18.35-2.43c-8.2-.12-15.95-.24-20.2-4.49s-4.37-12-4.49-20.2c-.1-6.37-.2-13-2.43-18.35c-2.33-5.65-7-10.55-11.57-15.28C33.25 139.09 28 133.62 28 128s5.25-11.09 10.8-16.88c4.54-4.73 9.24-9.63 11.57-15.28c2.23-5.39 2.33-12 2.43-18.35c.12-8.2.24-15.95 4.49-20.2s12-4.37 20.2-4.49c6.37-.1 13-.2 18.35-2.43c5.65-2.33 10.55-7 15.28-11.57C116.91 33.25 122.38 28 128 28s11.09 5.25 16.88 10.8c4.73 4.54 9.63 9.24 15.28 11.57c5.39 2.23 12 2.33 18.35 2.43c8.2.12 16 .24 20.2 4.49s4.37 12 4.49 20.2c.1 6.37.2 13 2.43 18.35c2.33 5.65 7 10.55 11.57 15.28c5.55 5.79 10.8 11.26 10.8 16.88s-5.25 11.09-10.8 16.88ZM124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSealWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatThinIcon],svg[ph-seat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 232a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4m0-72v32a12 12 0 0 1-12 12h-93.89a11.94 11.94 0 0 1-10.74-6.63l-58.11-116a12.07 12.07 0 0 1 0-10.74l22.12-44a12 12 0 0 1 16-5.42l33.78 14.27l.23.11a12 12 0 0 1 5.37 16.1l-.06.1l-14.3 26.47a4 4 0 0 0 0 3.53l31.78 64a4 4 0 0 0 3.57 2.2H208A12 12 0 0 1 220 160m-8 0a4 4 0 0 0-4-4h-64.23a11.94 11.94 0 0 1-10.77-6.63l-31.78-64a12 12 0 0 1 0-10.72l.06-.11l14.27-26.47a4 4 0 0 0-1.71-5.27L80.13 28.53l-.24-.11a3.9 3.9 0 0 0-1.78-.42a4 4 0 0 0-3.58 2.21l-22.12 44a4 4 0 0 0 0 3.57l58.11 116a4 4 0 0 0 3.58 2.21H208a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhSeatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltThinIcon],svg[ph-seatbelt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 108a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-72a32 32 0 1 1-32 32a32 32 0 0 1 32-32m76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-2.65-7l103-90.84a68 68 0 0 0-95.44 51a4 4 0 0 1-3.94 3.37a4.5 4.5 0 0 1-.64-.05a4 4 0 0 1-3.33-4.59a76 76 0 0 1 109.8-55.46L189.35 101a4 4 0 1 1 5.3 6L66.58 220H200a4 4 0 0 1 4 4m-13.56-75.33A75.5 75.5 0 0 1 204 192a4 4 0 0 1-8 0a67.55 67.55 0 0 0-12.13-38.77a4 4 0 1 1 6.57-4.56"></svg:path>`,
})
export class PhSeatbeltThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraThinIcon],svg[ph-security-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 140a4 4 0 0 0-4 4v20h-48.69a4 4 0 0 1-2.82-1.17l-21.18-21.17l53.18-53.17a12 12 0 0 0 0-17l-56-56a12 12 0 0 0-17 0L5.76 161.76A6 6 0 0 0 10 172h41l36.48 36.49a12 12 0 0 0 17 0l61.18-61.18l21.17 21.17a11.9 11.9 0 0 0 8.48 3.52H244v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4M157.17 21.17a4.1 4.1 0 0 1 5.66 0l15.51 15.52L51 164H14.82ZM98.83 202.83a4.1 4.1 0 0 1-5.66 0L58.34 168L184 42.34l34.83 34.83a4 4 0 0 1 0 5.66Z"></svg:path>`,
})
export class PhSecurityCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllThinIcon],svg[ph-selection-all-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 40a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m36 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12m8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0 72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12v-24a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8M40 76a4 4 0 0 0 4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8H48a12 12 0 0 0-12 12v24a4 4 0 0 0 4 4m140 100a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Zm-8-92H84v88h88Z"></svg:path>`,
})
export class PhSelectionAllThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundThinIcon],svg[ph-selection-background-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 84H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4ZM140 40a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m80 8v8a4 4 0 0 1-8 0v-8a4 4 0 0 0-4-4h-8a4 4 0 0 1 0-8h8a12 12 0 0 1 12 12m0 48v16a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m0 56v8a12 12 0 0 1-12 12h-8a4 4 0 0 1 0-8h8a4 4 0 0 0 4-4v-8a4 4 0 0 1 8 0M84 56v-8a12 12 0 0 1 12-12h8a4 4 0 0 1 0 8h-8a4 4 0 0 0-4 4v8a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhSelectionBackgroundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundThinIcon],svg[ph-selection-foreground-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 216a4 4 0 0 1-4 4h-8a12 12 0 0 1-12-12v-8a4 4 0 0 1 8 0v8a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4m52-4H96a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m-72-48a4 4 0 0 0 4-4v-16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4m128 32a4 4 0 0 0-4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-8a4 4 0 0 0-4-4m0-88a4 4 0 0 0 4-4v-8a12 12 0 0 0-12-12h-8a4 4 0 0 0 0 8h8a4 4 0 0 1 4 4v8a4 4 0 0 0 4 4M56 84h-8a12 12 0 0 0-12 12v8a4 4 0 0 0 8 0v-8a4 4 0 0 1 4-4h8a4 4 0 0 0 0-8m152-48H96a12 12 0 0 0-12 12v40a4 4 0 0 0 4 4h24a4 4 0 0 0 0-8H92V48a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v112a4 4 0 0 1-4 4h-36v-20a4 4 0 0 0-8 0v24a4 4 0 0 0 3.51 3.95a2.2 2.2 0 0 0 .49.05h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhSelectionForegroundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseThinIcon],svg[ph-selection-inverse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 216a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8M220 48v160a12 12 0 0 1-12 12h-24a4 4 0 0 1 0-8h22.34L44 49.66V72a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-12-4H49.66L212 206.34V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSelectionInverseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusThinIcon],svg[ph-selection-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 40a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m68-164v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4m4 60a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8m0-176H48a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8m168 176h-20v-20a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v20a4 4 0 0 0 8 0v-20h20a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSelectionPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashThinIcon],svg[ph-selection-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 40a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m36 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12m8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8M51 37.31a4 4 0 0 0-6 5.38l160 176a4 4 0 1 0 5.92-5.38Z"></svg:path>`,
})
export class PhSelectionSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionThinIcon],svg[ph-selection-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 40a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12m8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0 72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12v-24a4 4 0 0 0-4-4M40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8m0-176H48a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSelectionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesThinIcon],svg[ph-shapes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48m-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40m108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4m-4 56h-80v-48h80Z"></svg:path>`,
})
export class PhShapesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatThinIcon],svg[ph-share-fat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 109.17l-80-80A4 4 0 0 0 148 32v44.09c-54 2.44-120.43 53.55-127.94 119a7.87 7.87 0 0 0 4.58 8.16a8 8 0 0 0 3.41.77a7.9 7.9 0 0 0 5.79-2.55c11.53-12.27 53.29-51.73 114.16-53.4V192a4 4 0 0 0 6.83 2.83l80-80a4 4 0 0 0 0-5.66M156 182.33V144a4 4 0 0 0-4-4c-27.39 0-54.08 7.17-79.34 21.3A189.9 189.9 0 0 0 28 196l2.92 2.74L28 196c3.36-29.21 19.55-57.48 45.6-79.57C97.53 96.11 126.83 84 152 84a4 4 0 0 0 4-4V41.66L226.34 112Z"></svg:path>`,
})
export class PhShareFatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkThinIcon],svg[ph-share-network-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 164a36 36 0 0 0-27.92 13.3L96.25 144a35.92 35.92 0 0 0 0-32l51.83-33.3a35.93 35.93 0 1 0-4.33-6.7l-51.83 33.3a36 36 0 1 0 0 45.4l51.83 33.3A36 36 0 1 0 176 164m0-136a28 28 0 1 1-28 28a28 28 0 0 1 28-28M64 156a28 28 0 1 1 28-28a28 28 0 0 1-28 28m112 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhShareNetworkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareThinIcon],svg[ph-share-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 106.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 108H165a92 92 0 0 0-89.11 69a4 4 0 0 1-3.89 3a4 4 0 0 1-1-.13a4 4 0 0 1-2.87-4.87A99.93 99.93 0 0 1 165 100h49.36l-41.19-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66M192 212H36V88a4 4 0 0 0-8 0v128a4 4 0 0 0 4 4h160a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhShareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckThinIcon],svg[ph-shield-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 68c0 38.44-14.23 69.63-42.29 92.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-41.17-10.83a4 4 0 0 1 0 5.66l-56 56a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L112 154.34l53.17-53.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhShieldCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredThinIcon],svg[ph-shield-checkered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 12v56q0 6.12-.49 12H132V52h76a4 4 0 0 1 4 4M44 56a4 4 0 0 1 4-4h76v72H44.49q-.49-5.88-.49-12Zm1.38 76H124v94.44a135.2 135.2 0 0 1-37.71-21.73C63.27 185.78 49.56 161.38 45.38 132m124.33 72.71A134.9 134.9 0 0 1 132 226.44V132h78.62c-4.18 29.38-17.89 53.78-40.91 72.71"></svg:path>`,
})
export class PhShieldCheckeredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronThinIcon],svg[ph-shield-chevron-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m-38.29 160.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11A115.1 115.1 0 0 1 59.21 173L128 124.88L196.79 173a115.1 115.1 0 0 1-27.08 31.71M212 112c0 20-3.85 38-11.46 53.89l-70.25-49.17a4 4 0 0 0-4.58 0l-70.25 49.17C47.85 150 44 132 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhShieldChevronThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusThinIcon],svg[ph-shield-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 128a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28V96a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m56-72v56c0 51.16-24.73 82.12-45.47 99.1c-22.4 18.32-44.55 24.5-45.48 24.76a4 4 0 0 1-2.1 0c-.93-.26-23.08-6.44-45.48-24.76C60.73 194.12 36 163.16 36 112V56a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v56c0 38.44 14.23 69.63 42.29 92.71A132.2 132.2 0 0 0 128 227.82a132.5 132.5 0 0 0 41.71-23.11C197.77 181.63 212 150.44 212 112Z"></svg:path>`,
})
export class PhShieldPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashThinIcon],svg[ph-shield-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l1.31 1.44A12 12 0 0 0 36 56v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c1.37-.37 32.56-9.14 58.23-36.71L205 218.69a4 4 0 1 0 5.92-5.38Zm77 190.51a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h5.5l128.38 141.21c-21.65 23.49-48.3 32.85-53.88 34.61M220 56v56c0 20-3.77 38.49-11.2 54.94a4 4 0 0 1-3.65 2.36a4.1 4.1 0 0 1-1.65-.36a4 4 0 0 1-2-5.29c7-15.41 10.49-32.79 10.49-51.65V56a4 4 0 0 0-4-4H98.52a4 4 0 1 1 0-8H208a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhShieldSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarThinIcon],svg[ph-shield-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.71 118.51a4 4 0 0 1-2.22 5.2l-35.16 14.07l20.87 27.82a4 4 0 1 1-6.4 4.8L128 142.67l-20.8 27.73a4 4 0 0 1-6.4-4.8l20.87-27.82l-35.16-14.07a4 4 0 1 1 3-7.42l34.49 13.8V96a4 4 0 0 1 8 0v34.09l34.51-13.8a4 4 0 0 1 5.2 2.22M220 56v56c0 51.16-24.73 82.12-45.47 99.1c-22.4 18.32-44.55 24.5-45.48 24.76a4 4 0 0 1-2.1 0c-.93-.26-23.08-6.44-45.48-24.76C60.73 194.12 36 163.16 36 112V56a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v56c0 38.44 14.23 69.63 42.29 92.71A132.2 132.2 0 0 0 128 227.82a132.5 132.5 0 0 0 41.71-23.11C197.77 181.63 212 150.44 212 112Z"></svg:path>`,
})
export class PhShieldStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldThinIcon],svg[ph-shield-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 68c0 38.44-14.23 69.63-42.29 92.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhShieldThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningThinIcon],svg[ph-shield-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V96a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8m92-108v56c0 51.16-24.73 82.12-45.47 99.1c-22.4 18.32-44.55 24.5-45.48 24.76a4 4 0 0 1-2.1 0c-.93-.26-23.08-6.44-45.48-24.76C60.73 194.12 36 163.16 36 112V56a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v56c0 38.44 14.23 69.63 42.29 92.71A132.2 132.2 0 0 0 128 227.82a132.5 132.5 0 0 0 41.71-23.11C197.77 181.63 212 150.44 212 112Z"></svg:path>`,
})
export class PhShieldWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerThinIcon],svg[ph-shipping-container-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.3 74.5L129.1 44.15a4.1 4.1 0 0 0-1.67-.11L22.3 59.06A12.06 12.06 0 0 0 12 70.94v114.12a12.06 12.06 0 0 0 10.3 11.88l105.13 15a3.6 3.6 0 0 0 .57 0a4 4 0 0 0 1.1-.15l106.2-30.29A12 12 0 0 0 244 170V86a12 12 0 0 0-8.7-11.5M96 124H76V59.47l48-6.86v150.78l-48-6.86V132h20a4 4 0 0 0 0-8m-76 61.06V70.94a4 4 0 0 1 3.43-4L68 60.61V124H48a4 4 0 0 0 0 8h20v63.39L23.43 189a4 4 0 0 1-3.43-3.94M236 170a4 4 0 0 1-2.9 3.84L132 202.7V53.3l101.1 28.89A4 4 0 0 1 236 86Z"></svg:path>`,
})
export class PhShippingContainerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedThinIcon],svg[ph-shirt-folded-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44h-22.34l-14.83-14.83A4 4 0 0 0 160 28H96a4 4 0 0 0-2.83 1.17L78.34 44H56a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m-72 28.79L103.47 36h49.06Zm32.62-34.51L172 49.66V104a4 4 0 0 1-2.3 3.63a3.93 3.93 0 0 1-4.21-.51l-32.2-27.82ZM84 49.66l11.38-11.38l27.33 41l-32.17 27.8A4 4 0 0 1 84 104ZM52 208V56a4 4 0 0 1 4-4h20v52a11.89 11.89 0 0 0 6.91 10.87A12.1 12.1 0 0 0 88 116a11.88 11.88 0 0 0 7.65-2.8h.06L124 88.74V212H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-68V88.74l28.32 24.46A11.9 11.9 0 0 0 168 116a12.1 12.1 0 0 0 5.12-1.15A11.89 11.89 0 0 0 180 104V52h20a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhShirtFoldedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarThinIcon],svg[ph-shooting-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.55 71.3a9.44 9.44 0 0 0-8.28-6.51l-39.37-3.11l-15.15-35.91a9.51 9.51 0 0 0-17.49 0L140.1 61.68l-39.36 3.11a9.39 9.39 0 0 0-5.4 16.53l30 25.28l-9.14 37.79a9.24 9.24 0 0 0 3.58 9.75a9.52 9.52 0 0 0 10.56.48l33.66-20.3l33.72 20.3a9.52 9.52 0 0 0 10.56-.48a9.24 9.24 0 0 0 3.58-9.75l-9.15-37.79l29.95-25.28a9.34 9.34 0 0 0 2.89-10.02m-8.05 3.91l-31.84 26.87a4 4 0 0 0-1.31 4l9.73 40.19a1.28 1.28 0 0 1-.53 1.42a1.5 1.5 0 0 1-1.71.07l-35.77-21.53a4 4 0 0 0-4.13 0l-35.78 21.53a1.48 1.48 0 0 1-1.7-.07a1.3 1.3 0 0 1-.54-1.42l9.73-40.19a4 4 0 0 0-1.31-4l-31.83-26.87a1.29 1.29 0 0 1-.44-1.46a1.4 1.4 0 0 1 1.3-1l41.79-3.3a4 4 0 0 0 3.37-2.45l16.1-38.15a1.51 1.51 0 0 1 2.75 0L181.48 67a4 4 0 0 0 3.37 2.43l41.79 3.3a1.39 1.39 0 0 1 1.29 1a1.27 1.27 0 0 1-.43 1.48M85.28 120.38l-58.45 58.45a4 4 0 0 1-5.66-5.66l58.45-58.45a4 4 0 0 1 5.66 5.66m10.81 55.53a4 4 0 0 1 0 5.65l-53.26 53.27a4 4 0 0 1-5.66-5.66l53.27-53.26a4 4 0 0 1 5.65 0m73-1a4 4 0 0 1 0 5.66l-54.28 54.28a4 4 0 0 1-5.66-5.66l54.29-54.28a4 4 0 0 1 5.67-.02Z"></svg:path>`,
})
export class PhShootingStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenThinIcon],svg[ph-shopping-bag-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v20H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V84h184v116a4 4 0 0 1-4 4m-44-92a44 44 0 0 1-88 0a4 4 0 0 1 8 0a36 36 0 0 0 72 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhShoppingBagOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagThinIcon],svg[ph-shopping-bag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM172 88a44 44 0 0 1-88 0a4 4 0 0 1 8 0a36 36 0 0 0 72 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhShoppingBagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleThinIcon],svg[ph-shopping-cart-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.18 69.58A4 4 0 0 0 232 68H54.15l-10.3-37.07A4 4 0 0 0 40 28H16a4 4 0 0 0 0 8h21l35.89 129.35A20.06 20.06 0 0 0 92.16 180H191a20.06 20.06 0 0 0 19.27-14.65l25.63-92.28a4 4 0 0 0-.72-3.49m-32.67 93.63A12 12 0 0 1 191 172H92.16a12 12 0 0 1-11.56-8.79L56.37 76h170.37ZM100 216a12 12 0 1 1-12-12a12 12 0 0 1 12 12m104 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhShoppingCartSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartThinIcon],svg[ph-shopping-cart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.07 61.44A4 4 0 0 0 224 60H59.34l-6.68-36.72A4 4 0 0 0 48.73 20H24a4 4 0 0 0 0 8h21.39l6.69 36.8l19.41 106.78A20 20 0 0 0 79 183.85a24 24 0 1 0 30.87 4.15h60.26a24 24 0 1 0 17.87-8H91.17a12 12 0 0 1-11.8-9.85l-4-22.15H196.1a20 20 0 0 0 19.68-16.42l12.16-66.86a4 4 0 0 0-.87-3.28M108 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m96 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m3.91-73.85A12 12 0 0 1 196.1 140H73.88L60.79 68h158.42Z"></svg:path>`,
})
export class PhShoppingCartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelThinIcon],svg[ph-shovel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.83 61.17l-48-48a4 4 0 0 0-5.66 5.66L210.34 40l-76.68 76.69l-37.17-37.18a12 12 0 0 0-17 0l-56 56A11.93 11.93 0 0 0 20 144v80a12 12 0 0 0 12 12h80a12 12 0 0 0 8.49-3.51l56-56a12 12 0 0 0 0-17l-37.18-37.17L216 45.66l21.17 21.17a4 4 0 1 0 5.66-5.66m-72 104a4 4 0 0 1 0 5.66l-56 56A4 4 0 0 1 112 228H32a4 4 0 0 1-4-4v-80a4 4 0 0 1 1.17-2.83l56-56a4 4 0 0 1 5.66 0L128 122.34l-42.83 42.83a4 4 0 0 0 5.66 5.66L133.66 128Z"></svg:path>`,
})
export class PhShovelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerThinIcon],svg[ph-shower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 236a8 8 0 1 1-8-8a8 8 0 0 1 8 8m24-40a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-64 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m32-32a8 8 0 1 0 8 8a8 8 0 0 0-8-8M252 40a4 4 0 0 1-4 4h-30.34l-29.93 29.93L165.86 202a12 12 0 0 1-8.17 9.44a12.1 12.1 0 0 1-3.69.56a12 12 0 0 1-8.46-3.52l-98-98A12 12 0 0 1 54 90.14l128-21.87l31.1-31.1A4 4 0 0 1 216 36h32a4 4 0 0 1 4 4m-72.89 36.89L55.37 98a4 4 0 0 0-2.19 6.78l98 98a4 4 0 0 0 6.78-2.17Z"></svg:path>`,
})
export class PhShowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpThinIcon],svg[ph-shrimp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 116a8 8 0 1 1 8 8a8 8 0 0 1-8-8m79.93-33.35A76.07 76.07 0 0 1 144 156h-32a16 16 0 0 0 0 32h56a4 4 0 0 1 0 8h-52v24h36a4 4 0 0 1 0 8H96a76 76 0 0 1 0-152h116a16 16 0 0 0 0-32h-84a20 20 0 0 1-20-20a4 4 0 0 1 8 0a12 12 0 0 0 12 12h84a24 24 0 0 1 7.93 46.65M50.47 202.46l37.78-27A25 25 0 0 1 88 172a23.85 23.85 0 0 1 2-9.6l-59.9-27.23a68 68 0 0 0 20.36 67.29Zm40.43-19L57 207.64A67.6 67.6 0 0 0 96 220h12v-24.34a24.07 24.07 0 0 1-17.1-12.24Zm17.1-35.12V84H96a68.1 68.1 0 0 0-63.42 43.51l61.89 28.13a23.94 23.94 0 0 1 13.53-7.3M211.88 84H116v64h28a68.08 68.08 0 0 0 67.88-64"></svg:path>`,
})
export class PhShrimpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularThinIcon],svg[ph-shuffle-angular-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188H168a4 4 0 0 1-3.25-1.67L85.94 76H32a4 4 0 0 1 0-8h56a4 4 0 0 1 3.25 1.67L170.06 180h52.28l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93L170.06 76h52.28l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68H168a4 4 0 0 0-3.25 1.67l-20.34 28.48a4 4 0 0 0 .93 5.58m-34.68 48.54a4 4 0 0 0-5.58.93L85.94 180H32a4 4 0 0 0 0 8h56a4 4 0 0 0 3.25-1.67l20.34-28.48a4 4 0 0 0-.93-5.58"></svg:path>`,
})
export class PhShuffleAngularThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleThinIcon],svg[ph-shuffle-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 48v40a4 4 0 0 1-8 0V57.66l-50.54 50.54a4 4 0 1 1-5.66-5.66L198.34 52H168a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-4 116a4 4 0 0 0-4 4v30.34L50.83 45.17a4 4 0 0 0-5.66 5.66L198.34 204H168a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-105.46-16.2l-57.37 57.37a4 4 0 0 0 5.66 5.66l57.37-57.37a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhShuffleSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleThinIcon],svg[ph-shuffle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188h-21.4a68.15 68.15 0 0 1-55.34-28.48l-41.71-58.39A60.11 60.11 0 0 0 55.06 76H32a4 4 0 0 1 0-8h23.06a68.15 68.15 0 0 1 55.34 28.48l41.71 58.39A60.11 60.11 0 0 0 200.94 180h21.4l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93l1.19-1.67A60.11 60.11 0 0 1 200.94 76h21.4l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68h-21.4a68.15 68.15 0 0 0-55.34 28.48l-1.19 1.67a4 4 0 0 0 .93 5.58m-34.68 48.54a4 4 0 0 0-5.58.93l-1.19 1.67A60.11 60.11 0 0 1 55.06 180H32a4 4 0 0 0 0 8h23.06a68.15 68.15 0 0 0 55.34-28.48l1.19-1.67a4 4 0 0 0-.93-5.58"></svg:path>`,
})
export class PhShuffleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleThinIcon],svg[ph-sidebar-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSidebarSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarThinIcon],svg[ph-sidebar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200v-52h20a4 4 0 0 0 0-8H36v-24h20a4 4 0 0 0 0-8H36V84h20a4 4 0 0 0 0-8H36V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSidebarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaThinIcon],svg[ph-sigma-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 72V52H72.32l58.8 73.5a4 4 0 0 1 0 5L72.32 204H188v-20a4 4 0 0 1 8 0v24a4 4 0 0 1-4 4H64a4 4 0 0 1-3.12-6.5l62-77.5l-62-77.5A4 4 0 0 1 64 44h128a4 4 0 0 1 4 4v24a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhSigmaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInThinIcon],svg[ph-sign-in-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m138.83 130.83l-40 40a4 4 0 0 1-5.66-5.66L126.34 132H24a4 4 0 0 1 0-8h102.34L93.17 90.83a4 4 0 0 1 5.66-5.66l40 40a4 4 0 0 1 0 5.66M200 36h-64a4 4 0 0 0 0 8h60v168h-60a4 4 0 0 0 0 8h64a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSignInThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutThinIcon],svg[ph-sign-out-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 216a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H52v168h60a4 4 0 0 1 4 4m110.83-90.83l-40-40a4 4 0 0 0-5.66 5.66L214.34 124H112a4 4 0 0 0 0 8h102.34l-33.17 33.17a4 4 0 0 0 5.66 5.66l40-40a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhSignOutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureThinIcon],svg[ph-signature-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 172H57.32c4-7.83 8.18-16.11 12.21-24.56c15.14 3.55 34.13-8.06 56.54-34.59c3.67 12.5 12.53 34.83 29.08 35.15h.35c8.71 0 17.64-6.25 27.16-19.06c4.51 8.2 16.65 19.06 49.34 19.06a4 4 0 0 0 0-8c-42.88 0-44-19.24-44-20a4 4 0 0 0-7.35-2.18C168.74 136.1 160.42 140 155.48 140h-.18c-13-.25-21.29-26.52-23.38-36.61a4 4 0 0 0-7-1.69c-20.94 26.27-39.06 39.55-51.8 38.2c24.19-52.4 32.07-86.74 23.37-102.13C94 33.31 88.7 28 77.91 28C64.09 28 52.54 42.41 47 66.54A122.7 122.7 0 0 0 45.46 113c2.64 15.29 8.39 26.05 16.69 31.35c-4.58 9.6-9.3 19-13.84 27.68H24a4 4 0 0 0 0 8h20.1c-12.87 24.17-23.37 41.68-23.53 41.94a4 4 0 0 0 1.37 5.49A3.93 3.93 0 0 0 24 228a4 4 0 0 0 3.43-1.94c.16-.27 11.85-19.75 25.72-46.06H232a4 4 0 0 0 0-8M53.34 111.61a114.8 114.8 0 0 1 1.49-43.29C58.4 52.7 66.34 36 77.91 36c7.52 0 10.23 3.26 11.61 5.7C99 58.4 79.92 106 65.6 137c-5.84-4.31-10.14-13.17-12.26-25.39"></svg:path>`,
})
export class PhSignatureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostThinIcon],svg[ph-signpost-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243 109.32L209.36 72a12.06 12.06 0 0 0-8.92-4H132V32a4 4 0 0 0-8 0v36H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h84v68a4 4 0 0 0 8 0v-68h68.44a12.06 12.06 0 0 0 8.92-4L243 114.68a4 4 0 0 0 0-5.36m-39.56 37.36a4 4 0 0 1-3 1.32H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h160.44a4 4 0 0 1 3 1.32L234.62 112Z"></svg:path>`,
})
export class PhSignpostThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardThinIcon],svg[ph-sim-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h94.35L204 89.66ZM76 120v72a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4m8 4h88v64h-24v-36a4 4 0 0 0-8 0v36h-24v-36a4 4 0 0 0-8 0v36H84Z"></svg:path>`,
})
export class PhSimCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenThinIcon],svg[ph-siren-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 16V8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0m76 28a4 4 0 0 0 2.83-1.17l8-8a4 4 0 1 0-5.66-5.66l-8 8A4 4 0 0 0 200 44M53.17 42.83a4 4 0 0 0 5.66-5.66l-8-8a4 4 0 0 0-5.66 5.66Zm83.49 33.22a4 4 0 0 0-1.32 7.9C156.24 87.45 172 106.39 172 128a4 4 0 0 0 8 0c0-25.47-18.63-47.8-43.34-51.95M228 176v24a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h4v-36a84 84 0 0 1 84-84h.64c46 .34 83.36 38.47 83.36 85v35h4a12 12 0 0 1 12 12M52 164h152v-35c0-42.15-33.83-76.69-75.42-77A76 76 0 0 0 52 128Zm168 12a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhSirenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoThinIcon],svg[ph-sketch-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243 101.37l-56-64a4 4 0 0 0-3-1.37H72a4 4 0 0 0-3 1.37l-56 64a4 4 0 0 0 .09 5.36l112 120a4 4 0 0 0 5.84 0l112-120a4 4 0 0 0 .07-5.36M77.29 108l39.07 97.66L25.2 108Zm92.8 0L128 213.23L85.91 108ZM88 100l40-53.33L168 100Zm90.71 8h52.09l-91.16 97.66Zm52.47-8H178l-42-56h46.18ZM73.82 44H120l-42 56H24.82Z"></svg:path>`,
})
export class PhSketchLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleThinIcon],svg[ph-skip-back-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m33.94-135.5a4 4 0 0 0-4.06.11L100 120.78V88a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0v-32.78l57.88 36.17a4 4 0 0 0 2.12.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 164 168V88a4 4 0 0 0-2.06-3.5M156 160.78L103.55 128L156 95.22Z"></svg:path>`,
})
export class PhSkipBackCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackThinIcon],svg[ph-skip-back-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M197.87 37.52a12 12 0 0 0-12.18.32L60 116.44V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-76.44l125.69 78.6a12 12 0 0 0 12.18.32a11.69 11.69 0 0 0 6.13-10.36V47.88a11.69 11.69 0 0 0-6.13-10.36M196 208.12a3.8 3.8 0 0 1-2 3.37a4 4 0 0 1-4.06-.11L61.82 131.26a3.83 3.83 0 0 1 0-6.52l128.12-80.12a4 4 0 0 1 2.11-.62a4 4 0 0 1 1.95.51a3.8 3.8 0 0 1 2 3.37Z"></svg:path>`,
})
export class PhSkipBackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleThinIcon],svg[ph-skip-forward-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-136a4 4 0 0 0-4 4v32.78L98.12 84.61A4 4 0 0 0 92 88v80a4 4 0 0 0 2.06 3.5a4.06 4.06 0 0 0 1.94.5a4 4 0 0 0 2.12-.61L156 135.22V168a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m-60 76.78V95.22L152.45 128Z"></svg:path>`,
})
export class PhSkipForwardCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardThinIcon],svg[ph-skip-forward-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36a4 4 0 0 0-4 4v76.44L70.31 37.84a12 12 0 0 0-12.18-.32A11.69 11.69 0 0 0 52 47.88v160.24a11.69 11.69 0 0 0 6.13 10.36a12 12 0 0 0 12.18-.32L196 139.56V216a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-5.82 95.26L66.06 211.38a4 4 0 0 1-4.06.11a3.8 3.8 0 0 1-2-3.37V47.88a3.8 3.8 0 0 1 2-3.37a4 4 0 0 1 2-.51a4 4 0 0 1 2.11.62l128.12 80.12a3.83 3.83 0 0 1 0 6.52Z"></svg:path>`,
})
export class PhSkipForwardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullThinIcon],svg[ph-skull-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 108a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m72-40a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16M128 20C72.86 20 28 63.07 28 116c0 33.43 18.33 64.64 48 82v18a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-18c29.67-17.38 48-48.59 48-82c0-52.93-44.86-96-100-96m46.06 172.19a4 4 0 0 0-2.06 3.5V216a4 4 0 0 1-4 4h-20v-28a4 4 0 0 0-8 0v28h-24v-28a4 4 0 0 0-8 0v28H88a4 4 0 0 1-4-4v-20.31a4 4 0 0 0-2.06-3.5C53.6 176.48 36 147.29 36 116c0-48.52 41.27-88 92-88s92 39.48 92 88c0 31.29-17.6 60.48-45.94 76.19"></svg:path>`,
})
export class PhSkullThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoThinIcon],svg[ph-skype-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 152c0 15.44-16.15 28-36 28s-36-12.56-36-28a4 4 0 0 1 8 0c0 11 12.56 20 28 20s28-9 28-20c0-12.58-11.79-16.92-29.78-22.11c-15.22-4.38-32.44-9.35-32.44-25.89c0-16 14.71-28 34.22-28c14.2 0 26.29 6.46 31.55 16.85a4 4 0 1 1-7.13 3.61C148.53 88.78 139.17 84 128 84c-15 0-26.22 8.6-26.22 20c0 9.81 10.07 13.43 26.66 18.21S164 132.46 164 152m64 24a52.06 52.06 0 0 1-52 52a51.43 51.43 0 0 1-30.26-9.71a92.08 92.08 0 0 1-108-108A51.43 51.43 0 0 1 28 80a52.06 52.06 0 0 1 52-52a51.43 51.43 0 0 1 30.26 9.71a92.08 92.08 0 0 1 108 108A51.43 51.43 0 0 1 228 176m-8 0a43.63 43.63 0 0 0-9.15-26.87a4 4 0 0 1-.75-3.29a84.07 84.07 0 0 0-99.94-99.94a4 4 0 0 1-3.29-.75a44 44 0 0 0-61.72 61.72a4 4 0 0 1 .75 3.29a84.07 84.07 0 0 0 99.94 99.94a4 4 0 0 1 3.29.75A44 44 0 0 0 220 176"></svg:path>`,
})
export class PhSkypeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoThinIcon],svg[ph-slack-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.4 128A28 28 0 1 0 180 84.43V56a28 28 0 0 0-52-14.4A28 28 0 1 0 84.43 76H56a28 28 0 0 0-14.4 52A28 28 0 1 0 76 171.57V200a28 28 0 0 0 52 14.41A28 28 0 1 0 171.57 180H200a28 28 0 0 0 14.4-52M76 152a20 20 0 1 1-20-20h20Zm48 48a20 20 0 0 1-40 0v-48a20 20 0 0 1 20-20h20Zm0-76H56a20 20 0 0 1 0-40h48a20 20 0 0 1 20 20Zm0-48h-20a20 20 0 1 1 20-20Zm56 28a20 20 0 1 1 20 20h-20Zm-48-48a20 20 0 0 1 40 0v48a20 20 0 0 1-20 20h-20Zm40 144a20 20 0 0 1-40 0v-20h20a20 20 0 0 1 20 20m28-28h-48a20 20 0 0 1-20-20v-20h68a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhSlackLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalThinIcon],svg[ph-sliders-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 84h36.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8h-84.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8m64-24a20 20 0 1 1-20 20a20 20 0 0 1 20-20m112 112h-20.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8h100.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8m-48 24a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhSlidersHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersThinIcon],svg[ph-sliders-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 108.29V40a4 4 0 0 0-8 0v68.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-52.29a28 28 0 0 0 0-55.42M56 156a20 20 0 1 1 20-20a20 20 0 0 1-20 20m76-95.71V40a4 4 0 0 0-8 0v20.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0V115.71a28 28 0 0 0 0-55.42M128 108a20 20 0 1 1 20-20a20 20 0 0 1-20 20m100 60a28 28 0 0 0-24-27.71V40a4 4 0 0 0-8 0v100.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-20.29A28 28 0 0 0 228 168m-28 20a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhSlidersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowThinIcon],svg[ph-slideshow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 52H64a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4Zm40-136v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0M28 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhSlideshowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryThinIcon],svg[ph-smiley-angry-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64-4A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92m-46.22-43.33L128 115.19L82.22 84.67a4 4 0 1 0-4.44 6.66l48 32a4 4 0 0 0 4.44 0l48-32a4 4 0 1 0-4.44-6.66m-19.57 96c-7.82-5.2-15.27-8.67-26.21-8.67s-18.39 3.47-26.21 8.67a4 4 0 1 0 4.42 6.66C113.2 182.69 119 180 128 180s14.8 2.69 21.79 7.33a4 4 0 1 0 4.42-6.66"></svg:path>`,
})
export class PhSmileyAngryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankThinIcon],svg[ph-smiley-blank-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-28-112a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSmileyBlankThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehThinIcon],svg[ph-smiley-meh-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-60a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m-88-52a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSmileyMehThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingThinIcon],svg[ph-smiley-melting-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-48-48a8 8 0 1 0-8 8a8 8 0 0 0 8-8m74.21-35.2A100 100 0 0 0 53.46 194.67a4 4 0 1 0 6-5.34a92 92 0 1 1 137.16 0a4 4 0 0 0 6 5.34a100 100 0 0 0-4.41-137.87M152 172h-16c-12 0-25.28-4.92-35.42-13.16C89.89 150.15 84 139.19 84 128a44 44 0 0 1 .61-7.34a4 4 0 0 0-7.89-1.32A52 52 0 0 0 76 128c0 29.29 32.25 52 60 52h16a12 12 0 0 1 0 24H96a20 20 0 0 0 0 40a4 4 0 0 0 0-8a12 12 0 0 1 0-24h56a20 20 0 0 0 0-40"></svg:path>`,
})
export class PhSmileyMeltingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousThinIcon],svg[ph-smiley-nervous-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m72 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m24 60a4 4 0 0 1-4 4c-8 0-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4c-3.2 4.28-7.2 9.6-15.2 9.6s-12-5.32-15.2-9.6c-3.07-4.09-5-6.4-8.8-6.4s-5.73 2.31-8.8 6.4C92 166.68 88 172 80 172a4 4 0 0 1 0-8c3.81 0 5.73-2.31 8.8-6.4C92 153.32 96 148 104 148s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4s5.73-2.31 8.8-6.4c3.2-4.28 7.2-9.6 15.2-9.6s12 5.32 15.2 9.6c3.07 4.09 5 6.4 8.8 6.4a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSmileyNervousThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadThinIcon],svg[ph-smiley-sad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-.54 66a4 4 0 0 1-1.46 5.46a3.93 3.93 0 0 1-2 .54a4 4 0 0 1-3.46-2c-8.21-14.19-21.19-22-36.54-22s-28.33 7.81-36.54 22a4 4 0 0 1-6.92-4c9.55-16.52 25.4-26 43.46-26s33.91 9.48 43.46 26"></svg:path>`,
})
export class PhSmileySadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerThinIcon],svg[ph-smiley-sticker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 29.39 195.61a3.94 3.94 0 0 0 1.66-1L222.62 159a4 4 0 0 0 1-1.65A100.07 100.07 0 0 0 128 28m88.25 126.1l-62.15 62.15a91.88 91.88 0 1 1 62.15-62.15M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-.54 46c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4"></svg:path>`,
})
export class PhSmileyStickerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyThinIcon],svg[ph-smiley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.46 154c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92M92 116a8 8 0 1 0-8-8a8 8 0 0 0 8 8m72-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSmileyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkThinIcon],svg[ph-smiley-wink-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M84 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m96 0a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m-8.54 46c-9.55 16.52-25.39 26-43.46 26s-33.91-9.48-43.46-26a4 4 0 0 1 6.92-4c8.21 14.19 21.19 22 36.54 22s28.33-7.81 36.54-22a4 4 0 1 1 6.92 4"></svg:path>`,
})
export class PhSmileyWinkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyXEyesThinIcon],svg[ph-smiley-x-eyes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m58.83-121.17L173.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L168 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L162.34 112l-13.17-13.17a4 4 0 0 1 5.66-5.66L168 106.34l13.17-13.17a4 4 0 1 1 5.66 5.66m-80 0L93.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L88 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L82.34 112L69.17 98.83a4 4 0 0 1 5.66-5.66L88 106.34l13.17-13.17a4 4 0 0 1 5.66 5.66M136 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSmileyXEyesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnapchatLogoThinIcon],svg[ph-snapchat-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.92 183.1a4 4 0 0 0-2.56-3c-.13 0-13.52-5-26.69-19.76a99.2 99.2 0 0 1-20-35.54l22.83-9.13a4 4 0 1 0-3-7.42l-22.08 8.83A149.8 149.8 0 0 1 188 80a60 60 0 0 0-120 0a150.3 150.3 0 0 1-4.43 37.15l-22.08-8.83a4 4 0 1 0-3 7.42l22.82 9.13a99.2 99.2 0 0 1-20 35.54c-13.18 14.73-26.56 19.71-26.69 19.76a4 4 0 0 0-1.39 6.68c6.12 5.73 16 6.71 25.55 7.65c6.7.67 13.64 1.35 17.92 3.71s7.73 7.18 11.51 12.36c5.25 7.2 10.69 14.65 19 16.77c7.92 2 16.23-.8 24.26-3.54c5.88-2 11.43-3.89 16.5-3.89s10.63 1.89 16.5 3.89c6.13 2.09 12.42 4.23 18.57 4.23a23 23 0 0 0 5.7-.69c8.31-2.12 13.74-9.57 19-16.77c3.79-5.18 7.36-10.08 11.51-12.36s11.22-3 17.93-3.71c9.55-.94 19.43-1.92 25.54-7.65a4 4 0 0 0 1.2-3.75m-27.51 3.41c-7.51.75-15.27 1.51-21 4.66s-10 9-14.12 14.66c-4.62 6.33-9 12.32-14.51 13.73s-12.46-.89-19.71-3.36c-6.23-2.12-12.68-4.32-19.08-4.32s-12.84 2.2-19.08 4.32c-7.24 2.47-14.09 4.8-19.7 3.36s-9.89-7.4-14.52-13.73c-4.13-5.66-8.41-11.52-14.11-14.66s-13.49-3.91-21-4.66c-5.26-.52-10.63-1-14.91-2.37A90.2 90.2 0 0 0 47 166.08c8.1-9 17.14-22.5 23-41.85a1.5 1.5 0 0 0 0-.23a3.8 3.8 0 0 0 .23-.91A154.1 154.1 0 0 0 76 80a52 52 0 0 1 104 0a154.1 154.1 0 0 0 5.74 43.13a3.4 3.4 0 0 0 .24.91c0 .08.07.14.1.22c5.81 19.35 14.86 32.88 23 41.85a90.2 90.2 0 0 0 22.27 18.06c-4.35 1.29-9.68 1.83-14.94 2.34"></svg:path>`,
})
export class PhSnapchatLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerMoveThinIcon],svg[ph-sneaker-move-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.37 170.21l-28.62-14.31A51.7 51.7 0 0 1 172 109.39V80a4 4 0 0 0-4-4a52.06 52.06 0 0 1-52-52a4 4 0 0 0-6.42-3.19l-77 58.41l-.1.08a12 12 0 0 0-.94 17.81l113.69 113.72a4 4 0 0 0 2.83 1.17H224a12 12 0 0 0 12-12v-19.06a11.94 11.94 0 0 0-6.63-10.73M228 200a4 4 0 0 1-4 4h-74.28L37.17 91.45a4 4 0 0 1 .27-5.9l15.79-12l41.26 41.25a4 4 0 0 0 5.65-5.66L59.67 68.7l48.82-37A60.12 60.12 0 0 0 164 83.87v25.52a59.68 59.68 0 0 0 33.17 53.67l28.62 14.31a4 4 0 0 1 2.21 3.57ZM70.8 180H32a4 4 0 0 1 0-8h38.8a4 4 0 1 1 0 8m36 28a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h54.8a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSneakerMoveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerThinIcon],svg[ph-sneaker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.38 132.91l-60.72-20.24A28 28 0 0 1 150 97.53l-23.31-54.41a12 12 0 0 0-15.07-6.4L35.9 64.25A12 12 0 0 0 28 75.53V192a12 12 0 0 0 12 12h200a12 12 0 0 0 12-12v-24.94a36 36 0 0 0-24.62-34.15M38.63 71.77l75.72-27.53a3.8 3.8 0 0 1 1.37-.24a4 4 0 0 1 3.63 2.32L128.17 67l-25.54 9.29A4 4 0 0 0 104 84a4.1 4.1 0 0 0 1.37-.24l25.95-9.44l7.89 18.44l-20.58 7.48A4 4 0 0 0 120 108a4.1 4.1 0 0 0 1.37-.24l21-7.64l.25.6a36.1 36.1 0 0 0 13.52 15.7l-21.5 7.82A4 4 0 0 0 136 132a4.1 4.1 0 0 0 1.37-.24l29.3-10.66l58.18 19.4a28 28 0 0 1 19 23.5H36V75.53a4 4 0 0 1 2.63-3.76M240 196H40a4 4 0 0 1-4-4v-20h208v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSneakerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnowflakeThinIcon],svg[ph-snowflake-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.88 151.05a4 4 0 0 1-2.93 4.83l-28.6 7l7.51 28.12a4 4 0 0 1-2.83 4.9a3.7 3.7 0 0 1-1 .14a4 4 0 0 1-3.86-3l-8.17-30.4l-48-27.71v55.41l22.83 22.83a4 4 0 0 1-5.66 5.66L128 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L124 190.34v-55.41l-48 27.71L67.86 193a4 4 0 0 1-3.86 3a3.7 3.7 0 0 1-1-.14a4 4 0 0 1-2.83-4.9l7.51-28.05l-28.6-7a4 4 0 1 1 1.92-7.79l31 7.61L120 128l-48-27.73l-31 7.61a4 4 0 0 1-1 .12a4 4 0 0 1-1-7.88l28.6-7L60.14 65a4 4 0 0 1 7.72-2L76 93.36l48 27.71V65.66l-22.83-22.83a4 4 0 0 1 5.66-5.66L128 58.34l21.17-21.17a4 4 0 1 1 5.66 5.66L132 65.66v55.41l48-27.71L188.14 63a4 4 0 0 1 7.72 2l-7.51 28.05l28.6 7A4 4 0 0 1 216 108a4 4 0 0 1-1-.12l-31-7.61L136 128l48 27.73l31-7.61a4 4 0 0 1 4.88 2.93"></svg:path>`,
})
export class PhSnowflakeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoccerBallThinIcon],svg[ph-soccer-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m40.87 147.42l-11.69-16.09l13.95-40.64l18.93-6.15l29.65 22.74a91.3 91.3 0 0 1-12.9 40.14Zm-81.74 0H49.19a91.3 91.3 0 0 1-12.9-40.14l29.65-22.74l18.93 6.15l13.95 40.64ZM51.69 76.66l8.87 29.92L36 125.39a91.4 91.4 0 0 1 15.69-48.73M106.13 156l-13.36-38.92L128 92.85l35.23 24.23L149.87 156Zm89.31-49.42l8.87-29.92A91.4 91.4 0 0 1 220 125.39Zm2.87-37.84l-10.72 36.19l-19 6.16L132 85.9V66.1l32.68-22.46a92.44 92.44 0 0 1 33.63 25.1m-42.77-28.53L128 59.15l-27.54-18.94a92.2 92.2 0 0 1 55.08 0m-64.22 3.43L124 66.1v19.8l-36.64 25.19l-19-6.16l-10.67-36.19a92.44 92.44 0 0 1 33.63-25.1M54.61 183.42h31.73l11.1 31.36a92.46 92.46 0 0 1-42.83-31.36m52.3 34.14l-13.27-37.5L105.32 164h45.36l11.68 16.06l-13.27 37.5a92.4 92.4 0 0 1-42.18 0m51.65-2.78l11.1-31.36h31.73a92.46 92.46 0 0 1-42.83 31.36"></svg:path>`,
})
export class PhSoccerBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSockThinIcon],svg[ph-sock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20h-88a12 12 0 0 0-12 12v78.34l-39.92 39.92a54.91 54.91 0 0 0 77.66 77.66l68.4-68.41a19.85 19.85 0 0 0 5.86-14.14V32a12 12 0 0 0-12-12m-88 8h88a4 4 0 0 1 4 4v20h-96V32a4 4 0 0 1 4-4m20.08 194.26a46.91 46.91 0 1 1-66.34-66.34l41.09-41.09A4 4 0 0 0 100 112V60h96v48.17A52.05 52.05 0 0 0 148 160a51.44 51.44 0 0 0 9 29.3Zm68.4-68.4l-29.66 29.67A43.5 43.5 0 0 1 156 160a44.06 44.06 0 0 1 40-43.81v29.18a11.92 11.92 0 0 1-3.52 8.49"></svg:path>`,
})
export class PhSockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarPanelThinIcon],svg[ph-solar-panel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 104a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m38.26-48.08a4 4 0 1 0 5.66-5.66L68.6 39a4 4 0 0 0-5.6 5.6ZM128 36a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4m50.91 21.09a4 4 0 0 0 2.83-1.17l11.31-11.32a4 4 0 1 0-5.65-5.6l-11.32 11.26a4 4 0 0 0 2.83 6.83M200 108h16a4 4 0 0 0 0-8h-16a4 4 0 0 0 0 8m-112 0a4 4 0 0 0 4-4a36 36 0 0 1 72 0a4 4 0 0 0 8 0a44 44 0 0 0-88 0a4 4 0 0 0 4 4m147.45 110a4 4 0 0 1-3.45 2H24a4 4 0 0 1-3.48-6l40.69-72a4 4 0 0 1 3.49-2h126.6a4 4 0 0 1 3.49 2l40.69 72a4 4 0 0 1-.03 4M189 148h-31.69l5.22 24h40Zm-34.63 24l-5.22-24h-42.27l-5.22 24Zm-54.42 8l-7 32H163l-7-32Zm-46.46-8h40l5.22-24H67Zm-22.6 40h53.89l7-32H48.94Zm194.28 0l-18.08-32h-42.82l6.95 32Z"></svg:path>`,
})
export class PhSolarPanelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarRoofThinIcon],svg[ph-solar-roof-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.58 126.21l-40-80A4 4 0 0 0 200 44H56a4 4 0 0 0-3.58 2.21l-40 80A4 4 0 0 0 12 128v56a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12v-56a4 4 0 0 0-.42-1.79M98.47 124l-16-32h39.06l16 32Zm3.06-72l16 32H78.47l-16-32Zm48 0l16 32h-39.06l-16-32Zm-3.06 72l-16-32h39.06l16 32Zm48 0l-16-32h39.06l16 32Zm19.06-40h-39.06l-16-32h39.06ZM20 184v-55.06l36-72l36 72V188H24a4 4 0 0 1-4-4m212 4H100v-56h136v52a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSolarRoofThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortAscendingThinIcon],svg[ph-sort-ascending-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 128a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4M48 68h136a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8m56 120H48a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8m122.83-22.83a4 4 0 0 0-5.66 0L188 198.34V112a4 4 0 0 0-8 0v86.34l-33.17-33.17a4 4 0 0 0-5.66 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhSortAscendingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortDescendingThinIcon],svg[ph-sort-descending-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 128a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4m4-60h56a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8m136 120H48a4 4 0 0 0 0 8h136a4 4 0 0 0 0-8m42.83-102.83l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66L180 57.66V144a4 4 0 0 0 8 0V57.66l33.17 33.17a4 4 0 1 0 5.66-5.66"></svg:path>`,
})
export class PhSortDescendingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoundcloudLogoThinIcon],svg[ph-soundcloud-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 120v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m28-28a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4m32-8a4 4 0 0 0-4 4v104a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m32-32a4 4 0 0 0-4 4v136a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4m107.27 57.46A76 76 0 0 0 144 44a4 4 0 0 0 0 8a67.75 67.75 0 0 1 67.66 61.13a4 4 0 0 0 3.22 3.53A36 36 0 0 1 208 188h-64a4 4 0 0 0 0 8h64a44 44 0 0 0 11.27-86.54"></svg:path>`,
})
export class PhSoundcloudLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpadeThinIcon],svg[ph-spade-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.56 52.93a281 281 0 0 0-48.77-32.51a4 4 0 0 0-3.58 0a281 281 0 0 0-48.77 32.51C45.1 79.88 28 108.61 28 136a52 52 0 0 0 76.46 45.89l-12.29 41A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-12.29-41A52 52 0 0 0 228 136c0-27.39-17.1-56.12-49.44-83.07M176 180a44 44 0 0 1-28.92-10.84a4 4 0 0 0-6.46 4.17l14 46.67h-53.24l14-46.67a4 4 0 0 0-6.46-4.17A44 44 0 0 1 36 136c0-56.06 79-100.56 92-107.49c13 6.93 92 51.38 92 107.49a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhSpadeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSparkleThinIcon],svg[ph-sparkle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m196.2 132.81l-53.36-19.65l-19.65-53.36a11.93 11.93 0 0 0-22.38 0l-19.65 53.36l-53.36 19.65a11.93 11.93 0 0 0 0 22.38l53.36 19.65l19.65 53.36a11.93 11.93 0 0 0 22.38 0l19.65-53.36l53.36-19.65a11.93 11.93 0 0 0 0-22.38m-2.77 14.87L138.35 168a4 4 0 0 0-2.37 2.37l-20.3 55.08a3.92 3.92 0 0 1-7.36 0L88 170.35a4 4 0 0 0-2.35-2.35l-55.08-20.3a3.92 3.92 0 0 1 0-7.36L85.65 120a4 4 0 0 0 2.35-2.35l20.3-55.08a3.92 3.92 0 0 1 7.36 0L136 117.65a4 4 0 0 0 2.37 2.37l55.08 20.3a3.92 3.92 0 0 1 0 7.36ZM148 40a4 4 0 0 1 4-4h20V16a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0V44h-20a4 4 0 0 1-4-4m96 48a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0V92h-12a4 4 0 0 1 0-8h12V72a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSparkleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHifiThinIcon],svg[ph-speaker-hifi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM120 76a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 40a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhSpeakerHifiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHighThinIcon],svg[ph-speaker-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.76 28.41a4 4 0 0 0-4.22.43L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 156 224V32a4 4 0 0 0-2.24-3.59M28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4m120 55.82L84 166V90l64-49.78Zm47-111.61a36 36 0 0 1 0 47.59a4 4 0 1 1-6-5.3a28 28 0 0 0 0-37a4 4 0 0 1 6-5.28ZM244 128a75.88 75.88 0 0 1-19.35 50.67a4 4 0 0 1-6-5.34a68 68 0 0 0 0-90.66a4 4 0 0 1 6-5.34A75.88 75.88 0 0 1 244 128"></svg:path>`,
})
export class PhSpeakerHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerLowThinIcon],svg[ph-speaker-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.76 28.41a4 4 0 0 0-4.22.43L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 156 224V32a4 4 0 0 0-2.24-3.59M28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4m120 55.82L84 166V90l64-49.78ZM204 128a36 36 0 0 1-9 23.82a4 4 0 1 1-6-5.3a28 28 0 0 0 0-37a4 4 0 0 1 6-5.28a36 36 0 0 1 9 23.76"></svg:path>`,
})
export class PhSpeakerLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerNoneThinIcon],svg[ph-speaker-none-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.76 28.41a4 4 0 0 0-4.22.43L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 156 224V32a4 4 0 0 0-2.24-3.59M28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4m120 55.82L84 166V90l64-49.78Z"></svg:path>`,
})
export class PhSpeakerNoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleHighThinIcon],svg[ph-speaker-simple-high-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.76 28.41a4 4 0 0 0-4.22.43L86.63 84H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 164 224V32a4 4 0 0 0-2.24-3.59M156 215.82l-65.54-51A4.06 4.06 0 0 0 88 164H40a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4.06 4.06 0 0 0 2.46-.84l65.54-51ZM204 104v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m32-16v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhSpeakerSimpleHighThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleLowThinIcon],svg[ph-speaker-simple-low-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.76 28.41a4 4 0 0 0-4.22.43L86.63 84H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 164 224V32a4 4 0 0 0-2.24-3.59M156 215.82l-65.54-51A4.06 4.06 0 0 0 88 164H40a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4.06 4.06 0 0 0 2.46-.84l65.54-51ZM204 104v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhSpeakerSimpleLowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleNoneThinIcon],svg[ph-speaker-simple-none-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.76 28.41a4 4 0 0 0-4.22.43L86.63 84H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 164 224V32a4 4 0 0 0-2.24-3.59M156 215.82l-65.54-51A4.06 4.06 0 0 0 88 164H40a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4.06 4.06 0 0 0 2.46-.84l65.54-51Z"></svg:path>`,
})
export class PhSpeakerSimpleNoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleSlashThinIcon],svg[ph-speaker-simple-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 152v-48a4 4 0 0 1 8 0v48a4 4 0 0 1-8 0m36-68a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m-13 129.31a4 4 0 1 1-5.92 5.38l-49-53.94V224a4 4 0 0 1-2.24 3.59a3.9 3.9 0 0 1-1.84.41a4.07 4.07 0 0 1-2.46-.84L86.63 172H40a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h50.59L53 42.69a4 4 0 0 1 6-5.38ZM156 156L97.87 92H40a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h48a4.06 4.06 0 0 1 2.46.84l65.54 51Zm-33.39-89.8l33.39-26v66.65a4 4 0 0 0 8 0V32a4 4 0 0 0-6.46-3.16l-39.85 31a4 4 0 1 0 4.92 6.31Z"></svg:path>`,
})
export class PhSpeakerSimpleSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleXThinIcon],svg[ph-speaker-simple-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.76 28.41a4 4 0 0 0-4.22.43L86.63 84H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 164 224V32a4 4 0 0 0-2.24-3.59M156 215.82l-65.54-51A4.06 4.06 0 0 0 88 164H40a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4.06 4.06 0 0 0 2.46-.84l65.54-51Zm94.83-66.65a4 4 0 0 1-5.66 5.66L224 133.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L218.34 128l-21.17-21.17a4 4 0 0 1 5.66-5.66L224 122.34l21.17-21.17a4 4 0 1 1 5.66 5.66L229.66 128Z"></svg:path>`,
})
export class PhSpeakerSimpleXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSlashThinIcon],svg[ph-speaker-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l36 39.5L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 156 224v-59.25l49 53.94a4 4 0 1 0 5.92-5.38ZM28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4m120 55.82L84 166V90l2.35-1.83L148 156Zm41-69.3a28 28 0 0 0 0-37a4 4 0 1 1 6-5.29a36 36 0 0 1 0 47.59a4 4 0 1 1-6-5.29Zm-80-81.07a4 4 0 0 1 .7-5.61l39.85-31A4 4 0 0 1 156 32v74.83a4 4 0 0 1-8 0V40.18l-33.39 26a4 4 0 0 1-5.61-.73M244 128a75.88 75.88 0 0 1-19.35 50.67a4 4 0 0 1-6-5.34a68 68 0 0 0 0-90.66a4 4 0 0 1 6-5.34A75.88 75.88 0 0 1 244 128"></svg:path>`,
})
export class PhSpeakerSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerXThinIcon],svg[ph-speaker-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.76 28.41a4 4 0 0 0-4.22.43L78.63 84H32a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h46.63l70.91 55.16a4.07 4.07 0 0 0 2.46.84a3.9 3.9 0 0 0 1.76-.41A4 4 0 0 0 156 224V32a4 4 0 0 0-2.24-3.59M28 160V96a4 4 0 0 1 4-4h44v72H32a4 4 0 0 1-4-4m120 55.82L84 166V90l64-49.78Zm94.83-66.65a4 4 0 0 1-5.66 5.66L216 133.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L210.34 128l-21.17-21.17a4 4 0 0 1 5.66-5.66L216 122.34l21.17-21.17a4 4 0 1 1 5.66 5.66L221.66 128Z"></svg:path>`,
})
export class PhSpeakerXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeedometerThinIcon],svg[ph-speedometer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m117.17 157.17l96-96a4 4 0 1 1 5.66 5.66l-96 96a4 4 0 0 1-5.66-5.66M128 84a68 68 0 0 1 21.72 3.54a4 4 0 1 0 2.55-7.54A76 76 0 0 0 52 152a79 79 0 0 0 .46 8.44a4 4 0 0 0 4 3.56h.45a4 4 0 0 0 3.54-4.42A68 68 0 0 1 128 84m96.17 18.82a4 4 0 1 0-7.11 3.64a100.34 100.34 0 0 1 5.26 78.84a4 4 0 0 1-3.79 2.7H37.46a4.07 4.07 0 0 1-3.8-2.74A100.05 100.05 0 0 1 173.54 62.94a4 4 0 1 0 3.64-7.12A107 107 0 0 0 129 44h-1A108.06 108.06 0 0 0 26.12 187.92A12.07 12.07 0 0 0 37.46 196h181.07a12 12 0 0 0 11.34-8a108.3 108.3 0 0 0-5.7-85.14Z"></svg:path>`,
})
export class PhSpeedometerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSphereThinIcon],svg[ph-sphere-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100c0 10.16-22.26 21.21-57.11 25.8c.72-8.18 1.11-16.8 1.11-25.8c0-41.16-8.07-75-20.28-90.65A92.14 92.14 0 0 1 220 128m-92-92c13.24 0 28 37.78 28 92c0 9.45-.46 18.39-1.27 26.73c-8.34.81-17.28 1.27-26.73 1.27c-54.22 0-92-14.76-92-28a92.1 92.1 0 0 1 92-92M37.35 143.72C53 155.93 86.84 164 128 164c9 0 17.62-.39 25.8-1.11C149.21 197.74 138.16 220 128 220a92.14 92.14 0 0 1-90.65-76.28m106.37 74.93c8.63-11.06 15.19-31.22 18.3-56.63c25.41-3.11 45.57-9.67 56.63-18.3a92.23 92.23 0 0 1-74.93 74.93"></svg:path>`,
})
export class PhSphereThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerBallThinIcon],svg[ph-spinner-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.92 96.44c-33.69 24.71-58.55 15.45-83.94 3c23.54-15.86 45.85-33.95 43.34-75.81a92 92 0 0 1 40.6 72.81m-49.06-77.83C175.4 88.13 155 105 131.55 120.83c-2-28.32-6.47-56.69-44-75.45a91.87 91.87 0 0 1 83.3 1.23ZM79 50.18c38.22 16.83 42.63 43 44.58 71.16c-25.5-12.46-52.33-22.75-87.34.38A92.07 92.07 0 0 1 79 50.18m-42.9 81.38c33.69-24.71 58.55-15.45 83.94-3.05c-23.54 15.86-45.85 34-43.34 75.81a92 92 0 0 1-40.62-72.76Zm49.06 77.83C80.6 167.87 101 151 124.45 135.17c2 28.32 6.47 56.69 44 75.45a91.87 91.87 0 0 1-83.3-1.23Zm91.84-3.57c-38.22-16.83-42.63-43-44.58-71.16c14.43 7.05 29.29 13.41 45.81 13.41c12.67 0 26.33-3.74 41.53-13.78A92.06 92.06 0 0 1 177 205.82"></svg:path>`,
})
export class PhSpinnerBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerGapThinIcon],svg[ph-spinner-gap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 32v32a4 4 0 0 1-8 0V32a4 4 0 0 1 8 0m92 92h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-47.92 46.43a4 4 0 1 0-5.65 5.65l22.62 22.63a4 4 0 0 0 5.66-5.66ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-48.08-17.57l-22.63 22.62a4 4 0 0 0 5.71 5.66l22.62-22.63a4 4 0 1 0-5.65-5.65ZM68 128a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h32a4 4 0 0 0 4-4m-5-70.71A4 4 0 0 0 57.29 63l22.63 22.57a4 4 0 1 0 5.65-5.65Z"></svg:path>`,
})
export class PhSpinnerGapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerThinIcon],svg[ph-spinner-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 32v32a4 4 0 0 1-8 0V32a4 4 0 0 1 8 0m41.25 54.75a4 4 0 0 0 2.83-1.18L198.71 63a4 4 0 0 0-5.66-5.66l-22.62 22.58a4 4 0 0 0 2.82 6.83M224 124h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-47.92 46.43a4 4 0 1 0-5.65 5.65l22.62 22.63a4 4 0 0 0 5.66-5.66ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-48.08-17.57l-22.63 22.62a4 4 0 0 0 5.71 5.66l22.62-22.63a4 4 0 1 0-5.65-5.65ZM68 128a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h32a4 4 0 0 0 4-4m-5-70.71A4 4 0 0 0 57.29 63l22.63 22.57a4 4 0 1 0 5.65-5.65Z"></svg:path>`,
})
export class PhSpinnerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpiralThinIcon],svg[ph-spiral-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 144a4 4 0 0 1-8 0A100.11 100.11 0 0 0 136 44a92.1 92.1 0 0 0-92 92a84.09 84.09 0 0 0 84 84a76.08 76.08 0 0 0 76-76a68.07 68.07 0 0 0-68-68a60.07 60.07 0 0 0-60 60a52.06 52.06 0 0 0 52 52a44.05 44.05 0 0 0 44-44a36 36 0 0 0-36-36a28 28 0 0 0-28 28a20 20 0 0 0 20 20a12 12 0 0 0 12-12a4 4 0 0 0-4-4a4 4 0 0 1 0-8a12 12 0 0 1 12 12a20 20 0 0 1-20 20a28 28 0 0 1-28-28a36 36 0 0 1 36-36a44.05 44.05 0 0 1 44 44a52.06 52.06 0 0 1-52 52a60.07 60.07 0 0 1-60-60a68.07 68.07 0 0 1 68-68a76.08 76.08 0 0 1 76 76a84.09 84.09 0 0 1-84 84a92.1 92.1 0 0 1-92-92A100.11 100.11 0 0 1 136 36a108.12 108.12 0 0 1 108 108"></svg:path>`,
})
export class PhSpiralThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitHorizontalThinIcon],svg[ph-split-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 48v160a4 4 0 0 1-8 0v-76H33.66l25.17 25.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L33.66 124H100V48a4 4 0 0 1 8 0m126.83 77.17l-32-32a4 4 0 0 0-5.66 5.66L222.34 124H156V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-76h66.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhSplitHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitVerticalThinIcon],svg[ph-split-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 152a4 4 0 0 1-4 4h-76v66.34l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 222.34V156H48a4 4 0 0 1 0-8h160a4 4 0 0 1 4 4M48 108h160a4 4 0 0 0 0-8h-76V33.66l25.17 25.17a4 4 0 1 0 5.66-5.66l-32-32a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L124 33.66V100H48a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhSplitVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpotifyLogoThinIcon],svg[ph-spotify-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m27.54-52.13a4 4 0 0 1-5.41 1.67a46.73 46.73 0 0 0-44.26 0a4.1 4.1 0 0 1-1.87.46a4 4 0 0 1-1.87-7.54a55.39 55.39 0 0 1 51.74 0a4 4 0 0 1 1.67 5.41m32-56a4 4 0 0 1-5.41 1.65a114.67 114.67 0 0 0-108.24 0a4 4 0 0 1-3.76-7.06a122.65 122.65 0 0 1 115.76 0a4 4 0 0 1 1.64 5.41Zm-16 28a4 4 0 0 1-5.41 1.65a81 81 0 0 0-76.24 0a4 4 0 0 1-3.76-7.06a89 89 0 0 1 83.76 0a4 4 0 0 1 1.64 5.42Z"></svg:path>`,
})
export class PhSpotifyLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSprayBottleThinIcon],svg[ph-spray-bottle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76a4 4 0 0 0 4-4a52.06 52.06 0 0 0-52-52H80a12 12 0 0 0-12 12v48a28 28 0 0 1-28 28a4 4 0 0 0 0 8a36 36 0 0 0 36-36v-4h40v28.62a27.85 27.85 0 0 1-10.51 21.86l-16 12.79A35.8 35.8 0 0 0 76 167.38V224a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-12.53A266.86 266.86 0 0 0 167.09 76ZM76 32a4 4 0 0 1 4-4h72a44.06 44.06 0 0 1 43.82 40H76Zm120 179.47V224a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4v-56.62a27.85 27.85 0 0 1 10.51-21.86l16-12.79A35.8 35.8 0 0 0 124 104.62V76h33.76A258.83 258.83 0 0 1 196 211.47"></svg:path>`,
})
export class PhSprayBottleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfBottomThinIcon],svg[ph-square-half-bottom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4m52 80v72H84v-72Zm8 0h24v72h-24Zm32 0h24v72h-24Zm-96 68v-68h24v72H56a4 4 0 0 1-4-4m148 4h-20v-72h24v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSquareHalfBottomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfThinIcon],svg[ph-square-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m-68 72h72v24h-72Zm0-8V84h72v24Zm0 40h72v24h-72Zm72-92v20h-72V52h68a4 4 0 0 1 4 4M52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4m148 4h-68v-24h72v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSquareHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareLogoThinIcon],svg[ph-square-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM160 92H96a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-4 64h-56v-56h56Z"></svg:path>`,
})
export class PhSquareLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalThinIcon],svg[ph-square-split-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-68V52h68a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSquareSplitHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitVerticalThinIcon],svg[ph-square-split-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4m144 152H56a4 4 0 0 1-4-4v-68h152v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSquareSplitVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareThinIcon],svg[ph-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquaresFourThinIcon],svg[ph-squares-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 44H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-100 36H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSquaresFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackMinusThinIcon],svg[ph-stack-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 200a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-14-75.46l-94 54.83l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l96-56a4 4 0 1 0-4-6.92M28 80a4 4 0 0 1 2-3.46l96-56a4 4 0 0 1 4 0l96 56a4 4 0 0 1 0 6.92l-96 56a4 4 0 0 1-4 0l-96-56A4 4 0 0 1 28 80m11.94 0L128 131.37L216.06 80L128 28.63ZM142 219.21l-14 8.16l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l16-9.34a4 4 0 1 0-4-6.91"></svg:path>`,
})
export class PhStackMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackOverflowLogoThinIcon],svg[ph-stack-overflow-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 152.09V216a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-63.91a4 4 0 0 1 8 0V212h152v-59.91a4 4 0 0 1 8 0m-124 28h80a4 4 0 1 0 0-8H88a4 4 0 1 0 0 8m5.92-52.86l77.27 20.67a3.7 3.7 0 0 0 1 .14a4 4 0 0 0 1-7.85L96 119.47a4 4 0 1 0-2.07 7.72Zm19.41-49.54l69.28 39.95a4 4 0 1 0 4-6.92l-69.28-39.99a4 4 0 1 0-4 6.92Zm88.16 13.66a4 4 0 0 0 5.66-5.64l-56.57-56.5a4 4 0 1 0-5.66 5.65Z"></svg:path>`,
})
export class PhStackOverflowLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackPlusThinIcon],svg[ph-stack-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 200a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-14-75.46l-94 54.83l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l96-56a4 4 0 1 0-4-6.92M28 80a4 4 0 0 1 2-3.46l96-56a4 4 0 0 1 4 0l96 56a4 4 0 0 1 0 6.92l-96 56a4 4 0 0 1-4 0l-96-56A4 4 0 0 1 28 80m11.94 0L128 131.37L216.06 80L128 28.63ZM142 219.21l-14 8.16l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l16-9.34a4 4 0 1 0-4-6.91"></svg:path>`,
})
export class PhStackPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleThinIcon],svg[ph-stack-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 107.47l112 64a4 4 0 0 0 4 0l112-64a4 4 0 0 0 0-6.94l-112-64a4 4 0 0 0-4 0l-112 64a4 4 0 0 0 0 6.94m114-62.86L231.94 104L128 163.39L24.06 104ZM243.47 142a4 4 0 0 1-1.49 5.45l-112 64a4 4 0 0 1-4 0l-112-64a4 4 0 0 1 4-6.94l110 62.86l110-62.86a4 4 0 0 1 5.49 1.49"></svg:path>`,
})
export class PhStackSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackThinIcon],svg[ph-stack-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.45 174a4 4 0 0 1-1.44 5.48l-96 56a4 4 0 0 1-4 0l-96-56a4 4 0 0 1 4-6.92l94 54.83l94-54.83a4 4 0 0 1 5.44 1.44M222 124.54l-94 54.83l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l96-56a4 4 0 0 0-4-6.92M28 80a4 4 0 0 1 2-3.46l96-56a4 4 0 0 1 4 0l96 56a4 4 0 0 1 0 6.92l-96 56a4 4 0 0 1-4 0l-96-56A4 4 0 0 1 28 80m11.94 0L128 131.37L216.06 80L128 28.63Z"></svg:path>`,
})
export class PhStackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStairsThinIcon],svg[ph-stairs-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-48 112h52v32h-96v-32Zm4-8v-32h48v32ZM56 36h144a4 4 0 0 1 4 4v52h-52a4 4 0 0 0-4 4v36h-44a4 4 0 0 0-4 4v36H52V40a4 4 0 0 1 4-4m144 184H56a4 4 0 0 1-4-4v-36h152v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhStairsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStampThinIcon],svg[ph-stamp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 224a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m0-80v40a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h61.37L92.63 53.87A28 28 0 0 1 120 20h16a28 28 0 0 1 27.38 33.87L146.63 132H208a12 12 0 0 1 12 12m-102.45-12h20.9l17.1-79.81A20 20 0 0 0 136 28h-16a20 20 0 0 0-19.56 24.19ZM212 144a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhStampThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStandardDefinitionThinIcon],svg[ph-standard-definition-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 76a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h24a52 52 0 0 0 0-104Zm68 52a44.05 44.05 0 0 1-44 44h-20V84h20a44.05 44.05 0 0 1 44 44M28 48a4 4 0 0 1 4-4h192a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m200 160a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4m-120-56c0-12.58-11.79-16.92-29.78-22.11C63 125.51 45.78 120.54 45.78 104c0-16 14.71-28 34.22-28c14.21 0 26.3 6.46 31.55 16.85a4 4 0 1 1-7.13 3.61C100.53 88.78 91.17 84 80 84c-15 0-26.22 8.6-26.22 20c0 9.81 10.07 13.43 26.66 18.21S116 132.46 116 152c0 15.44-16.15 28-36 28s-36-12.56-36-28a4 4 0 0 1 8 0c0 11 12.56 20 28 20s28-9 28-20"></svg:path>`,
})
export class PhStandardDefinitionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarAndCrescentThinIcon],svg[ph-star-and-crescent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153.82 53.16a4 4 0 0 0 0-7.13A91.1 91.1 0 0 0 112 36a92 92 0 0 0 0 184a91.1 91.1 0 0 0 41.82-10a4 4 0 0 0 0-7.13a84 84 0 0 1 0-149.68ZM100 128a91.63 91.63 0 0 0 43.21 78a83.2 83.2 0 0 1-31.21 6a84 84 0 0 1 0-168a83.2 83.2 0 0 1 31.21 6A91.63 91.63 0 0 0 100 128m149.58-3.67l-28.71-12.4l-2.49-32.24a4 4 0 0 0-7.08-2.24l-20.19 24.46L161 94.45a4 4 0 0 0-4.41 5.91L172.82 128l-16.27 27.64a4 4 0 0 0 4.41 5.91l30.15-7.46l20.19 24.46a4 4 0 0 0 3.09 1.45a3.8 3.8 0 0 0 1.2-.19a4 4 0 0 0 2.79-3.5l2.49-32.24l28.71-12.4a4 4 0 0 0 0-7.34m-34.1 13.35a4 4 0 0 0-2.4 3.36l-1.92 24.77l-15.49-18.76a4 4 0 0 0-3.08-1.45a4 4 0 0 0-1 .12l-23.36 5.78l12.68-21.5a4 4 0 0 0 0-4.06l-12.64-21.44l23.36 5.78a4 4 0 0 0 4-1.33l15.49-18.76l1.96 24.81a4 4 0 0 0 2.4 3.36L237.9 128Z"></svg:path>`,
})
export class PhStarAndCrescentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarFourThinIcon],svg[ph-star-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.13 116.77l-65.19-23.71l-23.71-65.19a11.95 11.95 0 0 0-22.46 0L93.06 93.06l-65.19 23.71a11.95 11.95 0 0 0 0 22.46l65.19 23.71l23.71 65.19a11.95 11.95 0 0 0 22.46 0l23.71-65.19l65.19-23.71a11.95 11.95 0 0 0 0-22.46m-2.73 15l-67 24.34a4 4 0 0 0-2.39 2.39l-24.34 67a4 4 0 0 1-7.44 0l-24.34-67a4 4 0 0 0-2.39-2.39l-66.9-24.39a4 4 0 0 1 0-7.44l66.95-24.34a4 4 0 0 0 2.39-2.39l24.34-66.95a4 4 0 0 1 7.44 0l24.34 66.95a4 4 0 0 0 2.39 2.39l67 24.34a4 4 0 0 1 0 7.44Z"></svg:path>`,
})
export class PhStarFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarHalfThinIcon],svg[ph-star-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.66 111.81l-5.06 4.36a4 4 0 1 1-5.22-6.06l5.05-4.36a4.37 4.37 0 0 0 1.32-4.77a4.29 4.29 0 0 0-3.81-3l-8.27-.67a4 4 0 1 1 .64-8l8.28.67a12.45 12.45 0 0 1 7.07 21.84Zm-55.19 39.89l4.08 17.21a4 4 0 0 0 3.88 3.08a3.7 3.7 0 0 0 .93-.11a4 4 0 0 0 3-4.81l-3.52-14.85l9.79-8.45a4 4 0 0 0-5.22-6.06l-11.63 10a4 4 0 0 0-1.31 3.99m21.34 55.37a4 4 0 0 0-7.79 1.84l1.32 5.58a4.38 4.38 0 0 1-1.71 4.65a4.26 4.26 0 0 1-4.82.18l-6.72-4.13a4 4 0 1 0-4.19 6.81l6.72 4.13a12.4 12.4 0 0 0 18.51-13.49Zm-22.14-113L160 92.79a4 4 0 0 1-3.38-2.46L132 30.73v-.09v156.2l9.34 5.74a4 4 0 0 1-4.2 6.82l-9.14-5.63l-52.62 32.36a12.4 12.4 0 0 1-18.51-13.49l14.32-60.42l-46.85-40.41A12.45 12.45 0 0 1 31.41 90l61.47-5l23.68-57.34a12.37 12.37 0 0 1 22.88 0L163.12 85l13.2 1.06a4 4 0 0 1-.65 8ZM124 186.84V30.64v.09l-24.66 59.6A4 4 0 0 1 96 92.79L32.06 98a4.29 4.29 0 0 0-3.81 3a4.37 4.37 0 0 0 1.32 4.77l48.68 42a4 4 0 0 1 1.28 3.95l-14.87 62.77a4.38 4.38 0 0 0 1.71 4.65a4.28 4.28 0 0 0 4.82.18Z"></svg:path>`,
})
export class PhStarHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarOfDavidThinIcon],svg[ph-star-of-david-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m196.61 128l30.86-54a4 4 0 0 0-3.47-6h-61.67l-30.86-54a4 4 0 0 0-6.94 0L93.66 68H32a4 4 0 0 0-3.47 6l30.85 54l-30.85 54a4 4 0 0 0 3.47 6h61.66l30.87 54a4 4 0 0 0 6.94 0l30.86-54H224a4 4 0 0 0 3.47-6Zm20.5-52L192 119.94L166.9 76Zm-29.72 52l-29.7 52H98.3l-29.71-52L98.3 76h59.39ZM128 24.06l25.12 44h-50.25ZM38.89 76h50.19L64 119.94Zm0 103.92L64 136.06L89.08 180Zm89.11 52l-25.13-44h50.25ZM166.9 180l25.1-43.94L217.11 180Z"></svg:path>`,
})
export class PhStarOfDavidThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarThinIcon],svg[ph-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.36 98.49A12.21 12.21 0 0 0 224.59 90l-61.47-5l-23.68-57.33a12.37 12.37 0 0 0-22.88 0L92.88 85l-61.47 5a12.45 12.45 0 0 0-7.07 21.84l46.85 40.41l-14.32 60.39a12.35 12.35 0 0 0 18.51 13.49L128 193.77l52.62 32.36a12.12 12.12 0 0 0 13.69-.51a12.28 12.28 0 0 0 4.82-13l-14.32-60.42l46.85-40.41a12.29 12.29 0 0 0 3.7-13.3m-8.93 7.26l-48.68 42a4 4 0 0 0-1.28 3.95l14.87 62.79a4.37 4.37 0 0 1-1.72 4.65a4.24 4.24 0 0 1-4.81.18l-54.71-33.65a4 4 0 0 0-4.2 0l-54.71 33.65a4.24 4.24 0 0 1-4.81-.18a4.37 4.37 0 0 1-1.72-4.65l14.87-62.79a4 4 0 0 0-1.28-3.95l-48.68-42a4.37 4.37 0 0 1-1.32-4.75a4.31 4.31 0 0 1 3.81-3L96 92.79a4 4 0 0 0 3.38-2.46L124 30.73a4.35 4.35 0 0 1 8.08 0l24.62 59.6a4 4 0 0 0 3.3 2.46l63.9 5.15a4.31 4.31 0 0 1 3.81 3a4.37 4.37 0 0 1-1.28 4.81"></svg:path>`,
})
export class PhStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteamLogoThinIcon],svg[ph-steam-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m-12.88 154.62l61.21-49.93a32 32 0 1 0-45-45l-45.85 56.14L40.68 99a91.6 91.6 0 1 1-2.46 8.86l42.23 42.23a24 24 0 0 0 34.67 32.51Zm8.91-73.4A32 32 0 0 0 154.78 140L124 165.09V164a24 24 0 0 0-24-24h-1.09ZM156 132a24 24 0 1 1 24-24a24 24 0 0 1-24 24m-56 16a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhSteamLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteeringWheelThinIcon],svg[ph-steering-wheel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 148a8 8 0 1 1 8-8a8 8 0 0 1-8 8m100-20A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-192 0q0 4.53.44 8.94a131.94 131.94 0 0 1 183.12 0q.44-4.41.44-8.94a92 92 0 0 0-184 0m77.75 90.9L94.2 166.6a4 4 0 0 0-3.75-2.6H43.34a92.31 92.31 0 0 0 70.41 54.9M128 220c1.78 0 3.55-.06 5.3-.16l21-56.05a12 12 0 0 1 11.25-7.79h50.09a92 92 0 0 0 2.43-9.21a124 124 0 0 0-180.14 0a92 92 0 0 0 2.43 9.21h50.09a12 12 0 0 1 11.24 7.8l21 56c1.73.14 3.51.2 5.31.2m84.66-56h-47.11a4 4 0 0 0-3.75 2.6l-19.6 52.3a92.26 92.26 0 0 0 70.46-54.9"></svg:path>`,
})
export class PhSteeringWheelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStepsThinIcon],svg[ph-steps-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 56a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4H76v44a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h52v-44a4 4 0 0 1 4-4h52v-44a4 4 0 0 1 4-4h52V56a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhStepsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStethoscopeThinIcon],svg[ph-stethoscope-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 160a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-4.17 35.79A44.06 44.06 0 0 1 168 236h-24a44.05 44.05 0 0 1-44-44v-44.15A60 60 0 0 1 44 88V40a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8H52v44a52 52 0 0 0 52.69 52C133 139.63 156 115.93 156 87.17V44h-20a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4v47.17c0 32-24.84 58.59-56 60.69V192a36 36 0 0 0 36 36h24a36.05 36.05 0 0 0 35.8-32.25a36 36 0 1 1 8 0ZM236 160a28 28 0 1 0-28 28a28 28 0 0 0 28-28"></svg:path>`,
})
export class PhStethoscopeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStickerThinIcon],svg[ph-sticker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 36H88a52.06 52.06 0 0 0-52 52v80a52.06 52.06 0 0 0 52 52h48a3.8 3.8 0 0 0 1.26-.21c25.46-8.48 74.05-57.07 82.53-82.53A3.8 3.8 0 0 0 220 136V88a52.06 52.06 0 0 0-52-52M44 168V88a44.05 44.05 0 0 1 44-44h80a44.05 44.05 0 0 1 44 44v44h-28a52.06 52.06 0 0 0-52 52v28H88a44.05 44.05 0 0 1-44-44m96 42v-26a44.05 44.05 0 0 1 44-44h26c-11.1 22.23-47.77 58.9-70 70"></svg:path>`,
})
export class PhStickerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStoolThinIcon],svg[ph-stool-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h11.32L60.05 223.38a4 4 0 0 0 3.33 4.62a4.5 4.5 0 0 0 .62 0a4 4 0 0 0 4-3.38L76.26 172h103.48l8.31 52.62A4 4 0 0 0 192 228a4.5 4.5 0 0 0 .63-.05a4 4 0 0 0 3.33-4.57L172.68 76H184a12 12 0 0 0 12-12M68 64V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4m110.48 100h-101l13.9-88h73.16Z"></svg:path>`,
})
export class PhStoolThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopCircleThinIcon],svg[ph-stop-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-128H96a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-4 64h-56v-56h56Z"></svg:path>`,
})
export class PhStopCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopThinIcon],svg[ph-stop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhStopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStorefrontThinIcon],svg[ph-storefront-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.15 95a3.8 3.8 0 0 0-.15 1v16a36 36 0 0 0 16 29.92V216a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-74.08A36 36 0 0 0 228 112V96a3.8 3.8 0 0 0-.17-1.08L213.5 44.7A12 12 0 0 0 202 36H54a12 12 0 0 0-11.5 8.7Zm22-48.08A4 4 0 0 1 54 44h148a4 4 0 0 1 3.84 2.9L218.7 92H37.3ZM100 100h56v12a28 28 0 0 1-56 0Zm-64 12v-12h56v12a28 28 0 0 1-41.37 24.59a4 4 0 0 0-1.31-.76A28 28 0 0 1 36 112m168 100H52v-66.06a36 36 0 0 0 44-17.48a36 36 0 0 0 64 0a36 36 0 0 0 44 17.48Zm2.68-76.17a3.9 3.9 0 0 0-1.3.76A28 28 0 0 1 164 112v-12h56v12a28 28 0 0 1-13.32 23.83"></svg:path>`,
})
export class PhStorefrontThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStrategyThinIcon],svg[ph-strategy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 156a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24M45.17 109.17L62.34 92L45.17 74.83a4 4 0 0 1 5.66-5.66L68 86.34l17.17-17.17a4 4 0 0 1 5.66 5.66L73.66 92l17.17 17.17a4 4 0 0 1-5.66 5.66L68 97.66l-17.17 17.17a4 4 0 0 1-5.66-5.66m181.66 96a4 4 0 0 1-5.66 5.66L204 193.66l-17.17 17.17a4 4 0 0 1-5.66-5.66L198.34 188l-17.17-17.17a4 4 0 0 1 5.66-5.66L204 182.34l17.17-17.17a4 4 0 0 1 5.66 5.66L209.66 188Zm-46.21-93.41c-5.82 21-23.77 39.15-43.65 44.12a4 4 0 0 1-1 .12a4 4 0 0 1-1-7.88c16.94-4.24 32.87-20.42 37.88-38.49c3.47-12.53 3.55-31.51-15.74-50.8L148 49.66V80a4 4 0 0 1-8 0V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8h-30.34l9.17 9.17c17.17 17.18 23.5 37.99 17.79 58.59"></svg:path>`,
})
export class PhStrategyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStripeLogoThinIcon],svg[ph-stripe-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 152c0 15.44-16.15 28-36 28s-36-12.56-36-28a4 4 0 0 1 8 0c0 11 12.56 20 28 20s28-9 28-20c0-12.58-11.79-16.92-29.78-22.11c-15.22-4.38-32.44-9.35-32.44-25.89c0-16 14.71-28 34.22-28c14.2 0 26.3 6.46 31.55 16.85a4 4 0 1 1-7.13 3.61C148.53 88.78 139.17 84 128 84c-15 0-26.22 8.6-26.22 20c0 9.81 10.07 13.43 26.66 18.21S164 132.46 164 152m56-104v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhStripeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStudentThinIcon],svg[ph-student-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.27 60.21l-96-32a4 4 0 0 0-2.54 0l-96 32A4 4 0 0 0 28 64v80a4 4 0 0 0 8 0V69.55l43.88 14.63a60 60 0 0 0 24.54 91c-20.86 5.74-39 19.13-51.77 38.65a4 4 0 0 0 6.7 4.36C75.17 193.92 100.2 180 128 180s52.83 13.92 68.65 38.18a4 4 0 0 0 6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60 60 0 0 0 24.54-91l49.15-16.39a4 4 0 0 0 0-7.58ZM180 120a52 52 0 1 1-92.07-33.14l38.8 12.93a3.95 3.95 0 0 0 2.54 0l38.8-12.93A51.85 51.85 0 0 1 180 120m-52-28.22L44.65 64L128 36.22L211.35 64Z"></svg:path>`,
})
export class PhStudentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfThinIcon],svg[ph-subset-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-4-44h-96a52 52 0 0 1 0-104h96a4 4 0 0 0 0-8h-96a60 60 0 0 0 0 120h96a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSubsetOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfThinIcon],svg[ph-subset-proper-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 208a4 4 0 0 1-4 4h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76 76 0 0 0 0 152h72a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSubsetProperOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesSlashThinIcon],svg[ph-subtitles-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 136a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m159 77.31a4 4 0 1 1-5.92 5.38L191.69 204H32a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h21.5L45 42.69a4 4 0 0 1 6-5.38ZM184.41 196l-21.82-24H56a4 4 0 0 1 0-8h99.32l-21.82-24H104a4 4 0 0 1 0-8h22.23L60.78 60H32a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4ZM200 140a4 4 0 0 0 0-8h-21.48a4 4 0 1 0 0 8Zm24-88H105.79a4 4 0 0 0 0 8H224a4 4 0 0 1 4 4v130.83a4 4 0 1 0 8 0V64a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhSubtitlesSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesThinIcon],svg[ph-subtitles-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM52 136a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-96a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m-48 32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m48 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSubtitlesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractSquareThinIcon],svg[ph-subtract-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-54.34 120l-48-48h44.68l48 48Zm2.34-53.66v-44.68l48 48v44.68ZM212 100v50.34l-48-48V100ZM44 44h112v112H44Zm56 120h2.34l48 48H100Z"></svg:path>`,
})
export class PhSubtractSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractThinIcon],svg[ph-subtract-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.17 84.82a76 76 0 1 0-86.35 86.35a76 76 0 1 0 86.35-86.35M228 160a68.6 68.6 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.94A67.79 67.79 0 0 1 228 160m-81.19-7.54l58.33 58.34A68.1 68.1 0 0 1 182 224.33l-57.78-57.78a76.4 76.4 0 0 0 22.59-14.09m5.65-5.65a76.4 76.4 0 0 0 14.09-22.6L224.33 182a68.1 68.1 0 0 1-13.53 23.15ZM28 96a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68m65.06 75.93c1 0 2 .07 2.94.07a76 76 0 0 0 19.73-2.61l57.34 57.34A68.6 68.6 0 0 1 160 228a67.79 67.79 0 0 1-66.94-56.07"></svg:path>`,
})
export class PhSubtractThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubwayThinIcon],svg[ph-subway-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 96v112a4 4 0 0 1-8 0V96a60.07 60.07 0 0 0-60-60h-48a60.07 60.07 0 0 0-60 60v112a4 4 0 0 1-8 0V96a68.07 68.07 0 0 1 68-68h48a68.07 68.07 0 0 1 68 68m-40 0v72a20 20 0 0 1-20 20h-1.53l5.11 10.21a4 4 0 0 1-1.79 5.37a4.1 4.1 0 0 1-1.79.42a4 4 0 0 1-3.58-2.21L149.53 188h-43.06l-6.89 13.79A4 4 0 0 1 96 204a4.1 4.1 0 0 1-1.79-.42a4 4 0 0 1-1.79-5.37L97.53 188H96a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20m-96 0v52h88V96a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12m32 60v24h24v-24Zm-20 24h12v-24H84v12a12 12 0 0 0 12 12m76-12v-12h-24v24h12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhSubwayThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseRollingThinIcon],svg[ph-suitcase-rolling-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 88v96a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m28-4a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m32 0a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m44-20v144a12 12 0 0 1-12 12h-20v20a4 4 0 0 1-8 0v-20H92v20a4 4 0 0 1-8 0v-20H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h28V24a20 20 0 0 1 20-20h32a20 20 0 0 1 20 20v28h28a12 12 0 0 1 12 12M100 52h56V24a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12Zm96 12a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhSuitcaseRollingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseSimpleThinIcon],svg[ph-suitcase-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M92 48a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM40 68h176a4 4 0 0 1 4 4v76H36V72a4 4 0 0 1 4-4m176 136H40a4 4 0 0 1-4-4v-44h184v44a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSuitcaseSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseThinIcon],svg[ph-suitcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M84 204H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h44Zm80 0H92V68h72Zm0-144H92V48a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12Zm56 140a4 4 0 0 1-4 4h-44V68h44a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSuitcaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunDimThinIcon],svg[ph-sun-dim-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 40v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0m64 88a60 60 0 1 1-60-60a60.07 60.07 0 0 1 60 60m-8 0a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52M61.17 66.83a4 4 0 0 0 5.66-5.66l-8-8a4 4 0 0 0-5.66 5.66Zm0 122.34l-8 8a4 4 0 0 0 5.66 5.66l8-8a4 4 0 0 0-5.66-5.66m136-136l-8 8a4 4 0 0 0 5.66 5.66l8-8a4 4 0 1 0-5.66-5.66m-2.34 136a4 4 0 0 0-5.66 5.66l8 8a4 4 0 0 0 5.66-5.66ZM40 124h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8m88 88a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4m96-88h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSunDimThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunHorizonThinIcon],svg[ph-sun-horizon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 156h-45.06A68 68 0 1 0 60 144a68.7 68.7 0 0 0 1.06 12H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M68 144a60 60 0 1 1 118.79 12H69.21A60 60 0 0 1 68 144m144 56a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h160a4 4 0 0 1 4 4M76.42 41.79a4 4 0 0 1 7.16-3.58l8 16a4 4 0 0 1-7.16 3.58Zm-56 52.42a4 4 0 0 1 5.37-1.79l16 8a4 4 0 0 1-3.58 7.16l-16-8a4 4 0 0 1-1.79-5.37m192 11.58a4 4 0 0 1 1.79-5.37l16-8a4 4 0 1 1 3.58 7.16l-16 8a4 4 0 0 1-5.37-1.79m-48-51.58l8-16a4 4 0 1 1 7.16 3.58l-8 16a4 4 0 0 1-7.16-3.58"></svg:path>`,
})
export class PhSunHorizonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunThinIcon],svg[ph-sun-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 40V16a4 4 0 0 1 8 0v24a4 4 0 0 1-8 0m64 88a60 60 0 1 1-60-60a60.07 60.07 0 0 1 60 60m-8 0a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52M61.17 66.83a4 4 0 0 0 5.66-5.66l-16-16a4 4 0 0 0-5.66 5.66Zm0 122.34l-16 16a4 4 0 0 0 5.66 5.66l16-16a4 4 0 0 0-5.66-5.66M192 68a4 4 0 0 0 2.83-1.17l16-16a4 4 0 1 0-5.66-5.66l-16 16A4 4 0 0 0 192 68m2.83 121.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66-5.66ZM40 124H16a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m88 88a4 4 0 0 0-4 4v24a4 4 0 0 0 8 0v-24a4 4 0 0 0-4-4m112-88h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhSunThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunglassesThinIcon],svg[ph-sunglasses-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44a4 4 0 0 0 0 8a20 20 0 0 1 20 20v60H36V72a20 20 0 0 1 20-20a4 4 0 0 0 0-8a28 28 0 0 0-28 28v92a40 40 0 0 0 80 0v-24h40v24a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28M36 164v-24h2.34l49.27 49.26A32 32 0 0 1 36 164m64 0a31.83 31.83 0 0 1-6.74 19.61L49.66 140H100Zm56 0v-24h2.34l49.27 49.26A32 32 0 0 1 156 164m57.26 19.61L169.66 140H220v24a31.83 31.83 0 0 1-6.74 19.61"></svg:path>`,
})
export class PhSunglassesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfThinIcon],svg[ph-superset-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 200a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-60-44H56a4 4 0 0 0 0 8h96a60 60 0 0 0 0-120H56a4 4 0 0 0 0 8h96a52 52 0 0 1 0 104"></svg:path>`,
})
export class PhSupersetOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfThinIcon],svg[ph-superset-proper-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a84.09 84.09 0 0 1-84 84H64a4 4 0 0 1 0-8h72a76 76 0 0 0 0-152H64a4 4 0 0 1 0-8h72a84.09 84.09 0 0 1 84 84"></svg:path>`,
})
export class PhSupersetProperOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwapThinIcon],svg[ph-swap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v104a12 12 0 0 1-12 12H89.66l17.17 17.17a4 4 0 0 1-5.66 5.66l-24-24a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 5.66L89.66 156H208a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4v8a4 4 0 0 1-8 0v-8a12 12 0 0 1 12-12h112a12 12 0 0 1 12 12m-52 148a4 4 0 0 0-4 4v8a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V104a4 4 0 0 1 4-4h118.34l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L166.34 92H48a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-8a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhSwapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesThinIcon],svg[ph-swatches-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.27 152.07l-19.08-52.22a12 12 0 0 0-15.34-7.13l-74.3 26.92l13.27-75.83a12 12 0 0 0-9.68-13.9l-54.67-9.72a11.75 11.75 0 0 0-8.89 2a11.9 11.9 0 0 0-4.94 7.77l-25 143.13a40 40 0 0 0 32.16 46.3a42.7 42.7 0 0 0 7.2.61h148a12 12 0 0 0 12-12v-51.81a14 14 0 0 0-.73-4.12m-31.7-51.83a4 4 0 0 1 5.1 2.36l19.09 52.21a3.9 3.9 0 0 1-.13 3a3.94 3.94 0 0 1-2.24 2l-116.61 42.3a40 40 0 0 0 6-15.17L125 128.73ZM93.75 206.29a31.25 31.25 0 0 1-23.55 5.22a32 32 0 0 1-25.71-37.08l25-143.13a4 4 0 0 1 1.64-2.59a3.85 3.85 0 0 1 2.25-.71a4 4 0 0 1 .69.06l54.67 9.73a4 4 0 0 1 3.2 4.64l-25 143.13a31.8 31.8 0 0 1-13.19 20.73M228 208a4 4 0 0 1-4 4H105l123-44.59ZM84 180a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSwatchesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolThinIcon],svg[ph-swimming-pool-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 145.39a4 4 0 0 0 4-4V124h72v19.29a4 4 0 0 0 8 0V32a4 4 0 0 0-8 0v20H92V32a4 4 0 0 0-8 0v109.39a4 4 0 0 0 4 4M92 116V92h72v24Zm72-56v24H92V60ZM28 168a4 4 0 0 1 4-4c13.21 0 20.12 4.61 26.22 8.67c5.9 3.93 11 7.33 21.78 7.33s15.88-3.4 21.78-7.33c6.09-4.06 13-8.67 26.21-8.67s20.13 4.61 26.22 8.67c5.9 3.93 11 7.33 21.79 7.33s15.88-3.4 21.78-7.33c6.1-4.06 13-8.67 26.22-8.67a4 4 0 0 1 0 8c-10.79 0-15.88 3.4-21.78 7.33c-6.1 4.06-13 8.67-26.22 8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88 3.4-21.78 7.33c-6.09 4.06-13 8.67-26.21 8.67s-20.12-4.61-26.22-8.67C47.88 175.4 42.79 172 32 172a4 4 0 0 1-4-4m200 40a4 4 0 0 1-4 4c-10.79 0-15.88 3.4-21.78 7.33c-6.1 4.06-13 8.67-26.22 8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88 3.4-21.78 7.33c-6.09 4.06-13 8.67-26.21 8.67s-20.12-4.61-26.22-8.67C47.88 215.4 42.79 212 32 212a4 4 0 0 1 0-8c13.21 0 20.12 4.61 26.22 8.67c5.9 3.93 11 7.33 21.78 7.33s15.88-3.4 21.78-7.33c6.09-4.06 13-8.67 26.21-8.67s20.13 4.61 26.22 8.67c5.9 3.93 11 7.33 21.79 7.33s15.88-3.4 21.78-7.33c6.1-4.06 13-8.67 26.22-8.67a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhSwimmingPoolThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordThinIcon],svg[ph-sword-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-64a4 4 0 0 0-3.17 1.56l-66.78 86.82l-12.86-12.86a12 12 0 0 0-17 0l-12.67 12.69a12 12 0 0 0 0 17L62.34 164l-30.82 30.83a12 12 0 0 0 0 17l12.68 12.66a12 12 0 0 0 17 0L92 193.67l22.81 22.82a12 12 0 0 0 17 0l12.69-12.7a12 12 0 0 0 0-17L131.62 174l86.82-66.79A4 4 0 0 0 220 104V40a4 4 0 0 0-4-4M55.52 218.83a4 4 0 0 1-5.66 0l-12.69-12.68a4 4 0 0 1 0-5.66L68 169.67L86.34 188Zm83.31-26.36a4 4 0 0 1 0 5.67l-12.7 12.69a4 4 0 0 1-5.66 0l-75.3-75.3a4 4 0 0 1 0-5.66l12.7-12.69a4 4 0 0 1 5.66 0ZM212 102l-86.08 66.22L109.66 152l53.17-53.17a4 4 0 1 0-5.66-5.66L104 146.34l-16.25-16.26L154 44h58Z"></svg:path>`,
})
export class PhSwordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueThinIcon],svg[ph-synagogue-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 60.4V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 180 80v49.11l-48-27.43V72a4 4 0 0 0-8 0v29.68l-48 27.43V80a20 20 0 0 0-16-19.6V32a4 4 0 0 0-8 0v28.4A20 20 0 0 0 36 80v136a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a12 12 0 0 1 24 0v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4V80a20 20 0 0 0-16-19.6m-4 7.6a12 12 0 0 1 12 12v28h-24V80a12 12 0 0 1 12-12M56 68a12 12 0 0 1 12 12v28H44V80a12 12 0 0 1 12-12m-12 48h24v96H44Zm84 40a20 20 0 0 0-20 20v36H76v-73.68l52-29.71l52 29.71V212h-32v-36a20 20 0 0 0-20-20m60 56v-96h24v96Z"></svg:path>`,
})
export class PhSynagogueThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeThinIcon],svg[ph-syringe-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 69.17l-48-48a4 4 0 0 0-5.66 5.66L202.34 48L168 82.34l-37.17-37.17a4 4 0 1 0-5.66 5.66l9.17 9.17l-86.83 86.83a12 12 0 0 0-3.51 8.48v51l-22.83 22.86a4 4 0 0 0 5.66 5.66L49.66 212h51a11.93 11.93 0 0 0 8.48-3.51L196 121.66l9.17 9.17a4 4 0 0 0 5.66-5.66L173.66 88L208 53.66l21.17 21.17a4 4 0 1 0 5.66-5.66M103.51 202.83a4 4 0 0 1-2.82 1.17H52v-48.69a4 4 0 0 1 1.17-2.82L74 131.66l23.17 23.17a4 4 0 1 0 5.66-5.66L79.66 126L98 107.66l23.17 23.17a4 4 0 0 0 5.66-5.66L103.66 102L140 65.66l25.17 25.17L190.34 116Z"></svg:path>`,
})
export class PhSyringeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtThinIcon],svg[ph-t-shirt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.68 64.73l-51.77-28.24A4 4 0 0 0 192 36h-32a4 4 0 0 0-4 4a28 28 0 0 1-56 0a4 4 0 0 0-4-4H64a4 4 0 0 0-1.9.5L10.32 64.73a11.79 11.79 0 0 0-5 15.89l19.28 36.81a12.37 12.37 0 0 0 11 6.57H60v84a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-84h24.33a12.37 12.37 0 0 0 11-6.57l19.28-36.81a11.79 11.79 0 0 0-4.93-15.89M35.67 116a4.46 4.46 0 0 1-4-2.28L12.44 76.91a3.79 3.79 0 0 1 1.71-5.15L60 46.74V116ZM188 208a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V44h24.22a36 36 0 0 0 71.56 0H188Zm55.56-131.09l-19.27 36.81a4.46 4.46 0 0 1-4 2.28H196V46.74l45.85 25a3.79 3.79 0 0 1 1.71 5.17"></svg:path>`,
})
export class PhTShirtThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableThinIcon],svg[ph-table-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4M36 108h48v40H36Zm56 0h128v40H92Zm128-48v40H36V60ZM36 192v-36h48v40H40a4 4 0 0 1-4-4m180 4H92v-40h128v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTableThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsThinIcon],svg[ph-tabs-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.81 166.86l-22.29-74.3A11.92 11.92 0 0 0 218.05 84H208a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L242.62 164H203l-21.46-71.45A11.92 11.92 0 0 0 170.05 84H160a4 4 0 0 0 0 8h10.05a4 4 0 0 1 3.83 2.85L194.62 164H155l-21.46-71.45A11.92 11.92 0 0 0 122.05 84H38a11.92 11.92 0 0 0-11.49 8.55l-22.34 74.3v.17A4 4 0 0 0 8 172h240a4 4 0 0 0 4-4a3.9 3.9 0 0 0-.19-1.14m-217.69-72A4 4 0 0 1 38 92h84.1a4 4 0 0 1 3.83 2.85L146.62 164H13.38Z"></svg:path>`,
})
export class PhTabsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronThinIcon],svg[ph-tag-chevron-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.33 125.78L197.7 57.34a12 12 0 0 0-10-5.34H32a4 4 0 0 0-3.33 6.22L75.19 128l-46.52 69.78A4 4 0 0 0 32 204h155.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44m-52.28 68.44a4 4 0 0 1-3.33 1.78H39.47l43.86-65.78a4 4 0 0 0 0-4.44L39.47 60h148.25a4 4 0 0 1 3.33 1.78L235.19 128Z"></svg:path>`,
})
export class PhTagChevronThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleThinIcon],svg[ph-tag-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.33 125.78L197.7 57.34a12 12 0 0 0-10-5.34H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h147.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44m-52.28 68.44a4 4 0 0 1-3.33 1.78H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h147.72a4 4 0 0 1 3.33 1.78L235.19 128Z"></svg:path>`,
})
export class PhTagSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagThinIcon],svg[ph-tag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 138.83l-99.32-99.32a11.93 11.93 0 0 0-8.48-3.51H40a4 4 0 0 0-4 4v92.69a11.93 11.93 0 0 0 3.51 8.48l99.32 99.32a12 12 0 0 0 17 0l84.69-84.69a12 12 0 0 0 0-17Zm-5.66 11.31l-84.69 84.69a4 4 0 0 1-5.65 0l-99.32-99.32a4 4 0 0 1-1.17-2.82V44h88.69a4 4 0 0 1 2.82 1.17l99.32 99.32a4 4 0 0 1 0 5.65M92 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetThinIcon],svg[ph-target-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.26 84.89a100.16 100.16 0 1 1-22.44-30.37l25.35-25.35a4 4 0 1 1 5.66 5.66l-96 96a4 4 0 0 1-5.66-5.66l31-31a44 44 0 1 0 15.78 31.3a4 4 0 0 1 8-.46a52 52 0 1 1-18.1-36.51l28.34-28.33A92 92 0 0 0 63 193.05A92 92 0 0 0 211 88.33a4 4 0 1 1 7.22-3.44Z"></svg:path>`,
})
export class PhTargetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiThinIcon],svg[ph-taxi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-13.68l-28.54-49.95a12 12 0 0 0-10.42-6h-24.65l-13-32.46A12 12 0 0 0 138.58 12h-21.16a12 12 0 0 0-11.15 7.54L93.29 52H68.64a12 12 0 0 0-10.42 6l-28.54 50H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8M113.7 22.51a4 4 0 0 1 3.72-2.51h21.16a4 4 0 0 1 3.72 2.51L154.09 52h-52.18ZM65.17 62a4 4 0 0 1 3.47-2h118.72a4 4 0 0 1 3.47 2l26.28 46H38.89ZM68 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-20h32Zm148 4h-24a4 4 0 0 1-4-4v-20h32v20a4 4 0 0 1-4 4m4-32H36v-56h184ZM60 144a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m112 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTaxiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagThinIcon],svg[ph-tea-bag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 164a20 20 0 0 1-20-20V64a52 52 0 0 0-104 0v12H76.53a12.06 12.06 0 0 0-10.29 5.83L45.71 116a12 12 0 0 0-1.71 6.22V216a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-93.78a12 12 0 0 0-1.71-6.18l-20.53-34.21A12.06 12.06 0 0 0 131.47 76H108V64a44 44 0 0 1 88 0v80a28 28 0 0 0 28 28a4 4 0 0 0 0-8m-92.53-80a4 4 0 0 1 3.43 1.94l20.53 34.22a4 4 0 0 1 .57 2.06V216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-93.78a4 4 0 0 1 .57-2.06L73.1 85.94A4 4 0 0 1 76.53 84H100v52a4 4 0 0 0 8 0V84Z"></svg:path>`,
})
export class PhTeaBagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoThinIcon],svg[ph-telegram-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.27 29.22a5 5 0 0 0-5.1-.87L18.51 107.66a10.22 10.22 0 0 0 1.75 19.56L76 138.16V200a12 12 0 0 0 7.51 11.13A12.1 12.1 0 0 0 88 212a12 12 0 0 0 8.62-3.68l28-29l43 37.71a12 12 0 0 0 7.89 3a12.5 12.5 0 0 0 3.74-.59a11.87 11.87 0 0 0 8-8.72l40.62-176.6a5 5 0 0 0-1.6-4.9M20 117.38a2.13 2.13 0 0 1 1.42-2.27l174.65-68.35l-117 83.85l-57.26-11.24a2.12 2.12 0 0 1-1.81-1.99m70.87 85.38A4 4 0 0 1 84 200v-56.3l34.58 30.3Zm88.58 6.14a4 4 0 0 1-6.57 2.09l-86.45-75.81l131.7-94.38Z"></svg:path>`,
})
export class PhTelegramLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleThinIcon],svg[ph-television-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-78.34l41.17-41.17a4 4 0 1 0-5.66-5.66L128 66.34L82.83 21.17a4 4 0 0 0-5.66 5.66L118.34 68H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhTelevisionSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionThinIcon],svg[ph-television-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-78.34l41.17-41.17a4 4 0 1 0-5.66-5.66L128 66.34L82.83 21.17a4 4 0 0 0-5.66 5.66L118.34 68H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M36 200V80a4 4 0 0 1 4-4h108v128H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4h-60V76h60a4 4 0 0 1 4 4Zm-24-84a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 48a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTelevisionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallThinIcon],svg[ph-tennis-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.74 57.29A99.4 99.4 0 0 0 128 28h-.19a100 100 0 1 0 70.93 29.29M62.92 63a91.38 91.38 0 0 1 60.8-26.85a91.3 91.3 0 0 1-26.85 60.74a91.44 91.44 0 0 1-60.77 26.84A91.6 91.6 0 0 1 62.92 63m-26.83 68.74a99.36 99.36 0 0 0 66.44-29.2a99.25 99.25 0 0 0 29.21-66.45a91.9 91.9 0 0 1 88.17 88.17a100 100 0 0 0-95.65 95.65a91.9 91.9 0 0 1-88.17-88.17m157 61.31a91.38 91.38 0 0 1-60.8 26.85a92 92 0 0 1 87.62-87.63a91.6 91.6 0 0 1-26.83 60.78Z"></svg:path>`,
})
export class PhTennisBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentThinIcon],svg[ph-tent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.66 190.38l-64-144A4 4 0 0 0 184 44H72a4 4 0 0 0-3.63 2.35v.06l-64 143.93A4 4 0 0 0 8 196h240a4 4 0 0 0 3.66-5.62M68 66.85V188H14.16ZM76 188V66.85L129.84 188Zm62.6 0L78.16 52H181.4l60.44 136Z"></svg:path>`,
})
export class PhTentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalThinIcon],svg[ph-terminal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 128a4 4 0 0 1-1.34 3l-72 64a4 4 0 1 1-5.32-6L106 128L37.34 67a4 4 0 0 1 5.32-6l72 64a4 4 0 0 1 1.34 3m100 60h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTerminalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowThinIcon],svg[ph-terminal-window-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122.5 124.88a4 4 0 0 1 0 6.24l-40 32a4 4 0 0 1-5-6.24L113.6 128L77.5 99.12a4 4 0 0 1 5-6.24ZM176 156h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m52-100v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhTerminalWindowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeThinIcon],svg[ph-test-tube-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 89.18l-60-60a4 4 0 0 0-5.66 0L39.94 158.41a40.78 40.78 0 0 0 57.66 57.67L210.16 103.5l23.1-7.7a4 4 0 0 0 1.57-6.62M91.94 210.42a32.77 32.77 0 1 1-46.34-46.35L75 134.63c9.2-3.38 23.94-5.08 43.11 4.93c12.09 6.31 22.74 8.48 31.66 8.48c1.64 0 3.2-.09 4.73-.22Zm114.8-114.21a4.06 4.06 0 0 0-1.57 1L165 137.39c-9.2 3.38-23.94 5.08-43.11-4.93c-14.3-7.47-26.58-9.13-36.38-8.27L172 37.66l52.6 52.6Z"></svg:path>`,
})
export class PhTestTubeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineThinIcon],svg[ph-text-a-underline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.3 171.62a4 4 0 0 0 5.32-1.92L85.36 132h85.28l17.74 37.7a4 4 0 1 0 7.24-3.4l-64-136a4 4 0 0 0-7.24 0l-64 136a4 4 0 0 0 1.92 5.32M128 41.39L166.87 124H89.13ZM220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextAUnderlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaThinIcon],svg[ph-text-aa-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.62 54.3a4 4 0 0 0-7.24 0l-64 136a4 4 0 0 0 7.24 3.4L37.36 156h85.28l17.74 37.7a4 4 0 1 0 7.24-3.4ZM41.13 148L80 65.39L118.87 148ZM200 100c-11.67 0-20.69 3.08-26.82 9.16a4 4 0 1 0 5.64 5.68c4.57-4.54 11.7-6.84 21.18-6.84c15.44 0 28 10.77 28 24v11.92A37.78 37.78 0 0 0 200 132c-19.85 0-36 14.35-36 32s16.15 32 36 32a37.78 37.78 0 0 0 28-11.92V192a4 4 0 0 0 8 0v-60c0-17.64-16.15-32-36-32m0 88c-15.44 0-28-10.77-28-24s12.56-24 28-24s28 10.77 28 24s-12.56 24-28 24"></svg:path>`,
})
export class PhTextAaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterThinIcon],svg[ph-text-align-center-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m28 36a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Zm152 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m-24 40H64a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignCenterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyThinIcon],svg[ph-text-align-justify-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m180 36H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignJustifyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftThinIcon],svg[ph-text-align-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 44h128a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m176 32H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m-48 40H40a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightThinIcon],svg[ph-text-align-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m180 36H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8m0 40H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextAlignRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBThinIcon],svg[ph-text-b-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.27 117.21A40 40 0 0 0 148 44H80a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h80a44 44 0 0 0 10.27-86.79M84 52h64a32 32 0 0 1 0 64H84Zm76 144H84v-72h76a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhTextBThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBolderThinIcon],svg[ph-text-bolder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.3 117.2A40 40 0 0 0 140 44H64a4.1 4.1 0 0 0-4 4v152a4 4 0 0 0 4 4h88a44 44 0 0 0 10.3-86.8ZM68 52h72a32 32 0 0 1 0 64H68Zm84 144H68v-72h84a36 36 0 0 1 0 72Z"></svg:path>`,
})
export class PhTextBolderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsThinIcon],svg[ph-text-columns-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 64a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4m-4 36H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m32-112h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8m72 32h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextColumnsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveThinIcon],svg[ph-text-h-five-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 180a32 32 0 0 1-32 32a31.62 31.62 0 0 1-22.86-9.2a4 4 0 0 1 5.72-5.6A23.67 23.67 0 0 0 212 204a24 24 0 0 0 0-48a23.67 23.67 0 0 0-17.14 6.8a4 4 0 0 1-6.81-3.46l8-48A4 4 0 0 1 200 108h40a4 4 0 0 1 0 8h-36.61l-5.87 35.21A33.26 33.26 0 0 1 212 148a32 32 0 0 1 32 32M144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTextHFiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourThinIcon],svg[ph-text-h-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m104 128a4 4 0 0 1-4 4h-12v20a4 4 0 0 1-8 0v-20h-52a4 4 0 0 1-3.16-6.46l56-72A4 4 0 0 1 236 112v68h12a4 4 0 0 1 4 4m-24-60.34L184.18 180H228Z"></svg:path>`,
})
export class PhTextHFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneThinIcon],svg[ph-text-h-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 112v96a4 4 0 0 1-8 0v-88.53l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 228 112m-84-60a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTextHOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixThinIcon],svg[ph-text-h-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 148a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.25 54a1 1 0 0 0-.08.17A32 32 0 1 0 212 148m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTextHSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThinIcon],svg[ph-text-h-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 56v144a4 4 0 0 1-8 0v-68H60v68a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v68h136V56a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTextHThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeThinIcon],svg[ph-text-h-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 180a32 32 0 0 1-54.86 22.4a4 4 0 0 1 5.72-5.6A24 24 0 1 0 212 156a4 4 0 0 1-3.28-6.29l23.6-33.71H192a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 244 180M144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhTextHThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoThinIcon],svg[ph-text-h-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m92 148h-40l38.36-51.15a28 28 0 1 0-48.77-26.18a4 4 0 1 0 7.54 2.66A20.4 20.4 0 0 1 200 124a20 20 0 0 1 32 24l-43.2 57.6a4 4 0 0 0 3.2 6.4h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextHTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentThinIcon],svg[ph-text-indent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4M112 68h104a4 4 0 0 0 0-8H112a4 4 0 0 0 0 8m104 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M37.17 138.83a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66l-40-40a4 4 0 0 0-5.66 5.66L74.34 96l-37.17 37.17a4 4 0 0 0 0 5.66"></svg:path>`,
})
export class PhTextIndentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicThinIcon],svg[ph-text-italic-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 56a4 4 0 0 1-4 4h-37.12l-45.33 136H144a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h37.12l45.33-136H112a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextItalicThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentThinIcon],svg[ph-text-outdent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4M112 68h104a4 4 0 0 0 0-8H112a4 4 0 0 0 0 8m104 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M72 140a4 4 0 0 0 2.83-6.83L37.66 96l37.17-37.17a4 4 0 0 0-5.66-5.66l-40 40a4 4 0 0 0 0 5.66l40 40A4 4 0 0 0 72 140"></svg:path>`,
})
export class PhTextOutdentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughThinIcon],svg[ph-text-strikethrough-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4h-54.84c15.45 7.24 26.84 17.8 26.84 36c0 24.26-26.92 44-60 44s-60-19.74-60-44a4 4 0 0 1 8 0c0 19.85 23.33 36 52 36s52-16.15 52-36c0-19.54-16.13-28.3-42.18-36H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M76.33 100a3.9 3.9 0 0 0 1.25-.2a4 4 0 0 0 2.55-5a21.9 21.9 0 0 1-1-6.75c0-20.52 21-36 48.89-36c20.32 0 37 8.2 44.49 21.92a4 4 0 0 0 7-3.85C170.54 53.75 151.29 44 128 44c-32.43 0-56.89 18.92-56.89 44a29.8 29.8 0 0 0 1.42 9.25a4 4 0 0 0 3.8 2.75"></svg:path>`,
})
export class PhTextStrikethroughThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptThinIcon],svg[ph-text-subscript-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 208a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L232 148a20 20 0 0 0-4-28a20 20 0 0 0-28 4a20.2 20.2 0 0 0-2.89 5.37a4 4 0 0 1-7.55-2.66a28.3 28.3 0 0 1 4-7.52a28 28 0 0 1 44.72 33.7L200 204h40a4 4 0 0 1 4 4M146.62 53a4 4 0 0 0-5.64.4L92 109.89L43 53.38a4 4 0 1 0-6 5.24L86.71 116L37 173.38a4 4 0 1 0 6 5.24l49-56.51l49 56.51a4 4 0 0 0 6-5.24L97.29 116L147 58.62a4 4 0 0 0-.38-5.62"></svg:path>`,
})
export class PhTextSubscriptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptThinIcon],svg[ph-text-superscript-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 144a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L232 84.05a20 20 0 0 0-18.78-31.85a20 20 0 0 0-16.08 13.14a4 4 0 1 1-7.55-2.67a28.3 28.3 0 0 1 4-7.52a28 28 0 1 1 44.72 33.7L200 140h40a4 4 0 0 1 4 4m-97.38-67a4 4 0 0 0-5.64.4L92 133.89L43 77.38a4 4 0 0 0-6 5.24L86.71 140L37 197.38a4 4 0 1 0 6 5.24l49-56.51l49 56.51a4 4 0 0 0 6-5.24L97.29 140L147 82.62a4 4 0 0 0-.38-5.62"></svg:path>`,
})
export class PhTextSuperscriptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashThinIcon],svg[ph-text-t-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.69 219a4 4 0 0 1-5.65-.27l-73-80.34V196h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28v-66.45L60.78 60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 2-3.45l-9-9.86a4 4 0 0 1 6-5.38l160 176a4 4 0 0 1-.31 5.69M105.79 60H124v20.43a4 4 0 0 0 8 0V60h64v28a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4h-94.21a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhTextTSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTThinIcon],svg[ph-text-t-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 56v32a4 4 0 0 1-8 0V60h-64v136h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28V60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextTThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineThinIcon],svg[ph-text-underline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 224a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m-68-28a60.07 60.07 0 0 0 60-60V56a4 4 0 0 0-8 0v80a52 52 0 0 1-104 0V56a4 4 0 0 0-8 0v80a60.07 60.07 0 0 0 60 60"></svg:path>`,
})
export class PhTextUnderlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxThinIcon],svg[ph-textbox-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 44a4 4 0 0 0-4 4v20H24a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h84v20a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4M24 180a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h84v104ZM244 80v96a12 12 0 0 1-12 12h-88a4 4 0 0 1 0-8h88a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4h-88a4 4 0 0 1 0-8h88a12 12 0 0 1 12 12M84 112a4 4 0 0 1-4 4H68v28a4 4 0 0 1-8 0v-28H48a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextboxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdThinIcon],svg[ph-thermometer-cold-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.67 73.92l-25.2 8.18L238 103.54a4 4 0 1 1-6.47 4.7L216 86.81l-15.57 21.43a4 4 0 0 1-3.24 1.65a4 4 0 0 1-3.23-6.35l15.57-21.44l-25.2-8.18a4 4 0 1 1 2.47-7.61l25.2 8.18V48a4 4 0 0 1 8 0v26.49l25.2-8.18a4 4 0 1 1 2.47 7.61M148 184a28 28 0 1 1-32-27.71V120a4 4 0 0 1 8 0v36.29A28 28 0 0 1 148 184m-8 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20m40 0a60 60 0 1 1-96-48V48a36 36 0 0 1 72 0v88a60.06 60.06 0 0 1 24 48m-8 0a52.06 52.06 0 0 0-22.29-42.68A4 4 0 0 1 148 138V48a28 28 0 0 0-56 0v90a4 4 0 0 1-1.71 3.28A52 52 0 1 0 172 184"></svg:path>`,
})
export class PhThermometerColdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotThinIcon],svg[ph-thermometer-hot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 156.29V48a4 4 0 0 0-8 0v108.29a28 28 0 1 0 8 0M120 204a20 20 0 1 1 20-20a20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 92 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 120 236m60.65-157.41a4 4 0 0 1 1.17-5.54c13.24-8.63 23.07-4.43 31.75-.73c8.15 3.48 14.58 6.22 24.25-.07a4 4 0 1 1 4.36 6.7C236.43 82.7 231.32 84 226.67 84c-6.06 0-11.33-2.25-16.24-4.34c-8.15-3.47-14.58-6.22-24.25.07a4 4 0 0 1-5.53-1.14m62.7 26.82a4 4 0 0 1-1.17 5.54c-5.75 3.75-10.86 5.07-15.51 5.07c-6.06 0-11.33-2.25-16.24-4.34c-8.15-3.47-14.58-6.22-24.25.07a4 4 0 1 1-4.36-6.7c13.24-8.63 23.07-4.43 31.75-.73c8.15 3.48 14.58 6.22 24.25-.07a4 4 0 0 1 5.53 1.16"></svg:path>`,
})
export class PhThermometerHotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleThinIcon],svg[ph-thermometer-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 156.29V88a4 4 0 0 0-8 0v68.29a28 28 0 1 0 8 0M128 204a20 20 0 1 1 20-20a20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 100 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 128 236"></svg:path>`,
})
export class PhThermometerSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerThinIcon],svg[ph-thermometer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 60a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-88 56.29V88a4 4 0 0 0-8 0v68.29a28 28 0 1 0 8 0M120 204a20 20 0 1 1 20-20a20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 92 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 120 236"></svg:path>`,
})
export class PhThermometerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoThinIcon],svg[ph-threads-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 126.84a59.8 59.8 0 0 0-12.42-7.16c-3-29.38-22-38.4-30.56-41c-18.16-5.5-39 1-48.36 15.09a4 4 0 0 0 6.66 4.44c7.4-11.1 24.7-16.32 39.38-11.87c8.12 2.45 20.95 9.6 24.41 30.32a75.8 75.8 0 0 0-20.71-2.88c-13.14 0-25.37 3.34-34.44 9.43c-10.45 7-16 17-16 28.78c0 20.7 17 31.52 33.71 31.52a44 44 0 0 0 31.47-13.58c9.56-9.94 14.68-24.19 14.82-41.23a50 50 0 0 1 7.19 4.51c11 8.32 16.81 20.34 16.81 34.78c0 11.73-6.25 24.46-16.7 34.05c-8.9 8.2-25.05 17.96-51.26 17.96c-50.43 0-76-30.95-76-92s25.57-92 76-92c34.29 0 57.26 14.5 68.27 43.08a4 4 0 1 0 7.46-2.87C191.42 44.22 165.94 28 128 28c-54.95 0-84 34.58-84 100s29.05 100 84 100c28.79 0 46.72-10.9 56.7-20.05c12.09-11.08 19.3-26 19.3-39.95c0-17-6.91-31.27-20-41.16m-32.6 37.55a35.92 35.92 0 0 1-25.7 11.13c-12.38 0-25.71-7.36-25.71-23.52c0-20.76 22-30.21 42.41-30.21a67.1 67.1 0 0 1 21.6 3.51c0 .88.05 1.78.05 2.7c-.05 15.25-4.4 27.83-12.64 36.39Z"></svg:path>`,
})
export class PhThreadsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDThinIcon],svg[ph-three-d-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 148a24 24 0 0 0-24-24a4 4 0 0 1-3.28-6.29L96.32 84H56a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29L83.12 116.8a32 32 0 1 1-30 53.6a4 4 0 1 1 5.72-5.6A24 24 0 0 0 100 148m60-72a52 52 0 0 1 0 104h-24a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4Zm0 8h-20v88h20a44 44 0 0 0 0-88M32 52h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8m192 152H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhThreeDThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownThinIcon],svg[ph-thumbs-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.85 157.52l-12-96A20 20 0 0 0 204 44H32a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h45.53l38.89 77.79A4 4 0 0 0 120 236a36 36 0 0 0 36-36v-20h60a20 20 0 0 0 19.85-22.48M76 148H32a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h44Zm149 19.94a12 12 0 0 1-9 4.06h-64a4 4 0 0 0-4 4v24a28 28 0 0 1-25.58 27.9L84 151.06V52h120a12 12 0 0 1 11.91 10.51l12 96a12 12 0 0 1-2.91 9.43"></svg:path>`,
})
export class PhThumbsDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpThinIcon],svg[ph-thumbs-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231 82.76A20 20 0 0 0 216 76h-60V56a36 36 0 0 0-36-36a4 4 0 0 0-3.58 2.21L77.53 100H32a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h172a20 20 0 0 0 19.85-17.52l12-96A20 20 0 0 0 231 82.76M76 204H32a4 4 0 0 1-4-4v-88a4 4 0 0 1 4-4h44ZM227.91 97.49l-12 96A12 12 0 0 1 204 204H84v-99.06l38.42-76.84A28 28 0 0 1 148 56v24a4 4 0 0 0 4 4h64a12 12 0 0 1 11.91 13.49"></svg:path>`,
})
export class PhThumbsUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketThinIcon],svg[ph-ticket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 100a4 4 0 0 0 4-4V64a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v32a4 4 0 0 0 4 4a28 28 0 0 1 0 56a4 4 0 0 0-4 4v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a4 4 0 0 0-4-4a28 28 0 0 1 0-56M28 192v-28.22a36 36 0 0 0 0-71.56V64a4 4 0 0 1 4-4h60v136H32a4 4 0 0 1-4-4m168-64a36.06 36.06 0 0 0 32 35.78V192a4 4 0 0 1-4 4H100V60h124a4 4 0 0 1 4 4v28.22A36.06 36.06 0 0 0 196 128"></svg:path>`,
})
export class PhTicketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoThinIcon],svg[ph-tidal-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.83 93.17l-40-40a4 4 0 0 0-5.66 0L168 90.34l-37.17-37.17a4 4 0 0 0-5.66 0L88 90.34L50.83 53.17a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0L88 101.66L122.34 136l-37.17 37.17a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66L133.66 136L168 101.66l37.17 37.17a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M48 130.34L13.66 96L48 61.66L82.34 96Zm80 80L93.66 176L128 141.66L162.34 176Zm0-80L93.66 96L128 61.66L162.34 96Zm80 0L173.66 96L208 61.66L242.34 96Z"></svg:path>`,
})
export class PhTidalLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoThinIcon],svg[ph-tiktok-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 76a52.06 52.06 0 0 1-52-52a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v132a24 24 0 1 1-34.28-21.69a4 4 0 0 0 2.28-3.62V88a4 4 0 0 0-4.7-3.94C53.49 90.08 28 121 28 156a72 72 0 0 0 144 0v-46.56A99.26 99.26 0 0 0 224 124a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4m-4 39.92a91.3 91.3 0 0 1-49.66-17.18A4 4 0 0 0 164 102v54a64 64 0 0 1-128 0c0-29.52 20.32-55.79 48-63v35.31A32 32 0 1 0 132 156V28h32.13A60.11 60.11 0 0 0 220 83.87Z"></svg:path>`,
})
export class PhTiktokLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeThinIcon],svg[ph-tilde-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.12 128.09c-13.82 17.18-27.26 26.24-41.11 27.7a39 39 0 0 1-4 .21c-18 0-33.48-12.64-48.53-24.9c-15.57-12.68-30.29-24.66-46.64-22.93c-11.62 1.22-23.3 9.32-35.71 24.76a4 4 0 0 1-6.24-5c13.81-17.2 27.25-26.26 41.11-27.72c19.67-2.08 36.38 11.53 52.54 24.69c15.57 12.68 30.29 24.66 46.64 22.93c11.62-1.22 23.3-9.32 35.71-24.76a4 4 0 1 1 6.24 5Z"></svg:path>`,
})
export class PhTildeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerThinIcon],svg[ph-timer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 44a92 92 0 1 0 92 92a92.1 92.1 0 0 0-92-92m0 176a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m42.83-126.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 1 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0M100 16a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTimerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarThinIcon],svg[ph-tip-jar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 52.23V32a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v20.23A36 36 0 0 0 44 88v112a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36V88a36 36 0 0 0-32-35.77M148 28h20a4 4 0 0 1 4 4v20h-24Zm-32 0h24v24h-24Zm-32 4a4 4 0 0 1 4-4h20v24H84Zm120 168a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28V88a28 28 0 0 1 28-28h96a28 28 0 0 1 28 28Zm-48-40a20 20 0 0 1-20 20h-4v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h24a12 12 0 0 0 0-24h-16a20 20 0 0 1 0-40h4V96a4 4 0 0 1 8 0v12h12a4 4 0 0 1 0 8h-24a12 12 0 0 0 0 24h16a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhTipJarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiThinIcon],svg[ph-tipi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.37 213.84L132.75 53.5l22.62-35.34a4 4 0 1 0-6.74-4.32L128 46.08l-20.63-32.24a4 4 0 0 0-6.74 4.32l22.62 35.34L20.63 213.84A4 4 0 0 0 24 220h208a4 4 0 0 0 3.37-6.16M79 212l49-76.58L177 212Zm107.52 0l-55.14-86.16a4 4 0 0 0-6.74 0L69.49 212H31.31L128 60.92L224.69 212Z"></svg:path>`,
})
export class PhTipiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireThinIcon],svg[ph-tire-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 172c13 0 20-22.67 20-44s-7-44-20-44s-20 22.67-20 44s7 44 20 44m0-80c4.89 0 12 14 12 36s-7.11 36-12 36s-12-14-12-36s7.11-36 12-36m64 128h-45.77c6.72-5.11 12.85-12.59 18.06-22.21C214.42 179.08 220 154.3 220 128s-5.58-51.08-15.71-69.79C193.73 38.73 179.43 28 164 28H92c-15.43 0-29.73 10.73-40.29 30.21C41.58 76.92 36 101.7 36 128s5.58 51.08 15.71 69.79C62.27 217.27 76.57 228 92 228h140a4 4 0 0 0 0-8M197.25 62c9.51 17.58 14.75 41 14.75 66s-5.24 48.42-14.75 66c-9.09 16.78-20.9 26-33.25 26s-24.16-9.24-33.25-26c-9.51-17.58-14.75-41-14.75-66s5.24-48.42 14.75-66c9.09-16.78 20.9-26 33.25-26s24.16 9.24 33.25 26m-138.5 0C67.84 45.24 79.65 36 92 36h49.77c-6.72 5.11-12.85 12.59-18.06 22.21c-7 12.93-11.83 28.77-14.14 46L82.33 84.75a4 4 0 0 0-4.66 0L45.17 108c2.02-17.34 6.67-33.22 13.58-46m-14.49 56.44L80 92.92l28.59 20.42c-.39 4.81-.59 9.71-.59 14.66a169.7 169.7 0 0 0 5.32 42.89l-31-22.14a4 4 0 0 0-4.66 0l-28.53 20.38A161.4 161.4 0 0 1 44 128q0-4.81.26-9.56M92 220c-12.35 0-24.16-9.24-33.25-26a106.6 106.6 0 0 1-7.19-16.75L80 156.92l37.32 26.65a111 111 0 0 0 6.39 14.22c5.21 9.62 11.34 17.1 18.06 22.21Z"></svg:path>`,
})
export class PhTireThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftThinIcon],svg[ph-toggle-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 60H80a68 68 0 0 0 0 136h96a68 68 0 0 0 0-136m0 128H80a60 60 0 0 1 0-120h96a60 60 0 0 1 0 120M80 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhToggleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightThinIcon],svg[ph-toggle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 60H80a68 68 0 0 0 0 136h96a68 68 0 0 0 0-136m0 128H80a60 60 0 0 1 0-120h96a60 60 0 0 1 0 120m0-96a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhToggleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperThinIcon],svg[ph-toilet-paper-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 120a8 8 0 1 1-8-8a8 8 0 0 1 8 8m164 0v88a12 12 0 0 1-12 12H112a12 12 0 0 1-12-12v-39.14C92.1 190.26 79 204 64 204c-24.67 0-44-36.9-44-84s19.33-84 44-84h128c24.67 0 44 36.9 44 84m-136 0c0-41.2-16.49-76-36-76s-36 34.8-36 76s16.49 76 36 76s36-34.8 36-76m128 88v-84h-20a4 4 0 0 1 0-8h20c-1-39.42-17.07-72-35.95-72h-109c14.29 12.8 24.14 39.76 24.9 72h20a4 4 0 0 1 0 8H108v84a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4m-52-92h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhToiletPaperThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletThinIcon],svg[ph-toilet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 64a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m52 130.86l3.92 27.44A12 12 0 0 1 160 236H96a12 12 0 0 1-11.88-13.7L88 194.86A92.11 92.11 0 0 1 36 112a4 4 0 0 1 4-4h20V40a12 12 0 0 1 12-12h112a12 12 0 0 1 12 12v68h20a4 4 0 0 1 4 4a92.11 92.11 0 0 1-52 82.86M68 108h120V40a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4Zm92.34 90.13a92 92 0 0 1-64.68 0L92 223.43a4 4 0 0 0 .94 3.19A3.93 3.93 0 0 0 96 228h64a3.93 3.93 0 0 0 3-1.38a4 4 0 0 0 .94-3.19ZM211.91 116H44.09a84 84 0 0 0 167.82 0"></svg:path>`,
})
export class PhToiletThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxThinIcon],svg[ph-toolbox-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68h-52V56a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 56a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM32 76h192a4 4 0 0 1 4 4v36h-40v-12a4 4 0 0 0-8 0v12H76v-12a4 4 0 0 0-8 0v12H28V80a4 4 0 0 1 4-4m192 120H32a4 4 0 0 1-4-4v-68h40v12a4 4 0 0 0 8 0v-12h104v12a4 4 0 0 0 8 0v-12h40v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhToolboxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothThinIcon],svg[ph-tooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M169.49 67.71L138.77 80l30.72 12.28A4 4 0 0 1 168 100a3.9 3.9 0 0 1-1.49-.29L128 84.31l-38.51 15.4A3.9 3.9 0 0 1 88 100a4 4 0 0 1-1.49-7.72L117.23 80L86.51 67.71a4 4 0 0 1 3-7.43L128 75.69l38.51-15.41a4 4 0 0 1 3 7.43Zm50.51 12c.07 71.08-23.16 130.07-45.65 146.05a11.74 11.74 0 0 1-11.93 1a11.91 11.91 0 0 1-6.9-10C154.35 200.93 149.33 164 128 164s-26.35 36.94-27.52 52.82a12.11 12.11 0 0 1-12 11.19a11.77 11.77 0 0 1-6.83-2.2c-22.49-16-45.72-75-45.65-146A52 52 0 0 1 88 28h80a52 52 0 0 1 52 51.75Zm-8 0A44 44 0 0 0 168 36H88a44 44 0 0 0-44 43.76c-.07 67.58 21.9 125 42.29 139.51a3.77 3.77 0 0 0 3.89.33a4 4 0 0 0 2.32-3.37C95.36 177.39 108 156 128 156s32.64 21.4 35.5 60.24a4 4 0 0 0 2.32 3.37a3.77 3.77 0 0 0 3.89-.33C190.1 204.8 212.07 147.34 212 79.76Z"></svg:path>`,
})
export class PhToothThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoThinIcon],svg[ph-tornado-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h168a4 4 0 0 1 4 4m-48 32a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h144a4 4 0 0 0 4-4m-16 32a4 4 0 0 0-4-4H56a4 4 0 0 0 0 8h104a4 4 0 0 0 4-4m16 32a4 4 0 0 0-4-4H88a4 4 0 0 0 0 8h88a4 4 0 0 0 4-4m4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-24 32h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-32 32h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTornadoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleThinIcon],svg[ph-tote-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 72.06a12.1 12.1 0 0 0-9.08-4.06H172v-4a44 44 0 0 0-88 0v4H32.08A12.1 12.1 0 0 0 23 72.06a12 12 0 0 0-2.94 9.35l14.26 120a12 12 0 0 0 12 10.59h163.35a12 12 0 0 0 12-10.59l14.26-120a12 12 0 0 0-2.93-9.35M92 64a36 36 0 0 1 72 0v4H92Zm136 16.46l-14.25 120a4 4 0 0 1-4.05 3.54H46.33a4 4 0 0 1-4-3.54L28 80.46a3.9 3.9 0 0 1 1-3.09A4.08 4.08 0 0 1 32.08 76h191.84a4.08 4.08 0 0 1 3.08 1.37a3.9 3.9 0 0 1 1 3.09"></svg:path>`,
})
export class PhToteSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteThinIcon],svg[ph-tote-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 72.06a12.1 12.1 0 0 0-9.08-4.06H172v-4a44 44 0 0 0-88 0v4H32.08A12.1 12.1 0 0 0 23 72.06a12 12 0 0 0-2.94 9.35l14.26 120a12 12 0 0 0 12 10.59h163.35a12 12 0 0 0 12-10.59l14.26-120a12 12 0 0 0-2.93-9.35M92 64a36 36 0 0 1 72 0v4H92Zm136 16.46l-14.25 120a4 4 0 0 1-4.05 3.54H46.33a4 4 0 0 1-4-3.54L28 80.46a3.9 3.9 0 0 1 1-3.09A4.08 4.08 0 0 1 32.08 76H84v28a4 4 0 0 0 8 0V76h72v28a4 4 0 0 0 8 0V76h51.92a4.08 4.08 0 0 1 3.08 1.37a3.9 3.9 0 0 1 1 3.09"></svg:path>`,
})
export class PhToteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelThinIcon],svg[ph-towel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H72a20 20 0 0 0-20 20v168a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V48a12 12 0 0 1 24 0v104a4 4 0 0 0 8 0V48a20 20 0 0 0-20-20M72 36h112a19.86 19.86 0 0 0-4 12v140H60V48a12 12 0 0 1 12-12m104 184H64a4 4 0 0 1-4-4v-20h120v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTowelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorThinIcon],svg[ph-tractor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 166.87V134a11.92 11.92 0 0 0-8.55-11.49h-.11L188 111.77V72a4 4 0 0 0-8 0v37.61l-32-8.67V52h12a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h12v40H40a4 4 0 0 0 0 8h28a72.08 72.08 0 0 1 72 72v12a4 4 0 0 0 4 4h36a32 32 0 1 0 56-21.13M68 92h-8V52h80v85.15A80.1 80.1 0 0 0 68 92m80 88v-70.77l77.19 20.9A4 4 0 0 1 228 134v26.36a31.7 31.7 0 0 0-16-4.36a32.06 32.06 0 0 0-31 24Zm64 32a24 24 0 1 1 24-24a24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 88a40 40 0 1 1 40-40a40 40 0 0 1-40 40m8-40a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTractorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredThinIcon],svg[ph-trademark-registered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m17.12-81.53A28 28 0 0 0 136 84h-32a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0v-28h28.52l20.15 30.23a4 4 0 0 0 6.66-4.44ZM108 92h28a20 20 0 0 1 0 40h-28Z"></svg:path>`,
})
export class PhTrademarkRegisteredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkThinIcon],svg[ph-trademark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-20-116a4 4 0 0 1-4 4H92v44a4 4 0 0 1-8 0v-44H72a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m80 0v48a4 4 0 0 1-8 0v-37.35l-21 24a4 4 0 0 1-6 0l-21-24V152a4 4 0 0 1-8 0v-48a4 4 0 0 1 7-2.63l25 28.56l25-28.56a4 4 0 0 1 7 2.63"></svg:path>`,
})
export class PhTrademarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeThinIcon],svg[ph-traffic-cone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 212h-21.16L149.65 36.06A12 12 0 0 0 138.31 28h-20.62a12 12 0 0 0-11.34 8.06L45.16 212H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M92.58 100h70.84l19.47 56H73.11Zm21.33-61.31a4 4 0 0 1 3.78-2.69h20.62a4 4 0 0 1 3.78 2.69L160.63 92H95.37ZM70.32 164h115.36l16.69 48H53.63Z"></svg:path>`,
})
export class PhTrafficConeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignThinIcon],svg[ph-traffic-sign-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.32 119.12L136.88 15.68a12.55 12.55 0 0 0-17.76 0L15.68 119.12a12.55 12.55 0 0 0 0 17.76l103.44 103.44a12.55 12.55 0 0 0 17.76 0l103.44-103.44a12.55 12.55 0 0 0 0-17.76m-5.66 12.1L131.22 234.67a4.56 4.56 0 0 1-6.44 0L21.33 131.22a4.55 4.55 0 0 1 0-6.44L124.78 21.33a4.56 4.56 0 0 1 6.44 0l103.45 103.45a4.55 4.55 0 0 1 0 6.44Zm-63.83-14a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L158.34 124H112a20 20 0 0 0-20 20v8a4 4 0 0 1-8 0v-8a28 28 0 0 1 28-28h46.34l-17.17-17.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhTrafficSignThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalThinIcon],svg[ph-traffic-signal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 60a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0 32a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m88-40h-20V76h20a4 4 0 0 0 0-8h-20V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v28H40a4 4 0 0 0 0 8h20v72H40a4 4 0 0 0 0 8h20v60a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-60h20a4 4 0 0 0 0-8m-28 68a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhTrafficSignalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalThinIcon],svg[ph-train-regional-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.86 119l-22.39-82.16A12 12 0 0 0 185.89 28H70.11a12 12 0 0 0-11.58 8.84L36.14 119a3.94 3.94 0 0 0 0 2.1l22.39 82.11A12 12 0 0 0 70.11 212H88l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h17.89a12 12 0 0 0 11.58-8.84l22.39-82.11a3.94 3.94 0 0 0 0-2.05M66.25 39a4 4 0 0 1 3.86-3h115.78a4 4 0 0 1 3.86 3L211 116.84l-83 15.09l-83-15.09Zm0 162.1l-20.72-76L124 139.34V204H70.11a4 4 0 0 1-3.86-2.95Zm123.5 0a4 4 0 0 1-3.86 2.95H132v-64.71l78.47-14.27ZM92 88a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTrainRegionalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleThinIcon],svg[ph-train-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h16l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h16a28 28 0 0 0 28-28V56a28 28 0 0 0-28-28M72 36h112a20 20 0 0 1 20 20v68H52V56a20 20 0 0 1 20-20m112 168H72a20 20 0 0 1-20-20v-52h152v52a20 20 0 0 1-20 20m-92-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrainSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainThinIcon],svg[ph-train-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h16l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h16a28 28 0 0 0 28-28V56a28 28 0 0 0-28-28M52 124V76h72v48Zm80-48h72v48h-72ZM72 36h112a20 20 0 0 1 20 20v12H52V56a20 20 0 0 1 20-20m112 168H72a20 20 0 0 1-20-20v-52h152v52a20 20 0 0 1-20 20m-92-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTrainThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTramThinIcon],svg[ph-tram-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 52h-52V20h36a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h36v32H72a28 28 0 0 0-28 28v104a28 28 0 0 0 28 28h16l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h16a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28M72 60h112a20 20 0 0 1 20 20v44H52V80a20 20 0 0 1 20-20m112 144H72a20 20 0 0 1-20-20v-52h152v52a20 20 0 0 1-20 20m-92-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTramThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateThinIcon],svg[ph-translate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.58 214.21l-56-112a4 4 0 0 0-7.16 0L157.55 148A92.05 92.05 0 0 1 102 127.36A99.68 99.68 0 0 0 131.91 60H160a4 4 0 0 0 0-8h-60V32a4 4 0 0 0-8 0v20H32a4 4 0 0 0 0 8h91.91A91.8 91.8 0 0 1 96 122.05a92 92 0 0 1-22.77-35.38a4 4 0 1 0-7.54 2.66a99.6 99.6 0 0 0 24.3 38A91.6 91.6 0 0 1 32 148a4 4 0 0 0 0 8a99.54 99.54 0 0 0 64-23.21a100.1 100.1 0 0 0 57.66 23l-29.22 58.43a4 4 0 1 0 7.16 3.58l14.87-29.8h75.06l14.89 29.79A4 4 0 0 0 240 220a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37M150.47 180L184 112.94L217.53 180Z"></svg:path>`,
})
export class PhTranslateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleThinIcon],svg[ph-trash-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8m-20 156a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136ZM84 24a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTrashSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashThinIcon],svg[ph-trash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8M92 40a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm104 168a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136Zm-88-104v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m48 0v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTrashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownThinIcon],svg[ph-tray-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a12 12 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.32a12 12 0 0 0-8.48-3.51H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.32a12 12 0 0 0 8.48 3.51h41.38a12 12 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4M93.17 122.83a4 4 0 0 1 5.66-5.66L124 142.34V72a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 1 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0Z"></svg:path>`,
})
export class PhTrayArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpThinIcon],svg[ph-tray-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a11.93 11.93 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.31a11.9 11.9 0 0 0-8.48-3.52H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.31a11.9 11.9 0 0 0 8.48 3.52h41.38a11.93 11.93 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4M93.17 106.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 81.66V152a4 4 0 0 1-8 0V81.66l-25.17 25.17a4 4 0 0 1-5.66 0"></svg:path>`,
})
export class PhTrayArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayThinIcon],svg[ph-tray-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a12 12 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.32a12 12 0 0 0-8.48-3.51H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.32a12 12 0 0 0 8.48 3.51h41.38a12 12 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTrayThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestThinIcon],svg[ph-treasure-chest-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 44H72a52.06 52.06 0 0 0-52 52v96a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V96a52.06 52.06 0 0 0-52-52m44 52v12h-40V52.19A44.06 44.06 0 0 1 228 96m-88 44h-24v-40h24Zm-28 8h32a4 4 0 0 0 4-4v-28h32v80H76v-80h32v28a4 4 0 0 0 4 4m36-40V96a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v12H76V52h104v56ZM68 52.19V108H28V96a44.06 44.06 0 0 1 40-43.81M28 192v-76h40v80H32a4 4 0 0 1-4-4m196 4h-36v-80h40v76a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTreasureChestThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenThinIcon],svg[ph-tree-evergreen-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.16 189.54l-51-65.54H208a4 4 0 0 0 3.17-6.44l-80-104a4 4 0 0 0-6.34 0l-80 104A4 4 0 0 0 48 124h31.82l-51 65.54A4 4 0 0 0 32 196h92v44a4 4 0 0 0 8 0v-44h92a4 4 0 0 0 3.16-6.46M40.18 188l51-65.54A4 4 0 0 0 88 116H56.12L128 22.56L199.88 116H168a4 4 0 0 0-3.16 6.46l51 65.54Z"></svg:path>`,
})
export class PhTreeEvergreenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmThinIcon],svg[ph-tree-palm-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.9 56a62.86 62.86 0 0 0-92 0A68.2 68.2 0 0 0 128 80.44a68.2 68.2 0 0 0-15-24.45a62.86 62.86 0 0 0-91.9.01a4 4 0 0 0 1.3 6.42L90.86 92.2a68.7 68.7 0 0 0-12.45 2.11a67.5 67.5 0 0 0-41.28 31.46a66.72 66.72 0 0 0-6.8 51.23a4 4 0 0 0 2.57 2.75a4.1 4.1 0 0 0 1.29.21a4 4 0 0 0 2.43-.82L124 112.6V224a4 4 0 0 0 8 0V112.6l87.38 66.58a4 4 0 0 0 2.43.82a4.1 4.1 0 0 0 1.29-.21a4 4 0 0 0 2.57-2.75a66.72 66.72 0 0 0-6.8-51.27a67.5 67.5 0 0 0-41.28-31.46a68.7 68.7 0 0 0-12.45-2.11l68.46-29.79a4 4 0 0 0 1.3-6.41M67.08 44a55.13 55.13 0 0 1 40.18 17.5a60.86 60.86 0 0 1 16.44 36.27L31.12 57.48A54.75 54.75 0 0 1 67.08 44M36.77 169A58.72 58.72 0 0 1 44 129.79A59.57 59.57 0 0 1 80.47 102a61 61 0 0 1 15.63-2a59.7 59.7 0 0 1 24.41 5.22ZM212 129.79a58.72 58.72 0 0 1 7.23 39.21l-83.74-63.8A60.24 60.24 0 0 1 212 129.79m-79.66-32a60.86 60.86 0 0 1 16.4-36.29a54.8 54.8 0 0 1 76.14-4Z"></svg:path>`,
})
export class PhTreePalmThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureThinIcon],svg[ph-tree-structure-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 108h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-20a20 20 0 0 0-20 20v36H68v-12a12 12 0 0 0-12-12H24a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-12h40v36a20 20 0 0 0 20 20h20v20a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-20a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20v20a12 12 0 0 0 12 12M60 144a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Zm96 16a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Zm0-112a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Z"></svg:path>`,
})
export class PhTreeStructureThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeThinIcon],svg[ph-tree-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195 65.59a72 72 0 0 0-134 0a67.72 67.72 0 0 0-41 62.22c-.1 36 30.24 67.26 66.25 68.17A68.24 68.24 0 0 0 124 185.66V232a4 4 0 0 0 8 0v-46.33A68.1 68.1 0 0 0 168 196h1.72c36-.91 66.34-32.13 66.24-68.17A67.73 67.73 0 0 0 195 65.59M169.55 188A60.15 60.15 0 0 1 132 176v-45.5l45.79-22.89a4 4 0 1 0-3.58-7.16L132 121.53V88a4 4 0 0 0-8 0v57.53l-42.21-21.11a4 4 0 1 0-3.58 7.16L124 154.47V176a60 60 0 0 1-37.55 12c-31.77-.8-58.54-28.35-58.45-60.15a59.77 59.77 0 0 1 37.62-55.5A4 4 0 0 0 67.88 70a64 64 0 0 1 120.24 0a4 4 0 0 0 2.26 2.33a59.79 59.79 0 0 1 37.62 55.5c.09 31.8-26.68 59.35-58.45 60.17"></svg:path>`,
})
export class PhTreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewThinIcon],svg[ph-tree-view-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 148h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H84V76h12a12 12 0 0 0 12-12V32a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v116a20 20 0 0 0 20 20h68v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H96a12 12 0 0 1-12-12v-68h80v12a12 12 0 0 0 12 12M60 64V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4m112 128a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Zm0-88a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Z"></svg:path>`,
})
export class PhTreeViewThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownThinIcon],svg[ph-trend-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.34L136 101.66l-37.17 37.17a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L96 130.34l37.17-37.17a4 4 0 0 1 5.66 0L228 182.34V128a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTrendDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpThinIcon],svg[ph-trend-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 56v64a4 4 0 0 1-8 0V65.66l-89.17 89.17a4 4 0 0 1-5.66 0L96 117.66l-69.17 69.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0L136 146.34L222.34 60H168a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTrendUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedThinIcon],svg[ph-triangle-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 216a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m77.34-25.91l-4.66-8.09a4 4 0 1 0-6.93 4l4.65 8.08a11.45 11.45 0 0 1 0 11.72a12.47 12.47 0 0 1-10.94 6.2H192a4 4 0 0 0 0 8h23.46a20.36 20.36 0 0 0 17.86-10.2a19.52 19.52 0 0 0 .02-19.71M64 212H40.54a12.47 12.47 0 0 1-10.94-6.2a11.45 11.45 0 0 1 0-11.72l4.65-8.08a4 4 0 1 0-6.93-4l-4.66 8.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220H64a4 4 0 0 0 0-8m138.18-64a4 4 0 0 0 3.47-6l-23-40a4 4 0 1 0-6.93 4l23 40a4 4 0 0 0 3.46 2m-56.3-109.78a20.75 20.75 0 0 0-35.76 0L96.42 62a4 4 0 1 0 6.94 4l13.69-23.79a12.76 12.76 0 0 1 21.9 0L152.64 66a4 4 0 0 0 6.94-4Zm-67 62.31a4 4 0 0 0-5.49 1.47l-23 40a4 4 0 0 0 6.94 4l23-40a4 4 0 0 0-1.48-5.47Z"></svg:path>`,
})
export class PhTriangleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleThinIcon],svg[ph-triangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.34 190.09L145.88 38.22a20.75 20.75 0 0 0-35.76 0L22.66 190.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220h174.92a20.36 20.36 0 0 0 17.86-10.2a19.52 19.52 0 0 0 .02-19.71m-6.94 15.71a12.47 12.47 0 0 1-10.94 6.2H40.54a12.47 12.47 0 0 1-10.94-6.2a11.45 11.45 0 0 1 0-11.72l87.45-151.87a12.76 12.76 0 0 1 21.9 0l87.45 151.87a11.45 11.45 0 0 1 0 11.72"></svg:path>`,
})
export class PhTriangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseThinIcon],svg[ph-trolley-suitcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 156h128a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12h-36V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v20H88a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12m44-116a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v20h-40ZM84 72a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v72a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4Zm0 152a12 12 0 1 1-12-12a12 12 0 0 1 12 12m144 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m16-40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h12V75.31a4 4 0 0 0-1.17-2.83L21.17 50.83a4 4 0 0 1 5.66-5.66l21.66 21.66A12 12 0 0 1 52 75.31V180h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTrolleySuitcaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyThinIcon],svg[ph-trolley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 224a12 12 0 1 1-12-12a12 12 0 0 1 12 12m132-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m24-32H52V75.31a12 12 0 0 0-3.51-8.48L26.83 45.17a4 4 0 0 0-5.66 5.66l21.66 21.65A4 4 0 0 1 44 75.31V180H32a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTrolleyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyThinIcon],svg[ph-trophy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 68h-28V48a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4v20H24a12 12 0 0 0-12 12v16a36 36 0 0 0 36 36h6.66A76 76 0 0 0 124 187.89V220H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-32.12c32.93-1.74 60.41-24.91 69.11-55.88H208a36 36 0 0 0 36-36V80a12 12 0 0 0-12-12M48 124a28 28 0 0 1-28-28V80a4 4 0 0 1 4-4h28v36a77 77 0 0 0 1 12Zm148-12.9c0 37.71-30.79 68.62-68 68.9a68 68 0 0 1-68-68V52h136ZM236 96a28 28 0 0 1-28 28h-5.1a77.4 77.4 0 0 0 1.1-12.9V76h28a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhTrophyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckThinIcon],svg[ph-truck-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.71 118.52l-14-35A12 12 0 0 0 226.58 76H188V64a4 4 0 0 0-4-4H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-.29-1.48M188 84h38.58a4 4 0 0 1 3.72 2.51L242.09 116H188ZM28 72a4 4 0 0 1 4-4h148v72H28Zm52 140a20 20 0 1 1 20-20a20 20 0 0 1-20 20m84.29-24h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-36h152v18.71A28.05 28.05 0 0 0 164.29 188M192 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20m52-28a4 4 0 0 1-4 4h-20.29A28 28 0 0 0 188 164.29V124h56Z"></svg:path>`,
})
export class PhTruckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerThinIcon],svg[ph-truck-trailer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 100.22V96a52.06 52.06 0 0 0-52-52h-8a12 12 0 0 0-12 12v124h-24V72a4 4 0 0 0-4-4H16A12 12 0 0 0 4 80v104a28 28 0 0 0 52 14.41A28 28 0 0 0 107.71 188h88.58a28 28 0 0 0 55.71-4v-48a36.06 36.06 0 0 0-32-35.78M12 80a4 4 0 0 1 4-4h100v104h-8.29A28 28 0 0 0 56 169.59a28 28 0 0 0-44-5.16Zm20 124a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m144 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-48a28 28 0 0 0-27.71 24H156V56a4 4 0 0 1 4-4h8a44.05 44.05 0 0 1 44 44v8a4 4 0 0 0 4 4a28 28 0 0 1 28 28v28.43a27.9 27.9 0 0 0-20-8.43"></svg:path>`,
})
export class PhTruckTrailerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoThinIcon],svg[ph-tumblr-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 116a4 4 0 0 0 4-4V72a4 4 0 0 0-4-4h-44V24a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4a44.05 44.05 0 0 1-44 44a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h28v60a60.07 60.07 0 0 0 60 60h40a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4h-32a12 12 0 0 1-12-12v-52Zm-32 72h28v40h-36a52.06 52.06 0 0 1-52-52v-64a4 4 0 0 0-4-4H68V75.85A52.09 52.09 0 0 0 115.85 28H140v44a4 4 0 0 0 4 4h44v32h-44a4 4 0 0 0-4 4v56a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhTumblrLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoThinIcon],svg[ph-twitch-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h20v36a4 4 0 0 0 2.3 3.62a3.9 3.9 0 0 0 1.7.38a4 4 0 0 0 2.56-.93L121.45 204h43.65a12.06 12.06 0 0 0 7.69-2.78l42.89-35.75a11.93 11.93 0 0 0 4.32-9.22V48a12 12 0 0 0-12-12m4 120.25a4 4 0 0 1-1.44 3.08l-42.9 35.74a4 4 0 0 1-2.56.93H120a4 4 0 0 0-2.56.93L76 231.46V200a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM172 88v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m-48 0v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTwitchLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoThinIcon],svg[ph-twitter-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.7 70.47A4 4 0 0 0 240 68h-32.8a44.57 44.57 0 0 0-39.15-24a42.76 42.76 0 0 0-30.88 12.55A43.85 43.85 0 0 0 124 88v11.16c-43.65-9.39-80-45.6-80.39-46a4 4 0 0 0-4.19-.95a4 4 0 0 0-2.63 3.41c-4.2 46.62 9.27 77.71 21.31 95.59A103.7 103.7 0 0 0 82.35 177c-15.68 20.49-43.46 31.13-43.75 31.24a4 4 0 0 0-1.93 6c.27.4 2.79 4 9.54 7.36C54.73 225.84 66.1 228 80 228c69.09 0 126.73-53.56 131.89-122.23l30.94-30.94a4 4 0 0 0 .87-4.36m-38.53 30.7a4 4 0 0 0-1.16 2.58C199.85 168.94 145.38 220 80 220c-17.85 0-27.63-3.89-32.5-6.87c10.37-4.82 31.45-16.34 43.83-34.91a4 4 0 0 0 .56-3.12a3.93 3.93 0 0 0-1.89-2.55c-.13-.08-13.39-8-25.52-26.15C54 130.71 42.39 104.11 44.19 64.65c13.17 11.62 45.48 37 83.15 43.3a4 4 0 0 0 4.66-4V88a36 36 0 0 1 10.79-25.76A35 35 0 0 1 168 52c14.2.18 27.49 8.86 33.06 21.61a4 4 0 0 0 3.61 2.39h25.67Z"></svg:path>`,
})
export class PhTwitterLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleThinIcon],svg[ph-umbrella-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 127A108.44 108.44 0 0 0 54.46 56.69A107.53 107.53 0 0 0 20 127a12 12 0 0 0 12 13h92v60a28 28 0 0 0 56 0a4 4 0 0 0-8 0a20 20 0 0 1-40 0v-60h92a12 12 0 0 0 12-13m-9 3.74a4 4 0 0 1-3 1.3H32a4 4 0 0 1-4-4.38a100.43 100.43 0 0 1 168.1-65a99.53 99.53 0 0 1 31.88 65a4 4 0 0 1-1.05 3.04Z"></svg:path>`,
})
export class PhUmbrellaSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaThinIcon],svg[ph-umbrella-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 127A108.44 108.44 0 0 0 54.46 56.69A107.53 107.53 0 0 0 20 127a12 12 0 0 0 12 13h92v60a28 28 0 0 0 56 0a4 4 0 0 0-8 0a20 20 0 0 1-40 0v-60h92a12 12 0 0 0 12-13m-204 5a4 4 0 0 1-4-4.38a100.2 100.2 0 0 1 89.73-91.09C106 49.76 85.08 80.45 84 132Zm60 0c1.21-56 27.6-86.37 35.94-94.57c8.41 8.21 34.79 38.57 36 94.57Zm134.87-1.3a4 4 0 0 1-3 1.3H172c-1-51.55-22-82.24-33.7-95.47a100.2 100.2 0 0 1 89.7 91.09a4 4 0 0 1-1.07 3.08Z"></svg:path>`,
})
export class PhUmbrellaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionThinIcon],svg[ph-union-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 64v80a76 76 0 0 1-152 0V64a4 4 0 0 1 8 0v80a68 68 0 0 0 136 0V64a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhUnionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareThinIcon],svg[ph-unite-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-62.34 120L44 102.34V49.66L206.34 212Zm-104-168h52.68L212 153.66v52.68ZM212 142.34L169.66 100H212Zm-56-56L113.66 44H156ZM44 113.66L86.34 156H44Zm56 56L142.34 212H100Z"></svg:path>`,
})
export class PhUniteSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteThinIcon],svg[ph-unite-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.17 84.83a76 76 0 1 0-86.34 86.34a76 76 0 1 0 86.34-86.34M228 160a68.6 68.6 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.93A68.1 68.1 0 0 1 228 160M45.2 50.86l58.34 58.33a76.4 76.4 0 0 0-14.09 22.6L31.67 74A68.1 68.1 0 0 1 45.2 50.86M74 31.67l57.78 57.78a76.4 76.4 0 0 0-22.6 14.09L50.86 45.2A68.1 68.1 0 0 1 74 31.67M164 96a67.6 67.6 0 0 1-7.45 30.89l-27.44-27.44A67.6 67.6 0 0 1 160 92c1.3 0 2.6 0 3.88.12c.12 1.28.12 2.58.12 3.88m-30 56.36L103.64 122A68.7 68.7 0 0 1 122 103.64L152.36 134A68.7 68.7 0 0 1 134 152.36M92 160a67.6 67.6 0 0 1 7.45-30.89l27.44 27.44A67.6 67.6 0 0 1 96 164c-1.3 0-2.6-.05-3.88-.12c-.07-1.28-.12-2.58-.12-3.88m54.81-7.54l58.33 58.34A68.1 68.1 0 0 1 182 224.33l-57.78-57.78a76.4 76.4 0 0 0 22.59-14.09m5.65-5.65a76.4 76.4 0 0 0 14.09-22.6L224.33 182a68.1 68.1 0 0 1-13.53 23.15Zm10.47-62.74c-1 0-2-.07-2.93-.07a76 76 0 0 0-19.73 2.61L82.93 29.27a68 68 0 0 1 80 54.8M28 96a68.6 68.6 0 0 1 1.27-13.07l57.34 57.34A76 76 0 0 0 84 160c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96m65.07 75.93c1 0 2 .07 2.93.07a76 76 0 0 0 19.73-2.61l57.34 57.34a68 68 0 0 1-80-54.8"></svg:path>`,
})
export class PhUniteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleThinIcon],svg[ph-upload-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 144v64a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-64a4 4 0 0 1 8 0v60h168v-60a4 4 0 0 1 8 0M90.83 74.83L124 41.66V144a4 4 0 0 0 8 0V41.66l33.17 33.17a4 4 0 1 0 5.66-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhUploadSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadThinIcon],svg[ph-upload-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 136v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-64a12 12 0 0 1 12-12h48a4 4 0 0 1 0 8H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4v-64a4 4 0 0 0-4-4h-48a4 4 0 0 1 0-8h48a12 12 0 0 1 12 12M82.83 74.83L124 33.66V128a4 4 0 0 0 8 0V33.66l41.17 41.17a4 4 0 1 0 5.66-5.66l-48-48a4 4 0 0 0-5.66 0l-48 48a4 4 0 0 0 5.66 5.66M196 168a8 8 0 1 0-8 8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhUploadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbThinIcon],svg[ph-usb-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.22 124.67l-48-32A4 4 0 0 0 196 96v28H68V72a4 4 0 0 1 4-4h36.29a28 28 0 1 0 0-8H72a12 12 0 0 0-12 12v52H8a4 4 0 0 0 0 8h52v52a12 12 0 0 0 12 12h36v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H72a4 4 0 0 1-4-4v-52h128v28a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M136 44a20 20 0 1 1-20 20a20 20 0 0 1 20-20m-20 132a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Zm88-23.47v-49.06L240.79 128Z"></svg:path>`,
})
export class PhUsbThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckThinIcon],svg[ph-user-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.17 158.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 177.7 76.71 164 108 164s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59M52 100a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56m198.83 30.83l-32 32a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 5.66-5.66L216 154.34l29.17-29.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhUserCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckThinIcon],svg[ph-user-circle-check-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 108.05a4 4 0 0 0-3.28 4.61A93.4 93.4 0 0 1 220 128a91.7 91.7 0 0 1-26.83 64.87a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34A92 92 0 0 1 128 36a93.4 93.4 0 0 1 15.34 1.27a4 4 0 0 0 1.32-7.89A100 100 0 1 0 228 128a102 102 0 0 0-1.38-16.66a4 4 0 0 0-4.62-3.29M92 120a36 36 0 1 1 36 36a36 36 0 0 1-36-36m-23.13 78.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m166-155.59l-32 32a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 5.66-5.66L200 66.34l29.17-29.17a4 4 0 1 1 5.66 5.66Z"></svg:path>`,
})
export class PhUserCircleCheckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedThinIcon],svg[ph-user-circle-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100.13 36a4 4 0 0 1 2.87-4.83a100.1 100.1 0 0 1 50 0a4 4 0 0 1-1 7.88a4.4 4.4 0 0 1-1-.13a92 92 0 0 0-46 0a4 4 0 0 1-4.87-2.92m-65.71 70.16a4 4 0 0 0 4.92-2.79a91.9 91.9 0 0 1 23-39.82a4 4 0 0 0-5.71-5.61a100.15 100.15 0 0 0-25 43.3a4 4 0 0 0 2.79 4.92M151 217.09a92 92 0 0 1-46 0a4 4 0 0 0-2 7.75a100 100 0 0 0 50 0a4 4 0 1 0-2-7.74Zm65.65-113.71a4 4 0 1 0 7.7-2.14a100.1 100.1 0 0 0-25-43.31a4 4 0 1 0-5.71 5.61a92 92 0 0 1 23.01 39.84m7.73 51.39a99.77 99.77 0 0 1-29.5 47.57a4 4 0 0 1-6.24-1.16a68 68 0 0 0-121.28 0a4 4 0 0 1-2.83 2.12a3.6 3.6 0 0 1-.73.07a4 4 0 0 1-2.68-1a99.8 99.8 0 0 1-29.5-47.58a4 4 0 1 1 7.71-2.13a91.9 91.9 0 0 0 23.47 40.25a75.66 75.66 0 0 1 44.54-34.08a44 44 0 1 1 41.32 0a75.66 75.66 0 0 1 44.54 34.08a91.83 91.83 0 0 0 23.47-40.28a4 4 0 0 1 7.71 2.14M128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36"></svg:path>`,
})
export class PhUserCircleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearThinIcon],svg[ph-user-circle-gear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.25 66.54L219 62.33a19.78 19.78 0 0 0 0-12.66l7.29-4.21a4 4 0 0 0-4-6.92l-7.31 4.21A20 20 0 0 0 204 36.4V28a4 4 0 0 0-8 0v8.4a20 20 0 0 0-10.94 6.35l-7.31-4.21a4 4 0 1 0-4 6.92l7.25 4.21a19.78 19.78 0 0 0 0 12.66l-7.29 4.21a4 4 0 0 0 2 7.46a3.9 3.9 0 0 0 2-.54l7.31-4.21A20 20 0 0 0 196 75.6V84a4 4 0 0 0 8 0v-8.4a20 20 0 0 0 10.94-6.35l7.31 4.21a3.9 3.9 0 0 0 2 .54a4 4 0 0 0 2-7.46M200 68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m22 40.06a4 4 0 0 0-3.28 4.6A93.6 93.6 0 0 1 220 128a91.7 91.7 0 0 1-26.83 64.87a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34A92 92 0 0 1 128 36a93.4 93.4 0 0 1 15.34 1.27a4 4 0 0 0 1.32-7.89a99.89 99.89 0 1 0 82 82a4 4 0 0 0-4.66-3.32M92 120a36 36 0 1 1 36 36a36 36 0 0 1-36-36m-23.13 78.42a68 68 0 0 1 118.27 0a91.81 91.81 0 0 1-118.27 0"></svg:path>`,
})
export class PhUserCircleGearThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusThinIcon],svg[ph-user-circle-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 56a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4m50.31 38.67A100 100 0 1 1 128 28a100.7 100.7 0 0 1 16.66 1.38a4 4 0 0 1-1.32 7.89A93.4 93.4 0 0 0 128 36a92 92 0 0 0-65.17 156.87a75.6 75.6 0 0 1 44.51-34a44 44 0 1 1 41.32 0a75.6 75.6 0 0 1 44.51 34a92 92 0 0 0 21.6-95.54a4 4 0 1 1 7.54-2.66M128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0 64a91.6 91.6 0 0 0 59.14-21.58a68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"></svg:path>`,
})
export class PhUserCircleMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusThinIcon],svg[ph-user-circle-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 56a4 4 0 0 1 4-4h20V32a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0V60h-20a4 4 0 0 1-4-4m54.62 55.34a99.89 99.89 0 1 1-82-82a4 4 0 0 1-1.32 7.89A93.4 93.4 0 0 0 128 36a92 92 0 0 0-65.17 156.87a75.6 75.6 0 0 1 44.51-34a44 44 0 1 1 41.32 0a75.6 75.6 0 0 1 44.51 34A91.7 91.7 0 0 0 220 128a93.6 93.6 0 0 0-1.27-15.34a4 4 0 0 1 7.89-1.32M128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0 64a91.6 91.6 0 0 0 59.14-21.58a68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"></svg:path>`,
})
export class PhUserCirclePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleThinIcon],svg[ph-user-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M68.87 198.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m124.3-5.55a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34a92 92 0 1 1 130.34 0M128 156a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhUserCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusThinIcon],svg[ph-user-focus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40v36a4 4 0 0 1-8 0V44h-32a4 4 0 0 1 0-8h36a4 4 0 0 1 4 4m-4 136a4 4 0 0 0-4 4v32h-32a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4M76 212H44v-32a4 4 0 0 0-8 0v36a4 4 0 0 0 4 4h36a4 4 0 0 0 0-8M40 80a4 4 0 0 0 4-4V44h32a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4m136 92a4 4 0 0 1-3.2-1.6a56 56 0 0 0-89.6 0a4 4 0 1 1-6.4-4.8a63.65 63.65 0 0 1 32.5-22.85a36 36 0 1 1 37.4 0a63.65 63.65 0 0 1 32.5 22.85a4 4 0 0 1-3.2 6.4m-48-32a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhUserFocusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearThinIcon],svg[ph-user-gear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.17 158.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 177.7 76.7 164 108 164s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59M52 100a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56m198.25 46.54l-7.25-4.21a19.78 19.78 0 0 0 0-12.66l7.29-4.21a4 4 0 1 0-4-6.92l-7.31 4.21A20 20 0 0 0 228 116.4V108a4 4 0 0 0-8 0v8.4a20 20 0 0 0-10.94 6.35l-7.31-4.21a4 4 0 1 0-4 6.92l7.29 4.21a19.78 19.78 0 0 0 0 12.66l-7.29 4.21a4 4 0 0 0 2 7.46a3.9 3.9 0 0 0 2-.54l7.31-4.21A20 20 0 0 0 220 155.6v8.4a4 4 0 0 0 8 0v-8.4a20 20 0 0 0 10.94-6.35l7.31 4.21a3.9 3.9 0 0 0 2 .54a4 4 0 0 0 2-7.46M224 148a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhUserGearThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListThinIcon],svg[ph-user-list-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 80a4 4 0 0 1 4-4h88a4 4 0 0 1 0 8h-88a4 4 0 0 1-4-4m92 44h-88a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8m0 48h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-100.13 19a4 4 0 0 1-2.87 4.87a4 4 0 0 1-1 .13a4 4 0 0 1-3.87-3c-6.71-26.08-32-45-60.13-45s-53.41 18.92-60.13 45a4 4 0 1 1-7.74-2c5.92-23 24.57-41.14 47.52-48a44 44 0 1 1 40.7 0c22.95 6.86 41.65 25 47.52 48M80 140a36 36 0 1 0-36-36a36 36 0 0 0 36 36"></svg:path>`,
})
export class PhUserListThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusThinIcon],svg[ph-user-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 136a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-56.94 61.43a4 4 0 0 1-6.12 5.14C168 177.7 139.3 164 108 164s-60 13.7-80.94 38.57a4 4 0 1 1-6.12-5.14c16.71-19.9 38.13-33.13 61.89-38.59a64 64 0 1 1 50.34 0c23.76 5.46 45.18 18.69 61.89 38.59M108 156a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56"></svg:path>`,
})
export class PhUserMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusThinIcon],svg[ph-user-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 136a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4m-56.94 61.43a4 4 0 0 1-6.12 5.14C168 177.7 139.3 164 108 164s-60 13.7-80.94 38.57a4 4 0 1 1-6.12-5.14c16.71-19.9 38.13-33.13 61.89-38.59a64 64 0 1 1 50.34 0c23.76 5.46 45.18 18.69 61.89 38.59M108 156a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56"></svg:path>`,
})
export class PhUserPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleThinIcon],svg[ph-user-rectangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M66 204a68 68 0 0 1 124 0Zm154-4a4 4 0 0 1-4 4h-17.33a76.17 76.17 0 0 0-50.06-45.14a44 44 0 1 0-41.22 0A76.17 76.17 0 0 0 57.33 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-92-44a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhUserRectangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundThinIcon],svg[ph-user-sound-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133.17 166.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 185.7 76.71 172 108 172s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59M52 108a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56m151.68-40.83a104.35 104.35 0 0 1 0 81.66a4 4 0 0 1-3.68 2.43a4.1 4.1 0 0 1-1.57-.32a4 4 0 0 1-2.11-5.25a96.32 96.32 0 0 0 0-75.38a4 4 0 0 1 7.36-3.14M244 108a135.2 135.2 0 0 1-11 53.58a4 4 0 0 1-3.68 2.42a3.9 3.9 0 0 1-1.57-.32a4 4 0 0 1-2.1-5.26a128.44 128.44 0 0 0 0-100.84a4 4 0 1 1 7.35-3.16A135.2 135.2 0 0 1 244 108"></svg:path>`,
})
export class PhUserSoundThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareThinIcon],svg[ph-user-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M63 212a68 68 0 0 1 130 0Zm149-4a4 4 0 0 1-4 4h-6.66a76 76 0 0 0-52.75-53.13a44 44 0 1 0-41.18 0A76 76 0 0 0 54.66 212H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-52a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhUserSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchThinIcon],svg[ph-user-switch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.83 130.83l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 1 1 5.66-5.66L220 142.34V128A92 92 0 0 0 53.25 74.34a4 4 0 0 1-6.5-4.68A100 100 0 0 1 228 128v14.34l17.17-17.17a4 4 0 1 1 5.66 5.66m-41.6 55.51A100 100 0 0 1 28 128v-14.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0l24 24a4 4 0 0 1-5.66 5.66L36 113.66V128a91.7 91.7 0 0 0 26.83 64.87a75.6 75.6 0 0 1 44.51-34a44 44 0 1 1 41.32 0a75.57 75.57 0 0 1 44.52 34.07a91 91 0 0 0 9.56-11.24a4 4 0 1 1 6.49 4.68ZM128 156a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0 64a92.23 92.23 0 0 0 59.14-21.57a68 68 0 0 0-118.27 0A91.56 91.56 0 0 0 128 220"></svg:path>`,
})
export class PhUserSwitchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserThinIcon],svg[ph-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.46 214c-16.52-28.56-43-48.06-73.68-55.09a68 68 0 1 0-51.56 0c-30.64 7-57.16 26.53-73.68 55.09a4 4 0 0 0 6.92 4C55 184.19 89.62 164 128 164s73 20.19 92.54 54a4 4 0 0 0 3.46 2a3.93 3.93 0 0 0 2-.54a4 4 0 0 0 1.46-5.46M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"></svg:path>`,
})
export class PhUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourThinIcon],svg[ph-users-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.6 123.2a4 4 0 0 0 5.6-.8a56 56 0 0 1 89.6 0a3.93 3.93 0 0 0 6.38 0a56 56 0 0 1 89.6 0a4 4 0 1 0 6.4-4.8a63.55 63.55 0 0 0-32.5-22.85a36 36 0 1 0-37.4 0a63.4 63.4 0 0 0-29.3 19a63.34 63.34 0 0 0-29.3-19a36 36 0 1 0-37.4 0A63.6 63.6 0 0 0 28.8 117.6a4 4 0 0 0 .8 5.6M148 64a28 28 0 1 1 28 28a28 28 0 0 1-28-28m-96 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28m142.7 134.75a36 36 0 1 0-37.4 0A63.4 63.4 0 0 0 128 217.7a63.34 63.34 0 0 0-29.3-18.95a36 36 0 1 0-37.4 0a63.6 63.6 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8a56 56 0 0 1 89.6 0a3.93 3.93 0 0 0 6.38 0a56 56 0 0 1 89.6 0a4 4 0 0 0 6.4-4.8a63.55 63.55 0 0 0-32.48-22.85M52 168a28 28 0 1 1 28 28a28 28 0 0 1-28-28m96 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></svg:path>`,
})
export class PhUsersFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThinIcon],svg[ph-users-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.19 159a56 56 0 1 0-46.38 0a91.83 91.83 0 0 0-53.93 38.81a4 4 0 1 0 6.7 4.37a84 84 0 0 1 140.84 0a4 4 0 1 0 6.7-4.37A91.83 91.83 0 0 0 107.19 159M36 108a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48m212 95.35a4 4 0 0 1-5.53-1.17A83.81 83.81 0 0 0 172 164a4 4 0 0 1 0-8a48 48 0 1 0-17.82-92.58a4 4 0 1 1-3-7.43a56 56 0 0 1 44 103a91.83 91.83 0 0 1 53.93 38.86a4 4 0 0 1-1.11 5.5"></svg:path>`,
})
export class PhUsersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeThinIcon],svg[ph-users-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 147.44a4 4 0 0 1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4 4 0 0 1-1.2-.2a37 37 0 0 1-3.8.2a4 4 0 0 1 0-8a28 28 0 1 0-27.12-35a4 4 0 0 1-7.75-2a36 36 0 1 1 54 39.48c10.81 3.85 20.51 12 27.31 23.48a4 4 0 0 1-1.4 5.44M187.46 214a4 4 0 0 1-1.46 5.46a3.93 3.93 0 0 1-2 .54a4 4 0 0 1-3.46-2a61 61 0 0 0-105.08 0a4 4 0 0 1-6.92-4a68.35 68.35 0 0 1 39.19-31a44 44 0 1 1 40.54 0a68.35 68.35 0 0 1 39.19 31M128 180a36 36 0 1 0-36-36a36 36 0 0 0 36 36m-64-64a28 28 0 1 1 27.12-35a4 4 0 0 0 7.75-2a36 36 0 1 0-53.57 39.75a63.55 63.55 0 0 0-32.5 22.85a4 4 0 0 0 6.4 4.8A55.55 55.55 0 0 1 64 124a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhUsersThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanThinIcon],svg[ph-van-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251 109.4l-45.53-53.1a12 12 0 0 0-9.21-4.3H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-1-2.6m-51.64-47.93L239.3 108H172V60h24.26a4 4 0 0 1 3.1 1.47M100 108V60h64v48ZM32 60h60v48H28V64a4 4 0 0 1 4-4m48 144a20 20 0 1 1 20-20a20 20 0 0 1-20 20m112 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48-24h-20.29a28 28 0 0 0-55.42 0h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-60h216v60a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhVanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultThinIcon],svg[ph-vault-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h20v20a4 4 0 0 0 8 0v-20h120v20a4 4 0 0 0 8 0v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m0 152H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v68h-24.19a44 44 0 1 0 0 8H220v60a4 4 0 0 1-4 4m-52.7-72a12 12 0 1 0 0 8h24.47a36 36 0 1 1 0-8Z"></svg:path>`,
})
export class PhVaultThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeThinIcon],svg[ph-vector-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 138.83l-32 32a4 4 0 0 1-5.66-5.66L222.34 140H121.66l-64 64H96a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v38.34l64-64V33.66L90.83 58.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L124 33.66V132h98.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhVectorThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoThinIcon],svg[ph-vector-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 194.83l-32 32a4 4 0 0 1-5.66-5.66L214.34 196H80a4 4 0 0 1-4-4V49.66L50.83 74.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L84 49.66V188h130.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhVectorTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateThinIcon],svg[ph-vibrate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 36H96a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m12 164a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12Zm40-112v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0M52 88v80a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m-32 16v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhVibrateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashThinIcon],svg[ph-video-camera-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.89 76.47a4 4 0 0 0-4.11.2L204 104.53V72a12 12 0 0 0-12-12h-78.94a4 4 0 0 0 0 8H192a4 4 0 0 1 4 4v87.63a4 4 0 0 0 8 0v-8.16l41.78 27.86A4 4 0 0 0 252 176V80a4 4 0 0 0-2.11-3.53M244 168.53l-40-26.67v-27.72l40-26.67ZM51 37.31a4 4 0 0 0-6 5.38L60.78 60H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h152.41L205 218.69a4 4 0 1 0 5.92-5.38ZM32 188a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h36.05l109.09 120Z"></svg:path>`,
})
export class PhVideoCameraSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraThinIcon],svg[ph-video-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.89 76.47a4 4 0 0 0-4.11.2L204 104.53V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-32.53l41.78 27.86A4 4 0 0 0 252 176V80a4 4 0 0 0-2.11-3.53M196 184a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm48-15.47l-40-26.67v-27.72l40-26.67Z"></svg:path>`,
})
export class PhVideoCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceThinIcon],svg[ph-video-conference-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 12v68h-56V52h52a4 4 0 0 1 4 4M36 200V56a4 4 0 0 1 4-4h116v152H40a4 4 0 0 1-4-4m180 4h-52v-72h56v68a4 4 0 0 1-4 4M184 88a8 8 0 1 1 8 8a8 8 0 0 1-8-8m16 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-68.13-1a36.2 36.2 0 0 0-20.43-23.67a28 28 0 1 0-30.88 0A36.28 36.28 0 0 0 60.13 167a4 4 0 0 0 2.87 4.87a4 4 0 0 0 1 .13a4 4 0 0 0 3.87-3C71 157 83.05 148 96 148s25.06 9 28.13 21a4 4 0 1 0 7.74-2M76 120a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhVideoConferenceThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoThinIcon],svg[ph-video-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m162.22 108.67l-48-32A4 4 0 0 0 108 80v64a4 4 0 0 0 2.11 3.53a4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M116 136.53V87.47L152.79 112ZM216 44H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm8 40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhVideoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteThinIcon],svg[ph-vignette-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM128 76c-37.5 0-68 23.33-68 52s30.5 52 68 52s68-23.33 68-52s-30.5-52-68-52m0 96c-33.08 0-60-19.74-60-44s26.92-44 60-44s60 19.74 60 44s-26.92 44-60 44"></svg:path>`,
})
export class PhVignetteThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordThinIcon],svg[ph-vinyl-record-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-152a60.07 60.07 0 0 0-60 60a4 4 0 0 1-8 0a68.07 68.07 0 0 1 68-68a4 4 0 0 1 0 8m68 60a68.07 68.07 0 0 1-68 68a4 4 0 0 1 0-8a60.07 60.07 0 0 0 60-60a4 4 0 0 1 8 0m-40 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-48 0a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhVinylRecordThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityThinIcon],svg[ph-virtual-reality-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m119.75 97.4l-24 64a4 4 0 0 1-7.5 0l-24-64a4 4 0 1 1 7.5-2.8l20.25 54l20.25-54a4 4 0 0 1 7.5 2.8M252 128a76.08 76.08 0 0 1-76 76H80a76 76 0 0 1 0-152h96a76.08 76.08 0 0 1 76 76m-8 0a68.07 68.07 0 0 0-68-68H80a68 68 0 0 0 0 136h96a68.07 68.07 0 0 0 68-68m-68.5 9.06l12 21a4 4 0 0 1-1.49 5.45a3.9 3.9 0 0 1-2 .53a4 4 0 0 1-3.47-2l-12.75-22.34a25 25 0 0 1-3.79.3h-16v20a4 4 0 0 1-8 0V96a4 4 0 0 1 4-4h20a24 24 0 0 1 11.5 45.06M180 116a16 16 0 0 0-16-16h-16v32h16a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhVirtualRealityThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusThinIcon],svg[ph-virus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 108a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-24 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m80 4a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-48 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12m100-52h-20.09a91.64 91.64 0 0 0-24.12-58.13l15-15a4 4 0 1 0-5.66-5.66l-15 15A91.64 91.64 0 0 0 132 36.09V16a4 4 0 0 0-8 0v20.09a91.64 91.64 0 0 0-58.13 24.12l-15-15a4 4 0 0 0-5.66 5.66l15 15A91.64 91.64 0 0 0 36.09 124H16a4 4 0 0 0 0 8h20.09a91.64 91.64 0 0 0 24.12 58.13l-15 15a4 4 0 0 0 5.66 5.66l15-15A91.64 91.64 0 0 0 124 219.91V240a4 4 0 0 0 8 0v-20.09a91.64 91.64 0 0 0 58.13-24.12l15 15a4 4 0 0 0 5.66-5.66l-15-15A91.64 91.64 0 0 0 219.91 132H240a4 4 0 0 0 0-8m-112 88a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class PhVirusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorThinIcon],svg[ph-visor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 60H72a68 68 0 0 0-67.93 71.21c1.6 34.66 30 63.08 64.65 64.71c14.77.72 30-5.64 46.63-19.38a19.9 19.9 0 0 1 25.35 0C150.79 184.92 166.25 196 184 196a68 68 0 0 0 68-68.9c-.49-37-31.42-67.1-68.95-67.1m43.65 110.15A59.57 59.57 0 0 1 184 188c-15.17 0-29.07-10-38.2-17.58a27.88 27.88 0 0 0-35.55 0c-15 12.41-28.45 18.14-41.15 17.55a60.37 60.37 0 0 1-57-57.09A60 60 0 0 1 72 68h111.05c33.18 0 60.52 26.56 60.94 59.2a59.6 59.6 0 0 1-17.29 42.95M180 96a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhVisorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailThinIcon],svg[ph-voicemail-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76a52 52 0 0 0-27.66 96H83.66A52 52 0 1 0 56 180h144a52 52 0 0 0 0-104M12 128a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m188 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhVoicemailThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballThinIcon],svg[ph-volleyball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m85 135.19a92 92 0 0 1-102.18 2.57L130.31 132h89.6a91.6 91.6 0 0 1-6.91 31.19M85.52 46.42A91.1 91.1 0 0 1 116 36.79A92 92 0 0 1 169.29 124h-39ZM219.91 124h-42.62a100.06 100.06 0 0 0-46-87.93A92.11 92.11 0 0 1 219.91 124M78.59 50.42l21.3 36.89a100.09 100.09 0 0 0-53.16 83.77A91.92 91.92 0 0 1 78.59 50.42M55 183.94a92 92 0 0 1 48.87-89.7L123.38 128l-44.79 77.58A92.8 92.8 0 0 1 55 183.94M128 220a91.4 91.4 0 0 1-42.48-10.42l21.3-36.89a100.07 100.07 0 0 0 99.1 4.16A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhVolleyballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallThinIcon],svg[ph-wall-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M84 148v-40h88v40Zm-48 0v-40h40v40Zm144-40h40v40h-40Zm40-8h-88V60h88Zm-96-40v40H36V60Zm-88 96h88v40H36Zm96 40v-40h88v40Z"></svg:path>`,
})
export class PhWallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletThinIcon],svg[ph-wallet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68H56a12 12 0 0 1 0-24h136a4 4 0 0 0 0-8H56a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h160a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12V72a19.86 19.86 0 0 0 12 4h160a4 4 0 0 1 4 4Zm-32-60a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWalletThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseThinIcon],svg[ph-warehouse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-12V54.66l12.84-2.75a4 4 0 1 0-1.68-7.82l-224 48A4 4 0 0 0 16 100a4 4 0 0 0 .84-.09L28 97.52V188H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 95.81l184-39.43V188h-32v-60a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v60H36ZM180 156H76v-24h104Zm-104 8h104v24H76Z"></svg:path>`,
})
export class PhWarehouseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleThinIcon],svg[ph-warning-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-4-84V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWarningCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondThinIcon],svg[ph-warning-diamond-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8m108-36a11.87 11.87 0 0 1-3.5 8.45l-96.05 96.06a12 12 0 0 1-16.9 0l-96-96.06a12 12 0 0 1 0-16.9l96.05-96.06a12 12 0 0 1 16.9 0l96.05 96.06A11.87 11.87 0 0 1 236 128m-8 0a3.9 3.9 0 0 0-1.16-2.79l-96.05-96.06a4 4 0 0 0-5.58 0l-96 96.06a3.94 3.94 0 0 0 0 5.58l96.05 96.06a4 4 0 0 0 5.58 0l96.05-96.06A3.9 3.9 0 0 0 228 128"></svg:path>`,
})
export class PhWarningDiamondThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonThinIcon],svg[ph-warning-octagon-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m104-44.45v72.9a12 12 0 0 1-3.51 8.49l-51.55 51.55a12 12 0 0 1-8.49 3.51h-72.9a12 12 0 0 1-8.49-3.51l-51.55-51.55a12 12 0 0 1-3.51-8.49v-72.9a12 12 0 0 1 3.51-8.49l51.55-51.55A12 12 0 0 1 91.55 28h72.9a12 12 0 0 1 8.49 3.51l51.55 51.55a12 12 0 0 1 3.51 8.49m-8 0a4 4 0 0 0-1.17-2.83l-51.55-51.55a4.06 4.06 0 0 0-2.83-1.17h-72.9a4.06 4.06 0 0 0-2.83 1.17L37.17 88.72A4 4 0 0 0 36 91.55v72.9a4 4 0 0 0 1.17 2.83l51.55 51.55a4.06 4.06 0 0 0 2.83 1.17h72.9a4.06 4.06 0 0 0 2.83-1.17l51.55-51.55a4 4 0 0 0 1.17-2.83ZM128 164a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhWarningOctagonThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningThinIcon],svg[ph-warning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.34 190.09L145.88 38.22a20.75 20.75 0 0 0-35.76 0L22.66 190.09a19.52 19.52 0 0 0 0 19.71A20.36 20.36 0 0 0 40.54 220h174.92a20.36 20.36 0 0 0 17.86-10.2a19.52 19.52 0 0 0 .02-19.71m-6.94 15.71a12.47 12.47 0 0 1-10.94 6.2H40.54a12.47 12.47 0 0 1-10.94-6.2a11.45 11.45 0 0 1 0-11.72l87.45-151.87a12.76 12.76 0 0 1 21.9 0l87.45 151.87a11.45 11.45 0 0 1 0 11.72M124 144v-40a4 4 0 0 1 8 0v40a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhWarningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineThinIcon],svg[ph-washing-machine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM128 68a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52m68-112a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-73.17 46.83l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 5.66m32 2.34a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhWashingMachineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchThinIcon],svg[ph-watch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 128a75.94 75.94 0 0 0-32.35-62.16l-6.52-36A12 12 0 0 0 153.32 20h-50.64a12 12 0 0 0-11.81 9.86l-6.52 36a75.89 75.89 0 0 0 0 124.32l6.52 36a12 12 0 0 0 11.81 9.82h50.64a12 12 0 0 0 11.81-9.86l6.52-36A75.94 75.94 0 0 0 204 128M98.74 31.29a4 4 0 0 1 3.94-3.29h50.64a4 4 0 0 1 3.94 3.29l5.26 29a75.69 75.69 0 0 0-69 0Zm58.52 193.42a4 4 0 0 1-3.94 3.29h-50.64a4 4 0 0 1-3.94-3.29l-5.26-29a75.69 75.69 0 0 0 69 0ZM128 196a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68m44-68a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhWatchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothThinIcon],svg[ph-wave-sawtooth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.1 131.41l-104 64a4 4 0 0 1-2.1.59a4 4 0 0 1-4-4V71.16l-97.9 60.25a4 4 0 0 1-4.2-6.82l104-64A4 4 0 0 1 132 64v120.84l97.9-60.25a4 4 0 1 1 4.2 6.82"></svg:path>`,
})
export class PhWaveSawtoothThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineThinIcon],svg[ph-wave-sine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.62 129.7C214.4 174.93 196.1 196 178 196c-22.56 0-37.67-32.21-53.66-66.3C110.15 99.37 95.44 68 78 68c-14.2 0-31.13 20.76-50.34 61.7a4 4 0 0 1-7.24-3.4C41.6 81.07 59.9 60 78 60c22.56 0 37.67 32.21 53.66 66.3c14.19 30.33 28.9 61.7 46.34 61.7c14.2 0 31.13-20.76 50.34-61.7a4 4 0 0 1 7.24 3.4Z"></svg:path>`,
})
export class PhWaveSineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareThinIcon],svg[ph-wave-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128v56a4 4 0 0 1-4 4H128a4 4 0 0 1-4-4V76H28v52a4 4 0 0 1-8 0V72a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v108h96v-52a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhWaveSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleThinIcon],svg[ph-wave-triangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.24 130.34l-52 72a4 4 0 0 1-6.48 0L76 62.83l-48.76 67.51a4 4 0 1 1-6.48-4.68l52-72a4 4 0 0 1 6.48 0L180 193.17l48.76-67.51a4 4 0 0 1 6.48 4.68"></svg:path>`,
})
export class PhWaveTriangleThinIcon {
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
