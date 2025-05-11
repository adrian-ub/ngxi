import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideLightIcon],svg[ph-divide-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-94-50a14 14 0 1 0-14-14a14 14 0 0 0 14 14m0 100a14 14 0 1 0 14 14a14 14 0 0 0-14-14"></svg:path>`,
})
export class PhDivideLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDnaLightIcon],svg[ph-dna-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 204.5V232a6 6 0 0 1-12 0v-27.5a65.64 65.64 0 0 0-36.48-59l-48.4-24.2A77.57 77.57 0 0 1 58 51.5V24a6 6 0 0 1 12 0v27.5a65.64 65.64 0 0 0 36.48 59l48.4 24.2A77.57 77.57 0 0 1 198 204.5m-38-2.5H70.05A66 66 0 0 1 74 182h74.13a6 6 0 0 0 0-12H79.77a65.9 65.9 0 0 1 17.16-18.7a6 6 0 0 0-7.1-9.67A78.27 78.27 0 0 0 58 204.5V232a6 6 0 0 0 12 0v-18h90a6 6 0 0 0 0-12m32-184a6 6 0 0 0-6 6v18H96a6 6 0 0 0 0 12h90a66 66 0 0 1-4 20h-74.11a6 6 0 1 0 0 12h68.34a65.9 65.9 0 0 1-17.16 18.7a6 6 0 0 0 7.1 9.67A78.27 78.27 0 0 0 198 51.5V24a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhDnaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDogLightIcon],svg[ph-dog-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m65.77 10.72a14.2 14.2 0 0 1-5.89 1.29a13.72 13.72 0 0 1-9.88-4.23V184a38 38 0 0 1-38 38H80a38 38 0 0 1-38-38v-46.22a13.76 13.76 0 0 1-9.89 4.22a14.2 14.2 0 0 1-5.88-1.29a13.82 13.82 0 0 1-8-15.34l16.42-88a14 14 0 0 1 17.16-11l.24.07L104.86 42h46.28l52.79-15.51l.24-.07a14 14 0 0 1 17.16 11l16.42 88a13.81 13.81 0 0 1-7.98 15.3M93.88 51.27L48.84 38a1.9 1.9 0 0 0-1.49.27a2 2 0 0 0-.88 1.32l-16.42 88a2 2 0 0 0 3.54 1.61ZM202 184v-61.57L149.06 54h-42.12L54 122.43V184a26 26 0 0 0 26 26h42v-15.52l-14.24-14.24a6 6 0 0 1 8.48-8.48L128 183.51l11.76-11.75a6 6 0 0 1 8.48 8.48L134 194.48V210h42a26 26 0 0 0 26-26m24-56.4l-16.42-88a2 2 0 0 0-.88-1.31a2.07 2.07 0 0 0-1.49-.27l-45 13.23l60.32 78a2 2 0 0 0 3.47-1.65"></svg:path>`,
})
export class PhDogLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorLightIcon],svg[ph-door-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 218h-26V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v178H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M62 40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v178H62Zm104 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDoorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenLightIcon],svg[ph-door-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 218h-26V40a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v178H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12M194 40v178h-20V38h18a2 2 0 0 1 2 2M62 40a2 2 0 0 1 2-2h98v180H62Zm80 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDoorOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotLightIcon],svg[ph-dot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineLightIcon],svg[ph-dot-outline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhDotOutlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineLightIcon],svg[ph-dots-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10a10 10 0 0 0 10 10M60 118a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10M60 186a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixLightIcon],svg[ph-dots-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10a10 10 0 0 0 10 10M60 154a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalLightIcon],svg[ph-dots-six-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsSixVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleLightIcon],svg[ph-dots-three-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m10-90a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-44 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m88 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDotsThreeCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalLightIcon],svg[ph-dots-three-circle-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m10-134a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDotsThreeCircleVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeLightIcon],svg[ph-dots-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-78-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m136 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineLightIcon],svg[ph-dots-three-outline-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18M48 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m160-48a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhDotsThreeOutlineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalLightIcon],svg[ph-dots-three-outline-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m0-68a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m0 148a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhDotsThreeOutlineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalLightIcon],svg[ph-dots-three-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 60a10 10 0 1 1 10 10a10 10 0 0 1-10-10m10 58a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsThreeVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadLightIcon],svg[ph-download-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 136v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-64a14 14 0 0 1 14-14h40a6 6 0 0 1 0 12H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2v-64a2 2 0 0 0-2-2h-40a6 6 0 0 1 0-12h40a14 14 0 0 1 14 14m-114.24-3.76a6 6 0 0 0 8.48 0l48-48a6 6 0 0 0-8.48-8.48L134 113.51V24a6 6 0 0 0-12 0v89.51L84.24 75.76a6 6 0 0 0-8.48 8.48ZM198 168a10 10 0 1 0-10 10a10 10 0 0 0 10-10"></svg:path>`,
})
export class PhDownloadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleLightIcon],svg[ph-download-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 144v64a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6v-64a6 6 0 0 1 12 0v58h164v-58a6 6 0 0 1 12 0m-98.24 4.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0-8.48-8.48L134 129.51V32a6 6 0 0 0-12 0v97.51L92.24 99.76a6 6 0 0 0-8.48 8.48Z"></svg:path>`,
})
export class PhDownloadSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressLightIcon],svg[ph-dress-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.86 210.49a1 1 0 0 0-.08-.19l-45.94-97.86l21.08-33.1l.09-.14a14 14 0 0 0 0-14.4c-.07-.12-.15-.24-.23-.36L166 33.33V8a6 6 0 0 0-12 0v25.12l-5.7 7.12a26 26 0 0 1-40.6 0l-5.7-7.12V8a6 6 0 0 0-12 0v25.33L68.22 64.44c-.08.12-.16.24-.23.36a14 14 0 0 0 0 14.4l.09.14l21.08 33.1l-45.94 97.86a1 1 0 0 0-.08.19A14 14 0 0 0 56 230h144a14 14 0 0 0 12.87-19.51ZM78.26 73a2 2 0 0 1-.05-1.89l18.11-25.88l2 2.51a38 38 0 0 0 59.34 0l2-2.51l18.11 25.86a2 2 0 0 1 0 1.89l-21 33H99.29Zm123.4 144.1a1.93 1.93 0 0 1-1.67.9H56a2 2 0 0 1-1.87-2.72L99.81 118h56.38l45.67 97.28a1.92 1.92 0 0 1-.2 1.82"></svg:path>`,
})
export class PhDressLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserLightIcon],svg[ph-dresser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 192a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6M120 70h16a6 6 0 0 0 0-12h-16a6 6 0 0 0 0 12m16 52h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m78-82v176a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h144a14 14 0 0 1 14 14M54 154h148v-52H54Zm0-114v50h148V40a2 2 0 0 0-2-2H56a2 2 0 0 0-2 2m148 176v-50H54v50a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhDresserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoLightIcon],svg[ph-dribbble-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.81 96.3c-3.26-.19-6.54-.3-9.8-.3a166.4 166.4 0 0 0-45.25 6.29A164.3 164.3 0 0 0 148.33 96c-.14-.25-.3-.49-.44-.74a166.3 166.3 0 0 0 40.79-33.71a89.8 89.8 0 0 1 29.13 60.75m-38.52-68.21a154.5 154.5 0 0 1-37.9 31.11a167 167 0 0 0-42.51-42.36a89.87 89.87 0 0 1 80.41 11.25m-93.58-5.51a155 155 0 0 1 45 42.27A153.7 153.7 0 0 1 64 106a157 157 0 0 1-22.84-1.69a90.37 90.37 0 0 1 44.55-55.73M38 128a90 90 0 0 1 .79-11.92A167 167 0 0 0 64 118a165.7 165.7 0 0 0 73.29-17c.22.37.46.73.67 1.1a152.2 152.2 0 0 1 13.38 29.9a164.6 164.6 0 0 0-26.09 12.11a167 167 0 0 0-55.68 52.29A89.84 89.84 0 0 1 38 128m41.19 75.58a155.24 155.24 0 0 1 52.05-49.12a153 153 0 0 1 23.38-10.93a154.3 154.3 0 0 1 4.3 36.16a154.8 154.8 0 0 1-3.81 34.13a89.88 89.88 0 0 1-75.92-10.24m89.24 4.81a167 167 0 0 0 2.49-28.7a166.7 166.7 0 0 0-4.86-39.87A154.6 154.6 0 0 1 208 134c3.25 0 6.52.11 9.77.32a90.16 90.16 0 0 1-49.34 74.07"></svg:path>`,
})
export class PhDribbbleLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneLightIcon],svg[ph-drone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.24 67.76a6 6 0 0 0-8.48 0L149.52 98h-43L76.24 67.76a6 6 0 0 0-8.48 8.48L98 106.48v43l-30.24 30.28a6 6 0 1 0 8.48 8.48L106.48 158h43l30.24 30.24a6 6 0 0 0 8.48-8.48L158 149.52v-43l30.24-30.24a6 6 0 0 0 0-8.52M110 110h36v36h-36Zm30.39-48A42 42 0 1 1 194 115.61a6.1 6.1 0 0 1-2 .34a6 6 0 0 1-2-11.66A30 30 0 1 0 151.71 66a6 6 0 1 1-11.32-4M222 180a42 42 0 0 1-81.61 14a6 6 0 0 1 11.32-4A30 30 0 1 0 190 151.71a6 6 0 0 1 4-11.32A42.07 42.07 0 0 1 222 180m-106.39 14A42 42 0 1 1 62 140.39a6 6 0 1 1 4 11.32A30 30 0 1 0 104.29 190a6 6 0 0 1 11.32 4M34 76a42 42 0 0 1 81.61-14a6 6 0 1 1-11.32 4A30 30 0 1 0 66 104.29A6 6 0 0 1 64 116a6.1 6.1 0 0 1-2-.34A42.07 42.07 0 0 1 34 76"></svg:path>`,
})
export class PhDroneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomLightIcon],svg[ph-drop-half-bottom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a251.4 251.4 0 0 0-41.09-38a6 6 0 0 0-6.88 0a251.4 251.4 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M188.88 186H67.12a74 74 0 0 1-9.78-20h141.32a74 74 0 0 1-9.78 20M54.69 154a75 75 0 0 1-.69-10a92 92 0 0 1 .56-10h146.88a92 92 0 0 1 .56 10a75 75 0 0 1-.69 10ZM128 23.49c13.13 10.12 59.83 49.06 71.39 98.51H56.61C68.17 72.55 114.87 33.61 128 23.49M77.48 198h101a73.81 73.81 0 0 1-101 0"></svg:path>`,
})
export class PhDropHalfBottomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfLightIcon],svg[ph-drop-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a251.4 251.4 0 0 0-41.09-38a6 6 0 0 0-6.88 0a251.4 251.4 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M202 144a75 75 0 0 1-.69 10H134v-20h67.44a92 92 0 0 1 .56 10m-15.2-54H134V70h39.89a176 176 0 0 1 12.91 20M134 198h44.52A73.76 73.76 0 0 1 134 217.74Zm0-12v-20h64.66a74 74 0 0 1-9.78 20Zm0-64v-20h58.7a117.4 117.4 0 0 1 6.69 20Zm30.29-64H134V28.3A257 257 0 0 1 164.29 58M54 144c0-53.42 47.35-98.56 68-115.7v189.44A74.09 74.09 0 0 1 54 144"></svg:path>`,
})
export class PhDropHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropLightIcon],svg[ph-drop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a253 253 0 0 0-41.09-38a6 6 0 0 0-6.88 0a253 253 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M128 218a74.09 74.09 0 0 1-74-74c0-59.62 59-108.93 74-120.51c15 11.58 74 60.89 74 120.51a74.09 74.09 0 0 1-74 74m53.92-65A55.58 55.58 0 0 1 137 197.92a7 7 0 0 1-1 .08a6 6 0 0 1-1-11.92c17.38-2.92 32.13-17.68 35.08-35.08a6 6 0 1 1 11.84 2"></svg:path>`,
})
export class PhDropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleLightIcon],svg[ph-drop-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.53 49.06a251.4 251.4 0 0 0-41.09-38a6 6 0 0 0-6.88 0a251.4 251.4 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94M128 218a74.09 74.09 0 0 1-74-74c0-59.62 59-108.93 74-120.51c15 11.58 74 60.89 74 120.51a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhDropSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashLightIcon],svg[ph-drop-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l23.7 26.07C50.51 94.93 42 119.77 42 144a86 86 0 0 0 147.28 60.33L203.56 220a6 6 0 0 0 8.88-8.08ZM128 218a74.09 74.09 0 0 1-74-74c0-21 7.27-42.76 21.59-64.73l105.59 116.15A73.8 73.8 0 0 1 128 218M91.4 49.07a6 6 0 0 1-.2-8.49a245.6 245.6 0 0 1 33.36-29.49a6 6 0 0 1 6.88 0a251.4 251.4 0 0 1 41.09 38C199.66 80.26 214 113.09 214 144a86.2 86.2 0 0 1-3.08 22.87a6 6 0 0 1-5.78 4.41a6.2 6.2 0 0 1-1.59-.21a6 6 0 0 1-4.2-7.38A74 74 0 0 0 202 144c0-59.63-59-108.94-74-120.52a254 254 0 0 0-28.12 25.38a6 6 0 0 1-8.48.21"></svg:path>`,
})
export class PhDropSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoLightIcon],svg[ph-dropbox-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.42 151.07L190.54 120l44.88-31.07a6 6 0 0 0 0-9.86l-52-36a6 6 0 0 0-6.84 0L128 76.7L79.42 43.07a6 6 0 0 0-6.84 0l-52 36a6 6 0 0 0 0 9.86L65.46 120l-44.88 31.07a6 6 0 0 0 0 9.86l52 36a6 6 0 0 0 6.84 0L128 163.3l48.58 33.63a6 6 0 0 0 6.84 0l52-36a6 6 0 0 0 0-9.86M128 148.7L86.54 120L128 91.3l41.46 28.7Zm52-93.4L221.46 84L180 112.7L138.54 84Zm-104 0L117.46 84L76 112.7L34.54 84Zm0 129.4L34.54 156L76 127.3l41.46 28.7Zm104 0L138.54 156L180 127.3l41.46 28.7ZM156.82 208a6 6 0 0 1-1.51 8.35l-23.89 16.54a6 6 0 0 1-6.84 0l-23.89-16.54a6 6 0 0 1 6.83-9.86L128 220.7l20.48-14.17a6 6 0 0 1 8.34 1.47"></svg:path>`,
})
export class PhDropboxLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarLightIcon],svg[ph-ear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 104a6 6 0 0 1-12 0a74 74 0 0 0-148 0c0 27.55 8.83 36.06 18.18 45.08c4.31 4.15 8.77 8.45 12.16 14.47C88.15 170.31 90 178.3 90 188a38 38 0 0 0 38 38c10.74 0 19.69-4.52 27.37-13.82a6 6 0 0 1 9.26 7.64C154.66 231.88 142.34 238 128 238a50.06 50.06 0 0 1-50-50c0-16.64-6.24-22.66-14.15-30.29C54.12 148.33 42 136.64 42 104a86 86 0 0 1 172 0m-37.14 58.81a6 6 0 0 0-8.19 2.19a10 10 0 0 1-18.67-5c0-10 5-16.67 10.8-24.4C167 127.35 174 118 174 104a46 46 0 0 0-92 0a6 6 0 0 0 12 0a34 34 0 0 1 68 0c0 10-5 16.67-10.8 24.4C145 136.65 138 146 138 160a22 22 0 0 0 41.05 11a6 6 0 0 0-2.19-8.19"></svg:path>`,
})
export class PhEarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashLightIcon],svg[ph-ear-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l12.16 13.41A85.34 85.34 0 0 0 42 104c0 32.64 12.12 44.33 21.85 53.71C71.76 165.34 78 171.36 78 188a50.06 50.06 0 0 0 50 50c14.34 0 26.66-6.12 36.63-18.18a6 6 0 0 0-9.26-7.64C147.69 221.48 138.74 226 128 226a38 38 0 0 1-38-38c0-21.74-9.06-30.48-17.82-38.92C62.83 140.06 54 131.55 54 104a73.4 73.4 0 0 1 10.12-37.35l20.37 22.41A46 46 0 0 0 82 104a6 6 0 0 0 12 0a36 36 0 0 1 .26-4.19l45.15 49.66A39.3 39.3 0 0 0 138 160a22 22 0 0 0 29.71 20.6l35.85 39.4a6 6 0 0 0 8.88-8.08Zm97.64 125.25l7.78 8.55a10 10 0 0 1-7.78-8.59ZM81.83 38.38a6 6 0 0 1 2.07-8.22A86 86 0 0 1 214 104a6 6 0 0 1-12 0A74 74 0 0 0 90.06 40.45a6 6 0 0 1-8.23-2.07m76.83 78.87A27.9 27.9 0 0 0 162 104a34 34 0 0 0-45-32.17a6 6 0 0 1-3.89-11.35A46 46 0 0 1 174 104a40 40 0 0 1-4.68 18.76a6 6 0 1 1-10.66-5.51"></svg:path>`,
})
export class PhEarSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackLightIcon],svg[ph-egg-crack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 60.67C167.18 34 145.87 18 128 18S88.82 34 71 60.67C52.57 88.32 42 121.61 42 152a86 86 0 0 0 172 0c0-30.39-10.57-63.68-29-91.33M128 226a74.09 74.09 0 0 1-74-74c0-28.08 9.84-58.94 27-84.67C96.11 44.65 114.56 30 128 30c10.52 0 24.12 9 36.78 23.77L123.52 100a6 6 0 0 0 3 9.82l26.48 6.61l-6.87 34.39a6 6 0 0 0 4.7 7.06a6 6 0 0 0 1.17.12a6 6 0 0 0 5.87-4.82l8-40a6 6 0 0 0-4.42-7l-22.37-5.59l33.2-37.2q1.36 1.92 2.72 3.94c17.15 25.73 27 56.59 27 84.67a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhEggCrackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggLightIcon],svg[ph-egg-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 60.67C167.18 34 145.87 18 128 18S88.82 34 71 60.67C52.57 88.32 42 121.61 42 152a86 86 0 0 0 172 0c0-30.39-10.57-63.68-29-91.33M128 226a74.09 74.09 0 0 1-74-74c0-28.08 9.84-58.94 27-84.67C96.11 44.65 114.56 30 128 30s31.89 14.65 47 37.33c17.15 25.73 27 56.59 27 84.67a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhEggLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectLightIcon],svg[ph-eject-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 154H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM48.24 134h159.52a14.19 14.19 0 0 0 13.1-8.55a13.61 13.61 0 0 0-2.72-15L144.41 33a22.76 22.76 0 0 0-32.82 0l-73.73 77.5a13.61 13.61 0 0 0-2.72 15a14.19 14.19 0 0 0 13.1 8.5m-1.69-15.23l73.73-77.51a10.77 10.77 0 0 1 15.44 0l73.73 77.51a1.67 1.67 0 0 1 .38 2a2.11 2.11 0 0 1-2.07 1.27H48.24a2.11 2.11 0 0 1-2.07-1.27a1.67 1.67 0 0 1 .38-2"></svg:path>`,
})
export class PhEjectLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleLightIcon],svg[ph-eject-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 200a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6M27.39 150a14 14 0 0 1 1.77-15l81.66-100.8a22.1 22.1 0 0 1 34.36 0L226.84 135a14.09 14.09 0 0 1-10.93 23H40.09a14 14 0 0 1-12.7-8m10.83-5.16a2 2 0 0 0 1.87 1.16h175.82a2 2 0 0 0 1.87-1.18a2 2 0 0 0-.27-2.24L135.86 41.76a10.1 10.1 0 0 0-15.72 0L38.49 142.58a2 2 0 0 0-.27 2.24Z"></svg:path>`,
})
export class PhEjectSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorLightIcon],svg[ph-elevator-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-30 76v100h-44V110Zm-56 100H78V110h44Zm88-2a2 2 0 0 1-2 2h-18V104a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v106H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM150 72a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhElevatorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyLightIcon],svg[ph-empty-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.51 62.66L212.44 44a6 6 0 1 0-8.88-8l-16.93 18.58A94 94 0 0 0 60.49 193.34L43.56 212a6 6 0 0 0 8.88 8l16.93-18.62A94 94 0 0 0 195.51 62.66M46 128a81.93 81.93 0 0 1 132.53-64.51L68.59 184.43A81.7 81.7 0 0 1 46 128m82 82a81.57 81.57 0 0 1-50.53-17.49L187.41 71.57A81.94 81.94 0 0 1 128 210"></svg:path>`,
})
export class PhEmptyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineLightIcon],svg[ph-engine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106h-13.51l-35.91-35.9a13.9 13.9 0 0 0-9.89-4.1H138V38h26a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12h26v28H64a14 14 0 0 0-14 14v54H22v-26a6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-26h28v22.69a13.9 13.9 0 0 0 4.1 9.89l39.32 39.32a13.9 13.9 0 0 0 9.89 4.1h77.38a13.9 13.9 0 0 0 9.89-4.1l35.91-35.9H240a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-16a6 6 0 0 0-4.24 1.76l-37.66 37.66a2 2 0 0 1-1.41.58h-77.38a2 2 0 0 1-1.41-.58L62.58 170.1a2 2 0 0 1-.58-1.41V80a2 2 0 0 1 2-2h116.69a2 2 0 0 1 1.41.58l37.66 37.66A6 6 0 0 0 224 118h16a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhEngineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeLightIcon],svg[ph-envelope-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6m-96 85.86L47.42 62h161.16ZM101.67 128L38 186.36V69.64Zm8.88 8.14L124 148.42a6 6 0 0 0 8.1 0l13.4-12.28L208.58 194H47.43Zm43.78-8.14L218 69.64v116.72Z"></svg:path>`,
})
export class PhEnvelopeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenLightIcon],svg[ph-envelope-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.33 91l-96-64a6 6 0 0 0-6.66 0l-96 64A6 6 0 0 0 26 96v104a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V96a6 6 0 0 0-2.67-5m-127.15 61L38 195.9v-88.25Zm12.27 6h31.1l62.29 44H50.16Zm43.37-6L218 107.65v88.25ZM128 39.21l85.43 57l-69.9 49.79h-31.06l-69.9-49.83Z"></svg:path>`,
})
export class PhEnvelopeOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleLightIcon],svg[ph-envelope-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6m-15.42 12L128 135.86L47.42 62ZM216 194H40a2 2 0 0 1-2-2V69.64l86 78.78a6 6 0 0 0 8.1 0L218 69.64V192a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhEnvelopeSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenLightIcon],svg[ph-envelope-simple-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.33 91l-96-64a6 6 0 0 0-6.66 0l-96 64A6 6 0 0 0 26 96v104a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V96a6 6 0 0 0-2.67-5M128 39.21l85.43 57l-69.9 49.79h-31.06l-69.9-49.83ZM216 202H40a2 2 0 0 1-2-2v-92.35l69.06 49.24a6.06 6.06 0 0 0 3.49 1.11h34.9a6.06 6.06 0 0 0 3.49-1.11L218 107.65V200a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhEnvelopeSimpleOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerLightIcon],svg[ph-equalizer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 96a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6 26H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-64h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-48-20h48a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12m48 52h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhEqualizerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsLightIcon],svg[ph-equals-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 160a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 102h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhEqualsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserLightIcon],svg[ph-eraser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.57 81.81l-41.38-41.38a22 22 0 0 0-31.12 0L32.43 159.07a22 22 0 0 0 0 31.11l30.07 30.06a6 6 0 0 0 4.24 1.76H216a6 6 0 0 0 0-12h-89.51l97.08-97.08a22 22 0 0 0 0-31.11M109.51 210H69.22l-28.3-28.3a10 10 0 0 1 0-14.15L96 112.48L151.52 168Zm105.57-105.56L160 159.51L104.48 104l55.08-55.07a10 10 0 0 1 14.14 0l41.38 41.37a10 10 0 0 1 0 14.14"></svg:path>`,
})
export class PhEraserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownLightIcon],svg[ph-escalator-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.76 84.24a6 6 0 0 1 8.48-8.48L194 89.51V48a6 6 0 0 1 12 0v41.51l13.76-13.75a6 6 0 0 1 8.48 8.48l-24 24a6 6 0 0 1-8.48 0ZM238 160v40a14 14 0 0 1-14 14h-56a6 6 0 0 1-4.41-1.93L69.37 110H32a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h56a6 6 0 0 1 4.41 1.93L186.63 146H224a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2h-40a6 6 0 0 1-4.41-1.93L85.37 54H32a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a6 6 0 0 1 4.41 1.93L170.63 202H224a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhEscalatorDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpLightIcon],svg[ph-escalator-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 42h-56a6 6 0 0 0-4.41 1.93L69.37 146H32a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h56a6 6 0 0 0 4.41-1.93L186.63 110H224a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 54a2 2 0 0 1-2 2h-40a6 6 0 0 0-4.41 1.93L85.37 202H32a2 2 0 0 1-2-2v-40a2 2 0 0 1 2-2h40a6 6 0 0 0 4.41-1.93L170.63 54H224a2 2 0 0 1 2 2Zm2.24 75.76a6 6 0 1 1-8.48 8.48L206 166.49V208a6 6 0 0 1-12 0v-41.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhEscalatorUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamLightIcon],svg[ph-exam-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v160a6 6 0 0 0 8.68 5.37L64 206.71l29.32 14.66a6 6 0 0 0 5.36 0L128 206.71l29.32 14.66a6 6 0 0 0 5.36 0L192 206.71l29.32 14.66a6 6 0 0 0 2.68.63a5.93 5.93 0 0 0 3.15-.9A6 6 0 0 0 230 216V56a14 14 0 0 0-14-14m2 164.29l-23.32-11.66a6 6 0 0 0-5.36 0L160 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L96 209.29l-29.32-14.66a6 6 0 0 0-5.36 0L38 206.29V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-116.63-113a6 6 0 0 0-10.74 0l-32 64a6 6 0 1 0 10.74 5.36L75.71 150h40.58l6.34 12.68a6 6 0 1 0 10.74-5.36ZM81.71 138L96 109.42L110.29 138ZM198 128a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhExamLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkLightIcon],svg[ph-exclamation-mark-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 200a14 14 0 1 1-14-14a14 14 0 0 1 14 14m-14-42a6 6 0 0 0 6-6V48a6 6 0 0 0-12 0v104a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhExclamationMarkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeLightIcon],svg[ph-exclude-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.91 83.09a78 78 0 1 0-89.82 89.82a78 78 0 1 0 89.82-89.82M226 160a65 65 0 0 1-.62 8.9l-53.76-53.77A77.8 77.8 0 0 0 174 96v-.49A66.1 66.1 0 0 1 226 160M45.31 53.79l55.5 55.5a77.9 77.9 0 0 0-12 19L34 73.48a66 66 0 0 1 11.31-19.69M73.48 34l54.8 54.81a77.9 77.9 0 0 0-19 12l-55.5-55.5A66 66 0 0 1 73.48 34M94 160a66.08 66.08 0 0 1 66-66h1.95c0 .65.05 1.3.05 2a66.08 66.08 0 0 1-66 66c-.65 0-1.3 0-2-.05zm52.71-4.81l55.5 55.5A66 66 0 0 1 182.52 222l-54.8-54.81a77.9 77.9 0 0 0 18.99-12m8.48-8.48a77.9 77.9 0 0 0 12-19L222 182.52a66 66 0 0 1-11.35 19.69Zm5.3-64.7H160a77.8 77.8 0 0 0-19.13 2.38L87.1 30.62A65 65 0 0 1 96 30a66.1 66.1 0 0 1 64.49 52ZM30 96a65 65 0 0 1 .62-8.9l53.76 53.77A77.8 77.8 0 0 0 82 160v.49A66.1 66.1 0 0 1 30 96m65.51 78H96a77.8 77.8 0 0 0 19.13-2.38l53.77 53.76a65 65 0 0 1-8.9.62a66.1 66.1 0 0 1-64.49-52"></svg:path>`,
})
export class PhExcludeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareLightIcon],svg[ph-exclude-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a6 6 0 0 0-6-6H40a6 6 0 0 0-6 6v120a6 6 0 0 0 6 6h50v50a6 6 0 0 0 6 6h120a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-53.52 120l-44-44h39l44 44ZM46 54.48l44 44v39l-44-44ZM93.52 46l44 44h-39l-44-44ZM102 154v-52h52v52Zm64 3.52v-39l44 44v39Zm44-12L166.48 102H210Zm-56-56L110.48 46H154Zm-108 21L89.52 154H46Zm56 56L145.52 210H102Z"></svg:path>`,
})
export class PhExcludeSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportLightIcon],svg[ph-export-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 112v96a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14v-96a14 14 0 0 1 14-14h24a6 6 0 0 1 0 12H56a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2v-96a2 2 0 0 0-2-2h-24a6 6 0 0 1 0-12h24a14 14 0 0 1 14 14M92.24 68.24L122 38.49V136a6 6 0 0 0 12 0V38.49l29.76 29.75a6 6 0 1 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 1 0 8.48 8.48"></svg:path>`,
})
export class PhExportLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedLightIcon],svg[ph-eye-closed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.21 165a6 6 0 0 1-10.42 6l-20-35.08a122 122 0 0 1-39 18.09l6.17 37a6 6 0 0 1-4.93 6.91a7 7 0 0 1-1 .08a6 6 0 0 1-5.91-5L148 156.44a128.9 128.9 0 0 1-40 0L101.92 193a6 6 0 0 1-5.92 5a7 7 0 0 1-1-.08a6 6 0 0 1-4.92-6.92l6.17-37a122 122 0 0 1-39-18.09L37.21 171a6 6 0 1 1-10.42-6l20.85-36.48a152 152 0 0 1-20.31-20.77a6 6 0 0 1 9.34-7.54C53.54 121.11 83.07 146 128 146s74.46-24.89 91.33-45.77a6 6 0 0 1 9.34 7.54a152 152 0 0 1-20.31 20.77Z"></svg:path>`,
})
export class PhEyeClosedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeLightIcon],svg[ph-eye-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"></svg:path>`,
})
export class PhEyeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashLightIcon],svg[ph-eye-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l20.88 23c-37.28 21.9-53.23 57-53.92 58.57a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206a124.9 124.9 0 0 0 52.57-11.25l23 25.29a6 6 0 0 0 8.88-8.08Zm48.62 71.32l45 49.52a34 34 0 0 1-45-49.52M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.6 134.6 0 0 1 22.69 128c4.29-8.2 20.1-35.18 50-51.91l20.2 22.21a46 46 0 0 0 61.35 67.48l17.81 19.6A113.5 113.5 0 0 1 128 194m6.4-99.4a6 6 0 0 1 2.25-11.79a46.17 46.17 0 0 1 37.15 40.87a6 6 0 0 1-5.42 6.53h-.56a6 6 0 0 1-6-5.45A34.1 34.1 0 0 0 134.4 94.6m111.08 35.85c-.41.92-10.37 23-32.86 43.12a6 6 0 1 1-8-8.94A134.1 134.1 0 0 0 233.31 128a134.7 134.7 0 0 0-23.86-32.07C186.78 73.42 159.38 62 128 62a120 120 0 0 0-19.69 1.6a6 6 0 1 1-2-11.83A131 131 0 0 1 128 50c43.38 0 73 20.54 90.24 37.76c18.58 18.58 26.9 37 27.24 37.81a6 6 0 0 1 0 4.88"></svg:path>`,
})
export class PhEyeSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperLightIcon],svg[ph-eyedropper-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 67.34a33.8 33.8 0 0 0-10.64-24.25c-13.24-12.53-34.68-12.09-47.82 1.09L142.82 65l-.63-.63a22 22 0 0 0-31.11 0l-9 9a14 14 0 0 0 0 19.81l3.47 3.47l-52.41 52.45a37.79 37.79 0 0 0-9.84 36.73l-8.31 19a11.68 11.68 0 0 0 2.46 13a13.9 13.9 0 0 0 9.87 4.17a14.15 14.15 0 0 0 5.68-1.18l18-7.9a37.92 37.92 0 0 0 35.84-10.07l52.44-52.46l3.47 3.48a14 14 0 0 0 19.8 0l9-9a22 22 0 0 0 0-31.12l-.66-.66L212 91.85a33.76 33.76 0 0 0 10-24.51m-123.61 127a26 26 0 0 1-26 6.47a6 6 0 0 0-4.16.24l-20 8.75a2 2 0 0 1-2.09-.31l9.12-20.9a5.94 5.94 0 0 0 .19-4.31a25.88 25.88 0 0 1 6.26-26.72l52.44-52.45l36.76 36.78Zm105.16-111l-25.38 25.56a6 6 0 0 0 0 8.47l4.88 4.89a10 10 0 0 1 0 14.15l-9 9a2 2 0 0 1-2.82 0l-60.69-60.7a2 2 0 0 1 0-2.83l9-9a10 10 0 0 1 14.14 0l4.89 4.89a6 6 0 0 0 4.24 1.75a6 6 0 0 0 4.25-1.77L172 52.66c8.58-8.58 22.52-9 31.08-.85a22 22 0 0 1 .44 31.57Z"></svg:path>`,
})
export class PhEyedropperLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleLightIcon],svg[ph-eyedropper-sample-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 67.34a33.8 33.8 0 0 0-10.64-24.25c-13.24-12.53-34.68-12.09-47.82 1.09L142.82 65l-.63-.63a22 22 0 0 0-31.11 0l-9 9a14 14 0 0 0 0 19.81l3.47 3.47l-52.41 52.45a37.81 37.81 0 0 0-9.84 36.73l-8.31 19a11.68 11.68 0 0 0 2.46 13a13.9 13.9 0 0 0 9.87 4.17a14.15 14.15 0 0 0 5.68-1.18l18-7.9a37.92 37.92 0 0 0 35.84-10.07l52.44-52.46l3.47 3.48a14 14 0 0 0 19.8 0l9-9a22.06 22.06 0 0 0 0-31.13l-.66-.65L212 91.85a33.76 33.76 0 0 0 10-24.51m-123.61 127a26 26 0 0 1-26 6.47a6 6 0 0 0-4.17.24l-20 8.75a2 2 0 0 1-2.09-.31l9.12-20.9a5.94 5.94 0 0 0 .19-4.31A25.9 25.9 0 0 1 56 166h70.78ZM138.78 154H65.24l48.83-48.84l36.76 36.78Zm64.77-70.59l-25.38 25.49a6 6 0 0 0 0 8.47l4.88 4.89a10 10 0 0 1 0 14.15l-9 9a2 2 0 0 1-2.82 0l-60.69-60.7a2 2 0 0 1 0-2.83l9-9a10 10 0 0 1 14.14 0l4.89 4.89a6 6 0 0 0 4.24 1.75a6 6 0 0 0 4.25-1.77L172 52.66c8.57-8.58 22.51-9 31.07-.85a22 22 0 0 1 .44 31.57Z"></svg:path>`,
})
export class PhEyedropperSampleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesLightIcon],svg[ph-eyeglasses-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42a6 6 0 0 0 0 12a18 18 0 0 1 18 18v62.65A42 42 0 0 0 147.21 154h-38.42A42 42 0 0 0 38 134.65V72a18 18 0 0 1 18-18a6 6 0 0 0 0-12a30 30 0 0 0-30 30v92a42 42 0 0 0 84 2h36.1a42 42 0 0 0 83.9-2V72a30 30 0 0 0-30-30M68 194a30 30 0 1 1 30-30a30 30 0 0 1-30 30m120 0a30 30 0 1 1 30-30a30 30 0 0 1-30 30"></svg:path>`,
})
export class PhEyeglassesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesLightIcon],svg[ph-eyes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 34c-21.15 0-39.1 20.15-48 50.26C119.1 54.15 101.15 34 80 34c-30.28 0-54 41.29-54 94s23.72 94 54 94c21.15 0 39.1-20.15 48-50.26c8.9 30.11 26.85 50.26 48 50.26c30.28 0 54-41.29 54-94s-23.72-94-54-94M80 210c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C45.81 70.1 61.76 46 80 46c22.77 0 42 37.55 42 82s-19.23 82-42 82m-42-82a18 18 0 1 1 18 18a18 18 0 0 1-18-18m138 82c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C141.81 70.1 157.76 46 176 46c22.77 0 42 37.55 42 82s-19.23 82-42 82m-42-82a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhEyesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskLightIcon],svg[ph-face-mask-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m-6 26H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12m86-26v24a30 30 0 0 1-30 30h-6.5c-6.81 15.88-21.28 29.6-42.82 40.37a189 189 0 0 1-45.61 15.53a5.8 5.8 0 0 1-2.14 0a189 189 0 0 1-45.61-15.53C59.78 187.6 45.31 173.88 38.5 158H32a30 30 0 0 1-30-30v-24a30 30 0 0 1 30-30h2.35a14 14 0 0 1 8.87-10.07l80-29.09a14 14 0 0 1 9.56 0l80 29.09A14 14 0 0 1 221.65 74H224a30 30 0 0 1 30 30M34.89 146a57 57 0 0 1-.89-10V86h-2a18 18 0 0 0-18 18v24a18 18 0 0 0 18 18ZM210 136V77.09a2 2 0 0 0-1.32-1.88l-80-29.09a2 2 0 0 0-1.36 0l-80 29.09A2 2 0 0 0 46 77.09V136c0 20.7 13.61 38 40.46 51.52A180.8 180.8 0 0 0 128 201.88a181 181 0 0 0 41.54-14.36C196.39 174 210 156.7 210 136m32-32a18 18 0 0 0-18-18h-2v50a57 57 0 0 1-.89 10H224a18 18 0 0 0 18-18Z"></svg:path>`,
})
export class PhFaceMaskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoLightIcon],svg[ph-facebook-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V150h26a6 6 0 0 0 0-12h-26v-26a18 18 0 0 1 18-18h16a6 6 0 0 0 0-12h-16a30 30 0 0 0-30 30v26H96a6 6 0 0 0 0 12h26v67.8a90 90 0 1 1 12 0"></svg:path>`,
})
export class PhFacebookLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryLightIcon],svg[ph-factory-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114 176a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h28a6 6 0 0 1 6 6m62-6h-28a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12m62 46a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h10V88a6 6 0 0 1 9.6-4.8L98 124V88a6 6 0 0 1 9.6-4.8l41.4 31.08l12-84.26a14.07 14.07 0 0 1 13.86-12h18.12a14.07 14.07 0 0 1 13.86 12l15 105.13s.06.59.06.85v74h10a6 6 0 0 1 6.1 6m-78-93.51l10 7.51h39.08L195 31.72a2 2 0 0 0-2-1.72h-18.06a2 2 0 0 0-2 1.72ZM46 210h164v-68h-42a6 6 0 0 1-3.6-1.2L150 130l-40-30v36a6 6 0 0 1-9.6 4.8L46 100Z"></svg:path>`,
})
export class PhFactoryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalLightIcon],svg[ph-faders-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178 80a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6M40 86h106v18a6 6 0 0 0 12 0V56a6 6 0 0 0-12 0v18H40a6 6 0 0 0 0 12m176 84h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12M88 146a6 6 0 0 0-6 6v18H40a6 6 0 0 0 0 12h42v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhFadersHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersLightIcon],svg[ph-faders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 120v96a6 6 0 0 1-12 0v-96a6 6 0 0 1 12 0m66 74a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0v-16a6 6 0 0 0-6-6m24-32h-18V40a6 6 0 0 0-12 0v122h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-168 0a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m24-32H62V40a6 6 0 0 0-12 0v90H32a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m72-48h-18V40a6 6 0 0 0-12 0v42h-18a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFadersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterLightIcon],svg[ph-fallout-shelter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m69.29-92.83A6 6 0 0 0 192 122h-52.79L165 83.33a6 6 0 0 0-5-9.33H96a6 6 0 0 0-5 9.33L116.79 122H64a6 6 0 0 0-5 9.33l32 48a6 6 0 0 0 10 0l27-40.51l27 40.51a6 6 0 0 0 10 0l32-48a6 6 0 0 0 .29-6.16M148.79 86L128 117.18L107.21 86ZM96 165.18L75.21 134h41.58Zm64 0L139.21 134h41.58Z"></svg:path>`,
})
export class PhFalloutShelterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanLightIcon],svg[ph-fan-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.06 135.52a58 58 0 0 0-88-33.42c-.69-.41-1.41-.8-2.14-1.15l16.86-67.32a6 6 0 0 0-2.58-6.51A58 58 0 1 0 98 127.86v.14c0 .77 0 1.54.1 2.3l-66.73 19.06a6 6 0 0 0-4.37 5.49a58 58 0 1 0 115.88-.85c.7-.4 1.39-.83 2.06-1.29L194.81 201a6 6 0 0 0 6.94 1a58 58 0 0 0 29.31-66.51ZM110 128a18 18 0 1 1 18 18a18 18 0 0 1-18-18M78 76a46 46 0 0 1 67.08-40.9L129.32 98H128a30 30 0 0 0-27.33 17.66A45.84 45.84 0 0 1 78 76m30 121.3a46 46 0 0 1-69-37.64l62.39-17.82A30 30 0 0 0 128 158a29 29 0 0 0 3-.15a45.85 45.85 0 0 1-23 39.45m106.9-23.76a45.9 45.9 0 0 1-15 15.7l-46.63-45.12a29.91 29.91 0 0 0-.93-33.62a46 46 0 0 1 62.52 63Z"></svg:path>`,
})
export class PhFanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmLightIcon],svg[ph-farm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 158a6 6 0 0 0 0-12a230.1 230.1 0 0 0-66.11 9.65a260 260 0 0 0-23.07-13.28A248.3 248.3 0 0 1 232 126a6 6 0 0 0 0-12c-6 0-12 .22-18 .62V80a6 6 0 0 0-2.4-4.8l-64-48a6 6 0 0 0-7.2 0l-64 48A6 6 0 0 0 74 80v38.77A264.3 264.3 0 0 0 24 114a6 6 0 0 0 0 12a249 249 0 0 1 195.17 93.75a6 6 0 0 0 4.69 2.25a6 6 0 0 0 4.67-9.75a265 265 0 0 0-18.69-20.94A191 191 0 0 1 232 190a6 6 0 0 0 0-12a199 199 0 0 0-33.21 2.79q-9.63-8.65-20-16.25A218.7 218.7 0 0 1 232 158m-106-23.44V102h36v21.46a259 259 0 0 0-33.93 12ZM86 83l58-43.5L202 83v32.71a261 261 0 0 0-28 4.73V96a6 6 0 0 0-6-6h-48a6 6 0 0 0-6 6v33.85a259 259 0 0 0-28-8.46Zm49.17 136.32a6 6 0 0 1-8.32 1.68A185.14 185.14 0 0 0 24 190a6 6 0 0 1 0-12a197.1 197.1 0 0 1 109.49 33a6 6 0 0 1 1.68 8.32m49.8-7.61a6 6 0 1 1-8.4 8.57A216.8 216.8 0 0 0 24 158a6 6 0 0 1 0-12a228.74 228.74 0 0 1 161 65.71Z"></svg:path>`,
})
export class PhFarmLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleLightIcon],svg[ph-fast-forward-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m63.6-94.8l-48-36A6 6 0 0 0 134 92v30L87.6 87.2A6 6 0 0 0 78 92v72a6 6 0 0 0 9.6 4.8L134 134v30a6 6 0 0 0 9.6 4.8l48-36a6 6 0 0 0 0-9.6M90 152v-48l32 24Zm56 0v-48l32 24Z"></svg:path>`,
})
export class PhFastForwardCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardLightIcon],svg[ph-fast-forward-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.59 116.35l-88.18-56.17a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 138 71.84v41L55.41 60.18a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 34 71.84v112.32a13.83 13.83 0 0 0 7.19 12.12a14 14 0 0 0 14.22-.46L138 143.21v40.95a13.83 13.83 0 0 0 7.19 12.12a14 14 0 0 0 14.22-.46l88.18-56.17a13.79 13.79 0 0 0 0-23.3m-110.44 13.18L49 185.69a1.9 1.9 0 0 1-2 .06a1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59a2 2 0 0 1 1-.26a1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Zm104 0L153 185.69a1.9 1.9 0 0 1-2 .06a1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59a2 2 0 0 1 1-.26a1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Z"></svg:path>`,
})
export class PhFastForwardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherLightIcon],svg[ph-feather-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 80a62 62 0 0 0-105.82-43.86L62.1 105.41a13.94 13.94 0 0 0-4.1 9.9v74.21l-30.24 30.24a6 6 0 1 0 8.48 8.48L66.48 198h74.21a13.94 13.94 0 0 0 9.9-4.1l68.83-69.63l.39-.4A61.6 61.6 0 0 0 238 80m-97.36-35.36a50 50 0 0 1 72 69.36h-62.16l37.76-37.76a6 6 0 0 0-8.48-8.48l-48 48L118 129.52V67ZM70 115.31a2 2 0 0 1 .56-1.39l35.44-35v62.63l-36 36Zm72.09 70.11a2 2 0 0 1-1.4.58H78.48l37.76-37.75L138.48 126h62.35Z"></svg:path>`,
})
export class PhFeatherLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoLightIcon],svg[ph-fediverse-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 98a25.85 25.85 0 0 0-11.11 2.5L168.48 60A26 26 0 1 0 122 44a26 26 0 0 0 .34 4.19L73 68.74a26 26 0 1 0-26 40.78L49 159a26 26 0 1 0 29.74 37.6L130 211v1a26 26 0 1 0 44.63-18.11l28.85-45.33A26 26 0 1 0 212 98m-56 88c-.78 0-1.55 0-2.31.11l-17.49-52.49l50.8-2.42a26.1 26.1 0 0 0 6.35 10.91l-28.85 45.33A25.9 25.9 0 0 0 156 186m-83.73-22.26A26 26 0 0 0 61 158.48L59 109a26 26 0 0 0 11.86-7.17l46.42 26.87ZM148 70a25.85 25.85 0 0 0 11.11-2.5l32.41 40.5a25.9 25.9 0 0 0-5.07 11.2l-50.76 2.42zm0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14m-21 29.26a26.2 26.2 0 0 0 9.34 7.95L124 118.77L76.9 91.48a26 26 0 0 0 .76-11.67ZM38 84a14 14 0 1 1 14 14a14 14 0 0 1-14-14m18 114a14 14 0 1 1 14-14a14 14 0 0 1-14 14m26-13v-1a25.9 25.9 0 0 0-2.35-10.79L125 137.94l17.32 52a26.2 26.2 0 0 0-9.05 9.49Zm74 41a14 14 0 1 1 14-14a14 14 0 0 1-14 14m56-88a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhFediverseLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoLightIcon],svg[ph-figma-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.45 96A38 38 0 0 0 168 26H96a38 38 0 0 0-20.45 70A38 38 0 0 0 77 160.89A42 42 0 1 0 142 196v-40.32A38 38 0 1 0 188.45 96M194 64a26 26 0 0 1-26 26h-26V38h26a26 26 0 0 1 26 26M70 64a26 26 0 0 1 26-26h34v52H96a26 26 0 0 1-26-26m26 90a26 26 0 0 1 0-52h34v52zm34 42a30 30 0 1 1-30-30h30Zm38-42a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhFigmaLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveLightIcon],svg[ph-file-archive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218h-90v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-10a6 6 0 0 0-12 0v10H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhFileArchiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownLightIcon],svg[ph-file-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-43.76-62.24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L122 169.51V120a6 6 0 0 1 12 0v49.51l13.76-13.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhFileArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpLightIcon],svg[ph-file-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-43.76-78.24a6 6 0 1 1-8.48 8.48L134 134.49V184a6 6 0 0 1-12 0v-49.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0Z"></svg:path>`,
})
export class PhFileArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioLightIcon],svg[ph-file-audio-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98.3 130.46a6 6 0 0 0-6.54 1.3L69.51 154H48a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h21.51l22.25 22.24A6 6 0 0 0 102 224v-88a6 6 0 0 0-3.7-5.54m-8.3 79l-13.76-13.7A6 6 0 0 0 72 194H54v-28h18a6 6 0 0 0 4.24-1.76L90 150.49ZM150 180a38.53 38.53 0 0 1-19 33.18a6 6 0 0 1-6-10.36a26.5 26.5 0 0 0 0-45.64a6 6 0 0 1 6-10.36A38.53 38.53 0 0 1 150 180m62.24-96.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z"></svg:path>`,
})
export class PhFileAudioLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCLightIcon],svg[ph-file-c-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.87-18 22m168-92v128a14 14 0 0 1-14 14h-80a6 6 0 0 1 0-12h80a2 2 0 0 0 2-2V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Z"></svg:path>`,
})
export class PhFileCLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpLightIcon],svg[ph-file-c-sharp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.87-18 22m168-92v136a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Zm8 84v20h10a6 6 0 0 1 0 12h-10v10a6 6 0 0 1-12 0v-10h-20v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h10v-20h-10a6 6 0 0 1 0-12h10v-10a6 6 0 0 1 12 0v10h20v-10a6 6 0 0 1 12 0v10h10a6 6 0 0 1 0 12Zm-12 0h-20v20h20Z"></svg:path>`,
})
export class PhFileCSharpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudLightIcon],svg[ph-file-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM108 130a50 50 0 0 0-46.66 32H60a34 34 0 0 0 0 68h48a50 50 0 0 0 0-100m0 88H60a22 22 0 0 1-1.65-43.94c-.06.47-.1.93-.15 1.4a6 6 0 1 0 12 1.08a38.6 38.6 0 0 1 1.1-6.54a6 6 0 0 0 .24-.86A38 38 0 1 1 108 218"></svg:path>`,
})
export class PhFileCloudLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeLightIcon],svg[ph-file-code-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.24 147.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L167.51 152l-19.75-19.76a6 6 0 1 1 8.48-8.48Zm-72-24a6 6 0 0 0-8.48 0l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 1 0 8.48-8.48L88.49 152l19.75-19.76a6 6 0 0 0 0-8.48M214 88v128a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Zm44 134V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2"></svg:path>`,
})
export class PhFileCodeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppLightIcon],svg[ph-file-cpp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.87-18 22m-4-68V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Zm-10 92h-14v-14a6 6 0 0 0-12 0v14h-14a6 6 0 0 0 0 12h14v14a6 6 0 0 0 12 0v-14h14a6 6 0 0 0 0-12m68 0h-14v-14a6 6 0 0 0-12 0v14h-14a6 6 0 0 0 0 12h14v14a6 6 0 0 0 12 0v-14h14a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFileCppLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssLightIcon],svg[ph-file-css-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.2 16.2 0 0 0 11.66-5.28a6 6 0 0 1 8.67 8.3A28.1 28.1 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.1 28.1 0 0 1 20.33 9a6 6 0 0 1-8.67 8.3A16.2 16.2 0 0 0 64 158c-9.93 0-18 9.86-18 22m81-6.77c-10.85-3.13-13.4-4.69-13-7.91a6.56 6.56 0 0 1 2.88-5.08c5.59-3.79 17.66-1.82 21.44-.84a6 6 0 1 0 3.06-11.6c-2-.53-20.09-5-31.2 2.48a18.62 18.62 0 0 0-8.09 13.54c-1.79 14.19 12.27 18.25 21.57 20.94c12.12 3.5 14.78 5.33 14.21 9.76a6.89 6.89 0 0 1-3 5.34c-5.6 3.73-17.48 1.64-21.18.62a6 6 0 1 0-3.21 11.52a59.3 59.3 0 0 0 14.67 2c5.49 0 11.55-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.9-19.97-22.82-22.83Zm64 0c-10.85-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.65-1.83 21.44-.84a6 6 0 0 0 3.07-11.6c-2-.54-20.1-5-31.21 2.48a18.64 18.64 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.77 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.21 11.52a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.82-22.83ZM202 94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 1 1-12 0Zm-8.5-12L158 46.48V82Z"></svg:path>`,
})
export class PhFileCssLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvLightIcon],svg[ph-file-csv-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 180c0 12.13 8.07 22 18 22a16.24 16.24 0 0 0 11.67-5.28a6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.86-18 22m81.05-6.77c-10.86-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.66-1.82 21.45-.84a6 6 0 0 0 3.06-11.6c-2-.53-20.1-5-31.21 2.48a18.61 18.61 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.78 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.25 11.52a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.78-22.83Zm83-26.88a6 6 0 0 0-7.67 3.63L188 190.15L173.65 150a6 6 0 1 0-11.3 4l20 56a6 6 0 0 0 11.3 0l20-56a6 6 0 0 0-3.65-7.66ZM214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88m-20.49-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileCsvLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedLightIcon],svg[ph-file-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 224a6 6 0 0 1-6 6H56a14 14 0 0 1-14-14v-32a6 6 0 0 1 12 0v32a2 2 0 0 0 2 2h16a6 6 0 0 1 6 6M214 88v48a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38h-26a6 6 0 0 1 0-12h32a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.51L158 46.49ZM80 26H56a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12m128 144a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-40a6 6 0 0 0-6-6M48 150a6 6 0 0 0 6-6v-40a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6m104 68h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFileDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocLightIcon],svg[ph-file-doc-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 146H36a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h16a34 34 0 0 0 0-68m0 56H42v-44h10a22 22 0 0 1 0 44m168.15-5.46a6 6 0 0 1 .18 8.48A28.06 28.06 0 0 1 200 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9a6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 200 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28a6 6 0 0 1 8.48-.18M128 146c-16.54 0-30 15.25-30 34s13.46 34 30 34s30-15.25 30-34s-13.46-34-30-34m0 56c-9.93 0-18-9.87-18-22s8.07-22 18-22s18 9.87 18 22s-8.07 22-18 22m-80-84a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158Z"></svg:path>`,
})
export class PhFileDocLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedLightIcon],svg[ph-file-dotted-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78 224a6 6 0 0 1-6 6H56a14 14 0 0 1-14-14v-32a6 6 0 0 1 12 0v32a2 2 0 0 0 2 2h16a6 6 0 0 1 6 6Zm2-198H56a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12Zm134 62.2V136a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38h-26a6 6 0 0 1 0-12h34.2c.1 0 .1 0 .1.1a.5.5 0 0 1 .4.2h.1l.4.2h.1l.4.3h.1a.8.8 0 0 1 .4.4l56 55.9A6 6 0 0 1 214 88ZM158 82h35.5L158 46.5Zm50 88a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-40a6 6 0 0 0-6-6ZM48 150a6 6 0 0 0 6-6v-40a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6Zm104 68h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12Z"></svg:path>`,
})
export class PhFileDottedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlLightIcon],svg[ph-file-html-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 120V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v26a6 6 0 0 0 12 0m-56-73.52L193.52 82H158ZM66 160v48a6 6 0 0 1-12 0v-18H30v18a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0v18h24v-18a6 6 0 0 1 12 0m56 0a6 6 0 0 1-6 6h-10v42a6 6 0 0 1-12 0v-42H84a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m72 0v48a6 6 0 0 1-12 0v-30l-13.2 17.6a6 6 0 0 1-9.6 0L146 178v30a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.8-3.6L164 182l19.2-25.6A6 6 0 0 1 194 160m56 48a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v42h22a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileHtmlLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageLightIcon],svg[ph-file-image-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M109 148.67a6 6 0 0 0-10 0L76.46 182.5l-11.41-17.74a6 6 0 0 0-10.1 0l-36 56A6 6 0 0 0 24 230h128a6 6 0 0 0 5-9.33ZM35 218l25-38.9l11.32 17.6a6 6 0 0 0 10 .08l22.64-34L140.79 218ZM212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z"></svg:path>`,
})
export class PhFileImageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniLightIcon],svg[ph-file-ini-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 152v56a6 6 0 0 1-12 0v-56a6 6 0 0 1 12 0m74-6a6 6 0 0 0-6 6v37.28l-29.12-40.77A6 6 0 0 0 74 152v56a6 6 0 0 0 12 0v-37.28l29.12 40.77A6 6 0 0 0 120 214a5.8 5.8 0 0 0 1.83-.29A6 6 0 0 0 126 208v-56a6 6 0 0 0-6-6m40 0a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-56a6 6 0 0 0-6-6m54-58v136a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.52L158 46.48Z"></svg:path>`,
})
export class PhFileIniLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgLightIcon],svg[ph-file-jpg-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40h-10v-28h10a14 14 0 0 1 0 28m94-2v16.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 192 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77a6 6 0 0 1-6.72 9.95A15.25 15.25 0 0 0 192 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a15.75 15.75 0 0 0 10-3.73V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6M78 152v38a24 24 0 0 1-48 0a6 6 0 0 1 12 0a12 12 0 0 0 24 0v-38a6 6 0 0 1 12 0m134.24-68.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 82V46.48L193.52 82Z"></svg:path>`,
})
export class PhFileJpgLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsLightIcon],svg[ph-file-js-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-12.17 149.58a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59 59 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.78-1-15.85-3-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86M78 152v38a24 24 0 0 1-48 0a6 6 0 0 1 12 0a12 12 0 0 0 24 0v-38a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhFileJsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxLightIcon],svg[ph-file-jsx-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145.83 196.05a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59.4 59.4 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.79-1-15.85-2.95-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86M72 146a6 6 0 0 0-6 6v38a12 12 0 0 1-24 0a6 6 0 0 0-12 0a24 24 0 0 0 48 0v-38a6 6 0 0 0-6-6m139.49 1.12a6 6 0 0 0-8.37 1.39L188 169.67l-15.12-21.17a6 6 0 0 0-9.76 7l17.51 24.5l-17.51 24.5a6 6 0 1 0 9.76 7L188 190.31l15.12 21.16a6 6 0 1 0 9.76-7L195.37 180l17.51-24.51a6 6 0 0 0-1.39-8.38ZM214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-20.49-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileJsxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLightIcon],svg[ph-file-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhFileLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockLightIcon],svg[ph-file-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 178h-10v-6a26 26 0 0 0-52 0v6H48a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-50-6a14 14 0 0 1 28 0v6H70Zm44 46H54v-28h60Zm98.24-134.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-40a6 6 0 0 0 0 12h40a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Z"></svg:path>`,
})
export class PhFileLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassLightIcon],svg[ph-file-magnifying-glass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-48.11-50.59a34.05 34.05 0 1 0-8.48 8.48l12.35 12.35a6 6 0 0 0 8.48-8.48ZM102 148a22 22 0 1 1 22 22a22 22 0 0 1-22-22"></svg:path>`,
})
export class PhFileMagnifyingGlassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdLightIcon],svg[ph-file-md-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v130a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM144 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h16a34 34 0 0 0 0-68m0 56h-10v-44h10a22 22 0 0 1 0 44m-42-50v56a6 6 0 0 1-12 0v-37l-17.08 24.44a6 6 0 0 1-9.84 0L46 171v37a6 6 0 0 1-12 0v-56a6 6 0 0 1 10.92-3.44l23.08 33l23.08-33A6 6 0 0 1 102 152"></svg:path>`,
})
export class PhFileMdLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusLightIcon],svg[ph-file-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-42-66a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfLightIcon],svg[ph-file-pdf-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 152a6 6 0 0 1-6 6h-26v20h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6M90 172a26 26 0 0 1-26 26H54v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14H54v28h10a14 14 0 0 0 14-14m84 8a34 34 0 0 1-34 34h-16a6 6 0 0 1-6-6v-56a6 6 0 0 1 6-6h16a34 34 0 0 1 34 34m-12 0a22 22 0 0 0-22-22h-10v44h10a22 22 0 0 0 22-22M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Z"></svg:path>`,
})
export class PhFilePdfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusLightIcon],svg[ph-file-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-42-66a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFilePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngLightIcon],svg[ph-file-png-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 146H44a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40H50v-28h10a14 14 0 0 1 0 28m162 14.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 200 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77a6 6 0 0 1-6.72 9.95A15.25 15.25 0 0 0 200 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a15.75 15.75 0 0 0 10-3.73V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6ZM154 152v56a6 6 0 0 1-4.17 5.71a5.8 5.8 0 0 1-1.83.29a6 6 0 0 1-4.88-2.51L114 170.72V208a6 6 0 0 1-12 0v-56a6 6 0 0 1 10.88-3.49L142 189.28V152a6 6 0 0 1 12 0M48 118a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158Z"></svg:path>`,
})
export class PhFilePngLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptLightIcon],svg[ph-file-ppt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 152a6 6 0 0 1-6 6h-14v50a6 6 0 0 1-12 0v-50h-14a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M90 172a26 26 0 0 1-26 26H54v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14H54v28h10a14 14 0 0 0 14-14m80 0a26 26 0 0 1-26 26h-10v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14h-10v28h10a14 14 0 0 0 14-14M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Z"></svg:path>`,
})
export class PhFilePptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyLightIcon],svg[ph-file-py-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-32a6 6 0 0 0 0 12h32a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM64 146H48a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40H54v-28h10a14 14 0 0 1 0 28m89.09-30.82L134 185.72V208a6 6 0 0 1-12 0v-22.28l-19.09-30.54a6 6 0 0 1 10.18-6.36L128 172.68l14.91-23.86a6 6 0 0 1 10.18 6.36"></svg:path>`,
})
export class PhFilePyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsLightIcon],svg[ph-file-rs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-16a6 6 0 0 0 0 12h16a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM90 172a26 26 0 0 0-26-26H48a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 6.71-.88L78.82 211a6 6 0 0 0 5.18 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-7.91-13.57A25.93 25.93 0 0 0 90 172m-36 14v-28h10a14 14 0 0 1 0 28Zm99.83 10.06a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59 59 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.78-1-15.85-3-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86"></svg:path>`,
})
export class PhFileRsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchLightIcon],svg[ph-file-search-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 88a6 6 0 0 0-1.8-4.3l-56-55.9l-.4-.3h-.1l-.4-.3h-.1l-.4-.2l-.5-.2a.1.1 0 0 0-.1-.1H56A14 14 0 0 0 42 40v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88Zm-56-41.5L193.5 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2Zm-48.1-50.6A34 34 0 0 0 100 124a34 34 0 0 0 43.4 51.9l12.2 12.1a5.9 5.9 0 1 0 8.4-8.4Zm-43.5-3.8A22.2 22.2 0 1 1 124 170a22.2 22.2 0 0 1-15.6-6.4Z"></svg:path>`,
})
export class PhFileSearchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlLightIcon],svg[ph-file-sql-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 118a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 1 0 12 0V88a6 6 0 0 0-1.76-4.25l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158ZM226 208a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-56a6 6 0 0 1 12 0v50h22a6 6 0 0 1 6 6M89.83 196a18.85 18.85 0 0 1-8.3 13.82c-4.82 3.23-10.87 4.18-16.37 4.18a59 59 0 0 1-14.67-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.57-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.2-2.48a6 6 0 1 1-3.06 11.6c-3.79-1-15.85-2.95-21.44.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.79 22.81M136 146c-16.54 0-30 15.25-30 34s13.45 34 30 34a27.32 27.32 0 0 0 16.15-5.37l3.61 3.61a6 6 0 1 0 8.49-8.48l-3.91-3.91A36.94 36.94 0 0 0 166 180c0-18.76-13.45-34-30-34m0 56c-9.92 0-18-9.87-18-22s8.07-22 18-22s18 9.87 18 22a25.6 25.6 0 0 1-2.45 11.06l-3.3-3.3a6 6 0 0 0-8.49 8.48l3.75 3.75A15.3 15.3 0 0 1 136 202"></svg:path>`,
})
export class PhFileSqlLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgLightIcon],svg[ph-file-svg-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.75l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 1 0 12 0V88a6 6 0 0 0-1.76-4.25M158 46.48L193.52 82H158ZM85.83 196.05a18.85 18.85 0 0 1-8.3 13.81c-4.82 3.19-10.87 4.14-16.37 4.14a59.4 59.4 0 0 1-14.67-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.57-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.2-2.48a6 6 0 0 1-3 11.6c-3.79-1-15.85-2.95-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.84 2.89 24.76 7.2 22.74 22.86m63.82-42l-20 56a6 6 0 0 1-11.3 0l-20-56a6 6 0 1 1 11.3-4l14.35 40.1L138.35 150a6 6 0 0 1 11.3 4ZM214 184v16.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 192 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77a6 6 0 0 1-6.72 10A15.25 15.25 0 0 0 192 158c-9.92 0-18 9.87-18 22s8.08 22 18 22a15.7 15.7 0 0 0 10-3.74V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileSvgLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextLightIcon],svg[ph-file-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-34-82a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsLightIcon],svg[ph-file-ts-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-12.17 149.58a18.89 18.89 0 0 1-8.31 13.81c-4.82 3.19-10.87 4.14-16.36 4.14a59 59 0 0 1-14.68-2a6 6 0 0 1 3.23-11.56c3.71 1 15.58 3.11 21.19-.62a6.85 6.85 0 0 0 3-5.34c.58-4.43-2.08-6.26-14.2-9.76c-9.31-2.69-23.37-6.75-21.57-20.94a18.61 18.61 0 0 1 8.08-13.54c11.11-7.49 29.18-3 31.21-2.48a6 6 0 0 1-3.06 11.6c-3.78-1-15.85-3-21.45.84a6.59 6.59 0 0 0-2.88 5.08c-.41 3.22 2.14 4.78 13 7.91c9.89 2.89 24.81 7.2 22.8 22.86M86 152a6 6 0 0 1-6 6H66v50a6 6 0 0 1-12 0v-50H40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileTsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxLightIcon],svg[ph-file-tsx-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.88 155.48L195.37 180l17.51 24.51a6 6 0 1 1-9.76 7L188 190.31l-15.12 21.16a6 6 0 1 1-9.76-7L180.63 180l-17.51-24.51a6 6 0 0 1 9.76-7L188 169.67l15.12-21.17a6 6 0 1 1 9.76 7Zm-89.83 17.74c-10.86-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.66-1.83 21.45-.84a6 6 0 0 0 3.06-11.6c-2-.53-20.1-5-31.21 2.48a18.61 18.61 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.78 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.25 11.53a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.78-22.83M80 146H40a6 6 0 0 0 0 12h14v50a6 6 0 0 0 12 0v-50h14a6 6 0 0 0 0-12m134-58v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-20.49-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileTsxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtLightIcon],svg[ph-file-txt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 118a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158Zm-5.12 109L135.37 180l17.51 24.51a6 6 0 1 1-9.76 7L128 190.32l-15.12 21.17a6 6 0 0 1-9.76-7L120.63 180l-17.51-24.51a6 6 0 1 1 9.76-7L128 169.68l15.12-21.17a6 6 0 0 1 9.76 7ZM90 152a6 6 0 0 1-6 6H70v50a6 6 0 0 1-12 0v-50H44a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m128 0a6 6 0 0 1-6 6h-14v50a6 6 0 0 1-12 0v-50h-14a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileTxtLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoLightIcon],svg[ph-file-video-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-3.09 100.27a6 6 0 0 0-6.09.16L126 161.17V160a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-1.17l22.82 14.26A6 6 0 0 0 158 216v-64a6 6 0 0 0-3.09-5.25M114 208a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm32-2.83l-20-12.5v-17.34l20-12.5Z"></svg:path>`,
})
export class PhFileVideoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueLightIcon],svg[ph-file-vue-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m85.65 154l-20 56a6 6 0 0 1-11.3 0l-20-56a6 6 0 1 1 11.3-4L60 190.16L74.35 150a6 6 0 0 1 11.3 4M208 158a6 6 0 0 0 0-12h-32a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h32a6 6 0 0 0 0-12h-26v-16h18a6 6 0 0 0 0-12h-18v-16Zm-64-12a6 6 0 0 0-6 6v38a12 12 0 0 1-24 0v-38a6 6 0 0 0-12 0v38a24 24 0 0 0 48 0v-38a6 6 0 0 0-6-6m70-58v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88m-20.48-6L158 46.48V82Z"></svg:path>`,
})
export class PhFileVueLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXLightIcon],svg[ph-file-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50Zm-45.76-92.24a6 6 0 0 1 0 8.48L136.49 152l19.75 19.76a6 6 0 1 1-8.48 8.48L128 160.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L119.51 152l-19.75-19.76a6 6 0 1 1 8.48-8.48L128 143.51l19.76-19.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhFileXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsLightIcon],svg[ph-file-xls-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154 208a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-56a6 6 0 1 1 12 0v50h22a6 6 0 0 1 6 6m-62.52-60.89a6 6 0 0 0-8.36 1.39L68 169.67L52.88 148.5a6 6 0 1 0-9.76 7L60.63 180l-17.51 24.5a6 6 0 1 0 9.76 7L68 190.31l15.12 21.16A6 6 0 0 0 88 214a5.9 5.9 0 0 0 3.48-1.12a6 6 0 0 0 1.4-8.37L75.37 180l17.51-24.51a6 6 0 0 0-1.4-8.38M191 173.22c-10.85-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.65-1.83 21.44-.84a6 6 0 0 0 3.07-11.6c-2-.54-20.1-5-31.21 2.48a18.64 18.64 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.77 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.21 11.53a59.4 59.4 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.82-22.83M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0m116-30h35.5L158 46.48Z"></svg:path>`,
})
export class PhFileXlsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipLightIcon],svg[ph-file-zip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40h-10v-28h10a14 14 0 0 1 0 28m-50-34v56a6 6 0 0 1-12 0v-56a6 6 0 0 1 12 0m-40 56a6 6 0 0 1-6 6H56a6 6 0 0 1-5.21-9l26.87-47H56a6 6 0 0 1 0-12h32a6 6 0 0 1 5.21 9l-26.87 47H88a6 6 0 0 1 6 6M212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 82V46.48L193.52 82Z"></svg:path>`,
})
export class PhFileZipLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesLightIcon],svg[ph-files-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 67.76l-40-40A6 6 0 0 0 168 26H88a14 14 0 0 0-14 14v18H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V72a6 6 0 0 0-1.76-4.24M170 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h77.51L170 106.49Zm32-32a2 2 0 0 1-2 2h-18v-82a6 6 0 0 0-1.76-4.24l-40-40A6 6 0 0 0 136 58H86V40a2 2 0 0 1 2-2h77.51L202 74.49Zm-60-32a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFilesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelLightIcon],svg[ph-film-reel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 218h-56a102 102 0 1 0-48 12h104a6 6 0 0 0 0-12M38 128a90 90 0 1 1 90 90a90.1 90.1 0 0 1-90-90m90-26a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10m22 106a22 22 0 1 0-22 22a22 22 0 0 0 22-22m-32 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m58-26a22 22 0 1 0-22-22a22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10a10 10 0 0 1 10-10m-96-12a22 22 0 1 0 22 22a22 22 0 0 0-22-22m0 32a10 10 0 1 1 10-10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhFilmReelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptLightIcon],svg[ph-film-script-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2ZM94 80a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0 96a10 10 0 1 1-10-10a10 10 0 0 1 10 10m0-48a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhFilmScriptLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateLightIcon],svg[ph-film-slate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 106H86.68l122.85-32.43a6 6 0 0 0 4.26-7.38l-8.16-30a13.94 13.94 0 0 0-17-9.72L36.32 66.67a13.77 13.77 0 0 0-8.48 6.47a13.57 13.57 0 0 0-1.36 10.42L34 111.34V200a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-88a6 6 0 0 0-6-6m-90.25-50.52l33 19.07l-42.43 11.2l-33-19.07Zm66-17.41a1.92 1.92 0 0 1 2.34 1.26l6.57 24.18l-25.4 6.69l-33-19.07ZM38.23 79.14a1.85 1.85 0 0 1 1.15-.87L66.86 71l33 19.08l-55.2 14.6l-6.6-24.27a1.63 1.63 0 0 1 .17-1.27M210 200a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-82h164Z"></svg:path>`,
})
export class PhFilmSlateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripLightIcon],svg[ph-film-strip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 86h84v84H38Zm96-12V54h36v20Zm-12 0H86V54h36Zm0 108v20H86v-20Zm12 0h36v20h-36Zm0-12V86h84v84Zm84-114v18h-36V54h34a2 2 0 0 1 2 2M40 54h34v20H38V56a2 2 0 0 1 2-2m-2 146v-18h36v20H40a2 2 0 0 1-2-2m178 2h-34v-20h36v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhFilmStripLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintLightIcon],svg[ph-fingerprint-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 128a132.7 132.7 0 0 1-14 59.58a6 6 0 0 1-5.38 3.33a6 6 0 0 1-5.36-8.67A120.74 120.74 0 0 0 58 128a69.72 69.72 0 0 1 26.25-54.64a6 6 0 0 1 7.51 9.37A57.73 57.73 0 0 0 70 128m58-6a6 6 0 0 0-6 6a186.1 186.1 0 0 1-23.23 90.07a6 6 0 0 0 10.5 5.82A198.14 198.14 0 0 0 134 128a6 6 0 0 0-6-6m0-32a38 38 0 0 0-38 38a6 6 0 0 0 12 0a26 26 0 0 1 52 0a216.06 216.06 0 0 1-20.71 92.85a6 6 0 1 0 10.87 5.15A227.94 227.94 0 0 0 166 128a38 38 0 0 0-38-38m0-64A102.11 102.11 0 0 0 26 128a90 90 0 0 1-5.12 30a6 6 0 1 0 11.31 4A101.8 101.8 0 0 0 38 128a90 90 0 0 1 180 0a284.7 284.7 0 0 1-5.33 54.84a6 6 0 0 0 4.72 7.05a7 7 0 0 0 1.17.11a6 6 0 0 0 5.88-4.84A296 296 0 0 0 230 128A102.12 102.12 0 0 0 128 26M94 154.13a6 6 0 0 0-7.07 4.69a152.8 152.8 0 0 1-17.44 46a6 6 0 0 0 10.4 6a164.8 164.8 0 0 0 18.8-49.65a6 6 0 0 0-4.69-7.04M128 58a71 71 0 0 0-8.75.54a6 6 0 1 0 1.49 11.91A58 58 0 0 1 186 128a252 252 0 0 1-1.94 31.26a6 6 0 0 0 5.21 6.69a7 7 0 0 0 .75 0a6 6 0 0 0 5.95-5.26A267 267 0 0 0 198 128a70.08 70.08 0 0 0-70-70m57.44 128.2a6 6 0 0 0-7.31 4.31c-1.47 5.74-3.18 11.49-5.06 17.09a6 6 0 0 0 11.38 3.82c2-5.88 3.75-11.9 5.3-17.92a6 6 0 0 0-4.31-7.3"></svg:path>`,
})
export class PhFingerprintLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleLightIcon],svg[ph-fingerprint-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 128a244.7 244.7 0 0 1-18.38 93.48a6 6 0 0 1-5.55 3.72a6.1 6.1 0 0 1-2.28-.45a6 6 0 0 1-3.27-7.84A232.6 232.6 0 0 0 170 128a6 6 0 0 1 12 0m-54-42a42.08 42.08 0 0 1 31.31 14a6 6 0 1 0 8.94-8A54 54 0 0 0 74 128a138.1 138.1 0 0 1-17.22 66.82a6 6 0 1 0 10.49 5.82A150.1 150.1 0 0 0 86 128a42 42 0 0 1 42-42m0-60a101.6 101.6 0 0 0-34 5.81a6 6 0 1 0 4 11.31A90.07 90.07 0 0 1 218 128a283.4 283.4 0 0 1-7 62.67a6 6 0 1 0 11.7 2.66A295.4 295.4 0 0 0 230 128A102.12 102.12 0 0 0 128 26M68 60.92A6 6 0 0 0 60 52a102.2 102.2 0 0 0-34 76a89.3 89.3 0 0 1-8.15 37.5a6 6 0 1 0 10.9 5A101.1 101.1 0 0 0 38 128a90.15 90.15 0 0 1 30-67.08m45.08 141.64a6 6 0 0 0-8 2.95c-2 4.24-4.09 8.47-6.36 12.57a6 6 0 0 0 2.34 8.15a5.9 5.9 0 0 0 2.9.76a6 6 0 0 0 5.25-3.09c2.42-4.36 4.7-8.87 6.78-13.39a6 6 0 0 0-2.91-7.95M128 122a6 6 0 0 0-6 6a186.5 186.5 0 0 1-5.86 46.5a6 6 0 0 0 4.32 7.31a6 6 0 0 0 1.5.19a6 6 0 0 0 5.8-4.5A198.8 198.8 0 0 0 134 128a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhFingerprintSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanLightIcon],svg[ph-finn-the-human-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 106H88a38 38 0 0 0-38 38v8a38 38 0 0 0 38 38h80a38 38 0 0 0 38-38v-8a38 38 0 0 0-38-38m26 46a26 26 0 0 1-26 26H88a26 26 0 0 1-26-26v-8a26 26 0 0 1 26-26h80a26 26 0 0 1 26 26Zm14-110a30.05 30.05 0 0 0-29.4 24H77.4A30 30 0 0 0 18 72v80a70.08 70.08 0 0 0 70 70h80a70.08 70.08 0 0 0 70-70V72a30 30 0 0 0-30-30m18 110a58.07 58.07 0 0 1-58 58H88a58.07 58.07 0 0 1-58-58V72a18 18 0 0 1 36 0a6 6 0 0 0 6 6h112a6 6 0 0 0 6-6a18 18 0 0 1 36 0Zm-124-4a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhFinnTheHumanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherLightIcon],svg[ph-fire-extinguisher-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217.72 50.25L152.21 30.6l34.47-17.23a6 6 0 1 0-5.36-10.74L134.51 26A78.07 78.07 0 0 0 58 104v104a6 6 0 0 0 12 0v-34h20v58a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14V104a46.07 46.07 0 0 0-40-45.6V40.07l72.27 21.68A6.1 6.1 0 0 0 216 62a6 6 0 0 0 1.72-11.75M70 162v-58a66.07 66.07 0 0 1 60-65.71V58.4A46.07 46.07 0 0 0 90 104v58Zm98 72h-64a2 2 0 0 1-2-2v-58h68v58a2 2 0 0 1-2 2m2-130v58h-68v-58a34 34 0 0 1 68 0"></svg:path>`,
})
export class PhFireExtinguisherLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireLightIcon],svg[ph-fire-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.92 153A55.58 55.58 0 0 1 137 197.92a7 7 0 0 1-1 .08a6 6 0 0 1-1-11.92c17.38-2.92 32.13-17.68 35.08-35.08a6 6 0 1 1 11.84 2m32.08-9a86 86 0 0 1-172 0c0-27.47 10.85-55.61 32.25-83.64a6 6 0 0 1 9-.67l26.34 25.56l23.09-63.31a6 6 0 0 1 9.47-2.56C163.72 37.33 214 85.4 214 144m-12 0c0-48.4-38.65-89.84-61.07-109.8l-23.29 63.86a6 6 0 0 1-9.82 2.25l-28-27.22C62.67 97.13 54 121 54 144a74 74 0 0 0 148 0"></svg:path>`,
})
export class PhFireLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleLightIcon],svg[ph-fire-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142.1 19.38a6 6 0 0 0-9.47 2.56l-23.09 63.31L83.2 59.69a6 6 0 0 0-9 .67C52.85 88.39 42 116.53 42 144a86 86 0 0 0 172 0c0-58.6-50.28-106.67-71.9-124.62M128 218a74.09 74.09 0 0 1-74-74c0-23 8.67-46.87 25.77-70.91l28.05 27.22a6 6 0 0 0 9.82-2.25l23.29-63.86C163.35 54.16 202 95.6 202 144a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhFireSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckLightIcon],svg[ph-fire-truck-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.57 117.77l-14-35a13.93 13.93 0 0 0-13-8.8H190V64a6 6 0 0 0-12 0v101.48A30.1 30.1 0 0 0 162.6 186h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-48a6 6 0 0 0-12 0v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6.1 6.1 0 0 0-.43-2.23M226.58 86a2 2 0 0 1 1.86 1.26l10.7 26.74H190V86ZM80 210a18 18 0 1 1 18-18a18 18 0 0 1-18 18m112 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48-24h-18.6a30.05 30.05 0 0 0-29.4-24c-.67 0-1.34 0-2 .07V126h52v58a2 2 0 0 1-2 2M24 98a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12h-18V70h18a6 6 0 0 0 0-12H24a6 6 0 0 0 0 12h18v28Zm98 0H94V70h28ZM54 70h28v28H54Z"></svg:path>`,
})
export class PhFireTruckLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitLightIcon],svg[ph-first-aid-kit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm124 152a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-60-64a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFirstAidKitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidLightIcon],svg[ph-first-aid-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 90h-50V40a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v50H40a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h50v50a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-50h50a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-56a6 6 0 0 0-6 6v56a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-56a6 6 0 0 0-6-6H40a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h56a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v56a6 6 0 0 0 6 6h56a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFirstAidLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishLightIcon],svg[ph-fish-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10m49 66.67c-19.17 34.54-55.11 53.08-106.85 55.14l-22.53 52.55A6 6 0 0 1 80.1 254h-.38a6 6 0 0 1-5.39-4.34l-15.11-52.89l-52.87-15.14a6 6 0 0 1-.71-11.29l52.56-22.49C60.28 96.13 78.81 60.2 113.33 41C159.56 15.34 219 30 222.09 31.78a6 6 0 0 1 2.12 2.11c1.79 3.05 16.46 62.49-9.21 108.76Zm-48 29.64A50.06 50.06 0 0 1 130 126a50.09 50.09 0 0 1-46.29-37c-8.46 16.93-13 38-13.63 63a6 6 0 0 1-3.64 5.38l-40.56 17.36l39.85 11.41a6 6 0 0 1 4.12 4.12l11.38 39.85l17.39-40.56a6 6 0 0 1 5.37-3.64c25.01-.59 46.06-5.16 63.01-13.63Zm51-94.53a171 171 0 0 0-3.86-35.92A170.8 170.8 0 0 0 178.25 38H178c-18.52 0-45 3.22-66.67 18.47a83.5 83.5 0 0 0-17.16 16.09a38 38 0 0 0 41.47 41.25a6 6 0 0 1 6.54 6.55a38 38 0 0 0 41.28 41.46a83.1 83.1 0 0 0 16.07-17.07C214.87 123 218.05 96.31 218 77.76Z"></svg:path>`,
})
export class PhFishLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleLightIcon],svg[ph-fish-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10m42.38 77.9c-14.79 20.44-36.84 34.22-65.53 41c-20.5 4.81-44.58 6-72 3.68q2.43 19 7.07 40.15a6 6 0 0 1-4.58 7.15a6.3 6.3 0 0 1-1.29.14a6 6 0 0 1-5.85-4.72q-5.07-23.13-7.57-44q-20.8-2.51-43.94-7.57a6 6 0 1 1 2.6-11.73q21.14 4.63 40.12 7.07c-2.35-27.36-1.13-51.41 3.69-71.9c6.74-28.68 20.51-50.73 40.9-65.53c47.55-34.44 116.31-18 120-15.81a5.93 5.93 0 0 1 2.11 2.11c2.23 3.69 18.7 72.39-15.74 119.97Zm-17.94 2.69a110.06 110.06 0 0 1-91-91c-25.13 24.7-35.12 65.24-29.87 120.89c55.62 5.23 96.15-4.75 120.86-29.88Zm23.62-114.66c-12.78-2.84-65.42-12.17-103.69 14.52a97.92 97.92 0 0 0 89.16 89.17c26.68-38.25 17.36-90.9 14.53-103.69"></svg:path>`,
})
export class PhFishSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldLightIcon],svg[ph-flag-banner-fold-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 44.75a6 6 0 0 0-5-2.75h-80a6 6 0 0 0-5.46 3.52L137.23 66H28a6 6 0 0 0-4.44 10l36.33 40l-36.33 40A6 6 0 0 0 28 166h73.09a6 6 0 0 0 5.46-3.52l9.31-20.48h66.82l-36.14 79.52a6 6 0 0 0 3 7.94a5.9 5.9 0 0 0 2.46.54a6 6 0 0 0 5.46-3.52l80-176a6 6 0 0 0-.46-5.73M97.23 154H41.56l30.88-34a6 6 0 0 0 0-8.08L41.56 78h90.21Zm90.91-24h-66.82l34.54-76h66.82Z"></svg:path>`,
})
export class PhFlagBannerFoldLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerLightIcon],svg[ph-flag-banner-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.07 52.8A6 6 0 0 0 232 50H40a6 6 0 0 0-4.24 10.24L79.51 104l-43.75 43.76A6 6 0 0 0 40 158h136.78l-30.2 63.42a6 6 0 0 0 10.84 5.16l80-168a6 6 0 0 0-.35-5.78M182.5 146h-128l37.75-37.76a6 6 0 0 0 0-8.48L54.49 62h168Z"></svg:path>`,
})
export class PhFlagBannerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredLightIcon],svg[ph-flag-checkered-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.49 50.5a6 6 0 0 0-6.42.92c-29 25.11-53.28 13.08-81.41-.84c-27.92-13.82-59.57-29.49-94.59.84A6 6 0 0 0 42 56v168a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.59c27.92 13.82 59.58 29.48 94.59-.85A6 6 0 0 0 230 176V56a6 6 0 0 0-3.51-5.5M218 68v45.2c-15.53 12.6-29.75 14.65-44 11.65V76.88c14 2.45 28.64.9 44-8.88m-56 5.87v47.4c-7.6-2.85-15.31-6.66-23.34-10.64c-9.16-4.53-18.71-9.26-28.66-12.5V50.71a255 255 0 0 1 23.34 10.63c9.16 4.53 18.71 9.25 28.66 12.49ZM98 47.13V95c-14-2.45-28.64-.89-44 8.93V58.75c15.53-12.6 29.75-14.62 44-11.62M86.63 154c-10.5 0-21.39 2.79-32.63 10v-45.21c15.53-12.61 29.75-14.65 44-11.65v47.93A66.3 66.3 0 0 0 86.63 154m23.37 4.11v-47.39c7.6 2.84 15.31 6.66 23.34 10.63c9.16 4.53 18.71 9.26 28.66 12.5v47.39c-7.6-2.85-15.31-6.66-23.34-10.63c-9.16-4.54-18.66-9.26-28.66-12.5m64 26.7v-47.92a66.3 66.3 0 0 0 11.37 1c10.5 0 21.39-2.78 32.63-10v45.24c-15.53 12.66-29.75 14.68-44 11.68"></svg:path>`,
})
export class PhFlagCheckeredLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagLightIcon],svg[ph-flag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.08 51.37A6 6 0 0 0 42 55.9V224a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.57c16.12 8 33.49 16.58 52 16.58c13.57 0 27.76-4.6 42.56-17.42A6 6 0 0 0 230 176V55.9a6 6 0 0 0-9.93-4.54c-29 25.12-53.28 13.09-81.41-.84c-27.89-13.81-59.66-29.36-94.58.85M218 173.17c-28.08 22.8-51.88 11-79.34-2.58C113.4 158.08 85.09 144.07 54 164V58.72c28.08-22.8 51.88-11 79.34 2.56C158.6 73.79 186.91 87.8 218 67.91Z"></svg:path>`,
})
export class PhFlagLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantLightIcon],svg[ph-flag-pennant-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242 98.33l-184-64A6 6 0 0 0 50 40v176a6 6 0 0 0 12 0v-43.73l180-62.6a6 6 0 0 0 0-11.34M62 159.56V48.44L221.74 104Z"></svg:path>`,
})
export class PhFlagPennantLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameLightIcon],svg[ph-flame-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.34 52.86a218.3 218.3 0 0 0-41.25-34a6 6 0 0 0-6.18 0a218.3 218.3 0 0 0-41.25 34C56.4 81.48 42 113 42 144a86 86 0 0 0 172 0c0-31-14.4-62.52-41.66-91.14M94 184c0-29.8 25.11-50.41 34-56.78c8.91 6.35 34 26.87 34 56.78a34.05 34.05 0 0 1-32.25 34h-3.5A34.05 34.05 0 0 1 94 184m74.42 21.94A45.7 45.7 0 0 0 174 184c0-42.9-41.16-68.09-42.91-69.14a6 6 0 0 0-6.18 0C123.16 115.91 82 141.1 82 184a45.7 45.7 0 0 0 5.58 21.94A74 74 0 0 1 54 144c0-59.83 59.62-103.26 74-112.86c14.39 9.6 74 53 74 112.86a74 74 0 0 1-33.58 61.94"></svg:path>`,
})
export class PhFlameLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightLightIcon],svg[ph-flashlight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 18H72a14 14 0 0 0-14 14v45.33a14 14 0 0 0 2.8 8.4l20.8 27.73a2 2 0 0 1 .4 1.21V224a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14V114.67a2 2 0 0 1 .4-1.2l20.8-27.74a14 14 0 0 0 2.8-8.4V32a14 14 0 0 0-14-14M72 30h112a2 2 0 0 1 2 2v26H70V32a2 2 0 0 1 2-2m113.6 48.53l-20.8 27.74a14 14 0 0 0-2.8 8.4V224a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2V114.67a14 14 0 0 0-2.8-8.4L70.4 78.54a2 2 0 0 1-.4-1.21V70h116v7.33a2 2 0 0 1-.4 1.2M134 120v32a6 6 0 0 1-12 0v-32a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhFlashlightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskLightIcon],svg[ph-flask-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 200.8L158 97.48V38h10a6 6 0 0 0 0-12H88a6 6 0 0 0 0 12h10v59.48L36 200.8A14 14 0 0 0 48 222h160a14 14 0 0 0 12-21.2m-110.85-98.57a6 6 0 0 0 .85-3.09V38h36v61.14a6 6 0 0 0 .85 3.09l39.65 66.08c-12.41 3.16-30.86 3-55.79-9.66c-16.94-8.58-33-12.8-47.83-12.64ZM209.72 209a2 2 0 0 1-1.74 1H48a2 2 0 0 1-1.71-3l29-48.41c14.89-2.08 31.68 1.55 49.94 10.79C144 178.8 159.67 182 172.42 182a67.9 67.9 0 0 0 20.47-3l16.8 28a2 2 0 0 1 .03 2"></svg:path>`,
})
export class PhFlaskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalLightIcon],svg[ph-flip-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.78 26.29a13.88 13.88 0 0 0-15.68 8.26s0 .08 0 .12l-64 159.94A14 14 0 0 0 40 214h64a14 14 0 0 0 14-14V40a13.87 13.87 0 0 0-11.22-13.71M106 200a2 2 0 0 1-2 2H40a2 2 0 0 1-1.85-2.78l.05-.11l64-159.92a2 2 0 0 1 3.8.81Zm122.92-5.39l-64-159.94v-.12A14 14 0 0 0 138 40v160a14 14 0 0 0 14 14h64a14 14 0 0 0 12.93-19.39Zm-11.26 6.49a1.93 1.93 0 0 1-1.67.9H152a2 2 0 0 1-2-2V40a1.82 1.82 0 0 1 1.6-2a2.6 2.6 0 0 1 .54-.06a1.76 1.76 0 0 1 1.69 1.2l64 159.92l.05.11a2 2 0 0 1-.22 1.93"></svg:path>`,
})
export class PhFlipHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalLightIcon],svg[ph-flip-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 118h160a14 14 0 0 0 5.46-26.9h-.11L61.4 27.1A14 14 0 0 0 42 40v64a14 14 0 0 0 14 14m-2-78a2 2 0 0 1 2-2a2 2 0 0 1 .79.16l.11.05l159.92 64A2 2 0 0 1 216 106H56a2 2 0 0 1-2-2Zm162 98H56a14 14 0 0 0-14 14v64a14 14 0 0 0 19.39 12.92l160-64l.11-.05A14 14 0 0 0 216 138m.82 15.83l-159.92 64l-.11.05A2 2 0 0 1 54 216v-64a2 2 0 0 1 2-2h160a2 2 0 0 1 .82 3.83"></svg:path>`,
})
export class PhFlipVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackLightIcon],svg[ph-floppy-disk-back-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H83.31a13.94 13.94 0 0 0-9.9 4.1L38.1 73.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M86 46h84v34a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2Zm124 162a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V83.31a2 2 0 0 1 .59-1.41L74 54.48V80a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14V46h26a2 2 0 0 1 2 2Zm-82-94a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhFloppyDiskBackLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskLightIcon],svg[ph-floppy-disk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217.9 73.42L182.58 38.1a13.9 13.9 0 0 0-9.89-4.1H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V83.31a13.9 13.9 0 0 0-4.1-9.89M170 210H86v-58a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2Zm40-2a2 2 0 0 1-2 2h-26v-58a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v58H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h124.69a2 2 0 0 1 1.41.58l35.32 35.32a2 2 0 0 1 .58 1.41ZM158 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h56a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFloppyDiskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowLightIcon],svg[ph-flow-arrow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 74H208c-48 0-59.44 27.46-69.54 51.69c-9.43 22.64-17.66 42.33-53 44.16a38 38 0 1 0 .06 12c43.34-2.06 54.29-28.29 64-51.55C159.44 106.53 168 86 208 86h17.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M48 202a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhFlowArrowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLightIcon],svg[ph-flower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.35 131.09a42 42 0 0 0-6.82-3.09a42 42 0 0 0 6.82-3.09a38 38 0 1 0-38-65.82a43.3 43.3 0 0 0-6.08 4.36A43 43 0 0 0 166 56a38 38 0 0 0-76 0a43 43 0 0 0 .73 7.45a43.3 43.3 0 0 0-6.08-4.36a38 38 0 0 0-38 65.82a42 42 0 0 0 6.82 3.09a42 42 0 0 0-6.82 3.09a38 38 0 0 0 9.16 69.62a38.5 38.5 0 0 0 9.9 1.31a37.8 37.8 0 0 0 18.94-5.11a43.3 43.3 0 0 0 6.08-4.36A43 43 0 0 0 90 200a38 38 0 0 0 76 0a43 43 0 0 0-.73-7.45a43.3 43.3 0 0 0 6.08 4.36a37.8 37.8 0 0 0 18.94 5.09a38.5 38.5 0 0 0 9.9-1.31a38 38 0 0 0 9.16-69.62Zm-32-61.61a26 26 0 1 1 26 45c-4.77 2.75-14.92 6.15-36.4 7.47l-1.44-.08A38 38 0 0 0 152 98.58l.66-1.31c11.9-17.94 19.92-25.03 24.69-27.79M128 154a26 26 0 1 1 26-26a26 26 0 0 1-26 26m0-124a26 26 0 0 1 26 26c0 5.51-2.13 16-11.73 35.27c-.26.4-.53.8-.79 1.21a37.88 37.88 0 0 0-27 0l-.79-1.22C104.13 72 102 61.51 102 56a26 26 0 0 1 26-26m-75.35 84.52a26 26 0 0 1 26-45c4.77 2.76 12.79 9.85 24.67 27.79l.66 1.31a38 38 0 0 0-13.49 23.33l-1.44.08c-21.48-1.36-31.63-4.76-36.4-7.51m26 72a26 26 0 0 1-26-45c4.77-2.75 14.92-6.15 36.4-7.47l1.44.08A38 38 0 0 0 104 157.42l-.66 1.31c-11.9 17.94-19.92 25.03-24.69 27.79M128 226a26 26 0 0 1-26-26c0-5.51 2.13-16 11.73-35.27c.26-.4.53-.8.79-1.21a37.88 37.88 0 0 0 27 0l.79 1.22C151.87 184 154 194.49 154 200a26 26 0 0 1-26 26m84.87-49a26 26 0 0 1-35.52 9.52c-4.77-2.76-12.79-9.85-24.67-27.79l-.66-1.31a38 38 0 0 0 13.49-23.33L167 134c21.48 1.32 31.63 4.72 36.4 7.47a26 26 0 0 1 9.47 35.53"></svg:path>`,
})
export class PhFlowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusLightIcon],svg[ph-flower-lotus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244.1 122.63a13.56 13.56 0 0 0-8.3-6.4a72.6 72.6 0 0 0-24.17-2c4.67-20.63 1.62-36.91-1.45-46.4a14.16 14.16 0 0 0-16.48-9.53a84.2 84.2 0 0 0-29.76 13.11a92.6 92.6 0 0 0-27.52-34.6a14 14 0 0 0-16.85 0a92.7 92.7 0 0 0-27.51 34.6A84.2 84.2 0 0 0 62.29 58.3a14.15 14.15 0 0 0-16.47 9.54c-3.07 9.49-6.12 25.77-1.45 46.4a72.6 72.6 0 0 0-24.17 2a13.56 13.56 0 0 0-8.3 6.4a14 14 0 0 0-1.4 10.74C13.81 145.66 24 169 54.92 187.51S113.29 206 128 206s42.12 0 73.06-18.49s41.11-41.85 44.42-54.14a14 14 0 0 0-1.38-10.74M168.48 82.9A73.1 73.1 0 0 1 196.22 70a2.2 2.2 0 0 1 2.54 1.5c3.94 12.22 7.81 37.5-10.59 69.5a129.8 129.8 0 0 1-28 33.37C167.85 161 174 142.93 174 119.17a116.1 116.1 0 0 0-5.52-36.27M57.24 71.53A2.2 2.2 0 0 1 59.78 70a73.1 73.1 0 0 1 27.74 12.9A116.1 116.1 0 0 0 82 119.17c0 23.76 6.15 41.85 13.81 55.17a129.6 129.6 0 0 1-28-33.37C49.43 109 53.3 83.72 57.24 71.53m3.84 105.67c-27.3-16.31-36.15-36.42-39-47a2.08 2.08 0 0 1 .21-1.61a1.7 1.7 0 0 1 1-.8A62.2 62.2 0 0 1 48 126.72A126 126 0 0 0 57.43 147a141 141 0 0 0 41 44.72a114.8 114.8 0 0 1-37.35-14.52M128 192.86c-8.68-6.2-34-28.2-34-73.69c0-43.36 22.94-65.34 32.8-72.78a2 2 0 0 1 2.4 0c9.86 7.44 32.8 29.42 32.8 72.78c0 45.77-25.19 67.5-34 73.69m105.9-62.62c-2.85 10.54-11.7 30.65-39 47a114.8 114.8 0 0 1-37.38 14.47a141 141 0 0 0 41-44.72a126 126 0 0 0 9.48-20.27a62.2 62.2 0 0 1 24.73 1.11a1.7 1.7 0 0 1 1 .8a2.08 2.08 0 0 1 .19 1.61Z"></svg:path>`,
})
export class PhFlowerLotusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipLightIcon],svg[ph-flower-tulip-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 50a85.5 85.5 0 0 0-36.17 8c-14.67-25.9-40-38.79-41.15-39.37a6 6 0 0 0-5.36 0c-1.14.58-26.48 13.47-41.15 39.37A85.5 85.5 0 0 0 48 50a6 6 0 0 0-6 6v40a86.1 86.1 0 0 0 80 85.77v40.52l-39.32-19.66a6 6 0 0 0-5.36 10.74l48 24a6 6 0 0 0 5.36 0l48-24a6 6 0 1 0-5.36-10.74L134 222.29v-40.52A86.1 86.1 0 0 0 214 96V56a6 6 0 0 0-6-6m-80-19.12c6.46 3.84 23.07 15 33.33 32.94A86.5 86.5 0 0 0 128 104.5a86.5 86.5 0 0 0-33.33-40.68c10.26-17.99 26.87-29.11 33.33-32.94M54 96V62.24A74.11 74.11 0 0 1 122 136v33.76A74.1 74.1 0 0 1 54 96m148 0a74.1 74.1 0 0 1-68 73.76V136a74.11 74.11 0 0 1 68-73.76Z"></svg:path>`,
})
export class PhFlowerTulipLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerLightIcon],svg[ph-flying-saucer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.69 214.1a6 6 0 1 1-11.38 3.8l-8-24a6 6 0 1 1 11.38-3.8ZM128 186a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-38.1.31a6 6 0 0 0-7.59 3.79l-8 24a6 6 0 1 0 11.38 3.8l8-24a6 6 0 0 0-3.79-7.59M246 112c0 15.37-12.94 29.39-36.44 39.46C187.67 160.84 158.71 166 128 166s-59.67-5.16-81.56-14.54C22.94 141.39 10 127.37 10 112c0-21.16 25.06-39.65 65.59-48.57a61.85 61.85 0 0 1 105.24.09C221.1 72.48 246 90.93 246 112M78 96.84v3a9.93 9.93 0 0 0 7.69 9.7A190.4 190.4 0 0 0 128 114a190.4 190.4 0 0 0 42.3-4.42a9.93 9.93 0 0 0 7.69-9.7V96a50 50 0 0 0-50-50h-.67C100.13 46.36 78 69.16 78 96.84M234 112c0-13.33-18.38-26.61-46.8-34.52A62.2 62.2 0 0 1 190 96v3.92a21.86 21.86 0 0 1-17 21.35a202 202 0 0 1-45 4.73a202 202 0 0 1-45-4.73a21.86 21.86 0 0 1-17-21.35v-3.07a63 63 0 0 1 3.08-19.45C40.49 85.3 22 98.62 22 112c0 10.12 10.63 20.48 29.17 28.43C71.59 149.18 98.88 154 128 154s56.41-4.82 76.83-13.57C223.37 132.48 234 122.12 234 112"></svg:path>`,
})
export class PhFlyingSaucerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedLightIcon],svg[ph-folder-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 208a6 6 0 0 1-6 6H39.38A13.39 13.39 0 0 1 26 200.62V192a6 6 0 0 1 12 0v8.62a1.4 1.4 0 0 0 1.38 1.38H88a6 6 0 0 1 6 6m66-6h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-56a6 6 0 0 0-6 6v48.89a1.11 1.11 0 0 1-1.11 1.11H200a6 6 0 0 0 0 12h16.89A13.12 13.12 0 0 0 230 200.89V152a6 6 0 0 0-6-6m-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M26 80V56a14 14 0 0 1 14-14h52.69a13.94 13.94 0 0 1 9.9 4.1l29.65 29.66A6 6 0 0 1 128 86H32a6 6 0 0 1-6-6m12-6h75.51L94.1 54.59a2 2 0 0 0-1.41-.59H40a2 2 0 0 0-2 2Zm-6 84a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhFolderDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedLightIcon],svg[ph-folder-dotted-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 208a6 6 0 0 1-6 6H39.4A13.4 13.4 0 0 1 26 200.6V192a6 6 0 0 1 12 0v8.6a1.4 1.4 0 0 0 1.4 1.4H88a6 6 0 0 1 6 6Zm66-6h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm64-56a6 6 0 0 0-6 6v48.9a1.1 1.1 0 0 1-1.1 1.1H200a6 6 0 0 0 0 12h16.9a13.1 13.1 0 0 0 13.1-13.1V152a6 6 0 0 0-6-6Zm-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM26 80V56a14 14 0 0 1 14-14h52.7a14.3 14.3 0 0 1 9.9 4.1l29.6 29.7a5.7 5.7 0 0 1 1.3 6.5A6 6 0 0 1 128 86H32a6 6 0 0 1-6-6Zm12-6h75.5L94.1 54.6a2 2 0 0 0-1.4-.6H40a2 2 0 0 0-2 2Zm-6 84a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Z"></svg:path>`,
})
export class PhFolderDottedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLightIcon],svg[ph-folder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFolderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockLightIcon],svg[ph-folder-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162h-10v-6a26 26 0 0 0-52 0v6h-10a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-50-6a14 14 0 0 1 28 0v6h-28Zm44 46h-60v-28h60Zm-2-128h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h73.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2"></svg:path>`,
})
export class PhFolderLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusLightIcon],svg[ph-folder-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchLightIcon],svg[ph-folder-notch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14M38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80L94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFolderNotchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusLightIcon],svg[ph-folder-notch-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14M38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80L94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Zm-60-48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderNotchMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenLightIcon],svg[ph-folder-notch-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.36 111.81A14 14 0 0 0 232 106h-18V88a14 14 0 0 0-14-14h-69.33a2 2 0 0 1-1.2-.4l-27.73-20.8a14.06 14.06 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v144a6 6 0 0 0 6 6h179.1a6 6 0 0 0 5.69-4.1l28.49-85.47a14 14 0 0 0-1.92-12.62M40 62h53.34a2 2 0 0 1 1.2.4l27.73 20.8a14.06 14.06 0 0 0 8.4 2.8H200a2 2 0 0 1 2 2v18h-55.57a13.94 13.94 0 0 0-7.77 2.35l-20 13.31a2 2 0 0 1-1.11.34H69.42a13.93 13.93 0 0 0-13 8.8L38 176.84V64a2 2 0 0 1 2-2m193.9 58.63L206.78 202H40.86l26.7-66.74a2 2 0 0 1 1.86-1.26h48.16a13.94 13.94 0 0 0 7.77-2.35l20-13.31a2 2 0 0 1 1.11-.34H232a2 2 0 0 1 1.9 2.63"></svg:path>`,
})
export class PhFolderNotchOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusLightIcon],svg[ph-folder-notch-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14M38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80L94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Zm-60-48a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderNotchPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenLightIcon],svg[ph-folder-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.36 111.81A14 14 0 0 0 232 106h-18V88a14 14 0 0 0-14-14h-70l-28.26-21.2a14.06 14.06 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v144a6 6 0 0 0 6 6h179.1a6 6 0 0 0 5.69-4.1l28.49-85.47a14 14 0 0 0-1.92-12.62M40 62h53.34a2 2 0 0 1 1.2.4l29.86 22.4A6 6 0 0 0 128 86h72a2 2 0 0 1 2 2v18H69.77a14 14 0 0 0-13.28 9.57L38 171V64a2 2 0 0 1 2-2m193.9 58.63L206.78 202H40.33l27.54-82.63a2 2 0 0 1 1.9-1.37H232a2 2 0 0 1 1.9 2.63"></svg:path>`,
})
export class PhFolderOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusLightIcon],svg[ph-folder-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedLightIcon],svg[ph-folder-simple-dashed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124.4 84.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l29.87 22.4a6 6 0 0 1-7.2 9.6M88 202H39.38a1.4 1.4 0 0 1-1.38-1.38V192a6 6 0 0 0-12 0v8.62A13.39 13.39 0 0 0 39.38 214H88a6 6 0 0 0 0-12m72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m64-56a6 6 0 0 0-6 6v48.89a1.11 1.11 0 0 1-1.11 1.11H200a6 6 0 0 0 0 12h16.89A13.12 13.12 0 0 0 230 200.89V152a6 6 0 0 0-6-6m-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M32 158a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhFolderSimpleDashedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedLightIcon],svg[ph-folder-simple-dotted-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124.4 84.8L94.5 62.4a1.6 1.6 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v16a6 6 0 0 1-12 0V64a14 14 0 0 1 14-14h53.3a14.1 14.1 0 0 1 8.4 2.8l29.9 22.4a6 6 0 0 1-7.2 9.6ZM88 202H39.4a1.4 1.4 0 0 1-1.4-1.4V192a6 6 0 0 0-12 0v8.6A13.4 13.4 0 0 0 39.4 214H88a6 6 0 0 0 0-12Zm72 0h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm64-56a6 6 0 0 0-6 6v48.9a1.1 1.1 0 0 1-1.1 1.1H200a6 6 0 0 0 0 12h16.9a13.1 13.1 0 0 0 13.1-13.1V152a6 6 0 0 0-6-6Zm-8-72h-48a6 6 0 0 0 0 12h48a2 2 0 0 1 2 2v24a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM32 158a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Z"></svg:path>`,
})
export class PhFolderSimpleDottedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLightIcon],svg[ph-folder-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14m2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 128 86h88a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFolderSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockLightIcon],svg[ph-folder-simple-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 88v16a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h72a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14m0 80v40a6 6 0 0 1-6 6h-72a6 6 0 0 1-6-6v-40a6 6 0 0 1 6-6h10v-6a26 26 0 0 1 52 0v6h10a6 6 0 0 1 6 6m-56-6h28v-6a14 14 0 0 0-28 0Zm44 12h-60v28h60Z"></svg:path>`,
})
export class PhFolderSimpleLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusLightIcon],svg[ph-folder-simple-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14m2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 128 86h88a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderSimpleMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusLightIcon],svg[ph-folder-simple-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14m2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 128 86h88a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFolderSimplePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarLightIcon],svg[ph-folder-simple-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38 64v136a2 2 0 0 0 2 2h80a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14.06 14.06 0 0 1 8.4 2.8L130 74h86a14 14 0 0 1 14 14v32a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-88a6 6 0 0 1-3.6-1.2L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2m197.82 102.24l-23.49 19.39l7.16 28.93a6 6 0 0 1-8.87 6.61L184 205.5l-26.62 15.67a6 6 0 0 1-8.87-6.61l7.16-28.93l-23.49-19.39a6 6 0 0 1 3.36-10.61l31-2.4l11.91-27.61a6 6 0 0 1 11 0l11.91 27.61l31 2.4a6 6 0 0 1 3.36 10.61Zm-19.1.21l-19.83-1.53a6 6 0 0 1-5-3.61L184 143.14l-7.84 18.17a6 6 0 0 1-5 3.61l-19.83 1.53l14.94 12.33a6 6 0 0 1 2 6.07l-4.63 18.74L181 193.36a6 6 0 0 1 6.08 0l17.37 10.23l-4.64-18.74a6 6 0 0 1 2-6.07Z"></svg:path>`,
})
export class PhFolderSimpleStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserLightIcon],svg[ph-folder-simple-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.28 199a30 30 0 1 0-38.56 0a38.1 38.1 0 0 0-18.52 23.5a6 6 0 0 0 4.26 7.34a6.3 6.3 0 0 0 1.54.2a6 6 0 0 0 5.8-4.46C168.86 214 179.63 206 192 206s23.14 8 26.2 19.54a6 6 0 0 0 11.6-3.08A38.1 38.1 0 0 0 211.28 199M192 158a18 18 0 1 1-18 18a18 18 0 0 1 18-18m38-70v32a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h80a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhFolderSimpleUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarLightIcon],svg[ph-folder-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 86a2 2 0 0 1 2 2v32a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14h-85.52l-27.9-27.9a13.9 13.9 0 0 0-9.89-4.1H40a14 14 0 0 0-14 14v144.61A13.39 13.39 0 0 0 39.38 214h81.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.39V86ZM40 54h52.69a2 2 0 0 1 1.41.58L113.52 74H38V56a2 2 0 0 1 2-2m197.72 105.8a6 6 0 0 0-5.26-4.17l-31-2.4l-11.91-27.61a6 6 0 0 0-11 0l-11.91 27.61l-31 2.4a6 6 0 0 0-3.36 10.61l23.49 19.39l-7.16 28.93a6 6 0 0 0 8.87 6.61L184 205.5l26.62 15.67a6 6 0 0 0 8.87-6.61l-7.16-28.93l23.49-19.39a6 6 0 0 0 1.9-6.44m-35.94 19a6 6 0 0 0-2 6.07l4.64 18.74L187 193.36a6 6 0 0 0-6.08 0l-17.37 10.23l4.63-18.74a6 6 0 0 0-2-6.07l-14.94-12.33l19.83-1.53a6 6 0 0 0 5-3.61l7.93-18.17l7.84 18.17a6 6 0 0 0 5 3.61l19.83 1.53Z"></svg:path>`,
})
export class PhFolderStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserLightIcon],svg[ph-folder-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.28 199a30 30 0 1 0-38.56 0a38.1 38.1 0 0 0-18.52 23.5a6 6 0 0 0 4.26 7.34a6.3 6.3 0 0 0 1.54.2a6 6 0 0 0 5.8-4.46C168.86 214 179.63 206 192 206s23.14 8 26.2 19.54a6 6 0 0 0 11.6-3.09A38.1 38.1 0 0 0 211.28 199M192 158a18 18 0 1 1-18 18a18 18 0 0 1 18-18m24-84h-85.52l-27.89-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.61A13.4 13.4 0 0 0 39.38 214h81.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.39V86h178a2 2 0 0 1 2 2v32a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2"></svg:path>`,
})
export class PhFolderUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersLightIcon],svg[ph-folders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66h-70l-28.27-21.2a14 14 0 0 0-8.4-2.8H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h152.89A13.12 13.12 0 0 0 206 200.89V182h18.89A13.12 13.12 0 0 0 238 168.89V80a14 14 0 0 0-14-14m-30 134.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h45.33a2 2 0 0 1 1.2.4l29.87 22.4a6 6 0 0 0 3.6 1.2h72a2 2 0 0 1 2 2Zm32-32a1.11 1.11 0 0 1-1.11 1.11H206v-58a14 14 0 0 0-14-14h-70L93.73 76.8a14 14 0 0 0-8.4-2.8H70V56a2 2 0 0 1 2-2h45.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 152 78h72a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFoldersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetLightIcon],svg[ph-football-helmet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 164a10 10 0 1 1-10-10a10 10 0 0 1 10 10m136 12v32a14 14 0 0 1-14 14h-36a14.1 14.1 0 0 1-13.43-10l-11.22-38h-26.1l4.33 14.56c0 .13.07.27.1.4A14 14 0 0 1 120 206H72.14a6 6 0 0 1-3.39-1A98 98 0 0 1 26 124c0-53.27 43.35-97.22 96.61-98A98 98 0 0 1 222 124v4a6 6 0 0 1-6 6h-60l8.27 28H216a14 14 0 0 1 14 14m-108 15.71l-15.54-52.26c0-.14-.07-.28-.1-.41A14 14 0 0 1 120 122h90a86 86 0 0 0-86-84h-1.24C76 38.66 38 77.22 38 124a86 86 0 0 0 36 70h46a2 2 0 0 0 2-2.29M151.79 162l-8.27-28H120a2 2 0 0 0-2 2.29l7.66 25.71ZM218 176a2 2 0 0 0-2-2h-48.15l10.21 34.57A2 2 0 0 0 180 210h36a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhFootballHelmetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballLightIcon],svg[ph-football-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.09 54.22a30.92 30.92 0 0 0-25.31-25.31c-32-5.42-92.28-7.91-136.53 36.34S23.49 169.78 28.91 201.78a30.92 30.92 0 0 0 25.31 25.31a205 205 0 0 0 34 2.91c31.69 0 71.12-7.88 102.49-39.25C235 146.5 232.51 86.22 227.09 54.22M167.44 37.9a194 194 0 0 1 32.33 2.83a18.93 18.93 0 0 1 15.5 15.5a187 187 0 0 1 2.6 41.21l-59.31-59.3c2.89-.14 5.84-.24 8.88-.24M56.23 215.27a18.93 18.93 0 0 1-15.5-15.5a187 187 0 0 1-2.6-41.21l59.31 59.31a187 187 0 0 1-41.21-2.6m126-33c-11.92 11.91-34.24 28.54-69.46 34l-73.05-73.08c5.47-35.22 22.1-57.54 34-69.46s34.28-28.53 69.48-34l73.08 73.08c-5.47 35.19-22.1 57.54-34.01 69.46Zm-18.01-90.49a6 6 0 0 1 0 8.48L148.48 116l7.75 7.75a6 6 0 1 1-8.48 8.48l-7.75-7.74L124.49 140l7.75 7.76a6 6 0 1 1-8.48 8.48l-7.76-7.76l-15.75 15.74a6 6 0 1 1-8.48-8.48L107.52 140l-7.75-7.75a6 6 0 1 1 8.48-8.48l7.76 7.75l15.5-15.5l-7.75-7.76a6 6 0 1 1 8.48-8.48l7.75 7.75l15.75-15.74a6 6 0 0 1 8.48-.01"></svg:path>`,
})
export class PhFootballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsLightIcon],svg[ph-footprints-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 162H48a6 6 0 0 0-6 6v12a34 34 0 0 0 68 0v-12a6 6 0 0 0-6-6m-6 18a22 22 0 0 1-44 0v-6h44ZM76 18c-10.8 0-21.44 9.91-30 27.9c-13.66 28.82-18.29 71.53 0 93.9a6 6 0 0 0 4.65 2.2h50.53a6 6 0 0 0 4.65-2.2c18.32-22.37 13.69-65.08 0-93.9C97.41 27.91 86.77 18 76 18m22.23 112H53.74c-10.09-15.18-11.69-47.65 3.14-79C64.24 35.51 71.77 30 76 30s11.75 5.51 19.1 21c14.82 31.35 13.22 63.82 3.13 79M208 186h-56a6 6 0 0 0-6 6v12a34 34 0 0 0 68 0v-12a6 6 0 0 0-6-6m-6 18a22 22 0 0 1-44 0v-6h44Zm-47.27-38h50.53a6 6 0 0 0 4.65-2.2c18.32-22.37 13.69-65.08 0-93.9C201.44 51.91 190.8 42 180 42s-21.43 9.91-30 27.9c-13.66 28.82-18.29 71.53 0 93.9a6 6 0 0 0 4.75 2.2Zm6.17-91c7.35-15.53 14.88-21 19.1-21s11.74 5.51 19.1 21c14.83 31.31 13.23 63.78 3.14 79h-44.47c-10.09-15.18-11.69-47.65 3.15-79Z"></svg:path>`,
})
export class PhFootprintsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeLightIcon],svg[ph-fork-knife-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74 88V40a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0m140-48v184a6 6 0 0 1-12 0v-50h-50a6 6 0 0 1-6-6c0-4.41.68-108.25 59.64-133.51A6 6 0 0 1 214 40m-12 10c-36.79 24.29-42.82 91.48-43.81 112H202Zm-84.08-11a6 6 0 1 0-11.84 2L114 88.48a34 34 0 0 1-68 0L53.92 41a6 6 0 0 0-11.84-2l-8 48a6.6 6.6 0 0 0-.08 1a46.06 46.06 0 0 0 40 45.6V224a6 6 0 0 0 12 0v-90.4A46.06 46.06 0 0 0 126 88a6.6 6.6 0 0 0-.08-1Z"></svg:path>`,
})
export class PhForkKnifeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKLightIcon],svg[ph-four-k-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 48a6 6 0 0 1 6-6h192a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m198 154H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M144 74a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0v-29.75l15.42-17.62l29.4 50.37a6 6 0 0 0 5.19 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-31.41-53.88L204.52 84a6 6 0 0 0-9-7.9L150 128V80a6 6 0 0 0-6-6M90 176v-18H40a6 6 0 0 1-4.74-9.68l56-72A6 6 0 0 1 102 80v66h10a6 6 0 0 1 0 12h-10v18a6 6 0 0 1-12 0m0-30V97.49L52.27 146Z"></svg:path>`,
})
export class PhFourKLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersLightIcon],svg[ph-frame-corners-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 80v32a6 6 0 0 1-12 0V86h-26a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M96 170H70v-26a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6h32a6 6 0 0 0 0-12M230 56v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhFrameCornersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoLightIcon],svg[ph-framer-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 104V40a6 6 0 0 0-6-6H56a6 6 0 0 0-4 10.48L112.22 98H56a6 6 0 0 0-6 6v64a6 6 0 0 0 1.76 4.24l72 72A6 6 0 0 0 134 240v-66h66a6 6 0 0 0 4-10.48L143.78 110H200a6 6 0 0 0 6-6m-21.78 58H128a6 6 0 0 0-6 6v57.51l-60-60V110h63.72ZM194 98h-63.72l-58.5-52H194Z"></svg:path>`,
})
export class PhFramerLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionLightIcon],svg[ph-function-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 40a6 6 0 0 1-6 6h-29.29a26 26 0 0 0-25.58 21.35L135.19 122H184a6 6 0 0 1 0 12h-51l-10.33 56.8A38 38 0 0 1 85.29 222H56a6 6 0 0 1 0-12h29.29a26 26 0 0 0 25.58-21.35l9.94-54.65H72a6 6 0 0 1 0-12h51l10.33-56.8A38 38 0 0 1 170.71 34H200a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFunctionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelLightIcon],svg[ph-funnel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.77 50.34A13.8 13.8 0 0 0 216 42H40a14 14 0 0 0-10.33 23.42l.06.07L98 138.38V216a14 14 0 0 0 21.77 11.64l32-21.33a14 14 0 0 0 6.23-11.65v-56.28l68.33-73a13.82 13.82 0 0 0 2.44-15.04m-11.26 6.94l-69.89 74.62A6 6 0 0 0 146 136v58.66a2 2 0 0 1-.89 1.67l-32 21.33A2 2 0 0 1 110 216v-80a6 6 0 0 0-1.62-4.1L38.53 57.32A2 2 0 0 1 40 54h176a1.9 1.9 0 0 1 1.83 1.19a1.86 1.86 0 0 1-.32 2.09"></svg:path>`,
})
export class PhFunnelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleLightIcon],svg[ph-funnel-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 136a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m34-54H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-80 96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFunnelSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXLightIcon],svg[ph-funnel-simple-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 142H64a6 6 0 0 1 0-12h128a6 6 0 0 1 0 12m40-60H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-104 96h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m92.24-6.24a6 6 0 0 0-8.48 0L192 191.51l-19.76-19.75a6 6 0 0 0-8.48 8.48L183.51 200l-19.75 19.76a6 6 0 1 0 8.48 8.48L192 208.49l19.76 19.75a6 6 0 0 0 8.48-8.48L200.49 200l19.75-19.76a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhFunnelSimpleXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXLightIcon],svg[ph-funnel-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.79 50.34A13.83 13.83 0 0 0 216 42H40a14 14 0 0 0-10.33 23.42l.06.06L98 138.38V216a14 14 0 0 0 21.76 11.64l32-21.33a14 14 0 0 0 6.24-11.65v-56.28l68.34-73a13.83 13.83 0 0 0 2.45-15.04m-11.26 6.94l-69.9 74.62A6 6 0 0 0 146 136v58.66a2 2 0 0 1-.89 1.67l-32 21.33A2 2 0 0 1 110 216v-80a6 6 0 0 0-1.62-4.1L38.53 57.32a1.89 1.89 0 0 1-.33-2.13A1.91 1.91 0 0 1 40 54h176a1.9 1.9 0 0 1 1.82 1.19a1.87 1.87 0 0 1-.29 2.09m26.71 154.49a6 6 0 1 1-8.48 8.48L216 200.49l-19.75 19.76a6 6 0 0 1-8.49-8.48L207.52 192l-19.76-19.76a6 6 0 0 1 8.49-8.49L216 183.52l19.76-19.76a6 6 0 0 1 8.48 8.49L224.49 192Z"></svg:path>`,
})
export class PhFunnelXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerLightIcon],svg[ph-game-controller-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 110h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 0 12m-72-12H94V88a6 6 0 0 0-12 0v10H72a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12m135.84 101.5A34 34 0 0 1 212 214a34.1 34.1 0 0 1-24-9.95l-.26-.28L147.38 158h-38.76l-40.31 45.76l-.31.24a34 34 0 0 1-24 10a34 34 0 0 1-33.46-39.91s0-.06 0-.1L26.9 89.88A57.89 57.89 0 0 1 83.89 42H172a58.07 58.07 0 0 1 57.05 47.63v.19L245.46 174v.11a33.75 33.75 0 0 1-5.62 25.39M172 146a46 46 0 0 0 0-92H83.89a45.9 45.9 0 0 0-45.18 38a.4.4 0 0 0 0 .1l-16.38 84.13a22 22 0 0 0 37.11 19.45l42-47.65a6 6 0 0 1 4.5-2Zm61.67 30.23l-9.79-50.35A58.06 58.06 0 0 1 172 158h-8.63l33.19 37.68a22 22 0 0 0 37.11-19.45"></svg:path>`,
})
export class PhGameControllerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageLightIcon],svg[ph-garage-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10V98.67A14 14 0 0 0 223.77 87l-88-58.66a14 14 0 0 0-15.54 0L32.23 87A14 14 0 0 0 26 98.67V194H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 98.67a2 2 0 0 1 .89-1.67l88-58.67a2 2 0 0 1 2.22 0l88 58.67a2 2 0 0 1 .89 1.66V194h-28v-58a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v58H38ZM178 142v20h-44v-20Zm-56 20H78v-20h44Zm-44 12h44v20H78Zm56 0h44v20h-44Z"></svg:path>`,
})
export class PhGarageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanLightIcon],svg[ph-gas-can-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26h-76.69a13.94 13.94 0 0 0-9.9 4.1l-11.75 11.76L89.9 30.1a14 14 0 0 0-19.8 0l-24 24a14 14 0 0 0 0 19.8l11.76 11.76L46.1 97.41a13.94 13.94 0 0 0-4.1 9.9V216a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14M54.59 65.41a2 2 0 0 1 0-2.82l24-24a2 2 0 0 1 2.82 0l11.76 11.75l-26.83 26.83ZM202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V107.31a2 2 0 0 1 .59-1.41l16-16l35.31-35.31l16-16a2 2 0 0 1 1.41-.59H200a2 2 0 0 1 2 2ZM182 64a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-2.4 60.8L138 156l41.6 31.2a6 6 0 1 1-7.2 9.6L128 163.5l-44.4 33.3a6 6 0 0 1-7.2-9.6L118 156l-41.6-31.2a6 6 0 0 1 7.2-9.6l44.4 33.3l44.4-33.3a6 6 0 1 1 7.2 9.6"></svg:path>`,
})
export class PhGasCanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpLightIcon],svg[ph-gas-pump-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.56 71.07l-19.32-19.31a6 6 0 0 0-8.48 8.48l19.31 19.32a9.93 9.93 0 0 1 2.93 7.07V168a10 10 0 0 1-20 0v-40a22 22 0 0 0-22-22h-18V56a22 22 0 0 0-22-22H72a22 22 0 0 0-22 22v154H32a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12h-18v-92h18a10 10 0 0 1 10 10v40a22 22 0 0 0 44 0V86.63a21.88 21.88 0 0 0-6.44-15.56M62 210V56a10 10 0 0 1 10-10h80a10 10 0 0 1 10 10v154Zm80-98a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhGasPumpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeLightIcon],svg[ph-gauge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.65 74.08A109.26 109.26 0 0 0 128 42h-.39C67.17 42.21 18 92.06 18 153.13V176a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-24a109.3 109.3 0 0 0-32.35-77.92M226 176a2 2 0 0 1-2 2H115.78l57.07-78.47a6 6 0 0 0-9.7-7.06L100.94 178H32a2 2 0 0 1-2-2v-22.87a102 102 0 0 1 .62-11.13H56a6 6 0 0 0 0-12H32.71C42.6 88.4 78.53 56.86 122 54.19V80a6 6 0 0 0 12 0V54.19A98.05 98.05 0 0 1 223.53 130H200a6 6 0 0 0 0 12h25.5c.33 3.3.5 6.64.5 10Z"></svg:path>`,
})
export class PhGaugeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelLightIcon],svg[ph-gavel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.91 118.1l-16-16a14 14 0 0 0-19.55-.23l-52.23-52.23a14 14 0 0 0-.23-19.55l-16-16a14 14 0 0 0-19.8 0l-64 64a14 14 0 0 0 0 19.8l16 16a14 14 0 0 0 19.55.23l9.87 9.88l-66.79 66.79a23 23 0 0 0 32.48 32.49L132 156.49l9.87 9.87a14 14 0 0 0 .23 19.55l16 16a14 14 0 0 0 19.8 0l64-64a14 14 0 0 0 .01-19.81m-91.56 39.76l-52.21-52.2l47.52-47.52l52.2 52.2Zm-71.76-52.45l-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83l-64 64a2 2 0 0 1-2.83 0M56.73 214.8a11 11 0 0 1-15.52-15.52L108 132.49L123.52 148Zm176.69-85.38l-64 64a2 2 0 0 1-2.83 0l-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhGavelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineLightIcon],svg[ph-gear-fine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 122h-18.23a85.6 85.6 0 0 0-8.49-31.69l15.79-9.11a6 6 0 0 0-6-10.4l-15.8 9.12a86.7 86.7 0 0 0-23.19-23.19l9.12-15.8a6 6 0 0 0-10.4-6l-9.11 15.79A85.6 85.6 0 0 0 134 42.23V24a6 6 0 0 0-12 0v18.23a85.6 85.6 0 0 0-31.69 8.49L81.2 34.93a6 6 0 0 0-10.4 6l9.12 15.8a86.7 86.7 0 0 0-23.19 23.19l-15.8-9.12a6 6 0 0 0-6 10.4l15.79 9.11A85.6 85.6 0 0 0 42.23 122H24a6 6 0 0 0 0 12h18.23a85.6 85.6 0 0 0 8.49 31.69l-15.79 9.11a6 6 0 0 0 6 10.4l15.8-9.12a86.7 86.7 0 0 0 23.19 23.19l-9.12 15.8a6 6 0 0 0 10.4 6l9.11-15.79a85.6 85.6 0 0 0 31.69 8.49V232a6 6 0 0 0 12 0v-18.23a85.6 85.6 0 0 0 31.69-8.49l9.11 15.79a6 6 0 0 0 5.21 3a5.93 5.93 0 0 0 3-.81a6 6 0 0 0 2.2-8.19l-9.12-15.8a86.7 86.7 0 0 0 23.19-23.19l15.8 9.12a6 6 0 0 0 6-10.4l-15.79-9.11a85.6 85.6 0 0 0 8.48-31.69H232a6 6 0 0 0 0-12M86 188.84a73.9 73.9 0 0 1 0-121.68L121.07 128ZM128 202a73.5 73.5 0 0 1-31.67-7.14L131.46 134h70.28A74.09 74.09 0 0 1 128 202m3.46-80L96.33 61.14A73.95 73.95 0 0 1 201.74 122Z"></svg:path>`,
})
export class PhGearFineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearLightIcon],svg[ph-gear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m86-31.16c.06-1.89.06-3.79 0-5.68L229.33 106a6 6 0 0 0 1.11-5.29a105.3 105.3 0 0 0-10.68-25.81a6 6 0 0 0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6 6 0 0 0-3-4.53a105.7 105.7 0 0 0-25.77-10.66a6 6 0 0 0-5.29 1.14l-19.2 15.37a90 90 0 0 0-5.68 0L106 26.67a6 6 0 0 0-5.29-1.11A105.3 105.3 0 0 0 74.9 36.24a6 6 0 0 0-3 4.53l-2.67 24.45q-2.07 1.94-4 4L40.76 72a6 6 0 0 0-4.53 3a105.7 105.7 0 0 0-10.66 25.77a6 6 0 0 0 1.11 5.23l15.37 19.2a90 90 0 0 0 0 5.68l-15.38 19.17a6 6 0 0 0-1.11 5.29a105.3 105.3 0 0 0 10.68 25.76a6 6 0 0 0 4.53 3l24.45 2.71q1.94 2.07 4 4L72 215.24a6 6 0 0 0 3 4.53a105.7 105.7 0 0 0 25.77 10.66a6 6 0 0 0 5.29-1.11l19.1-15.32c1.89.06 3.79.06 5.68 0l19.21 15.38a6 6 0 0 0 3.75 1.31a6.2 6.2 0 0 0 1.54-.2a105.3 105.3 0 0 0 25.76-10.68a6 6 0 0 0 3-4.53l2.71-24.45q2.07-1.93 4-4l24.46-2.72a6 6 0 0 0 4.53-3a105.5 105.5 0 0 0 10.66-25.77a6 6 0 0 0-1.11-5.29Zm-3.1 41.63l-23.64 2.63a6 6 0 0 0-3.82 2a75 75 0 0 1-6.31 6.31a6 6 0 0 0-2 3.82l-2.63 23.63a94.3 94.3 0 0 1-17.36 7.14l-18.57-14.86a6 6 0 0 0-3.75-1.31h-.36a78 78 0 0 1-8.92 0a6 6 0 0 0-4.11 1.3L100.87 218a94 94 0 0 1-17.34-7.17l-2.63-23.62a6 6 0 0 0-2-3.82a75 75 0 0 1-6.31-6.31a6 6 0 0 0-3.82-2l-23.63-2.63A94.3 94.3 0 0 1 38 155.14l14.86-18.57a6 6 0 0 0 1.3-4.11a78 78 0 0 1 0-8.92a6 6 0 0 0-1.3-4.11L38 100.87a94 94 0 0 1 7.17-17.34l23.62-2.63a6 6 0 0 0 3.82-2a75 75 0 0 1 6.31-6.31a6 6 0 0 0 2-3.82l2.63-23.63A94.3 94.3 0 0 1 100.86 38l18.57 14.86a6 6 0 0 0 4.11 1.3a78 78 0 0 1 8.92 0a6 6 0 0 0 4.11-1.3L155.13 38a94 94 0 0 1 17.34 7.17l2.63 23.64a6 6 0 0 0 2 3.82a75 75 0 0 1 6.31 6.31a6 6 0 0 0 3.82 2l23.63 2.63a94.3 94.3 0 0 1 7.14 17.29l-14.86 18.57a6 6 0 0 0-1.3 4.11a78 78 0 0 1 0 8.92a6 6 0 0 0 1.3 4.11L218 155.13a94 94 0 0 1-7.15 17.34Z"></svg:path>`,
})
export class PhGearLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixLightIcon],svg[ph-gear-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m108-54.4a6 6 0 0 0-2.92-4l-30.44-17.38l-.42-.71l-.12-34.31a6 6 0 0 0-2.1-4.56a110.1 110.1 0 0 0-36.07-20.31a6 6 0 0 0-4.84.45l-30.63 17.08h-1l-30.55-17.1a6 6 0 0 0-4.86-.44A109.9 109.9 0 0 0 56 46.68a6 6 0 0 0-2.12 4.55l-.16 34.34c-.14.23-.28.47-.41.71l-30.4 17.29a6 6 0 0 0-2.91 4.05a104.8 104.8 0 0 0 0 40.78a6 6 0 0 0 2.92 4l30.42 17.33l.42.71l.12 34.31a6 6 0 0 0 2.12 4.61a110.1 110.1 0 0 0 36.07 20.31a6 6 0 0 0 4.84-.45l30.61-17.08h1l30.56 17.1a6.1 6.1 0 0 0 2.92.76a5.8 5.8 0 0 0 1.93-.32a109.9 109.9 0 0 0 36-20.36a6 6 0 0 0 2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6 6 0 0 0 2.92-4.05a104.8 104.8 0 0 0 .04-40.78m-11.25 35.79l-29.43 16.71a6.07 6.07 0 0 0-2.28 2.3c-.59 1-1.21 2.11-1.86 3.14a6 6 0 0 0-.91 3.16l-.16 33.21a98.2 98.2 0 0 1-27.52 15.53L133 200.88a6 6 0 0 0-2.93-.77h-3.88a6 6 0 0 0-3.07.76l-29.67 16.56a98 98 0 0 1-27.56-15.49l-.12-33.17a6 6 0 0 0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6 6 0 0 0-2.27-2.3L31.3 143.4a93 93 0 0 1 0-30.79L60.68 95.9A6.07 6.07 0 0 0 63 93.6c.59-1 1.21-2.11 1.86-3.14a6 6 0 0 0 .91-3.16l.16-33.21a98.2 98.2 0 0 1 27.48-15.53L123 55.12a5.8 5.8 0 0 0 3.07.76h3.74a6 6 0 0 0 3.07-.76l29.65-16.56a98 98 0 0 1 27.56 15.49l.12 33.17a6 6 0 0 0 .91 3.16c.64 1 1.27 2.08 1.86 3.14a6 6 0 0 0 2.27 2.3l29.45 16.78a93 93 0 0 1 .03 30.79Z"></svg:path>`,
})
export class PhGearSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleLightIcon],svg[ph-gender-female-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 96a78 78 0 1 0-84 77.75V202H88a6 6 0 0 0 0 12h34v26a6 6 0 0 0 12 0v-26h34a6 6 0 0 0 0-12h-34v-28.25A78.09 78.09 0 0 0 206 96M62 96a66 66 0 1 1 66 66a66.08 66.08 0 0 1-66-66"></svg:path>`,
})
export class PhGenderFemaleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexLightIcon],svg[ph-gender-intersex-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 26h-40a6 6 0 0 0 0 12h25.52l-30 29.94A62 62 0 1 0 114 173.7V194H88a6 6 0 0 0 0 12h26v26a6 6 0 0 0 12 0v-26h26a6 6 0 0 0 0-12h-26v-20.3a62 62 0 0 0 45.28-96.5L202 46.48V72a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-88 136a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhGenderIntersexLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleLightIcon],svg[ph-gender-male-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34h-48a6 6 0 0 0 0 12h33.52l-46.8 46.79a78 78 0 1 0 4.42 114.4a78.11 78.11 0 0 0 4.07-105.91L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-65.34 164.7a66 66 0 1 1 0-93.36a66.1 66.1 0 0 1 0 93.36"></svg:path>`,
})
export class PhGenderMaleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterLightIcon],svg[ph-gender-neuter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 104a78 78 0 1 0-84 77.75V232a6 6 0 0 0 12 0v-50.25A78.09 78.09 0 0 0 206 104m-78 66a66 66 0 1 1 66-66a66.08 66.08 0 0 1-66 66"></svg:path>`,
})
export class PhGenderNeuterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryLightIcon],svg[ph-gender-nonbinary-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 98.27V58.6l30.91 18.54a6 6 0 1 0 6.18-10.28L139.66 48l31.43-18.85a6 6 0 1 0-6.18-10.29L128 41L91.09 18.86a6 6 0 1 0-6.18 10.29L116.34 48L84.91 66.86a6 6 0 1 0 6.18 10.28L122 58.6v39.67a70 70 0 1 0 12 0M128 226a58 58 0 1 1 58-58a58.07 58.07 0 0 1-58 58"></svg:path>`,
})
export class PhGenderNonbinaryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderLightIcon],svg[ph-gender-transgender-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34h-48a6 6 0 0 0 0 12h33.52L168 79.52l-19.76-19.76a6 6 0 1 0-8.48 8.49L159.52 88l-18.46 18.46a69.94 69.94 0 1 0 8.49 8.48L168 96.5l19.76 19.76a6 6 0 0 0 8.48-8.49L176.48 88L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-79 167a58 58 0 1 1 17-41a58 58 0 0 1-17 41"></svg:path>`,
})
export class PhGenderTransgenderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostLightIcon],svg[ph-ghost-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 116a10 10 0 1 1-10-10a10 10 0 0 1 10 10m46-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m66 14v96a6 6 0 0 1-9.8 4.64l-25.53-20.89l-25.54 20.89a6 6 0 0 1-7.6 0L128 199.75l-25.53 20.89a6 6 0 0 1-7.6 0l-25.54-20.89l-25.53 20.89A6 6 0 0 1 34 216v-96a94 94 0 0 1 188 0m-12 0a82 82 0 0 0-164 0v83.34l19.53-16a6 6 0 0 1 7.6 0l25.54 20.89l25.53-20.89a6 6 0 0 1 7.6 0l25.53 20.89l25.54-20.89a6 6 0 0 1 7.6 0l19.53 16Z"></svg:path>`,
})
export class PhGhostLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifLightIcon],svg[ph-gif-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 72v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m90-6h-56a6 6 0 0 0-6 6v112a6 6 0 0 0 12 0v-50h42a6 6 0 0 0 0-12h-42V78h50a6 6 0 0 0 0-12M96 122H72a6 6 0 0 0 0 12h18v18a26 26 0 0 1-52 0v-48a26 26 0 0 1 26-26c12.07 0 23.33 8.38 26.19 19.5a6 6 0 1 0 11.62-3C97.56 78 81.66 66 64 66a38 38 0 0 0-38 38v48a38 38 0 0 0 76 0v-24a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhGifLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftLightIcon],svg[ph-gift-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-41.26a46.4 46.4 0 0 0 6-4.48a27.56 27.56 0 0 0 9.22-20A30.63 30.63 0 0 0 158.5 18a27.56 27.56 0 0 0-20 9.22A57.1 57.1 0 0 0 128 45.76a57.1 57.1 0 0 0-10.48-18.53A27.56 27.56 0 0 0 97.5 18A30.63 30.63 0 0 0 66 49.51a27.56 27.56 0 0 0 9.22 20a46 46 0 0 0 6 4.48H40A14 14 0 0 0 26 88v32a14 14 0 0 0 14 14h2v66a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-66h2a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m-80.23-11c2.25-12.12 6.29-21.75 11.69-27.85a15.68 15.68 0 0 1 11.4-5.15h.55A18.6 18.6 0 0 1 178 49.14a15.68 15.68 0 0 1-5.18 11.4c-10.72 9.46-28.9 12.29-38.48 13.11c.25-2.89.66-6.57 1.43-10.65M83.45 35.45A18.7 18.7 0 0 1 96.59 30h.55a15.68 15.68 0 0 1 11.4 5.18c9.46 10.72 12.29 28.9 13.11 38.48c-2.89-.25-6.57-.68-10.61-1.43c-12.12-2.23-21.75-6.29-27.85-11.7A15.64 15.64 0 0 1 78 49.14a18.65 18.65 0 0 1 5.45-13.69M38 120V88a2 2 0 0 1 2-2h82v36H40a2 2 0 0 1-2-2m16 80v-66h68v68H56a2 2 0 0 1-2-2m148 0a2 2 0 0 1-2 2h-66v-68h68Zm16-80a2 2 0 0 1-2 2h-82V86h82a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhGiftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchLightIcon],svg[ph-git-branch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 64a30 30 0 1 0-36 29.4V112a10 10 0 0 1-10 10H96a21.84 21.84 0 0 0-10 2.42v-31a30 30 0 1 0-12 0v69.2a30 30 0 1 0 12 0V144a10 10 0 0 1 10-10h88a22 22 0 0 0 22-22V93.4A30.05 30.05 0 0 0 230 64M62 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18a18 18 0 0 1 18 18M200 82a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitBranchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitLightIcon],svg[ph-git-commit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 122h-66.34a54 54 0 0 0-107.32 0H8a6 6 0 0 0 0 12h66.34a54 54 0 0 0 107.32 0H248a6 6 0 0 0 0-12m-120 48a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhGitCommitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffLightIcon],svg[ph-git-diff-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 154a6 6 0 0 0-6 6v33.52l-41.07-41.08a9.93 9.93 0 0 1-2.93-7.07v-52a30 30 0 1 0-12 0v52a21.88 21.88 0 0 0 6.44 15.56L97.52 202H64a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6M38 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18m168 98.6v-52a21.88 21.88 0 0 0-6.44-15.56L158.48 54H192a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l41.07 41.08a9.93 9.93 0 0 1 2.93 7.07v52a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitDiffLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkLightIcon],svg[ph-git-fork-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 64a30 30 0 1 0-36 29.4V112a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V93.4a30 30 0 1 0-12 0V112a22 22 0 0 0 22 22h42v28.6a30 30 0 1 0 12 0V134h42a22 22 0 0 0 22-22V93.4A30.05 30.05 0 0 0 222 64M46 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18m100 128a18 18 0 1 1-18-18a18 18 0 0 1 18 18m46-110a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitForkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeLightIcon],svg[ph-git-merge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 114a30 30 0 0 0-29.21 23.19l-44-6.28a10 10 0 0 1-6.18-3.39L91.18 83.83A30 30 0 1 0 74 85.4v85.2a30 30 0 1 0 12 0V96.22l33.52 39.11a22 22 0 0 0 13.6 7.46l45.35 6.48A30 30 0 1 0 208 114M62 56a18 18 0 1 1 18 18a18 18 0 0 1-18-18m36 144a18 18 0 1 1-18-18a18 18 0 0 1 18 18m110-38a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitMergeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestLightIcon],svg[ph-git-pull-request-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 64a30 30 0 1 0-36 29.4v69.2a30 30 0 1 0 12 0V93.4A30.05 30.05 0 0 0 102 64m-48 0a18 18 0 1 1 18 18a18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18a18 18 0 0 1 18 18m116-29.4v-52a21.88 21.88 0 0 0-6.44-15.56L158.48 54H192a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l41.07 41.08a9.9 9.9 0 0 1 2.93 7.07v52a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitPullRequestLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoLightIcon],svg[ph-github-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.13 75.92A57.8 57.8 0 0 0 201.2 29a6 6 0 0 0-5.2-3a57.77 57.77 0 0 0-47 24h-26a57.77 57.77 0 0 0-47-24a6 6 0 0 0-5.2 3a57.8 57.8 0 0 0-4.93 46.92A55.9 55.9 0 0 0 58 104v8a54.06 54.06 0 0 0 50.45 53.87A37.85 37.85 0 0 0 98 192v10H72a26 26 0 0 1-26-26a38 38 0 0 0-38-38a6 6 0 0 0 0 12a26 26 0 0 1 26 26a38 38 0 0 0 38 38h26v18a6 6 0 0 0 12 0v-40a26 26 0 0 1 52 0v40a6 6 0 0 0 12 0v-40a37.85 37.85 0 0 0-10.45-26.13A54.06 54.06 0 0 0 214 112v-8a55.9 55.9 0 0 0-7.87-28.08M202 112a42 42 0 0 1-42 42h-48a42 42 0 0 1-42-42v-8a43.86 43.86 0 0 1 7.3-23.69a6 6 0 0 0 .81-5.76a45.85 45.85 0 0 1 1.43-36.42a45.85 45.85 0 0 1 35.23 21.1a6 6 0 0 0 5.06 2.77h32.34a6 6 0 0 0 5.06-2.76a45.83 45.83 0 0 1 35.23-21.11a45.85 45.85 0 0 1 1.43 36.42a6 6 0 0 0 .79 5.74A43.8 43.8 0 0 1 202 104Z"></svg:path>`,
})
export class PhGithubLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoLightIcon],svg[ph-gitlab-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.21 117.61l-19.89-76.12a9.94 9.94 0 0 0-19-.93L171.17 90H84.83L66.66 40.56a9.94 9.94 0 0 0-19 .93l-19.87 76.12A55.18 55.18 0 0 0 49 176.42l73.27 51.77a9.94 9.94 0 0 0 11.44 0L207 176.42a55.18 55.18 0 0 0 21.21-58.81M57.65 50.82L75 98.07a6 6 0 0 0 5.64 3.93h94.72a6 6 0 0 0 5.64-3.93l17.36-47.25l15 57.52L128 168.66l-85.38-60.32Zm-18.27 69.92L117.6 176l-24.19 17.1l-37.47-26.48a43.1 43.1 0 0 1-16.56-45.88M128 217.53l-24.19-17.09L128 183.35l24.19 17.09Zm72.06-50.91l-37.47 26.48L138.4 176l78.22-55.26a43.1 43.1 0 0 1-16.56 45.88"></svg:path>`,
})
export class PhGitlabLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleLightIcon],svg[ph-gitlab-logo-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.21 117.61l-19.89-76.12a9.94 9.94 0 0 0-19-.93L171.17 90H84.83L66.66 40.56a9.94 9.94 0 0 0-19 .93l-19.87 76.12A55.18 55.18 0 0 0 49 176.42l73.27 51.77a9.94 9.94 0 0 0 11.44 0L207 176.42a55.18 55.18 0 0 0 21.21-58.81m-28.15 49L128 217.53l-72.06-50.91a43.12 43.12 0 0 1-16.54-46l18.25-69.8L75 98.07a6 6 0 0 0 5.64 3.93h94.72a6 6 0 0 0 5.64-3.93l17.36-47.25l18.25 69.82a43.12 43.12 0 0 1-16.55 45.98Z"></svg:path>`,
})
export class PhGitlabLogoSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastLightIcon],svg[ph-globe-hemisphere-east-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 12a89.53 89.53 0 0 1 50 15.2V74a2 2 0 0 1-.48 1.31L155.35 101a2 2 0 0 1-1.25.68L122.63 106a2 2 0 0 1-1.44-.36l-.24-.16l-19.7-12.89a14 14 0 0 0-19.71 3.64l-21 31.3a13.94 13.94 0 0 0-2.36 7.71L58 171.45a2 2 0 0 1-.9 1.66l-5 3.27A90 90 0 0 1 128 38M59.28 186.05l4.43-2.9A14 14 0 0 0 70 171.52l.21-36.23a2.05 2.05 0 0 1 .33-1.1l21-31.3a2 2 0 0 1 1.31-.86a2 2 0 0 1 1.52.35l.24.16l19.7 12.89a13.93 13.93 0 0 0 10 2.44l31.47-4.26a14 14 0 0 0 8.73-4.74l22.17-25.76A14 14 0 0 0 190 74V62.82a89.91 89.91 0 0 1 22.68 95.67l-18.4-16.82a14 14 0 0 0-14.82-2.6L149 151.73a14.11 14.11 0 0 0-8.48 10.89l-2.38 16.19a14 14 0 0 0 10.3 15.58L169.9 200a2.1 2.1 0 0 1 .91.53l4.18 4.18a89.86 89.86 0 0 1-115.71-18.66m125.62 11.63l-5.59-5.61a14 14 0 0 0-6.36-3.65l-21.46-5.63a2 2 0 0 1-1.47-2.23l2.39-16.19a2 2 0 0 1 1.21-1.56l30.45-12.66a2 2 0 0 1 2.12.37l21.36 19.54a90.8 90.8 0 0 1-22.65 27.62"></svg:path>`,
})
export class PhGlobeHemisphereEastLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestLightIcon],svg[ph-globe-hemisphere-west-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.55 89.55 0 0 1-7.46 35.86l-46.69-28.71a13.9 13.9 0 0 0-5.46-2l-22.82-3.07a14.06 14.06 0 0 0-14.51 7.92h-9.92a2 2 0 0 1-1.8-1.13l-3.8-7.86a13.94 13.94 0 0 0-9.66-7.59l-10.71-2.3L94.4 103a2 2 0 0 1 1.74-1h16.71a13.9 13.9 0 0 0 6.76-1.75l12.25-6.75a14.7 14.7 0 0 0 2.62-1.88l26.91-24.33a13.93 13.93 0 0 0 2.83-17.21L161 44.25A90.16 90.16 0 0 1 218 128m-73.4-88.46l9.15 16.39a2 2 0 0 1-.41 2.46l-26.91 24.33a1.8 1.8 0 0 1-.37.27l-12.25 6.76a2 2 0 0 1-1 .25H96.14A14 14 0 0 0 84 97l-10.82 18.91a2 2 0 0 1-.19-.35L61.5 84.89a2 2 0 0 1 0-1.48l11.18-26.35a89.9 89.9 0 0 1 71.92-17.52M38 128a89.5 89.5 0 0 1 11.38-43.77a13.9 13.9 0 0 0 .89 4.87l11.49 30.67a13.94 13.94 0 0 0 10.16 8.78l21.44 4.6a2 2 0 0 1 1.38 1.09l3.8 7.86a14.07 14.07 0 0 0 12.6 7.9h4.56l-8.49 19a14 14 0 0 0 2.51 15.2l.1.11l19.68 20.26a2 2 0 0 1 .46 1.7L127.7 218A90.1 90.1 0 0 1 38 128m102.08 89.19l1.67-8.6a14.07 14.07 0 0 0-3.47-12.16l-.1-.11l-19.68-20.26a2 2 0 0 1-.33-2.14l13.7-30.73A2 2 0 0 1 134 142l22.82 3.08a2 2 0 0 1 .78.27l47.4 29.2a90.18 90.18 0 0 1-64.92 42.64"></svg:path>`,
})
export class PhGlobeHemisphereWestLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeLightIcon],svg[ph-globe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m81.57 64h-40.38a132.6 132.6 0 0 0-25.73-50.67A90.29 90.29 0 0 1 209.57 90m8.43 38a89.7 89.7 0 0 1-3.83 26h-42.36a155.4 155.4 0 0 0 0-52h42.36a89.7 89.7 0 0 1 3.83 26m-90 87.83a110 110 0 0 1-15.19-19.45A124.2 124.2 0 0 1 99.35 166h57.3a124.2 124.2 0 0 1-13.46 30.38A110 110 0 0 1 128 215.83M96.45 154a139.2 139.2 0 0 1 0-52h63.1a139.2 139.2 0 0 1 0 52ZM38 128a89.7 89.7 0 0 1 3.83-26h42.36a155.4 155.4 0 0 0 0 52H41.83A89.7 89.7 0 0 1 38 128m90-87.83a110 110 0 0 1 15.19 19.45A124.2 124.2 0 0 1 156.65 90h-57.3a124.2 124.2 0 0 1 13.46-30.38A110 110 0 0 1 128 40.17m-15.46-.84A132.6 132.6 0 0 0 86.81 90H46.43a90.29 90.29 0 0 1 66.11-50.67M46.43 166h40.38a132.6 132.6 0 0 0 25.73 50.67A90.29 90.29 0 0 1 46.43 166m97 50.67A132.6 132.6 0 0 0 169.19 166h40.38a90.29 90.29 0 0 1-66.11 50.67Z"></svg:path>`,
})
export class PhGlobeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleLightIcon],svg[ph-globe-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.8 96h-43.91c-1.54-40.77-18.48-68.23-30.43-82.67A90.19 90.19 0 0 1 217.8 122M128 215.83a110 110 0 0 1-15.19-19.45A128.37 128.37 0 0 1 94.13 134h67.74a128.37 128.37 0 0 1-18.68 62.38A110 110 0 0 1 128 215.83M94.13 122a128.37 128.37 0 0 1 18.68-62.38A110 110 0 0 1 128 40.17a110 110 0 0 1 15.19 19.45A128.37 128.37 0 0 1 161.87 122Zm18.41-82.67c-12 14.44-28.89 41.9-30.43 82.67H38.2a90.19 90.19 0 0 1 74.34-82.67M38.2 134h43.91c1.54 40.77 18.48 68.23 30.43 82.67A90.19 90.19 0 0 1 38.2 134m105.26 82.67c11.95-14.44 28.89-41.9 30.43-82.67h43.91a90.19 90.19 0 0 1-74.34 82.67"></svg:path>`,
})
export class PhGlobeSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXLightIcon],svg[ph-globe-simple-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.24 172.24L200.49 192l19.75 19.76a6 6 0 1 1-8.48 8.48L192 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L183.51 192l-19.75-19.76a6 6 0 0 1 8.48-8.48L192 183.51l19.76-19.75a6 6 0 0 1 8.48 8.48M230 128a6 6 0 0 1-6 6H94.13a128.3 128.3 0 0 0 18.68 62.37c9.35 15.11 18.85 22.88 18.95 22.95A6 6 0 0 1 128 230a102 102 0 1 1 102-102m-86.54-88.67c11.95 14.44 28.89 41.9 30.43 82.67h43.91a90.19 90.19 0 0 0-74.34-82.67m-30.65 20.3A128.3 128.3 0 0 0 94.13 122h67.74a128.3 128.3 0 0 0-18.68-62.37A109.2 109.2 0 0 0 128 40.18a109.2 109.2 0 0 0-15.19 19.45M38.2 122h43.91c1.54-40.77 18.48-68.23 30.43-82.67A90.19 90.19 0 0 0 38.2 122m43.91 12H38.2a90.19 90.19 0 0 0 74.34 82.67c-11.95-14.44-28.89-41.9-30.43-82.67"></svg:path>`,
})
export class PhGlobeSimpleXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandLightIcon],svg[ph-globe-stand-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 182a78 78 0 1 0-78-78a78.09 78.09 0 0 0 78 78m0-144a66 66 0 1 1-66 66a66.08 66.08 0 0 1 66-66m76.33 136.89a6 6 0 0 1-.17 8.48A109.2 109.2 0 0 1 142 213.83V234h26a6 6 0 0 1 0 12h-64a6 6 0 0 1 0-12h26v-20.17a110 110 0 0 1-73.38-186a6 6 0 0 1 8.66 8.32a98 98 0 0 0 138.56 138.57a6 6 0 0 1 8.49.17"></svg:path>`,
})
export class PhGlobeStandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXLightIcon],svg[ph-globe-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 0 0 0 204a6 6 0 0 0 3.76-10.67c-.1-.07-9.6-7.84-18.95-22.95A124 124 0 0 1 99.35 166H128a6 6 0 0 0 0-12H96.45a139.2 139.2 0 0 1 0-52h63.1a137.5 137.5 0 0 1 2.45 26a6 6 0 0 0 12 0a153 153 0 0 0-2.19-26h42.36a89.7 89.7 0 0 1 3.83 26a6 6 0 0 0 12 0A102.12 102.12 0 0 0 128 26m-15.46 13.33A132.6 132.6 0 0 0 86.81 90H46.43a90.29 90.29 0 0 1 66.11-50.67m0 177.34A90.29 90.29 0 0 1 46.43 166h40.38a132.6 132.6 0 0 0 25.73 50.67M84.19 154H41.83a90.17 90.17 0 0 1 0-52h42.36a155.4 155.4 0 0 0 0 52m15.16-64a124 124 0 0 1 13.46-30.37A109.2 109.2 0 0 1 128 40.18a109.2 109.2 0 0 1 15.19 19.45A124 124 0 0 1 156.65 90Zm69.84 0a132.6 132.6 0 0 0-25.73-50.67A90.29 90.29 0 0 1 209.57 90Zm51.05 82.24L200.49 192l19.75 19.76a6 6 0 1 1-8.48 8.48L192 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L183.51 192l-19.75-19.76a6 6 0 0 1 8.48-8.48L192 183.51l19.76-19.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhGlobeXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesLightIcon],svg[ph-goggles-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 136a70.08 70.08 0 0 0-70-70H72a70.08 70.08 0 0 0-70 70a22 22 0 0 0 16.68 21.35c2.06 8.24 8.85 16.06 19.64 22.44S61.87 190 72 190a38.05 38.05 0 0 0 37.52-32h37A38.05 38.05 0 0 0 184 190c10.13 0 23-3.91 33.68-10.21s17.58-14.2 19.64-22.44A22 22 0 0 0 254 136M44.43 169.46C35.26 164 30 157.67 30 152c0-6.64 6.77-13.19 15.45-18.06l40.19 40.18A25.8 25.8 0 0 1 72 178c-7.86 0-18.94-3.43-27.57-8.54m49.69-3.82l-36.88-36.89A48.8 48.8 0 0 1 72 126a26 26 0 0 1 22.12 39.64M158 152a25.9 25.9 0 0 1 7.39-18.13L204.55 173c-7.07 3.07-14.63 5-20.55 5a26 26 0 0 1-26-26m57.46 15l-39.65-39.64A25.8 25.8 0 0 1 184 126c7.86 0 18.94 3.43 27.57 8.54C220.74 140 226 146.33 226 152c0 5.32-4.35 10.58-10.54 15m21.31-22.18c-2.57-7.56-9.12-14.68-19.09-20.58C207 117.91 194.13 114 184 114a38.05 38.05 0 0 0-37.52 32h-37A38.05 38.05 0 0 0 72 114c-10.13 0-23 3.91-33.68 10.21c-10 5.9-16.52 13-19.09 20.58A10 10 0 0 1 14 136a58.07 58.07 0 0 1 58-58h112a58.07 58.07 0 0 1 58 58a10 10 0 0 1-5.23 8.79Z"></svg:path>`,
})
export class PhGogglesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfLightIcon],svg[ph-golf-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 100a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-42 22a10 10 0 1 0 10 10a10 10 0 0 0-10-10m82-26a86 86 0 1 1-86-86a86.1 86.1 0 0 1 86 86m-12 0a74 74 0 1 0-74 74a74.09 74.09 0 0 0 74-74m-36.14 98.4c-13.38 5.11-25.77 7.6-37.86 7.6s-24.48-2.49-37.86-7.6a6 6 0 1 0-4.28 11.2a122.3 122.3 0 0 0 36.14 8.21V248a6 6 0 0 0 12 0v-34.19a122.3 122.3 0 0 0 36.14-8.21a6 6 0 0 0-4.28-11.2"></svg:path>`,
})
export class PhGolfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoLightIcon],svg[ph-goodreads-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 26a6 6 0 0 0-6 6v19.4A62 62 0 0 0 66 88v24a62 62 0 0 0 112 36.6V168a50.06 50.06 0 0 1-50 50c-17.09 0-34-8.41-43.08-21.43a6 6 0 1 0-9.84 6.86C86.34 219.57 107.11 230 128 230a62.07 62.07 0 0 0 62-62V32a6 6 0 0 0-6-6m-56 136a50.06 50.06 0 0 1-50-50V88a50 50 0 0 1 100 0v24a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhGoodreadsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoLightIcon],svg[ph-google-cardboard-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h64a6 6 0 0 0 4.24-1.76l26.35-26.34a2 2 0 0 1 2.82 0l26.35 26.34A6 6 0 0 0 160 206h64a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2h-61.51l-24.59-24.58a14 14 0 0 0-19.8 0L93.51 194H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM80 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m96-48a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGoogleCardboardLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoLightIcon],svg[ph-google-chrome-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 12a90 90 0 0 1 77.33 44H128a46.07 46.07 0 0 0-44.93 36.17l-26.16-45.3A89.91 89.91 0 0 1 128 38m34 90a34 34 0 1 1-34-34a34 34 0 0 1 34 34m-124 0a89.4 89.4 0 0 1 11.5-44l38.66 67c.06.1.13.18.19.27A45.94 45.94 0 0 0 142 171.83l-26.17 45.34A90.13 90.13 0 0 1 38 128m91.16 90l38.68-67l.21-.41A45.9 45.9 0 0 0 159 94h52.37a90 90 0 0 1-82.16 124Z"></svg:path>`,
})
export class PhGoogleChromeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoLightIcon],svg[ph-google-drive-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.9 144.82L167.43 32.58A13.91 13.91 0 0 0 155.56 26h-55.13a13.92 13.92 0 0 0-11.87 6.58v.05L20.13 144.76a14 14 0 0 0-.28 14.37L47.17 207a14 14 0 0 0 12.15 7h137.35a14 14 0 0 0 12.16-7l27.32-47.82a14 14 0 0 0-.25-14.36M222.56 146h-51.17L135 85.33l25.08-41.79Zm-124 0L128 97l29.4 49Zm66 12L191 202H65l26.4-44ZM128 73.67L106.6 38h42.8ZM95.93 43.54L121 85.33L84.6 146H33.43ZM33 158h44.4l-22.73 37.89Zm168.3 37.89L178.59 158H223Z"></svg:path>`,
})
export class PhGoogleDriveLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoLightIcon],svg[ph-google-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a94 94 0 1 1-21.49-59.82a6 6 0 1 1-9.25 7.64A82 82 0 1 0 209.78 134H128a6 6 0 0 1 0-12h88a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhGoogleLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoLightIcon],svg[ph-google-photos-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 122h-42.82A70 70 0 0 0 128 18a6 6 0 0 0-6 6v42.82A70 70 0 0 0 18 128a6 6 0 0 0 6 6h42.82A70 70 0 0 0 128 238a6 6 0 0 0 6-6v-42.82A70 70 0 0 0 238 128a6 6 0 0 0-6-6m-46-34a57.3 57.3 0 0 1-11 34h-41V30.31A58.08 58.08 0 0 1 186 88M88 70a57.3 57.3 0 0 1 34 11v41H30.31A58.08 58.08 0 0 1 88 70m-18 98a57.3 57.3 0 0 1 11-34h41v91.69A58.08 58.08 0 0 1 70 168m98 18a57.3 57.3 0 0 1-34-11v-41h91.69A58.08 58.08 0 0 1 168 186"></svg:path>`,
})
export class PhGooglePhotosLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoLightIcon],svg[ph-google-play-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.84 115.93L71 19.89a14 14 0 0 0-14.12 0A13.68 13.68 0 0 0 50 31.87v192.26a13.68 13.68 0 0 0 6.92 11.94a14 14 0 0 0 14.12 0l167.8-96a13.75 13.75 0 0 0 0-24.14M62 217.5v-179l89.51 89.5Zm98-81l22.19 22.19L78.4 218.07ZM78.4 37.93l103.79 59.4L160 119.52ZM233 129.58l-.1.06l-39.9 22.85L168.49 128L193 103.51l39.94 22.85l.1.06a1.76 1.76 0 0 1 0 3.16Z"></svg:path>`,
})
export class PhGooglePlayLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoLightIcon],svg[ph-google-podcasts-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 16v32a6 6 0 0 1-12 0V16a6 6 0 0 1 12 0m42 42a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m-48 144a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0-120a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6M80 58a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m96 72a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-56a6 6 0 0 0-6-6M32 106a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m48 48a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m144-48a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhGooglePodcastsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixLightIcon],svg[ph-gps-fix-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 122h-26.23A86.12 86.12 0 0 0 134 42.23V16a6 6 0 0 0-12 0v26.23A86.12 86.12 0 0 0 42.23 122H16a6 6 0 0 0 0 12h26.23A86.12 86.12 0 0 0 122 213.77V240a6 6 0 0 0 12 0v-26.23A86.12 86.12 0 0 0 213.77 134H240a6 6 0 0 0 0-12m-112 80a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74m0-112a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhGpsFixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsLightIcon],svg[ph-gps-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 122h-26.23A86.12 86.12 0 0 0 134 42.23V16a6 6 0 0 0-12 0v26.23A86.12 86.12 0 0 0 42.23 122H16a6 6 0 0 0 0 12h26.23A86.12 86.12 0 0 0 122 213.77V240a6 6 0 0 0 12 0v-26.23A86.12 86.12 0 0 0 213.77 134H240a6 6 0 0 0 0-12m-112 80a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhGpsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashLightIcon],svg[ph-gps-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a6 6 0 0 1-6 6h-26.21a85.2 85.2 0 0 1-7.3 29.2a6 6 0 0 1-5.48 3.55a5.9 5.9 0 0 1-2.45-.53a6 6 0 0 1-3-7.93a74.05 74.05 0 0 0-91.28-100.4a6 6 0 0 1-3.84-11.37a85.6 85.6 0 0 1 21.56-4.3V16a6 6 0 0 1 12 0v26.23A86.12 86.12 0 0 1 213.77 122H240a6 6 0 0 1 6 6m-33.56 84a6 6 0 0 1-8.88 8.08l-22.3-24.54A85.73 85.73 0 0 1 134 213.77V240a6 6 0 0 1-12 0v-26.23A86.12 86.12 0 0 1 42.23 134H16a6 6 0 0 1 0-12h26.22a86.23 86.23 0 0 1 23.64-53.44L43.56 44a6 6 0 0 1 8.88-8Zm-39.27-25.4L74 77.48a74 74 0 0 0 99.17 109.12"></svg:path>`,
})
export class PhGpsSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientLightIcon],svg[ph-gradient-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 104a6 6 0 0 1 6-6h80a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m198-6h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12M72 138H32a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m152 0h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m-126 6a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6m-42 34H32a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0H88a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12M32 70h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhGradientLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapLightIcon],svg[ph-graduation-cap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.82 90.71l-120-64a5.94 5.94 0 0 0-5.64 0l-120 64a6 6 0 0 0 0 10.58L34 116.67v49.62a14 14 0 0 0 3.55 9.32C50.42 189.94 79.29 214 128 214a127.2 127.2 0 0 0 50-9.73V240a6 6 0 0 0 12 0v-41.65a113.2 113.2 0 0 0 28.45-22.75a13.9 13.9 0 0 0 3.55-9.31v-49.62l28.82-15.38a6 6 0 0 0 0-10.58M128 202c-44 0-70-21.56-81.52-34.41a2 2 0 0 1-.48-1.3v-43.22l79.18 42.22a6 6 0 0 0 5.64 0L178 140.13v51c-13 6.22-29.55 10.87-50 10.87m82-35.71a2 2 0 0 1-.48 1.3A100.3 100.3 0 0 1 190 184.3v-50.57l20-10.66Zm-22.15-45a6.3 6.3 0 0 0-1-.71l-56-29.86a6 6 0 0 0-5.64 10.58l50.04 26.7L128 153.2L20.75 96L128 38.8L235.25 96Z"></svg:path>`,
})
export class PhGraduationCapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsLightIcon],svg[ph-grains-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 58a85.5 85.5 0 0 0-32.84 6.53C161.45 34.31 132 19.3 130.68 18.63a6 6 0 0 0-5.36 0c-1.33.67-30.77 15.68-44.48 45.9A85.5 85.5 0 0 0 48 58a6 6 0 0 0-6 6v80a86 86 0 0 0 172 0V64a6 6 0 0 0-6-6m-86 159.76A74.1 74.1 0 0 1 54 144v-17.76A74.1 74.1 0 0 1 122 200Zm0-61.51a86.1 86.1 0 0 0-68-42v-44A74.11 74.11 0 0 1 122 144ZM91.58 69.91c9.66-21.6 29.27-34.78 36.42-39c7.16 4.25 26.76 17.43 36.41 39A86.5 86.5 0 0 0 128 112.5a86.47 86.47 0 0 0-36.42-42.59M202 144a74.1 74.1 0 0 1-68 73.76V200a74.1 74.1 0 0 1 68-73.76Zm0-29.77a86.1 86.1 0 0 0-68 42V144a74.11 74.11 0 0 1 68-73.76Z"></svg:path>`,
})
export class PhGrainsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashLightIcon],svg[ph-grains-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l13.1 14.41A86 86 0 0 0 48 58a6 6 0 0 0-6 6v80a86.1 86.1 0 0 0 86 86a85.8 85.8 0 0 0 61.28-25.67L203.56 220a6 6 0 0 0 8.88-8.08Zm17.83 37.42l68.6 75.45A86 86 0 0 0 128 168.5a86.18 86.18 0 0 0-74-54.27v-44a73 73 0 0 1 16.27 3.19M122 217.76A74.1 74.1 0 0 1 54 144v-17.76A74.1 74.1 0 0 1 122 200Zm12 0V200a74.05 74.05 0 0 1 13.12-42l34.06 37.47A73.8 73.8 0 0 1 134 217.76M214 64v80a86.2 86.2 0 0 1-3.08 22.87a6 6 0 0 1-5.78 4.41a6.3 6.3 0 0 1-1.59-.21a6 6 0 0 1-4.2-7.38A74 74 0 0 0 202 144v-17.76a72.9 72.9 0 0 0-27.46 7.76a6 6 0 1 1-5.44-10.7a84.85 84.85 0 0 1 32.9-9.07v-44a74.29 74.29 0 0 0-54 30.39a6 6 0 1 1-9.72-7a86.2 86.2 0 0 1 26.1-23.7c-9.65-21.59-29.26-34.77-36.41-39a101.5 101.5 0 0 0-24.92 21a6 6 0 1 1-9.16-7.75a110.3 110.3 0 0 1 31.4-25.47a6 6 0 0 1 5.36 0c1.33.67 30.79 15.69 44.49 45.93A85.7 85.7 0 0 1 208 58a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhGrainsSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphLightIcon],svg[ph-graph-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 154a29.87 29.87 0 0 0-19.5 7.23l-25.62-19.93A29.8 29.8 0 0 0 158 128a31 31 0 0 0-.22-3.6L174 119a30 30 0 1 0-4-15a31 31 0 0 0 .22 3.6L154 113a29.91 29.91 0 0 0-32.42-14.31l-8.14-18.3a30 30 0 1 0-11 4.88l8.14 18.3a29.92 29.92 0 0 0-8.52 39.43L74 168a30.08 30.08 0 1 0 8 9l28-25a29.91 29.91 0 0 0 37.47-1.23l25.62 19.93A30 30 0 1 0 200 154m0-68a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 56a18 18 0 1 1 18 18a18 18 0 0 1-18-18M56 210a18 18 0 1 1 18-18a18 18 0 0 1-18 18m72-64a18 18 0 1 1 18-18a18 18 0 0 1-18 18m72 56a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGraphLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardLightIcon],svg[ph-graphics-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50H16a6 6 0 0 0-6 6v152a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h114a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H22V62h210a2 2 0 0 1 2 2Zm-58-94a38 38 0 1 0 38 38a38 38 0 0 0-38-38m26 38a25.8 25.8 0 0 1-3.88 13.64l-35.76-35.76A26 26 0 0 1 202 120m-52 0a25.8 25.8 0 0 1 3.88-13.64l35.76 35.76A26 26 0 0 1 150 120M80 82a38 38 0 1 0 38 38a38 38 0 0 0-38-38m26 38a25.8 25.8 0 0 1-3.88 13.64L66.36 97.88A26 26 0 0 1 106 120m-52 0a25.8 25.8 0 0 1 3.88-13.64l35.76 35.76A26 26 0 0 1 54 120"></svg:path>`,
})
export class PhGraphicsCardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanLightIcon],svg[ph-greater-than-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-3.43 5.42l-152 72a6 6 0 1 1-5.14-10.84L202 128L61.43 61.42a6 6 0 1 1 5.14-10.84l152 72A6 6 0 0 1 222 128"></svg:path>`,
})
export class PhGreaterThanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualLightIcon],svg[ph-greater-than-or-equal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.93 154.37L190.64 104L53.93 53.63a6 6 0 1 1 4.15-11.26l152 56a6 6 0 0 1 0 11.26l-152 56A6.1 6.1 0 0 1 56 166a6 6 0 0 1-2.07-11.63M208 194H56a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhGreaterThanOrEqualLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourLightIcon],svg[ph-grid-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 14v66h-68V54h66a2 2 0 0 1 2 2M56 54h66v68H54V56a2 2 0 0 1 2-2m-2 146v-66h68v68H56a2 2 0 0 1-2-2m146 2h-66v-68h68v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhGridFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineLightIcon],svg[ph-grid-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m-114 96v-36h52v36Zm52 12v36h-52v-36ZM38 110h52v36H38Zm64-12V62h52v36Zm64 12h52v36h-52Zm52-46v34h-52V62h50a2 2 0 0 1 2 2M40 62h50v36H38V64a2 2 0 0 1 2-2m-2 130v-34h52v36H40a2 2 0 0 1-2-2m178 2h-50v-36h52v34a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhGridNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarLightIcon],svg[ph-guitar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.24 47.76l-40-40a6 6 0 0 0-8.48 8.48l3.76 3.76l-62.62 62.62C118.54 70.42 93.29 71 78.17 86.16a39.9 39.9 0 0 0-9 13.69a10.24 10.24 0 0 1-9.3 6.15c-14.06.48-26.27 5.5-35.3 14.53C13 132.18 8 149 10.72 167.79C13.32 186 22.78 204 37.37 218.63S70 242.68 88.21 245.28a70 70 0 0 0 9.88.72c14.79 0 27.81-5 37.35-14.57c9-9 14.05-21.23 14.53-35.3a10.24 10.24 0 0 1 6.18-9.35a39.9 39.9 0 0 0 13.69-8.95c15.12-15.12 15.74-40.37 3.54-62.73L236 52.48l3.76 3.76a6 6 0 0 0 8.48-8.48m-86.88 121.59a28.1 28.1 0 0 1-9.63 6.27a22.22 22.22 0 0 0-13.73 20.1c-.37 11-4.18 20.39-11 27.22c-8.89 8.89-22 12.61-37 10.46c-15.65-2.23-31.29-10.49-44.06-23.25s-21-28.41-23.25-44.06c-2.15-15 1.57-28.16 10.46-37.05c6.83-6.84 16.25-10.65 27.22-11a22.21 22.21 0 0 0 20.1-13.76a28.1 28.1 0 0 1 6.27-9.62c5.78-5.89 13.83-8.66 22.7-8.66A52.74 52.74 0 0 1 132 91.49l-22.6 22.63a30 30 0 1 0 32.48 32.48l22.64-22.6c8.11 16.82 7.48 34.68-3.16 45.35M151 105a73 73 0 0 1 7.17 8.34L139.5 132a30.18 30.18 0 0 0-15.5-15.5l18.62-18.62A72 72 0 0 1 151 105m-39 21a18 18 0 0 1 18 18a18 18 0 1 1-18-18m47.44-29.44a83 83 0 0 0-8.28-7.23L176 64.48L191.52 80l-24.84 24.83a84.5 84.5 0 0 0-7.23-8.28Zm40.55-25L184.49 56L212 28.48L227.52 44ZM92.25 195.75a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhGuitarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerLightIcon],svg[ph-hair-dryer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 88a30 30 0 1 0-30 30a30 30 0 0 0 30-30m-30 18a18 18 0 1 1 18-18a18 18 0 0 1-18 18m-5.15 108a14 14 0 0 0 12.74-8.21l31.8-69.94A62 62 0 0 0 168 26a6.6 6.6 0 0 0-1 .08L29.7 49A14 14 0 0 0 18 62.78v50.44A14 14 0 0 0 29.7 127L130 143.75V200a14 14 0 0 0 14 14h2v2a38 38 0 0 0 38 38h16a6 6 0 0 0 0-12h-16a26 26 0 0 1-26-26v-2ZM30 113.22V62.78a2 2 0 0 1 1.67-2L168.48 38a50 50 0 0 1 0 100L31.67 115.2a2 2 0 0 1-1.67-1.98M142 200v-54.25l25 4.17a6.6 6.6 0 0 0 1 .08a61.8 61.8 0 0 0 21.53-3.86l-24.86 54.69a2 2 0 0 1-1.82 1.17H144a2 2 0 0 1-2-2"></svg:path>`,
})
export class PhHairDryerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerLightIcon],svg[ph-hamburger-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.07 102h159.86a14 14 0 0 0 13.76-17c-7.24-34.17-46.64-59-93.69-59S41.55 50.83 34.31 85a14 14 0 0 0 13.76 17m-2-14.48C52 59.29 87.25 38 128 38s76 21.29 82 49.52a2 2 0 0 1-2 2.48H48.07a2 2 0 0 1-2-2.48M230 154.36l-41.9 15.22l-37.87-15.15a6 6 0 0 0-4.46 0L108 169.54l-37.77-15.11a6 6 0 0 0-4.28-.07l-44 16A6 6 0 0 0 24 182a6.1 6.1 0 0 0 2.05-.36l16-5.8V184a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38v-11.07l20.05-7.29a6 6 0 0 0-4.1-11.28M202 184a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26v-12.52l13.9-5.06l37.87 15.15a6 6 0 0 0 4.46 0L148 166.46l37.77 15.11a6 6 0 0 0 4.28.07l11.95-4.35ZM18 128a6 6 0 0 1 6-6h208a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhHamburgerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerLightIcon],svg[ph-hammer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.92 113.4l-67.45-67.91a94.12 94.12 0 0 0-133 .06L35.68 59.78a6 6 0 0 0 8.63 8.35L58 54a82 82 0 0 1 20.55-15l49 49l-97.46 97.4a14 14 0 0 0 0 19.81l20.69 20.69a14 14 0 0 0 19.8 0L168 128.46l33.42 33.42a14 14 0 0 0 19.8 0l28.68-28.69a14 14 0 0 0 .02-19.79M62.1 217.41a2 2 0 0 1-2.83 0l-20.69-20.69a2 2 0 0 1 0-2.83L108 124.46L131.51 148Zm101.66-101.68L140 139.49L116.48 116l23.76-23.76a6 6 0 0 0 0-8.49L90.54 34A82.07 82.07 0 0 1 174 54l45.62 45.93L188 131.49l-15.76-15.76a6 6 0 0 0-8.48 0m77.66 9l-28.69 28.7a2 2 0 0 1-2.83 0L196.49 140l31.56-31.57l13.37 13.46a2 2 0 0 1 0 2.81Z"></svg:path>`,
})
export class PhHammerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownLightIcon],svg[ph-hand-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-45.24 10.4A26 26 0 0 0 140 114H89.94a29.78 29.78 0 0 0-21.21 8.79L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62m-64.52-93.76a6 6 0 0 1 8.48-8.48L186 89.51V24a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0Z"></svg:path>`,
})
export class PhHandArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpLightIcon],svg[ph-hand-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-45.24 10.4A26 26 0 0 0 140 114H89.94a29.78 29.78 0 0 0-21.21 8.79L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181a2.5 2.5 0 0 0 .33-.15a22.6 22.6 0 0 0 3.62-38.18ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62M155.76 60.24a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L198 38.49V104a6 6 0 0 1-12 0V38.49l-21.76 21.75a6 6 0 0 1-8.48 0"></svg:path>`,
})
export class PhHandArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsLightIcon],svg[ph-hand-coins-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-45.24 10.4A26 26 0 0 0 140 114H89.94a29.78 29.78 0 0 0-21.21 8.79L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62M164 94a34.5 34.5 0 0 0 7.28-.78a34 34 0 1 0 25.46-42.43A34 34 0 1 0 164 94m62-10a22 22 0 1 1-22-22a22 22 0 0 1 22 22m-62-46a21.94 21.94 0 0 1 21.51 17.49a34 34 0 0 0-15.38 25.65A22 22 0 1 1 164 38"></svg:path>`,
})
export class PhHandCoinsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositLightIcon],svg[ph-hand-deposit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 30.49V128a6 6 0 0 1-12 0V30.49L92.24 52.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48Zm64 94.2V96a14 14 0 0 0-14-14h-16a6 6 0 0 0 0 12h16a2 2 0 0 1 2 2v86.14A26 26 0 0 0 133.49 209c0 .1.11.19.17.29l22.26 34a6 6 0 0 0 10-6.58l-22.12-33.84A14 14 0 0 1 168.13 189a3 3 0 0 0 .17.29l10.7 16.3a6 6 0 0 0 11-3.28v-62.74a76.83 76.83 0 0 1 28 59.08V240a6 6 0 0 0 12 0v-41.35a88.88 88.88 0 0 0-40-73.96M80 82H64a14 14 0 0 0-14 14v104a6 6 0 0 0 12 0V96a2 2 0 0 1 2-2h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhHandDepositLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeLightIcon],svg[ph-hand-eye-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 168a10 10 0 1 1-10-10a10 10 0 0 1 10 10m76-52v36a86 86 0 0 1-172 0V76a26 26 0 0 1 40-21.89V44a26 26 0 0 1 51.41-5.51A26 26 0 0 1 174 60v34.11A26 26 0 0 1 214 116m-12 0a14 14 0 0 0-28 0v4a6 6 0 0 1-12 0V60a14 14 0 0 0-28 0v44a6 6 0 0 1-12 0V44a14 14 0 0 0-28 0v68a6 6 0 0 1-12 0V76a14 14 0 0 0-28 0v76a74 74 0 0 0 148 0Zm-20.63 49.32a6 6 0 0 1 0 5.36C180.65 172.12 163.3 206 128 206s-52.65-33.88-53.37-35.32a6 6 0 0 1 0-5.36C75.35 163.88 92.7 130 128 130s52.65 33.88 53.37 35.32M169.08 168c-4.46-7.12-18.41-26-41.08-26s-36.65 18.85-41.08 26c4.46 7.13 18.41 26 41.08 26s36.65-18.85 41.08-26"></svg:path>`,
})
export class PhHandEyeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistLightIcon],svg[ph-hand-fist-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 82h-18V64a30 30 0 0 0-54-18a30 30 0 0 0-54 18a30 30 0 0 0-48 24v40a102 102 0 0 0 204 0v-16a30 30 0 0 0-30-30m-48-36a18 18 0 0 1 18 18v18h-34a15 15 0 0 0-2 .16V64a18 18 0 0 1 18-18M86 64a18 18 0 0 1 36 0v40a18 18 0 0 1-36 0ZM38 88a18 18 0 0 1 36 0v16a18 18 0 0 1-36 0Zm180 40a90 90 0 0 1-180 0a30 30 0 0 0 42-6a30 30 0 0 0 45.12 3.3A30.18 30.18 0 0 0 140 139.51A45.92 45.92 0 0 0 122 176a6 6 0 0 0 12 0a34 34 0 0 1 34-34a6 6 0 0 0 0-12h-16a18 18 0 0 1-18-18V96a2 2 0 0 1 2-2h64a18 18 0 0 1 18 18Z"></svg:path>`,
})
export class PhHandFistLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingLightIcon],svg[ph-hand-grabbing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 82a25.85 25.85 0 0 0-14.59 4.49A26 26 0 0 0 128 75.41A26 26 0 0 0 82 92v22H68a26 26 0 0 0-26 26v12a86 86 0 0 0 172 0v-44a26 26 0 0 0-26-26m14 70a74 74 0 0 1-148 0v-12a14 14 0 0 1 14-14h14v26a6 6 0 0 0 12 0V92a14 14 0 0 1 28 0v28a6 6 0 0 0 12 0V92a14 14 0 0 1 28 0v28a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0Z"></svg:path>`,
})
export class PhHandGrabbingLightIcon {
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
  selector: 'svg[phLassoLightIcon],svg[ph-lasso-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.68 61.63C184.11 49 156.88 42 128 42s-56.11 7-76.68 19.63C29.83 74.85 18 92.73 18 112s11.83 37.13 33.32 50.35C70.45 174.1 95.35 181 122 181.85v1.94c0 14.76-6.94 27.1-19.54 34.73c-15.22 9.22-36 9.9-51.68 1.71a6 6 0 1 0-5.56 10.63A64.45 64.45 0 0 0 75 238a65.24 65.24 0 0 0 33.7-9.22c16.34-9.89 25.33-25.87 25.33-45v-1.94c26.65-.89 51.57-7.74 70.72-19.52C226.17 149.11 238 131.23 238 112s-11.83-37.15-33.32-50.37m-140 94.46c5.32-12 17.2-15.07 26.48-13.87c12.28 1.6 24.64 10.67 29.08 27.55c-20.51-.96-39.76-5.69-55.52-13.68Zm133.67-4c-17.62 10.85-40.83 17.1-65.77 17.79a52.8 52.8 0 0 0-11.31-23.84a45.24 45.24 0 0 0-28.56-15.73c-16.89-2.2-31.49 5.54-38.41 19.68C38.61 139.37 30 126 30 112c0-14.93 9.8-29.18 27.61-40.13C76.32 60.34 101.32 54 128 54s51.68 6.34 70.39 17.85C216.2 82.8 226 97.05 226 112s-9.8 29.16-27.61 40.11Z"></svg:path>`,
})
export class PhLassoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoLightIcon],svg[ph-lastfm-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 160a38 38 0 0 1-38 38h-17.43a54.21 54.21 0 0 1-48.94-31.16l-30.14-64.6A42.14 42.14 0 0 0 73.43 78H64a42 42 0 0 0-42 42v24a42 42 0 0 0 42 42h8a34 34 0 0 0 31.17-20.4a6 6 0 0 1 11 4.8A46 46 0 0 1 72 198h-8a54.06 54.06 0 0 1-54-54v-24a54.06 54.06 0 0 1 54-54h9.43a54.21 54.21 0 0 1 48.94 31.16l30.14 64.6A42.14 42.14 0 0 0 190.57 186H208a26 26 0 0 0 0-52h-20a34 34 0 0 1 0-68h20a30 30 0 0 1 30 30a6 6 0 0 1-12 0a18 18 0 0 0-18-18h-20a22 22 0 0 0 0 44h20a38 38 0 0 1 38 38"></svg:path>`,
})
export class PhLastfmLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutLightIcon],svg[ph-layout-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v42H38V56a2 2 0 0 1 2-2m-2 146v-90h60v92H40a2 2 0 0 1-2-2m178 2H110v-92h108v90a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhLayoutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafLightIcon],svg[ph-leaf-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.45 40.19a6 6 0 0 0-5.64-5.64C140.43 30.11 80.14 52.71 54.53 95c-17.44 28.79-16.76 62.8 1.79 96.2l-20.56 20.56a6 6 0 1 0 8.48 8.48l20.56-20.56c17.27 9.59 34.7 14.41 51.49 14.41A85.4 85.4 0 0 0 161 201.47c42.29-25.61 64.88-85.9 60.45-161.28m-66.66 151c-24.08 14.58-52.64 14.37-81.13-.39l90.59-90.59a6 6 0 0 0-8.48-8.48l-90.59 90.61c-14.76-28.49-15-57-.39-81.13c22.68-37.43 76.63-57.8 145-54.95c2.8 68.32-17.57 122.28-55 144.95Z"></svg:path>`,
})
export class PhLeafLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternLightIcon],svg[ph-lectern-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.51 121.74l-40-80A13.92 13.92 0 0 0 192 34H64a13.92 13.92 0 0 0-12.52 7.74l-40 80A14 14 0 0 0 24 142h98v68H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-68h98a14 14 0 0 0 12.52-20.26Zm-10.82 7.31a1.93 1.93 0 0 1-1.7.95H24a2 2 0 0 1-1.79-2.89l40-80A2 2 0 0 1 64 46h128a2 2 0 0 1 1.79 1.11l40 80a2 2 0 0 1-.1 1.94M190 104a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h112a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhLecternLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoLightIcon],svg[ph-lego-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.68 74.63l-46.83-23.41C190.69 41.09 176.78 34 160 34c-21.31 0-38 11.42-38 26a19.1 19.1 0 0 0 1.56 7.51l-22 11A51.5 51.5 0 0 0 80 74c-21.31 0-38 11.42-38 26a19.1 19.1 0 0 0 1.56 7.51l-30.24 15.12A6 6 0 0 0 10 128v64a6 6 0 0 0 3.32 5.37l64 32a6 6 0 0 0 5.36 0l160-80A6 6 0 0 0 246 144V80a6 6 0 0 0-3.32-5.37M80 153.29L29.42 128l21.77-10.88C58.1 122.59 68.36 126 80 126c21.31 0 38-11.42 38-26a20.4 20.4 0 0 0-5.43-13.58l18.62-9.3C138.1 82.59 148.36 86 160 86c18.63 0 33.74-8.73 37.23-20.67L226.58 80ZM160 46c15.32 0 26 7.38 26 14s-10.68 14-26 14s-26-7.38-26-14s10.68-14 26-14M80 86c15.32 0 26 7.38 26 14s-10.68 14-26 14s-26-7.38-26-14s10.68-14 26-14m-58 51.71l52 26v50.58l-52-26Zm64 76.58v-50.58l148-74v50.58Z"></svg:path>`,
})
export class PhLegoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyLightIcon],svg[ph-lego-smiley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 122a10 10 0 1 1 10-10a10 10 0 0 1-10 10m56-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-3.2 44.92a47 47 0 0 1-49.6 0a6 6 0 0 0-6.4 10.16a59 59 0 0 0 62.4 0a6 6 0 1 0-6.4-10.16M214 80v96a30.05 30.05 0 0 1-24 29.4V224a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14v-18.6A30.05 30.05 0 0 1 42 176V80a30 30 0 0 1 30-30h18V32a14 14 0 0 1 14-14h48a14 14 0 0 1 14 14v18h18a30 30 0 0 1 30 30M102 50h52V32a2 2 0 0 0-2-2h-48a2 2 0 0 0-2 2Zm76 174v-18H78v18a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2m24-144a18 18 0 0 0-18-18H72a18 18 0 0 0-18 18v96a18 18 0 0 0 18 18h112a18 18 0 0 0 18-18Z"></svg:path>`,
})
export class PhLegoSmileyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanLightIcon],svg[ph-less-than-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.42 202.57a6 6 0 0 1-8 2.85l-152-72a6 6 0 0 1 0-10.84l152-72a6 6 0 0 1 5.14 10.84L62 128l140.55 66.58a6 6 0 0 1 2.87 7.99"></svg:path>`,
})
export class PhLessThanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualLightIcon],svg[ph-less-than-or-equal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 104a6 6 0 0 1 3.93-5.63l152-56a6 6 0 1 1 4.15 11.26L65.36 104l136.71 50.37A6 6 0 0 1 200 166a6.1 6.1 0 0 1-2.08-.37l-152-56A6 6 0 0 1 42 104m158 90H48a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhLessThanOrEqualLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHLightIcon],svg[ph-letter-circle-h-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-130v80a6 6 0 0 1-12 0v-34h-52v34a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0v34h52V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhLetterCircleHLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePLightIcon],svg[ph-letter-circle-p-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m8-136h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-18h26a34 34 0 0 0 0-68m0 56h-26V94h26a22 22 0 0 1 0 44"></svg:path>`,
})
export class PhLetterCirclePLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVLightIcon],svg[ph-letter-circle-v-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m37.57-119.77l-32 80a6 6 0 0 1-11.14 0l-32-80a6 6 0 1 1 11.14-4.46L128 159.84l26.43-66.07a6 6 0 0 1 11.14 4.46"></svg:path>`,
})
export class PhLetterCircleVLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyLightIcon],svg[ph-lifebuoy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m36.47 130a45.87 45.87 0 0 0 0-56l31.24-31.23a89.81 89.81 0 0 1 0 118.44ZM94 128a34 34 0 1 1 34 34a34 34 0 0 1-34-34m93.22-67.71L156 91.53a45.87 45.87 0 0 0-56 0L68.78 60.29a89.81 89.81 0 0 1 118.44 0M60.29 68.78L91.53 100a45.87 45.87 0 0 0 0 56l-31.24 31.22a89.81 89.81 0 0 1 0-118.44m8.49 126.93L100 164.47a45.87 45.87 0 0 0 56 0l31.23 31.24a89.81 89.81 0 0 1-118.44 0Z"></svg:path>`,
})
export class PhLifebuoyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentLightIcon],svg[ph-lightbulb-filament-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 232a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m40-128a85.56 85.56 0 0 1-32.88 67.64A18.23 18.23 0 0 0 174 186v6a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14v-6a18 18 0 0 0-7-14.23a85.59 85.59 0 0 1-33-67.25c-.26-46.61 37.39-85.4 83.93-86.52A86 86 0 0 1 214 104m-12 0a74 74 0 0 0-75.79-74C86.17 31 53.78 64.34 54 104.42a73.67 73.67 0 0 0 28.4 57.87A29.92 29.92 0 0 1 94 186v6a2 2 0 0 0 2 2h26v-47.51l-30.24-30.25a6 6 0 0 1 8.48-8.48L128 135.52l27.76-27.76a6 6 0 0 1 8.48 8.48L134 146.49V194h26a2 2 0 0 0 2-2v-6a30.18 30.18 0 0 1 11.7-23.78A73.59 73.59 0 0 0 202 104"></svg:path>`,
})
export class PhLightbulbFilamentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbLightIcon],svg[ph-lightbulb-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 232a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m40-128a85.56 85.56 0 0 1-32.88 67.64A18.23 18.23 0 0 0 174 186v6a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14v-6a18 18 0 0 0-7-14.23a85.59 85.59 0 0 1-33-67.24C41.74 57.91 79.39 19.12 125.93 18A86 86 0 0 1 214 104m-12 0a74 74 0 0 0-75.79-74C86.17 31 53.78 64.34 54 104.42a73.67 73.67 0 0 0 28.4 57.87A29.92 29.92 0 0 1 94 186v6a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2v-6a30.18 30.18 0 0 1 11.7-23.78A73.59 73.59 0 0 0 202 104m-20.08-9A55.58 55.58 0 0 0 137 50.08a6 6 0 1 0-2 11.84c17.38 2.92 32.13 17.68 35.08 35.08a6 6 0 0 0 5.91 5a7 7 0 0 0 1-.08a6 6 0 0 0 4.93-6.92"></svg:path>`,
})
export class PhLightbulbLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseLightIcon],svg[ph-lighthouse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82a6 6 0 0 0-6 6v18h-15l-5-50.6a6 6 0 0 0-2-3.88l-42.89-38.15l-.15-.12a14 14 0 0 0-17.92 0l-.15.12L76 51.52a6 6 0 0 0-2 3.88L69 106H54V88a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6h19.75l-9.69 96.67A14 14 0 0 0 72 230h112a14 14 0 0 0 13.93-15.36L188.25 118H208a6 6 0 0 0 6-6V88a6 6 0 0 0-6-6m-81.23-59.58a2 2 0 0 1 2.46 0l31 27.58H95.77ZM85.43 62h85.14l4.43 44h-41V88a6 6 0 0 0-12 0v18H81Zm100 155.35a2 2 0 0 1-1.43.65H72a2 2 0 0 1-2-2.16L74.2 174h107.6l4.2 41.81a2 2 0 0 1-.52 1.54ZM180.6 162H75.4l4.41-44h96.38Z"></svg:path>`,
})
export class PhLighthouseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningALightIcon],svg[ph-lightning-a-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.88 111.94a6 6 0 0 0-3.42-4.27L119 84.56l14-59.17a6 6 0 0 0-10.24-5.47L27.6 122.78a6 6 0 0 0 1.94 9.55L81 155.44l-14 59.17a6 6 0 0 0 3 6.68a6 6 0 0 0 7.22-1.22l95.2-102.85a6 6 0 0 0 1.46-5.28m-90 83.21l9.92-41.76a6 6 0 0 0-3.38-6.86L42.08 124.8l74-80l-9.92 41.77a6 6 0 0 0 3.38 6.86l48.38 21.73Zm153.44 18.16l-36-72a6 6 0 0 0-10.74 0l-36 72a6 6 0 0 0 10.74 5.37L175.71 198h40.58l10.34 20.68A6 6 0 0 0 232 222a5.9 5.9 0 0 0 2.68-.64a6 6 0 0 0 2.68-8.05ZM181.71 186L196 157.42L210.29 186Z"></svg:path>`,
})
export class PhLightningALightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningLightIcon],svg[ph-lightning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.84 118.63a6 6 0 0 0-3.73-4.25l-59.23-22.21l15-75a6 6 0 0 0-10.27-5.27l-112 120a6 6 0 0 0 2.28 9.71l59.23 22.21l-15 75a6 6 0 0 0 3.14 6.52A6.1 6.1 0 0 0 96 246a6 6 0 0 0 4.39-1.91l112-120a6 6 0 0 0 1.45-5.46M106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85l91.46-98l-11.82 59.29a6 6 0 0 0 3.77 6.8l55.6 20.85Z"></svg:path>`,
})
export class PhLightningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashLightIcon],svg[ph-lightning-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l40.49 44.58l-40.44 43.33a6 6 0 0 0 2.28 9.71l59.23 22.21l-15 75a6 6 0 0 0 3.14 6.52A6.1 6.1 0 0 0 96 246a6 6 0 0 0 4.39-1.91l63.34-67.87L203.56 220a6 6 0 0 0 8.88-8.08ZM106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85l33.64-36l63.48 69.83Zm4-150.91a6 6 0 0 1-.29-8.48l45.88-49.16a6 6 0 0 1 10.27 5.27l-15 75l59.23 22.21a6 6 0 0 1 2.28 9.71L190.08 148a6 6 0 1 1-8.77-8.19l16.18-17.33l-55.6-20.85a6 6 0 0 1-3.77-6.8L150 35.54l-31.5 33.71a6 6 0 0 1-8.5.3"></svg:path>`,
})
export class PhLightningSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentLightIcon],svg[ph-line-segment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.23 42.77A30 30 0 0 0 167 80.54L80.54 167a30.07 30.07 0 0 0-37.77 3.81A30 30 0 1 0 89 175.46L175.46 89a30 30 0 0 0 37.77-46.25Zm-136.51 162a18 18 0 1 1 0-25.46a18 18 0 0 1 0 25.43Zm128-128a18 18 0 0 1-25.46 0a18 18 0 1 1 25.46 0"></svg:path>`,
})
export class PhLineSegmentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsLightIcon],svg[ph-line-segments-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.23 34.77a30.06 30.06 0 0 0-42.44 0a30.06 30.06 0 0 0 0 42.44c.65.64 1.32 1.24 2 1.81l-28.14 52.26a30.11 30.11 0 0 0-25.19 3.72L121 112.54a30 30 0 0 0-46.22-37.76a30 30 0 0 0 0 42.43a26 26 0 0 0 2 1.82l-28.14 52.26a30 30 0 0 0-29.87 7.5a30 30 0 1 0 42.44 0c-.65-.64-1.32-1.24-2-1.81l28.14-52.26a30.07 30.07 0 0 0 25.19-3.72L135 143.46a30 30 0 1 0 46.25-4.67a26 26 0 0 0-2-1.82l28.14-52.26a30 30 0 0 0 29.87-49.94Zm-184.51 178a18 18 0 1 1 0-25.46a18 18 0 0 1 0 25.43Zm30.55-104a18 18 0 1 1 25.46 0a18 18 0 0 1-25.46-.04Zm89.46 64a18 18 0 1 1 0-25.46a18 18 0 0 1 0 25.42Zm56-104a18 18 0 1 1 0-25.46a18 18 0 0 1 .01 25.41Z"></svg:path>`,
})
export class PhLineSegmentsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalLightIcon],svg[ph-line-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 24v208a6 6 0 0 1-12 0V24a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhLineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakLightIcon],svg[ph-link-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56a34 34 0 0 0-48-.05l-11.66 12.19a6 6 0 1 1-8.68-8.28l11.71-12.28l.1-.11a46 46 0 0 1 65.06 65.06l-.11.1l-12.28 11.71a6 6 0 1 1-8.28-8.68L200.09 104a34 34 0 0 0-.09-48m-84.38 131.9L104 200.09A34 34 0 0 1 55.91 152l12.23-11.67a6 6 0 0 0-8.28-8.68l-12.28 11.72l-.11.1a46 46 0 0 0 65.06 65.06l.1-.11l11.71-12.28a6 6 0 1 0-8.68-8.28ZM216 154h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12M40 102h24a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m120 84a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6M96 70a6 6 0 0 0 6-6V40a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhLinkBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkLightIcon],svg[ph-link-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 88.18a52.42 52.42 0 0 1-15.4 35.66l-34.75 34.75A52.28 52.28 0 0 1 150.62 174h-.05A52.63 52.63 0 0 1 98 119.9a6 6 0 0 1 6-5.84h.17a6 6 0 0 1 5.83 6.16A40.62 40.62 0 0 0 150.58 162a40.4 40.4 0 0 0 28.73-11.9l34.75-34.74a40.63 40.63 0 0 0-57.43-57.46l-11 11a6 6 0 0 1-8.49-8.49l11-11a52.62 52.62 0 0 1 74.43 0A52.83 52.83 0 0 1 238 88.18m-127.62 98.9l-11 11A40.36 40.36 0 0 1 70.6 210a40.63 40.63 0 0 1-28.7-69.36l34.72-34.74A40.63 40.63 0 0 1 146 135.77a6 6 0 0 0 5.83 6.16h.17a6 6 0 0 0 6-5.84a52.63 52.63 0 0 0-89.86-38.67l-34.76 34.74A52.63 52.63 0 0 0 70.56 222a52.26 52.26 0 0 0 37.22-15.42l11-11a6 6 0 1 0-8.49-8.48Z"></svg:path>`,
})
export class PhLinkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakLightIcon],svg[ph-link-simple-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.2 118.18l-30.07 30.07a6 6 0 0 1-8.49-8.49l30.08-30.07a42 42 0 0 0-59.41-59.41l-30.07 30.06a6 6 0 0 1-8.49-8.49l30.07-30a54 54 0 0 1 76.38 76.38Zm-74.44 57.46l-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z"></svg:path>`,
})
export class PhLinkSimpleBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakLightIcon],svg[ph-link-simple-horizontal-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 128a42 42 0 0 0 42 42h40a6 6 0 0 1 0 12H64a54 54 0 0 1 0-108h40a6 6 0 0 1 0 12H64a42 42 0 0 0-42 42m170-54h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalLightIcon],svg[ph-link-simple-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 122h96a6 6 0 0 1 0 12H80a6 6 0 0 1 0-12m24 48H64a42 42 0 0 1 0-84h40a6 6 0 0 0 0-12H64a54 54 0 0 0 0 108h40a6 6 0 0 0 0-12m88-96h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108"></svg:path>`,
})
export class PhLinkSimpleHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleLightIcon],svg[ph-link-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.25 91.75a6 6 0 0 1 0 8.49l-64 64a6 6 0 0 1-8.49-8.48l64-64a6 6 0 0 1 8.49-.01M214.2 41.8a54.07 54.07 0 0 0-76.38 0l-30.07 30.05a6 6 0 0 0 8.49 8.49l30.07-30.06a42 42 0 0 1 59.41 59.41l-30.08 30.07a6 6 0 1 0 8.49 8.49l30.07-30.07a54 54 0 0 0 0-76.38m-74.44 133.84l-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z"></svg:path>`,
})
export class PhLinkSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoLightIcon],svg[ph-linkedin-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 26H40a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM94 112v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m88 28v36a6 6 0 0 1-12 0v-36a22 22 0 0 0-44 0v36a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0v2.11A34 34 0 0 1 182 140M98 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhLinkedinLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoLightIcon],svg[ph-linktree-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 160v72a6 6 0 0 1-12 0v-72a6 6 0 0 1 12 0m74-62h-65.52l45.76-45.76a6 6 0 0 0-8.48-8.48L134 89.52V24a6 6 0 0 0-12 0v65.52L76.24 43.76a6 6 0 0 0-8.48 8.48L113.52 98H48a6 6 0 0 0 0 12h65.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L128 112.48l51.76 51.76a6 6 0 0 0 8.48-8.48L142.48 110H208a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhLinktreeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoLightIcon],svg[ph-linux-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.74 212.69a6 6 0 0 1-8.42-.94C218 210.05 186 169.17 186 88a58 58 0 0 0-116 0c0 81.17-31.95 122.05-33.31 123.75a6 6 0 0 1-9.38-7.49C27.68 203.79 58 164.56 58 88a70 70 0 0 1 140 0c0 76.63 30.38 115.87 30.69 116.26a6 6 0 0 1-.95 8.43M100 90a10 10 0 1 0 10 10a10 10 0 0 0-10-10m66 10a10 10 0 1 0-10 10a10 10 0 0 0 10-10m-67.31 30.63a6 6 0 0 0-5.37 10.74l32 16a6 6 0 0 0 2.68.63a6.1 6.1 0 0 0 2.69-.63l32-16a6 6 0 0 0-5.37-10.74L128 145.29ZM128 178a52.07 52.07 0 0 0-45.24 27.08a6 6 0 0 0 10.49 5.84a39.33 39.33 0 0 1 69.51 0A6 6 0 0 0 168 214a5.9 5.9 0 0 0 2.91-.76a6 6 0 0 0 2.33-8.16A52.09 52.09 0 0 0 128 178"></svg:path>`,
})
export class PhLinuxLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsLightIcon],svg[ph-list-bullets-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 64a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6m134 58H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12m0 64H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12M44 54a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 128a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0-64a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhListBulletsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksLightIcon],svg[ph-list-checks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6h-88a6 6 0 0 1 0-12h88a6 6 0 0 1 6 6m-94-58h88a6 6 0 0 0 0-12h-88a6 6 0 0 0 0 12m88 116h-88a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12M83.76 43.76L56 71.51L44.24 59.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48m0 64L56 135.51l-11.76-11.75a6 6 0 1 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48m0 64L56 199.51l-11.76-11.75a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhListChecksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesLightIcon],svg[ph-list-dashes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 64a6 6 0 0 1 6-6h120a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m126 58H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12m0 64H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12M56 58H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListDashesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartLightIcon],svg[ph-list-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h64a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m80 52H40a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12m126-42c0 35.3-49.22 60.32-51.32 61.37a6 6 0 0 1-5.36 0C187.22 204.32 138 179.3 138 144a30 30 0 0 1 54-18a30 30 0 0 1 54 18m-12 0a18 18 0 0 0-36 0a6 6 0 0 1-12 0a18 18 0 0 0-36 0c0 14.15 11.78 27 21.67 35.25A139 139 0 0 0 192 193.19a138 138 0 0 0 20.33-13.94C222.22 171 234 158.15 234 144"></svg:path>`,
})
export class PhListHeartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListLightIcon],svg[ph-list-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassLightIcon],svg[ph-list-magnifying-glass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h72a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m88 52H40a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12m108.24 10.24a6 6 0 0 1-8.48 0l-21.49-21.48a38.06 38.06 0 1 1 8.49-8.49l21.48 21.49a6 6 0 0 1 0 8.48M184 170a26 26 0 1 0-26-26a26 26 0 0 0 26 26"></svg:path>`,
})
export class PhListMagnifyingGlassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersLightIcon],svg[ph-list-numbers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H104a6 6 0 0 1 0-12h112a6 6 0 0 1 6 6M104 70h112a6 6 0 0 0 0-12H104a6 6 0 0 0 0 12m112 116H104a6 6 0 0 0 0 12h112a6 6 0 0 0 0-12M42.68 53.37L50 49.71V104a6 6 0 0 0 12 0V40a6 6 0 0 0-8.68-5.37l-16 8a6 6 0 0 0 5.36 10.74M72 202H52l21.48-28.74A21.5 21.5 0 0 0 77.79 157A21.75 21.75 0 0 0 69 142.38a22.86 22.86 0 0 0-31.35 4.31a22.2 22.2 0 0 0-3.28 5.92a6 6 0 0 0 11.28 4.11a9.9 9.9 0 0 1 1.48-2.67a10.78 10.78 0 0 1 14.78-2a9.9 9.9 0 0 1 4 6.61a9.64 9.64 0 0 1-2 7.28l-.06.09l-28.65 38.38A6 6 0 0 0 40 214h32a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListNumbersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusLightIcon],svg[ph-list-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m104 52H40a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12m88 0h-18v-18a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0v-18h18a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarLightIcon],svg[ph-list-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h56a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m72 52H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m123.82-43.76l-23.49 19.39l7.16 28.93a6 6 0 0 1-8.87 6.61L184 181.5l-26.62 15.67a6 6 0 0 1-8.87-6.61l7.16-28.93l-23.49-19.39a6 6 0 0 1 3.36-10.61l31-2.4l11.91-27.61a6 6 0 0 1 11 0l11.91 27.61l31 2.4a6 6 0 0 1 3.36 10.61Zm-19.1.21l-19.83-1.53a6 6 0 0 1-5-3.61L184 119.14l-7.84 18.17a6 6 0 0 1-5 3.61l-19.83 1.53l14.94 12.33a6 6 0 0 1 2 6.07l-4.63 18.74L181 169.37a6 6 0 0 1 6.08 0l17.37 10.22l-4.63-18.74a6 6 0 0 1 2-6.07Z"></svg:path>`,
})
export class PhListStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyLightIcon],svg[ph-lock-key-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M94 56a34 34 0 0 1 68 0v26H94Zm116 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-82-94a26 26 0 0 0-6 51.29V184a6 6 0 0 0 12 0v-18.71a26 26 0 0 0-6-51.29m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhLockKeyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenLightIcon],svg[ph-lock-key-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-82-94a26 26 0 0 0-6 51.29V184a6 6 0 0 0 12 0v-18.71a26 26 0 0 0-6-51.29m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhLockKeyOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedLightIcon],svg[ph-lock-laminated-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M46 126h164v20H46Zm0 32h164v20H46ZM94 56a34 34 0 0 1 68 0v26H94ZM48 94h160a2 2 0 0 1 2 2v18H46V96a2 2 0 0 1 2-2m160 116H48a2 2 0 0 1-2-2v-18h164v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhLockLaminatedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenLightIcon],svg[ph-lock-laminated-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M46 126h164v20H46Zm0 32h164v20H46Zm2-64h160a2 2 0 0 1 2 2v18H46V96a2 2 0 0 1 2-2m160 116H48a2 2 0 0 1-2-2v-18h164v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhLockLaminatedOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLightIcon],svg[ph-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M94 56a34 34 0 0 1 68 0v26H94Zm116 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-72-56a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenLightIcon],svg[ph-lock-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-72-56a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhLockOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleLightIcon],svg[ph-lock-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M94 56a34 34 0 0 1 68 0v26H94Zm116 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhLockSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenLightIcon],svg[ph-lock-simple-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhLockSimpleOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersLightIcon],svg[ph-lockers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 72a6 6 0 0 1-6 6h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m-6 26h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12M72 78h24a6 6 0 0 0 0-12H72a6 6 0 0 0 0 12m24 20H72a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m126-50v176a6 6 0 0 1-12 0v-18h-76v18a6 6 0 0 1-12 0v-18H46v18a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M122 194V46H48a2 2 0 0 0-2 2v146Zm12 0h76V48a2 2 0 0 0-2-2h-74Z"></svg:path>`,
})
export class PhLockersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogLightIcon],svg[ph-log-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210 136a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 0c0 18.21-4.48 35.41-12.63 48.43C224.68 198.34 212.83 206 200 206H56c-12.83 0-24.68-7.66-33.37-21.57C14.48 171.41 10 154.21 10 136s4.48-35.41 12.63-48.43C31.32 73.66 43.17 66 56 66h37.52l38.24-38.24A6 6 0 0 1 136 26h32a6 6 0 0 1 0 12h-29.51l-28 28H200c12.83 0 24.68 7.66 33.37 21.57C241.52 100.59 246 117.79 246 136m-72 58a57.7 57.7 0 0 1-7.4-9.57a78 78 0 0 1-8.24-18.43H80a6 6 0 0 1 0-12h75.52a106 106 0 0 1-1.52-18c0-18.21 4.48-35.41 12.63-48.43A57.7 57.7 0 0 1 174 78H56c-13.89 0-26.16 15.1-31.36 36H104a6 6 0 0 1 0 12H22.54a94 94 0 0 0-.54 10c0 31.44 15.57 58 34 58Zm60-58c0-31.44-15.57-58-34-58s-34 26.56-34 58s15.57 58 34 58s34-26.56 34-58"></svg:path>`,
})
export class PhLogLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandLightIcon],svg[ph-magic-wand-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 152a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6M56 70h18v18a6 6 0 0 0 12 0V70h18a6 6 0 0 0 0-12H86V40a6 6 0 0 0-12 0v18H56a6 6 0 0 0 0 12m128 124h-10v-10a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12m33.9-115.41L78.58 217.9a14 14 0 0 1-19.8 0l-20.69-20.69a14 14 0 0 1 0-19.8L177.41 38.1a14 14 0 0 1 19.8 0l20.69 20.69a14 14 0 0 1 0 19.8M167.51 112L144 88.49L46.58 185.9a2 2 0 0 0 0 2.83l20.69 20.68a2 2 0 0 0 2.82 0Zm41.9-44.73l-20.68-20.68a2 2 0 0 0-2.83 0L152.48 80L176 103.52l33.41-33.42a2 2 0 0 0 0-2.83"></svg:path>`,
})
export class PhMagicWandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetLightIcon],svg[ph-magnet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.56 51.65A85.5 85.5 0 0 0 144.6 26h-.33a85.45 85.45 0 0 0-60.85 25.22L22 113.39a14 14 0 0 0 .06 19.74l28.66 28.66a13.9 13.9 0 0 0 9.9 4.1h.08a13.9 13.9 0 0 0 9.94-4.21l60.87-62.4a18.1 18.1 0 0 1 25.25-.28a17.63 17.63 0 0 1 5.34 12.62a19 19 0 0 1-5.44 13.44l-62.29 60.25a14 14 0 0 0-.15 19.95l28.67 28.66a14.05 14.05 0 0 0 19.7.1l61.8-60.49c33.68-33.67 34.21-88.35 1.17-121.88M62.08 153.29a2 2 0 0 1-1.42.6a2.15 2.15 0 0 1-1.42-.58l-28.67-28.66a2 2 0 0 1 0-2.82l25.22-25.55l31.34 31.34Zm72.11 72.15a2 2 0 0 1-2.82 0l-28.66-28.66a2 2 0 0 1-.59-1.43a2 2 0 0 1 .6-1.41L128.51 169l31.34 31.33ZM196 165l-27.52 26.94l-31.29-31.29l27.9-27l.07-.08a30.93 30.93 0 0 0 9-22.06a29.47 29.47 0 0 0-9-21.15a30.17 30.17 0 0 0-42.08.46L95.51 119L64.22 87.74l27.72-28.06A73.47 73.47 0 0 1 144.27 38h.28A73.52 73.52 0 0 1 197 60.08C225.44 88.92 224.94 136 196 165"></svg:path>`,
})
export class PhMagnetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightLightIcon],svg[ph-magnet-straight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42h-40a14 14 0 0 0-14 14v88a18 18 0 0 1-36 0V56a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v88a86 86 0 0 0 86 86h.65c47.06-.35 85.35-39.38 85.35-87V56a14 14 0 0 0-14-14m-40 12h40a2 2 0 0 1 2 2v34h-44V56a2 2 0 0 1 2-2M56 54h40a2 2 0 0 1 2 2v34H54V56a2 2 0 0 1 2-2m72.56 164H128a74 74 0 0 1-74-74v-42h44v42a30 30 0 0 0 60 0v-42h44v41c0 41.05-32.94 74.7-73.44 75"></svg:path>`,
})
export class PhMagnetStraightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassLightIcon],svg[ph-magnifying-glass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"></svg:path>`,
})
export class PhMagnifyingGlassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusLightIcon],svg[ph-magnifying-glass-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 112a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m78.24 116.24a6 6 0 0 1-8.48 0l-51.38-51.38a86.15 86.15 0 1 1 8.48-8.48l51.38 51.38a6 6 0 0 1 0 8.48M112 186a74 74 0 1 0-74-74a74.09 74.09 0 0 0 74 74"></svg:path>`,
})
export class PhMagnifyingGlassMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusLightIcon],svg[ph-magnifying-glass-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 112a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H80a6 6 0 0 1 0-12h26V80a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m78.24 116.24a6 6 0 0 1-8.48 0l-51.38-51.38a86.15 86.15 0 1 1 8.48-8.48l51.38 51.38a6 6 0 0 1 0 8.48M112 186a74 74 0 1 0-74-74a74.09 74.09 0 0 0 74 74"></svg:path>`,
})
export class PhMagnifyingGlassPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxLightIcon],svg[ph-mailbox-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 152a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m136-36v60a14 14 0 0 1-14 14h-90v34a6 6 0 0 1-12 0v-34H32a14 14 0 0 1-14-14v-60a58.07 58.07 0 0 1 58-58h78V24a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-26v28h14a58.07 58.07 0 0 1 58 58m-116 62v-62a46 46 0 0 0-92 0v60a2 2 0 0 0 2 2Zm104-62a46.06 46.06 0 0 0-46-46h-14v74a6 6 0 0 1-12 0V70h-42.71A57.93 57.93 0 0 1 134 116v62h90a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhMailboxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaLightIcon],svg[ph-map-pin-area-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114 80a14 14 0 1 1 14 14a14 14 0 0 1-14-14m-48 0a62 62 0 0 1 124 0c0 58.81-56.61 91.83-59 93.21a6 6 0 0 1-6 0c-2.39-1.38-59-34.4-59-93.21m12 0c0 44.52 38.81 73.49 50 80.91c11.18-7.42 50-36.38 50-80.91a50 50 0 0 0-100 0m124.08 69.51a6 6 0 1 0-4.16 11.25C215.5 167.25 226 175.94 226 184c0 16.08-40.25 34-98 34s-98-17.92-98-34c0-8.06 10.5-16.75 28.08-23.24a6 6 0 1 0-4.16-11.25C30.76 158.06 18 170.31 18 184c0 13.34 12.18 25.38 34.31 33.88C72.62 225.7 99.5 230 128 230s55.38-4.3 75.69-12.12C225.82 209.38 238 197.34 238 184c0-13.69-12.76-25.94-35.92-34.49"></svg:path>`,
})
export class PhMapPinAreaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLightIcon],svg[ph-map-pin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 66a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m0-112a86.1 86.1 0 0 0-86 86c0 30.91 14.34 63.74 41.47 94.94a252.3 252.3 0 0 0 41.09 38a6 6 0 0 0 6.88 0a252.3 252.3 0 0 0 41.09-38c27.13-31.2 41.47-64 41.47-94.94a86.1 86.1 0 0 0-86-86m0 206.51C113 212.93 54 163.62 54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51"></svg:path>`,
})
export class PhMapPinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineLightIcon],svg[ph-map-pin-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 226h-54.78a266 266 0 0 0 27.31-27.06c27.13-31.2 41.47-64 41.47-94.94a86 86 0 0 0-172 0c0 30.91 14.34 63.74 41.47 94.94A266 266 0 0 0 110.78 226H56a6 6 0 0 0 0 12h144a6 6 0 0 0 0-12M54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51c-15-11.58-74-60.89-74-120.51m112 0a38 38 0 1 0-38 38a38 38 0 0 0 38-38m-64 0a26 26 0 1 1 26 26a26 26 0 0 1-26-26"></svg:path>`,
})
export class PhMapPinLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusLightIcon],svg[ph-map-pin-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 104a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26V72a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m48 0c0 30.91-14.34 63.74-41.47 94.94a252.3 252.3 0 0 1-41.09 38a6 6 0 0 1-6.88 0a252.3 252.3 0 0 1-41.09-38C56.34 167.74 42 134.91 42 104a86 86 0 0 1 172 0m-12 0a74 74 0 0 0-148 0c0 59.62 59 108.93 74 120.51c15-11.58 74-60.89 74-120.51"></svg:path>`,
})
export class PhMapPinPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaLightIcon],svg[ph-map-pin-simple-area-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 101.52V176a6 6 0 0 0 12 0v-74.48a38 38 0 1 0-12 0M128 38a26 26 0 1 1-26 26a26 26 0 0 1 26-26m110 138c0 13.34-12.18 25.38-34.31 33.88C183.38 217.7 156.5 222 128 222s-55.38-4.3-75.69-12.12C30.18 201.38 18 189.34 18 176c0-19.6 26.46-36 69.05-42.86A6 6 0 0 1 89 145c-18 2.89-33.27 7.66-44.09 13.78C35.28 164.2 30 170.32 30 176c0 16.08 40.25 34 98 34s98-17.92 98-34c0-5.68-5.28-11.8-14.86-17.23c-10.82-6.12-26.07-10.89-44.09-13.78a6 6 0 0 1 1.9-11.85C211.54 140 238 156.4 238 176"></svg:path>`,
})
export class PhMapPinSimpleAreaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLightIcon],svg[ph-map-pin-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 72a54 54 0 1 0-60 53.66V232a6 6 0 0 0 12 0V125.66A54.07 54.07 0 0 0 182 72m-54 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhMapPinSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineLightIcon],svg[ph-map-pin-simple-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 210h-82v-76.34a54 54 0 1 0-12 0V210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M86 80a42 42 0 1 1 42 42a42 42 0 0 1-42-42"></svg:path>`,
})
export class PhMapPinSimpleLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldLightIcon],svg[ph-map-trifold-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.69 51.27a6 6 0 0 0-5.15-1.09L160.7 65.64l-62-31a6 6 0 0 0-4.14-.45l-64 16A6 6 0 0 0 26 56v144a6 6 0 0 0 7.46 5.82l61.84-15.46l62 31a6 6 0 0 0 4.14.45l64-16A6 6 0 0 0 230 200V56a6 6 0 0 0-2.31-4.73M102 49.71l52 26v130.58l-52-26Zm-64 11l52-13v131.61l-52 13Zm180 134.61l-52 13V76.68l52-13Z"></svg:path>`,
})
export class PhMapTrifoldLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoLightIcon],svg[ph-markdown-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50H24a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2Zm-108-88v48a6 6 0 0 1-12 0v-33.51l-21.76 21.75a6 6 0 0 1-8.48 0L62 118.49V152a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.24-4.24L88 127.51l27.76-27.75A6 6 0 0 1 126 104m78.24 19.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 1 1 8.48-8.48L170 137.51V104a6 6 0 0 1 12 0v33.51l13.76-13.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhMarkdownLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleLightIcon],svg[ph-marker-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M86 207.64V176a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2v31.64a90.32 90.32 0 0 1-84 0M104 142h48a2 2 0 0 1 2 2v18h-52v-18a2 2 0 0 1 2-2m11.54-12L126 79.59a2 2 0 0 1 3.92 0L140.46 130Zm76.1 61.64A93 93 0 0 1 182 200v-24a14 14 0 0 0-14-14h-2v-18a14 14 0 0 0-13.27-14l-11-52.9a14 14 0 0 0-27.42 0l-11 52.9A14 14 0 0 0 90 144v18h-2a14 14 0 0 0-14 14v24a93 93 0 0 1-9.64-8.37a90 90 0 1 1 127.28 0Z"></svg:path>`,
})
export class PhMarkerCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniLightIcon],svg[ph-martini-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 44.24A6 6 0 0 0 232 34H24a6 6 0 0 0-4.24 10.24L122 146.49V210H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-63.51ZM70.49 78h115L128 135.51Zm147-32l-20 20h-139l-20-20Z"></svg:path>`,
})
export class PhMartiniLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyLightIcon],svg[ph-mask-happy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.47 124a6 6 0 1 1-8.94 8c-3.06-3.42-9.74-6-15.53-6s-12.47 2.58-15.53 6a6 6 0 0 1-8.94-8c5.35-6 15.19-10 24.47-10s19.12 4 24.47 10m-80.94 8a6 6 0 1 0 8.94-8c-5.35-6-15.19-10-24.47-10s-19.12 4-24.47 10a6 6 0 1 0 8.94 8c3.06-3.42 9.74-6 15.53-6s12.47 2.58 15.53 6m58.73 31.43a6 6 0 0 0-8.46.67a38.89 38.89 0 0 1-59.6 0a6 6 0 1 0-9.13 7.79a50.9 50.9 0 0 0 77.86 0a6 6 0 0 0-.67-8.46M222 48v55.77c0 35.45-9.53 68.86-26.83 94.06C177.4 223.74 153.54 238 128 238s-49.4-14.26-67.17-40.16C43.53 172.64 34 139.23 34 103.78V48a14 14 0 0 1 19.06-13c14.19 5.46 42.8 14.7 74.94 14.7s60.75-9.24 74.94-14.7A14 14 0 0 1 222 48m-12 0a2 2 0 0 0-.87-1.66a1.93 1.93 0 0 0-1.85-.21C192.31 52 162.1 61.7 128 61.7S63.69 52 48.72 46.14a2 2 0 0 0-1.85.21A2 2 0 0 0 46 48v55.76C46 171.17 82.79 226 128 226s82-54.83 82-122.22Z"></svg:path>`,
})
export class PhMaskHappyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadLightIcon],svg[ph-mask-sad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157 187.32a6 6 0 0 1-8.32 1.67c-6.67-4.43-12.19-7-20.68-7s-14 2.56-20.68 7a6 6 0 1 1-6.64-10c8.13-5.4 15.88-9 27.32-9s19.19 3.6 27.32 9a6 6 0 0 1 1.68 8.33M179.53 116c-3.06 3.42-9.74 6-15.53 6s-12.47-2.58-15.53-6a6 6 0 1 0-8.94 8c5.35 6 15.19 10 24.47 10s19.12-4 24.47-10a6 6 0 1 0-8.94-8M222 48v55.77c0 35.45-9.53 68.86-26.83 94.06C177.4 223.74 153.54 238 128 238s-49.4-14.26-67.17-40.16C43.53 172.64 34 139.23 34 103.78V48a14 14 0 0 1 19.06-13c14.19 5.46 42.8 14.7 74.94 14.7s60.75-9.24 74.94-14.7A14 14 0 0 1 222 48m-12 0a2 2 0 0 0-2.72-1.87C192.31 52 162.1 61.7 128 61.7S63.69 52 48.72 46.14a2 2 0 0 0-1.85.21A2 2 0 0 0 46 48v55.76C46 171.17 82.79 226 128 226s82-54.83 82-122.22Zm-93.53 76a6 6 0 1 0-8.94-8c-3.06 3.42-9.74 6-15.53 6s-12.47-2.58-15.53-6a6 6 0 0 0-8.94 8c5.35 6 15.19 10 24.47 10s19.12-4 24.47-10"></svg:path>`,
})
export class PhMaskSadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoLightIcon],svg[ph-mastodon-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a38 38 0 0 0-38 38v120a38 38 0 0 0 38 38h88a6 6 0 0 0 0-12H72a26 26 0 0 1-26-26v-10h138a38 38 0 0 0 38-38V72a38 38 0 0 0-38-38m26 110a26 26 0 0 1-26 26H46V72a26 26 0 0 1 26-26h112a26 26 0 0 1 26 26Zm-28-40v32a6 6 0 0 1-12 0v-32a18 18 0 0 0-36 0v32a6 6 0 0 1-12 0v-32a18 18 0 0 0-36 0v32a6 6 0 0 1-12 0v-32a30 30 0 0 1 54-18a30 30 0 0 1 54 18"></svg:path>`,
})
export class PhMastodonLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsLightIcon],svg[ph-math-operations-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 72a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 106H78v-26a6 6 0 0 0-12 0v26H40a6 6 0 0 0 0 12h26v26a6 6 0 0 0 12 0v-26h26a6 6 0 0 0 0-12m48-4h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12m64 20h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-60.24-93.76a6 6 0 0 0 8.48 0L184 80.49l19.76 19.75a6 6 0 0 0 8.48-8.48L192.49 72l19.75-19.76a6 6 0 0 0-8.48-8.48L184 63.51l-19.76-19.75a6 6 0 0 0-8.48 8.48L175.51 72l-19.75 19.76a6 6 0 0 0 0 8.48"></svg:path>`,
})
export class PhMathOperationsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoLightIcon],svg[ph-matrix-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 46v164h18a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm170-12h-24a6 6 0 0 0 0 12h18v164h-18a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6m-64 56a30 30 0 0 0-24 12a30 30 0 0 0-42-6a6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a30 30 0 0 0-30-30"></svg:path>`,
})
export class PhMatrixLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalLightIcon],svg[ph-medal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 96a86 86 0 1 0-140 66.87V240a6 6 0 0 0 2.85 5.1a5.93 5.93 0 0 0 3.15.9a6 6 0 0 0 2.68-.63L128 222.71l45.33 22.66A6 6 0 0 0 182 240v-77.13A85.87 85.87 0 0 0 214 96M54 96a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74m116 134.29l-39.33-19.66a6 6 0 0 0-5.36 0L86 230.29V171a85.75 85.75 0 0 0 84 0ZM128 150a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54m0-96a42 42 0 1 1-42 42a42 42 0 0 1 42-42"></svg:path>`,
})
export class PhMedalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryLightIcon],svg[ph-medal-military-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 42H49a15 15 0 0 0-15 15v49.21a15 15 0 0 0 8.79 13.65l66.4 30.14a46 46 0 1 0 37.62 0l66.4-30.18a15 15 0 0 0 8.79-13.61V57a15 15 0 0 0-15-15m-45 12v76l-34 15.45L94 130V54ZM46 106.21V57a3 3 0 0 1 3-3h33v70.5l-34.24-15.56a3 3 0 0 1-1.76-2.73M162 192a34 34 0 1 1-34-34a34 34 0 0 1 34 34m48-85.79a3 3 0 0 1-1.76 2.73L174 124.5V54h33a3 3 0 0 1 3 3Z"></svg:path>`,
})
export class PhMedalMilitaryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoLightIcon],svg[ph-medium-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 66a62 62 0 1 0 62 62a62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50M184 66c-17.1 0-30 26.65-30 62s12.9 62 30 62s30-26.65 30-62s-12.9-62-30-62m0 112c-7.34 0-18-19.48-18-50s10.66-50 18-50s18 19.48 18 50s-10.66 50-18 50m62-106v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhMediumLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneLightIcon],svg[ph-megaphone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 120a46.05 46.05 0 0 0-46-46h-39.85c-2.58-.15-54.1-3.57-103.15-44.71A14 14 0 0 0 34 40v160a13.85 13.85 0 0 0 8.07 12.68A14.2 14.2 0 0 0 48 214a13.9 13.9 0 0 0 9-3.3c40-33.52 81.57-42 97-44.07v34a14 14 0 0 0 6.23 11.65l11 7.33a14 14 0 0 0 21.32-8.17l12.13-45.71A46.07 46.07 0 0 0 246 120M49.29 201.52A2 2 0 0 1 46 200V40a1.9 1.9 0 0 1 1.15-1.8A2.1 2.1 0 0 1 48 38a1.9 1.9 0 0 1 1.26.48c44 36.92 89 45.19 104.71 47v69c-15.68 1.85-60.67 10.13-104.68 47.04m131.64 7a2 2 0 0 1-3.05 1.18l-11-7.33a2 2 0 0 1-.89-1.67V166h26.2ZM200 154h-34V86h34a34 34 0 1 1 0 68"></svg:path>`,
})
export class PhMegaphoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleLightIcon],svg[ph-megaphone-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228 88.59l-176.08-54A14 14 0 0 0 34 48v144a14 14 0 0 0 14 14a14.6 14.6 0 0 0 4-.59L138 179v13a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-31.38l30-9.19A14.07 14.07 0 0 0 238 138v-36a14 14 0 0 0-10-13.41M48.56 193.92a2 2 0 0 1-1.76-.32a2 2 0 0 1-.8-1.6V48a2 2 0 0 1 .8-1.6A2.05 2.05 0 0 1 48 46a1.8 1.8 0 0 1 .49.08L138 73.53v92.95ZM186 192a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-16.65l36-11Zm40-54a2 2 0 0 1-1.44 1.92h-.08L150 162.8V77.21l74.56 22.87A2 2 0 0 1 226 102Z"></svg:path>`,
})
export class PhMegaphoneSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfLightIcon],svg[ph-member-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 134H54.26A74.09 74.09 0 0 0 128 202h72a6 6 0 0 1 0 12h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74.09 74.09 0 0 0-73.74 68H200a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhMemberOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryLightIcon],svg[ph-memory-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 58H24a14 14 0 0 0-14 14v128a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0V72a14 14 0 0 0-14-14M22 72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2v98H22Zm90 78a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6H48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6Zm-58-48h52v36H54Zm90 48h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6m6-48h52v36h-52Z"></svg:path>`,
})
export class PhMemoryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoLightIcon],svg[ph-messenger-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.24 107.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0L112 120.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0L144 135.51l27.76-27.75a6 6 0 0 1 8.48 0M230 128a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128m-12 0a90 90 0 1 0-167.92 45.06a6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31a6.1 6.1 0 0 1 3 .81A90 90 0 0 0 218 128"></svg:path>`,
})
export class PhMessengerLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoLightIcon],svg[ph-meta-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 149.31c0 15.75-3.07 29.17-8.88 38.81c-7.05 11.7-18 17.88-31.68 17.88c-26.74 0-46.3-36.51-67-75.17C113.14 98.57 93.55 62 74 62c-23.28 0-44 48.83-44 87.31c0 13.57 2.48 24.84 7.16 32.62c4.9 8.12 11.9 12.07 21.4 12.07c16.16 0 32.31-25.06 46-49.57a6 6 0 0 1 10.44 5.84C100 177.23 82 206 58.56 206c-13.67 0-24.63-6.18-31.68-17.88c-5.81-9.64-8.88-23.06-8.88-38.81C18 108.82 39.81 50 74 50c26.74 0 46.3 36.51 67 75.17c17.29 32.26 36.88 68.83 56.44 68.83c9.5 0 16.5-3.95 21.4-12.07c4.68-7.78 7.16-19.05 7.16-32.62C226 110.83 205.29 62 182 62c-9 0-18.91 7.76-30.14 23.73a6 6 0 0 1-9.82-6.91C150.75 66.45 164.37 50 182 50c34.19 0 56 58.82 56 99.31"></svg:path>`,
})
export class PhMetaLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorLightIcon],svg[ph-meteor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 122a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m124.24-62.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0m-56 8.48a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 8.48Zm64-64l-16 16a6 6 0 0 1-8.48-8.48l16-16a6 6 0 0 1 8.48 8.48M123.76 91.76l72-72a6 6 0 0 1 8.48 8.48l-72 72a6 6 0 1 1-8.48-8.48M145.5 201a6 6 0 0 1 0 8.49a70 70 0 0 1-99-99l82.75-82.74a6 6 0 1 1 8.48 8.48L55 119a58 58 0 1 0 82 82a6 6 0 0 1 8.5 0"></svg:path>`,
})
export class PhMeteorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeLightIcon],svg[ph-metronome-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.33 203.75l-28.45-89.41L212.43 84a6 6 0 0 0-8.88-8l-22.87 25.17l-18.26-57.42A13.94 13.94 0 0 0 149.08 34h-42.16a13.94 13.94 0 0 0-13.34 9.75l-50.91 160A14 14 0 0 0 56 222h144a14 14 0 0 0 13.34-18.25ZM187.45 162h-45.89l34-37.39ZM105 47.39a2 2 0 0 1 1.92-1.39h42.16a2 2 0 0 1 1.92 1.39l20.36 64l-46 50.61H68.55Zm96.6 161.79a1.94 1.94 0 0 1-1.6.82H56a2 2 0 0 1-1.9-2.61L64.73 174h126.54l10.62 33.39a1.94 1.94 0 0 1-.29 1.79"></svg:path>`,
})
export class PhMetronomeLightIcon {
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
