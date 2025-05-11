import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDogDuotoneIcon],svg[ph-dog-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 120.38V184a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32v-63.62L104 48h48Z" opacity=".2"></svg:path><svg:path d="m239.71 125l-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52a16.3 16.3 0 0 0 6.71 1.48a15.5 15.5 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16a16.3 16.3 0 0 0 6.72-1.47a15.77 15.77 0 0 0 9.12-17.54M32 128l16.43-88L90.5 52.37Zm144 80h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.93 56h40.14L200 123.11V184a24 24 0 0 1-24 24m48-80l-58.5-75.63L207.57 40zm-120 12a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDogDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorDuotoneIcon],svg[ph-door-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v184H56V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 40h128v176H64Zm104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDoorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDoorOpenDuotoneIcon],svg[ph-door-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v184h-32V32h24a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-40 0h-16V40h16ZM64 40h96v176H64Zm80 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDoorOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotDuotoneIcon],svg[ph-dot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotOutlineDuotoneIcon],svg[ph-dot-outline-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhDotOutlineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsNineDuotoneIcon],svg[ph-dots-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M72 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M60 116a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsNineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixDuotoneIcon],svg[ph-dots-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 64v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M72 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12M60 152a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsSixVerticalDuotoneIcon],svg[ph-dots-six-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 32v192a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M104 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-72 44a12 12 0 1 0 12 12a12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-72 68a12 12 0 1 0 12 12a12 12 0 0 0-12-12m72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsSixVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleDuotoneIcon],svg[ph-dots-three-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m56-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDotsThreeCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalDuotoneIcon],svg[ph-dots-three-circle-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 88a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDotsThreeCircleVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeDuotoneIcon],svg[ph-dots-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 96v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-136 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineDuotoneIcon],svg[ph-dots-three-outline-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24M48 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m160 0a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M48 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m160-48a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhDotsThreeOutlineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeOutlineVerticalDuotoneIcon],svg[ph-dots-three-outline-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-24-56a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0 112a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-64a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m0 144a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhDotsThreeOutlineVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeVerticalDuotoneIcon],svg[ph-dots-three-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 32v192a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m0 112a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDotsThreeVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadDuotoneIcon],svg[ph-download-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 136v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h40a8 8 0 0 1 0 16H32v64h192v-64h-40a8 8 0 0 1 0-16h40a16 16 0 0 1 16 16m-117.66-2.34a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0-11.32-11.32L136 108.69V24a8 8 0 0 0-16 0v84.69L85.66 74.34a8 8 0 0 0-11.32 11.32ZM200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path></svg:g>`,
})
export class PhDownloadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDownloadSimpleDuotoneIcon],svg[ph-download-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160H40V48a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 144v64a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0m-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 124.69V32a8 8 0 0 0-16 0v92.69L93.66 98.34a8 8 0 0 0-11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhDownloadSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDressDuotoneIcon],svg[ph-dress-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 224H56a8 8 0 0 1-7.35-11.15L96 112L73.14 76.12a8 8 0 0 1 0-8.24L96 35.23l7 8.77a32 32 0 0 0 50 0l7-8.76l22.86 32.65a8 8 0 0 1 0 8.24L160 112l47.34 100.85A8 8 0 0 1 200 224" opacity=".2"></svg:path><svg:path d="M214.7 209.7a2 2 0 0 0-.11-.25l-45.48-96.86l20.5-32.18l.11-.18a16 16 0 0 0 0-16.46c-.09-.16-.2-.32-.3-.47L168 32.7V8a8 8 0 0 0-16 0v24.42L146.74 39a24 24 0 0 1-37.48 0L104 32.42V8a8 8 0 0 0-16 0v24.7L66.58 63.3c-.1.15-.21.31-.3.47a16 16 0 0 0 0 16.46l.11.18l20.5 32.18l-45.48 96.86a2 2 0 0 0-.11.25A16 16 0 0 0 56 232h144a16 16 0 0 0 14.71-22.3ZM80 72l16.43-23.43l.33.42a40 40 0 0 0 62.48 0l.33-.42L176 72l-20.38 32h-55.23ZM56 216l45.07-96h53.84L200 216Z"></svg:path></svg:g>`,
})
export class PhDressDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDresserDuotoneIcon],svg[ph-dresser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M144 192a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M120 72h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 0 16m16 48h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m80-80v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16M56 152h144v-48H56Zm0-112v48h144V40Zm144 176v-48H56v48z"></svg:path></svg:g>`,
})
export class PhDresserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDribbbleLogoDuotoneIcon],svg[ph-dribbble-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m87.65 96.18q-3.82-.18-7.65-.18a168.6 168.6 0 0 0-43.94 5.84A166.5 166.5 0 0 0 150.61 96a168.3 168.3 0 0 0 38.2-31.55a87.78 87.78 0 0 1 26.84 55.73m-39.37-65.72A151.8 151.8 0 0 1 142 82.52a169.2 169.2 0 0 0-38.63-39a88 88 0 0 1 73 10.94Zm-90.63-3.58a153.1 153.1 0 0 1 42 39.18A151.8 151.8 0 0 1 64 104a154 154 0 0 1-20.28-1.35a88.4 88.4 0 0 1 41.93-51.77M40 128a88 88 0 0 1 .53-9.64A169 169 0 0 0 64 120a167.84 167.84 0 0 0 72.52-16.4a151 151 0 0 1 12.31 27.13a167 167 0 0 0-24.59 11.6a169.2 169.2 0 0 0-55.07 51.06A87.8 87.8 0 0 1 40 128m42 75a152.9 152.9 0 0 1 50.24-46.79a149 149 0 0 1 20.95-10a152.5 152.5 0 0 1 3.73 33.47a153 153 0 0 1-3.49 32.56A87.92 87.92 0 0 1 82 203m89.06 1.73a170 170 0 0 0 1.86-25a168.7 168.7 0 0 0-4.45-38.47A152.3 152.3 0 0 1 208 136q3.8 0 7.61.19a88.13 88.13 0 0 1-44.55 68.53Z"></svg:path></svg:g>`,
})
export class PhDribbbleLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDroneDuotoneIcon],svg[ph-drone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 76a36 36 0 1 1-36-36a36 36 0 0 1 36 36m68 36a36 36 0 1 0-36-36a36 36 0 0 0 36 36M76 144a36 36 0 1 0 36 36a36 36 0 0 0-36-36m104 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36" opacity=".2"></svg:path><svg:path d="M189.66 66.34a8 8 0 0 0-11.32 0L148.69 96h-41.38L77.66 66.34a8 8 0 0 0-11.32 11.32L96 107.31v41.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L107.31 160h41.38l29.65 29.66a8 8 0 0 0 11.32-11.32L160 148.69v-41.38l29.66-29.65a8 8 0 0 0 0-11.32M112 112h32v32h-32Zm26.51-50.67a44 44 0 1 1 56.16 56.16a7.9 7.9 0 0 1-2.67.51a8 8 0 0 1-2.67-15.54a28 28 0 1 0-35.74-35.74a8 8 0 1 1-15.08-5.34ZM224 180a44 44 0 0 1-85.49 14.67a8 8 0 0 1 15.08-5.34a28 28 0 1 0 35.74-35.74a8 8 0 0 1 5.34-15.08A44.07 44.07 0 0 1 224 180m-106.51 14.67a44 44 0 1 1-56.16-56.16a8 8 0 0 1 5.34 15.08a28 28 0 1 0 35.74 35.74a8 8 0 0 1 15.08 5.34M32 76a44 44 0 0 1 85.49-14.67a8 8 0 1 1-15.08 5.34a28 28 0 1 0-35.74 35.74A8 8 0 0 1 64 118a7.9 7.9 0 0 1-2.67-.46A44.07 44.07 0 0 1 32 76"></svg:path></svg:g>`,
})
export class PhDroneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropDuotoneIcon],svg[ph-drop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72m55.89-62.66a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></svg:path></svg:g>`,
})
export class PhDropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomDuotoneIcon],svg[ph-drop-half-bottom-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0a101 101 0 0 1 1.3-16h157.4a101 101 0 0 1 1.3 16" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26m0 190a72.08 72.08 0 0 1-72-72q0-4 .36-8h143.28q.36 4 .36 8a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhDropHalfBottomDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropHalfDuotoneIcon],svg[ph-drop-half-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-80 80V16s80 56 80 128" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M56 144c0-50 42.26-92.71 64-111.4v182.94A72.08 72.08 0 0 1 56 144m80 71.54V32.6C157.74 51.29 200 94 200 144a72.08 72.08 0 0 1-64 71.54"></svg:path></svg:g>`,
})
export class PhDropHalfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSimpleDuotoneIcon],svg[ph-drop-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128" opacity=".2"></svg:path><svg:path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhDropSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropSlashDuotoneIcon],svg[ph-drop-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l22.64 24.91C48.32 95 40 119.78 40 144a88 88 0 0 0 149.21 63.22l12.87 14.16a8 8 0 1 0 11.84-10.76ZM128 216a72.08 72.08 0 0 1-72-72c0-19.93 6.68-40.57 19.86-61.46l102.57 112.82A71.84 71.84 0 0 1 128 216M90 50.51a8 8 0 0 1-.27-11.31a248 248 0 0 1 33.68-29.75a8 8 0 0 1 9.18 0C136 11.83 216 68.7 216 144a88 88 0 0 1-3.15 23.4a8 8 0 0 1-7.71 5.88A7.8 7.8 0 0 1 203 173a8 8 0 0 1-5.59-9.83A72.6 72.6 0 0 0 200 144c0-57.24-55.48-105-72-118a252 252 0 0 0-26.66 24.23a8 8 0 0 1-11.34.28"></svg:path></svg:g>`,
})
export class PhDropSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDropboxLogoDuotoneIcon],svg[ph-dropbox-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 84l-52 36l-52-36l52-36Zm104 0l-52-36l-52 36l52 36ZM24 156l52 36l52-36l-52-36Zm104 0l52 36l52-36l-52-36Z" opacity=".2"></svg:path><svg:path d="M236.55 149.42L194.05 120l42.5-29.42a8 8 0 0 0 0-13.16l-52-36a8 8 0 0 0-9.1 0L128 74.27L80.55 41.42a8 8 0 0 0-9.1 0l-52 36a8 8 0 0 0 0 13.16L62 120l-42.5 29.42a8 8 0 0 0 0 13.16l52 36a8 8 0 0 0 9.1 0l47.4-32.85l47.45 32.85a8 8 0 0 0 9.1 0l52-36a8 8 0 0 0 0-13.16M180 57.73L218 84l-38 26.27L142.05 84ZM38.05 84L76 57.73L114 84l-38 26.27Zm38 98.27l-38-26.27l38-26.27L114 156Zm14-62.27l38-26.27L166 120l-38 26.27Zm90 62.27l-38-26.27L180 129.73L218 156Zm-21.53 24.64a8 8 0 0 1-2 11.13l-23.89 16.54a8 8 0 0 1-9.1 0L99.56 218a8 8 0 0 1 9.1-13.16L128 218.27l19.34-13.39a8 8 0 0 1 11.13 2.03Z"></svg:path></svg:g>`,
})
export class PhDropboxLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarDuotoneIcon],svg[ph-ear-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104c0 40-14.44 72-48 112c-8.07 9.77-18.34 16-32 16a44 44 0 0 1-44-44c0-41.49-36-28-36-84a80 80 0 0 1 160 0" opacity=".2"></svg:path><svg:path d="M216 104a8 8 0 0 1-16 0a72 72 0 0 0-144 0c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a88 88 0 0 1 176 0m-38.13 57.08a8 8 0 0 0-10.94 2.92a8 8 0 0 1-14.93-4c0-9.33 4.82-15.76 10.4-23.2c6.37-8.5 13.6-18.13 13.6-32.8a48 48 0 0 0-96 0a8 8 0 0 0 16 0a32 32 0 0 1 64 0c0 9.33-4.82 15.76-10.4 23.2c-6.37 8.5-13.6 18.13-13.6 32.8a24 24 0 0 0 44.78 12a8 8 0 0 0-2.91-10.92"></svg:path></svg:g>`,
})
export class PhEarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEarSlashDuotoneIcon],svg[ph-ear-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104c0 40-14.44 72-48 112c-8.07 9.77-18.34 16-32 16a44 44 0 0 1-44-44c0-41.49-36-28-36-84a80 80 0 0 1 160 0" opacity=".2"></svg:path><svg:path d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-35-38.45A24 24 0 0 1 136 160a40.8 40.8 0 0 1 1.21-10L96 104.66a8 8 0 0 1-16-.66a47.8 47.8 0 0 1 2.22-14.46L64.5 70a71.5 71.5 0 0 0-8.5 34c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a87.26 87.26 0 0 1 13.21-46.38L42.08 45.38a8 8 0 1 1 11.84-10.76ZM91.09 42.17A72 72 0 0 1 200 104a8 8 0 0 0 16 0A88 88 0 0 0 82.87 28.44a8 8 0 1 0 8.22 13.73m69.23 85a8 8 0 0 0 10.78-3.44A41.9 41.9 0 0 0 176 104a48 48 0 0 0-63.57-45.42a8 8 0 0 0 5.19 15.14A32 32 0 0 1 160 104a26 26 0 0 1-3.12 12.34a8 8 0 0 0 3.44 10.78Z"></svg:path></svg:g>`,
})
export class PhEarSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggCrackDuotoneIcon],svg[ph-egg-crack-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 152a80 80 0 0 1-160 0c0-64 48-128 80-128s80 64 80 128" opacity=".2"></svg:path><svg:path d="M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44M128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32c9.5 0 22.2 8.33 34.1 21.78L122 98.67a8 8 0 0 0 4 13.09l24.6 6.15l-6.5 32.52a8 8 0 0 0 6.27 9.41a7.8 7.8 0 0 0 1.63.16a8 8 0 0 0 7.83-6.43l8-40a8 8 0 0 0-5.9-9.33l-19.16-4.79L172.1 66.6c.42.61.83 1.22 1.24 1.84C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhEggCrackDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEggDuotoneIcon],svg[ph-egg-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 152a80 80 0 0 1-160 0c0-64 48-128 80-128s80 64 80 128" opacity=".2"></svg:path><svg:path d="M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44M128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32s30.81 14.64 45.34 36.44C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhEggDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectDuotoneIcon],svg[ph-eject-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 168v24a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-24a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8M48.23 128h159.54c7.16 0 10.89-8.27 6-13.37l-73.74-77.5a16.76 16.76 0 0 0-24.14 0l-73.74 77.5c-4.81 5.1-1.08 13.37 6.08 13.37" opacity=".2"></svg:path><svg:path d="M208 152H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160ZM48.24 136h159.52a16.18 16.18 0 0 0 14.93-9.76a15.59 15.59 0 0 0-3.1-17.12l-73.73-77.51a24.76 24.76 0 0 0-35.72 0l-73.73 77.51a15.59 15.59 0 0 0-3.1 17.12A16.18 16.18 0 0 0 48.24 136m73.49-93.36a8.77 8.77 0 0 1 12.54 0L207.85 120H48.14Z"></svg:path></svg:g>`,
})
export class PhEjectDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEjectSimpleDuotoneIcon],svg[ph-eject-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215.92 152H40.08a8.1 8.1 0 0 1-6.26-13.2L115.48 38a16.1 16.1 0 0 1 25 0l81.7 100.8a8.1 8.1 0 0 1-6.26 13.2" opacity=".2"></svg:path><svg:path d="M232 200a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8M25.59 150.84a16 16 0 0 1 2-17.07l81.67-100.83a24.11 24.11 0 0 1 37.48 0l81.65 100.83A16.1 16.1 0 0 1 215.91 160H40.09a16 16 0 0 1-14.5-9.16M40 143.91s0 .09.08.11h175.83s.08-.09.08-.13L134.3 43a8.1 8.1 0 0 0-12.6 0L40 143.84a.3.3 0 0 0 0 .07"></svg:path></svg:g>`,
})
export class PhEjectSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phElevatorDuotoneIcon],svg[ph-elevator-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 104v112H72V104Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 80v96h-40v-96Zm-56 96H80v-96h40Zm88 0h-16V104a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v104H48V48h160zM152 72a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhElevatorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEmptyDuotoneIcon],svg[ph-empty-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="m198.24 62.63l15.68-17.25a8 8 0 0 0-11.84-10.76L186.4 51.86A95.95 95.95 0 0 0 57.76 193.37l-15.68 17.25a8 8 0 1 0 11.84 10.76l15.68-17.24A95.95 95.95 0 0 0 198.24 62.63M48 128a80 80 0 0 1 127.6-64.25l-107 117.73A79.63 79.63 0 0 1 48 128m80 80a79.55 79.55 0 0 1-47.6-15.75l107-117.73A79.95 79.95 0 0 1 128 208"></svg:path></svg:g>`,
})
export class PhEmptyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEngineDuotoneIcon],svg[ph-engine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 120v48a8 8 0 0 1-8 8h-16l-37.66 37.66a8 8 0 0 1-5.65 2.34h-77.38a8 8 0 0 1-5.65-2.34l-39.32-39.32a8 8 0 0 1-2.34-5.65V80a8 8 0 0 1 8-8h116.69a8 8 0 0 1 5.65 2.34L224 112h16a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 104h-12.69L192 68.69A15.86 15.86 0 0 0 180.69 64H140V40h24a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16h24v24H64a16 16 0 0 0-16 16v52H24v-24a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0v-24h24v20.69A15.86 15.86 0 0 0 52.69 180L92 219.31a15.86 15.86 0 0 0 11.31 4.69h77.38a15.86 15.86 0 0 0 11.31-4.69L227.31 184H240a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-16a8 8 0 0 0-5.66 2.34L180.69 208h-77.38L64 168.69V80h116.69l37.65 37.66A8 8 0 0 0 224 120h16Z"></svg:path></svg:g>`,
})
export class PhEngineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeDuotoneIcon],svg[ph-envelope-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 56l-96 88l-96-88Z" opacity=".2"></svg:path><svg:path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"></svg:path></svg:g>`,
})
export class PhEnvelopeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeOpenDuotoneIcon],svg[ph-envelope-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 96l-78.55 56h-34.9L32 96l96-64Z" opacity=".2"></svg:path><svg:path d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z"></svg:path></svg:g>`,
})
export class PhEnvelopeOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleDuotoneIcon],svg[ph-envelope-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 56l-96 88l-96-88Z" opacity=".2"></svg:path><svg:path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-20.57 16L128 133.15L52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"></svg:path></svg:g>`,
})
export class PhEnvelopeSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEnvelopeSimpleOpenDuotoneIcon],svg[ph-envelope-simple-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 96l-78.55 56h-34.9L32 96l96-64Z" opacity=".2"></svg:path><svg:path d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78ZM40 200v-88.47l65.9 47a8 8 0 0 0 4.65 1.49h34.9a8 8 0 0 0 4.65-1.49l65.9-47V200Z"></svg:path></svg:g>`,
})
export class PhEnvelopeSimpleOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualizerDuotoneIcon],svg[ph-equalizer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v128H24V80a16 16 0 0 1 16-16Z" opacity=".2"></svg:path><svg:path d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8 24H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-64h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-48-16h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16m48 48h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhEqualizerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEqualsDuotoneIcon],svg[ph-equals-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhEqualsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEraserDuotoneIcon],svg[ph-eraser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m160 168l-48 48H66.75l-30.06-30.06a16 16 0 0 1 0-22.63L96 104Z" opacity=".2"></svg:path><svg:path d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M108.68 208H70.05l-27.72-27.72a8 8 0 0 1 0-11.31L96 115.31L148.69 168Zm105-105L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"></svg:path></svg:g>`,
})
export class PhEraserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownDuotoneIcon],svg[ph-escalator-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 160v40a8 8 0 0 1-8 8h-56L72 104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h56l96 104h40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM240 160v40a16 16 0 0 1-16 16h-56a8 8 0 0 1-5.88-2.57L68.5 112H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h56a8 8 0 0 1 5.88 2.57L187.5 144H224a16 16 0 0 1 16 16m-16 0h-40a8 8 0 0 1-5.88-2.57L84.5 56H32v40h40a8 8 0 0 1 5.88 2.57L171.5 200H224Z"></svg:path></svg:g>`,
})
export class PhEscalatorDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEscalatorUpDuotoneIcon],svg[ph-escalator-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v40a8 8 0 0 1-8 8h-40L88 208H32a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h40l96-104h56a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 40h-56a8 8 0 0 0-5.88 2.57L68.5 144H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h56a8 8 0 0 0 5.88-2.57L187.5 112H224a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 56h-40a8 8 0 0 0-5.88 2.57L84.5 200H32v-40h40a8 8 0 0 0 5.88-2.57L171.5 56H224Zm5.66 74.34a8 8 0 0 1-11.32 11.32L208 171.31V208a8 8 0 0 1-16 0v-36.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhEscalatorUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExamDuotoneIcon],svg[ph-exam-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v160l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.16L64 208.94l28.42 14.22a8 8 0 0 0 7.16 0L128 208.94l28.42 14.22a8 8 0 0 0 7.16 0L192 208.94l28.42 14.22A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176Zm-155.58-35.9a8 8 0 0 0 10.74-3.58L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 3.58 10.74M96 113.89L107.06 136H84.94ZM136 128a8 8 0 0 1 8-8h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhExamDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkDuotoneIcon],svg[ph-exclamation-mark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M144 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16-40a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v104a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhExclamationMarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeDuotoneIcon],svg[ph-exclude-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 160a73 73 0 0 0 .4 7.6a72 72 0 1 1 79.2-79.2a73 73 0 0 0-7.6-.4a72 72 0 0 0-72 72m79.6-71.6a73 73 0 0 1 .4 7.6a72 72 0 0 1-72 72a73 73 0 0 1-7.6-.4a72 72 0 1 0 79.2-79.2" opacity=".2"></svg:path><svg:path d="M174.63 81.37a80 80 0 1 0-93.26 93.26a80 80 0 1 0 93.26-93.26M32 96a64 64 0 0 1 126-16a80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96m128 0a64.07 64.07 0 0 1-64 64a64.07 64.07 0 0 1 64-64m0 128a64.11 64.11 0 0 1-62-48a80.08 80.08 0 0 0 78-78a64 64 0 0 1-16 126"></svg:path></svg:g>`,
})
export class PhExcludeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExcludeSquareDuotoneIcon],svg[ph-exclude-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 96v64H40V40h120v56Zm64 0v64H96v56h120V96Z" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 152V48h104v40H96a8 8 0 0 0-8 8v56Zm104-48v48h-48v-48Zm56 104H104v-40h56a8 8 0 0 0 8-8v-56h40Z"></svg:path></svg:g>`,
})
export class PhExcludeSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phExportDuotoneIcon],svg[ph-export-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104v112H48V104Z" opacity=".2"></svg:path><svg:path d="M216 112v96a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H56v96h144v-96h-24a8 8 0 0 1 0-16h24a16 16 0 0 1 16 16M93.66 69.66L120 43.31V136a8 8 0 0 0 16 0V43.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32"></svg:path></svg:g>`,
})
export class PhExportDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeClosedDuotoneIcon],svg[ph-eye-closed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104c-16.81 20.81-47.63 48-96 48s-79.19-27.19-96-48c16.81-20.81 47.63-48 96-48s79.19 27.19 96 48" opacity=".2"></svg:path><svg:path d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.2 123.2 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133 133 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.2 123.2 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.5 153.5 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.5 153.5 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11"></svg:path></svg:g>`,
})
export class PhEyeClosedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeDuotoneIcon],svg[ph-eye-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path></svg:g>`,
})
export class PhEyeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeSlashDuotoneIcon],svg[ph-eye-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"></svg:path></svg:g>`,
})
export class PhEyeSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperDuotoneIcon],svg[ph-eyedropper-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m207.8 87.6l-25.37 25.53l4.89 4.88a16 16 0 0 1 0 22.64l-9 9a8 8 0 0 1-11.32 0l-60.68-60.7a8 8 0 0 1 0-11.32l9-9a16 16 0 0 1 22.63 0l4.88 4.89l25-25.11c10.79-10.79 28.37-11.45 39.45-1a28 28 0 0 1 .52 40.19" opacity=".2"></svg:path><svg:path d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51l33.94 34ZM202.13 82l-25.37 25.52a8 8 0 0 0 0 11.3l4.89 4.89a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 5.65 2.34a8 8 0 0 0 5.66-2.36l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"></svg:path></svg:g>`,
})
export class PhEyedropperDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyedropperSampleDuotoneIcon],svg[ph-eyedropper-sample-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M52.3 160h89l-38.62 38.63a32 32 0 0 1-32.06 8l-20 8.74a8 8 0 0 1-8.86-1.67a5.74 5.74 0 0 1-1.2-6.36l9.19-21.06A32.07 32.07 0 0 1 52.3 160M207.23 47.51c-11.07-10.49-28.65-9.83-39.44 1l-25 25.1l-4.89-4.88a16 16 0 0 0-22.63 0l-9 9a8 8 0 0 0 0 11.31L167 149.66a8 8 0 0 0 11.31 0l9-9a16 16 0 0 0 0-22.63l-4.88-4.89l25.37-25.48a28 28 0 0 0-.57-40.15" opacity=".2"></svg:path><svg:path d="M224 67.3a35.8 35.8 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.65 13.65 0 0 0 36 219.29a15.9 15.9 0 0 0 17.71 3.36L71.24 215a39.9 39.9 0 0 0 37.05-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3M97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.9l7.65-17.8a8 8 0 0 0 .25-5.75a24 24 0 0 1 .1-15.69H122Zm41-41H70.07l44-44l33.94 34Zm64.18-70l-25.37 25.52a8 8 0 0 0 0 11.31l4.89 4.88a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 5.65 2.34a8 8 0 0 0 5.66-2.36l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z"></svg:path></svg:g>`,
})
export class PhEyedropperSampleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyeglassesDuotoneIcon],svg[ph-eyeglasses-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 164a36 36 0 1 1-36-36a36 36 0 0 1 36 36m84-36a36 36 0 1 0 36 36a36 36 0 0 0-36-36" opacity=".2"></svg:path><svg:path d="M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v58.08A44 44 0 0 0 145.68 152h-35.36A44 44 0 0 0 40 130.08V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 87.81 4h32.38a44 44 0 0 0 87.81-4V72a32 32 0 0 0-32-32M68 192a28 28 0 1 1 28-28a28 28 0 0 1-28 28m120 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path></svg:g>`,
})
export class PhEyeglassesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phEyesDuotoneIcon],svg[ph-eyes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24m72-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M176 32c-20.61 0-38.28 18.16-48 45.85C118.28 50.16 100.61 32 80 32c-31.4 0-56 42.17-56 96s24.6 96 56 96c20.61 0 38.28-18.16 48-45.85c9.72 27.69 27.39 45.85 48 45.85c31.4 0 56-42.17 56-96s-24.6-96-56-96m-69.08 154.39C99.43 200.12 89.62 208 80 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C60.57 55.88 70.38 48 80 48s19.43 7.88 26.92 21.61C115.35 85.07 120 105.81 120 128s-4.65 42.93-13.08 58.39M40 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16m162.92 58.39C195.43 200.12 185.62 208 176 208s-19.43-7.88-26.92-21.61a104.8 104.8 0 0 1-10.24-29.23a32 32 0 1 0 0-58.32a104.8 104.8 0 0 1 10.24-29.23C156.57 55.88 166.38 48 176 48s19.43 7.88 26.92 21.61C211.35 85.07 216 105.81 216 128s-4.65 42.93-13.08 58.39M136 128a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path></svg:g>`,
})
export class PhEyesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFaceMaskDuotoneIcon],svg[ph-face-mask-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 77.09V136c0 56-88 72-88 72s-88-16-88-72V77.09a8 8 0 0 1 5.27-7.52l80-29.09a8 8 0 0 1 5.46 0l80 29.09a8 8 0 0 1 5.27 7.52" opacity=".2"></svg:path><svg:path d="M176 104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m-8 24H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m88-24v24a32 32 0 0 1-32 32h-5.19c-7.19 15.8-21.79 29.43-43.23 40.16a191.2 191.2 0 0 1-46.15 15.71a7.9 7.9 0 0 1-2.86 0a191.2 191.2 0 0 1-46.15-15.71C59 189.43 44.38 175.8 37.19 160H32a32 32 0 0 1-32-32v-24a32 32 0 0 1 32-32h.85a16 16 0 0 1 9.68-10l80-29.09a16.06 16.06 0 0 1 10.94 0l80 29.09a16 16 0 0 1 9.68 10h.85a32 32 0 0 1 32 32M32.55 144a59 59 0 0 1-.55-8V88a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16ZM208 136V77.09L128 48L48 77.09V136c0 45 69.09 61.52 80 63.84c10.89-2.32 80-18.84 80-63.84m32-32a16 16 0 0 0-16-16v48a59 59 0 0 1-.55 8h.55a16 16 0 0 0 16-16Z"></svg:path></svg:g>`,
})
export class PhFaceMaskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFacebookLogoDuotoneIcon],svg[ph-facebook-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0"></svg:path></svg:g>`,
})
export class PhFacebookLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFactoryDuotoneIcon],svg[ph-factory-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 136v80H40V88l64 48V88l64 48Z" opacity=".2"></svg:path><svg:path d="M116 176a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h28a8 8 0 0 1 8 8m60-8h-28a8 8 0 0 0 0 16h28a8 8 0 0 0 0-16m64 48a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h8V88a8 8 0 0 1 12.8-6.4L96 120V88a8 8 0 0 1 12.8-6.4l38.74 29.05l11.56-80.91A16.08 16.08 0 0 1 174.94 16h18.12a16.08 16.08 0 0 1 15.84 13.74l15 105.13s.08.78.08 1.13v72h8a8 8 0 0 1 8.02 8m-77.86-94.4l8.53 6.4h36.11l-13.72-96h-18.12ZM48 208h160v-64h-40a8 8 0 0 1-4.8-1.6l-14.4-10.8L112 104v32a8 8 0 0 1-12.8 6.4L48 104Z"></svg:path></svg:g>`,
})
export class PhFactoryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersDuotoneIcon],svg[ph-faders-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v176H56V40Z" opacity=".2"></svg:path><svg:path d="M136 120v96a8 8 0 0 1-16 0v-96a8 8 0 0 1 16 0m64 72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m24-32h-16V40a8 8 0 0 0-16 0v120h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-168 0a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m24-32H64V40a8 8 0 0 0-16 0v88H32a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m72-48h-16V40a8 8 0 0 0-16 0v40h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFadersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFadersHorizontalDuotoneIcon],svg[ph-faders-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v96H40V80Z" opacity=".2"></svg:path><svg:path d="M176 80a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8M40 88h104v16a8 8 0 0 0 16 0V56a8 8 0 0 0-16 0v16H40a8 8 0 0 0 0 16m176 80h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16M88 144a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h40v16a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhFadersHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterDuotoneIcon],svg[ph-fallout-shelter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m32 144l-32-48l-32 48l-32-48h64L96 80h64l-32 48h64Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m71.05-91.77A8 8 0 0 0 192 120h-49l23.71-35.56A8 8 0 0 0 160 72H96a8 8 0 0 0-6.66 12.44L113.05 120H64a8 8 0 0 0-6.66 12.44l32 48a8 8 0 0 0 13.32 0l25.34-38l25.34 38a8 8 0 0 0 13.32 0l32-48a8 8 0 0 0 .39-8.21m-54-36.23L128 113.58L111 88ZM96 161.58L79 136h34.1Zm64 0L143 136h34.1Z"></svg:path></svg:g>`,
})
export class PhFalloutShelterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFanDuotoneIcon],svg[ph-fan-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136.5 150.45A52 52 0 1 1 33 155.13l71.91-20.54A24 24 0 0 0 128 152a23.8 23.8 0 0 0 8.5-1.56Zm-32.19-26.31a24 24 0 0 1 29.52-19.42L152 32.17a52 52 0 1 0-47.69 92ZM201 105.5a52 52 0 0 0-57.84 3.91a24 24 0 0 1 2.06 35.26l53.74 52a52 52 0 0 0 2-91.2Z" opacity=".2"></svg:path><svg:path d="M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68a60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32a60 60 0 0 0 44.42 60.66a60.5 60.5 0 0 0 15.62 2.07a60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-121-7a16 16 0 1 1 16 16a16 16 0 0 1-16-16M80 76a44 44 0 0 1 62.75-39.82L127.77 96a32 32 0 0 0-27.92 16.8A43.85 43.85 0 0 1 80 76m27 119.57a44 44 0 0 1-65.86-34.43l59.31-16.94A32 32 0 0 0 128 160h.91A43.82 43.82 0 0 1 107 195.57m106.17-23a43.9 43.9 0 0 1-13 14.14l-44.32-42.89a31.91 31.91 0 0 0-.59-32.57a44 44 0 0 1 57.91 61.32"></svg:path></svg:g>`,
})
export class PhFanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFarmDuotoneIcon],svg[ph-farm-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M223.85 216H24v-96a257 257 0 0 1 56.2 6.21l-.2-.07V80l64-48l64 48v41.11a255 255 0 0 0-40 7V96h-48v42.61A256.8 256.8 0 0 1 223.85 216" opacity=".2"></svg:path><svg:path d="M232 160a8 8 0 0 0 0-16a232.2 232.2 0 0 0-65.8 9.47q-9-5.78-18.46-10.78A246.3 246.3 0 0 1 232 128a8 8 0 0 0 0-16c-5.36 0-10.69.18-16 .49V80a8 8 0 0 0-3.2-6.4l-64-48a8 8 0 0 0-9.6 0l-64 48A8 8 0 0 0 72 80v36.37A266.3 266.3 0 0 0 24 112a8 8 0 0 0 0 16a247 247 0 0 1 193.61 93a8 8 0 1 0 12.48-10q-7.59-9.5-15.94-18.14c5.92-.57 11.89-.86 17.85-.86a8 8 0 0 0 0-16a201.5 201.5 0 0 0-32.59 2.65q-7.75-6.92-16-13.16A216.5 216.5 0 0 1 232 160m-104-26.76V104h32v17.94a262.5 262.5 0 0 0-31.93 11.33ZM88 84l56-42l56 42v29.93q-12.12 1.45-24 4V96a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v31q-11.79-4.15-24-7.18Zm48.83 136.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16a199.1 199.1 0 0 1 110.6 33.34a8 8 0 0 1 2.23 11.09m49.54-10.14a8 8 0 1 1-11.2 11.42A214.8 214.8 0 0 0 24 160a8 8 0 0 1 0-16a230.7 230.7 0 0 1 162.37 66.29"></svg:path></svg:g>`,
})
export class PhFarmDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardCircleDuotoneIcon],svg[ph-fast-forward-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M80 164V92l48 36Zm64 0V92l48 36Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m68.8-94.4l-48-36A8 8 0 0 0 136 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M152 148v-40l26.67 20Zm-19.2-26.4l-48-36A8 8 0 0 0 72 92v72a8 8 0 0 0 12.8 6.4l48-36a8 8 0 0 0 0-12.8M88 148v-40l26.67 20Z"></svg:path></svg:g>`,
})
export class PhFastForwardCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFastForwardDuotoneIcon],svg[ph-fast-forward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 128a7.76 7.76 0 0 1-3.63 6.59l-88.19 56.15A7.91 7.91 0 0 1 40 184.15V71.85a7.91 7.91 0 0 1 12.18-6.59l88.19 56.15A7.76 7.76 0 0 1 144 128m100.37-6.59l-88.19-56.15A7.91 7.91 0 0 0 144 71.85v112.3a7.91 7.91 0 0 0 12.18 6.59l88.19-56.15a7.8 7.8 0 0 0 0-13.18" opacity=".2"></svg:path><svg:path d="M248.67 114.66L160.48 58.5A15.91 15.91 0 0 0 136 71.84v37.3L56.48 58.5A15.91 15.91 0 0 0 32 71.84v112.32a15.92 15.92 0 0 0 24.48 13.34L136 146.86v37.3a15.92 15.92 0 0 0 24.48 13.34l88.19-56.16a15.8 15.8 0 0 0 0-26.68M48 183.94V72.07L135.82 128Zm104 0V72.07L239.82 128Z"></svg:path></svg:g>`,
})
export class PhFastForwardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFeatherDuotoneIcon],svg[ph-feather-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m215.8 119.6l-69.26 70.06a8 8 0 0 1-5.65 2.34H64.2v-76.69a8 8 0 0 1 2.34-5.65l45.66-45.14V144l24-24Z" opacity=".2"></svg:path><svg:path d="M221.28 34.75a64 64 0 0 0-90.49 0L60.69 104A15.9 15.9 0 0 0 56 115.31v73.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L67.32 200h73.38a15.92 15.92 0 0 0 11.3-4.68l69.23-70a64 64 0 0 0 .05-90.57m-79.21 11.31A48 48 0 0 1 211.79 112h-56.46l34.35-34.34a8 8 0 0 0-11.32-11.32L120 124.69V67.87ZM72 115.35l32-31.67v57l-32 32ZM140.7 184H83.32l56-56h56.74Z"></svg:path></svg:g>`,
})
export class PhFeatherDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFediverseLogoDuotoneIcon],svg[ph-fediverse-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M148 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m64 40a20 20 0 1 0 20 20a20 20 0 0 0-20-20m-56 88a20 20 0 1 0 20 20a20 20 0 0 0-20-20M56 164a20 20 0 1 0 20 20a20 20 0 0 0-20-20m-4-60a20 20 0 1 0-20-20a20 20 0 0 0 20 20" opacity=".2"></svg:path><svg:path d="M212 96a27.8 27.8 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a29 29 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96m-56 88h-.89l-16.18-48.53l46.65-2.22a27.9 27.9 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1m-93.08-27.13l-1.85-46.38a28 28 0 0 0 10.12-6.13L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35M149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.9 27.9 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85L124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68M148 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-21.68 29.7a28.4 28.4 0 0 0 7.68 6.54l-11.3 47.45l-43.47-25.17A28 28 0 0 0 80 84a29 29 0 0 0-.15-2.94ZM40 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m16 112a12 12 0 1 1 12-12a12 12 0 0 1-12 12m100 28a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56-88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhFediverseLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoDuotoneIcon],svg[ph-figma-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32M96 96h40V32H96a32 32 0 0 0 0 64M64 196a36 36 0 0 0 72 0v-36h-36a36 36 0 0 0-36 36" opacity=".2"></svg:path><svg:path d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M72 64a24 24 0 0 1 24-24h32v48H96a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhFigmaLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveDuotoneIcon],svg[ph-file-archive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216h-88v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H56V40h88v48a8 8 0 0 0 8 8h48z"></svg:path></svg:g>`,
})
export class PhFileArchiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownDuotoneIcon],svg[ph-file-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-61.66a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhFileArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpDuotoneIcon],svg[ph-file-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-77.66a8 8 0 0 1-11.32 11.32L136 139.31V184a8 8 0 0 1-16 0v-44.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"></svg:path></svg:g>`,
})
export class PhFileArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileAudioDuotoneIcon],svg[ph-file-audio-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m72 160l24-24v88l-24-24H48v-40Zm80-128v56h56Z" opacity=".2"></svg:path><svg:path d="M99.06 128.61a8 8 0 0 0-8.72 1.73L68.69 152H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h20.69l21.65 21.66A8 8 0 0 0 104 224v-88a8 8 0 0 0-4.94-7.39M88 204.69l-10.34-10.35A8 8 0 0 0 72 192H56v-24h16a8 8 0 0 0 5.66-2.34L88 155.31ZM152 180a40.55 40.55 0 0 1-20 34.91a8 8 0 0 1-8-13.82a24.49 24.49 0 0 0 0-42.18a8 8 0 0 1 8-13.82A40.55 40.55 0 0 1 152 180m61.66-97.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v80a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileAudioDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCDuotoneIcon],svg[ph-file-c-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v128a16 16 0 0 1-16 16h-80a8 8 0 0 1 0-16h80V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileCDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCSharpDuotoneIcon],svg[ph-file-c-sharp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m168-92v136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm8 88v16h8a8 8 0 0 1 0 16h-8v8a8 8 0 0 1-16 0v-8h-16v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-16h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h16v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16Zm-16 0h-16v16h16Z"></svg:path></svg:g>`,
})
export class PhFileCSharpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCloudDuotoneIcon],svg[ph-file-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Zm-100 48a44 44 0 0 0-42.34 32H60a28 28 0 0 0 0 56h48a44 44 0 0 0 0-88" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM108 128a52 52 0 0 0-48 32a36 36 0 0 0 0 72h48a52 52 0 0 0 0-104m0 88H60a20 20 0 0 1-3.81-39.64a8 8 0 0 0 16 .36a38 38 0 0 1 1.06-6.09a8 8 0 0 0 .27-1A36 36 0 1 1 108 216"></svg:path></svg:g>`,
})
export class PhFileCloudDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCodeDuotoneIcon],svg[ph-file-code-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M181.66 146.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L164.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32Zm-72-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L91.31 152l18.35-18.34a8 8 0 0 0 0-11.32M216 88v128a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm40 136V96h-48a8 8 0 0 1-8-8V40H56v176z"></svg:path></svg:g>`,
})
export class PhFileCodeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCppDuotoneIcon],svg[ph-file-cpp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.18 14.18 0 0 0 64 160c-8.82 0-16 9-16 20m-8-68V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Zm-12 92h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16m68 0h-12v-12a8 8 0 0 0-16 0v12h-12a8 8 0 0 0 0 16h12v12a8 8 0 0 0 16 0v-12h12a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFileCppDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCssDuotoneIcon],svg[ph-file-css-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.2 14.2 0 0 0 10.22-4.66a8 8 0 1 1 11.55 11.06A30 30 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30 30 0 0 1 21.77 9.6a8 8 0 1 1-11.55 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.26-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.35-1.73 19.83-.56a8 8 0 0 0 4.07-15.48c-2.12-.55-21-5.22-32.83 2.76a20.55 20.55 0 0 0-9 14.95c-2 15.88 13.64 20.41 23 23.11c12.07 3.49 13.13 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.3 15.41a61.2 61.2 0 0 0 15.18 2c5.83 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.25-17.28-14.27-22.11-24.15-24.97m64 0c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.15 3.93c-4.6 3.06-15.16 1.56-19.54.36a8 8 0 0 0-4.3 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25ZM40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 1 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.68L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileCssDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileCsvDuotoneIcon],svg[ph-file-csv-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 180c0 11 7.18 20 16 20a14.24 14.24 0 0 0 10.22-4.66a8 8 0 0 1 11.56 11.06A30.06 30.06 0 0 1 64 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 64 160c-8.82 0-16 9-16 20m79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.81-1.23-1-1.12-1.9a4.57 4.57 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.83-.56a8 8 0 0 0 4.14-15.48c-2.12-.55-21-5.22-32.84 2.76a20.58 20.58 0 0 0-9 14.95c-2 15.88 13.65 20.41 23 23.11c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.34-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.36a8 8 0 0 0-4.31 15.44a61.3 61.3 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.19-17.31-14.32-22.14-24.21-25m83.09-26.84a8 8 0 0 0-10.23 4.84L188 184.21l-12.47-34.9a8 8 0 0 0-15.07 5.38l20 56a8 8 0 0 0 15.07 0l20-56a8 8 0 0 0-4.84-10.22M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileCsvDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDashedDuotoneIcon],svg[ph-file-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8M216 88v48a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31ZM80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16m128 144a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8M48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8m104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFileDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDocDuotoneIcon],svg[ph-file-doc-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M52 144H36a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h16a36 36 0 0 0 0-72m0 56h-8v-40h8a20 20 0 0 1 0 40m169.53-4.91a8 8 0 0 1 .25 11.31A30.06 30.06 0 0 1 200 216c-17.65 0-32-16.15-32-36s14.35-36 32-36a30.06 30.06 0 0 1 21.78 9.6a8 8 0 0 1-11.56 11.06A14.24 14.24 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a14.18 14.18 0 0 0 10.22-4.66a8 8 0 0 1 11.31-.25M128 144c-17.64 0-32 16.15-32 36s14.36 36 32 36s32-16.15 32-36s-14.36-36-32-36m0 56c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20s-7.18 20-16 20m-80-80a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileDocDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDottedDuotoneIcon],svg[ph-file-dotted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8Zm0-200H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm136 64.2V136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40h-24a8 8 0 0 1 0-16h34.3l.7.3h.1l.5.3h.2l.5.3c0 .1.1.1.2.2l.4.3h.2l.4.4h.2l55.9 56A7.8 7.8 0 0 1 216 88ZM160 80h28.7L160 51.3Zm48 88a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8ZM48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8Zm104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFileDottedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileDuotoneIcon],svg[ph-file-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48z"></svg:path></svg:g>`,
})
export class PhFileDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileHtmlDuotoneIcon],svg[ph-file-html-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M216 120V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v80a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v24a8 8 0 0 0 16 0m-56-68.69L188.69 80H160ZM68 160v48a8 8 0 0 1-16 0v-16H32v16a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0v16h20v-16a8 8 0 0 1 16 0m56 0a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m72 0v48a8 8 0 0 1-16 0v-24l-9.6 12.8a8 8 0 0 1-12.8 0L148 184v24a8 8 0 0 1-16 0v-48a8 8 0 0 1 14.4-4.8l17.6 23.47l17.6-23.47A8 8 0 0 1 196 160m56 48a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h20a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileHtmlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileImageDuotoneIcon],svg[ph-file-image-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m104 152l48 72H24l36-56l16.36 25.45Zm48-120v56h56Z" opacity=".2"></svg:path><svg:path d="M110.66 147.56a8 8 0 0 0-13.32 0l-20.85 31.29l-9.76-15.18a8 8 0 0 0-13.46 0l-36 56A8 8 0 0 0 24 232h128a8 8 0 0 0 6.66-12.44ZM38.65 216L60 182.79l9.63 15a8 8 0 0 0 13.39.11l21-31.47L137.05 216Zm175-133.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileImageDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileIniDuotoneIcon],svg[ph-file-ini-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 152v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m72-8a8 8 0 0 0-8 8v31l-25.49-35.65A8 8 0 0 0 72 152v56a8 8 0 0 0 16 0v-31l25.49 35.69A8 8 0 0 0 120 216a7.9 7.9 0 0 0 2.44-.38A8 8 0 0 0 128 208v-56a8 8 0 0 0-8-8m40 0a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8m56-56v136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileIniDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJpgDuotoneIcon],svg[ph-file-jpg-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M120 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m96 0v16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.4 29.4 0 0 1 16.48 5.12a8 8 0 0 1-9 13.26A13.2 13.2 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.63 13.63 0 0 0 8-2.71V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0m133.66-69.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 80V51.31L188.69 80Z"></svg:path></svg:g>`,
})
export class PhFileJpgDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsDuotoneIcon],svg[ph-file-js-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-12.19 145a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M80 152v38a26 26 0 0 1-52 0a8 8 0 0 1 16 0a10 10 0 0 0 20 0v-38a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhFileJsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileJsxDuotoneIcon],svg[ph-file-jsx-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M147.81 196.31a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.4 60.4 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.21 15 2.71 19.55-.35c.88-.6 1.83-1.52 2.14-3.93c.34-2.67-.72-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 9-14.94c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.78 2.82 26.29 7.65 24.1 24.96M72 144a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0a8 8 0 0 0-16 0a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8m140.65 1.49a8 8 0 0 0-11.16 1.86L188 166.24l-13.49-18.89a8 8 0 0 0-13 9.3L178.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L188 193.76l13.49 18.89a8 8 0 0 0 13-9.3L197.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16M216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileJsxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileLockDuotoneIcon],svg[ph-file-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 184h72v40H48ZM152 32v56h56Z" opacity=".2"></svg:path><svg:path d="M120 176h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4H72Zm40 44H56v-24h56ZM213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-40a8 8 0 0 0 0 16h40a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFileLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassDuotoneIcon],svg[ph-file-magnifying-glass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-45.54-48.85a36.05 36.05 0 1 0-11.31 11.31l11.19 11.2a8 8 0 0 0 11.32-11.32ZM104 148a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path></svg:g>`,
})
export class PhFileMagnifyingGlassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMdDuotoneIcon],svg[ph-file-md-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v128a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM144 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h16a36 36 0 0 0 0-72m0 56h-8v-40h8a20 20 0 0 1 0 40m-40-48v56a8 8 0 0 1-16 0v-30.62l-13.45 19.21a8 8 0 0 1-13.1 0L48 177.38V208a8 8 0 0 1-16 0v-56a8 8 0 0 1 14.55-4.59L68 178.05l21.45-30.64A8 8 0 0 1 104 152"></svg:path></svg:g>`,
})
export class PhFileMdDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileMinusDuotoneIcon],svg[ph-file-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-40-64a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePdfDuotoneIcon],svg[ph-file-pdf-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M224 152a8 8 0 0 1-8 8h-24v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m88 8a36 36 0 0 1-36 36h-16a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h16a36 36 0 0 1 36 36m-16 0a20 20 0 0 0-20-20h-8v40h8a20 20 0 0 0 20-20M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFilePdfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePlusDuotoneIcon],svg[ph-file-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-40-64a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFilePlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePngDuotoneIcon],svg[ph-file-png-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M60 144H44a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m164 16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 200 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.45 29.45 0 0 1 16.48 5.11a8 8 0 0 1-9 13.27A13.2 13.2 0 0 0 200 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.57 13.57 0 0 0 8-2.72V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8ZM156 152v56a8 8 0 0 1-5.56 7.62a7.9 7.9 0 0 1-2.44.38a8 8 0 0 1-6.51-3.35L116 177v31a8 8 0 0 1-16 0v-56a8 8 0 0 1 14.51-4.65L140 183v-31a8 8 0 0 1 16 0M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Z"></svg:path></svg:g>`,
})
export class PhFilePngDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePptDuotoneIcon],svg[ph-file-ppt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M224 152a8 8 0 0 1-8 8h-12v48a8 8 0 0 1-16 0v-48h-12a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M92 172a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12m84 0a28 28 0 0 1-28 28h-8v8a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h16a28 28 0 0 1 28 28m-16 0a12 12 0 0 0-12-12h-8v24h8a12 12 0 0 0 12-12M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.69L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFilePptDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilePyDuotoneIcon],svg[ph-file-py-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM64 144H48a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m90.78-27.76l-18.78 30V208a8 8 0 0 1-16 0v-21.71l-18.78-30a8 8 0 1 1 13.56-8.48l13.22 21.1l13.22-21.15a8 8 0 1 1 13.56 8.48"></svg:path></svg:g>`,
})
export class PhFilePyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileRsDuotoneIcon],svg[ph-file-rs-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-16a8 8 0 0 0 0 16h16a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM64 144H48a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28.5 28.5 0 0 0 5.73-.59L77.09 212a8 8 0 0 0 13.82-8l-7.11-12.22A28 28 0 0 0 64 144m-8 40v-24h8a12 12 0 0 1 0 24Zm99.81 12.31a20.82 20.82 0 0 1-9.19 15.23C141.43 215 135 216 129.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97"></svg:path></svg:g>`,
})
export class PhFileRsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSearchDuotoneIcon],svg[ph-file-search-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M216 88a7.7 7.7 0 0 0-2.4-5.7l-55.9-56l-.6-.5h-.2l-.5-.3h-.1l-.5-.4h-.1l-.6-.3h-.1l-.7-.3H56A16 16 0 0 0 40 40v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88Zm-56-36.7L188.7 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48v120Zm-45.5-48.8a36.4 36.4 0 0 0-5-44.7a36.2 36.2 0 0 0-51 0a36.2 36.2 0 0 0 0 51a36.2 36.2 0 0 0 44.7 5l10.9 11a8.3 8.3 0 0 0 5.7 2.3a8.5 8.5 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-44.6-5.1a19.9 19.9 0 0 1 0-28.2a19.8 19.8 0 0 1 28.2 0a19.9 19.9 0 0 1 0 28.2a19.8 19.8 0 0 1-28.2 0Z"></svg:path>`,
})
export class PhFileSearchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSqlDuotoneIcon],svg[ph-file-sql-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160ZM228 208a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h20a8 8 0 0 1 8 8M91.82 196.31a20.82 20.82 0 0 1-9.19 15.23C77.44 215 71 216 65.14 216A60.7 60.7 0 0 1 50 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.89-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.08 15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m71 3.23A39.05 39.05 0 0 0 168 180c0-19.85-14.35-36-32-36s-32 16.15-32 36s14.35 36 32 36a29.2 29.2 0 0 0 15.9-4.78l2.44 2.44a8 8 0 0 0 11.31-11.32ZM136 200c-8.82 0-16-9-16-20s7.18-20 16-20s16 9 16 20a24.4 24.4 0 0 1-1.18 7.51l-1.17-1.17a8 8 0 1 0-11.31 11.32l1.68 1.67a13 13 0 0 1-4.02.67"></svg:path></svg:g>`,
})
export class PhFileSqlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileSvgDuotoneIcon],svg[ph-file-svg-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 1 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-72.18 145a20.82 20.82 0 0 1-9.19 15.23C73.44 215 67 216 61.14 216A61.2 61.2 0 0 1 46 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.14 1.09 1.12 1.9c2.31 1.49 6.44 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97m63.72-41.62l-20 56a8 8 0 0 1-15.07 0l-20-56a8 8 0 1 1 15.06-5.38l12.47 34.9l12.46-34.9a8 8 0 0 1 15.07 5.38ZM216 184v16.87a8 8 0 0 1-2.22 5.53A30.06 30.06 0 0 1 192 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a29.4 29.4 0 0 1 16.48 5.12a8 8 0 0 1-8.95 13.26A13.27 13.27 0 0 0 192 160c-8.82 0-16 9-16 20s7.18 20 16 20a13.38 13.38 0 0 0 8-2.71V192a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileSvgDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTextDuotoneIcon],svg[ph-file-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsDuotoneIcon],svg[ph-file-ts-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160Zm-12.19 145a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a61 61 0 0 1-15.13-2a8 8 0 1 1 4.3-15.41c4.38 1.2 15 2.7 19.55-.36c.88-.59 1.83-1.52 2.14-3.93c.35-2.67-.71-4.1-12.78-7.59c-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9c2.31 1.49 6.45 2.68 10.45 3.84c9.79 2.83 26.35 7.66 24.11 24.97M88 152a8 8 0 0 1-8 8H68v48a8 8 0 0 1-16 0v-48H40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileTsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTsxDuotoneIcon],svg[ph-file-tsx-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M214.51 156.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 13-9.3L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm-90.91 14.66c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.82-1.23-1-1.11-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.83-.56a8 8 0 0 0 4.13-15.48c-2.12-.55-21-5.22-32.84 2.76a20.58 20.58 0 0 0-9 14.94c-2 15.89 13.65 20.42 23 23.12c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.33-2.14 3.93c-4.6 3.06-15.17 1.56-19.55.35A8 8 0 1 0 106 214a60.4 60.4 0 0 0 15.18 2c5.82 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.14-17.31-14.37-22.14-24.26-25M80 144H40a8 8 0 0 0 0 16h12v48a8 8 0 0 0 16 0v-48h12a8 8 0 0 0 0-16m136-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileTsxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileTxtDuotoneIcon],svg[ph-file-txt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M48 120a8 8 0 0 0 8-8V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8m112-68.69L188.69 80H160Zm-5.49 105.34L137.83 180l16.68 23.35a8 8 0 0 1-13 9.3L128 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L118.17 180l-16.68-23.35a8 8 0 1 1 13-9.3L128 166.24l13.49-18.89a8 8 0 0 1 13 9.3ZM92 152a8 8 0 0 1-8 8H72v48a8 8 0 0 1-16 0v-48H44a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m128 0a8 8 0 0 1-8 8h-12v48a8 8 0 0 1-16 0v-48h-12a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFileTxtDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVideoDuotoneIcon],svg[ph-file-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Zm-88 72a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-12l32 20v-64l-32 20Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM155.88 145a8 8 0 0 0-8.12.22l-19.95 12.46A16 16 0 0 0 112 144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 15.81-13.68l19.95 12.46A8 8 0 0 0 160 216v-64a8 8 0 0 0-4.12-7M112 208H48v-48h64zm32-6.43l-16-10v-15.14l16-10Z"></svg:path></svg:g>`,
})
export class PhFileVideoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileVueDuotoneIcon],svg[ph-file-vue-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m87.54 154.69l-20 56a8 8 0 0 1-15.07 0l-20-56a8 8 0 0 1 15.07-5.38L60 184.21l12.47-34.9a8 8 0 0 1 15.07 5.38M208 160a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-24v-12h16a8 8 0 0 0 0-16h-16v-12Zm-64-16a8 8 0 0 0-8 8v38a10 10 0 0 1-20 0v-38a8 8 0 0 0-16 0v38a26 26 0 0 0 52 0v-38a8 8 0 0 0-8-8m72-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-27.31-8L160 51.31V80Z"></svg:path></svg:g>`,
})
export class PhFileVueDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXDuotoneIcon],svg[ph-file-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-82.34L139.31 152l18.35 18.34a8 8 0 0 1-11.32 11.32L128 163.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 140.69l18.34-18.35a8 8 0 0 1 11.32 11.32"></svg:path></svg:g>`,
})
export class PhFileXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileXlsDuotoneIcon],svg[ph-file-xls-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M156 208a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8v-56a8 8 0 0 1 16 0v48h20a8 8 0 0 1 8 8m-63.35-62.51a8 8 0 0 0-11.16 1.86L68 166.24l-13.49-18.89a8 8 0 1 0-13 9.3L58.17 180l-16.68 23.35a8 8 0 0 0 13 9.3L68 193.76l13.49 18.89a8 8 0 0 0 13-9.3L77.83 180l16.68-23.35a8 8 0 0 0-1.86-11.16m98.94 25.82c-4-1.16-8.14-2.35-10.45-3.84c-1.25-.82-1.23-1-1.12-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.82-.56a8 8 0 0 0 4.07-15.48c-2.11-.55-21-5.22-32.83 2.76a20.58 20.58 0 0 0-8.95 14.94c-2 15.89 13.65 20.42 23 23.12c12.06 3.49 13.12 4.92 12.78 7.59c-.31 2.41-1.26 3.33-2.15 3.93c-4.6 3.06-15.16 1.56-19.54.35a8 8 0 0 0-4.29 15.45a60.6 60.6 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.81 20.81 0 0 0 9.18-15.23c2.21-17.31-14.31-22.14-24.2-25M40 112V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88v24a8 8 0 1 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0m120-32h28.68L160 51.31Z"></svg:path></svg:g>`,
})
export class PhFileXlsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFileZipDuotoneIcon],svg[ph-file-zip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path d="M184 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56m0 40h-8v-24h8a12 12 0 0 1 0 24m-48-32v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0m-40 56a8 8 0 0 1-8 8H56a8 8 0 0 1-7-12l25.16-44H56a8 8 0 0 1 0-16h32a8 8 0 0 1 7 12l-25.21 44H88a8 8 0 0 1 8 8M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66M160 80V51.31L188.69 80Z"></svg:path></svg:g>`,
})
export class PhFileZipDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilesDuotoneIcon],svg[ph-files-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 72v112a8 8 0 0 1-8 8h-24v-88l-40-40H80V40a8 8 0 0 1 8-8h80Z" opacity=".2"></svg:path><svg:path d="m213.66 66.34l-40-40A8 8 0 0 0 168 24H88a16 16 0 0 0-16 16v16H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V72a8 8 0 0 0-2.34-5.66M168 216H56V72h76.69L168 107.31zm32-32h-16v-80a8 8 0 0 0-2.34-5.66l-40-40A8 8 0 0 0 136 56H88V40h76.69L200 75.31Zm-56-32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFilesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmReelDuotoneIcon],svg[ph-film-reel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96M80 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16" opacity=".2"></svg:path><svg:path d="M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88a88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24a24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhFilmReelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmScriptDuotoneIcon],svg[ph-film-script-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H56V40h144zM96 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 96a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhFilmScriptDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmSlateDuotoneIcon],svg[ph-film-slate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m67.71 64.59l47.79 27.6L40.43 112l-8.16-30a7.76 7.76 0 0 1 5.58-9.52Zm132.13-26.83a7.9 7.9 0 0 0-9.66-5.49l-63.57 16.78l47.79 27.59l33.6-8.87Z" opacity=".2"></svg:path><svg:path d="M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4a15.5 15.5 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8m-23.84-64l6 22.07l-22.62 6l-28.12-16.24Zm-66.69 17.6l28.12 16.24l-36.94 9.75l-28.12-16.22Zm-79.4 44.62l-6-22.08l26.5-7L94.69 89.4ZM208 200H48v-80h160z"></svg:path></svg:g>`,
})
export class PhFilmSlateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFilmStripDuotoneIcon],svg[ph-film-strip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 176h192v24a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8ZM216 48H40a8 8 0 0 0-8 8v24h192V56a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h80v80H40Zm96-16V56h32v16Zm-16 0H88V56h32Zm0 112v16H88v-16Zm16 0h32v16h-32Zm0-16V88h80v80Zm80-96h-32V56h32ZM72 56v16H40V56ZM40 184h32v16H40Zm176 16h-32v-16h32z"></svg:path></svg:g>`,
})
export class PhFilmStripDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintDuotoneIcon],svg[ph-fingerprint-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M72 128a134.6 134.6 0 0 1-14.16 60.47a8 8 0 1 1-14.32-7.12A118.8 118.8 0 0 0 56 128a71.73 71.73 0 0 1 27-56.2a8 8 0 1 1 10 12.49A55.76 55.76 0 0 0 72 128m56-8a8 8 0 0 0-8 8a184.1 184.1 0 0 1-23 89.1a8 8 0 0 0 14 7.76A200.2 200.2 0 0 0 136 128a8 8 0 0 0-8-8m0-32a40 40 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.1 214.1 0 0 1-20.51 92a8 8 0 1 0 14.51 6.83A230 230 0 0 0 168 128a40 40 0 0 0-40-40m0-64A104.11 104.11 0 0 0 24 128a87.8 87.8 0 0 1-5 29.33a8 8 0 0 0 15.09 5.33A103.9 103.9 0 0 0 40 128a88 88 0 0 1 176 0a282 282 0 0 1-5.29 54.45a8 8 0 0 0 6.3 9.4a8 8 0 0 0 1.55.15a8 8 0 0 0 7.84-6.45A298.4 298.4 0 0 0 232 128A104.12 104.12 0 0 0 128 24M94.4 152.17a8 8 0 0 0-9.4 6.25a151 151 0 0 1-17.21 45.44a8 8 0 0 0 13.86 8a166.7 166.7 0 0 0 19-50.25a8 8 0 0 0-6.25-9.44M128 56a73 73 0 0 0-9 .56a8 8 0 0 0 2 15.87A56.08 56.08 0 0 1 184 128a252 252 0 0 1-1.92 31a8 8 0 0 0 6.92 9a8 8 0 0 0 1 .06a8 8 0 0 0 7.92-7a267 267 0 0 0 2-33A72.08 72.08 0 0 0 128 56m57.93 128.25a8 8 0 0 0-9.75 5.75c-1.46 5.69-3.15 11.4-5 17a8 8 0 0 0 5 10.13a7.9 7.9 0 0 0 2.55.42a8 8 0 0 0 7.58-5.46c2-5.92 3.79-12 5.35-18.05a8 8 0 0 0-5.72-9.78Z"></svg:path></svg:g>`,
})
export class PhFingerprintDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFingerprintSimpleDuotoneIcon],svg[ph-fingerprint-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M184 128a246.6 246.6 0 0 1-18.54 94.24a8 8 0 0 1-7.4 5a8.2 8.2 0 0 1-3-.6a8 8 0 0 1-4.36-10.45A230.7 230.7 0 0 0 168 128a8 8 0 0 1 16 0m-56-40a40.06 40.06 0 0 1 29.81 13.33a8 8 0 1 0 11.92-10.67A56 56 0 0 0 72 128a136.06 136.06 0 0 1-17 65.85a8 8 0 1 0 14 7.76A152.14 152.14 0 0 0 88 128a40 40 0 0 1 40-40m0-64a103.8 103.8 0 0 0-34.67 5.92A8 8 0 0 0 98.67 45A88.05 88.05 0 0 1 216 128a281.3 281.3 0 0 1-6.94 62.23a8 8 0 0 0 6 9.57a7.8 7.8 0 0 0 1.78.2a8 8 0 0 0 7.8-6.23A298 298 0 0 0 232 128A104.11 104.11 0 0 0 128 24M69.31 62.42a8 8 0 1 0-10.67-11.93A104.16 104.16 0 0 0 24 128a87.3 87.3 0 0 1-8 36.66a8 8 0 0 0 14.54 6.68A103.2 103.2 0 0 0 40 128a88.13 88.13 0 0 1 29.31-65.58m44.58 138.32a8 8 0 0 0-10.6 3.93c-1.93 4.2-4.05 8.39-6.3 12.44a8 8 0 0 0 3.12 10.89a7.9 7.9 0 0 0 3.87 1a8 8 0 0 0 7-4.12c2.44-4.41 4.74-9 6.84-13.52a8 8 0 0 0-3.93-10.62M128 120a8 8 0 0 0-8 8a185 185 0 0 1-5.79 46a8 8 0 0 0 5.75 9.74a8 8 0 0 0 2 .25a8 8 0 0 0 7.74-6a200.7 200.7 0 0 0 6.3-50a8 8 0 0 0-8-7.99"></svg:path></svg:g>`,
})
export class PhFingerprintSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFinnTheHumanDuotoneIcon],svg[ph-finn-the-human-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48a24 24 0 0 0-24 24H72a24 24 0 0 0-48 0v80a64 64 0 0 0 64 64h80a64 64 0 0 0 64-64V72a24 24 0 0 0-24-24m-8 104a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32v-8a32 32 0 0 1 32-32h80a32 32 0 0 1 32 32Z" opacity=".2"></svg:path><svg:path d="M168 104H88a40 40 0 0 0-40 40v8a40 40 0 0 0 40 40h80a40 40 0 0 0 40-40v-8a40 40 0 0 0-40-40m24 48a24 24 0 0 1-24 24H88a24 24 0 0 1-24-24v-8a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24Zm16-112a32.06 32.06 0 0 0-31 24H79a32 32 0 0 0-63 8v80a72.08 72.08 0 0 0 72 72h80a72.08 72.08 0 0 0 72-72V72a32 32 0 0 0-32-32m16 112a56.06 56.06 0 0 1-56 56H88a56.06 56.06 0 0 1-56-56V72a16 16 0 0 1 32 0a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8a16 16 0 0 1 32 0Zm-120-4a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhFinnTheHumanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireDuotoneIcon],svg[ph-fire-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-30.57 14.42-58.26 31-80l33 32l26.27-72C159.86 41.92 208 88.15 208 144" opacity=".2"></svg:path><svg:path d="M183.89 153.34a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68ZM216 144a88 88 0 0 1-176 0c0-27.92 11-56.47 32.66-84.85a8 8 0 0 1 11.93-.89l24.12 23.41l22-60.41a8 8 0 0 1 12.63-3.41C165.21 36 216 84.55 216 144m-16 0c0-46.09-35.79-85.92-58.21-106.33l-22.27 61.07a8 8 0 0 1-13.09 3L80.06 76.16C64.09 99.21 56 122 56 144a72 72 0 0 0 144 0"></svg:path></svg:g>`,
})
export class PhFireDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireExtinguisherDuotoneIcon],svg[ph-fire-extinguisher-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 168v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64Z" opacity=".2"></svg:path><svg:path d="m218.3 48.34l-60.68-18.2l30-15a8 8 0 0 0-7.2-14.29L134 24.05a80.08 80.08 0 0 0-78 80V208a8 8 0 0 0 16 0v-32h16v56a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V104a48.07 48.07 0 0 0-40-47.32V42.75l69.7 20.91a8 8 0 1 0 4.6-15.32M88 104v56H72v-56a64.07 64.07 0 0 1 56-63.48v16.16A48.07 48.07 0 0 0 88 104m80 128h-64v-56h64Zm0-128v56h-64v-56a32 32 0 0 1 64 0"></svg:path></svg:g>`,
})
export class PhFireExtinguisherDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleDuotoneIcon],svg[ph-fire-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-30.57 14.42-58.26 31-80l33 32l26.27-72C159.86 41.92 208 88.15 208 144" opacity=".2"></svg:path><svg:path d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15M128 216a72.08 72.08 0 0 1-72-72c0-22 8.09-44.79 24.06-67.84l26.37 25.58a8 8 0 0 0 13.09-3l22.27-61.07C164.21 58.08 200 97.91 200 144a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhFireSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFireTruckDuotoneIcon],svg[ph-fire-truck-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M248 120v64a8 8 0 0 1-8 8h-24a24 24 0 0 0-32-22.63A24 24 0 0 0 168 192h-64a24 24 0 0 0-48 0H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h152v56Z" opacity=".2"></svg:path><svg:path d="m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-16 0v100.31A32.1 32.1 0 0 0 161 184h-50a32 32 0 0 0-62 0H32v-48a8 8 0 0 0-16 0v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3m-28.85-29l9.6 24H192V88ZM80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m31-24a32.06 32.06 0 0 0-31-24v-32h48v56ZM24 96a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16h-16V72h16a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16h16v24Zm96 0H96V72h24ZM56 72h24v24H56Z"></svg:path></svg:g>`,
})
export class PhFireTruckDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidDuotoneIcon],svg[ph-first-aid-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 104v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56H40a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56V40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v48H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-56a8 8 0 0 0-8 8v56h-48v-56a8 8 0 0 0-8-8H40v-48h56a8 8 0 0 0 8-8V40h48v56a8 8 0 0 0 8 8h56Z"></svg:path></svg:g>`,
})
export class PhFirstAidDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFirstAidKitDuotoneIcon],svg[ph-first-aid-kit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v128a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 152H40V72h176zm-56-64a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFirstAidKitDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishDuotoneIcon],svg[ph-fish-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M185.81 167.62c-18 13.9-44.17 23.41-81.68 24.31L80.09 248l-16-56.07L8 175.87l56.07-24c.9-37.49 10.41-63.61 24.31-81.65a44 44 0 0 0 47.82 49.58a44 44 0 0 0 49.61 47.82" opacity=".2"></svg:path><svg:path d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m48.72 67.64c-19.37 34.9-55.44 53.76-107.24 56.1l-22 51.41A8 8 0 0 1 80.1 256h-.51a8 8 0 0 1-7.19-5.78l-14.8-51.83l-51.8-14.83a8 8 0 0 1-1-15.05l51.41-22c2.35-51.78 21.21-87.84 56.09-107.22c24.75-13.74 52.74-15.84 71.88-15.18c18.64.64 36 4.27 38.86 6a8 8 0 0 1 2.83 2.83c1.69 2.85 5.33 20.21 6 38.85c.68 19.1-1.41 47.1-15.15 71.85m-55.18 29a52.11 52.11 0 0 1-33.4-44.78a52.09 52.09 0 0 1-44.77-33.39q-10.45 23.79-11.3 57.59a8 8 0 0 1-4.85 7.17l-35.39 15.14l34.45 9.86a8 8 0 0 1 5.49 5.5l9.84 34.44l15.16-35.4a8 8 0 0 1 7.17-4.84q33.77-.81 57.6-11.29m50.88-129.07c-14.15-3-64.1-11-100.3 14.75a81.2 81.2 0 0 0-16 15.07a36 36 0 0 0 39.35 38.44a8 8 0 0 1 8.73 8.73a36 36 0 0 0 38.47 39.34a80.8 80.8 0 0 0 15-16c25.75-36.17 17.75-86.16 14.75-100.33"></svg:path></svg:g>`,
})
export class PhFishDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFishSimpleDuotoneIcon],svg[ph-fish-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M202.43 151.85c-21.26 28.17-62.09 48.24-138.35 40C55.89 115.64 76 74.82 104.15 53.57a104 104 0 0 0 98.28 98.28" opacity=".2"></svg:path><svg:path d="M168 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m42 79.08c-15.08 20.84-37.53 34.88-66.7 41.74c-20.08 4.72-43.54 6-70.12 3.93q2.4 17.82 6.72 37.54a8 8 0 0 1-6.1 9.52a7.8 7.8 0 0 1-1.72.19a8 8 0 0 1-7.81-6.29q-4.89-22.36-7.41-42.62q-20.22-2.51-42.58-7.41a8 8 0 0 1 3.43-15.63q19.7 4.32 37.5 6.73c-2.09-26.56-.78-50 3.93-70.06C66 83.55 80.05 61.1 100.88 46c14.12-10.24 39.24-22.36 78.39-22c21.19.21 40.83 4.33 43.81 6.08a8 8 0 0 1 2.83 2.83c1.75 3 5.87 22.59 6.08 43.78c.22 21.62-3.42 52.75-21.99 78.39m-23.76 2.8a112.07 112.07 0 0 1-88.12-88.14C75.64 94 66.7 132.47 71.36 184.6c52.15 4.68 90.64-4.25 114.89-26.72Zm26.2-114.32a175.8 175.8 0 0 0-39.22-3.51c-24.34.64-44.71 6.49-60.76 17.39a96 96 0 0 0 86.09 86.1c10.91-16 16.76-36.42 17.4-60.76a175.8 175.8 0 0 0-3.51-39.22"></svg:path></svg:g>`,
})
export class PhFishSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerDuotoneIcon],svg[ph-flag-banner-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m232 56l-45.71 96H40l48-48l-48-48Z" opacity=".2"></svg:path><svg:path d="M238.76 51.73A8 8 0 0 0 232 48H40a8 8 0 0 0-5.66 13.66L76.69 104l-42.35 42.34A8 8 0 0 0 40 160h133.62l-28.84 60.56a8 8 0 1 0 14.44 6.88l80-168a8 8 0 0 0-.46-7.71M181.23 144H59.31l34.35-34.34a8 8 0 0 0 0-11.32L59.31 64h160Z"></svg:path></svg:g>`,
})
export class PhFlagBannerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagBannerFoldDuotoneIcon],svg[ph-flag-banner-fold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m141.09 72l-40 88H28l40-44l-40-44Z" opacity=".2"></svg:path><svg:path d="M238.73 43.67A8 8 0 0 0 232 40h-80a8 8 0 0 0-7.28 4.69L135.94 64H28a8 8 0 0 0-5.92 13.38L57.19 116l-35.11 38.62A8 8 0 0 0 28 168h73.09a8 8 0 0 0 7.28-4.69l8.78-19.31h62.43l-34.86 76.69a8 8 0 1 0 14.56 6.62l80-176a8 8 0 0 0-.55-7.64M95.94 152H46.08l27.84-30.62a8 8 0 0 0 0-10.76L46.08 80h82.59Zm90.91-24h-62.43l32.73-72h62.43Z"></svg:path></svg:g>`,
})
export class PhFlagBannerFoldDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagCheckeredDuotoneIcon],svg[ph-flag-checkered-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v60c-19.89 17.23-38.23 18.39-56 13.48v-60c17.76 4.91 36.11 3.75 56-13.48m-120 46.52v-60C86.24 37.61 67.89 38.77 48 56v60c19.89-17.22 38.23-18.39 56-13.48v60c21.62 6 42.38 21 64 27v-60c-21.62-6-42.38-21-64-27" opacity=".2"></svg:path><svg:path d="M227.32 48.75a8 8 0 0 0-8.56 1.25c-28 24.22-51.72 12.48-79.21-1.13C111.07 34.76 78.78 18.79 42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c28.49 14.09 60.77 30.06 96.79-1.13a8 8 0 0 0 2.76-6V56a8 8 0 0 0-4.68-7.25M216 71.6v40.65c-14 11.06-27 13.22-40 10.88V79.34a60.05 60.05 0 0 0 40-7.74m-56 3.76v43c-6.66-2.67-13.43-6-20.45-9.48c-8.82-4.37-18-8.91-27.55-12.18v-43c6.66 2.66 13.43 6 20.45 9.48c8.82 4.37 18.01 8.91 27.55 12.18M96 48.91v43.78a60.06 60.06 0 0 0-40 7.75V59.78c14-11.06 27-13.21 40-10.87M86.58 152A60.06 60.06 0 0 0 56 160.43v-40.65c14-11.06 27-13.22 40-10.88v43.8a65.6 65.6 0 0 0-9.42-.7m25.42 4.67v-43c6.66 2.66 13.43 6 20.45 9.48c8.82 4.37 18 8.9 27.55 12.17v43c-6.66-2.67-13.43-6-20.45-9.48c-8.82-4.37-18.01-8.9-27.55-12.17m64 26.45v-43.8a65.6 65.6 0 0 0 9.42.72a60.1 60.1 0 0 0 30.58-8.47v40.68c-14 11.06-27 13.21-40 10.87"></svg:path></svg:g>`,
})
export class PhFlagCheckeredDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagDuotoneIcon],svg[ph-flag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v120c-64 55.43-112-55.43-176 0V56c64-55.43 112 55.43 176 0" opacity=".2"></svg:path><svg:path d="M42.76 50A8 8 0 0 0 40 56v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41c16.4 8.11 34.06 16.85 53 16.85c13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V56a8 8 0 0 0-13.27-6c-28 24.23-51.72 12.49-79.21-1.12C111.07 34.76 78.78 18.79 42.76 50M216 172.25c-26.79 21.16-49.87 9.74-76.45-3.41c-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16 49.87-9.75 76.45 3.4c25 12.35 52.82 26.13 83.55 8.4Z"></svg:path></svg:g>`,
})
export class PhFlagDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantDuotoneIcon],svg[ph-flag-pennant-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 104L56 168V40Z" opacity=".2"></svg:path><svg:path d="m242.63 96.44l-184-64A8 8 0 0 0 48 40v176a8 8 0 0 0 16 0v-42.31l178.63-62.13a8 8 0 0 0 0-15.12M64 156.75V51.25L215.65 104Z"></svg:path></svg:g>`,
})
export class PhFlagPennantDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlameDuotoneIcon],svg[ph-flame-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-77.94 80A40 40 0 0 0 168 184c0-40-40-64-40-64s-40 24-40 64a40 40 0 0 0 37.94 40A80 80 0 0 1 48 144c0-72 80-120 80-120s80 48 80 120" opacity=".2"></svg:path><svg:path d="M173.79 51.48a221.3 221.3 0 0 0-41.67-34.34a8 8 0 0 0-8.24 0a221.3 221.3 0 0 0-41.67 34.34C54.59 80.48 40 112.47 40 144a88 88 0 0 0 176 0c0-31.53-14.59-63.52-42.21-92.52M96 184c0-27.67 22.53-47.28 32-54.3c9.48 7 32 26.63 32 54.3a32 32 0 0 1-64 0m77.27 15.93A47.8 47.8 0 0 0 176 184c0-44-42.09-69.79-43.88-70.86a8 8 0 0 0-8.24 0C122.09 114.21 80 140 80 184a47.8 47.8 0 0 0 2.73 15.93A71.88 71.88 0 0 1 56 144c0-34.41 20.4-63.15 37.52-81.19A216.2 216.2 0 0 1 128 33.54a215.8 215.8 0 0 1 34.48 29.27C193.49 95.5 200 125 200 144a71.88 71.88 0 0 1-26.73 55.93"></svg:path></svg:g>`,
})
export class PhFlameDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlashlightDuotoneIcon],svg[ph-flashlight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 64v13.33a8 8 0 0 1-1.6 4.8l-20.8 27.74a8 8 0 0 0-1.6 4.8V224a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V114.67a8 8 0 0 0-1.6-4.8L65.6 82.13a8 8 0 0 1-1.6-4.8V64Z" opacity=".2"></svg:path><svg:path d="M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16M72 32h112v24H72zm91.2 73.07a16.12 16.12 0 0 0-3.2 9.6V224H96V114.67a16.12 16.12 0 0 0-3.2-9.6L72 77.33V72h112v5.33ZM136 120v32a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhFlashlightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlaskDuotoneIcon],svg[ph-flask-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 216H48a8 8 0 0 1-6.86-12.12l30.48-50.8c13.23-2.48 32-1.41 56.37 10.92c32.25 16.33 54.75 12.91 67.5 7.65l19.34 32.23A8 8 0 0 1 208 216" opacity=".2"></svg:path><svg:path d="M221.69 199.77L160 96.92V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v56.92L34.31 199.77A16 16 0 0 0 48 224h160a16 16 0 0 0 13.72-24.23Zm-110.83-96.52a7.93 7.93 0 0 0 1.14-4.11V40h32v59.14a7.93 7.93 0 0 0 1.14 4.11L183.36 167c-12 2.37-29.07 1.37-51.75-10.11c-15.91-8.05-31.05-12.32-45.22-12.81ZM48 208l28.54-47.58c14.25-1.73 30.31 1.85 47.82 10.72c19 9.61 35 12.88 48 12.88a69.9 69.9 0 0 0 19.55-2.7L208 208Z"></svg:path></svg:g>`,
})
export class PhFlaskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalDuotoneIcon],svg[ph-flip-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 40v160a8 8 0 0 1-8 8H40a8 8 0 0 1-7.37-11.12l64-160C100 28.86 112 31.29 112 40" opacity=".2"></svg:path><svg:path d="M107.18 24.33a15.86 15.86 0 0 0-17.92 9.45l-.06.14l-64 159.93A16 16 0 0 0 40 216h64a16 16 0 0 0 16-16V40a15.85 15.85 0 0 0-12.82-15.67M104 200H40l.06-.15L104 40Zm126.77-6.15l-64-159.93l-.06-.14A16 16 0 0 0 136 40v160a16 16 0 0 0 16 16h64a16 16 0 0 0 14.78-22.15ZM152 200V40l63.93 159.84l.06.15Z"></svg:path></svg:g>`,
})
export class PhFlipHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlipVerticalDuotoneIcon],svg[ph-flip-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m219.11 159.37l-160 64A8 8 0 0 1 48 216v-64a8 8 0 0 1 8-8h160c8.71 0 11.14 12 3.11 15.37" opacity=".2"></svg:path><svg:path d="M56 120h160a16 16 0 0 0 6.23-30.74l-.14-.06l-159.93-64A16 16 0 0 0 40 40v64a16 16 0 0 0 16 16m0-80l.15.06L216 104H56zm160 96H56a16 16 0 0 0-16 16v64a16 16 0 0 0 22.15 14.78l159.93-64l.14-.06A16 16 0 0 0 216 136M56.15 215.93L56 216v-64h160Z"></svg:path></svg:g>`,
})
export class PhFlipVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskBackDuotoneIcon],svg[ph-floppy-disk-back-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40h-32v40a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V40.73a8 8 0 0 0-2.34 1.61L42.34 77.66A8 8 0 0 0 40 83.31V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8m-80 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 48h80v32H88Zm120 160H48V83.31l24-24V80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16V48h24Zm-80-96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhFloppyDiskBackDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFloppyDiskDuotoneIcon],svg[ph-floppy-disk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 83.31V208a8 8 0 0 1-8 8h-32v-64a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v64H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h124.69a8 8 0 0 1 5.65 2.34l35.32 35.32a8 8 0 0 1 2.34 5.65" opacity=".2"></svg:path><svg:path d="M219.31 72L184 36.69A15.86 15.86 0 0 0 172.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V83.31A15.86 15.86 0 0 0 219.31 72M168 208H88v-56h80Zm40 0h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h124.69L208 83.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFloppyDiskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowDuotoneIcon],svg[ph-flow-arrow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 176a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="m245.66 74.34l-32-32a8 8 0 0 0-11.32 11.32L220.69 72H208c-49.33 0-61.05 28.12-71.38 52.92c-9.38 22.51-16.92 40.59-49.48 42.84a40 40 0 1 0 .1 16c43.26-2.65 54.34-29.15 64.14-52.69C161.41 107 169.33 88 208 88h12.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32M48 200a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhFlowArrowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerDuotoneIcon],svg[ph-flower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M206.35 136.29c-8.87-5.13-24.46-7.38-39.4-8.29c14.94-.91 30.53-3.16 39.4-8.29a32 32 0 1 0-32-55.42c-8.87 5.12-18.61 17.48-26.87 30C154.17 80.87 160 66.25 160 56a32 32 0 0 0-64 0c0 10.25 5.83 24.87 12.52 38.26c-8.26-12.49-18-24.85-26.87-30a32 32 0 1 0-32 55.42c8.87 5.13 24.46 7.38 39.4 8.29c-14.94.91-30.53 3.16-39.4 8.29a32 32 0 1 0 32 55.42c8.87-5.12 18.61-17.48 26.87-30C101.83 175.13 96 189.75 96 200a32 32 0 0 0 64 0c0-10.25-5.83-24.87-12.52-38.26c8.26 12.49 18 24.85 26.87 30a32 32 0 1 0 32-55.42ZM155.71 144a32 32 0 1 1 4.29-16a31.74 31.74 0 0 1-4.29 16" opacity=".2"></svg:path><svg:path d="M210.35 129.36c-.81-.47-1.7-.92-2.62-1.36c.92-.44 1.81-.89 2.62-1.36a40 40 0 1 0-40-69.28c-.81.47-1.65 1-2.48 1.59c.08-1 .13-2 .13-3a40 40 0 0 0-80 0c0 .94 0 1.94.13 3c-.83-.57-1.67-1.12-2.48-1.59a40 40 0 1 0-40 69.28c.81.47 1.7.92 2.62 1.36c-.92.44-1.81.89-2.62 1.36a40 40 0 1 0 40 69.28c.81-.47 1.65-1 2.48-1.59c-.08 1-.13 2-.13 2.95a40 40 0 0 0 80 0c0-.94-.05-1.94-.13-2.95c.83.57 1.67 1.12 2.48 1.59a39.8 39.8 0 0 0 19.94 5.36a40.4 40.4 0 0 0 10.42-1.38a40 40 0 0 0 9.64-73.28ZM104 128a24 24 0 1 1 24 24a24 24 0 0 1-24-24m74.35-56.79a24 24 0 1 1 24 41.57c-6.27 3.63-18.61 6.13-35.16 7.19a40 40 0 0 0-12.66-21.87c9.2-13.82 17.55-23.26 23.82-26.89M128 32a24 24 0 0 1 24 24c0 7.24-4 19.19-11.36 34.06a39.8 39.8 0 0 0-25.28 0C108 75.19 104 63.24 104 56a24 24 0 0 1 24-24M44.86 80a24 24 0 0 1 32.79-8.79c6.27 3.63 14.62 13.07 23.82 26.89A40 40 0 0 0 88.81 120c-16.55-1.06-28.89-3.56-35.16-7.18A24 24 0 0 1 44.86 80m32.79 104.79a24 24 0 1 1-24-41.57c6.27-3.63 18.61-6.13 35.16-7.19a40 40 0 0 0 12.66 21.87c-9.2 13.82-17.55 23.26-23.82 26.89M128 224a24 24 0 0 1-24-24c0-7.24 4-19.19 11.36-34.06a39.8 39.8 0 0 0 25.28 0C148 180.81 152 192.76 152 200a24 24 0 0 1-24 24m83.14-48a24 24 0 0 1-32.79 8.79c-6.27-3.63-14.62-13.07-23.82-26.89a40 40 0 0 0 12.66-21.9c16.55 1.06 28.89 3.56 35.16 7.18a24 24 0 0 1 8.79 32.82"></svg:path></svg:g>`,
})
export class PhFlowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerLotusDuotoneIcon],svg[ph-flower-lotus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 200c-15.37 0-40.77-.18-70-17.64S19.31 143 16.28 131.82a7.94 7.94 0 0 1 5.46-9.82a69.6 69.6 0 0 1 30.82-.64c-7.63-23.88-4-42.44-1-51.71A8.2 8.2 0 0 1 61 64.18C68.56 65.79 81.28 70 94.6 80.8a108.5 108.5 0 0 0-6.6 38.38C88 178 128 200 128 200m106.26-78a69.6 69.6 0 0 0-30.82-.64c7.63-23.88 4-42.44 1-51.71a8.2 8.2 0 0 0-9.44-5.47c-7.52 1.61-20.24 5.8-33.56 16.62a108.5 108.5 0 0 1 6.56 38.38C168 178 128 200 128 200c15.37 0 40.77-.18 70-17.64s38.69-39.34 41.72-50.54a7.94 7.94 0 0 0-5.46-9.82" opacity=".2"></svg:path><svg:path d="M245.83 121.63a15.53 15.53 0 0 0-9.52-7.33a73.5 73.5 0 0 0-22.17-2.22c4-19.85 1-35.55-2.06-44.86a16.15 16.15 0 0 0-18.79-10.88a85.5 85.5 0 0 0-28.55 12.12a94.6 94.6 0 0 0-27.11-33.25a16.05 16.05 0 0 0-19.26 0a94.5 94.5 0 0 0-27.11 33.25a85.5 85.5 0 0 0-28.55-12.12a16.15 16.15 0 0 0-18.79 10.88c-3 9.31-6 25-2.06 44.86a73.5 73.5 0 0 0-22.17 2.22a15.53 15.53 0 0 0-9.52 7.33a16 16 0 0 0-1.6 12.27c3.39 12.57 13.8 36.48 45.33 55.32S113.13 208 128.05 208s42.67 0 74-18.78c31.53-18.84 41.94-42.75 45.33-55.32a16 16 0 0 0-1.55-12.27M59.14 72.14a.2.2 0 0 1 .23-.15a70.4 70.4 0 0 1 25.81 11.67A118.7 118.7 0 0 0 80 119.17c0 18.74 3.77 34 9.11 46.28A123.6 123.6 0 0 1 69.57 140C51.55 108.62 55.3 84 59.14 72.14m3 103.35C35.47 159.57 26.82 140.05 24 129.7a59.8 59.8 0 0 1 22.5-1.17a129 129 0 0 0 9.15 19.41a142.3 142.3 0 0 0 34 39.56a115 115 0 0 1-27.55-12.01ZM128 190.4c-9.33-6.94-32-28.23-32-71.23C96 76.7 118.38 55.24 128 48c9.62 7.26 32 28.72 32 71.19c0 42.98-22.67 64.27-32 71.21m42.82-106.74A70.4 70.4 0 0 1 196.63 72a.2.2 0 0 1 .23.15c3.84 11.85 7.59 36.47-10.43 67.85a123.3 123.3 0 0 1-19.54 25.48c5.34-12.26 9.11-27.54 9.11-46.28a118.7 118.7 0 0 0-5.18-35.54M232 129.72c-2.77 10.25-11.4 29.81-38.09 45.77a115 115 0 0 1-27.55 12a142.3 142.3 0 0 0 34-39.56a129 129 0 0 0 9.15-19.41a59.7 59.7 0 0 1 22.49 1.19Z"></svg:path></svg:g>`,
})
export class PhFlowerLotusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlowerTulipDuotoneIcon],svg[ph-flower-tulip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M169.23 66A80 80 0 0 0 128 136a80 80 0 0 0-41.23-70C100 38 128 24 128 24s28 14 41.23 42" opacity=".2"></svg:path><svg:path d="M208 48a87.5 87.5 0 0 0-35.36 7.43c-15.1-25.37-39.92-38-41.06-38.59a8 8 0 0 0-7.16 0c-1.14.58-26 13.22-41.06 38.59A87.5 87.5 0 0 0 48 48a8 8 0 0 0-8 8v40a88.11 88.11 0 0 0 80 87.63v35.43l-36.42-18.22a8 8 0 1 0-7.16 14.32l48 24a8 8 0 0 0 7.16 0l48-24a8 8 0 0 0-7.16-14.32L136 219.06v-35.43A88.11 88.11 0 0 0 216 96V56a8 8 0 0 0-8-8m-80-14.79c6.65 4.08 21.08 14.19 30.64 30A88.46 88.46 0 0 0 128 99.36a88.4 88.4 0 0 0-30.64-36.17c9.57-15.79 23.99-25.9 30.64-29.98M56 96V64.44A72.1 72.1 0 0 1 120 136v31.56A72.1 72.1 0 0 1 56 96m144 0a72.1 72.1 0 0 1-64 71.56V136a72.1 72.1 0 0 1 64-71.56Z"></svg:path></svg:g>`,
})
export class PhFlowerTulipDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFlyingSaucerDuotoneIcon],svg[ph-flying-saucer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 112c0 26.51-50.14 48-112 48S16 138.51 16 112c0-19 25.86-35.49 63.35-43.25A57.07 57.07 0 0 0 72 96.83v3.07a15.94 15.94 0 0 0 12.34 15.52A196 196 0 0 0 128 120a195.7 195.7 0 0 0 43.64-4.58A16 16 0 0 0 184 99.9V96a55.7 55.7 0 0 0-7-27.18C214.29 76.61 240 93 240 112" opacity=".2"></svg:path><svg:path d="M183.59 213.47a8 8 0 0 1-15.18 5.06l-8-24a8 8 0 0 1 15.18-5.06ZM128 184a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-37.47.41a8 8 0 0 0-10.12 5.06l-8 24a8 8 0 0 0 15.18 5.06l8-24a8 8 0 0 0-5.06-10.12M248 112c0 16.22-13.37 30.89-37.65 41.29C188.22 162.78 159 168 128 168s-60.22-5.22-82.35-14.71C21.37 142.89 8 128.22 8 112c0-8.37 3.67-20.79 21.17-32.5c11.37-7.61 26.94-13.76 45.18-17.85A63.64 63.64 0 0 1 173 50.45a64.8 64.8 0 0 1 9.11 11.3C223.43 71.09 248 89.74 248 112M80 96.83v3a7.92 7.92 0 0 0 6.13 7.76A188.2 188.2 0 0 0 128 112a188 188 0 0 0 41.85-4.37a7.93 7.93 0 0 0 6.15-7.76V96a48 48 0 0 0-48.64-48C101.25 48.34 80 70.25 80 96.83M232 112c0-11.7-16.63-23.89-41.9-31.59A64.7 64.7 0 0 1 192 96v3.92a23.86 23.86 0 0 1-18.56 23.3A204 204 0 0 1 128 128a204 204 0 0 1-45.44-4.78A23.86 23.86 0 0 1 64 99.92v-3.06a65.3 65.3 0 0 1 2.13-16.52C40.72 88 24 100.25 24 112c0 18.92 42.71 40 104 40s104-21.08 104-40"></svg:path></svg:g>`,
})
export class PhFlyingSaucerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDashedDuotoneIcon],svg[ph-folder-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M96 208a8 8 0 0 1-8 8H39.38A15.4 15.4 0 0 1 24 200.62V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8m64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M24 80V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69l29.66 29.65A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8m16-8h68.69l-16-16H40Zm-8 88a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhFolderDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDottedDuotoneIcon],svg[ph-folder-dotted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80H32V56a8 8 0 0 1 8-8h52.7a7.9 7.9 0 0 1 5.6 2.3Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M96 208a8 8 0 0 1-8 8H39.4A15.4 15.4 0 0 1 24 200.6V192a8 8 0 0 1 16 0v8h48a8 8 0 0 1 8 8Zm64-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM24 80V56a16 16 0 0 1 16-16h52.7a15.9 15.9 0 0 1 11.3 4.7l29.7 29.6a8.4 8.4 0 0 1 1.7 8.8A8 8 0 0 1 128 88H32a8 8 0 0 1-8-8Zm16-8h68.7l-16-16H40Zm-8 88a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z"></svg:path>`,
})
export class PhFolderDottedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderDuotoneIcon],svg[ph-folder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56ZM216 200H40V88h176Z"></svg:path></svg:g>`,
})
export class PhFolderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderLockDuotoneIcon],svg[ph-folder-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 168v40h-72v-40ZM92.69 48H40a8 8 0 0 0-8 8v24h96L98.34 50.34A8 8 0 0 0 92.69 48" opacity=".2"></svg:path><svg:path d="M224 160h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8m-48-4a12 12 0 0 1 24 0v4h-24Zm40 44h-56v-24h56Zm0-128h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56Z"></svg:path></svg:g>`,
})
export class PhFolderLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderMinusDuotoneIcon],svg[ph-folder-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm176 144H40V88h176ZM96 144a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhFolderMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchDuotoneIcon],svg[ph-folder-notch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 80l-29.87 22.4a8 8 0 0 1-4.8 1.6H32V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6Z" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Z"></svg:path></svg:g>`,
})
export class PhFolderNotchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusDuotoneIcon],svg[ph-folder-notch-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 80l-29.87 22.4a8 8 0 0 1-4.8 1.6H32V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6Z" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Zm-64-56a8 8 0 0 1 0 16h-48a8 8 0 0 1 0-16Z"></svg:path></svg:g>`,
})
export class PhFolderNotchMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchOpenDuotoneIcon],svg[ph-folder-notch-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v24h-61.58a8.07 8.07 0 0 0-4.44 1.34l-20 13.32a8.07 8.07 0 0 1-4.44 1.34H69.42a8 8 0 0 0-7.42 5l-30 75V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H200a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l27.73 20.8a16.12 16.12 0 0 0 9.6 3.2H200v16h-53.57a16 16 0 0 0-8.88 2.69l-20 13.31H69.42a15.94 15.94 0 0 0-14.86 10.06L40 166.46V64Zm112 136H43.82l25.6-64h48.16a16 16 0 0 0 8.88-2.69l20-13.31H232Z"></svg:path></svg:g>`,
})
export class PhFolderNotchOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusDuotoneIcon],svg[ph-folder-notch-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128 80l-29.87 22.4a8 8 0 0 1-4.8 1.6H32V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6Z" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 64h53.33l21.34 16l-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Zm-80-72v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhFolderNotchPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderOpenDuotoneIcon],svg[ph-folder-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v24H69.77a8 8 0 0 0-7.59 5.47L32 208V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h72a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Zm112 136H43.1l26.67-80H232Z"></svg:path></svg:g>`,
})
export class PhFolderOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderPlusDuotoneIcon],svg[ph-folder-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 80H32V56a8 8 0 0 1 8-8h52.69a8 8 0 0 1 5.65 2.34Z" opacity=".2"></svg:path><svg:path d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56ZM216 200H40V88h176Zm-88-88a8 8 0 0 1 8 8v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 8-8"></svg:path></svg:g>`,
})
export class PhFolderPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDashedDuotoneIcon],svg[ph-folder-simple-dashed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6l27.74 20.8a8 8 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M24 80V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2l29.87 22.4a8 8 0 1 1-9.6 12.8L93.33 64H40v16a8 8 0 0 1-16 0m64 120H40v-8a8 8 0 0 0-16 0v8.62A15.4 15.4 0 0 0 39.38 216H88a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.89A15.13 15.13 0 0 0 232 200.89V152a8 8 0 0 0-8-8m-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhFolderSimpleDashedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDottedDuotoneIcon],svg[ph-folder-simple-dotted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88v112.9a7.1 7.1 0 0 1-7.1 7.1H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.3a8.1 8.1 0 0 1 4.8 1.6l27.8 20.8a8.1 8.1 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M24 80V64a16 16 0 0 1 16-16h53.3a15.6 15.6 0 0 1 9.6 3.2l29.9 22.4A8 8 0 0 1 128 88a7.7 7.7 0 0 1-4.8-1.6L93.3 64H40v16a8 8 0 0 1-16 0Zm64 120H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16Zm72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z"></svg:path>`,
})
export class PhFolderSimpleDottedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleDuotoneIcon],svg[ph-folder-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Z"></svg:path></svg:g>`,
})
export class PhFolderSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleLockDuotoneIcon],svg[ph-folder-simple-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 168v40h-72v-40Z" opacity=".2"></svg:path><svg:path d="M232 88v16a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h72a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16m0 80v40a8 8 0 0 1-8 8h-72a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h8v-4a28 28 0 0 1 56 0v4h8a8 8 0 0 1 8 8m-56-8h24v-4a12 12 0 0 0-24 0Zm40 16h-56v24h56Z"></svg:path></svg:g>`,
})
export class PhFolderSimpleLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusDuotoneIcon],svg[ph-folder-simple-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Zm-56-56a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFolderSimpleMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimplePlusDuotoneIcon],svg[ph-folder-simple-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Zm-56-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFolderSimplePlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleStarDuotoneIcon],svg[ph-folder-simple-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m205.6 183.41l8.07 32.59L184 198.54L154.33 216l8.07-32.59l-26.4-21.8l34.65-2.67L184 128l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M128 208a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88h-88a8 8 0 0 1-4.8-1.6L93.33 64H40v136h80a8 8 0 0 1 8 8m109.09-40.22l-22.51 18.59l6.85 27.71a8 8 0 0 1-11.82 8.81L184 207.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14m-25.47.28l-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92l-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15l11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12l13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81l-3.5-14.12a8 8 0 0 1 2.68-8.09Z"></svg:path></svg:g>`,
})
export class PhFolderSimpleStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleUserDuotoneIcon],svg[ph-folder-simple-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 176a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M214.61 198.62a32 32 0 1 0-45.23 0a40 40 0 0 0-17.11 23.32a8 8 0 0 0 5.67 9.79a8.2 8.2 0 0 0 2.06.27a8 8 0 0 0 7.73-5.95C170.56 215.42 180.54 208 192 208s21.44 7.42 24.27 18.05a8 8 0 1 0 15.46-4.11a40 40 0 0 0-17.12-23.32M192 160a16 16 0 1 1-16 16a16 16 0 0 1 16-16m40-72v32a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h80a8 8 0 0 1 0 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16"></svg:path></svg:g>`,
})
export class PhFolderSimpleUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderStarDuotoneIcon],svg[ph-folder-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m205.6 183.41l8.07 32.59L184 198.54L154.33 216l8.07-32.59l-26.4-21.8l34.65-2.67L184 128l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M120.56 200H40V88h176v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h81.18a8 8 0 0 0 0-16M92.69 56l16 16H40V56Zm146.94 103.2a8 8 0 0 0-7-5.56l-29.84-2.31l-11.43-26.5a8 8 0 0 0-14.7 0l-11.43 26.5l-29.84 2.31a8 8 0 0 0-4.47 14.14l22.51 18.59l-6.85 27.71a8 8 0 0 0 11.82 8.81l25.6-15.07l25.61 15.07a8 8 0 0 0 11.82-8.81l-6.85-27.71l22.51-18.59a8 8 0 0 0 2.54-8.58m-39.12 18a8 8 0 0 0-2.68 8.09l3.5 14.12l-13.27-7.81a8 8 0 0 0-8.12 0l-13.27 7.81l3.5-14.12a8 8 0 0 0-2.68-8.09l-11.11-9.18l14.89-1.15a8 8 0 0 0 6.73-4.8l6-13.92l6 13.92a8 8 0 0 0 6.73 4.8l14.89 1.15Z"></svg:path></svg:g>`,
})
export class PhFolderStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserDuotoneIcon],svg[ph-folder-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 176a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M214.61 198.62a32 32 0 1 0-45.23 0a40 40 0 0 0-17.11 23.32a8 8 0 0 0 5.67 9.79a8.2 8.2 0 0 0 2.06.27a8 8 0 0 0 7.73-5.95C170.56 215.42 180.54 208 192 208s21.44 7.42 24.27 18.05a8 8 0 1 0 15.46-4.11a40 40 0 0 0-17.12-23.32M192 160a16 16 0 1 1-16 16a16 16 0 0 1 16-16m24-88h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.61A15.4 15.4 0 0 0 39.38 216h81.18a8 8 0 0 0 0-16H40V88h176v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16M92.69 56l16 16H40V56Z"></svg:path></svg:g>`,
})
export class PhFolderUserDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersDuotoneIcon],svg[ph-folders-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"></svg:path></svg:g>`,
})
export class PhFoldersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballDuotoneIcon],svg[ph-football-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M222.5 110.56c-3.32 25.23-13 53-36 75.95s-50.72 32.67-75.95 36L33.5 145.44c3.32-25.23 13-53 36-75.95s50.72-32.67 76-36l77.06 77.06Z" opacity=".2"></svg:path><svg:path d="M229.06 53.89a32.92 32.92 0 0 0-26.95-26.95c-32.37-5.49-93.39-8-138.27 36.9s-42.39 105.9-36.9 138.27a32.92 32.92 0 0 0 27 26.95A206.6 206.6 0 0 0 88.27 232c32.09 0 72.05-8 103.89-39.84c44.89-44.88 42.39-105.9 36.9-138.27m-61.61-14a192 192 0 0 1 32 2.8a16.94 16.94 0 0 1 13.85 13.87a188.6 188.6 0 0 1 2.7 36.22L163.21 40c1.4-.08 2.79-.1 4.24-.1ZM56.56 213.3a16.94 16.94 0 0 1-13.86-13.86a188.6 188.6 0 0 1-2.7-36.22L92.78 216a188 188 0 0 1-36.22-2.7m124.3-32.44c-11.61 11.6-33.27 27.73-67.37 33.27l-71.62-71.62c5.54-34.1 21.67-55.76 33.27-67.37S108.4 47.4 142.5 41.86l71.63 71.63c-5.54 34.1-21.67 55.76-33.27 67.37m-15.22-90.5a8 8 0 0 1 0 11.31L151.3 116l6.34 6.34a8 8 0 1 1-11.31 11.3l-6.33-6.33L127.31 140l6.34 6.34a8 8 0 1 1-11.3 11.31L116 151.3l-14.34 14.34a8 8 0 1 1-11.31-11.31L104.7 140l-6.34-6.34a8 8 0 0 1 11.31-11.3l6.34 6.34l12.68-12.7l-6.34-6.34a8 8 0 0 1 11.3-11.31l6.35 6.35l14.34-14.34a8 8 0 0 1 11.3 0"></svg:path></svg:g>`,
})
export class PhFootballDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetDuotoneIcon],svg[ph-football-helmet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m112.19 137.74l15.62 52.52A8 8 0 0 1 120 200H72.14A91.91 91.91 0 0 1 32 124c0-50 40.65-91.26 90.69-92A92 92 0 0 1 216 124v4h-96a8 8 0 0 0-7.81 9.74" opacity=".2"></svg:path><svg:path d="M96 164a12 12 0 1 1-12-12a12 12 0 0 1 12 12m136 12v32a16 16 0 0 1-16 16h-36a16.1 16.1 0 0 1-15.35-11.47L153.84 176h-21.93l3.56 12a5 5 0 0 1 .15.54A16 16 0 0 1 120 208H72.14a8 8 0 0 1-4.52-1.4A100 100 0 0 1 24 124c0-54.36 44.24-99.2 98.58-100A100 100 0 0 1 224 124v4a8 8 0 0 1-8 8h-57.29l7.09 24H216a16 16 0 0 1 16 16m-112-56h87.91a84 84 0 0 0-85.11-80C77.16 40.64 40 78.31 40 124a84 84 0 0 0 34.67 68H120l-15.45-52a5 5 0 0 1-.15-.54A16 16 0 0 1 120 120m29.11 40L142 136h-22l7.14 24ZM216 176h-45.48l9.48 32h36Z"></svg:path></svg:g>`,
})
export class PhFootballHelmetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsDuotoneIcon],svg[ph-footprints-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 192h56v12a28 28 0 0 1-56 0ZM48 180a28 28 0 0 0 56 0v-12H48ZM76 24c-24.52 0-51.46 80-25.26 112h50.52c26.2-32-.74-112-25.26-112m129.26 136c26.2-32-.74-112-25.26-112s-51.46 80-25.26 112Z" opacity=".2"></svg:path><svg:path d="M208.06 184H152a8 8 0 0 0-8 8v12a36 36 0 0 0 72.05 0v-12a8 8 0 0 0-7.99-8m-8 20a20 20 0 0 1-40 0v-4h40ZM104 160H48a8 8 0 0 0-8 8v12a36 36 0 0 0 72 0v-12a8 8 0 0 0-8-8m-8 20a20 20 0 0 1-40 0v-4h40ZM76 16c-11.64 0-22.93 10.31-31.8 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.2 2.93h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C98.85 26.31 87.57 16 76 16m21.15 112H54.78c-11.4-18.1-7.21-52.7 3.89-76.11C65.14 38.22 72.17 32 76 32s10.82 6.22 17.3 19.89c11.06 23.41 15.25 58.01 3.85 76.11m57.61 40h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C202.93 50.31 191.64 40 180 40s-22.89 10.31-31.77 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.24 3m8-92.11C169.22 62.22 176.25 56 180 56s10.81 6.22 17.29 19.89c11.1 23.41 15.29 58 3.89 76.11h-42.33c-11.4-18.1-7.21-52.7 3.89-76.11Z"></svg:path></svg:g>`,
})
export class PhFootprintsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeDuotoneIcon],svg[ph-fork-knife-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v128h-56s0-104 56-128" opacity=".2"></svg:path><svg:path d="M72 88V40a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m144-48v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8a268.8 268.8 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40m-16 13.9c-32.17 24.57-38.47 84.42-39.7 106.1H200Zm-80.11-15.21a8 8 0 1 0-15.78 2.63L112 88.63a32 32 0 0 1-64 0l7.88-47.31a8 8 0 1 0-15.78-2.63l-8 48A8 8 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8 8 0 0 0-.11-1.31Z"></svg:path></svg:g>`,
})
export class PhForkKnifeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKDuotoneIcon],svg[ph-four-k-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160H32V48Z" opacity=".2"></svg:path><svg:path d="M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200 152H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M144 72a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0v-29l13.09-15l28 48a8 8 0 1 0 13.82-8l-30.7-52.63L206 85.27a8 8 0 1 0-12-10.54l-42 48V80a8 8 0 0 0-8-8M88 176v-16H40a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 104 80v64h8a8 8 0 0 1 0 16h-8v16a8 8 0 0 1-16 0m0-32v-40.68L56.36 144Z"></svg:path></svg:g>`,
})
export class PhFourKDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersDuotoneIcon],svg[ph-frame-corners-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 80v32a8 8 0 0 1-16 0V88h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M96 168H72v-24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"></svg:path></svg:g>`,
})
export class PhFrameCornersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoDuotoneIcon],svg[ph-framer-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 104h-72L56 40h144ZM56 168l72 72v-72h72l-72-64H56Z" opacity=".2"></svg:path><svg:path d="M208 104V40a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 96H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 240v-64h64a8 8 0 0 0 5.31-14L149 112h51a8 8 0 0 0 8-8m-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V112h61Zm13-64h-61L77 48h115Z"></svg:path></svg:g>`,
})
export class PhFramerLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionDuotoneIcon],svg[ph-function-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v160a16 16 0 0 1-16 16H56V56a16 16 0 0 1 16-16Z" opacity=".2"></svg:path><svg:path d="M208 40a8 8 0 0 1-8 8h-29.29a24 24 0 0 0-23.62 19.71l-9.5 52.29H184a8 8 0 0 1 0 16h-49.32l-10 55.16A40 40 0 0 1 85.29 224H56a8 8 0 0 1 0-16h29.29a24 24 0 0 0 23.62-19.71l9.5-52.29H72a8 8 0 0 1 0-16h49.32l10-55.16A40 40 0 0 1 170.71 32H200a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFunctionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelDuotoneIcon],svg[ph-funnel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.9 61.38L152 136v58.65a8 8 0 0 1-3.56 6.66l-32 21.33A8 8 0 0 1 104 216v-80L34.1 61.38A8 8 0 0 1 40 48h176a8 8 0 0 1 5.9 13.38" opacity=".2"></svg:path><svg:path d="M230.6 49.53A15.81 15.81 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.74-72.32l.08-.09a15.8 15.8 0 0 0 2.78-17.23m-84.42 81.05A8 8 0 0 0 144 136v58.66L112 216v-80a8 8 0 0 0-2.16-5.47L40 56h176Z"></svg:path></svg:g>`,
})
export class PhFunnelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleDuotoneIcon],svg[ph-funnel-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 136a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m32-56H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-80 96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFunnelSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXDuotoneIcon],svg[ph-funnel-simple-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144a16 16 0 0 1-16 16h-8l-16-16l-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M192 144H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m40-64H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-104 96h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m93.66-5.66a8 8 0 0 0-11.32 0L192 188.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L180.69 200l-18.35 18.34a8 8 0 0 0 11.32 11.32L192 211.31l18.34 18.35a8 8 0 0 0 11.32-11.32L203.31 200l18.35-18.34a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhFunnelSimpleXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXDuotoneIcon],svg[ph-funnel-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.9 61.38L152 136v58.65a8 8 0 0 1-3.56 6.66l-32 21.33A8 8 0 0 1 104 216v-80L34.1 61.38A8 8 0 0 1 40 48h176a8 8 0 0 1 5.9 13.38" opacity=".2"></svg:path><svg:path d="M227.82 66.76A16 16 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.73-72.32Zm-81.63 63.83A8 8 0 0 0 144 136v58.66L112 216v-80a8 8 0 0 0-2.16-5.46L40 56h176Zm99.49 79.81a8 8 0 0 1-11.32 11.32L216 203.32l-18.34 18.35a8 8 0 0 1-11.31-11.32L204.69 192l-18.34-18.35a8 8 0 0 1 11.31-11.31L216 180.69l18.34-18.34a8 8 0 0 1 11.32 11.31L227.31 192Z"></svg:path></svg:g>`,
})
export class PhFunnelXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerDuotoneIcon],svg[ph-game-controller-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216.86 207.57a28 28 0 0 1-24.66-7.77L150.09 152H172a51.94 51.94 0 0 0 51.2-61l16.36 84.17a28 28 0 0 1-22.7 32.4" opacity=".2"></svg:path><svg:path d="M176 112h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m-72-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m137.48 104.65a36 36 0 0 1-54.94 4.81c-.12-.12-.24-.24-.35-.37L146.48 160h-37l-39.67 45.09l-.35.37A36.08 36.08 0 0 1 44 216a36 36 0 0 1-35.44-42.25a.7.7 0 0 1 0-.14l16.37-84.09A59.88 59.88 0 0 1 83.89 40H172a60.08 60.08 0 0 1 59 49.25v.18l16.37 84.17a.7.7 0 0 1 0 .14a35.74 35.74 0 0 1-5.89 26.91M172 144a44 44 0 0 0 0-88H83.89a43.9 43.9 0 0 0-43.21 36.37v.13L24.3 176.59A20 20 0 0 0 58 194.3l41.92-47.59a8 8 0 0 1 6-2.71Zm59.7 32.59l-8.74-45A60 60 0 0 1 172 160h-4.2l30.2 34.31a20.09 20.09 0 0 0 17.46 5.39a20 20 0 0 0 16.23-23.11Z"></svg:path></svg:g>`,
})
export class PhGameControllerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageDuotoneIcon],svg[ph-garage-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 136v64H72v-64Z" opacity=".2"></svg:path><svg:path d="M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 98.67L128 40l88 58.66V192h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40ZM176 144v16h-40v-16Zm-56 16H80v-16h40Zm-40 16h40v16H80Zm56 0h40v16h-40Z"></svg:path></svg:g>`,
})
export class PhGarageDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanDuotoneIcon],svg[ph-gas-can-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V107.31a8 8 0 0 1 2.34-5.65l67.32-67.32a8 8 0 0 1 5.65-2.34H200a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 24h-76.69A15.86 15.86 0 0 0 112 28.69L101.66 39L91.31 28.69a16 16 0 0 0-22.62 0l-24 24a16 16 0 0 0 0 22.62L55 85.66L44.69 96A15.86 15.86 0 0 0 40 107.31V216a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M56 64l24-24l10.34 10.34l-24 24Zm144 152H56V107.31l16-16L123.31 40H200ZM128 64a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8m52.8 62.4L141.33 156l39.47 29.6a8 8 0 1 1-9.6 12.8L128 166l-43.2 32.4a8 8 0 0 1-9.6-12.8l39.47-29.6l-39.47-29.6a8 8 0 0 1 9.6-12.8L128 146l43.2-32.4a8 8 0 0 1 9.6 12.8"></svg:path></svg:g>`,
})
export class PhGasCanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpDuotoneIcon],svg[ph-gas-pump-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 56v160H56V56a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m241 69.66l-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97M64 208V56a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v152Zm80-96a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhGasPumpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeDuotoneIcon],svg[ph-gauge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 152v24a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-22.87C24 95.65 70.15 48.2 127.63 48A104 104 0 0 1 232 152" opacity=".2"></svg:path><svg:path d="M207.06 72.67A111.24 111.24 0 0 0 128 40h-.4C66.07 40.21 16 91 16 153.13V176a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M224 176H119.71l54.76-75.3a8 8 0 0 0-12.94-9.42L99.92 176H32v-22.87c0-3.08.15-6.12.43-9.13H56a8 8 0 0 0 0-16H35.27c10.32-38.86 44-68.24 84.73-71.66V80a8 8 0 0 0 16 0V56.33A96.14 96.14 0 0 1 221 128h-21a8 8 0 0 0 0 16h23.67c.21 2.65.33 5.31.33 8Z"></svg:path></svg:g>`,
})
export class PhGaugeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelDuotoneIcon],svg[ph-gavel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m149.66 45.66l-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 0-11.32l64-64a8 8 0 0 1 11.32 0l16 16a8 8 0 0 1 0 11.32m88 76.68l-16-16a8 8 0 0 0-11.32 0l-64 64a8 8 0 0 0 0 11.32l16 16a8 8 0 0 0 11.32 0l64-64a8 8 0 0 0 0-11.32" opacity=".2"></svg:path><svg:path d="m243.32 116.69l-16-16a16 16 0 0 0-20.84-1.53l-49.64-49.64a16 16 0 0 0-1.52-20.84l-16-16a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63l16 16a16 16 0 0 0 20.83 1.52l7.17 7.17l-65.38 65.38a25 25 0 0 0 35.32 35.32L132 159.32l7.17 7.16a16 16 0 0 0 1.52 20.84l16 16a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63M80 104L64 88l64-64l16 16ZM55.32 213.38a9 9 0 0 1-12.69 0a9 9 0 0 1 0-12.68L108 135.32L120.69 148ZM101 105.66L145.66 61L195 110.34L150.35 155ZM168 192l-16-16l4-4l56-56l4-4l16 16Z"></svg:path></svg:g>`,
})
export class PhGavelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearDuotoneIcon],svg[ph-gear-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m207.86 123.18l16.78-21a99 99 0 0 0-10.07-24.29l-26.7-3a81 81 0 0 0-6.81-6.81l-3-26.71a99.4 99.4 0 0 0-24.3-10l-21 16.77a82 82 0 0 0-9.64 0l-21-16.78a99 99 0 0 0-24.21 10.07l-3 26.7a81 81 0 0 0-6.81 6.81l-26.71 3a99.4 99.4 0 0 0-10 24.3l16.77 21a82 82 0 0 0 0 9.64l-16.78 21a99 99 0 0 0 10.07 24.29l26.7 3a81 81 0 0 0 6.81 6.81l3 26.71a99.4 99.4 0 0 0 24.3 10l21-16.77a82 82 0 0 0 9.64 0l21 16.78a99 99 0 0 0 24.29-10.07l3-26.7a81 81 0 0 0 6.81-6.81l26.71-3a99.4 99.4 0 0 0 10-24.3l-16.77-21a82 82 0 0 0-.08-9.64M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.6 107.6 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.3 107.3 0 0 0-26.25-10.86a8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.7 107.7 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.6 107.6 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.7 107.7 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.2 107.2 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.7 107.7 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06Zm-16.1-6.5a74 74 0 0 1 0 8.68a8 8 0 0 0 1.74 5.48l14.19 17.73a91.6 91.6 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64a74 74 0 0 1-6.14 6.14a8 8 0 0 0-2.64 5.1l-2.51 22.58a91.3 91.3 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a74 74 0 0 1-8.68 0a8.06 8.06 0 0 0-5.48 1.74l-17.78 14.2a91.6 91.6 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1a74 74 0 0 1-6.14-6.14a8 8 0 0 0-5.1-2.64l-22.58-2.52a91.3 91.3 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48a74 74 0 0 1 0-8.68a8 8 0 0 0-1.74-5.48L40.2 100.45a91.6 91.6 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64a74 74 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.3 91.3 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74a74 74 0 0 1 8.68 0a8.06 8.06 0 0 0 5.48-1.74l17.77-14.19a91.6 91.6 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1a74 74 0 0 1 6.14 6.14a8 8 0 0 0 5.1 2.64l22.58 2.51a91.3 91.3 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z"></svg:path></svg:g>`,
})
export class PhGearDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineDuotoneIcon],svg[ph-gear-fine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M232 120h-16.37a87.3 87.3 0 0 0-7.74-28.88l14.18-8.19a8 8 0 0 0-8-13.86l-14.2 8.2a88.8 88.8 0 0 0-21.14-21.14l8.2-14.2a8 8 0 0 0-13.86-8l-8.19 14.18A87.3 87.3 0 0 0 136 40.37V24a8 8 0 0 0-16 0v16.37a87.3 87.3 0 0 0-28.88 7.74l-8.19-14.18a8 8 0 0 0-13.86 8l8.2 14.2a88.8 88.8 0 0 0-21.14 21.14l-14.2-8.2a8 8 0 0 0-8 13.86l14.18 8.19A87.3 87.3 0 0 0 40.37 120H24a8 8 0 0 0 0 16h16.37a87.3 87.3 0 0 0 7.74 28.88l-14.18 8.19a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l14.2-8.2a88.8 88.8 0 0 0 21.14 21.14l-8.2 14.2a8 8 0 0 0 13.86 8l8.19-14.18a87.3 87.3 0 0 0 28.88 7.74V232a8 8 0 0 0 16 0v-16.37a87.3 87.3 0 0 0 28.88-7.74l8.19 14.18a8 8 0 0 0 13.86-8l-8.2-14.2a88.8 88.8 0 0 0 21.14-21.14l14.2 8.2A8 8 0 0 0 225 184a8 8 0 0 0-2.92-10.93l-14.18-8.19a87.3 87.3 0 0 0 7.73-28.88H232a8 8 0 0 0 0-16M85.31 185.94a71.92 71.92 0 0 1 0-115.88L118.76 128ZM128 200a71.6 71.6 0 0 1-28.84-6l33.46-58h66.92A72.08 72.08 0 0 1 128 200m4.62-80L99.16 62.05a71.94 71.94 0 0 1 100.38 58Z"></svg:path></svg:g>`,
})
export class PhGearFineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixDuotoneIcon],svg[ph-gear-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m230.1 108.76l-31.85-18.14c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.6 104.6 0 0 0 162 32l-32 17.89h-4L94 32a104.6 104.6 0 0 0-34.11 19.25l-.16 36c-.7 1.12-1.37 2.26-2 3.41l-31.84 18.1a99.2 99.2 0 0 0 0 38.46l31.85 18.14c.64 1.16 1.31 2.29 2 3.41l.12 36A104.6 104.6 0 0 0 94 224l32-17.87h4L162 224a104.6 104.6 0 0 0 34.08-19.25l.16-36c.7-1.12 1.37-2.26 2-3.41l31.84-18.1a99.2 99.2 0 0 0 .02-38.48M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m109.94-52.79a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.9 111.9 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52m-15 34.91l-28.57 16.25a8 8 0 0 0-3 3c-.58 1-1.19 2.06-1.81 3.06a7.94 7.94 0 0 0-1.22 4.21l-.15 32.25a95.9 95.9 0 0 1-25.37 14.3L134 199.13a8 8 0 0 0-3.91-1h-3.83a8.1 8.1 0 0 0-4.1 1l-28.84 16.1A96 96 0 0 1 67.88 201l-.11-32.2a8 8 0 0 0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.1 8.1 0 0 0-3-3.06l-28.6-16.29a90.5 90.5 0 0 1 0-28.26l28.52-16.28a8 8 0 0 0 3-3c.58-1 1.19-2.06 1.81-3.06a7.94 7.94 0 0 0 1.22-4.21l.15-32.25a95.9 95.9 0 0 1 25.37-14.3L122 56.87a8 8 0 0 0 4.1 1h3.64a8 8 0 0 0 4.1-1l28.84-16.1A96 96 0 0 1 188.12 55l.11 32.2a8 8 0 0 0 1.22 4.22c.62 1 1.23 2 1.8 3.06a8.1 8.1 0 0 0 3 3.06l28.6 16.29a90.5 90.5 0 0 1 .05 28.29Z"></svg:path></svg:g>`,
})
export class PhGearSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleDuotoneIcon],svg[ph-gender-female-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 96a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M208 96a80 80 0 1 0-88 79.6V200H88a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16h-32v-24.4A80.11 80.11 0 0 0 208 96M64 96a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64"></svg:path></svg:g>`,
})
export class PhGenderFemaleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexDuotoneIcon],svg[ph-gender-intersex-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 112a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M208 24h-40a8 8 0 0 0 0 16h20.69l-25.15 25.15A64 64 0 1 0 112 175.48V192H88a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16h-24v-16.52a63.92 63.92 0 0 0 45.84-98L200 51.31V72a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-88 136a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhGenderIntersexDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleDuotoneIcon],svg[ph-gender-male-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M154.91 202.91a72 72 0 1 1 0-101.82a72 72 0 0 1 0 101.82" opacity=".2"></svg:path><svg:path d="M216 32h-48a8 8 0 0 0 0 16h28.69l-42.07 42.07a80 80 0 1 0 11.31 11.31L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-66.76 165.29a64 64 0 1 1 0-90.53a64.1 64.1 0 0 1 0 90.53"></svg:path></svg:g>`,
})
export class PhGenderMaleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterDuotoneIcon],svg[ph-gender-neuter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 104a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M208 104a80 80 0 1 0-88 79.6V232a8 8 0 0 0 16 0v-48.4a80.11 80.11 0 0 0 72-79.6m-80 64a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path></svg:g>`,
})
export class PhGenderNeuterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryDuotoneIcon],svg[ph-gender-nonbinary-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 168a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M136 96.46V62.13l27.88 16.73a8 8 0 1 0 8.24-13.72L143.55 48l28.57-17.14a8 8 0 0 0-8.24-13.72L128 38.67L92.12 17.14a8 8 0 0 0-8.24 13.72L112.45 48L83.88 65.14a8 8 0 0 0 8.24 13.72L120 62.13v34.33a72 72 0 1 0 16 0M128 224a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path></svg:g>`,
})
export class PhGenderNonbinaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderDuotoneIcon],svg[ph-gender-transgender-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M141.25 205.25a64 64 0 1 1 0-90.5a64 64 0 0 1 0 90.5" opacity=".2"></svg:path><svg:path d="M216 32h-48a8 8 0 0 0 0 16h28.69L168 76.69l-18.34-18.34a8 8 0 1 0-11.32 11.31L156.69 88l-15.76 15.76a71.94 71.94 0 1 0 11.32 11.31L168 99.33l18.34 18.34a8 8 0 0 0 11.32-11.31L179.31 88L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-80.4 167.63A56 56 0 1 1 152 160a56.08 56.08 0 0 1-16.4 39.63"></svg:path></svg:g>`,
})
export class PhGenderTransgenderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostDuotoneIcon],svg[ph-ghost-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 120v96l-29.33-24l-29.34 24L128 192l-29.33 24l-29.34-24L40 216v-96a88 88 0 0 1 176 0" opacity=".2"></svg:path><svg:path d="M112 116a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 16v96a8 8 0 0 1-13.07 6.19l-24.26-19.85l-24.27 19.85a8 8 0 0 1-10.13 0L128 202.34l-24.27 19.85a8 8 0 0 1-10.13 0l-24.27-19.85l-24.26 19.85A8 8 0 0 1 32 216v-96a96 96 0 0 1 192 0m-16 0a80 80 0 0 0-160 0v79.12l16.27-13.31a8 8 0 0 1 10.13 0l24.27 19.85l24.26-19.85a8 8 0 0 1 10.14 0l24.26 19.85l24.27-19.85a8 8 0 0 1 10.13 0L208 199.12Z"></svg:path></svg:g>`,
})
export class PhGhostDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifDuotoneIcon],svg[ph-gif-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M144 72v112a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m88-8h-56a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0v-48h40a8 8 0 0 0 0-16h-40V80h48a8 8 0 0 0 0-16M96 120H72a8 8 0 0 0 0 16h16v16a24 24 0 0 1-48 0v-48a24 24 0 0 1 24-24c11.19 0 21.61 7.74 24.25 18a8 8 0 0 0 15.5-4C99.27 76.62 82.56 64 64 64a40 40 0 0 0-40 40v48a40 40 0 0 0 80 0v-24a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhGifDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftDuotoneIcon],svg[ph-gift-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128v72a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-72Z" opacity=".2"></svg:path><svg:path d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a55 55 0 0 0-9 14.48a55 55 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m-67-35.49a13.7 13.7 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.7 13.7 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97m-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.7 13.7 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.7 13.7 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80z"></svg:path></svg:g>`,
})
export class PhGiftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchDuotoneIcon],svg[ph-git-branch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M232 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H96a23.8 23.8 0 0 0-8 1.38V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-17a8 8 0 0 1 8-8h88a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M64 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16M200 80a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitBranchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitDuotoneIcon],svg[ph-git-commit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhGitCommitDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffDuotoneIcon],svg[ph-git-diff-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m120 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M112 152a8 8 0 0 0-8 8v28.69L66.34 151a8 8 0 0 1-2.34-5.63V95a32 32 0 1 0-16 0v50.38a23.85 23.85 0 0 0 7 17L92.69 200H64a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8M40 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m168 97v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitDiffDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkDuotoneIcon],svg[ph-git-fork-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m104-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M224 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V95a32 32 0 1 0-16 0v17a24 24 0 0 0 24 24h40v25a32 32 0 1 0 16 0v-25h40a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M48 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m96 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48-112a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitForkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeDuotoneIcon],svg[ph-git-merge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 56a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M64 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 144a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitMergeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestDuotoneIcon],svg[ph-git-pull-request-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m104 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M104 64a32 32 0 1 0-40 31v66a32 32 0 1 0 16 0V95a32.06 32.06 0 0 0 24-31m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m120-31v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitPullRequestDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoDuotoneIcon],svg[ph-github-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104" opacity=".2"></svg:path><svg:path d="M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z"></svg:path></svg:g>`,
})
export class PhGithubLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoDuotoneIcon],svg[ph-gitlab-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M220.23 110.84L128 176l-92.23-65.16L53.5 43a3.93 3.93 0 0 1 7.5-.38L80.65 96h94.7L195 42.62a3.93 3.93 0 0 1 7.53.38Z" opacity=".2"></svg:path><svg:path d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61M58 57.5l15.13 41.26a8 8 0 0 0 7.51 5.24h94.72a8 8 0 0 0 7.51-5.24L198 57.5l13.07 50L128 166.21L44.9 107.5Zm-17.32 66.61L114.13 176l-20.72 14.65L57.09 165a41.06 41.06 0 0 1-16.41-40.89m87.32 91l-20.73-14.65L128 185.8l20.73 14.64ZM198.91 165l-36.32 25.66L141.87 176l73.45-51.9a41.06 41.06 0 0 1-16.41 40.9"></svg:path></svg:g>`,
})
export class PhGitlabLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleDuotoneIcon],svg[ph-gitlab-logo-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m203.52 171.52l-73.26 51.76a3.91 3.91 0 0 1-4.52 0l-73.26-51.76a49 49 0 0 1-18.87-52.4L53.5 43a3.93 3.93 0 0 1 7.5-.38L80.65 96h94.7L195 42.62a3.93 3.93 0 0 1 7.53.38l19.89 76.12a49 49 0 0 1-18.9 52.4" opacity=".2"></svg:path><svg:path d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61M198.91 165L128 215.09L57.09 165a41.1 41.1 0 0 1-15.75-43.84L58 57.5l15.13 41.26a8 8 0 0 0 7.51 5.24h94.72a8 8 0 0 0 7.51-5.24L198 57.5l16.63 63.65A41.1 41.1 0 0 1 198.91 165"></svg:path></svg:g>`,
})
export class PhGitlabLogoSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeDuotoneIcon],svg[ph-globe-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"></svg:path></svg:g>`,
})
export class PhGlobeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastDuotoneIcon],svg[ph-globe-hemisphere-east-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215 168.71a96.4 96.4 0 0 1-30.54 37l-9.36-9.37a8 8 0 0 0-3.63-2.09L150 188.59a8 8 0 0 1-5.88-8.9l2.38-16.2a8 8 0 0 1 4.84-6.22l30.46-12.66a8 8 0 0 1 8.47 1.49ZM159.89 105l22.17-25.8A8 8 0 0 0 184 74V50A96 96 0 0 0 50.49 184.65l9.92-6.52a8 8 0 0 0 3.59-6.64l.21-36.23a8.06 8.06 0 0 1 1.35-4.41l20.94-31.3a8 8 0 0 1 11.34-2l19.81 13a8.06 8.06 0 0 0 5.77 1.45l31.46-4.26a8 8 0 0 0 5.01-2.74" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a87.5 87.5 0 0 1 48 14.28V74l-22.17 25.74l-31.47 4.26l-.31-.22l-19.67-12.86a16 16 0 0 0-22.51 4.18l-20.94 31.3a16 16 0 0 0-2.7 8.81L56 171.44l-3.27 2.15A88 88 0 0 1 128 40M62.29 186.47l2.52-1.65A16 16 0 0 0 72 171.53l.21-36.23L93.17 104a4 4 0 0 0 .32.22l19.67 12.87a15.94 15.94 0 0 0 11.35 2.77l31.49-4.27a16 16 0 0 0 10-5.41l22.17-25.76A16 16 0 0 0 192 74v-6.33A87.87 87.87 0 0 1 211.77 155l-16.14-14.76a16 16 0 0 0-16.93-3l-30.46 12.65a16.08 16.08 0 0 0-9.68 12.45l-2.39 16.19a16 16 0 0 0 11.77 17.81L169.4 202l2.36 2.37a87.88 87.88 0 0 1-109.47-17.9M185 195l-4.3-4.31a16 16 0 0 0-7.26-4.18L152 180.85l2.39-16.19L184.84 152L205 170.48A88.4 88.4 0 0 1 185 195"></svg:path></svg:g>`,
})
export class PhGlobeHemisphereEastDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestDuotoneIcon],svg[ph-globe-hemisphere-west-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M213.09 172.48a96 96 0 0 1-80.41 51.41l3.17-16.44a8 8 0 0 0-2-6.95l-19.74-20.33a8 8 0 0 1-1.44-8.69l13.7-30.74a8 8 0 0 1 8.38-4.67l22.82 3.08a8.1 8.1 0 0 1 3.12 1.11ZM116.71 95L129 88.24a7.5 7.5 0 0 0 1.5-1.07l26.91-24.33A8 8 0 0 0 159 53l-10.5-18.81A96.6 96.6 0 0 0 128 32a95.6 95.6 0 0 0-60.22 21.23L56 81.08a8 8 0 0 0-.12 5.92l11.5 30.67a8 8 0 0 0 5.81 5l2.69.58L89.2 100a8 8 0 0 1 6.94-4h16.71a7.9 7.9 0 0 0 3.86-1" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.6 87.6 0 0 1-6.4 32.94l-44.7-27.49a15.9 15.9 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.6 16.6 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128m-72.69-86.66L152 56.9l-26.91 24.34L112.85 88H96.14a16 16 0 0 0-13.88 8l-8.73 15.23l-10.15-27.04l10.94-25.87a87.87 87.87 0 0 1 69-17ZM40 128a87.5 87.5 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61l3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14l19.61 20.2l-1.94 10A88.11 88.11 0 0 1 40 128m102.58 86.78l1.13-5.81a16.09 16.09 0 0 0-4-13.9a2 2 0 0 1-.14-.14L120 174.74L133.7 144l22.82 3.08l45.72 28.12a88.18 88.18 0 0 1-59.66 39.58"></svg:path></svg:g>`,
})
export class PhGlobeHemisphereWestDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleDuotoneIcon],svg[ph-globe-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m87.62 96h-39.83c-1.79-36.51-15.85-62.33-27.38-77.6a88.19 88.19 0 0 1 67.22 77.6ZM96.23 136h63.54c-2.31 41.61-22.23 67.11-31.77 77c-9.55-9.9-29.46-35.4-31.77-77m0-16c2.31-41.61 22.23-67.11 31.77-77c9.55 9.93 29.46 35.43 31.77 77Zm11.36-77.6C96.06 57.67 82 83.49 80.21 120H40.37a88.19 88.19 0 0 1 67.22-77.6M40.37 136h39.84c1.82 36.51 15.85 62.33 27.38 77.6A88.19 88.19 0 0 1 40.37 136m108 77.6c11.53-15.27 25.56-41.09 27.38-77.6h39.84a88.19 88.19 0 0 1-67.18 77.6Z"></svg:path></svg:g>`,
})
export class PhGlobeSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXDuotoneIcon],svg[ph-globe-simple-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M221.66 173.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32M232 128a8 8 0 0 1-8 8H96.25c3 53.73 35.33 80.6 36.77 81.77A8 8 0 0 1 128 232a104 104 0 1 1 104-104m-83.59-85.6C159.94 57.67 174 83.49 175.79 120h39.84a88.19 88.19 0 0 0-67.22-77.6M128 43c-9.54 9.92-29.46 35.42-31.77 77h63.54c-2.31-41.6-22.22-67.1-31.77-77m-87.63 77h39.84C82 83.49 96.06 57.67 107.59 42.4A88.19 88.19 0 0 0 40.37 120m39.84 16H40.37a88.19 88.19 0 0 0 67.22 77.6C96.06 198.33 82 172.51 80.21 136"></svg:path></svg:g>`,
})
export class PhGlobeSimpleXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandDuotoneIcon],svg[ph-globe-stand-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M136 184a80 80 0 1 0-80-80a80.09 80.09 0 0 0 80 80m0-144a64 64 0 1 1-64 64a64.07 64.07 0 0 1 64-64m77.77 133.5a8 8 0 0 1-.23 11.32a111.2 111.2 0 0 1-69.54 30.9V232h24a8 8 0 0 1 0 16h-64a8 8 0 0 1 0-16h24v-16.29A112 112 0 0 1 55.18 26.46a8 8 0 1 1 11.54 11.08a96 96 0 0 0 135.74 135.74a8 8 0 0 1 11.31.22"></svg:path></svg:g>`,
})
export class PhGlobeStandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXDuotoneIcon],svg[ph-globe-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0 0 208a8 8 0 0 0 5-14.23c-1.12-.91-20.88-17.32-31.06-49.77h26a8 8 0 0 0 0-16H98.08a140.2 140.2 0 0 1 0-48h59.88a138 138 0 0 1 2.04 24a8 8 0 0 0 16 0a155 155 0 0 0-1.84-24h38.51a87.6 87.6 0 0 1 3.33 24a8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 24m-20.41 18.4A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6m0 171.2a88.29 88.29 0 0 1-58-45.6h35.7a135.3 135.3 0 0 0 22.3 45.6M81.84 152H43.33a88.15 88.15 0 0 1 0-48h38.51a157.4 157.4 0 0 0 0 48M102 88a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45Zm68.75 0a135.3 135.3 0 0 0-22.3-45.6a88.29 88.29 0 0 1 58 45.6Zm50.95 85.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhGlobeXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesDuotoneIcon],svg[ph-goggles-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 152c0 17.67-30.33 32-48 32a32 32 0 0 1 0-64c17.67 0 48 14.33 48 32M72 120c-17.67 0-48 14.33-48 32s30.33 32 48 32a32 32 0 0 0 0-64" opacity=".2"></svg:path><svg:path d="M256 136a72.08 72.08 0 0 0-72-72H72a72.08 72.08 0 0 0-72 72a24.06 24.06 0 0 0 17 23c6.06 20.37 37.63 33 55 33a40.07 40.07 0 0 0 39.2-32h33.6a40.07 40.07 0 0 0 39.2 32c17.33 0 48.9-12.66 55-33a24.06 24.06 0 0 0 17-23M45.45 167.74C37 162.76 32 156.88 32 152s4.91-10.61 13.13-15.55l37.21 37.2A23.74 23.74 0 0 1 72 176c-7.53 0-18.2-3.32-26.55-8.26m48.2-5.4L61 129.7a42.7 42.7 0 0 1 11-1.7a24 24 0 0 1 24 24a23.74 23.74 0 0 1-2.35 10.34M160 152a23.88 23.88 0 0 1 5.46-15.22L201 172.32c-6 2.3-12.15 3.68-17 3.68a24 24 0 0 1-24-24m55.63 12.31l-35.92-35.92A24 24 0 0 1 184 128c7.53 0 18.2 3.32 26.55 8.26S224 147.12 224 152c0 3.79-3 8.2-8.37 12.31m22.05-22.69C229.34 123.25 200.34 112 184 112a40.07 40.07 0 0 0-39.2 32h-33.6A40.07 40.07 0 0 0 72 112c-16.34 0-45.34 11.25-53.68 29.62A8 8 0 0 1 16 136a56.06 56.06 0 0 1 56-56h112a56.06 56.06 0 0 1 56 56a8 8 0 0 1-2.32 5.62"></svg:path></svg:g>`,
})
export class PhGogglesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfDuotoneIcon],svg[ph-golf-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 96a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M176 100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 20a12 12 0 1 0 12 12a12 12 0 0 0-12-12m84-24a88 88 0 1 1-88-88a88.1 88.1 0 0 1 88 88m-16 0a72 72 0 1 0-72 72a72.08 72.08 0 0 0 72-72m-34.86 96.53C152 197.56 139.85 200 128 200s-24-2.44-37.14-7.47a8 8 0 1 0-5.72 14.94a126 126 0 0 0 34.86 8.21V248a8 8 0 0 0 16 0v-32.32a126 126 0 0 0 34.86-8.21a8 8 0 1 0-5.72-14.94"></svg:path></svg:g>`,
})
export class PhGolfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoDuotoneIcon],svg[ph-goodreads-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 88v24a56 56 0 0 1-112 0V88a56 56 0 0 1 112 0" opacity=".2"></svg:path><svg:path d="M184 24a8 8 0 0 0-8 8v13.74A64 64 0 0 0 64 88v24a64 64 0 0 0 112 42.26V168a48.05 48.05 0 0 1-48 48c-16.45 0-32.72-8.08-41.44-20.58a8 8 0 1 0-13.12 9.16C85.06 221.24 106.48 232 128 232a64.07 64.07 0 0 0 64-64V32a8 8 0 0 0-8-8m-56 136a48.05 48.05 0 0 1-48-48V88a48 48 0 0 1 96 0v24a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhGoodreadsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoDuotoneIcon],svg[ph-google-cardboard-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56H32a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h64l26.34-26.34a8 8 0 0 1 11.32 0L160 200h64a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M80 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a8 8 0 0 0 5.66-2.34L128 179.31l26.34 26.35A8 8 0 0 0 160 208h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-60.69l-24-24a16 16 0 0 0-22.62 0l-24 24H32V64h192ZM80 160a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m96 48a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path></svg:g>`,
})
export class PhGoogleCardboardLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoDuotoneIcon],svg[ph-google-chrome-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 128a40 40 0 1 1-40-40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 73.72 40H128a48.08 48.08 0 0 0-45.6 33L59.32 73A87.89 87.89 0 0 1 128 40m32 88a32 32 0 1 1-32-32a32 32 0 0 1 32 32m-45.28 87A88 88 0 0 1 49.56 88.14L86.43 152c.06.1.13.19.19.28a48 48 0 0 0 51.2 22.72Zm18 .87L169.57 152c.08-.14.14-.28.22-.42a47.88 47.88 0 0 0-6-55.58H210a88 88 0 0 1-77.29 119.87Z"></svg:path></svg:g>`,
})
export class PhGoogleChromeLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoDuotoneIcon],svg[ph-google-drive-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 152h64l-32.88 54.8a7.9 7.9 0 0 1-2.74-2.8l-27.33-47.85A8 8 0 0 1 24 152m144 0l32.88 54.8a7.9 7.9 0 0 0 2.74-2.83l27.32-47.82A8 8 0 0 0 232 152ZM100.43 32a8.06 8.06 0 0 0-3.84 1L128 85.33L159.41 33a8.1 8.1 0 0 0-3.85-1Z" opacity=".2"></svg:path><svg:path d="M237.6 143.78L169.13 31.52A15.91 15.91 0 0 0 155.56 24h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 143.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 216h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 144h-46.48l-35.19-58.67l22.75-37.92Zm-116.87 0L128 100.88L153.87 144Zm61.34 16l24 40H68.53l24-40ZM128 69.78L110.12 40l35.78-.05ZM95.91 47.41l22.76 37.92L83.47 144H37ZM36.54 160h37.33l-19.15 31.92Zm164.74 31.93L182.12 160h37.41Z"></svg:path></svg:g>`,
})
export class PhGoogleDriveLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoDuotoneIcon],svg[ph-google-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M224 128a96 96 0 1 1-21.95-61.09a8 8 0 1 1-12.33 10.18A80 80 0 1 0 207.6 136H128a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhGoogleLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoDuotoneIcon],svg[ph-google-photos-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 88a63.7 63.7 0 0 1-14 40h-50V24a64 64 0 0 1 64 64M64 168a64 64 0 0 0 64 64V128H78a63.7 63.7 0 0 0-14 40" opacity=".2"></svg:path><svg:path d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8M120 223.43A56.09 56.09 0 0 1 72 168a55.3 55.3 0 0 1 10-32h38ZM120 120H32.57A56.09 56.09 0 0 1 88 72a55.3 55.3 0 0 1 32 10Zm16-87.43A56.09 56.09 0 0 1 184 88a55.3 55.3 0 0 1-10 32h-38ZM168 184a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"></svg:path></svg:g>`,
})
export class PhGooglePhotosLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoDuotoneIcon],svg[ph-google-play-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128L58.32 230a7.7 7.7 0 0 1-2.32-5.55V31.55A7.7 7.7 0 0 1 58.32 26Z" opacity=".2"></svg:path><svg:path d="M239.82 114.18L72 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 48 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67a16 16 0 0 0 16.12 0l167.78-96a15.76 15.76 0 0 0 0-27.64ZM64 212.67V43.33L148.69 128Zm96-73.36l18.92 18.92l-88.5 50.66ZM90.4 47.1l88.53 50.67L160 116.69ZM193.31 150l-22-22l22-22l38.43 22Z"></svg:path></svg:g>`,
})
export class PhGooglePlayLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoDuotoneIcon],svg[ph-google-podcasts-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 144l-96 96l-96-96v-32l96-96l96 96z" opacity=".2"></svg:path><svg:path d="M136 16v32a8 8 0 0 1-16 0V16a8 8 0 0 1 16 0m40 40a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-48 144a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0-120a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M80 56a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m96 72a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8M32 104a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m48 48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m144-48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhGooglePodcastsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsDuotoneIcon],svg[ph-gps-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhGpsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixDuotoneIcon],svg[ph-gps-fix-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 48a80 80 0 1 0 80 80a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m0-112a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhGpsFixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashDuotoneIcon],svg[ph-gps-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M248 128a8 8 0 0 1-8 8h-24.36a87 87 0 0 1-7.33 28a8 8 0 0 1-7.3 4.73a7.9 7.9 0 0 1-3.27-.71a8 8 0 0 1-4-10.57a72.06 72.06 0 0 0-88.81-97.69a8 8 0 1 1-5.13-15.15a87.2 87.2 0 0 1 20.2-4.24V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8m-34.08 82.62a8 8 0 1 1-11.84 10.76L181 198.23a87.7 87.7 0 0 1-45 17.4V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37a88.3 88.3 0 0 1 22.77-51.46L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-43.72-24.3L74 80.45a72 72 0 0 0 96.2 105.87"></svg:path></svg:g>`,
})
export class PhGpsSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientDuotoneIcon],svg[ph-gradient-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v120H32V64Z" opacity=".2"></svg:path><svg:path d="M24 104a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200-8h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16M72 136H32a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m152 0h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m-128 8a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8m-40 32H32a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0H88a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M32 72h192a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhGradientDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapDuotoneIcon],svg[ph-graduation-cap-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 113.07v53.22a8 8 0 0 1-2 5.31c-11.3 12.59-38.9 36.4-86 36.4s-74.68-23.81-86-36.4a8 8 0 0 1-2-5.31v-53.22L128 160Z" opacity=".2"></svg:path><svg:path d="m251.76 88.94l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76V240a8 8 0 0 0 16 0v-40.49a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12M128 200c-43.27 0-68.72-21.14-80-33.71V126.4l76.24 40.66a8 8 0 0 0 7.52 0L176 143.47v46.34c-12.6 5.88-28.48 10.19-48 10.19m80-33.75a97.8 97.8 0 0 1-16 14.25v-45.57l16-8.53Zm-20-47.31l-.22-.13l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l-43 22.93L25 96l103-54.93L231 96Z"></svg:path></svg:g>`,
})
export class PhGraduationCapDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsDuotoneIcon],svg[ph-grains-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v56a80 80 0 0 0-80 80a80 80 0 0 0-80-80V64a79.7 79.7 0 0 1 36.05 8.59C95.62 40.19 128 24 128 24s32.39 16.19 44 48.58A79.6 79.6 0 0 1 208 64" opacity=".2"></svg:path><svg:path d="M208 56a87.5 87.5 0 0 0-31.85 6c-14.32-29.7-43.25-44.46-44.57-45.13a8 8 0 0 0-7.16 0c-1.33.67-30.25 15.43-44.57 45.13A87.5 87.5 0 0 0 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 176 0V64a8 8 0 0 0-8-8m-88 159.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200Zm0-66.1a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144ZM94.15 69.11c9.22-19.22 26.43-31.35 33.85-35.91c7.44 4.54 24.6 16.6 33.84 35.91A88.5 88.5 0 0 0 128 107.36a88.5 88.5 0 0 0-33.85-38.25M200 144a72.1 72.1 0 0 1-64 71.56V200a72.1 72.1 0 0 1 64-71.56Zm0-31.63a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z"></svg:path></svg:g>`,
})
export class PhGrainsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashDuotoneIcon],svg[ph-grains-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v56a80 80 0 0 0-80 80a80 80 0 0 0-80-80V64a79.7 79.7 0 0 1 36.05 8.59C95.62 40.19 128 24 128 24s32.39 16.19 44 48.58A79.6 79.6 0 0 1 208 64" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l9.73 10.71Q49.91 56 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 149.21 63.22l12.87 14.16a8 8 0 1 0 11.84-10.76ZM120 215.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200ZM56 112.37V72.44a71.3 71.3 0 0 1 13.18 2.75L136.29 149a88 88 0 0 0-8.29 14.37a88.16 88.16 0 0 0-72-51m80 103.19V200a72.1 72.1 0 0 1 11.36-38.81l31.08 34.19A71.85 71.85 0 0 1 136 215.56M216 64v80a88 88 0 0 1-3.15 23.4a8 8 0 0 1-7.71 5.88A7.8 7.8 0 0 1 203 173a8 8 0 0 1-5.59-9.83A72.6 72.6 0 0 0 200 144v-15.57a71.1 71.1 0 0 0-24.56 7.33a8 8 0 1 1-7.24-14.26a86.6 86.6 0 0 1 31.8-9.14V72.45a72.33 72.33 0 0 0-50.35 29.36a8 8 0 1 1-13-9.39a88.2 88.2 0 0 1 25.16-23.3C152.62 49.8 135.45 37.74 128 33.2a99.8 99.8 0 0 0-23.4 19.94a8 8 0 0 1-12.21-10.33a112.3 112.3 0 0 1 32-26a8 8 0 0 1 7.16 0c1.32.66 30.27 15.43 44.59 45.15A87.9 87.9 0 0 1 208 56a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhGrainsSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphDuotoneIcon],svg[ph-graph-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M200 152a31.84 31.84 0 0 0-19.53 6.68l-23.11-18A31.65 31.65 0 0 0 160 128c0-.74 0-1.48-.08-2.21l13.23-4.41A32 32 0 1 0 168 104c0 .74 0 1.48.08 2.21l-13.23 4.41A32 32 0 0 0 128 96a32.6 32.6 0 0 0-5.27.44L115.89 81A32 32 0 1 0 96 88a32.6 32.6 0 0 0 5.27-.44l6.84 15.4a31.92 31.92 0 0 0-8.57 39.64l-25.71 22.84a32.06 32.06 0 1 0 10.63 12l25.71-22.84a31.91 31.91 0 0 0 37.36-1.24l23.11 18A31.65 31.65 0 0 0 168 184a32 32 0 1 0 32-32m0-64a16 16 0 1 1-16 16a16 16 0 0 1 16-16M80 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16M56 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m56-80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m88 72a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGraphDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardDuotoneIcon],svg[ph-graphics-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56H16v128h216a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M80 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M232 48H16a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h112a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 128H24V64h208Zm-56-16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 176 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 176 96a24 24 0 0 1 24 24M80 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 80 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 80 96a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhGraphicsCardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanDuotoneIcon],svg[ph-greater-than-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128L64 200V56Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-4.58 7.23l-152 72a8 8 0 1 1-6.85-14.46L197.31 128L60.58 63.23a8 8 0 1 1 6.85-14.46l152 72A8 8 0 0 1 224 128"></svg:path></svg:g>`,
})
export class PhGreaterThanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualDuotoneIcon],svg[ph-greater-than-or-equal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104L56 160V48Z" opacity=".2"></svg:path><svg:path d="M53.24 152.49L184.86 104L53.24 55.51a8 8 0 1 1 5.53-15l152 56a8 8 0 0 1 0 15l-152 56A8.1 8.1 0 0 1 56 168a8 8 0 0 1-2.76-15.51M208 192H56a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhGreaterThanOrEqualDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourDuotoneIcon],svg[ph-grid-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 56v144a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 80h-64V56h64Zm-80-64v64H56V56Zm-64 80h64v64H56Zm144 64h-64v-64h64z"></svg:path></svg:g>`,
})
export class PhGridFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineDuotoneIcon],svg[ph-grid-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-112 96v-32h48v32Zm48 16v32h-48v-32ZM40 112h48v32H40Zm64-16V64h48v32Zm64 16h48v32h-48Zm48-16h-48V64h48ZM88 64v32H40V64Zm-48 96h48v32H40Zm176 32h-48v-32h48z"></svg:path></svg:g>`,
})
export class PhGridNineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarDuotoneIcon],svg[ph-guitar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M155.2 100.8c-23-23-55.57-27.63-72.8-10.4a34.2 34.2 0 0 0-7.61 11.66a16.23 16.23 0 0 1-14.72 10C48 112.44 37 116.61 28.8 124.8C7.6 146 13.33 186.12 41.6 214.4s68.39 34 89.6 12.8c8.19-8.2 12.36-19.2 12.8-31.27a16.23 16.23 0 0 1 10-14.72a34.2 34.2 0 0 0 11.66-7.61c17.17-17.23 12.51-49.82-10.46-72.8M112 168a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="m249.66 46.34l-40-40a8 8 0 0 0-11.31 11.32l2.34 2.34l-60.17 60.16c-22.79-11.86-48.31-10.87-63.77 4.58a42.3 42.3 0 0 0-9.39 14.37a8.24 8.24 0 0 1-7.55 4.89c-14.59.49-27.26 5.72-36.65 15.11C11.08 131.22 6 148.6 8.74 168.07C11.4 186.7 21.07 205.15 36 220s33.34 24.56 52 27.22a71 71 0 0 0 10.1.78c15.32 0 28.83-5.23 38.76-15.16c9.39-9.39 14.62-22.06 15.11-36.65a8.24 8.24 0 0 1 4.92-7.55a42.1 42.1 0 0 0 14.37-9.39c15.45-15.46 16.44-41 4.58-63.77L236 55.31l2.34 2.34a8 8 0 1 0 11.32-11.31M160 167.93a26.1 26.1 0 0 1-8.95 5.83a24.24 24.24 0 0 0-15 21.89c-.36 10.46-4 19.41-10.43 25.88c-8.44 8.43-21 11.95-35.36 9.89c-15.26-2.17-30.53-10.23-42.99-22.69S26.75 181 24.58 165.81c-2-14.37 1.46-26.92 9.89-35.36C40.94 124 49.89 120.37 60.35 120a24.22 24.22 0 0 0 21.89-15a26.1 26.1 0 0 1 5.83-9c5.49-5.49 13-8.13 21.38-8.13a49.4 49.4 0 0 1 19.13 4.19l-20.08 20.13a32 32 0 1 0 35.31 35.31l20.08-20.08c6.52 15.29 5.58 30.99-3.89 40.51m-10.4-61.48a73 73 0 0 1 5.93 6.75l-15.42 15.42a32.2 32.2 0 0 0-12.68-12.68l15.42-15.43a73 73 0 0 1 6.7 5.94ZM112 128a16 16 0 0 1 16 16a16 16 0 1 1-16-16m48.85-32.85a87 87 0 0 0-6.68-6L176 67.31L188.69 80l-21.83 21.82a87 87 0 0 0-6-6.68ZM200 68.68L187.32 56L212 31.31L224.69 44ZM93.66 194.33a8 8 0 0 1-11.31 11.32l-32-32a8 8 0 0 1 11.32-11.31Z"></svg:path></svg:g>`,
})
export class PhGuitarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerDuotoneIcon],svg[ph-hair-dryer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 32L30.68 54.89A8 8 0 0 0 24 62.78v50.44a8 8 0 0 0 6.68 7.89L168 144a56 56 0 0 0 0-112m0 80a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M200 88a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-32 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m9.42 102.62L209 137.07A64 64 0 0 0 168 24a8.4 8.4 0 0 0-1.32.11L29.37 47A16 16 0 0 0 16 62.78v50.44A16 16 0 0 0 29.37 129L128 145.44V200a16 16 0 0 0 16 16a40 40 0 0 0 40 40h16a8 8 0 0 0 0-16h-16a24 24 0 0 1-24-24h2.85a16 16 0 0 0 14.57-9.38M32 62.78L168.64 40a48 48 0 0 1 0 96L32 113.23Zm134.68 89.11a8.4 8.4 0 0 0 1.32.11a63.9 63.9 0 0 0 17.82-2.54l-23 50.54H144v-51.89Z"></svg:path></svg:g>`,
})
export class PhHairDryerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerDuotoneIcon],svg[ph-hamburger-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m188 176l20-7.27V184a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32v-16.73L68 160l40 16l40-16Zm27.82-89.72C209.32 55.55 172.48 32 128 32S46.68 55.55 40.18 86.28A8 8 0 0 0 48.07 96h159.86a8 8 0 0 0 7.89-9.72" opacity=".2"></svg:path><svg:path d="M48.07 104h159.86a16 16 0 0 0 15.72-19.38C216.22 49.5 176 24 128 24S39.78 49.5 32.35 84.62A16 16 0 0 0 48.07 104M128 40c39.82 0 74.21 20.61 79.93 48H48.07l-.07-.07C53.79 60.61 88.18 40 128 40m101.26 112.48l-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM200 184a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24v-11.12l11.87-4.32L105 183.43a8 8 0 0 0 5.94 0l37-14.81l37 14.81a8 8 0 0 0 5.7.09l9.27-3.37ZM16 128a8 8 0 0 1 8-8h208a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhHamburgerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerDuotoneIcon],svg[ph-hammer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M245.66 129L217 157.66a8 8 0 0 1-11.3 0L168.1 120l-28 28l-32-32l28-28L80 31.78a87.81 87.81 0 0 1 98.31 18l67.35 67.89a8 8 0 0 1 0 11.33" opacity=".2"></svg:path><svg:path d="m251.34 112l-67.46-67.92a96.1 96.1 0 0 0-135.77 0l-.09.09L34.25 58.4a8 8 0 0 0 11.49 11.13l13.73-14.18a80 80 0 0 1 18.71-13.9L124.68 88l-96 96a16 16 0 0 0 0 22.63l20.69 20.69a16 16 0 0 0 22.63 0l96-96l14.34 14.34L200 163.3a16 16 0 0 0 22.63 0l28.69-28.69a16 16 0 0 0 .02-22.61M60.68 216L40 195.31l68-68L128.68 148Zm101.66-101.68L140 136.67L119.31 116l22.35-22.35a8 8 0 0 0 0-11.32L94.32 35a80 80 0 0 1 78.23 20.41l44.22 44.51L188 128.66l-14.34-14.34a8 8 0 0 0-11.32 0m49 37.66l-12-12L228 111.25l12 12Z"></svg:path></svg:g>`,
})
export class PhHammerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownDuotoneIcon],svg[ph-hand-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 152v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.4 24.4 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Zm-65.09-90.55a8 8 0 0 1 11.32-11.32L184 84.69V24a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhHandArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpDuotoneIcon],svg[ph-hand-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 152v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7.4 7.4 0 0 0 1.2-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM154.34 61.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L200 43.31V104a8 8 0 0 1-16 0V43.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path></svg:g>`,
})
export class PhHandArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsDuotoneIcon],svg[ph-hand-coins-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 152h32v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8m188-96a28 28 0 0 0-12 2.71a28 28 0 1 0-16 26.58A28 28 0 1 0 204 56" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM164 96a36 36 0 0 0 5.9-.48a36 36 0 1 0 28.22-47A36 36 0 1 0 164 96m60-12a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-60-44a20 20 0 0 1 19.25 14.61a36 36 0 0 0-15 24.93A20.4 20.4 0 0 1 164 80a20 20 0 0 1 0-40"></svg:path></svg:g>`,
})
export class PhHandCoinsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositDuotoneIcon],svg[ph-hand-deposit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 96v106.31L173.32 186a20 20 0 0 0-36.9 14H56V96a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M128 35.31V128a8 8 0 0 1-16 0V35.31L93.66 53.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32Zm64 88.31V96a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v80.4a28 28 0 0 0-44.25 33.6l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03M80 80H64a16 16 0 0 0-16 16v104a8 8 0 0 0 16 0V96h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhHandDepositDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDuotoneIcon],svg[ph-hand-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 76v76a80 80 0 0 1-80 80c-44.18 0-60.75-21.28-93.32-90a20 20 0 0 1 34.64-20L88 152V60a20 20 0 0 1 40 0V44a20 20 0 0 1 40 0v32a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M188 48a27.75 27.75 0 0 0-12 2.71V44a28 28 0 0 0-54.65-8.6A28 28 0 0 0 80 60v64l-3.82-6.13a28 28 0 0 0-48.6 27.82c16 33.77 28.93 57.72 43.72 72.69C86.24 233.54 103.2 240 128 240a88.1 88.1 0 0 0 88-88V76a28 28 0 0 0-28-28m12 104a72.08 72.08 0 0 1-72 72c-20.38 0-33.51-4.88-45.33-16.85C69.44 193.74 57.26 171 41.9 138.58a6 6 0 0 0-.3-.58a12 12 0 0 1 20.79-12a2 2 0 0 0 .14.23l18.67 30A8 8 0 0 0 96 152V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v76a8 8 0 0 0 16 0V76a12 12 0 0 1 24 0Z"></svg:path></svg:g>`,
})
export class PhHandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeDuotoneIcon],svg[ph-hand-eye-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M188 96a20 20 0 0 0-20 20V60a20 20 0 0 0-40 0V44a20 20 0 0 0-40 0v32a20 20 0 0 0-40 0v76a80 80 0 0 0 160 0v-36a20 20 0 0 0-20-20m-60 104c-32 0-48-32-48-32s16-32 48-32s48 32 48 32s-16 32-48 32" opacity=".2"></svg:path><svg:path d="M188 88a27.75 27.75 0 0 0-12 2.71V60a28 28 0 0 0-41.36-24.6A28 28 0 0 0 80 44v6.71A27.75 27.75 0 0 0 68 48a28 28 0 0 0-28 28v76a88 88 0 0 0 176 0v-36a28 28 0 0 0-28-28m12 64a72 72 0 0 1-144 0V76a12 12 0 0 1 24 0v36a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Zm-60 16a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-40c-36.52 0-54.41 34.94-55.16 36.42a8 8 0 0 0 0 7.16C73.59 173.06 91.48 208 128 208s54.41-34.94 55.16-36.42a8 8 0 0 0 0-7.16C182.41 162.94 164.52 128 128 128m0 64c-20.63 0-33.8-16.52-38.7-24c4.9-7.48 18.07-24 38.7-24s33.81 16.53 38.7 24c-4.9 7.48-18.07 24-38.7 24"></svg:path></svg:g>`,
})
export class PhHandEyeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistDuotoneIcon],svg[ph-hand-fist-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 112v16a96 96 0 0 1-192 0V88a24 24 0 0 1 48 0V64a24 24 0 0 1 48 0a24 24 0 0 1 48 0v24h24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M200 80h-16V64a32 32 0 0 0-56-21.13a32 32 0 0 0-55.79 17.55A32 32 0 0 0 24 88v40a104 104 0 0 0 208 0v-16a32 32 0 0 0-32-32m-48-32a16 16 0 0 1 16 16v16h-32V64a16 16 0 0 1 16-16M88 64a16 16 0 0 1 32 0v40a16 16 0 0 1-32 0ZM40 88a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0Zm176 40a88 88 0 0 1-175.92 3.75A31.93 31.93 0 0 0 80 125.13a31.93 31.93 0 0 0 44.58 3.35a32.2 32.2 0 0 0 11.8 11.44A47.88 47.88 0 0 0 120 176a8 8 0 0 0 16 0a32 32 0 0 1 32-32a8 8 0 0 0 0-16h-16a16 16 0 0 1-16-16V96h64a16 16 0 0 1 16 16Z"></svg:path></svg:g>`,
})
export class PhHandFistDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingDuotoneIcon],svg[ph-hand-grabbing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 108v44a80 80 0 0 1-160 0v-12a20 20 0 0 1 20-20h20V92a20 20 0 0 1 40 0a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M188 80a27.8 27.8 0 0 0-13.36 3.4a28 28 0 0 0-46.64-11A28 28 0 0 0 80 92v20H68a28 28 0 0 0-28 28v12a88 88 0 0 0 176 0v-44a28 28 0 0 0-28-28m12 72a72 72 0 0 1-144 0v-12a12 12 0 0 1 12-12h12v24a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0Z"></svg:path></svg:g>`,
})
export class PhHandGrabbingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartDuotoneIcon],svg[ph-hand-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 152h32v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8M192.54 40A39.12 39.12 0 0 0 156 64a39.12 39.12 0 0 0-36.54-24C97.67 40 80 58.31 80 80c0 14.56 7 27.71 16.73 40H140a20 20 0 0 1 0 40h4l37.78-8.68C203.82 135.07 232 109.23 232 80c0-21.69-17.67-40-39.46-40" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.34 24.34 0 0 0-18.61-4.77C230.5 117.33 240 98.48 240 80c0-26.47-21.29-48-47.46-48A47.58 47.58 0 0 0 156 48.75A47.58 47.58 0 0 0 119.46 32C93.29 32 72 53.53 72 80c0 11 3.24 21.69 10.06 33a31.87 31.87 0 0 0-14.75 8.4L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM119.46 48a31.15 31.15 0 0 1 29.14 19a8 8 0 0 0 14.8 0a31.15 31.15 0 0 1 29.14-19C209.59 48 224 62.65 224 80c0 19.51-15.79 41.58-45.66 63.9l-11.09 2.55A28 28 0 0 0 140 112h-39.32C92.05 100.36 88 90.12 88 80c0-17.35 14.41-32 31.46-32M16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Z"></svg:path></svg:g>`,
})
export class PhHandHeartDuotoneIcon {
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

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoDuotoneIcon],svg[ph-lastfm-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 160a32 32 0 0 1-32 32H64a48 48 0 0 1-48-48v-24a48 48 0 0 1 48-48h144a24 24 0 0 1 24 24Z" opacity=".2"></svg:path><svg:path d="M248 160a40 40 0 0 1-40 40h-17.43a56.22 56.22 0 0 1-50.75-32.32l-30.14-64.6A40.15 40.15 0 0 0 73.43 80H64a40 40 0 0 0-40 40v24a40 40 0 0 0 40 40h8a32 32 0 0 0 29.34-19.2a8 8 0 1 1 14.66 6.4A48 48 0 0 1 72 200h-8a56.06 56.06 0 0 1-56-56v-24a56.06 56.06 0 0 1 56-56h9.43a56.22 56.22 0 0 1 50.75 32.32l30.14 64.6A40.15 40.15 0 0 0 190.57 184H208a24 24 0 0 0 0-48h-20a36 36 0 0 1 0-72h20a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-20a20 20 0 0 0 0 40h20a40 40 0 0 1 40 40"></svg:path></svg:g>`,
})
export class PhLastfmLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutDuotoneIcon],svg[ph-layout-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 104v104H40a8 8 0 0 1-8-8v-96Z" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v40H40V56ZM40 112h56v88H40Zm176 88H112v-88h104z"></svg:path></svg:g>`,
})
export class PhLayoutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafDuotoneIcon],svg[ph-leaf-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M63.81 192.19c-47.89-79.81 16-159.62 151.64-151.64c7.98 135.68-71.83 199.53-151.64 151.64" opacity=".2"></svg:path><svg:path d="M223.45 40.07a8 8 0 0 0-7.52-7.52C139.8 28.08 78.82 51 52.82 94a87.1 87.1 0 0 0-12.76 49c.57 15.92 5.21 32 13.79 47.85l-19.51 19.5a8 8 0 0 0 11.32 11.32l19.5-19.51C81 210.73 97.09 215.37 113 215.94q1.67.06 3.33.06A86.93 86.93 0 0 0 162 203.18c43-26 65.93-86.97 61.45-163.11m-69.7 149.43c-22.75 13.78-49.68 14-76.71.77l88.63-88.62a8 8 0 0 0-11.32-11.32L65.73 179c-13.19-27-13-54 .77-76.71c22.09-36.47 74.6-56.44 141.31-54.06c2.39 66.66-17.59 119.18-54.06 141.27"></svg:path></svg:g>`,
})
export class PhLeafDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternDuotoneIcon],svg[ph-lectern-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 136H24a8 8 0 0 1-7.16-11.58l40-80A8 8 0 0 1 64 40h128a8 8 0 0 1 7.16 4.42l40 80A8 8 0 0 1 232 136" opacity=".2"></svg:path><svg:path d="m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM24 128l40-80h128l40 80Zm168-24a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhLecternDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoDuotoneIcon],svg[ph-lego-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 80v64L80 224v-64Z" opacity=".2"></svg:path><svg:path d="M243.58 72.84L197.29 49.7C191.54 39.24 177.21 32 160 32c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-19.52 9.76A53.7 53.7 0 0 0 80 72c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-28.64 14.31A8 8 0 0 0 8 128v64a8 8 0 0 0 4.42 7.16l64 32a8 8 0 0 0 7.16 0l160-80A8 8 0 0 0 248 144V80a8 8 0 0 0-4.42-7.16M80 151.06L33.89 128L51 119.45c7.24 5.29 17.48 8.55 29 8.55c22.43 0 40-12.3 40-28a21.77 21.77 0 0 0-4.35-12.88L131 79.45c7.24 5.29 17.48 8.55 29 8.55c18.38 0 33.49-8.26 38.35-19.88L222.11 80ZM160 48c13.74 0 24 6.34 24 12s-10.26 12-24 12s-24-6.34-24-12s10.26-12 24-12M80 88c13.74 0 24 6.34 24 12s-10.26 12-24 12c-9.67 0-17.61-3.14-21.47-7a8 8 0 0 0-.84-.93A6.62 6.62 0 0 1 56 100c0-5.66 10.26-12 24-12m-56 52.94l48 24v46.12l-48-24Zm64 70.12v-46.12l144-72v46.12Z"></svg:path></svg:g>`,
})
export class PhLegoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyDuotoneIcon],svg[ph-lego-smiley-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 80v96a24 24 0 0 1-24 24H72a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M100 124a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-4.27 45.23a45 45 0 0 1-47.46 0a8 8 0 0 0-8.54 13.54a61 61 0 0 0 64.54 0a8 8 0 0 0-8.54-13.54M216 80v96a32.06 32.06 0 0 1-24 31v17a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-17a32.06 32.06 0 0 1-24-31V80a32 32 0 0 1 32-32h16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16h16a32 32 0 0 1 32 32M104 48h48V32h-48Zm72 176v-16H80v16Zm24-144a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z"></svg:path></svg:g>`,
})
export class PhLegoSmileyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanDuotoneIcon],svg[ph-less-than-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v144L48 128Z" opacity=".2"></svg:path><svg:path d="M207.23 203.42a8 8 0 0 1-10.66 3.81l-152-72a8 8 0 0 1 0-14.46l152-72a8 8 0 1 1 6.85 14.46L66.69 128l136.73 64.77a8 8 0 0 1 3.81 10.65"></svg:path></svg:g>`,
})
export class PhLessThanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualDuotoneIcon],svg[ph-less-than-or-equal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v112L48 104Z" opacity=".2"></svg:path><svg:path d="M40 104a8 8 0 0 1 5.23-7.5l152-56a8 8 0 0 1 5.53 15L71.14 104l131.62 48.49A8 8 0 0 1 200 168a8.1 8.1 0 0 1-2.77-.49l-152-56A8 8 0 0 1 40 104m160 88H48a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhLessThanOrEqualDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHDuotoneIcon],svg[ph-letter-circle-h-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-128v80a8 8 0 0 1-16 0v-32h-48v32a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v32h48V88a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhLetterCircleHDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePDuotoneIcon],svg[ph-letter-circle-p-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m8-136h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-16h24a36 36 0 0 0 0-72m0 56h-24V96h24a20 20 0 0 1 0 40"></svg:path></svg:g>`,
})
export class PhLetterCirclePDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVDuotoneIcon],svg[ph-letter-circle-v-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m39.43-117l-32 80a8 8 0 0 1-14.86 0l-32-80a8 8 0 0 1 14.86-6L128 154.46L152.57 93a8 8 0 1 1 14.86 6"></svg:path></svg:g>`,
})
export class PhLetterCircleVDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyDuotoneIcon],svg[ph-lifebuoy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m195.88 195.88l-39.6-39.6a40 40 0 0 0 0-56.56l39.6-39.6a96 96 0 0 1 0 135.76M60.12 60.12a96 96 0 0 0 0 135.76l39.6-39.6a40 40 0 0 1 0-56.56Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.1 131.79a47.84 47.84 0 0 0 0-55.58l28.5-28.49a87.83 87.83 0 0 1 0 112.56ZM96 128a32 32 0 1 1 32 32a32 32 0 0 1-32-32m88.28-67.6l-28.49 28.5a47.84 47.84 0 0 0-55.58 0L71.72 60.4a87.83 87.83 0 0 1 112.56 0M60.4 71.72l28.5 28.49a47.84 47.84 0 0 0 0 55.58l-28.5 28.49a87.83 87.83 0 0 1 0-112.56M71.72 195.6l28.49-28.5a47.84 47.84 0 0 0 55.58 0l28.49 28.5a87.83 87.83 0 0 1-112.56 0"></svg:path></svg:g>`,
})
export class PhLifebuoyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbDuotoneIcon],svg[ph-lightbulb-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a79.86 79.86 0 0 1-30.59 62.92A24.29 24.29 0 0 0 168 186v6a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-6a24.11 24.11 0 0 0-9.3-19A79.87 79.87 0 0 1 48 104.45C47.76 61.09 82.72 25 126.07 24A80 80 0 0 1 208 104" opacity=".2"></svg:path><svg:path d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.65 71.65 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h64v-6a32.15 32.15 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104m-16.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23"></svg:path></svg:g>`,
})
export class PhLightbulbDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentDuotoneIcon],svg[ph-lightbulb-filament-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a79.86 79.86 0 0 1-30.59 62.92A24.29 24.29 0 0 0 168 186v6a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-6a24.11 24.11 0 0 0-9.3-19A79.87 79.87 0 0 1 48 104.45C47.76 61.09 82.72 25 126.07 24A80 80 0 0 1 208 104" opacity=".2"></svg:path><svg:path d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.5c-.26-47.67 38.26-87.35 85.88-88.5A88 88 0 0 1 216 104m-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.64 71.64 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h24v-44.69l-29.66-29.65a8 8 0 0 1 11.32-11.32L128 132.69l26.34-26.35a8 8 0 0 1 11.32 11.32L136 147.31V192h24v-6a32.12 32.12 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104"></svg:path></svg:g>`,
})
export class PhLightbulbFilamentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseDuotoneIcon],svg[ph-lighthouse-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M181.61 112H74.39L80 56h96ZM192 215.24L187.23 168H68.77L64 215.24a8 8 0 0 0 8 8.76h112a8 8 0 0 0 8-8.76" opacity=".2"></svg:path><svg:path d="M208 80a8 8 0 0 0-8 8v16h-11.15L184 55.2a8 8 0 0 0-2.68-5.2l-42.88-38.12l-.2-.17a16 16 0 0 0-20.48 0l-.2.17L74.68 50A8 8 0 0 0 72 55.2L67.15 104H56V88a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h17.54l-9.47 94.48A16 16 0 0 0 72 232h112a16 16 0 0 0 15.92-17.56L190.46 120H208a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8m-80-56l27 24h-54ZM87.24 64h81.52l4 40H136V88a8 8 0 0 0-16 0v16H83.23ZM72 216l4-40h104l4 40Zm106.39-56H77.61l4-40h92.76Z"></svg:path></svg:g>`,
})
export class PhLighthouseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningADuotoneIcon],svg[ph-lightning-a-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M72.8 216L88 152l-56-25.14L127.2 24L112 88l56 25.14Z" opacity=".2"></svg:path><svg:path d="M175.84 111.54a8 8 0 0 0-4.56-5.7l-50-22.43L135 25.85a8 8 0 0 0-13.65-7.28L26.13 121.42a8 8 0 0 0 2.59 12.73l50 22.44L65 214.15a8 8 0 0 0 13.65 7.28l95.2-102.85a8 8 0 0 0 1.99-7.04m-88.22 76.67l8.16-34.36a8 8 0 0 0-4.5-9.15l-45.85-20.58l66.95-72.33l-8.16 34.36a8 8 0 0 0 4.5 9.15l45.84 20.58Zm151.53 24.21l-36-72a8 8 0 0 0-14.31 0l-36 72a8 8 0 0 0 14.31 7.16l9.79-19.58h38.11l9.79 19.58A8 8 0 0 0 232 224a8 8 0 0 0 7.15-11.58M184.94 184L196 161.89L207.05 184Z"></svg:path></svg:g>`,
})
export class PhLightningADuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningDuotoneIcon],svg[ph-lightning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2"></svg:path><svg:path d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"></svg:path></svg:g>`,
})
export class PhLightningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashDuotoneIcon],svg[ph-lightning-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18l-39.18 42a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.26a8 8 0 0 0 13.69 7l61.86-66.28l38.37 42.2a8 8 0 1 0 11.84-10.76ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l30.12-32.27l60.78 66.86Zm-.71-143a8 8 0 0 1-.39-11.31l45.88-49.16a8 8 0 0 1 13.69 7L153.18 90.9l57.63 21.61a8 8 0 0 1 3 12.95l-22.3 23.89a8 8 0 0 1-11.7-10.91L194 123.29l-52.8-19.8a8 8 0 0 1-5-9.06l10.47-52.38L120 70.62a8 8 0 0 1-11.34.38"></svg:path></svg:g>`,
})
export class PhLightningSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentDuotoneIcon],svg[ph-line-segment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M81 175a24 24 0 1 1-34 0a24 24 0 0 1 34 0M209 47a24 24 0 1 0 0 34a24 24 0 0 0 0-34" opacity=".2"></svg:path><svg:path d="M214.64 41.36a32 32 0 0 0-50.2 38.89l-84.19 84.19a32.06 32.06 0 0 0-38.89 4.94a32 32 0 1 0 50.2 6.37l84.19-84.19a32 32 0 0 0 38.89-50.2m-139.33 162a16 16 0 0 1-22.64-22.64a16 16 0 0 1 22.63 0a16 16 0 0 1 .01 22.61Zm128-128a16 16 0 1 1 0-22.63a16 16 0 0 1 .02 22.57Z"></svg:path></svg:g>`,
})
export class PhLineSegmentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsDuotoneIcon],svg[ph-line-segments-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M57 183a24 24 0 1 1-34 0a24 24 0 0 1 34 0M79 79a24 24 0 1 0 34 0a24 24 0 0 0-34 0m64 64a24 24 0 1 0 34 0a24 24 0 0 0-34 0m90-104a24 24 0 1 0 0 34a24 24 0 0 0 0-34" opacity=".2"></svg:path><svg:path d="M238.64 33.36a32 32 0 0 0-45.26 0a32 32 0 0 0 0 45.26c.29.29.6.57.9.85l-26.63 49.46a32.2 32.2 0 0 0-23.9 3.5l-20.18-20.18a32 32 0 0 0-50.2-38.89a32 32 0 0 0 0 45.26c.29.29.59.57.89.85l-26.63 49.47a32 32 0 0 0-30.27 8.44a32 32 0 1 0 45.26 0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4 32.4 0 0 0 96 128a32 32 0 0 0 16.25-4.41l20.18 20.18a32 32 0 1 0 50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.3 32.3 0 0 0 216 88a32 32 0 0 0 22.63-54.62ZM51.3 211.33a16 16 0 0 1-22.63-22.64a16 16 0 1 1 22.63 22.64m33.38-104a16 16 0 0 1 0-22.63a16 16 0 1 1 0 22.63m86.64 64a16 16 0 0 1-22.63-22.63a16 16 0 0 1 22.63 22.63m56-104a16 16 0 1 1-22.62-22.66a16 16 0 0 1 22.63 22.64Z"></svg:path></svg:g>`,
})
export class PhLineSegmentsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalDuotoneIcon],svg[ph-line-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhLineVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakDuotoneIcon],svg[ph-link-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m204.28 108.28l-96 96a40 40 0 0 1-56.56-56.56l96-96a40 40 0 0 1 56.56 56.56" opacity=".2"></svg:path><svg:path d="M198.63 57.37a32 32 0 0 0-45.19-.06l-11.65 12.21a8 8 0 0 1-11.58-11l11.72-12.29a2 2 0 0 1 .13-.13a48 48 0 0 1 67.88 67.88a2 2 0 0 1-.13.13l-12.29 11.72a8 8 0 0 1-11-11.58l12.21-11.65a32 32 0 0 0-.1-45.23m-84.42 129.11l-11.65 12.21a32 32 0 0 1-45.25-45.25l12.21-11.65a8 8 0 0 0-11-11.58l-12.33 11.72a2 2 0 0 0-.13.13a48 48 0 0 0 67.88 67.88a2 2 0 0 0 .13-.13l11.72-12.29a8 8 0 1 0-11.58-11ZM216 152h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M40 104h24a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m120 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8M96 72a8 8 0 0 0 8-8V40a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhLinkBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkDuotoneIcon],svg[ph-link-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m218.34 119.6l-34.74 34.74a46.58 46.58 0 0 1-44.31 12.26c-.31.34-.62.67-.95 1l-34.74 34.74a46.63 46.63 0 1 1-65.94-65.94l34.74-34.74a46.6 46.6 0 0 1 44.31-12.26c.31-.34.62-.67 1-1l34.69-34.74a46.63 46.63 0 0 1 65.94 65.94" opacity=".2"></svg:path><svg:path d="M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 7.78 8.22h.22a8 8 0 0 0 8-7.78A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34"></svg:path></svg:g>`,
})
export class PhLinkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakDuotoneIcon],svg[ph-link-simple-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m209.94 113.94l-96 96a48 48 0 0 1-67.88-67.88l96-96a48 48 0 0 1 67.88 67.88" opacity=".2"></svg:path><svg:path d="M232 80a55.67 55.67 0 0 1-16.4 39.6l-30.07 30.06a8 8 0 0 1-11.31-11.32l30.07-30.06a40 40 0 1 0-56.57-56.56l-30.06 30.05a8 8 0 0 1-11.32-11.32L136.4 40.4A56 56 0 0 1 232 80m-93.66 94.22l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31"></svg:path></svg:g>`,
})
export class PhLinkSimpleBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleDuotoneIcon],svg[ph-link-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m209.94 113.94l-96 96a48 48 0 0 1-67.88-67.88l96-96a48 48 0 0 1 67.88 67.88" opacity=".2"></svg:path><svg:path d="M165.66 90.34a8 8 0 0 1 0 11.32l-64 64a8 8 0 0 1-11.32-11.32l64-64a8 8 0 0 1 11.32 0M215.6 40.4a56 56 0 0 0-79.2 0l-30.06 30.05a8 8 0 0 0 11.32 11.32l30.06-30a40 40 0 0 1 56.57 56.56l-30.07 30.06a8 8 0 0 0 11.31 11.32l30.07-30.11a56 56 0 0 0 0-79.2m-77.26 133.82l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31"></svg:path></svg:g>`,
})
export class PhLinkSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakDuotoneIcon],svg[ph-link-simple-horizontal-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48a48 48 0 0 1 48-48h128a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M24 128a40 40 0 0 0 40 40h40a8 8 0 0 1 0 16H64a56 56 0 0 1 0-112h40a8 8 0 0 1 0 16H64a40 40 0 0 0-40 40m168-56h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112"></svg:path></svg:g>`,
})
export class PhLinkSimpleHorizontalBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalDuotoneIcon],svg[ph-link-simple-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48a48 48 0 0 1 48-48h128a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M80 120h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16m24 48H64a40 40 0 0 1 0-80h40a8 8 0 0 0 0-16H64a56 56 0 0 0 0 112h40a8 8 0 0 0 0-16m88-96h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112"></svg:path></svg:g>`,
})
export class PhLinkSimpleHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoDuotoneIcon],svg[ph-linkedin-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhLinkedinLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoDuotoneIcon],svg[ph-linktree-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M136 160v72a8 8 0 0 1-16 0v-72a8 8 0 0 1 16 0m72-64h-60.69l42.35-42.34a8 8 0 0 0-11.32-11.32L136 84.69V24a8 8 0 0 0-16 0v60.69L77.66 42.34a8 8 0 0 0-11.32 11.32L108.69 96H48a8 8 0 0 0 0 16h60.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L128 115.31l50.34 50.35a8 8 0 0 0 11.32-11.32L147.31 112H208a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhLinktreeLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoDuotoneIcon],svg[ph-linux-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 208h-56c-8-14.35-22.91-24-40-24s-32 9.65-40 24H32s32-40 32-120a64 64 0 0 1 128 0c0 80 32 120 32 120" opacity=".2"></svg:path><svg:path d="M229 214.25a8 8 0 0 1-11.24-1.25C216.39 211.27 184 169.86 184 88a56 56 0 0 0-112 0c0 81.86-32.37 123.27-33.75 125a8 8 0 0 1-12.51-10c.15-.2 7.69-9.9 15.13-28.74C47.77 156.8 56 127.64 56 88a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28c7.48 18.94 15.06 28.64 15.14 28.74a8 8 0 0 1-1.27 11.23M100 88a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m-68.42 28.84a8 8 0 0 0-7.15 14.31l32 16a7.94 7.94 0 0 0 7.15 0l32-16a8 8 0 0 0-7.16-14.31L128 143.05ZM128 176a54.07 54.07 0 0 0-47 28.11a8 8 0 1 0 14 7.78a37.35 37.35 0 0 1 66 0a8 8 0 0 0 14-7.78A54.07 54.07 0 0 0 128 176"></svg:path></svg:g>`,
})
export class PhLinuxLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsDuotoneIcon],svg[ph-list-bullets-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H88V64Z" opacity=".2"></svg:path><svg:path d="M80 64a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8m136 56H88a8 8 0 1 0 0 16h128a8 8 0 0 0 0-16m0 64H88a8 8 0 1 0 0 16h128a8 8 0 0 0 0-16M44 52a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhListBulletsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksDuotoneIcon],svg[ph-list-checks-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128h-88V64Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8m-96-56h88a8 8 0 0 0 0-16h-88a8 8 0 0 0 0 16m88 112h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M82.34 42.34L56 68.69L45.66 58.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 132.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 196.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"></svg:path></svg:g>`,
})
export class PhListChecksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesDuotoneIcon],svg[ph-list-dashes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H96V64Z" opacity=".2"></svg:path><svg:path d="M88 64a8 8 0 0 1 8-8h120a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m128 56H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16m0 64H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16M56 56H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhListDashesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDuotoneIcon],svg[ph-list-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H40V64Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhListDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartDuotoneIcon],svg[ph-list-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 144c0 32-48 56-48 56s-48-24-48-56a24 24 0 0 1 48 0a24 24 0 0 1 48 0" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h64a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m80 48H40a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m128-40c0 36.52-50.28 62.08-52.42 63.16a8 8 0 0 1-7.16 0C186.28 206.08 136 180.52 136 144a32 32 0 0 1 56-21.14A32 32 0 0 1 248 144m-16 0a16 16 0 0 0-32 0a8 8 0 0 1-16 0a16 16 0 0 0-32 0c0 20.18 26.21 39.14 40 46.93c13.79-7.78 40-26.74 40-46.93"></svg:path></svg:g>`,
})
export class PhListHeartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassDuotoneIcon],svg[ph-list-magnifying-glass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h72a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m88 48H40a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m109.66 13.66a8 8 0 0 1-11.32 0L206 177.36A40 40 0 1 1 217.36 166l20.3 20.3a8 8 0 0 1 0 11.36M184 168a24 24 0 1 0-24-24a24 24 0 0 0 24 24"></svg:path></svg:g>`,
})
export class PhListMagnifyingGlassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersDuotoneIcon],svg[ph-list-numbers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H104V64Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8M104 72h112a8 8 0 0 0 0-16H104a8 8 0 0 0 0 16m112 112H104a8 8 0 0 0 0 16h112a8 8 0 0 0 0-16M43.58 55.16L48 52.94V104a8 8 0 0 0 16 0V40a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0 7.16 14.32m36.19 101.56a23.73 23.73 0 0 0-9.6-15.95a24.86 24.86 0 0 0-34.11 4.7a23.6 23.6 0 0 0-3.57 6.46a8 8 0 1 0 15 5.47a7.8 7.8 0 0 1 1.18-2.13a8.76 8.76 0 0 1 12-1.59a7.9 7.9 0 0 1 3.26 5.32a7.64 7.64 0 0 1-1.57 5.78a1 1 0 0 0-.08.11l-28.69 38.32A8 8 0 0 0 40 216h32a8 8 0 0 0 0-16H56l19.08-25.53a23.47 23.47 0 0 0 4.69-17.75"></svg:path></svg:g>`,
})
export class PhListNumbersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusDuotoneIcon],svg[ph-list-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H40V64Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m104 48H40a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16m88 0h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhListPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarDuotoneIcon],svg[ph-list-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m205.6 159.41l8.07 32.59L184 174.54L154.33 192l8.07-32.59l-26.4-21.8l34.65-2.67L184 104l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h56a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m72 48H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m125.09-40.22l-22.52 18.59l6.86 27.71a8 8 0 0 1-11.82 8.81L184 183.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14m-25.47.28l-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92l-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15l11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12l13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81l-3.5-14.12a8 8 0 0 1 2.68-8.09Z"></svg:path></svg:g>`,
})
export class PhListStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockDuotoneIcon],svg[ph-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyDuotoneIcon],svg[ph-lock-key-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160zm-80-96a28 28 0 0 0-8 54.83V184a8 8 0 0 0 16 0v-17.17a28 28 0 0 0-8-54.83m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhLockKeyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenDuotoneIcon],svg[ph-lock-key-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-80-96a28 28 0 0 0-8 54.83V184a8 8 0 0 0 16 0v-17.17a28 28 0 0 0-8-54.83m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhLockKeyOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedDuotoneIcon],svg[ph-lock-laminated-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M48 128h160v16H48Zm0 32h160v16H48ZM96 56a32 32 0 0 1 64 0v24H96Zm112 40v16H48V96Zm0 112H48v-16h160z"></svg:path></svg:g>`,
})
export class PhLockLaminatedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenDuotoneIcon],svg[ph-lock-laminated-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M48 128h160v16H48Zm0 32h160v16H48Zm160-64v16H48V96Zm0 112H48v-16h160z"></svg:path></svg:g>`,
})
export class PhLockLaminatedOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenDuotoneIcon],svg[ph-lock-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhLockOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleDuotoneIcon],svg[ph-lock-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160z"></svg:path></svg:g>`,
})
export class PhLockSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenDuotoneIcon],svg[ph-lock-simple-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160z"></svg:path></svg:g>`,
})
export class PhLockSimpleOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersDuotoneIcon],svg[ph-lockers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v152H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 72a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m-8 24h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M72 80h24a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16m24 16H72a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m128-48v176a8 8 0 0 1-16 0v-16h-72v16a8 8 0 0 1-16 0v-16H48v16a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M120 192V48H48v144Zm16 0h72V48h-72Z"></svg:path></svg:g>`,
})
export class PhLockersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogDuotoneIcon],svg[ph-log-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 136c0 35.35-17.91 64-40 64s-40-28.65-40-64s17.91-64 40-64s40 28.65 40 64" opacity=".2"></svg:path><svg:path d="M212 136a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 0c0 40.37-21.08 72-48 72H56c-26.92 0-48-31.63-48-72s21.08-72 48-72h36.69l37.65-37.66A8 8 0 0 1 136 24h32a8 8 0 0 1 0 16h-28.69l-24 24H200c26.92 0 48 31.63 48 72M56 192h113.51a73.5 73.5 0 0 1-12.67-24H80a8 8 0 0 1 0-16h73.16a111 111 0 0 1-1.16-16c0-22.86 6.76-42.9 17.51-56H56c-12.47 0-23.55 13.26-28.8 32H104a8 8 0 0 1 0 16H24.35q-.34 3.93-.35 8c0 30.36 14.65 56 32 56m176-56c0-30.36-14.65-56-32-56s-32 25.64-32 56s14.65 56 32 56s32-25.64 32-56"></svg:path></svg:g>`,
})
export class PhLogDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandDuotoneIcon],svg[ph-magic-wand-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 112L74.34 213.66a8 8 0 0 1-11.31 0L42.34 193a8 8 0 0 1 0-11.31L144 80Z" opacity=".2"></svg:path><svg:path d="M248 152a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8M56 72h16v16a8 8 0 0 0 16 0V72h16a8 8 0 0 0 0-16H88V40a8 8 0 0 0-16 0v16H56a8 8 0 0 0 0 16m128 120h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m35.31-112L80 219.31a16 16 0 0 1-22.62 0l-20.7-20.68a16 16 0 0 1 0-22.63L176 36.69a16 16 0 0 1 22.63 0l20.68 20.68a16 16 0 0 1 0 22.63m-54.63 32L144 91.31l-96 96L68.68 208ZM208 68.69L187.31 48l-32 32L176 100.69Z"></svg:path></svg:g>`,
})
export class PhMagicWandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetDuotoneIcon],svg[ph-magnet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m168.36 200.36l-30 29.35a8 8 0 0 1-11.26-.05L98.46 201a8 8 0 0 1 .08-11.4l30-29Zm-142-82.76a8 8 0 0 0 0 11.28L55 157.54a8 8 0 0 0 11.38-.06l29.18-29.92l-39.79-39.79Z" opacity=".2"></svg:path><svg:path d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81l-31.89 32.3L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.9 16.9 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75M60.65 151.89L32 123.24l23.8-24.12l28.52 28.52ZM132.79 224l-28.68-28.65l24.38-23.57L157 200.32Zm61.76-60.44l-26.11 25.54L140 160.68l26.44-25.57l.1-.09a33 33 0 0 0 9.57-23.5A31.44 31.44 0 0 0 166.47 89a32.2 32.2 0 0 0-44.9.5l-26.08 26.68L67 87.74l26.35-26.65A71.5 71.5 0 0 1 144.27 40h.27a71.55 71.55 0 0 1 51.05 21.48c27.66 28.07 27.16 73.9-1.04 102.1Z"></svg:path></svg:g>`,
})
export class PhMagnetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightDuotoneIcon],svg[ph-magnet-straight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 56v40H48V56a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m96-8h-40a8 8 0 0 0-8 8v40h56V56a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M200 40h-40a16 16 0 0 0-16 16v88a16 16 0 0 1-32 0V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v88a88 88 0 0 0 88 88h.67c48.15-.36 87.33-40.29 87.33-89V56a16 16 0 0 0-16-16m0 16v32h-40V56ZM96 56v32H56V56Zm32.55 160A72 72 0 0 1 56 144v-40h40v40a32 32 0 0 0 64 0v-40h40v39c0 40-32 72.71-71.45 73"></svg:path></svg:g>`,
})
export class PhMagnetStraightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassDuotoneIcon],svg[ph-magnifying-glass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"></svg:path></svg:g>`,
})
export class PhMagnifyingGlassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusDuotoneIcon],svg[ph-magnifying-glass-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 0a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMagnifyingGlassMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusDuotoneIcon],svg[ph-magnifying-glass-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 0a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H80a8 8 0 0 1 0-16h24V80a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMagnifyingGlassPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxDuotoneIcon],svg[ph-mailbox-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 116v60a8 8 0 0 1-8 8h-96v-68a52 52 0 0 0-52-52h104a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M104 152a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m136-36v60a16 16 0 0 1-16 16h-88v32a8 8 0 0 1-16 0v-32H32a16 16 0 0 1-16-16v-60a60.07 60.07 0 0 1 60-60h76V24a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-24v24h12a60.07 60.07 0 0 1 60 60m-120 60v-60a44 44 0 0 0-88 0v60Zm104-60a44.05 44.05 0 0 0-44-44h-12v72a8 8 0 0 1-16 0V72h-35.25A59.86 59.86 0 0 1 136 116v60h88Z"></svg:path></svg:g>`,
})
export class PhMailboxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaDuotoneIcon],svg[ph-map-pin-area-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 80c0 56-56 88-56 88s-56-32-56-88a56 56 0 0 1 112 0" opacity=".2"></svg:path><svg:path d="M112 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-48 0a64 64 0 0 1 128 0c0 59.95-57.58 93.54-60 94.95a8 8 0 0 1-7.94 0C121.58 173.54 64 140 64 80m16 0c0 42.2 35.84 70.21 48 78.5c12.15-8.28 48-36.3 48-78.5a48 48 0 0 0-96 0m122.77 67.63a8 8 0 0 0-5.54 15C213.74 168.74 224 176.92 224 184c0 13.36-36.52 32-96 32s-96-18.64-96-32c0-7.08 10.26-15.26 26.77-21.36a8 8 0 0 0-5.54-15C29.22 156.49 16 169.41 16 184c0 31.18 57.71 48 112 48s112-16.82 112-48c0-14.59-13.22-27.51-37.23-36.37"></svg:path></svg:g>`,
})
export class PhMapPinAreaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinDuotoneIcon],svg[ph-map-pin-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"></svg:path></svg:g>`,
})
export class PhMapPinDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineDuotoneIcon],svg[ph-map-pin-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M200 224h-49.46A267 267 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A267 267 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M56 104a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118c-16.53-13-72-60.77-72-118m112 0a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path></svg:g>`,
})
export class PhMapPinLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusDuotoneIcon],svg[ph-map-pin-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104c0 72-80 128-80 128s-80-56-80-128a80 80 0 0 1 160 0" opacity=".2"></svg:path><svg:path d="M128 16a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118m40-118a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V72a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMapPinPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaDuotoneIcon],svg[ph-map-pin-simple-area-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 64a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M120 103.2V176a8 8 0 0 0 16 0v-72.8a40 40 0 1 0-16 0m8-63.2a24 24 0 1 1-24 24a24 24 0 0 1 24-24m112 136c0 31.18-57.71 48-112 48S16 207.18 16 176c0-7.74 3.81-19.13 22-29.41c12.26-6.94 29.12-12.27 48.77-15.42a8 8 0 1 1 2.5 15.83c-17.54 2.82-33 7.63-43.42 13.55C37.05 165.5 32 171.14 32 176c0 13.36 36.52 32 96 32s96-18.64 96-32c0-4.86-5.05-10.5-13.85-15.49c-10.46-5.92-25.88-10.73-43.42-13.55a8 8 0 1 1 2.54-15.79c19.65 3.15 36.51 8.48 48.77 15.42C236.19 156.87 240 168.26 240 176"></svg:path></svg:g>`,
})
export class PhMapPinSimpleAreaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleDuotoneIcon],svg[ph-map-pin-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 72a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M184 72a56 56 0 1 0-64 55.42V232a8 8 0 0 0 16 0V127.42A56.09 56.09 0 0 0 184 72m-56 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhMapPinSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineDuotoneIcon],svg[ph-map-pin-simple-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 80a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M216 208h-80v-72.58a56 56 0 1 0-16 0V208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M88 80a40 40 0 1 1 40 40a40 40 0 0 1-40-40"></svg:path></svg:g>`,
})
export class PhMapPinSimpleLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldDuotoneIcon],svg[ph-map-trifold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 72v144l-64-32V40Z" opacity=".2"></svg:path><svg:path d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28l-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28l61.35 30.68a8.15 8.15 0 0 0 3.58.84a8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M104 52.94l48 24v126.12l-48-24Zm-64 9.31l48-12v127.5l-48 12Zm176 131.5l-48 12V78.25l48-12Z"></svg:path></svg:g>`,
})
export class PhMapTrifoldDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoDuotoneIcon],svg[ph-markdown-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 64v128a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H24V64h208zm-104-88v48a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104m77.66 18.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhMarkdownLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleDuotoneIcon],svg[ph-marker-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 0-144 83.16V176a8 8 0 0 1 8-8h8v-24a8 8 0 0 1 8-8h4.16l12-57.63c1.77-8.49 13.89-8.49 15.66 0l12 57.63H152a8 8 0 0 1 8 8v24h8a8 8 0 0 1 8 8v35.16A96 96 0 0 0 224 128" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M88 206.37V176h80v30.37a88.38 88.38 0 0 1-80 0M104 144h48v16h-48Zm14-16l10-48l10 48Zm72.22 62.23c-2 2-4.08 3.87-6.22 5.64V176a16 16 0 0 0-16-16v-16a16 16 0 0 0-13.61-15.8l-10.73-51.46a16 16 0 0 0-31.32 0l-10.73 51.46A16 16 0 0 0 88 144v16a16 16 0 0 0-16 16v19.87a89 89 0 0 1-6.22-5.64a88 88 0 1 1 124.44 0"></svg:path></svg:g>`,
})
export class PhMarkerCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniDuotoneIcon],svg[ph-martini-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 72l-72 72l-72-72Z" opacity=".2"></svg:path><svg:path d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69ZM75.31 80h105.38L128 132.69Zm137.38-32l-16 16H59.31l-16-16Z"></svg:path></svg:g>`,
})
export class PhMartiniDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyDuotoneIcon],svg[ph-mask-happy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v55.77C216 174.6 176.6 232 128 232s-88-57.4-88-128.21V48a8 8 0 0 1 10.89-7.47C66 46.41 95.11 55.71 128 55.71s62-9.3 77.11-15.16A8 8 0 0 1 216 48" opacity=".2"></svg:path><svg:path d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18c18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2m-9 69c0 32.64-8.66 63.23-24.37 86.13C168.54 211.9 148.79 224 128 224s-40.54-12.1-55.63-34.08C56.66 167 48 136.43 48 103.79V48c15.11 5.87 45.58 15.71 80 15.71s64.9-9.84 80-15.71v55.81Zm-18 18.87a8 8 0 1 1-12 10.66c-2.68-3-8.85-5.33-14-5.33s-11.36 2.34-14 5.33a8 8 0 1 1-12-10.67c5.71-6.38 16.14-10.66 26-10.66s20.25 4.28 26 10.66ZM92 128c-5.19 0-11.36 2.34-14 5.33a8 8 0 1 1-12-10.67C71.75 116.28 82.18 112 92 112s20.25 4.28 26 10.66a8 8 0 1 1-12 10.67c-2.64-2.99-8.81-5.33-14-5.33m76.45 45.19a52.9 52.9 0 0 1-80.9 0a8 8 0 1 1 12.17-10.39a36.89 36.89 0 0 0 56.56 0a8 8 0 0 1 12.17 10.39"></svg:path></svg:g>`,
})
export class PhMaskHappyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadDuotoneIcon],svg[ph-mask-sad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v55.77C216 174.6 176.6 232 128 232s-88-57.4-88-128.21V48a8 8 0 0 1 10.89-7.47C66 46.41 95.11 55.71 128 55.71s62-9.3 77.11-15.16A8 8 0 0 1 216 48" opacity=".2"></svg:path><svg:path d="M158.66 188.43a8 8 0 0 1-11.09 2.23C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09M189.34 114a8 8 0 0 0-11.3.62c-2.68 3-8.85 5.34-14 5.34s-11.36-2.35-14-5.34A8 8 0 0 0 138 125.33c5.71 6.38 16.14 10.67 26 10.67s20.25-4.29 26-10.67a8 8 0 0 0-.66-11.33M224 48v55.77c0 35.84-9.65 69.65-27.18 95.18c-18.16 26.46-42.6 41-68.82 41s-50.66-14.57-68.82-41C41.65 173.44 32 139.63 32 103.79V48a16 16 0 0 1 21.79-14.91C67.84 38.55 96.18 47.71 128 47.71s60.15-9.16 74.21-14.62A16 16 0 0 1 224 48m-16 0c-15.1 5.89-45.57 15.73-80 15.73S63.1 53.87 48 48v55.79c0 32.64 8.66 63.23 24.37 86.13C87.46 211.9 107.21 224 128 224s40.54-12.1 55.63-34.08C199.34 167 208 136.43 208 103.79Zm-90 77.31a8 8 0 0 0-12-10.65c-2.68 3-8.85 5.34-14 5.34s-11.36-2.35-14-5.34a8 8 0 0 0-12 10.67C71.75 131.71 82.18 136 92 136s20.25-4.29 26-10.67Z"></svg:path></svg:g>`,
})
export class PhMaskSadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoDuotoneIcon],svg[ph-mastodon-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v72a32 32 0 0 1-32 32H40V72a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104"></svg:path></svg:g>`,
})
export class PhMastodonLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsDuotoneIcon],svg[ph-math-operations-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M112 72a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 104H80v-24a8 8 0 0 0-16 0v24H40a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16m48 0h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-61.66-90.34a8 8 0 0 0 11.32 0L184 83.31l18.34 18.35a8 8 0 0 0 11.32-11.32L195.31 72l18.35-18.34a8 8 0 0 0-11.32-11.32L184 60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L172.69 72l-18.35 18.34a8 8 0 0 0 0 11.32"></svg:path></svg:g>`,
})
export class PhMathOperationsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoDuotoneIcon],svg[ph-matrix-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176H40V40Z" opacity=".2"></svg:path><svg:path d="M72 216a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H48v160h16a8 8 0 0 1 8 8M216 32h-24a8 8 0 0 0 0 16h16v160h-16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-32 88a32 32 0 0 0-56-21.13a31.93 31.93 0 0 0-40.71-6.15A8 8 0 0 0 72 96v64a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0Z"></svg:path></svg:g>`,
})
export class PhMatrixLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalDuotoneIcon],svg[ph-medal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 96a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 131.06l-36.43-18.21a8 8 0 0 0-7.16 0L88 227.06v-52.69a87.89 87.89 0 0 0 80 0ZM128 152a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56m0-96a40 40 0 1 1-40 40a40 40 0 0 1 40-40"></svg:path></svg:g>`,
})
export class PhMedalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryDuotoneIcon],svg[ph-medal-military-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 192a40 40 0 1 1-40-40a40 40 0 0 1 40 40m39-144h-39v85.82l42.72-19.42a9 9 0 0 0 5.28-8.2V57a9 9 0 0 0-9-9M88 48H49a9 9 0 0 0-9 9v49.2a9 9 0 0 0 5.28 8.2L88 133.82Z" opacity=".2"></svg:path><svg:path d="M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17m-47 16v72.67l-32 14.54l-32-14.54V56ZM48 106.21V57a1 1 0 0 1 1-1h31v65.39l-31.41-14.27a1 1 0 0 1-.59-.91M128 224a32 32 0 1 1 32-32a32 32 0 0 1-32 32m80-117.79a1 1 0 0 1-.59.91L176 121.39V56h31a1 1 0 0 1 1 1Z"></svg:path></svg:g>`,
})
export class PhMedalMilitaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoDuotoneIcon],svg[ph-medium-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56m56-56c-13.25 0-24 25.07-24 56s10.75 56 24 56s24-25.07 24-56s-10.75-56-24-56" opacity=".2"></svg:path><svg:path d="M72 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48M184 64c-5.68 0-16.4 2.76-24.32 21.25C154.73 96.8 152 112 152 128s2.73 31.2 7.68 42.75C167.6 189.24 178.32 192 184 192s16.4-2.76 24.32-21.25C213.27 159.2 216 144 216 128s-2.73-31.2-7.68-42.75C200.4 66.76 189.68 64 184 64m0 112c-5.64 0-16-18.22-16-48s10.36-48 16-48s16 18.22 16 48s-10.36 48-16 48m64-104v112a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhMediumLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneDuotoneIcon],svg[ph-megaphone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 120a40 40 0 0 1-40 40h-40V80h40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M248 120a48.05 48.05 0 0 0-48-48h-39.8c-2.91-.17-53.62-3.74-101.91-44.24A16 16 0 0 0 32 40v160a16 16 0 0 0 26.29 12.25c37.77-31.68 77-40.76 93.71-43.3v31.72a16 16 0 0 0 7.12 13.33l11 7.33A16 16 0 0 0 194.5 212l11.77-44.36A48.07 48.07 0 0 0 248 120M48 199.93V40c42.81 35.91 86.63 45 104 47.24v65.48c-17.35 2.28-61.16 11.35-104 47.21m131 8v.11l-11-7.33V168h21.6ZM200 152h-32V88h32a32 32 0 1 1 0 64"></svg:path></svg:g>`,
})
export class PhMegaphoneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleDuotoneIcon],svg[ph-megaphone-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 69.09v101.82l-93.76 28.76A8 8 0 0 1 40 192V48a8 8 0 0 1 10.24-7.67Z" opacity=".2"></svg:path><svg:path d="m228.54 86.66l-176.06-54A16 16 0 0 0 32 48v144a16 16 0 0 0 16 16a16 16 0 0 0 4.52-.65L136 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 240 138v-36a16.09 16.09 0 0 0-11.46-15.34M136 165l-88 27V48l88 27Zm48 27h-32v-15.18l32-9.82Zm40-54h-.11L152 160.08V79.92l71.89 22h.11v36Z"></svg:path></svg:g>`,
})
export class PhMegaphoneSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfDuotoneIcon],svg[ph-member-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z" opacity=".2"></svg:path><svg:path d="M200 136H56.46A72.08 72.08 0 0 0 128 200h72a8 8 0 0 1 0 16h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72.08 72.08 0 0 0-71.54 64H200a8 8 0 0 1 0 16"></svg:path></svg:g>`,
})
export class PhMemberOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryDuotoneIcon],svg[ph-memory-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64H24a8 8 0 0 0-8 8v104h224V72a8 8 0 0 0-8-8m-120 80H48V96h64Zm96 0h-64V96h64Z" opacity=".2"></svg:path><svg:path d="M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16M24 72h208v96H24Zm88 80a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8Zm-56-48h48v32H56Zm88 48h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h48v32h-48Z"></svg:path></svg:g>`,
})
export class PhMemoryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoDuotoneIcon],svg[ph-messenger-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M181.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 0M232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.48a8 8 0 0 1 6.54.67A88 88 0 0 0 216 128"></svg:path></svg:g>`,
})
export class PhMessengerLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoDuotoneIcon],svg[ph-meta-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128.49 114.6l-18.71 32.75C93.88 175.86 77.52 200 58.56 200C-3.16 200 27.7 56 74 56c20.25 0 37.56 27.58 54.49 58.6M182 56c-12.62 0-24.1 10.7-35 26.27l-18.51 32.33c21.76 39.86 42.91 85.4 68.95 85.4C259.16 200 228.3 56 182 56" opacity=".2"></svg:path><svg:path d="M240 149.31c0 16.11-3.17 29.89-9.17 39.84c-7.43 12.33-19 18.85-33.39 18.85c-27.94 0-47.78-37-68.78-76.22C111.64 100 92.35 64 74 64c-9.38 0-19.94 10-28.25 26.67A138.2 138.2 0 0 0 32 149.31c0 13.2 2.38 24.12 6.88 31.58S49.82 192 58.56 192c15.12 0 30.85-24.54 44.23-48.55a8 8 0 0 1 14 7.8C101.46 178.71 83.07 208 58.56 208c-14.41 0-26-6.52-33.39-18.85c-6-10-9.17-23.73-9.17-39.84a154.8 154.8 0 0 1 15.42-65.77C42.82 60.62 57.94 48 74 48c27.94 0 47.77 37 68.78 76.22C159.79 156 179.08 192 197.44 192c8.74 0 15.18-3.63 19.68-11.11s6.88-18.38 6.88-31.58a138.2 138.2 0 0 0-13.74-58.64C202 74 191.39 64 182 64c-8.36 0-17.68 7.48-28.51 22.88a8 8 0 1 1-13.08-9.21c9-12.74 23-29.67 41.59-29.67c16.05 0 31.17 12.62 42.57 35.54A154.8 154.8 0 0 1 240 149.31"></svg:path></svg:g>`,
})
export class PhMetaLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorDuotoneIcon],svg[ph-meteor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 160a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M96 120a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m125.66-61.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0m-56 11.32a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 11.32Zm64-64l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32M122.34 90.34l72-72a8 8 0 1 1 11.32 11.32l-72 72a8 8 0 0 1-11.32-11.32m24.57 109.26a8 8 0 0 1 0 11.31A72 72 0 1 1 45.09 109.09l82.74-82.75a8 8 0 1 1 11.32 11.32L56.4 120.4a56 56 0 0 0 79.2 79.2a8 8 0 0 1 11.31 0"></svg:path></svg:g>`,
})
export class PhMeteorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeDuotoneIcon],svg[ph-metronome-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 216H56a8 8 0 0 1-7.63-10.43l12-37.57h135.29l12 37.57A8 8 0 0 1 200 216" opacity=".2"></svg:path><svg:path d="m187.14 114.84l26.78-29.46a8 8 0 0 0-11.84-10.76l-20.55 22.6l-17.2-54.07A15.94 15.94 0 0 0 149.08 32h-42.17a15.94 15.94 0 0 0-15.25 11.15l-50.91 160A16 16 0 0 0 56 224h144a16 16 0 0 0 15.25-20.85ZM184.72 160h-38.64l28.62-31.48ZM106.91 48h42.17l20 62.9l-44.62 49.1H71.27ZM56 208l10.18-32h123.63L200 208Z"></svg:path></svg:g>`,
})
export class PhMetronomeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMicrophoneDuotoneIcon],svg[ph-microphone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 64v64a40 40 0 0 1-40 40a40 40 0 0 1-40-40V64a40 40 0 0 1 40-40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48M96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V240a8 8 0 0 1-16 0v-32.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6"></svg:path></svg:g>`,
})
export class PhMicrophoneDuotoneIcon {
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
  selector: 'svg[phNumberTwoDuotoneIcon],svg[ph-number-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53a32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhNumberTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
