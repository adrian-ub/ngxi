import { Component, input } from '@angular/core'

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

@Component({
  standalone: true,
  selector: 'svg[phNumberTwoLightIcon],svg[ph-number-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 208a6 6 0 0 1-6 6H88a6 6 0 0 1-4.8-9.6l72-95.92a34 34 0 0 0-31.88-54.14a34.1 34.1 0 0 0-26.49 20.07a6 6 0 0 1-11-4.81a46.5 46.5 0 0 1 5.43-9.28a46 46 0 0 1 73.48 55.37L100 202h68a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhNumberTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumberZeroLightIcon],svg[ph-number-zero-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.56 64.28C169 44.47 150.43 34 128 34S87.05 44.47 74.44 64.28C63.84 80.94 58 103.57 58 128s5.84 47.06 16.44 63.72C87.05 211.53 105.57 222 128 222s40.95-10.47 53.56-30.28C192.16 175.06 198 152.43 198 128s-5.84-47.06-16.44-63.72M128 210c-40.07 0-58-41.18-58-82s17.93-82 58-82s58 41.18 58 82s-17.93 82-58 82"></svg:path>`,
})
export class PhNumberZeroLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNumpadLightIcon],svg[ph-numpad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 48a14 14 0 1 1-14-14a14 14 0 0 1 14 14m50-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 28a14 14 0 1 0-14-14a14 14 0 0 0 14 14M64 90a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14M64 146a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64 0a14 14 0 1 0 14 14a14 14 0 0 0-14-14m0 56a14 14 0 1 0 14 14a14 14 0 0 0-14-14m64-56a14 14 0 1 0 14 14a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhNumpadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNutLightIcon],svg[ph-nut-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m94.72-94.09l-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.27M218 175.82a2 2 0 0 1-1 1.75l-88 48.18a2 2 0 0 1-1.92 0L39 177.57a2 2 0 0 1-1-1.75V80.18a2 2 0 0 1 1-1.75l88-48.18a2 2 0 0 1 1.92 0l88 48.18a2 2 0 0 1 1 1.75Z"></svg:path>`,
})
export class PhNutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phNyTimesLogoLightIcon],svg[ph-ny-times-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 138a10 10 0 1 1-10 10a10 10 0 0 1 10-10m13.46-36.56l-66.22-30.91A74 74 0 0 0 54 144v.66l71.16-37.95A6 6 0 0 1 134 112v105.76a73.63 73.63 0 0 0 64.61-51.56a6 6 0 0 1 11.45 3.6A86 86 0 1 1 54.57 99.23A34 34 0 0 1 68 34a6 6 0 0 1 2.54.56L189.26 90A22 22 0 0 0 188 46a6 6 0 0 1 0-12a34 34 0 0 1 0 68a6 6 0 0 1-2.54-.56M102 213.27a73.5 73.5 0 0 0 20 4.47V122l-20 10.67Zm-46.73-55.68A74.22 74.22 0 0 0 90 207.47v-68.4Zm46.14-95.38L66.74 46a22 22 0 0 0-4.93 43.05c.86-1 1.75-2.06 2.67-3.07a86 86 0 0 1 36.93-23.77"></svg:path>`,
})
export class PhNyTimesLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOctagonLightIcon],svg[ph-octagon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.9 81.65L174.35 30.1a13.92 13.92 0 0 0-9.9-4.1h-72.9a13.92 13.92 0 0 0-9.9 4.1L30.1 81.65a13.92 13.92 0 0 0-4.1 9.9v72.9a13.92 13.92 0 0 0 4.1 9.9l51.55 51.55a13.92 13.92 0 0 0 9.9 4.1h72.9a13.92 13.92 0 0 0 9.9-4.1l51.55-51.55a13.92 13.92 0 0 0 4.1-9.9v-72.9a13.92 13.92 0 0 0-4.1-9.9m-7.9 82.8a2 2 0 0 1-.59 1.42l-51.55 51.54a2 2 0 0 1-1.41.59h-72.9a2 2 0 0 1-1.42-.59l-51.54-51.54a2 2 0 0 1-.59-1.42v-72.9a2 2 0 0 1 .59-1.42l51.55-51.54a2 2 0 0 1 1.41-.59h72.9a2 2 0 0 1 1.42.59l51.54 51.55a2 2 0 0 1 .59 1.41Z"></svg:path>`,
})
export class PhOctagonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOfficeChairLightIcon],svg[ph-office-chair-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a6 6 0 0 1-6 6h-18.39A46.07 46.07 0 0 1 176 174h-42v28h26a30 30 0 0 1 30 30a6 6 0 0 1-12 0a18 18 0 0 0-18-18h-26v18a6 6 0 0 1-12 0v-18H96a18 18 0 0 0-18 18a6 6 0 0 1-12 0a30 30 0 0 1 30-30h26v-28H80a46.07 46.07 0 0 1-45.61-40H16a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6a34 34 0 0 0 34 34h96a34 34 0 0 0 34-34a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6m-176.57 9.17A14 14 0 0 1 66.14 126l13.72-96a14.07 14.07 0 0 1 13.86-12h68.56a14.07 14.07 0 0 1 13.86 12l13.72 96A14 14 0 0 1 176 142H80a14 14 0 0 1-10.57-4.83m9.06-7.86A2 2 0 0 0 80 130h96a2 2 0 0 0 1.51-.69a2 2 0 0 0 .47-1.59l-13.72-96a2 2 0 0 0-2-1.72H93.72a2 2 0 0 0-2 1.72l-13.72 96a2 2 0 0 0 .49 1.59"></svg:path>`,
})
export class PhOfficeChairLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOnigiriLightIcon],svg[ph-onigiri-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.82 147.6L174 51.67l-.09-.15a54 54 0 0 0-91.74 0l-.09.15l-55.9 95.93A54 54 0 0 0 72.09 230h111.82a54 54 0 0 0 45.91-82.4M162 218H94v-50a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm58.61-21.58a41.47 41.47 0 0 1-36.7 21.58H174v-50a14 14 0 0 0-14-14H96a14 14 0 0 0-14 14v50h-9.91a42 42 0 0 1-35.67-64.15l.08-.14l55.87-95.93a42 42 0 0 1 71.26 0l55.87 95.93l.08.14a41.48 41.48 0 0 1 1.02 42.57Z"></svg:path>`,
})
export class PhOnigiriLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOpenAiLogoLightIcon],svg[ph-open-ai-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 114.56a54 54 0 0 0-58.67-74.73a54 54 0 0 0-94 13.46A54 54 0 0 0 34 141.44a54 54 0 0 0 35.56 73.65A54.5 54.5 0 0 0 83.59 217a53 53 0 0 0 9.06-.78a54 54 0 0 0 94-13.46a54 54 0 0 0 35.35-88.2M183.37 52.5a42 42 0 0 1 29.21 53.14a55 55 0 0 0-5.08-3.33L163 76.62a6 6 0 0 0-6 0l-47 27.13V80.66l41.5-24a41.73 41.73 0 0 1 31.87-4.16M146 138.39l-18 10.39l-18-10.39v-20.78l18-10.39l18 10.39ZM78 72a42 42 0 0 1 72.92-28.43a56 56 0 0 0-5.42 2.74L101 72a6 6 0 0 0-3 5.19v54.27l-20-11.54ZM39.13 85.93a41.75 41.75 0 0 1 27.22-20A55 55 0 0 0 66 72v51.38a6 6 0 0 0 3 5.2l47 27.13l-20 11.55l-41.5-24a42 42 0 0 1-15.37-57.33m33.5 117.57a42 42 0 0 1-29.21-53.14a55 55 0 0 0 5.08 3.33L93 179.38a6 6 0 0 0 6 0l47-27.13v23.09l-41.5 24a41.73 41.73 0 0 1-31.87 4.16M178 184a42 42 0 0 1-72.92 28.43a56 56 0 0 0 5.42-2.74L155 184a6 6 0 0 0 3-5.19v-54.27l20 11.54Zm38.87-13.93a41.75 41.75 0 0 1-27.22 20A55 55 0 0 0 190 184v-51.38a6 6 0 0 0-3-5.2l-47-27.13l20-11.55l41.5 24a42 42 0 0 1 15.37 57.33"></svg:path>`,
})
export class PhOpenAiLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOptionLightIcon],svg[ph-option-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 192a6 6 0 0 1-6 6h-63.06a13.92 13.92 0 0 1-12.52-7.74L96.84 87.11A2 2 0 0 0 95.06 86H32a6 6 0 0 1 0-12h63.06a13.92 13.92 0 0 1 12.52 7.74l51.58 103.15a2 2 0 0 0 1.78 1.11H224a6 6 0 0 1 6 6M152 86h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhOptionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeLightIcon],svg[ph-orange-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.15 72.65A62.08 62.08 0 0 0 198 16a6 6 0 0 0-6-6h-8a62.08 62.08 0 0 0-56 35.42A62.08 62.08 0 0 0 72 10h-8a6 6 0 0 0 0 12h8a50.06 50.06 0 0 1 49.66 44.26a85.95 85.95 0 1 0 39.49 6.39M184 22h1.64A50.07 50.07 0 0 1 136 66h-1.64A50.07 50.07 0 0 1 184 22m-56 204a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74m53.92-65A55.48 55.48 0 0 1 137 205.92a7 7 0 0 1-1 .08a6 6 0 0 1-1-11.92A43.29 43.29 0 0 0 170.08 159a6 6 0 1 1 11.84 2"></svg:path>`,
})
export class PhOrangeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOrangeSliceLightIcon],svg[ph-orange-slice-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 82H8a6 6 0 0 0-6 6a126 126 0 0 0 252 0a6 6 0 0 0-6-6M74.46 150L122 102.48v67.28A81.66 81.66 0 0 1 74.46 150M66 141.54A81.66 81.66 0 0 1 46.24 94h67.28Zm68-39.06L181.54 150A81.66 81.66 0 0 1 134 169.76Zm56 39.06L142.48 94h67.28A81.66 81.66 0 0 1 190 141.54M128 202A114.14 114.14 0 0 1 14.16 94h20a94 94 0 0 0 187.6 0h20A114.14 114.14 0 0 1 128 202"></svg:path>`,
})
export class PhOrangeSliceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phOvenLightIcon],svg[ph-oven-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM74 76a10 10 0 1 1 10 10a10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m22 30H72a6 6 0 0 0-6 6v72a6 6 0 0 0 6 6h112a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 72H78v-60h100Z"></svg:path>`,
})
export class PhOvenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPackageLightIcon],svg[ph-package-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.72 67.91l-88-48.18a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.27M127 30.25a2 2 0 0 1 1.92 0L212.51 76l-33.94 18.57l-84.52-46.26ZM122 223l-83-45.43a2 2 0 0 1-1-1.75V86.66l84 46ZM43.49 76l38.07-20.85l84.51 46.26L128 122.24ZM218 175.82a2 2 0 0 1-1 1.75L134 223v-90.36l36-19.71V152a6 6 0 0 0 12 0v-45.63l36-19.71Z"></svg:path>`,
})
export class PhPackageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushBroadLightIcon],svg[ph-paint-brush-broad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 26H72a38 38 0 0 0-38 38v72a22 22 0 0 0 22 22h48a2 2 0 0 1 2 2.23L98.08 207a7 7 0 0 0-.08 1a30 30 0 0 0 60 0a7 7 0 0 0-.08-1L150 160.23a2 2 0 0 1 2-2.23h48a22 22 0 0 0 22-22V32a6 6 0 0 0-6-6M72 38h106v42a6 6 0 0 0 12 0V38h20v68H46V64a26 26 0 0 1 26-26m128 108h-48a14 14 0 0 0-13.86 16v.15l7.86 46.32a18 18 0 0 1-36 0l7.82-46.34v-.15A14 14 0 0 0 104 146H56a10 10 0 0 1-10-10v-18h164v18a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhPaintBrushBroadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushHouseholdLightIcon],svg[ph-paint-brush-household-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.23 26.77a30.05 30.05 0 0 0-42.43 0l-.32.34l-54.81 64.05l-12.11-12.1a22 22 0 0 0-31.11 0l-76.69 76.69a6 6 0 0 0 0 8.49l80 80a6 6 0 0 0 8.49 0l76.69-76.69a22 22 0 0 0 0-31.11l-12.1-12.11l64-54.81l.34-.32a30.05 30.05 0 0 0 .05-42.43M96 231.51L76.49 212l23.76-23.76a6 6 0 0 0-8.49-8.49L68 203.51L52.49 188l23.76-23.76a6 6 0 0 0-8.49-8.49L44 179.51L24.49 160L72 112.48L143.52 184ZM220.89 60.56l-68.78 58.87a6 6 0 0 0-2.1 4.33a6 6 0 0 0 1.76 4.47l16.68 16.69a10 10 0 0 1 0 14.15L152 175.51L80.49 104l16.44-16.45a10 10 0 0 1 14.15 0l16.69 16.68a6 6 0 0 0 8.8-.34l58.87-68.78a18 18 0 0 1 25.45 25.45"></svg:path>`,
})
export class PhPaintBrushHouseholdLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBrushLightIcon],svg[ph-paint-brush-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 26c-20.8 0-44.11 11.41-69.3 33.9c-18.08 16.16-33.7 35-44.4 49.1A58 58 0 0 0 34 164c0 32.07-20.43 46.39-21.35 47A6 6 0 0 0 16 222h76a58 58 0 0 0 55-76.3c14.08-10.67 32.92-26.32 49.08-44.4C218.59 76.11 230 52.8 230 32a6 6 0 0 0-6-6M92 210H30.65C37.92 200.85 46 185.78 46 164a46 46 0 1 1 46 46m29.49-95.91c3.6-4.67 7.88-10 12.71-15.69a78.2 78.2 0 0 1 23.4 23.4c-5.67 4.83-11 9.11-15.69 12.71a58.4 58.4 0 0 0-20.42-20.42m45.2-.3a90.2 90.2 0 0 0-24.48-24.48C163.05 66.46 191 42 217.56 38.44C214 65 189.54 93 166.69 113.79"></svg:path>`,
})
export class PhPaintBrushLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintBucketLightIcon],svg[ph-paint-bucket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 164.67a6 6 0 0 0-10 0c-.7 1-17 25.72-17 43.33a22 22 0 0 0 44 0c0-17.61-16.31-42.29-17-43.33M232 218a10 10 0 0 1-10-10c0-8.17 5.37-19.92 10-28.34c4.63 8.41 10 20.15 10 28.34a10 10 0 0 1-10 10m1.9-80.82a6 6 0 0 0 2.34-9.94L120.76 11.76a6 6 0 0 0-8.49 0l-42 42l-26-26a6 6 0 0 0-8.49 8.48l26 26l-45.34 45.35a22 22 0 0 0 0 31.11l84.86 84.86a22 22 0 0 0 31.11 0l78.83-78.83Zm-30.14-1.94l-79.83 79.83a10 10 0 0 1-14.14 0l-84.86-84.86a10 10 0 0 1 0-14.14l45.32-45.32l31.62 31.61a26 26 0 0 0 3.75 32a26 26 0 0 0 36.76 0a26 26 0 0 0-32-40.51L78.74 62.26l37.78-37.77l104.37 104.37l-14.79 4.93a6.1 6.1 0 0 0-2.34 1.45m-89.66-29.13a14 14 0 1 1 0 19.82a13.91 13.91 0 0 1 0-19.82"></svg:path>`,
})
export class PhPaintBucketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaintRollerLightIcon],svg[ph-paint-roller-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 90h-18V64a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v26H16a6 6 0 0 0 0 12h18v26a14 14 0 0 0 14 14h152a14 14 0 0 0 14-14v-26h18a2 2 0 0 1 2 2v50a2 2 0 0 1-1.45 1.92l-100.4 28.68A14.06 14.06 0 0 0 122 198v34a6 6 0 0 0 12 0v-34a2 2 0 0 1 1.45-1.92l100.4-28.68A14.06 14.06 0 0 0 246 154v-50a14 14 0 0 0-14-14m-30 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h152a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhPaintRollerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaletteLightIcon],svg[ph-palette-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M199.37 55.31A101.32 101.32 0 0 0 128 26h-1A102 102 0 0 0 26 128c0 42.09 26.07 77.44 68 92.26a30.2 30.2 0 0 0 10.11 1.74A30.06 30.06 0 0 0 134 192a18 18 0 0 1 18-18h46.21a29.82 29.82 0 0 0 29.25-23.31a102.7 102.7 0 0 0 2.54-23.58a101.25 101.25 0 0 0-30.63-71.8M215.76 148a17.89 17.89 0 0 1-17.55 14H152a30 30 0 0 0-30 30a18 18 0 0 1-24 17c-37-13.14-60-44.15-60-81a90 90 0 0 1 89.07-90h.93a90.34 90.34 0 0 1 90 89.22a90.5 90.5 0 0 1-2.24 20.78M138 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-44 24a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 56a10 10 0 1 1-10-10a10 10 0 0 1 10 10m88-56a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhPaletteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPanoramaLightIcon],svg[ph-panorama-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.53 52.9a13.88 13.88 0 0 0-12.12-2.42l-3.48.94C206 56.51 170.87 66 128 66s-78-9.49-96.93-14.58l-3.48-.94A14 14 0 0 0 10 64v128a13.95 13.95 0 0 0 17.61 13.52l3.18-.85C49.7 199.53 84.91 190 128 190s78.3 9.53 97.21 14.66l3.18.85A14 14 0 0 0 246 192V64a13.93 13.93 0 0 0-5.47-11.1M22.78 62.42A2 2 0 0 1 24 62a2 2 0 0 1 .52.08l3.44.92C47.37 68.24 83.54 78 128 78s80.63-9.76 100.06-15l3.44-.92A2 2 0 0 1 234 64v123.57l-61.47-61.47a14 14 0 0 0-19.8 0l-21.42 21.41L85.9 102.1a14 14 0 0 0-19.8 0L22 146.2V64a2 2 0 0 1 .78-1.58M220.41 191a400.4 400.4 0 0 0-56.52-10.86L139.8 156l21.41-21.41a2 2 0 0 1 2.83 0Zm-192.76 2.07l-3.15.86A2 2 0 0 1 22 192v-28.83l52.58-52.58a2 2 0 0 1 2.84 0l67.91 67.91c-5.63-.32-11.42-.5-17.33-.5c-44.69 0-82.28 10.18-100.35 15.07M194 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhPanoramaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPantsLightIcon],svg[ph-pants-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.89 214.26l-22-176A14 14 0 0 0 186 26H70a14 14 0 0 0-13.89 12.26l-22 176A14 14 0 0 0 48 230h40.69a14 14 0 0 0 13.57-10.56L128 120l25.73 99.44A14 14 0 0 0 167.31 230H208a14 14 0 0 0 13.89-15.74m-26.67-116.6A34.07 34.07 0 0 1 166.54 70h25.23ZM70 38h116a2 2 0 0 1 2 1.75L190.27 58H65.73L68 39.75A2 2 0 0 1 70 38m-5.77 32h25.23a34.07 34.07 0 0 1-28.68 27.66Zm26.4 146.49a2 2 0 0 1-1.94 1.51H48a2 2 0 0 1-2-2.25l13.25-105.88A46.07 46.07 0 0 0 101.6 70H122v25.24Zm118.87.83a2 2 0 0 1-1.5.68h-40.69a2 2 0 0 1-1.95-1.56L134 95.24V70h20.4a46.07 46.07 0 0 0 42.35 39.87L210 215.75a2 2 0 0 1-.5 1.57"></svg:path>`,
})
export class PhPantsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneLightIcon],svg[ph-paper-plane-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.17 201.09L140.1 33.16a14 14 0 0 0-24.41 0l-95.88 168a14 14 0 0 0 16.87 20.05L128 190.34l91.33 30.85a14.3 14.3 0 0 0 4.67.81a14 14 0 0 0 12.13-20.91Zm-10.66 8.18a1.87 1.87 0 0 1-2.2.6h-.1L134 179.7V120a6 6 0 0 0-12 0v59.7l-89.2 30.13h-.1a1.87 1.87 0 0 1-2.2-.6a1.84 1.84 0 0 1-.24-2.22L126.14 39a1.93 1.93 0 0 1 1.74-1a2 2 0 0 1 1.78 1.07L225.73 207a1.86 1.86 0 0 1-.22 2.27"></svg:path>`,
})
export class PhPaperPlaneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneRightLightIcon],svg[ph-paper-plane-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.88 115.69l-168-95.88a14 14 0 0 0-20 16.87L73.66 128l-30.85 91.33A14 14 0 0 0 56 238a14.15 14.15 0 0 0 6.93-1.83l167.91-96.07a14 14 0 0 0 0-24.41Zm-5.95 14L57 225.73a2 2 0 0 1-2.86-2.42a.4.4 0 0 0 0-.1L84.3 134H144a6 6 0 0 0 0-12H84.3L54.17 32.8a.3.3 0 0 0 0-.1a1.87 1.87 0 0 1 .6-2.2a1.85 1.85 0 0 1 2.23-.25l168 95.89a1.93 1.93 0 0 1 1 1.74a2 2 0 0 1-1.07 1.78Z"></svg:path>`,
})
export class PhPaperPlaneRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneTiltLightIcon],svg[ph-paper-plane-tilt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.88 30.12a13.83 13.83 0 0 0-13.7-3.58h-.11L20.14 84.77A14 14 0 0 0 18 110.85l85.56 41.64L145.12 238a13.87 13.87 0 0 0 12.61 8c.4 0 .81 0 1.21-.05a13.9 13.9 0 0 0 12.29-10.09l58.2-191.93v-.11a13.83 13.83 0 0 0-3.55-13.7m-8 10.4l-58.15 191.91v.11a2 2 0 0 1-3.76.26l-40.68-83.58l49-49a6 6 0 1 0-8.49-8.49l-49 49L23.15 100a2 2 0 0 1 .31-3.74h.11l191.91-58.18a1.94 1.94 0 0 1 1.92.52a2 2 0 0 1 .52 1.92Z"></svg:path>`,
})
export class PhPaperPlaneTiltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipHorizontalLightIcon],svg[ph-paperclip-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a54.06 54.06 0 0 1-54 54H48a38 38 0 0 1 0-76h144a22 22 0 0 1 0 44H80a6 6 0 0 1 0-12h112a10 10 0 0 0 0-20H48a26 26 0 0 0 0 52h144a42 42 0 0 0 0-84H80a6 6 0 0 1 0-12h112a54.06 54.06 0 0 1 54 54"></svg:path>`,
})
export class PhPaperclipHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaperclipLightIcon],svg[ph-paperclip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.25 123.76a6 6 0 0 1 0 8.49l-82.06 82a54 54 0 0 1-76.36-76.39L149.1 37.14a38 38 0 1 1 53.77 53.72l-99.28 100.68a22 22 0 1 1-31.15-31.09l83.28-84.67a6 6 0 0 1 8.56 8.42L81 168.91a10 10 0 1 0 14.11 14.18L194.35 82.4a26 26 0 1 0-36.74-36.8L58.33 146.28a42 42 0 1 0 59.37 59.44l82.06-82a6 6 0 0 1 8.49.04"></svg:path>`,
})
export class PhPaperclipLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParachuteLightIcon],svg[ph-parachute-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 120a102 102 0 0 0-204 0a6 6 0 0 0 2.27 4.69l.13.11L122 195v23h-10a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12h-10v-23l93.6-70.2a6 6 0 0 0 2.4-4.8m-12.2-6h-43.9c-1.3-42.92-16.5-68.62-28.43-82.3A90.2 90.2 0 0 1 217.8 114M128 31.43A77.1 77.1 0 0 1 143.42 49c13.84 21.08 17.82 46 18.47 65H94.11c1.06-31.88 10.49-52.86 18.47-65A76.7 76.7 0 0 1 128 31.43M157.8 126L128 179.65L98.2 126Zm-73.33 0l24.62 44.32L50 126Zm87.06 0H206l-59.09 44.32Zm-61-94.3C98.6 45.38 83.4 71.08 82.1 114H38.2a90.2 90.2 0 0 1 72.33-82.3"></svg:path>`,
})
export class PhParachuteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParagraphLightIcon],svg[ph-paragraph-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H96a62 62 0 0 0 0 124h42v42a6 6 0 0 0 12 0V54h28v154a6 6 0 0 0 12 0V54h18a6 6 0 0 0 0-12m-70 112H96a50 50 0 0 1 0-100h42Z"></svg:path>`,
})
export class PhParagraphLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParallelogramLightIcon],svg[ph-parallelogram-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.75 48.4A14 14 0 0 0 232 42H88.81A14 14 0 0 0 76 50.25l-64.8 144A14 14 0 0 0 24 214h143.19a14 14 0 0 0 12.81-8.25l64.8-144a14 14 0 0 0-1.05-13.35m-9.93 8.42l-64.8 144a2 2 0 0 1-1.83 1.18H24a2 2 0 0 1-1.83-2.82L87 55.18A2 2 0 0 1 88.81 54H232a2 2 0 0 1 1.83 2.82Z"></svg:path>`,
})
export class PhParallelogramLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phParkLightIcon],svg[ph-park-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 194h-34v-28h26a6 6 0 0 0 5.82-7.46l-32-128a6 6 0 0 0-11.64 0l-32 128A6 6 0 0 0 160 166h26v28h-68v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v20H40a6 6 0 0 0 0 12h10v20H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M192 56.74L216.32 154h-48.64ZM62 142h44v20H62Zm0 32h44v20H62Zm54-80a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14"></svg:path>`,
})
export class PhParkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPasswordLightIcon],svg[ph-password-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0m94.58 56.41L118 119.74V96a6 6 0 0 0-12 0v23.74l-22.58-7.33a6 6 0 1 0-3.71 11.41l22.58 7.33l-14 19.21a6 6 0 1 0 9.7 7.06l14-19.21l14 19.21a6 6 0 0 0 9.7-7.06l-14-19.21l22.58-7.33a6 6 0 1 0-3.71-11.41Zm103.56 3.85a6 6 0 0 0-7.56-3.85L214 119.74V96a6 6 0 0 0-12 0v23.74l-22.58-7.33a6 6 0 1 0-3.71 11.41l22.58 7.33l-13.95 19.21a6 6 0 1 0 9.7 7.06l14-19.21l14 19.21a6 6 0 0 0 9.7-7.06l-13.95-19.21l22.58-7.33a6 6 0 0 0 3.77-7.56"></svg:path>`,
})
export class PhPasswordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPathLightIcon],svg[ph-path-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 170a30.05 30.05 0 0 0-29.4 24H72a34 34 0 0 1 0-68h96a38 38 0 0 0 0-76H72a6 6 0 0 0 0 12h96a26 26 0 0 1 0 52H72a46 46 0 0 0 0 92h98.6a30 30 0 1 0 29.4-36m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhPathLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPatreonLogoLightIcon],svg[ph-patreon-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.61 33.84c-18.45-7.54-40.41-9.74-61.84-6.17c-23 3.82-42.93 13.72-57.58 28.62c-10.88 11.07-24.06 32.65-25.13 72.65c-.69 26.23 4.34 54.87 13.46 76.62c8.77 20.92 20.13 32.44 32 32.44c21.72 0 31.72-19.53 41.39-38.41c7.08-13.82 14.4-28.11 26.21-36.12c6-4.11 14.09-7.21 22.61-10.5C201 144 230 132.81 230 93.17c0-26.42-15.81-48.04-43.39-59.33m-13.2 107.94c-9.17 3.54-17.84 6.88-25 11.76c-14.36 9.73-22.75 26.12-30.15 40.58C109.47 211.23 101.9 226 87.52 226c-5 0-13.18-6.59-20.94-25.08c-8.49-20.26-13.17-47-12.52-71.66c.75-28.16 8.45-51.09 21.69-64.55c18.45-18.78 44.57-26.65 68.86-26.65A100.3 100.3 0 0 1 182.07 45C213.33 57.74 218 80.65 218 93.17c0 31.41-21.66 39.76-44.59 48.61"></svg:path>`,
})
export class PhPatreonLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseCircleLightIcon],svg[ph-pause-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M110 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhPauseCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPauseLightIcon],svg[ph-pause-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 34h-40a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-40a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2ZM96 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhPauseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPawPrintLightIcon],svg[ph-paw-print-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 82a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14M70 108a26 26 0 1 0-26 26a26 26 0 0 0 26-26m-26 14a14 14 0 1 1 14-14a14 14 0 0 1-14 14m48-36a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m72 40a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m22.15 104.61a37.32 37.32 0 0 1-17.82-22.33a42 42 0 0 0-80.66 0a37.26 37.26 0 0 1-17.77 22.3A38 38 0 0 0 88 222a37.6 37.6 0 0 0 14.76-3a66.14 66.14 0 0 1 50.41 0a37.7 37.7 0 0 0 14.83 3a38 38 0 0 0 18.15-71.39M168 210a25.9 25.9 0 0 1-10.21-2.08a78.15 78.15 0 0 0-59.65 0a26 26 0 0 1-22.46-46.82a49.28 49.28 0 0 0 23.51-29.48a30 30 0 0 1 57.62 0a49.27 49.27 0 0 0 23.57 29.5A26 26 0 0 1 168 210"></svg:path>`,
})
export class PhPawPrintLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPaypalLogoLightIcon],svg[ph-paypal-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.54 94.77A53.84 53.84 0 0 0 198 78.66A54 54 0 0 0 144 26H84a14 14 0 0 0-13.58 10.6l-36 144A14 14 0 0 0 48 198h30.07l-3.65 14.6A14 14 0 0 0 88 230h31.5a14 14 0 0 0 13.58-10.6l9-35.88A2 2 0 0 1 144 182h32a54 54 0 0 0 42.56-87.23ZM79.51 186H48a2 2 0 0 1-1.94-2.49l36-144A2 2 0 0 1 84 38h60a42 42 0 0 1 41.69 36.87A54.6 54.6 0 0 0 176 74h-56a14 14 0 0 0-13.59 10.6l-25 99.89a2 2 0 0 1-1.9 1.51m105.86-98.95c-.18 1-.39 2.09-.65 3.14A41.94 41.94 0 0 1 144 122h-34.56l8.62-34.48A2 2 0 0 1 120 86h56a42.4 42.4 0 0 1 9.37 1.05m31.35 51.14A41.94 41.94 0 0 1 176 170h-32a14 14 0 0 0-13.58 10.6l-9 35.89a2 2 0 0 1-1.94 1.51H88a2 2 0 0 1-1.94-2.49l20-80a2 2 0 0 1 2-1.52h36a53.92 53.92 0 0 0 52.38-40.9c.14-.55.25-1.1.36-1.64a42.06 42.06 0 0 1 20 46.73Z"></svg:path>`,
})
export class PhPaypalLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPeaceLightIcon],svg[ph-peace-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.44 89.44 0 0 1-13 46.58l-71-49.7V38.2a90.12 90.12 0 0 1 84 89.8m-96-89.8v86.68l-71 49.7A90 90 0 0 1 122 38.2M57.92 184.4L122 139.53v78.27a89.93 89.93 0 0 1-64.08-33.4M134 217.8v-78.27l64.08 44.87A89.93 89.93 0 0 1 134 217.8"></svg:path>`,
})
export class PhPeaceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenLightIcon],svg[ph-pen-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.91 74.79L181.22 30.1a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1l86.16-86.16l4.61 18.42l-37.6 37.6a6 6 0 1 0 8.49 8.48l40-40a6 6 0 0 0 1.58-5.7l-7.18-28.7l27.26-27.25a14 14 0 0 0 0-19.8M46 208v-33.51L81.52 210H48a2 2 0 0 1-2-2m50-.49L48.48 160L136 72.49L183.52 120ZM217.42 86.1L192 111.52L144.49 64l25.41-25.41a2 2 0 0 1 2.83 0l44.69 44.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibLightIcon],svg[ph-pen-nib-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 92.68a13.94 13.94 0 0 0-4.1-9.9L173.21 14.1a14 14 0 0 0-19.8 0l-28.73 28.73l-58.46 21.93a14 14 0 0 0-8.9 10.8L34.08 215a6 6 0 0 0 5.92 7a6.6 6.6 0 0 0 1-.08l139.44-23.24a14 14 0 0 0 10.81-8.9l21.92-58.46l28.74-28.74a13.92 13.92 0 0 0 4.09-9.9m-66 92.89a2 2 0 0 1-1.54 1.27L57.49 207l52.87-52.88a26 26 0 1 0-8.48-8.48L49 198.53l20.17-121A2 2 0 0 1 70.43 76l56.06-21L201 129.51ZM110 132a14 14 0 1 1 14 14a14 14 0 0 1-14-14m123.41-37.9L208 119.51L136.48 48l25.42-25.42a2 2 0 0 1 2.83 0l68.68 68.69a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPenNibLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPenNibStraightLightIcon],svg[ph-pen-nib-straight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.54 124.77a2 2 0 0 0-.15-.28L190 70.42V32a14 14 0 0 0-14-14H80a14 14 0 0 0-14 14v38.44l-30.4 54.05a2 2 0 0 0-.15.28a14 14 0 0 0 1.27 14.5a1 1 0 0 1 .08.11l86.44 112.28a6 6 0 0 0 9.51 0l86.43-112.28a1 1 0 0 1 .08-.11a14 14 0 0 0 1.28-14.5M80 30h96a2 2 0 0 1 2 2v34H78V32a2 2 0 0 1 2-2m48 116a14 14 0 1 1 14-14a14 14 0 0 1-14 14m81.63-13.88L134 230.38v-73.09a26 26 0 1 0-12 0v73.07l-75.63-98.24a2 2 0 0 1-.2-1.93L75.52 78h105l29.34 52.19a2 2 0 0 1-.23 1.93"></svg:path>`,
})
export class PhPenNibStraightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilCircleLightIcon],svg[ph-pencil-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M106 134h44l14.1 30.56A30 30 0 0 0 128 174a30 30 0 0 0-36.11-9.46Zm5.54-12L128 86.32L144.47 122ZM134 192a18 18 0 0 1 36 0v15.64a89.3 89.3 0 0 1-36 10.14Zm-48 0a18 18 0 0 1 36 0v25.78a89.3 89.3 0 0 1-36-10.14Zm105.64-.36A93 93 0 0 1 182 200v-24a6 6 0 0 0-.55-2.51l-48-104a6 6 0 0 0-10.9 0l-48 104A6 6 0 0 0 74 176v24a93 93 0 0 1-9.64-8.37a90 90 0 1 1 127.28 0Z"></svg:path>`,
})
export class PhPencilCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilLightIcon],svg[ph-pencil-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.9 74.78l-44.69-44.69a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1L225.9 94.58a14 14 0 0 0 0-19.8M48.49 160L136 72.48L155.51 92L68 179.51ZM46 208v-33.52L81.51 210H48a2 2 0 0 1-2-2m50-.49L76.49 188L164 100.48L183.51 120ZM217.41 86.1L192 111.51L144.49 64l25.41-25.42a2 2 0 0 1 2.83 0l44.68 44.69a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPencilLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilLineLightIcon],svg[ph-pencil-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.91 74.79L181.22 30.1a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h168a6 6 0 0 0 0-12H110.49L225.91 94.59a14 14 0 0 0 0-19.8M76.49 188L164 100.48L183.52 120L96 207.51ZM68 179.52L48.49 160L136 72.49L155.52 92ZM46 208v-33.52L81.52 210H48a2 2 0 0 1-2-2M217.42 86.1L192 111.52L144.49 64l25.41-25.41a2 2 0 0 1 2.83 0l44.69 44.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPencilLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilRulerLightIcon],svg[ph-pencil-ruler-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34h-48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-34h26a6 6 0 0 0 0-12h-26v-28h26a6 6 0 0 0 0-12h-26V94h26a6 6 0 0 0 0-12h-26V48a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2ZM76.24 27.76a6 6 0 0 0-8.48 0l-32 32A6 6 0 0 0 34 64v144a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V64a6 6 0 0 0-1.76-4.24ZM46 178V78h20v100ZM78 78h20v100H78Zm-6-37.51L97.51 66h-51ZM96 210H48a2 2 0 0 1-2-2v-18h52v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhPencilRulerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleLightIcon],svg[ph-pencil-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.9 74.78l-44.69-44.69a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1L225.9 94.58a14 14 0 0 0 0-19.8M94.1 209.41a2 2 0 0 1-1.41.59H48a2 2 0 0 1-2-2v-44.69a2 2 0 0 1 .59-1.41L136 72.48L183.51 120ZM217.41 86.1L192 111.51L144.49 64l25.41-25.42a2 2 0 0 1 2.83 0l44.68 44.69a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPencilSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleLineLightIcon],svg[ph-pencil-simple-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.91 74.79L181.22 30.1a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h168a6 6 0 0 0 0-12H110.49L225.91 94.59a14 14 0 0 0 0-19.8M93.52 210H48a2 2 0 0 1-2-2v-44.69a2 2 0 0 1 .59-1.41L136 72.49L183.52 120Zm123.9-123.9L192 111.52L144.49 64l25.41-25.41a2 2 0 0 1 2.83 0l44.69 44.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPencilSimpleLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleSlashLightIcon],svg[ph-pencil-simple-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l49.49 54.47l-54.95 54.95a13.9 13.9 0 0 0-4.1 9.89V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1l51.87-51.9l49.11 54a6 6 0 0 0 8.88-8.08ZM94.1 209.42a2 2 0 0 1-1.41.58H48a2 2 0 0 1-2-2v-44.69a2 2 0 0 1 .59-1.41l54.54-54.54l45.25 49.78ZM225.91 74.79L181.22 30.1a14 14 0 0 0-19.8 0l-41.67 41.67a6 6 0 0 0 8.48 8.49l7.77-7.78L183.52 120l-10.44 10.44a6 6 0 1 0 8.49 8.48l44.34-44.33a14 14 0 0 0 0-19.8m-8.49 11.31L192 111.52L144.49 64l25.42-25.41a2 2 0 0 1 2.82 0l44.69 44.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPencilSimpleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPencilSlashLightIcon],svg[ph-pencil-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l49.49 54.47l-54.95 54.95a13.9 13.9 0 0 0-4.1 9.89V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1l51.87-51.9l49.11 54a6 6 0 0 0 8.88-8.08Zm67.28 91.84L68 179.52L48.48 160l52.65-52.64ZM46 208v-33.52L81.52 210H48a2 2 0 0 1-2-2m50-.49L76.49 188l51.31-51.31l18.58 20.45ZM225.91 74.79L181.22 30.1a14 14 0 0 0-19.8 0l-41.67 41.67a6 6 0 0 0 8.48 8.49l7.77-7.78L155.52 92l-9.11 9.1a6 6 0 1 0 8.49 8.49l9.1-9.11L183.52 120l-10.44 10.44a6 6 0 1 0 8.49 8.48l44.34-44.33a14 14 0 0 0 0-19.8m-8.49 11.31L192 111.52l-23.75-23.76L144.49 64l25.42-25.41a2 2 0 0 1 2.82 0l44.69 44.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPencilSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagonLightIcon],svg[ph-pentagon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.35 89.15l-87.94-68.33l-.13-.1a14 14 0 0 0-16.56 0l-.13.1l-87.94 68.33a14 14 0 0 0-5 15.45l32 107.56v.13A14 14 0 0 0 72 222h112a14 14 0 0 0 13.33-9.71s0-.08 0-.13l32-107.56a14 14 0 0 0-4.98-15.45M217.9 101v.12l-32 107.54A2 2 0 0 1 184 210H72a2 2 0 0 1-1.89-1.34l-32-107.54V101a2 2 0 0 1 .72-2.23l.13-.1l87.91-68.3a2 2 0 0 1 2.28 0l87.91 68.3l.13.1a2 2 0 0 1 .71 2.23"></svg:path>`,
})
export class PhPentagonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPentagramLightIcon],svg[ph-pentagram-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.29 91.67A13.8 13.8 0 0 0 224 82h-62.52l-20.15-62.13a13.93 13.93 0 0 0-26.64-.05L94.51 82H32a14 14 0 0 0-8.21 25.35l50.65 36.44l-19.39 59.84a13.78 13.78 0 0 0 5.09 15.64a13.77 13.77 0 0 0 16.43 0l51.43-37l51.41 37A14 14 0 0 0 201 203.63l-19.42-59.85l50.67-36.46a13.79 13.79 0 0 0 5.04-15.65M126.11 23.49a1.94 1.94 0 0 1 3.79 0l19 58.46h-41.77ZM30.85 97.61a1.86 1.86 0 0 1-.73-2.23A1.88 1.88 0 0 1 32 94h58.62l-12.26 37.8Zm38.69 112a2 2 0 0 1-3.08-2.24l18.23-56.2l33 23.77Zm19-70.42L103.24 94h49.52l14.65 45.16L128 167.51Zm100.95 68.18a2 2 0 0 1-3.1 2.22l-48.12-34.69l33-23.77Zm35.68-109.78l-47.53 34.2L165.38 94H224a1.86 1.86 0 0 1 1.9 1.39a1.83 1.83 0 0 1-.73 2.2"></svg:path>`,
})
export class PhPentagramLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPepperLightIcon],svg[ph-pepper-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.57 42.26A38.07 38.07 0 0 0 128 10a6 6 0 0 0 0 12a26 26 0 0 1 25.38 20.35A62.08 62.08 0 0 0 98 104c0 47.75-26.23 79.68-78 94.93a14 14 0 0 0 1.56 27.24A262.5 262.5 0 0 0 66.81 230c40.36 0 85.23-9 116.19-35c25.88-21.71 39-52.33 39-91a62.06 62.06 0 0 0-56.43-61.74M160 54a50.09 50.09 0 0 1 47.82 35.38L192 97.28l-29.32-14.66a6 6 0 0 0-5.36 0L128 97.28l-15.81-7.91A50.07 50.07 0 0 1 160 54m15.28 131.82C150.15 206.89 95.36 227 23.67 214.33a1.88 1.88 0 0 1-1.67-1.89a1.81 1.81 0 0 1 1.43-2C80.06 193.73 110 156.92 110 104c0-.76 0-1.51.06-2.26l15.26 7.63a6 6 0 0 0 5.36 0L160 94.69l29.32 14.66a6 6 0 0 0 5.36 0l15.26-7.63c0 .75.06 1.5.06 2.26c0 35.02-11.68 62.51-34.72 81.83Z"></svg:path>`,
})
export class PhPepperLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPercentLightIcon],svg[ph-percent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 60.23l-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 1 1 8.48 8.49ZM52 100a34 34 0 1 1 24 10a33.78 33.78 0 0 1-24-10m2-24a22 22 0 1 0 6.44-15.56A21.86 21.86 0 0 0 54 76m160 104a34 34 0 1 1-10-24a33.78 33.78 0 0 1 10 24m-12 0a21.87 21.87 0 0 0-6.44-15.56A22 22 0 1 0 202 180"></svg:path>`,
})
export class PhPercentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonArmsSpreadLightIcon],svg[ph-person-arms-spread-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 70a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m101.55 66.14A17.66 17.66 0 0 0 212 74H44a18 18 0 0 0-7.55 34.34h.1l52.32 23l-21.44 81.5A18 18 0 0 0 84 238a18.07 18.07 0 0 0 16.19-10.14L128 180l27.81 47.91a18 18 0 0 0 32.73-14.94l-21.44-81.5l52.32-23h.1a17.66 17.66 0 0 0 10.03-20.33m-15 9.29l-56.95 25.08a6 6 0 0 0-3.39 7l22.87 86.93a8 8 0 0 0 .37 1a6 6 0 0 1-10.88 5.07a4 4 0 0 0-.24-.48L133.19 165a6 6 0 0 0-10.38 0l-33.12 57.05c-.09.16-.17.31-.25.48a6 6 0 0 1-8 2.9a6 6 0 0 1-2.9-8a8 8 0 0 0 .37-1l22.87-86.93a6 6 0 0 0-3.39-7L41.47 97.43A6 6 0 0 1 44 86h168a6 6 0 0 1 2.56 11.43Z"></svg:path>`,
})
export class PhPersonArmsSpreadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonLightIcon],svg[ph-person-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 70a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m88.88 113.42l-45.21-51.26A30 30 0 0 0 149.17 74h-42.34a30 30 0 0 0-22.5 10.15l-45.21 51.27A18 18 0 0 0 64.46 161l21.11-16.93l-18.13 68.85a18 18 0 0 0 32.75 14.94L128 180l27.81 47.91a18 18 0 0 0 32.75-14.94l-18.13-68.87l21.11 16.9a18 18 0 0 0 25.34-25.56Zm-8.63 16.82a6 6 0 0 1-8.49 0a4 4 0 0 0-.49-.44l-35.51-28.48a6 6 0 0 0-9.56 6.2l22.87 86.93a8 8 0 0 0 .37 1a6 6 0 0 1-10.88 5.07a4 4 0 0 0-.25-.48L133.19 165a6 6 0 0 0-10.38 0l-33.12 57.05a4 4 0 0 0-.25.48a6 6 0 0 1-10.88-5.07a8 8 0 0 0 .37-1l22.87-86.93a6 6 0 0 0-2.53-6.53a6.07 6.07 0 0 0-3.27-1a6 6 0 0 0-3.76 1.32L56.73 151.8a4 4 0 0 0-.49.44a6 6 0 0 1-8.49-8.49l.26-.27l45.32-51.39a18 18 0 0 1 13.5-6.09h42.34a18 18 0 0 1 13.5 6.09L208 143.48l.26.27a6 6 0 0 1-.01 8.49"></svg:path>`,
})
export class PhPersonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleBikeLightIcon],svg[ph-person-simple-bike-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 78a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m36 100a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26M56 138a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m136-84h-40a6 6 0 0 1-4.24-1.76L120 88.49L96.49 112l35.75 35.76A6 6 0 0 1 134 152v48a6 6 0 0 1-12 0v-45.51l-38.24-38.25a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0L154.49 106H192a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhPersonSimpleBikeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleLightIcon],svg[ph-person-simple-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M114 80a14 14 0 1 1 14 14a14 14 0 0 1-14-14m68 32a6 6 0 0 1-6 6h-42v16.18l31 46.49a6 6 0 1 1-10 6.66l-27-40.51l-27 40.51a6 6 0 1 1-10-6.66l31-46.49V118H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPersonSimpleCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleHikeLightIcon],svg[ph-person-simple-hike-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m46 114v88a6 6 0 0 1-12 0v-82.19c-26.23-1.73-34.76-14.89-42.35-26.59c-3.43-5.3-6.68-10.31-11.5-14.52L117 143.61l38.52 27.51A6 6 0 0 1 158 176v56a6 6 0 0 1-12 0v-52.91l-33.92-24.23l-34.58 79.53a6 6 0 0 1-11-4.78L124 97.29a6 6 0 0 1 8.25-2.94a39 39 0 0 1 7.65 5.21c6.15 5.34 10 11.33 13.79 17.13C161.44 128.59 167.54 138 192 138a6 6 0 0 1 6 6m-126 6a6 6 0 0 0 5.52-3.64l24-56a6 6 0 0 0-3.16-7.88l-28-12a6 6 0 0 0-7.87 3.16l-24 56a6 6 0 0 0 3.15 7.87l28 12A6 6 0 0 0 72 150m-20.12-21.15l19.27-45l17 7.27l-19.27 45Z"></svg:path>`,
})
export class PhPersonSimpleHikeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleLightIcon],svg[ph-person-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m101.14 101.09a6 6 0 0 1-8.23 2c-.37-.21-36.49-21.43-86.91-23v39.61l62.48 70.3a6 6 0 0 1-9 8L128 161l-59.52 67a6 6 0 0 1-9-8L122 149.72v-39.61c-50.42 1.6-86.55 22.82-86.92 23a6 6 0 0 1-6.17-10.29C30.6 121.84 71 98 128 98s97.39 23.84 99.09 24.86a6 6 0 0 1 2.05 8.23"></svg:path>`,
})
export class PhPersonSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleRunLightIcon],svg[ph-person-simple-run-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 86a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m66.49 100.86c-.59.27-7.17 3.13-18.88 3.13c-13.86 0-34.9-4-61.73-21a166 166 0 0 1-17.43 36.51c9.43 2.78 22 7.72 33.19 16.26C172.46 188.05 182 207.65 182 232a6 6 0 0 1-12 0c0-44-37.23-59.18-56.91-64.11q-1.2 1.55-2.46 3.09c-19.25 23.31-43.34 35.45-70.11 35.45a91 91 0 0 1-9.12-.43a6 6 0 0 1 1.2-12c26.63 2.66 49.77-7.66 68.77-30.69c13.16-15.94 21.94-35.51 26.08-49.15c-40.51-24.52-66.59-4.78-67.72-3.89a6 6 0 0 1-7.48-9.38c.37-.3 9.39-7.43 24.76-10c13.86-2.31 35.92-1.3 62.36 16.67c47.14 32 73.88 20.47 74.14 20.35a6 6 0 1 1 5 10.92Z"></svg:path>`,
})
export class PhPersonSimpleRunLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSkiLightIcon],svg[ph-person-simple-ski-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 86a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14M38.32 85.76l111.47 32.51l6 6A6 6 0 0 0 160 126h40a6 6 0 0 0 0-12h-37.51l-30.25-30.25a6 6 0 0 0-8.48 0l-11.17 11.17l-70.91-20.68a6 6 0 1 0-3.36 11.52M128 96.48l4.14 4.14l-6.41-1.87Zm107.33 106.1a67.79 67.79 0 0 1-56.7 8.69L22.32 165.75a6 6 0 1 1 3.36-11.52l77.13 22.46L132.55 147l-46.2-13.2a6 6 0 0 1 3.3-11.54l56 16a6 6 0 0 1 2.59 10L116 180.52l66 19.23a55.79 55.79 0 0 0 46.68-7.15a6 6 0 1 1 6.66 10Z"></svg:path>`,
})
export class PhPersonSimpleSkiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSnowboardLightIcon],svg[ph-person-simple-snowboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 78a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m53.69 76.24l-136-40a6 6 0 1 0-3.38 11.51l43.45 12.78l-35.84 53.77l-46.13-13.37a23.19 23.19 0 0 0-20.54 3.75a23 23 0 0 0-9.25 18.5a23.32 23.32 0 0 0 16.77 22.25l157.44 45.63a23.7 23.7 0 0 0 6.58.94a23.17 23.17 0 0 0 6.44-45.44l-53.52-15.51L165 137.34a6 6 0 0 0-3.31-9.11l-38-11l10.11-15.16l80.49 23.67a5.8 5.8 0 0 0 1.71.26a6 6 0 0 0 1.69-11.76M202 206.81a11.05 11.05 0 0 1-4.46 8.9a11.26 11.26 0 0 1-10 1.82L30.11 171.9A11.24 11.24 0 0 1 22 161.18a11.05 11.05 0 0 1 4.46-8.9a11.26 11.26 0 0 1 10-1.82l157.44 45.63a11.24 11.24 0 0 1 8.1 10.72m-51.56-69.34l-18.83 28.07L98 155.8l18.73-28.09Z"></svg:path>`,
})
export class PhPersonSimpleSnowboardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleSwimLightIcon],svg[ph-person-simple-swim-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 102a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m44.62 132.58a6 6 0 0 1-.79 8.45c-16.87 14-32 19-45.75 19c-18.19 0-34.13-8.65-48.94-16.7c-26-14.11-48.44-26.31-81.31 1a6 6 0 1 1-7.66-9.33c39.13-32.45 68.65-16.41 94.69-2.27s48.44 26.31 81.31-1a6 6 0 0 1 8.45.85M36.17 149a6 6 0 1 0 7.66 9.24c32.87-27.26 55.32-15.07 81.31-1C140 165.34 155.89 174 174.08 174c13.79 0 28.88-5 45.75-19a6 6 0 1 0-7.66-9.24c-7.48 6.2-14.43 10.36-21 12.92l-54.81-54.82A101.3 101.3 0 0 0 64.24 74H40a6 6 0 0 0 0 12h24.24a89.4 89.4 0 0 1 45.15 12.13l-32.1 32.1c-12.52 1.03-26.11 6.34-41.12 18.77m91.71-36.64l49.54 49.55c-16.3 1.26-30.78-6.6-46.56-15.17c-11.63-6.32-24-13-37.51-15.6L119.5 105a94 94 0 0 1 8.38 7.37Z"></svg:path>`,
})
export class PhPersonSimpleSwimLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiLightIcon],svg[ph-person-simple-tai-chi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m94 74a6 6 0 0 1-6 6h-82v30l52.36 22.45A6 6 0 0 1 190 168v48a6 6 0 0 1-12 0v-44l-48.84-21L52 220.46a6 6 0 0 1-8-8.92l78-70.21V110H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPersonSimpleTaiChiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleThrowLightIcon],svg[ph-person-simple-throw-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 86a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18M50 96a14 14 0 1 1 14 14a14 14 0 0 1-14-14m170.68 13.35a6 6 0 0 1-8.41 1c-1.17-.92-25.06-18.91-62.52.94a214.6 214.6 0 0 1-3.23 32.38l33.32 27.77a6 6 0 0 1 1.85 6.51l-16 48a6 6 0 0 1-11.38-3.8L169 178l-25.49-21.25a141 141 0 0 1-5.86 17.07C124.15 206 100 227.48 65.73 237.75A6.1 6.1 0 0 1 64 238a6 6 0 0 1-1.72-11.75c64.82-19.45 73.42-78.76 75.11-107.41C109 137.65 86.8 142 72.39 142c-11.71 0-18.29-2.86-18.88-3.13a6 6 0 1 1 5-10.92c.21.09 27.6 11.28 74.14-20.35c26.44-18 48.5-19 62.36-16.67c15.37 2.57 24.39 9.7 24.76 10a6 6 0 0 1 .91 8.42"></svg:path>`,
})
export class PhPersonSimpleThrowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleWalkLightIcon],svg[ph-person-simple-walk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m62 114a6 6 0 0 1-6 6c-34.48 0-51.06-16.75-65.7-31.52c-3.47-3.51-6.75-6.82-10.15-9.78L117 143.61l38.52 27.51A6 6 0 0 1 158 176v56a6 6 0 0 1-12 0v-52.91l-33.92-24.23l-34.58 79.53a6 6 0 0 1-11-4.78l55-126.61c-10.18-2.75-23.07 0-38.51 8.29a165.8 165.8 0 0 0-30.92 22a6 6 0 0 1-8.22-8.74a175.4 175.4 0 0 1 33.27-23.77c25.93-14 47.64-14.39 62.77-1.26c3.77 3.27 7.4 6.93 10.9 10.47c13.62 13.75 27.69 28 57.17 28A6 6 0 0 1 214 144"></svg:path>`,
})
export class PhPersonSimpleWalkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPerspectiveLightIcon],svg[ph-perspective-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 122h-18V48a14 14 0 0 0-16.5-13.77l-160 29.09A14 14 0 0 0 34 77.09V122H16a6 6 0 0 0 0 12h18v44.91a14 14 0 0 0 11.5 13.77l160 29.09a14 14 0 0 0 2.5.23a14 14 0 0 0 14-14v-74h18a6 6 0 0 0 0-12M46 77.09a2 2 0 0 1 1.64-2l160-29.1h.37a2 2 0 0 1 2 2v74H46ZM210 208a2 2 0 0 1-.72 1.53a2 2 0 0 1-1.64.44l-160-29.1a2 2 0 0 1-1.64-2V134h164Z"></svg:path>`,
})
export class PhPerspectiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneCallLightIcon],svg[ph-phone-call-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.2 46.45a6 6 0 0 1 7.35-4.25a84.24 84.24 0 0 1 60.25 60.25a6 6 0 0 1-4.25 7.35a6 6 0 0 1-1.55.2a6 6 0 0 1-5.8-4.45a72.34 72.34 0 0 0-51.75-51.75a6 6 0 0 1-4.25-7.35m-3.75 39.35C157 89.68 166.32 99 170.2 113.55A6 6 0 0 0 176 118a6 6 0 0 0 1.55-.2a6 6 0 0 0 4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6 6 0 1 0-3.1 11.6m79.44 97A54.25 54.25 0 0 1 168 230C89.7 230 26 166.3 26 88a54.25 54.25 0 0 1 47.17-53.89a14 14 0 0 1 14.56 8.39l21.1 47.1a14 14 0 0 1-1.12 13.28a6 6 0 0 1-.42.57l-21.07 25.06a1.89 1.89 0 0 0 0 1.67c7.66 15.68 24.1 32 40 39.65a1.88 1.88 0 0 0 1.68-.06l24.69-21a5 5 0 0 1 .56-.42a14 14 0 0 1 13.28-1.22l47.24 21.17a14 14 0 0 1 8.22 14.53ZM210 181.32a2 2 0 0 0-1.21-2l-47.25-21.17a1.92 1.92 0 0 0-1.6.1l-24.68 21c-.18.15-.37.29-.56.42a14 14 0 0 1-13.77 1c-18.36-8.87-36.66-27-45.53-45.19a14 14 0 0 1 .91-13.73a5 5 0 0 1 .43-.57l21.05-25.09a2 2 0 0 0 0-1.67L76.74 47.31A2 2 0 0 0 74.9 46h-.23A42.24 42.24 0 0 0 38 88c0 71.68 58.32 130 130 130a42.24 42.24 0 0 0 42-36.68"></svg:path>`,
})
export class PhPhoneCallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneDisconnectLightIcon],svg[ph-phone-disconnect-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.19 91.55c-55.39-55.4-149-55.4-204.38 0c-19.25 19.27-21.11 47.67-4.52 69.06a14 14 0 0 0 16.1 4.39l49-17.38l.22-.09a13.93 13.93 0 0 0 8.53-10.25l5.9-29.52a1.93 1.93 0 0 1 1.21-1.47a78.53 78.53 0 0 1 51.18-.11a1.93 1.93 0 0 1 1.22 1.45l6.21 29.75a14 14 0 0 0 8.5 10.14l.23.08l49 17.4a14 14 0 0 0 16.1-4.42c16.61-21.36 14.75-49.76-4.5-69.03m-5 61.71a2 2 0 0 1-2.29.58l-.22-.09l-49-17.38a2 2 0 0 1-1.08-1.37l-6.22-29.74a14 14 0 0 0-9.06-10.35a90.53 90.53 0 0 0-59 .13a14 14 0 0 0-9 10.45L83.37 135a2 2 0 0 1-1.15 1.44l-48.94 17.31l-.22.09a2 2 0 0 1-2.29-.58c-13-16.74-11.56-38.12 3.53-53.22c25.39-25.4 59.55-38.1 93.7-38.1s68.31 12.7 93.7 38.1c15.09 15.1 16.51 36.48 3.53 53.22ZM222 200a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPhoneDisconnectLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneIncomingLightIcon],svg[ph-phone-incoming-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.59 168.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a5 5 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L87.73 42.49a14 14 0 0 0-14.56-8.38A54.25 54.25 0 0 0 26 88c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M168 218C96.32 218 38 159.68 38 88a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 168 218m-22-114V64a6 6 0 0 1 12 0v25.51l37.76-37.75a6 6 0 0 1 8.48 8.48L166.48 98H192a6 6 0 0 1 0 12h-40a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhPhoneIncomingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneLightIcon],svg[ph-phone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210"></svg:path>`,
})
export class PhPhoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneListLightIcon],svg[ph-phone-list-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.59 168.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.89 1.89 0 0 1 0-1.67l21.07-25.06a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L87.73 42.49a14 14 0 0 0-14.56-8.38A54.25 54.25 0 0 0 26 88c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M168 218C96.32 218 38 159.68 38 88a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 168 218M138 64a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6m0 40a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhPhoneListLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneOutgoingLightIcon],svg[ph-phone-outgoing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.76 108.24a6 6 0 0 1 0-8.48L185.52 62H160a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6v40a6 6 0 0 1-12 0V70.48l-37.76 37.76a6 6 0 0 1-8.48 0m74.13 74.59A54.25 54.25 0 0 1 168 230C89.7 230 26 166.3 26 88a54.24 54.24 0 0 1 47.17-53.89a14 14 0 0 1 14.56 8.38l21.1 47.11a14 14 0 0 1-1.12 13.27a6 6 0 0 1-.42.58l-21.07 25a1.91 1.91 0 0 0 0 1.68c7.66 15.68 24.1 32 40 39.65a1.88 1.88 0 0 0 1.68-.06l24.69-21a5 5 0 0 1 .56-.42a14 14 0 0 1 13.28-1.22l47.24 21.17a14 14 0 0 1 8.22 14.58M210 181.32a2 2 0 0 0-1.21-2l-47.25-21.17a1.92 1.92 0 0 0-1.6.1l-24.68 21c-.18.15-.37.29-.56.42a14 14 0 0 1-13.77 1c-18.36-8.87-36.66-27-45.53-45.19a14 14 0 0 1 .91-13.73a5 5 0 0 1 .43-.57l21.05-25.09a2 2 0 0 0 0-1.67L76.74 47.31A2 2 0 0 0 74.9 46h-.23A42.23 42.23 0 0 0 38 88c0 71.68 58.32 130 130 130a42.24 42.24 0 0 0 42-36.68"></svg:path>`,
})
export class PhPhoneOutgoingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePauseLightIcon],svg[ph-phone-pause-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.59 168.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.89 1.89 0 0 1 0-1.67l21.07-25.06c.15-.18.29-.38.42-.57a14 14 0 0 0 1.12-13.28L87.73 42.49a14 14 0 0 0-14.56-8.38A54.25 54.25 0 0 0 26 88c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M168 218C96.32 218 38 159.68 38 88a42.24 42.24 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 168 218m26-114V48a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m-40 0V48a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhPhonePauseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhonePlusLightIcon],svg[ph-phone-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.59 168.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.89 1.89 0 0 1 0-1.67l21.07-25.06a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L87.73 42.49a14 14 0 0 0-14.56-8.38A54.25 54.25 0 0 0 26 88c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M168 218C96.32 218 38 159.68 38 88a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 168 218M138 80a6 6 0 0 1 6-6h26V48a6 6 0 0 1 12 0v26h26a6 6 0 0 1 0 12h-26v26a6 6 0 0 1-12 0V86h-26a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhPhonePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneSlashLightIcon],svg[ph-phone-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l29.52 32.51a139.3 139.3 0 0 0-47.27 31.08c-19.25 19.26-21.11 47.65-4.52 69a14 14 0 0 0 16.1 4.41l49-17.37l.22-.09a13.93 13.93 0 0 0 8.53-10.25l5.9-29.51a2 2 0 0 1 1.21-1.47a80 80 0 0 1 10-2.75L203.56 220a6 6 0 0 0 8.88-8.08Zm45.85 75a14 14 0 0 0-9 10.45L83.37 151a2 2 0 0 1-1.15 1.43l-48.94 17.34l-.22.08a2 2 0 0 1-2.29-.58c-13-16.73-11.56-38.11 3.53-53.19A127.9 127.9 0 0 1 81.75 86l21.34 23.48c-1.62.52-3.22.99-4.8 1.52m136.42 65.61a14 14 0 0 1-16.1 4.41l-9.28-3.29a6 6 0 1 1 4-11.31l9.38 3.33l.22.08a2 2 0 0 0 2.29-.58c13-16.73 11.56-38.11-3.53-53.19C195.64 90 158.86 76.2 120.83 78.19a6 6 0 1 1-.63-12c41.44-2.15 81.52 12.93 110 41.39c19.24 19.27 21.1 47.66 4.51 69.05Z"></svg:path>`,
})
export class PhPhoneSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneTransferLightIcon],svg[ph-phone-transfer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 72a6 6 0 0 1 6-6h57.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L201.51 78H144a6 6 0 0 1-6-6m83.89 110.83A54.25 54.25 0 0 1 168 230C89.7 230 26 166.3 26 88a54.25 54.25 0 0 1 47.17-53.89a14 14 0 0 1 14.56 8.39l21.1 47.11a14 14 0 0 1-1.12 13.27a6 6 0 0 1-.42.57l-21.07 25.06a1.89 1.89 0 0 0 0 1.67c7.66 15.69 24.1 32 40 39.65a1.88 1.88 0 0 0 1.68-.06l24.69-21a5 5 0 0 1 .56-.42a14 14 0 0 1 13.28-1.22l47.24 21.17a14 14 0 0 1 8.22 14.53M210 181.32a2 2 0 0 0-1.21-2l-47.25-21.17a2 2 0 0 0-1.61.1l-24.67 21c-.18.15-.37.29-.56.42a14 14 0 0 1-13.77 1c-18.36-8.87-36.66-27-45.53-45.19a14 14 0 0 1 .91-13.73a5 5 0 0 1 .43-.57l21.05-25.09a2 2 0 0 0 0-1.67L76.74 47.31A2 2 0 0 0 74.9 46h-.23A42.24 42.24 0 0 0 38 88c0 71.68 58.32 130 130 130a42.24 42.24 0 0 0 42-36.68"></svg:path>`,
})
export class PhPhoneTransferLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhoneXLightIcon],svg[ph-phone-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.76 99.76L167.52 80l-19.76-19.76a6 6 0 0 1 8.48-8.48L176 71.51l19.76-19.75a6 6 0 0 1 8.48 8.48L184.48 80l19.76 19.76a6 6 0 1 1-8.48 8.48L176 88.48l-19.76 19.76a6 6 0 0 1-8.48-8.48m74.13 83.07A54.25 54.25 0 0 1 168 230C89.7 230 26 166.3 26 88a54.25 54.25 0 0 1 47.17-53.89a14 14 0 0 1 14.56 8.38l21.1 47.11a14 14 0 0 1-1.12 13.28a6 6 0 0 1-.42.57l-21.07 25.06a1.89 1.89 0 0 0 0 1.67c7.66 15.68 24.1 32 40 39.65a1.88 1.88 0 0 0 1.68-.06l24.69-21a5 5 0 0 1 .56-.42a14 14 0 0 1 13.28-1.22l47.24 21.17a14 14 0 0 1 8.22 14.53M210 181.32a2 2 0 0 0-1.21-2l-47.25-21.17a1.92 1.92 0 0 0-1.6.1l-24.68 21c-.18.15-.37.29-.56.42a14 14 0 0 1-13.77 1c-18.36-8.87-36.66-27-45.53-45.19a14 14 0 0 1 .91-13.73a5 5 0 0 1 .43-.57l21.05-25.09a2 2 0 0 0 0-1.67L76.74 47.31A2 2 0 0 0 74.9 46h-.23A42.24 42.24 0 0 0 38 88c0 71.68 58.32 130 130 130a42.24 42.24 0 0 0 42-36.68"></svg:path>`,
})
export class PhPhoneXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPhosphorLogoLightIcon],svg[ph-phosphor-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 34H72a6 6 0 0 0-6 6v128a78.09 78.09 0 0 0 78 78a6 6 0 0 0 6-6v-66h2a70 70 0 0 0 0-140M78 62.91L133.74 162H78Zm60 82.19L82.26 46H138ZM78.28 174H138v59.73A66.1 66.1 0 0 1 78.28 174M152 162h-2V46h2a58 58 0 0 1 0 116"></svg:path>`,
})
export class PhPhosphorLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiLightIcon],svg[ph-pi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 172a34 34 0 0 1-68 0V70H94v130a6 6 0 0 1-12 0V70H72a42 42 0 0 0-42 42a6 6 0 0 1-12 0a54.06 54.06 0 0 1 54-54h152a6 6 0 0 1 0 12h-50v102a22 22 0 0 0 44 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhPiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPianoKeysLightIcon],svg[ph-piano-keys-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M78 46h28v92H78Zm34 104a6 6 0 0 0 6-6V46h20v98a6 6 0 0 0 6 6h10v60h-52v-60Zm38-12V46h28v92ZM46 208V48a2 2 0 0 1 2-2h18v98a6 6 0 0 0 6 6h18v60H48a2 2 0 0 1-2-2m164 0a2 2 0 0 1-2 2h-42v-60h18a6 6 0 0 0 6-6V46h18a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhPianoKeysLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableLightIcon],svg[ph-picnic-table-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 130h-48.29l-30-60H192a6 6 0 0 0 0-12H64a6 6 0 0 0 0 12h22.29l-30 60H8a6 6 0 0 0 0 12h42.29l-23.66 47.32a6 6 0 0 0 10.74 5.36L63.71 142h128.58l26.34 52.68a6 6 0 1 0 10.74-5.36L205.71 142H248a6 6 0 0 0 0-12m-178.29 0l30-60h56.58l30 60Z"></svg:path>`,
})
export class PhPicnicTableLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPictureInPictureLightIcon],svg[ph-picture-in-picture-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M38 192V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v58h-82a6 6 0 0 0-6 6v66H40a2 2 0 0 1-2-2m178 2h-74v-60h76v58a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhPictureInPictureLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPiggyBankLightIcon],svg[ph-piggy-bank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 116a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-38-50h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m94 46v32a22 22 0 0 1-22 22h-3.77l-16.68 46.71a14 14 0 0 1-13.19 9.29h-12.72a14 14 0 0 1-13.19-9.29l-2.39-6.71h-60.12l-2.39 6.71A14 14 0 0 1 86.36 222H73.64a14 14 0 0 1-13.19-9.29l-12.69-35.53a85.72 85.72 0 0 1-21.47-50.24A18 18 0 0 0 14 144a6 6 0 0 1-12 0a30 30 0 0 1 24.19-29.43A86.1 86.1 0 0 1 112 34h104a6 6 0 0 1 0 12h-28.18a85.92 85.92 0 0 1 35.12 39.83c.6 1.38 1.16 2.77 1.68 4.18A22 22 0 0 1 246 112m-12 0a10 10 0 0 0-10-10h-3.66a6 6 0 0 1-5.73-4.2a71 71 0 0 0-2.68-7.19A74 74 0 0 0 144 46h-32a74 74 0 0 0-54.56 124a5.8 5.8 0 0 1 1.22 2l13.09 36.64a2 2 0 0 0 1.89 1.36h12.72a2 2 0 0 0 1.89-1.33L92.06 198a6 6 0 0 1 5.65-4h68.58a6 6 0 0 1 5.65 4l3.81 10.69a2 2 0 0 0 1.89 1.33h12.72a2 2 0 0 0 1.89-1.33l18.1-50.69a6 6 0 0 1 5.65-4h8a10 10 0 0 0 10-10Z"></svg:path>`,
})
export class PhPiggyBankLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPillLightIcon],svg[ph-pill-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215 41a51.28 51.28 0 0 0-72.5 0L41 142.5a51.26 51.26 0 0 0 72.49 72.5L215 113.5a51.31 51.31 0 0 0 0-72.5M105 206.5A39.26 39.26 0 0 1 49.48 151L96 104.49L151.52 160ZM206.52 105L160 151.51L104.48 96L151 49.5a39.26 39.26 0 0 1 55.52 55.5m-18.26-21.24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.49-8.48l24-24a6 6 0 0 1 8.49 0"></svg:path>`,
})
export class PhPillLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPingPongLightIcon],svg[ph-ping-pong-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 196.2a14 14 0 0 0-5.86-10.2l-39.93-28.52l18.62-18.62a37.65 37.65 0 0 0 10.46-34a97.43 97.43 0 0 0-34.69-56.74a99.82 99.82 0 0 0-64-22.11a98.29 98.29 0 0 0-96.6 96.6a100.1 100.1 0 0 0 22.11 64a97.4 97.4 0 0 0 56.72 34.69a37.65 37.65 0 0 0 34-10.46l18.62-18.62L186 232.14a14 14 0 0 0 10.2 5.86c.39 0 .78.05 1.16.05a14 14 0 0 0 9.89-4.1l26.65-26.64a14 14 0 0 0 4.1-11.11M57.47 179.08A88.12 88.12 0 0 1 38 122.77A86.29 86.29 0 0 1 122.77 38a88.2 88.2 0 0 1 56.31 19.46a87.3 87.3 0 0 1 20 22.93L80.4 199.12a87.1 87.1 0 0 1-22.93-20.04m167.94 19.69l-26.64 26.64a2 2 0 0 1-3-.25l-32.64-45.69a6 6 0 0 0-4.43-2.47h-.49a6 6 0 0 0-4.24 1.76l-23.63 23.62a25.69 25.69 0 0 1-23.17 7.17a82 82 0 0 1-15.49-4.72L204.8 91.68a82 82 0 0 1 4.72 15.49a25.67 25.67 0 0 1-7.18 23.17L178.72 154a6 6 0 0 0 .75 9.12l45.69 32.64a2 2 0 0 1 .25 3Z"></svg:path>`,
})
export class PhPingPongLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPintGlassLightIcon],svg[ph-pint-glass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.49 28a6 6 0 0 0-4.49-2H56a6 6 0 0 0-6 6.71l23.16 193A14 14 0 0 0 87.1 238h81.8a14 14 0 0 0 13.9-12.33L206 32.71a6 6 0 0 0-1.51-4.71m-11.25 10l-3.36 28H66.12l-3.36-28Zm-22.35 186.24a2 2 0 0 1-2 1.76H87.1a2 2 0 0 1-2-1.76L67.56 78h120.88Z"></svg:path>`,
})
export class PhPintGlassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinterestLogoLightIcon],svg[ph-pinterest-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 112c0 22.05-7.7 42.19-21.68 56.73c-13 13.52-30.61 21.27-48.32 21.27c-19.42 0-31.55-7.07-38.63-13.64l-11.53 49A6 6 0 0 1 96 230a6 6 0 0 1-1.37-.16a6 6 0 0 1-4.47-7.21l32-136a6 6 0 1 1 11.68 2.74L116.75 162c2.8 4.33 12.46 16 35.25 16c28.51 0 58-24.69 58-66a74 74 0 1 0-138.1 37a6 6 0 1 1-10.39 6A86 86 0 1 1 222 112"></svg:path>`,
})
export class PhPinterestLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPinwheelLightIcon],svg[ph-pinwheel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 219.76l-50.86-50.86a60 60 0 0 0 6.45-1.92a58 58 0 0 0 34.66-74.34a6 6 0 0 0-7.69-3.58L161.5 107a60 60 0 0 0 3.54-6.46a58 58 0 0 0-72.4-79a6 6 0 0 0-3.58 7.69L107 78.52a60 60 0 0 0-6.46-3.52a58 58 0 0 0-79 72.4a6 6 0 0 0 3.1 3.38a6 6 0 0 0 4.59.2L78.52 133a58 58 0 0 0-3.52 6.48A58.06 58.06 0 0 0 127.5 222a58.3 58.3 0 0 0 19.88-3.53a6 6 0 0 0 3.62-7.67l-18-49.3a57.8 57.8 0 0 0 29 8.95l57.79 57.79a6 6 0 0 0 8.48-8.48ZM102.52 31.11a46 46 0 0 1 31.2 85.72ZM31.11 137.5a46 46 0 0 1 85.72-31.2Zm106.39 71.4a46 46 0 0 1-31.2-85.72Zm26.95-50.41a46.07 46.07 0 0 1-41.27-24.77l85.72-31.2a46.06 46.06 0 0 1-44.39 56Z"></svg:path>`,
})
export class PhPinwheelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeLightIcon],svg[ph-pipe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 106h-26V54h26a6 6 0 0 0 0-12h-27.37A14 14 0 0 0 192 34h-16a14 14 0 0 0-12.63 8H144A102.12 102.12 0 0 0 42 144v19.37A14 14 0 0 0 34 176v16a14 14 0 0 0 8 12.63V232a6 6 0 0 0 12 0v-26h52v26a6 6 0 0 0 12 0v-27.37a14 14 0 0 0 8-12.63v-16a14 14 0 0 0-8-12.63V144a26 26 0 0 1 26-26h19.37a14 14 0 0 0 12.63 8h16a14 14 0 0 0 12.63-8H232a6 6 0 0 0 0-12m-120 68a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2Zm-6-30v18H54v-18a90.1 90.1 0 0 1 90-90h18v52h-18a38 38 0 0 0-38 38m86-30h-16a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v64a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhPipeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPipeWrenchLightIcon],svg[ph-pipe-wrench-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.87 56.44a2 2 0 0 1-.13-.13L173.83 14a14 14 0 0 0-19.71.06l-46 45.62l-3-3a23 23 0 0 0-32.42 32.5l2.85 2.89l-21.45 21.34a14 14 0 0 0 0 19.8l12.69 12.69a14 14 0 0 0 19.76 0l21.35-21.05l13.51 13.7a2 2 0 0 1 0 2.83l-64.68 65.41a23 23 0 1 0 32.5 32.47l88.67-89.36a14 14 0 0 0 0-19.78l-37.11-37.48l14.35-14.06a2 2 0 0 1 2.82 0l.07.07L195.42 114a14 14 0 0 0 19.74-.07l3.71-3.72a38 38 0 0 0 0-53.74Zm-140.77 81a2 2 0 0 1-2.83 0l-12.69-12.71a2 2 0 0 1-.58-1.42a2 2 0 0 1 .57-1.4L84 100.62l15.5 15.72Zm91.3 4l-88.67 89.35a11 11 0 1 1-15.49-15.54l64.67-65.37a14 14 0 0 0 0-19.75l-48.7-49.4a11 11 0 0 1 15.5-15.54l72.7 73.39a2 2 0 0 1-.01 2.85Zm41-39.73l-3.71 3.71a2 2 0 0 1-2.83 0l-.12-.12L166.31 70a14 14 0 0 0-19.61.1l-14.35 14.02l-15.75-15.9l46-45.64a2 2 0 0 1 2.84 0l.12.13L210.45 65a26 26 0 0 1-.07 36.71Z"></svg:path>`,
})
export class PhPipeWrenchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPixLogoLightIcon],svg[ph-pix-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m233.91 118.14l-96-96a13.93 13.93 0 0 0-19.72 0l-96 96.05a13.93 13.93 0 0 0 0 19.72l96.05 96a13.93 13.93 0 0 0 19.72 0l96-96a13.93 13.93 0 0 0 0-19.72ZM126.62 30.57a2 2 0 0 1 2.76 0L188.81 90H160a6 6 0 0 0-4.24 1.76L128 119.52l-27.76-27.76A6 6 0 0 0 96 90H67.19ZM30 128a1.94 1.94 0 0 1 .57-1.38L55.19 102h38.32l26 26l-26 26H55.19l-24.62-24.62A1.94 1.94 0 0 1 30 128m99.38 97.43a2 2 0 0 1-2.76 0L67.19 166H96a6 6 0 0 0 4.24-1.76L128 136.48l27.76 27.76A6 6 0 0 0 160 166h28.81Zm96.05-96.05L200.81 154h-38.32l-26-26l26-26h38.32l24.62 24.62a2 2 0 0 1 0 2.76"></svg:path>`,
})
export class PhPixLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPizzaLightIcon],svg[ph-pizza-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.6 63.47a13.9 13.9 0 0 0-6.35-8.67a199.48 199.48 0 0 0-206.5 0a14 14 0 0 0-4.7 19.2l96 157.27a14 14 0 0 0 24 0L236 74a13.8 13.8 0 0 0 1.6-10.53M61.07 118.2a26 26 0 1 1 26.1 42.8Zm91 70.32a26 26 0 0 1 26.91-44.1Zm33.2-54.4A37.65 37.65 0 0 0 168 130a38 38 0 0 0-22.25 68.8l-16 26.24a2 2 0 0 1-3.46 0l-32.7-53.55a38 38 0 1 0-38.93-63.79l-8.61-14.11a154.14 154.14 0 0 1 163.9 0Zm40.49-66.35l-9.56 15.58a166.11 166.11 0 0 0-176.4 0l-9.51-15.58a1.88 1.88 0 0 1-.23-1.47a2 2 0 0 1 .94-1.24a187.46 187.46 0 0 1 194 0a2 2 0 0 1 .92 1.24a1.88 1.88 0 0 1-.21 1.47Z"></svg:path>`,
})
export class PhPizzaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderLightIcon],svg[ph-placeholder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 14v153.52L54.49 46H208a2 2 0 0 1 2 2M46 208V54.48L201.51 210H48a2 2 0 0 1-2-2"></svg:path>`,
})
export class PhPlaceholderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlanetLightIcon],svg[ph-planet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.39 61.68c-7.24-12.48-27-15-57.24-7.49A93.92 93.92 0 0 0 34.05 128a94.5 94.5 0 0 0 .9 13c-21.86 22.38-29.56 40.78-22.29 53.32c4.5 7.76 14 11.69 27.86 11.69a116.4 116.4 0 0 0 25-3.16c1.45-.32 2.92-.68 4.41-1a93.95 93.95 0 0 0 151.19-86.89c12.65-13 21.11-25.32 23.86-35.6c1.78-6.83 1.26-12.77-1.59-17.68M128 46a82.12 82.12 0 0 1 80.19 64.94c-16 15.3-38.14 31.67-63.3 46.12c-27.4 15.76-52.1 25.94-72.04 31.54A82 82 0 0 1 128 46M23 188.3c-3.52-6.07 2.31-18.56 15-33a94 94 0 0 0 21.07 36.62c-19.65 3.82-32.68 2.16-36.07-3.62M128 210a81.4 81.4 0 0 1-43.35-12.45c20.68-6.71 43.56-17.06 66.22-30.08c22.83-13.12 43.13-27.67 59.05-41.91c0 .81.06 1.62.06 2.44A82.08 82.08 0 0 1 128 210M233.35 76.21c-1.88 7-7.28 15.49-15.36 24.61a93.9 93.9 0 0 0-21.1-36.7c15.82-3.05 32-3.49 36.12 3.58c1.19 2.05 1.3 4.92.34 8.51"></svg:path>`,
})
export class PhPlanetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlantLightIcon],svg[ph-plant-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.63 48a6 6 0 0 0-5.63-5.63c-51-3-91.88 12.42-109.35 41.26c-11.63 19.21-11.38 42.68.53 65a69.4 69.4 0 0 0-15.48 30.59l-19.8-19.81c8.15-16.1 8.1-32.95-.32-46.85C82.77 91.41 53 80.07 15.9 82.27a6 6 0 0 0-5.63 5.64c-2.18 37.09 9.14 66.86 30.29 79.67A43.75 43.75 0 0 0 63.44 174a53.2 53.2 0 0 0 24-6L114 194.48V224a6 6 0 0 0 12 0v-29.49A57.55 57.55 0 0 1 139.76 157c11.21 5.93 22.72 8.91 33.82 8.91a58.9 58.9 0 0 0 30.79-8.57C233.21 139.89 248.63 99 245.63 48M46.78 157.31C30.47 147.44 21.39 124 22 94c30-.65 53.41 8.44 63.28 24.75c5.68 9.37 6.16 20.38 1.54 31.59l-26.58-26.59a6 6 0 0 0-8.49 8.49l26.62 26.61c-11.21 4.62-22.22 4.15-31.59-1.54m151.38-10.22c-14.74 8.92-32.14 9.18-49.67.9l55.76-55.75a6 6 0 0 0-8.49-8.49L140 139.51c-8.28-17.53-8-34.93.9-49.66c14.52-24 49.06-37.18 93-35.75c1.43 43.9-11.76 78.46-35.74 92.99"></svg:path>`,
})
export class PhPlantLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayCircleLightIcon],svg[ph-play-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m47.18-95.09l-64-40A6 6 0 0 0 102 88v80a6 6 0 0 0 9.18 5.09l64-40a6 6 0 0 0 0-10.18M114 157.17V98.83L160.68 128Z"></svg:path>`,
})
export class PhPlayCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayLightIcon],svg[ph-play-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.36 116.19L87.28 28.06a14 14 0 0 0-14.18-.27A13.69 13.69 0 0 0 66 39.87v176.26a13.69 13.69 0 0 0 7.1 12.08a14 14 0 0 0 14.18-.27l144.08-88.13a13.82 13.82 0 0 0 0-23.62m-6.26 13.38L81 217.7a2 2 0 0 1-2.06 0a1.78 1.78 0 0 1-1-1.61V39.87a1.78 1.78 0 0 1 1-1.61A2.06 2.06 0 0 1 80 38a2 2 0 0 1 1 .31l144.1 88.12a1.82 1.82 0 0 1 0 3.14"></svg:path>`,
})
export class PhPlayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlayPauseLightIcon],svg[ph-play-pause-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 64v128a6 6 0 0 1-12 0V64a6 6 0 0 1 12 0m42-6a6 6 0 0 0-6 6v128a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m-82 70a13.77 13.77 0 0 1-6.41 11.65L47.41 195.8A13.91 13.91 0 0 1 26 184.15V71.85A13.91 13.91 0 0 1 47.41 60.2l88.18 56.15A13.77 13.77 0 0 1 142 128m-12 0a1.77 1.77 0 0 0-.85-1.53L41 70.32a1.87 1.87 0 0 0-1-.32a2.1 2.1 0 0 0-1 .25a1.76 1.76 0 0 0-1 1.6v112.3a1.76 1.76 0 0 0 1 1.6a1.9 1.9 0 0 0 2-.07l88.19-56.15A1.77 1.77 0 0 0 130 128"></svg:path>`,
})
export class PhPlayPauseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlaylistLightIcon],svg[ph-playlist-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h120a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m72 52H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m133.75-60.28a6 6 0 0 1-7.48 4L206 120.06V192a30 30 0 1 1-12-24v-56a6 6 0 0 1 7.72-5.75l40 12a6 6 0 0 1 4.03 7.47M194 192a18 18 0 1 0-18 18a18 18 0 0 0 18-18"></svg:path>`,
})
export class PhPlaylistLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugChargingLightIcon],svg[ph-plug-charging-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 58h-50V16a6 6 0 0 0-12 0v42H94V16a6 6 0 0 0-12 0v42H32.55A6.1 6.1 0 0 0 26 64a6 6 0 0 0 6 6h18v90a38 38 0 0 0 38 38h34v42a6 6 0 0 0 12 0v-42h34a38 38 0 0 0 38-38V70h18a6 6 0 0 0 0-12m-30 102a26 26 0 0 1-26 26H88a26 26 0 0 1-26-26V70h132Zm-86.93-28.58a6 6 0 0 1-.69-5.53l12-32a6 6 0 1 1 11.24 4.22l-9 23.89H144a6 6 0 0 1 5.62 8.11l-12 32a6 6 0 0 1-11.24-4.22l9-23.89H112a6 6 0 0 1-4.93-2.58"></svg:path>`,
})
export class PhPlugChargingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugLightIcon],svg[ph-plug-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 67.76a6 6 0 0 0-8.48 0L192 103.51L152.49 64l35.75-35.76a6 6 0 0 0-8.48-8.48L144 55.51l-27.76-27.75a6 6 0 1 0-8.48 8.48l7.75 7.76l-54.38 54.38a38 38 0 0 0 0 53.75l17.13 17.12l-50.5 50.51a6 6 0 1 0 8.48 8.48l50.51-50.5l17.13 17.13a38 38 0 0 0 53.74 0L212 140.49l7.76 7.75a6 6 0 0 0 8.48-8.48L200.49 112l35.75-35.76a6 6 0 0 0 0-8.48m-87.11 118.62a26 26 0 0 1-36.77 0l-42.74-42.74a26 26 0 0 1 0-36.77L124 52.49L203.51 132Z"></svg:path>`,
})
export class PhPlugLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsConnectedLightIcon],svg[ph-plugs-connected-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 19.76a6 6 0 0 0-8.48 0l-53.82 53.81l-6.79-6.78a30 30 0 0 0-42.42 0L100 91.51l-7.76-7.75a6 6 0 0 0-8.48 8.48l7.75 7.76l-24.72 24.73a30 30 0 0 0 0 42.42l6.78 6.79l-53.81 53.82a6 6 0 1 0 8.48 8.48l53.82-53.81l6.79 6.78a30 30 0 0 0 42.42 0L156 164.49l7.76 7.75a6 6 0 0 0 8.48-8.48l-7.75-7.76l24.72-24.73a30 30 0 0 0 0-42.42l-6.78-6.79l53.81-53.82a6 6 0 0 0 0-8.48m-113.45 161a18 18 0 0 1-25.46 0l-22.06-22.09a18 18 0 0 1 0-25.46L100 108.49L147.51 156Zm57.94-57.94L156 147.51L108.49 100l24.72-24.73a18 18 0 0 1 25.46 0l22.06 22.06a18 18 0 0 1 0 25.46Zm-90.3-88.59a6 6 0 0 1 11.14-4.46l8 20a6 6 0 1 1-11.14 4.46Zm-64 59.54a6 6 0 0 1 7.8-3.34l20 8a6 6 0 1 1-4.46 11.14l-20-8a6 6 0 0 1-3.34-7.8m203.14 68.46a6 6 0 0 1-7.8 3.34l-20-8a6 6 0 0 1 4.46-11.14l20 8a6 6 0 0 1 3.34 7.8m-64 59.54a6 6 0 1 1-11.14 4.46l-8-20a6 6 0 0 1 11.14-4.46Z"></svg:path>`,
})
export class PhPlugsConnectedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlugsLightIcon],svg[ph-plugs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.24 139.76a6 6 0 0 0-8.48 0L120 159.51L96.49 136l19.75-19.76a6 6 0 0 0-8.48-8.48L88 127.51l-19.76-19.75a6 6 0 0 0-8.48 8.48l7.75 7.76l-24.72 24.73a30 30 0 0 0 0 42.42l6.78 6.79l-29.81 29.82a6 6 0 1 0 8.48 8.48l29.82-29.81l6.79 6.78a30 30 0 0 0 42.42 0L132 188.49l7.76 7.75a6 6 0 0 0 8.48-8.48L128.49 168l19.75-19.76a6 6 0 0 0 0-8.48m-49.45 65a18 18 0 0 1-25.46 0l-22.06-22.09a18 18 0 0 1 0-25.46L76 132.49L123.51 180Zm137.45-185a6 6 0 0 0-8.48 0l-29.82 29.81l-6.79-6.78a30 30 0 0 0-42.42 0L124 67.51l-7.76-7.75a6 6 0 0 0-8.48 8.48l80 80a6 6 0 0 0 8.48-8.48l-7.75-7.76l24.72-24.73a30 30 0 0 0 0-42.42l-6.78-6.79l29.81-29.82a6 6 0 0 0 0-8.48m-31.51 79L180 123.51L132.49 76l24.72-24.73a18 18 0 0 1 25.46 0l22.06 22.06a18 18 0 0 1 0 25.46Z"></svg:path>`,
})
export class PhPlugsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusCircleLightIcon],svg[ph-plus-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-90a6 6 0 0 1-6 6h-34v34a6 6 0 0 1-12 0v-34H88a6 6 0 0 1 0-12h34V88a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPlusCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusLightIcon],svg[ph-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6h-82v82a6 6 0 0 1-12 0v-82H40a6 6 0 0 1 0-12h82V40a6 6 0 0 1 12 0v82h82a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusLightIcon],svg[ph-plus-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 60.24l-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 0 1 8.48 8.48M66 112a6 6 0 0 0 12 0V78h34a6 6 0 0 0 0-12H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34Zm158 66h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhPlusMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPlusSquareLightIcon],svg[ph-plus-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-36-80a6 6 0 0 1-6 6h-34v34a6 6 0 0 1-12 0v-34H88a6 6 0 0 1 0-12h34V88a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPlusSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPokerChipLightIcon],svg[ph-poker-chip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 152a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50m39.37-97.86A61.7 61.7 0 0 0 134 66.3V38.2a89.64 89.64 0 0 1 53.22 22.09ZM122 66.3a61.7 61.7 0 0 0-33.37 13.84L68.78 60.29A89.64 89.64 0 0 1 122 38.2ZM80.14 88.63A61.7 61.7 0 0 0 66.3 122H38.2a89.6 89.6 0 0 1 22.09-53.22ZM66.3 134a61.7 61.7 0 0 0 13.84 33.37l-19.85 19.85A89.6 89.6 0 0 1 38.2 134Zm22.33 41.86A61.7 61.7 0 0 0 122 189.7v28.1a89.64 89.64 0 0 1-53.22-22.09ZM134 189.7a61.7 61.7 0 0 0 33.37-13.84l19.85 19.85A89.64 89.64 0 0 1 134 217.8Zm41.86-22.33A61.7 61.7 0 0 0 189.7 134h28.1a89.6 89.6 0 0 1-22.09 53.22ZM189.7 122a61.7 61.7 0 0 0-13.84-33.37l19.85-19.85A89.6 89.6 0 0 1 217.8 122Z"></svg:path>`,
})
export class PhPokerChipLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPoliceCarLightIcon],svg[ph-police-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-12.52l-28-48.95a14 14 0 0 0-12.15-7H68.64a14 14 0 0 0-12.15 7l-28 49H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V182h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12M66.91 63a2 2 0 0 1 1.73-1h118.72a2 2 0 0 1 1.73 1l24.57 43H42.34ZM66 200a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-18h28Zm150 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m2-32H38v-52h180ZM58 144a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m112 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6M98 24a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhPoliceCarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPolygonLightIcon],svg[ph-polygon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.23 50.78a30 30 0 0 0-42.44 0a29.8 29.8 0 0 0-5.56 7.69l-31.31-8.54a30 30 0 0 0-51.14-23.16a30.09 30.09 0 0 0-4.65 36.43l-36.3 32.67a30.07 30.07 0 0 0-39.06 2.91a30 30 0 0 0 41.38 43.44l72.6 53.25a30 30 0 1 0 48.47-8.68a29.7 29.7 0 0 0-5.77-4.5l28.44-80.59a32 32 0 0 0 4.11.3a30 30 0 0 0 21.22-51.2Zm-122-15.52a18 18 0 1 1 0 25.46a18 18 0 0 1 .04-25.46Zm-80 97.47a18 18 0 1 1 25.46 0a18 18 0 0 1-25.43 0Zm145.47 88a18 18 0 1 1 0-25.46a18 18 0 0 1 .03 25.47Zm-8.61-42.43a30 30 0 0 0-24.27 7.48l-72.58-53.24a30.14 30.14 0 0 0-1.38-27.75l36.3-32.67a30 30 0 0 0 44.62-10.61l31.31 8.54a30 30 0 0 0 8.7 23.16a30.5 30.5 0 0 0 5.78 4.51Zm56.62-93.59a18 18 0 1 1 0-25.46a18 18 0 0 1 .03 25.47Z"></svg:path>`,
})
export class PhPolygonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopcornLightIcon],svg[ph-popcorn-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.14 75.66a6 6 0 0 0-5.79-1.43l-1.41.4a42 42 0 0 0-54.07-30.52a42 42 0 0 0-77.74 0a42 42 0 0 0-54.07 30.52l-1.41-.4a6 6 0 0 0-7.49 7.14l30.55 129.84A14 14 0 0 0 70.34 222h115.32a14 14 0 0 0 13.63-10.79l30.55-129.84a6 6 0 0 0-1.7-5.71M76 54a29.54 29.54 0 0 1 14 3.49a6 6 0 0 0 8.68-4a30 30 0 0 1 58.56 0a6 6 0 0 0 8.67 4A29.6 29.6 0 0 1 180 54a30 30 0 0 1 29.39 23.94l-41.07 11.73l-35.12-14a14 14 0 0 0-10.4 0l-35.12 14l-41.07-11.73A30 30 0 0 1 76 54m85.44 45.84L146.75 210h-37.5L94.56 99.84l32.7-13.08a2 2 0 0 1 1.48 0Zm-93 108.62L40.18 88.58l42.39 12.11L97.15 210H70.34a2 2 0 0 1-1.95-1.54Zm119.22 0a2 2 0 0 1-2 1.54h-26.81l14.58-109.31l42.39-12.11Z"></svg:path>`,
})
export class PhPopcornLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPopsicleLightIcon],svg[ph-popsicle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 10a70.08 70.08 0 0 0-70 70v96a14 14 0 0 0 14 14h34v42a22 22 0 0 0 44 0v-42h34a14 14 0 0 0 14-14V80a70.08 70.08 0 0 0-70-70m10 222a10 10 0 0 1-20 0v-42h20Zm48-56a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V80a58 58 0 0 1 116 0ZM118 72v80a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m32 0v80a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhPopsicleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPottedPlantLightIcon],svg[ph-potted-plant-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m124.24 140.24l21.09-21.09a58 58 0 0 0 26.49 6.79a47.55 47.55 0 0 0 24.85-6.94c23.07-14 35.42-46.53 33-87.09a6 6 0 0 0-5.64-5.64c-40.56-2.38-73.12 10-87.09 33c-9.22 15.22-9.2 33.71-.14 51.35L120 127.51l-14.64-14.63c6.32-13 6.15-26.6-.67-37.86C94.21 57.72 70 48.44 39.85 50.21a6 6 0 0 0-5.64 5.64C32.44 86 41.72 110.2 59 120.69A36.23 36.23 0 0 0 78 126a43.4 43.4 0 0 0 18.93-4.6l14.58 14.6l-10 10H56a6 6 0 0 0 0 12h11.18l13.57 61a13.91 13.91 0 0 0 13.67 11h67.17a13.91 13.91 0 0 0 13.66-11l13.57-61H200a6 6 0 0 0 0-12h-81.52zm23-74.7c11-18.22 37.24-28.33 70.72-27.5c.83 33.47-9.28 59.68-27.5 70.72c-12.3 7.44-27.09 6.92-41.79-1.43c-8.36-14.7-8.88-29.49-1.43-41.79m-53.66 44c-10 5.56-20 5.87-28.34.84C52.78 102.87 45.75 85 46 62c23-.29 40.88 6.78 48.42 19.24c5.03 8.3 4.72 18.32-.84 28.34ZM176.52 158l-13 58.43a2 2 0 0 1-1.95 1.57H94.42a2 2 0 0 1-2-1.57L79.48 158Z"></svg:path>`,
})
export class PhPottedPlantLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPowerLightIcon],svg[ph-power-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 128V48a6 6 0 0 1 12 0v80a6 6 0 0 1-12 0m57.28-77a6 6 0 0 0-6.56 10C196.41 76.47 210 100.88 210 128a82 82 0 0 1-164 0c0-27.12 13.59-51.53 37.28-67a6 6 0 0 0-6.56-10C49.57 68.68 34 96.75 34 128a94 94 0 0 0 188 0c0-31.25-15.57-59.32-42.72-77"></svg:path>`,
})
export class PhPowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrescriptionLightIcon],svg[ph-prescription-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m180.49 188l23.75-23.76a6 6 0 0 0-8.48-8.48L172 179.51l-45.58-45.57A50 50 0 0 0 124 34H72a6 6 0 0 0-6 6v152a6 6 0 0 0 12 0v-58h31.51l54 54l-23.75 23.76a6 6 0 1 0 8.48 8.48L172 196.49l23.76 23.75a6 6 0 0 0 8.48-8.48ZM78 46h46a38 38 0 0 1 0 76H78Z"></svg:path>`,
})
export class PhPrescriptionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationChartLightIcon],svg[ph-presentation-chart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42h-82V24a6 6 0 0 0-12 0v18H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h43.52l-24.21 30.25a6 6 0 0 0 9.38 7.5L98.88 190h58.24l30.19 37.75a6 6 0 0 0 9.38-7.5L172.48 190H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-116-56v24a6 6 0 0 1-12 0v-24a6 6 0 0 1 12 0m32-16v40a6 6 0 0 1-12 0v-40a6 6 0 0 1 12 0m32-16v56a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhPresentationChartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPresentationLightIcon],svg[ph-presentation-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42h-82V24a6 6 0 0 0-12 0v18H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h43.52l-24.21 30.25a6 6 0 0 0 9.38 7.5L98.88 190h58.24l30.19 37.75a6 6 0 0 0 9.38-7.5L172.48 190H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhPresentationLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPrinterLightIcon],svg[ph-printer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.67 74H198V40a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v34H41.33C28.47 74 18 83.87 18 96v80a6 6 0 0 0 6 6h34v34a6 6 0 0 0 6 6h128a6 6 0 0 0 6-6v-34h34a6 6 0 0 0 6-6V96c0-12.13-10.47-22-23.33-22M70 46h116v28H70Zm116 164H70v-52h116Zm40-40h-28v-18a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v18H30V96c0-5.51 5.08-10 11.33-10h173.34c6.25 0 11.33 4.49 11.33 10Zm-28-54a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhPrinterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitInsetLightIcon],svg[ph-prohibit-inset-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.24 155.76a6 6 0 1 1-8.48 8.48l-64-64a6 6 0 0 1 8.48-8.48ZM230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhProhibitInsetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProhibitLightIcon],svg[ph-prohibit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.6 89.6 0 0 1-22.29 59.22L68.78 60.29A89.95 89.95 0 0 1 218 128m-180 0a89.6 89.6 0 0 1 22.29-59.22l126.93 126.93A89.95 89.95 0 0 1 38 128"></svg:path>`,
})
export class PhProhibitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenChartLightIcon],svg[ph-projector-screen-chart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 144v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6v-24a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m54-72v100h10a6 6 0 0 1 0 12h-90v20.84a22 22 0 1 1-12 0V190H32a6 6 0 0 1 0-12h10V78h-2a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v16a14 14 0 0 1-14 14Zm-86 144a10 10 0 1 0 10 10a10 10 0 0 0-10-10M40 66h176a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2m162 12H54v100h148Z"></svg:path>`,
})
export class PhProjectorScreenChartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phProjectorScreenLightIcon],svg[ph-projector-screen-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 78a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v16a14 14 0 0 0 14 14h2v100H32a6 6 0 0 0 0 12h90v20.84a22 22 0 1 0 12 0V190h90a6 6 0 0 0 0-12h-10V78Zm-78 154a10 10 0 1 1-10-10a10 10 0 0 1 10 10M38 64V48a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m164 114H54V78h148Z"></svg:path>`,
})
export class PhProjectorScreenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPulseLightIcon],svg[ph-pulse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 128a6 6 0 0 1-6 6h-28.29l-38.34 76.68A6 6 0 0 1 160 214h-.3a6 6 0 0 1-5.31-3.85L95.51 55.57l-34.05 74.91A6 6 0 0 1 56 134H24a6 6 0 0 1 0-12h28.14l38.4-84.48a6 6 0 0 1 11.07.34l59.13 155.24l33.89-67.78A6 6 0 0 1 200 122h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPulseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinLightIcon],svg[ph-push-pin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.91 82.79L173.22 22.1a14 14 0 0 0-19.81 0L98.93 76.77c-9.52-3.25-34-8.34-59.71 12.41A14 14 0 0 0 38.1 110l49.71 49.71l-44.05 44a6 6 0 1 0 8.48 8.48l44.05-44.05L146 217.89a14 14 0 0 0 9.9 4.11h1a14 14 0 0 0 10.19-5.54c19.72-26.21 17.15-47.23 12.46-59.3l54.37-54.55a14 14 0 0 0-.01-19.82m-8.49 11.31l-57.27 57.46a6 6 0 0 0-1.11 6.92c9.94 19.88-1.71 40.32-9.54 50.72a2 2 0 0 1-3 .2L46.58 101.51a2 2 0 0 1 .18-3c12.5-10.09 24.5-12.76 33.7-12.76a42.1 42.1 0 0 1 17.25 3.41a6 6 0 0 0 6.93-1.16l57.26-57.41a2 2 0 0 1 2.83 0l60.69 60.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhPushPinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleLightIcon],svg[ph-push-pin-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 170h-11L183.15 46H192a6 6 0 0 0 0-12H64a6 6 0 0 0 0 12h8.85L51 170H40a6 6 0 0 0 0 12h82v58a6 6 0 0 0 12 0v-58h82a6 6 0 0 0 0-12M85 46h86l21.88 124H63.15Z"></svg:path>`,
})
export class PhPushPinSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleSlashLightIcon],svg[ph-push-pin-simple-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.25 40a6 6 0 0 1 6-6H192a6 6 0 0 1 0 12h-8.85l19.17 108.64a6 6 0 0 1-4.86 7a5.4 5.4 0 0 1-1.05.1a6 6 0 0 1-5.9-5L171 46H91.25a6 6 0 0 1-6-6M212 220.44a6 6 0 0 1-8.48-.4L169 182h-35v58a6 6 0 0 1-12 0v-58H40a6 6 0 0 1 0-12h11l17.38-98.67L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44M158 170L78.58 82.56L63.15 170Z"></svg:path>`,
})
export class PhPushPinSimpleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPushPinSlashLightIcon],svg[ph-push-pin-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l27.71 30.51C61.78 76 50.6 80 39.22 89.18A14 14 0 0 0 38.1 110l49.71 49.71l-44.05 44a6 6 0 1 0 8.48 8.48l44.05-44.05L146 217.89a14 14 0 0 0 9.9 4.11h1a14 14 0 0 0 10.19-5.54a85.5 85.5 0 0 0 12.44-22.84l24 26.45a6 6 0 1 0 8.87-8.08Zm105.05 173.21a2 2 0 0 1-3 .2L46.58 101.51a2 2 0 0 1 .18-3c13.18-10.64 25.84-12.9 34.79-12.7l88.45 97.3c-2.17 10.63-7.89 19.96-12.51 26.1m76.42-106.62l-44.65 44.78a6 6 0 1 1-8.5-8.47l44.65-44.79a2 2 0 0 0 0-2.84l-60.68-60.68a2 2 0 0 0-2.83 0l-41.22 41.35a6 6 0 0 1-8.5-8.47l41.23-41.36a14 14 0 0 1 19.81 0l60.69 60.69a14 14 0 0 1 0 19.79"></svg:path>`,
})
export class PhPushPinSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phPuzzlePieceLightIcon],svg[ph-puzzle-piece-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.21 160.24a6 6 0 0 0-5.78-.35a22 22 0 1 1-11.05-41.83a22.15 22.15 0 0 1 11.05 2.06a6 6 0 0 0 8.57-5.42V72a14 14 0 0 0-14-14h-38.52a35 35 0 0 0 .52-6a34.1 34.1 0 0 0-10.73-24.78a33.64 33.64 0 0 0-25.45-9.15A34 34 0 0 0 102.54 58H64a14 14 0 0 0-14 14v34.53a34 34 0 0 0-30.79 10.2a34 34 0 0 0 22.31 57.18a34.3 34.3 0 0 0 8.48-.44V208a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-42.69a6 6 0 0 0-2.79-5.07M210 208a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2v-42.69a6 6 0 0 0-6-6a5.9 5.9 0 0 0-2.57.58a22 22 0 0 1-31.38-18.46a22 22 0 0 1 31.38-21.31A6 6 0 0 0 62 114.7V72a2 2 0 0 1 2-2h46.69a6 6 0 0 0 5.42-8.57a22.25 22.25 0 0 1-2-11a22 22 0 1 1 41.83 11A6 6 0 0 0 161.3 70H208a2 2 0 0 1 2 2v34.54a34 34 0 0 0-39.93 31.28a33.7 33.7 0 0 0 9.14 25.45A34.15 34.15 0 0 0 210 173.48Z"></svg:path>`,
})
export class PhPuzzlePieceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQrCodeLightIcon],svg[ph-qr-code-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 42H56a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-2 34H56a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm94-158h-48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-64 72v-32a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m76-16a6 6 0 0 1-6 6h-26v42a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h26v-58a6 6 0 0 1 12 0v10h26a6 6 0 0 1 6 6m0 32v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhQrCodeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionLightIcon],svg[ph-question-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10M128 74c-21 0-38 15.25-38 34v4a6 6 0 0 0 12 0v-4c0-12.13 11.66-22 26-22s26 9.87 26 22s-11.66 22-26 22a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-2.42c18.11-2.58 32-16.66 32-33.58c0-18.75-17-34-38-34m102 54A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhQuestionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuestionMarkLightIcon],svg[ph-question-mark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 96c0 28-24.62 51.11-56 53.75V160a6 6 0 0 1-12 0v-16a6 6 0 0 1 6-6c27.57 0 50-18.84 50-42s-22.43-42-50-42s-50 18.84-50 42a6 6 0 0 1-12 0c0-29.78 27.81-54 62-54s62 24.22 62 54m-62 98a14 14 0 1 0 14 14a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhQuestionMarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQueueLightIcon],svg[ph-queue-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m102 58H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m110-26a6 6 0 0 1-2.82 5.09l-64 40A6 6 0 0 1 170 200v-80a6 6 0 0 1 9.18-5.09l64 40A6 6 0 0 1 246 160m-17.32 0L182 130.83v58.34Z"></svg:path>`,
})
export class PhQueueLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phQuotesLightIcon],svg[ph-quotes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 58H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h62v10a34 34 0 0 1-34 34a6 6 0 0 0 0 12a46.06 46.06 0 0 0 46-46V72a14 14 0 0 0-14-14m2 80H40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h60a2 2 0 0 1 2 2Zm114-80h-60a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h62v10a34 34 0 0 1-34 34a6 6 0 0 0 0 12a46.06 46.06 0 0 0 46-46V72a14 14 0 0 0-14-14m2 80h-62a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h60a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhQuotesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRabbitLightIcon],svg[ph-rabbit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 164a10 10 0 1 1-10-10a10 10 0 0 1 10 10m46-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m58 34a50 50 0 0 1-86 34.7a50 50 0 1 1-69.39-71.91A70 70 0 0 1 65.23 129a235 235 0 0 1-20.56-59.3c-3-15.62-5-36.91 2.69-49.62A19.84 19.84 0 0 1 65.07 10c24.84 0 40.16 42.92 48.93 81.43a69.4 69.4 0 0 1 28 0C150.77 52.92 166.09 10 190.93 10a19.84 19.84 0 0 1 17.71 10.11c7.68 12.71 5.7 34 2.69 49.62A235 235 0 0 1 190.77 129a70 70 0 0 1 6.62 21.76A49.8 49.8 0 0 1 214 188m-60.44-93.17a70 70 0 0 1 21.64 13.48a71 71 0 0 1 8.05 8.72C199.87 81.2 207 40.54 198.37 26.32a8 8 0 0 0-7.44-4.32c-12.83 0-27.32 28.4-37.37 72.83M72.75 117a71 71 0 0 1 8-8.72a70 70 0 0 1 21.64-13.48C92.39 50.4 77.9 22 65.07 22a8 8 0 0 0-7.44 4.32C49 40.54 56.13 81.2 72.75 117M202 188a37.87 37.87 0 0 0-14.07-29.52a6.05 6.05 0 0 1-2.2-4.09a58 58 0 0 0-115.44 0a6 6 0 0 1-2.19 4.08a38 38 0 1 0 51.5 55.64l-11.42-9.5a6 6 0 1 1 7.67-9.22L128 205.5l12.16-10.11a6 6 0 1 1 7.67 9.22l-11.42 9.5A38 38 0 0 0 202 188"></svg:path>`,
})
export class PhRabbitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRacquetLightIcon],svg[ph-racquet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.53 27.47C201.38.33 152.16 5.37 118.81 38.72C87.22 70.31 81.05 116.13 103.56 144l-32.23 32.19l-2.1-2.11a14 14 0 0 0-19.8 0L22.1 201.41a14 14 0 0 0 0 19.8l12.69 12.7a14 14 0 0 0 19.81 0l27.32-27.32a14 14 0 0 0 0-19.81l-2.1-2.1L112 152.46c11.17 9 25.24 13.45 40.13 13.45c22.2 0 46.21-9.81 65.12-28.72c33.38-33.35 38.42-82.57 11.28-109.72M73.43 198.09l-27.32 27.33a2 2 0 0 1-2.83 0l-12.69-12.69a2 2 0 0 1 0-2.83l27.32-27.33a2 2 0 0 1 1.42-.58a2 2 0 0 1 1.41.58l6.35 6.34l6.34 6.34a2 2 0 0 1 0 2.83ZM232.34 58h-34.28V23.66A46.33 46.33 0 0 1 232.34 58M183.9 22h2.15v36H150V30.57a74.84 74.84 0 0 1 33.9-8.65Zm2.15 48v36H150V70ZM127.3 47.21A93 93 0 0 1 138 38v20h-20a93 93 0 0 1 9.3-10.79M110.65 70H138v36h-36c-.34-11.72 2.58-24.21 8.65-36m-6.9 48H138v34.28A46.33 46.33 0 0 1 103.75 118m46.29 36v-36h36v27.38c-11.83 6.04-24.32 8.96-36.04 8.55Zm58.75-25.23a93 93 0 0 1-10.73 9.22V118H218a94 94 0 0 1-9.21 10.7ZM225.44 106h-27.38V70h36c.37 11.63-2.55 24.12-8.62 36"></svg:path>`,
})
export class PhRacquetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadicalLightIcon],svg[ph-radical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 80v24a6 6 0 0 1-12 0V86H132.16L85.62 210.11a6 6 0 0 1-11.24 0l-48-128a6 6 0 1 1 11.24-4.22L80 190.91l42.38-113A6 6 0 0 1 128 74h112a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhRadicalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioButtonLightIcon],svg[ph-radio-button-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-144a54 54 0 1 0 54 54a54.06 54.06 0 0 0-54-54m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhRadioButtonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioLightIcon],svg[ph-radio-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 104a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 26H64a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m0 32H64a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m134-82v112a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V72a6 6 0 0 1 4.28-5.75l160-48a6 6 0 0 1 3.44 11.5L72.88 66H216a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H38v114a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Zm-20 56a38 38 0 1 1-38-38a38 38 0 0 1 38 38m-12 0a26 26 0 1 0-26 26a26 26 0 0 0 26-26"></svg:path>`,
})
export class PhRadioLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRadioactiveLightIcon],svg[ph-radioactive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 134H40a13.94 13.94 0 0 1-10.28-4.56a14.17 14.17 0 0 1-3.66-10.84a101.81 101.81 0 0 1 42.75-74A14 14 0 0 1 89 49l26 45a6 6 0 0 1-10.4 6L78.62 55a2 2 0 0 0-2.88-.65A89.83 89.83 0 0 0 38 119.68a2.13 2.13 0 0 0 .57 1.67A1.88 1.88 0 0 0 40 122h52a6 6 0 0 1 0 12m137.94-15.4a101.81 101.81 0 0 0-42.75-74A14 14 0 0 0 167 49l-26 45a6 6 0 0 0 10.4 6l25.98-45a2 2 0 0 1 2.88-.65A89.83 89.83 0 0 1 218 119.68a2.13 2.13 0 0 1-.57 1.67a1.88 1.88 0 0 1-1.43.65h-52a6 6 0 0 0 0 12h52a13.94 13.94 0 0 0 10.28-4.56a14.17 14.17 0 0 0 3.66-10.84m-78.74 37.58a6 6 0 1 0-10.39 6l25.82 44.73a2 2 0 0 1-.88 2.82a90.29 90.29 0 0 1-75.5 0a2 2 0 0 1-.88-2.82l25.82-44.73a6 6 0 1 0-10.39-6L79 200.91a14 14 0 0 0 6.23 19.71a102.29 102.29 0 0 0 85.58 0a14 14 0 0 0 6.19-19.71ZM128 138a10 10 0 1 0-10-10a10 10 0 0 0 10 10"></svg:path>`,
})
export class PhRadioactiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowCloudLightIcon],svg[ph-rainbow-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 114a46.18 46.18 0 0 0-43.35 30.59a30 30 0 0 0-4.65-.37c-16.54 0-30 13.86-30 30.89S135.46 206 152 206h48a46 46 0 0 0 0-92m0 80h-48c-9.93 0-18-8.47-18-18.89s8.07-18.89 18-18.89a17.1 17.1 0 0 1 6.53 1.28a6 6 0 0 0 8.16-4.35A34 34 0 1 1 200 194M22 160v16a6 6 0 0 1-12 0v-16a102 102 0 0 1 173.11-73.13a6 6 0 1 1-8.37 8.61A90 90 0 0 0 22 160m90-58a58.07 58.07 0 0 0-58 58v16a6 6 0 0 1-12 0v-16a70 70 0 0 1 111.42-56.43a6 6 0 1 1-7.11 9.66A57.5 57.5 0 0 0 112 102m6 32.7a26.6 26.6 0 0 0-6-.7a26 26 0 0 0-26 26v16a6 6 0 0 1-12 0v-16a38 38 0 0 1 46.81-37a6 6 0 1 1-2.81 11.7"></svg:path>`,
})
export class PhRainbowCloudLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRainbowLightIcon],svg[ph-rainbow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 168v16a6 6 0 0 1-12 0v-16a42 42 0 0 0-84 0v16a6 6 0 0 1-12 0v-16a54 54 0 0 1 108 0m-54-86a86.1 86.1 0 0 0-86 86v16a6 6 0 0 0 12 0v-16a74 74 0 0 1 148 0v16a6 6 0 0 0 12 0v-16a86.1 86.1 0 0 0-86-86m0-32A118.13 118.13 0 0 0 10 168v16a6 6 0 0 0 12 0v-16a106 106 0 0 1 212 0v16a6 6 0 0 0 12 0v-16A118.13 118.13 0 0 0 128 50"></svg:path>`,
})
export class PhRainbowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRankingLightIcon],svg[ph-ranking-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114.31 101.9a6 6 0 0 1 3.79-7.59l12-4A6 6 0 0 1 138 96v40a6 6 0 0 1-12 0v-31.68l-4.1 1.37a6 6 0 0 1-7.59-3.79M246 208a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h10v-98a14 14 0 0 1 14-14h42V56a14 14 0 0 1 14-14h64a14 14 0 0 1 14 14v74h42a14 14 0 0 1 14 14v58h10a6 6 0 0 1 6 6m-72-66v60h44v-58a2 2 0 0 0-2-2Zm-80 60h68V56a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2Zm-56 0h44V102H40a2 2 0 0 0-2 2Z"></svg:path>`,
})
export class PhRankingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReadCvLogoLightIcon],svg[ph-read-cv-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.43 41.22l-130.25-23A14 14 0 0 0 64 29.58l-29.75 169a14 14 0 0 0 11.36 16.22l130.25 23a13.6 13.6 0 0 0 2.46.22a14 14 0 0 0 13.68-11.6l29.75-169a14 14 0 0 0-11.32-16.2M210 55.36l-29.75 169a2 2 0 0 1-.82 1.3a2 2 0 0 1-1.49.33L47.65 203a2 2 0 0 1-1.65-2.36l29.75-169a2 2 0 0 1 .82-1.3A2.06 2.06 0 0 1 78.1 30l130.25 23a2 2 0 0 1 1.65 2.36m-23.89 20.15a6 6 0 0 1-5.9 5a6 6 0 0 1-1.05-.09l-83-14.66a6 6 0 1 1 2.09-11.81l83 14.65a6 6 0 0 1 4.86 6.91M180.56 107a6 6 0 0 1-5.9 5a5.5 5.5 0 0 1-1-.1l-83-14.65a6 6 0 0 1 2.09-11.82l83 14.66a6 6 0 0 1 4.81 6.91m-47 24.19a6 6 0 0 1-5.91 4.95a6.4 6.4 0 0 1-1.05-.09l-41.49-7.33a6 6 0 1 1 2.09-11.81l41.49 7.32a6 6 0 0 1 4.84 6.99Z"></svg:path>`,
})
export class PhReadCvLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptLightIcon],svg[ph-receipt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 104a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m-6 26H80a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m54-74v152a6 6 0 0 1-2.85 5.1a5.93 5.93 0 0 1-3.15.9a6 6 0 0 1-2.68-.63L192 198.71l-29.32 14.66a6 6 0 0 1-5.36 0L128 198.71l-29.32 14.66a6 6 0 0 1-5.36 0L64 198.71l-29.32 14.66A6 6 0 0 1 26 208V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v142.29l23.32-11.66a6 6 0 0 1 5.36 0L96 201.29l29.32-14.66a6 6 0 0 1 5.36 0L160 201.29l29.32-14.66a6 6 0 0 1 5.36 0L218 198.29Z"></svg:path>`,
})
export class PhReceiptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReceiptXLightIcon],svg[ph-receipt-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v152a6 6 0 0 0 8.68 5.37L64 198.71l29.32 14.66a6 6 0 0 0 5.36 0L128 198.71l29.32 14.66a6 6 0 0 0 5.36 0L192 198.71l29.32 14.66a6 6 0 0 0 2.68.63a5.93 5.93 0 0 0 3.15-.9A6 6 0 0 0 230 208V56a14 14 0 0 0-14-14m2 156.29l-23.32-11.66a6 6 0 0 0-5.36 0L160 201.29l-29.32-14.66a6 6 0 0 0-5.36 0L96 201.29l-29.32-14.66a6 6 0 0 0-5.36 0L38 198.29V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-61.76-98L136.48 120l19.76 19.76a6 6 0 1 1-8.48 8.48L128 128.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L119.52 120l-19.76-19.76a6 6 0 0 1 8.48-8.48L128 111.52l19.76-19.76a6 6 0 0 1 8.48 8.48Z"></svg:path>`,
})
export class PhReceiptXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecordLightIcon],svg[ph-record-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-160a70 70 0 1 0 70 70a70.08 70.08 0 0 0-70-70m0 128a58 58 0 1 1 58-58a58.07 58.07 0 0 1-58 58"></svg:path>`,
})
export class PhRecordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleDashedLightIcon],svg[ph-rectangle-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 48a6 6 0 0 1-6 6H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V56a14 14 0 0 1 14-14h32a6 6 0 0 1 6 6M32 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m40 52H40a2 2 0 0 1-2-2v-16a6 6 0 0 0-12 0v16a14 14 0 0 0 14 14h32a6 6 0 0 0 0-12m72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m80-24a6 6 0 0 0-6 6v16a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14v-16a6 6 0 0 0-6-6m0-72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-8-64h-32a6 6 0 0 0 0 12h32a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V56a14 14 0 0 0-14-14m-72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhRectangleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRectangleLightIcon],svg[ph-rectangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhRectangleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRecycleLightIcon],svg[ph-recycle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 208a6 6 0 0 1-6 6H40a22 22 0 0 1-19-33l36.71-63.44l-18.76 5a6 6 0 0 1-3.1-11.6l32.77-8.77a6 6 0 0 1 7.38 4.26l8.8 32.76a6 6 0 0 1-4.24 7.35a6 6 0 0 1-1.56.21a6 6 0 0 1-5.79-4.45l-5-18.8L31.38 187A10 10 0 0 0 40 202h48a6 6 0 0 1 6 6m141-27l-23.14-40a6 6 0 0 0-10.38 6l23.14 40a10 10 0 0 1-8.62 15h-73.52l13.76-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 0 0 8.48-8.48L142.48 214H216a22 22 0 0 0 19-33M136.65 35l36.72 63.44l-18.76-5A6 6 0 0 0 151.5 105l32.78 8.79a6 6 0 0 0 7.34-4.25l8.79-32.78a6 6 0 1 0-11.58-3.11l-5.05 18.82L147 29a22 22 0 0 0-38 0L85.8 69a6 6 0 0 0 10.39 6l23.16-40a10 10 0 0 1 17.3 0"></svg:path>`,
})
export class PhRecycleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRedditLogoLightIcon],svg[ph-reddit-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 104a30 30 0 0 0-50.64-21.76C178 72.75 157 67.17 135.05 66.18l5.89-35.35l21.16 3.26a22 22 0 1 0 2.17-11.81l-27.36-4.21a6 6 0 0 0-6.83 4.93l-7.18 43.09c-22.64.74-44.41 6.38-62.26 16.15a30 30 0 1 0-40 44.66A57 57 0 0 0 18 144c0 21.26 11.74 41.09 33.05 55.84C71.68 214.13 99 222 128 222s56.32-7.87 76.95-22.16C226.26 185.09 238 165.26 238 144a57 57 0 0 0-2.63-17.1A30.16 30.16 0 0 0 246 104m-62-82a10 10 0 1 1-10 10a10 10 0 0 1 10-10m41.15 97.51a6 6 0 0 0-2.46 7.51A45.7 45.7 0 0 1 226 144c0 36.39-44 66-98 66s-98-29.61-98-66a45.6 45.6 0 0 1 3.3-16.94a6 6 0 0 0-2.45-7.55a18 18 0 1 1 23.71-26.1a6 6 0 0 0 7.79 1.7a4 4 0 0 0 .34-.2C80.7 84 103.89 78 128 78c24.1 0 47.28 6 65.29 16.9l.16.11a6 6 0 0 0 8-1.6a18 18 0 1 1 23.71 26.1Zm-59.85 53.68a6 6 0 0 1-2.49 8.11a74.22 74.22 0 0 1-69.62 0a6 6 0 0 1 5.62-10.6a62.2 62.2 0 0 0 58.38 0a6 6 0 0 1 8.11 2.49M88 142a14 14 0 1 1 14-14a14 14 0 0 1-14 14m94-14a14 14 0 1 1-14-14a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhRedditLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatLightIcon],svg[ph-repeat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 128a70.08 70.08 0 0 1 70-70h113.51l-13.75-13.76a6 6 0 0 1 8.48-8.48l24 24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L209.51 70H96a58.07 58.07 0 0 0-58 58a6 6 0 0 1-12 0m198-6a6 6 0 0 0-6 6a58.07 58.07 0 0 1-58 58H46.49l13.75-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 0 0 8.48-8.48L46.49 198H160a70.08 70.08 0 0 0 70-70a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhRepeatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRepeatOnceLightIcon],svg[ph-repeat-once-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 128a70.08 70.08 0 0 1 70-70h113.51l-13.75-13.76a6 6 0 0 1 8.48-8.48l24 24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L209.51 70H96a58.07 58.07 0 0 0-58 58a6 6 0 0 1-12 0m198-6a6 6 0 0 0-6 6a58.07 58.07 0 0 1-58 58H46.49l13.75-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 0 0 8.48-8.48L46.49 198H160a70.08 70.08 0 0 0 70-70a6 6 0 0 0-6-6m-88 36a6 6 0 0 0 6-6v-48a6 6 0 0 0-8.68-5.37l-16 8a6 6 0 1 0 5.36 10.73l7.32-3.66V152a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhRepeatOnceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoLightIcon],svg[ph-replit-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-66V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h66v52H72a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-50h66a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m-78 126a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h66Zm0-126H72a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm80 62a2 2 0 0 1-2 2h-66v-52h66a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhReplitLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phResizeLightIcon],svg[ph-resize-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 114H48a6 6 0 0 0-6 6v88a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6v-88a6 6 0 0 0-6-6m-6 88H54v-76h76Zm84-18v16a14 14 0 0 1-14 14h-24a6 6 0 0 1 0-12h24a2 2 0 0 0 2-2v-16a6 6 0 0 1 12 0m0-72v32a6 6 0 0 1-12 0v-32a6 6 0 0 1 12 0m0-56v16a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2h-16a6 6 0 0 1 0-12h16a14 14 0 0 1 14 14m-64-8a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M42 80V56a14 14 0 0 1 14-14h16a6 6 0 0 1 0 12H56a2 2 0 0 0-2 2v24a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhResizeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindCircleLightIcon],svg[ph-rewind-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46.68-131.37a6 6 0 0 0-6.28.57L122 122V92a6 6 0 0 0-9.6-4.8l-48 36a6 6 0 0 0 0 9.6l48 36a6 6 0 0 0 9.6-4.8v-30l46.4 34.8a6 6 0 0 0 9.6-4.8V92a6 6 0 0 0-3.32-5.37M110 152l-32-24l32-24Zm56 0l-32-24l32-24Z"></svg:path>`,
})
export class PhRewindCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRewindLightIcon],svg[ph-rewind-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222.81 59.72a14 14 0 0 0-14.22.46L126 112.79V71.84a13.83 13.83 0 0 0-7.19-12.12a14 14 0 0 0-14.22.46l-88.18 56.17a13.79 13.79 0 0 0 0 23.3l88.18 56.17a14 14 0 0 0 14.22.46a13.83 13.83 0 0 0 7.19-12.12v-40.95l82.59 52.61a14 14 0 0 0 14.22.46a13.83 13.83 0 0 0 7.19-12.12V71.84a13.83 13.83 0 0 0-7.19-12.12M114 184.16a1.73 1.73 0 0 1-1 1.59a1.9 1.9 0 0 1-2-.06l-88.15-56.16a1.8 1.8 0 0 1 0-3.06L111 70.31a1.87 1.87 0 0 1 1-.32a2 2 0 0 1 1 .26a1.73 1.73 0 0 1 1 1.59Zm104 0a1.73 1.73 0 0 1-1 1.59a1.9 1.9 0 0 1-2-.06l-88.19-56.16a1.8 1.8 0 0 1 0-3.06L215 70.31a1.87 1.87 0 0 1 1-.32a2 2 0 0 1 1 .26a1.73 1.73 0 0 1 1 1.59Z"></svg:path>`,
})
export class PhRewindLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRoadHorizonLightIcon],svg[ph-road-horizon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.94 197.23a6 6 0 0 1-8.17-2.29L156.49 70H134v10a6 6 0 0 1-12 0V70H99.51L29.23 194.94a6 6 0 1 1-10.46-5.88L85.74 70H24a6 6 0 0 1 0-12h208a6 6 0 0 1 0 12h-61.74l67 119.06a6 6 0 0 1-2.32 8.17M128 114a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0v-16a6 6 0 0 0-6-6m0 56a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0v-16a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhRoadHorizonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRobotLightIcon],svg[ph-robot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 50h-66V16a6 6 0 0 0-12 0v34H56a30 30 0 0 0-30 30v112a30 30 0 0 0 30 30h144a30 30 0 0 0 30-30V80a30 30 0 0 0-30-30m18 142a18 18 0 0 1-18 18H56a18 18 0 0 1-18-18V80a18 18 0 0 1 18-18h144a18 18 0 0 1 18 18ZM74 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m88 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m2 30H92a26 26 0 0 0 0 52h72a26 26 0 0 0 0-52m-22 12v28h-28v-28Zm-64 14a14 14 0 0 1 14-14h10v28H92a14 14 0 0 1-14-14m86 14h-10v-28h10a14 14 0 0 1 0 28"></svg:path>`,
})
export class PhRobotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketLaunchLightIcon],svg[ph-rocket-launch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.86 47.24a14 14 0 0 0-13.11-13.1c-12.31-.73-43.77.39-69.88 26.5L133.52 66H74.35a13.9 13.9 0 0 0-9.89 4.1l-34.35 34.34a14 14 0 0 0 7.94 23.76l39.13 5.46l45.16 45.16L127.8 218a14 14 0 0 0 23.76 7.92l34.35-34.35a13.9 13.9 0 0 0 4.1-9.89v-59.2l5.35-5.35c26.1-26.13 27.23-57.57 26.5-69.89M38.11 115a2 2 0 0 1 .49-2l34.34-34.42a2 2 0 0 1 1.41-.58h47.17l-43.65 43.64l-38.14-5.32a1.93 1.93 0 0 1-1.62-1.32M178 181.65a2 2 0 0 1-.59 1.41l-34.33 34.34a2 2 0 0 1-3.4-1.11l-5.32-38.16L178 134.48Zm8.87-73L128 167.51L88.49 128l58.87-58.88a78.47 78.47 0 0 1 60.69-23a2 2 0 0 1 1.83 1.88a78.47 78.47 0 0 1-23 60.64ZM100 190.31C95.68 199.84 81.13 222 40 222a6 6 0 0 1-6-6c0-41.13 22.16-55.68 31.69-60a6 6 0 1 1 5 10.92c-7 3.17-22.53 13.52-24.47 42.91c29.39-1.94 39.74-17.52 42.91-24.47a6 6 0 1 1 10.92 5Z"></svg:path>`,
})
export class PhRocketLaunchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRocketLightIcon],svg[ph-rocket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 224a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-22-114a10 10 0 1 0-10-10a10 10 0 0 0 10 10m93.67 45.4L209.31 211a14 14 0 0 1-22.31 8l-27.79-21H96.82L69 219a14 14 0 0 1-22.34-8l-12.33-55.6a14.06 14.06 0 0 1 2.91-12l29-34.76a121.3 121.3 0 0 1 8.48-36.71c12.72-31.88 35.52-51.88 44.73-59a14 14 0 0 1 17.16 0c9.21 7.12 32 27.12 44.73 59a121.3 121.3 0 0 1 8.48 36.71l29 34.76a14.06 14.06 0 0 1 2.85 12M98.26 186h59.48c21.93-38.46 26.12-75.33 12.43-109.62c-11.95-30-34.35-48.87-40.93-54a2 2 0 0 0-2.48 0c-6.58 5.09-29 24-40.93 54c-13.69 34.29-9.5 71.16 12.43 109.62M87 190.4c-12-21.49-18.9-42.6-20.62-63.19l-19.92 23.87a2 2 0 0 0-.42 1.71l12.37 55.64a2 2 0 0 0 3.2 1.13l.13-.11Zm122.57-39.32l-19.89-23.87c-1.72 20.59-8.6 41.7-20.62 63.19l25.23 19l.13.11a2 2 0 0 0 3.2-1.13L210 152.79a2 2 0 0 0-.46-1.71Z"></svg:path>`,
})
export class PhRocketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsLightIcon],svg[ph-rows-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 138H48a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14m2 54a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-40a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-142H48a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 54a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhRowsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusBottomLightIcon],svg[ph-rows-plus-bottom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 114H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-110H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-52 136a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhRowsPlusBottomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusTopLightIcon],svg[ph-rows-plus-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 162H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-110H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM98 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhRowsPlusTopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssLightIcon],svg[ph-rss-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105.5 150.5A69.54 69.54 0 0 1 126 200a6 6 0 0 1-12 0a58 58 0 0 0-58-58a6 6 0 0 1 0-12a69.54 69.54 0 0 1 49.5 20.5M56 82a6 6 0 0 0 0 12a106 106 0 0 1 106 106a6 6 0 0 0 12 0A118 118 0 0 0 56 82m117.38.62A164.92 164.92 0 0 0 56 34a6 6 0 0 0 0 12a153 153 0 0 1 108.89 45.11A153 153 0 0 1 210 200a6 6 0 0 0 12 0a164.92 164.92 0 0 0-48.62-117.38M60 186a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhRssLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRssSimpleLightIcon],svg[ph-rss-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 192a6 6 0 0 1-12 0c0-80.5-65.5-146-146-146a6 6 0 0 1 0-12c87.12 0 158 70.88 158 158M64 106a6 6 0 0 0 0 12a74.09 74.09 0 0 1 74 74a6 6 0 0 0 12 0a86.1 86.1 0 0 0-86-86m4 72a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhRssSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRugLightIcon],svg[ph-rug-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 18a6 6 0 0 0-6 6v18h-36V24a6 6 0 0 0-12 0v18h-36V24a6 6 0 0 0-12 0v18H62V24a6 6 0 0 0-12 0v208a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0V24a6 6 0 0 0-6-6M62 54h132v148H62Zm66 120a6 6 0 0 0 5.14-2.91l24-40a6 6 0 0 0 0-6.18l-24-40a6 6 0 0 0-10.28 0l-24 40a6 6 0 0 0 0 6.18l24 40A6 6 0 0 0 128 174m0-74.34L145 128l-17 28.34L111 128Z"></svg:path>`,
})
export class PhRugLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phRulerLightIcon],svg[ph-ruler-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.91 74.79L181.22 22.1a14 14 0 0 0-19.8 0L22.09 161.41a14 14 0 0 0 0 19.8l52.69 52.69a14 14 0 0 0 19.8 0L233.91 94.59a14 14 0 0 0 0-19.8m-8.49 11.31L86.1 225.41a2 2 0 0 1-2.83 0l-52.69-52.68a2 2 0 0 1 0-2.83L64 136.48l27.76 27.76a6 6 0 1 0 8.48-8.48L72.48 128L96 104.48l27.76 27.76a6 6 0 0 0 8.48-8.48L104.48 96L128 72.49l27.76 27.75a6 6 0 0 0 8.48-8.48L136.49 64l33.41-33.41a2 2 0 0 1 2.83 0l52.69 52.68a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhRulerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSailboatLightIcon],svg[ph-sailboat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.41 173.4A6 6 0 0 0 240 170h-98v-28h74a6 6 0 0 0 4.44-10L142 45.68V8a6 6 0 0 0-10.66-3.78l-104 128A6 6 0 0 0 32 142h98v28H16a6 6 0 0 0-4.69 9.75l29.6 37A14 14 0 0 0 51.84 222h152.32a14 14 0 0 0 10.93-5.25l29.6-37a6 6 0 0 0 .72-6.35m-43-43.4H142V63.52Zm-157.8 0L130 24.9V130Zm161.11 79.25a2 2 0 0 1-1.56.75H51.84a2 2 0 0 1-1.56-.75L28.48 182h199Z"></svg:path>`,
})
export class PhSailboatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScalesLightIcon],svg[ph-scales-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.57 133.77l-32-80a6 6 0 0 0-6.86-3.63L134 64.52V40a6 6 0 0 0-12 0v27.19l-67.3 15a6 6 0 0 0-4.27 3.63l-32 80A6.1 6.1 0 0 0 18 168c0 21.86 23.31 30 38 30s38-8.14 38-30a6.1 6.1 0 0 0-.43-2.23L64.19 92.33L122 79.48V210h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12h-18V76.81l56.21-12.49l-27.78 69.45A6.1 6.1 0 0 0 162 136c0 21.86 23.31 30 38 30s38-8.14 38-30a6.1 6.1 0 0 0-.43-2.23M56 186a36.9 36.9 0 0 1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91l26 64.91C81.06 182.85 62.58 186 56 186m144-32a36.9 36.9 0 0 1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91l26 64.91C225.06 150.85 206.58 154 200 154"></svg:path>`,
})
export class PhScalesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanLightIcon],svg[ph-scan-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v40a6 6 0 0 1-12 0V46h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M80 210H46v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m136-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M40 86a6 6 0 0 0 6-6V46h34a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6m40-12h96a6 6 0 0 1 6 6v96a6 6 0 0 1-6 6H80a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6m6 96h84V86H86Z"></svg:path>`,
})
export class PhScanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScanSmileyLightIcon],svg[ph-scan-smiley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v36a6 6 0 0 1-12 0V46h-30a6 6 0 0 1 0-12h36a6 6 0 0 1 6 6m-6 134a6 6 0 0 0-6 6v30h-30a6 6 0 0 0 0 12h36a6 6 0 0 0 6-6v-36a6 6 0 0 0-6-6M76 210H46v-30a6 6 0 0 0-12 0v36a6 6 0 0 0 6 6h36a6 6 0 0 0 0-12M40 82a6 6 0 0 0 6-6V46h30a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6m88 116a70 70 0 1 1 70-70a70.08 70.08 0 0 1-70 70m58-70a58 58 0 1 0-58 58a58.07 58.07 0 0 0 58-58m-72-12a10 10 0 1 0-10 10a10 10 0 0 0 10-10m38-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-4 41.5c-4.2 3.71-12.81 6.5-20 6.5s-15.83-2.79-20-6.5a6 6 0 0 0-7.94 9c7.44 6.56 19.41 9.5 28 9.5s20.53-2.94 28-9.5a6 6 0 1 0-7.94-9Z"></svg:path>`,
})
export class PhScanSmileyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScissorsLightIcon],svg[ph-scissors-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M159.38 112a6 6 0 0 1 1.57-8.34l67.66-46.31a6 6 0 0 1 6.78 9.91l-67.67 46.3a6 6 0 0 1-8.34-1.56M237 197.09a6 6 0 0 1-8.34 1.56L136 135.27l-45 30.79A34 34 0 1 1 84 156a2 2 0 0 0 .19.2l41.18-28.2l-41.14-28.16l-.23.16a34 34 0 1 1 7-10.1l144.38 98.8a6 6 0 0 1 1.62 8.39M75.56 91.55a22 22 0 1 0-31.12 0a21.88 21.88 0 0 0 31.12 0M82 180a22 22 0 1 0-6.44 15.56A21.88 21.88 0 0 0 82 180"></svg:path>`,
})
export class PhScissorsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScooterLightIcon],svg[ph-scooter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 138a34 34 0 0 0-4.89.36L173.69 38.1A6 6 0 0 0 168 34h-32a6 6 0 0 0 0 12h27.68l18.24 54.73L125.16 170H77.94a34 34 0 1 0-1.44 12H128a6 6 0 0 0 4.64-2.2l53.76-65.62l9.33 28A34 34 0 1 0 212 138M44 194a22 22 0 1 1 22-22a22 22 0 0 1-22 22m168 0a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhScooterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScreencastLightIcon],svg[ph-screencast-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 56v144a14 14 0 0 1-14 14h-72a6 6 0 0 1 0-12h72a2 2 0 0 0 2-2V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v40a6 6 0 0 1-12 0V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14M32 186a6 6 0 0 0 0 12a10 10 0 0 1 10 10a6 6 0 0 0 12 0a22 22 0 0 0-22-22m0-32a6 6 0 0 0 0 12a42 42 0 0 1 42 42a6 6 0 0 0 12 0a54.06 54.06 0 0 0-54-54m0-32a6 6 0 0 0 0 12a74.09 74.09 0 0 1 74 74a6 6 0 0 0 12 0a86.1 86.1 0 0 0-86-86"></svg:path>`,
})
export class PhScreencastLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrewdriverLightIcon],svg[ph-screwdriver-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 51.74a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48-8.49l56-56a6 6 0 0 1 8.48.01M246 58.41a48.12 48.12 0 0 1-14.18 34.24l-53.24 53.24a13.9 13.9 0 0 1-9.89 4.1H152a2 2 0 0 0-2 2v16.83a14.07 14.07 0 0 1-2.84 8.45a7 7 0 0 1-.54.62l-8 8a14 14 0 0 1-19.8 0L98.7 165.77l-78.46 78.47a6 6 0 0 1-8.48-8.48l78.46-78.47l-20.12-20.12a14 14 0 0 1 0-19.8l8-8a4.5 4.5 0 0 1 .62-.54a14 14 0 0 1 8.45-2.83H104a2 2 0 0 0 2-2V87.3a13.92 13.92 0 0 1 4.1-9.9l53.23-53.24A48.43 48.43 0 0 1 246 58.41m-12 0a36.43 36.43 0 0 0-62.18-25.76l-53.24 53.23a2 2 0 0 0-.58 1.42V104a14 14 0 0 1-14 14H87.17a2.1 2.1 0 0 0-1 .25l-7.61 7.61a2 2 0 0 0 0 2.83l48.73 48.73a2 2 0 0 0 2.82 0l7.62-7.61a2.1 2.1 0 0 0 .25-1V152a14 14 0 0 1 14-14h16.69a2 2 0 0 0 1.41-.59l53.23-53.23A36.2 36.2 0 0 0 234 58.41"></svg:path>`,
})
export class PhScrewdriverLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLightIcon],svg[ph-scribble-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.25 188.24a16.63 16.63 0 0 0 0 23.52a6 6 0 1 1-8.48 8.48a28.61 28.61 0 0 1 0-40.48l9.37-9.38a16.63 16.63 0 0 0-23.52-23.51l-66.75 66.75a28.63 28.63 0 0 1-40.49-40.49l98.76-98.75a16.63 16.63 0 0 0-23.52-23.51l-66.76 66.75a28.63 28.63 0 0 1-40.49-40.49l41.38-41.37a6 6 0 1 1 8.49 8.48L50.86 85.62a16.63 16.63 0 0 0 23.52 23.51l66.75-66.75a28.63 28.63 0 0 1 40.49 40.49l-98.76 98.75a16.63 16.63 0 0 0 23.52 23.51l66.76-66.75a28.63 28.63 0 0 1 40.49 40.49Z"></svg:path>`,
})
export class PhScribbleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScribbleLoopLightIcon],svg[ph-scribble-loop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.45 156c-1.32-1.46-24.27-26.42-61.37-40.5c-1.5-18.49-8.13-35.31-19-48C157.74 50.8 137 42 112 42c-50.51 0-83.5 45.38-84.88 47.31a6 6 0 1 0 9.76 7C37.18 95.87 67.75 54 112 54c21.37 0 39 7.35 50.93 21.27c8.26 9.62 13.64 22.14 15.62 36.06a139 139 0 0 0-38-5.33c-25.58 0-47 6.65-62 19.22c-13.1 11-20.62 26.34-20.62 42a45.65 45.65 0 0 0 13.28 32.64C80.56 209.12 93.47 214 108.6 214c51.73 0 80.55-43.09 82.68-85.38c32.05 13.49 52 35.09 52.27 35.4a6 6 0 0 0 8.9-8ZM161 177.53c-9.08 11.16-25.56 24.47-52.4 24.47C90 202 70 191.12 70 167.25C70 143.53 92.09 118 140.6 118a126.7 126.7 0 0 1 38.8 6.22c-.14 19.72-6.82 39.12-18.4 53.31"></svg:path>`,
})
export class PhScribbleLoopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phScrollLightIcon],svg[ph-scroll-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 136a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12h-64a6 6 0 0 1-6-6m6-26h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12m126 82a30 30 0 0 1-30 30H88a30 30 0 0 1-30-30V64a18 18 0 0 0-36 0c0 6.76 5.58 11.19 5.64 11.23a6 6 0 1 1-7.24 9.57C20 84.48 10 76.85 10 64a30 30 0 0 1 30-30h136a30 30 0 0 1 30 30v106h10a6 6 0 0 1 3.6 1.2c.4.32 10.4 7.95 10.4 20.8m-124 0c0-6.76-5.59-11.19-5.64-11.23A6 6 0 0 1 104 170h90V64a18 18 0 0 0-18-18H64a29.82 29.82 0 0 1 6 18v128a18 18 0 0 0 36 0m112 0a14.94 14.94 0 0 0-4.34-10h-97.78a24.8 24.8 0 0 1 2.12 10a29.87 29.87 0 0 1-6 18h88a18 18 0 0 0 18-18"></svg:path>`,
})
export class PhScrollLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealCheckLightIcon],svg[ph-seal-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.3c-4.67 4.86-9.5 9.9-12 15.9c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.48m-43.52-43.74a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhSealCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealLightIcon],svg[ph-seal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.29c-4.67 4.87-9.5 9.91-12 15.91c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.49-10.24c-4.87-4.67-9.91-9.5-15.91-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.49 10.24c4.87 4.67 9.91 9.5 15.91 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.47"></svg:path>`,
})
export class PhSealLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealPercentLightIcon],svg[ph-seal-percent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.29c-4.67 4.87-9.5 9.91-12 15.91c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.49c4.67-4.87 9.5-9.91 12-15.91c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.47M118 96a22 22 0 1 0-22 22a22 22 0 0 0 22-22m-32 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m74 42a22 22 0 1 0 22 22a22 22 0 0 0-22-22m0 32a10 10 0 1 1 10-10a10 10 0 0 1-10 10m12.24-77.76l-80 80a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhSealPercentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealQuestionLightIcon],svg[ph-seal-question-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.3c-4.67 4.86-9.5 9.9-12 15.9c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.48M138 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10m28-72c0 16.92-13.89 31-32 33.58V144a6 6 0 0 1-12 0v-8a6 6 0 0 1 6-6c14.34 0 26-9.87 26-22s-11.66-22-26-22s-26 9.87-26 22v4a6 6 0 0 1-12 0v-4c0-18.75 17-34 38-34s38 15.25 38 34"></svg:path>`,
})
export class PhSealQuestionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSealWarningLightIcon],svg[ph-seal-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.42 104.2c-3.9-4.07-7.93-8.27-9.55-12.18c-1.5-3.63-1.58-9-1.67-14.68c-.14-9.38-.3-20-7.42-27.12S188 42.94 178.66 42.8c-5.68-.09-11-.17-14.68-1.67c-3.91-1.62-8.11-5.65-12.18-9.55C145.16 25.22 137.64 18 128 18s-17.16 7.22-23.8 13.58c-4.07 3.9-8.27 7.93-12.18 9.55c-3.63 1.5-9 1.58-14.68 1.67c-9.38.14-20 .3-27.12 7.42S42.94 68 42.8 77.34c-.09 5.68-.17 11-1.67 14.68c-1.62 3.91-5.65 8.11-9.55 12.18C25.22 110.84 18 118.36 18 128s7.22 17.16 13.58 23.8c3.9 4.07 7.93 8.27 9.55 12.18c1.5 3.63 1.58 9 1.67 14.68c.14 9.38.3 20 7.42 27.12s17.78 7.28 27.12 7.42c5.68.09 11 .17 14.68 1.67c3.91 1.62 8.11 5.65 12.18 9.55c6.64 6.36 14.16 13.58 23.8 13.58s17.16-7.22 23.8-13.58c4.07-3.9 8.27-7.93 12.18-9.55c3.63-1.5 9-1.58 14.68-1.67c9.38-.14 20-.3 27.12-7.42s7.28-17.74 7.42-27.12c.09-5.68.17-11 1.67-14.68c1.62-3.91 5.65-8.11 9.55-12.18c6.36-6.64 13.58-14.16 13.58-23.8s-7.22-17.16-13.58-23.8m-8.66 39.3c-4.67 4.86-9.5 9.9-12 15.9c-2.38 5.74-2.48 12.52-2.58 19.08c-.11 7.44-.23 15.14-3.9 18.82s-11.38 3.79-18.82 3.9c-6.56.1-13.34.2-19.08 2.58c-6 2.48-11 7.31-15.91 12c-5.25 5-10.68 10.24-15.49 10.24s-10.24-5.21-15.5-10.24c-4.86-4.67-9.9-9.5-15.9-12c-5.74-2.38-12.52-2.48-19.08-2.58c-7.44-.11-15.14-.23-18.82-3.9s-3.79-11.38-3.9-18.82c-.1-6.56-.2-13.34-2.58-19.08c-2.48-6-7.31-11-12-15.91C35.21 138.24 30 132.81 30 128s5.21-10.24 10.24-15.5c4.67-4.86 9.5-9.9 12-15.9c2.38-5.74 2.48-12.52 2.58-19.08c.11-7.44.23-15.14 3.9-18.82s11.38-3.79 18.82-3.9c6.56-.1 13.34-.2 19.08-2.58c6-2.48 11-7.31 15.91-12C117.76 35.21 123.19 30 128 30s10.24 5.21 15.5 10.24c4.86 4.67 9.9 9.5 15.9 12c5.74 2.38 12.52 2.48 19.08 2.58c7.44.11 15.14.23 18.82 3.9s3.79 11.38 3.9 18.82c.1 6.56.2 13.34 2.58 19.08c2.48 6 7.31 11 12 15.91c5 5.25 10.24 10.68 10.24 15.49s-5.23 10.22-10.26 15.48M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSealWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatLightIcon],svg[ph-seat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 232a6 6 0 0 1-6 6H112a6 6 0 1 1 0-12h104a6 6 0 0 1 6 6m0-72v32a14 14 0 0 1-14 14h-93.89a13.94 13.94 0 0 1-12.53-7.74l-58.11-116a14.06 14.06 0 0 1 0-12.52l22.12-44a14 14 0 0 1 18.58-6.35l33.74 14.24l.34.17a14 14 0 0 1 6.27 18.78l-.09.16l-14.25 26.42a2 2 0 0 0 0 1.73l31.78 64a2 2 0 0 0 1.78 1.09H208A14 14 0 0 1 222 160m-12 0a2 2 0 0 0-2-2h-64.23a13.94 13.94 0 0 1-12.52-7.74l-31.78-64a14 14 0 0 1 0-12.5l.09-.17l14.25-26.42a2 2 0 0 0 .08-1.47a2 2 0 0 0-.89-1.1L79.35 30.37l-.35-.16a2 2 0 0 0-.89-.21a2 2 0 0 0-1.79 1.1l-22.12 44a2 2 0 0 0 0 1.78l58.12 116a2 2 0 0 0 1.79 1.11H208a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhSeatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSeatbeltLightIcon],svg[ph-seatbelt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 110a42 42 0 1 0-42-42a42 42 0 0 0 42 42m0-72a30 30 0 1 1-30 30a30 30 0 0 1 30-30m78 186a6 6 0 0 1-6 6H56a6 6 0 0 1-4-10.5l100.58-88.75a66 66 0 0 0-89.78 50.72a6 6 0 0 1-5.91 5.05a6 6 0 0 1-1-.07a6 6 0 0 1-5-6.88A78 78 0 0 1 162.49 122L188 99.5a6 6 0 1 1 7.94 9L71.87 218H200a6 6 0 0 1 6 6m-13.92-76.48A77.53 77.53 0 0 1 206 192a6 6 0 0 1-12 0a65.6 65.6 0 0 0-11.77-37.63a6 6 0 0 1 9.85-6.85"></svg:path>`,
})
export class PhSeatbeltLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSecurityCameraLightIcon],svg[ph-security-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 138a6 6 0 0 0-6 6v18h-46.69a2 2 0 0 1-1.41-.59l-19.76-19.75L225.9 89.9a14 14 0 0 0 0-19.8l-56-56a14 14 0 0 0-19.81 0L4.34 160.35A8 8 0 0 0 10 174h40.2l35.9 35.9a14 14 0 0 0 19.8 0l59.76-59.76l19.75 19.76a13.94 13.94 0 0 0 9.9 4.1H242v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6M158.59 22.59a2 2 0 0 1 2.82 0l14.1 14.1L50.2 162H19.64ZM97.41 201.41a2 2 0 0 1-2.82 0L61.17 168L184 45.17l33.41 33.42a2 2 0 0 1 0 2.82Z"></svg:path>`,
})
export class PhSecurityCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionAllLightIcon],svg[ph-selection-all-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 40a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6m38 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0 72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14v-24a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M40 78a6 6 0 0 0 6-6V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12H48a14 14 0 0 0-14 14v24a6 6 0 0 0 6 6m136 104H80a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6h96a6 6 0 0 1 6 6v96a6 6 0 0 1-6 6m-6-96H86v84h84Z"></svg:path>`,
})
export class PhSelectionAllLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionBackgroundLightIcon],svg[ph-selection-background-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 82H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2ZM138 40a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6m84 8v8a6 6 0 0 1-12 0v-8a2 2 0 0 0-2-2h-8a6 6 0 0 1 0-12h8a14 14 0 0 1 14 14m0 48v16a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m0 56v8a14 14 0 0 1-14 14h-8a6 6 0 0 1 0-12h8a2 2 0 0 0 2-2v-8a6 6 0 0 1 12 0M82 56v-8a14 14 0 0 1 14-14h8a6 6 0 0 1 0 12h-8a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhSelectionBackgroundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundLightIcon],svg[ph-selection-foreground-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 216a6 6 0 0 1-6 6h-8a14 14 0 0 1-14-14v-8a6 6 0 0 1 12 0v8a2 2 0 0 0 2 2h8a6 6 0 0 1 6 6m50-6H96a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m-72-44a6 6 0 0 0 6-6v-16a6 6 0 0 0-12 0v16a6 6 0 0 0 6 6m128 28a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6m0-84a6 6 0 0 0 6-6v-8a14 14 0 0 0-14-14h-8a6 6 0 0 0 0 12h8a2 2 0 0 1 2 2v8a6 6 0 0 0 6 6M56 82h-8a14 14 0 0 0-14 14v8a6 6 0 0 0 12 0v-8a2 2 0 0 1 2-2h8a6 6 0 0 0 0-12m152-48H96a14 14 0 0 0-14 14v40a6 6 0 0 0 6 6h24a6 6 0 0 0 0-12H94V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v112a2 2 0 0 1-2 2h-34v-18a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhSelectionForegroundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionInverseLightIcon],svg[ph-selection-inverse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 216a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M222 48v160a14 14 0 0 1-14 14h-24a6 6 0 0 1 0-12h17.51L46 54.48V72a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-14-2H54.49L210 201.52V48a2 2 0 0 0-2-2"></svg:path>`,
})
export class PhSelectionInverseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionLightIcon],svg[ph-selection-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 40a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0 72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14v-24a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12m0-176H48a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSelectionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionPlusLightIcon],svg[ph-selection-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 40a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m66-162v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2m6 58a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12m0-176H48a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12m168 176h-18v-18a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0v-18h18a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSelectionPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashLightIcon],svg[ph-selection-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 40a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6m38 170h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-176h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V48a14 14 0 0 0-14-14m8 72a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6M40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12M52.44 36a6 6 0 0 0-8.88 8l160 176a6 6 0 0 0 8.88-8.08Z"></svg:path>`,
})
export class PhSelectionSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShapesLightIcon],svg[ph-shapes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M69.69 62.1a6 6 0 0 0-11.38 0l-40 120A6 6 0 0 0 24 190h80a6 6 0 0 0 5.69-7.9ZM32.32 178L64 83l31.68 95ZM206 76a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50m-88 0a38 38 0 1 1 38 38a38 38 0 0 1-38-38m106 70h-88a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6v-56a6 6 0 0 0-6-6m-6 56h-76v-44h76Z"></svg:path>`,
})
export class PhShapesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareFatLightIcon],svg[ph-share-fat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 107.76l-80-80A6 6 0 0 0 146 32v42.2c-54.48 3.59-120.39 55-127.93 120.66a10 10 0 0 0 17.23 8C46.56 190.85 87 152.6 146 150.13V192a6 6 0 0 0 10.24 4.24l80-80a6 6 0 0 0 0-8.48M158 177.52V144a6 6 0 0 0-6-6c-27.73 0-54.76 7.25-80.32 21.55a193.4 193.4 0 0 0-40.81 30.65c4.7-26.56 20.16-52 44-72.27C98.47 97.94 127.29 86 152 86a6 6 0 0 0 6-6V46.49L223.51 112Z"></svg:path>`,
})
export class PhShareFatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareLightIcon],svg[ph-share-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 108.24l-48 48a6 6 0 0 1-8.48-8.48L209.51 110H165a89.94 89.94 0 0 0-87.17 67.5a6 6 0 0 1-11.62-3A101.94 101.94 0 0 1 165 98h44.53l-37.77-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48M192 210H38V88a6 6 0 0 0-12 0v128a6 6 0 0 0 6 6h160a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhShareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShareNetworkLightIcon],svg[ph-share-network-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 162a37.9 37.9 0 0 0-28.3 12.67l-48.9-31.43a37.9 37.9 0 0 0 0-30.48l48.9-31.43a38 38 0 1 0-6.5-10.09l-48.9 31.43a38 38 0 1 0 0 50.66l48.9 31.43A38 38 0 1 0 176 162m0-132a26 26 0 1 1-26 26a26 26 0 0 1 26-26M64 154a26 26 0 1 1 26-26a26 26 0 0 1-26 26m112 72a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhShareNetworkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckLightIcon],svg[ph-shield-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m2 70c0 37.76-13.94 68.39-41.44 91.06A131.2 131.2 0 0 1 128 225.72a131 131 0 0 1-40.56-22.66C59.94 180.39 46 149.76 46 112V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-37.76-12.24a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhShieldCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredLightIcon],svg[ph-shield-checkered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m2 14v56c0 3.39-.12 6.72-.34 10H134V54h74a2 2 0 0 1 2 2M46 56a2 2 0 0 1 2-2h74v68H46.34c-.22-3.28-.34-6.61-.34-10Zm1.71 78H122v89.52a133.1 133.1 0 0 1-34.56-20.46C65.5 185 52.2 161.8 47.71 134m120.85 69.06A133.1 133.1 0 0 1 134 223.52V134h74.29c-4.49 27.8-17.79 51-39.73 69.06"></svg:path>`,
})
export class PhShieldCheckeredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldChevronLightIcon],svg[ph-shield-chevron-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m-39.44 161.06A131.2 131.2 0 0 1 128 225.72a131 131 0 0 1-40.56-22.66a113.1 113.1 0 0 1-25.56-29.45L128 127.32l66.12 46.29a113.1 113.1 0 0 1-25.56 29.45M210 112c0 18.75-3.44 35.75-10.28 50.88l-68.28-47.8a6 6 0 0 0-6.88 0l-68.28 47.8C49.44 147.75 46 130.75 46 112V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhShieldChevronLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldLightIcon],svg[ph-shield-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a14 14 0 0 0-14 14v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c.95-.26 23.49-6.55 46.22-25.15C196.88 195.4 222 163.94 222 112V56a14 14 0 0 0-14-14m2 70c0 37.76-13.94 68.39-41.44 91.06A131.2 131.2 0 0 1 128 225.72a131 131 0 0 1-40.56-22.66C59.94 180.39 46 149.76 46 112V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhShieldLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldPlusLightIcon],svg[ph-shield-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 128a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26V96a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m56-72v56c0 51.94-25.12 83.4-46.2 100.64c-22.73 18.6-45.27 24.89-46.22 25.15a6 6 0 0 1-3.16 0c-1-.26-23.49-6.55-46.22-25.15C59.12 195.4 34 163.94 34 112V56a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v56c0 37.75 13.94 68.39 41.44 91.06A130.8 130.8 0 0 0 128 225.72a131 131 0 0 0 40.56-22.66C196.06 180.39 210 149.75 210 112Z"></svg:path>`,
})
export class PhShieldPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldSlashLightIcon],svg[ph-shield-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-9.63 7A14 14 0 0 0 34 56v56c0 51.94 25.12 83.4 46.2 100.64c22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c1.36-.37 31.91-8.95 57.67-35.7L203.56 220a6 6 0 0 0 8.88-8.08ZM128 225.72a130.8 130.8 0 0 1-40.56-22.66C59.94 180.39 46 149.75 46 112V56a2 2 0 0 1 2-2h4.6l126.56 139.19A130.7 130.7 0 0 1 128 225.72M222 56v56c0 20.29-3.83 39.05-11.38 55.77a6 6 0 0 1-5.47 3.53a5.9 5.9 0 0 1-2.47-.54a6 6 0 0 1-3-7.93C206.53 147.67 210 130.57 210 112V56a2 2 0 0 0-2-2H98.52a6 6 0 1 1 0-12H208a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhShieldSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldStarLightIcon],svg[ph-shield-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.57 117.77a6 6 0 0 1-3.34 7.8l-32.73 13.09l19.3 25.74a6 6 0 0 1-9.6 7.2L128 146l-19.2 25.6a6 6 0 1 1-9.6-7.2l19.3-25.74l-32.73-13.09a6 6 0 0 1 4.46-11.14L122 127.14V96a6 6 0 0 1 12 0v31.14l31.77-12.71a6 6 0 0 1 7.8 3.34M222 56v56c0 51.94-25.12 83.4-46.2 100.64c-22.73 18.6-45.27 24.89-46.22 25.15a6 6 0 0 1-3.16 0c-1-.26-23.49-6.55-46.22-25.15C59.12 195.4 34 163.94 34 112V56a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v56c0 37.75 13.94 68.39 41.44 91.06A131 131 0 0 0 128 225.72a131.2 131.2 0 0 0 40.56-22.66C196.06 180.39 210 149.75 210 112Z"></svg:path>`,
})
export class PhShieldStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningLightIcon],svg[ph-shield-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V96a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m6 26a10 10 0 1 0 10 10a10 10 0 0 0-10-10m94-106v56c0 51.94-25.12 83.4-46.2 100.64c-22.73 18.6-45.27 24.89-46.22 25.15a6 6 0 0 1-3.16 0c-1-.26-23.49-6.55-46.22-25.15C59.12 195.4 34 163.94 34 112V56a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v56c0 37.75 13.94 68.39 41.44 91.06A131 131 0 0 0 128 225.72a131.2 131.2 0 0 0 40.56-22.66C196.06 180.39 210 149.75 210 112Z"></svg:path>`,
})
export class PhShieldWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShippingContainerLightIcon],svg[ph-shipping-container-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.85 72.57l-106.2-30.34a6 6 0 0 0-2.5-.17L22 57.08a14.07 14.07 0 0 0-12 13.86v114.12a14.07 14.07 0 0 0 12 13.86l105.13 15a6 6 0 0 0 .85.06a6 6 0 0 0 1.65-.23l106.2-30.34A14.06 14.06 0 0 0 246 170V86a14.06 14.06 0 0 0-10.15-13.43M96 122H78V61.2l44-6.28v146.16l-44-6.28V134h18a6 6 0 0 0 0-12m-74 63.06V70.94a2 2 0 0 1 1.72-2l42.28-6V122H48a6 6 0 0 0 0 12h18v59.08l-42.28-6a2 2 0 0 1-1.72-2.02M234 170a2 2 0 0 1-1.45 1.92L134 200.05V56l98.55 28.16A2 2 0 0 1 234 86Z"></svg:path>`,
})
export class PhShippingContainerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShirtFoldedLightIcon],svg[ph-shirt-folded-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42h-21.52l-14.23-14.24A6 6 0 0 0 160 26H96a6 6 0 0 0-4.25 1.76L77.52 42H56a14 14 0 0 0-14 14v152a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m-72 27.18L107.21 38h41.58Zm32.93-27.76l9.07 9.07V104a2 2 0 0 1-3.25 1.56l-30.82-26.64ZM86 50.49l9.07-9.07l25 37.5l-30.82 26.62A2 2 0 0 1 86 104ZM54 208V56a2 2 0 0 1 2-2h18v50a13.87 13.87 0 0 0 8.06 12.68A14.1 14.1 0 0 0 88 118a13.87 13.87 0 0 0 9-3.26l.08-.07l25-21.56V210H56a2 2 0 0 1-2-2m148 0a2 2 0 0 1-2 2h-66V93.11l25 21.56l.08.07A13.87 13.87 0 0 0 168 118a14.1 14.1 0 0 0 6-1.35a13.87 13.87 0 0 0 8-12.65V54h18a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhShirtFoldedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShootingStarLightIcon],svg[ph-shooting-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.45 70.69a11.42 11.42 0 0 0-10-7.9l-38.16-3L174.59 25a11.51 11.51 0 0 0-21.18 0l-14.68 34.78l-38.15 3a11.39 11.39 0 0 0-6.53 20.06l29 24.48l-8.86 36.59a11.35 11.35 0 0 0 4.34 11.83a11.51 11.51 0 0 0 12.78.58L164 136.66l32.69 19.67a11.5 11.5 0 0 0 12.77-.58a11.33 11.33 0 0 0 4.34-11.83l-8.8-36.59l29-24.48a11.32 11.32 0 0 0 3.45-12.16m-43.08 29.87a6 6 0 0 0-2 6l9.41 38.86l-34.68-20.9a6 6 0 0 0-6.19 0l-34.72 20.89l9.41-38.86a6 6 0 0 0-2-6l-30.66-25.9l40.37-3.19a6 6 0 0 0 5.06-3.65l15.63-37l15.63 37a6 6 0 0 0 5.06 3.65l40.37 3.19ZM86.69 121.79l-58.45 58.45a6 6 0 0 1-8.48-8.48l58.45-58.45a6 6 0 0 1 8.48 8.48m10.82 52.7a6 6 0 0 1 0 8.49l-53.27 53.26a6 6 0 0 1-8.48-8.48L89 174.49a6 6 0 0 1 8.51 0m73-1a6 6 0 0 1 0 8.48l-54.29 54.28a6 6 0 0 1-8.48-8.48L162 173.48a6 6 0 0 1 8.53 0Z"></svg:path>`,
})
export class PhShootingStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagLightIcon],svg[ph-shopping-bag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM174 88a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhShoppingBagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenLightIcon],svg[ph-shopping-bag-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v18H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2V86h180v114a2 2 0 0 1-2 2m-42-90a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhShoppingBagOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartLightIcon],svg[ph-shopping-cart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.61 60.16A6 6 0 0 0 224 58H61l-6.37-35.07a6 6 0 0 0-5.9-4.93H24a6 6 0 0 0 0 12h19.72l25.81 141.94a21.93 21.93 0 0 0 6.24 11.77a26 26 0 1 0 38.12 6.29h52.22A26 26 0 1 0 188 178H91.17a10 10 0 0 1-9.84-8.21L77.73 150H196.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91M106 204a14 14 0 1 1-14-14a14 14 0 0 1 14 14m96 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14m3.94-74.21a10 10 0 0 1-9.84 8.21H75.55L63.19 70h153.62Z"></svg:path>`,
})
export class PhShoppingCartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShoppingCartSimpleLightIcon],svg[ph-shopping-cart-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.78 68.37A6 6 0 0 0 232 66H55.67l-9.89-35.61A6 6 0 0 0 40 26H16a6 6 0 0 0 0 12h19.44L71 165.89A22.08 22.08 0 0 0 92.16 182H191a22.08 22.08 0 0 0 21.2-16.11l25.63-92.28a6 6 0 0 0-1.05-5.24m-36.2 94.31A10 10 0 0 1 191 170H92.16a10 10 0 0 1-9.63-7.32L59 78h165.11ZM102 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14m104 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhShoppingCartSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShovelLightIcon],svg[ph-shovel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.24 59.76l-48-48a6 6 0 0 0-8.48 8.48L207.52 40l-73.86 73.86L97.9 78.1a14 14 0 0 0-19.8 0l-56 56A13.94 13.94 0 0 0 18 144v80a14 14 0 0 0 14 14h80a13.94 13.94 0 0 0 9.9-4.1l56-56a14 14 0 0 0 0-19.8l-35.76-35.76L216 48.48l19.76 19.76a6 6 0 1 0 8.48-8.48m-74.83 106.82a2 2 0 0 1 0 2.84l-56 56a2 2 0 0 1-1.41.58H32a2 2 0 0 1-2-2v-80a2 2 0 0 1 .58-1.42l56-56A2 2 0 0 1 88 86a2.07 2.07 0 0 1 1.42.58l35.75 35.76l-41.41 41.42a6 6 0 1 0 8.48 8.48l41.42-41.41Z"></svg:path>`,
})
export class PhShovelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShowerLightIcon],svg[ph-shower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 236a10 10 0 1 1-10-10a10 10 0 0 1 10 10m22-42a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-64 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m32-32a10 10 0 1 0 10 10a10 10 0 0 0-10-10M254 40a6 6 0 0 1-6 6h-29.51l-28.9 28.89l-21.76 127.43a14 14 0 0 1-23.71 7.57l-98-98a14 14 0 0 1 7.6-23.71l127.4-21.76l30.65-30.65A6 6 0 0 1 216 34h32a6 6 0 0 1 6 6m-77.34 39.34L55.7 100a2 2 0 0 0-1.11 3.39l98 98a2 2 0 0 0 3.39-1.09Z"></svg:path>`,
})
export class PhShowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShrimpLightIcon],svg[ph-shrimp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 116a10 10 0 1 1 10 10a10 10 0 0 1-10-10m83.9-32a78.1 78.1 0 0 1-77.9 74h-32a14 14 0 0 0 0 28h56a6 6 0 0 1 0 12h-50v20h34a6 6 0 0 1 0 12H96a78 78 0 0 1 0-156h116a14 14 0 0 0 0-28h-84a22 22 0 0 1-22-22a6 6 0 0 1 12 0a10 10 0 0 0 10 10h84a26 26 0 0 1 9.9 50M50.65 199.88l35.48-25.34A24 24 0 0 1 86 172a25.9 25.9 0 0 1 1.46-8.57L31.51 138a65.8 65.8 0 0 0 19.14 61.88M90.3 186.3l-29.81 21.29A65.56 65.56 0 0 0 96 218h10v-20.71a26.05 26.05 0 0 1-15.7-10.99m15.7-39.59V86H96a66.1 66.1 0 0 0-60.86 40.47L94 153.24a25.86 25.86 0 0 1 12-6.53M209.73 86H118v60h26a66.09 66.09 0 0 0 65.73-60"></svg:path>`,
})
export class PhShrimpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleAngularLightIcon],svg[ph-shuffle-angular-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 179.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L217.52 190H168a6 6 0 0 1-4.88-2.51L84.91 78H32a6 6 0 0 1 0-12h56a6 6 0 0 1 4.88 2.51L171.09 178h46.43l-13.76-13.76a6 6 0 0 1 8.48-8.48Zm-92.07-74.4a6 6 0 0 0 8.37-1.4l18.55-26h46.43l-13.76 13.8a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L217.52 66H168a6 6 0 0 0-4.88 2.51L142.78 97a6 6 0 0 0 1.39 8.36m-32.34 45.28a6 6 0 0 0-8.37 1.4L84.91 178H32a6 6 0 0 0 0 12h56a6 6 0 0 0 4.88-2.51L113.22 159a6 6 0 0 0-1.39-8.36"></svg:path>`,
})
export class PhShuffleAngularLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleLightIcon],svg[ph-shuffle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 179.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L217.52 190h-16.58a70.16 70.16 0 0 1-57-29.31l-41.71-58.4A58.11 58.11 0 0 0 55.06 78H32a6 6 0 0 1 0-12h23.06a70.16 70.16 0 0 1 57 29.31l41.71 58.4A58.11 58.11 0 0 0 200.94 178h16.58l-13.76-13.76a6 6 0 0 1 8.48-8.48Zm-92.06-74.41a5.9 5.9 0 0 0 3.48 1.12a6 6 0 0 0 4.89-2.51l1.19-1.67A58.11 58.11 0 0 1 200.94 78h16.58l-13.76 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L217.52 66h-16.58a70.16 70.16 0 0 0-57 29.31L142.78 97a6 6 0 0 0 1.4 8.35m-32.36 45.3a6 6 0 0 0-8.37 1.39l-1.19 1.67A58.11 58.11 0 0 1 55.06 178H32a6 6 0 0 0 0 12h23.06a70.16 70.16 0 0 0 57-29.31l1.19-1.67a6 6 0 0 0-1.43-8.37"></svg:path>`,
})
export class PhShuffleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleLightIcon],svg[ph-shuffle-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v40a6 6 0 0 1-12 0V62.48l-47.13 47.14a6 6 0 0 1-8.49-8.49L193.52 54H168a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-6 114a6 6 0 0 0-6 6v25.52L52.24 43.76a6 6 0 0 0-8.48 8.48L193.52 202H168a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-106.87-15.62l-57.37 57.38a6 6 0 1 0 8.48 8.48l57.38-57.37a6 6 0 0 0-8.49-8.49"></svg:path>`,
})
export class PhShuffleSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarLightIcon],svg[ph-sidebar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 200v-50h18a6 6 0 0 0 0-12H38v-20h18a6 6 0 0 0 0-12H38V86h18a6 6 0 0 0 0-12H38V56a2 2 0 0 1 2-2h42v148H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2H94V54h122a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSidebarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSidebarSimpleLightIcon],svg[ph-sidebar-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 200V56a2 2 0 0 1 2-2h42v148H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2H94V54h122a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSidebarSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSigmaLightIcon],svg[ph-sigma-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186 72V54H76.48l56.21 70.25a6 6 0 0 1 0 7.5L76.48 202H186v-18a6 6 0 0 1 12 0v24a6 6 0 0 1-6 6H64a6 6 0 0 1-4.69-9.75l61-76.25l-61-76.25A6 6 0 0 1 64 42h128a6 6 0 0 1 6 6v24a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhSigmaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignInLightIcon],svg[ph-sign-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m140.24 132.24l-40 40a6 6 0 0 1-8.48-8.48L121.51 134H24a6 6 0 0 1 0-12h97.51L91.76 92.24a6 6 0 0 1 8.48-8.48l40 40a6 6 0 0 1 0 8.48M200 34h-64a6 6 0 0 0 0 12h58v164h-58a6 6 0 0 0 0 12h64a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhSignInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignOutLightIcon],svg[ph-sign-out-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 216a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H54v164h58a6 6 0 0 1 6 6m110.24-92.24l-40-40a6 6 0 0 0-8.48 8.48L209.51 122H112a6 6 0 0 0 0 12h97.51l-29.75 29.76a6 6 0 1 0 8.48 8.48l40-40a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhSignOutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignatureLightIcon],svg[ph-signature-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 170H60.6c3.34-6.54 6.73-13.35 10.06-20.29a26.6 26.6 0 0 0 4.3.35c14.23 0 31.09-11.12 50.33-33.22c1 3 2.2 6.25 3.68 9.56c6.89 15.45 15.68 23.39 26.14 23.6h.39c8.81 0 17.71-5.77 27-17.58c5.83 8.26 19.12 17.58 49.5 17.58a6 6 0 0 0 0-12c-39.69 0-41.88-16.61-42-18.06a5.83 5.83 0 0 0-4.15-5.8a6.09 6.09 0 0 0-6.88 2.59c-12.16 18.67-20.07 21.33-23.63 21.27c-10.78-.21-19.11-23.68-21.46-35a6 6 0 0 0-10.57-2.53C104.64 123.86 88 137 76.18 137.92C100 85.84 107.23 52.7 98.23 36.78C95.44 31.86 89.66 26 77.91 26c-15 0-27 14.62-32.82 40.1c-6.81 29.84-2.97 65.9 14.53 78.9c-4.15 8.64-8.4 17.08-12.52 25H24a6 6 0 0 0 0 12h16.76c-12.11 22.58-21.76 38.66-21.9 38.91a6 6 0 1 0 10.28 6.18c.16-.26 11.56-19.27 25.21-45.09H232a6 6 0 0 0 0-12M56.79 68.77C61.05 50.08 69.34 38 77.91 38c6.4 0 8.64 2.51 9.87 4.69c4 7 6 28.15-22.88 91c-10.31-10.3-14.17-38.39-8.11-64.92"></svg:path>`,
})
export class PhSignatureLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSignpostLightIcon],svg[ph-signpost-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.46 108l-33.62-37.37a14 14 0 0 0-10.4-4.63H134V32a6 6 0 0 0-12 0v34H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h82v66a6 6 0 0 0 12 0v-66h66.44a14 14 0 0 0 10.4-4.63L244.46 116a6 6 0 0 0 0-8m-42.54 37.35a2 2 0 0 1-1.48.66H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h160.44a2 2 0 0 1 1.48.66l30 33.34Z"></svg:path>`,
})
export class PhSignpostLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSimCardLightIcon],svg[ph-sim-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h93.52L202 90.49ZM74 120v72a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6m12 6h84v60h-20v-34a6 6 0 0 0-12 0v34h-20v-34a6 6 0 0 0-12 0v34H86Z"></svg:path>`,
})
export class PhSimCardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSirenLightIcon],svg[ph-siren-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 16V8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m78 30a6 6 0 0 0 4.24-1.76l8-8a6 6 0 1 0-8.48-8.48l-8 8A6 6 0 0 0 200 46M51.76 44.24a6 6 0 0 0 8.48-8.48l-8-8a6 6 0 0 0-8.48 8.48ZM137 74.08a6 6 0 1 0-2 11.84c20 3.34 35 21.44 35 42.08a6 6 0 0 0 12 0c0-26.43-19.35-49.61-45-53.92M230 176v24a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-24a14 14 0 0 1 14-14h2v-34a86 86 0 0 1 86-86h.65c47.06.35 85.35 39.38 85.35 87v33h2a14 14 0 0 1 14 14M54 162h148v-33c0-41-32.94-74.7-73.44-75H128a74 74 0 0 0-74 74Zm164 14a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhSirenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSketchLogoLightIcon],svg[ph-sketch-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.52 100.05l-56-64A6 6 0 0 0 184 34H72a6 6 0 0 0-4.52 2l-56 64a6 6 0 0 0 .13 8l112 120a6 6 0 0 0 8.78 0l112-120a6 6 0 0 0 .13-7.95M75.94 110l34.6 86.49L29.81 110Zm91.2 0L128 207.84L88.86 110ZM92 98l36-48l36 48Zm88.06 12h46.13l-80.73 86.49Zm46.72-12H179l-39-52h41.28ZM74.72 46H116L77 98H29.22Z"></svg:path>`,
})
export class PhSketchLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackCircleLightIcon],svg[ph-skip-back-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m34.91-135.25a6 6 0 0 0-6.09.16L102 117.17V88a6 6 0 0 0-12 0v80a6 6 0 0 0 12 0v-29.17l54.82 34.26A6 6 0 0 0 166 168V88a6 6 0 0 0-3.09-5.25M154 157.17L107.32 128L154 98.83Z"></svg:path>`,
})
export class PhSkipBackCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipBackLightIcon],svg[ph-skip-back-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.84 35.77a14 14 0 0 0-14.21.37L62 112.83V40a6 6 0 0 0-12 0v176a6 6 0 0 0 12 0v-72.84l122.63 76.7a14 14 0 0 0 14.21.37a13.69 13.69 0 0 0 7.16-12.11V47.88a13.69 13.69 0 0 0-7.16-12.11M194 208.12a1.79 1.79 0 0 1-1 1.62a2 2 0 0 1-2-.05L62.88 129.56a1.82 1.82 0 0 1 0-3.12L191 46.31a2 2 0 0 1 1-.31a2.1 2.1 0 0 1 1 .26a1.79 1.79 0 0 1 1 1.62Z"></svg:path>`,
})
export class PhSkipBackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardCircleLightIcon],svg[ph-skip-forward-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m32-136a6 6 0 0 0-6 6v29.17L99.18 82.91A6 6 0 0 0 90 88v80a6 6 0 0 0 9.18 5.09L154 138.83V168a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m-58 75.17V98.83L148.68 128Z"></svg:path>`,
})
export class PhSkipForwardCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardLightIcon],svg[ph-skip-forward-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 34a6 6 0 0 0-6 6v72.84L71.37 36.14a14 14 0 0 0-14.21-.37A13.69 13.69 0 0 0 50 47.88v160.24a13.69 13.69 0 0 0 7.16 12.11a14 14 0 0 0 14.21-.37L194 143.17V216a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-6.88 95.56L65 209.69a2 2 0 0 1-2 .05a1.79 1.79 0 0 1-1-1.62V47.88a1.79 1.79 0 0 1 1-1.62a2.1 2.1 0 0 1 1-.26a2 2 0 0 1 1 .31l128.12 80.13a1.82 1.82 0 0 1 0 3.12"></svg:path>`,
})
export class PhSkipForwardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkullLightIcon],svg[ph-skull-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 106a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14m72-40a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14M128 18C71.76 18 26 62 26 116c0 33.77 18.3 65.31 48 83.15V216a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14v-16.85c29.7-17.84 48-49.38 48-83.15c0-54-45.76-98-102-98m45.09 172.44a6 6 0 0 0-3.09 5.25V216a2 2 0 0 1-2 2h-18v-26a6 6 0 0 0-12 0v26h-20v-26a6 6 0 0 0-12 0v26H88a2 2 0 0 1-2-2v-20.31a6 6 0 0 0-3.09-5.25C55.21 175.09 38 146.56 38 116c0-47.42 40.37-86 90-86s90 38.58 90 86c0 30.56-17.21 59.09-44.91 74.44"></svg:path>`,
})
export class PhSkullLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSkypeLogoLightIcon],svg[ph-skype-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 152c0 16.54-17.05 30-38 30s-38-13.46-38-30a6 6 0 0 1 12 0c0 9.76 11.91 18 26 18s26-8.24 26-18c0-11.21-10.7-15.1-28.33-20.18c-15.89-4.58-33.89-9.77-33.89-27.82c0-17.1 15.57-30 36.22-30c15 0 27.74 6.88 33.34 18a6 6 0 0 1-10.71 5.42C147.08 90.36 138.41 86 128 86c-13.81 0-24.22 7.74-24.22 18c0 8.41 9.52 11.76 25.21 16.29C145.48 125 166 131 166 152m64 24a54.06 54.06 0 0 1-54 54a53.43 53.43 0 0 1-30.72-9.59A94.06 94.06 0 0 1 35.59 110.72A53.43 53.43 0 0 1 26 80a54.06 54.06 0 0 1 54-54a53.43 53.43 0 0 1 30.72 9.59a94.06 94.06 0 0 1 109.69 109.69A53.43 53.43 0 0 1 230 176m-12 0a41.57 41.57 0 0 0-8.74-25.65a6 6 0 0 1-1.11-4.93a82.09 82.09 0 0 0-97.57-97.57a6 6 0 0 1-4.93-1.11A41.57 41.57 0 0 0 80 38a42 42 0 0 0-42 42a41.57 41.57 0 0 0 8.74 25.65a6 6 0 0 1 1.11 4.93a82.09 82.09 0 0 0 97.57 97.57a5.95 5.95 0 0 1 4.93 1.11A41.57 41.57 0 0 0 176 218a42 42 0 0 0 42-42"></svg:path>`,
})
export class PhSkypeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlackLogoLightIcon],svg[ph-slack-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218 128a30 30 0 1 0-36-48V56a30 30 0 0 0-54-18a30 30 0 1 0-48 36H56a30 30 0 0 0-18 54a30 30 0 1 0 36 48v24a30 30 0 0 0 54 18a30 30 0 1 0 48-36h24a30 30 0 0 0 18-54m-18-42a18 18 0 0 1 0 36h-18v-18a18 18 0 0 1 18-18m-48-48a18 18 0 0 1 18 18v48a18 18 0 0 1-18 18h-18V56a18 18 0 0 1 18-18M86 56a18 18 0 0 1 36 0v18h-18a18 18 0 0 1-18-18m-48 48a18 18 0 0 1 18-18h48a18 18 0 0 1 18 18v18H56a18 18 0 0 1-18-18m18 66a18 18 0 0 1 0-36h18v18a18 18 0 0 1-18 18m48 48a18 18 0 0 1-18-18v-48a18 18 0 0 1 18-18h18v66a18 18 0 0 1-18 18m66-18a18 18 0 0 1-36 0v-18h18a18 18 0 0 1 18 18m30-30h-48a18 18 0 0 1-18-18v-18h66a18 18 0 0 1 0 36"></svg:path>`,
})
export class PhSlackLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalLightIcon],svg[ph-sliders-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 86h34.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12m64-24a18 18 0 1 1-18 18a18 18 0 0 1 18-18m112 108h-18.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12h98.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12m-48 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhSlidersHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlidersLightIcon],svg[ph-sliders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 106.6V40a6 6 0 0 0-12 0v66.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-50.6a30 30 0 0 0 0-58.8M56 154a18 18 0 1 1 18-18a18 18 0 0 1-18 18m78-95.4V40a6 6 0 0 0-12 0v18.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-98.6a30 30 0 0 0 0-58.8m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m102 62a30.05 30.05 0 0 0-24-29.4V40a6 6 0 0 0-12 0v98.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-18.6a30.05 30.05 0 0 0 24-29.4m-30 18a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhSlidersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSlideshowLightIcon],svg[ph-slideshow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 50H64a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2Zm44-136v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0M30 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhSlideshowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyAngryLightIcon],svg[ph-smiley-angry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 150a10 10 0 1 1 10-10a10 10 0 0 1-10 10m72-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10m66-2A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90m-45.33-45L128 112.79L83.33 83a6 6 0 0 0-6.66 10l48 32a6 6 0 0 0 6.66 0l48-32a6 6 0 1 0-6.66-10m-17.35 96c-8.13-5.4-15.88-9-27.32-9s-19.19 3.6-27.32 9a6 6 0 0 0 6.64 10c6.67-4.43 12.19-7 20.68-7s14 2.57 20.68 7a5.94 5.94 0 0 0 3.31 1a6 6 0 0 0 3.33-11"></svg:path>`,
})
export class PhSmileyAngryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyBlankLightIcon],svg[ph-smiley-blank-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-26-110a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSmileyBlankLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyLightIcon],svg[ph-smiley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.19 155c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90M92 118a10 10 0 1 0-10-10a10 10 0 0 0 10 10m72-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhSmileyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMehLightIcon],svg[ph-smiley-meh-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-58a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m-92-52a10 10 0 1 1 10 10a10 10 0 0 1-10-10m92 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSmileyMehLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyMeltingLightIcon],svg[ph-smiley-melting-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-48-48a10 10 0 1 0-10 10a10 10 0 0 0 10-10m73.62-36.63A102 102 0 0 0 52 196a6 6 0 1 0 8.94-8a90.09 90.09 0 0 1 65.78-150H128a90 90 0 0 1 67.07 150a6 6 0 0 0 8.95 8a102 102 0 0 0-4.41-140.63ZM152 170h-16c-22.65 0-50-18.73-50-42a43 43 0 0 1 .58-7a6 6 0 1 0-11.83-2a54 54 0 0 0-.75 9c0 14.26 7.2 28 20.27 38.6c12 9.79 27.26 15.4 41.73 15.4h16a10 10 0 0 1 0 20H96a22 22 0 0 0 0 44a6 6 0 0 0 0-12a10 10 0 0 1 0-20h56a22 22 0 0 0 0-44"></svg:path>`,
})
export class PhSmileyMeltingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyNervousLightIcon],svg[ph-smiley-nervous-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m72 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m28 60a6 6 0 0 1-6 6c-9 0-13.51-6-16.8-10.4c-3-4.06-4.46-5.6-7.2-5.6s-4.15 1.54-7.2 5.6C141.51 168 137 174 128 174s-13.51-6-16.8-10.4c-3-4.06-4.46-5.6-7.2-5.6s-4.15 1.54-7.2 5.6C93.51 168 89 174 80 174a6 6 0 0 1 0-12c2.74 0 4.15-1.54 7.2-5.6C90.49 152 95 146 104 146s13.51 6 16.8 10.4c3 4.06 4.46 5.6 7.2 5.6s4.15-1.54 7.2-5.6C138.49 152 143 146 152 146s13.51 6 16.8 10.4c3 4.06 4.46 5.6 7.2 5.6a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSmileyNervousLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileySadLightIcon],svg[ph-smiley-sad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m92 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-.81 65a6 6 0 0 1-10.38 6c-7.84-13.54-20.2-21-34.81-21s-27 7.46-34.81 21a6 6 0 0 1-5.2 3a5.9 5.9 0 0 1-3-.81a6 6 0 0 1-2.18-8.19c9.92-17.16 26.39-27 45.19-27s35.27 9.84 45.19 27"></svg:path>`,
})
export class PhSmileySadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerLightIcon],svg[ph-smiley-sticker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 30 199.52a6 6 0 0 0 2.48-1.49L224 160.46a6 6 0 0 0 1.49-2.49A102.06 102.06 0 0 0 128 26m86.47 127l-61.42 61.43A89.91 89.91 0 1 1 214.47 153M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m92 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-.81 47c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6"></svg:path>`,
})
export class PhSmileyStickerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyWinkLightIcon],svg[ph-smiley-wink-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m100 0a6 6 0 0 1-6 6h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m-8.81 47c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6"></svg:path>`,
})
export class PhSmileyWinkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSmileyXEyesLightIcon],svg[ph-smiley-x-eyes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m60.24-117.76L176.49 112l11.75 11.76a6 6 0 1 1-8.48 8.48L168 120.49l-11.76 11.75a6 6 0 0 1-8.48-8.48L159.51 112l-11.75-11.76a6 6 0 0 1 8.48-8.48L168 103.51l11.76-11.75a6 6 0 0 1 8.48 8.48m-80 0L96.49 112l11.75 11.76a6 6 0 1 1-8.48 8.48L88 120.49l-11.76 11.75a6 6 0 0 1-8.48-8.48L79.51 112l-11.75-11.76a6 6 0 0 1 8.48-8.48L88 103.51l11.76-11.75a6 6 0 0 1 8.48 8.48M138 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSmileyXEyesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnapchatLogoLightIcon],svg[ph-snapchat-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.87 182.68a6 6 0 0 0-3.85-4.43c-.4-.14-30.71-11.53-44.87-52.25l21.08-8.43a6 6 0 1 0-4.46-11.14l-20 8A148.7 148.7 0 0 1 190 80a62 62 0 0 0-124 0a151.4 151.4 0 0 1-3.72 34.48l-20.05-8a6 6 0 0 0-4.46 11.14L58.93 126A96.1 96.1 0 0 1 40 158.87c-12.85 14.44-25.91 19.34-26 19.38a6 6 0 0 0-2.08 10c6.6 6.19 16.83 7.2 26.71 8.18c6.51.64 13.23 1.31 17.16 3.47c3.76 2.07 7.36 7 10.85 11.79c5.21 7.13 11.11 15.22 20.12 17.53c8.5 2.16 17.09-.76 25.4-3.59c5.72-1.94 11.11-3.78 15.86-3.78s10.14 1.84 15.86 3.78c6.29 2.14 12.74 4.34 19.19 4.34a25.4 25.4 0 0 0 6.21-.75c9-2.3 14.91-10.39 20.12-17.52c3.49-4.78 7.09-9.72 10.85-11.79c3.93-2.16 10.65-2.83 17.16-3.47c9.88-1 20.11-2 26.71-8.18a6 6 0 0 0 1.75-5.58m-29.66 1.84c-7.71.76-15.68 1.55-21.76 4.9s-10.5 9.39-14.77 15.22s-8.56 11.74-13.39 13c-5 1.28-11.61-1-18.57-3.32c-6.38-2.17-13-4.42-19.72-4.42s-13.34 2.25-19.72 4.42c-7 2.37-13.53 4.6-18.57 3.32c-4.83-1.24-9.18-7.2-13.39-13s-8.67-11.88-14.77-15.23s-14-4.14-21.76-4.9c-3.37-.33-6.79-.67-9.89-1.21a94 94 0 0 0 18.55-15.9c8.24-9.11 17.44-22.86 23.35-42.48a1.4 1.4 0 0 0 .08-.18a5.5 5.5 0 0 0 .35-1.27A156.2 156.2 0 0 0 78 80a50 50 0 0 1 100 0a156.2 156.2 0 0 0 5.77 43.51a5.3 5.3 0 0 0 .35 1.27a1 1 0 0 0 .08.17c5.91 19.63 15.11 33.38 23.35 42.49a94 94 0 0 0 18.55 15.9c-3.1.51-6.52.85-9.89 1.18"></svg:path>`,
})
export class PhSnapchatLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerLightIcon],svg[ph-sneaker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228 131l-60.73-20.24a26 26 0 0 1-15.51-14l-23.25-54.45a14 14 0 0 0-17.57-7.47L35.22 62.37A14.05 14.05 0 0 0 26 75.53V192a14 14 0 0 0 14 14h200a14 14 0 0 0 14-14v-24.94A38 38 0 0 0 228 131M39.32 73.65L115 46.12a1.8 1.8 0 0 1 .68-.12a2 2 0 0 1 1.79 1.11l8 18.68L102 74.36A6 6 0 0 0 104 86a5.9 5.9 0 0 0 2-.37l24.18-8.79l6.31 14.76L118 98.36a6 6 0 0 0 2 11.64a6.2 6.2 0 0 0 2-.36l19.26-7a38 38 0 0 0 10.57 13.21L134 122.36a6 6 0 0 0 2 11.64a6.2 6.2 0 0 0 2.05-.36l28.64-10.42l57.53 19.18a25.94 25.94 0 0 1 17.27 19.6H38V75.53a2 2 0 0 1 1.32-1.88M240 194H40a2 2 0 0 1-2-2v-18h204v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSneakerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSneakerMoveLightIcon],svg[ph-sneaker-move-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.26 168.42l-28.62-14.31A49.72 49.72 0 0 1 174 109.39V80a6 6 0 0 0-6-6a50.06 50.06 0 0 1-50-50a6 6 0 0 0-9.62-4.78l-77 58.41l-.15.11a14 14 0 0 0-1.13 20.79l113.72 113.71a6 6 0 0 0 4.24 1.76H224a14 14 0 0 0 14-14v-19.06a13.94 13.94 0 0 0-7.74-12.52M226 200a2 2 0 0 1-2 2h-73.46L38.59 90a2 2 0 0 1-.59-1.48a2 2 0 0 1 .69-1.41l14.36-10.89l40 40a6 6 0 0 0 8.49-8.48L62.71 68.91L107 35.3a62.13 62.13 0 0 0 55 50.41v23.68a61.65 61.65 0 0 0 34.27 55.45l28.62 14.32a2 2 0 0 1 1.11 1.78ZM70.8 182H32a6 6 0 0 1 0-12h38.8a6 6 0 1 1 0 12m38 26a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h54.8a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSneakerMoveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSnowflakeLightIcon],svg[ph-snowflake-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.83 150.57a6 6 0 0 1-4.4 7.26l-26.62 6.54l7 26.08a6 6 0 0 1-4.24 7.35a6.4 6.4 0 0 1-1.55.2a6 6 0 0 1-5.8-4.45L178.27 164L134 138.39v51.13l22.24 22.24a6 6 0 1 1-8.48 8.48L128 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L122 189.52v-51.13L77.73 164l-7.93 29.6A6 6 0 0 1 64 198a6.4 6.4 0 0 1-1.55-.2a6 6 0 0 1-4.24-7.35l7-26.08l-26.62-6.54a6 6 0 0 1 2.86-11.66l30.23 7.43L116 128l-44.34-25.6l-30.23 7.43A6 6 0 0 1 40 110a6 6 0 0 1-1.43-11.83l26.62-6.54l-7-26.08a6 6 0 1 1 11.59-3.1l7.93 29.6L122 117.61V66.48L99.76 44.24a6 6 0 0 1 8.48-8.48L128 55.51l19.76-19.75a6 6 0 0 1 8.48 8.48L134 66.48v51.13l44.27-25.56l7.93-29.6a6 6 0 1 1 11.59 3.1l-7 26.08l26.62 6.54A6 6 0 0 1 216 110a6 6 0 0 1-1.43-.17l-30.23-7.43L140 128l44.34 25.6l30.23-7.43a6 6 0 0 1 7.26 4.4"></svg:path>`,
})
export class PhSnowflakeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoccerBallLightIcon],svg[ph-soccer-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m77.67 147.42h-35.78L159.41 159l13.29-38.72l17-5.51l27.94 21.43a89.4 89.4 0 0 1-11.97 37.22m-119.56 0H50.33a89.4 89.4 0 0 1-11.95-37.22l27.94-21.43l17 5.51L96.59 159ZM51 81.42l7.24 24.41l-20 15.34A89.5 89.5 0 0 1 51 81.42M107.56 154l-12.41-36.14L128 95.28l32.85 22.58L148.44 154Zm90.19-48.17L205 81.42a89.5 89.5 0 0 1 12.75 39.75Zm-1.66-36.62L186 103.35l-17 5.53l-35-24V67.16l30.9-21.24a90.3 90.3 0 0 1 31.19 23.29M150.92 41L128 56.72L105.08 41a90.2 90.2 0 0 1 45.84 0m-59.81 4.91L122 67.16v17.68l-35 24l-17-5.53l-10.09-34.1a90.4 90.4 0 0 1 31.2-23.3M58.75 185.42h26.18l9.19 26a90.4 90.4 0 0 1-35.37-26m49.68 30.43l-12.55-35.46L106.34 166h43.32l10.46 14.39l-12.55 35.46a90.1 90.1 0 0 1-39.14 0m53.45-4.48l9.19-26h26.18a90.4 90.4 0 0 1-35.37 26"></svg:path>`,
})
export class PhSoccerBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSockLightIcon],svg[ph-sock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 18h-88a14 14 0 0 0-14 14v77.51l-39.33 39.34a56.91 56.91 0 1 0 80.48 80.48l68.41-68.4a21.88 21.88 0 0 0 6.44-15.56V32a14 14 0 0 0-14-14m-88 12h88a2 2 0 0 1 2 2v18h-92V32a2 2 0 0 1 2-2m18.67 190.85a44.92 44.92 0 0 1-63.52-63.52l41.09-41.09A6 6 0 0 0 102 112V62h92v44.34A54.07 54.07 0 0 0 146 160a53.4 53.4 0 0 0 8.47 29Zm68.4-68.41l-27.85 27.86A41.54 41.54 0 0 1 158 160a42.05 42.05 0 0 1 36-41.56v26.93a9.93 9.93 0 0 1-2.93 7.07"></svg:path>`,
})
export class PhSockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarPanelLightIcon],svg[ph-solar-panel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 104a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m38.84-46.67a6 6 0 1 0 8.49-8.48L70 37.53A6 6 0 0 0 61.53 46ZM128 38a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v16a6 6 0 0 0 6 6m50.91 21.09a6 6 0 0 0 4.25-1.76L194.47 46a6 6 0 0 0-8.47-8.47l-11.33 11.32a6 6 0 0 0 4.24 10.24M194 104a6 6 0 0 0 6 6h16a6 6 0 0 0 0-12h-16a6 6 0 0 0-6 6m-106 6a6 6 0 0 0 6-6a34 34 0 0 1 68 0a6 6 0 0 0 12 0a46 46 0 0 0-92 0a6 6 0 0 0 6 6m149.18 109a6 6 0 0 1-5.18 3H24a6 6 0 0 1-5.22-8.95l40.69-72A6 6 0 0 1 64.7 138h126.6a6 6 0 0 1 5.23 3.05l40.69 72a6 6 0 0 1-.04 5.95m-49.38-69h-28l4.35 20h35Zm-35.94 20l-4.35-20h-39l-4.35 20Zm-50.33 12l-6.09 28h65.12l-6.09-28Zm-44.64-12h35l4.35-20h-28Zm-22.61 40h48.88l6.09-28H50.11Zm187.44 0l-15.83-28h-39.14l6.09 28Z"></svg:path>`,
})
export class PhSolarPanelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSolarRoofLightIcon],svg[ph-solar-roof-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.37 125.32l-40-80A6 6 0 0 0 200 42H56a6 6 0 0 0-5.37 3.32l-40 80A6.1 6.1 0 0 0 10 128v56a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14v-56a6.1 6.1 0 0 0-.63-2.68M99.71 122l-14-28h34.58l14 28Zm.58-68l14 28H79.71l-14-28Zm48 0l14 28h-34.58l-14-28Zm-.58 68l-14-28h34.58l14 28Zm48 0l-14-28h34.58l14 28Zm14.58-40h-34.58l-14-28h34.58ZM22 184v-54.58l34-68l34 68V186H24a2 2 0 0 1-2-2m210 2H102v-52h132v50a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSolarRoofLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortAscendingLightIcon],svg[ph-sort-ascending-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 128a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6M48 70h136a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12m56 116H48a6 6 0 0 0 0 12h56a6 6 0 0 0 0-12m124.24-22.24a6 6 0 0 0-8.48 0L190 193.51V112a6 6 0 0 0-12 0v81.51l-29.76-29.75a6 6 0 0 0-8.48 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhSortAscendingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSortDescendingLightIcon],svg[ph-sort-descending-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 128a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6m6-58h56a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12m136 116H48a6 6 0 0 0 0 12h136a6 6 0 0 0 0-12m44.24-102.24l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48L178 62.49V144a6 6 0 0 0 12 0V62.49l29.76 29.75a6 6 0 0 0 8.48-8.48"></svg:path>`,
})
export class PhSortDescendingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSoundcloudLogoLightIcon],svg[ph-soundcloud-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 120v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m26-30a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6m32-8a6 6 0 0 0-6 6v104a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m32-32a6 6 0 0 0-6 6v136a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6m109.06 57.88A78 78 0 0 0 144 42a6 6 0 0 0 0 12a65.75 65.75 0 0 1 65.67 59.33a6 6 0 0 0 4.83 5.29A34 34 0 0 1 208 186h-64a6 6 0 0 0 0 12h64a46 46 0 0 0 13.06-90.12"></svg:path>`,
})
export class PhSoundcloudLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpadeLightIcon],svg[ph-spade-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.84 51.39a284 284 0 0 0-49.16-32.76a6 6 0 0 0-5.36 0a284 284 0 0 0-49.16 32.76C42.88 79.13 26 107.59 26 136a54 54 0 0 0 75.24 49.65l-11 36.63A6 6 0 0 0 96 230h64a6 6 0 0 0 5.75-7.72l-11-36.63A54 54 0 0 0 230 136c0-28.41-16.88-56.87-50.16-84.61M176 178a42 42 0 0 1-27.6-10.34a6 6 0 0 0-9.69 6.24l13.23 44.1h-47.88l13.23-44.1a6 6 0 0 0-9.69-6.24A42 42 0 0 1 38 136c0-53.73 74.77-97 90-105.22C143.24 39 218 82.2 218 136a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhSpadeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSparkleLightIcon],svg[ph-sparkle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.89 130.94L144.4 111.6l-19.34-52.49a13.92 13.92 0 0 0-26.12 0L79.6 111.6l-52.49 19.34a13.92 13.92 0 0 0 0 26.12L79.6 176.4l19.34 52.49a13.92 13.92 0 0 0 26.12 0l19.34-52.49l52.49-19.34a13.92 13.92 0 0 0 0-26.12m-4.15 14.86l-55.08 20.3a6 6 0 0 0-3.56 3.56l-20.3 55.08a1.92 1.92 0 0 1-3.6 0l-20.3-55.08a6 6 0 0 0-3.56-3.56l-55.08-20.3a1.92 1.92 0 0 1 0-3.6l55.08-20.3a6 6 0 0 0 3.56-3.56l20.3-55.08a1.92 1.92 0 0 1 3.6 0l20.3 55.08a6 6 0 0 0 3.56 3.56l55.08 20.3a1.92 1.92 0 0 1 0 3.6M146 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6m100 48a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSparkleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHifiLightIcon],svg[ph-speaker-hifi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2ZM118 76a10 10 0 1 1 10 10a10 10 0 0 1-10-10m10 38a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhSpeakerHifiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerHighLightIcon],svg[ph-speaker-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.64 26.61a6 6 0 0 0-6.32.65L77.94 82H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224V32a6 6 0 0 0-3.36-5.39M30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2m116 51.73l-60-46.66V90.93l60-46.66Zm50.53-108.85a38 38 0 0 1 0 50.24a6 6 0 1 1-9-7.94a26 26 0 0 0 0-34.37a6 6 0 0 1 9-7.93M246 128a77.86 77.86 0 0 1-19.86 52a6 6 0 1 1-8.94-8a66 66 0 0 0 0-88a6 6 0 1 1 8.94-8A77.86 77.86 0 0 1 246 128"></svg:path>`,
})
export class PhSpeakerHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerLowLightIcon],svg[ph-speaker-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.64 26.61a6 6 0 0 0-6.32.65L77.94 82H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224V32a6 6 0 0 0-3.36-5.39M30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2m116 51.73l-60-46.66V90.93l60-46.66ZM206 128a37.94 37.94 0 0 1-9.5 25.14a6 6 0 1 1-9-7.94a26 26 0 0 0 0-34.37a6 6 0 0 1 9-7.93A38 38 0 0 1 206 128"></svg:path>`,
})
export class PhSpeakerLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerNoneLightIcon],svg[ph-speaker-none-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.64 26.61a6 6 0 0 0-6.32.65L77.94 82H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224V32a6 6 0 0 0-3.36-5.39M30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2m116 51.73l-60-46.67V90.94l60-46.67Z"></svg:path>`,
})
export class PhSpeakerNoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleHighLightIcon],svg[ph-speaker-simple-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.64 26.61a6 6 0 0 0-6.32.65L85.94 82H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 166 224V32a6 6 0 0 0-3.36-5.39M154 211.73l-62.32-48.47A6 6 0 0 0 88 162H40a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h48a6 6 0 0 0 3.68-1.26L154 44.27ZM206 104v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m32-16v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhSpeakerSimpleHighLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleLowLightIcon],svg[ph-speaker-simple-low-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.64 26.61a6 6 0 0 0-6.32.65L85.94 82H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 166 224V32a6 6 0 0 0-3.36-5.39M154 211.73l-62.32-48.47A6 6 0 0 0 88 162H40a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h48a6 6 0 0 0 3.68-1.26L154 44.27ZM206 104v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhSpeakerSimpleLowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleNoneLightIcon],svg[ph-speaker-simple-none-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.64 26.61a6 6 0 0 0-6.32.65L85.94 82H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 166 224V32a6 6 0 0 0-3.36-5.39M154 211.73l-62.32-48.47A6 6 0 0 0 88 162H40a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h48a6 6 0 0 0 3.68-1.26L154 44.27Z"></svg:path>`,
})
export class PhSpeakerSimpleNoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleSlashLightIcon],svg[ph-speaker-simple-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M194 152v-48a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0m38-70a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m-11.56 130a6 6 0 0 1-8.88 8.08L166 169.92V224a6 6 0 0 1-9.68 4.74L85.94 174H40a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h46.07L51.56 44a6 6 0 0 1 8.88-8ZM154 156.72L97 94H40a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h48a6 6 0 0 1 3.68 1.26L154 211.73Zm-30.17-89L154 44.27v62.56a6 6 0 0 0 12 0V32a6 6 0 0 0-9.68-4.74l-39.85 31a6 6 0 1 0 7.36 9.47Z"></svg:path>`,
})
export class PhSpeakerSimpleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSimpleXLightIcon],svg[ph-speaker-simple-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.64 26.61a6 6 0 0 0-6.32.65L85.94 82H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 166 224V32a6 6 0 0 0-3.36-5.39M154 211.73l-62.32-48.47A6 6 0 0 0 88 162H40a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h48a6 6 0 0 0 3.68-1.26L154 44.27Zm98.24-64a6 6 0 1 1-8.48 8.48L224 136.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L215.52 128l-19.76-19.76a6 6 0 0 1 8.48-8.48L224 119.52l19.76-19.76a6 6 0 0 1 8.48 8.48L232.48 128Z"></svg:path>`,
})
export class PhSpeakerSimpleXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerSlashLightIcon],svg[ph-speaker-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8L78 81.94l-.08.06H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224v-54.08L203.56 220a6 6 0 0 0 8.88-8.08ZM30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2m116 51.73l-60-46.66V90.93l.11-.08L146 156.72Zm41.5-66.53a26 26 0 0 0 0-34.37a6 6 0 1 1 9-7.93a38 38 0 0 1 0 50.24a6 6 0 0 1-9-7.94m-80.09-78.52a6 6 0 0 1 1.06-8.42l39.85-31A6 6 0 0 1 158 32v74.83a6 6 0 0 1-12 0V44.27l-30.17 23.46a6 6 0 0 1-8.42-1.05M246 128a77.86 77.86 0 0 1-19.86 52a6 6 0 1 1-8.94-8a66 66 0 0 0 0-88a6 6 0 1 1 8.94-8A77.86 77.86 0 0 1 246 128"></svg:path>`,
})
export class PhSpeakerSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeakerXLightIcon],svg[ph-speaker-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.64 26.61a6 6 0 0 0-6.32.65L77.94 82H32a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h45.94l70.38 54.74A6 6 0 0 0 158 224V32a6 6 0 0 0-3.36-5.39M30 160V96a2 2 0 0 1 2-2h42v68H32a2 2 0 0 1-2-2m116 51.73l-60-46.67V90.94l60-46.67Zm98.24-64a6 6 0 1 1-8.48 8.48L216 136.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L207.52 128l-19.76-19.76a6 6 0 0 1 8.48-8.48L216 119.52l19.76-19.76a6 6 0 0 1 8.48 8.48L224.48 128Z"></svg:path>`,
})
export class PhSpeakerXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpeedometerLightIcon],svg[ph-speedometer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m115.76 155.76l96-96a6 6 0 0 1 8.48 8.48l-96 96a6 6 0 0 1-8.48-8.48M128 86a65.9 65.9 0 0 1 21.08 3.44a6 6 0 0 0 3.83-11.38a78 78 0 0 0-102.43 82.6a6 6 0 0 0 6 5.34a5 5 0 0 0 .67 0a6 6 0 0 0 5.3-6.62A69 69 0 0 1 62 152a66.08 66.08 0 0 1 66-66m98 15.9a6 6 0 1 0-10.68 5.48a98.35 98.35 0 0 1 5.16 77.25a2 2 0 0 1-1.91 1.37H37.46a2.07 2.07 0 0 1-1.91-1.41A98.23 98.23 0 0 1 128 54h.9a97 97 0 0 1 43.71 10.72A6 6 0 1 0 178.1 54A108.9 108.9 0 0 0 129 42h-1A110.06 110.06 0 0 0 24.23 188.58A14.08 14.08 0 0 0 37.46 198h181.07a14.06 14.06 0 0 0 13.22-9.37A110.34 110.34 0 0 0 226 101.9"></svg:path>`,
})
export class PhSpeedometerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSphereLightIcon],svg[ph-sphere-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102c0 6.59-12.94 13.24-24 16.94a168 168 0 0 1-28.92 6.53c.62-7.6.94-15.46.94-23.47c0-26.27-3.44-51-9.68-69.78a85.6 85.6 0 0 0-8-17.91A90.16 90.16 0 0 1 218 128m-90-90c6.59 0 13.24 12.94 16.94 24c5.84 17.53 9.06 41 9.06 66c0 8.83-.4 17.15-1.11 24.89c-8 .73-16.35 1.11-24.89 1.11c-54.94 0-90-15.4-90-26a90.1 90.1 0 0 1 90-90M40.31 148.3a85.6 85.6 0 0 0 17.91 8C77 162.56 101.73 166 128 166c8 0 15.86-.32 23.45-.94C146.64 198.2 136 218 128 218a90.16 90.16 0 0 1-87.69-69.7m108 67.39a85.6 85.6 0 0 0 8-17.91a184 184 0 0 0 7.43-34a184 184 0 0 0 34-7.43a85.6 85.6 0 0 0 17.91-8a90.3 90.3 0 0 1-67.35 67.34Z"></svg:path>`,
})
export class PhSphereLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerBallLightIcon],svg[ph-spinner-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.89 97.44c-31 22.37-53.66 15.36-77.93 3.75c21.43-14.75 42.27-33.21 41.51-71.54a90 90 0 0 1 36.42 67.79M169 47.89c3.84 38-13.53 54.13-35.71 69.34c-2.07-25.94-7.62-53.23-41.23-71.73A89.88 89.88 0 0 1 169 47.89m-89.86 4.56C114 68.15 119.23 91.23 121.32 118c-23.5-11.18-49.92-20-82.75-.17a90.12 90.12 0 0 1 40.57-65.38m-41 80.11c31.05-22.37 53.66-15.36 77.93-3.75c-21.46 14.75-42.3 33.19-41.54 71.54a90 90 0 0 1-36.42-67.79ZM87 208.11c-3.84-38 13.53-54.13 35.71-69.34c2.06 25.94 7.61 53.24 41.22 71.73A89.88 89.88 0 0 1 87 208.11m89.85-4.56c-34.85-15.7-40.08-38.78-42.17-65.55c13.36 6.36 27.67 12 43.56 12c12.06 0 25-3.23 39.19-11.79a90.15 90.15 0 0 1-40.57 65.34Z"></svg:path>`,
})
export class PhSpinnerBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerGapLightIcon],svg[ph-spinner-gap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 32v32a6 6 0 0 1-12 0V32a6 6 0 0 1 12 0m90 90h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-46.5 47a6 6 0 0 0-8.5 8.5l22.63 22.62a6 6 0 0 0 8.48-8.48ZM128 186a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-49.5-17l-22.62 22.64a6 6 0 1 0 8.48 8.48L87 177.5a6 6 0 1 0-8.5-8.5M70 128a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h32a6 6 0 0 0 6-6m-5.64-72.12a6 6 0 0 0-8.48 8.48L78.5 87a6 6 0 1 0 8.5-8.5Z"></svg:path>`,
})
export class PhSpinnerGapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpinnerLightIcon],svg[ph-spinner-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 32v32a6 6 0 0 1-12 0V32a6 6 0 0 1 12 0m39.25 56.75A6 6 0 0 0 177.5 87l22.62-22.63a6 6 0 0 0-8.48-8.48L169 78.5a6 6 0 0 0 4.24 10.25ZM224 122h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-46.5 47a6 6 0 0 0-8.5 8.5l22.63 22.62a6 6 0 0 0 8.48-8.48ZM128 186a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-49.5-17l-22.62 22.64a6 6 0 1 0 8.48 8.48L87 177.5a6 6 0 1 0-8.5-8.5M70 128a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h32a6 6 0 0 0 6-6m-5.64-72.12a6 6 0 0 0-8.48 8.48L78.5 87a6 6 0 1 0 8.5-8.5Z"></svg:path>`,
})
export class PhSpinnerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpiralLightIcon],svg[ph-spiral-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 144a6 6 0 0 1-12 0a98.11 98.11 0 0 0-98-98a90.1 90.1 0 0 0-90 90a82.1 82.1 0 0 0 82 82a74.09 74.09 0 0 0 74-74a66.08 66.08 0 0 0-66-66a58.07 58.07 0 0 0-58 58a50.06 50.06 0 0 0 50 50a42 42 0 0 0 42-42a34 34 0 0 0-34-34a26 26 0 0 0-26 26a18 18 0 0 0 18 18a10 10 0 0 0 10-10a2 2 0 0 0-2-2a6 6 0 0 1 0-12a14 14 0 0 1 14 14a22 22 0 0 1-22 22a30 30 0 0 1-30-30a38 38 0 0 1 38-38a46.06 46.06 0 0 1 46 46a54.06 54.06 0 0 1-54 54a62.07 62.07 0 0 1-62-62a70.08 70.08 0 0 1 70-70a78.09 78.09 0 0 1 78 78a86.1 86.1 0 0 1-86 86a94.11 94.11 0 0 1-94-94A102.12 102.12 0 0 1 136 34a110.13 110.13 0 0 1 110 110"></svg:path>`,
})
export class PhSpiralLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitHorizontalLightIcon],svg[ph-split-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 48v160a6 6 0 0 1-12 0v-74H38.49l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L38.49 122H98V48a6 6 0 0 1 12 0m126.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L217.51 122H158V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-74h59.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhSplitHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSplitVerticalLightIcon],svg[ph-split-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 152a6 6 0 0 1-6 6h-74v59.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51V158H48a6 6 0 0 1 0-12h160a6 6 0 0 1 6 6M48 110h160a6 6 0 0 0 0-12h-74V38.49l21.76 21.75a6 6 0 0 0 8.48-8.48l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L122 38.49V98H48a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhSplitVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSpotifyLogoLightIcon],svg[ph-spotify-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m29.31-49.2a6 6 0 0 1-8.11 2.51a44.75 44.75 0 0 0-42.4 0a6 6 0 1 1-5.6-10.62a57.37 57.37 0 0 1 53.6 0a6 6 0 0 1 2.51 8.11m32-56a6 6 0 0 1-8.12 2.46a112.67 112.67 0 0 0-106.34 0a6 6 0 1 1-5.66-10.58a124.65 124.65 0 0 1 117.66 0a6 6 0 0 1 2.44 8.14Zm-16 28A6 6 0 0 1 168 144a6.1 6.1 0 0 1-2.82-.7a79 79 0 0 0-74.36 0a6 6 0 1 1-5.64-10.6a91 91 0 0 1 85.64 0a6 6 0 0 1 2.48 8.12Z"></svg:path>`,
})
export class PhSpotifyLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSprayBottleLightIcon],svg[ph-spray-bottle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 78a6 6 0 0 0 6-6a54.06 54.06 0 0 0-54-54H80a14 14 0 0 0-14 14v48a26 26 0 0 1-26 26a6 6 0 0 0 0 12a38 38 0 0 0 38-38v-2h36v26.62a25.87 25.87 0 0 1-9.76 20.3l-16 12.79A37.81 37.81 0 0 0 74 167.38V224a14 14 0 0 0 14 14h104a14 14 0 0 0 14-14v-12.53A268.9 268.9 0 0 0 170.57 78ZM78 32a2 2 0 0 1 2-2h72a42.06 42.06 0 0 1 41.57 36H78Zm116 179.47V224a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2v-56.62a25.87 25.87 0 0 1 9.76-20.3l16-12.79A37.81 37.81 0 0 0 126 104.62V78h30.64A256.84 256.84 0 0 1 194 211.47"></svg:path>`,
})
export class PhSprayBottleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfBottomLightIcon],svg[ph-square-half-bottom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M56 54h144a2 2 0 0 1 2 2v66H54V56a2 2 0 0 1 2-2m50 80v68H86v-68Zm12 0h20v68h-20Zm32 0h20v68h-20Zm-96 66v-66h20v68H56a2 2 0 0 1-2-2m146 2h-18v-68h20v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSquareHalfBottomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfLightIcon],svg[ph-square-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m-66 76h68v20h-68Zm0-12V86h68v20Zm0 44h68v20h-68Zm68-94v18h-68V54h66a2 2 0 0 1 2 2M54 200V56a2 2 0 0 1 2-2h66v148H56a2 2 0 0 1-2-2m146 2h-66v-20h68v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSquareHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareLightIcon],svg[ph-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareLogoLightIcon],svg[ph-square-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM160 90H96a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-6 64h-52v-52h52Z"></svg:path>`,
})
export class PhSquareLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitHorizontalLightIcon],svg[ph-square-split-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M54 200V56a2 2 0 0 1 2-2h66v148H56a2 2 0 0 1-2-2m148 0a2 2 0 0 1-2 2h-66V54h66a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSquareSplitHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquareSplitVerticalLightIcon],svg[ph-square-split-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M56 54h144a2 2 0 0 1 2 2v66H54V56a2 2 0 0 1 2-2m144 148H56a2 2 0 0 1-2-2v-66h148v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSquareSplitVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSquaresFourLightIcon],svg[ph-squares-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 42H56a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm94-62h-48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-98 34H56a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm94-62h-48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSquaresFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackLightIcon],svg[ph-stack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.18 173a6 6 0 0 1-2.16 8.2l-96 56a6 6 0 0 1-6 0l-96-56a6 6 0 0 1 6-10.36l93 54.23l93-54.23a6 6 0 0 1 8.16 2.16M221 122.82l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31Z"></svg:path>`,
})
export class PhStackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackMinusLightIcon],svg[ph-stack-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 200a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-17-77.18l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31ZM141 217.48l-13 7.57l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l16-9.33a6 6 0 0 0-6-10.37"></svg:path>`,
})
export class PhStackMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackOverflowLogoLightIcon],svg[ph-stack-overflow-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 152.09V216a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6v-63.91a6 6 0 0 1 12 0V210h148v-57.91a6 6 0 0 1 12 0m-126 30h80a6 6 0 1 0 0-12H88a6 6 0 1 0 0 12m5.4-52.93l77.27 20.67a6 6 0 1 0 3.11-11.57L96.5 117.54a6 6 0 1 0-3.1 11.58Zm18.93-49.74l69.28 40a6.05 6.05 0 0 0 3 .8a6 6 0 0 0 3-11.18L118.33 69a6 6 0 1 0-6 10.38Zm87.75 13.35a6 6 0 0 0 8.48-8.48L152 27.76a6 6 0 1 0-8.48 8.47Z"></svg:path>`,
})
export class PhStackOverflowLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackPlusLightIcon],svg[ph-stack-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 200a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6m-17-77.18l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31ZM141 217.48l-13 7.57l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l16-9.33a6 6 0 0 0-6-10.37"></svg:path>`,
})
export class PhStackPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStackSimpleLightIcon],svg[ph-stack-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 109.21l112 64a6 6 0 0 0 6 0l112-64a6 6 0 0 0 0-10.42l-112-64a6 6 0 0 0-6 0l-112 64a6 6 0 0 0 0 10.42m115-62.3L227.91 104L128 161.09L28.09 104ZM245.21 141a6 6 0 0 1-2.23 8.19l-112 64a6 6 0 0 1-6 0l-112-64a6 6 0 0 1 6-10.42l109 62.3l109-62.3a6 6 0 0 1 8.23 2.23"></svg:path>`,
})
export class PhStackSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStairsLightIcon],svg[ph-stairs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-48 116h50v28h-92v-28Zm6-12v-28h44v28ZM56 38h144a2 2 0 0 1 2 2v50h-50a6 6 0 0 0-6 6v34h-42a6 6 0 0 0-6 6v34H54V40a2 2 0 0 1 2-2m144 180H56a2 2 0 0 1-2-2v-34h148v34a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhStairsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStampLightIcon],svg[ph-stamp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 224a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m0-80v40a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h58.9L90.68 54.29A30 30 0 0 1 120 18h16a30 30 0 0 1 29.33 36.29L149.1 130H208a14 14 0 0 1 14 14m-102.83-14h17.66l16.76-78.23A18 18 0 0 0 136 30h-16a18 18 0 0 0-17.6 21.77ZM210 144a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhStampLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStandardDefinitionLightIcon],svg[ph-standard-definition-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 74a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6h24a54 54 0 0 0 0-108Zm66 54a42 42 0 0 1-42 42h-18V86h18a42 42 0 0 1 42 42M26 48a6 6 0 0 1 6-6h192a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m204 160a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6m-124-56c0-11.21-10.7-15.1-28.33-20.18c-15.89-4.58-33.89-9.77-33.89-27.82c0-17.1 15.57-30 36.22-30c15 0 27.74 6.88 33.34 18a6 6 0 0 1-10.71 5.42C99.08 90.36 90.41 86 80 86c-13.81 0-24.22 7.74-24.22 18c0 8.41 9.52 11.76 25.21 16.29C97.48 125 118 131 118 152c0 16.54-17 30-38 30s-38-13.46-38-30a6 6 0 0 1 12 0c0 9.76 11.91 18 26 18s26-8.24 26-18"></svg:path>`,
})
export class PhStandardDefinitionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarAndCrescentLightIcon],svg[ph-star-and-crescent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.73 201.06a82 82 0 0 1 0-146.12a6 6 0 0 0 0-10.69A93 93 0 0 0 112 34a94 94 0 0 0 0 188a93 93 0 0 0 42.73-10.25a6 6 0 0 0 0-10.69M112 210a82 82 0 1 1 26.81-159.53a94 94 0 0 0 0 155.06A81.4 81.4 0 0 1 112 210m138.38-87.51l-27.61-11.91l-2.4-31a6 6 0 0 0-10.61-3.36l-19.39 23.45l-28.93-7.16a6 6 0 0 0-6.61 8.87L170.5 128l-15.67 26.62a6 6 0 0 0 6.61 8.87l28.93-7.16l19.39 23.49a6 6 0 0 0 10.61-3.36l2.4-31l27.61-11.91a6 6 0 0 0 0-11Zm-35.69 13.35a6 6 0 0 0-3.61 5l-1.53 19.83l-12.33-14.94a6 6 0 0 0-4.63-2.18a6 6 0 0 0-1.44.18l-18.74 4.63L182.64 131a6 6 0 0 0 0-6.08l-10.23-17.37l18.74 4.63a6 6 0 0 0 6.07-2l12.33-14.94l1.53 19.83a6 6 0 0 0 3.61 5l18.17 7.93Z"></svg:path>`,
})
export class PhStarAndCrescentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarFourLightIcon],svg[ph-star-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.81 114.89L164.5 91.5l-23.39-64.31a13.95 13.95 0 0 0-26.22 0L91.5 91.5l-64.31 23.39a13.95 13.95 0 0 0 0 26.22L91.5 164.5l23.39 64.31a13.95 13.95 0 0 0 26.22 0l23.39-64.31l64.31-23.39a13.95 13.95 0 0 0 0-26.22m-4.1 15l-66.94 24.34a6 6 0 0 0-3.59 3.59l-24.34 66.94a2 2 0 0 1-3.68 0l-24.34-66.94a6 6 0 0 0-3.59-3.59l-66.94-24.39a2 2 0 0 1 0-3.68l66.94-24.34a6 6 0 0 0 3.59-3.59l24.34-66.94a2 2 0 0 1 3.68 0l24.34 66.94a6 6 0 0 0 3.59 3.59l66.94 24.34a2 2 0 0 1 0 3.68Z"></svg:path>`,
})
export class PhStarFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarHalfLightIcon],svg[ph-star-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m233 113.32l-5.06 4.36a6 6 0 1 1-7.83-9.08l5.06-4.36a2.38 2.38 0 0 0 .72-2.65a2.28 2.28 0 0 0-2.07-1.65l-8.28-.67a6 6 0 1 1 1-12l8.27.67a14.17 14.17 0 0 1 12.52 9.89a14.43 14.43 0 0 1-4.33 15.49m-58.45 38.83l4.08 17.22a6 6 0 0 0 5.83 4.62a5.5 5.5 0 0 0 1.39-.17a6 6 0 0 0 4.46-7.22l-3.24-13.67l8.87-7.65a6 6 0 1 0-7.84-9.09l-11.63 10a6 6 0 0 0-1.94 5.96Zm25.23 54.45a6 6 0 1 0-11.67 2.77l1.32 5.57a2.35 2.35 0 0 1-.95 2.57a2.24 2.24 0 0 1-2.6.1l-6.71-4.13a6 6 0 1 0-6.29 10.22l6.72 4.13a14.39 14.39 0 0 0 21.5-15.65ZM175.52 96l-15.64-1.26a6 6 0 0 1-5.06-3.69L134 40.7v145l8.39 5.15a6 6 0 0 1-6.29 10.23l-8.1-5l-51.58 31.75a14.39 14.39 0 0 1-21.5-15.65l14-59.25L23 113.32a14.43 14.43 0 0 1-4.3-15.45A14.17 14.17 0 0 1 31.24 88l60.25-4.87l23.22-56.2a14.37 14.37 0 0 1 26.58 0l23.22 56.2l12 1a6 6 0 0 1-1 12ZM122 185.72V40.7l-20.82 50.39a6 6 0 0 1-5.06 3.69L32.2 99.94a2.28 2.28 0 0 0-2.07 1.65a2.38 2.38 0 0 0 .72 2.65l48.7 42a6 6 0 0 1 1.92 5.92l-14.88 62.78a2.35 2.35 0 0 0 1 2.57a2.24 2.24 0 0 0 2.6.1Z"></svg:path>`,
})
export class PhStarHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarLightIcon],svg[ph-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.28 97.87A14.18 14.18 0 0 0 224.76 88l-60.25-4.87l-23.22-56.2a14.37 14.37 0 0 0-26.58 0L91.49 83.11L31.24 88a14.18 14.18 0 0 0-12.52 9.89A14.43 14.43 0 0 0 23 113.32l46 39.61l-14 59.25a14.4 14.4 0 0 0 5.59 15a14.1 14.1 0 0 0 15.91.6l51.5-31.66l51.58 31.71a14.1 14.1 0 0 0 15.91-.6a14.4 14.4 0 0 0 5.59-15l-14-59.25L233 113.32a14.43 14.43 0 0 0 4.28-15.45m-12.14 6.37l-48.69 42a6 6 0 0 0-1.92 5.92l14.88 62.79a2.35 2.35 0 0 1-.95 2.57a2.24 2.24 0 0 1-2.6.1L131.14 184a6 6 0 0 0-6.28 0l-54.72 33.61a2.24 2.24 0 0 1-2.6-.1a2.35 2.35 0 0 1-1-2.57l14.88-62.79a6 6 0 0 0-1.92-5.92l-48.69-42a2.37 2.37 0 0 1-.73-2.65a2.28 2.28 0 0 1 2.07-1.65l63.92-5.16a6 6 0 0 0 5.06-3.69l24.63-59.6a2.35 2.35 0 0 1 4.38 0l24.63 59.6a6 6 0 0 0 5.06 3.69l63.92 5.16a2.28 2.28 0 0 1 2.07 1.65a2.37 2.37 0 0 1-.68 2.66"></svg:path>`,
})
export class PhStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStarOfDavidLightIcon],svg[ph-star-of-david-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m198.91 128l30.3-53a6 6 0 0 0-5.21-9h-60.51l-30.28-53a6 6 0 0 0-10.42 0L92.5 66H32a6 6 0 0 0-5.21 9l30.28 53l-30.28 53a6 6 0 0 0 5.21 9h60.5l30.29 53a6 6 0 0 0 10.42 0l30.28-53H224a6 6 0 0 0 5.21-9Zm14.75-50L192 115.91L170.34 78Zm-28.57 50l-28.56 50H99.46L70.9 128l28.56-50h57.07ZM128 28.09L149.67 66h-43.35ZM42.34 78h43.3L64 115.91Zm0 99.92L64 140.09L85.64 178ZM128 227.91L106.32 190h43.35ZM170.34 178L192 140.09L213.66 178Z"></svg:path>`,
})
export class PhStarOfDavidLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteamLogoLightIcon],svg[ph-steam-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m-11.62 158.17l61.21-49.93a34 34 0 1 0-47.83-47.83l-44.43 54.44L43 98.49a89.63 89.63 0 1 1-3.53 13.43l38.44 38.44a26 26 0 0 0 38.5 33.81Zm6.19-70a34.1 34.1 0 0 0 27.25 27.25l-24 19.58A26 26 0 0 0 103 138.18ZM156 130a22 22 0 1 1 22-22a22 22 0 0 1-22 22m-56 20a14 14 0 1 1-14 14a14 14 0 0 1 14-14"></svg:path>`,
})
export class PhSteamLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSteeringWheelLightIcon],svg[ph-steering-wheel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M46.43 166h44a2 2 0 0 1 1.87 1.3l18.33 49a90.3 90.3 0 0 1-64.2-50.3m98.87 50.32l18.37-49a2 2 0 0 1 1.88-1.3h44a90.29 90.29 0 0 1-64.25 50.3M214.17 154h-48.62a14 14 0 0 0-13.11 9.09l-20.55 54.82c-1.29.06-2.59.09-3.89.09s-2.63 0-3.94-.09l-20.5-54.81a14.06 14.06 0 0 0-13.11-9.1H41.83c-.65-2.17-1.23-4.37-1.72-6.61a122 122 0 0 1 175.78 0c-.49 2.24-1.07 4.44-1.72 6.61M128 98a134.38 134.38 0 0 0-89.88 34.64C38 131.1 38 129.56 38 128a90 90 0 0 1 180 0c0 1.56 0 3.1-.12 4.64A134.38 134.38 0 0 0 128 98m10 42a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhSteeringWheelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStepsLightIcon],svg[ph-steps-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 56a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6H78v42a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h50v-42a6 6 0 0 1 6-6h50v-42a6 6 0 0 1 6-6h50V56a6 6 0 0 1 6-6h56a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhStepsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStethoscopeLightIcon],svg[ph-stethoscope-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218 160a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-4.35 37.58A46.05 46.05 0 0 1 168 238h-24a46.06 46.06 0 0 1-46-46v-42.29A62 62 0 0 1 42 88V40a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12H54v42a50 50 0 0 0 50 50h.67c27.2-.36 49.33-23.16 49.33-50.83V46h-18a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6v47.17c0 32.43-24.68 59.44-56 62.52V192a34 34 0 0 0 34 34h24a34.05 34.05 0 0 0 33.56-28.56a38 38 0 1 1 12.09.14M234 160a26 26 0 1 0-26 26a26 26 0 0 0 26-26"></svg:path>`,
})
export class PhStethoscopeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStickerLightIcon],svg[ph-sticker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 34H88a54.06 54.06 0 0 0-54 54v80a54.06 54.06 0 0 0 54 54h48a5.9 5.9 0 0 0 1.9-.31c25.84-8.61 75.18-57.95 83.79-83.79a5.9 5.9 0 0 0 .31-1.9V88a54.06 54.06 0 0 0-54-54M46 168V88a42 42 0 0 1 42-42h80a42 42 0 0 1 42 42v42h-26a54.06 54.06 0 0 0-54 54v26H88a42 42 0 0 1-42-42m96 38.67V184a42 42 0 0 1 42-42h22.67c-11.83 21.1-43.57 52.84-64.67 64.67"></svg:path>`,
})
export class PhStickerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStoolLightIcon],svg[ph-stool-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 64V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h9L58.07 223.06a6 6 0 0 0 5 6.87a6 6 0 0 0 6.86-5L78 174h100l8 50.93a6 6 0 1 0 11.86-1.87L175 78h9a14 14 0 0 0 14-14M70 64V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2m106.14 98H79.86l13.27-84h69.74Z"></svg:path>`,
})
export class PhStoolLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopCircleLightIcon],svg[ph-stop-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m32-128H96a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-6 64h-52v-52h52Z"></svg:path>`,
})
export class PhStopCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStopLightIcon],svg[ph-stop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhStopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStorefrontLightIcon],svg[ph-storefront-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.22 94.41A6 6 0 0 0 26 96v16a38 38 0 0 0 16 31v73a6 6 0 0 0 6 6h160a6 6 0 0 0 6-6v-73a38 38 0 0 0 16-31V96a6 6 0 0 0-.23-1.64l-14.34-50.21A14.07 14.07 0 0 0 202 34H54a14.07 14.07 0 0 0-13.43 10.15Zm25.89-47A2 2 0 0 1 54 46h148a2 2 0 0 1 1.92 1.45L216.05 90H40ZM102 102h52v10a26 26 0 0 1-52 0Zm-64 0h52v10a26 26 0 0 1-38.18 23a6 6 0 0 0-1.65-1A26 26 0 0 1 38 112Zm164 108H54v-61.34a38 38 0 0 0 42-16.21a37.95 37.95 0 0 0 64 0a38 38 0 0 0 42 16.21Zm3.83-76a6 6 0 0 0-1.65 1A26 26 0 0 1 166 112v-10h52v10a26 26 0 0 1-12.17 22"></svg:path>`,
})
export class PhStorefrontLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStrategyLightIcon],svg[ph-strategy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 154a34 34 0 1 0 34 34a34 34 0 0 0-34-34m0 56a22 22 0 1 1 22-22a22 22 0 0 1-22 22M43.76 107.76L59.52 92L43.76 76.24a6 6 0 0 1 8.48-8.48L68 83.52l15.76-15.76a6 6 0 0 1 8.48 8.48L76.48 92l15.76 15.76a6 6 0 1 1-8.48 8.48L68 100.48l-15.76 15.76a6 6 0 0 1-8.48-8.48m184.48 96a6 6 0 1 1-8.48 8.48L204 196.48l-15.76 15.76a6 6 0 0 1-8.48-8.48L195.52 188l-15.76-15.76a6 6 0 0 1 8.48-8.48L204 179.52l15.76-15.76a6 6 0 0 1 8.48 8.48L212.48 188Zm-45.69-91.46c-6 21.66-24.55 40.38-45.09 45.52a6 6 0 0 1-1.46.18a6 6 0 0 1-1.46-11.82c16.29-4.07 31.62-19.67 36.44-37.09c3.33-12 3.39-30.24-15.22-48.85L150 54.48V80a6 6 0 0 1-12 0V40a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12h-25.52l5.76 5.76C182 69.47 188.45 91 182.55 112.3"></svg:path>`,
})
export class PhStrategyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStripeLogoLightIcon],svg[ph-stripe-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 152c0 16.54-17.05 30-38 30s-38-13.46-38-30a6 6 0 0 1 12 0c0 9.76 11.91 18 26 18s26-8.24 26-18c0-11.21-10.7-15.1-28.33-20.18c-15.89-4.58-33.89-9.77-33.89-27.82c0-17.1 15.57-30 36.22-30c15 0 27.74 6.88 33.34 18a6 6 0 0 1-10.71 5.42C147.08 90.36 138.41 86 128 86c-13.81 0-24.22 7.74-24.22 18c0 8.41 9.52 11.76 25.21 16.29C145.48 125 166 131 166 152m56-104v160a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhStripeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phStudentLightIcon],svg[ph-student-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.9 58.31l-96-32a6 6 0 0 0-3.8 0l-96 32A6 6 0 0 0 26 64v80a6 6 0 0 0 12 0V72.32l38.68 12.9A62 62 0 0 0 99 174.75c-19.25 6.53-36 19.59-48 38a6 6 0 0 0 10 6.53C76.47 195.59 100.88 182 128 182s51.53 13.59 67 37.28a6 6 0 0 0 10-6.56c-12-18.38-28.73-31.44-48-38a62 62 0 0 0 22.27-89.53l46.63-15.5a6 6 0 0 0 0-11.38M178 120a50 50 0 1 1-89.37-30.8l37.47 12.49a6 6 0 0 0 3.8 0l37.47-12.49A49.78 49.78 0 0 1 178 120m-50-30.32L51 64l77-25.68L205 64Z"></svg:path>`,
})
export class PhStudentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfLightIcon],svg[ph-subset-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 208a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h152a6 6 0 0 1 6 6m-6-46h-96a50 50 0 0 1 0-100h96a6 6 0 0 0 0-12h-96a62 62 0 0 0 0 124h96a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSubsetOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubsetProperOfLightIcon],svg[ph-subset-proper-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 208a6 6 0 0 1-6 6h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74 74 0 0 0 0 148h72a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSubsetProperOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesLightIcon],svg[ph-subtitles-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM50 136a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m156 0a6 6 0 0 1-6 6h-96a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m-48 32a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m48 0a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSubtitlesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtitlesSlashLightIcon],svg[ph-subtitles-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8L49 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h158.8l12.76 14a6 6 0 0 0 8.88-8.08ZM32 194a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h27.89l61.82 68H104a6 6 0 0 0 0 12h28.62l18.18 20H56a6 6 0 0 0 0 12h105.71l18.18 20Zm18-58a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m188-72v130.83a6 6 0 1 1-12 0V64a2 2 0 0 0-2-2H105.79a6 6 0 0 1 0-12H224a14 14 0 0 1 14 14m-59.48 78a6 6 0 1 1 0-12H200a6 6 0 0 1 0 12Z"></svg:path>`,
})
export class PhSubtitlesSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractLightIcon],svg[ph-subtract-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.91 83.08a78 78 0 1 0-89.83 89.83a78 78 0 1 0 89.83-89.83M226 160a65 65 0 0 1-.62 8.9l-53.76-53.77A77.8 77.8 0 0 0 174 96v-.51A65.8 65.8 0 0 1 226 160m-79.29-4.81l55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.9 77.9 0 0 0 18.99-12m8.48-8.48a77.9 77.9 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69ZM30 96a66 66 0 1 1 66 66a66.08 66.08 0 0 1-66-66m65.49 78H96a77.8 77.8 0 0 0 19.13-2.38l53.77 53.76A65.87 65.87 0 0 1 95.49 174"></svg:path>`,
})
export class PhSubtractLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubtractSquareLightIcon],svg[ph-subtract-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-53.52 120l-44-44h39l44 44Zm3.52-52.48v-39l44 44v39Zm44-12L166.48 102H210ZM46 46h108v108H46Zm56 120.48L145.52 210H102Z"></svg:path>`,
})
export class PhSubtractSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSubwayLightIcon],svg[ph-subway-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 96v112a6 6 0 0 1-12 0V96a58.07 58.07 0 0 0-58-58h-48a58.07 58.07 0 0 0-58 58v112a6 6 0 0 1-12 0V96a70.08 70.08 0 0 1 70-70h48a70.08 70.08 0 0 1 70 70m-40 0v72a22 22 0 0 1-20.33 21.93l3.7 7.39a6 6 0 0 1-10.74 5.36L148.29 190h-40.58l-6.34 12.68a6 6 0 1 1-10.74-5.36l3.7-7.39A22 22 0 0 1 74 168V96a22 22 0 0 1 22-22h64a22 22 0 0 1 22 22m-96 0v50h84V96a10 10 0 0 0-10-10H96a10 10 0 0 0-10 10m32 62v20h20v-20Zm-22 20h10v-20H86v10a10 10 0 0 0 10 10m74-10v-10h-20v20h10a10 10 0 0 0 10-10"></svg:path>`,
})
export class PhSubwayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseLightIcon],svg[ph-suitcase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm68 22v132H94V70ZM38 200V72a2 2 0 0 1 2-2h42v132H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-42V70h42a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhSuitcaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseRollingLightIcon],svg[ph-suitcase-rolling-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 88v96a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m26-6a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m32 0a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6m46-18v144a14 14 0 0 1-14 14h-18v18a6 6 0 0 1-12 0v-18H94v18a6 6 0 0 1-12 0v-18H64a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h26V24a22 22 0 0 1 22-22h32a22 22 0 0 1 22 22v26h26a14 14 0 0 1 14 14M102 50h52V24a10 10 0 0 0-10-10h-32a10 10 0 0 0-10 10Zm92 14a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h128a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhSuitcaseRollingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseSimpleLightIcon],svg[ph-suitcase-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94ZM40 70h176a2 2 0 0 1 2 2v74H38V72a2 2 0 0 1 2-2m176 132H40a2 2 0 0 1-2-2v-42h180v42a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSuitcaseSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunDimLightIcon],svg[ph-sun-dim-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 40v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62a62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-8-8a6 6 0 0 0-8.48 8.48Zm0 119.52l-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 1 0-8.48-8.48m136-136l-8 8a6 6 0 1 0 8.48 8.48l8-8a6 6 0 0 0-8.48-8.48m.48 136a6 6 0 0 0-8.48 8.48l8 8a6 6 0 0 0 8.48-8.48ZM40 122h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12m88 88a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m96-88h-8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSunDimLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunHorizonLightIcon],svg[ph-sun-horizon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 154h-42.72a71 71 0 0 0 .72-10a70 70 0 0 0-140 0a71 71 0 0 0 .72 10H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M70 144a58 58 0 1 1 115.13 10H70.87a58.6 58.6 0 0 1-.87-10m144 56a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h160a6 6 0 0 1 6 6M74.63 42.69a6 6 0 0 1 10.74-5.37l8 16a6 6 0 0 1-10.74 5.36Zm-56 50.63a6 6 0 0 1 8.05-2.69l16 8a6 6 0 0 1-5.36 10.74l-16-8a6 6 0 0 1-2.69-8.05m192 13.36a6 6 0 0 1 2.69-8.05l16-8a6 6 0 1 1 5.36 10.74l-16 8a6 6 0 0 1-8.05-2.69m-48-53.36l8-16a6 6 0 0 1 10.74 5.37l-8 16a6 6 0 1 1-10.74-5.36Z"></svg:path>`,
})
export class PhSunHorizonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunLightIcon],svg[ph-sun-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 40V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0m68 88a62 62 0 1 1-62-62a62.07 62.07 0 0 1 62 62m-12 0a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50M59.76 68.24a6 6 0 1 0 8.48-8.48l-16-16a6 6 0 0 0-8.48 8.48Zm0 119.52l-16 16a6 6 0 1 0 8.48 8.48l16-16a6 6 0 1 0-8.48-8.48M192 70a6 6 0 0 0 4.24-1.76l16-16a6 6 0 0 0-8.48-8.48l-16 16A6 6 0 0 0 192 70m4.24 117.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48-8.48ZM46 128a6 6 0 0 0-6-6H16a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6m82 82a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6m112-88h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhSunLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSunglassesLightIcon],svg[ph-sunglasses-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42a6 6 0 0 0 0 12a18 18 0 0 1 18 18v58H38V72a18 18 0 0 1 18-18a6 6 0 0 0 0-12a30 30 0 0 0-30 30v92a42 42 0 0 0 84 0v-22h36v22a42 42 0 0 0 84 0V72a30 30 0 0 0-30-30M38 164v-21.52L84.53 189A30 30 0 0 1 38 164m60 0a29.83 29.83 0 0 1-5 16.53L54.48 142H98Zm60 0v-21.52L204.53 189A30 30 0 0 1 158 164m55 16.53L174.48 142H218v22a29.83 29.83 0 0 1-5 16.53"></svg:path>`,
})
export class PhSunglassesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfLightIcon],svg[ph-superset-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 200a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h152a6 6 0 0 1 6 6m-62-46H56a6 6 0 0 0 0 12h96a62 62 0 0 0 0-124H56a6 6 0 0 0 0 12h96a50 50 0 0 1 0 100"></svg:path>`,
})
export class PhSupersetOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfLightIcon],svg[ph-superset-proper-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a86.1 86.1 0 0 1-86 86H64a6 6 0 0 1 0-12h72a74 74 0 0 0 0-148H64a6 6 0 0 1 0-12h72a86.1 86.1 0 0 1 86 86"></svg:path>`,
})
export class PhSupersetProperOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwapLightIcon],svg[ph-swap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 48v104a14 14 0 0 1-14 14H94.49l13.75 13.76a6 6 0 1 1-8.48 8.48l-24-24a6 6 0 0 1 0-8.48l24-24a6 6 0 0 1 8.48 8.48L94.49 154H208a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0v-8a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14m-54 146a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V104a2 2 0 0 1 2-2h113.51l-13.75 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L161.51 90H48a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhSwapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwatchesLightIcon],svg[ph-swatches-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 180a10 10 0 1 1-10-10a10 10 0 0 1 10 10m152-23.81V208a14 14 0 0 1-14 14H76a44 44 0 0 1-7.58-.65a42 42 0 0 1-33.81-48.64l25-143.13a13.94 13.94 0 0 1 16.21-11.36l54.67 9.72a14 14 0 0 1 11.3 16.21l-12.67 72.44l71-25.75a14 14 0 0 1 17.89 8.32l19.09 52.22a15.7 15.7 0 0 1 .9 4.81m-133.07 29L130 42.08a2 2 0 0 0-1.58-2.32L73.72 30h-.34a1.84 1.84 0 0 0-1.07.35a2 2 0 0 0-.82 1.3l-25 143.13a30 30 0 0 0 24.09 34.76a29.25 29.25 0 0 0 22-4.89a29.8 29.8 0 0 0 12.33-19.44Zm8.25 13.17L224.71 158a2 2 0 0 0 1.11-1a1.86 1.86 0 0 0 .06-1.46l-19.09-52.21a2 2 0 0 0-2.53-1.17l-77.53 28.09l-10 57.07a42 42 0 0 1-3.55 11.06ZM226 170.27L116.35 210H224a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhSwatchesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwimmingPoolLightIcon],svg[ph-swimming-pool-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 147.39a6 6 0 0 0 6-6V126h68v17.29a6 6 0 0 0 12 0V32a6 6 0 0 0-12 0v18H94V32a6 6 0 0 0-12 0v109.39a6 6 0 0 0 6 6M94 114V94h68v20Zm68-52v20H94V62ZM26 168a6 6 0 0 1 6-6c13.82 0 21 4.79 27.33 9c5.63 3.75 10.48 7 20.67 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.32-9s21 4.79 27.33 9c5.63 3.75 10.49 7 20.68 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.33-9a6 6 0 0 1 0 12c-10.18 0-15 3.24-20.67 7c-6.34 4.22-13.52 9-27.33 9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15 3.24-20.67 7c-6.33 4.22-13.51 9-27.32 9s-21-4.79-27.33-9c-5.67-3.76-10.49-7-20.67-7a6 6 0 0 1-6-6m204 40a6 6 0 0 1-6 6c-10.18 0-15 3.24-20.67 7c-6.34 4.22-13.52 9-27.33 9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15 3.24-20.67 7c-6.33 4.22-13.51 9-27.32 9s-21-4.79-27.33-9c-5.67-3.76-10.49-7-20.67-7a6 6 0 0 1 0-12c13.82 0 21 4.79 27.33 9c5.63 3.75 10.48 7 20.67 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.32-9s21 4.79 27.33 9c5.63 3.75 10.49 7 20.68 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.33-9a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhSwimmingPoolLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSwordLightIcon],svg[ph-sword-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34h-64a6 6 0 0 0-4.76 2.34l-65.39 85L70.6 110.1a14 14 0 0 0-19.8 0l-12.7 12.7a14 14 0 0 0 0 19.81L59.51 164L30.1 193.42a14 14 0 0 0 0 19.8l12.69 12.69a14 14 0 0 0 19.8 0L92 196.5l21.4 21.4a14 14 0 0 0 19.8 0l12.7-12.69a14 14 0 0 0 0-19.81l-11.25-11.25l85-65.39A6 6 0 0 0 222 104V40a6 6 0 0 0-6-6M54.1 217.42a2 2 0 0 1-2.83 0l-12.68-12.69a2 2 0 0 1 0-2.82L68 172.5L83.51 188Zm83.31-20.7l-12.69 12.7a2 2 0 0 1-2.84 0l-75.29-75.3a2 2 0 0 1 0-2.83l12.69-12.7a2 2 0 0 1 2.84 0l75.29 75.3a2 2 0 0 1 0 2.83M210 101.05l-83.91 64.55l-13.6-13.6l51.75-51.76a6 6 0 0 0-8.48-8.48L104 143.51l-13.6-13.6L155 46h55Z"></svg:path>`,
})
export class PhSwordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSynagogueLightIcon],svg[ph-synagogue-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 58.84V32a6 6 0 0 0-12 0v26.84A22 22 0 0 0 178 80v45.66l-44-25.14V72a6 6 0 0 0-12 0v28.52l-44 25.14V80a22 22 0 0 0-16-21.16V32a6 6 0 0 0-12 0v26.84A22 22 0 0 0 34 80v136a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a10 10 0 0 1 20 0v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6V80a22 22 0 0 0-16-21.16M200 70a10 10 0 0 1 10 10v26h-20V80a10 10 0 0 1 10-10M56 70a10 10 0 0 1 10 10v26H46V80a10 10 0 0 1 10-10m-10 48h20v92H46Zm82 36a22 22 0 0 0-22 22v34H78v-70.52l50-28.57l50 28.57V210h-28v-34a22 22 0 0 0-22-22m62 56v-92h20v92Z"></svg:path>`,
})
export class PhSynagogueLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phSyringeLightIcon],svg[ph-syringe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 67.76l-48-48a6 6 0 0 0-8.48 8.48L199.51 48L168 79.51l-35.76-35.75a6 6 0 1 0-8.48 8.48l7.75 7.76l-85.41 85.41a13.94 13.94 0 0 0-4.1 9.9v50.2l-22.24 22.25a6 6 0 1 0 8.48 8.48L50.49 214h50.2a13.94 13.94 0 0 0 9.9-4.1L196 124.49l7.76 7.75a6 6 0 0 0 8.48-8.48L176.49 88L208 56.49l19.76 19.75a6 6 0 0 0 8.48-8.48M102.1 201.41a2 2 0 0 1-1.41.59H54v-46.69a2 2 0 0 1 .59-1.41L74 134.49l21.76 21.75a6 6 0 1 0 8.48-8.48L82.49 126L98 110.49l21.76 21.75a6 6 0 0 0 8.48-8.48L106.49 102L140 68.49L187.51 116Z"></svg:path>`,
})
export class PhSyringeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTShirtLightIcon],svg[ph-t-shirt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.64 63l-51.77-28.26A5.9 5.9 0 0 0 192 34h-32a6 6 0 0 0-6 6a26 26 0 0 1-52 0a6 6 0 0 0-6-6H64a5.9 5.9 0 0 0-2.88.74L9.36 63a13.77 13.77 0 0 0-5.78 18.55l19.28 36.81A14.38 14.38 0 0 0 35.67 126H58v82a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-82h22.34a14.38 14.38 0 0 0 12.81-7.64l19.28-36.81A13.77 13.77 0 0 0 246.64 63m-211 51a2.42 2.42 0 0 1-2.18-1.21L14.21 76a1.82 1.82 0 0 1 .9-2.47L58 50.11V114ZM186 208a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V46h20.48a38 38 0 0 0 75 0H186Zm55.8-132l-19.28 36.8a2.42 2.42 0 0 1-2.18 1.21H198v-63.9l42.9 23.4a1.83 1.83 0 0 1 .89 2.49Z"></svg:path>`,
})
export class PhTShirtLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTableLightIcon],svg[ph-table-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6M38 110h44v36H38Zm56 0h124v36H94Zm124-48v36H38V62ZM38 192v-34h44v36H40a2 2 0 0 1-2-2m178 2H94v-36h124v34a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTableLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTabsLightIcon],svg[ph-tabs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.75 166.28L231.46 92a13.91 13.91 0 0 0-13.41-10H208a6 6 0 0 0 0 12h10.05a2 2 0 0 1 1.95 1.42L240 162h-35.54l-21-70a13.91 13.91 0 0 0-13.41-10H160a6 6 0 0 0 0 12h10.05a2 2 0 0 1 1.95 1.42L192 162h-35.54l-21-70a13.91 13.91 0 0 0-13.41-10H38a13.91 13.91 0 0 0-13.46 10L2.28 166.2v.2a3 3 0 0 0-.1.39a.1.1 0 0 0 0 .05A6 6 0 0 0 8 174h240a6 6 0 0 0 5.75-7.72M36 95.42A2 2 0 0 1 38 94h84.1a2 2 0 0 1 1.9 1.43L144 162H16.06Z"></svg:path>`,
})
export class PhTabsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagChevronLightIcon],svg[ph-tag-chevron-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245 124.67l-45.63-68.44A14 14 0 0 0 187.72 50H32a6 6 0 0 0-5 9.33L72.79 128L27 196.67a6 6 0 0 0 5 9.33h155.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66m-55.61 68.44a2 2 0 0 1-1.66.89H43.21L85 131.33a6 6 0 0 0 0-6.66L43.21 62h144.51a2 2 0 0 1 1.66.89L232.79 128Z"></svg:path>`,
})
export class PhTagChevronLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagLightIcon],svg[ph-tag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.91 137.42L142.59 38.1a13.94 13.94 0 0 0-9.9-4.1H40a6 6 0 0 0-6 6v92.69a13.94 13.94 0 0 0 4.1 9.9l99.32 99.32a14 14 0 0 0 19.8 0l84.69-84.69a14 14 0 0 0 0-19.8m-8.49 11.31l-84.69 84.69a2 2 0 0 1-2.83 0L46.59 134.1a2 2 0 0 1-.59-1.41V46h86.69a2 2 0 0 1 1.41.59l99.32 99.31a2 2 0 0 1 0 2.83M94 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTagSimpleLightIcon],svg[ph-tag-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245 124.67l-45.63-68.44A14 14 0 0 0 187.72 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h147.72a14 14 0 0 0 11.65-6.23L245 131.33a6 6 0 0 0 0-6.66m-55.61 68.44a2 2 0 0 1-1.66.89H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h147.72a2 2 0 0 1 1.66.89L232.79 128Z"></svg:path>`,
})
export class PhTagSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTargetLightIcon],svg[ph-target-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.06 84a102.06 102.06 0 1 1-24.31-32.27l24-24a6 6 0 0 1 8.48 8.49l-96 96a6 6 0 1 1-8.48-8.49l29.39-29.4a42 42 0 1 0 16.78 31.24a6 6 0 1 1 12-.68a54 54 0 1 1-20.22-39.06l25.54-25.55a89.91 89.91 0 1 0 22 28.93A6 6 0 1 1 220.06 84"></svg:path>`,
})
export class PhTargetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTaxiLightIcon],svg[ph-taxi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-12.52l-28-48.95a14 14 0 0 0-12.15-7h-23.3L151.58 18.8a13.93 13.93 0 0 0-13-8.8h-21.16a13.93 13.93 0 0 0-13 8.8L91.94 50h-23.3a14 14 0 0 0-12.15 7l-28 49H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12M115.56 23.26a2 2 0 0 1 1.86-1.26h21.16a2 2 0 0 1 1.86 1.26L151.14 50h-46.28ZM66.91 63a2 2 0 0 1 1.73-1h118.72a2 2 0 0 1 1.73 1l24.57 43H42.34ZM66 200a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-18h28Zm150 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m2-32H38v-52h180ZM58 144a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m112 0a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTaxiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTeaBagLightIcon],svg[ph-tea-bag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162a18 18 0 0 1-18-18V64a54 54 0 0 0-108 0v10H76.53a14.07 14.07 0 0 0-12 6.8L44 115a14 14 0 0 0-2 7.21V216a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14v-93.78a14 14 0 0 0-2-7.21L143.48 80.8a14.07 14.07 0 0 0-12-6.8H110V64a42 42 0 0 1 84 0v80a30 30 0 0 0 30 30a6 6 0 0 0 0-12m-92.53-76a2 2 0 0 1 1.72 1l20.53 34.22a2 2 0 0 1 .28 1V216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-93.78a2 2 0 0 1 .29-1L74.81 87a2 2 0 0 1 1.72-1H98v50a6 6 0 0 0 12 0V86Z"></svg:path>`,
})
export class PhTeaBagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoLightIcon],svg[ph-telegram-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.57 27.7a7 7 0 0 0-7.13-1.22L17.78 105.79a12.23 12.23 0 0 0 2.1 23.39L74 139.81V200a14 14 0 0 0 24.08 9.71l26.64-27.63l41.58 36.45a13.9 13.9 0 0 0 9.2 3.49a14.3 14.3 0 0 0 4.36-.69a13.86 13.86 0 0 0 9.34-10.17l40.62-176.59a7 7 0 0 0-2.25-6.87M22.05 117.37a.46.46 0 0 1 0-.32a.5.5 0 0 1 .15-.08l159.71-62.52l-103.3 74l-56.41-11.04Zm67.39 84A2 2 0 0 1 86 200v-51.89l29.69 26Zm88.07 7.08a1.93 1.93 0 0 1-1.34 1.44a2 2 0 0 1-2-.4l-84.53-74.15L215 45.5Z"></svg:path>`,
})
export class PhTelegramLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionLightIcon],svg[ph-television-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66h-73.52l37.76-37.76a6 6 0 0 0-8.48-8.48L128 63.51L84.24 19.76a6 6 0 1 0-8.48 8.48L113.52 66H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M38 200V80a2 2 0 0 1 2-2h106v124H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-58V78h58a2 2 0 0 1 2 2Zm-20-84a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 48a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTelevisionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTelevisionSimpleLightIcon],svg[ph-television-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66h-73.52l37.76-37.76a6 6 0 0 0-8.48-8.48L128 63.51L84.24 19.76a6 6 0 1 0-8.48 8.48L113.52 66H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 134a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhTelevisionSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTennisBallLightIcon],svg[ph-tennis-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.16 55.88a102 102 0 1 0 0 144.24a101.4 101.4 0 0 0 0-144.24M64.33 64.36a89.62 89.62 0 0 1 57.25-26.07a89.32 89.32 0 0 1-26.12 57.18a89.38 89.38 0 0 1-57.21 26.11a89.6 89.6 0 0 1 26.08-57.22M38.2 133.63A101.36 101.36 0 0 0 104 104a101.24 101.24 0 0 0 29.68-65.72a89.76 89.76 0 0 1 84.17 84.13a102 102 0 0 0-95.43 95.39a89.76 89.76 0 0 1-84.22-84.17m153.47 58a89.63 89.63 0 0 1-57.25 26.06a89.94 89.94 0 0 1 83.33-83.28a89.6 89.6 0 0 1-26.08 57.23Z"></svg:path>`,
})
export class PhTennisBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTentLightIcon],svg[ph-tent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.48 189.56l-64-144A6 6 0 0 0 184 42H72a6 6 0 0 0-5.45 3.51v.14L2.52 189.56A6 6 0 0 0 8 198h240a6 6 0 0 0 5.48-8.44M66 76.27V186H17.23ZM78 186V76.27L126.77 186Zm61.9 0L81.23 54h98.87l58.67 132Z"></svg:path>`,
})
export class PhTentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalLightIcon],svg[ph-terminal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m116 132.48l-72 64a6 6 0 0 1-8-9L103 128L36 68.49a6 6 0 0 1 8-9l72 64a6 6 0 0 1 0 9ZM216 186h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTerminalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTerminalWindowLightIcon],svg[ph-terminal-window-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 128a6 6 0 0 1-2.25 4.69l-40 32a6 6 0 0 1-7.5-9.38L110.4 128l-34.15-27.31a6 6 0 1 1 7.5-9.38l40 32A6 6 0 0 1 126 128m50 26h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m54-98v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhTerminalWindowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTestTubeLightIcon],svg[ph-test-tube-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 87.76l-60-60a6 6 0 0 0-8.48 0L38.53 157A42.77 42.77 0 1 0 99 217.47l112.24-112.23l22.66-7.55a6 6 0 0 0 2.34-9.93M90.53 209A30.77 30.77 0 1 1 47 165.47l29.13-29.12c8.84-3.14 22.84-4.56 41.08 5c12.28 6.41 23.13 8.66 32.27 8.71ZM206.1 94.31a6 6 0 0 0-2.34 1.45l-39.9 39.89c-8.84 3.14-22.84 4.56-41.08-5c-12.28-6.38-23.13-8.65-32.27-8.65L172 40.49l48.89 48.89Z"></svg:path>`,
})
export class PhTestTubeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineLightIcon],svg[ph-text-a-underline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.45 173.43a6 6 0 0 0 8-2.88L86.63 134h82.74l17.2 36.55A6 6 0 0 0 192 174a5.9 5.9 0 0 0 2.55-.57a6 6 0 0 0 2.88-8l-64-136a6 6 0 0 0-10.86 0l-64 136a6 6 0 0 0 2.88 8M128 46.09L163.72 122H92.28ZM222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextAUnderlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAaLightIcon],svg[ph-text-aa-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.43 53.45a6 6 0 0 0-10.86 0l-64 136a6 6 0 1 0 10.86 5.11L38.63 158h82.74l17.2 36.55a6 6 0 1 0 10.86-5.11ZM44.28 146L80 70.09L115.72 146ZM200 98c-12.21 0-21.71 3.28-28.23 9.74a6 6 0 0 0 8.46 8.52c4.18-4.15 10.84-6.26 19.77-6.26c14.34 0 26 9.87 26 22v7.24a40.36 40.36 0 0 0-26-9.24c-20.95 0-38 15.25-38 34s17.05 34 38 34a40.36 40.36 0 0 0 26-9.24V192a6 6 0 0 0 12 0v-60c0-18.75-17-34-38-34m0 88c-14.34 0-26-9.87-26-22s11.66-22 26-22s26 9.87 26 22s-11.66 22-26 22"></svg:path>`,
})
export class PhTextAaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignCenterLightIcon],svg[ph-text-align-center-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m30 34a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12Zm152 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m-24 40H64a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignCenterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignJustifyLightIcon],svg[ph-text-align-justify-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m182 34H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignJustifyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignLeftLightIcon],svg[ph-text-align-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 46h128a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 28H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m-48 40H40a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextAlignRightLightIcon],svg[ph-text-align-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m182 34H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12m0 40H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextAlignRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBLightIcon],svg[ph-text-b-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.69 116.41A42 42 0 0 0 148 42H80a6 6 0 0 0-6 6v152a6 6 0 0 0 6 6h80a46 46 0 0 0 14.69-89.59M86 54h62a30 30 0 0 1 0 60H86Zm74 140H86v-68h74a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhTextBLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextBolderLightIcon],svg[ph-text-bolder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.7 116.4A42 42 0 0 0 140 42H64a6.2 6.2 0 0 0-6 6v152a6 6 0 0 0 6 6h88a46 46 0 0 0 14.7-89.6ZM70 54h70a30 30 0 0 1 0 60H70Zm82 140H70v-68h82a34 34 0 0 1 0 68Z"></svg:path>`,
})
export class PhTextBolderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsLightIcon],svg[ph-text-columns-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 64a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6m-6 34H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m32-108h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12m72 28h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextColumnsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveLightIcon],svg[ph-text-h-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 180a34 34 0 0 1-34 34a33.6 33.6 0 0 1-24.29-9.8a6 6 0 0 1 8.58-8.4A21.65 21.65 0 0 0 212 202a22 22 0 0 0 0-44a21.65 21.65 0 0 0-15.71 6.2a6 6 0 0 1-10.21-5.2l8-48a6 6 0 0 1 5.92-5h40a6 6 0 0 1 0 12h-34.92l-5 30a36 36 0 0 1 11.92-2a34 34 0 0 1 34 34M144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhTextHFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHFourLightIcon],svg[ph-text-h-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0m104 128a6 6 0 0 1-6 6h-10v18a6 6 0 0 1-12 0v-18h-50a6 6 0 0 1-4.74-9.68l56-72A6 6 0 0 1 238 112v66h10a6 6 0 0 1 6 6m-28-54.51L188.27 178H226Z"></svg:path>`,
})
export class PhTextHFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHLightIcon],svg[ph-text-h-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 56v144a6 6 0 0 1-12 0v-66H62v66a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v66h132V56a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTextHLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHOneLightIcon],svg[ph-text-h-one-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 112v96a6 6 0 0 1-12 0v-84.79L203.33 133a6 6 0 0 1-6.66-10l24-16a6 6 0 0 1 9.33 5m-86-62a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhTextHOneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHSixLightIcon],svg[ph-text-h-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 146a34.5 34.5 0 0 0-5.6.47l18.75-31.39a6 6 0 0 0-10.3-6.16l-32.25 54l-.22.41A34 34 0 1 0 212 146m0 56a22 22 0 1 1 22-22a22 22 0 0 1-22 22M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTextHSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHThreeLightIcon],svg[ph-text-h-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 180a34 34 0 0 1-58.29 23.79a6 6 0 0 1 8.58-8.39A22 22 0 1 0 212 158a6 6 0 0 1-4.92-9.44l21.4-30.56H192a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 9.44l-22.52 32.18A34.06 34.06 0 0 1 246 180M144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhTextHThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoLightIcon],svg[ph-text-h-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0m90 146h-36l36-47.95A30 30 0 1 0 187.71 126a6 6 0 1 0 11.29 4a18 18 0 0 1 14.47-11.82a18 18 0 0 1 16.87 28.66L187.2 204.4a6 6 0 0 0 4.8 9.6h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTextHTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextIndentLightIcon],svg[ph-text-indent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M35.76 140.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48l-40-40a6 6 0 0 0-8.48 8.48L71.51 96l-35.75 35.76a6 6 0 0 0 0 8.48"></svg:path>`,
})
export class PhTextIndentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextItalicLightIcon],svg[ph-text-italic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 56a6 6 0 0 1-6 6h-35.68l-44 132H144a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h35.68l44-132H112a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextItalicLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentLightIcon],svg[ph-text-outdent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M72 142a6 6 0 0 0 4.24-10.24L40.49 96l35.75-35.76a6 6 0 0 0-8.48-8.48l-40 40a6 6 0 0 0 0 8.48l40 40A6 6 0 0 0 72 142"></svg:path>`,
})
export class PhTextOutdentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextStrikethroughLightIcon],svg[ph-text-strikethrough-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6h-46.55c11.28 6.92 20.55 17.38 20.55 34c0 25.36-27.81 46-62 46s-62-20.64-62-46a6 6 0 0 1 12 0c0 18.75 22.43 34 50 34s50-15.25 50-34c0-18.23-15.46-26.59-40.47-34H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M76.33 102a6.2 6.2 0 0 0 1.88-.3A6 6 0 0 0 82 94.13a19.7 19.7 0 0 1-.89-6.13c0-19.38 20.16-34 46.89-34c19.58 0 35.56 7.81 42.74 20.89a6 6 0 0 0 10.52-5.78C171.94 52.13 152 42 128 42c-33.57 0-58.89 19.77-58.89 46a31.6 31.6 0 0 0 1.52 9.87a6 6 0 0 0 5.7 4.13"></svg:path>`,
})
export class PhTextStrikethroughLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSubscriptLightIcon],svg[ph-text-subscript-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 208a6 6 0 0 1-6 6h-48a6 6 0 0 1-4.8-9.6l43.17-57.56A18 18 0 1 0 199 130a6 6 0 1 1-11.31-4A30 30 0 1 1 240 154.06L204 202h36a6 6 0 0 1 6 6M147.93 51.47a6 6 0 0 0-8.46.6L92 106.84L44.53 52.07a6 6 0 1 0-9.06 7.86L84.06 116l-48.59 56.07a6 6 0 1 0 9.06 7.86L92 125.16l47.47 54.77a6 6 0 0 0 9.06-7.86L99.94 116l48.59-56.07a6 6 0 0 0-.6-8.46"></svg:path>`,
})
export class PhTextSubscriptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextSuperscriptLightIcon],svg[ph-text-superscript-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 144a6 6 0 0 1-6 6h-48a6 6 0 0 1-4.8-9.6l43.17-57.55A18 18 0 1 0 199 66a6 6 0 0 1-11.31-4a30.1 30.1 0 0 1 4.31-8a30 30 0 0 1 48 36.06L204 138h36a6 6 0 0 1 6 6m-98.07-68.53a6 6 0 0 0-8.46.6L92 130.84L44.53 76.07a6 6 0 1 0-9.06 7.86L84.06 140l-48.59 56.07a6 6 0 1 0 9.06 7.86L92 149.16l47.47 54.77a6 6 0 0 0 9.06-7.86L99.94 140l48.59-56.07a6 6 0 0 0-.6-8.46"></svg:path>`,
})
export class PhTextSuperscriptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTLightIcon],svg[ph-text-t-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 56v32a6 6 0 0 1-12 0V62h-60v132h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26V62H62v26a6 6 0 0 1-12 0V56a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextTLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashLightIcon],svg[ph-text-t-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 220.44a6 6 0 0 1-8.48-.4L134 143.52V194h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26v-63.68l-60-66V88a6 6 0 0 1-12 0V56a6 6 0 0 1 1.19-3.57L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44M105.79 62H122v18.43a6 6 0 0 0 12 0V62h60v26a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6h-94.21a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhTextTSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextUnderlineLightIcon],svg[ph-text-underline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 224a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m-70-26a62.07 62.07 0 0 0 62-62V56a6 6 0 0 0-12 0v80a50 50 0 0 1-100 0V56a6 6 0 0 0-12 0v80a62.07 62.07 0 0 0 62 62"></svg:path>`,
})
export class PhTextUnderlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTextboxLightIcon],svg[ph-textbox-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 42a6 6 0 0 0-6 6v18H24a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h82v18a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6M24 178a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h82v100Zm222-98v96a14 14 0 0 1-14 14h-88a6 6 0 0 1 0-12h88a2 2 0 0 0 2-2V80a2 2 0 0 0-2-2h-88a6 6 0 0 1 0-12h88a14 14 0 0 1 14 14M86 112a6 6 0 0 1-6 6H70v26a6 6 0 0 1-12 0v-26H48a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTextboxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdLightIcon],svg[ph-thermometer-cold-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.29 75.82l-22.58 7.33l13.95 19.21a6 6 0 1 1-9.7 7.06L216 90.21l-14 19.21a6 6 0 1 1-9.7-7.06l13.95-19.21l-22.58-7.33a6 6 0 1 1 3.71-11.41L210 71.74V48a6 6 0 0 1 12 0v23.74l22.58-7.33a6 6 0 0 1 3.71 11.41M150 184a30 30 0 1 1-36-29.4V120a6 6 0 0 1 12 0v34.6a30.05 30.05 0 0 1 24 29.4m-12 0a18 18 0 1 0-18 18a18 18 0 0 0 18-18m44 0a62 62 0 1 1-100-49V48a38 38 0 0 1 76 0v87a62.06 62.06 0 0 1 24 49m-12 0a50.07 50.07 0 0 0-21.43-41a6 6 0 0 1-2.57-5V48a26 26 0 0 0-52 0v90a6 6 0 0 1-2.57 5A50 50 0 1 0 170 184"></svg:path>`,
})
export class PhThermometerColdLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotLightIcon],svg[ph-thermometer-hot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 154.6V48a6 6 0 0 0-12 0v106.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234m59-154.32a6 6 0 0 1 1.75-8.3c14.14-9.21 24.95-4.61 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 1 1 6.55 10.05c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-8.34-1.75m66 24.64a6 6 0 0 1-1.76 8.3c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-6.55-10.05c14.14-9.21 24.95-4.6 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 0 1 8.27 1.75"></svg:path>`,
})
export class PhThermometerHotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerLightIcon],svg[ph-thermometer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 58a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14m-86 56.6V88a6 6 0 0 0-12 0v66.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234"></svg:path>`,
})
export class PhThermometerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleLightIcon],svg[ph-thermometer-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 154.6V88a6 6 0 0 0-12 0v66.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 128 234"></svg:path>`,
})
export class PhThermometerSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreadsLogoLightIcon],svg[ph-threads-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.22 125.25a62 62 0 0 0-11.78-7c-3.53-29.6-23-38.82-31.83-41.5c-19-5.74-40.73 1.09-50.6 15.9a6 6 0 1 0 10 6.66c6.94-10.41 23.25-15.28 37.14-11.07c7.22 2.18 18.39 8.34 22.39 25.61a78.7 78.7 0 0 0-18.11-2.08c-13.53 0-26.16 3.46-35.55 9.77C96 128.85 90 139.66 90 152c0 22 18 33.52 35.71 33.52a46 46 0 0 0 32.91-14.19c6.58-6.85 14.35-19.11 15.29-39.26a45 45 0 0 1 4.07 2.75c10.48 7.92 16 19.4 16 33.18c0 20.16-21 50-66 50c-27.07 0-46.92-9.19-59-27.33C59 175.75 54 154.66 54 128s5-47.75 15-62.67C81.08 47.19 100.93 38 128 38c33.85 0 55.57 13.67 66.4 41.8a6 6 0 1 0 11.2-4.31C193 42.65 166.85 26 128 26c-31.33 0-54.54 11-69 32.67C47.72 75.6 42 98.93 42 128s5.72 52.4 17 69.33C73.46 219 96.67 230 128 230c29.43 0 47.81-11.19 58.05-20.58C198.54 198 206 182.49 206 168c0-17.69-7.19-32.48-20.78-42.75M150 163a33.94 33.94 0 0 1-24.26 10.51c-16.41.01-23.74-10.8-23.74-21.51c0-13.59 12.64-28.21 40.41-28.21a65.3 65.3 0 0 1 19.58 3v1.24c.01 14.69-4.15 26.79-11.99 34.97"></svg:path>`,
})
export class PhThreadsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThreeDLightIcon],svg[ph-three-d-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 148a22 22 0 0 0-22-22a6 6 0 0 1-4.92-9.44L92.48 86H56a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18a34 34 0 1 1-34.68 56.17a6 6 0 0 1 8.58-8.39A22 22 0 0 0 98 148m62-74a54 54 0 0 1 0 108h-24a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6Zm0 12h-18v84h18a42 42 0 0 0 0-84M32 54h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12m192 148H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhThreeDLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownLightIcon],svg[ph-thumbs-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.83 157.27l-12-96A22 22 0 0 0 204 42H32a14 14 0 0 0-14 14v88a14 14 0 0 0 14 14h44.29l38.34 76.68A6 6 0 0 0 120 238a38 38 0 0 0 38-38v-18h58a22 22 0 0 0 21.83-24.73M74 146H32a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h42Zm149.5 20.62A9.9 9.9 0 0 1 216 170h-64a6 6 0 0 0-6 6v24a26 26 0 0 1-22.42 25.75L86 150.58V54h118a10 10 0 0 1 9.92 8.76l12 96a9.9 9.9 0 0 1-2.42 7.86"></svg:path>`,
})
export class PhThumbsDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phThumbsUpLightIcon],svg[ph-thumbs-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.49 81.44A22 22 0 0 0 216 74h-58V56a38 38 0 0 0-38-38a6 6 0 0 0-5.37 3.32L76.29 98H32a14 14 0 0 0-14 14v88a14 14 0 0 0 14 14h172a22 22 0 0 0 21.83-19.27l12-96a22 22 0 0 0-5.34-17.29M30 200v-88a2 2 0 0 1 2-2h42v92H32a2 2 0 0 1-2-2M225.92 97.24l-12 96A10 10 0 0 1 204 202H86v-96.58l37.58-75.17A26 26 0 0 1 146 56v24a6 6 0 0 0 6 6h64a10 10 0 0 1 9.92 11.24"></svg:path>`,
})
export class PhThumbsUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTicketLightIcon],svg[ph-ticket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 102a6 6 0 0 0 6-6V64a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v32a6 6 0 0 0 6 6a26 26 0 0 1 0 52a6 6 0 0 0-6 6v32a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-32a6 6 0 0 0-6-6a26 26 0 0 1 0-52M30 192v-26.47a38 38 0 0 0 0-75.06V64a2 2 0 0 1 2-2h58v132H32a2 2 0 0 1-2-2m196-26.47V192a2 2 0 0 1-2 2H102V62h122a2 2 0 0 1 2 2v26.47a38 38 0 0 0 0 75.06"></svg:path>`,
})
export class PhTicketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoLightIcon],svg[ph-tidal-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.24 91.76l-40-40a6 6 0 0 0-8.48 0L168 87.52l-35.76-35.76a6 6 0 0 0-8.48 0L88 87.52L52.24 51.76a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0L88 104.48L119.52 136l-35.76 35.76a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48L136.48 136L168 104.48l35.76 35.76a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M48 127.51L16.49 96L48 64.49L79.51 96Zm80 80L96.49 176L128 144.49L159.51 176Zm0-80L96.49 96L128 64.49L159.51 96Zm80 0L176.49 96L208 64.49L239.51 96Z"></svg:path>`,
})
export class PhTidalLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoLightIcon],svg[ph-tiktok-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 74a50.06 50.06 0 0 1-50-50a6 6 0 0 0-6-6h-40a6 6 0 0 0-6 6v132a22 22 0 1 1-31.43-19.89a6 6 0 0 0 3.43-5.42V88a6 6 0 0 0-7-5.91C52.2 88.28 26 120.05 26 156a74 74 0 0 0 148 0v-43.07A101.3 101.3 0 0 0 224 126a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 39.8a89.13 89.13 0 0 1-46.5-16.69A6 6 0 0 0 162 102v54a62 62 0 0 1-124 0c0-27.72 18.47-52.48 44-60.38v31.53A34 34 0 1 0 134 156V30h28.29A62.09 62.09 0 0 0 218 85.71Z"></svg:path>`,
})
export class PhTiktokLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTildeLightIcon],svg[ph-tilde-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.68 129.34c-14.17 17.62-28.06 26.92-42.46 28.44a41 41 0 0 1-4.22.22c-18.64 0-34.44-12.87-49.76-25.35S94.57 108.51 79 110.16c-11.06 1.16-22.3 9-34.36 24a6 6 0 1 1-9.36-7.52c14.17-17.61 28.06-26.92 42.46-28.43c20.52-2.18 37.54 11.7 54 25.12c15.26 12.43 29.68 24.15 45.26 22.51c11.06-1.16 22.3-9 34.36-24a6 6 0 0 1 9.36 7.52Z"></svg:path>`,
})
export class PhTildeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTimerLightIcon],svg[ph-timer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42a94 94 0 1 0 94 94a94.11 94.11 0 0 0-94-94m0 176a82 82 0 1 1 82-82a82.1 82.1 0 0 1-82 82m44.24-126.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 1 1-8.48-8.48l40-40a6 6 0 0 1 8.48 0M98 16a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTimerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipJarLightIcon],svg[ph-tip-jar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 50.48V32a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v18.48A38.05 38.05 0 0 0 42 88v112a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38V88a38.05 38.05 0 0 0-32-37.52M170 32v18h-20V30h18a2 2 0 0 1 2 2m-52 18V30h20v20ZM88 30h18v20H86V32a2 2 0 0 1 2-2m114 170a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26V88a26 26 0 0 1 26-26h96a26 26 0 0 1 26 26Zm-44-40a22 22 0 0 1-22 22h-2v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h24a10 10 0 0 0 0-20h-16a22 22 0 0 1 0-44h2V96a6 6 0 0 1 12 0v10h10a6 6 0 0 1 0 12h-24a10 10 0 0 0 0 20h16a22 22 0 0 1 22 22"></svg:path>`,
})
export class PhTipJarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTipiLightIcon],svg[ph-tipi-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.05 212.77L135.12 53.5l21.93-34.26A6 6 0 1 0 147 12.77l-19 29.6l-19-29.6a6 6 0 1 0-10 6.47l21.88 34.26L19 212.77a6 6 0 0 0 5 9.23h208a6 6 0 0 0 5.05-9.23M82.64 210L128 139.13L173.36 210Zm105 0l-54.55-85.23a6 6 0 0 0-10.1 0L68.4 210H35l93-145.37L221 210Z"></svg:path>`,
})
export class PhTipiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTireLightIcon],svg[ph-tire-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 174c14.44 0 22-23.14 22-46s-7.56-46-22-46s-22 23.14-22 46s7.56 46 22 46m0-80c2.57 0 10 11.69 10 34s-7.43 34-10 34s-10-11.69-10-34s7.43-34 10-34m64 124h-40.29c18.18-17 30.29-50.57 30.29-90c0-57.2-25.48-102-58-102H92c-32.52 0-58 44.8-58 102s25.48 102 58 102h140a6 6 0 0 0 0-12m-22-90c0 48.79-21.07 90-46 90s-46-41.21-46-90s21.07-90 46-90s46 41.21 46 90m-164 0c0-2.86.08-5.69.22-8.5L80 95.37l26.5 18.93c-.33 4.47-.5 9-.5 13.7a175.7 175.7 0 0 0 4 38.08l-26.55-19a6 6 0 0 0-7 0l-26.1 18.64A160.2 160.2 0 0 1 46 128m46-90h44.29c-13.8 12.92-24.09 35.35-28.29 62.65L83.49 83.12a6 6 0 0 0-7 0l-28.7 20.51C53.37 66.24 71.36 38 92 38m0 180c-15.58 0-29.64-16.08-38-40l26-18.58l35.53 25.39c5.22 13.92 12.34 25.35 20.76 33.24Z"></svg:path>`,
})
export class PhTireLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleLeftLightIcon],svg[ph-toggle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140m0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116M80 90a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhToggleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToggleRightLightIcon],svg[ph-toggle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140m0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116m0-96a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhToggleRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletLightIcon],svg[ph-toilet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 64a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m52.14 132l3.72 26A14 14 0 0 1 160 238H96a14 14 0 0 1-13.86-16l3.72-26A94.1 94.1 0 0 1 34 112a6 6 0 0 1 6-6h18V40a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14v66h18a6 6 0 0 1 6 6a94.1 94.1 0 0 1-51.86 84M70 106h116V40a2 2 0 0 0-2-2H72a2 2 0 0 0-2 2Zm88.71 94.84a94 94 0 0 1-61.42 0L94 223.72a2 2 0 0 0 .47 1.59A2 2 0 0 0 96 226h64a2 2 0 0 0 1.51-.69a2 2 0 0 0 .47-1.59ZM209.78 118H46.22a82 82 0 0 0 163.56 0"></svg:path>`,
})
export class PhToiletLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToiletPaperLightIcon],svg[ph-toilet-paper-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74 120a10 10 0 1 1-10-10a10 10 0 0 1 10 10m164 0v88a14 14 0 0 1-14 14H112a14 14 0 0 1-14-14v-29.52C89.65 195.49 77.6 206 64 206c-25.79 0-46-37.78-46-86s20.21-86 46-86h128c25.79 0 46 37.78 46 86m-140 0c0-44.26-17.58-74-34-74s-34 29.74-34 74s17.58 74 34 74s34-29.73 34-74m128 88v-82h-18a6 6 0 0 1 0-12h17.88c-1.51-40.92-18.21-68-33.88-68H87.76c12.57 13.92 21.09 38.74 22.12 68H128a6 6 0 0 1 0 12h-18v82a2 2 0 0 0 2 2h112a2 2 0 0 0 2-2m-50-94h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhToiletPaperLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToolboxLightIcon],svg[ph-toolbox-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66h-50V56a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14M94 56a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94ZM32 78h192a2 2 0 0 1 2 2v34h-36v-10a6 6 0 0 0-12 0v10H78v-10a6 6 0 0 0-12 0v10H30V80a2 2 0 0 1 2-2m192 116H32a2 2 0 0 1-2-2v-66h36v10a6 6 0 0 0 12 0v-10h100v10a6 6 0 0 0 12 0v-10h36v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhToolboxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToothLightIcon],svg[ph-tooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.23 69.57L144.16 80l26.07 10.43a6 6 0 1 1-4.46 11.14L128 86.46l-37.77 15.11a6 6 0 0 1-7.8-3.35a6 6 0 0 1 3.34-7.79L111.84 80L85.77 69.57a6 6 0 0 1 4.46-11.14L128 73.53l37.77-15.1a6 6 0 1 1 4.46 11.14M222 79.75c0 42.45-7.91 74.9-14.59 94.64c-8.59 25.41-20.22 44.74-31.91 53a13.7 13.7 0 0 1-13.94 1.23a14.1 14.1 0 0 1-8-11.69c-1.13-15.33-5.87-51-25.52-51s-24.39 35.64-25.52 51a14.1 14.1 0 0 1-14 13a13.7 13.7 0 0 1-8-2.58c-11.69-8.29-23.32-27.62-31.91-53C41.91 154.65 34 122.2 34 79.75A54 54 0 0 1 88 26h80a54 54 0 0 1 54 53.75m-12 0A42 42 0 0 0 168 38H88a42 42 0 0 0-42 41.76c-.07 73.93 24.69 126 41.44 137.88a1.77 1.77 0 0 0 1.88.15a2 2 0 0 0 1.19-1.71C93.46 176 106.77 154 128 154s34.54 22 37.49 62.09a2 2 0 0 0 1.19 1.71a1.77 1.77 0 0 0 1.88-.15c16.75-11.91 41.51-63.96 41.44-137.89Z"></svg:path>`,
})
export class PhToothLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTornadoLightIcon],svg[ph-tornado-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 40a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h168a6 6 0 0 1 6 6m-48 32a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h144a6 6 0 0 0 6-6m-16 32a6 6 0 0 0-6-6H56a6 6 0 0 0 0 12h104a6 6 0 0 0 6-6m16 32a6 6 0 0 0-6-6H88a6 6 0 0 0 0 12h88a6 6 0 0 0 6-6m2 26h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-24 32h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-32 32h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTornadoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteLightIcon],svg[ph-tote-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.47 70.73A14.1 14.1 0 0 0 223.92 66H174v-2a46 46 0 0 0-92 0v2H32.08a14 14 0 0 0-14 15.64l14.25 120a14.06 14.06 0 0 0 14 12.36h163.34a14.06 14.06 0 0 0 14-12.36l14.25-120a14 14 0 0 0-3.45-10.91M94 64a34 34 0 0 1 68 0v2H94Zm117.73 136.23a2 2 0 0 1-2.06 1.77H46.33a2 2 0 0 1-2.06-1.77L30 80.23a1.92 1.92 0 0 1 .49-1.53a2.07 2.07 0 0 1 1.58-.7H82v26a6 6 0 0 0 12 0V78h68v26a6 6 0 0 0 12 0V78h49.92a2.07 2.07 0 0 1 1.58.7a1.92 1.92 0 0 1 .49 1.53Z"></svg:path>`,
})
export class PhToteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleLightIcon],svg[ph-tote-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.47 70.73A14.1 14.1 0 0 0 223.92 66H174v-2a46 46 0 0 0-92 0v2H32.08a14 14 0 0 0-14 15.64l14.25 120a14.06 14.06 0 0 0 14 12.36h163.34a14.06 14.06 0 0 0 14-12.36l14.25-120a14 14 0 0 0-3.45-10.91M94 64a34 34 0 0 1 68 0v2H94Zm117.73 136.23a2 2 0 0 1-2.06 1.77H46.33a2 2 0 0 1-2.06-1.77L30 80.23a1.92 1.92 0 0 1 .49-1.53a2.07 2.07 0 0 1 1.58-.7h191.85a2.07 2.07 0 0 1 1.58.7a1.92 1.92 0 0 1 .49 1.53Z"></svg:path>`,
})
export class PhToteSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTowelLightIcon],svg[ph-towel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26H72a22 22 0 0 0-22 22v168a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V48a10 10 0 0 1 20 0v104a6 6 0 0 0 12 0V48a22 22 0 0 0-22-22M72 38h108.41A21.84 21.84 0 0 0 178 48v138H62V48a10 10 0 0 1 10-10m104 180H64a2 2 0 0 1-2-2v-18h116v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTowelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTractorLightIcon],svg[ph-tractor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 166.12V134a13.91 13.91 0 0 0-10-13.41h-.15L190 110.24V72a6 6 0 0 0-12 0v35l-28-7.58V54h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v36H40a6 6 0 0 0 0 12h28a70.08 70.08 0 0 1 70 70v12a6 6 0 0 0 6 6h34.06A34 34 0 1 0 238 166.12M68 90h-6V54h76v75.34A82 82 0 0 0 68 90m82 82v-60.16l74.63 20.21A2 2 0 0 1 226 134v23a34 34 0 0 0-46.5 21H150Zm62 38a22 22 0 1 1 22-22a22 22 0 0 1-22 22M68 122a50 50 0 1 0 50 50a50.06 50.06 0 0 0-50-50m0 88a38 38 0 1 1 38-38a38 38 0 0 1-38 38m10-38a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTractorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkLightIcon],svg[ph-trademark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-18-114a6 6 0 0 1-6 6H94v42a6 6 0 0 1-12 0v-42H72a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m80 0v48a6 6 0 0 1-12 0v-32l-17.48 20a6 6 0 0 1-9 0L134 120v32a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.52-4L156 126.89l23.48-26.84A6 6 0 0 1 190 104"></svg:path>`,
})
export class PhTrademarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredLightIcon],svg[ph-trademark-registered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m20.16-78.58A30 30 0 0 0 136 82h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-26h25.46L155 171.33a6 6 0 1 0 10-6.66ZM110 94h26a18 18 0 0 1 0 36h-26Z"></svg:path>`,
})
export class PhTrademarkRegisteredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeLightIcon],svg[ph-traffic-cone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 210h-19.73L151.54 35.4a14 14 0 0 0-13.23-9.4h-20.62a14 14 0 0 0-13.23 9.4L43.73 210H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M94 102h68l18.08 52H75.92Zm21.8-62.66a2 2 0 0 1 1.89-1.34h20.62a2 2 0 0 1 1.89 1.34L157.82 90H98.18ZM71.74 166h112.52l15.3 44H56.44Z"></svg:path>`,
})
export class PhTrafficConeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignLightIcon],svg[ph-traffic-sign-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.74 117.71L138.29 14.26a14.56 14.56 0 0 0-20.58 0L14.26 117.71a14.56 14.56 0 0 0 0 20.58l103.45 103.45a14.56 14.56 0 0 0 20.58 0l103.45-103.45a14.56 14.56 0 0 0 0-20.58m-8.49 12.1L129.81 233.25a2.56 2.56 0 0 1-3.62 0L22.75 129.81a2.56 2.56 0 0 1 0-3.62L126.19 22.75a2.56 2.56 0 0 1 3.62 0l103.44 103.44a2.56 2.56 0 0 1 0 3.62m-61-14a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L153.51 126H112a18 18 0 0 0-18 18v8a6 6 0 0 1-12 0v-8a30 30 0 0 1 30-30h41.51l-13.75-13.76a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhTrafficSignLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalLightIcon],svg[ph-traffic-signal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 58a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m0 32a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m88-40h-18V78h18a6 6 0 0 0 0-12h-18V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v26H40a6 6 0 0 0 0 12h18v68H40a6 6 0 0 0 0 12h18v58a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-58h18a6 6 0 0 0 0-12m-30 70a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhTrafficSignalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainLightIcon],svg[ph-train-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 26H72a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V56a30 30 0 0 0-30-30M54 122V78h68v44Zm80-44h68v44h-68ZM72 38h112a18 18 0 0 1 18 18v10H54V56a18 18 0 0 1 18-18m112 164H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-2-30a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTrainLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainRegionalLightIcon],svg[ph-train-regional-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.79 118.42l-22.39-82.1A14 14 0 0 0 185.89 26H70.11A14 14 0 0 0 56.6 36.32l-22.39 82.1a6 6 0 0 0 0 3.16l22.39 82.1A14 14 0 0 0 70.11 214H84l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h13.89a14 14 0 0 0 13.51-10.32l22.39-82.1a6 6 0 0 0 0-3.16M68.18 39.47A2 2 0 0 1 70.11 38h115.78a2 2 0 0 1 1.93 1.47l20.67 75.8L128 129.9l-80.49-14.63Zm0 161.06l-19.89-72.92L122 141v61H70.11a2 2 0 0 1-1.93-1.47m119.64 0a2 2 0 0 1-1.93 1.47H134v-61l73.71-13.4ZM90 88a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTrainRegionalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrainSimpleLightIcon],svg[ph-train-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 26H72a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V56a30 30 0 0 0-30-30M72 38h112a18 18 0 0 1 18 18v66H54V56a18 18 0 0 1 18-18m112 164H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-2-30a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTrainSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTramLightIcon],svg[ph-tram-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 50h-50V22h34a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h34v28H72a30 30 0 0 0-30 30v104a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V80a30 30 0 0 0-30-30M72 62h112a18 18 0 0 1 18 18v42H54V80a18 18 0 0 1 18-18m112 140H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-90-30a10 10 0 1 1-10-10a10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTramLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTranslateLightIcon],svg[ph-translate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.37 213.32l-56-112a6 6 0 0 0-10.74 0l-22.3 44.6A90 90 0 0 1 105 127.19A101.73 101.73 0 0 0 133.82 62H160a6 6 0 0 0 0-12h-58V32a6 6 0 0 0-12 0v18H32a6 6 0 0 0 0 12h89.79A89.7 89.7 0 0 1 96 119.23A89.8 89.8 0 0 1 75.11 86a6 6 0 1 0-11.31 4A101.7 101.7 0 0 0 87 127.2A89.56 89.56 0 0 1 32 146a6 6 0 0 0 0 12a101.55 101.55 0 0 0 64-22.63a102.1 102.1 0 0 0 54.53 22.17l-27.89 55.78a6 6 0 0 0 10.74 5.36L147.71 190h72.58l14.34 28.68A6 6 0 0 0 240 222a5.9 5.9 0 0 0 2.68-.64a6 6 0 0 0 2.69-8.04M153.71 178L184 117.42L214.29 178Z"></svg:path>`,
})
export class PhTranslateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashLightIcon],svg[ph-trash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTrashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleLightIcon],svg[ph-trash-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12m-22 158a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132ZM82 24a6 6 0 0 1 6-6h80a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhTrashSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowDownLightIcon],svg[ph-tray-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.94 13.94 0 0 0-9.9 4.1l-19.31 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.58L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.58l19.31 19.32a13.94 13.94 0 0 0 9.9 4.1h41.38a13.94 13.94 0 0 0 9.9-4.1l19.31-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2M91.76 124.24a6 6 0 0 1 8.48-8.48L122 137.51V72a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0Z"></svg:path>`,
})
export class PhTrayArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayArrowUpLightIcon],svg[ph-tray-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.9 13.9 0 0 0-9.89 4.1l-19.32 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.59L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.59l19.31 19.31a13.94 13.94 0 0 0 9.9 4.1h41.38a13.9 13.9 0 0 0 9.89-4.1l19.32-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2M91.76 108.24a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L134 86.49V152a6 6 0 0 1-12 0V86.49l-21.76 21.75a6 6 0 0 1-8.48 0"></svg:path>`,
})
export class PhTrayArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrayLightIcon],svg[ph-tray-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.94 13.94 0 0 0-9.9 4.1l-19.31 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.58L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.58l19.31 19.32a13.94 13.94 0 0 0 9.9 4.1h41.38a13.94 13.94 0 0 0 9.9-4.1l19.31-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTrayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreasureChestLightIcon],svg[ph-treasure-chest-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 42H72a54.06 54.06 0 0 0-54 54v96a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V96a54.06 54.06 0 0 0-54-54m42 54v10h-36V54.44A42.05 42.05 0 0 1 226 96m-88 42h-20v-36h20Zm-26 12h32a6 6 0 0 0 6-6v-26h28v76H78v-76h28v26a6 6 0 0 0 6 6m38-44V96a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v10H78V54h100v52ZM66 54.44V106H30V96a42.05 42.05 0 0 1 36-41.56M30 192v-74h36v76H32a2 2 0 0 1-2-2m194 2h-34v-76h36v74a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTreasureChestLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenLightIcon],svg[ph-tree-evergreen-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.74 188.32L180.27 126H208a6 6 0 0 0 4.76-9.66l-80-104a6 6 0 0 0-9.52 0l-80 104A6 6 0 0 0 48 126h27.73l-48.47 62.32A6 6 0 0 0 32 198h90v42a6 6 0 0 0 12 0v-42h90a6 6 0 0 0 4.74-9.68M44.27 186l48.47-62.32A6 6 0 0 0 88 114H60.19L128 25.84L195.81 114H168a6 6 0 0 0-4.74 9.68L211.73 186Z"></svg:path>`,
})
export class PhTreeEvergreenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeLightIcon],svg[ph-tree-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.55 64.09a74 74 0 0 0-137.1 0A69.71 69.71 0 0 0 18 127.8c-.1 37.11 31.13 69.2 68.19 70.2a70.3 70.3 0 0 0 35.81-8.84V232a6 6 0 0 0 12 0v-42.84a70.1 70.1 0 0 0 34 8.84h1.77c37.1-1 68.33-33.1 68.23-70.2a69.71 69.71 0 0 0-41.45-63.71M169.5 186a57.88 57.88 0 0 1-35.5-11v-43.29l44.68-22.34a6 6 0 1 0-5.36-10.74L134 118.29V88a6 6 0 0 0-12 0v54.29l-39.32-19.66a6 6 0 0 0-5.36 10.74L122 155.71V175a58.1 58.1 0 0 1-35.5 11c-30.71-.77-56.58-27.4-56.5-58.14a57.78 57.78 0 0 1 36.37-53.67a6 6 0 0 0 3.39-3.51a62 62 0 0 1 116.48 0a6 6 0 0 0 3.39 3.51A57.77 57.77 0 0 1 226 127.83c.08 30.75-25.79 57.37-56.5 58.17"></svg:path>`,
})
export class PhTreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreePalmLightIcon],svg[ph-tree-palm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.35 54.61a64.87 64.87 0 0 0-94.85 0A70 70 0 0 0 128 75a70 70 0 0 0-13.5-20.37a64.87 64.87 0 0 0-94.85 0a6 6 0 0 0 2 9.64l61.83 26.9c-1.85.34-3.7.74-5.54 1.23a69.42 69.42 0 0 0-42.5 32.39a68.65 68.65 0 0 0-7 52.79a6 6 0 0 0 3.86 4.12a6.1 6.1 0 0 0 1.93.32a6 6 0 0 0 3.64-1.23L122 116.64V224a6 6 0 0 0 12 0V116.64l84.17 64.13a6 6 0 0 0 3.64 1.23a6.1 6.1 0 0 0 1.93-.32a6 6 0 0 0 3.86-4.12a68.65 68.65 0 0 0-7-52.79a69.42 69.42 0 0 0-42.5-32.39c-1.84-.49-3.69-.89-5.54-1.23l61.83-26.9a6 6 0 0 0 2-9.64ZM67.08 46a53.16 53.16 0 0 1 38.73 16.88a58.77 58.77 0 0 1 15.47 31.65L34.93 57a52.6 52.6 0 0 1 32.15-11M38.29 165.33a56.77 56.77 0 0 1 7.48-34.53A57.58 57.58 0 0 1 81 104a58.8 58.8 0 0 1 15.12-2a57.7 57.7 0 0 1 20.43 3.73Zm171.94-34.53a56.77 56.77 0 0 1 7.48 34.53l-78.24-59.61a58.24 58.24 0 0 1 70.76 25.08m-75.51-36.27a58.77 58.77 0 0 1 15.47-31.65A53.16 53.16 0 0 1 188.92 46a52.6 52.6 0 0 1 32.15 11Z"></svg:path>`,
})
export class PhTreePalmLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeStructureLightIcon],svg[ph-tree-structure-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 110h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v18h-18a22 22 0 0 0-22 22v34H70v-10a14 14 0 0 0-14-14H24a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-10h36v34a22 22 0 0 0 22 22h18v18a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v18h-18a10 10 0 0 1-10-10V88a10 10 0 0 1 10-10h18v18a14 14 0 0 0 14 14M58 144a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Zm100 16a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2Zm0-112a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v48a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2Z"></svg:path>`,
})
export class PhTreeStructureLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTreeViewLightIcon],svg[ph-tree-view-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 150h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H86V78h10a14 14 0 0 0 14-14V32a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h10v114a22 22 0 0 0 22 22h66v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H96a10 10 0 0 1-10-10v-66h76v10a14 14 0 0 0 14 14M62 64V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2m112 128a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Zm0-88a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Z"></svg:path>`,
})
export class PhTreeViewLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendDownLightIcon],svg[ph-trend-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 128v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.52L136 104.49l-35.76 35.75a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L96 127.51l35.76-35.75a6 6 0 0 1 8.48 0L226 177.52V128a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTrendDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrendUpLightIcon],svg[ph-trend-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 56v64a6 6 0 0 1-12 0V70.48l-85.76 85.76a6 6 0 0 1-8.48 0L96 120.49l-67.76 67.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0L136 143.51L217.52 62H168a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTrendUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleDashedLightIcon],svg[ph-triangle-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158 216a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m77.07-26.91l-4.66-8.09a6 6 0 1 0-10.4 6l4.66 8.09a9.49 9.49 0 0 1 0 9.72a10.46 10.46 0 0 1-9.21 5.2H192a6 6 0 0 0 0 12h23.45a22.37 22.37 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.73M64 210H40.55a10.46 10.46 0 0 1-9.21-5.2a9.49 9.49 0 0 1 0-9.72L36 187a6 6 0 0 0-10.4-6l-4.66 8.08a21.53 21.53 0 0 0 0 21.72A22.37 22.37 0 0 0 40.55 222H64a6 6 0 0 0 0-12m138.18-60a6 6 0 0 0 5.2-9l-23-40a6 6 0 1 0-10.4 6l23 40a6 6 0 0 0 5.2 3M147.61 37.22a22.75 22.75 0 0 0-39.22 0L94.69 61a6 6 0 1 0 10.4 6l13.7-23.78a10.75 10.75 0 0 1 18.42 0L150.91 67a6 6 0 0 0 10.4-6ZM79.85 98.8a6 6 0 0 0-8.19 2.2l-23 40A6 6 0 1 0 59 147l23-40a6 6 0 0 0-2.15-8.2"></svg:path>`,
})
export class PhTriangleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTriangleLightIcon],svg[ph-triangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.07 189.09L147.61 37.22a22.75 22.75 0 0 0-39.22 0L20.93 189.09a21.53 21.53 0 0 0 0 21.72A22.35 22.35 0 0 0 40.55 222h174.9a22.35 22.35 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.72m-10.41 15.71a10.46 10.46 0 0 1-9.21 5.2H40.55a10.46 10.46 0 0 1-9.21-5.2a9.49 9.49 0 0 1 0-9.72l87.45-151.87a10.75 10.75 0 0 1 18.42 0l87.46 151.87a9.49 9.49 0 0 1-.01 9.72"></svg:path>`,
})
export class PhTriangleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleyLightIcon],svg[ph-trolley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 224a14 14 0 1 1-14-14a14 14 0 0 1 14 14m130-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m24-32H54V75.31a13.94 13.94 0 0 0-4.1-9.9L28.24 43.76a6 6 0 1 0-8.48 8.48L41.41 73.9a2 2 0 0 1 .59 1.41V178H32a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTrolleyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseLightIcon],svg[ph-trolley-suitcase-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 158h128a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14h-34V40a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v18H88a14 14 0 0 0-14 14v72a14 14 0 0 0 14 14m46-118a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v18h-36ZM86 72a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v72a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2Zm0 152a14 14 0 1 1-14-14a14 14 0 0 1 14 14m144 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14m16-40a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h10V75.31a2 2 0 0 0-.59-1.41L19.76 52.24a6 6 0 1 1 8.48-8.48L49.9 65.41a13.94 13.94 0 0 1 4.1 9.9V178h186a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTrolleySuitcaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTrophyLightIcon],svg[ph-trophy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 66h-26V48a6 6 0 0 0-6-6H56a6 6 0 0 0-6 6v18H24a14 14 0 0 0-14 14v16a38 38 0 0 0 38 38h5.14A78 78 0 0 0 122 189.75V218H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-28.25c32.44-2.52 59.43-25.3 68.62-55.75H208a38 38 0 0 0 38-38V80a14 14 0 0 0-14-14M48 122a26 26 0 0 1-26-26V80a2 2 0 0 1 2-2h26v34a81 81 0 0 0 .65 10Zm146-10.9c0 36.62-29.38 66.63-65.5 66.9A66 66 0 0 1 62 112V54h132ZM234 96a26 26 0 0 1-26 26h-2.77a78.5 78.5 0 0 0 .77-10.9V78h26a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhTrophyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckLightIcon],svg[ph-truck-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.57 117.78l-14-35a13.93 13.93 0 0 0-13-8.8H190V64a6 6 0 0 0-6-6H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-.43-2.22M190 86h36.58a2 2 0 0 1 1.86 1.26l10.7 26.74H190ZM30 72a2 2 0 0 1 2-2h146v68H30Zm50 138a18 18 0 1 1 18-18a18 18 0 0 1-18 18m82.6-24h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-34h148v15.48A30.1 30.1 0 0 0 162.6 186m29.4 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30.05 30.05 0 0 0-29.4-24c-.67 0-1.34 0-2 .07V126h52Z"></svg:path>`,
})
export class PhTruckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTruckTrailerLightIcon],svg[ph-truck-trailer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 98.47V96a54.06 54.06 0 0 0-54-54h-8a14 14 0 0 0-14 14v122h-20V72a6 6 0 0 0-6-6H16A14 14 0 0 0 2 80v104a30 30 0 0 0 54 18a30 30 0 0 0 53.4-12h85.2a30 30 0 0 0 59.4-6v-48a38.07 38.07 0 0 0-32-37.53M158 56a2 2 0 0 1 2-2h8a42 42 0 0 1 42 42v8a6 6 0 0 0 6 6a26 26 0 0 1 26 26v24a30 30 0 0 0-47.4 18H158ZM16 78h98v100h-4.6A30 30 0 0 0 56 166a30 30 0 0 0-42-6V80a2 2 0 0 1 2-2m16 124a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m144 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhTruckTrailerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoLightIcon],svg[ph-tumblr-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 118a6 6 0 0 0 6-6V72a6 6 0 0 0-6-6h-42V24a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6a42 42 0 0 1-42 42a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h26v58a62.07 62.07 0 0 0 62 62h40a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6h-32a10 10 0 0 1-10-10v-50Zm-32 72h26v36h-34a50.06 50.06 0 0 1-50-50v-64a6 6 0 0 0-6-6H70V77.67A54.12 54.12 0 0 0 117.67 30H138v42a6 6 0 0 0 6 6h42v28h-42a6 6 0 0 0-6 6v56a22 22 0 0 0 22 22"></svg:path>`,
})
export class PhTumblrLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitchLogoLightIcon],svg[ph-twitch-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h18v34a6 6 0 0 0 9.84 4.61L122.17 206h42.93a14 14 0 0 0 9-3.25L217 167a14 14 0 0 0 5-10.76V48a14 14 0 0 0-14-14m2 122.25a2 2 0 0 1-.72 1.54l-42.9 35.75a2 2 0 0 1-1.28.46H120a6 6 0 0 0-3.84 1.39L78 227.19V200a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM174 88v48a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m-48 0v48a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhTwitchLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phTwitterLogoLightIcon],svg[ph-twitter-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.54 69.71A6 6 0 0 0 240 66h-31.6a46.6 46.6 0 0 0-40.33-24a44.93 44.93 0 0 0-32.31 13.12A45.92 45.92 0 0 0 122 88v8.66c-42-10-76.6-44.52-77-44.88a6 6 0 0 0-10.2 3.68c-4.25 47.22 9.42 78.75 21.64 96.89a107.7 107.7 0 0 0 23.07 25c-15.49 19-41.34 28.89-41.62 29a6 6 0 0 0-2.88 9C36 216.83 45.78 230 80 230c69.88 0 128.23-54 133.82-123.34l30.42-30.41a6 6 0 0 0 1.3-6.54m-41.78 30.05a6 6 0 0 0-1.75 3.86C197.93 167.76 144.33 218 80 218c-14 0-22.76-2.41-28.06-4.8c11.3-5.68 29.72-16.88 41.05-33.87a6 6 0 0 0 .85-4.67a6 6 0 0 0-2.84-3.84c-.13-.08-13.13-7.86-25-25.72C52 124 45.31 98.43 46 68.88c14.88 12.6 45.57 35.09 81 41a6 6 0 0 0 7-5.92V88a34 34 0 0 1 10.19-24.34A33.05 33.05 0 0 1 167.93 54c13.43.17 26 8.37 31.24 20.4a6 6 0 0 0 5.5 3.6h20.84Z"></svg:path>`,
})
export class PhTwitterLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaLightIcon],svg[ph-umbrella-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.5 109.5 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0a6 6 0 0 0-12 0a18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21M94.11 130c1.69-51.21 24.7-80.16 33.89-89.73c9.2 9.58 32.2 38.53 33.89 89.73Zm-63.57-.65a2 2 0 0 1-.53-1.56a98.14 98.14 0 0 1 82.91-88.62c-12 15-29.43 44.44-30.83 90.83H32a2 2 0 0 1-1.46-.65m194.92 0a2 2 0 0 1-1.46.65h-50.09c-1.4-46.39-18.81-75.87-30.83-90.83A98.14 98.14 0 0 1 226 127.79a2 2 0 0 1-.54 1.56"></svg:path>`,
})
export class PhUmbrellaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleLightIcon],svg[ph-umbrella-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.5 109.5 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0a6 6 0 0 0-12 0a18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21m-12.49 2.56a2 2 0 0 1-1.51.65H32a2 2 0 0 1-1.49-.65a2 2 0 0 1-.53-1.56a98.43 98.43 0 0 1 164.78-63.74A97.5 97.5 0 0 1 226 127.79a2 2 0 0 1-.54 1.56Z"></svg:path>`,
})
export class PhUmbrellaSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUnionLightIcon],svg[ph-union-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 64v80a78 78 0 0 1-156 0V64a6 6 0 0 1 12 0v80a66 66 0 0 0 132 0V64a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhUnionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteLightIcon],svg[ph-unite-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.91 83.09a78 78 0 1 0-89.82 89.82a78 78 0 1 0 89.82-89.82M226 160a65 65 0 0 1-.62 8.9l-53.76-53.77A77.8 77.8 0 0 0 174 96v-.49A66.1 66.1 0 0 1 226 160M45.31 53.79l55.5 55.5a77.9 77.9 0 0 0-12 19L34 73.48a66 66 0 0 1 11.31-19.69m88.92 96l-28-28a66.5 66.5 0 0 1 15.52-15.52l28 28a66.5 66.5 0 0 1-15.52 15.48ZM162 96a65.6 65.6 0 0 1-6 27.49L132.51 100A65.6 65.6 0 0 1 160 94h1.95c.05.7.05 1.35.05 2m-52.71 4.81l-55.5-55.5A66 66 0 0 1 73.48 34l54.8 54.81a77.9 77.9 0 0 0-18.99 12M94 160a65.6 65.6 0 0 1 6-27.49L123.49 156A65.6 65.6 0 0 1 96 162c-.65 0-1.3 0-2-.05zm52.71-4.81l55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.9 77.9 0 0 0 18.99-12m8.48-8.48a77.9 77.9 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69Zm5.3-64.7H160a77.8 77.8 0 0 0-19.13 2.38L87.1 30.62A65 65 0 0 1 96 30a66.1 66.1 0 0 1 64.49 52ZM30 96a65 65 0 0 1 .62-8.9l53.76 53.77A77.8 77.8 0 0 0 82 160v.49A66.1 66.1 0 0 1 30 96m65.51 78H96a77.8 77.8 0 0 0 19.13-2.38l53.77 53.76a65 65 0 0 1-8.9.62a66.1 66.1 0 0 1-64.49-52"></svg:path>`,
})
export class PhUniteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareLightIcon],svg[ph-unite-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-61.52 120L46 101.52v-47L201.52 210Zm-100-164h47L210 154.48v47ZM210 137.52L174.48 102H210Zm-56-56L118.48 46H154Zm-108 37L81.52 154H46Zm56 56L137.52 210H102Z"></svg:path>`,
})
export class PhUniteSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadLightIcon],svg[ph-upload-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 136v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-64a14 14 0 0 1 14-14h48a6 6 0 0 1 0 12H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2v-64a2 2 0 0 0-2-2h-48a6 6 0 0 1 0-12h48a14 14 0 0 1 14 14M84.24 76.24L122 38.49V128a6 6 0 0 0 12 0V38.49l37.76 37.75a6 6 0 0 0 8.48-8.48l-48-48a6 6 0 0 0-8.48 0l-48 48a6 6 0 0 0 8.48 8.48M198 168a10 10 0 1 0-10 10a10 10 0 0 0 10-10"></svg:path>`,
})
export class PhUploadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUploadSimpleLightIcon],svg[ph-upload-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 144v64a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6v-64a6 6 0 0 1 12 0v58h164v-58a6 6 0 0 1 12 0M92.24 76.24L122 46.49V144a6 6 0 0 0 12 0V46.49l29.76 29.75a6 6 0 0 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhUploadSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsbLightIcon],svg[ph-usb-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.33 123l-48-32a6 6 0 0 0-9.33 5v26H70V72a2 2 0 0 1 2-2h34.6a30 30 0 1 0 0-12H72a14 14 0 0 0-14 14v50H8a6 6 0 0 0 0 12h50v50a14 14 0 0 0 14 14h34v10a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v10H72a2 2 0 0 1-2-2v-50h124v26a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M136 46a18 18 0 1 1-18 18a18 18 0 0 1 18-18m-18 130a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2Zm88-27.21v-41.58L237.18 128Z"></svg:path>`,
})
export class PhUsbLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCheckLightIcon],svg[ph-user-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 158.25a66 66 0 1 0-62 0c-22 6.23-41.88 19.16-57.61 37.89a6 6 0 0 0 9.18 7.72C49.11 179.44 77.31 166 108 166s58.9 13.44 79.41 37.86a6 6 0 1 0 9.18-7.72C180.86 177.41 161 164.48 139 158.25M54 100a54 54 0 1 1 54 54a54.06 54.06 0 0 1-54-54m198.24 32.24l-32 32a6 6 0 0 1-8.48 0l-16-16a6 6 0 0 1 8.48-8.48L216 151.51l27.76-27.75a6 6 0 1 1 8.48 8.48"></svg:path>`,
})
export class PhUserCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleCheckLightIcon],svg[ph-user-circle-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.68 106.08a6 6 0 0 0-4.92 6.91A91.7 91.7 0 0 1 218 128a89.65 89.65 0 0 1-24.49 61.64a77.53 77.53 0 0 0-40-31.38a46 46 0 1 0-51 0a77.53 77.53 0 0 0-40 31.38A89.95 89.95 0 0 1 128 38a91.6 91.6 0 0 1 15 1.24a6 6 0 1 0 2-11.83a101.9 101.9 0 1 0 83.6 83.6a6 6 0 0 0-6.92-4.93M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-22.56 78a66 66 0 0 1 113.12 0a89.8 89.8 0 0 1-113.12 0m164.8-153.76l-32 32a6 6 0 0 1-8.48 0l-16-16a6 6 0 0 1 8.48-8.48L200 63.51l27.76-27.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhUserCircleCheckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleDashedLightIcon],svg[ph-user-circle-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.19 36.54a6 6 0 0 1 4.31-7.31a102 102 0 0 1 51 0a6 6 0 1 1-3 11.61a90 90 0 0 0-45 0a6 6 0 0 1-7.31-4.3m-64.3 71.54a6 6 0 0 0 1.6.22a6 6 0 0 0 5.78-4.4A90 90 0 0 1 63.78 65a6 6 0 1 0-8.56-8.41A102.1 102.1 0 0 0 29.7 100.7a6 6 0 0 0 4.19 7.38M150.5 215.15a90 90 0 0 1-45 0a6 6 0 1 0-3 11.61a102 102 0 0 0 51 0a6 6 0 0 0-3-11.62Zm64.22-111.24a6 6 0 0 0 5.78 4.4a6 6 0 0 0 1.6-.22a6 6 0 0 0 4.18-7.38a102 102 0 0 0-25.49-44.18a6 6 0 0 0-8.55 8.41a90.1 90.1 0 0 1 22.48 38.97m11.58 51.39a101.75 101.75 0 0 1-30.08 48.53a6 6 0 0 1-9.37-1.74a66 66 0 0 0-117.7 0a6 6 0 0 1-4.26 3.18a5.7 5.7 0 0 1-1.09.1a6 6 0 0 1-4-1.54a101.74 101.74 0 0 1-30.1-48.53a6 6 0 1 1 11.56-3.21a89.8 89.8 0 0 0 21.2 37.59a77.56 77.56 0 0 1 40-31.43a46 46 0 1 1 51 0a77.56 77.56 0 0 1 40 31.43a89.7 89.7 0 0 0 21.2-37.58a6 6 0 1 1 11.56 3.2ZM128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34"></svg:path>`,
})
export class PhUserCircleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleGearLightIcon],svg[ph-user-circle-gear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.25 64.8l-5.92-3.41a22 22 0 0 0 0-10.78l5.92-3.41a6 6 0 0 0-6-10.4l-5.93 3.43a22 22 0 0 0-9.32-5.39V28a6 6 0 0 0-12 0v6.84a22 22 0 0 0-9.32 5.39l-5.93-3.43a6 6 0 0 0-6 10.4l5.92 3.41a22 22 0 0 0 0 10.78l-5.92 3.41a6 6 0 0 0 6 10.4l5.93-3.43a22 22 0 0 0 9.32 5.39V84a6 6 0 0 0 12 0v-6.84a22 22 0 0 0 9.32-5.39l5.93 3.43a6 6 0 0 0 6-10.4M200 66a10 10 0 1 1 10-10a10 10 0 0 1-10 10m21.68 40.08a6 6 0 0 0-4.92 6.91A92 92 0 0 1 218 128a89.65 89.65 0 0 1-24.49 61.64a77.53 77.53 0 0 0-40-31.38a46 46 0 1 0-51 0a77.53 77.53 0 0 0-40 31.38A89.95 89.95 0 0 1 128 38a91.7 91.7 0 0 1 15 1.24a6 6 0 1 0 2-11.83a102 102 0 1 0 50 177.44c.65 1.36 1.68 0 2.34-2.11A102 102 0 0 0 228.59 111a6 6 0 0 0-6.91-4.92M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-22.56 78a66 66 0 0 1 113.12 0a89.8 89.8 0 0 1-113.12 0"></svg:path>`,
})
export class PhUserCircleGearLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleLightIcon],svg[ph-user-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M71.44 198a66 66 0 0 1 113.12 0a89.8 89.8 0 0 1-113.12 0M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m99.51 69.64a77.53 77.53 0 0 0-40-31.38a46 46 0 1 0-51 0a77.53 77.53 0 0 0-40 31.38a90 90 0 1 1 131 0"></svg:path>`,
})
export class PhUserCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCircleMinusLightIcon],svg[ph-user-circle-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 56a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6m54.19 38A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.7 91.7 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.53 77.53 0 0 1 40 31.38A90 90 0 0 0 212.88 98a6 6 0 1 1 11.31-4M128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a89.58 89.58 0 0 0 56.56-20a66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218"></svg:path>`,
})
export class PhUserCircleMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserCirclePlusLightIcon],svg[ph-user-circle-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 56a6 6 0 0 1 6-6h18V32a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V62h-18a6 6 0 0 1-6-6m58.59 55A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.7 91.7 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.53 77.53 0 0 1 40 31.38A89.65 89.65 0 0 0 218 128a92 92 0 0 0-1.24-15a6 6 0 1 1 11.83-2M128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a89.58 89.58 0 0 0 56.56-20a66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218"></svg:path>`,
})
export class PhUserCirclePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserFocusLightIcon],svg[ph-user-focus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40v36a6 6 0 0 1-12 0V46h-30a6 6 0 0 1 0-12h36a6 6 0 0 1 6 6m-6 134a6 6 0 0 0-6 6v30h-30a6 6 0 0 0 0 12h36a6 6 0 0 0 6-6v-36a6 6 0 0 0-6-6M76 210H46v-30a6 6 0 0 0-12 0v36a6 6 0 0 0 6 6h36a6 6 0 0 0 0-12M40 82a6 6 0 0 0 6-6V46h30a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6m136 92a6 6 0 0 1-4.8-2.4a54 54 0 0 0-86.4 0a6 6 0 1 1-9.6-7.2a65.65 65.65 0 0 1 29.69-22.26a38 38 0 1 1 46.22 0a65.65 65.65 0 0 1 29.69 22.26a6 6 0 0 1-4.8 9.6m-48-36a26 26 0 1 0-26-26a26 26 0 0 0 26 26"></svg:path>`,
})
export class PhUserFocusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserGearLightIcon],svg[ph-user-gear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 158.25a66 66 0 1 0-62 0c-22 6.23-41.88 19.16-57.61 37.89a6 6 0 0 0 9.18 7.72C49.1 179.44 77.31 166 108 166s58.9 13.44 79.41 37.86a6 6 0 1 0 9.18-7.72C180.86 177.41 161 164.48 139 158.25M54 100a54 54 0 1 1 54 54a54.06 54.06 0 0 1-54-54m197.25 44.8l-5.92-3.41a22 22 0 0 0 0-10.78l5.92-3.41a6 6 0 0 0-6-10.4l-5.93 3.43a22 22 0 0 0-9.32-5.39V108a6 6 0 0 0-12 0v6.84a22 22 0 0 0-9.32 5.39l-5.93-3.43a6 6 0 0 0-6 10.4l5.92 3.41a22 22 0 0 0 0 10.78l-5.92 3.41a6 6 0 0 0 6 10.4l5.93-3.43a22 22 0 0 0 9.32 5.39V164a6 6 0 0 0 12 0v-6.84a22 22 0 0 0 9.32-5.39l5.93 3.43a6 6 0 0 0 6-10.4M224 146a10 10 0 1 1 10-10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhUserGearLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserLightIcon],svg[ph-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58"></svg:path>`,
})
export class PhUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserListLightIcon],svg[ph-user-list-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154 80a6 6 0 0 1 6-6h88a6 6 0 0 1 0 12h-88a6 6 0 0 1-6-6m94 42h-88a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12m0 48h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-98.19 20.5a6 6 0 1 1-11.62 3C131.7 168.29 107.23 150 80 150s-51.7 18.29-58.19 43.49a6 6 0 1 1-11.62-3c5.74-22.28 23-40.07 44.67-48a46 46 0 1 1 50.28 0c21.65 7.94 38.94 25.73 44.67 48.01M80 138a34 34 0 1 0-34-34a34 34 0 0 0 34 34"></svg:path>`,
})
export class PhUserListLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserMinusLightIcon],svg[ph-user-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 136a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-57.41 60.14a6 6 0 1 1-9.18 7.72C166.9 179.45 138.69 166 108 166s-58.89 13.45-79.41 37.86a6 6 0 0 1-9.18-7.72C35.14 177.41 55 164.48 77 158.26a66 66 0 1 1 62 0c22 6.22 41.86 19.15 57.59 37.88M108 154a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54"></svg:path>`,
})
export class PhUserMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserPlusLightIcon],svg[ph-user-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 136a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6m-57.41 60.14a6 6 0 1 1-9.18 7.72C166.9 179.45 138.69 166 108 166s-58.89 13.45-79.41 37.86a6 6 0 0 1-9.18-7.72C35.14 177.41 55 164.48 77 158.25a66 66 0 1 1 62 0c22 6.23 41.86 19.16 57.59 37.89M108 154a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54"></svg:path>`,
})
export class PhUserPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleLightIcon],svg[ph-user-rectangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-24.79 82a66 66 0 0 1 117.58 0ZM218 200a2 2 0 0 1-2 2h-16a78.18 78.18 0 0 0-46.55-43.71a46 46 0 1 0-50.9 0A78.18 78.18 0 0 0 56 202H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhUserRectangleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSoundLightIcon],svg[ph-user-sound-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 166.26a66 66 0 1 0-62 0c-22 6.22-41.88 19.15-57.61 37.88a6 6 0 0 0 9.18 7.72C49.11 187.45 77.31 174 108 174s58.9 13.45 79.41 37.86a6 6 0 1 0 9.18-7.72C180.86 185.41 161 172.48 139 166.26M54 108a54 54 0 1 1 54 54a54.06 54.06 0 0 1-54-54m151.52-41.61a106.33 106.33 0 0 1 0 83.22a6 6 0 0 1-11-4.71a94.3 94.3 0 0 0 0-73.8a6 6 0 0 1 11-4.71M246 108a137.2 137.2 0 0 1-11.12 54.37a6 6 0 0 1-11-4.74a126.4 126.4 0 0 0 0-99.26a6 6 0 0 1 11-4.74A137.2 137.2 0 0 1 246 108"></svg:path>`,
})
export class PhUserSoundLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSquareLightIcon],svg[ph-user-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-28.23 90a66.43 66.43 0 0 1 20.77-29.36a66 66 0 0 1 82.92 0A66.43 66.43 0 0 1 190.23 210ZM210 208a2 2 0 0 1-2 2h-5.17a77.85 77.85 0 0 0-49.38-51.71a46 46 0 1 0-50.9 0A77.85 77.85 0 0 0 53.17 210H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhUserSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUserSwitchLightIcon],svg[ph-user-switch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.24 132.24l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 1 1 8.48-8.48L218 137.51V128A90 90 0 0 0 54.87 75.5a6 6 0 1 1-9.74-7A102 102 0 0 1 230 128v9.51l13.76-13.75a6 6 0 1 1 8.48 8.48m-41.39 55.26A102 102 0 0 1 26 128v-9.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0l24 24a6 6 0 1 1-8.48 8.48L38 118.49V128a89.65 89.65 0 0 0 24.49 61.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.5 77.5 0 0 1 40 31.41a89 89 0 0 0 7.58-9.17a6 6 0 1 1 9.74 7ZM128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a90.24 90.24 0 0 0 56.57-20a66 66 0 0 0-113.13 0A89.58 89.58 0 0 0 128 218"></svg:path>`,
})
export class PhUserSwitchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersFourLightIcon],svg[ph-users-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.4 124.8a6 6 0 0 0 8.4-1.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.6 5.6 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.69-22.26a38 38 0 1 0-46.22 0A65.3 65.3 0 0 0 128 110.7a65.3 65.3 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.7 65.7 0 0 0 27.2 116.4a6 6 0 0 0 1.2 8.4M176 38a26 26 0 1 1-26 26a26 26 0 0 1 26-26m-96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26m119.11 160.13a38 38 0 1 0-46.22 0A65.3 65.3 0 0 0 128 214.7a65.3 65.3 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.7 65.7 0 0 0 27.2 220.4a6 6 0 1 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.6 5.6 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.68-22.26M80 142a26 26 0 1 1-26 26a26 26 0 0 1 26-26m96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26"></svg:path>`,
})
export class PhUsersFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersLightIcon],svg[ph-users-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29M38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46m211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205"></svg:path>`,
})
export class PhUsersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phUsersThreeLightIcon],svg[ph-users-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.6 148.8a6 6 0 0 1-8.4-1.2A53.58 53.58 0 0 0 192 126a6 6 0 0 1 0-12a26 26 0 1 0-25.18-32.5a6 6 0 0 1-11.62-3a38 38 0 1 1 59.91 39.63a65.7 65.7 0 0 1 29.69 22.27a6 6 0 0 1-1.2 8.4M189.19 213a6 6 0 0 1-2.19 8.2a5.9 5.9 0 0 1-3 .81a6 6 0 0 1-5.2-3a59 59 0 0 0-101.62 0a6 6 0 1 1-10.38-6a70.1 70.1 0 0 1 36.2-30.46a46 46 0 1 1 50.1 0A70.1 70.1 0 0 1 189.19 213M128 178a34 34 0 1 0-34-34a34 34 0 0 0 34 34m-58-58a6 6 0 0 0-6-6a26 26 0 1 1 25.18-32.51a6 6 0 1 0 11.62-3a38 38 0 1 0-59.91 39.63A65.7 65.7 0 0 0 11.2 140.4a6 6 0 1 0 9.6 7.2A53.58 53.58 0 0 1 64 126a6 6 0 0 0 6-6"></svg:path>`,
})
export class PhUsersThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVanLightIcon],svg[ph-van-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252.55 108.09L207 55a14 14 0 0 0-10.74-5H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-1.45-3.91m-54.7-45.32L234.94 106H174V62h22.26a2 2 0 0 1 1.59.77M102 106V62h60v44ZM32 62h58v44H30V64a2 2 0 0 1 2-2m48 140a18 18 0 1 1 18-18a18 18 0 0 1-18 18m112 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48-24h-18.6a30 30 0 0 0-58.8 0h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-58h212v58a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhVanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVaultLightIcon],svg[ph-vault-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h18v18a6 6 0 0 0 12 0v-18h116v18a6 6 0 0 0 12 0v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m0 152H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v66h-20.4a46 46 0 1 0 0 12H218v58a2 2 0 0 1-2 2m-51.37-72a14 14 0 1 0 0 12h20.83a34 34 0 1 1 0-12Z"></svg:path>`,
})
export class PhVaultLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorThreeLightIcon],svg[ph-vector-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.24 140.24l-32 32a6 6 0 0 1-8.48-8.48L217.51 142h-95l-60 60H96a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v33.51l60-60v-95L92.24 60.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L126 38.49V130h91.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhVectorThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVectorTwoLightIcon],svg[ph-vector-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 196.24l-32 32a6 6 0 0 1-8.48-8.48L209.51 198H80a6 6 0 0 1-6-6V54.49L52.24 76.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L86 54.49V186h123.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhVectorTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVibrateLightIcon],svg[ph-vibrate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 34H96a22 22 0 0 0-22 22v144a22 22 0 0 0 22 22h64a22 22 0 0 0 22-22V56a22 22 0 0 0-22-22m10 166a10 10 0 0 1-10 10H96a10 10 0 0 1-10-10V56a10 10 0 0 1 10-10h64a10 10 0 0 1 10 10Zm44-112v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0M54 88v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0m-32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhVibrateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraLightIcon],svg[ph-video-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.83 74.71a6 6 0 0 0-6.16.3L206 100.79V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-28.79L244.67 181a6 6 0 0 0 9.33-5V80a6 6 0 0 0-3.17-5.29M194 184a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm48-19.21l-36-24v-25.58l36-24Z"></svg:path>`,
})
export class PhVideoCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraSlashLightIcon],svg[ph-video-camera-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M250.83 74.71a6 6 0 0 0-6.16.3L206 100.79V72a14 14 0 0 0-14-14h-78.94a6 6 0 0 0 0 12H192a2 2 0 0 1 2 2v87.63a6 6 0 0 0 12 0v-4.42L244.67 181a6 6 0 0 0 9.33-5V80a6 6 0 0 0-3.17-5.29M242 164.79l-36-24v-25.58l36-24ZM52.44 36a6 6 0 0 0-8.88 8l12.69 14H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h151.53l20 22a6 6 0 0 0 8.88-8.08ZM32 186a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h35.16l105.46 116Z"></svg:path>`,
})
export class PhVideoCameraSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceLightIcon],svg[ph-video-conference-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 14v66h-52V54h50a2 2 0 0 1 2 2M38 200V56a2 2 0 0 1 2-2h114v148H40a2 2 0 0 1-2-2m178 2h-50v-68h52v66a2 2 0 0 1-2 2M182 88a10 10 0 1 1 10 10a10 10 0 0 1-10-10m20 80a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-68.19-1.49A38 38 0 0 0 115.23 143a30 30 0 1 0-38.45 0a38 38 0 0 0-18.59 23.5a6 6 0 0 0 11.62 3C72.67 158.38 83.93 150 96 150s23.34 8.38 26.19 19.49a6 6 0 0 0 11.62-3ZM78 120a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhVideoConferenceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVideoLightIcon],svg[ph-video-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m163.33 107l-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M118 132.79V91.21L149.18 112ZM216 42H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm12 40a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhVideoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVignetteLightIcon],svg[ph-vignette-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM128 74c-38.6 0-70 24.22-70 54s31.4 54 70 54s70-24.22 70-54s-31.4-54-70-54m0 96c-32 0-58-18.84-58-42s26-42 58-42s58 18.84 58 42s-26 42-58 42"></svg:path>`,
})
export class PhVignetteLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVinylRecordLightIcon],svg[ph-vinyl-record-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-148a58.07 58.07 0 0 0-58 58a6 6 0 0 1-12 0a70.08 70.08 0 0 1 70-70a6 6 0 0 1 0 12m70 58a70.08 70.08 0 0 1-70 70a6 6 0 0 1 0-12a58.07 58.07 0 0 0 58-58a6 6 0 0 1 12 0m-40 0a30 30 0 1 0-30 30a30 30 0 0 0 30-30m-48 0a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhVinylRecordLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirtualRealityLightIcon],svg[ph-virtual-reality-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m121.62 98.11l-24 64a6 6 0 0 1-11.24 0l-24-64a6 6 0 0 1 11.24-4.22l18.38 49l18.38-49a6 6 0 1 1 11.24 4.22M254 128a78.09 78.09 0 0 1-78 78H80a78 78 0 0 1 0-156h96a78.09 78.09 0 0 1 78 78m-12 0a66.08 66.08 0 0 0-66-66H80a66 66 0 0 0 0 132h96a66.08 66.08 0 0 0 66-66m-63.8 9.76l11 19.26a6 6 0 0 1-10.42 6l-12.07-21.12a27 27 0 0 1-2.71.1h-14v18a6 6 0 0 1-12 0V96a6 6 0 0 1 6-6h20a26 26 0 0 1 14.2 47.76M164 130a14 14 0 0 0 0-28h-14v28Z"></svg:path>`,
})
export class PhVirtualRealityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVirusLightIcon],svg[ph-virus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 108a26 26 0 1 0-26 26a26 26 0 0 0 26-26m-26 14a14 14 0 1 1 14-14a14 14 0 0 1-14 14m82 6a14 14 0 1 1-14-14a14 14 0 0 1 14 14m-48 48a14 14 0 1 1-14-14a14 14 0 0 1 14 14m98-54h-18.2a93.57 93.57 0 0 0-23.26-56.06l13.7-13.7a6 6 0 0 0-8.48-8.48l-13.7 13.7A93.57 93.57 0 0 0 134 34.2V16a6 6 0 0 0-12 0v18.2a93.57 93.57 0 0 0-56.06 23.26l-13.7-13.7a6 6 0 0 0-8.48 8.48l13.7 13.7A93.57 93.57 0 0 0 34.2 122H16a6 6 0 0 0 0 12h18.2a93.57 93.57 0 0 0 23.26 56.06l-13.7 13.7a6 6 0 1 0 8.48 8.48l13.7-13.7A93.57 93.57 0 0 0 122 221.8V240a6 6 0 0 0 12 0v-18.2a93.57 93.57 0 0 0 56.06-23.26l13.7 13.7a6 6 0 0 0 8.48-8.48l-13.7-13.7A93.57 93.57 0 0 0 221.8 134H240a6 6 0 0 0 0-12m-112 88a82 82 0 1 1 82-82a82.1 82.1 0 0 1-82 82"></svg:path>`,
})
export class PhVirusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVisorLightIcon],svg[ph-visor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.05 58H72a70 70 0 0 0-69.92 73.3C3.72 167 33 196.24 68.62 197.92c15.31.71 31-5.77 48-19.84a17.89 17.89 0 0 1 22.8 0C149.75 186.66 165.6 198 184 198a70 70 0 0 0 70-70.93C253.5 89 221.67 58 183.05 58m42.23 110.74A57.57 57.57 0 0 1 184 186c-14.53 0-28-9.77-36.93-17.13a29.9 29.9 0 0 0-38.09 0c-14.58 12.09-27.6 17.67-39.78 17.1a58.36 58.36 0 0 1-55.12-55.18A58 58 0 0 1 72 70h111.05c32.09 0 58.54 25.67 58.95 57.23a57.62 57.62 0 0 1-16.72 41.51M182 96a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhVisorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVoicemailLightIcon],svg[ph-voicemail-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 74a54 54 0 0 0-33.89 96H89.89A54 54 0 1 0 56 182h144a54 54 0 0 0 0-108M14 128a42 42 0 1 1 42 42a42 42 0 0 1-42-42m186 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhVoicemailLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phVolleyballLightIcon],svg[ph-volleyball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m83.37 135.89a90 90 0 0 1-97.85 3.18L131.46 134h86.34a89.5 89.5 0 0 1-6.43 27.89M88.3 47.24a89.5 89.5 0 0 1 27.35-8.39A90 90 0 0 1 167.34 122h-35.88ZM217.8 122h-38.46a102.12 102.12 0 0 0-40.84-83.38A90.15 90.15 0 0 1 217.8 122M77.92 53.26l19.21 33.27a102.16 102.16 0 0 0-51.79 77.06A89.93 89.93 0 0 1 77.92 53.26M57 183.19a90 90 0 0 1 46.17-86.26l17.9 31.07l-43.15 74.74A90.6 90.6 0 0 1 57 183.19M128 218a89.5 89.5 0 0 1-39.7-9.24l19.22-33.29a102.13 102.13 0 0 0 92.58 6.34A89.91 89.91 0 0 1 128 218"></svg:path>`,
})
export class PhVolleyballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWallLightIcon],svg[ph-wall-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h192a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M86 146v-36h84v36Zm-48 0v-36h36v36Zm144-36h36v36h-36Zm36-12h-84V62h84Zm-96-36v36H38V62Zm-84 96h84v36H38Zm96 36v-36h84v36Z"></svg:path>`,
})
export class PhWallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWalletLightIcon],svg[ph-wallet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 66H56a10 10 0 0 1 0-20h136a6 6 0 0 0 0-12H56a22 22 0 0 0-22 22v128a22 22 0 0 0 22 22h160a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H56a10 10 0 0 1-10-10V75.59A21.84 21.84 0 0 0 56 78h160a2 2 0 0 1 2 2Zm-28-60a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhWalletLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarehouseLightIcon],svg[ph-warehouse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 186h-10V56.28l11.26-2.41a6 6 0 1 0-2.52-11.74l-224 48a6 6 0 0 0 2.52 11.74L26 100v86H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 97.42l180-38.57V186h-28v-58a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v58H38ZM178 154H78v-20h100ZM78 166h100v20H78Z"></svg:path>`,
})
export class PhWarehouseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningCircleLightIcon],svg[ph-warning-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-6-82V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhWarningCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondLightIcon],svg[ph-warning-diamond-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m6 26a10 10 0 1 0 10 10a10 10 0 0 0-10-10m110-34a13.82 13.82 0 0 1-4.09 9.86l-96 96.06a14 14 0 0 1-19.72 0l-96-96.06a13.93 13.93 0 0 1 0-19.72l96.05-96.06a14 14 0 0 1 19.72 0l96 96.06A13.82 13.82 0 0 1 238 128m-12 0a1.94 1.94 0 0 0-.57-1.38l-96.05-96.06a2 2 0 0 0-2.76 0l-96.05 96.06a2 2 0 0 0 0 2.76l96.05 96.06a2 2 0 0 0 2.76 0l96.05-96.06A1.94 1.94 0 0 0 226 128"></svg:path>`,
})
export class PhWarningDiamondLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningLightIcon],svg[ph-warning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.07 189.09L147.61 37.22a22.75 22.75 0 0 0-39.22 0L20.93 189.09a21.53 21.53 0 0 0 0 21.72A22.35 22.35 0 0 0 40.55 222h174.9a22.35 22.35 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.72m-10.41 15.71a10.46 10.46 0 0 1-9.21 5.2H40.55a10.46 10.46 0 0 1-9.21-5.2a9.51 9.51 0 0 1 0-9.72l87.45-151.87a10.75 10.75 0 0 1 18.42 0l87.46 151.87a9.51 9.51 0 0 1-.01 9.72M122 144v-40a6 6 0 0 1 12 0v40a6 6 0 0 1-12 0m16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhWarningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWarningOctagonLightIcon],svg[ph-warning-octagon-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m108-44.45v72.9a13.92 13.92 0 0 1-4.1 9.9l-51.55 51.55a13.92 13.92 0 0 1-9.9 4.1h-72.9a13.92 13.92 0 0 1-9.9-4.1L30.1 174.35a13.92 13.92 0 0 1-4.1-9.9v-72.9a13.92 13.92 0 0 1 4.1-9.9L81.65 30.1a13.92 13.92 0 0 1 9.9-4.1h72.9a13.92 13.92 0 0 1 9.9 4.1l51.55 51.55a13.92 13.92 0 0 1 4.1 9.9m-12 0a2 2 0 0 0-.59-1.42l-51.54-51.54a2 2 0 0 0-1.42-.59h-72.9a2 2 0 0 0-1.41.59L38.58 90.13a2 2 0 0 0-.58 1.42v72.9a2 2 0 0 0 .59 1.42l51.54 51.54a2 2 0 0 0 1.42.59h72.9a2 2 0 0 0 1.41-.59l51.56-51.54a2 2 0 0 0 .58-1.42ZM128 162a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhWarningOctagonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineLightIcon],svg[ph-washing-machine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM128 66a62 62 0 1 0 62 62a62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50m70-110a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-73.76 48.24l-16 16a6 6 0 0 1-8.48-8.48l16-16a6 6 0 0 1 8.48 8.48m32-.48a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhWashingMachineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWatchLightIcon],svg[ph-watch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 128a77.92 77.92 0 0 0-32.53-63.31L167.1 29.5A14 14 0 0 0 153.32 18h-50.64A14 14 0 0 0 88.9 29.5l-6.37 35.19a77.87 77.87 0 0 0 0 126.62l6.37 35.19a14 14 0 0 0 13.78 11.5h50.64a14 14 0 0 0 13.78-11.5l6.37-35.19A77.92 77.92 0 0 0 206 128M100.71 31.64a2 2 0 0 1 2-1.64h50.64a2 2 0 0 1 2 1.64l4.56 25.19a77.68 77.68 0 0 0-63.7 0Zm54.58 192.72a2 2 0 0 1-2 1.64h-50.61a2 2 0 0 1-2-1.64l-4.56-25.19a77.68 77.68 0 0 0 63.7 0ZM128 194a66 66 0 1 1 66-66a66.08 66.08 0 0 1-66 66m46-66a6 6 0 0 1-6 6h-40a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v34h34a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhWatchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSawtoothLightIcon],svg[ph-wave-sawtooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.14 133.11l-104 64A6 6 0 0 1 122 192V74.74l-94.85 58.37a6 6 0 1 1-6.29-10.22l104-64A6 6 0 0 1 134 64v117.26l94.85-58.37a6 6 0 1 1 6.29 10.22"></svg:path>`,
})
export class PhWaveSawtoothLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSineLightIcon],svg[ph-wave-sine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.43 130.55C215.84 176.57 197 198 178 198c-23.83 0-39.2-32.76-55.47-67.45C109.26 102.17 94.17 70 78 70c-9.18 0-25 10.5-48.53 60.55a6 6 0 0 1-10.86-5.1C40.16 79.43 59 58 78 58c23.83 0 39.2 32.76 55.47 67.45C146.74 153.83 161.83 186 178 186c9.18 0 25.05-10.5 48.53-60.55a6 6 0 0 1 10.86 5.1Z"></svg:path>`,
})
export class PhWaveSineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareLightIcon],svg[ph-wave-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 128v56a6 6 0 0 1-6 6H128a6 6 0 0 1-6-6V78H30v50a6 6 0 0 1-12 0V72a6 6 0 0 1 6-6h104a6 6 0 0 1 6 6v106h92v-50a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhWaveSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleLightIcon],svg[ph-wave-triangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m236.86 131.51l-52 72a6 6 0 0 1-9.72 0L76 66.25l-47.14 65.26a6 6 0 1 1-9.72-7l52-72a6 6 0 0 1 9.72 0L180 189.75l47.14-65.26a6 6 0 0 1 9.72 7Z"></svg:path>`,
})
export class PhWaveTriangleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phWaveformLightIcon],svg[ph-waveform-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m34-70a6 6 0 0 0-6 6v192a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v128a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m40 32a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6m40-16a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhWaveformLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
