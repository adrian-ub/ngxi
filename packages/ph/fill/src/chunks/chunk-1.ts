import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDnaFillIcon],svg[ph-dna-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5M163.18 192H83.91a8 8 0 0 1-8-8.53a8.18 8.18 0 0 1 8.27-7.47h65.52a4 4 0 0 0 2.75-6.9a48.2 48.2 0 0 0-11-7.53L94.8 138.23a4 4 0 0 0-4.08.3A79.51 79.51 0 0 0 56 204.5v27.23a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-16h92a4 4 0 0 0 4-4v-7.5a49 49 0 0 0-.9-9.32a4 4 0 0 0-3.92-3.18m28.29-176a8.17 8.17 0 0 0-7.47 8.27V40H92a4 4 0 0 0-4 4v7.5a49 49 0 0 0 .9 9.32A4 4 0 0 0 92.82 64h79a8.18 8.18 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H106.3a4 4 0 0 0-2.75 6.9a48.2 48.2 0 0 0 11 7.53l46.67 23.34a4 4 0 0 0 4.08-.3A79.51 79.51 0 0 0 200 51.5V24a8 8 0 0 0-8.53-8"></svg:path>`,
})
export class PhDnaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogFillIcon],svg[ph-dog-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.71 125l-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52a16.3 16.3 0 0 0 6.71 1.48a15.5 15.5 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16a16.3 16.3 0 0 0 6.72-1.47a15.77 15.77 0 0 0 9.12-17.54M176 208h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.93 56h40.14L200 123.11V184a24 24 0 0 1-24 24m-72-68a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDogFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorFillIcon],svg[ph-door-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-68-72a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDoorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenFillIcon],svg[ph-door-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-64 0H64V40h104Zm-40-84a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDoorOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotFillIcon],svg[ph-dot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 60a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineFillIcon],svg[ph-dot-outline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhDotOutlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineFillIcon],svg[ph-dots-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m52 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-52a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixFillIcon],svg[ph-dots-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M68 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalFillIcon],svg[ph-dots-six-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 16H64a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-60a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsSixVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleFillIcon],svg[ph-dots-three-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24M84 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m44 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsThreeCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalFillIcon],svg[ph-dots-three-circle-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104 104 0 1 0-104 104a104.13 104.13 0 0 0 104-104M116 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDotsThreeCircleVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeFillIcon],svg[ph-dots-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M60 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12m68 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineFillIcon],svg[ph-dots-three-outline-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28M48 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m160 0a28 28 0 1 0 28 28a28 28 0 0 0-28-28"></svg:path>`,
})
export class PhDotsThreeOutlineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalFillIcon],svg[ph-dots-three-outline-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalFillIcon],svg[ph-dots-three-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 16H96a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-32 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDotsThreeVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadFillIcon],svg[ph-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhDownloadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleFillIcon],svg[ph-download-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0m-101.66 5.66a8 8 0 0 0 11.32 0l40-40A8 8 0 0 0 168 96h-32V32a8 8 0 0 0-16 0v64H88a8 8 0 0 0-5.66 13.66Z"></svg:path>`,
})
export class PhDownloadSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressFillIcon],svg[ph-dress-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.26 80.23a15.26 15.26 0 0 1-1.65-12.17a15.5 15.5 0 0 1 2-4.76L88 32.7V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 104 8.27v24.15l5.25 6.58a23.91 23.91 0 0 0 19.13 9a24.67 24.67 0 0 0 18.71-9.43l4.91-6.15V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 168 8.27V32.7l21.42 30.6a15.5 15.5 0 0 1 2 4.76a15.26 15.26 0 0 1-1.65 12.17a2 2 0 0 0-.11.18l-13.86 21.74a4 4 0 0 1-3.4 1.85H83.6a4 4 0 0 1-3.37-1.85L66.37 80.41a2 2 0 0 0-.11-.18m148.5 129.56a2.5 2.5 0 0 0-.15-.34l-40.92-87.15a4 4 0 0 0-3.63-2.3H85.94a4 4 0 0 0-3.63 2.3l-40.92 87.15a2.5 2.5 0 0 0-.15.34A16.2 16.2 0 0 0 41.6 223a16 16 0 0 0 14.4 9h144a16 16 0 0 0 14.39-9a16.2 16.2 0 0 0 .37-13.21"></svg:path>`,
})
export class PhDressFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserFillIcon],svg[ph-dresser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v40a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V40a16 16 0 0 0-16-16m-64 40h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m76 36H44a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-76 36h-15.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h15.73a8.18 8.18 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53m76 36H44a4 4 0 0 0-4 4v40a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-40a4 4 0 0 0-4-4m-76 36h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDresserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoFillIcon],svg[ph-dribbble-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.27 36.86a4 4 0 0 1 .82-7.19a103.94 103.94 0 0 1 88.66 9.95a4 4 0 0 1 1 5.87a153.3 153.3 0 0 1-41.89 37a169.4 169.4 0 0 0-48.59-45.63M127.58 90a153 153 0 0 0-56-46.91a3.94 3.94 0 0 0-4 .33a104.4 104.4 0 0 0-38.34 52a4 4 0 0 0 3 5.16A152.3 152.3 0 0 0 64 104a151 151 0 0 0 63.58-14m103.8 26.69a103.8 103.8 0 0 0-29.19-61.49a4 4 0 0 0-6 .34a169.2 169.2 0 0 1-45.69 40.4a167.7 167.7 0 0 1 13.55 29.9A167.6 167.6 0 0 1 208 120a169 169 0 0 1 19 1.07a4 4 0 0 0 4.38-4.35Zm-62.91 24.5a167.7 167.7 0 0 1 4.45 38.47a168 168 0 0 1-4.11 36.85a4 4 0 0 0 5.69 4.49a104.25 104.25 0 0 0 56.57-79.25a4 4 0 0 0-3.49-4.49a152.4 152.4 0 0 0-59.11 4Zm-19.64-10.45a152 152 0 0 0-12.39-27.21A167 167 0 0 1 64 120a168.4 168.4 0 0 1-34.88-3.65a4 4 0 0 0-4.81 3.56q-.31 4-.32 8.09a103.72 103.72 0 0 0 33 75.91a4 4 0 0 0 6.15-.92a169 169 0 0 1 85.69-72.22Zm-73.14 82.51a4 4 0 0 0 1.52 5.48a103.88 103.88 0 0 0 68.85 11.69a3.93 3.93 0 0 0 3.06-2.65a152.6 152.6 0 0 0 7.8-48.08a151.3 151.3 0 0 0-3.74-33.46a152.94 152.94 0 0 0-77.49 67.02"></svg:path>`,
})
export class PhDribbbleLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneFillIcon],svg[ph-drone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M189.66 77.66L160 107.31v41.38l29.66 29.65a8 8 0 0 1-11.32 11.32L148.69 160h-41.38l-29.65 29.66a8 8 0 0 1-11.32-11.32L96 148.69v-41.38L66.34 77.66a8 8 0 0 1 11.32-11.32L107.31 96h41.38l29.65-29.66a8 8 0 0 1 11.32 11.32m-46.28-6.12a8 8 0 0 0 10.21-4.87a28 28 0 1 1 35.74 35.74A8 8 0 0 0 192 118a7.9 7.9 0 0 0 2.67-.46a44 44 0 1 0-56.16-56.16a8 8 0 0 0 4.87 10.16m51.29 67a8 8 0 0 0-5.34 15.08a28 28 0 1 1-35.74 35.74a8 8 0 0 0-15.08 5.34a44 44 0 1 0 56.16-56.16m-82 46a8 8 0 0 0-10.21 4.87a28 28 0 1 1-35.74-35.74a8 8 0 0 0-5.34-15.08a44 44 0 1 0 56.16 56.16a8 8 0 0 0-4.92-10.29Zm-51.29-67A7.9 7.9 0 0 0 64 118a8 8 0 0 0 2.67-15.54a28 28 0 1 1 35.74-35.74a8 8 0 1 0 15.08-5.34a44 44 0 1 0-56.16 56.16Z"></svg:path>`,
})
export class PhDroneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropFillIcon],svg[ph-drop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25m9.85 105.59a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.29.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></svg:path>`,
})
export class PhDropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomFillIcon],svg[ph-drop-half-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26"></svg:path>`,
})
export class PhDropHalfBottomFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfFillIcon],svg[ph-drop-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M56 144c0-57.23 55.47-105 72-118v190a72.08 72.08 0 0 1-72-72"></svg:path>`,
})
export class PhDropHalfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleFillIcon],svg[ph-drop-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25"></svg:path>`,
})
export class PhDropSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashFillIcon],svg[ph-drop-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-12.9-14.19A87.7 87.7 0 0 1 128 232c-48 0-87.49-38.93-88-86.88c-.27-24.34 8.22-49.84 24.73-74.81L42.3 45.63a8.23 8.23 0 0 1 .14-11.38a8 8 0 0 1 11.48.37Zm-10.07-34.86a4 4 0 0 0 6.7-1.27A87.7 87.7 0 0 0 216 144c0-31.4-14.51-64.68-42-96.25a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A251.3 251.3 0 0 0 87.17 42a4 4 0 0 0 0 5.41Z"></svg:path>`,
})
export class PhDropSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoFillIcon],svg[ph-dropbox-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m188 120l-60-40l55.56-37a8 8 0 0 1 8.88 0L238 73.34a8 8 0 0 1 0 13.32ZM72.44 43a8 8 0 0 0-8.88 0L18 73.34a8 8 0 0 0 0 13.32L68 120l60-40ZM238 153.34L188 120l-60 40l55.56 37a8 8 0 0 0 8.88 0L238 166.66a8 8 0 0 0 0-13.32m-220 0a8 8 0 0 0 0 13.32L63.56 197a8 8 0 0 0 8.88 0L128 160l-60-40Zm150.61 52.95l-38.37-25.58a4 4 0 0 0-4.44 0l-38.39 25.58a4 4 0 0 0 0 6.65L123.56 237a8 8 0 0 0 8.88 0l36.15-24.1a4 4 0 0 0 0-6.61Z"></svg:path>`,
})
export class PhDropboxLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarFillIcon],svg[ph-ear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m20 128a4.2 4.2 0 0 0 1.33-.22a8 8 0 0 1 5.34 15.08A20 20 0 0 1 128 148c0-8.85 4.77-15.23 9-20.87c3.77-5 7-9.38 7-15.13a16 16 0 0 0-32 0a8 8 0 0 1-16 0a32 32 0 0 1 64 0c0 11.07-5.66 18.63-10.2 24.71c-3.6 4.81-5.8 7.93-5.8 11.29a4 4 0 0 0 4 4m36-32a8 8 0 0 1-8-8a48 48 0 0 0-96 0c0 11.9 6.71 20.5 13.82 29.6c7 8.92 14.18 18.15 14.18 30.4a20 20 0 0 0 34 14.29a8 8 0 1 1 11.19 11.42A36 36 0 0 1 92 172c0-6.74-5-13.14-10.79-20.55C73.54 141.63 64 129.41 64 112a64 64 0 0 1 128 0a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhEarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashFillIcon],svg[ph-ear-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-10.28-11.31a103 103 0 0 0 11.83-10.77ZM64.2 45.93L53.92 34.62a8 8 0 1 0-11.84 10.76L52.37 56.7A103 103 0 0 1 64.2 45.93M203.63 199.3L64.2 45.93A103.94 103.94 0 0 1 203.63 199.3M159 104a32 32 0 0 0-20.08-22.09a8 8 0 0 0-5.45 15a16 16 0 0 1 10 11a8 8 0 0 0 7.74 6a7.7 7.7 0 0 0 2-.26A8 8 0 0 0 159 104m33 8a64 64 0 0 0-85.89-60.16a8 8 0 0 0 5.47 15A48 48 0 0 1 176 112a8 8 0 0 0 16 0m-44 56a20 20 0 0 1-20-20a24.1 24.1 0 0 1 1-7l-20.45-22.5A7.9 7.9 0 0 1 104 120a8 8 0 0 1-8-8a32 32 0 0 1 .68-6.56L84.39 91.92A47.6 47.6 0 0 0 80 112c0 11.9 6.71 20.5 13.82 29.6c7 8.92 14.18 18.15 14.18 30.4a20 20 0 0 0 34 14.29a8 8 0 1 1 11.19 11.42A36 36 0 0 1 92 172c0-6.74-5-13.14-10.79-20.55C73.54 141.63 64 129.41 64 112a63.5 63.5 0 0 1 9-32.66L52.37 56.7A103.94 103.94 0 0 0 191.8 210.07l-38.8-42.7a19.8 19.8 0 0 1-5 .63"></svg:path>`,
})
export class PhEarSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackFillIcon],svg[ph-egg-crack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152a88.11 88.11 0 0 1-87.8 88c-50.66.12-90.21-43-88.12-93.62c1.21-29.21 11.71-60.54 29.23-86.82C87.5 32.29 109.43 16 128 16c13.25 0 28.23 8.32 42.34 23a4 4 0 0 1 .09 5.44L122 98.67a8 8 0 0 0 4 13.09l24.61 6.15l-6.51 32.52a8 8 0 0 0 6.28 9.41a7.7 7.7 0 0 0 1.62.16a8 8 0 0 0 7.83-6.43l8-40a8 8 0 0 0-5.9-9.33l-19.16-4.79l36.89-41.33a4 4 0 0 1 6.29.41c.24.34.47.68.7 1C205.3 87.54 216 121.23 216 152"></svg:path>`,
})
export class PhEggCrackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggFillIcon],svg[ph-egg-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 152a88 88 0 0 1-176 0c0-30.77 10.7-64.46 29.34-92.44C87.53 32.29 109.46 16 128 16s40.47 16.29 58.66 43.56C205.3 87.54 216 121.23 216 152"></svg:path>`,
})
export class PhEggFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectFillIcon],svg[ph-eject-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.31 126.24a15.59 15.59 0 0 1 3.1-17.12l73.73-77.51a24.76 24.76 0 0 1 35.72 0l73.73 77.51a15.59 15.59 0 0 1 3.1 17.12a16.18 16.18 0 0 1-14.93 9.76H48.24a16.18 16.18 0 0 1-14.93-9.76M208 152H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhEjectFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleFillIcon],svg[ph-eject-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M40.09 160h175.82a16.1 16.1 0 0 0 12.48-26.23L146.74 32.94a24.11 24.11 0 0 0-37.48 0L27.61 133.77A16.1 16.1 0 0 0 40.09 160"></svg:path>`,
})
export class PhEjectSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorFillIcon],svg[ph-elevator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-96 24h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16m8 152H64V96h56Zm72 0h-56V96h56Z"></svg:path>`,
})
export class PhElevatorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyFillIcon],svg[ph-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.49 91.59A56 56 0 0 1 97.54 175ZM128 72a56 56 0 0 0-42.49 92.41l73-83.37A55.67 55.67 0 0 0 128 72m104 56A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104m-32 0a71.68 71.68 0 0 0-18.89-48.55l4.89-6.18a8 8 0 1 0-12-10.54l-4.91 6.18a72 72 0 0 0-94.2 107.64L70 182.73a8 8 0 0 0 12 10.54l4.91-6.18A71.95 71.95 0 0 0 200 128"></svg:path>`,
})
export class PhEmptyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineFillIcon],svg[ph-engine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 120v48a16 16 0 0 1-16 16h-12.69L192 219.31a15.86 15.86 0 0 1-11.31 4.69h-77.38A15.86 15.86 0 0 1 92 219.31L52.69 180A15.86 15.86 0 0 1 48 168.69V148H24v24a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0v24h24V80a16 16 0 0 1 16-16h60V40h-24a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16h-24v24h40.69A15.86 15.86 0 0 1 192 68.69L227.31 104H240a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhEngineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeFillIcon],svg[ph-envelope-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8M98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"></svg:path>`,
})
export class PhEnvelopeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenFillIcon],svg[ph-envelope-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192Z"></svg:path>`,
})
export class PhEnvelopeOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleFillIcon],svg[ph-envelope-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-8 144H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"></svg:path>`,
})
export class PhEnvelopeSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenFillIcon],svg[ph-envelope-simple-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z"></svg:path>`,
})
export class PhEnvelopeSimpleOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerFillIcon],svg[ph-equalizer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m72 24h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m32-48h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16M72 120H24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8m160-32h-48a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 64h-48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhEqualizerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsFillIcon],svg[ph-equals-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 128H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-48H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhEqualsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserFillIcon],svg[ph-eraser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M213.67 103L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"></svg:path>`,
})
export class PhEraserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownFillIcon],svg[ph-escalator-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM224 144h-36.5L93.88 42.57A8 8 0 0 0 88 40H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h36.5l93.62 101.43A8 8 0 0 0 168 216h56a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhEscalatorDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpFillIcon],svg[ph-escalator-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 56v40a16 16 0 0 1-16 16h-36.5L93.88 213.43A8 8 0 0 1 88 216H32a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h36.5l93.62-101.43A8 8 0 0 1 168 40h56a16 16 0 0 1 16 16m-34.34 90.34a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L192 171.31V208a8 8 0 0 0 16 0v-36.69l10.34 10.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhEscalatorUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamFillIcon],svg[ph-exam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 113.89L107.06 136H84.94ZM232 56v160a8 8 0 0 1-11.58 7.16L192 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L128 208.94l-28.42 14.22a8 8 0 0 1-7.16 0L64 208.94l-28.42 14.22A8 8 0 0 1 24 216V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-96.84 100.42l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 14.32 7.16L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16M208 128a8 8 0 0 0-8-8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhExamFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkFillIcon],svg[ph-exclamation-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 136a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-8-24V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhExclamationMarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeFillIcon],svg[ph-exclude-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 160a80 80 0 0 1-158.64 14.64a80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160m-80-80a80.3 80.3 0 0 1 14.64 1.36a80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80"></svg:path>`,
})
export class PhExcludeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareFillIcon],svg[ph-exclude-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 88v80H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v48Zm128 0h-48v80H88v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhExcludeSquareFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportFillIcon],svg[ph-export-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 112v96a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h64v48a8 8 0 0 0 16 0V96h64a16 16 0 0 1 16 16m-80-68.69l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32L120 43.31V96h16Z"></svg:path>`,
})
export class PhExportFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedFillIcon],svg[ph-eye-closed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.94 164a8 8 0 1 1-13.89 8l-19-33.2A123.2 123.2 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133 133 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.2 123.2 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153 153 0 0 1-19.3-20a8 8 0 0 1 0-10.06C44.56 75.72 77.55 48 128 48s83.44 27.72 102.22 51a8 8 0 0 1 0 10.06a153 153 0 0 1-19.3 20Z"></svg:path>`,
})
export class PhEyeClosedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeFillIcon],svg[ph-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhEyeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashFillIcon],svg[ph-eye-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.68 57.87a4 4 0 0 1 2.08-6.6A130 130 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5c-.35.79-8.82 19.57-27.65 38.4q-4.28 4.26-8.79 8.07a4 4 0 0 1-5.55-.36Zm117.24 152.75a8 8 0 1 1-11.84 10.76L180 197.13A127.2 127.2 0 0 1 128 208c-34.88 0-66.57-13.26-91.66-38.34C17.51 150.83 9 132.05 8.69 131.26a8 8 0 0 1 0-6.5c.31-.76 8.82-19.58 27.65-38.41a135 135 0 0 1 25-19.78L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-65.49-48.25l-52.69-58a40 40 0 0 0 52.69 58"></svg:path>`,
})
export class PhEyeSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperFillIcon],svg[ph-eyedropper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L138.8 66.2a24 24 0 0 0-33.14.77l-5 5a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l5-5a24 24 0 0 0 .74-33.18l23.75-23.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51l33.94 34Z"></svg:path>`,
})
export class PhEyedropperFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleFillIcon],svg[ph-eyedropper-sample-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L138.8 66.2a24 24 0 0 0-33.14.77l-5 5a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.65 13.65 0 0 0 36 219.29a15.9 15.9 0 0 0 17.71 3.36L71.24 215a39.9 39.9 0 0 0 37.05-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l5-5a24 24 0 0 0 .74-33.18l23.75-23.87A35.75 35.75 0 0 0 224 67.3M138 152H70.07l44-44l33.94 34Z"></svg:path>`,
})
export class PhEyedropperSampleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesFillIcon],svg[ph-eyeglasses-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 72v92a44 44 0 0 1-87.81 4h-32.38A44 44 0 0 1 24 164V72a32 32 0 0 1 32-32a8 8 0 0 1 0 16a16 16 0 0 0-16 16v58.08A44 44 0 0 1 110.32 152h35.36A44 44 0 0 1 216 130.08V72a16 16 0 0 0-16-16a8 8 0 0 1 0-16a32 32 0 0 1 32 32"></svg:path>`,
})
export class PhEyeglassesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesFillIcon],svg[ph-eyes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 32c-20.61 0-38.28 18.16-48 45.85C118.28 50.16 100.61 32 80 32c-31.4 0-56 42.17-56 96s24.6 96 56 96c20.61 0 38.28-18.16 48-45.85c9.72 27.69 27.39 45.85 48 45.85c31.4 0 56-42.17 56-96s-24.6-96-56-96m-69.08 154.39C99.43 200.12 89.62 208 80 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C60.57 55.88 70.38 48 80 48s19.43 7.88 26.92 21.61C115.35 85.07 120 105.81 120 128s-4.65 42.93-13.08 58.39m96 0C195.43 200.12 185.62 208 176 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C156.57 55.88 166.38 48 176 48s19.43 7.88 26.92 21.61C211.35 85.07 216 105.81 216 128s-4.65 42.93-13.08 58.39"></svg:path>`,
})
export class PhEyesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskFillIcon],svg[ph-face-mask-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-.85a16 16 0 0 0-9.68-10l-80-29a16.06 16.06 0 0 0-10.94 0l-80 29.09a16 16 0 0 0-9.68 10H32A32 32 0 0 0 0 104v24a32 32 0 0 0 32 32h5.19c7.19 15.8 21.79 29.43 43.23 40.16a191.2 191.2 0 0 0 46.15 15.71a7.9 7.9 0 0 0 2.86 0a191.2 191.2 0 0 0 46.15-15.71c21.44-10.73 36-24.36 43.23-40.16H224a32 32 0 0 0 32-32v-24a32 32 0 0 0-32-32M32 144a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v48a59 59 0 0 0 .55 8Zm136 0H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m0-32H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m72 16a16 16 0 0 1-16 16h-.55a59 59 0 0 0 .55-8V88a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhFaceMaskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoFillIcon],svg[ph-facebook-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104.16 104.16 0 0 1-91.55 103.26a4 4 0 0 1-4.45-4V152h24a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.25-7.47H136v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47H152a32 32 0 0 0-32 32v24H96a8 8 0 0 0-8 8.53a8.17 8.17 0 0 0 8.27 7.47H120v75.28a4 4 0 0 1-4.44 4a104.15 104.15 0 0 1-91.49-107.19c2-54 45.74-97.9 99.78-100A104.12 104.12 0 0 1 232 128"></svg:path>`,
})
export class PhFacebookLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryFillIcon],svg[ph-factory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208h-8v-72.98a1 1 0 0 0 0-.15L209 29.74A16.08 16.08 0 0 0 193.06 16h-18.12a16.08 16.08 0 0 0-15.84 13.74l-11.56 80.91L108.8 81.6A8 8 0 0 0 96 88v32L44.8 81.6A8 8 0 0 0 32 88v120h-8a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-124-24H80a8 8 0 0 1 0-16h28a8 8 0 0 1 0 16m68 0h-28a8 8 0 0 1 0-16h28a8 8 0 0 1 0 16m-5.33-56l-8.53-6.4l12.8-89.6h18.12l13.72 96Z"></svg:path>`,
})
export class PhFactoryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersFillIcon],svg[ph-faders-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 120v96a8 8 0 0 1-16 0v-96a8 8 0 0 1 16 0m64 72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m24-48h-16V40a8 8 0 0 0-16 0v104h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8M56 160a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m24-48H64V40a8 8 0 0 0-16 0v72H32a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m72-48h-16V40a8 8 0 0 0-16 0v24h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFadersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalFillIcon],svg[ph-faders-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 80a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8M40 88h96v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16m176 80h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M96 144H80a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h32v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhFadersHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterFillIcon],svg[ph-fallout-shelter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.94 124.55c-1.77-54.49-46-98.72-100.49-100.49A104.09 104.09 0 0 0 24.06 131.45c1.77 54.49 46 98.72 100.49 100.49a104.09 104.09 0 0 0 107.39-107.39m-33.56 16.92l-23.45 32.83a8.52 8.52 0 0 1-13.86 0L128 128l-33.07 46.3a8.52 8.52 0 0 1-13.86 0l-23.45-32.83A8.52 8.52 0 0 1 64.55 128H128L97.62 85.47A8.52 8.52 0 0 1 104.55 72h46.9a8.52 8.52 0 0 1 6.93 13.47L128 128h63.45a8.52 8.52 0 0 1 6.93 13.47"></svg:path>`,
})
export class PhFalloutShelterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanFillIcon],svg[ph-fan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68a60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32a60 60 0 0 0 44.42 60.66a60.5 60.5 0 0 0 15.62 2.07a60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-102.56 12.85a20 20 0 1 1 17.41-22.29a20 20 0 0 1-17.41 22.29"></svg:path>`,
})
export class PhFanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmFillIcon],svg[ph-farm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136.83 220.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16a199.1 199.1 0 0 1 110.6 33.34a8 8 0 0 1 2.23 11.09M24 144a8 8 0 0 0 0 16a214.8 214.8 0 0 1 151.17 61.71a8 8 0 1 0 11.2-11.42A230.7 230.7 0 0 0 24 144m208 16a216.5 216.5 0 0 0-48.59 5.49q8.24 6.25 16 13.16A201.5 201.5 0 0 1 232 176a8 8 0 0 1 0 16c-6 0-11.93.29-17.85.86q8.32 8.67 15.94 18.14a8 8 0 1 1-12.48 10A247 247 0 0 0 24 128a8 8 0 0 1 0-16a265.4 265.4 0 0 1 48 4.38V80a8 8 0 0 1 3.2-6.4l64-48a8 8 0 0 1 9.6 0l64 48A8 8 0 0 1 216 80v32.5c5.31-.32 10.64-.5 16-.5a8 8 0 0 1 0 16a246.3 246.3 0 0 0-84.26 14.69q9.44 5 18.46 10.78A232.2 232.2 0 0 1 232 144a8 8 0 0 1 0 16m-103.93-26.73A261.5 261.5 0 0 1 168 119.81V96h-48v34c2.71 1 5.4 2.13 8.07 3.27"></svg:path>`,
})
export class PhFarmFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleFillIcon],svg[ph-fast-forward-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m68.8 110.4l-48 36a8 8 0 0 1-4.8 1.6a8 8 0 0 1-8-8v-36a8 8 0 0 1-3.2 6.4l-48 36A8 8 0 0 1 80 172a8 8 0 0 1-8-8V92a8 8 0 0 1 12.8-6.4l48 36a8 8 0 0 1 3.2 6.4V92a8 8 0 0 1 12.8-6.4l48 36a8 8 0 0 1 0 12.8"></svg:path>`,
})
export class PhFastForwardCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardFillIcon],svg[ph-fast-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128a15.76 15.76 0 0 1-7.33 13.34l-88.19 56.16A15.91 15.91 0 0 1 136 184.16v-37.3L56.48 197.5A15.91 15.91 0 0 1 32 184.16V71.84A15.91 15.91 0 0 1 56.48 58.5L136 109.14v-37.3a15.91 15.91 0 0 1 24.48-13.34l88.19 56.16A15.76 15.76 0 0 1 256 128"></svg:path>`,
})
export class PhFastForwardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherFillIcon],svg[ph-feather-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211.84 134.81l-59.79 60.47a15.75 15.75 0 0 1-11.2 4.68H75.32l-29.66 29.7a8 8 0 0 1-11.32-11.32l22.59-22.58L124.7 128H209a4 4 0 0 1 2.84 6.81m4.86-104.24a64 64 0 0 0-85.9 4.14l-9.6 9.48A4 4 0 0 0 120 47v63l55-55a8 8 0 0 1 11.31 11.31L140.71 112h88.38a4 4 0 0 0 3.56-2.16a64.08 64.08 0 0 0-15.95-79.27M62.83 167.23L104 126.06v-55.3a4 4 0 0 0-6.81-2.84L60.69 104A15.9 15.9 0 0 0 56 115.31v49.09a4 4 0 0 0 6.83 2.83"></svg:path>`,
})
export class PhFeatherFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoFillIcon],svg[ph-fediverse-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 96a27.8 27.8 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a29 29 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96m-140.81 8.36L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35l-1.85-46.38a28 28 0 0 0 10.12-6.13M149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.9 27.9 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85L124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68M156 184h-.89l-16.18-48.53l46.65-2.22a27.9 27.9 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1M126.32 61.7a28.4 28.4 0 0 0 7.68 6.54l-11.3 47.45l-43.47-25.17A28 28 0 0 0 80 84a29 29 0 0 0-.15-2.94Z"></svg:path>`,
})
export class PhFediverseLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoFillIcon],svg[ph-figma-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m-64 56H96a24 24 0 0 1 0-48h32Zm40-64h-24V40h24a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhFigmaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveFillIcon],svg[ph-file-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h36a4 4 0 0 0 4-4v-20h-7.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h8v-16h-7.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h8v-16h-7.73a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h8v-7.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v8h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v16h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v16h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v20a4 4 0 0 0 4 4h84a16 16 0 0 0 16-16V88a8 8 0 0 0-2.28-5.66M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileArchiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownFillIcon],svg[ph-file-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-56 83.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 11.32M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpFillIcon],svg[ph-file-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-56 67.32a8 8 0 0 1-11.32 0L136 139.31V184a8 8 0 0 1-16 0v-44.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1 0 11.32M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioFillIcon],svg[ph-file-audio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 180a40.55 40.55 0 0 1-20 34.91a8 8 0 0 1-8-13.82a24.49 24.49 0 0 0 0-42.18a8 8 0 0 1 8-13.82A40.55 40.55 0 0 1 152 180m-52.94-51.39a8 8 0 0 0-8.72 1.73L68.69 152H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h20.69l21.65 21.66A8 8 0 0 0 104 224v-88a8 8 0 0 0-4.94-7.39M216 88v128a16 16 0 0 1-16 16h-32a8 8 0 0 1 0-16h32V96h-48a8 8 0 0 1-8-8V40H56v80a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path>`,
})
export class PhFileAudioFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCFillIcon],svg[ph-file-c-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.07 14.07 0 0 0 10.07-4.51a8.19 8.19 0 0 1 10.88-.9a8 8 0 0 1 .83 11.81A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.39 9.19a8.26 8.26 0 0 1 .73 11.09a8 8 0 0 1-11.9.38A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v128a16 16 0 0 1-16 16h-84a4 4 0 0 1-4-4V124a4 4 0 0 0-4-4H44a4 4 0 0 1-4-4V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-20 0l-44-44v44Z"></svg:path>`,
})
export class PhFileCFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpFillIcon],svg[ph-file-c-sharp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.07 14.07 0 0 0 10.07-4.51a8.19 8.19 0 0 1 10.88-.9a8 8 0 0 1 .83 11.81A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.38 9.19a8.25 8.25 0 0 1 .74 11.09a8 8 0 0 1-11.9.38A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v135.75a8.15 8.15 0 0 1-6.81 8.16A8 8 0 0 1 200 224V124a4 4 0 0 0-4-4H44a4 4 0 0 1-4-4V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-20 0l-44-44v44Zm-28 80v16h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53h-8v7.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-8H136v7.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-8h-7.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h8V168h-7.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h8v-7.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v8h16v-7.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v8h7.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53Zm-16 0h-16v16h16Z"></svg:path>`,
})
export class PhFileCSharpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudFillIcon],svg[ph-file-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 181a52.06 52.06 0 0 1-52 51H60.72C40.87 232 24 215.77 24 195.92a36 36 0 0 1 19.28-31.79a4 4 0 0 1 5.77 4.33a63.5 63.5 0 0 0-1 11.15a8.22 8.22 0 0 0 7.5 8.39a8 8 0 0 0 8.45-8a47.55 47.55 0 0 1 4.37-20A48 48 0 0 1 160 181m56-93v128a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h24V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path>`,
})
export class PhFileCloudFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeFillIcon],svg[ph-file-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-104 88a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L91.31 152Zm72-12.68l-24 24a8 8 0 0 1-11.32-11.32L164.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileCodeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppFillIcon],svg[ph-file-cpp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44ZM48 180c0 11 7.18 20 16 20a14.07 14.07 0 0 0 10.07-4.51a8.19 8.19 0 0 1 10.88-.9a8 8 0 0 1 .83 11.81A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.39 9.2a8.24 8.24 0 0 1 .73 11.08a8 8 0 0 1-11.9.38A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m108 .53a8.18 8.18 0 0 1-8.25 7.47H136v11.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V188h-11.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h12v-11.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v12h12a8 8 0 0 1 7.98 8.51m68 0a8.18 8.18 0 0 1-8.25 7.47H204v11.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V188h-11.73a8.18 8.18 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h12v-11.73a8.17 8.17 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v12h12a8 8 0 0 1 7.98 8.51"></svg:path>`,
})
export class PhFileCppFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssFillIcon],svg[ph-file-css-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5a8.2 8.2 0 0 1 10.9-.91a8 8 0 0 1 .81 11.81A30 30 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.38 9.19a8.26 8.26 0 0 1 .74 11.09a8 8 0 0 1-11.9.38A14.2 14.2 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.26-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.35-1.73 19.83-.56a8 8 0 0 0 4.07-15.48c-2.12-.55-21-5.22-32.83 2.76a20.55 20.55 0 0 0-9 14.95c-2 15.88 13.64 20.41 23 23.11c12.07 3.49 13.13 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.3 15.41a61.2 61.2 0 0 0 15.18 2c5.83 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.25-17.28-14.27-22.11-24.15-24.97m64 0c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.15 3.93c-4.6 3.06-15.16 1.56-19.54.36a8 8 0 0 0-4.3 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25ZM40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4m112-28h44l-44-44Z"></svg:path>`,
})
export class PhFileCssFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvFillIcon],svg[ph-file-csv-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5a8.21 8.21 0 0 1 10.9-.91a8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19a8.26 8.26 0 0 1 .73 11.09a8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45a8 8 0 0 1 10.45 4.76l12.47 34.9l12.47-34.9a8 8 0 0 1 10.45-4.76a8.23 8.23 0 0 1 4.5 10.45"></svg:path>`,
})
export class PhFileCsvFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedFillIcon],svg[ph-file-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8M213.66 82.34l-56-56A8 8 0 0 0 152 24h-32a8 8 0 0 0 0 16h24v48a8 8 0 0 0 8 8h48v40a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16m128 144a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8M48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhFileDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocFillIcon],svg[ph-file-doc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168.07a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56a8 8 0 0 0-5.68-2.34H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44ZM52 144H36a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h15.33C71 216 87.55 200.52 88 180.87A36 36 0 0 0 52 144m-.49 56H44v-40h8a20 20 0 0 1 20 20.77C71.59 191.59 62.35 200 51.52 200Zm170.67-4.28a8.26 8.26 0 0 1-.73 11.09a30 30 0 0 1-21.4 9.19c-17.65 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.4 9.19a8.26 8.26 0 0 1 .73 11.09a8 8 0 0 1-11.9.38a14.2 14.2 0 0 0-10.22-4.66c-8.82 0-16 9-16 20s7.18 20 16 20a14.25 14.25 0 0 0 10.23-4.66a8 8 0 0 1 11.9.38ZM128 144c-17.65 0-32 16.15-32 36s14.37 36 32 36s32-16.15 32-36s-14.31-36-32-36m0 56c-8.83 0-16-9-16-20s7.18-20 16-20s16 9 16 20s-7.14 20-16 20"></svg:path>`,
})
export class PhFileDocFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedFillIcon],svg[ph-file-dotted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0ZM80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm-8 192H56v-32a8 8 0 0 0-16 0v32a16 16 0 0 0 16 16h16a8 8 0 0 0 0-16ZM213.6 82.3l-55.9-56h-.2l-.4-.4h-.2l-.4-.3c-.1-.1-.2-.1-.2-.2l-.5-.3h-.2l-.5-.3h-.1l-.7-.3H120a8 8 0 0 0 0 16h24V88a8 8 0 0 0 8 8h48v40a8 8 0 0 0 16 0V88a7.8 7.8 0 0 0-2.4-5.7ZM208 168a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8Zm-56 48h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFileDottedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileFillIcon],svg[ph-file-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlFillIcon],svg[ph-file-html-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 128h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v84a4 4 0 0 0 4 4m108-84l44 44h-44ZM68 160v48a8 8 0 0 1-16 0v-16H32v16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0v16h20v-16a8 8 0 0 1 16 0m56 0a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m72 0v48a8 8 0 0 1-16 0v-24l-9.6 12.8a8 8 0 0 1-12.8 0L148 184v24a8 8 0 0 1-16 0v-48a8 8 0 0 1 14.4-4.8l17.6 23.47l17.6-23.47A8 8 0 0 1 196 160m56 48a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h20a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileHtmlFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageFillIcon],svg[ph-file-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158.66 219.56A8 8 0 0 1 152 232H24a8 8 0 0 1-6.73-12.33l36-56a8 8 0 0 1 13.46 0l9.76 15.18l20.85-31.29a8 8 0 0 1 13.32 0ZM216 88v128a16 16 0 0 1-16 16h-8a8 8 0 0 1 0-16h8V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path>`,
})
export class PhFileImageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniFillIcon],svg[ph-file-ini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 152v55.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-55.73a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8m71.47-8a8.17 8.17 0 0 0-7.47 8.25V183l-25.31-35.4a8.26 8.26 0 0 0-8-3.48A8 8 0 0 0 72 152v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-31l25.49 35.69a8 8 0 0 0 10.38 2.31a8.23 8.23 0 0 0 4.13-7.25V152a8 8 0 0 0-8.53-8m40 0a8.17 8.17 0 0 0-7.47 8.25v55.46a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V152a8 8 0 0 0-8.53-8M216 88v135.75a8.15 8.15 0 0 1-6.81 8.16A8 8 0 0 1 200 224V124a4 4 0 0 0-4-4H44a4 4 0 0 1-4-4V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-20 0l-44-44v44Z"></svg:path>`,
})
export class PhFileIniFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgFillIcon],svg[ph-file-jpg-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm-32 100h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.13-11.92 28.59-27.15A28 28 0 0 0 120 144m-.35 40H112v-24h8a12 12 0 0 1 11.94 13.16A12.23 12.23 0 0 1 119.65 184M216 200.87a8 8 0 0 1-2.26 5.57A30 30 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86a8.21 8.21 0 0 1 3 10.64a8 8 0 0 1-11.55 2.88A13.2 13.2 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.63 13.63 0 0 0 8-2.71V192a8 8 0 0 1-8-8.53a8.17 8.17 0 0 1 8.25-7.47H208a8 8 0 0 1 8 8ZM80 152v37.41c0 14.22-11.18 26.26-25.41 26.58A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37a8 8 0 0 1 8.69 8.22a8.89 8.89 0 0 0 4 8c7.85 4.82 16-.75 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8"></svg:path>`,
})
export class PhFileJpgFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsFillIcon],svg[ph-file-js-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h120a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h28a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61.3 61.3 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.58 20.58 0 0 1 9-14.95c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57 4.57 0 0 0-2 3.67c-.11.9-.13 1.09 1.12 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.82 2.83 26.33 7.66 24.14 24.97M80 152v37.41c0 14.22-11.18 26.26-25.41 26.58A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37a8 8 0 0 1 8.69 8.22a8.89 8.89 0 0 0 4 8c7.85 4.82 16-.75 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8"></svg:path>`,
})
export class PhFileJsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxFillIcon],svg[ph-file-jsx-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.6 60.6 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 9-14.94c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.57 4.57 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.82 2.82 26.33 7.65 24.14 24.96M80 152v37.4c0 14.23-11.18 26.27-25.41 26.59A26 26 0 0 1 28 190.37a8.17 8.17 0 0 1 7.31-8.37a8 8 0 0 1 8.69 8.22a8.89 8.89 0 0 0 4 8c7.85 4.82 16-.76 16-8.2v-37.75a8.17 8.17 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8m134.51 4.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 13-9.3L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Z"></svg:path>`,
})
export class PhFileJsxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockFillIcon],svg[ph-file-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 176h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-24 0H72v-4a12 12 0 0 1 24 0Zm117.66-93.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-40a8 8 0 0 0 0 16h40a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path>`,
})
export class PhFileLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassFillIcon],svg[ph-file-magnifying-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 148a20 20 0 1 1-20-20a20 20 0 0 1 20 20m72-60v128a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-50.34 90.34l-11.2-11.19a36.05 36.05 0 1 0-11.31 11.31l11.19 11.2a8 8 0 0 0 11.32-11.32M196 88l-44-44v44Z"></svg:path>`,
})
export class PhFileMagnifyingGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdFillIcon],svg[ph-file-md-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h152a4 4 0 0 1 4 4v100a8 8 0 0 0 9.19 7.91a8.15 8.15 0 0 0 6.81-8.16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-8 56h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h15.32c19.66 0 36.21-15.48 36.67-35.13A36 36 0 0 0 144 144m-.49 56H136v-40h8a20 20 0 0 1 20 20.77c-.42 10.82-9.66 19.23-20.49 19.23M104 152v55.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-30.62l-13.32 19a8.3 8.3 0 0 1-4.2 3.2a8 8 0 0 1-9-3L48 177.38v30.35a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-55.69a8.27 8.27 0 0 1 4.56-7.53a8 8 0 0 1 10 2.63L68 178.05l21.27-30.39a8.28 8.28 0 0 1 8.06-3.55A8 8 0 0 1 104 152"></svg:path>`,
})
export class PhFileMdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusFillIcon],svg[ph-file-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 160h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-72V43.31L196.69 88Z"></svg:path>`,
})
export class PhFileMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfFillIcon],svg[ph-file-pdf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm72 108.53a8.18 8.18 0 0 1-8.25 7.47H192v16h15.73a8.17 8.17 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H192v15.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V152a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8.53M64 144H48a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 64 144m-.35 40H56v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 63.65 184M128 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h15.32c19.66 0 36.21-15.48 36.67-35.13A36 36 0 0 0 128 144m-.49 56H120v-40h8a20 20 0 0 1 20 20.77c-.42 10.82-9.66 19.23-20.49 19.23"></svg:path>`,
})
export class PhFilePdfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusFillIcon],svg[ph-file-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 160h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-72V43.31L196.69 88Z"></svg:path>`,
})
export class PhFilePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngFillIcon],svg[ph-file-png-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44ZM60 144H44a8 8 0 0 0-8 8v55.72a8.17 8.17 0 0 0 7.47 8.28a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 60 144m-.35 40H52v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 59.65 184M224 200.87a8 8 0 0 1-2.26 5.57A30.07 30.07 0 0 1 200 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86a8.21 8.21 0 0 1 3 10.64a8 8 0 0 1-11.55 2.88A13.2 13.2 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.57 13.57 0 0 0 8-2.72V192a8 8 0 0 1-8-8.53a8.17 8.17 0 0 1 8.25-7.47H216a8 8 0 0 1 8 8ZM156 152v55.76a8.22 8.22 0 0 1-4.12 7.24a8 8 0 0 1-10.39-2.35L116 177v30.76a8.17 8.17 0 0 1-7.47 8.26a8 8 0 0 1-8.53-8v-55.71a8.27 8.27 0 0 1 4.53-7.52a8 8 0 0 1 10 2.56L140 183v-30.73a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 156 152"></svg:path>`,
})
export class PhFilePngFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptFillIcon],svg[ph-file-ppt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152.53a8.17 8.17 0 0 1-8.25 7.47H204v47.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V160h-11.73a8.17 8.17 0 0 1-8.25-7.47a8 8 0 0 1 8-8.53h40a8 8 0 0 1 7.98 8.53M92 172.85C91.54 188.08 78.64 200 63.4 200H56v7.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28.85m-16-2A12.25 12.25 0 0 0 63.65 160H56v24h8a12 12 0 0 0 12-13.16Zm84 2c-.46 15.23-13.36 27.15-28.6 27.15H124v7.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V152a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28.85m-16-2A12.25 12.25 0 0 0 131.65 160H124v24h8a12 12 0 0 0 12-13.16ZM40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4m112-28h44l-44-44Z"></svg:path>`,
})
export class PhFilePptFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyFillIcon],svg[ph-file-py-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h128a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h20a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-88 56H48a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 64 144m-.35 40H56v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 63.65 184m91-27.48L136 186.29v21.44a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-21.69l-18.61-29.77a8.22 8.22 0 0 1 2.16-11.17a8 8 0 0 1 11.23 2.41L128 168.91l13.22-21.15a8 8 0 0 1 11.23-2.41a8.22 8.22 0 0 1 2.16 11.17Z"></svg:path>`,
})
export class PhFilePyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsFillIcon],svg[ph-file-rs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h128a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h20a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-88.58 56H48a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-8h8a28.5 28.5 0 0 0 5.73-.59L77.09 212a8 8 0 0 0 11.81 2.3a8.14 8.14 0 0 0 1.91-10.54l-7-12a27.92 27.92 0 0 0 8.19-20.4C91.65 156.05 78.74 144 63.42 144m.23 40H56v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 63.65 184m92.16 12.31a20.82 20.82 0 0 1-9.19 15.23C141.43 215 135 216 129.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97"></svg:path>`,
})
export class PhFileRsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchFillIcon],svg[ph-file-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.6 82.3l-55.9-56l-.3-.2l-.3-.3l-.3-.2l-.3-.2c-.1-.1-.2-.1-.2-.2l-.5-.3h-.2l-.5-.3h-.1l-.7-.3H56A16 16 0 0 0 40 40v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a7.8 7.8 0 0 0-2.4-5.7Zm-48.2 107.2a8 8 0 0 1-5.6 2.3a8.3 8.3 0 0 1-5.7-2.3l-10.9-11A36.8 36.8 0 0 1 124 184a36 36 0 1 1 36-36a35.8 35.8 0 0 1-5.5 19.2l10.9 10.9a8 8 0 0 1 0 11.4ZM152 88V43.3L196.7 88Z"></svg:path><svg:path fill="currentColor" d="M124 128a19.9 19.9 0 0 0-14.1 5.9a19.8 19.8 0 0 0 0 28.2a19.9 19.9 0 0 0 28.2 0a19.8 19.8 0 0 0 0-28.2A19.9 19.9 0 0 0 124 128Z"></svg:path>`,
})
export class PhFileSearchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlFillIcon],svg[ph-file-sql-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm76 164.53a8.18 8.18 0 0 1-8.25 7.47H192a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51M91.82 196.31a20.82 20.82 0 0 1-9.19 15.23C77.44 215 71 216 65.14 216A60.7 60.7 0 0 1 50 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.89-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.08 15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m71 3.23A39.05 39.05 0 0 0 168 180c0-19.85-14.35-36-32-36s-32 16.15-32 36s14.35 36 32 36a29.2 29.2 0 0 0 15.9-4.78l2.44 2.44a8 8 0 0 0 11.71-.43a8.18 8.18 0 0 0-.61-11.09ZM136 200c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20a24.4 24.4 0 0 1-1.18 7.51l-.93-.93a8.22 8.22 0 0 0-11.37-.41a8 8 0 0 0-.18 11.49l1.68 1.67a13 13 0 0 1-4.02.67"></svg:path>`,
})
export class PhFileSqlFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgFillIcon],svg[ph-file-svg-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM87.82 196.31a20.82 20.82 0 0 1-9.19 15.23C73.44 215 67 216 61.14 216A61.2 61.2 0 0 1 46 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.14 1.09 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m63.72-41.62l-19.9 55.72a8.25 8.25 0 0 1-6.5 5.51a8 8 0 0 1-8.67-5.23L96.59 155a8.21 8.21 0 0 1 4.5-10.45a8 8 0 0 1 10.45 4.76l12.46 34.9l12.46-34.9a8 8 0 0 1 15.07 5.38ZM216 184v16.87a8 8 0 0 1-2.26 5.57A30 30 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.36 29.36 0 0 1 16.09 4.86a8.22 8.22 0 0 1 3 10.64a8 8 0 0 1-11.54 2.88A13.27 13.27 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.38 13.38 0 0 0 8-2.71V192a8 8 0 0 1-8-8.53a8.18 8.18 0 0 1 8.26-7.47H208a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFileSvgFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextFillIcon],svg[ph-file-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 176H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m-8-56V44l44 44Z"></svg:path>`,
})
export class PhFileTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsFillIcon],svg[ph-file-ts-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h120a4 4 0 0 1 4 4v104a4 4 0 0 0 4 4h28a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-4.19 108.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M88 152.53a8.17 8.17 0 0 1-8.27 7.47H68v47.73a8.17 8.17 0 0 1-7.47 8.27a8 8 0 0 1-8.53-8v-48H40.27a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h40a8 8 0 0 1 8 8.53"></svg:path>`,
})
export class PhFileTsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxFillIcon],svg[ph-file-tsx-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm62.51 68.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46a8.19 8.19 0 0 1 10.88 2.38L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm-66.7 39.66a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.4 60.4 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 9-14.94c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.78 2.82 26.29 7.65 24.1 24.96M88 152.53a8.18 8.18 0 0 1-8.27 7.47H68v47.72a8.18 8.18 0 0 1-7.47 8.28a8 8 0 0 1-8.53-8v-48H40.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h40a8 8 0 0 1 8 8.53"></svg:path>`,
})
export class PhFileTsxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtFillIcon],svg[ph-file-txt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154.31 156.92L137.83 180l16.53 23.14a8.18 8.18 0 0 1-1.22 11a8 8 0 0 1-11.65-1.48L128 193.76l-13.49 18.89a8 8 0 0 1-11.64 1.49a8.17 8.17 0 0 1-1.23-11L118.17 180l-16.48-23.08a8.22 8.22 0 0 1 1.46-11.28a8 8 0 0 1 11.36 1.71L128 166.24l13.49-18.89a8 8 0 0 1 11.36-1.71a8.22 8.22 0 0 1 1.46 11.28M84 144H44.27a8.18 8.18 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h12v47.73a8.17 8.17 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-48h11.73a8.18 8.18 0 0 0 8.27-7.47a8 8 0 0 0-8-8.53m128 0h-39.73a8.18 8.18 0 0 0-8.25 7.47a8 8 0 0 0 8 8.53h12v47.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V160h11.73a8.18 8.18 0 0 0 8.25-7.47a8 8 0 0 0-8-8.53M40 116V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v28a4 4 0 0 1-4 4H44a4 4 0 0 1-4-4m112-28h44l-44-44Z"></svg:path>`,
})
export class PhFileTxtFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoFillIcon],svg[ph-file-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM155.88 145a8 8 0 0 0-8.12.22l-19.95 12.46A16 16 0 0 0 112 144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 15.81-13.68l19.95 12.46A8 8 0 0 0 160 216v-64a8 8 0 0 0-4.12-7M144 201.57l-16-10v-15.14l16-10Z"></svg:path>`,
})
export class PhFileVideoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueFillIcon],svg[ph-file-vue-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Zm-64.64 67l-19.89 55.69a8 8 0 0 1-15.08 0L32.5 155a8.21 8.21 0 0 1 4.5-10.45a8 8 0 0 1 10.46 4.76l12.47 34.9l12.47-34.9a8 8 0 0 1 10.46-4.76a8.22 8.22 0 0 1 4.5 10.45m96.64 5v12h15.73a8.19 8.19 0 0 1 8.26 7.47a8 8 0 0 1-8 8.53H184v12h23.73a8.18 8.18 0 0 1 8.26 7.47a8 8 0 0 1-8 8.53H176a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h31.74a8.18 8.18 0 0 1 8.26 7.47a8 8 0 0 1-8 8.53Zm-32-8v37.45c0 14.14-11.07 26.12-25.22 26.54A26 26 0 0 1 100 190v-37.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.54 8v37.65a10.23 10.23 0 0 0 9.26 10.33A10 10 0 0 0 136 190v-37.73a8.18 8.18 0 0 1 7.47-8.25A8 8 0 0 1 152 152"></svg:path>`,
})
export class PhFileVueFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXFillIcon],svg[ph-file-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-56 88a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 152ZM152 88V44l44 44Z"></svg:path>`,
})
export class PhFileXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsFillIcon],svg[ph-file-xls-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76l44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46a8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2a8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35c.89-.6 1.84-1.52 2.15-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.87 2.82 26.39 7.65 24.18 24.96"></svg:path>`,
})
export class PhFileXlsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipFillIcon],svg[ph-file-zip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5a8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"></svg:path>`,
})
export class PhFileZipFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesFillIcon],svg[ph-files-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 66.34l-40-40A8 8 0 0 0 168 24H88a16 16 0 0 0-16 16v16H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V72a8 8 0 0 0-2.34-5.66M136 192H88a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32H88a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m64 24h-16v-80a8 8 0 0 0-2.34-5.66l-40-40A8 8 0 0 0 136 56H88V40h76.69L200 75.31Z"></svg:path>`,
})
export class PhFilesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelFillIcon],svg[ph-film-reel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M80 148a20 20 0 1 1 20-20a20 20 0 0 1-20 20m48 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-96a20 20 0 1 1 20-20a20 20 0 0 1-20 20m28 28a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhFilmReelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptFillIcon],svg[ph-film-script-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M76 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhFilmScriptFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateFillIcon],svg[ph-film-slate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4a15.5 15.5 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8m-23.84-64l6 22.07L164.57 71l-28.13-16.28ZM77.55 70.27l28.12 16.24l-59.6 15.73l-6-22.08Z"></svg:path>`,
})
export class PhFilmSlateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripFillIcon],svg[ph-film-strip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 16h32v16h-32ZM72 200H40v-16h32Zm0-128H40V56h32Zm48 128H88v-16h32Zm0-128H88V56h32Zm48 128h-32v-16h32Zm0-128h-32V56h32Zm48 128h-32v-16h32z"></svg:path>`,
})
export class PhFilmStripFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintFillIcon],svg[ph-fingerprint-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.42 24C70.73 24.85 25.21 70.09 24 125.81a103.53 103.53 0 0 0 13.52 53.54a4 4 0 0 0 7.1-.3a119.35 119.35 0 0 0 11.37-51A71.77 71.77 0 0 1 83 71.83a8 8 0 1 1 9.86 12.61A55.82 55.82 0 0 0 72 128.07a135.3 135.3 0 0 1-18.45 68.35a4 4 0 0 0 .61 4.85c2 2 4.09 4 6.25 5.82a4 4 0 0 0 6-1A151.2 151.2 0 0 0 85 158.49a8 8 0 1 1 15.68 3.19a167.3 167.3 0 0 1-21.07 53.64a4 4 0 0 0 1.6 5.63c2.47 1.25 5 2.41 7.57 3.47a4 4 0 0 0 5-1.61A183 183 0 0 0 120 128.28a8.16 8.16 0 0 1 7.44-8.21a8 8 0 0 1 8.56 8a198.94 198.94 0 0 1-25.21 97.16a4 4 0 0 0 2.95 5.92q4.55.63 9.21.86a4 4 0 0 0 3.67-2.1A214.9 214.9 0 0 0 152 128.8c.05-13.25-10.3-24.49-23.54-24.74A24 24 0 0 0 104 128a8.1 8.1 0 0 1-7.29 8a8 8 0 0 1-8.71-8a40 40 0 0 1 40.42-40c22 .23 39.68 19.17 39.57 41.16a231.4 231.4 0 0 1-20.52 94.57a4 4 0 0 0 4.62 5.51a104 104 0 0 0 10.26-3a4 4 0 0 0 2.35-2.22a244 244 0 0 0 11.48-34a8 8 0 1 1 15.5 4q-1.12 4.37-2.4 8.7a4 4 0 0 0 6.46 4.17A104 104 0 0 0 126.42 24M198 161.08a8 8 0 0 1-7.92 7a8 8 0 0 1-1-.06a8 8 0 0 1-6.95-8.93a253 253 0 0 0 1.92-31a56.08 56.08 0 0 0-56-56a57 57 0 0 0-7 .43a8 8 0 0 1-2-15.89a72.1 72.1 0 0 1 81 71.49a267 267 0 0 1-2.05 32.96"></svg:path>`,
})
export class PhFingerprintFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleFillIcon],svg[ph-fingerprint-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126.41 24C70.72 24.85 25.21 70.07 24 125.75a103.5 103.5 0 0 0 13.51 53.5a4 4 0 0 0 7.1-.29A119.3 119.3 0 0 0 56 128a71.93 71.93 0 0 1 17.74-47.33a8.22 8.22 0 0 1 10.8-1.59A8 8 0 0 1 86 91a55.92 55.92 0 0 0-14 37a135.1 135.1 0 0 1-18.44 68.31a4 4 0 0 0 .61 4.85A104 104 0 0 0 67 212.21a4 4 0 0 0 5.82-1.21A159.6 159.6 0 0 0 84 189a8 8 0 1 1 14.8 6.1a177 177 0 0 1-11.85 23.54a4 4 0 0 0 1.89 5.74a103.5 103.5 0 0 0 25 6.7a4 4 0 0 0 4.07-2a206.9 206.9 0 0 0 25.57-85.61a8 8 0 1 1 15.95 1.16a222.8 222.8 0 0 1-21.58 80.75a4 4 0 0 0 4.08 5.74a103.7 103.7 0 0 0 20.6-4.95a4 4 0 0 0 2.35-2.23A247.3 247.3 0 0 0 184 129.76c.22-30.64-23.4-56.67-54-57.73a56.7 56.7 0 0 0-16 1.73a8 8 0 0 1-9.84-6.21a8.23 8.23 0 0 1 6.29-9.39A72.05 72.05 0 0 1 200 128a264.8 264.8 0 0 1-10.66 74.63a4 4 0 0 0 6.47 4.15A104 104 0 0 0 126.41 24M128 96a32.05 32.05 0 0 1 23.85 10.67a8 8 0 0 1-1.24 11.79a8.26 8.26 0 0 1-10.88-1.34a16 16 0 0 0-16.78-4.3a16.39 16.39 0 0 0-11 15.67a177 177 0 0 1-3.19 33A8 8 0 0 1 101 168a7.7 7.7 0 0 1-1.5-.14a8.3 8.3 0 0 1-6.31-9.66A161 161 0 0 0 96 128a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhFingerprintSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanFillIcon],svg[ph-finn-the-human-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 148a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-84-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m148-64v80a72.08 72.08 0 0 1-72 72H88a72.08 72.08 0 0 1-72-72V72a32 32 0 0 1 63-8h98a32 32 0 0 1 63 8m-40 72a32 32 0 0 0-32-32H88a32 32 0 0 0-32 32v8a32 32 0 0 0 32 32h80a32 32 0 0 0 32-32Z"></svg:path>`,
})
export class PhFinnTheHumanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherFillIcon],svg[ph-fire-extinguisher-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.3 48.34l-60.68-18.2l30-15a8 8 0 0 0-7.2-14.29L134 24.05a80.08 80.08 0 0 0-78 80V208a8 8 0 0 0 16 0v-32h16v56a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V104a48.07 48.07 0 0 0-40-47.32V42.75l69.7 20.91a8 8 0 1 0 4.6-15.32M72 160v-56a64.07 64.07 0 0 1 56-63.48v16.16A48.07 48.07 0 0 0 88 104v56Zm96-56v56h-64v-56a32 32 0 0 1 64 0"></svg:path>`,
})
export class PhFireExtinguisherFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireFillIcon],svg[ph-fire-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></svg:path>`,
})
export class PhFireFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleFillIcon],svg[ph-fire-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15"></svg:path>`,
})
export class PhFireSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckFillIcon],svg[ph-fire-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-16 0v64H24a8 8 0 0 0-8 8v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3M80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96V88h34.58l9.6 24ZM24 96a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16h-16V72h16a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16h16v24Zm72-24h24v24H96Zm-40 0h24v24H56Z"></svg:path>`,
})
export class PhFireTruckFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidFillIcon],svg[ph-first-aid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108v40a16 16 0 0 1-16 16h-52v52a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-52H40a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h52V40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v52h52a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFirstAidFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitFillIcon],svg[ph-first-aid-kit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16m-64 88h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m8-88H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhFirstAidKitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishFillIcon],svg[ph-fish-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m48.72 67.64c-19.37 34.9-55.44 53.76-107.24 56.1l-22 51.41A8 8 0 0 1 80.1 256h-.51a8 8 0 0 1-7.19-5.78l-14.8-51.83l-51.8-14.83a8 8 0 0 1-1-15.05l51.41-22c2.35-51.78 21.21-87.84 56.09-107.22c24.75-13.74 52.74-15.84 71.88-15.18c18.64.64 36 4.27 38.86 6a8 8 0 0 1 2.83 2.83c1.69 2.85 5.33 20.21 6 38.85c.68 19.1-1.41 47.1-15.15 71.85m-4.3-100.07c-14.15-3-64.1-11-100.3 14.75a81.2 81.2 0 0 0-16 15.07a36 36 0 0 0 39.35 38.44a8 8 0 0 1 8.73 8.73a36 36 0 0 0 38.47 39.34a80.8 80.8 0 0 0 15-16c25.75-36.17 17.75-86.16 14.75-100.33"></svg:path>`,
})
export class PhFishFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleFillIcon],svg[ph-fish-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m42 79.08c-15.08 20.84-37.53 34.88-66.7 41.74c-20.08 4.72-43.54 6-70.12 3.93q2.4 17.82 6.72 37.54a8 8 0 0 1-6.1 9.52a7.8 7.8 0 0 1-1.72.19a8 8 0 0 1-7.81-6.29q-4.89-22.36-7.41-42.62q-20.22-2.51-42.58-7.41a8 8 0 0 1 3.43-15.63q19.7 4.32 37.5 6.73c-2.09-26.56-.78-50 3.93-70.06C66 83.55 80.05 61.1 100.88 46c14.12-10.24 39.26-22.36 78.39-22c21.19.21 40.83 4.33 43.81 6.08a8 8 0 0 1 2.83 2.83c1.75 3 5.87 22.59 6.08 43.78c.22 21.62-3.42 52.75-21.99 78.39m2.43-111.52a175.8 175.8 0 0 0-39.22-3.51c-24.34.64-44.71 6.49-60.76 17.39a96 96 0 0 0 86.09 86.1c10.91-16 16.76-36.42 17.4-60.76a175.8 175.8 0 0 0-3.5-39.22Z"></svg:path>`,
})
export class PhFishSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFillIcon],svg[ph-flag-banner-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.22 59.44l-45.63 95.82a4 4 0 0 1-.16.34l-34.21 71.84a8 8 0 1 1-14.44-6.88L173.62 160H40a8 8 0 0 1-5.66-13.66L76.69 104L34.34 61.66A8 8 0 0 1 40 48h192a8 8 0 0 1 7.22 11.44"></svg:path>`,
})
export class PhFlagBannerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldFillIcon],svg[ph-flag-banner-fold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m131.79 69.65l-43.63 96a4 4 0 0 1-3.64 2.35H28.23a8.2 8.2 0 0 1-6.58-3.13a8 8 0 0 1 .43-10.25L57.19 116L22.08 77.38a8 8 0 0 1-.43-10.26A8.22 8.22 0 0 1 28.23 64h99.92a4 4 0 0 1 3.64 5.65m105.77-27.41a8.3 8.3 0 0 0-5.79-2.24H168a8 8 0 0 0-7.28 4.69l-42.57 93.65a4 4 0 0 0 3.64 5.66h57.79l-34.86 76.69a8 8 0 1 0 14.56 6.62l80-176a8 8 0 0 0-1.72-9.07"></svg:path>`,
})
export class PhFlagBannerFoldFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredFillIcon],svg[ph-flag-checkered-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.32 48.75a8 8 0 0 0-8.56 1.25c-28 24.22-51.72 12.48-79.21-1.13C111.07 34.76 78.78 18.79 42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c16.4 8.11 34.06 16.85 53 16.85c13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V56a8 8 0 0 0-4.71-7.25M56 160.44v-50.56c16.85-11.28 32.64-11.59 48-7.34v51.74c-15.13-3.81-31.13-3.57-48 6.16m48-109.57c9.25 2.83 18.61 7.45 28.45 12.32c11.26 5.57 23.11 11.43 35.55 14.56v51.74c15.35 4.25 31.14 3.94 48-7.35v50.11c-16.87 13.32-32.27 13.72-48 8.91v-51.67c-21.62-6-42.38-21-64-26.95Z"></svg:path>`,
})
export class PhFlagCheckeredFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagFillIcon],svg[ph-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56v120a8 8 0 0 1-2.76 6c-15.28 13.23-29.89 18-43.82 18c-18.91 0-36.57-8.74-53-16.85C105.87 170 82.79 158.61 56 179.77V224a8 8 0 0 1-16 0V56a8 8 0 0 1 2.77-6c36-31.18 68.31-15.21 96.79-1.12C167 62.46 190.79 74.2 218.76 50A8 8 0 0 1 232 56"></svg:path>`,
})
export class PhFlagFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantFillIcon],svg[ph-flag-pennant-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 104a8 8 0 0 1-5.37 7.56L64 173.69V216a8 8 0 0 1-16 0V40a8 8 0 0 1 10.63-7.56l184 64A8 8 0 0 1 248 104"></svg:path>`,
})
export class PhFlagPennantFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameFillIcon],svg[ph-flame-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.79 51.48a221.3 221.3 0 0 0-41.67-34.34a8 8 0 0 0-8.24 0a221.3 221.3 0 0 0-41.67 34.34C54.59 80.48 40 112.47 40 144a88 88 0 0 0 176 0c0-31.53-14.59-63.52-42.21-92.52M96 184c0-27.67 22.53-47.28 32-54.3c9.48 7 32 26.63 32 54.3a32 32 0 0 1-64 0"></svg:path>`,
})
export class PhFlameFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightFillIcon],svg[ph-flashlight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16m-48 136a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0ZM72 56V32h112v24Z"></svg:path>`,
})
export class PhFlashlightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskFillIcon],svg[ph-flask-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.69 199.77L160 96.92V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v56.92L34.31 199.77A16 16 0 0 0 48 224h160a16 16 0 0 0 13.72-24.23Zm-90.08-42.91c-15.91-8.05-31.05-12.32-45.22-12.81l24.47-40.8a7.93 7.93 0 0 0 1.14-4.11V40h32v59.14a7.93 7.93 0 0 0 1.14 4.11L183.36 167c-11.96 2.34-29.07 1.34-51.75-10.14"></svg:path>`,
})
export class PhFlaskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalFillIcon],svg[ph-flip-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 40v160a16 16 0 0 1-16 16H40a16 16 0 0 1-14.78-22.15l64-159.93l.06-.14A16 16 0 0 1 120 40m109.33 168.84A16 16 0 0 1 216 216h-64a16 16 0 0 1-16-16V40a16 16 0 0 1 30.74-6.23l.06.14l64 159.93a16 16 0 0 1-1.47 15M216 200l-.06-.15L152 40v160Z"></svg:path>`,
})
export class PhFlipHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalFillIcon],svg[ph-flip-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 120h160a16 16 0 0 0 6.23-30.74l-.14-.06l-159.93-64A16 16 0 0 0 40 40v64a16 16 0 0 0 16 16m0-80l.15.06L216 104H56zm175.67 108.82a15.85 15.85 0 0 1-9.45 17.92l-.14.06l-159.93 64A16 16 0 0 1 40 216v-64a16 16 0 0 1 16-16h160a15.85 15.85 0 0 1 15.67 12.82"></svg:path>`,
})
export class PhFlipVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackFillIcon],svg[ph-floppy-disk-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m44-104a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V48h88Z"></svg:path>`,
})
export class PhFloppyDiskBackFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskFillIcon],svg[ph-floppy-disk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.31 72L184 36.69A15.86 15.86 0 0 0 172.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V83.31A15.86 15.86 0 0 0 219.31 72M208 208h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h124.69L208 83.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFloppyDiskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowFillIcon],svg[ph-flow-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 85.66l-32 32a8 8 0 0 1-11.32-11.32L220.69 88H208c-38.67 0-46.59 19-56.62 43.08C141.05 155.88 129.33 184 80 184h-1a32 32 0 1 1 0-16h1c38.67 0 46.59-19 56.62-43.08C147 100.12 158.67 72 208 72h12.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhFlowArrowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerFillIcon],svg[ph-flower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.35 129.36c-.81-.47-1.7-.92-2.62-1.36c.92-.44 1.81-.89 2.62-1.36a40 40 0 1 0-40-69.28c-.81.47-1.65 1-2.48 1.59c.08-1 .13-2 .13-3a40 40 0 0 0-80 0c0 .94 0 1.94.13 3c-.83-.57-1.67-1.12-2.48-1.59a40 40 0 1 0-40 69.28c.81.47 1.7.92 2.62 1.36c-.92.44-1.81.89-2.62 1.36a40 40 0 1 0 40 69.28c.81-.47 1.65-1 2.48-1.59c-.08 1-.13 2-.13 2.95a40 40 0 0 0 80 0c0-.94-.05-1.94-.13-2.95c.83.57 1.67 1.12 2.48 1.59a39.8 39.8 0 0 0 19.94 5.36a40.4 40.4 0 0 0 10.42-1.38a40 40 0 0 0 9.64-73.28ZM128 156a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFlowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusFillIcon],svg[ph-flower-lotus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.83 121.63a15.53 15.53 0 0 0-9.52-7.33a73.6 73.6 0 0 0-22.17-2.22c4-19.85 1-35.55-2-44.86a16.17 16.17 0 0 0-18.8-10.88a85.5 85.5 0 0 0-28.55 12.12a94.6 94.6 0 0 0-27.11-33.25a16.05 16.05 0 0 0-19.26 0a94.6 94.6 0 0 0-27.16 33.25a85.5 85.5 0 0 0-28.55-12.12a16.14 16.14 0 0 0-18.79 10.88c-3 9.31-6 25-2.06 44.86a73.6 73.6 0 0 0-22.17 2.22a15.53 15.53 0 0 0-9.52 7.33a16 16 0 0 0-1.6 12.26c3.39 12.58 13.8 36.49 45.33 55.33S113.13 208 128.05 208s42.67 0 74-18.78c31.53-18.84 41.94-42.75 45.33-55.33a16 16 0 0 0-1.55-12.26M62.1 175.49C35.47 159.57 26.82 140.05 24 129.7a59.6 59.6 0 0 1 22.5-1.17a129 129 0 0 0 9.15 19.41a142.3 142.3 0 0 0 34 39.56a115 115 0 0 1-27.55-12.01M128 190.4c-9.33-6.94-32-28.23-32-71.23C96 76.7 118.38 55.24 128 48c9.62 7.26 32 28.72 32 71.19c0 42.98-22.67 64.27-32 71.21m104-60.68c-2.77 10.24-11.4 29.81-38.09 45.77a115 115 0 0 1-27.55 12a142.3 142.3 0 0 0 34-39.56a129 129 0 0 0 9.15-19.41a59.7 59.7 0 0 1 22.49 1.19Z"></svg:path>`,
})
export class PhFlowerLotusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipFillIcon],svg[ph-flower-tulip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48a87.5 87.5 0 0 0-35.36 7.43c-15.1-25.37-39.92-38-41.06-38.59a8 8 0 0 0-7.16 0c-1.14.58-26 13.22-41.06 38.59A87.5 87.5 0 0 0 48 48a8 8 0 0 0-8 8v40a88.11 88.11 0 0 0 80 87.63v35.43l-36.42-18.22a8 8 0 1 0-7.16 14.32l48 24a8 8 0 0 0 7.16 0l48-24a8 8 0 0 0-7.16-14.32L136 219.06v-35.43A88.11 88.11 0 0 0 216 96V56a8 8 0 0 0-8-8M56 96V64.44A72.1 72.1 0 0 1 120 136v31.56A72.1 72.1 0 0 1 56 96m144 0a72.1 72.1 0 0 1-64 71.56V136a72.1 72.1 0 0 1 64-71.56Z"></svg:path>`,
})
export class PhFlowerTulipFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerFillIcon],svg[ph-flying-saucer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.59 213.47a8 8 0 0 1-15.18 5.06l-8-24a8 8 0 0 1 15.18-5.06ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-37.47.41a8 8 0 0 0-10.12 5.06l-8 24a8 8 0 0 0 15.18 5.06l8-24a8 8 0 0 0-5.06-10.12M248 112c0 16.22-13.37 30.89-37.65 41.29C188.22 162.78 159 168 128 168s-60.22-5.22-82.35-14.71C21.37 142.89 8 128.22 8 112c0-8.37 3.67-20.79 21.17-32.5c11.37-7.61 26.94-13.76 45.18-17.85A63.64 63.64 0 0 1 173 50.45a64.8 64.8 0 0 1 9.11 11.3C223.43 71.09 248 89.74 248 112m-72-16a47.66 47.66 0 0 0-6.06-23.35l-.06-.09A48.07 48.07 0 0 0 127.36 48C101.25 48.34 80 70.25 80 96.83v3a7.92 7.92 0 0 0 6.13 7.76A188.2 188.2 0 0 0 128 112a188 188 0 0 0 41.85-4.37a7.93 7.93 0 0 0 6.15-7.76Z"></svg:path>`,
})
export class PhFlyingSaucerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedFillIcon],svg[ph-folder-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8m64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M32 88h96a8 8 0 0 0 5.66-13.66L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8m0 72a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhFolderDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedFillIcon],svg[ph-folder-dotted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.4A15.4 15.4 0 0 1 24 200.6V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8ZM32 88h96a8 8 0 0 0 7.4-4.9a8.4 8.4 0 0 0-1.7-8.8L104 44.7A15.9 15.9 0 0 0 92.7 40H40a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8Zm0 72a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm184-88h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16Zm8 72a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-64 56h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFolderDottedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderFillIcon],svg[ph-folder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Z"></svg:path>`,
})
export class PhFolderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockFillIcon],svg[ph-folder-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M40 72V56h52.69l16 16Zm184 88h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-24 0h-24v-4a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhFolderLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusFillIcon],svg[ph-folder-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm112 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchFillIcon],svg[ph-folder-notch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.34l21.33 16l-21.34 16H40Z"></svg:path>`,
})
export class PhFolderNotchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusFillIcon],svg[ph-folder-notch-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 96V64h53.34l21.33 16l-21.34 16Zm112 64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderNotchMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenFillIcon],svg[ph-folder-notch-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l27.73 20.8a16.12 16.12 0 0 0 9.6 3.2H200v16h-53.57a16 16 0 0 0-8.88 2.69l-20 13.31H69.42a15.94 15.94 0 0 0-14.86 10.06L40 166.46V64Z"></svg:path>`,
})
export class PhFolderNotchOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusFillIcon],svg[ph-folder-notch-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 96V64h53.34l21.33 16l-21.34 16Zm112 64h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderNotchPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenFillIcon],svg[ph-folder-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Z"></svg:path>`,
})
export class PhFolderOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusFillIcon],svg[ph-folder-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm112 96h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedFillIcon],svg[ph-folder-simple-dashed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 80V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2l29.87 22.4A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8m64 120H40v-8a8 8 0 0 0-16 0v8.62A15.4 15.4 0 0 0 39.38 216H88a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhFolderSimpleDashedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedFillIcon],svg[ph-folder-simple-dotted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 152v-32a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm8-64a8 8 0 0 0 8-8V64h53.3l29.9 22.4A7.7 7.7 0 0 0 128 88a8 8 0 0 0 4.8-14.4l-29.9-22.4a15.6 15.6 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v16a8 8 0 0 0 8 8Zm56 112H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16ZM216 72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16Zm-56 128h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Z"></svg:path>`,
})
export class PhFolderSimpleDottedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleFillIcon],svg[ph-folder-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 88v112.89A15.13 15.13 0 0 1 216.89 216H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFolderSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockFillIcon],svg[ph-folder-simple-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-24 0h-24v-4a12 12 0 0 1 24 0Zm32-72v16a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h72a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhFolderSimpleLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusFillIcon],svg[ph-folder-simple-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m-64 80h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderSimpleMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusFillIcon],svg[ph-folder-simple-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m-64 80h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFolderSimplePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarFillIcon],svg[ph-folder-simple-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 208a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88h-88a8 8 0 0 1-4.8-1.6L93.33 64H40v136h80a8 8 0 0 1 8 8m111.63-48.8a8 8 0 0 0-7-5.56l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.51 18.59l-6.85 27.71a8 8 0 0 0 11.82 8.81l25.6-15.07l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.85-27.71l22.51-18.59a8 8 0 0 0 2.54-8.58"></svg:path>`,
})
export class PhFolderSimpleStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserFillIcon],svg[ph-folder-simple-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.73 221.94A8 8 0 0 1 224 232h-64a8 8 0 0 1-7.73-10a40 40 0 0 1 17.11-23.33a32 32 0 1 1 45.24 0a40 40 0 0 1 17.11 23.27M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h80a8 8 0 0 0 0-16H40V64h53.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H216v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhFolderSimpleUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarFillIcon],svg[ph-folder-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.09 167.78l-22.51 18.59l6.85 27.71a8 8 0 0 1-11.82 8.81L184 207.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14M128.56 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69L131.31 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88H40v112h80.56a8 8 0 0 1 8 8M40 72h68.69l-16-16H40Z"></svg:path>`,
})
export class PhFolderStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserFillIcon],svg[ph-folder-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.73 221.94A8 8 0 0 1 224 232h-64a8 8 0 0 1-7.73-10a40 40 0 0 1 17.11-23.33a32 32 0 1 1 45.24 0a40 40 0 0 1 17.11 23.27M232 88v32a8 8 0 0 1-16 0V88H40v112h80.56a8 8 0 0 1 0 16H39.38A15.4 15.4 0 0 1 24 200.62V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69L131.31 72H216a16 16 0 0 1 16 16M108.69 72l-16-16H40v16Z"></svg:path>`,
})
export class PhFolderUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersFillIcon],svg[ph-folders-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m0 104h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"></svg:path>`,
})
export class PhFoldersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballFillIcon],svg[ph-football-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.06 53.89a32.92 32.92 0 0 0-26.95-26.95c-32.38-5.49-93.39-8-138.27 36.9s-42.39 105.9-36.9 138.27a32.92 32.92 0 0 0 27 26.95A206.6 206.6 0 0 0 88.27 232c32.09 0 72.05-8 103.89-39.84c44.89-44.88 42.39-105.9 36.9-138.27M56.56 213.3a16.94 16.94 0 0 1-13.86-13.86a180.3 180.3 0 0 1-2.11-46.9l62.87 62.87a180.3 180.3 0 0 1-46.9-2.11m109.08-111.63L151.3 116l6.34 6.34a8 8 0 1 1-11.31 11.3l-6.33-6.33L127.31 140l6.34 6.34a8 8 0 1 1-11.3 11.31L116 151.3l-14.34 14.34a8 8 0 1 1-11.31-11.31L104.7 140l-6.34-6.34a8 8 0 0 1 11.31-11.3l6.34 6.34l12.68-12.7l-6.34-6.34a8 8 0 0 1 11.3-11.31l6.35 6.35l14.34-14.34a8 8 0 1 1 11.31 11.31Zm49.77 1.79l-62.87-62.87c4.76-.44 9.72-.69 14.91-.69a192 192 0 0 1 32 2.8a16.94 16.94 0 0 1 13.85 13.86a180.3 180.3 0 0 1 2.11 46.9"></svg:path>`,
})
export class PhFootballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetFillIcon],svg[ph-football-helmet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 160h-50.2l-7.09-24H216a8 8 0 0 0 8-8v-4A100 100 0 0 0 122.58 24C68.24 24.77 24 69.61 24 124a100 100 0 0 0 43.62 82.6a8 8 0 0 0 4.52 1.4H120a16 16 0 0 0 15.62-19.47a5 5 0 0 0-.15-.54l-3.56-12h21.93l10.79 36.53A16.1 16.1 0 0 0 180 224h36a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M84 176a12 12 0 1 1 12-12a12 12 0 0 1-12 12m43.16-16L120 136h22l7.09 24ZM216 208h-36l-9.46-32H216Z"></svg:path>`,
})
export class PhFootballHelmetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsFillIcon],svg[ph-footprints-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.06 192v12a36 36 0 0 1-72.06 0v-12a8 8 0 0 1 8-8h56a8 8 0 0 1 8.06 8M104 160H48a8 8 0 0 0-8 8v12a36 36 0 0 0 72 0v-12a8 8 0 0 0-8-8M76 16c-11.64 0-22.93 10.31-31.8 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.2 2.93h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C98.85 26.31 87.57 16 76 16m78.8 152h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C202.93 50.31 191.64 40 180 40s-22.89 10.31-31.77 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.24 3Z"></svg:path>`,
})
export class PhFootprintsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeFillIcon],svg[ph-fork-knife-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8a268.8 268.8 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40m-96.11-1.31a8 8 0 1 0-15.78 2.63L111.89 88H88V40a8 8 0 0 0-16 0v48H48.11l7.78-46.68a8 8 0 1 0-15.78-2.63l-8 48A8 8 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8 8 0 0 0-.11-1.31Z"></svg:path>`,
})
export class PhForkKnifeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKFillIcon],svg[ph-four-k-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.55 136L96 113v23ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-108 88a8 8 0 0 0-8-8h-4V88a8 8 0 0 0-14.51-4.65l-40 56A8 8 0 0 0 64 152h32v16a8 8 0 0 0 16 0v-16h4a8 8 0 0 0 8-8m49.59-22.23l24.48-28.56a8 8 0 0 0-12.14-10.42L157.8 115.6l-5.8 6.77V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-21l10.62-12.39l22.52 37.55a8 8 0 1 0 13.72-8.24Z"></svg:path>`,
})
export class PhFourKFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersFillIcon],svg[ph-frame-corners-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 192H56a8 8 0 0 1-8-8v-32a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16m120-88a8 8 0 0 1-16 0V80h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhFrameCornersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoFillIcon],svg[ph-framer-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 112h-51l56.27 50a8 8 0 0 1-5.27 14h-64v64a8 8 0 0 1-13.66 5.66l-72-72A8 8 0 0 1 48 168v-64a8 8 0 0 1 8-8h51L50.69 46A8 8 0 0 1 56 32h144a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhFramerLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionFillIcon],svg[ph-function-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 40h-16.08a16 16 0 0 0-15.73 13l-6.55 35H168a8 8 0 0 1 0 16h-33.36l-7.11 37.9A32 32 0 0 1 96.08 200H80a8 8 0 0 1 0-16h16.08a16 16 0 0 0 15.73-13l6.55-35H88a8 8 0 0 1 0-16h33.36l7.11-37.9A32 32 0 0 1 159.92 56H176a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunctionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelFillIcon],svg[ph-funnel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.81 66.76l-.08.09L160 139.17v55.49a16 16 0 0 1-7.13 13.34l-32 21.34A16 16 0 0 1 96 216v-76.83L28.27 66.85l-.08-.09A16 16 0 0 1 40 40h176a16 16 0 0 1 11.84 26.76Z"></svg:path>`,
})
export class PhFunnelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleFillIcon],svg[ph-funnel-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-72 136h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m32-40H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m32-40H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunnelSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXFillIcon],svg[ph-funnel-simple-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 128a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m56 48h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m69.66 10.34a8 8 0 0 1-11.32 11.32L176 187.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L164.69 176l-10.35-10.34a8 8 0 0 1 11.32-11.32L176 164.69l10.34-10.35a8 8 0 0 1 11.32 11.32L187.31 176ZM208 96H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunnelSimpleXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXFillIcon],svg[ph-funnel-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.73 66.85L160 139.17v55.49a16 16 0 0 1-7.13 13.34l-32 21.34A16 16 0 0 1 96 216v-76.83L28.27 66.85l-.08-.09A16 16 0 0 1 40 40h176a16 16 0 0 1 11.84 26.76ZM227.31 192l18.35-18.34a8 8 0 0 0-11.32-11.32L216 180.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L204.69 192l-18.35 18.34a8 8 0 0 0 11.32 11.32L216 203.31l18.34 18.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhFunnelXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerFillIcon],svg[ph-game-controller-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.44 173.75a.7.7 0 0 0 0-.14l-16.39-84.17v-.18A60.08 60.08 0 0 0 172 40H83.89a59.88 59.88 0 0 0-59 49.52L8.58 173.61a.7.7 0 0 0 0 .14a36 36 0 0 0 60.9 31.71l.35-.37L109.52 160h37l39.71 45.09c.11.13.23.25.35.37A36.08 36.08 0 0 0 212 216a36 36 0 0 0 35.43-42.25ZM104 112h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16m40-8a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8m84.37 87.47a19.84 19.84 0 0 1-12.9 8.23a20.09 20.09 0 0 1-17.47-5.39L167.8 160h4.2a60 60 0 0 0 51-28.38l8.74 45a19.82 19.82 0 0 1-3.37 14.85"></svg:path>`,
})
export class PhGameControllerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageFillIcon],svg[ph-garage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-104-64h56v24h-56Zm-16 24H64v-24h56Zm-56 16h56v24H64Zm72 0h56v24h-56Z"></svg:path>`,
})
export class PhGarageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanFillIcon],svg[ph-gas-can-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24h-76.69A15.86 15.86 0 0 0 112 28.69L101.66 39L91.31 28.69a16 16 0 0 0-22.62 0l-24 24a16 16 0 0 0 0 22.62L55 85.66L44.69 96A15.86 15.86 0 0 0 40 107.31V216a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M56 64l24-24l10.34 10.34l-24 24Zm124.8 121.6a8 8 0 1 1-9.6 12.8L128 166l-43.2 32.4a8 8 0 0 1-9.6-12.8l39.47-29.6l-39.47-29.6a8 8 0 0 1 9.6-12.8L128 146l43.2-32.4a8 8 0 0 1 9.6 12.8L141.33 156ZM176 72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhGasCanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpFillIcon],svg[ph-gas-pump-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241 69.66l-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97M144 120H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhGasPumpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeFillIcon],svg[ph-gauge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 152v24a16 16 0 0 1-16 16H115.93a4 4 0 0 1-3.24-6.35L174.27 101a8.21 8.21 0 0 0-1.37-11.3a8 8 0 0 0-11.37 1.61l-72 99.06a4 4 0 0 1-3.28 1.63H32a16 16 0 0 1-16-16v-22.87c0-1.79 0-3.57.13-5.33a4 4 0 0 1 4-3.8H48a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47H23.92a4 4 0 0 1-3.87-5c12-43.84 49.66-77.13 95.52-82.28a4 4 0 0 1 4.43 4V72a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.27V44.67a4 4 0 0 1 4.43-4a112.18 112.18 0 0 1 95.8 82.33a4 4 0 0 1-3.88 5h-24.08a8.17 8.17 0 0 0-8.25 7.47a8 8 0 0 0 8 8.53h27.92a4 4 0 0 1 4 3.86c.06 1.37.06 2.75.06 4.14"></svg:path>`,
})
export class PhGaugeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelFillIcon],svg[ph-gavel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.69 99.31a16 16 0 0 1 0-22.63l64-64a16 16 0 0 1 22.63 22.63l-64 64a16 16 0 0 1-22.63 0m190.63 17.37a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63m-35.11-15.8l-53.09-53.09a4 4 0 0 0-5.66 0L87.8 109.45a4 4 0 0 0 0 5.66l15.2 15.23l-74.31 74.35a16 16 0 0 0 22.62 22.62L125.66 153l15.23 15.23a4 4 0 0 0 5.66 0l61.66-61.66a4 4 0 0 0 0-5.69"></svg:path>`,
})
export class PhGavelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFillIcon],svg[ph-gear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 130.16q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.6 107.6 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.3 107.3 0 0 0-26.25-10.86a8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.7 107.7 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.6 107.6 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.7 107.7 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.2 107.2 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.7 107.7 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06ZM128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhGearFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineFillIcon],svg[ph-gear-fine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-8.34a95.1 95.1 0 0 0-8.82-32.9l7.23-4.17a8 8 0 0 0-8-13.86l-7.25 4.19a97 97 0 0 0-24.08-24.08l4.19-7.25a8 8 0 0 0-13.86-8l-4.17 7.23a95.1 95.1 0 0 0-32.9-8.82V24a8 8 0 0 0-16 0v8.34a95.1 95.1 0 0 0-32.9 8.82l-4.17-7.23a8 8 0 0 0-13.86 8l4.19 7.25a97 97 0 0 0-24.08 24.08l-7.25-4.19a8 8 0 0 0-8 13.86l7.23 4.17a95.1 95.1 0 0 0-8.82 32.9H24a8 8 0 0 0 0 16h8.34a95.1 95.1 0 0 0 8.82 32.9l-7.23 4.17a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l7.25-4.19a97 97 0 0 0 24.08 24.08l-4.19 7.25a8 8 0 0 0 13.86 8l4.17-7.23a95.1 95.1 0 0 0 32.9 8.82V232a8 8 0 0 0 16 0v-8.34a95.1 95.1 0 0 0 32.9-8.82l4.17 7.23a8 8 0 0 0 13.86-8l-4.19-7.25a97 97 0 0 0 24.08-24.08l7.25 4.19A8 8 0 0 0 225 184a8 8 0 0 0-2.92-10.93l-7.23-4.17a95.1 95.1 0 0 0 8.82-32.9H232a8 8 0 0 0 0-16m-160 8a55.91 55.91 0 0 1 21.38-44l25.38 44l-25.38 44A55.91 55.91 0 0 1 72 128m56 56a55.7 55.7 0 0 1-20.78-4l25.4-44h50.8A56.09 56.09 0 0 1 128 184m4.62-64l-25.4-44a56 56 0 0 1 76.2 44Z"></svg:path>`,
})
export class PhGearFineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixFillIcon],svg[ph-gear-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.94 107.21a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.9 111.9 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhGearSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleFillIcon],svg[ph-gender-female-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 144a40 40 0 1 1 40-40a40 40 0 0 1-40 40m88-104v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-80 136v-16.58a56 56 0 1 0-16 0V176H96a8 8 0 0 0 0 16h24v16a8 8 0 0 0 16 0v-16h24a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhGenderFemaleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexFillIcon],svg[ph-gender-intersex-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.91 113.72a28 28 0 1 1-25.63-25.63a28 28 0 0 1 25.63 25.63M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-28 16a8 8 0 0 0-8-8h-27.73a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h8.69l-15.77 15.77A44 44 0 1 0 112 159.26V176H92.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h20v15.73a8.18 8.18 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V192h19.73a8.17 8.17 0 0 0 8.25-7.47a8 8 0 0 0-8-8.53H128v-16.74a44 44 0 0 0 28.24-68.18L172 75.31v8.42a8.18 8.18 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8Z"></svg:path>`,
})
export class PhGenderIntersexFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleFillIcon],svg[ph-gender-male-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 140a36 36 0 1 1-36-36a36 36 0 0 1 36 36m64-100v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-24 32a8 8 0 0 0-8-8h-32a8 8 0 0 0 0 16h12.69l-18 18A52.08 52.08 0 1 0 158 109.35l18-18V104a8 8 0 0 0 16 0Z"></svg:path>`,
})
export class PhGenderMaleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterFillIcon],svg[ph-gender-neuter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.84 108.35a40 40 0 1 1-36.19-36.19a40 40 0 0 1 36.19 36.19M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-32 72a56 56 0 1 0-64 55.42v32.31a8.18 8.18 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8v-32.56A56.09 56.09 0 0 0 184 112"></svg:path>`,
})
export class PhGenderNeuterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryFillIcon],svg[ph-gender-nonbinary-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 184a52 52 0 0 1-8-103.38v-20.8L91 95.43a8 8 0 0 1-6-14.86L106.46 72L85 63.43a8 8 0 0 1 6-14.86l37 14.81l37-14.81a8 8 0 1 1 6 14.86L149.54 72L171 80.57a8 8 0 0 1-6 14.86l-29-11.61v20.8A52 52 0 0 1 128 208m36-52a36 36 0 1 1-36-36a36 36 0 0 1 36 36"></svg:path>`,
})
export class PhGenderNonbinaryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderFillIcon],svg[ph-gender-transgender-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.92 150a24 24 0 1 1-22-22a24 24 0 0 1 22 22M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-24 32a8 8 0 0 0-8-8h-27.73a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h8.69L148 96.69l-10.34-10.35a8 8 0 0 0-11.49.18a8.22 8.22 0 0 0 .41 11.37L136.69 108L126 118.64A40 40 0 1 0 137.36 130L148 119.31l10.34 10.35a8 8 0 0 0 11.71-.43a8.2 8.2 0 0 0-.6-11.1L159.31 108L176 91.31v8.42a8.18 8.18 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8Z"></svg:path>`,
})
export class PhGenderTransgenderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostFillIcon],svg[ph-ghost-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a96.11 96.11 0 0 0-96 96v96a8 8 0 0 0 13.07 6.19l24.26-19.85l24.27 19.85a8 8 0 0 0 10.13 0L128 202.34l24.27 19.85a8 8 0 0 0 10.13 0l24.27-19.85l24.26 19.85A8 8 0 0 0 224 216v-96a96.11 96.11 0 0 0-96-96m-28 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGhostFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifFillIcon],svg[ph-gif-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 144a32 32 0 0 1-64 0v-32a32 32 0 0 1 55.85-21.33a8 8 0 1 1-11.92 10.66A16 16 0 0 0 64 112v32a16 16 0 0 0 32 0v-8h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm32 24a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm60-72h-28v24h20a8 8 0 0 1 0 16h-20v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h36a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhGifFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftFillIcon],svg[ph-gift-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a55 55 0 0 0-9 14.48a55 55 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h60a4 4 0 0 0 4-4v-92H40V88h80v32h16V88h80v32h-80v92a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M84.51 59a13.7 13.7 0 0 1-4.5-10a16.62 16.62 0 0 1 16.58-17h.49a13.7 13.7 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92C109.71 70.39 94 67.43 84.51 59m87 0c-9.49 8.4-25.24 11.36-35 12.4C137.7 60.89 141 45.5 149 36.51a13.7 13.7 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.7 13.7 0 0 1-4.51 9.92Z"></svg:path>`,
})
export class PhGiftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchFillIcon],svg[ph-git-branch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H96a23.8 23.8 0 0 0-8 1.38V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-17a8 8 0 0 1 8-8h88a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M64 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhGitBranchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitFillIcon],svg[ph-git-commit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128a8 8 0 0 1-8 8h-64.58a56 56 0 0 1-110.84 0H8a8 8 0 0 1 0-16h64.58a56 56 0 0 1 110.84 0H248a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhGitCommitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffFillIcon],svg[ph-git-diff-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118.18 213.08c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H64a8 8 0 0 1 0-16h28.69L55 162.34a23.85 23.85 0 0 1-7-17V95a32 32 0 1 1 16 0v50.38a8 8 0 0 0 2.34 5.62L104 188.69V160a8 8 0 0 1 16 0v48a7 7 0 0 1 0 .8v.32c0 .11 0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28ZM208 161v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48.78c-.14 0-.28 0-.41.06h-.37l-.43.11l-.33.08l-.4.14l-.34.13l-.35.16l-.36.18a3 3 0 0 0-.31.18c-.12.07-.25.14-.36.22a4 4 0 0 0-.31.23a4 4 0 0 0-.32.24c-.15.12-.28.24-.42.37l-.17.15l-.16.18c-.12.13-.25.26-.36.4l-.26.35l-.21.28l-.24.39c-.05.1-.11.19-.16.28s-.13.27-.19.4l-.15.31l-.14.39c0 .12-.09.23-.12.35s-.07.26-.1.39a3 3 0 0 0-.09.37c0 .16 0 .31-.07.46s0 .21-.05.32a7 7 0 0 0 0 .8V96a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0"></svg:path>`,
})
export class PhGitDiffFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkFillIcon],svg[ph-git-fork-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V95a32 32 0 1 0-16 0v17a24 24 0 0 0 24 24h40v25a32 32 0 1 0 16 0v-25h40a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31m-80 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhGitForkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeFillIcon],svg[ph-git-merge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M96 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGitMergeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestFillIcon],svg[ph-git-pull-request-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 64a32 32 0 1 0-40 31v66a32 32 0 1 0 16 0V95a32.06 32.06 0 0 0 24-31M88 192a16 16 0 1 1-16-16a16 16 0 0 1 16 16m144 0a32 32 0 1 1-40-31v-50.37a8 8 0 0 0-2.34-5.66L152 67.31V96a8 8 0 0 1-16 0V48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69L201 93.66a23.85 23.85 0 0 1 7 17V161a32.06 32.06 0 0 1 24 31"></svg:path>`,
})
export class PhGitPullRequestFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoFillIcon],svg[ph-github-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104v8a56.06 56.06 0 0 1-48.44 55.47A39.8 39.8 0 0 1 176 192v40a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-16H72a40 40 0 0 1-40-40a24 24 0 0 0-24-24a8 8 0 0 1 0-16a40 40 0 0 1 40 40a24 24 0 0 0 24 24h24v-8a39.8 39.8 0 0 1 8.44-24.53A56.06 56.06 0 0 1 56 112v-8a58.14 58.14 0 0 1 7.69-28.32A59.78 59.78 0 0 1 69.07 28A8 8 0 0 1 76 24a59.75 59.75 0 0 1 48 24h24a59.75 59.75 0 0 1 48-24a8 8 0 0 1 6.93 4a59.74 59.74 0 0 1 5.37 47.68A58 58 0 0 1 216 104"></svg:path>`,
})
export class PhGithubLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoFillIcon],svg[ph-gitlab-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61m-189.47 7l73.45 51.9l-20.72 14.65L57.09 165a41.06 41.06 0 0 1-16.41-40.89Zm87.32 91l-20.73-14.65L128 185.8l20.73 14.64Zm70.91-50.1l-36.32 25.66L141.87 176l73.45-51.9a41.06 41.06 0 0 1-16.41 40.9"></svg:path>`,
})
export class PhGitlabLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleFillIcon],svg[ph-gitlab-logo-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.14 178.06l-73.27 51.76a11.91 11.91 0 0 1-13.74 0l-73.27-51.76a57.19 57.19 0 0 1-22-61L45.75 41a11.94 11.94 0 0 1 22.79-1.11L86.22 88h83.56l17.68-48.13A11.94 11.94 0 0 1 210.25 41l19.9 76.12a57.19 57.19 0 0 1-22.01 60.94"></svg:path>`,
})
export class PhGitlabLogoSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeFillIcon],svg[ph-globe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m78.36 64h-35.65a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm9.64 40a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-88-85a115.3 115.3 0 0 1 26 45h-52a115.1 115.1 0 0 1 26-45m-26 125h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48Zm50.35 61.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-58 45.6Z"></svg:path>`,
})
export class PhGlobeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastFillIcon],svg[ph-globe-hemisphere-east-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M62.29 186.47l2.52-1.65A16 16 0 0 0 72 171.53l.21-36.23L93.17 104a4 4 0 0 0 .32.22l19.67 12.87a15.94 15.94 0 0 0 11.35 2.77l31.49-4.27a16 16 0 0 0 10-5.41l22.17-25.76A16 16 0 0 0 192 74v-6.33A87.87 87.87 0 0 1 211.77 155l-16.14-14.76a16 16 0 0 0-16.93-3l-30.46 12.65a16.08 16.08 0 0 0-9.68 12.45l-2.39 16.19a16 16 0 0 0 11.77 17.81L169.4 202l2.36 2.37a87.88 87.88 0 0 1-109.47-17.9"></svg:path>`,
})
export class PhGlobeHemisphereEastFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestFillIcon],svg[ph-globe-hemisphere-west-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.6 87.6 0 0 1-6.4 32.94l-44.7-27.49a15.9 15.9 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.6 16.6 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128m-176 0a87.5 87.5 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61l3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14l19.61 20.2l-1.94 10A88.11 88.11 0 0 1 40 128"></svg:path>`,
})
export class PhGlobeHemisphereWestFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleFillIcon],svg[ph-globe-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m87.62 96h-39.83c-1.79-36.51-15.85-62.33-27.38-77.6a88.19 88.19 0 0 1 67.22 77.6ZM96.23 136h63.54c-2.31 41.61-22.23 67.11-31.77 77c-9.55-9.9-29.46-35.4-31.77-77m0-16c2.31-41.61 22.23-67.11 31.77-77c9.55 9.93 29.46 35.43 31.77 77Zm52.18 93.6c11.53-15.27 25.56-41.09 27.38-77.6h39.84a88.19 88.19 0 0 1-67.22 77.6"></svg:path>`,
})
export class PhGlobeSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXFillIcon],svg[ph-globe-simple-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.66 173.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32M232 128a8 8 0 0 1-8 8H96.25c3 53.73 35.33 80.6 36.77 81.77A8 8 0 0 1 128 232a104 104 0 1 1 104-104m-83.59-85.6C159.94 57.67 174 83.49 175.79 120h39.84a88.19 88.19 0 0 0-67.22-77.6M96.23 120h63.54c-2.31-41.6-22.22-67.1-31.77-77c-9.54 9.89-29.46 35.39-31.77 77"></svg:path>`,
})
export class PhGlobeSimpleXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandFillIcon],svg[ph-globe-stand-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 104a80 80 0 1 1 80 80a80.09 80.09 0 0 1-80-80m146.46 69.28A96 96 0 0 1 66.72 37.54a8 8 0 1 0-11.54-11.08A112 112 0 0 0 128 215.71V232h-24a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16.28a111.2 111.2 0 0 0 69.54-30.9a8 8 0 1 0-11.08-11.54"></svg:path>`,
})
export class PhGlobeStandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXFillIcon],svg[ph-globe-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0 0 208a8 8 0 0 0 5-14.21c-1.12-.91-20.88-17.32-31.06-49.77h26a8 8 0 0 0 0-16H98.08a140.2 140.2 0 0 1 0-48h59.88A138 138 0 0 1 160 128a8 8 0 0 0 16 0a155 155 0 0 0-1.84-24h38.51a87.6 87.6 0 0 1 3.33 24a8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 24m-26 64a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45Zm68.75 0a135.3 135.3 0 0 0-22.3-45.6a88.29 88.29 0 0 1 58 45.6Zm50.95 85.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path>`,
})
export class PhGlobeXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesFillIcon],svg[ph-goggles-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 64H72a72.08 72.08 0 0 0-72 72a24.06 24.06 0 0 0 17 23c6.06 20.37 37.63 33 55 33a40.07 40.07 0 0 0 39.2-32h33.6a40.07 40.07 0 0 0 39.2 32c17.33 0 48.9-12.66 55-33a24.06 24.06 0 0 0 17-23a72.08 72.08 0 0 0-72-72M89 169a8 8 0 0 1-11.31 0l-24.55-24.55a8 8 0 0 1 11.31-11.31L89 157.65A8 8 0 0 1 89 169m119.52-.49a8 8 0 0 1-11.31 0l-25.41-25.4a8 8 0 0 1 11.32-11.32l25.4 25.41a8 8 0 0 1-.04 11.28Zm29.2-26.86C229.34 123.25 200.34 112 184 112a40.07 40.07 0 0 0-39.2 32h-33.6A40.07 40.07 0 0 0 72 112c-16.34 0-45.34 11.25-53.68 29.62A8 8 0 0 1 16 136a56.06 56.06 0 0 1 56-56h112a56.06 56.06 0 0 1 56 56a8 8 0 0 1-2.32 5.62Z"></svg:path>`,
})
export class PhGogglesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfFillIcon],svg[ph-golf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.47 197.14a8 8 0 0 1-4.61 10.33a126 126 0 0 1-34.86 8.21V248a8 8 0 0 1-16 0v-32.32a126 126 0 0 1-34.86-8.21a8 8 0 1 1 5.72-14.94C104 197.56 116.15 200 128 200s24-2.44 37.14-7.47a8 8 0 0 1 10.33 4.61M216 96a88 88 0 1 1-88-88a88.1 88.1 0 0 1 88 88m-72 36a12 12 0 1 0-12 12a12 12 0 0 0 12-12m32-32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhGolfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoFillIcon],svg[ph-goodreads-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-24 136a48 48 0 0 1-86.4 28.8a8 8 0 1 1 12.8-9.6A32 32 0 0 0 160 160v-12.26A48 48 0 0 1 80 112v-8a48 48 0 0 1 80-35.74V64a8 8 0 0 1 16 0Zm-16-56v8a32 32 0 0 1-64 0v-8a32 32 0 0 1 64 0"></svg:path>`,
})
export class PhGoodreadsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoFillIcon],svg[ph-google-cardboard-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a8 8 0 0 0 5.66-2.34L128 179.31l26.34 26.35A8 8 0 0 0 160 208h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhGoogleCardboardLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoFillIcon],svg[ph-google-chrome-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 73.72 40H128a48.08 48.08 0 0 0-45.6 33L59.32 73A87.89 87.89 0 0 1 128 40m-88 88a87.44 87.44 0 0 1 9.56-39.86L86.43 152c.06.1.13.19.19.28a48 48 0 0 0 51.2 22.72l-23.1 40A88.14 88.14 0 0 1 40 128m92.69 87.87L169.57 152c.08-.14.14-.28.22-.42a47.88 47.88 0 0 0-6-55.58H210a88 88 0 0 1-77.29 119.87Z"></svg:path>`,
})
export class PhGoogleChromeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoFillIcon],svg[ph-google-drive-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.6 143.78L169.13 31.52A15.91 15.91 0 0 0 155.56 24h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 143.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 216h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 144h-46.48l-35.19-58.67l22.75-37.92ZM92.53 160h70.94l24 40H68.53Zm9.6-16L128 100.88L153.87 144Zm-6.22-96.59l22.76 37.92L83.47 144H37Z"></svg:path>`,
})
export class PhGoogleDriveLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoFillIcon],svg[ph-google-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24m0 184a80 80 0 1 1 53.34-139.63a8 8 0 0 1-10.67 11.92A64 64 0 1 0 191.5 136H128a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class PhGoogleLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoFillIcon],svg[ph-google-photos-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8M88 72a55.3 55.3 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72m80 112a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"></svg:path>`,
})
export class PhGooglePhotosLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoFillIcon],svg[ph-google-play-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.82 114.18L72 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 48 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67a16 16 0 0 0 16.12 0l167.78-96a15.76 15.76 0 0 0 0-27.64ZM160 139.31l18.92 18.92l-88.5 50.66ZM90.4 47.1l88.53 50.67L160 116.69ZM193.31 150l-22-22l22-22l38.43 22Z"></svg:path>`,
})
export class PhGooglePlayLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoFillIcon],svg[ph-google-podcasts-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.32 116.68l-104-104a16 16 0 0 0-22.64 0l-104 104a16 16 0 0 0 0 22.64l104 104a16 16 0 0 0 22.64 0l104-104a16 16 0 0 0 0-22.64M56 136a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm40 40a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 88a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm0-112a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm40 120a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm0-80a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 40a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhGooglePodcastsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFillIcon],svg[ph-gps-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a8 8 0 0 1-8 8h-24.37A88.13 88.13 0 0 1 136 215.63V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37A88.13 88.13 0 0 1 120 40.37V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhGpsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixFillIcon],svg[ph-gps-fix-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m40-72a40 40 0 1 1-40-40a40 40 0 0 1 40 40"></svg:path>`,
})
export class PhGpsFixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashFillIcon],svg[ph-gps-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136h-24.37a87.2 87.2 0 0 1-10.13 33.61a4 4 0 0 1-6.5.81L92.51 53.28a4 4 0 0 1 1.4-6.38A87 87 0 0 1 120 40.37V16a8 8 0 0 1 8.53-8a8.17 8.17 0 0 1 7.47 8.27v24.1A88.13 88.13 0 0 1 215.63 120h24.1a8.17 8.17 0 0 1 8.25 7.47A8 8 0 0 1 240 136M53.92 34.62a8 8 0 1 0-11.84 10.76l21.09 23.2A87.63 87.63 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37a87.5 87.5 0 0 0 45-17.43l21.08 23.18a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhGpsSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientFillIcon],svg[ph-gradient-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 192a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m144-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m-72 0h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16M32 168h80a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16m192-16h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m0-96H32a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m0 56H32a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhGradientFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapFillIcon],svg[ph-graduation-cap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 207.24a119 119 0 0 0 16-7.73V240a8 8 0 0 1-16 0Zm11.76-88.43l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l17-9.06Zm64-29.87l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76v-76.57l-5-2.67l-43 22.93L43.83 106L25 96l103-54.93L231 96l-18.78 10h-.06L188 118.94a8 8 0 0 1 4 6.93v73.64a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12"></svg:path>`,
})
export class PhGraduationCapFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsFillIcon],svg[ph-grains-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56a87.5 87.5 0 0 0-31.84 6c-14.32-29.7-43.25-44.46-44.57-45.13a8 8 0 0 0-7.16 0c-1.33.64-30.26 15.4-44.58 45.13A87.5 87.5 0 0 0 48 56a8 8 0 0 0-8 8v80a88.12 88.12 0 0 0 75.48 87.1a4 4 0 0 0 4.52-4v-50.83a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v51.14a4 4 0 0 0 4.52 4A88.12 88.12 0 0 0 216 144V64a8 8 0 0 0-8-8m-88 93.46a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144Zm8-42.1a88.6 88.6 0 0 0-33.84-38.25c9.21-19.21 26.4-31.33 33.84-35.9c7.45 4.58 24.63 16.7 33.84 35.9A88.6 88.6 0 0 0 128 107.36m72 5a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z"></svg:path>`,
})
export class PhGrainsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashFillIcon],svg[ph-grains-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64v80a87.7 87.7 0 0 1-5.45 30.49a4 4 0 0 1-6.7 1.27l-41.33-45.46a4 4 0 0 1 1-6.16A87.4 87.4 0 0 1 200 112.37V72.45a72.33 72.33 0 0 0-50.35 29.36a8 8 0 0 1-11.93 1.19a8.17 8.17 0 0 1-.89-10.75a88.1 88.1 0 0 1 25-23.11C152.62 49.8 135.45 37.74 128 33.2a99.8 99.8 0 0 0-23.4 19.94a8 8 0 0 1-12 .27a8.18 8.18 0 0 1-.06-10.8a112.4 112.4 0 0 1 31.86-25.76a8 8 0 0 1 7.16 0c1.32.66 30.27 15.43 44.59 45.15a87.9 87.9 0 0 1 31.74-6a8 8 0 0 1 8.11 8m-2.08 146.62a8 8 0 1 1-11.84 10.76l-12.9-14.19A87.77 87.77 0 0 1 128.52 232C79.83 232.28 40 191.51 40 142.83V64a8 8 0 0 1 8.09-8c1.25 0 2.48 0 3.72.09l-9.73-10.71a8 8 0 1 1 11.84-10.76Zm-77.6-61.57L69.18 75.19A71.3 71.3 0 0 0 56 72.44v39.94a88.17 88.17 0 0 1 72 51a88 88 0 0 1 8.32-14.33"></svg:path>`,
})
export class PhGrainsSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphFillIcon],svg[ph-graph-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 152a31.84 31.84 0 0 0-19.53 6.68l-23.11-18A31.65 31.65 0 0 0 160 128c0-.74 0-1.48-.08-2.21l13.23-4.41A32 32 0 1 0 168 104c0 .74 0 1.48.08 2.21l-13.23 4.41A32 32 0 0 0 128 96a32.6 32.6 0 0 0-5.27.44L115.89 81A32 32 0 1 0 96 88a32.6 32.6 0 0 0 5.27-.44l6.84 15.4a31.92 31.92 0 0 0-8.57 39.64l-25.71 22.84a32.06 32.06 0 1 0 10.63 12l25.71-22.84a31.91 31.91 0 0 0 37.36-1.24l23.11 18A31.65 31.65 0 0 0 168 184a32 32 0 1 0 32-32m0-64a16 16 0 1 1-16 16a16 16 0 0 1 16-16M80 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16M56 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144-8a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGraphFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardFillIcon],svg[ph-graphics-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H16a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h112a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-20 72a35.8 35.8 0 0 1-5.53 19.16l-49.63-49.63A36 36 0 0 1 212 120m-96 0a35.8 35.8 0 0 1-5.53 19.16L60.84 89.53A36 36 0 0 1 116 120m-36 36a36 36 0 0 1-30.47-55.16l49.63 49.63A35.8 35.8 0 0 1 80 156m60-36a35.8 35.8 0 0 1 5.53-19.16l49.63 49.63A36 36 0 0 1 140 120"></svg:path>`,
})
export class PhGraphicsCardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanFillIcon],svg[ph-greater-than-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-20.65 103.26l-104 48a8 8 0 0 1-6.7-14.52L164.91 128L76.65 87.26a8 8 0 1 1 6.7-14.52l104 48a8 8 0 0 1 0 14.52"></svg:path>`,
})
export class PhGreaterThanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualFillIcon],svg[ph-greater-than-or-equal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 152H80a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16m2.35-64.35l-104 32a8 8 0 1 1-4.7-15.3L156.8 112L77.65 87.65a8 8 0 0 1 4.7-15.3l104 32a8 8 0 0 1 0 15.3"></svg:path>`,
})
export class PhGreaterThanOrEqualFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourFillIcon],svg[ph-grid-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56v60a4 4 0 0 1-4 4h-76V44a4 4 0 0 1 4-4h60a16 16 0 0 1 16 16M116 40H56a16 16 0 0 0-16 16v60a4 4 0 0 0 4 4h76V44a4 4 0 0 0-4-4m96 96h-76v76a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16v-60a4 4 0 0 0-4-4m-172 4v60a16 16 0 0 0 16 16h60a4 4 0 0 0 4-4v-76H44a4 4 0 0 0-4 4"></svg:path>`,
})
export class PhGridFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineFillIcon],svg[ph-grid-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 52v40H28a4 4 0 0 1-4-4V64a16 16 0 0 1 16-16h40a4 4 0 0 1 4 4m16 152a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-40h-56Zm-76-36v24a16 16 0 0 0 16 16h40a4 4 0 0 0 4-4v-40H28a4 4 0 0 0-4 4m0-56v32a4 4 0 0 0 4 4h56v-40H28a4 4 0 0 0-4 4m128-64h-48a4 4 0 0 0-4 4v40h56V52a4 4 0 0 0-4-4m76 60h-56v40h56a4 4 0 0 0 4-4v-32a4 4 0 0 0-4-4m-128 40h56v-40h-56ZM216 48h-40a4 4 0 0 0-4 4v40h56a4 4 0 0 0 4-4V64a16 16 0 0 0-16-16m12 116h-56v40a4 4 0 0 0 4 4h40a16 16 0 0 0 16-16v-24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGridNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarFillIcon],svg[ph-guitar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.66 46.34l-40-40a8 8 0 0 0-11.32 11.32l2.35 2.34l-60.17 60.16c-22.79-11.86-48.31-10.87-63.77 4.58a42.3 42.3 0 0 0-9.39 14.37a8.24 8.24 0 0 1-7.55 4.89c-14.59.49-27.26 5.72-36.65 15.11C11.08 131.22 6 148.6 8.74 168.07C11.4 186.7 21.07 205.15 36 220s33.34 24.56 52 27.22a71 71 0 0 0 10.1.78c15.32 0 28.83-5.23 38.76-15.16c9.39-9.39 14.62-22.06 15.11-36.65a8.24 8.24 0 0 1 4.92-7.55a42.2 42.2 0 0 0 14.37-9.39c15.45-15.46 16.44-41 4.58-63.77L236 55.31l2.34 2.35a8 8 0 0 0 11.32-11.32m-156 159.31a8 8 0 0 1-11.31 0l-32-32a8 8 0 0 1 11.32-11.31l32 32a8 8 0 0 1-.01 11.31m42.14-45.86a28 28 0 1 1 0-39.59a28 28 0 0 1 0 39.59m31.06-58a87 87 0 0 0-6-6.68a85 85 0 0 0-6.69-6L176 67.31L188.69 80ZM200 68.68L187.32 56L212 31.31L224.69 44Z"></svg:path>`,
})
export class PhGuitarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerFillIcon],svg[ph-hair-dryer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177.42 206.62L209 137.07A64 64 0 0 0 168 24a8.4 8.4 0 0 0-1.32.11L29.37 47A16 16 0 0 0 16 62.78v50.44A16 16 0 0 0 29.37 129L128 145.44V200a16 16 0 0 0 16 16a40 40 0 0 0 40 40h16a8 8 0 0 0 0-16h-16a24 24 0 0 1-24-24h2.85a16 16 0 0 0 14.57-9.38M192 88a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-25.32 63.89a8.4 8.4 0 0 0 1.32.11a63.9 63.9 0 0 0 17.82-2.54l-23 50.54H144v-51.89Z"></svg:path>`,
})
export class PhHairDryerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerFillIcon],svg[ph-hamburger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.58 98.06a16 16 0 0 1-3.23-13.44C39.78 49.5 80 24 128 24s88.22 25.5 95.65 60.62A16 16 0 0 1 207.93 104H48.07a16 16 0 0 1-12.49-5.94m193.68 54.42l-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM24 136h208a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhHamburgerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerFillIcon],svg[ph-hammer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.34 112l-67.46-67.92a96.1 96.1 0 0 0-135.77 0l-.09.09L34.25 58.4a8 8 0 0 0 11.49 11.13l13.73-14.18a80 80 0 0 1 18.71-13.9L124.68 88l-96 96a16 16 0 0 0 0 22.63l20.69 20.69a16 16 0 0 0 22.63 0l96-96l32 32a16 16 0 0 0 22.63 0l28.69-28.69a16 16 0 0 0 .02-22.63m-89 2.33L140 136.67L119.31 116l22.35-22.35a8 8 0 0 0 0-11.32L94.32 35a80 80 0 0 1 78.23 20.41l44.22 44.51L188 128.66l-14.34-14.34a8 8 0 0 0-11.32 0Zm49 37.66l-12-12L228 111.25l12 12Z"></svg:path>`,
})
export class PhHammerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownFillIcon],svg[ph-hand-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.4 24.4 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56Zm-10.9 27.15l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Zm-65.09-90.55a8 8 0 0 1 11.32-11.32L184 84.69V24a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path>`,
})
export class PhHandArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpFillIcon],svg[ph-hand-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7.4 7.4 0 0 0 1.2-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56Zm-10.9 27.15l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM154.34 61.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L200 43.31V104a8 8 0 0 1-16 0V43.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path>`,
})
export class PhHandArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsFillIcon],svg[ph-hand-coins-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.09 57.38a36 36 0 0 1 55.17-27.82a4 4 0 0 1-.56 7A52.06 52.06 0 0 0 152 84c0 1.17 0 2.34.12 3.49a4 4 0 0 1-6 3.76a36 36 0 0 1-18.03-33.87M240 160.61a24.47 24.47 0 0 1-13.6 22l-.44.2l-38.83 16.54a7 7 0 0 1-1.19.4l-64 16a8 8 0 0 1-1.94.25H16a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h28.69l22.62-22.63A31.82 31.82 0 0 1 89.94 112H140a28 28 0 0 1 27.25 34.45l41.84-9.62A24.61 24.61 0 0 1 240 160.61m-16 0a8.61 8.61 0 0 0-10.87-8.3l-.31.08l-67 15.41a8.3 8.3 0 0 1-1.79.2H112a8 8 0 0 1 0-16h28a12 12 0 0 0 0-24H89.94a15.86 15.86 0 0 0-11.31 4.69L56 155.31V200h63l62.43-15.61l38-16.18a8.56 8.56 0 0 0 4.57-7.6M168 84a36 36 0 1 0 36-36a36 36 0 0 0-36 36"></svg:path>`,
})
export class PhHandCoinsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositFillIcon],svg[ph-hand-deposit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 198.65V240a8 8 0 0 1-16 0v-41.35A74.84 74.84 0 0 0 192 144v58.35a8 8 0 0 1-14.69 4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12 12 0 0 0-20.89 11.83l22.13 33.79a8 8 0 0 1-13.39 8.76l-22.26-34l-.24-.38c-.38-.66-.73-1.33-1.05-2H56a8 8 0 0 1-8-8V96a16 16 0 0 1 16-16h48v48a8 8 0 0 0 16 0V80h48a16 16 0 0 1 16 16v27.62a90.89 90.89 0 0 1 40 75.03M128 35.31l18.34 18.35a8 8 0 0 0 11.32-11.32l-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L112 35.31V80h16Z"></svg:path>`,
})
export class PhHandDepositFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeFillIcon],svg[ph-hand-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 180a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72-76v48a88 88 0 0 1-176 0V64a16 16 0 0 1 32 0v56a8 8 0 0 0 16 0V32a16 16 0 0 1 32 0v80a8 8 0 0 0 16 0V48a16 16 0 0 1 32 0v80a8 8 0 0 0 16 0v-24a16 16 0 0 1 32 0m-36.42 74.21c-.7-1.4-17.5-34.21-51.58-34.21s-50.88 32.81-51.58 34.21a4 4 0 0 0 0 3.58c.7 1.4 17.5 34.21 51.58 34.21s50.88-32.81 51.58-34.21a4 4 0 0 0 0-3.58"></svg:path>`,
})
export class PhHandEyeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFillIcon],svg[ph-hand-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64v90.93c0 46.2-36.85 84.55-83 85.06a83.7 83.7 0 0 1-60.4-24.59C50.79 192.33 26.15 136 26.15 136a16 16 0 0 1 6.53-22.23c7.66-4 17.1-.84 21.4 6.62l21 36.44a6.09 6.09 0 0 0 6 3.09h.12a8.19 8.19 0 0 0 6.8-8.18V48a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V112a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V32a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V120a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25v-55.3c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 216 64"></svg:path>`,
})
export class PhHandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistFillIcon],svg[ph-hand-fist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120v8a104 104 0 0 1-104.37 104c-54-.19-98-42.06-103.12-94.78a4 4 0 0 1 5.56-4A35.94 35.94 0 0 0 72 122.59a35.92 35.92 0 0 0 53.94 2.33a40.36 40.36 0 0 0 12.87 13A47.94 47.94 0 0 0 120 176a8 8 0 0 0 8.67 8a8.21 8.21 0 0 0 7.33-8.26A32 32 0 0 1 168 144a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.25-7.47H160a24 24 0 0 1-24-24V88h64a32 32 0 0 1 32 32m-187.27 0C55.57 119.6 64 110.37 64 99.52v-23C64 65.63 55.57 56.4 44.73 56A20 20 0 0 0 24 76v24a20 20 0 0 0 20.73 20m56 0c10.84-.39 19.27-9.62 19.27-20.47v-47c0-10.85-8.43-20.08-19.27-20.47A20 20 0 0 0 80 52v48a20 20 0 0 0 20.73 20M176 52a20 20 0 0 0-20.73-20c-10.84.4-19.27 9.63-19.27 20.48V72h36a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhHandFistFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingFillIcon],svg[ph-hand-grabbing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104v48a88 88 0 0 1-176 0v-16a16 16 0 0 1 32 0v8a8 8 0 0 0 16 0V88a16 16 0 0 1 32 0v16a8 8 0 0 0 16 0V88a16 16 0 0 1 32 0v16a8 8 0 0 0 16 0a16 16 0 0 1 32 0"></svg:path>`,
})
export class PhHandGrabbingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
  selector: 'svg[phLassoFillIcon],svg[ph-lasso-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M93.43 136.11a17.14 17.14 0 0 0-15.35 6.1c9.31 6.56 22.51 11.33 37.43 13.07c-5.1-11.95-13.79-18.28-22.08-19.17"></svg:path><svg:path d="M224 48v160a16 16 0 0 1-16 16h-80.35a4 4 0 0 1-3.23-6.34c7.5-10.23 11.58-23.24 11.58-37.84c0-2.79-.13-5.46-.35-8.05C176.79 169.33 208 147.47 208 120c0-29.15-35.14-52-80-52s-80 22.84-80 52c0 27.31 30.82 49.07 71.58 51.73a77 77 0 0 1 .42 8.09c0 17.62-7.65 31.95-21 39.32A38.77 38.77 0 0 1 79.27 224H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-32 72c0-19.51-29.31-36-64-36s-64 16.48-64 36a21.3 21.3 0 0 0 3 10.63a33.65 33.65 0 0 1 28.16-10.43c15 1.63 30.84 13.4 37.54 35.68c32.6-1.41 59.3-17.26 59.3-35.88"></svg:path></svg:g>`,
})
export class PhLassoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoFillIcon],svg[ph-lastfm-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 144h-11.39a40.09 40.09 0 0 1-36.42-23.45l-23-50.48A24 24 0 0 0 91.39 96H80a24 24 0 0 0-24 24v24a24 24 0 0 0 24 24h8a23.92 23.92 0 0 0 18.74-9a8 8 0 1 1 12.48 10A39.83 39.83 0 0 1 88 184h-8a40 40 0 0 1-40-40v-24a40 40 0 0 1 40-40h11.39a40.09 40.09 0 0 1 36.42 23.45l22.95 50.48A24 24 0 0 0 172.61 168H184a16 16 0 0 0 0-32h-8a28 28 0 0 1 0-56h12a20 20 0 0 1 20 20a8 8 0 0 1-16 0a4 4 0 0 0-4-4h-12a12 12 0 0 0 0 24h8a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhLastfmLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutFillIcon],svg[ph-layout-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h176v40H40Zm176 144H112v-88h104z"></svg:path>`,
})
export class PhLayoutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafFillIcon],svg[ph-leaf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.45 40.07a8 8 0 0 0-7.52-7.52C139.8 28.08 78.82 51 52.82 94a87.1 87.1 0 0 0-12.76 49a101.7 101.7 0 0 0 6.64 32.2a4 4 0 0 0 6.61 1.43l85-86.3a8 8 0 0 1 11.32 11.32l-92.89 94.29l-14.19 14.19a8.2 8.2 0 0 0-.6 11.1a8 8 0 0 0 11.71.43l16.79-16.79c14.14 6.84 28.41 10.57 42.56 11.07q1.67.06 3.33.06A86.93 86.93 0 0 0 162 203.18c43-26 65.93-86.97 61.45-163.11"></svg:path>`,
})
export class PhLeafFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternFillIcon],svg[ph-lectern-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM192 120H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLecternFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoFillIcon],svg[ph-lego-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.94 79.21a8 8 0 0 0-4.36-6.37L197.29 49.7C191.54 39.24 177.21 32 160 32c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-19.52 9.76A53.7 53.7 0 0 0 80 72c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-28.64 14.31A8 8 0 0 0 8 128v64a8 8 0 0 0 4.42 7.16l64 32a8 8 0 0 0 7.16 0l160-80A8 8 0 0 0 248 144V80a4.5 4.5 0 0 0-.06-.79M80 151.06L33.89 128L51 119.45c7.24 5.29 17.48 8.55 29 8.55c22.43 0 40-12.3 40-28a21.77 21.77 0 0 0-4.35-12.88L131 79.45c7.24 5.29 17.48 8.55 29 8.55c18.38 0 33.49-8.26 38.35-19.88L222.11 80ZM160 48c12.23 0 21.69 5 23.63 10.12c0 .09.07.18.11.28A5.3 5.3 0 0 1 184 60c0 5.66-10.26 12-24 12c-9.66 0-17.6-3.14-21.46-7a7 7 0 0 0-.86-.93A6.66 6.66 0 0 1 136 60c0-5.66 10.26-12 24-12M80 88a37 37 0 0 1 17.13 3.87a7.5 7.5 0 0 0 1 .56c3.69 2.21 5.87 5 5.87 7.57c0 5.66-10.26 12-24 12c-9.67 0-17.61-3.14-21.47-7a7.5 7.5 0 0 0-.84-.93A6.62 6.62 0 0 1 56 100c0-5.66 10.26-12 24-12m-56 52.94l48 24v46.12l-48-24Z"></svg:path>`,
})
export class PhLegoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyFillIcon],svg[ph-lego-smiley-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48h-16V32a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16H72a32 32 0 0 0-32 32v96a32.06 32.06 0 0 0 24 31v17a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-17a32.06 32.06 0 0 0 24-31V80a32 32 0 0 0-32-32m-28 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m4.27 58.77a61 61 0 0 1-64.54 0a8 8 0 0 1 8.54-13.54a45 45 0 0 0 47.46 0a8 8 0 0 1 8.54 13.54M104 32h48v16h-48Zm-4 68a12 12 0 1 1-12 12a12 12 0 0 1 12-12m76 124H80v-16h96Z"></svg:path>`,
})
export class PhLegoSmileyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanFillIcon],svg[ph-less-than-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-28.65 136.74a8 8 0 1 1-6.7 14.52l-104-48a8 8 0 0 1 0-14.52l104-48a8 8 0 0 1 6.7 14.52L91.09 128Z"></svg:path>`,
})
export class PhLessThanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualFillIcon],svg[ph-less-than-or-equal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H72a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16m2.35-55.65a8 8 0 0 1-4.7 15.3l-104-32a8 8 0 0 1 0-15.3l104-32a8 8 0 0 1 4.7 15.3L99.2 104Z"></svg:path>`,
})
export class PhLessThanOrEqualFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHFillIcon],svg[ph-letter-circle-h-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144a8 8 0 0 1-16 0v-32h-48v32a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v32h48V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhLetterCircleHFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePFillIcon],svg[ph-letter-circle-p-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 116a20 20 0 0 1-20 20h-24V96h24a20 20 0 0 1 20 20m76 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-60-12a36 36 0 0 0-36-36h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-16h24a36 36 0 0 0 36-36"></svg:path>`,
})
export class PhLetterCirclePFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVFillIcon],svg[ph-letter-circle-v-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.43 75l-32 80a8 8 0 0 1-14.86 0l-32-80a8 8 0 0 1 14.86-6L128 154.46L152.57 93a8 8 0 1 1 14.86 6"></svg:path>`,
})
export class PhLetterCircleVFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyFillIcon],svg[ph-lifebuoy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M96 128a32 32 0 1 1 32 32a32 32 0 0 1-32-32m88.28-67.6l-28.49 28.5a47.84 47.84 0 0 0-55.58 0L71.72 60.4a87.83 87.83 0 0 1 112.56 0M71.72 195.6l28.49-28.5a47.84 47.84 0 0 0 55.58 0l28.49 28.5a87.83 87.83 0 0 1-112.56 0"></svg:path>`,
})
export class PhLifebuoyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentFillIcon],svg[ph-lightbulb-filament-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-50.34 2.34a8 8 0 0 0-11.32 0L128 132.69l-26.34-26.35a8 8 0 0 0-11.32 11.32L120 147.31V184a8 8 0 0 0 16 0v-36.69l29.66-29.65a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhLightbulbFilamentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFillIcon],svg[ph-lightbulb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-32.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23"></svg:path>`,
})
export class PhLightbulbFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseFillIcon],svg[ph-lighthouse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80a8 8 0 0 0-8 8v16h-11.15L184 55.2a8 8 0 0 0-2.69-5.2l-42.87-38.12l-.2-.17a16 16 0 0 0-20.48 0l-.2.17L74.68 50A7.93 7.93 0 0 0 72 55.2L67.15 104H56V88a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h17.54l-9.47 94.48A16 16 0 0 0 72 232h112a16 16 0 0 0 15.92-17.56L190.46 120H208a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8M87.24 64h81.52l4 40H136V88a8 8 0 0 0-16 0v16H83.23ZM72 216l4.81-48h102.38l4.81 48Z"></svg:path>`,
})
export class PhLighthouseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningAFillIcon],svg[ph-lightning-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m173.87 118.58l-95.2 102.85A8 8 0 0 1 65 214.15l13.67-57.56l-50-22.44a8 8 0 0 1-2.59-12.73l95.2-102.85A8 8 0 0 1 135 25.85l-13.69 57.56l50 22.43a8 8 0 0 1 2.59 12.74Zm61.71 104.57a7.9 7.9 0 0 1-3.58.85a8 8 0 0 1-7.16-4.42L215.05 200h-38.11l-9.79 19.58a8 8 0 0 1-14.31-7.16l36-72a8 8 0 0 1 14.31 0l36 72a8 8 0 0 1-3.57 10.73M207.05 184L196 161.89L184.94 184Z"></svg:path>`,
})
export class PhLightningAFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningFillIcon],svg[ph-lightning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.85 125.46l-112 120a8 8 0 0 1-13.69-7l14.66-73.33l-57.63-21.64a8 8 0 0 1-3-13l112-120a8 8 0 0 1 13.69 7l-14.7 73.41l57.63 21.61a8 8 0 0 1 3 12.95Z"></svg:path>`,
})
export class PhLightningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashFillIcon],svg[ph-lightning-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105.72 67.81a4 4 0 0 1 0-5.42l48.39-51.85a8 8 0 0 1 13.7 7L153.18 90.9l57.43 21.53a8.24 8.24 0 0 1 4.22 3.4a8 8 0 0 1-1 9.63l-25.27 27.07a4 4 0 0 1-5.88 0Zm27.76 54.32L53.92 34.62a8 8 0 1 0-11.84 10.76l39.26 43.18l-39 41.83a8.15 8.15 0 0 0-2.34 4.92a8 8 0 0 0 5.16 8.18l57.63 21.61l-14.63 73.33a8 8 0 0 0 13.69 7l61.86-66.28l38.37 42.2a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhLightningSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentFillIcon],svg[ph-line-segment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.81 83.79a28 28 0 0 1-33.12 4.83l-90.07 90.07a28 28 0 1 1-44.43-6.48a28 28 0 0 1 33.12-4.83l90.07-90.07a28 28 0 1 1 44.43 6.48"></svg:path>`,
})
export class PhLineSegmentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsFillIcon],svg[ph-line-segments-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.81 75.79A27.9 27.9 0 0 1 216 84a28.5 28.5 0 0 1-5.67-.58l-30.57 56.77a28 28 0 1 1-44.43 6.49l-26.06-26.06A28.1 28.1 0 0 1 96 124a28.4 28.4 0 0 1-5.67-.58l-30.57 56.76a28 28 0 1 1-39.6 0a28 28 0 0 1 25.47-7.61L76.2 115.8a28.05 28.05 0 0 1 0-39.61a28 28 0 0 1 44.43 33.12l26.06 26.06a28.1 28.1 0 0 1 19-2.77l30.57-56.77a28 28 0 0 1 0-39.6a28 28 0 0 1 39.6 39.6Z"></svg:path>`,
})
export class PhLineSegmentsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalFillIcon],svg[ph-line-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 160a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhLineVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakFillIcon],svg[ph-link-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M96 64a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0ZM64 96h16a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m64.08 85.66l-7.21 7.21a38 38 0 1 1-53.74-53.74l7.21-7.21a8 8 0 1 1 11.32 11.31l-7.22 7.21a22 22 0 0 0 31.12 31.12l7.21-7.22a8 8 0 1 1 11.31 11.32M160 192a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm32-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m-3.13-39.13l-7.21 7.21a8 8 0 1 1-11.32-11.31l7.22-7.21a22 22 0 0 0-31.12-31.12l-7.21 7.22a8 8 0 1 1-11.31-11.32l7.21-7.21a38 38 0 1 1 53.74 53.74"></svg:path>`,
})
export class PhLinkBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkFillIcon],svg[ph-link-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-92.3 160.49a43.31 43.31 0 0 1-55-66.43l25.37-25.37a43.35 43.35 0 0 1 61.25 0a42.9 42.9 0 0 1 9.95 15.43a8 8 0 1 1-15 5.6a27.33 27.33 0 0 0-44.9-9.72L72 137.37a27.32 27.32 0 0 0 34.68 41.91a8 8 0 1 1 9 13.21Zm79.61-62.55l-25.37 25.37A43 43 0 0 1 139.32 168a43.35 43.35 0 0 1-40.53-28.12a8 8 0 1 1 15-5.6A27.35 27.35 0 0 0 139.28 152a27.14 27.14 0 0 0 19.32-8l25.4-25.37a27.32 27.32 0 0 0-34.68-41.91a8 8 0 1 1-9-13.21a43.32 43.32 0 0 1 55 66.43Z"></svg:path>`,
})
export class PhLinkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakFillIcon],svg[ph-link-simple-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-63.44 141.66l-21.45 21.45a44 44 0 0 1-62.22-62.22l21.45-21.46a8 8 0 0 1 11.32 11.31L72.2 144.2a28 28 0 0 0 39.6 39.6l21.45-21.46a8 8 0 0 1 11.31 11.32m50.55-50.55l-21.45 21.45a8 8 0 0 1-11.32-11.31l21.46-21.45a28 28 0 0 0-39.6-39.6l-21.46 21.46a8 8 0 0 1-11.31-11.32l21.46-21.45a44 44 0 0 1 62.22 62.22"></svg:path>`,
})
export class PhLinkSimpleBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleFillIcon],svg[ph-link-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-63.44 141.66l-21.45 21.45a44 44 0 0 1-62.22-62.22l21.45-21.46a8 8 0 0 1 11.32 11.31L72.2 144.2a28 28 0 0 0 39.6 39.6l21.45-21.46a8 8 0 0 1 11.31 11.32m-34.9-16a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 11.32Zm85.45-34.55l-21.45 21.45a8 8 0 0 1-11.32-11.31l21.46-21.45a28 28 0 0 0-39.6-39.6l-21.46 21.46a8 8 0 0 1-11.31-11.32l21.46-21.45a44 44 0 0 1 62.22 62.22"></svg:path>`,
})
export class PhLinkSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakFillIcon],svg[ph-link-simple-horizontal-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M112 168H80a40 40 0 0 1 0-80h32a8 8 0 0 1 0 16H80a24 24 0 0 0 0 48h32a8 8 0 0 1 0 16m64 0h-32a8 8 0 0 1 0-16h32a24 24 0 0 0 0-48h-32a8 8 0 0 1 0-16h32a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalFillIcon],svg[ph-link-simple-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M112 168H80a40 40 0 0 1 0-80h32a8 8 0 0 1 0 16H80a24 24 0 0 0 0 48h32a8 8 0 0 1 0 16m48-48a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16Zm16 48h-32a8 8 0 0 1 0-16h32a24 24 0 0 0 0-48h-32a8 8 0 0 1 0-16h32a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhLinkSimpleHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoFillIcon],svg[ph-linkedin-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-80a12 12 0 1 1 12-12a12 12 0 0 1-12 12m96 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140Z"></svg:path>`,
})
export class PhLinkedinLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoFillIcon],svg[ph-linktree-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-64 176a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0Zm48-80h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32L128 123.31l-34.34 34.35a8 8 0 0 1-11.32-11.32L108.69 120H72a8 8 0 0 1 0-16h36.69L82.34 77.66a8 8 0 0 1 11.32-11.32L120 92.69V56a8 8 0 0 1 16 0v36.69l26.34-26.35a8 8 0 0 1 11.32 11.32L147.31 104H184a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLinktreeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoFillIcon],svg[ph-linux-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.22 209.74a4 4 0 0 1-3.31 6.26H98.1a4 4 0 0 1-3.31-6.26a40 40 0 0 1 66.43 0m68.93 3.37a8.29 8.29 0 0 1-6.43 2.89h-39.16a4 4 0 0 1-3.76-2.65a56 56 0 0 0-105.59 0a4 4 0 0 1-3.76 2.65H32.23a8.2 8.2 0 0 1-6.42-2.93a8 8 0 0 1-.06-10.07c.06-.07 7.64-9.78 15.12-28.72C47.77 156.8 56 127.64 56 88a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28c7.48 18.94 15.06 28.65 15.13 28.74a8 8 0 0 1-.11 10.09M88 100a12 12 0 1 0 12-12a12 12 0 0 0-12 12m79.16 32.42a8 8 0 0 0-10.73-3.58L128 143.06l-28.42-14.22a8 8 0 0 0-7.15 14.32l32 16a8 8 0 0 0 7.15 0l32-16a8 8 0 0 0 3.58-10.74M168 100a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhLinuxLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsFillIcon],svg[ph-list-bullets-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M68 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m124 92h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListBulletsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksFillIcon],svg[ph-list-checks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-90.34 117.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 164.69l26.34-26.35a8 8 0 0 1 11.32 11.32m0-64l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 100.69l26.34-26.35a8 8 0 0 1 11.32 11.32M192 168h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListChecksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesFillIcon],svg[ph-list-dashes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 184h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m0-48h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m0-48h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m120 96h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListDashesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListFillIcon],svg[ph-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 152H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartFillIcon],svg[ph-list-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M104 184H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m-48-56a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m105.79 57.58a4 4 0 0 1-3.58 0C156.65 184.8 120 166.17 120 140a22 22 0 0 1 40-12.64A22 22 0 0 1 200 140c0 26.17-36.65 44.8-38.21 45.58M192 88H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListHeartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassFillIcon],svg[ph-list-magnifying-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h72a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m88 48H40a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m109.66 2.34L217.36 166A40 40 0 1 0 206 177.36l20.3 20.3a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhListMagnifyingGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersFillIcon],svg[ph-list-numbers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56.84 75.58a8 8 0 0 1 3.58-10.74l16-8A8 8 0 0 1 88 64v48a8 8 0 0 1-16 0V76.94l-4.42 2.22a8 8 0 0 1-10.74-3.58M92 180a8 8 0 0 1 0 16H68a8 8 0 0 1-6.4-12.8l21.67-28.89A3.92 3.92 0 0 0 84 152a4 4 0 0 0-7.77-1.33a8 8 0 0 1-15.09-5.34a20 20 0 1 1 35 18.53L84 180Zm100 4h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m0-48h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m0-48h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListNumbersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusFillIcon],svg[ph-list-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m56 112H64a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m16-48H64a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m64 32h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarFillIcon],svg[ph-list-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m0 48h32a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 64H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m94.55-40.71L180.69 158l5.44 22a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L160 172.54l-20.22 11.91a4 4 0 0 1-5.91-4.41l5.44-22l-17.86-14.75a4 4 0 0 1 2.24-7.07l23.58-1.82l9.06-21a4 4 0 0 1 7.34 0l9.06 21l23.58 1.82a4 4 0 0 1 2.24 7.07"></svg:path>`,
})
export class PhListStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockFillIcon],svg[ph-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-80 84a12 12 0 1 1 12-12a12 12 0 0 1-12 12m32-84H96V56a32 32 0 0 1 64 0Z"></svg:path>`,
})
export class PhLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyFillIcon],svg[ph-lock-key-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0M160 80H96V56a32 32 0 0 1 64 0Z"></svg:path>`,
})
export class PhLockKeyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenFillIcon],svg[ph-lock-key-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0"></svg:path>`,
})
export class PhLockKeyOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedFillIcon],svg[ph-lock-laminated-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm88 136H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLockLaminatedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenFillIcon],svg[ph-lock-laminated-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-24 112H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLockLaminatedOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenFillIcon],svg[ph-lock-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-80 84a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhLockOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleFillIcon],svg[ph-lock-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Z"></svg:path>`,
})
export class PhLockSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenFillIcon],svg[ph-lock-simple-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h32V56a48.05 48.05 0 0 1 48-48c23.2 0 43.32 16.15 47.84 38.41a8 8 0 0 1-15.68 3.18C157.2 35 143.37 24 128 24a32 32 0 0 0-32 32v24h112a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhLockSimpleOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersFillIcon],svg[ph-lockers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v176a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16M96 112H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m40 104a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0Zm64-72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLockersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogFillIcon],svg[ph-log-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 136a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 0c0 40.37-21.08 72-48 72H56c-26.92 0-48-31.63-48-72s21.08-72 48-72h36.69l37.65-37.66A8 8 0 0 1 136 24h32a8 8 0 0 1 0 16h-28.69l-24 24H200c26.92 0 48 31.63 48 72m-144-8a8 8 0 0 0 0-16H33.26a8 8 0 1 0 0 16Zm50.91 32a8 8 0 0 0-8-8H80a8 8 0 0 0 0 16h66.91a8 8 0 0 0 8-8M232 136c0-30.36-14.65-56-32-56s-32 25.64-32 56s14.65 56 32 56s32-25.64 32-56"></svg:path>`,
})
export class PhLogFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandFillIcon],svg[ph-magic-wand-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 152a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8M56 72h16v16a8 8 0 0 0 16 0V72h16a8 8 0 0 0 0-16H88V40a8 8 0 0 0-16 0v16H56a8 8 0 0 0 0 16m128 120h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m35.31-112L80 219.31a16 16 0 0 1-22.62 0l-20.7-20.68a16 16 0 0 1 0-22.63L176 36.69a16 16 0 0 1 22.63 0l20.68 20.68a16 16 0 0 1 0 22.63M208 68.69L187.31 48l-32 32L176 100.69Z"></svg:path>`,
})
export class PhMagicWandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetFillIcon],svg[ph-magnet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.9 16.9 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75M60.65 151.89L32 123.24l29.42-29.81l28.48 28.48ZM132.79 224l-28.68-28.65l30.13-29.13l28.49 28.48Z"></svg:path>`,
})
export class PhMagnetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightFillIcon],svg[ph-magnet-straight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40h-40a16 16 0 0 0-16 16v88a16 16 0 0 1-32 0V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v88a88 88 0 0 0 88 88h.67c48.15-.36 87.33-40.29 87.33-89V56a16 16 0 0 0-16-16m0 16v40h-40V56ZM96 56v40H56V56Z"></svg:path>`,
})
export class PhMagnetStraightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassFillIcon],svg[ph-magnifying-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 112a56 56 0 1 1-56-56a56 56 0 0 1 56 56m61.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88 88 0 1 1 11.32-11.31l50.06 50.06a8 8 0 0 1 0 11.32M112 184a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72"></svg:path>`,
})
export class PhMagnifyingGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusFillIcon],svg[ph-magnifying-glass-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M144 120H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMagnifyingGlassMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusFillIcon],svg[ph-magnifying-glass-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M144 120h-24v24a8 8 0 0 1-16 0v-24H80a8 8 0 0 1 0-16h24V80a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMagnifyingGlassPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxFillIcon],svg[ph-mailbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 152a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m64-120h24a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8v32h16Zm72 84v60a16 16 0 0 1-16 16h-88v32a8 8 0 0 1-16 0v-32H32a16 16 0 0 1-16-16v-60a60.07 60.07 0 0 1 60-60h76v88a8 8 0 0 0 16 0V56h12a60.07 60.07 0 0 1 60 60m-120 0a44 44 0 0 0-88 0v60h88Z"></svg:path>`,
})
export class PhMailboxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaFillIcon],svg[ph-map-pin-area-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 175a8 8 0 0 0 7.94 0c2.45-1.41 60-35 60-94.95A64 64 0 0 0 64 80c0 60 57.58 93.54 60 95m4-119a24 24 0 1 1-24 24a24 24 0 0 1 24-24m112 128c0 31.18-57.71 48-112 48S16 215.18 16 184c0-14.59 13.22-27.51 37.23-36.37a8 8 0 0 1 5.54 15C42.26 168.74 32 176.92 32 184c0 13.36 36.52 32 96 32s96-18.64 96-32c0-7.08-10.26-15.26-26.77-21.36a8 8 0 0 1 5.54-15C226.78 156.49 240 169.41 240 184"></svg:path>`,
})
export class PhMapPinAreaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinFillIcon],svg[ph-map-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.17 83.41 134.55a8 8 0 0 0 9.18 0C136 236.17 216 179.3 216 104a88.1 88.1 0 0 0-88-88m0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhMapPinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineFillIcon],svg[ph-map-pin-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 224h-49.46A267 267 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A267 267 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M128 72a32 32 0 1 1-32 32a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhMapPinLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusFillIcon],svg[ph-map-pin-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m32 96h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V72a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMapPinPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaFillIcon],svg[ph-map-pin-simple-area-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 64a40 40 0 1 1 48 39.19V176a8 8 0 0 1-16 0v-72.81A40.05 40.05 0 0 1 88 64m130 82.59c-12.26-6.94-29.12-12.27-48.77-15.42a8 8 0 1 0-2.5 15.83c17.54 2.82 33 7.63 43.42 13.55C219 165.5 224 171.14 224 176c0 13.36-36.52 32-96 32s-96-18.64-96-32c0-4.86 5-10.5 13.85-15.49c10.46-5.92 25.88-10.73 43.42-13.55a8 8 0 1 0-2.54-15.79c-19.65 3.15-36.51 8.48-48.77 15.42C19.81 156.87 16 168.26 16 176c0 31.18 57.71 48 112 48s112-16.82 112-48c0-7.74-3.81-19.13-22-29.41"></svg:path>`,
})
export class PhMapPinSimpleAreaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleFillIcon],svg[ph-map-pin-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 127.42V232a8 8 0 0 1-16 0V127.42a56 56 0 1 1 16 0"></svg:path>`,
})
export class PhMapPinSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineFillIcon],svg[ph-map-pin-simple-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h80v-72.58a56 56 0 1 1 16 0V208h80a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhMapPinSimpleLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldFillIcon],svg[ph-map-trifold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28l-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28l61.35 30.68a8.15 8.15 0 0 0 3.58.84a8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M96 176a8 8 0 0 0-1.94.24L40 189.75V62.25l55.07-13.77l.93.46Zm120 17.75l-55.07 13.77l-.93-.46V80a8 8 0 0 0 1.94-.23L216 66.25Z"></svg:path>`,
})
export class PhMapTrifoldFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoFillIcon],svg[ph-markdown-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M128 152a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104Zm77.66-18.34l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhMarkdownLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleFillIcon],svg[ph-marker-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 182.37a87.89 87.89 0 0 1-80 0V176h80ZM104 160v-16h48v16Zm80 35.83V176a16 16 0 0 0-16-16v-16a16 16 0 0 0-13.61-15.8l-10.73-51.46a16 16 0 0 0-31.32 0l-10.73 51.46A16 16 0 0 0 88 144v16a16 16 0 0 0-16 16v19.83a88 88 0 1 1 112 0"></svg:path>`,
})
export class PhMarkerCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniFillIcon],svg[ph-martini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69Zm-25 2.34l-16 16H59.31l-16-16Z"></svg:path>`,
})
export class PhMartiniFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyFillIcon],svg[ph-mask-happy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18c18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2M78 133.33a8 8 0 1 1-12-10.67C71.75 116.28 82.18 112 92 112s20.25 4.28 26 10.66a8 8 0 1 1-12 10.67c-2.68-3-8.85-5.33-14-5.33s-11.36 2.34-14 5.33m90.49 47.86a52.9 52.9 0 0 1-80.9 0a8 8 0 1 1 12.13-10.39a36.89 36.89 0 0 0 56.56 0a8 8 0 0 1 12.17 10.39ZM189.34 134a8 8 0 0 1-11.3-.63c-2.68-3-8.85-5.33-14-5.33s-11.36 2.34-14 5.33A8 8 0 1 1 138 122.66c5.71-6.38 16.14-10.66 26-10.66s20.25 4.28 26 10.66a8 8 0 0 1-.66 11.34"></svg:path>`,
})
export class PhMaskHappyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadFillIcon],svg[ph-mask-sad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18c18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2M66 125.33a8 8 0 0 1 12-10.67c2.68 3 8.85 5.34 14 5.34s11.36-2.35 14-5.34a8 8 0 0 1 12 10.67c-5.75 6.38-16.18 10.67-26 10.67s-20.25-4.29-26-10.67m92.62 63.1A8 8 0 0 1 152 192a7.9 7.9 0 0 1-4.42-1.34C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09Zm31.3-63.1c-5.71 6.38-16.14 10.67-26 10.67s-20.25-4.29-26-10.67A8 8 0 0 1 150 114.66c2.68 3 8.85 5.34 14 5.34s11.36-2.35 14-5.34a8 8 0 0 1 12 10.67Z"></svg:path>`,
})
export class PhMaskSadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoFillIcon],svg[ph-mastodon-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m0 104a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104Z"></svg:path>`,
})
export class PhMastodonLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsFillIcon],svg[ph-math-operations-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-61.66 45.66a8 8 0 0 1 11.32-11.32L168 76.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 88l10.35 10.34a8 8 0 0 1-11.32 11.32L168 99.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 88ZM112 176H96v16a8 8 0 0 1-16 0v-16H64a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-80H64a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m80 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMathOperationsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoFillIcon],svg[ph-matrix-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 200H64a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-8v112h8a8 8 0 0 1 0 16m80-40a8 8 0 0 1-8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.65a23.94 23.94 0 0 1 26.34 3.78A24 24 0 0 1 168 120v32a8 8 0 0 1-8 8m40 32a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V72h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhMatrixLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalFillIcon],svg[ph-medal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m16 0a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"></svg:path>`,
})
export class PhMedalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryFillIcon],svg[ph-medal-military-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17M96 56h64v72.67l-32 14.54l-32-14.54Zm32 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhMedalMilitaryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoFillIcon],svg[ph-medium-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m48-64c-5.68 0-16.4 2.76-24.32 21.25C154.73 96.8 152 112 152 128s2.73 31.2 7.68 42.75C167.6 189.24 178.32 192 184 192s16.4-2.76 24.32-21.25C213.27 159.2 216 144 216 128s-2.73-31.2-7.68-42.75C200.4 66.76 189.68 64 184 64m56 0a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0V72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhMediumLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneFillIcon],svg[ph-megaphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72h-39.8c-2.91-.17-53.62-3.74-101.91-44.24A16 16 0 0 0 32 40v160a16 16 0 0 0 26.29 12.25c37.77-31.68 77-40.76 93.71-43.3v31.72a16 16 0 0 0 7.12 13.33l11 7.33A16 16 0 0 0 194.5 212l11.77-44.36A48 48 0 0 0 200 72m-21 135.89v.11l-11-7.33V168h21.6ZM200 152h-32V88h32a32 32 0 1 1 0 64"></svg:path>`,
})
export class PhMegaphoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleFillIcon],svg[ph-megaphone-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.54 86.66l-176.06-54A16 16 0 0 0 32 48v144a16 16 0 0 0 16 16a16 16 0 0 0 4.52-.65L136 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 240 138v-36a16.09 16.09 0 0 0-11.46-15.34M184 192h-32v-15.18l32-9.82Zm40-54h-.11L152 160.08V79.91L223.89 102h.11z"></svg:path>`,
})
export class PhMegaphoneSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfFillIcon],svg[ph-member-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 88a8 8 0 0 1 0 16H80.68A48.07 48.07 0 0 0 128 176h48a8 8 0 0 1 0 16h-48a64 64 0 0 1 0-128h48a8 8 0 0 1 0 16h-48a48.07 48.07 0 0 0-47.32 40Z"></svg:path>`,
})
export class PhMemberOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryFillIcon],svg[ph-memory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16m-24 40v48h-64V96Zm-96 0v48H48V96Z"></svg:path>`,
})
export class PhMemoryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoFillIcon],svg[ph-messenger-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m53.66 93.66l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhMessengerLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoFillIcon],svg[ph-meta-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-14.77 130.26c-5.63 9-14.33 13.74-25.16 13.74c-20.73 0-34.81-25.31-49.72-52.11C115.47 112.33 101.93 88 90.61 88C78.18 88 64 116.88 64 142.21c0 8.26 1.5 15 4.34 19.56C71 166 74.68 168 79.93 168c6.08 0 13.52-7 22.74-21.51a8 8 0 0 1 13.49 8.59C99.84 180.71 88.22 184 79.93 184c-10.83 0-19.53-4.75-25.16-13.74c-4.43-7.08-6.77-16.78-6.77-28a103.1 103.1 0 0 1 11-45.2C67.34 80.9 78.57 72 90.61 72c20.73 0 34.81 25.31 49.72 52.11c10.88 19.55 24.42 43.89 35.74 43.89c5.25 0 8.93-2 11.59-6.23c2.84-4.53 4.34-11.3 4.34-19.56C192 116.88 177.82 88 165.39 88c-3.4 0-7.35 2.31-11.74 6.88a8 8 0 1 1-11.54-11.09C149.74 75.86 157.35 72 165.39 72c12 0 23.27 8.9 31.62 25.06a103.1 103.1 0 0 1 11 45.15c-.01 11.27-2.35 20.97-6.78 28.05"></svg:path>`,
})
export class PhMetaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorFillIcon],svg[ph-meteor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 160a40 40 0 1 1-40-40a40 40 0 0 1 40 40m74.34-37.66l-48 48a8 8 0 0 0 11.32 11.32l48-48a8 8 0 0 0-11.32-11.32m-20.68-12.68a8 8 0 0 0-11.32-11.32l-24 24a8 8 0 0 0 11.32 11.32Zm40-51.32a8 8 0 0 0-11.32 0l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0 0-11.32m-107.32 43.32a8 8 0 0 0 11.32 0l72-72a8 8 0 1 0-11.32-11.32l-72 72a8 8 0 0 0 0 11.32m13.26 97.94a56 56 0 0 1-79.2-79.2l82.75-82.74a8 8 0 1 0-11.32-11.32l-82.74 82.75a72 72 0 1 0 101.82 101.82a8 8 0 0 0-11.31-11.31"></svg:path>`,
})
export class PhMeteorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeFillIcon],svg[ph-metronome-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m187.14 114.84l26.78-29.46a8 8 0 0 0-11.84-10.76l-20.55 22.6l-17.2-54.07A15.94 15.94 0 0 0 149.08 32h-42.17a15.94 15.94 0 0 0-15.25 11.15l-50.91 160A16 16 0 0 0 56 224h144a16 16 0 0 0 15.25-20.85ZM71.27 160l35.64-112h42.17l20 62.9l-44.62 49.1Zm74.81 0l28.62-31.48l10 31.48Z"></svg:path>`,
})
export class PhMetronomeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
