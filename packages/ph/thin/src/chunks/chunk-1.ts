import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideThinIcon],svg[ph-divide-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-92-52a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 104a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDivideThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaThinIcon],svg[ph-dna-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 204.5V232a4 4 0 0 1-8 0v-27.5a67.62 67.62 0 0 0-37.59-60.82L102 119.48a75.6 75.6 0 0 1-42-68V24a4 4 0 0 1 8 0v27.5a67.62 67.62 0 0 0 37.59 60.82l48.4 24.2A75.6 75.6 0 0 1 196 204.5m-36-.5H68a67.7 67.7 0 0 1 4.59-24h75.51a4 4 0 0 0 0-8H76.3a67.9 67.9 0 0 1 19.45-22.31a4 4 0 0 0-4.75-6.45a76.26 76.26 0 0 0-31 61.26V232a4 4 0 0 0 8 0v-20h92a4 4 0 0 0 0-8m32-184a4 4 0 0 0-4 4v20H96a4 4 0 0 0 0 8h92a67.7 67.7 0 0 1-4.59 24h-75.52a4 4 0 1 0 0 8h71.81a67.9 67.9 0 0 1-19.45 22.31a4 4 0 0 0 4.74 6.45A76.26 76.26 0 0 0 196 51.5V24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhDnaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogThinIcon],svg[ph-dog-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8a8 8 0 0 0 8 8m64.94-9.11a12.1 12.1 0 0 1-5 1.11a11.83 11.83 0 0 1-9.35-4.62l-2.59-3.29V184a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36v-51.91l-2.53 3.27A11.88 11.88 0 0 1 32.1 140a12.1 12.1 0 0 1-5-1.11a11.82 11.82 0 0 1-6.84-13.14l16.42-88a12 12 0 0 1 14.7-9.43h.16L104.58 44h46.84l53.08-15.6h.16a12 12 0 0 1 14.7 9.43l16.42 88a11.81 11.81 0 0 1-6.84 13.06M97.25 50.18L49.34 36.1a4.2 4.2 0 0 0-.92-.1a4 4 0 0 0-3.92 3.26l-16.42 88a4 4 0 0 0 7.08 3.22ZM204 121.75L150 52h-44l-54 69.75V184a28 28 0 0 0 28 28h44v-18.34l-14.83-14.83a4 4 0 0 1 5.66-5.66L128 186.34l13.17-13.17a4 4 0 0 1 5.66 5.66L132 193.66V212h44a28 28 0 0 0 28-28Zm23.92 5.48l-16.42-88a4 4 0 0 0-4.84-3.16l-47.91 14.11l62.11 80.28a4 4 0 0 0 7.06-3.23"></svg:path>`,
})
export class PhDogThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenThinIcon],svg[ph-door-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-28V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v180H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M196 40v180h-24V36h20a4 4 0 0 1 4 4M60 40a4 4 0 0 1 4-4h100v184H60Zm80 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDoorOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorThinIcon],svg[ph-door-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-28V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v180H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M60 40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v180H60Zm104 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDoorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineThinIcon],svg[ph-dot-outline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhDotOutlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotThinIcon],svg[ph-dot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineThinIcon],svg[ph-dots-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m60-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 16a8 8 0 1 0-8-8a8 8 0 0 0 8 8M60 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8M60 188a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixThinIcon],svg[ph-dots-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m60-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 16a8 8 0 1 0-8-8a8 8 0 0 0 8 8M60 156a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalThinIcon],svg[ph-dots-six-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-72 52a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-72 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsSixVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleThinIcon],svg[ph-dots-three-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDotsThreeCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalThinIcon],svg[ph-dots-three-circle-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-136a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDotsThreeCircleVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineThinIcon],svg[ph-dots-three-outline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m-80-48a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m160-48a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhDotsThreeOutlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalThinIcon],svg[ph-dots-three-outline-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-72a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20a20 20 0 0 1 20-20m0 152a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeThinIcon],svg[ph-dots-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-76-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m136 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalThinIcon],svg[ph-dots-three-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 60a8 8 0 1 1 8 8a8 8 0 0 1-8-8m8 60a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDotsThreeVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleThinIcon],svg[ph-download-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 144v64a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-64a4 4 0 0 1 8 0v60h168v-60a4 4 0 0 1 8 0m-94.83 2.83a4 4 0 0 0 5.66 0l40-40a4 4 0 1 0-5.66-5.66L132 134.34V32a4 4 0 0 0-8 0v102.34l-33.17-33.17a4 4 0 0 0-5.66 5.66Z"></svg:path>`,
})
export class PhDownloadSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadThinIcon],svg[ph-download-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 136v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-64a12 12 0 0 1 12-12h40a4 4 0 0 1 0 8H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4v-64a4 4 0 0 0-4-4h-40a4 4 0 0 1 0-8h40a12 12 0 0 1 12 12m-110.83-5.17a4 4 0 0 0 5.66 0l48-48a4 4 0 1 0-5.66-5.66L132 118.34V24a4 4 0 0 0-8 0v94.34L82.83 77.17a4 4 0 0 0-5.66 5.66ZM196 168a8 8 0 1 0-8 8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhDownloadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressThinIcon],svg[ph-dress-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 211.27l-.06-.12l-46.41-98.86l21.68-34v-.1a11.94 11.94 0 0 0 0-12.34l-.15-.24L164 34V8a4 4 0 0 0-8 0v25.82l-6.13 7.67a28 28 0 0 1-43.74 0L100 33.82V8a4 4 0 0 0-8 0v26L69.86 65.59l-.15.24a11.94 11.94 0 0 0 0 12.34a1 1 0 0 1 .05.1l21.68 34L45 211.15l-.06.12A12 12 0 0 0 56 228h144a12 12 0 0 0 11-16.73M76.54 74a4 4 0 0 1 0-4l19.67-28.1l3.68 4.59a36 36 0 0 0 56.22 0l3.68-4.59l19.7 28.1a4 4 0 0 1 0 4l-21.65 34H98.19Zm126.79 144.2A3.94 3.94 0 0 1 200 220H56a3.94 3.94 0 0 1-3.33-1.8a3.89 3.89 0 0 1-.36-3.72L98.54 116h58.92l46.23 98.48a3.89 3.89 0 0 1-.36 3.72"></svg:path>`,
})
export class PhDressThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserThinIcon],svg[ph-dresser-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 192a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4M120 68h16a4 4 0 0 0 0-8h-16a4 4 0 0 0 0 8m16 56h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m76-84v176a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12M52 156h152v-56H52Zm0-116v52h152V40a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4m152 176v-52H52v52a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhDresserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoThinIcon],svg[ph-dribbble-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.92 96.43C216 124.15 212 124 208 124a164.4 164.4 0 0 0-46.55 6.74A163.5 163.5 0 0 0 146.61 97c-.49-.82-1-1.64-1.5-2.46a164 164 0 0 0 43.39-35.79a91.8 91.8 0 0 1 31.42 65.68m-37.67-70.68a156.2 156.2 0 0 1-41.46 34.08a165 165 0 0 0-46.3-45.51a91.86 91.86 0 0 1 87.76 11.43m-96.47-7.47a157 157 0 0 1 47.9 45.34A155.7 155.7 0 0 1 64 108a157.5 157.5 0 0 1-25.33-2a92.35 92.35 0 0 1 47.11-59.72M36 128a92 92 0 0 1 1.1-14.2A165.6 165.6 0 0 0 64 116a163.6 163.6 0 0 0 74.05-17.62c.55.9 1.11 1.79 1.64 2.7a155 155 0 0 1 14.14 32.11a162.7 162.7 0 0 0-27.59 12.61A164.94 164.94 0 0 0 70 199.36A91.84 91.84 0 0 1 36 128m40.44 76.16a157.1 157.1 0 0 1 53.8-51.43A154 154 0 0 1 156 140.91a156.3 156.3 0 0 1 4.9 38.78a157 157 0 0 1-4.11 35.69a91.94 91.94 0 0 1-80.37-11.22Zm89.3 7.74a165 165 0 0 0 3.18-32.21a164.3 164.3 0 0 0-5.28-41.26A156.4 156.4 0 0 1 208 132c4 0 7.94.15 11.88.45a92.17 92.17 0 0 1-54.14 79.45"></svg:path>`,
})
export class PhDribbbleLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneThinIcon],svg[ph-drone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.83 74.83a4 4 0 1 0-5.66-5.66L150.34 100h-44.68L74.83 69.17a4 4 0 0 0-5.66 5.66L100 105.66v44.68l-30.83 30.83a4 4 0 0 0 5.66 5.66L105.66 156h44.68l30.83 30.83a4 4 0 0 0 5.66-5.66L156 150.34v-44.68ZM108 108h40v40h-40Zm34.28-45.33a40 40 0 1 1 51.05 51.05a3.9 3.9 0 0 1-1.33.28a4 4 0 0 1-1.33-7.77a32 32 0 1 0-40.85-40.85a4 4 0 1 1-7.54-2.66ZM220 180a40 40 0 0 1-77.72 13.33a4 4 0 1 1 7.54-2.66a32 32 0 1 0 40.85-40.85a4 4 0 0 1 2.66-7.54A40.06 40.06 0 0 1 220 180m-106.28 13.33a40 40 0 1 1-51-51.05a4 4 0 0 1 2.66 7.54a32 32 0 1 0 40.85 40.85a4 4 0 0 1 7.54 2.66ZM36 76a40 40 0 0 1 77.72-13.33a4 4 0 0 1-7.54 2.66a32 32 0 1 0-40.85 40.85A4 4 0 0 1 64 114a3.9 3.9 0 0 1-1.33-.23A40.06 40.06 0 0 1 36 76"></svg:path>`,
})
export class PhDroneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomThinIcon],svg[ph-drop-half-bottom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65a4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M189.91 188H66.09a75.6 75.6 0 0 1-11.4-24h146.62a75.6 75.6 0 0 1-11.4 24M53 156a75.4 75.4 0 0 1-1-12a93 93 0 0 1 .79-12h150.42a93 93 0 0 1 .79 12a75.4 75.4 0 0 1-1 12ZM90.9 55.77A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81c14.37 16.55 31 40.61 36.77 68.23H54.13c5.8-27.66 22.4-51.72 36.77-68.27M128 220a75.77 75.77 0 0 1-55.35-24h110.7A75.77 75.77 0 0 1 128 220"></svg:path>`,
})
export class PhDropHalfBottomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfThinIcon],svg[ph-drop-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65a4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M204 144a75.4 75.4 0 0 1-1 12h-71v-24h71.21a93 93 0 0 1 .79 12m-13.86-52H132V68h43a176.6 176.6 0 0 1 15.14 24M132 164h69.31a75.6 75.6 0 0 1-11.4 24H132Zm0-40v-24h62a120 120 0 0 1 7.88 24Zm33.1-68.23q1.77 2 3.59 4.23H132V24.07a256.4 256.4 0 0 1 33.1 31.7M52 144c0-35.9 21.15-67.8 38.9-88.23a256.4 256.4 0 0 1 33.1-31.7v195.82A76.09 76.09 0 0 1 52 144m80 75.89V196h51.35A75.8 75.8 0 0 1 132 219.89"></svg:path>`,
})
export class PhDropHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleThinIcon],svg[ph-drop-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65a4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M128 220a76.08 76.08 0 0 1-76-76c0-35.9 21.15-67.8 38.9-88.23A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81C182.85 76.2 204 108.1 204 144a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhDropSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashThinIcon],svg[ph-drop-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l24.81 27.24C52.7 94.85 44 119.75 44 144a84 84 0 0 0 145.32 57.4L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a76.08 76.08 0 0 1-76-76c0-22.1 7.85-44.95 23.33-68l108.59 119.46A75.83 75.83 0 0 1 128 220M92.78 47.62a4 4 0 0 1-.13-5.62a245 245 0 0 1 33.06-29.24a4 4 0 0 1 4.58 0A250.2 250.2 0 0 1 171 50.37c26.81 30.84 41 63.21 41 93.63a84.3 84.3 0 0 1-3 22.34a4 4 0 0 1-3.86 2.94a4 4 0 0 1-1.06-.14a4 4 0 0 1-2.8-4.92A76 76 0 0 0 204 144c0-62.29-63.08-113.25-76-123a251.4 251.4 0 0 0-29.56 26.48a4 4 0 0 1-5.66.14"></svg:path>`,
})
export class PhDropSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropThinIcon],svg[ph-drop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 50.38a250 250 0 0 0-40.73-37.66a4 4 0 0 0-4.58 0A250 250 0 0 0 85 50.38C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.62M128 220a76.08 76.08 0 0 1-76-76c0-35.9 21.15-67.8 38.9-88.24A255 255 0 0 1 128 21a255 255 0 0 1 37.1 34.8C182.85 76.2 204 108.1 204 144a76.08 76.08 0 0 1-76 76m51.94-67.33a53.51 53.51 0 0 1-43.28 43.27a3.7 3.7 0 0 1-.66.06a4 4 0 0 1-.66-7.94c18.18-3.06 33.63-18.51 36.72-36.73a4 4 0 0 1 7.88 1.34"></svg:path>`,
})
export class PhDropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoThinIcon],svg[ph-dropbox-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.28 152.71L187 120l47.25-32.71a4 4 0 0 0 0-6.58l-52-36a4 4 0 0 0-4.56 0L128 79.14L78.28 44.71a4 4 0 0 0-4.56 0l-52 36a4 4 0 0 0 0 6.58L69 120l-47.28 32.71a4 4 0 0 0 0 6.58l52 36a4 4 0 0 0 4.56 0L128 160.86l49.72 34.43a4 4 0 0 0 4.56 0l52-36a4 4 0 0 0 0-6.58M128 151.14L83 120l45-31.14L173 120Zm52-98.27L225 84l-45 31.13L135 84Zm-104 0L121 84l-45 31.13L31 84Zm0 134.26L31 156l45-31.13L121 156Zm104 0L135 156l45-31.13L225 156Zm-24.82 22.05a4 4 0 0 1-1 5.57l-23.89 16.54a4 4 0 0 1-4.56 0l-23.89-16.54a4 4 0 0 1 4.56-6.58l21.61 15l21.61-15a4 4 0 0 1 5.56 1.01"></svg:path>`,
})
export class PhDropboxLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashThinIcon],svg[ph-ear-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L58.23 57.2A83.4 83.4 0 0 0 44 104c0 31.79 11.28 42.68 21.24 52.28C73.16 163.91 80 170.51 80 188a48.05 48.05 0 0 0 48 48c13.71 0 25.52-5.87 35.08-17.45a4 4 0 0 0-6.16-5.1C148.83 223.24 139.37 228 128 228a40 40 0 0 1-40-40c0-20.89-8.75-29.33-17.21-37.48C61.55 141.61 52 132.4 52 104a75.36 75.36 0 0 1 11.8-40.67l23 25.27A43.7 43.7 0 0 0 84 104a4 4 0 0 0 8 0a36.2 36.2 0 0 1 1-8.53L141.65 149a37 37 0 0 0-1.65 11a20 20 0 0 0 28.24 18.21L205 218.69a4 4 0 1 0 5.92-5.38ZM160 172a12 12 0 0 1-12-12a30 30 0 0 1 .24-3.79l14.13 15.55a12.4 12.4 0 0 1-2.37.24M83.55 37.36a4 4 0 0 1 1.37-5.49A84 84 0 0 1 212 104a4 4 0 0 1-8 0A76 76 0 0 0 89 38.74a4 4 0 0 1-5.45-1.38m76.89 80.81A29.85 29.85 0 0 0 164 104a36 36 0 0 0-47.68-34.06a4 4 0 1 1-2.59-7.57A44 44 0 0 1 172 104a38 38 0 0 1-4.46 17.84A4 4 0 0 1 164 124a3.9 3.9 0 0 1-1.83-.45a4 4 0 0 1-1.73-5.38"></svg:path>`,
})
export class PhEarSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarThinIcon],svg[ph-ear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 104a4 4 0 0 1-8 0a76 76 0 0 0-152 0c0 28.4 9.55 37.61 18.79 46.52C79.25 158.67 88 167.11 88 188a40 40 0 0 0 40 40c11.37 0 20.83-4.76 28.92-14.55a4 4 0 0 1 6.16 5.1C153.52 230.13 141.71 236 128 236a48.05 48.05 0 0 1-48-48c0-17.49-6.84-24.09-14.76-31.72C55.28 146.68 44 135.79 44 104a84 84 0 0 1 168 0m-36.14 60.54a4 4 0 0 0-5.46 1.46a12 12 0 0 1-22.4-6c0-10.67 5.44-17.92 11.2-25.6c6.29-8.4 12.8-17.07 12.8-30.4a44 44 0 0 0-88 0a4 4 0 0 0 8 0a36 36 0 0 1 72 0c0 10.67-5.44 17.92-11.2 25.6c-6.29 8.4-12.8 17.07-12.8 30.4a20 20 0 0 0 37.32 10a4 4 0 0 0-1.46-5.46"></svg:path>`,
})
export class PhEarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackThinIcon],svg[ph-egg-crack-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132m0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28c11.39 0 26.05 9.8 39.42 25.82L125 101.34a4 4 0 0 0 2 6.54l28.3 7.08l-7.25 36.26a4 4 0 0 0 3.14 4.7a3.4 3.4 0 0 0 .78.08a4 4 0 0 0 3.92-3.22l8-40a4 4 0 0 0-2.95-4.66l-25.58-6.4l37.08-41.52q2.16 2.91 4.23 6C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhEggCrackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggThinIcon],svg[ph-egg-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132m0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28s33.19 15 48.67 38.22C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhEggThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleThinIcon],svg[ph-eject-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 200a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4M29.2 149.12a12 12 0 0 1 1.51-12.83l81.66-100.83a20.1 20.1 0 0 1 31.26 0l81.66 100.83a12.1 12.1 0 0 1-9.37 19.71H40.08a12 12 0 0 1-10.88-6.88m7.22-3.44a4 4 0 0 0 3.66 2.32h175.84a4 4 0 0 0 3.66-2.32a4 4 0 0 0-.51-4.36L137.41 40.5a12.09 12.09 0 0 0-18.82 0L36.93 141.32a4 4 0 0 0-.51 4.36"></svg:path>`,
})
export class PhEjectSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectThinIcon],svg[ph-eject-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 156H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM48.23 132h159.54a12 12 0 0 0 11.23-7.33a11.68 11.68 0 0 0-2.33-12.8L143 34.37a20.75 20.75 0 0 0-29.92 0l-73.78 77.5a11.68 11.68 0 0 0-2.3 12.8A12 12 0 0 0 48.23 132m-3.13-14.61l73.73-77.51a12.78 12.78 0 0 1 18.34 0l73.73 77.51a3.66 3.66 0 0 1 .77 4.12a4.1 4.1 0 0 1-3.9 2.49H48.23a4.1 4.1 0 0 1-3.9-2.49a3.66 3.66 0 0 1 .77-4.12"></svg:path>`,
})
export class PhEjectThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorThinIcon],svg[ph-elevator-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-28 72v104h-48V108Zm-56 104H76V108h48Zm88-4a4 4 0 0 1-4 4h-20V104a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v108H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM148 72a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhElevatorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyThinIcon],svg[ph-empty-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192.76 62.72l18.2-20a4 4 0 0 0-5.96-5.41l-18.2 20a92 92 0 0 0-123.6 136l-18.2 20a4 4 0 1 0 6 5.38l18.2-20A92 92 0 0 0 192.76 62.72M44 128a84 84 0 0 1 137.46-64.75L68.63 187.36A83.72 83.72 0 0 1 44 128m84 84a83.64 83.64 0 0 1-53.46-19.25L187.37 68.64A84 84 0 0 1 128 212"></svg:path>`,
})
export class PhEmptyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineThinIcon],svg[ph-engine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 108h-14.34l-36.49-36.49a11.93 11.93 0 0 0-8.48-3.51H136V36h28a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8h28v32H64a12 12 0 0 0-12 12v56H20v-28a4 4 0 0 0-8 0v64a4 4 0 0 0 8 0v-28h32v24.69a11.93 11.93 0 0 0 3.51 8.48l39.32 39.32a11.93 11.93 0 0 0 8.48 3.51h77.38a11.93 11.93 0 0 0 8.48-3.51L225.66 180H240a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-16a4 4 0 0 0-2.83 1.17l-37.66 37.66a4 4 0 0 1-2.82 1.17h-77.38a4 4 0 0 1-2.82-1.17l-39.32-39.32a4 4 0 0 1-1.17-2.82V80a4 4 0 0 1 4-4h116.69a4 4 0 0 1 2.82 1.17l37.66 37.66A4 4 0 0 0 224 116h16a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhEngineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenThinIcon],svg[ph-envelope-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.22 92.67l-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33M103.63 152L36 199.76v-96Zm8.19 4h32.36l68 48H43.86Zm40.55-4L220 103.76v96ZM128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11Z"></svg:path>`,
})
export class PhEnvelopeOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenThinIcon],svg[ph-envelope-simple-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.22 92.67l-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33M128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11ZM216 204H40a4 4 0 0 1-4-4v-96.24l72.22 51.5a4 4 0 0 0 2.33.74h34.9a4 4 0 0 0 2.33-.74l72.22-51.5V200a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhEnvelopeSimpleOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleThinIcon],svg[ph-envelope-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-10.28 8L128 138.57L42.28 60ZM216 196H40a4 4 0 0 1-4-4V65.09L125.3 147a4 4 0 0 0 5.4 0L220 65.09V192a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhEnvelopeSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeThinIcon],svg[ph-envelope-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-96 86.57L42.28 60h171.44ZM104.63 128L36 190.91V65.09Zm5.92 5.43L125.3 147a4 4 0 0 0 5.4 0l14.75-13.52L213.72 196H42.28Zm40.82-5.43L220 65.09v125.82Z"></svg:path>`,
})
export class PhEnvelopeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerThinIcon],svg[ph-equalizer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 96a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4 28H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-64h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m80-96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-48-24h48a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8m48 56h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhEqualizerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsThinIcon],svg[ph-equals-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 160a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 100h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhEqualsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserThinIcon],svg[ph-eraser-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.15 83.22l-41.38-41.37a20 20 0 0 0-28.28 0L33.85 160.48a20 20 0 0 0 0 28.29l30.06 30.06a4 4 0 0 0 2.83 1.17H216a4 4 0 0 0 0-8h-94.34l100.49-100.49a20 20 0 0 0 0-28.29M110.34 212H68.4l-28.89-28.89a12 12 0 0 1 0-17L96 109.65L154.35 168Zm106.15-106.15L160 162.34L101.65 104l56.49-56.48a12 12 0 0 1 17 0l41.37 41.37a12 12 0 0 1-.02 16.96"></svg:path>`,
})
export class PhEraserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownThinIcon],svg[ph-escalator-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.17 82.83a4 4 0 0 1 5.66-5.66L196 94.34V48a4 4 0 0 1 8 0v46.34l17.17-17.17a4 4 0 1 1 5.66 5.66l-24 24a4 4 0 0 1-5.66 0ZM236 160v40a12 12 0 0 1-12 12h-56a4 4 0 0 1-2.94-1.29L70.25 108H32a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h56a4 4 0 0 1 2.94 1.29L185.75 148H224a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4h-40a4 4 0 0 1-2.94-1.29L86.25 52H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 1 2.94 1.29L169.75 204H224a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhEscalatorDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpThinIcon],svg[ph-escalator-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44h-56a4 4 0 0 0-2.94 1.29L70.25 148H32a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h56a4 4 0 0 0 2.94-1.29L185.75 108H224a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4h-40a4 4 0 0 0-2.94 1.29L86.25 204H32a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h40a4 4 0 0 0 2.94-1.29L169.75 52H224a4 4 0 0 1 4 4Zm-1.17 77.17a4 4 0 0 1-5.66 5.66L204 161.66V208a4 4 0 0 1-8 0v-46.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhEscalatorUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamThinIcon],svg[ph-exam-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v160a4 4 0 0 0 5.79 3.58L64 204.47l30.21 15.11a4 4 0 0 0 3.58 0L128 204.47l30.21 15.11a4 4 0 0 0 3.58 0L192 204.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 4-4V56a12 12 0 0 0-12-12m4 165.53l-26.21-13.11a4 4 0 0 0-3.58 0L160 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 211.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 209.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM99.58 94.21a4 4 0 0 0-7.16 0l-32 64a4 4 0 0 0 7.16 3.58L74.47 148h43.06l6.89 13.79A4 4 0 0 0 128 164a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37ZM78.47 140L96 104.94L113.53 140ZM196 128a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhExamThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkThinIcon],svg[ph-exclamation-mark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 200a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-44a4 4 0 0 0 4-4V48a4 4 0 0 0-8 0v104a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhExclamationMarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareThinIcon],svg[ph-exclude-square-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-54.34 120l-48-48h44.68l48 48ZM44 49.66l48 48v44.68l-48-48ZM94.34 44l48 48H97.66l-48-48ZM100 156v-56h56v56Zm64 2.34v-44.68l48 48v44.68ZM212 100v50.34l-48-48V100Zm-56-8h-2.34l-48-48H156ZM44 156v-50.34l48 48V156Zm56 8h2.34l48 48H100Z"></svg:path>`,
})
export class PhExcludeSquareThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeThinIcon],svg[ph-exclude-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.17 84.83a76 76 0 1 0-86.34 86.34a76 76 0 1 0 86.34-86.34M228 160a68.6 68.6 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.93A68.1 68.1 0 0 1 228 160m-17.2 45.14l-58.34-58.33a76.4 76.4 0 0 0 14.09-22.6L224.33 182a68.1 68.1 0 0 1-13.53 23.14M182 224.33l-57.78-57.78a76.4 76.4 0 0 0 22.6-14.09l58.33 58.34A68.1 68.1 0 0 1 182 224.33M45.2 50.86l58.34 58.33a76.4 76.4 0 0 0-14.09 22.6L31.67 74A68.1 68.1 0 0 1 45.2 50.86M74 31.67l57.78 57.78a76.4 76.4 0 0 0-22.6 14.09L50.86 45.2A68.1 68.1 0 0 1 74 31.67M92 160a68.07 68.07 0 0 1 68-68c1.3 0 2.6 0 3.88.12c.12 1.28.12 2.58.12 3.88a68.07 68.07 0 0 1-68 68c-1.3 0-2.6-.05-3.88-.12c-.07-1.28-.12-2.58-.12-3.88m70.93-75.93c-1 0-2-.07-2.93-.07a76 76 0 0 0-19.73 2.61L82.93 29.27a68 68 0 0 1 80 54.8M28 96a68.6 68.6 0 0 1 1.27-13.07l57.34 57.34A76 76 0 0 0 84 160c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96m65.07 75.93c1 0 2 .07 2.93.07a76 76 0 0 0 19.73-2.61l57.34 57.34a68 68 0 0 1-80-54.8"></svg:path>`,
})
export class PhExcludeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportThinIcon],svg[ph-export-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 112v96a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12v-96a12 12 0 0 1 12-12h24a4 4 0 0 1 0 8H56a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4v-96a4 4 0 0 0-4-4h-24a4 4 0 0 1 0-8h24a12 12 0 0 1 12 12M90.83 66.83L124 33.66V136a4 4 0 0 0 8 0V33.66l33.17 33.17a4 4 0 1 0 5.66-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhExportThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedThinIcon],svg[ph-eye-closed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226 171.47a3.9 3.9 0 0 1-2 .53a4 4 0 0 1-3.47-2l-21.15-37a120 120 0 0 1-41.91 19.53l6.53 38.81a4 4 0 0 1-3.29 4.6a4 4 0 0 1-.67.06a4 4 0 0 1-3.94-3.34l-6.41-38.5a128.2 128.2 0 0 1-43.28 0l-6.41 38.5a4 4 0 0 1-4 3.34a4 4 0 0 1-.67-.06a4 4 0 0 1-3.29-4.6l6.48-38.83A120 120 0 0 1 56.62 133l-21.15 37a4 4 0 0 1-3.47 2a3.9 3.9 0 0 1-2-.53a4 4 0 0 1-1.47-5.47l21.68-37.94a148.2 148.2 0 0 1-21.32-21.56a4 4 0 1 1 6.22-5C52.25 122.71 82.29 148 128 148s75.75-25.29 92.89-46.51a4 4 0 1 1 6.22 5a148.2 148.2 0 0 1-21.32 21.56L227.47 166a4 4 0 0 1-1.47 5.47"></svg:path>`,
})
export class PhEyeClosedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashThinIcon],svg[ph-eye-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L67.59 67.5C29.34 89 13 124.81 12.34 126.38a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17a122.6 122.6 0 0 0 53.06-11.69l24 26.38a4 4 0 1 0 5.92-5.38Zm98.1 119.85a36 36 0 0 1-48.1-52.94ZM128 196c-32 0-59.89-11.65-83-34.62A135.8 135.8 0 0 1 20.44 128c3.65-7.23 20.09-36.81 52.68-54.43l22.45 24.7a44 44 0 0 0 59 64.83l20.89 23A114.9 114.9 0 0 1 128 196m6.78-103.36a4 4 0 0 1 1.49-7.86a44.15 44.15 0 0 1 35.54 39.09a4 4 0 0 1-3.61 4.35h-.38a4 4 0 0 1-4-3.63a36.1 36.1 0 0 0-29.04-31.95m108.88 37c-.41.91-10.2 22.58-32.38 42.45a4 4 0 0 1-2.67 1a4 4 0 0 1-2.67-7A136.7 136.7 0 0 0 235.56 128A136 136 0 0 0 211 94.62C187.89 71.65 160 60 128 60a122 122 0 0 0-20 1.63a4 4 0 0 1-1.32-7.89A129.3 129.3 0 0 1 128 52c42.7 0 71.87 20.22 88.83 37.18c18.31 18.31 26.49 36.44 26.83 37.2a4.08 4.08 0 0 1 0 3.25Z"></svg:path>`,
})
export class PhEyeSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeThinIcon],svg[ph-eye-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.66 126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87 72.22 170.7 52 128 52S56.13 72.22 39.17 89.18c-18.31 18.31-26.49 36.44-26.83 37.2a4.08 4.08 0 0 0 0 3.25c.34.77 8.52 18.89 26.83 37.2c17 17 46.14 37.17 88.83 37.17s71.87-20.21 88.83-37.17c18.31-18.31 26.49-36.43 26.83-37.2a4.08 4.08 0 0 0 0-3.25m-32.7 35c-23.07 23-51 34.62-83 34.62s-59.89-11.65-83-34.62A135.7 135.7 0 0 1 20.44 128A135.7 135.7 0 0 1 45 94.62C68.11 71.65 96 60 128 60s59.89 11.65 83 34.62A135.8 135.8 0 0 1 235.56 128A135.7 135.7 0 0 1 211 161.38ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhEyeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleThinIcon],svg[ph-eyedropper-sample-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 67.37a31.8 31.8 0 0 0-10-22.82c-12.46-11.8-32.66-11.33-45 1.05l-22.18 22.26l-2-2a20 20 0 0 0-28.28 0l-9 9a12 12 0 0 0 0 17l4.89 4.89l-53.88 53.77A35.81 35.81 0 0 0 45.42 186l-8.6 19.7a9.7 9.7 0 0 0 2 10.79A12 12 0 0 0 52.15 219l18.72-8.18a35.92 35.92 0 0 0 34.59-9.37l53.86-53.87l4.88 4.89a12 12 0 0 0 17 0l9-9a20 20 0 0 0 0-28.29l-2.06-2.06l22.55-22.69A31.76 31.76 0 0 0 220 67.37M99.81 195.78a28 28 0 0 1-28 7a4 4 0 0 0-2.78.15l-20 8.75a4 4 0 0 1-4.43-.84a1.73 1.73 0 0 1-.36-1.93l9.19-21.06a4 4 0 0 0 .12-2.88a27.93 27.93 0 0 1 1.22-21h76.83ZM139.6 156H60.41l53.65-53.67l39.6 39.61Zm40-45.66a4 4 0 0 0 0 5.65l4.89 4.89a12 12 0 0 1 0 17l-9 9a4 4 0 0 1-5.66 0L109.18 86.1a4 4 0 0 1 0-5.66l9-9a12 12 0 0 1 17 0l4.82 4.92a4 4 0 0 0 2.83 1.17a4 4 0 0 0 2.83-1.18l25-25.1c9.33-9.34 24.52-9.73 33.87-.89a24 24 0 0 1 .47 34.43Z"></svg:path>`,
})
export class PhEyedropperSampleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperThinIcon],svg[ph-eyedropper-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 67.37a31.82 31.82 0 0 0-10-22.82c-12.46-11.8-32.66-11.33-45 1.05l-22.18 22.26l-2-2a20 20 0 0 0-28.28 0l-9 9a12 12 0 0 0 0 17l4.89 4.89l-53.88 53.77A35.81 35.81 0 0 0 45.42 186l-8.6 19.7a9.7 9.7 0 0 0 2 10.79A12 12 0 0 0 52.15 219l18.72-8.18a35.9 35.9 0 0 0 34.59-9.37l53.86-53.87l4.88 4.89a12 12 0 0 0 17 0l9-9a20 20 0 0 0 0-28.3l-2.06-2.06l22.55-22.69A31.75 31.75 0 0 0 220 67.37M99.81 195.78a28 28 0 0 1-28 7a4 4 0 0 0-2.78.15l-20 8.75a4 4 0 0 1-4.43-.84a1.73 1.73 0 0 1-.36-1.93l9.19-21.06a4 4 0 0 0 .12-2.88a27.87 27.87 0 0 1 6.74-28.77l53.85-53.87l39.6 39.61Zm79.78-85.47a4 4 0 0 0 0 5.65l4.89 4.89a12 12 0 0 1 0 17l-9 9a4 4 0 0 1-5.66 0L109.18 86.1a4 4 0 0 1 0-5.66l9-9a12 12 0 0 1 17 0l4.82 4.92a4 4 0 0 0 2.83 1.17a4 4 0 0 0 2.83-1.18l25-25.1c9.33-9.34 24.52-9.73 33.87-.89a24 24 0 0 1 .47 34.43Z"></svg:path>`,
})
export class PhEyedropperThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesThinIcon],svg[ph-eyeglasses-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44a4 4 0 0 0 0 8a20 20 0 0 1 20 20v68a40 40 0 0 0-71.2 16h-41.6A40 40 0 0 0 36 140V72a20 20 0 0 1 20-20a4 4 0 0 0 0-8a28 28 0 0 0-28 28v92a40 40 0 0 0 80 0h40a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28M68 196a32 32 0 1 1 32-32a32 32 0 0 1-32 32m120 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhEyeglassesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesThinIcon],svg[ph-eyes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.45 63.86C203.65 45.89 190.35 36 176 36s-27.65 9.89-37.45 27.86A114 114 0 0 0 128 92.31a114 114 0 0 0-10.55-28.45C107.65 45.89 94.35 36 80 36s-27.65 9.89-37.45 27.86C33.17 81.06 28 103.84 28 128s5.17 46.94 14.55 64.14C52.35 210.11 65.65 220 80 220s27.65-9.89 37.45-27.86A114 114 0 0 0 128 163.69a114 114 0 0 0 10.55 28.45c9.8 18 23.1 27.86 37.45 27.86s27.65-9.89 37.45-27.86c9.38-17.2 14.55-40 14.55-64.14s-5.17-46.94-14.55-64.14m-103 124.45C102.1 203.59 91.29 212 80 212s-22.1-8.41-30.43-23.69c-6-11-10.17-24.59-12.18-39.42a28 28 0 1 0 0-41.78c2-14.83 6.17-28.39 12.18-39.42C57.9 52.41 68.71 44 80 44s22.1 8.41 30.43 23.69C119.18 83.73 124 105.15 124 128s-4.82 44.27-13.57 60.31ZM36 128a20 20 0 1 1 20 20a20 20 0 0 1-20-20m170.43 60.31C198.1 203.59 187.29 212 176 212s-22.1-8.41-30.43-23.69c-6-11-10.17-24.59-12.18-39.42a28 28 0 1 0 0-41.78c2-14.83 6.17-28.39 12.18-39.42C153.9 52.41 164.71 44 176 44s22.1 8.41 30.43 23.69C215.18 83.73 220 105.15 220 128s-4.82 44.27-13.57 60.31M132 128a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhEyesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskThinIcon],svg[ph-face-mask-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 104a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m-4 28H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m84-28v24a28 28 0 0 1-28 28h-7.84c-6.41 16-20.74 29.76-42.37 40.58a187 187 0 0 1-45.07 15.36a4.4 4.4 0 0 1-1.44 0a187 187 0 0 1-45.07-15.36C60.58 185.76 46.25 172 39.84 156H32a28 28 0 0 1-28-28v-24a28 28 0 0 1 28-28h4.06a12 12 0 0 1 7.84-10.19l80-29.09a12 12 0 0 1 8.2 0l80 29.09A12 12 0 0 1 219.94 76H224a28 28 0 0 1 28 28M37.35 148A53.7 53.7 0 0 1 36 136V84h-4a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20ZM212 136V77.09a4 4 0 0 0-2.63-3.76l-80-29.09a4 4 0 0 0-2.74 0l-80 29.09A4 4 0 0 0 44 77.09V136c0 49.42 75.76 66.24 84 67.92c8.24-1.68 84-18.5 84-67.92m32-32a20 20 0 0 0-20-20h-4v52a53.7 53.7 0 0 1-1.35 12H224a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhFaceMaskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoThinIcon],svg[ph-facebook-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 191.91V148h28a4 4 0 0 0 0-8h-28v-28a20 20 0 0 1 20-20h16a4 4 0 0 0 0-8h-16a28 28 0 0 0-28 28v28H96a4 4 0 0 0 0 8h28v71.91a92 92 0 1 1 8 0"></svg:path>`,
})
export class PhFacebookLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryThinIcon],svg[ph-factory-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 176a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h28a4 4 0 0 1 4 4m64-4h-28a4 4 0 0 0 0 8h28a4 4 0 0 0 0-8m60 44a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h12V88a4 4 0 0 1 6.4-3.2L100 128V88a4 4 0 0 1 6.4-3.2l44.14 33.11l12.52-87.61A12.06 12.06 0 0 1 174.94 20h18.12a12.06 12.06 0 0 1 11.88 10.3l15 105.13a3.6 3.6 0 0 1 0 .57v76h12a4 4 0 0 1 4.06 4m-78.16-92.62l11.49 8.62h42.06L197 31.43a4 4 0 0 0-4-3.43h-18.06a4 4 0 0 0-4 3.43ZM44 212h168v-72h-44a4 4 0 0 1-2.4-.8L108 96v40a4 4 0 0 1-6.4 3.2L44 96Z"></svg:path>`,
})
export class PhFactoryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalThinIcon],svg[ph-faders-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 80a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4M40 84h108v20a4 4 0 0 0 8 0V56a4 4 0 0 0-8 0v20H40a4 4 0 0 0 0 8m176 88h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8M88 148a4 4 0 0 0-4 4v20H40a4 4 0 0 0 0 8h44v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhFadersHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersThinIcon],svg[ph-faders-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 120v96a4 4 0 0 1-8 0v-96a4 4 0 0 1 8 0m68 76a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0v-16a4 4 0 0 0-4-4m24-32h-20V40a4 4 0 0 0-8 0v124h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-168 0a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m24-32H60V40a4 4 0 0 0-8 0v92H32a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m72-48h-20V40a4 4 0 0 0-8 0v44h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFadersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterThinIcon],svg[ph-fallout-shelter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m67.53-93.89A4 4 0 0 0 192 124h-56.53l27.86-41.78A4 4 0 0 0 160 76H96a4 4 0 0 0-3.33 6.22L120.53 124H64a4 4 0 0 0-3.33 6.22l32 48a4 4 0 0 0 6.66 0l28.67-43l28.67 43a4 4 0 0 0 6.66 0l32-48a4 4 0 0 0 .2-4.11m-43-42.11L128 120.79L103.47 84ZM96 168.79L71.47 132h49.06Zm64 0L135.47 132h49.06Z"></svg:path>`,
})
export class PhFalloutShelterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanThinIcon],svg[ph-fan-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 136a56 56 0 0 0-86-31.56a28.3 28.3 0 0 0-4.56-2.39l17.27-68.94a4 4 0 0 0-1.72-4.34A56 56 0 1 0 100 126.62V128a27 27 0 0 0 .26 3.76l-68.35 19.52a4 4 0 0 0-2.91 3.66a56 56 0 0 0 41.45 56.62a56.5 56.5 0 0 0 14.59 1.93a56.07 56.07 0 0 0 55.73-60.59a28 28 0 0 0 4.33-2.77l51.09 49.44a4 4 0 0 0 2.81 1.13a4.06 4.06 0 0 0 1.84-.45A56 56 0 0 0 229.12 136M128 148a20 20 0 1 1 20-20a20 20 0 0 1-20 20M76 76a48 48 0 0 1 71.4-41.92l-16.55 66.06c-.94-.09-1.89-.14-2.85-.14a28.06 28.06 0 0 0-26.34 18.49A47.82 47.82 0 0 1 76 76m33 123a48 48 0 0 1-72-40.87l65.5-18.7A28 28 0 0 0 128 156a29 29 0 0 0 4.94-.44A47.81 47.81 0 0 1 109 199m107.6-24.46a47.93 47.93 0 0 1-17 17.22l-49-47.37a27.91 27.91 0 0 0-1.3-34.44a48 48 0 0 1 67.22 64.59Z"></svg:path>`,
})
export class PhFanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmThinIcon],svg[ph-farm-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 156a4 4 0 0 0 0-8a228.1 228.1 0 0 0-66.42 9.84a257 257 0 0 0-27.66-15.67A250.1 250.1 0 0 1 232 124a4 4 0 0 0 0-8q-10.06 0-20 .76V80a4 4 0 0 0-1.6-3.2l-64-48a4 4 0 0 0-4.8 0l-64 48A4 4 0 0 0 76 80v41.2a261.7 261.7 0 0 0-52-5.2a4 4 0 0 0 0 8a251 251 0 0 1 196.73 94.5a4 4 0 0 0 6.24-5a263 263 0 0 0-21.44-23.64A190 190 0 0 1 232 188a4 4 0 0 0 0-8a198 198 0 0 0-33.84 2.92a261 261 0 0 0-24-19.25A220.5 220.5 0 0 1 232 156m-68-31a260 260 0 0 0-35.93 12.65c-1.36-.58-2.71-1.18-4.07-1.74V100h40ZM84 82l60-45l60 45v35.49a259 259 0 0 0-32 5.45V96a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4v36.71A259 259 0 0 0 84 123Zm49.5 136.21a4 4 0 0 1-5.55 1.12A187.1 187.1 0 0 0 24 188a4 4 0 0 1 0-8a195.1 195.1 0 0 1 108.38 32.67a4 4 0 0 1 1.12 5.54m50.07-5.07a4 4 0 0 1-5.6 5.72A218.76 218.76 0 0 0 24 156a4 4 0 0 1 0-8a226.7 226.7 0 0 1 159.57 65.14"></svg:path>`,
})
export class PhFarmThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleThinIcon],svg[ph-fast-forward-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m62.4-95.2l-48-36A4 4 0 0 0 136 92v72a4 4 0 0 0 2.21 3.58a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 2.4-.8l48-36a4 4 0 0 0 0-6.4M144 156v-56l37.33 28Zm-9.6-31.2l-48-36A4 4 0 0 0 80 92v72a4 4 0 0 0 2.21 3.58A4.05 4.05 0 0 0 84 168a4 4 0 0 0 2.4-.8l48-36a4 4 0 0 0 0-6.4M88 156v-56l37.33 28Z"></svg:path>`,
})
export class PhFastForwardCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardThinIcon],svg[ph-fast-forward-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.52 118l-88.19-56.13a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 140 71.84v44.59L54.33 61.87a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 36 71.84v112.32a11.66 11.66 0 0 0 6.15 10.36a12 12 0 0 0 12.18-.39L140 139.57v44.59a11.66 11.66 0 0 0 6.15 10.36a12 12 0 0 0 12.18-.39L246.52 138a11.81 11.81 0 0 0 0-19.94Zm-108.3 13.19L50 187.38a3.91 3.91 0 0 1-4 .13a3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35a4 4 0 0 1 1.91-.5a3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Zm104 0L154 187.38a3.91 3.91 0 0 1-4 .13a3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35a4 4 0 0 1 1.91-.5a3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Z"></svg:path>`,
})
export class PhFastForwardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherThinIcon],svg[ph-feather-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 80a60 60 0 0 0-102.41-42.44l-70.07 69.27a11.9 11.9 0 0 0-3.52 8.48v75l-30.83 30.86a4 4 0 0 0 5.66 5.66L65.66 196h75a12 12 0 0 0 8.48-3.51L218 122.83l.4-.4A59.63 59.63 0 0 0 236 80m-96.77-36.77A52 52 0 0 1 213.5 116h-67.84l41.17-41.17a4 4 0 1 0-5.66-5.66L116 134.34V66.19ZM68 115.31a4 4 0 0 1 1.16-2.81L108 74.1v68.24l-40 40Zm75.51 71.52a4 4 0 0 1-2.82 1.17h-67l64-64h68Z"></svg:path>`,
})
export class PhFeatherThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoThinIcon],svg[ph-fediverse-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 100a23.8 23.8 0 0 0-11.65 3L165.9 60a24 24 0 1 0-41.28-10.56L72.29 71.21A24 24 0 1 0 49 107.8l2.11 52.71a24 24 0 1 0 26.59 33.72l54.43 15.24c-.08.83-.13 1.68-.13 2.53a24 24 0 1 0 40.07-17.81l30.6-48.08A23.8 23.8 0 0 0 212 148a24 24 0 0 0 0-48m-23.82 21.13l-55.06 2.62l13.29-55.81q.79.06 1.59.06a23.8 23.8 0 0 0 11.65-3l34.45 43a23.9 23.9 0 0 0-5.92 13.13m-116 45.19a23.9 23.9 0 0 0-13.16-6.12l-2.11-52.71a24.05 24.05 0 0 0 13.52-8.18l50.4 29.18ZM148 28a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-20.29 28.79a24 24 0 0 0 10.92 9.3l-13.28 55.76l-50.87-29.46A23.8 23.8 0 0 0 76 84a24 24 0 0 0-.62-5.41ZM36 84a16 16 0 1 1 16 16a16 16 0 0 1-16-16m20 116a16 16 0 1 1 16-16a16 16 0 0 1-16 16m23.87-13.47c.08-.83.13-1.68.13-2.53a23.86 23.86 0 0 0-2.87-11.37l48.86-38l18.73 56.19a24.17 24.17 0 0 0-10.42 11ZM156 228a16 16 0 1 1 16-16a16 16 0 0 1-16 16m9.33-38.11A23.8 23.8 0 0 0 156 188a25 25 0 0 0-3.69.28l-18.85-56.54l55.1-2.62a23.92 23.92 0 0 0 7.37 12.69ZM212 140a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhFediverseLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoThinIcon],svg[ph-figma-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.46 96A36 36 0 0 0 168 28H96a36 36 0 0 0-16.46 68a36 36 0 0 0 1.56 64.76A40 40 0 1 0 140 196v-45.41A36 36 0 1 0 184.46 96M196 64a28 28 0 0 1-28 28h-28V36h28a28 28 0 0 1 28 28m-56 36h5.41a36.4 36.4 0 0 0-5.41 5.41ZM68 64a28 28 0 0 1 28-28h36v56H96a28 28 0 0 1-28-28m64 132a32 32 0 1 1-32-32h32Zm0-40H96a28 28 0 0 1 0-56h36Zm36 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFigmaLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveThinIcon],svg[ph-file-archive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220h-92v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8h-12v-12a4 4 0 0 0-8 0v12H88a4 4 0 0 0 0 8h12v24H88a4 4 0 0 0 0 8h12v24H88a4 4 0 0 0 0 8h12v24H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhFileArchiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownThinIcon],svg[ph-file-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-45.17-62.83a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L124 174.34V120a4 4 0 0 1 8 0v54.34l17.17-17.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhFileArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpThinIcon],svg[ph-file-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-45.17-78.83a4 4 0 0 1-5.66 5.66L132 129.66V184a4 4 0 0 1-8 0v-54.34l-17.17 17.17a4 4 0 0 1-5.66-5.66l24-24a4 4 0 0 1 5.66 0Z"></svg:path>`,
})
export class PhFileArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioThinIcon],svg[ph-file-audio-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M97.53 132.3a4 4 0 0 0-4.36.87L70.34 156H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h22.34l22.83 22.83A4 4 0 0 0 100 224v-88a4 4 0 0 0-2.47-3.7m-5.53 82l-17.17-17.13A4 4 0 0 0 72 196H52v-32h20a4 4 0 0 0 2.83-1.17L92 145.66Zm56-34.3a36.52 36.52 0 0 1-18 31.45a4 4 0 0 1-4-6.9a28.5 28.5 0 0 0 0-49.1a4 4 0 0 1 4-6.9A36.52 36.52 0 0 1 148 180m62.83-94.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v80a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z"></svg:path>`,
})
export class PhFileAudioThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpThinIcon],svg[ph-file-c-sharp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m168-92v136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Zm8 80v24h12a4 4 0 0 1 0 8h-12v12a4 4 0 0 1-8 0v-12h-24v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-24h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h24v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 0 8Zm-8 0h-24v24h24Z"></svg:path>`,
})
export class PhFileCSharpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCThinIcon],svg[ph-file-c-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m168-92v128a12 12 0 0 1-12 12h-80a4 4 0 0 1 0-8h80a4 4 0 0 0 4-4V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Z"></svg:path>`,
})
export class PhFileCThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudThinIcon],svg[ph-file-cloud-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM108 132a47.72 47.72 0 0 0-45.3 32H60a32 32 0 0 0 0 64h48a48 48 0 0 0 0-96m0 88H60a24 24 0 0 1 0-48h.66c-.2 1.2-.35 2.41-.46 3.64a4 4 0 0 0 8 .72a41 41 0 0 1 1.23-6.92a5 5 0 0 0 .21-.73A40 40 0 1 1 108 220"></svg:path>`,
})
export class PhFileCloudThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeThinIcon],svg[ph-file-code-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.83 149.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L170.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66Zm-72-24a4 4 0 0 0-5.66 0l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L85.66 152l21.17-21.17a4 4 0 0 0 0-5.66M212 88v128a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Zm48 132V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhFileCodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppThinIcon],svg[ph-file-cpp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.35-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m160-88h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0Zm-48-8h42.34L156 41.65Zm-8 92h-16v-16a4 4 0 0 0-8 0v16h-16a4 4 0 0 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8m68 0h-16v-16a4 4 0 0 0-8 0v16h-16a4 4 0 0 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFileCppThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssThinIcon],svg[ph-file-css-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 0 1 5.78 5.54A26.13 26.13 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.13 26.13 0 0 1 18.89 8.36a4 4 0 0 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m82.49-4.85c-10.53-3-15.08-4.91-14.43-10.08a8.57 8.57 0 0 1 3.75-6.49c6.26-4.23 18.77-2.24 23.07-1.11a4 4 0 0 0 2-7.74a61 61 0 0 0-10.47-1.61c-8.12-.54-14.54.75-19.1 3.82a16.63 16.63 0 0 0-7.22 12.13c-1.58 12.49 10.46 16 20.14 18.77c11.25 3.25 16.47 5.49 15.63 11.94a8.93 8.93 0 0 1-3.9 6.75c-6.28 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a57.8 57.8 0 0 0 14.21 1.89c5.18 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.8-13.98-11.58-17.82-21.35-20.67m64 0c-10.53-3-15.08-4.91-14.43-10.08a8.57 8.57 0 0 1 3.75-6.49c6.26-4.23 18.77-2.24 23.07-1.11a4 4 0 0 0 2-7.74a61.3 61.3 0 0 0-10.48-1.61c-8.11-.54-14.54.75-19.09 3.82a16.63 16.63 0 0 0-7.22 12.13c-1.59 12.49 10.46 16 20.14 18.77c11.25 3.25 16.46 5.49 15.63 11.94a8.93 8.93 0 0 1-3.9 6.75c-6.28 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a57.7 57.7 0 0 0 14.21 1.89c5.17 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.79-13.98-11.58-17.82-21.35-20.67M204 92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0Zm-5.65-8L156 41.65V84Z"></svg:path>`,
})
export class PhFileCssThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvThinIcon],svg[ph-file-csv-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m82.49-4.85c-10.53-3-15.08-4.91-14.42-10.08a8.51 8.51 0 0 1 3.75-6.49c6.25-4.23 18.77-2.24 23.06-1.11a4 4 0 0 0 2-7.74a61 61 0 0 0-10.47-1.61c-8.12-.54-14.54.75-19.1 3.82a16.66 16.66 0 0 0-7.22 12.13c-1.58 12.49 10.46 16 20.14 18.77c11.26 3.25 16.47 5.49 15.64 11.94a8.94 8.94 0 0 1-3.91 6.75c-6.27 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a58 58 0 0 0 14.21 1.89c5.18 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.8-13.98-11.58-17.82-21.35-20.67m82.85-26.92a4 4 0 0 0-5.11 2.42L188 196.11l-16.23-45.46a4 4 0 1 0-7.54 2.7l20 56a4 4 0 0 0 7.54 0l20-56a4 4 0 0 0-2.43-5.12M212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileCsvThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedThinIcon],svg[ph-file-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 224a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12v-32a4 4 0 0 1 8 0v32a4 4 0 0 0 4 4h16a4 4 0 0 1 4 4M212 88v48a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.66ZM80 28H56a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8m128 144a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-40a4 4 0 0 0-4-4M48 148a4 4 0 0 0 4-4v-40a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4m104 72h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFileDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocThinIcon],svg[ph-file-doc-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 148H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h16a32 32 0 0 0 0-64m0 56H40v-48h12a24 24 0 0 1 0 48m166.77-6a4 4 0 0 1 .12 5.66A26.1 26.1 0 0 1 200 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 200 156c-11 0-20 10.77-20 24s9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 0 1 5.66-.1M128 148c-15.44 0-28 14.36-28 32s12.56 32 28 32s28-14.36 28-32s-12.56-32-28-32m0 56c-11 0-20-10.77-20-24s9-24 20-24s20 10.77 20 24s-9 24-20 24m-80-88a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 4 4m108-74.35L198.34 84H156Z"></svg:path>`,
})
export class PhFileDocThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedThinIcon],svg[ph-file-dotted-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 224a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12v-32a4 4 0 0 1 8 0v32a4 4 0 0 0 4 4h16a4 4 0 0 1 4 4Zm4-196H56a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8Zm132 60.1V136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36h-28a4 4 0 0 1 0-8h33.5l.6.3h.1l.6.5l56 55.9A4.5 4.5 0 0 1 212 88ZM156 84h42.3L156 41.7Zm52 88a4 4 0 0 0-4 4v40a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12v-40a4 4 0 0 0-4-4ZM48 148a4 4 0 0 0 4-4v-40a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4Zm104 72h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8Z"></svg:path>`,
})
export class PhFileDottedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlThinIcon],svg[ph-file-html-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 88a4 4 0 0 0-1.17-2.83l-2-2l-54-54A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v80a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v28a4 4 0 0 0 8 0Zm-56-46.35L198.34 84H156ZM64 160v48a4 4 0 0 1-8 0v-20H28v20a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0v20h28v-20a4 4 0 0 1 8 0m56 0a4 4 0 0 1-4 4h-12v44a4 4 0 0 1-8 0v-44H84a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m72 0v48a4 4 0 0 1-8 0v-36l-16.8 22.4a4 4 0 0 1-6.4 0L144 172v36a4 4 0 0 1-8 0v-48a4 4 0 0 1 7.2-2.4l20.8 27.73l20.8-27.73a4 4 0 0 1 7.2 2.4m56 48a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v44h24a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileHtmlThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageThinIcon],svg[ph-file-image-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.33 149.78a4 4 0 0 0-6.66 0l-24.25 36.37l-13.06-20.31a4 4 0 0 0-6.72 0l-36 56A4 4 0 0 0 24 228h128a4 4 0 0 0 3.33-6.22Zm-76 70.22L60 175.4l13 20.22a4 4 0 0 0 3.33 1.83a3.93 3.93 0 0 0 3.36-1.78L104 159.21L144.53 220Zm179.5-134.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z"></svg:path>`,
})
export class PhFileImageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniThinIcon],svg[ph-file-ini-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 152v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0m76-4a4 4 0 0 0-4 4v43.52l-32.75-45.84A4 4 0 0 0 76 152v56a4 4 0 0 0 8 0v-43.52l32.75 45.84A4 4 0 0 0 124 208v-56a4 4 0 0 0-4-4m40 0a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4m52-60v136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Z"></svg:path>`,
})
export class PhFileIniThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgThinIcon],svg[ph-file-jpg-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 148h-16a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40h-12v-32h12a16 16 0 0 1 0 32m92-4v16.87a4 4 0 0 1-1.11 2.77A26.1 26.1 0 0 1 192 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a25.4 25.4 0 0 1 14.24 4.43a4 4 0 1 1-4.48 6.63A17.45 17.45 0 0 0 192 156c-11 0-20 10.77-20 24s9 24 20 24a17.87 17.87 0 0 0 12-4.82V188h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4M76 152v38a22 22 0 0 1-44 0a4 4 0 0 1 8 0a14 14 0 0 0 28 0v-38a4 4 0 0 1 8 0m134.83-66.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 84V41.65L198.34 84Z"></svg:path>`,
})
export class PhFileJpgThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsThinIcon],svg[ph-file-js-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM143.84 195.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65M76 152v38a22 22 0 0 1-44 0a4 4 0 0 1 8 0a14 14 0 0 0 28 0v-38a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhFileJsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxThinIcon],svg[ph-file-jsx-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.84 195.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 1 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65M72 148a4 4 0 0 0-4 4v38a14 14 0 0 1-28 0a4 4 0 0 0-8 0a22 22 0 0 0 44 0v-38a4 4 0 0 0-4-4m138.32.75a4 4 0 0 0-5.58.92L188 173.12l-16.75-23.45a4 4 0 0 0-6.51 4.66L183.08 180l-18.34 25.67a4 4 0 0 0 .93 5.58a4 4 0 0 0 5.58-.92L188 186.88l16.74 23.45A4 4 0 0 0 208 212a3.9 3.9 0 0 0 2.32-.75a4 4 0 0 0 .93-5.58L192.92 180l18.33-25.67a4 4 0 0 0-.93-5.58M212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileJsxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockThinIcon],svg[ph-file-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 180h-12v-8a24 24 0 0 0-48 0v8H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-52-8a16 16 0 0 1 32 0v8H68Zm48 48H52v-32h64Zm94.83-134.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-40a4 4 0 0 0 0 8h40a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z"></svg:path>`,
})
export class PhFileLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassThinIcon],svg[ph-file-magnifying-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-50.74-52.39a32.05 32.05 0 1 0-5.65 5.65l13.56 13.57a4 4 0 0 0 5.66-5.66ZM100 148a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path>`,
})
export class PhFileMagnifyingGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdThinIcon],svg[ph-file-md-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v132a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM144 148h-16a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h16a32 32 0 0 0 0-64m0 56h-12v-48h12a24 24 0 0 1 0 48m-44-52v56a4 4 0 0 1-8 0v-43.31l-20.72 29.6a4 4 0 0 1-6.56 0L44 164.69V208a4 4 0 0 1-8 0v-56a4 4 0 0 1 7.28-2.29L68 185l24.72-35.31A4 4 0 0 1 100 152"></svg:path>`,
})
export class PhFileMdThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusThinIcon],svg[ph-file-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-44-68a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfThinIcon],svg[ph-file-pdf-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 152a4 4 0 0 1-4 4h-28v24h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4M88 172a24 24 0 0 1-24 24H52v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16H52v32h12a16 16 0 0 0 16-16m80 8a32 32 0 0 1-32 32h-16a4 4 0 0 1-4-4v-56a4 4 0 0 1 4-4h16a32 32 0 0 1 32 32m-8 0a24 24 0 0 0-24-24h-12v48h12a24 24 0 0 0 24-24M44 112V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0m112-28h42.34L156 41.65Z"></svg:path>`,
})
export class PhFilePdfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusThinIcon],svg[ph-file-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-44-68a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFilePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngThinIcon],svg[ph-file-png-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 148H44a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40H48v-32h12a16 16 0 0 1 0 32m160 12.87a4 4 0 0 1-1.11 2.77A26.1 26.1 0 0 1 200 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a25.4 25.4 0 0 1 14.24 4.43a4 4 0 1 1-4.48 6.63A17.45 17.45 0 0 0 200 156c-11 0-20 10.77-20 24s9 24 20 24a17.87 17.87 0 0 0 12-4.82V188h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4ZM152 152v56a4 4 0 0 1-2.78 3.81a4 4 0 0 1-1.22.19a4 4 0 0 1-3.25-1.67L112 164.48V208a4 4 0 0 1-8 0v-56a4 4 0 0 1 7.25-2.33L144 195.52V152a4 4 0 0 1 8 0m52-40a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52Zm-48-28V41.65L198.34 84Z"></svg:path>`,
})
export class PhFilePngThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptThinIcon],svg[ph-file-ppt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 152a4 4 0 0 1-4 4h-16v52a4 4 0 0 1-8 0v-52h-16a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M88 172a24 24 0 0 1-24 24H52v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16H52v32h12a16 16 0 0 0 16-16m76 0a24 24 0 0 1-24 24h-12v12a4 4 0 0 1-8 0v-56a4 4 0 0 1 4-4h16a24 24 0 0 1 24 24m-8 0a16 16 0 0 0-16-16h-12v32h12a16 16 0 0 0 16-16M44 112V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0m112-28h42.34L156 41.65Z"></svg:path>`,
})
export class PhFilePptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyThinIcon],svg[ph-file-py-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM64 148H48a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40H52v-32h12a16 16 0 0 1 0 32m87.39-33.88l-19.39 31V208a4 4 0 0 1-8 0v-22.85l-19.39-31a4 4 0 0 1 6.78-4.24L128 176.45l16.61-26.57a4 4 0 1 1 6.78 4.24"></svg:path>`,
})
export class PhFilePyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsThinIcon],svg[ph-file-rs-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-16a4 4 0 0 0 0 8h16a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM88 172a24 24 0 0 0-24-24H48a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a23.9 23.9 0 0 0 7.64-1.25l8.9 15.25a4 4 0 1 0 6.92-4l-8.77-15A24 24 0 0 0 88 172m-24 16H52v-32h12a16 16 0 0 1 0 32m87.84 7.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65"></svg:path>`,
})
export class PhFileRsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchThinIcon],svg[ph-file-search-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.8 85.1l-56-55.9l-.6-.4h-.2l-.5-.3H56A12 12 0 0 0 44 40v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88.1a4.5 4.5 0 0 0-1.2-3ZM156 41.7L198.3 84H156ZM204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52Zm-57.4-90.6A32 32 0 1 0 124 180a32 32 0 0 0 19.6-6.7l13.4 13.3a3.8 3.8 0 0 0 2.8 1.2a3.9 3.9 0 0 0 2.8-1.2a3.9 3.9 0 0 0 0-5.6l-13.3-13.4A32 32 0 0 0 156 148a31.5 31.5 0 0 0-9.4-22.6ZM141 165a24.1 24.1 0 1 1 7-17a24.2 24.2 0 0 1-7 17Z"></svg:path>`,
})
export class PhFileSearchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlThinIcon],svg[ph-file-sql-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 116a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 4 4m108-74.35L198.35 84H156ZM224 208a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-56a4 4 0 0 1 8 0v52h24a4 4 0 0 1 4 4M87.85 195.8a17 17 0 0 1-7.43 12.41C76 211.12 70.38 212 65.2 212a58 58 0 0 1-14.2-1.89a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61 61 0 0 1 10.47 1.61a4 4 0 0 1-2 7.74c-4.3-1.13-16.81-3.12-23.06 1.11a8.53 8.53 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.76 2.85 23.14 6.69 21.34 20.65M136 148c-15.44 0-28 14.35-28 32s12.56 32 28 32a25.56 25.56 0 0 0 16.31-6l4.86 4.85a4 4 0 0 0 5.65-5.66l-5.06-5.06A34.8 34.8 0 0 0 164 180c0-17.65-12.56-32-28-32m0 56c-11 0-20-10.77-20-24s9-24 20-24s20 10.77 20 24a27.16 27.16 0 0 1-4 14.36l-5.19-5.19a4 4 0 1 0-5.65 5.66l5.47 5.47A17.5 17.5 0 0 1 136 204"></svg:path>`,
})
export class PhFileSqlThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgThinIcon],svg[ph-file-svg-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 1 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM83.85 195.8a17 17 0 0 1-7.43 12.41C72 211.12 66.38 212 61.2 212a58 58 0 0 1-14.2-1.89a4 4 0 1 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61 61 0 0 1 10.47 1.61a4 4 0 0 1-2 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.76 2.85 23.14 6.69 21.34 20.65m63.92-42.45l-20 56a4 4 0 0 1-7.53 0l-20-56a4 4 0 1 1 7.53-2.7L124 196.11l16.23-45.46a4 4 0 1 1 7.53 2.7ZM212 184v16.87a4 4 0 0 1-1.11 2.77A26.1 26.1 0 0 1 192 212c-15.44 0-28-14.36-28-32s12.56-32 28-32a25.4 25.4 0 0 1 14.24 4.43a4 4 0 1 1-4.48 6.63A17.43 17.43 0 0 0 192 156c-11 0-20 10.77-20 24s9 24 20 24a17.87 17.87 0 0 0 12-4.82V188h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileSvgThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextThinIcon],svg[ph-file-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-36-84a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileThinIcon],svg[ph-file-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhFileThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsThinIcon],svg[ph-file-ts-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM143.84 195.8a17 17 0 0 1-7.43 12.41c-4.39 2.91-10 3.77-15.22 3.77a58 58 0 0 1-14.19-1.87a4 4 0 0 1 2.15-7.7c4.22 1.17 16.56 3.29 22.83-.88a8.94 8.94 0 0 0 3.91-6.75c.83-6.45-4.38-8.69-15.64-11.94c-9.68-2.8-21.72-6.28-20.14-18.77a16.66 16.66 0 0 1 7.22-12.13c4.56-3.07 11-4.36 19.1-3.82a61.3 61.3 0 0 1 10.48 1.61a4 4 0 0 1-2.05 7.74c-4.29-1.13-16.81-3.12-23.06 1.11a8.51 8.51 0 0 0-3.75 6.49c-.66 5.17 3.89 7 14.42 10.08c9.79 2.85 23.17 6.69 21.37 20.65M84 152a4 4 0 0 1-4 4H64v52a4 4 0 0 1-8 0v-52H40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileTsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxThinIcon],svg[ph-file-tsx-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.25 154.33L192.92 180l18.33 25.67a4 4 0 0 1-.93 5.58a3.9 3.9 0 0 1-2.32.75a4 4 0 0 1-3.26-1.67L188 186.88l-16.75 23.45a4 4 0 0 1-6.51-4.66L183.08 180l-18.34-25.67a4 4 0 0 1 6.51-4.66L188 173.12l16.74-23.45a4 4 0 0 1 6.51 4.66m-88.76 20.82c-10.53-3-15.08-4.91-14.42-10.08a8.51 8.51 0 0 1 3.75-6.49c6.25-4.23 18.77-2.24 23.06-1.11a4 4 0 0 0 2.05-7.74a61.3 61.3 0 0 0-10.48-1.61c-8.12-.54-14.54.75-19.1 3.82a16.66 16.66 0 0 0-7.22 12.13c-1.58 12.49 10.46 16 20.14 18.77c11.26 3.25 16.47 5.49 15.64 11.94a8.94 8.94 0 0 1-3.91 6.75c-6.27 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a58 58 0 0 0 14.17 1.89c5.18 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.8-13.98-11.58-17.82-21.35-20.67M80 148H40a4 4 0 0 0 0 8h16v52a4 4 0 0 0 8 0v-52h16a4 4 0 0 0 0-8m132-60v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileTsxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtThinIcon],svg[ph-file-txt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 112a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52Zm-48-70.35L198.34 84H156Zm-4.75 112.67L132.92 180l18.33 25.67a4 4 0 1 1-6.5 4.65L128 186.88l-16.75 23.44a4 4 0 1 1-6.5-4.65L123.08 180l-18.33-25.68a4 4 0 1 1 6.5-4.65L128 173.12l16.75-23.45a4 4 0 1 1 6.5 4.65M88 152a4 4 0 0 1-4 4H68v52a4 4 0 0 1-8 0v-52H44a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m128 0a4 4 0 0 1-4 4h-16v52a4 4 0 0 1-8 0v-52h-16a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileTxtThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoThinIcon],svg[ph-file-video-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Zm-2.06 106.85a4 4 0 0 0-4.06.11L124 164.78V160a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-4.78l25.88 16.17a4 4 0 0 0 2.12.61a4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 156 216v-64a4 4 0 0 0-2.06-3.5M116 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm32 .78l-24-15v-19.56l24-15Z"></svg:path>`,
})
export class PhFileVideoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueThinIcon],svg[ph-file-vue-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m83.77 153.35l-20 56a4 4 0 0 1-7.54 0l-20-56a4 4 0 0 1 7.54-2.7L60 196.11l16.23-45.46a4 4 0 0 1 7.54 2.7M208 156a4 4 0 0 0 0-8h-32a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8h-28v-20h20a4 4 0 0 0 0-8h-20v-20Zm-64-8a4 4 0 0 0-4 4v38a14 14 0 0 1-28 0v-38a4 4 0 0 0-8 0v38a22 22 0 0 0 44 0v-38a4 4 0 0 0-4-4m68-60v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z"></svg:path>`,
})
export class PhFileVueThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXThinIcon],svg[ph-file-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-45.17-89.17L133.66 152l21.17 21.17a4 4 0 0 1-5.66 5.66L128 157.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66L128 146.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhFileXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsThinIcon],svg[ph-file-xls-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 208a4 4 0 0 1-4 4h-28a4 4 0 0 1-4-4v-56a4 4 0 0 1 8 0v52h24a4 4 0 0 1 4 4m-61.68-59.25a4 4 0 0 0-5.58.92L68 173.12l-16.75-23.45a4 4 0 0 0-6.5 4.66L63.08 180l-18.33 25.67a4 4 0 0 0 .93 5.58A3.9 3.9 0 0 0 48 212a4 4 0 0 0 3.25-1.67L68 186.88l16.74 23.45A4 4 0 0 0 88 212a3.9 3.9 0 0 0 2.32-.75a4 4 0 0 0 .93-5.58L72.91 180l18.34-25.67a4 4 0 0 0-.93-5.58m100.17 26.4c-10.53-3-15.08-4.91-14.43-10.08a8.57 8.57 0 0 1 3.75-6.49c6.26-4.23 18.77-2.24 23.07-1.11a4 4 0 0 0 2-7.74a61.3 61.3 0 0 0-10.48-1.61c-8.11-.54-14.54.75-19.09 3.82a16.63 16.63 0 0 0-7.22 12.13c-1.59 12.49 10.46 16 20.14 18.77c11.25 3.25 16.46 5.49 15.63 11.94a8.93 8.93 0 0 1-3.9 6.75c-6.28 4.17-18.61 2.05-22.83.88a4 4 0 1 0-2.15 7.7a57.7 57.7 0 0 0 14.21 1.89c5.17 0 10.83-.86 15.22-3.77a17 17 0 0 0 7.43-12.41c1.79-13.98-11.58-17.82-21.35-20.67M204 92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0Zm-5.65-8L156 41.65V84Z"></svg:path>`,
})
export class PhFileXlsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipThinIcon],svg[ph-file-zip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 148h-16a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40h-12v-32h12a16 16 0 0 1 0 32m-52-36v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0m-40.53 2l-28.58 50H88a4 4 0 0 1 0 8H56a4 4 0 0 1-3.47-6l28.58-50H56a4 4 0 0 1 0-8h32a4 4 0 0 1 3.47 6m119.36-68.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v20a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83M156 84V41.65L198.34 84Z"></svg:path>`,
})
export class PhFileZipThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesThinIcon],svg[ph-files-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 69.17l-40-40A4 4 0 0 0 168 28H88a12 12 0 0 0-12 12v20H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V72a4 4 0 0 0-1.17-2.83M172 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h78.34L172 105.66Zm32-32a4 4 0 0 1-4 4h-20v-84a4 4 0 0 0-1.17-2.83l-40-40A4 4 0 0 0 136 60H84V40a4 4 0 0 1 4-4h78.34L204 73.66Zm-64-32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFilesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelThinIcon],svg[ph-film-reel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 220h-64.82a100 100 0 1 0-39.18 8h104a4 4 0 0 0 0-8M36 128a92 92 0 1 1 92 92a92.1 92.1 0 0 1-92-92m92-28a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m20 108a20 20 0 1 0-20 20a20 20 0 0 0 20-20m-32 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m60-28a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0-32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-96-8a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 32a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhFilmReelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptThinIcon],svg[ph-film-script-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM92 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 96a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0-48a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFilmScriptThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateThinIcon],svg[ph-film-slate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 108H71.26L209 71.64a4 4 0 0 0 2.84-4.92l-8.16-30a11.92 11.92 0 0 0-14.54-8.31L36.83 68.61a11.78 11.78 0 0 0-7.26 5.53A11.6 11.6 0 0 0 28.41 83l7.67 28.19a4 4 0 0 0-.08.81v88a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-88a4 4 0 0 0-4-4m-90-54.67l38 21.92l-47.92 12.65L78.12 66Zm65.16-17.2a4 4 0 0 1 1-.13a3.88 3.88 0 0 1 3.84 2.81l7.1 26.12l-28.1 7.42l-38-21.92Zm-154.7 42a3.86 3.86 0 0 1 2.37-1.8l28.27-7.46l38 21.91l-61.85 16.34l-7.12-26.18a3.66 3.66 0 0 1 .37-2.8ZM212 200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-84h168Z"></svg:path>`,
})
export class PhFilmSlateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripThinIcon],svg[ph-film-strip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 84h88v88H36Zm96-8V52h40v24Zm-8 0H84V52h40Zm0 104v24H84v-24Zm8 0h40v24h-40Zm0-8V84h88v88Zm88-116v20h-40V52h36a4 4 0 0 1 4 4M40 52h36v24H36V56a4 4 0 0 1 4-4m-4 148v-20h40v24H40a4 4 0 0 1-4-4m180 4h-36v-24h40v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhFilmStripThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleThinIcon],svg[ph-fingerprint-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 128a242.6 242.6 0 0 1-18.23 92.72a4 4 0 0 1-7.4-3A234.8 234.8 0 0 0 172 128a4 4 0 0 1 8 0m-19.21-29.33a4 4 0 0 0 6-5.33A52 52 0 0 0 76 128a140 140 0 0 1-17.48 67.8a4 4 0 0 0 7 3.88A148.1 148.1 0 0 0 84 128a44 44 0 0 1 76.79-29.34ZM128 28a99.9 99.9 0 0 0-33.33 5.69a4 4 0 1 0 2.66 7.54A92.08 92.08 0 0 1 220 128a285.7 285.7 0 0 1-7 63.12a4 4 0 0 0 3 4.78a4 4 0 0 0 .89.1a4 4 0 0 0 3.89-3.12A293 293 0 0 0 228 128A100.11 100.11 0 0 0 128 28M66.67 59.43a4 4 0 0 0-5.34-6A100.17 100.17 0 0 0 28 128a91.3 91.3 0 0 1-8.34 38.33a4 4 0 0 0 2 5.3a3.9 3.9 0 0 0 1.66.37a4 4 0 0 0 3.64-2.33A99.15 99.15 0 0 0 36 128a92.16 92.16 0 0 1 30.67-68.57m45.58 144.94a4 4 0 0 0-5.31 2c-2 4.29-4.13 8.57-6.42 12.71a4 4 0 1 0 7 3.88c2.39-4.32 4.65-8.78 6.7-13.25a4 4 0 0 0-1.97-5.34M128 124a4 4 0 0 0-4 4a188.7 188.7 0 0 1-5.92 47a4 4 0 0 0 2.87 4.87a4 4 0 0 0 1 .13a4 4 0 0 0 3.87-3a196.6 196.6 0 0 0 6.18-49a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhFingerprintSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintThinIcon],svg[ph-fingerprint-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 128a130.7 130.7 0 0 1-13.73 58.7a4 4 0 0 1-3.58 2.22a3.9 3.9 0 0 1-1.78-.42a4 4 0 0 1-1.8-5.36A122.7 122.7 0 0 0 60 128a67.74 67.74 0 0 1 25.5-53.08a4 4 0 0 1 5 6.25A59.74 59.74 0 0 0 68 128m60-4a4 4 0 0 0-4 4a188.1 188.1 0 0 1-23.48 91a4 4 0 0 0 7 3.88A196.2 196.2 0 0 0 132 128a4 4 0 0 0-4-4m0-32a36 36 0 0 0-36 36a4 4 0 0 0 8 0a28 28 0 0 1 56 0a218 218 0 0 1-20.9 93.7a4 4 0 1 0 7.24 3.41A226 226 0 0 0 164 128a36 36 0 0 0-36-36m0-64A100.11 100.11 0 0 0 28 128a91.7 91.7 0 0 1-5.24 30.67a4 4 0 1 0 7.54 2.66A99.7 99.7 0 0 0 36 128a92 92 0 0 1 184 0a286.4 286.4 0 0 1-5.37 55.23a4 4 0 0 0 3.15 4.69a4 4 0 0 0 .78.08a4 4 0 0 0 3.92-3.23A294.3 294.3 0 0 0 228 128A100.11 100.11 0 0 0 128 28M93.6 156.09a4 4 0 0 0-4.71 3.12a155 155 0 0 1-17.66 46.64a4 4 0 0 0 6.93 4a163.1 163.1 0 0 0 18.57-49a4 4 0 0 0-3.13-4.76M128 60a69 69 0 0 0-8.5.53a4 4 0 0 0 1 7.93A63 63 0 0 1 128 68a60.07 60.07 0 0 1 60 60a256 256 0 0 1-1.95 31.5a4 4 0 0 0 3.47 4.47h.5a4 4 0 0 0 4-3.51A264 264 0 0 0 196 128a68.08 68.08 0 0 0-68-68m56.93 128.12a4 4 0 0 0-4.87 2.88c-1.49 5.78-3.21 11.58-5.1 17.23a4 4 0 1 0 7.58 2.54c2-5.83 3.73-11.81 5.27-17.77a4 4 0 0 0-2.87-4.87Z"></svg:path>`,
})
export class PhFingerprintThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanThinIcon],svg[ph-finn-the-human-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 108H88a36 36 0 0 0-36 36v8a36 36 0 0 0 36 36h80a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36m28 44a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28v-8a28 28 0 0 1 28-28h80a28 28 0 0 1 28 28Zm12-108a28 28 0 0 0-27.71 24H75.71A28 28 0 0 0 20 72v80a68.07 68.07 0 0 0 68 68h80a68.07 68.07 0 0 0 68-68V72a28 28 0 0 0-28-28m20 108a60.07 60.07 0 0 1-60 60H88a60.07 60.07 0 0 1-60-60V72a20 20 0 0 1 40 0a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4a20 20 0 0 1 40 0Zm-128-4a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFinnTheHumanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherThinIcon],svg[ph-fire-extinguisher-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.15 52.17l-70.34-21.1l39-19.49a4 4 0 1 0-3.58-7.16L135 28a76.07 76.07 0 0 0-75 76v104a4 4 0 0 0 8 0v-36h24v60a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V104a44.06 44.06 0 0 0-40-43.81V37.38l74.85 22.45A3.8 3.8 0 0 0 216 60a4 4 0 0 0 1.15-7.83M68 164v-60a68.08 68.08 0 0 1 64-67.87v24.06A44.06 44.06 0 0 0 92 104v60Zm100 72h-64a4 4 0 0 1-4-4v-60h72v60a4 4 0 0 1-4 4m4-132v60h-72v-60a36 36 0 0 1 72 0"></svg:path>`,
})
export class PhFireExtinguisherThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleThinIcon],svg[ph-fire-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140.82 20.92a4 4 0 0 0-6.31 1.71l-24.15 66.2l-28.55-27.7a4 4 0 0 0-6 .44C54.71 89.25 44 117 44 144a84 84 0 0 0 168 0c0-57.76-49.78-105.31-71.18-123.08M128 220a76.08 76.08 0 0 1-76-76c0-24.07 9.25-48.93 27.5-74l29.71 28.83a4 4 0 0 0 6.55-1.5l24.3-66.6C162.27 50.09 204 93.18 204 144a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhFireSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireThinIcon],svg[ph-fire-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.94 152.67a53.51 53.51 0 0 1-43.28 43.27a3.7 3.7 0 0 1-.66.06a4 4 0 0 1-.66-7.94c18.18-3.06 33.63-18.51 36.72-36.73a4 4 0 0 1 7.88 1.34M212 144a84 84 0 0 1-168 0c0-27 10.71-54.75 31.84-82.43a4 4 0 0 1 6-.44l28.55 27.7l24.15-66.2a4 4 0 0 1 6.31-1.71C162.22 38.69 212 86.24 212 144m-8 0c0-50.82-41.73-93.91-63.94-113.23l-24.3 66.6a4 4 0 0 1-6.55 1.5L79.5 70C61.25 95.07 52 119.93 52 144a76 76 0 0 0 152 0"></svg:path>`,
})
export class PhFireThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckThinIcon],svg[ph-fire-truck-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.71 118.51l-14-35A12 12 0 0 0 226.58 76H188V64a4 4 0 0 0-8 0v102.71A28.05 28.05 0 0 0 164.29 188h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-48a4 4 0 0 0-8 0v48a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-.29-1.49M226.58 84a4 4 0 0 1 3.72 2.51L242.09 116H188V84ZM80 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20m112 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48-24h-20.29A28 28 0 0 0 188 164.29V124h56v60a4 4 0 0 1-4 4M24 100a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8h-20V68h20a4 4 0 0 0 0-8H24a4 4 0 0 0 0 8h20v32Zm100 0H92V68h32ZM52 68h32v32H52Z"></svg:path>`,
})
export class PhFireTruckThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitThinIcon],svg[ph-first-aid-kit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M92 48a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm128 152a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-64-64a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFirstAidKitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidThinIcon],svg[ph-first-aid-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-52V40a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H40a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h52v52a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-52h52a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-56a4 4 0 0 0-4 4v56a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-56a4 4 0 0 0-4-4H40a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h56a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFirstAidThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleThinIcon],svg[ph-fish-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8m42.77 76.73c-14.5 20-36.17 33.57-64.38 40.2c-20.91 4.91-45.61 6-73.8 3.42q2.46 20.18 7.41 42.79a4 4 0 0 1-3 4.77a4.2 4.2 0 0 1-.86.09a4 4 0 0 1-3.9-3.14a457 457 0 0 1-7.72-45.36q-21.4-2.49-45.33-7.72a4 4 0 1 1 1.67-7.78q22.59 4.95 42.76 7.41c-2.62-28.16-1.48-52.84 3.43-73.73c6.63-28.21 20.14-49.88 40.18-64.39C127.32 31.8 156.61 28 177.53 28h1.71c22 .21 40.12 4.54 41.81 5.53a4 4 0 0 1 1.41 1.47c1 1.68 5.31 19.8 5.53 41.79c.21 20.96-3.3 51.21-21.22 75.94m-12.23 2.43a108 108 0 0 1-93.7-93.7c-27.92 25.08-39 67.62-33.14 126.81c59.2 5.87 101.75-5.2 126.84-33.11m21.2-114.9c-10.84-2.53-67.24-13.57-107.44 15.2a99.92 99.92 0 0 0 92.23 92.24c28.76-40.18 17.74-96.59 15.21-107.44"></svg:path>`,
})
export class PhFishSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishThinIcon],svg[ph-fish-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 76.05a8 8 0 1 1-8-8a8 8 0 0 1 8 8m49.23 65.68c-19 34.15-54.76 52.35-106.43 54.13l-23 53.72a4 4 0 0 1-3.7 2.42h-.26a4 4 0 0 1-3.59-2.89l-15.41-53.94L6.9 179.73a4 4 0 0 1-.47-7.52l53.72-23C62 97.6 80.16 61.81 114.3 42.85c45.5-25.27 103.78-11 106.76-9.27a4.1 4.1 0 0 1 1.42 1.42c.87 1.48 4.72 16.94 5.42 36.95c.64 18.62-1.38 45.84-14.67 69.78m-40.46 29.77A48 48 0 0 1 132 124a48.05 48.05 0 0 1-47.47-40.71c-10.27 18-15.79 40.95-16.46 68.71a4 4 0 0 1-2.42 3.58l-45.73 19.56l45.26 13a4 4 0 0 1 2.74 2.74l12.93 45.25l19.6-45.72a4 4 0 0 1 3.58-2.43c27.78-.7 50.75-6.21 68.74-16.48M220 77.25a169.6 169.6 0 0 0-4.2-37a169.5 169.5 0 0 0-37-4.2c-18.81-.12-45.93 3-68.2 18.49a85.2 85.2 0 0 0-18.36 17.3a40 40 0 0 0 43.58 44a4 4 0 0 1 4.36 4.36a40 40 0 0 0 44.06 43.56a85.3 85.3 0 0 0 17.26-18.33c8.5-12.27 18.68-34.08 18.5-68.18"></svg:path>`,
})
export class PhFishThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldThinIcon],svg[ph-flag-banner-fold-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.36 45.83A4 4 0 0 0 232 44h-80a4 4 0 0 0-3.64 2.34L138.52 68H28a4 4 0 0 0-3 6.69L62.59 116L25 157.31a4 4 0 0 0 3 6.69h73.09a4 4 0 0 0 3.64-2.35l9.85-21.65h71.21l-37.43 82.34a4 4 0 0 0 2 5.3a4.1 4.1 0 0 0 1.64.36a4 4 0 0 0 3.64-2.35l80-176a4 4 0 0 0-.28-3.82M98.52 156H37l34-37.31a4 4 0 0 0 0-5.38L37 76h97.84Zm90.9-24h-71.21l36.37-80h71.21Z"></svg:path>`,
})
export class PhFlagBannerFoldThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerThinIcon],svg[ph-flag-banner-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.38 53.86A4 4 0 0 0 232 52H40a4 4 0 0 0-2.83 6.83L82.34 104l-45.17 45.17A4 4 0 0 0 40 156h140l-31.56 66.28a4 4 0 0 0 1.89 5.33a3.9 3.9 0 0 0 1.67.39a4 4 0 0 0 3.61-2.28l80-168a4 4 0 0 0-.23-3.86M183.76 148H49.66l41.17-41.17a4 4 0 0 0 0-5.66L49.66 60h176Z"></svg:path>`,
})
export class PhFlagBannerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredThinIcon],svg[ph-flag-checkered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.66 52.44a4 4 0 0 0-4.28.61c-30 26-56 13.08-83.61-.56c-28.7-14.2-58.38-28.88-92.39.56a4 4 0 0 0-1.38 3V224a4 4 0 0 0 8 0v-46.13c29.41-24.39 55.08-11.69 82.23 1.74c28.7 14.19 58.38 28.88 92.39-.56a4 4 0 0 0 1.38-3v-120a4 4 0 0 0-2.34-3.61M220 64.32v49.88c-16.91 14-32.58 15.79-48 12.2V74.67c15.24 3.23 31.09 1.7 48-10.35m-56 8.23v51.54c-8.7-3-17.39-7.25-26.23-11.62c-9.76-4.84-19.64-9.72-29.77-12.91V48c8.7 3 17.39 7.25 26.23 11.62c9.77 4.87 19.64 9.75 29.77 12.93m-64-26.82v51.71c-15.24-3.23-31.09-1.69-48 10.37V57.93c16.91-14.03 32.58-15.78 48-12.2M52 167.78V117.9c16.91-14 32.58-15.79 48-12.2v51.72A64.5 64.5 0 0 0 86.64 156C75.52 156 64 159.2 52 167.78m56-8.23V108c8.71 3 17.39 7.25 26.23 11.62c9.76 4.83 19.64 9.71 29.77 12.89v51.54c-8.71-3-17.39-7.25-26.23-11.62c-9.77-4.82-19.64-9.7-29.77-12.88m64 26.82v-51.72a64.5 64.5 0 0 0 13.36 1.47c11.12 0 22.61-3.27 34.64-11.85v49.9c-16.91 14.02-32.58 15.83-48 12.2"></svg:path>`,
})
export class PhFlagCheckeredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantThinIcon],svg[ph-flag-pennant-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.31 100.22l-184-64A4 4 0 0 0 52 40v176a4 4 0 0 0 8 0v-45.16l181.31-63.06a4 4 0 0 0 0-7.56M60 162.37V45.63L227.82 104Z"></svg:path>`,
})
export class PhFlagPennantThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagThinIcon],svg[ph-flag-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.39 53.06a4 4 0 0 0-1.39 3V224a4 4 0 0 0 8 0v-46.13c29.41-24.39 55.08-11.69 82.23 1.73c16.5 8.17 33.33 16.5 51.13 16.5c13.14 0 26.81-4.55 41.26-17.06a4 4 0 0 0 1.38-3v-120a4 4 0 0 0-6.62-3c-30 26-56 13.07-83.61-.57c-28.7-14.19-58.37-28.85-92.38.59M220 174.17c-29.41 24.4-55.08 11.7-82.23-1.73c-26.82-13.27-54.5-27-85.77-4.66V57.92c29.41-24.4 55.08-11.7 82.23 1.73c26.82 13.27 54.5 27 85.77 4.66Z"></svg:path>`,
})
export class PhFlagThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameThinIcon],svg[ph-flame-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.9 54.24a216.8 216.8 0 0 0-40.84-33.67a4 4 0 0 0-4.12 0A216.8 216.8 0 0 0 85.1 54.24C58.21 82.48 44 113.51 44 144a84 84 0 0 0 168 0c0-30.49-14.21-61.52-41.1-89.76M92 184c0-32.11 28.07-53.75 36-59.21c7.93 5.47 36 27.1 36 59.21a36 36 0 0 1-72 0m69.94 28A43.82 43.82 0 0 0 172 184c0-41.78-40.23-66.4-41.94-67.43a4 4 0 0 0-4.12 0C124.23 117.6 84 142.22 84 184a43.82 43.82 0 0 0 10.06 28A76.07 76.07 0 0 1 52 144c0-62.48 63.64-107.17 76-115.26c12.36 8.09 76 52.78 76 115.26a76.07 76.07 0 0 1-42.06 68"></svg:path>`,
})
export class PhFlameThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightThinIcon],svg[ph-flashlight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20H72a12 12 0 0 0-12 12v45.33a12.05 12.05 0 0 0 2.4 7.2l20.8 27.74a4 4 0 0 1 .8 2.4V224a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V114.67a4 4 0 0 1 .8-2.4l20.8-27.74a12.05 12.05 0 0 0 2.4-7.2V32a12 12 0 0 0-12-12M72 28h112a4 4 0 0 1 4 4v28H68V32a4 4 0 0 1 4-4m115.2 51.73l-20.8 27.74a12.05 12.05 0 0 0-2.4 7.2V224a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V114.67a12.05 12.05 0 0 0-2.4-7.2L68.8 79.73a4 4 0 0 1-.8-2.4V68h120v9.33a4 4 0 0 1-.8 2.4M132 120v32a4 4 0 0 1-8 0v-32a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhFlashlightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskThinIcon],svg[ph-flask-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.27 201.83L156 98V36h12a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h12v62L37.73 201.83A12 12 0 0 0 48 220h160a12 12 0 0 0 10.29-18.17ZM107.43 101.2a4.07 4.07 0 0 0 .57-2.06V36h40v63.14a4.07 4.07 0 0 0 .57 2.06l41 68.33c-12.76 3.94-32.54 4.68-59.75-9.1c-18-9.14-35-13.24-50.54-12.29ZM211.46 210a3.94 3.94 0 0 1-3.48 2H48a4 4 0 0 1-3.43-6.06l29.53-49.21c15.54-2.43 33.05 1.21 52.07 10.84C144.54 176.86 160 180 172.42 180a65 65 0 0 0 21.36-3.46l17.63 29.38a3.92 3.92 0 0 1 .05 4.08"></svg:path>`,
})
export class PhFlaskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalThinIcon],svg[ph-flip-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.38 28.26a11.76 11.76 0 0 0-13.44 7.08v.08L29 195.32A12 12 0 0 0 40 212h64a12 12 0 0 0 12-12V40a11.75 11.75 0 0 0-9.62-11.74M108 200a4 4 0 0 1-4 4H40a3.93 3.93 0 0 1-3.33-1.79a4 4 0 0 1-.32-3.84l64-159.94A4 4 0 0 1 108 40Zm119.07-4.6l-64-160v-.08A12 12 0 0 0 140 40v160a12 12 0 0 0 12 12h64a12 12 0 0 0 11.08-16.6Zm-7.75 6.81A3.93 3.93 0 0 1 216 204h-64a4 4 0 0 1-4-4V40a3.81 3.81 0 0 1 3.2-3.92a4.6 4.6 0 0 1 .9-.09a3.69 3.69 0 0 1 3.57 2.42l64 160a3.9 3.9 0 0 1-.35 3.8"></svg:path>`,
})
export class PhFlipHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalThinIcon],svg[ph-flip-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 116h160a12 12 0 0 0 4.6-23.09l-160-64A12 12 0 0 0 44 40v64a12 12 0 0 0 12 12m-4-76a4 4 0 0 1 4-4a4 4 0 0 1 1.57.32h.07l159.91 64A4 4 0 0 1 216 108H56a4 4 0 0 1-4-4Zm175.74 109.61A11.75 11.75 0 0 0 216 140H56a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12a11.8 11.8 0 0 0 4.59-.93l160-64h.08a11.75 11.75 0 0 0 7.07-13.46m-10.17 6.06l-160 64A4 4 0 0 1 52 216v-64a4 4 0 0 1 4-4h160a4 4 0 0 1 1.59 7.67Z"></svg:path>`,
})
export class PhFlipVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackThinIcon],svg[ph-floppy-disk-back-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H83.31a12 12 0 0 0-8.48 3.51L39.52 74.83A11.9 11.9 0 0 0 36 83.31V208a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M84 44h88v36a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4Zm128 164a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V83.31a4 4 0 0 1 1.17-2.82L76 49.66V80a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12V44h28a4 4 0 0 1 4 4Zm-84-92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFloppyDiskBackThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskThinIcon],svg[ph-floppy-disk-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 74.83l-35.32-35.32a11.93 11.93 0 0 0-8.48-3.51H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V83.31a11.93 11.93 0 0 0-3.51-8.48M172 212H84v-60a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4Zm40-4a4 4 0 0 1-4 4h-28v-60a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v60H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h124.69a4 4 0 0 1 2.82 1.17l35.32 35.32a4 4 0 0 1 1.17 2.82ZM156 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFloppyDiskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowThinIcon],svg[ph-flow-arrow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.83 77.17l-32-32a4 4 0 0 0-5.66 5.66L230.34 76H208c-46.67 0-57.84 26.81-67.69 50.46c-9.46 22.69-18.4 44.16-56.55 45.48a36 36 0 1 0 0 8c43.49-1.42 54.33-27.39 63.91-50.39C157.45 106.12 166.67 84 208 84h22.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66M48 204a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFlowArrowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusThinIcon],svg[ph-flower-lotus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.37 123.65a11.54 11.54 0 0 0-7.08-5.46a71.5 71.5 0 0 0-26.29-1.67c5.48-21.46 2.38-38.36-.75-48a12.16 12.16 0 0 0-14.16-8.19a82.85 82.85 0 0 0-31 14.17a91.06 91.06 0 0 0-27.9-36a11.91 11.91 0 0 0-14.44 0a91.06 91.06 0 0 0-27.9 36a82.9 82.9 0 0 0-31-14.17a12.16 12.16 0 0 0-14.16 8.19c-3.13 9.68-6.23 26.58-.75 48a71.5 71.5 0 0 0-26.26 1.67a11.54 11.54 0 0 0-7.08 5.46a12 12 0 0 0-1.2 9.22c3.24 12 13.2 34.81 43.52 52.92S113.45 204 128 204s41.61 0 72.07-18.21s40.28-40.93 43.52-52.92a12 12 0 0 0-1.22-9.22M195.8 68.11a4.2 4.2 0 0 1 4.87 2.89c4 12.5 8 38.35-10.77 71c-10.45 18.19-25.11 32.2-38.11 41.44C162 170 172 149.24 172 119.19a113.4 113.4 0 0 0-5.88-37a75.3 75.3 0 0 1 29.68-14.08M55.33 71a4.19 4.19 0 0 1 4.87-2.84a75.3 75.3 0 0 1 29.68 14.03a113.4 113.4 0 0 0-5.88 37c0 30.05 10 50.82 20.21 64.23c-13-9.24-27.66-23.25-38.11-41.44C47.32 109.3 51.29 83.45 55.33 71m4.72 108c-27.9-16.67-37-37.32-39.9-48.15a4 4 0 0 1 .41-3.13a3.6 3.6 0 0 1 2.21-1.73a64.6 64.6 0 0 1 26.73-1a123.5 123.5 0 0 0 9.66 21c13.28 23.1 32.66 39.67 48.27 49.11a116.3 116.3 0 0 1-47.38-16.17Zm68 16.34a75.8 75.8 0 0 1-17.08-16.4C98.37 162.58 92 142.5 92 119.19c0-44.25 23.49-66.75 33.59-74.36a4 4 0 0 1 4.82 0c10.1 7.61 33.59 30.11 33.59 74.36c0 23.31-6.37 43.39-18.92 59.68a75.8 75.8 0 0 1-17.08 16.4Zm107.85-64.49c-2.92 10.83-12 31.48-39.9 48.15a116.3 116.3 0 0 1-47.38 16.15c15.61-9.44 35-26 48.27-49.11a123.5 123.5 0 0 0 9.66-21a64.45 64.45 0 0 1 26.73 1a3.6 3.6 0 0 1 2.21 1.73a4 4 0 0 1 .36 3.01Z"></svg:path>`,
})
export class PhFlowerLotusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerThinIcon],svg[ph-flower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.35 132.82a51 51 0 0 0-12.59-4.82a51 51 0 0 0 12.59-4.82a36 36 0 0 0-36-62.36a51.5 51.5 0 0 0-10.47 8.5A51.3 51.3 0 0 0 164 56a36 36 0 0 0-72 0a51.3 51.3 0 0 0 2.12 13.32a51.5 51.5 0 0 0-10.47-8.5a36 36 0 1 0-36 62.36A51 51 0 0 0 60.24 128a51 51 0 0 0-12.59 4.82a36 36 0 1 0 36 62.36a51.5 51.5 0 0 0 10.47-8.5A51.3 51.3 0 0 0 92 200a36 36 0 0 0 72 0a51.3 51.3 0 0 0-2.12-13.32a51.5 51.5 0 0 0 10.47 8.5a35.85 35.85 0 0 0 18 4.84a36.2 36.2 0 0 0 9.37-1.25a36 36 0 0 0 8.68-66Zm-32-65.07a28 28 0 0 1 28 48.5c-6.95 4-19.82 6.66-37.44 7.74l-3.16-.17a36 36 0 0 0-14.26-24.68c.49-1 1-1.9 1.44-2.84c9.74-14.71 18.47-24.53 25.42-28.55M128 156a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0-128a28 28 0 0 1 28 28c0 8-4.14 20.5-12 36.3c-.58.87-1.15 1.75-1.73 2.65a35.94 35.94 0 0 0-28.52 0c-.58-.9-1.15-1.78-1.73-2.65C104.14 76.5 100 64 100 56a28 28 0 0 1 28-28m-76.35 88.25a28 28 0 1 1 28-48.5c6.95 4 15.68 13.84 25.42 28.55c.47.94 1 1.88 1.44 2.84a36 36 0 0 0-14.26 24.68l-3.16.17c-17.62-1.08-30.49-3.73-37.44-7.74m28 72a28 28 0 1 1-28-48.5c7-4 19.82-6.66 37.44-7.74l3.16.17a36 36 0 0 0 14.26 24.68c-.49 1-1 1.9-1.44 2.84c-9.74 14.71-18.47 24.53-25.42 28.55M128 228a28 28 0 0 1-28-28c0-8 4.14-20.5 12-36.3c.58-.87 1.15-1.75 1.73-2.65a35.94 35.94 0 0 0 28.52 0c.58.9 1.15 1.78 1.73 2.65c7.87 15.8 12 28.27 12 36.3A28 28 0 0 1 128 228m86.6-50a28 28 0 0 1-38.25 10.25c-6.95-4-15.68-13.84-25.42-28.55c-.47-.94-1-1.88-1.44-2.84a36 36 0 0 0 14.26-24.68l3.16-.17c17.62 1.08 30.49 3.73 37.44 7.74A28 28 0 0 1 214.6 178"></svg:path>`,
})
export class PhFlowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipThinIcon],svg[ph-flower-tulip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52a83.5 83.5 0 0 0-37 8.62c-14.2-26.46-40-39.63-41.19-40.2a4 4 0 0 0-3.58 0c-1.14.57-27 13.74-41.19 40.2A83.5 83.5 0 0 0 48 52a4 4 0 0 0-4 4v40a84.1 84.1 0 0 0 80 83.9v45.63l-42.21-21.11a4 4 0 1 0-3.58 7.16l48 24a4 4 0 0 0 3.58 0l48-24a4 4 0 0 0-3.58-7.16L132 225.53V179.9A84.1 84.1 0 0 0 212 96V56a4 4 0 0 0-4-4m-80-23.44c5.91 3.37 25 15.45 36 35.93a84.46 84.46 0 0 0-36 45.92a84.46 84.46 0 0 0-36-45.92c11-20.42 30.1-32.55 36-35.93M52 96V60.1a76.11 76.11 0 0 1 72 75.9v35.9A76.11 76.11 0 0 1 52 96m152 0a76.11 76.11 0 0 1-72 75.9V136a76.11 76.11 0 0 1 72-75.9Z"></svg:path>`,
})
export class PhFlowerTulipThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerThinIcon],svg[ph-flying-saucer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.79 214.73a4 4 0 0 1-2.53 5.06a3.9 3.9 0 0 1-1.26.21a4 4 0 0 1-3.79-2.73l-8-24a4 4 0 1 1 7.58-2.54ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-38.74.2a4 4 0 0 0-5.05 2.53l-8 24a4 4 0 1 0 7.58 2.54l8-24a4 4 0 0 0-2.53-5.07M244 112c0 29.16-50.95 52-116 52S12 141.16 12 112c0-20.31 24.8-38.16 64.84-46.8a59.65 59.65 0 0 1 93.31-11.9a61 61 0 0 1 9.42 12C219.36 74 244 91.77 244 112M76 96.83v3a11.9 11.9 0 0 0 9.24 11.64A192 192 0 0 0 128 116a192 192 0 0 0 42.75-4.48A11.9 11.9 0 0 0 180 99.88V96a52 52 0 0 0-52.69-52C99 44.37 76 68.07 76 96.83M236 112c0-15-20.13-29.37-51.94-37.43A59.9 59.9 0 0 1 188 96v3.91a19.87 19.87 0 0 1-15.45 19.41A199.7 199.7 0 0 1 128 124a199.7 199.7 0 0 1-44.54-4.68A19.86 19.86 0 0 1 68 99.91v-3.06a60.9 60.9 0 0 1 4.25-22.36C40.25 82.54 20 96.88 20 112c0 23.85 49.46 44 108 44s108-20.15 108-44"></svg:path>`,
})
export class PhFlyingSaucerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedThinIcon],svg[ph-folder-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 208a4 4 0 0 1-4 4H39.38A11.4 11.4 0 0 1 28 200.62V192a4 4 0 0 1 8 0v8.62a3.39 3.39 0 0 0 3.38 3.38H88a4 4 0 0 1 4 4m68-4h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-56a4 4 0 0 0-4 4v48.89a3.12 3.12 0 0 1-3.11 3.11H200a4 4 0 0 0 0 8h16.89A11.12 11.12 0 0 0 228 200.89V152a4 4 0 0 0-4-4m-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M28 80V56a12 12 0 0 1 12-12h52.69a11.9 11.9 0 0 1 8.48 3.52l29.66 29.65A4 4 0 0 1 128 84H32a4 4 0 0 1-4-4m8-4h82.34L95.51 53.17A4 4 0 0 0 92.69 52H40a4 4 0 0 0-4 4Zm-4 80a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhFolderDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedThinIcon],svg[ph-folder-dotted-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 208a4 4 0 0 1-4 4H39.4A11.4 11.4 0 0 1 28 200.6V192a4 4 0 0 1 8 0v8.6a3.4 3.4 0 0 0 3.4 3.4H88a4 4 0 0 1 4 4Zm68-4h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-56a4 4 0 0 0-4 4v48.9a3.1 3.1 0 0 1-3.1 3.1H200a4 4 0 0 0 0 8h16.9a11.1 11.1 0 0 0 11.1-11.1V152a4 4 0 0 0-4-4Zm-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12ZM28 80V56a12 12 0 0 1 12-12h52.7a11.9 11.9 0 0 1 8.5 3.5l29.6 29.7a3.8 3.8 0 0 1 .9 4.3A4 4 0 0 1 128 84H32a4 4 0 0 1-4-4Zm8-4h82.3L95.5 53.2a3.8 3.8 0 0 0-2.8-1.2H40a4 4 0 0 0-4 4Zm-4 80a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Z"></svg:path>`,
})
export class PhFolderDottedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockThinIcon],svg[ph-folder-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 164h-12v-8a24 24 0 0 0-48 0v8h-12a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-52-8a16 16 0 0 1 32 0v8h-32Zm48 48h-64v-32h64Zm-4-128h-86.34l-28.49-28.49A12 12 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h73.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4v16a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4"></svg:path>`,
})
export class PhFolderLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusThinIcon],svg[ph-folder-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4m180 148.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusThinIcon],svg[ph-folder-notch-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12M36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2l-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Zm-64-48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderNotchMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenThinIcon],svg[ph-folder-notch-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.72 113a11.88 11.88 0 0 0-9.73-5H212V88a12 12 0 0 0-12-12h-69.34a4 4 0 0 1-2.4-.8l-27.73-20.8a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v144a3.94 3.94 0 0 0 .69 2.24A4 4 0 0 0 32 212h179.09a4 4 0 0 0 3.79-2.74l28.49-85.47a11.86 11.86 0 0 0-1.65-10.79M40 60h53.33a4 4 0 0 1 2.4.8l27.73 20.8a12.07 12.07 0 0 0 7.2 2.4H200a4 4 0 0 1 4 4v20h-57.58a12 12 0 0 0-6.66 2l-20 13.31a4 4 0 0 1-2.22.67H69.41a12 12 0 0 0-11.14 7.54L36 187.23V64a4 4 0 0 1 4-4m195.78 61.27L208.2 204H37.91l27.79-69.49a4 4 0 0 1 3.71-2.51h48.16a12 12 0 0 0 6.66-2l20-13.31a4 4 0 0 1 2.22-.67H232a4 4 0 0 1 3.79 5.27Z"></svg:path>`,
})
export class PhFolderNotchOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusThinIcon],svg[ph-folder-notch-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12M36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2l-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Zm-64-48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderNotchPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchThinIcon],svg[ph-folder-notch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12M36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2l-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFolderNotchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenThinIcon],svg[ph-folder-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.72 113a11.88 11.88 0 0 0-9.73-5H212V88a12 12 0 0 0-12-12h-70.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v144a4 4 0 0 0 4 4h179.09a4 4 0 0 0 3.79-2.74l28.49-85.47a11.86 11.86 0 0 0-1.65-10.79M40 60h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h72a4 4 0 0 1 4 4v20H69.76a12 12 0 0 0-11.38 8.21L36 183.35V64a4 4 0 0 1 4-4m195.78 61.26L208.2 204H37.55L66 118.74a4 4 0 0 1 3.76-2.74H232a4 4 0 0 1 3.79 5.26Z"></svg:path>`,
})
export class PhFolderOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusThinIcon],svg[ph-folder-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4m180 148.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedThinIcon],svg[ph-folder-simple-dashed-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.6 83.2L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v16a4 4 0 0 1-8 0V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l29.87 22.4a4 4 0 1 1-4.8 6.4M88 204H39.38a3.39 3.39 0 0 1-3.38-3.38V192a4 4 0 0 0-8 0v8.62A11.4 11.4 0 0 0 39.38 212H88a4 4 0 0 0 0-8m72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m64-56a4 4 0 0 0-4 4v48.89a3.12 3.12 0 0 1-3.11 3.11H200a4 4 0 0 0 0 8h16.89A11.12 11.12 0 0 0 228 200.89V152a4 4 0 0 0-4-4m-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M32 156a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhFolderSimpleDashedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedThinIcon],svg[ph-folder-simple-dotted-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.6 83.2L95.7 60.8a4.1 4.1 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v16a4 4 0 0 1-8 0V64a12 12 0 0 1 12-12h53.3a12.2 12.2 0 0 1 7.2 2.4l29.9 22.4a4 4 0 0 1 .8 5.6A4.2 4.2 0 0 1 128 84a4.3 4.3 0 0 1-2.4-.8ZM88 204H39.4a3.4 3.4 0 0 1-3.4-3.4V192a4 4 0 0 0-8 0v8.6A11.4 11.4 0 0 0 39.4 212H88a4 4 0 0 0 0-8Zm72 0h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-56a4 4 0 0 0-4 4v48.9a3.1 3.1 0 0 1-3.1 3.1H200a4 4 0 0 0 0 8h16.9a11.1 11.1 0 0 0 11.1-11.1V152a4 4 0 0 0-4-4Zm-8-72h-48a4 4 0 0 0 0 8h48a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12ZM32 156a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Z"></svg:path>`,
})
export class PhFolderSimpleDottedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockThinIcon],svg[ph-folder-simple-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 88v16a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4h-85.33a12.05 12.05 0 0 1-7.2-2.4L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h72a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l27.74 20.8a4 4 0 0 0 2.4.8H216a12 12 0 0 1 12 12m0 80v40a4 4 0 0 1-4 4h-72a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h12v-8a24 24 0 0 1 48 0v8h12a4 4 0 0 1 4 4m-56-4h32v-8a16 16 0 0 0-32 0Zm48 8h-64v32h64Z"></svg:path>`,
})
export class PhFolderSimpleLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusThinIcon],svg[ph-folder-simple-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176.89A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12m4 124.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h88a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderSimpleMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusThinIcon],svg[ph-folder-simple-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176.89A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12m4 124.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h88a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFolderSimplePlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarThinIcon],svg[ph-folder-simple-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84h-88a4 4 0 0 1-2.4-.8L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h80a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l28.8 21.6H216a12 12 0 0 1 12 12v32a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4m18.55 80.7l-24.46 20.19l7.46 30.11a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L184 203.18l-27.64 16.27a4 4 0 0 1-5.91-4.41l7.46-30.15l-24.46-20.19a4 4 0 0 1 2.24-7.08l32.24-2.49l12.4-28.72a4 4 0 0 1 7.34 0l12.4 28.72l32.24 2.49a4 4 0 0 1 2.24 7.08m-12.74.14L197 162.92a4 4 0 0 1-3.36-2.4L184 138.1l-9.68 22.42a4 4 0 0 1-3.36 2.4l-24.77 1.92L165 180.32a4 4 0 0 1 1.33 4.05l-5.78 23.36L182 195.09a4 4 0 0 1 4.06 0l21.47 12.64l-5.78-23.36a4 4 0 0 1 1.33-4.05Z"></svg:path>`,
})
export class PhFolderSimpleStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleThinIcon],svg[ph-folder-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176.89A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12m4 124.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h88a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFolderSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserThinIcon],svg[ph-folder-simple-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.5 199.3a28 28 0 1 0-31 0a36.24 36.24 0 0 0-20.37 23.7a4 4 0 0 0 2.84 4.89a3.7 3.7 0 0 0 1 .14a4 4 0 0 0 3.87-3c3.29-12.38 14.85-21 28.13-21s24.84 8.65 28.13 21a4 4 0 1 0 7.73-2.05a36.22 36.22 0 0 0-20.33-23.68M172 176a20 20 0 1 1 20 20a20 20 0 0 1-20-20m56-88v32a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4h-85.33a12.05 12.05 0 0 1-7.2-2.4L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h80a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l27.74 20.8a4 4 0 0 0 2.4.8H216a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFolderSimpleUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarThinIcon],svg[ph-folder-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 84a4 4 0 0 1 4 4v32a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12h-86.34l-28.49-28.49A11.93 11.93 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.61A11.4 11.4 0 0 0 39.38 212h81.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.39V84ZM40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4m195.81 108.41a4 4 0 0 0-3.5-2.79l-32.24-2.49l-12.4-28.72a4 4 0 0 0-7.34 0l-12.4 28.72l-32.24 2.49a4 4 0 0 0-2.24 7.08l24.46 20.19l-7.46 30.11a4 4 0 0 0 5.91 4.41L184 203.18l27.64 16.27a4 4 0 0 0 2 .55a4.05 4.05 0 0 0 2.39-.79a4 4 0 0 0 1.49-4.17l-7.46-30.15l24.46-20.19a4 4 0 0 0 1.29-4.29m-32.76 19.91a4 4 0 0 0-1.33 4.05l5.78 23.36l-21.5-12.64a4 4 0 0 0-4.06 0l-21.44 12.64l5.78-23.36a4 4 0 0 0-1.33-4.05l-18.76-15.48l24.81-1.92a4 4 0 0 0 3.36-2.4L184 138.1l9.68 22.42a4 4 0 0 0 3.36 2.4l24.77 1.92Z"></svg:path>`,
})
export class PhFolderStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderThinIcon],svg[ph-folder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-86.34l-28.49-28.48A11.9 11.9 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.62A11.4 11.4 0 0 0 39.38 212h177.51A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12M36 56a4 4 0 0 1 4-4h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36Zm184 144.89a3.12 3.12 0 0 1-3.11 3.11H39.38a3.39 3.39 0 0 1-3.38-3.38V84h180a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFolderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserThinIcon],svg[ph-folder-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.5 199.3a28 28 0 1 0-31 0a36.24 36.24 0 0 0-20.37 23.7a4 4 0 0 0 2.84 4.89a3.7 3.7 0 0 0 1 .14a4 4 0 0 0 3.87-3c3.29-12.38 14.85-21 28.13-21s24.84 8.65 28.13 21a4 4 0 1 0 7.73-2.05a36.22 36.22 0 0 0-20.33-23.68M172 176a20 20 0 1 1 20 20a20 20 0 0 1-20-20m44-100h-86.34l-28.49-28.49A12 12 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.61A11.4 11.4 0 0 0 39.38 212h81.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.39V84h180a4 4 0 0 1 4 4v32a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4"></svg:path>`,
})
export class PhFolderUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersThinIcon],svg[ph-folders-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68h-70.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h152.89A11.12 11.12 0 0 0 204 200.89V180h20.89A11.12 11.12 0 0 0 236 168.89V80a12 12 0 0 0-12-12m-28 132.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h72a4 4 0 0 1 4 4Zm32-32a3.12 3.12 0 0 1-3.11 3.11H204v-60a12 12 0 0 0-12-12h-70.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H68V56a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h72a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFoldersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetThinIcon],svg[ph-football-helmet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 164a8 8 0 1 1-8-8a8 8 0 0 1 8 8m136 12v32a12 12 0 0 1-12 12h-36a12.08 12.08 0 0 1-11.51-8.6L156.83 172h-30.28l5.09 17.13a2 2 0 0 1 .07.27A12 12 0 0 1 120 204H72.14a4 4 0 0 1-2.26-.7A96 96 0 0 1 28 124c0-52.19 42.47-95.23 94.63-96A96 96 0 0 1 220 124v4a4 4 0 0 1-4 4h-62.65l9.46 32H216a12 12 0 0 1 12 12m-104.07 15.25l-15.57-52.37a3 3 0 0 1-.07-.28A12 12 0 0 1 120 124h92a88 88 0 0 0-89.25-88C74.93 36.67 36 76.13 36 124a88 88 0 0 0 37.39 72H120a4 4 0 0 0 3.93-4.75M154.46 164L145 132h-25a4 4 0 0 0-3.93 4.75l8.1 27.25ZM220 176a4 4 0 0 0-4-4h-50.83l11 37.13A4 4 0 0 0 180 212h36a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhFootballHelmetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballThinIcon],svg[ph-football-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.12 54.56a28.94 28.94 0 0 0-23.68-23.68c-31.61-5.36-91.16-7.83-134.78 35.78S25.52 169.83 30.88 201.44a28.94 28.94 0 0 0 23.68 23.68A203.3 203.3 0 0 0 88.25 228c31.3 0 70.19-7.77 101.09-38.66C233 145.72 230.48 86.17 225.12 54.56m-57.7-18.66a196.3 196.3 0 0 1 32.69 2.86a21 21 0 0 1 17.13 17.13a185.3 185.3 0 0 1 2.32 46.11L154 36.43c4.33-.34 8.79-.53 13.42-.53M55.89 217.24a21 21 0 0 1-17.13-17.13A185.3 185.3 0 0 1 36.44 154L102 219.56a185.3 185.3 0 0 1-46.11-2.32m127.79-33.56c-12.22 12.23-35.23 29.34-71.56 34.73l-74.53-74.53c5.41-36.33 22.5-59.34 34.73-71.56S107.56 43 143.89 37.6l74.52 74.52c-5.41 36.33-22.5 59.34-34.73 71.56m-20.87-90.49a4 4 0 0 1 0 5.65L145.65 116l9.17 9.16a4 4 0 0 1-5.66 5.66l-9.16-9.16L121.66 140l9.17 9.17a4 4 0 0 1-5.66 5.66l-9.17-9.18l-17.16 17.16a4 4 0 1 1-5.65-5.65L110.35 140l-9.17-9.16a4 4 0 1 1 5.66-5.66l9.17 9.17L134.34 116l-9.17-9.17a4 4 0 1 1 5.66-5.66l9.16 9.17l17.17-17.16a4 4 0 0 1 5.65.01"></svg:path>`,
})
export class PhFootballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsThinIcon],svg[ph-footprints-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 188h-56a4 4 0 0 0-4 4v12a32 32 0 1 0 64 0v-12a4 4 0 0 0-4-4m-4 16a24 24 0 1 1-48 0v-8h48Zm-100-40H48a4 4 0 0 0-4 4v12a32 32 0 1 0 64 0v-12a4 4 0 0 0-4-4m-4 16a24 24 0 1 1-48 0v-8h48ZM76 20c-9.82 0-20.07 9.75-28.12 26.75c-13.39 28.27-18 70.05-.23 91.78a4 4 0 0 0 3.1 1.47h50.51a4 4 0 0 0 3.1-1.47c17.79-21.73 13.16-63.51-.23-91.78C96.08 29.75 85.83 20 76 20m23.3 112H52.71c-13.8-19-9.79-56.08 2.4-81.82C61.59 36.5 69.59 28 76 28s14.42 8.5 20.9 22.18C109.09 75.92 113.1 113 99.3 132m55.44 32h50.51a4 4 0 0 0 3.1-1.47c17.79-21.73 13.16-63.51-.23-91.78C200.07 53.75 189.82 44 180 44s-20.08 9.75-28.13 26.75c-13.39 28.27-18 70.05-.23 91.78a4 4 0 0 0 3.1 1.47m4.36-89.82C165.58 60.5 173.58 52 180 52s14.41 8.5 20.89 22.18c12.19 25.74 16.2 62.82 2.4 81.82H156.7c-13.8-19-9.79-56.08 2.4-81.82"></svg:path>`,
})
export class PhFootprintsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeThinIcon],svg[ph-fork-knife-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 88V40a4 4 0 0 1 8 0v48a4 4 0 0 1-8 0m136-48v184a4 4 0 0 1-8 0v-52h-52a4 4 0 0 1-4-4a264.3 264.3 0 0 1 7.11-55.94c9.47-39.22 27.21-65.41 51.31-75.74A4 4 0 0 1 212 40m-8 6.46c-41.75 23.87-47.19 99.29-47.9 117.54H204Zm-88-7.12a4 4 0 0 0-7.9 1.32l8 47.66a36 36 0 0 1-72 0l8-47.66a4 4 0 0 0-7.9-1.32l-8 48a5 5 0 0 0-.2.66a44.06 44.06 0 0 0 40 43.81V224a4 4 0 0 0 8 0v-92.19A44.06 44.06 0 0 0 124 88a5 5 0 0 0 0-.66Z"></svg:path>`,
})
export class PhForkKnifeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKThinIcon],svg[ph-four-k-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 48a4 4 0 0 1 4-4h192a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m196 156H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M144 76a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0v-30.5l17.75-20.28L196.54 178a4 4 0 1 0 6.92-4l-32.16-55.13L203 82.63a4 4 0 1 0-6-5.26l-49 56V80a4 4 0 0 0-4-4M92 176v-20H40a4 4 0 0 1-3.16-6.46l56-72A4 4 0 0 1 100 80v68h12a4 4 0 0 1 0 8h-12v20a4 4 0 0 1-8 0m0-28V91.66L48.18 148Z"></svg:path>`,
})
export class PhFourKThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersThinIcon],svg[ph-frame-corners-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 80v32a4 4 0 0 1-8 0V84h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M96 172H68v-28a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8M228 56v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhFrameCornersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoThinIcon],svg[ph-framer-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 104V40a4 4 0 0 0-4-4H56a4 4 0 0 0-2.66 7l64.14 57H56a4 4 0 0 0-4 4v64a4 4 0 0 0 1.17 2.83l72 72A4 4 0 0 0 132 240v-68h68a4 4 0 0 0 2.66-7l-64.14-57H200a4 4 0 0 0 4-4m-14.52 60H128a4 4 0 0 0-4 4v62.34l-64-64V108h66.48Zm6.52-64h-66.48l-63-56H196Z"></svg:path>`,
})
export class PhFramerLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionThinIcon],svg[ph-function-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 40a4 4 0 0 1-4 4h-29.29a28 28 0 0 0-27.55 23l-10.37 57H184a4 4 0 0 1 0 8h-52.66l-10.63 58.44A36 36 0 0 1 85.29 220H56a4 4 0 0 1 0-8h29.29a28 28 0 0 0 27.55-23l10.37-57H72a4 4 0 0 1 0-8h52.66l10.63-58.44A36 36 0 0 1 170.71 36H200a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFunctionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleThinIcon],svg[ph-funnel-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 136a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m36-52H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-80 96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFunnelSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXThinIcon],svg[ph-funnel-simple-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 140H64a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8m40-56H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-104 96h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m90.83-6.83a4 4 0 0 0-5.66 0L192 194.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L186.34 200l-21.17 21.17a4 4 0 0 0 5.66 5.66L192 205.66l21.17 21.17a4 4 0 0 0 5.66-5.66L197.66 200l21.17-21.17a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhFunnelSimpleXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelThinIcon],svg[ph-funnel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227 51.15A11.85 11.85 0 0 0 216 44H40a12 12 0 0 0-8.88 20.07l.05.05L100 137.59V216a12 12 0 0 0 18.66 10l32-21.33a12 12 0 0 0 5.35-10v-57.08l68.86-73.52A11.85 11.85 0 0 0 227 51.15m-8 7.5l-69.9 74.62A4 4 0 0 0 148 136v58.65a4 4 0 0 1-1.78 3.33l-32 21.33A4 4 0 0 1 108 216v-80a4 4 0 0 0-1.08-2.74L37.05 58.67A4 4 0 0 1 40 52h176a4 4 0 0 1 3 6.65"></svg:path>`,
})
export class PhFunnelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXThinIcon],svg[ph-funnel-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227 51.15A11.86 11.86 0 0 0 216 44H40a12 12 0 0 0-8.88 20.07l.05.05L100 137.59V216a12 12 0 0 0 18.65 10l32-21.33a12 12 0 0 0 5.34-10v-57.08l68.86-73.52A11.83 11.83 0 0 0 227 51.15m-8 7.5l-69.91 74.62A4 4 0 0 0 148 136v58.65a4 4 0 0 1-1.78 3.33l-32 21.33A4 4 0 0 1 108 216v-80a4 4 0 0 0-1.09-2.74L37.05 58.67A4 4 0 0 1 40 52h176a4 4 0 0 1 3 6.65m23.84 154.53a4 4 0 0 1-5.66 5.66L216 197.67l-21.17 21.17a4 4 0 0 1-5.66-5.66L210.34 192l-21.17-21.17a4 4 0 1 1 5.66-5.66L216 186.35l21.17-21.17a4 4 0 1 1 5.66 5.66L221.66 192Z"></svg:path>`,
})
export class PhFunnelXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerThinIcon],svg[ph-game-controller-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 108h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 0 8m-72-8H92V88a4 4 0 0 0-8 0v12H72a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8m134.21 98.36a32 32 0 0 1-48.84 4.27l-.17-.18L148.29 156h-40.57l-40.91 46.44l-.18.19A32.08 32.08 0 0 1 44 212a32 32 0 0 1-31.5-37.56l16.37-84.23A55.87 55.87 0 0 1 83.89 44H172a56.07 56.07 0 0 1 55.1 46.1a.3.3 0 0 1 0 .1l16.37 84.16a31.86 31.86 0 0 1-5.26 24M172 148a48 48 0 1 0 0-96H83.9a47.9 47.9 0 0 0-47.16 39.67L20.36 175.9a24 24 0 0 0 19.48 27.73a24 24 0 0 0 21-6.58l42-47.69a4 4 0 0 1 3-1.36Zm63.63 27.83l-11-56.66A56.09 56.09 0 0 1 172 156h-13l36.16 41.06a24 24 0 0 0 40.52-21.23Z"></svg:path>`,
})
export class PhGameControllerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageThinIcon],svg[ph-garage-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12V98.67a12 12 0 0 0-5.34-10l-88-58.67a12 12 0 0 0-13.32 0l-88 58.67a12 12 0 0 0-5.34 10V196H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 98.67a4 4 0 0 1 1.78-3.33l88-58.66a4 4 0 0 1 4.44 0l88 58.66a4 4 0 0 1 1.78 3.33V196h-32v-60a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v60H36ZM180 140v24h-48v-24Zm-56 24H76v-24h48Zm-48 8h48v24H76Zm56 0h48v24h-48Z"></svg:path>`,
})
export class PhGarageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanThinIcon],svg[ph-gas-can-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28h-76.69a12 12 0 0 0-8.48 3.51l-13.17 13.18l-13.17-13.18a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l13.2 13.15l-13.17 13.17a11.9 11.9 0 0 0-3.52 8.48V216a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12M53.17 66.83a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 0L96 50.34L66.34 80ZM204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V107.31a4 4 0 0 1 1.17-2.82l16-16l35.31-35.31l16-16a4 4 0 0 1 2.83-1.18H200a4 4 0 0 1 4 4ZM180 64a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-1.6 59.2L134.67 156l43.73 32.8a4 4 0 0 1-4.8 6.4L128 161l-45.6 34.2a4 4 0 0 1-4.8-6.4l43.73-32.8l-43.73-32.8a4 4 0 0 1 4.8-6.4L128 151l45.6-34.2a4 4 0 1 1 4.8 6.4"></svg:path>`,
})
export class PhGasCanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpThinIcon],svg[ph-gas-pump-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.14 72.49l-19.31-19.32a4 4 0 0 0-5.66 5.66l19.32 19.31a12 12 0 0 1 3.51 8.49V168a12 12 0 0 1-24 0v-40a20 20 0 0 0-20-20h-20V56a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v156H32a4 4 0 0 0 0 8h160a4 4 0 0 0 0-8h-20v-96h20a12 12 0 0 1 12 12v40a20 20 0 0 0 40 0V86.63a19.85 19.85 0 0 0-5.86-14.14M60 212V56a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12v156Zm80-100a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhGasPumpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeThinIcon],svg[ph-gauge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.23 75.5A107.37 107.37 0 0 0 127.62 44C68.28 44.21 20 93.16 20 153.13V176a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a107.25 107.25 0 0 0-31.77-76.5M228 176a4 4 0 0 1-4 4H111.85l59.38-81.65a4 4 0 1 0-6.46-4.7L102 180H32a4 4 0 0 1-4-4v-22.87a103 103 0 0 1 .84-13.13H56a4 4 0 0 0 0-8H30.21C39.59 87.66 77.84 53.93 124 52.09V80a4 4 0 0 0 8 0V52.08A100.08 100.08 0 0 1 226 132h-26a4 4 0 0 0 0 8h27.29a102 102 0 0 1 .71 12Z"></svg:path>`,
})
export class PhGaugeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelThinIcon],svg[ph-gavel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 119.52l-16-16a12 12 0 0 0-17 0l-1.17 1.17l-55-55l1.18-1.17a12 12 0 0 0 0-17l-16-16a12 12 0 0 0-17 0l-64 64a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l1.17-1.18L102.34 124l-68.2 68.21a21 21 0 0 0 29.66 29.66l68.2-68.21l12.69 12.69l-1.18 1.17a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l64-64a12 12 0 0 0 0-17ZM77.17 106.83l-16-16a4 4 0 0 1 0-5.66l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.65l-64 64a4 4 0 0 1-5.66.01m-19 109.38a13 13 0 1 1-18.37-18.34l68.2-68.21L126.34 148Zm37.14-110.55l50.35-50.35l55 55l-50.35 50.35Zm139.52 25.17l-64 64a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 0-5.65l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.66Z"></svg:path>`,
})
export class PhGavelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineThinIcon],svg[ph-gear-fine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124h-20.1a83.35 83.35 0 0 0-9.27-34.47l17.44-10.07a4 4 0 0 0-4-6.92l-17.45 10.07a84.5 84.5 0 0 0-25.23-25.23l10.07-17.45a4 4 0 0 0-6.92-4l-10.07 17.44A83.35 83.35 0 0 0 132 44.1V24a4 4 0 0 0-8 0v20.1a83.35 83.35 0 0 0-34.47 9.27L79.46 35.93a4 4 0 0 0-6.92 4l10.07 17.45a84.5 84.5 0 0 0-25.23 25.23L39.93 72.54a4 4 0 1 0-4 6.92l17.44 10.07A83.35 83.35 0 0 0 44.1 124H24a4 4 0 0 0 0 8h20.1a83.35 83.35 0 0 0 9.27 34.47l-17.44 10.07a4 4 0 0 0 2 7.46a3.9 3.9 0 0 0 2-.54l17.45-10.07a84.5 84.5 0 0 0 25.23 25.23l-10.07 17.45a4 4 0 0 0 1.46 5.46a4 4 0 0 0 5.46-1.46l10.07-17.44A83.35 83.35 0 0 0 124 211.9V232a4 4 0 0 0 8 0v-20.1a83.35 83.35 0 0 0 34.47-9.27l10.07 17.44a4 4 0 0 0 6.92-4l-10.07-17.45a84.5 84.5 0 0 0 25.23-25.23l17.45 10.07a3.9 3.9 0 0 0 2 .54a4 4 0 0 0 2-7.46l-17.44-10.07A83.35 83.35 0 0 0 211.9 132H232a4 4 0 0 0 0-8M128 52a76.09 76.09 0 0 1 75.89 72h-73.58L93.53 60.3A75.6 75.6 0 0 1 128 52m-76 76a76 76 0 0 1 34.61-63.69L123.38 128l-36.77 63.69A76 76 0 0 1 52 128m76 76a75.6 75.6 0 0 1-34.47-8.3l36.78-63.7h73.58A76.09 76.09 0 0 1 128 204"></svg:path>`,
})
export class PhGearFineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixThinIcon],svg[ph-gear-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m106-56a4 4 0 0 0-2-2.7l-30.89-17.6q-.47-.82-1-1.62l-.01-34.88a3.94 3.94 0 0 0-1.42-3a107.8 107.8 0 0 0-35.41-19.94a4 4 0 0 0-3.23.29L129 45.87h-2L96 28.51a4 4 0 0 0-3.23-.3a108 108 0 0 0-35.39 20a4 4 0 0 0-1.41 3l-.16 34.9l-1 1.62L23.9 105.3A4 4 0 0 0 22 108a102.8 102.8 0 0 0 0 40a4 4 0 0 0 1.95 2.7l30.89 17.6q.47.83 1 1.62l.12 34.87a3.94 3.94 0 0 0 1.42 3a107.8 107.8 0 0 0 35.41 19.94a4 4 0 0 0 3.23-.29L127 210.13h2l31 17.36a4 4 0 0 0 3.23.3a108 108 0 0 0 35.39-20a4 4 0 0 0 1.41-3l.16-34.9l1-1.62l30.91-17.57a4 4 0 0 0 2-2.71A102.8 102.8 0 0 0 234 108m-7.48 36.67l-30.22 17.17a4 4 0 0 0-1.51 1.53c-.61 1.09-1.25 2.17-1.91 3.24a3.9 3.9 0 0 0-.61 2.1l-.16 34.15a99.8 99.8 0 0 1-29.7 16.77l-30.4-17a4.06 4.06 0 0 0-2-.51h-3.85a4.1 4.1 0 0 0-2.05.51l-30.45 17a100.2 100.2 0 0 1-29.77-16.73l-.12-34.12a3.93 3.93 0 0 0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4 4 0 0 0-1.51-1.53l-30.25-17.23a94.8 94.8 0 0 1 0-33.34L59.7 94.16a4 4 0 0 0 1.51-1.53c.61-1.09 1.25-2.17 1.91-3.23a4 4 0 0 0 .61-2.11l.16-34.15a99.8 99.8 0 0 1 29.7-16.77l30.4 17a4.1 4.1 0 0 0 2.05.51h3.84a4 4 0 0 0 2.05-.51l30.45-17a100.2 100.2 0 0 1 29.73 16.73l.12 34.12a3.93 3.93 0 0 0 .61 2.11c.66 1 1.3 2.14 1.91 3.23a4 4 0 0 0 1.51 1.53l30.25 17.23a94.8 94.8 0 0 1 .03 33.34Z"></svg:path>`,
})
export class PhGearSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearThinIcon],svg[ph-gear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m83.93-32.49q.13-3.51 0-7l15.83-19.79a4 4 0 0 0 .75-3.53A103.6 103.6 0 0 0 218 75.9a4 4 0 0 0-3-2l-25.19-2.8a89 89 0 0 0-4.95-4.95L182.07 41a4 4 0 0 0-2-3a104 104 0 0 0-25.25-10.5a4 4 0 0 0-3.53.74l-19.78 15.83q-3.51-.14-7 0L104.7 28.24a4 4 0 0 0-3.53-.75A103.6 103.6 0 0 0 75.9 38a4 4 0 0 0-2 3l-2.8 25.19a89 89 0 0 0-4.95 4.95L41 73.93a4 4 0 0 0-3 2a104 104 0 0 0-10.5 25.25a4 4 0 0 0 .74 3.53l15.83 19.78q-.14 3.51 0 7L28.24 151.3a4 4 0 0 0-.75 3.53A103.6 103.6 0 0 0 38 180.1a4 4 0 0 0 3 2l25.19 2.8c1.58 1.71 3.24 3.37 4.95 4.95l2.8 25.2a4 4 0 0 0 2 3a104 104 0 0 0 25.28 10.46a4 4 0 0 0 3.53-.74l19.78-15.83q3.51.13 7 0l19.79 15.83a4 4 0 0 0 2.5.88a4 4 0 0 0 1-.13A103.6 103.6 0 0 0 180.1 218a4 4 0 0 0 2-3l2.8-25.19c1.71-1.58 3.37-3.24 4.95-4.95l25.2-2.8a4 4 0 0 0 3-2a104 104 0 0 0 10.46-25.28a4 4 0 0 0-.74-3.53Zm.17 42.83l-24.67 2.74a4 4 0 0 0-2.55 1.32a76 76 0 0 1-6.48 6.48a4 4 0 0 0-1.32 2.55l-2.74 24.66a95.5 95.5 0 0 1-19.64 8.15l-19.38-15.51a4 4 0 0 0-2.5-.87h-.24a74 74 0 0 1-9.16 0a4 4 0 0 0-2.74.87l-19.37 15.5a95.3 95.3 0 0 1-19.65-8.13l-2.74-24.67a4 4 0 0 0-1.32-2.55a76 76 0 0 1-6.48-6.48a4 4 0 0 0-2.55-1.32l-24.66-2.74a95.5 95.5 0 0 1-8.15-19.64l15.51-19.38a4 4 0 0 0 .87-2.74a78 78 0 0 1 0-9.16a4 4 0 0 0-.87-2.74l-15.5-19.37a95.3 95.3 0 0 1 8.13-19.65l24.67-2.74a4 4 0 0 0 2.55-1.32a76 76 0 0 1 6.48-6.48a4 4 0 0 0 1.32-2.55l2.74-24.66a95.5 95.5 0 0 1 19.64-8.15l19.38 15.51a4 4 0 0 0 2.74.87a74 74 0 0 1 9.16 0a4 4 0 0 0 2.74-.87l19.37-15.5a95.3 95.3 0 0 1 19.65 8.13l2.74 24.67a4 4 0 0 0 1.32 2.55a76 76 0 0 1 6.48 6.48a4 4 0 0 0 2.55 1.32l24.66 2.74a95.5 95.5 0 0 1 8.15 19.64l-15.51 19.38a4 4 0 0 0-.87 2.74a78 78 0 0 1 0 9.16a4 4 0 0 0 .87 2.74l15.5 19.37a95.3 95.3 0 0 1-8.13 19.65"></svg:path>`,
})
export class PhGearThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleThinIcon],svg[ph-gender-female-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 96a76 76 0 1 0-80 75.89V204H88a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8h-36v-32.11A76.09 76.09 0 0 0 204 96M60 96a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"></svg:path>`,
})
export class PhGenderFemaleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexThinIcon],svg[ph-gender-intersex-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-40a4 4 0 0 0 0 8h30.34l-34.79 34.79A60 60 0 1 0 116 171.85V196H88a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8h-28v-24.15A59.94 59.94 0 0 0 168.68 77L204 41.66V72a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-88 136a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhGenderIntersexThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleThinIcon],svg[ph-gender-male-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-48a4 4 0 0 0 0 8h38.35l-51.53 51.52a76 76 0 1 0 5.66 5.66L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-63.93 164.11a68 68 0 1 1 0-96.18a68.08 68.08 0 0 1 0 96.18"></svg:path>`,
})
export class PhGenderMaleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterThinIcon],svg[ph-gender-neuter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 104a76 76 0 1 0-80 75.89V232a4 4 0 0 0 8 0v-52.11A76.09 76.09 0 0 0 204 104m-76 68a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhGenderNeuterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryThinIcon],svg[ph-gender-nonbinary-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 100.13V55.07l33.94 20.36a4 4 0 1 0 4.12-6.86L135.77 48l34.29-20.57a4 4 0 1 0-4.12-6.86L128 43.34L90.06 20.57a4 4 0 1 0-4.12 6.86L120.23 48L85.94 68.57a4 4 0 0 0 4.12 6.86L124 55.07v45.06a68 68 0 1 0 8 0M128 228a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60"></svg:path>`,
})
export class PhGenderNonbinaryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderThinIcon],svg[ph-gender-transgender-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-48a4 4 0 0 0 0 8h38.34L168 82.35l-21.17-21.17a4 4 0 1 0-5.66 5.65L162.34 88l-21.17 21.18a68.16 68.16 0 1 0 5.65 5.66L168 93.67l21.17 21.17a4 4 0 1 0 5.66-5.66L173.66 88L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-77.57 166.45A60 60 0 1 1 156 160a60.07 60.07 0 0 1-17.57 42.45"></svg:path>`,
})
export class PhGenderTransgenderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostThinIcon],svg[ph-ghost-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 116a8 8 0 1 1-8-8a8 8 0 0 1 8 8m48-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64 12v96a4 4 0 0 1-6.53 3.1l-26.8-21.93l-26.8 21.93a4 4 0 0 1-5.07 0L128 197.17l-26.8 21.93a4 4 0 0 1-5.07 0l-26.8-21.93l-26.8 21.93A4 4 0 0 1 36 216v-96a92 92 0 0 1 184 0m-8 0a84 84 0 0 0-168 0v87.56l22.8-18.66a4 4 0 0 1 5.07 0l26.8 21.93l26.8-21.93a4 4 0 0 1 5.06 0l26.8 21.93l26.8-21.93a4 4 0 0 1 5.07 0l22.8 18.66Z"></svg:path>`,
})
export class PhGhostThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifThinIcon],svg[ph-gif-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 72v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m92-4h-56a4 4 0 0 0-4 4v112a4 4 0 0 0 8 0v-52h44a4 4 0 0 0 0-8h-44V76h52a4 4 0 0 0 0-8M96 124H72a4 4 0 0 0 0 8h20v20a28 28 0 0 1-56 0v-48a28 28 0 0 1 28-28c13 0 25 9 28.13 21a4 4 0 1 0 7.74-2C95.85 79.36 80.76 68 64 68a36 36 0 0 0-36 36v48a36 36 0 0 0 72 0v-24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGifThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftThinIcon],svg[ph-gift-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-49.19a50.5 50.5 0 0 0 12.63-8A25.53 25.53 0 0 0 188 49.44A28.62 28.62 0 0 0 158.56 20A25.53 25.53 0 0 0 140 28.56c-5.91 6.67-9.63 15.36-12 23.69c-2.35-8.33-6.07-17-12-23.69A25.53 25.53 0 0 0 97.44 20A28.62 28.62 0 0 0 68 49.44A25.53 25.53 0 0 0 76.56 68a50.5 50.5 0 0 0 12.63 8H40a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h4v68a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-68h4a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m-70-42.14A17.6 17.6 0 0 1 158.8 28h.61A20.62 20.62 0 0 1 180 49.2a17.6 17.6 0 0 1-5.86 12.8c-12.09 10.7-33.07 13.21-42 13.79c.62-8.86 3.12-29.79 13.86-41.93M76 49.2A20.62 20.62 0 0 1 96.59 28h.61a17.6 17.6 0 0 1 12.8 5.86c10.71 12.09 13.21 33.07 13.79 42c-8.89-.58-29.87-3.09-42-13.79A17.6 17.6 0 0 1 76 49.2M36 120V88a4 4 0 0 1 4-4h84v40H40a4 4 0 0 1-4-4m16 80v-68h72v72H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-68v-72h72Zm16-80a4 4 0 0 1-4 4h-84V84h84a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhGiftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchThinIcon],svg[ph-git-branch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 64a28 28 0 1 0-32 27.71V112a12 12 0 0 1-12 12H96a19.9 19.9 0 0 0-12 4V91.71a28 28 0 1 0-8 0v72.58a28 28 0 1 0 8 0V144a12 12 0 0 1 12-12h88a20 20 0 0 0 20-20V91.71A28 28 0 0 0 228 64M60 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20M200 84a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitBranchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitThinIcon],svg[ph-git-commit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 124h-68.17a52 52 0 0 0-103.66 0H8a4 4 0 0 0 0 8h68.17a52 52 0 0 0 103.66 0H248a4 4 0 0 0 0-8m-120 48a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhGitCommitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffThinIcon],svg[ph-git-diff-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 156a4 4 0 0 0-4 4v38.34l-44.49-44.48a12 12 0 0 1-3.51-8.49V91.71a28 28 0 1 0-8 0v53.66a19.85 19.85 0 0 0 5.86 14.14L102.34 204H64a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4M36 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m168 100.29v-53.66a19.85 19.85 0 0 0-5.86-14.14L153.66 52H192a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l44.49 44.48a12 12 0 0 1 3.51 8.49v53.66a28 28 0 1 0 8 0M200 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitDiffThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkThinIcon],svg[ph-git-fork-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 64a28 28 0 1 0-32 27.71V112a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V91.71a28 28 0 1 0-8 0V112a20 20 0 0 0 20 20h44v32.29a28 28 0 1 0 8 0V132h44a20 20 0 0 0 20-20V91.71A28 28 0 0 0 220 64M44 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m104 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m44-108a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitForkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeThinIcon],svg[ph-git-merge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 116a28 28 0 0 0-27.62 23.44l-45.85-6.55a12 12 0 0 1-7.41-4.07L87.75 82.9a28 28 0 1 0-11.75.81v88.58a28 28 0 1 0 8 0V90.81L121 134a20 20 0 0 0 12.36 6.78l46.83 6.69A28 28 0 1 0 208 116M60 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 144a20 20 0 1 1-20-20a20 20 0 0 1 20 20m108-36a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitMergeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestThinIcon],svg[ph-git-pull-request-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 64a28 28 0 1 0-32 27.71v72.58a28 28 0 1 0 8 0V91.71A28 28 0 0 0 100 64m-48 0a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m112-27.71v-53.66a19.9 19.9 0 0 0-5.86-14.15L153.66 52H192a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l44.49 44.48a12 12 0 0 1 3.51 8.49v53.66a28 28 0 1 0 8 0M200 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitPullRequestThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoThinIcon],svg[ph-github-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"></svg:path>`,
})
export class PhGithubLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleThinIcon],svg[ph-gitlab-logo-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.27 118.11L206.38 42a7.94 7.94 0 0 0-15.16-.75L172.57 92H83.43L64.78 41.24a7.94 7.94 0 0 0-15.16.76l-19.89 76.11a53.16 53.16 0 0 0 20.44 56.68l73.27 51.76a7.9 7.9 0 0 0 9.12 0l73.27-51.76a53.16 53.16 0 0 0 20.44-56.68m-25.05 50.14L128 220l-73.22-51.75a45.11 45.11 0 0 1-17.31-48.11l19.84-76l19.58 53.24a4 4 0 0 0 3.75 2.62h94.72a4 4 0 0 0 3.75-2.62l19.57-53.22l19.85 76a45.11 45.11 0 0 1-17.31 48.09"></svg:path>`,
})
export class PhGitlabLogoSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoThinIcon],svg[ph-gitlab-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.27 118.11L206.38 42a7.94 7.94 0 0 0-15.16-.75L172.57 92H83.43L64.78 41.24a7.94 7.94 0 0 0-15.16.76l-19.89 76.11a53.16 53.16 0 0 0 20.44 56.68l73.27 51.76a7.9 7.9 0 0 0 9.12 0l73.27-51.76a53.16 53.16 0 0 0 20.44-56.68m-169-74l19.62 53.27a4 4 0 0 0 3.75 2.62h94.72a4 4 0 0 0 3.75-2.62l19.57-53.22l17 65L128 171.11l-87.67-61.94Zm-19.84 76l.7-2.7L121.07 176l-27.66 19.54l-38.63-27.29a45.11 45.11 0 0 1-17.31-48.11ZM128 220l-27.66-19.54L128 180.9l27.66 19.54Zm73.22-51.73l-38.63 27.29L134.93 176l82.9-58.56l.7 2.7a45.11 45.11 0 0 1-17.31 48.11Z"></svg:path>`,
})
export class PhGitlabLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastThinIcon],svg[ph-globe-hemisphere-east-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 8a91.5 91.5 0 0 1 52 16.15V74a4 4 0 0 1-1 2.61l-22.17 25.76a4 4 0 0 1-2.49 1.35L122.9 108a3.94 3.94 0 0 1-2.88-.72l-.16-.11l-19.73-12.95a12 12 0 0 0-16.93 3.11l-21 31.3a11.93 11.93 0 0 0-2 6.6l-.2 36.23a4 4 0 0 1-1.8 3.33l-6.65 4.36A92 92 0 0 1 128 36M56.32 185.6l6.29-4.13a12 12 0 0 0 5.41-10l.21-36.23a4 4 0 0 1 .67-2.2l20.95-31.3a4 4 0 0 1 5.67-1l.15.11l19.74 12.91a12 12 0 0 0 8.56 2.11l31.47-4.26a12 12 0 0 0 7.49-4.06l22.17-25.74A12 12 0 0 0 188 74V58.31A91.91 91.91 0 0 1 213.5 162l-20.57-18.82a12 12 0 0 0-12.7-2.22l-30.45 12.66a12.06 12.06 0 0 0-7.27 9.33l-2.38 16.19a12 12 0 0 0 8.87 13.32l21.45 5.63a4 4 0 0 1 1.82 1l5.94 6A91.85 91.85 0 0 1 56.32 185.6m128.43 14.76l-6.86-6.88a12 12 0 0 0-5.45-3.13L151 184.72a4 4 0 0 1-3-4.45l2.39-16.2a4 4 0 0 1 2.42-3.11l30.45-12.65a4 4 0 0 1 4.24.74l22.5 20.57a92.4 92.4 0 0 1-25.25 30.74"></svg:path>`,
})
export class PhGlobeHemisphereEastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestThinIcon],svg[ph-globe-hemisphere-west-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100a91.4 91.4 0 0 1-8.58 38.76l-48.62-29.91a12.1 12.1 0 0 0-4.68-1.67l-22.82-3.07a12 12 0 0 0-12.56 7l-.4.88h-11.2a4 4 0 0 1-3.6-2.26l-3.8-7.86a11.93 11.93 0 0 0-8.28-6.5l-13.39-2.87l10.6-18.5a4 4 0 0 1 3.47-2h16.71a12 12 0 0 0 5.8-1.5l12.24-6.76a11.8 11.8 0 0 0 2.25-1.6l26.91-24.34a12 12 0 0 0 2.43-14.75l-5.86-10.49A92.17 92.17 0 0 1 220 128m-74.11-90.25l9.6 17.2a4 4 0 0 1-.81 4.92l-26.91 24.34a4.4 4.4 0 0 1-.75.53l-12.24 6.76a4 4 0 0 1-1.93.5H96.14a12 12 0 0 0-10.41 6l-11.86 20.7a4 4 0 0 1-2.75-2.47L59.63 85.6a4 4 0 0 1 .06-3L71 55.81A91.5 91.5 0 0 1 128 36a92.5 92.5 0 0 1 17.89 1.75M36 128a91.52 91.52 0 0 1 20-57.23l-3.71 8.75a12 12 0 0 0-.18 8.88l11.49 30.67a11.93 11.93 0 0 0 8.72 7.52l21.43 4.61a4 4 0 0 1 2.76 2.17l3.8 7.86a12.07 12.07 0 0 0 10.8 6.77h7.64L109 169.85a12 12 0 0 0 2.26 13.15l19.68 20.26a4 4 0 0 1 1 3.47L129.36 220H128a92.1 92.1 0 0 1-92-92m101.6 91.5l2.18-11.29a12.08 12.08 0 0 0-3-10.49l-19.68-20.26a4 4 0 0 1-.71-4.35l13.7-30.74a4 4 0 0 1 4.18-2.33l22.82 3.07a4.1 4.1 0 0 1 1.56.56l49.11 30.2a92.12 92.12 0 0 1-70.16 45.63"></svg:path>`,
})
export class PhGlobeHemisphereWestThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleThinIcon],svg[ph-globe-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.9 96h-48c-1.15-45.55-21.74-74.52-33.48-87.4a92.14 92.14 0 0 1 81.49 87.4ZM128 218.61c-8.32-8-34.57-37.13-35.93-86.61h71.86c-1.36 49.48-27.61 78.61-35.93 86.61M92.07 124c1.36-49.48 27.61-78.61 35.93-86.61c8.32 8 34.57 37.13 35.93 86.61Zm25.47-87.4C105.8 49.48 85.21 78.45 84.06 124h-48a92.14 92.14 0 0 1 81.48-87.4M36.09 132h48c1.15 45.55 21.74 74.52 33.48 87.4A92.14 92.14 0 0 1 36.09 132m102.37 87.4c11.74-12.88 32.33-41.85 33.48-87.4h48a92.14 92.14 0 0 1-81.48 87.4"></svg:path>`,
})
export class PhGlobeSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXThinIcon],svg[ph-globe-simple-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.83 170.83L197.66 192l21.17 21.17a4 4 0 0 1-5.66 5.66L192 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L186.34 192l-21.17-21.17a4 4 0 0 1 5.66-5.66L192 186.34l21.17-21.17a4 4 0 0 1 5.66 5.66M228 128a4 4 0 0 1-4 4H92.08c1.61 58.53 38.05 88.58 38.42 88.88A4 4 0 0 1 128 228a100 100 0 0 1 0-200a100.11 100.11 0 0 1 100 100m-89.54-91.4c11.74 12.88 32.33 41.85 33.48 87.4h48a92.14 92.14 0 0 0-81.48-87.4M92.07 124h71.86c-1.36-49.48-27.61-78.6-35.93-86.61c-8.32 8-34.57 37.13-35.93 86.61m-56 0h48c1.15-45.55 21.74-74.52 33.48-87.4A92.14 92.14 0 0 0 36.09 124Zm48 8h-48a92.14 92.14 0 0 0 81.45 87.4c-11.72-12.88-32.31-41.85-33.46-87.4Z"></svg:path>`,
})
export class PhGlobeSimpleXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandThinIcon],svg[ph-globe-stand-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 180a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76m0-144a68 68 0 1 1-68 68a68.07 68.07 0 0 1 68-68m74.89 140.28a4 4 0 0 1-.12 5.65a107.3 107.3 0 0 1-70.77 30V236h28a4 4 0 0 1 0 8h-64a4 4 0 0 1 0-8h28v-24.08A108 108 0 0 1 58.06 29.23a4 4 0 1 1 5.77 5.54a100 100 0 0 0 141.4 141.39a4 4 0 0 1 5.66.12"></svg:path>`,
})
export class PhGlobeStandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeThinIcon],svg[ph-globe-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54c-8.27 30.2-24.94 48.52-31.27 54.61M94.82 156a140.4 140.4 0 0 1 0-56h66.36a140.4 140.4 0 0 1 0 56ZM128 37.39c6.33 6.09 23 24.41 31.27 54.61H96.73C105 61.8 121.67 43.48 128 37.39M169.41 100h46.23a92.1 92.1 0 0 1 0 56h-46.23a152.7 152.7 0 0 0 0-56m43.25-8h-45a129.4 129.4 0 0 0-29.19-55.4A92.25 92.25 0 0 1 212.66 92m-95.12-55.4A129.4 129.4 0 0 0 88.35 92h-45a92.25 92.25 0 0 1 74.19-55.4M40.36 100h46.23a152.7 152.7 0 0 0 0 56H40.36a92.1 92.1 0 0 1 0-56m3 64h45a129.4 129.4 0 0 0 29.19 55.4A92.25 92.25 0 0 1 43.34 164Zm95.12 55.4a129.4 129.4 0 0 0 29.17-55.4h45a92.25 92.25 0 0 1-74.19 55.4Z"></svg:path>`,
})
export class PhGlobeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXThinIcon],svg[ph-globe-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 0 0 0 200a4 4 0 0 0 2.49-7.11c-.3-.24-23.57-19.41-33.78-56.88H128a4 4 0 0 0 0-8H94.82a140.4 140.4 0 0 1 0-56h66.36A138 138 0 0 1 164 128a4 4 0 0 0 8 0a149 149 0 0 0-2.59-28h46.23a91.6 91.6 0 0 1 4.36 28a4 4 0 0 0 8 0A100.11 100.11 0 0 0 128 28m-10.46 8.6A129.4 129.4 0 0 0 88.35 92h-45a92.25 92.25 0 0 1 74.19-55.4m0 182.8a92.25 92.25 0 0 1-74.2-55.4h45a129.4 129.4 0 0 0 29.2 55.4M86.59 156H40.36a92.1 92.1 0 0 1 0-56h46.23a152.7 152.7 0 0 0 0 56m10.14-64C105 61.8 121.67 43.48 128 37.39c6.33 6.09 23 24.41 31.27 54.61Zm70.92 0a129.4 129.4 0 0 0-29.19-55.4a92.25 92.25 0 0 1 74.2 55.4Zm51.18 78.83L197.66 192l21.17 21.17a4 4 0 0 1-5.66 5.66L192 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L186.34 192l-21.17-21.17a4 4 0 0 1 5.66-5.66L192 186.34l21.17-21.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhGlobeXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesThinIcon],svg[ph-goggles-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 136a68.07 68.07 0 0 0-68-68H72a68.07 68.07 0 0 0-68 68a20 20 0 0 0 16.35 19.65C23.91 174.84 54.81 188 72 188a36 36 0 0 0 35.77-32h40.46A36 36 0 0 0 184 188c17.19 0 48.09-13.16 51.65-32.35A20 20 0 0 0 252 136M28 152c0-7.75 7.92-15.25 17.81-20.53l43 42.95A27.9 27.9 0 0 1 72 180c-16.55 0-44-13.56-44-28m66.42 16.76l-40.84-40.84C60 125.46 66.58 124 72 124a28 28 0 0 1 22.42 44.76M156 152a27.94 27.94 0 0 1 9.42-20.92L208 173.65c-8 3.91-17 6.35-24 6.35a28 28 0 0 1-28-28m59.2 17.55l-42.95-43A27.9 27.9 0 0 1 184 124c16.55 0 44 13.56 44 28c0 6.39-5.38 12.6-12.8 17.55m20.26-22.06C231.15 128.77 200.93 116 184 116a36 36 0 0 0-35.77 32h-40.46A36 36 0 0 0 72 116c-16.93 0-47.15 12.77-51.46 31.49A12 12 0 0 1 12 136a60.07 60.07 0 0 1 60-60h112a60.07 60.07 0 0 1 60 60a12 12 0 0 1-8.54 11.49"></svg:path>`,
})
export class PhGogglesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfThinIcon],svg[ph-golf-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 100a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-40 24a8 8 0 1 0 8 8a8 8 0 0 0-8-8m80-28a84 84 0 1 1-84-84a84.09 84.09 0 0 1 84 84m-8 0a76 76 0 1 0-76 76a76.08 76.08 0 0 0 76-76m-37.43 100.26C153 201.47 140.34 204 128 204s-25-2.53-38.57-7.74a4 4 0 1 0-2.86 7.48a119.3 119.3 0 0 0 37.43 8.17V248a4 4 0 0 0 8 0v-36.09a119.3 119.3 0 0 0 37.43-8.17a4 4 0 0 0-2.86-7.48"></svg:path>`,
})
export class PhGolfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoThinIcon],svg[ph-goodreads-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28a4 4 0 0 0-4 4v26.13A60 60 0 0 0 68 88v24a60 60 0 0 0 112 29.87V168a52.06 52.06 0 0 1-52 52c-17.72 0-35.28-8.75-44.72-22.29a4 4 0 0 0-6.56 4.58C87.61 217.91 107.74 228 128 228a60.07 60.07 0 0 0 60-60V32a4 4 0 0 0-4-4m-56 136a52.06 52.06 0 0 1-52-52V88a52 52 0 0 1 104 0v24a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhGoodreadsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoThinIcon],svg[ph-google-cardboard-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h64a4 4 0 0 0 2.83-1.17l26.34-26.34a4.08 4.08 0 0 1 5.66 0l26.34 26.34A4 4 0 0 0 160 204h64a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4h-62.34l-25.17-25.17a12 12 0 0 0-17 0L94.34 196H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM80 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m96-48a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGoogleCardboardLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoThinIcon],svg[ph-google-chrome-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 8a92.08 92.08 0 0 1 80.78 48H128a44.05 44.05 0 0 0-43.82 40.11L54.51 72.72A91.9 91.9 0 0 1 128 36m0 128a36 36 0 1 1 36-36a36 36 0 0 1-36 36m-92-36a91.5 91.5 0 0 1 13.51-47.95L89.9 150c0 .09.11.17.17.26a43.93 43.93 0 0 0 56.47 17.63l-29.7 51.43A92.13 92.13 0 0 1 36 128m92 92h-2.29l40.39-70a1.2 1.2 0 0 0 .09-.2A43.89 43.89 0 0 0 153.25 92h59.41A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhGoogleChromeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoThinIcon],svg[ph-google-drive-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.19 145.86L165.74 33.64A11.94 11.94 0 0 0 155.56 28h-55.13a11.93 11.93 0 0 0-10.17 5.64L21.83 145.82a12 12 0 0 0-.25 12.32L48.91 206a12 12 0 0 0 10.41 6h137.35a12 12 0 0 0 10.42-6l27.32-47.81a12 12 0 0 0-.22-12.33m-8.06 2.14h-55.87l-37.6-62.67l27.39-45.65Zm-131.07 0L128 93.11L160.93 148Zm70.67 8l28.8 48H61.47l28.79-48ZM128 77.56L103.06 36h49.87ZM95.94 39.68l27.39 45.65L85.74 148H29.87ZM29.58 156h51.36l-26.31 43.85Zm171.79 43.85L175.06 156h51.36Z"></svg:path>`,
})
export class PhGoogleDriveLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoThinIcon],svg[ph-google-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a92 92 0 1 1-21-58.55a4 4 0 0 1-6.17 5.1A84 84 0 1 0 211.91 132H128a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhGoogleLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoThinIcon],svg[ph-google-photos-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124h-46.32A68 68 0 0 0 128 20a4 4 0 0 0-4 4v46.32A68 68 0 0 0 20 128a4 4 0 0 0 4 4h46.32A68 68 0 0 0 128 236a4 4 0 0 0 4-4v-46.32A68 68 0 0 0 236 128a4 4 0 0 0-4-4m-44-36a59.28 59.28 0 0 1-12 36h-44V28.13A60.08 60.08 0 0 1 188 88M88 68a59.28 59.28 0 0 1 36 12v44H28.13A60.08 60.08 0 0 1 88 68M68 168a59.28 59.28 0 0 1 12-36h44v95.87A60.08 60.08 0 0 1 68 168m100 20a59.28 59.28 0 0 1-36-12v-44h95.87A60.08 60.08 0 0 1 168 188"></svg:path>`,
})
export class PhGooglePhotosLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoThinIcon],svg[ph-google-play-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.89 117.69L70.05 21.62a12 12 0 0 0-12.13 0A11.69 11.69 0 0 0 52 31.87v192.26a11.69 11.69 0 0 0 5.92 10.21a12 12 0 0 0 12.13 0l167.77-96a11.76 11.76 0 0 0 .07-20.66Zm-52.44-20.8L160 122.34L66.4 28.75ZM60 222.33V33.67L154.34 128Zm6.4 4.92l93.6-93.59l25.45 25.45Zm167.51-95.88L192.65 155l-27-27l27-27L234 124.66a3.77 3.77 0 0 1-.07 6.71Z"></svg:path>`,
})
export class PhGooglePlayLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoThinIcon],svg[ph-google-podcasts-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 16v32a4 4 0 0 1-8 0V16a4 4 0 0 1 8 0m44 44a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m-48 144a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0-120a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4M80 60a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m96 72a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4M32 108a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m48 48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m144-48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGooglePodcastsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixThinIcon],svg[ph-gps-fix-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-28.1A84.11 84.11 0 0 0 132 44.1V16a4 4 0 0 0-8 0v28.1A84.11 84.11 0 0 0 44.1 124H16a4 4 0 0 0 0 8h28.1a84.11 84.11 0 0 0 79.9 79.9V240a4 4 0 0 0 8 0v-28.1a84.11 84.11 0 0 0 79.9-79.9H240a4 4 0 0 0 0-8m-112 80a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76m0-112a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhGpsFixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashThinIcon],svg[ph-gps-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a4 4 0 0 1-4 4h-28.1a83.1 83.1 0 0 1-7.24 30.38a4 4 0 0 1-3.65 2.37a3.9 3.9 0 0 1-1.63-.36a4 4 0 0 1-2-5.28A76.06 76.06 0 0 0 103.62 56a4 4 0 1 1-2.56-7.57A83.6 83.6 0 0 1 124 44.1V16a4 4 0 0 1 8 0v28.1a84.11 84.11 0 0 1 79.9 79.9H240a4 4 0 0 1 4 4m-33 85.31a4 4 0 1 1-5.92 5.38l-23.56-25.91A83.8 83.8 0 0 1 132 211.9V240a4 4 0 0 1-8 0v-28.1A84.11 84.11 0 0 1 44.1 132H16a4 4 0 0 1 0-8h28.1a84.24 84.24 0 0 1 24.5-55.39L45 42.69a4 4 0 0 1 6-5.38L184.77 184.5Zm-34.87-26.47L74 74.53a76 76 0 0 0 102.1 112.31Z"></svg:path>`,
})
export class PhGpsSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsThinIcon],svg[ph-gps-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-28.1A84.11 84.11 0 0 0 132 44.1V16a4 4 0 0 0-8 0v28.1A84.11 84.11 0 0 0 44.1 124H16a4 4 0 0 0 0 8h28.1a84.11 84.11 0 0 0 79.9 79.9V240a4 4 0 0 0 8 0v-28.1a84.11 84.11 0 0 0 79.9-79.9H240a4 4 0 0 0 0-8m-112 80a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhGpsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientThinIcon],svg[ph-gradient-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 104a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m196-4h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8M72 140H32a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m152 0h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m-124 4a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4m-44 36H32a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0H88a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M32 68h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhGradientThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapThinIcon],svg[ph-graduation-cap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.88 92.47l-120-64a4 4 0 0 0-3.76 0l-120 64a4 4 0 0 0 0 7.06L36 115.47v50.82a11.92 11.92 0 0 0 3 8c12.65 14.09 41 37.73 89 37.73c21 0 38.2-4.52 52-10.79V240a4 4 0 0 0 8 0v-42.82a111.6 111.6 0 0 0 29-22.91a11.94 11.94 0 0 0 3-8v-50.8l29.88-15.94a4 4 0 0 0 0-7.06M128 204c-44.83 0-71.25-22-83-35.08a3.92 3.92 0 0 1-1-2.63v-46.56l82.12 43.8a4 4 0 0 0 3.76 0L180 136.8v55.53C166.58 199 149.39 204 128 204m84-37.71a4 4 0 0 1-1 2.64a103.3 103.3 0 0 1-23 19v-55.4l24-12.8Zm-24.59-42.51a4 4 0 0 0-1.53-1.44l-56-29.87a4 4 0 0 0-3.76 7.06L179.5 128L128 155.47L16.5 96L128 36.53L239.5 96Z"></svg:path>`,
})
export class PhGraduationCapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashThinIcon],svg[ph-grains-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l16.81 18.44A85 85 0 0 0 48 60a4 4 0 0 0-4 4v80a84.09 84.09 0 0 0 84 84a83.82 83.82 0 0 0 61.33-26.6L205 218.69a4 4 0 1 0 5.92-5.38Zm20.39 34.37l70.06 77.06A84.2 84.2 0 0 0 128 174.41a84.17 84.17 0 0 0-76-58.31v-48a76 76 0 0 1 19.39 3.58M124 219.9A76.11 76.11 0 0 1 52 144v-19.9a76.11 76.11 0 0 1 72 75.9Zm8 0V200a76 76 0 0 1 14.94-45.22l37 40.68A75.86 75.86 0 0 1 132 219.9m80-75.9a84.3 84.3 0 0 1-3 22.34a4 4 0 0 1-3.86 2.94a4 4 0 0 1-1.06-.14a4 4 0 0 1-2.8-4.92A76 76 0 0 0 204 144v-19.9a74.9 74.9 0 0 0-30.37 8.1a4 4 0 1 1-3.62-7.14a82.9 82.9 0 0 1 34-9v-48a76.32 76.32 0 0 0-57.59 31.35a4 4 0 1 1-6.48-4.69a84.1 84.1 0 0 1 27-24C156.88 46.53 134.48 32.28 128 28.56a103.6 103.6 0 0 0-26.45 22a4 4 0 0 1-6.11-5.17a108.1 108.1 0 0 1 30.77-25a4 4 0 0 1 3.58 0c1.32.66 31.31 16 44.33 46.75A83.9 83.9 0 0 1 208 60a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhGrainsSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsThinIcon],svg[ph-grains-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 60a83.5 83.5 0 0 0-33.88 7.16c-13-30.78-43-46.08-44.33-46.74a4 4 0 0 0-3.58 0c-1.32.66-31.3 16-44.33 46.74A83.5 83.5 0 0 0 48 60a4 4 0 0 0-4 4v80a84 84 0 0 0 168 0V64a4 4 0 0 0-4-4m-84 159.9A76.11 76.11 0 0 1 52 144v-19.9a76.11 76.11 0 0 1 72 75.9Zm0-55.63a84.12 84.12 0 0 0-72-48.17v-48a76.11 76.11 0 0 1 72 75.9ZM89.05 70.75c10.07-24.22 32.46-38.47 39-42.19c6.49 3.72 28.88 18 38.95 42.19a84.43 84.43 0 0 0-39 47.66a84.43 84.43 0 0 0-38.95-47.66M204 144a76.11 76.11 0 0 1-72 75.9V200a76.11 76.11 0 0 1 72-75.9Zm0-27.9a84.12 84.12 0 0 0-72 48.17V144a76.11 76.11 0 0 1 72-75.9Z"></svg:path>`,
})
export class PhGrainsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphThinIcon],svg[ph-graph-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 156a27.87 27.87 0 0 0-19.4 7.84l-28.28-22A27.8 27.8 0 0 0 156 128a28 28 0 0 0-.45-5l19.45-6.45a28.07 28.07 0 1 0-2.53-7.58L153 115.45A28 28 0 0 0 128 100a27.7 27.7 0 0 0-7.6 1.06l-9.5-21.37A28 28 0 1 0 96 84a27.7 27.7 0 0 0 7.6-1.06l9.5 21.37a27.95 27.95 0 0 0-8.46 39.1L74 170.61a28 28 0 1 0 5.32 6l30.6-27.2a27.92 27.92 0 0 0 37.44-1.23l28.28 22A28 28 0 1 0 200 156m0-72a20 20 0 1 1-20 20a20 20 0 0 1 20-20M76 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20M56 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20m72-64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m72 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGraphThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardThinIcon],svg[ph-graphics-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H16a4 4 0 0 0-4 4v152a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h116a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H20V60h212a4 4 0 0 1 4 4Zm-60-92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-28 36a27.9 27.9 0 0 1 5.58-16.76l39.18 39.18A28 28 0 0 1 148 120m50.42 16.76l-39.18-39.18a28 28 0 0 1 39.18 39.18M80 84a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-28 36a27.9 27.9 0 0 1 5.58-16.76l39.18 39.18A28 28 0 0 1 52 120m50.42 16.76L63.24 97.58a28 28 0 0 1 39.18 39.18"></svg:path>`,
})
export class PhGraphicsCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualThinIcon],svg[ph-greater-than-or-equal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.62 156.25L196.43 104L54.62 51.75a4 4 0 0 1 2.76-7.5l152 56a4 4 0 0 1 0 7.5l-152 56A3.9 3.9 0 0 1 56 164a4 4 0 0 1-1.38-7.75M208 196H56a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhGreaterThanOrEqualThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanThinIcon],svg[ph-greater-than-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-2.29 3.62l-152 72A3.85 3.85 0 0 1 64 204a4 4 0 0 1-1.71-7.62L206.66 128L62.29 59.62a4 4 0 0 1 3.42-7.23l152 72A4 4 0 0 1 220 128"></svg:path>`,
})
export class PhGreaterThanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourThinIcon],svg[ph-grid-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 12v68h-72V52h68a4 4 0 0 1 4 4M56 52h68v72H52V56a4 4 0 0 1 4-4m-4 148v-68h72v72H56a4 4 0 0 1-4-4m148 4h-68v-72h72v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhGridFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineThinIcon],svg[ph-grid-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-116 96v-40h56v40Zm56 8v40h-56v-40ZM36 108h56v40H36Zm64-8V60h56v40Zm64 8h56v40h-56Zm56-44v36h-56V60h52a4 4 0 0 1 4 4M40 60h52v40H36V64a4 4 0 0 1 4-4m-4 132v-36h56v40H40a4 4 0 0 1-4-4m180 4h-52v-40h56v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhGridNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarThinIcon],svg[ph-guitar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.83 49.17l-40-40a4 4 0 0 0-5.66 5.66l5.17 5.17l-65.09 65.1c-21.91-12.54-46.89-12.31-61.67 2.47a38.1 38.1 0 0 0-8.5 13A12.24 12.24 0 0 1 59.94 108c-13.55.46-25.29 5.28-34 13.94c-11.12 11.2-15.84 27.37-13.24 45.57c2.54 17.77 11.8 35.42 26.08 49.71s31.94 23.54 49.71 26.08a67.4 67.4 0 0 0 9.59.7c14.25 0 26.79-4.82 36-14c8.66-8.67 13.48-20.41 13.94-34a12.24 12.24 0 0 1 7.45-11.14a38.1 38.1 0 0 0 13-8.5c14.78-14.78 15-39.76 2.47-61.67L236 49.66l5.17 5.17a4 4 0 1 0 5.66-5.66m-84.06 121.59a29.9 29.9 0 0 1-10.3 6.72A20.25 20.25 0 0 0 140 195.79c-.38 11.49-4.39 21.37-11.6 28.57c-9.34 9.34-23.1 13.26-38.75 11c-16.07-2.29-32.11-10.75-45.18-23.82s-21.53-29.11-23.82-45.18c-2.24-15.65 1.68-29.41 11-38.75c7.2-7.21 17.08-11.22 28.57-11.6a20.25 20.25 0 0 0 18.31-12.5a29.9 29.9 0 0 1 6.72-10.3c11.8-11.8 31.84-12 50.14-2.27l-25.09 25.09a28 28 0 1 0 29.7 29.68l25-25.09c9.81 18.3 9.57 38.38-2.23 50.14M112 124a20 20 0 0 1 20 20a20 20 0 1 1-20-20m26.71 11.63a28.06 28.06 0 0 0-18.34-18.34l22-22a74.5 74.5 0 0 1 18.35 18.35ZM158 98a81 81 0 0 0-9.9-8.44L176 61.65L194.34 80l-27.87 27.87A81 81 0 0 0 158 98m42-23.63L181.66 56L212 25.66L230.34 44ZM90.84 197.16a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhGuitarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerThinIcon],svg[ph-hair-dryer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 88a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-28 20a20 20 0 1 1 20-20a20 20 0 0 1-20 20m-5.15 104a12 12 0 0 0 10.92-7l32-70.39A60 60 0 0 0 168 28a5 5 0 0 0-.66.05L30 50.94a12 12 0 0 0-10 11.84v50.44a12 12 0 0 0 10 11.84l102 17V200a12 12 0 0 0 12 12h4v4a36 36 0 0 0 36 36h16a4 4 0 0 0 0-8h-16a28 28 0 0 1-28-28v-4ZM28 113.22V62.78a4 4 0 0 1 3.34-4L168.33 36a52 52 0 0 1 0 104l-137-22.83a4 4 0 0 1-3.33-3.95M140 200v-56.61l27.34 4.61a5 5 0 0 0 .66.05a59.6 59.6 0 0 0 25.46-5.69l-27 59.34a4 4 0 0 1-3.64 2.35H144a4 4 0 0 1-4-4.05"></svg:path>`,
})
export class PhHairDryerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerThinIcon],svg[ph-hamburger-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.07 100h159.86a12 12 0 0 0 11.8-14.55c-3.39-16-14.56-30.68-31.46-41.23S150.11 28 128 28s-43.51 5.76-60.27 16.22s-28.07 25.19-31.46 41.23A12 12 0 0 0 48.07 100m-4-12.89C50.26 58 86.33 36 128 36s77.74 22 83.91 51.11a4 4 0 0 1-.82 3.39a4 4 0 0 1-3.16 1.5H48.07a4 4 0 0 1-3.16-1.5a4 4 0 0 1-.82-3.39Zm186.54 69.13l-42.56 15.48l-38.58-15.43a4 4 0 0 0-3 0L108 171.69l-38.51-15.4a4 4 0 0 0-2.86 0l-44 16A4 4 0 0 0 24 180a4.1 4.1 0 0 0 1.37-.24L44 173v11a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36v-12.47l21.37-7.77a4 4 0 0 0-2.74-7.52ZM204 184a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28v-13.93l15.93-5.79l38.58 15.43a4 4 0 0 0 3 0l38.49-15.4l38.51 15.4a4 4 0 0 0 2.86 0l14.63-5.27ZM20 128a4 4 0 0 1 4-4h208a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhHamburgerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerThinIcon],svg[ph-hammer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.5 114.81L181.05 46.9A92.1 92.1 0 0 0 50.9 47L37.12 61.18a4 4 0 1 0 5.75 5.56L56.6 52.56a83.8 83.8 0 0 1 22.34-16L130.34 88l-98.83 98.82a12 12 0 0 0 0 17l20.69 20.66a12 12 0 0 0 17 0l98.8-98.85l17.17 17.18l17.66 17.66a12 12 0 0 0 17 0l28.69-28.69a12 12 0 0 0-.02-16.97m-185 104a4 4 0 0 1-5.66 0l-20.67-20.67a4 4 0 0 1 0-5.66L108 121.63L134.34 148Zm101.67-101.66L140 142.32L113.65 116l25.18-25.2a4 4 0 0 0 0-5.66l-52-52a84.11 84.11 0 0 1 88.52 19.38l47 47.35L188 134.32l-17.17-17.17a4 4 0 0 0-5.66 0m77.66 9l-28.68 28.69a4 4 0 0 1-5.66 0L193.66 140l34.39-34.4l14.78 14.88a4 4 0 0 1 0 5.64Z"></svg:path>`,
})
export class PhHammerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownThinIcon],svg[ph-hand-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H89.94a27.8 27.8 0 0 0-19.8 8.2L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38Zm-64-97a4 4 0 0 1 5.66-5.66L188 94.34V24a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 1 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0Z"></svg:path>`,
})
export class PhHandArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpThinIcon],svg[ph-hand-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H89.94a27.8 27.8 0 0 0-19.8 8.2L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38Zm-64-113a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L196 33.66V104a4 4 0 0 1-8 0V33.66l-25.17 25.17a4 4 0 0 1-5.66 0Z"></svg:path>`,
})
export class PhHandArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsThinIcon],svg[ph-hand-coins-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H89.94a27.8 27.8 0 0 0-19.8 8.2L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38ZM164 92a32 32 0 0 0 8.73-1.2a32 32 0 1 0 22.55-37.58A32 32 0 1 0 164 92m64-8a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-64-48a24 24 0 0 1 23.74 20.46A32 32 0 0 0 172 82.62A24 24 0 1 1 164 36"></svg:path>`,
})
export class PhHandCoinsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositThinIcon],svg[ph-hand-deposit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 25.66V128a4 4 0 0 1-8 0V25.66L90.83 50.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66Zm64 100.12V96a12 12 0 0 0-12-12h-16a4 4 0 0 0 0 8h16a4 4 0 0 1 4 4v92.9l-3.27-5a24 24 0 0 0-41.51 24.1a1.2 1.2 0 0 0 .12.19l22.26 34a4 4 0 1 0 6.69-4.38l-22.2-33.9A16 16 0 0 1 169.86 188l.12.19l10.67 16.31a4 4 0 0 0 7.35-2.19v-66.84a78.83 78.83 0 0 1 32 63.18V240a4 4 0 0 0 8 0v-41.35a86.84 86.84 0 0 0-40-72.87M80 84H64a12 12 0 0 0-12 12v104a4 4 0 0 0 8 0V96a4 4 0 0 1 4-4h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhHandDepositThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeThinIcon],svg[ph-hand-eye-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 168a8 8 0 1 1-8-8a8 8 0 0 1 8 8m76-52v36a84 84 0 0 1-168 0V76a24 24 0 0 1 40-17.87V44a24 24 0 0 1 47.93-1.8A24 24 0 0 1 172 60v38.13A24 24 0 0 1 212 116m-8 0a16 16 0 0 0-32 0v4a4 4 0 0 1-8 0V60a16 16 0 0 0-32 0v44a4 4 0 0 1-8 0V44a16 16 0 0 0-32 0v68a4 4 0 0 1-8 0V76a16 16 0 0 0-32 0v76a76 76 0 0 0 152 0Zm-24.42 50.21a4 4 0 0 1 0 3.58c-.7 1.4-17.5 34.21-51.58 34.21s-50.88-32.81-51.58-34.21a4 4 0 0 1 0-3.58c.7-1.4 17.5-34.21 51.58-34.21s50.88 32.81 51.58 34.21m-8.16 1.8c-3.83-6.43-18.55-28-43.42-28s-39.6 21.55-43.42 28c3.84 6.44 18.55 28 43.42 28s39.6-21.56 43.42-28.01Z"></svg:path>`,
})
export class PhHandEyeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistThinIcon],svg[ph-hand-fist-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 84h-20V64a28 28 0 0 0-52-14.41A28 28 0 0 0 76 64v4.43A28 28 0 0 0 28 88v40a100 100 0 0 0 200 0v-16a28 28 0 0 0-28-28m-48-40a20 20 0 0 1 20 20v20h-36a11.8 11.8 0 0 0-4 .7V64a20 20 0 0 1 20-20M84 64a20 20 0 0 1 40 0v40a20 20 0 0 1-40 0ZM36 88a20 20 0 0 1 40 0v16a20 20 0 0 1-40 0Zm184 40a92 92 0 0 1-184 0v-4.42a28 28 0 0 0 44-5.17a28 28 0 0 0 45.73 3.23a28.11 28.11 0 0 0 18.59 17.29A44 44 0 0 0 124 176a4 4 0 0 0 8 0a36 36 0 0 1 36-36a4 4 0 0 0 0-8h-16a20 20 0 0 1-20-20V96a4 4 0 0 1 4-4h64a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhHandFistThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingThinIcon],svg[ph-hand-grabbing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 84a23.87 23.87 0 0 0-16.07 6.2A24 24 0 0 0 128 78.75A24 24 0 0 0 84 92v24H68a24 24 0 0 0-24 24v12a84 84 0 0 0 168 0v-44a24 24 0 0 0-24-24m16 68a76 76 0 0 1-152 0v-12a16 16 0 0 1 16-16h16v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhHandGrabbingThinIcon {
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
  selector: 'svg[phLassoThinIcon],svg[ph-lasso-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.64 63.34C183.37 50.87 156.51 44 128 44s-55.37 6.87-75.64 19.34C31.49 76.19 20 93.48 20 112s11.49 35.83 32.36 48.68c19.29 11.87 44.55 18.65 71.51 19.28c.08 1.27.13 2.56.13 3.9c0 15.49-7.28 28.44-20.51 36.46c-15.79 9.57-37.34 10.28-53.64 1.77a4 4 0 1 0-3.7 7.09A62.3 62.3 0 0 0 74.91 236a63.56 63.56 0 0 0 32.73-8.82c15.71-9.52 24.36-24.9 24.36-43.3c0-1.32-.05-2.61-.12-3.9c27.06-.59 52.41-7.38 71.76-19.28C224.51 147.85 236 130.56 236 112s-11.49-35.81-32.36-48.66M62.16 157.15c5.3-14.49 18.83-18.22 29.3-16.85c13.64 1.78 27.38 12.19 31.38 31.66c-23.18-.71-44.29-6.18-60.68-14.81M131 172a51.35 51.35 0 0 0-11.18-24.59a43.28 43.28 0 0 0-27.3-15.06c-16.82-2.19-31.24 6-37.33 20.74C38.33 142.35 28 127.9 28 112c0-33.09 44.86-60 100-60s100 26.93 100 60c0 32.52-43.26 59.06-97 60"></svg:path>`,
})
export class PhLassoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoThinIcon],svg[ph-lastfm-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 160a36 36 0 0 1-36 36h-17.43a52.19 52.19 0 0 1-47.12-30l-30.15-64.6A44.17 44.17 0 0 0 73.43 76H64a44.05 44.05 0 0 0-44 44v24a44.05 44.05 0 0 0 44 44h8a36 36 0 0 0 33-21.6a4 4 0 1 1 7.33 3.2A44 44 0 0 1 72 196h-8a52.06 52.06 0 0 1-52-52v-24a52.06 52.06 0 0 1 52-52h9.43a52.19 52.19 0 0 1 47.12 30l30.15 64.6a44.17 44.17 0 0 0 39.87 25.4H208a28 28 0 0 0 0-56h-20a32 32 0 0 1 0-64h20a28 28 0 0 1 28 28a4 4 0 0 1-8 0a20 20 0 0 0-20-20h-20a24 24 0 0 0 0 48h20a36 36 0 0 1 36 36"></svg:path>`,
})
export class PhLastfmLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutThinIcon],svg[ph-layout-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v44H36V56a4 4 0 0 1 4-4m-4 148v-92h64v96H40a4 4 0 0 1-4-4m180 4H108v-96h112v92a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhLayoutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafThinIcon],svg[ph-leaf-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.45 40.31a4 4 0 0 0-3.76-3.76C141.06 32.16 81.46 54.39 56.24 96C39 124.56 39.9 158.37 58.8 191.54l-21.63 21.63a4 4 0 0 0 5.66 5.66l21.63-21.64c17.39 9.91 35 14.89 51.83 14.89A83.43 83.43 0 0 0 160 199.76c41.61-25.22 63.84-84.83 59.45-159.45m-63.63 152.61c-25.37 15.37-55.56 14.75-85.48-1.61l92.5-92.49a4 4 0 0 0-5.66-5.66l-92.49 92.5c-16.36-29.92-17-60.11-1.61-85.48C86.34 61.77 141.72 41 211.66 44.34c3.34 69.94-17.43 125.32-55.84 148.58"></svg:path>`,
})
export class PhLeafThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternThinIcon],svg[ph-lectern-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.72 122.63l-40-80A11.93 11.93 0 0 0 192 36H64a11.93 11.93 0 0 0-10.73 6.63l-40 80A12 12 0 0 0 24 140h100v72H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-72h100a12 12 0 0 0 10.73-17.37Zm-7.33 7.47A3.94 3.94 0 0 1 232 132H24a4 4 0 0 1-3.58-5.79l40-80A4 4 0 0 1 64 44h128a4 4 0 0 1 3.58 2.21l40 80a3.94 3.94 0 0 1-.19 3.89M188 104a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h112a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhLecternThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyThinIcon],svg[ph-lego-smiley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 120a8 8 0 1 1 8-8a8 8 0 0 1-8 8m56-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-2.13 44.62a49 49 0 0 1-51.74 0a4 4 0 0 0-4.26 6.77a57 57 0 0 0 60.26 0a4 4 0 0 0-4.26-6.76ZM212 80v96a28 28 0 0 1-24 27.71V224a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12v-20.29A28 28 0 0 1 44 176V80a28 28 0 0 1 28-28h20V32a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v20h20a28 28 0 0 1 28 28M100 52h56V32a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4Zm80 172v-20H76v20a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4m24-144a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhLegoSmileyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoThinIcon],svg[ph-lego-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.79 76.42l-47.42-23.71C189.84 42.92 176.36 36 160 36c-20.19 0-36 10.54-36 24a17.55 17.55 0 0 0 2.2 8.43L101.65 80.7A49.2 49.2 0 0 0 80 76c-20.19 0-36 10.54-36 24a17.55 17.55 0 0 0 2.2 8.43l-32 16A4 4 0 0 0 12 128v64a4 4 0 0 0 2.21 3.58l64 32a4 4 0 0 0 3.58 0l160-80A4 4 0 0 0 244 144V80a4 4 0 0 0-2.21-3.58M160 44c15.18 0 28 7.33 28 16s-12.82 16-28 16s-28-7.33-28-16s12.82-16 28-16m-28.57 30.76C138 80.41 148.23 84 160 84c19 0 34.09-9.32 35.83-21.61L231.06 80L80 155.53L24.94 128l26.49-13.24C58 120.41 68.23 124 80 124c20.19 0 36-10.54 36-24c0-5.34-2.49-10.21-6.75-14.15ZM80 84c15.18 0 28 7.33 28 16s-12.82 16-28 16c-10.49 0-19.85-3.5-24.63-8.52c-.09-.12-.19-.21-.28-.31A10.7 10.7 0 0 1 52 100c0-8.67 12.82-16 28-16m-60 50.47l56 28v55.06l-56-28Zm64 83.06v-55.06l152-76v55.06Z"></svg:path>`,
})
export class PhLegoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualThinIcon],svg[ph-less-than-or-equal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 104a4 4 0 0 1 2.62-3.75l152-56a4 4 0 1 1 2.76 7.5L59.57 104l141.81 52.25A4 4 0 0 1 200 164a3.9 3.9 0 0 1-1.38-.25l-152-56A4 4 0 0 1 44 104m156 92H48a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhLessThanOrEqualThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanThinIcon],svg[ph-less-than-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.61 201.71A4 4 0 0 1 200 204a3.85 3.85 0 0 1-1.71-.39l-152-72a4 4 0 0 1 0-7.23l152-72a4 4 0 0 1 3.42 7.23L57.34 128l144.37 68.38a4 4 0 0 1 1.9 5.33"></svg:path>`,
})
export class PhLessThanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHThinIcon],svg[ph-letter-circle-h-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-132v80a4 4 0 0 1-8 0v-36h-56v36a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0v36h56V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhLetterCircleHThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePThinIcon],svg[ph-letter-circle-p-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-136h-32a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0v-20h28a32 32 0 0 0 0-64m0 56h-28V92h28a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhLetterCirclePThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVThinIcon],svg[ph-letter-circle-v-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m35.71-122.51l-32 80a4 4 0 0 1-7.42 0l-32-80a4 4 0 1 1 7.42-3L128 165.23l28.29-70.72a4 4 0 1 1 7.42 3Z"></svg:path>`,
})
export class PhLetterCircleVThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyThinIcon],svg[ph-lifebuoy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m67.79 162.13l-34-34a43.92 43.92 0 0 0 0-56.28l34-34a91.83 91.83 0 0 1 0 124.26ZM92 128a36 36 0 1 1 36 36a36 36 0 0 1-36-36m98.13-67.79l-34 34a43.92 43.92 0 0 0-56.28 0l-34-34a91.83 91.83 0 0 1 124.26 0ZM60.21 65.87l34 34a43.92 43.92 0 0 0 0 56.28l-34 34a91.83 91.83 0 0 1 0-124.26Zm5.66 129.92l34-34a43.92 43.92 0 0 0 56.28 0l34 34a91.83 91.83 0 0 1-124.26 0Z"></svg:path>`,
})
export class PhLifebuoyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentThinIcon],svg[ph-lightbulb-filament-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 232a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m40-128a83.59 83.59 0 0 1-32.11 66.06A20.2 20.2 0 0 0 172 186v6a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12v-6a20 20 0 0 0-7.76-15.81A83.58 83.58 0 0 1 44 104.47C43.75 59 80.52 21.09 126 20a84 84 0 0 1 86 84m-8 0a76 76 0 0 0-77.84-76C85 29 51.77 63.27 52 104.43a75.62 75.62 0 0 0 29.17 59.43A28 28 0 0 1 92 186v6a4 4 0 0 0 4 4h28v-50.34l-30.83-30.83a4 4 0 0 1 5.66-5.66L128 138.34l29.17-29.17a4 4 0 1 1 5.66 5.66L132 145.66V196h28a4 4 0 0 0 4-4v-6a28.14 28.14 0 0 1 10.94-22.2A75.62 75.62 0 0 0 204 104"></svg:path>`,
})
export class PhLightbulbFilamentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbThinIcon],svg[ph-lightbulb-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 232a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m40-128a83.59 83.59 0 0 1-32.11 66.06A20.2 20.2 0 0 0 172 186v6a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12v-6a20 20 0 0 0-7.76-15.81A83.58 83.58 0 0 1 44 104.47C43.75 59 80.52 21.09 126 20a84 84 0 0 1 86 84m-8 0a76 76 0 0 0-77.83-76C85 29 51.77 63.27 52 104.43a75.62 75.62 0 0 0 29.17 59.43A28 28 0 0 1 92 186v6a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-6a28.14 28.14 0 0 1 10.94-22.2A75.62 75.62 0 0 0 204 104m-67.34-51.94a4 4 0 0 0-1.32 7.88C153.53 63 169 78.45 172.06 96.67A4 4 0 0 0 176 100a4 4 0 0 0 .67-.06a4 4 0 0 0 3.27-4.61a53.51 53.51 0 0 0-43.28-43.27"></svg:path>`,
})
export class PhLightbulbThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseThinIcon],svg[ph-lighthouse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84a4 4 0 0 0-4 4v20h-18.77L180 55.6a4 4 0 0 0-1.34-2.6l-42.88-38.13l-.1-.09a12 12 0 0 0-15.36 0l-.1.09L77.34 53A4 4 0 0 0 76 55.6L70.77 108H52V88a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4h22l-9.92 98.86A12 12 0 0 0 72 228h112a12 12 0 0 0 11.94-13.16L186 116h22a4 4 0 0 0 4-4V88a4 4 0 0 0-4-4m-82.52-63.11a4 4 0 0 1 5 0l35 31.11h-75ZM83.62 60h88.76l4.81 48H132V88a4 4 0 0 0-8 0v20H78.81ZM187 218.69a3.94 3.94 0 0 1-3 1.31H72a4 4 0 0 1-4-4.36L72.39 172h111.22l4.39 43.62a3.93 3.93 0 0 1-1 3.07M182.81 164H73.19L78 116h100Z"></svg:path>`,
})
export class PhLighthouseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningAThinIcon],svg[ph-lightning-a-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.92 112.34a4 4 0 0 0-2.28-2.85l-53-23.78l14.43-60.79a4 4 0 0 0-6.83-3.64L29.06 124.14a4 4 0 0 0 1.3 6.37l53 23.78l-14.45 60.78a4 4 0 0 0 2 4.46a3.94 3.94 0 0 0 1.88.47a4 4 0 0 0 2.94-1.28l95.2-102.86a4 4 0 0 0 .99-3.52M80.21 202.1l11.68-49.18a4 4 0 0 0-2.25-4.57l-50.92-22.86l81.07-87.59l-11.68 49.18a4 4 0 0 0 2.25 4.57l50.92 22.86Zm155.37 12.11l-36-72a4 4 0 0 0-7.16 0l-36 72a4 4 0 1 0 7.16 3.58L174.47 196h43.06l10.89 21.79A4 4 0 0 0 232 220a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37M178.47 188L196 152.94L213.53 188Z"></svg:path>`,
})
export class PhLightningAThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashThinIcon],svg[ph-lightning-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L86.77 88.6l-41.69 44.67a4 4 0 0 0 1.52 6.47l60.81 22.81l-15.33 76.67a4 4 0 0 0 6.84 3.51l64.83-69.46L205 218.69a4 4 0 1 0 5.92-5.38ZM102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36l37.17-39.82l66.18 72.79Zm8.71-158.9a4 4 0 0 1-.2-5.65l45.89-49.16a4 4 0 0 1 6.84 3.51l-15.33 76.65l60.81 22.8a4 4 0 0 1 2.49 2.84a4 4 0 0 1-1 3.64l-22.3 23.89a4 4 0 0 1-5.85-5.45L201 121.64l-58.4-21.9a4 4 0 0 1-2.52-4.52L153.32 29L117 67.89a4 4 0 0 1-5.61.19Z"></svg:path>`,
})
export class PhLightningSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningThinIcon],svg[ph-lightning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.89 119.09a4 4 0 0 0-2.49-2.84l-60.81-22.8l15.33-76.67a4 4 0 0 0-6.84-3.51l-112 120a4 4 0 0 0-1 3.64a4 4 0 0 0 2.49 2.84l60.81 22.8l-15.3 76.67a4 4 0 0 0 6.84 3.51l112-120a4 4 0 0 0 .97-3.64M102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36L153.32 29l-13.24 66.2a4 4 0 0 0 2.52 4.53l58.4 21.91Z"></svg:path>`,
})
export class PhLightningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentThinIcon],svg[ph-line-segment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.81 44.19a28 28 0 0 0-42.23 36.57l-88.82 88.82a28 28 0 0 0-36.57 2.63a28 28 0 1 0 42.23 3l88.82-88.82a28 28 0 0 0 36.57-42.23Zm-133.67 162a20 20 0 1 1 0-28.28a20 20 0 0 1 0 28.24Zm128-128a20 20 0 0 1-28.28 0a20 20 0 1 1 28.28 0"></svg:path>`,
})
export class PhLineSegmentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsThinIcon],svg[ph-line-segments-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.81 36.19a28 28 0 0 0-39.6 0a28 28 0 0 0 0 39.6a26.6 26.6 0 0 0 3.14 2.71l-29.73 55.21a28.08 28.08 0 0 0-26.38 3.87l-24.82-24.82A28 28 0 0 0 76.2 76.19a28 28 0 0 0 3.14 42.31L49.6 173.72a28 28 0 0 0-29.41 6.49a28 28 0 1 0 39.6 0a29 29 0 0 0-3.14-2.71l29.73-55.21a28 28 0 0 0 26.38-3.87l24.82 24.82a28 28 0 1 0 39.09-5.74l29.73-55.22a28 28 0 0 0 29.41-46.09m-181.68 178a20 20 0 1 1 0-28.28a20 20 0 0 1 0 28.24Zm27.72-104a20 20 0 1 1 28.29 0a20 20 0 0 1-28.29-.05Zm92.3 64a20 20 0 1 1 0-28.29a20 20 0 0 1 0 28.25Zm56-104a20 20 0 1 1 0-28.29a20 20 0 0 1 0 28.24Z"></svg:path>`,
})
export class PhLineSegmentsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalThinIcon],svg[ph-line-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24v208a4 4 0 0 1-8 0V24a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhLineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakThinIcon],svg[ph-link-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.46 54.54a36.06 36.06 0 0 0-50.92 0l-11.65 12.22a4 4 0 0 1-5.78-5.52L144.82 49a44 44 0 1 1 62.29 62.15l-12.35 11.78a4 4 0 0 1-5.52-5.78l12.28-11.72a36 36 0 0 0-.06-50.89m-84.35 134.7l-11.65 12.22a36 36 0 0 1-51-50.85l12.28-11.72a4 4 0 0 0-5.52-5.78l-12.33 11.78A44 44 0 1 0 111.18 207l11.71-12.28a4 4 0 1 0-5.78-5.52ZM216 156h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M40 100h24a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m120 88a4 4 0 0 0-4 4v24a4 4 0 0 0 8 0v-24a4 4 0 0 0-4-4M96 68a4 4 0 0 0 4-4V40a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhLinkBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakThinIcon],svg[ph-link-simple-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.79 116.77l-30.07 30.06a4 4 0 1 1-5.66-5.66l30.07-30.06a44 44 0 0 0-62.24-62.24l-30.07 30.06a4 4 0 0 1-5.65-5.66l30.06-30.06a52 52 0 0 1 73.56 73.56m-71.62 60.29l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhLinkSimpleBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakThinIcon],svg[ph-link-simple-horizontal-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 128a44.05 44.05 0 0 0 44 44h40a4 4 0 0 1 0 8H64a52 52 0 0 1 0-104h40a4 4 0 0 1 0 8H64a44.05 44.05 0 0 0-44 44m172-52h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalThinIcon],svg[ph-link-simple-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 124h96a4 4 0 0 1 0 8H80a4 4 0 0 1 0-8m24 48H64a44 44 0 0 1 0-88h40a4 4 0 0 0 0-8H64a52 52 0 0 0 0 104h40a4 4 0 0 0 0-8m88-96h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104"></svg:path>`,
})
export class PhLinkSimpleHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleThinIcon],svg[ph-link-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.84 93.16a4 4 0 0 1 0 5.66l-64 64a4 4 0 0 1-5.66-5.66l64-64a4 4 0 0 1 5.66 0m49.95-49.95a52.07 52.07 0 0 0-73.56 0l-30.06 30.06a4 4 0 0 0 5.65 5.66l30.07-30.06a44 44 0 0 1 62.24 62.24l-30.07 30.06a4 4 0 0 0 5.66 5.66l30.07-30.06a52.07 52.07 0 0 0 0-73.56m-71.62 133.85l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhLinkSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkThinIcon],svg[ph-link-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 88.12a50.44 50.44 0 0 1-14.81 34.31l-34.75 34.74A50.33 50.33 0 0 1 150.62 172h-.05A50.63 50.63 0 0 1 100 120a4 4 0 0 1 4-3.89h.11a4 4 0 0 1 3.89 4.11A42.64 42.64 0 0 0 150.58 164a42.32 42.32 0 0 0 30.14-12.49l34.75-34.74a42.63 42.63 0 1 0-60.29-60.28l-11 11a4 4 0 0 1-5.66-5.65l11-11A50.64 50.64 0 0 1 236 88.12M111.78 188.49l-11 11A42.33 42.33 0 0 1 70.6 212a42.63 42.63 0 0 1-30.11-72.77l34.75-34.74A42.63 42.63 0 0 1 148 135.82a4 4 0 0 0 8 .23a50.64 50.64 0 0 0-86.45-37.22L34.8 133.57A50.63 50.63 0 0 0 70.56 220a50.33 50.33 0 0 0 35.81-14.83l11-11a4 4 0 1 0-5.65-5.66Z"></svg:path>`,
})
export class PhLinkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoThinIcon],svg[ph-linkedin-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28H40a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM92 112v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m88 28v36a4 4 0 0 1-8 0v-36a24 24 0 0 0-48 0v36a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0v6.87A32 32 0 0 1 180 140M96 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLinkedinLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoThinIcon],svg[ph-linktree-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 160v72a4 4 0 0 1-8 0v-72a4 4 0 0 1 8 0m76-60h-70.34l49.17-49.17a4 4 0 1 0-5.66-5.66L132 94.34V24a4 4 0 0 0-8 0v70.34L74.83 45.17a4 4 0 0 0-5.66 5.66L118.34 100H48a4 4 0 0 0 0 8h70.34l-49.17 49.17a4 4 0 0 0 5.66 5.66L128 109.66l53.17 53.17a4 4 0 0 0 5.66-5.66L137.66 108H208a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhLinktreeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoThinIcon],svg[ph-linux-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.49 211.12a4 4 0 0 1-5.61-.62C219.54 208.82 188 168.48 188 88a60 60 0 0 0-120 0c0 80.48-31.53 120.82-32.88 122.5a4 4 0 0 1-6.25-5C29.18 205.11 60 165.45 60 88a68 68 0 0 1 136 0c0 40.48 8.47 70.27 15.57 88.14c7.69 19.35 15.48 29.27 15.56 29.36a4 4 0 0 1-.64 5.62M100 92a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64 8a8 8 0 1 0-8 8a8 8 0 0 0 8-8m-66.21 32.42a4 4 0 1 0-3.58 7.16l32 16a4 4 0 0 0 3.58 0l32-16a4 4 0 0 0-3.58-7.16L128 147.53ZM128 180a50.05 50.05 0 0 0-43.49 26.05a4 4 0 1 0 7 3.89a41.34 41.34 0 0 1 73 0A4 4 0 0 0 168 212a3.94 3.94 0 0 0 1.94-.51a4 4 0 0 0 1.55-5.44A50.07 50.07 0 0 0 128 180"></svg:path>`,
})
export class PhLinuxLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsThinIcon],svg[ph-list-bullets-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 64a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4m132 60H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 64H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8M44 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0-64a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 128a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhListBulletsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksThinIcon],svg[ph-list-checks-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4h-88a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4m-92-60h88a4 4 0 0 0 0-8h-88a4 4 0 0 0 0 8m88 120h-88a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8M85.17 45.17L56 74.34L42.83 61.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66m0 64L56 138.34l-13.17-13.17a4 4 0 1 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66m0 64L56 202.34l-13.17-13.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhListChecksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesThinIcon],svg[ph-list-dashes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 64a4 4 0 0 1 4-4h120a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m124 60H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8m0 64H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8M56 60H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListDashesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartThinIcon],svg[ph-list-heart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h64a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m80 56H40a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m124-44c0 14.51-8.56 29-25.44 43.07a143.5 143.5 0 0 1-24.77 16.51a4 4 0 0 1-3.58 0a143.5 143.5 0 0 1-24.77-16.51C148.56 173 140 158.51 140 144a28 28 0 0 1 52-14.41A28 28 0 0 1 244 144m-8 0a20 20 0 0 0-40 0a4 4 0 0 1-8 0a20 20 0 0 0-40 0c0 25.8 35.54 46.83 44 51.47c8.46-4.64 44-25.67 44-51.47"></svg:path>`,
})
export class PhListHeartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassThinIcon],svg[ph-list-magnifying-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h72a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m88 56H40a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8m106.83 6.83a4 4 0 0 1-5.66 0l-22.72-22.72a36.06 36.06 0 1 1 5.66-5.66l22.72 22.72a4 4 0 0 1 0 5.66M184 172a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhListMagnifyingGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersThinIcon],svg[ph-list-numbers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H104a4 4 0 0 1 0-8h112a4 4 0 0 1 4 4M104 68h112a4 4 0 0 0 0-8H104a4 4 0 0 0 0 8m112 120H104a4 4 0 0 0 0 8h112a4 4 0 0 0 0-8M41.79 51.58L52 46.47V104a4 4 0 0 0 8 0V40a4 4 0 0 0-5.79-3.58l-16 8a4 4 0 1 0 3.58 7.16M72 204H48l23.85-31.92a19.54 19.54 0 0 0 4-14.8a19.76 19.76 0 0 0-8-13.28a20.84 20.84 0 0 0-28.59 3.92a19.9 19.9 0 0 0-3 5.38a4 4 0 0 0 7.5 2.7a12.1 12.1 0 0 1 1.78-3.22a12.78 12.78 0 0 1 17.54-2.37a11.85 11.85 0 0 1 4.81 7.94a11.65 11.65 0 0 1-2.41 8.85L36.8 205.61A4 4 0 0 0 40 212h32a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListNumbersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusThinIcon],svg[ph-list-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m104 56H40a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m88 0h-20v-20a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v20a4 4 0 0 0 8 0v-20h20a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarThinIcon],svg[ph-list-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h56a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m72 56H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m122.55-47.3l-24.46 20.19l7.46 30.11a4 4 0 0 1-1.49 4.17a4.06 4.06 0 0 1-2.4.79a4 4 0 0 1-2-.55L184 179.18l-27.64 16.27a4 4 0 0 1-5.91-4.41l7.46-30.15l-24.46-20.19a4 4 0 0 1 2.24-7.08l32.24-2.49l12.4-28.71a4 4 0 0 1 7.34 0l12.4 28.71l32.24 2.49a4 4 0 0 1 2.24 7.08m-12.74.14L197 138.92a4 4 0 0 1-3.36-2.4L184 114.1l-9.68 22.42a4 4 0 0 1-3.36 2.4l-24.77 1.92L165 156.33a4 4 0 0 1 1.33 4l-5.78 23.36l21.45-12.6a4 4 0 0 1 4.06 0l21.47 12.64l-5.78-23.36a4 4 0 0 1 1.33-4Z"></svg:path>`,
})
export class PhListStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListThinIcon],svg[ph-list-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m176 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenThinIcon],svg[ph-lock-key-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-92a24 24 0 0 0-4 47.66V184a4 4 0 0 0 8 0v-20.34a24 24 0 0 0-4-47.66m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhLockKeyOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyThinIcon],svg[ph-lock-key-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-92a24 24 0 0 0-4 47.66V184a4 4 0 0 0 8 0v-20.34a24 24 0 0 0-4-47.66m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhLockKeyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenThinIcon],svg[ph-lock-laminated-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M44 124h168v24H44Zm0 32h168v24H44Zm4-64h160a4 4 0 0 1 4 4v20H44V96a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-20h168v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhLockLaminatedOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedThinIcon],svg[ph-lock-laminated-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M44 124h168v24H44Zm0 32h168v24H44ZM92 56a36 36 0 0 1 72 0v28H92ZM48 92h160a4 4 0 0 1 4 4v20H44V96a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-20h168v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhLockLaminatedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenThinIcon],svg[ph-lock-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-76-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLockOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenThinIcon],svg[ph-lock-simple-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhLockSimpleOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleThinIcon],svg[ph-lock-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhLockSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockThinIcon],svg[ph-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-76-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersThinIcon],svg[ph-lockers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 72a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m-4 28h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M72 76h24a4 4 0 0 0 0-8H72a4 4 0 0 0 0 8m24 24H72a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m124-52v176a4 4 0 0 1-8 0v-20h-80v20a4 4 0 0 1-8 0v-20H44v20a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-96 148V44H48a4 4 0 0 0-4 4v148Zm8 0h80V48a4 4 0 0 0-4-4h-76Z"></svg:path>`,
})
export class PhLockersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogThinIcon],svg[ph-log-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 0c0 17.83-4.38 34.66-12.32 47.38C223.36 196.67 212.11 204 200 204H56c-12.11 0-23.36-7.33-31.68-20.62C16.38 170.66 12 153.83 12 136s4.38-34.66 12.32-47.38C32.64 75.33 43.89 68 56 68h38.34l38.83-38.83A4 4 0 0 1 136 28h32a4 4 0 0 1 0 8h-30.34l-32 32H200c12.11 0 23.36 7.33 31.68 20.62C239.62 101.34 244 118.17 244 136m-64.87 60a52.2 52.2 0 0 1-10.81-12.62a77 77 0 0 1-8.47-19.38H80a4 4 0 0 1 0-8h77.91a104.5 104.5 0 0 1-1.91-20c0-17.83 4.38-34.66 12.32-47.38A52.2 52.2 0 0 1 179.13 76H56c-15.64 0-29 16.72-33.94 40H104a4 4 0 0 1 0 8H20.72a100 100 0 0 0-.72 12c0 33.08 16.15 60 36 60ZM236 136c0-33.08-16.15-60-36-60s-36 26.92-36 60s16.15 60 36 60s36-26.92 36-60"></svg:path>`,
})
export class PhLogThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandThinIcon],svg[ph-magic-wand-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 152a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4M56 68h20v20a4 4 0 0 0 8 0V68h20a4 4 0 0 0 0-8H84V40a4 4 0 0 0-8 0v20H56a4 4 0 0 0 0 8m128 128h-12v-12a4 4 0 0 0-8 0v12h-12a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8m32.48-118.83L77.17 216.49a12 12 0 0 1-17 0L39.51 195.8a12 12 0 0 1 0-17L178.83 39.51a12 12 0 0 1 17 0l20.65 20.69a12 12 0 0 1 0 16.97M170.34 112L144 85.66l-98.83 98.83a4 4 0 0 0 0 5.65l20.68 20.69a4 4 0 0 0 5.66 0Zm40.49-46.14l-20.69-20.69a4 4 0 0 0-5.66 0L149.65 80L176 106.34l34.83-34.83a4 4 0 0 0 0-5.65"></svg:path>`,
})
export class PhMagicWandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightThinIcon],svg[ph-magnet-straight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44h-40a12 12 0 0 0-12 12v88a20 20 0 0 1-40 0V56a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v88a84 84 0 0 0 84 84h.64c46-.34 83.36-38.47 83.36-85V56a12 12 0 0 0-12-12m-40 8h40a4 4 0 0 1 4 4v36h-48V56a4 4 0 0 1 4-4M56 52h40a4 4 0 0 1 4 4v36H52V56a4 4 0 0 1 4-4m72.58 168H128a76 76 0 0 1-76-76v-44h48v44a28 28 0 0 0 56 0v-44h48v43c0 42.15-33.83 76.69-75.42 77"></svg:path>`,
})
export class PhMagnetStraightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetThinIcon],svg[ph-magnet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.13 53.06A83.4 83.4 0 0 0 144.59 28h-.32a83.46 83.46 0 0 0-59.42 24.62L23.46 114.8a12 12 0 0 0 0 16.92l28.67 28.66a11.9 11.9 0 0 0 8.48 3.51h.07a12 12 0 0 0 8.52-3.61l60.89-62.42a20.1 20.1 0 0 1 28-.27a19.54 19.54 0 0 1 6 14a20.87 20.87 0 0 1-6 14.86l-62.33 60.3a12 12 0 0 0-.12 17.09l28.66 28.66a12 12 0 0 0 16.89.08L203 172.12c32.88-32.91 33.4-86.32 1.13-119.06M63.51 154.69a3.93 3.93 0 0 1-2.83 1.2a4 4 0 0 1-2.83-1.17l-28.69-28.66a4 4 0 0 1 0-5.64l26.63-27l34.15 34.18Zm72.08 72.18a4 4 0 0 1-5.63 0l-28.67-28.66a4 4 0 0 1 0-5.69l27.2-26.3l34.16 34.15Zm61.76-60.44l-28.94 28.32l-34.12-34.12l29.41-28.44a29 29 0 0 0 8.4-20.64a27.5 27.5 0 0 0-8.41-19.72a28.14 28.14 0 0 0-39.25.41l-28.91 29.63L61.4 87.75l29.12-29.49A75.5 75.5 0 0 1 144.27 36h.29a75.53 75.53 0 0 1 53.87 22.67c29.2 29.63 28.7 77.98-1.08 107.76"></svg:path>`,
})
export class PhMagnetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusThinIcon],svg[ph-magnifying-glass-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 112a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m78.83 114.83a4 4 0 0 1-5.66 0l-52.7-52.7a84.1 84.1 0 1 1 5.66-5.66l52.7 52.7a4 4 0 0 1 0 5.66M112 188a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76"></svg:path>`,
})
export class PhMagnifyingGlassMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusThinIcon],svg[ph-magnifying-glass-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 112a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H80a4 4 0 0 1 0-8h28V80a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m78.83 114.83a4 4 0 0 1-5.66 0l-52.7-52.7a84.1 84.1 0 1 1 5.66-5.66l52.7 52.7a4 4 0 0 1 0 5.66M112 188a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76"></svg:path>`,
})
export class PhMagnifyingGlassPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassThinIcon],svg[ph-magnifying-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 221.17l-52.7-52.7a84.1 84.1 0 1 0-5.66 5.66l52.7 52.7a4 4 0 0 0 5.66-5.66M36 112a76 76 0 1 1 76 76a76.08 76.08 0 0 1-76-76"></svg:path>`,
})
export class PhMagnifyingGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxThinIcon],svg[ph-mailbox-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 152a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m136-36v60a12 12 0 0 1-12 12h-92v36a4 4 0 0 1-8 0v-36H32a12 12 0 0 1-12-12v-60a56.06 56.06 0 0 1 56-56h80V24a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-28v32h16a56.06 56.06 0 0 1 56 56m-112 64v-64a48 48 0 0 0-96 0v60a4 4 0 0 0 4 4Zm104-64a48.05 48.05 0 0 0-48-48h-16v76a4 4 0 0 1-8 0V68h-51.18A56 56 0 0 1 132 116v64h92a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhMailboxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaThinIcon],svg[ph-map-pin-area-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-18.92 67.73C78.05 127.35 68 103.93 68 80a60 60 0 0 1 120 0c0 23.93-10.05 47.35-29.08 67.73A136.5 136.5 0 0 1 130 171.47a4 4 0 0 1-4 0a136.5 136.5 0 0 1-28.92-23.74M76 80c0 47.09 42.25 77 52 83.3c9.75-6.28 52-36.21 52-83.3a52 52 0 0 0-104 0m125.38 71.38a4 4 0 0 0-2.76 7.51c18.67 6.89 29.38 16 29.38 25.11c0 17.39-40.18 36-100 36S28 201.39 28 184c0-9.07 10.71-18.22 29.38-25.11a4 4 0 0 0-2.76-7.51C32.29 159.62 20 171.21 20 184c0 12.46 11.73 23.83 33 32c20.09 7.73 46.72 12 75 12s54.89-4.25 75-12c21.29-8.19 33-19.56 33-32c0-12.79-12.29-24.38-34.62-32.62"></svg:path>`,
})
export class PhMapPinAreaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineThinIcon],svg[ph-map-pin-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 228h-60.28A263.7 263.7 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84 84 0 0 0-168 0c0 30.42 14.17 62.79 41 93.62A263.7 263.7 0 0 0 116.28 228H56a4 4 0 0 0 0 8h144a4 4 0 0 0 0-8M90.9 192.23C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.77M164 104a36 36 0 1 0-36 36a36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></svg:path>`,
})
export class PhMapPinLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusThinIcon],svg[ph-map-pin-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 104a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28V72a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m48 0c0 30.42-14.17 62.79-41 93.62a250 250 0 0 1-40.73 37.66a4 4 0 0 1-4.58 0A250 250 0 0 1 85 197.62c-26.83-30.83-41-63.2-41-93.62a84 84 0 0 1 168 0m-8 0a76 76 0 0 0-152 0c0 35.9 21.15 67.8 38.9 88.23A254.6 254.6 0 0 0 128 227a254.6 254.6 0 0 0 37.1-34.81C182.85 171.8 204 139.9 204 104"></svg:path>`,
})
export class PhMapPinPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaThinIcon],svg[ph-map-pin-simple-area-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 99.77V176a4 4 0 0 0 8 0V99.77a36 36 0 1 0-8 0M128 36a28 28 0 1 1-28 28a28 28 0 0 1 28-28m108 140c0 12.46-11.73 23.83-33 32c-20.09 7.73-46.72 12-75 12s-54.89-4.25-75-12c-21.29-8.19-33-19.56-33-32c0-18.55 25.81-34.22 67.37-40.88a4 4 0 1 1 1.26 7.88C52.93 148.74 28 162.3 28 176c0 17.39 40.18 36 100 36s100-18.61 100-36c0-13.7-24.93-27.26-60.63-33a4 4 0 1 1 1.26-7.89C210.19 141.78 236 157.45 236 176"></svg:path>`,
})
export class PhMapPinSimpleAreaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineThinIcon],svg[ph-map-pin-simple-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 212h-84v-80.17a52 52 0 1 0-8 0V212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M84 80a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44"></svg:path>`,
})
export class PhMapPinSimpleLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleThinIcon],svg[ph-map-pin-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72a52 52 0 1 0-56 51.83V232a4 4 0 0 0 8 0V123.83A52.05 52.05 0 0 0 180 72m-52 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMapPinSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinThinIcon],svg[ph-map-pin-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 68a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0-112a84.09 84.09 0 0 0-84 84c0 30.42 14.17 62.79 41 93.62a250 250 0 0 0 40.73 37.66a4 4 0 0 0 4.58 0A250 250 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84.09 84.09 0 0 0-84-84m37.1 172.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.81C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23"></svg:path>`,
})
export class PhMapPinThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldThinIcon],svg[ph-map-trifold-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.46 52.85a4 4 0 0 0-3.43-.73l-62.56 15.64l-62.68-31.34a4 4 0 0 0-2.76-.3l-64 16A4 4 0 0 0 28 56v144a4 4 0 0 0 5 3.88l62.56-15.64l62.68 31.34a4 4 0 0 0 2.76.3l64-16a4 4 0 0 0 3-3.88V56a4 4 0 0 0-1.54-3.15M100 46.47l56 28v135.06l-56-28ZM36 59.12l56-14v135.76l-56 14Zm184 137.76l-56 14V75.12l56-14Z"></svg:path>`,
})
export class PhMapTrifoldThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoThinIcon],svg[ph-markdown-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H24a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4Zm-112-88v48a4 4 0 0 1-8 0v-38.34l-25.17 25.17a4 4 0 0 1-5.66 0L60 113.66V152a4 4 0 0 1-8 0v-48a4 4 0 0 1 6.83-2.83L88 130.34l29.17-29.17A4 4 0 0 1 124 104m78.83 21.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 1 1 5.66-5.66L172 142.34V104a4 4 0 0 1 8 0v38.34l17.17-17.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhMarkdownLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleThinIcon],svg[ph-marker-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29M84 208.83V176a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v32.83a92.25 92.25 0 0 1-88 0M108.15 140H152a4 4 0 0 1 4 4v20h-56v-20a4 4 0 0 1 4-4Zm4.93-8l11-52.82a4 4 0 0 1 7.84 0l11 52.82Zm80 61.05A92.4 92.4 0 0 1 180 203.9V176a12 12 0 0 0-12-12h-4v-20a12 12 0 0 0-12-12h-.91l-11.34-54.45a12 12 0 0 0-23.5 0L104.91 132H104a12 12 0 0 0-12 12v20h-4a12 12 0 0 0-12 12v27.9a92.4 92.4 0 0 1-13-10.85a92 92 0 1 1 130.1 0Z"></svg:path>`,
})
export class PhMarkerCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniThinIcon],svg[ph-martini-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 42.83A4 4 0 0 0 232 36H24a4 4 0 0 0-2.83 6.83L124 145.66V212H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8h-36v-66.34ZM33.66 44h188.68l-24 24H57.66ZM128 138.34L65.66 76h124.68Z"></svg:path>`,
})
export class PhMartiniThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyThinIcon],svg[ph-mask-happy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M187 125.33a4 4 0 1 1-6 5.33c-3.4-3.8-10.72-6.66-17-6.66s-13.62 2.86-17 6.66a4 4 0 0 1-3 1.34a4 4 0 0 1-3-6.67c4.92-5.5 14.37-9.33 23-9.33s18.06 3.83 23 9.33m-78 5.33a4 4 0 1 0 6-5.33c-4.92-5.5-14.37-9.33-23-9.33s-18.06 3.83-23 9.33a4 4 0 0 0 3 6.67a4 4 0 0 0 3-1.34c3.4-3.8 10.72-6.66 17-6.66s13.62 2.86 17 6.66m50.3 34.74a40.89 40.89 0 0 1-62.64 0a4 4 0 0 0-6.09 5.2a48.92 48.92 0 0 0 74.82 0a4 4 0 0 0-6.09-5.2M220 48v55.78c0 35-9.4 68-26.48 92.92C176.13 222.05 152.86 236 128 236s-48.13-13.95-65.52-39.29C45.4 171.83 36 138.83 36 103.79V48a12 12 0 0 1 16.34-11.2C66.66 42.38 95.53 51.7 128 51.7s61.34-9.32 75.66-14.88A12 12 0 0 1 220 48m-8 0a4 4 0 0 0-5.44-3.74C191.72 50 161.77 59.7 128 59.7S64.28 50 49.44 44.27A4.1 4.1 0 0 0 48 44a3.87 3.87 0 0 0-2.23.7A4 4 0 0 0 44 48v55.77C44 172.28 81.68 228 128 228s84-55.72 84-124.21Z"></svg:path>`,
})
export class PhMaskHappyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadThinIcon],svg[ph-mask-sad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.33 186.21a4 4 0 0 1-5.54 1.12C142.8 182.69 137 180 128 180s-14.8 2.69-21.79 7.33a4 4 0 1 1-4.42-6.66c7.82-5.21 15.28-8.67 26.21-8.67s18.39 3.46 26.21 8.67a4 4 0 0 1 1.12 5.54M181 117.33c-3.4 3.8-10.72 6.67-17 6.67s-13.62-2.87-17-6.67a4 4 0 0 0-6 5.33c4.92 5.5 14.37 9.34 23 9.34s18.06-3.84 23-9.33a4 4 0 1 0-6-5.34M220 48v55.78c0 35-9.4 68-26.48 92.92C176.13 222.05 152.86 236 128 236s-48.13-13.95-65.52-39.29C45.4 171.83 36 138.83 36 103.79V48a12 12 0 0 1 16.34-11.2C66.66 42.38 95.53 51.7 128 51.7s61.34-9.32 75.66-14.88A12 12 0 0 1 220 48m-8 0a4 4 0 0 0-5.44-3.74C191.72 50 161.77 59.7 128 59.7S64.28 50 49.44 44.27A4.1 4.1 0 0 0 48 44a3.87 3.87 0 0 0-2.23.7A4 4 0 0 0 44 48v55.77C44 172.28 81.68 228 128 228s84-55.72 84-124.21Zm-97 74.66a4 4 0 1 0-6-5.34c-3.4 3.8-10.72 6.67-17 6.67s-13.62-2.87-17-6.67a4 4 0 0 0-6 5.33c4.92 5.5 14.37 9.34 23 9.34s18.06-3.83 23-9.32Z"></svg:path>`,
})
export class PhMaskSadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoThinIcon],svg[ph-mastodon-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a36 36 0 0 0-36 36v120a36 36 0 0 0 36 36h88a4 4 0 0 0 0-8H72a28 28 0 0 1-28-28v-12h140a36 36 0 0 0 36-36V72a36 36 0 0 0-36-36m28 108a28 28 0 0 1-28 28H44V72a28 28 0 0 1 28-28h112a28 28 0 0 1 28 28Zm-32-40v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a28 28 0 0 1 52-14.41A28 28 0 0 1 180 104"></svg:path>`,
})
export class PhMastodonLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsThinIcon],svg[ph-math-operations-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 72a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 108H76v-28a4 4 0 0 0-8 0v28H40a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8m48-8h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-58.83-97.17a4 4 0 0 0 5.66 0L184 77.66l21.17 21.17a4 4 0 1 0 5.66-5.66L189.66 72l21.17-21.17a4 4 0 1 0-5.66-5.66L184 66.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L178.34 72l-21.17 21.17a4 4 0 0 0 0 5.66"></svg:path>`,
})
export class PhMathOperationsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoThinIcon],svg[ph-matrix-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 44v168h20a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8Zm172-8h-24a4 4 0 0 0 0 8h20v168h-20a4 4 0 0 0 0 8h24a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4m-64 56a28 28 0 0 0-24 13.6a28 28 0 0 0-44-5.17V96a4 4 0 0 0-8 0v64a4 4 0 0 0 8 0v-40a20 20 0 0 1 40 0v40a4 4 0 0 0 8 0v-40a20 20 0 0 1 40 0v40a4 4 0 0 0 8 0v-40a28 28 0 0 0-28-28"></svg:path>`,
})
export class PhMatrixLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryThinIcon],svg[ph-medal-military-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 44H49a13 13 0 0 0-13 13v49.21A13 13 0 0 0 43.62 118l70.72 32.14a44 44 0 1 0 27.32 0L212.38 118a13 13 0 0 0 7.62-11.79V57a13 13 0 0 0-13-13m-43 8v79.24l-36 16.37l-36-16.37V52ZM44 106.21V57a5 5 0 0 1 5-5h35v75.61l-37.07-16.85a5 5 0 0 1-2.93-4.55M164 192a36 36 0 1 1-36-36a36 36 0 0 1 36 36m48-85.79a5 5 0 0 1-2.93 4.55L172 127.61V52h35a5 5 0 0 1 5 5Z"></svg:path>`,
})
export class PhMedalMilitaryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalThinIcon],svg[ph-medal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 96a84 84 0 1 0-136 65.9V240a4 4 0 0 0 4 4a4.05 4.05 0 0 0 1.79-.42L128 220.47l46.22 23.11A4 4 0 0 0 180 240v-78.1A83.89 83.89 0 0 0 212 96m-40 137.53l-42.22-21.11a4 4 0 0 0-3.58 0L84 233.53v-66a83.8 83.8 0 0 0 88 0ZM128 172a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76m0-128a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMedalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoThinIcon],svg[ph-medium-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 68a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52M184 68c-16 0-28 25.79-28 60s12 60 28 60s28-25.79 28-60s-12-60-28-60m0 112c-9.46 0-20-21.36-20-52s10.54-52 20-52s20 21.36 20 52s-10.54 52-20 52m60-108v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhMediumLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleThinIcon],svg[ph-megaphone-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.41 90.5l-176-54A12 12 0 0 0 36 48v144a12 12 0 0 0 12 12a12.4 12.4 0 0 0 3.45-.5L140 176.32V192a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32.86l31.39-9.63A12.06 12.06 0 0 0 236 138v-36a12 12 0 0 0-8.59-11.5M49.12 195.84A4 4 0 0 1 44 192V48a4 4 0 0 1 1.6-3.2A4 4 0 0 1 48 44a4 4 0 0 1 1.07.15L140 72.05V168ZM188 192a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-18.13l40-12.27Zm40-54a4 4 0 0 1-2.88 3.84h-.05L148 165.5v-91l77.12 23.66A4 4 0 0 1 228 102Z"></svg:path>`,
})
export class PhMegaphoneSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneThinIcon],svg[ph-megaphone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76h-39.9c-2.19-.11-54.55-3.38-104.38-45.17A12 12 0 0 0 36 40v160a11.88 11.88 0 0 0 6.92 10.87A12.2 12.2 0 0 0 48 212a11.93 11.93 0 0 0 7.69-2.83c42.46-35.62 86.76-43.25 100.28-44.8v36.29a12 12 0 0 0 5.34 10l11 7.33a12 12 0 0 0 18.28-7l12.49-47.09A44 44 0 0 0 200 76m-44 80.3c-13.53 1.35-60 8.62-105.42 46.75A4 4 0 0 1 44 200V40a4 4 0 0 1 2.3-3.62a4.3 4.3 0 0 1 1.75-.38a3.88 3.88 0 0 1 2.53 1C96 75.09 142.47 82.36 156 83.71Zm26.87 52.7a4 4 0 0 1-6.1 2.36l-11-7.33a4 4 0 0 1-1.78-3.33V164h30.8ZM200 156h-36V84h36a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhMegaphoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfThinIcon],svg[ph-member-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 132H52.11A76.09 76.09 0 0 0 128 204h72a4 4 0 0 1 0 8h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76.09 76.09 0 0 0-75.89 72H200a4 4 0 0 1 0 8"></svg:path>`,
})
export class PhMemberOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryThinIcon],svg[ph-memory-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60H24a12 12 0 0 0-12 12v128a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0V72a12 12 0 0 0-12-12M20 72a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4v100H20Zm92 76a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4Zm-60-48h56v40H52Zm92 48h64a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4m4-48h56v40h-56Z"></svg:path>`,
})
export class PhMemoryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoThinIcon],svg[ph-messenger-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.83 109.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0L112 117.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0L144 138.34l29.17-29.17a4 4 0 0 1 5.66 0M228 128a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128m-8 0a92 92 0 1 0-171.65 46.07a4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a4 4 0 0 1 1.27-.21a4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128"></svg:path>`,
})
export class PhMessengerLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoThinIcon],svg[ph-meta-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 149.31c0 15.38-3 28.45-8.6 37.78c-6.67 11.06-17 16.91-30 16.91c-25.55 0-44.83-36-65.25-74.11C113.78 95.53 94.74 60 74 60c-11.1 0-22.7 10.53-31.84 28.89A142.2 142.2 0 0 0 28 149.31c0 13.93 2.58 25.56 7.45 33.65c5.22 8.65 13 13 23.11 13c17.15 0 33.07-24.32 47.73-50.6a4 4 0 1 1 7 3.9C98.52 175.76 80.9 204 58.56 204c-12.93 0-23.29-5.85-30-16.91C23 177.76 20 164.69 20 149.31a150.7 150.7 0 0 1 15-64C45.69 63.83 59.54 52 74 52c25.54 0 44.83 36 65.25 74.11c18.41 34.36 37.44 69.89 58.2 69.89c10.12 0 17.89-4.39 23.11-13c4.87-8.09 7.45-19.72 7.45-33.65a142.2 142.2 0 0 0-14.16-60.42C204.7 70.53 193.1 60 182 60c-9.75 0-20.15 8-31.78 24.57a4 4 0 0 1-6.54-4.6c13.42-19.08 25.6-28 38.32-28c14.45 0 28.3 11.83 39 33.32a150.7 150.7 0 0 1 15 64.02"></svg:path>`,
})
export class PhMetaLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorThinIcon],svg[ph-meteor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 124a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m122.83-62.83a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0m-32-18.34l-24 24a4 4 0 0 1-5.66-5.66l24-24a4 4 0 1 1 5.66 5.66m40-40l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 1 1 5.66 5.66M125.17 93.17l72-72a4 4 0 1 1 5.66 5.66l-72 72a4 4 0 1 1-5.66-5.66m18.91 109.26a4 4 0 0 1 0 5.65a68 68 0 1 1-96.16-96.16l82.74-82.75a4 4 0 1 1 5.66 5.66l-82.75 82.74a60 60 0 0 0 84.86 84.86a4 4 0 0 1 5.65 0"></svg:path>`,
})
export class PhMeteorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeThinIcon],svg[ph-metronome-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182.63 113.85L211 82.69a4 4 0 1 0-6-5.38L179.82 105l-19.3-60.68A12 12 0 0 0 149.08 36h-42.16a12 12 0 0 0-11.44 8.36l-50.9 160A12 12 0 0 0 56 220h144a12 12 0 0 0 11.43-15.64Zm7.56 50.15H137l39.37-43.31ZM103.1 46.79a4 4 0 0 1 3.82-2.79h42.16a4 4 0 0 1 3.82 2.79l20.71 65.09L126.23 164H65.81Zm100.12 163.57A4 4 0 0 1 200 212H56a4 4 0 0 1-3.81-5.21L63.27 172h129.46l11.07 34.79a4 4 0 0 1-.58 3.57"></svg:path>`,
})
export class PhMetronomeThinIcon {
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
