import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsIcon],svg[mdi-star-four-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"></svg:path>`,
})
export class MdiStarFourPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsBoxIcon],svg[mdi-star-four-points-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m7 14l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58z"></svg:path>`,
})
export class MdiStarFourPointsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsBoxOutlineIcon],svg[mdi-star-four-points-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58zM5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m0 16h14V5H5z"></svg:path>`,
})
export class MdiStarFourPointsBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsCircleIcon],svg[mdi-star-four-points-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 2.76A10.1 10.1 0 0 1 12 2c1.31 0 2.61.26 3.83.76c1.21.5 2.31 1.24 3.24 2.17s1.67 2.03 2.17 3.24c.5 1.22.76 2.52.76 3.83c0 2.65-1.05 5.2-2.93 7.07A9.97 9.97 0 0 1 12 22a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58z"></svg:path>`,
})
export class MdiStarFourPointsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsCircleOutlineIcon],svg[mdi-star-four-points-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58zM8.17 2.76A10.1 10.1 0 0 1 12 2c1.31 0 2.61.26 3.83.76c1.21.5 2.31 1.24 3.24 2.17s1.67 2.03 2.17 3.24c.5 1.22.76 2.52.76 3.83c0 2.65-1.05 5.2-2.93 7.07A9.97 9.97 0 0 1 12 22a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17m-1.83 14.9C7.84 19.16 9.88 20 12 20s4.16-.84 5.66-2.34S20 14.12 20 12s-.84-4.16-2.34-5.66A8 8 0 0 0 12 4c-2.12 0-4.16.84-5.66 2.34A8 8 0 0 0 4 12c0 2.12.84 4.16 2.34 5.66"></svg:path>`,
})
export class MdiStarFourPointsCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsOutlineIcon],svg[mdi-star-four-points-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45zM12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"></svg:path>`,
})
export class MdiStarFourPointsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarFourPointsSmallIcon],svg[mdi-star-four-points-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.74 10.75L12 8l1.25 2.75L16 12l-2.75 1.26L12 16l-1.26-2.74L8 12z"></svg:path>`,
})
export class MdiStarFourPointsSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarHalfIcon],svg[mdi-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z"></svg:path>`,
})
export class MdiStarHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarHalfFullIcon],svg[mdi-star-half-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.4V6.1l1.71 4.03l4.38.37l-3.32 2.89l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"></svg:path>`,
})
export class MdiStarHalfFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarMinusIcon],svg[mdi-star-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zm8.2-4v2h8v-2z"></svg:path>`,
})
export class MdiStarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarMinusOutlineIcon],svg[mdi-star-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zm8.2-4v2h8v-2z"></svg:path>`,
})
export class MdiStarMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarOffIcon],svg[mdi-star-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-2.9-2.9l.3 1.2l-6.2-3.7L5.8 21l1.6-7L2 9.2l4.9-.4L1.1 3l1.3-1.3l19.7 19.7zM22 9.2l-7.2-.6L12 2l-2 4.8l6.9 6.9z"></svg:path>`,
})
export class MdiStarOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarOffOutlineIcon],svg[mdi-star-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l5.8 5.8l-4.9.4L7.5 14l-1.6 7l6.2-3.7l6.2 3.7l-.3-1.2l2.9 2.9zm-6.3-3.8L12 15.4l-3.8 2.3l1-4.3l-3.3-2.9l2.5-.2zM11.2 8L10 6.8L12 2l2.8 6.6l7.2.6l-5.1 4.4l-1.1-1.1l2.4-2l-4.4-.4l-1.7-4z"></svg:path>`,
})
export class MdiStarOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarOutlineIcon],svg[mdi-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"></svg:path>`,
})
export class MdiStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarPlusIcon],svg[mdi-star-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiStarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarPlusOutlineIcon],svg[mdi-star-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiStarPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarRemoveIcon],svg[mdi-star-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-3.1 0-5.6 2.3-6 5.3zm14.3-6.5L18 16.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiStarRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarRemoveOutlineIcon],svg[mdi-star-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zm14.3-6.5L18 16.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiStarRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarSettingsIcon],svg[mdi-star-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 2h2v-2h-2zm4 0h2v-2h-2zm7-14.76l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"></svg:path>`,
})
export class MdiStarSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarSettingsOutlineIcon],svg[mdi-star-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22h2v2h-2zm-4 2h2v-2H7zm8 0h2v-2h-2zm1.54-10.03L18.18 21L12 17.27L5.82 21l1.63-7.03L2 9.24l7.19-.61L12 2l2.81 6.63l7.19.61zm-.78 3.69l-.99-4.28l3.32-2.88l-4.38-.37L12 6.09l-1.71 4.04l-4.38.37l3.32 2.88l-.99 4.28L12 15.39z"></svg:path>`,
})
export class MdiStarSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarShootingIcon],svg[mdi-star-shooting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.09 11.77l1.47 6.33L14 14.74L8.44 18.1l1.46-6.33L5 7.5l6.47-.54L14 1l2.53 5.96L23 7.5zM2 12.43c.19 0 .38-.06.55-.17l3.2-2.11l-1.57-1.36l-2.73 1.8c-.461.3-.589.91-.29 1.41c.2.27.52.43.84.43m-.84 9.12c.2.29.52.45.84.45c.19 0 .38-.05.55-.16l4.11-2.71l.34-1.37l.31-1.45l-5.86 3.85c-.461.31-.589.93-.29 1.39m.29-6.17a1 1 0 0 0-.29 1.38c.2.3.52.45.84.45c.19 0 .38-.05.55-.16l5.42-3.55l.27-1.19l-.92-.81z"></svg:path>`,
})
export class MdiStarShootingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarShootingOutlineIcon],svg[mdi-star-shooting-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 7.5l-6.47-.54L14 1l-2.53 5.96L5 7.5l4.9 4.27l-1.46 6.33L14 14.74l5.56 3.36l-1.47-6.33zm-6.86 4.73l.4 1.71l-1.51-.91l-1.03-.62l-1.03.62l-1.51.91l.39-1.71l.28-1.18l-.91-.79L9.88 9.1l1.76-.15l1.2-.1l.47-1.11l.69-1.62l.69 1.62l.47 1.11l1.2.1l1.75.15l-1.33 1.16l-.92.79zM1.16 12c-.299-.5-.171-1.11.29-1.41l2.73-1.8l1.57 1.36l-3.2 2.11c-.17.11-.36.17-.55.17c-.32 0-.64-.16-.84-.43m.29 8.16l5.86-3.85L7 17.76l-.34 1.37l-4.11 2.71c-.17.11-.36.16-.55.16c-.32 0-.64-.16-.84-.45a1.013 1.013 0 0 1 .29-1.39m5.87-8.66l.92.81l-.27 1.19l-5.42 3.55c-.17.11-.36.16-.55.16c-.32 0-.64-.15-.84-.45a1 1 0 0 1 .29-1.38z"></svg:path>`,
})
export class MdiStarShootingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarThreePointsIcon],svg[mdi-star-three-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.6l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5z"></svg:path>`,
})
export class MdiStarThreePointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStarThreePointsOutlineIcon],svg[mdi-star-three-points-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9.5l1.2 4l2.8 3l-4-.9l-4.1.9l2.8-3zm0-6.9l-3 9.8l-7 7.5l10-2.3L22 20l-7-7.5z"></svg:path>`,
})
export class MdiStarThreePointsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStateMachineIcon],svg[mdi-state-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.27 17.05A2.991 2.991 0 0 1 4 22c-1.66 0-3-1.34-3-3s1.34-3 3-3c.18 0 .36 0 .53.05l3.07-5.36l-1.74-.99l4.09-1.12l1.12 4.09l-1.74-.99zM20 16c-1.3 0-2.4.84-2.82 2H11v-2l-3 3l3 3v-2h6.18c.42 1.16 1.52 2 2.82 2c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8-8c.18 0 .36 0 .53-.05l3.07 5.36l-1.74.99l4.09 1.12l1.12-4.09l-1.74.99l-3.06-5.37A2.991 2.991 0 0 0 12 2c-1.66 0-3 1.34-3 3s1.34 3 3 3"></svg:path>`,
})
export class MdiStateMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSteamIcon],svg[mdi-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58a2.84 2.84 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77s-3.78 1.69-3.78 3.77v.05l-2.37 3.46l-.16-.01c-.59 0-1.14.18-1.59.49L2 11.2C2.43 6.05 6.73 2 12 2M8.28 17.17c.8.33 1.72-.04 2.05-.84s-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03c.53.21.94.62 1.15 1.15c.22.52.22 1.1 0 1.62c-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04zm9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52a2.5 2.5 0 0 1 2.51-2.51a2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89c1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89"></svg:path>`,
})
export class MdiSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSteamBoxIcon],svg[mdi-steam-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4l3.19 1.31a2.843 2.843 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77s-3.78 1.69-3.78 3.77v.05l-2.37 3.46l-.16-.01c-.59 0-1.14.18-1.59.49L3 11.6V5a2 2 0 0 1 2-2h14M8.28 17.17c.8.33 1.72-.04 2.05-.84c.33-.8-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03c.53.21.94.62 1.15 1.15c.22.52.22 1.1 0 1.62c-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04l1.22.5m9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52a2.51 2.51 0 0 1 2.51-2.51a2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89c1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89z" fill="currentColor"></svg:path>`,
})
export class MdiSteamBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSteeringIcon],svg[mdi-steering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19.92c1.8-.22 3.35-.97 4.65-2.27S19.7 14.8 19.92 13h-3c-.22 1-.68 1.84-1.38 2.54S14 16.7 13 16.92zM10 8h4l3 3h2.92c-.25-1.95-1.13-3.62-2.65-5C15.76 4.66 14 4 12 4s-3.76.66-5.27 2c-1.52 1.38-2.4 3.05-2.65 5H7zm1 11.92v-3c-1-.22-1.84-.68-2.54-1.38S7.3 14 7.08 13h-3c.22 1.77.97 3.3 2.27 4.6S9.2 19.67 11 19.92M12 2c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12s-1 5.1-2.95 7.05S14.75 22 12 22s-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"></svg:path>`,
})
export class MdiSteeringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSteeringOffIcon],svg[mdi-steering-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-1.48-1.5Q14.925 22 12 22c-2.75 0-5.1-1-7.05-2.95S2 14.75 2 12q0-2.925 1.5-5.25zm11 14.65c1-.12 1.93-.42 2.78-.87l-2.28-2.27c-.16.06-.34.1-.5.14zM4.08 11H7l.37-.37l-2.41-2.4A7.9 7.9 0 0 0 4.08 11m15.84 2h-3c-.12.54-.32 1.05-.59 1.5L9.91 8.09L10 8h4l3 3h2.92c-.25-1.95-1.13-3.62-2.65-5C15.76 4.66 14 4 12 4c-1.74 0-3.29.5-4.66 1.5L5.91 4.09C7.66 2.71 9.69 2 12 2c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12c0 2.31-.71 4.34-2.09 6.09l-1.41-1.42A7.7 7.7 0 0 0 19.92 13M11 19.92v-3c-1-.22-1.84-.68-2.54-1.38S7.3 14 7.08 13h-3c.22 1.77.97 3.3 2.27 4.6S9.2 19.67 11 19.92"></svg:path>`,
})
export class MdiSteeringOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStepBackwardIcon],svg[mdi-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14h-3V5m-2 0v14L3 12"></svg:path>`,
})
export class MdiStepBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStepBackward2Icon],svg[mdi-step-backward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5h-3v14h3zm-5 0L1 12l11 7zm10 0h-3v14h3z"></svg:path>`,
})
export class MdiStepBackward2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStepForwardIcon],svg[mdi-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h3V5m2 0v14l11-7"></svg:path>`,
})
export class MdiStepForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStepForward2Icon],svg[mdi-step-forward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h3v14H7zm5 0l11 7l-11 7zM2 5h3v14H2z"></svg:path>`,
})
export class MdiStepForward2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStethoscopeIcon],svg[mdi-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8c.56 0 1 .43 1 1a1 1 0 0 1-1 1c-.57 0-1-.45-1-1c0-.57.43-1 1-1M2 2v9c0 2.96 2.19 5.5 5.14 5.91c.62 3.01 3.28 5.09 6.36 5.09a6.5 6.5 0 0 0 6.5-6.5v-3.69c1.16-.42 2-1.52 2-2.81a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 1.29.84 2.4 2 2.81v3.6c0 2.5-2 4.5-4.5 4.5c-2 0-3.68-1.21-4.28-3.01C12 16.3 14 13.8 14 11V2h-4v3h2v6a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5h2V2z"></svg:path>`,
})
export class MdiStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerIcon],svg[mdi-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M15 20v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerAlertIcon],svg[mdi-sticker-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M13 17h-2v-2h2v1m0-3h-2V7h2v5m2 8v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerAlertOutlineIcon],svg[mdi-sticker-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm0-2h2V7h-2zm11-7.5V16l-6 6H5.5C3.6 22 2 20.4 2 18.5v-13C2 3.6 3.6 2 5.5 2h13C20.4 2 22 3.6 22 5.5m-2 .3c0-1-.8-1.8-1.8-1.8H5.8C4.8 4 4 4.8 4 5.8v12.5c0 1 .8 1.8 1.8 1.8H15v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerCheckIcon],svg[mdi-sticker-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4l2.1 2.1L15.6 8L17 9.4L10.5 16zm8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerCheckOutlineIcon],svg[mdi-sticker-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M20 15h-1.5c-1.9 0-3.5 1.6-3.5 3.5V20H5.8c-1 0-1.8-.8-1.8-1.8V5.8C4 4.8 4.8 4 5.8 4h12.5c1 0 1.8.8 1.8 1.8V15m-4.9-6.8l1.5 1.5l-6 6l-3.5-3.5l1.5-1.5l2 2z"></svg:path>`,
})
export class MdiStickerCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerCircleOutlineIcon],svg[mdi-sticker-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.12 18.46l6.18-6.18c-1.36.31-2.99.92-4.23 2.18c-1.03 1.04-1.68 2.37-1.95 4M20.75 10h.3c.39 0 .74.27.88.64c.14.36.07.79-.23 1.07l-10 10c-.2.19-.44.29-.7.29l-.36-.07c-.37-.14-.64-.49-.64-.88c-.16-3.39.73-6.09 2.66-8.02C15.5 10.2 19.62 10 20.75 10M12 2c4.5 0 8.34 3 9.58 7.11L20 9h-.58C18.24 6.07 15.36 4 12 4a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42c-.03.71 0 1.43.11 2.15C5 20.33 2 16.5 2 12C2 6.47 6.5 2 12 2"></svg:path>`,
})
export class MdiStickerCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerEmojiIcon],svg[mdi-sticker-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2C3.56 2 2 3.56 2 5.5v13C2 20.44 3.56 22 5.5 22H16l6-6V5.5C22 3.56 20.44 2 18.5 2zm.25 2h12.5A1.75 1.75 0 0 1 20 5.75V15h-1.5c-1.94 0-3.5 1.56-3.5 3.5V20H5.75A1.75 1.75 0 0 1 4 18.25V5.75A1.75 1.75 0 0 1 5.75 4m8.69 2.77c-.16 0-.32.02-.47.06c-.94.26-1.47 1.22-1.23 2.17c.05.15.12.3.21.44l3.23-.88q0-.255-.06-.51c-.21-.75-.9-1.28-1.68-1.28M8.17 8.5c-.17 0-.32 0-.47.05c-.93.26-1.48 1.22-1.23 2.15c.03.16.12.3.21.46l3.23-.88c0-.17-.02-.34-.06-.5A1.72 1.72 0 0 0 8.17 8.5m8.55 2.76l-9.13 2.51a5.27 5.27 0 0 0 5.36 1.64a5.27 5.27 0 0 0 3.77-4.15"></svg:path>`,
})
export class MdiStickerEmojiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerMinusIcon],svg[mdi-sticker-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M8 11h8v2H8zm7 9v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerMinusOutlineIcon],svg[mdi-sticker-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h8v2H8zm14-5.5V16l-6 6H5.5C3.6 22 2 20.4 2 18.5v-13C2 3.6 3.6 2 5.5 2h13C20.4 2 22 3.6 22 5.5m-2 .3c0-1-.8-1.8-1.8-1.8H5.8C4.8 4 4 4.8 4 5.8v12.5c0 1 .8 1.8 1.8 1.8H15v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerOutlineIcon],svg[mdi-sticker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2zm.3 2h12.5c1 0 1.8.8 1.8 1.8V15h-1.5c-1.9 0-3.5 1.6-3.5 3.5V20H5.8c-1 0-1.8-.8-1.8-1.8V5.8C4 4.8 4.8 4 5.8 4"></svg:path>`,
})
export class MdiStickerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerPlusIcon],svg[mdi-sticker-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M13 16h-2v-3H8v-2h3V8h2v3h3v2h-3zm2 4v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerPlusOutlineIcon],svg[mdi-sticker-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h3v2h-3v3h-2v-3H8v-2h3V8h2zm9-5.5V16l-6 6H5.5C3.6 22 2 20.4 2 18.5v-13C2 3.6 3.6 2 5.5 2h13C20.4 2 22 3.6 22 5.5m-2 .3c0-1-.8-1.8-1.8-1.8H5.8C4.8 4 4 4.8 4 5.8v12.5c0 1 .8 1.8 1.8 1.8H15v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerRemoveIcon],svg[mdi-sticker-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M12 13.4l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.1 2.1l2.1 2.1l-1.4 1.4zm3 6.6v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerRemoveOutlineIcon],svg[mdi-sticker-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9.4L13.4 12l2.6 2.6l-1.4 1.4l-2.6-2.6L9.4 16L8 14.6l2.6-2.6L8 9.4L9.4 8l2.6 2.6L14.6 8zm6-3.9V16l-6 6H5.5C3.6 22 2 20.4 2 18.5v-13C2 3.6 3.6 2 5.5 2h13C20.4 2 22 3.6 22 5.5m-2 .3c0-1-.8-1.8-1.8-1.8H5.8C4.8 4 4 4.8 4 5.8v12.5c0 1 .8 1.8 1.8 1.8H15v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerTextIcon],svg[mdi-sticker-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M6 7h12v2H6zm0 4h12v2H6zm7 6H6v-2h7zm2 3v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"></svg:path>`,
})
export class MdiStickerTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStickerTextOutlineIcon],svg[mdi-sticker-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2m1.6 13h-1.5c-1.9 0-3.5 1.6-3.5 3.5V20H5.8c-1 0-1.8-.8-1.8-1.8V5.8C4 4.8 4.8 4 5.8 4h12.5c1 0 1.8.8 1.8 1.8zM7 7h10v2H7zm0 4h10v2H7zm0 4h6v2H7z"></svg:path>`,
})
export class MdiStickerTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStockingIcon],svg[mdi-stocking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v8c0 .85-.5 1.57-1.26 1.86L9.5 21.77c-1 .47-2.21.04-2.67-.96L6 19c-.5-1-.05-2.2.95-2.66L10 14.91V9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-7 2v3h7V4z"></svg:path>`,
})
export class MdiStockingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStomachIcon],svg[mdi-stomach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18c.67 1.85 2.07 4 8 4c2.36 0 5.07-.07 7-2c1-1 3-3 3-9s-2-7-4-7c-1.38 0-3 0-4 2v.03a1.82 1.82 0 0 1-1.87.92C11 6.81 11 6.37 11 6V2H9v4a2.92 2.92 0 0 0 3 3c1 0 1 1.78 1 3c0 1.89-.5 3.26-2 4c-2.31 1.15-4.61 1-5.39-.53a1.5 1.5 0 0 0-2.47-.6A3.67 3.67 0 0 0 2 18v4h2Z"></svg:path>`,
})
export class MdiStomachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoolIcon],svg[mdi-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c0-2.21-1.79-4-4-4H8C5.78 2 4 3.79 4 6v2h3L4 22h2l1.5-7H11v7h2v-7h3.5l1.5 7h2L17 8h3zM7.93 13L9 8h2v5zm8.14 0H13V8h2z"></svg:path>`,
})
export class MdiStoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoolOutlineIcon],svg[mdi-stool-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c0-2.21-1.79-4-4-4H8C5.78 2 4 3.79 4 6v2h3L4 22h2l1.5-7H11v7h2v-7h3.5l1.5 7h2L17 8h3zM7.93 13L9 8h2v5zm8.14 0H13V8h2zM6 6a2 2 0 0 1 2-2h8c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class MdiStoolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStopIcon],svg[mdi-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18H6V6h12z"></svg:path>`,
})
export class MdiStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStopCircleIcon],svg[mdi-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M9 9h6v6H9"></svg:path>`,
})
export class MdiStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStopCircleOutlineIcon],svg[mdi-stop-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8M9 9v6h6V9"></svg:path>`,
})
export class MdiStopCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorageTankIcon],svg[mdi-storage-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6m-7-1h4v1h-4z"></svg:path>`,
})
export class MdiStorageTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorageTankOutlineIcon],svg[mdi-storage-tank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6m-7-1h4v1h-4zm7 11H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class MdiStorageTankOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreIcon],svg[mdi-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16z"></svg:path>`,
})
export class MdiStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStore24HourIcon],svg[mdi-store-24-hour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12h-1v-2h-2V7h1v2h1V7h1m-5 3H9v1h2v1H8V9h2V8H8V7h3m8 0V4H5v3H2v13h8v-4h4v4h8V7z"></svg:path>`,
})
export class MdiStore24HourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreAlertIcon],svg[mdi-store-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 7l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm8 11H4v-4h6zm8-12H2V4h16zm5 1v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiStoreAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreAlertOutlineIcon],svg[mdi-store-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 7l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm8 11H4v-4h6zm-6.96-6l.6-3h12.72l.6 3zM18 6H2V4h16zm5 1v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiStoreAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreCheckIcon],svg[mdi-store-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-4.31 8H14v1.69c-.63.95-1 2.08-1 3.31c0 .34.04.67.09 1H4v-6H3v-2l1-5h16l1 5v1.35c-.63-.22-1.3-.35-2-.35c-1.23 0-2.36.37-3.31 1M12 14H6v4h6zm9.34 1.84l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiStoreCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreCheckOutlineIcon],svg[mdi-store-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.13 2 .35V12l-1-5H4l-1 5v2h1v6h9.09c-.05-.33-.09-.66-.09-1c0-1.23.37-2.36 1-3.31V14h1.69c.95-.63 2.08-1 3.31-1m-7 5H6v-4h6zm-6.96-6l.6-3h12.72l.6 3zM20 6H4V4h16zm2.5 11.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z"></svg:path>`,
})
export class MdiStoreCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreClockIcon],svg[mdi-store-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H2V2h16zm-.5 9H16v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-3.53 0-6.43-2.61-6.92-6H2v-6H1v-2l1-5h16l1 5v.29c2.89.87 5 3.54 5 6.71M4 16h6v-4H4zm18 1c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiStoreClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreClockOutlineIcon],svg[mdi-store-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H2V2h16zm-.5 9H16v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-3.53 0-6.43-2.61-6.92-6H2v-6H1v-2l1-5h16l1 5v.29c2.89.87 5 3.54 5 6.71M3.04 10h13.92l-.6-3H3.64zM4 16h6v-4H4zm18 1c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiStoreClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreCogIcon],svg[mdi-store-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-1 6c-1.91 0-3.63.76-4.89 2H14v.11c-1.24 1.26-2 2.98-2 4.89c0 .34.03.67.08 1H4v-6H3v-2l1-5h16l1 5v.3c-.63-.19-1.3-.3-2-.3m-7 2H6v4h6zm11.8 6.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiStoreCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreCogOutlineIcon],svg[mdi-store-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-1 6c-1.91 0-3.63.76-4.89 2H14v.11c-1.24 1.26-2 2.98-2 4.89c0 .34.03.67.08 1H4v-6H3v-2l1-5h16l1 5v.3c-.63-.19-1.3-.3-2-.3m-7 2H6v4h6zm6.96-2l-.6-3H5.64l-.6 3zm4.84 8.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiStoreCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreEditIcon],svg[mdi-store-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-6 10.13l-3 3V20H4v-6H3v-2l1-5h16l.61 3.07c-.45.1-.88.33-1.22.67L16.13 14H14zM12 14H6v4h6zm10.85-.53l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05z"></svg:path>`,
})
export class MdiStoreEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreEditOutlineIcon],svg[mdi-store-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-6 10.13l-3 3V20H4v-6H3v-2l1-5h16l.61 3.07c-.45.1-.88.33-1.22.67l-.57.57L18.36 9H5.64l-.6 3h13.09l-2 2H14zM12 14H6v4h6zm10.85-.53l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05z"></svg:path>`,
})
export class MdiStoreEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreMarkerIcon],svg[mdi-store-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-7 9.5c0 1.14.43 2.36 1 3.5v1H4v-6H3v-2l1-5h16l.7 3.5c-.7-.32-1.42-.5-2.2-.5c-3 0-5.5 2.5-5.5 5.5M12 14H6v4h6zm10 1.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiStoreMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreMarkerOutlineIcon],svg[mdi-store-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-5.7 6c-.8.96-1.3 2.18-1.3 3.5c0 1.14.43 2.36 1 3.5v1H4v-6H3v-2l1-5h16l.7 3.5c-.66-.32-1.38-.5-2.14-.5l-.2-1H5.64l-.6 3zM12 14H6v4h6zm10 1.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiStoreMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreMinusIcon],svg[mdi-store-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h16V4M4 7l-1 5v2h1v6h9c-.05-.34-.08-.69-.08-1.05c0-1.22.38-2.42 1.08-3.42V14h1.54c1-.67 2.17-1.04 3.37-1.04c.71 0 1.42.13 2.09.38V12l-1-5M6 14h6v4H6m9 0v2h8v-2"></svg:path>`,
})
export class MdiStoreMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreMinusOutlineIcon],svg[mdi-store-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-4.31 8H14v1.69c-.63.95-1 2.08-1 3.31c0 .34.04.67.09 1H4v-6H3v-2l1-5h16l1 5v1.35c-.63-.22-1.3-.35-2-.35c-1.23 0-2.36.37-3.31 1M12 14H6v4h6zm6.96-2l-.6-3H5.64l-.6 3zM15 18v2h8v-2z"></svg:path>`,
})
export class MdiStoreMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreOffIcon],svg[mdi-store-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.2 6l-2-2H20v2zM20 16.8V14h1v-2l-1-5h-9.8l7 7h.8v.8zm2.11 4.66l-1.27 1.27L14 15.89V20H4v-6H3v-2l1-5h1.11l-4-4l1.28-1.27zM12 14H6v4h6z"></svg:path>`,
})
export class MdiStoreOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreOffOutlineIcon],svg[mdi-store-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l4 4H4l-1 5v2h1v6h10v-4.11l6.84 6.84l1.27-1.27zM5.64 9h1.47l3 3H5.04zM12 18H6v-4h6zm6-3.2V14h-.8l-2-2h3.76l-.6-3H12.2l-2-2H20l1 5v2h-1v2.8zM9.2 6l-2-2H20v2z"></svg:path>`,
})
export class MdiStoreOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreOutlineIcon],svg[mdi-store-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.36 9l.6 3H5.04l.6-3zM20 4H4v2h16zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zM6 18v-4h6v4z"></svg:path>`,
})
export class MdiStoreOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorePlusIcon],svg[mdi-store-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h16V4M4 7l-1 5v2h1v6h9c-.05-.34-.08-.69-.08-1.05c0-1.22.38-2.42 1.08-3.42V14h1.54c1-.67 2.17-1.04 3.37-1.04c.71 0 1.42.13 2.09.38V12l-1-5M6 14h6v4H6m12-3v3h-3v2h3v3h2v-3h3v-2h-3v-3"></svg:path>`,
})
export class MdiStorePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorePlusOutlineIcon],svg[mdi-store-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-4.31 8H14v1.69c-.63.95-1 2.08-1 3.31c0 .34.04.67.09 1H4v-6H3v-2l1-5h16l1 5v1.35c-.63-.22-1.3-.35-2-.35c-1.23 0-2.36.37-3.31 1M12 14H6v4h6zm6.96-2l-.6-3H5.64l-.6 3zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiStorePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreRemoveIcon],svg[mdi-store-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16v2H4zm11.46 12.88l1.42-1.42L19 17.59l2.12-2.12l1.42 1.41L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.12-2.12M4 7h16l1 5v1.34a6 6 0 0 0-2.09-.38c-1.2 0-2.37.37-3.37 1.04H14v1.53c-.7 1-1.08 2.2-1.08 3.42L13 20H4v-6H3v-2zm2 7v4h6v-4z"></svg:path>`,
})
export class MdiStoreRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreRemoveOutlineIcon],svg[mdi-store-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm-4.31 8H14v1.69c-.63.95-1 2.08-1 3.31c0 .34.04.67.09 1H4v-6H3v-2l1-5h16l1 5v1.35c-.63-.22-1.3-.35-2-.35c-1.23 0-2.36.37-3.31 1M12 14H6v4h6zm6.96-2l-.6-3H5.64l-.6 3zm3.58 4.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiStoreRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreSearchIcon],svg[mdi-store-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.9 10.9a6.53 6.53 0 0 0-1.9 4.6V12H4v4h6v-.5c0 .85.17 1.7.5 2.5H2v-6H1v-2l1-5h16l.89 4.46a6.47 6.47 0 0 0-6.99 1.44M18 2H2v2h16zm5.39 19L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 15.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiStoreSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreSearchOutlineIcon],svg[mdi-store-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H2V2h16zm-4.96 6h-10l.6-3h12.72l.4 2c.74.04 1.45.19 2.13.46L18 5H2l-1 5v2h1v6h8.5c-.33-.8-.5-1.65-.5-2.5v.5H4v-4h6v3.5c0-1.66.64-3.33 1.9-4.6q.54-.525 1.14-.9m10.35 11L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 15.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiStoreSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreSettingsIcon],svg[mdi-store-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm1 6v2h-1v6h-2v-6h-4v6H4v-6H3v-2l1-5h16zm-9 2H6v4h6zM7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiStoreSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoreSettingsOutlineIcon],svg[mdi-store-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm1 6v2h-1v6h-2v-6h-4v6H4v-6H3v-2l1-5h16zm-9 2H6v4h6zm6.96-2l-.6-3H5.64l-.6 3zM7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiStoreSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontIcon],svg[mdi-storefront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.06 3c-.43 0-.84.14-1.22.42s-.6.64-.7 1.08L2.11 8.91c-.25 1.09-.05 2.01.58 2.82c.12.12.24.24.35.34c.59.57 1.24.93 2.18.93s1.69-.41 2.25-.95c.63.62 1.39.95 2.33.95c.84 0 1.64-.37 2.2-.93c.68.63 1.45.93 2.3.93c.87 0 1.61-.33 2.24-.95c.57.57 1.32.95 2.27.95s1.62-.35 2.19-.94c.09-.09.18-.19.28-.29c.66-.82.86-1.77.61-2.86L20.86 4.5c-.13-.44-.36-.8-.73-1.08A1.88 1.88 0 0 0 18.94 3m-.05 1.97l1.08 4.41c.09.43 0 .82-.28 1.17c-.25.31-.56.45-.94.45c-.31 0-.58-.1-.8-.34c-.22-.23-.34-.5-.37-.82L16.97 5M5.06 5h1.97l-.61 4.84C6.3 10.63 5.91 11 5.25 11c-.41 0-.72-.14-.94-.45c-.28-.35-.37-.74-.28-1.17M9.05 5H11v4.7c0 .35-.11.65-.36.92c-.25.26-.56.38-.94.38c-.34 0-.63-.12-.86-.41S8.5 10 8.5 9.66V9.5M13 5h1.95l.55 4.5c.08.42 0 .77-.29 1.07c-.26.3-.6.43-1.01.43c-.31 0-.59-.12-.84-.38A1.3 1.3 0 0 1 13 9.7M3 14.03V19c0 1.11.89 2 2 2h14a2 2 0 0 0 2-2v-4.95c-.55.58-1.25.91-2 .95c-1 .03-1.75-.26-2.46-.95c-.6.6-1.4.95-2.24.95c-.9 0-1.7-.36-2.3-.93c-.57.57-1.35.93-2.22.93c-.91 0-1.71-.35-2.31-.95c-.58.59-1.37.95-2.24.95c-.9 0-1.57-.35-2.23-.97"></svg:path>`,
})
export class MdiStorefrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontCheckIcon],svg[mdi-storefront-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.06 3c-.43 0-.84.14-1.22.42s-.6.64-.7 1.08L2.11 8.91c-.25 1.09-.05 2.01.58 2.82c.12.12.24.24.35.34c.59.57 1.24.93 2.18.93s1.69-.41 2.25-.95c.63.62 1.39.95 2.33.95c.84 0 1.64-.37 2.2-.93c.68.63 1.45.93 2.3.93c.87 0 1.61-.33 2.24-.95c.57.57 1.32.95 2.27.95s1.62-.35 2.19-.94l.13-.14l.15-.15c.66-.82.86-1.77.61-2.86L20.86 4.5c-.13-.44-.36-.8-.73-1.08A1.88 1.88 0 0 0 18.94 3m-.05 1.97l1.08 4.41c.09.43 0 .82-.28 1.17c-.25.31-.56.45-.94.45c-.31 0-.58-.1-.8-.34c-.22-.23-.34-.5-.37-.82L16.97 5M5.06 5h1.97l-.61 4.84C6.3 10.63 5.91 11 5.25 11c-.41 0-.72-.14-.94-.45c-.28-.35-.37-.74-.28-1.17M9.05 5H11v4.7c0 .35-.11.65-.36.92c-.25.26-.56.38-.94.38c-.34 0-.63-.12-.86-.41S8.5 10 8.5 9.66V9.5M13 5h1.95l.55 4.5c.08.42 0 .77-.29 1.07c-.26.3-.6.43-1.01.43c-.31 0-.59-.12-.84-.38A1.3 1.3 0 0 1 13 9.7m-.03 5.02a3.4 3.4 0 0 1-.97-.65c-.57.57-1.35.93-2.22.93c-.91 0-1.71-.35-2.31-.95c-.58.59-1.37.95-2.24.95c-.9 0-1.57-.35-2.23-.97V19c0 1.11.89 2 2 2h7.8c-.51-.88-.8-1.91-.8-3c0-1.21.36-2.34.97-3.28M17 21l-2.75-3l1.16-1.16L17 18.43l3.59-3.59l1.16 1.41Z"></svg:path>`,
})
export class MdiStorefrontCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontCheckOutlineIcon],svg[mdi-storefront-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.06 3c-.43 0-.84.14-1.22.42s-.6.64-.7 1.08L2.11 8.91c-.25 1.09-.05 2.01.58 2.82c.11.11.21.21.31.3V19c0 .5.2 1 .61 1.39S4.5 21 5 21h7.8c-.35-.61-.6-1.28-.72-2H5v-6h.22c.94 0 1.69-.41 2.25-.95c.63.62 1.39.95 2.33.95c.84 0 1.64-.37 2.2-.93c.68.63 1.45.93 2.3.93c.87 0 1.61-.33 2.24-.95c.57.57 1.32.95 2.27.95s1.62-.35 2.19-.94l.13-.14l.15-.15c.66-.82.86-1.77.61-2.86L20.86 4.5c-.13-.44-.36-.8-.73-1.08A1.88 1.88 0 0 0 18.94 3m-.05 1.97l1.08 4.41c.09.43 0 .82-.28 1.17c-.25.31-.56.45-.94.45c-.31 0-.58-.1-.8-.34c-.22-.23-.34-.5-.37-.82L16.97 5M5.06 5h1.97l-.61 4.84C6.3 10.63 5.91 11 5.25 11c-.41 0-.72-.14-.94-.45c-.28-.35-.37-.74-.28-1.17M9.05 5H11v4.7c0 .35-.11.65-.36.92c-.25.26-.56.38-.94.38c-.34 0-.63-.12-.86-.41S8.5 10 8.5 9.66V9.5M13 5h1.95l.55 4.5c.08.42 0 .77-.29 1.07c-.26.3-.6.43-1.01.43c-.31 0-.59-.12-.84-.38A1.3 1.3 0 0 1 13 9.7M17 21l-2.75-3l1.16-1.16L17 18.43l3.59-3.59l1.16 1.41Z"></svg:path>`,
})
export class MdiStorefrontCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontEditIcon],svg[mdi-storefront-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 3.42c.38-.28.79-.42 1.22-.42h13.88c.44 0 .83.14 1.19.42c.37.28.6.64.73 1.08l1.03 4.41c.11.5.11.96.06 1.4c-.72-.28-1.55-.21-2.22.19c.27-.33.33-.71.24-1.12l-1.08-4.41l-1.92.03l.61 4.84c.03.32.15.59.37.82c.22.24.49.34.8.34c.16 0 .31-.03.45-.08l-.13.14l-.01-.01l-1.64 1.64c-.33-.16-.62-.38-.88-.64c-.63.62-1.37.95-2.24.95c-.85 0-1.62-.3-2.3-.93c-.56.56-1.36.93-2.2.93c-.94 0-1.7-.33-2.33-.95c-.56.54-1.31.95-2.25.95s-1.59-.36-2.18-.93c-.11-.1-.23-.22-.35-.34c-.63-.81-.83-1.73-.58-2.82L3.14 4.5c.1-.44.32-.8.7-1.08M7.03 5H5.06L4.03 9.38c-.09.43 0 .82.28 1.17c.22.31.53.45.94.45c.66 0 1.05-.37 1.17-1.16M11 5H9.05L8.5 9.5v.16c0 .34.11.64.34.93s.52.41.86.41c.38 0 .69-.12.94-.38c.25-.27.36-.57.36-.92M14.95 5H13v4.7c0 .35.11.65.36.92c.25.26.53.38.84.38c.41 0 .75-.13 1.01-.43c.29-.3.37-.65.29-1.07m5.61 6.43l-2.05-2.05L13 19.94V22h2.06m-.76-7c.33 0 .66-.05.97-.16L11 19.11V21H5c-1.11 0-2-.89-2-2v-4.97c.66.62 1.33.97 2.23.97c.87 0 1.66-.36 2.24-.95c.6.6 1.4.95 2.31.95c.87 0 1.65-.36 2.22-.93c.6.57 1.4.93 2.3.93m8.4-.65l-1 1l-2.05-2.05l1-1c.07-.07.16-.12.25-.14c.18-.05.38 0 .52.14l1.28 1.28c.21.21.21.56 0 .77"></svg:path>`,
})
export class MdiStorefrontEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontEditOutlineIcon],svg[mdi-storefront-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.06 3c-.43 0-.84.14-1.22.42s-.6.64-.7 1.08L2.11 8.91c-.25 1.09-.05 2.04.61 2.86l.28.28V19c0 .5.2 1 .61 1.39S4.5 21 5 21h6v-1.89l.11-.11H5v-6h.25c.91 0 1.64-.33 2.2-.95c.63.62 1.41.95 2.35.95c.84 0 1.58-.33 2.2-.95c.69.62 1.45.95 2.3.95c.87 0 1.62-.33 2.25-.95c.25.28.54.49.86.65l1.65-1.65l.01.01l.13-.14c-.14.05-.29.08-.45.08c-.31 0-.58-.1-.8-.34c-.22-.23-.34-.5-.37-.82L16.97 5l1.92-.03l1.08 4.41c.09.41.03.78-.24 1.12c.67-.4 1.5-.47 2.22-.19c.05-.44.05-.9-.06-1.4L20.86 4.5c-.13-.44-.36-.8-.73-1.08A1.88 1.88 0 0 0 18.94 3M5.06 5h1.97l-.61 4.84C6.3 10.63 5.91 11 5.25 11c-.41 0-.72-.14-.94-.45c-.28-.35-.37-.74-.28-1.17M9.05 5H11v4.7c0 .35-.11.65-.36.92c-.25.26-.56.38-.94.38c-.34 0-.63-.12-.86-.41S8.5 10 8.5 9.66V9.5M13 5h1.95l.55 4.5c.08.42 0 .77-.29 1.07c-.26.3-.6.43-1.01.43c-.31 0-.59-.12-.84-.38A1.3 1.3 0 0 1 13 9.7M15.06 22H13v-2.06l6.06-6.06l2.05 2.05m-.46-3.63c.1-.1.22-.15.35-.16c.15 0 .31.05.42.16l1.28 1.28c.21.21.21.56 0 .77l-1 1l-2.05-2.05Z"></svg:path>`,
})
export class MdiStorefrontEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontMinusIcon],svg[mdi-storefront-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 3.42c.38-.28.79-.42 1.22-.42h13.88c.44 0 .83.14 1.19.42c.37.28.6.64.73 1.08l1.03 4.41c.25 1.09.05 2.04-.61 2.86l-.15.15l-.13.14c-.57.59-1.24.94-2.19.94s-1.7-.38-2.27-.95c-.63.62-1.37.95-2.24.95c-.85 0-1.62-.3-2.3-.93c-.56.56-1.36.93-2.2.93c-.94 0-1.7-.33-2.33-.95c-.56.54-1.31.95-2.25.95s-1.59-.36-2.18-.93c-.11-.1-.23-.22-.35-.34c-.63-.81-.83-1.73-.58-2.82L3.14 4.5c.1-.44.32-.8.7-1.08m16.13 5.96l-1.08-4.41l-1.92.03l.61 4.84c.03.32.15.59.37.82c.22.24.49.34.8.34c.38 0 .69-.14.94-.45c.28-.35.37-.74.28-1.17M7.03 5H5.06L4.03 9.38c-.09.43 0 .82.28 1.17c.22.31.53.45.94.45c.66 0 1.05-.37 1.17-1.16zM11 5H9.05L8.5 9.5v.16c0 .34.11.64.34.93s.52.41.86.41c.38 0 .69-.12.94-.38c.25-.27.36-.57.36-.92zm3.95 0H13v4.7c0 .35.11.65.36.92c.25.26.53.38.84.38c.41 0 .75-.13 1.01-.43c.29-.3.37-.65.29-1.07zM22 17v2h-8v-2zm-10-2.93c.28.27.61.49.97.65c-.61.94-.97 2.07-.97 3.28c0 1.09.29 2.12.8 3H5c-1.11 0-2-.89-2-2v-4.97c.66.62 1.33.97 2.23.97c.87 0 1.66-.36 2.24-.95c.6.6 1.4.95 2.31.95c.87 0 1.65-.36 2.22-.93"></svg:path>`,
})
export class MdiStorefrontMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontMinusOutlineIcon],svg[mdi-storefront-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 3.42c.38-.28.79-.42 1.22-.42h13.88c.44 0 .83.14 1.19.42c.37.28.6.64.73 1.08l1.03 4.41c.25 1.09.05 2.04-.61 2.86l-.15.15l-.13.14c-.57.59-1.24.94-2.19.94s-1.7-.38-2.27-.95c-.63.62-1.37.95-2.24.95c-.85 0-1.62-.3-2.3-.93c-.56.56-1.36.93-2.2.93c-.94 0-1.7-.33-2.33-.95c-.56.54-1.31.95-2.25.95H5v6h7.08c.12.72.37 1.39.72 2H5c-.5 0-1-.22-1.39-.61S3 19.5 3 19v-6.97c-.1-.09-.2-.19-.31-.3c-.63-.81-.83-1.73-.58-2.82L3.14 4.5c.1-.44.32-.8.7-1.08m16.13 5.96l-1.08-4.41l-1.92.03l.61 4.84c.03.32.15.59.37.82c.22.24.49.34.8.34c.38 0 .69-.14.94-.45c.28-.35.37-.74.28-1.17M7.03 5H5.06L4.03 9.38c-.09.43 0 .82.28 1.17c.22.31.53.45.94.45c.66 0 1.05-.37 1.17-1.16zM11 5H9.05L8.5 9.5v.16c0 .34.11.64.34.93s.52.41.86.41c.38 0 .69-.12.94-.38c.25-.27.36-.57.36-.92zm3.95 0H13v4.7c0 .35.11.65.36.92c.25.26.53.38.84.38c.41 0 .75-.13 1.01-.43c.29-.3.37-.65.29-1.07zM14 17v2h8v-2z"></svg:path>`,
})
export class MdiStorefrontMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontOutlineIcon],svg[mdi-storefront-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.06 3c-.43 0-.84.14-1.22.42s-.6.64-.7 1.08L2.11 8.91c-.25 1.09-.05 2.04.61 2.86l.28.28V19c0 .5.2 1 .61 1.39S4.5 21 5 21h14c.5 0 1-.2 1.39-.61S21 19.5 21 19v-6.95l.28-.28c.66-.82.86-1.77.61-2.86L20.86 4.5c-.13-.44-.36-.8-.73-1.08A1.88 1.88 0 0 0 18.94 3zm13.83 1.97l1.08 4.41c.09.43 0 .82-.28 1.17c-.25.31-.56.45-.94.45c-.31 0-.58-.1-.8-.34c-.22-.23-.34-.5-.37-.82L16.97 5zM5.06 5h1.97l-.61 4.84C6.3 10.63 5.91 11 5.25 11c-.41 0-.72-.14-.94-.45c-.28-.35-.37-.74-.28-1.17zm3.99 0H11v4.7c0 .35-.11.65-.36.92c-.25.26-.56.38-.94.38c-.34 0-.63-.12-.86-.41S8.5 10 8.5 9.66V9.5zM13 5h1.95l.55 4.5c.08.42 0 .77-.29 1.07c-.26.3-.6.43-1.01.43c-.31 0-.59-.12-.84-.38A1.3 1.3 0 0 1 13 9.7zm-5.55 7.05c.63.62 1.41.95 2.35.95c.84 0 1.58-.33 2.2-.95c.69.62 1.45.95 2.3.95c.87 0 1.62-.33 2.25-.95c.56.62 1.31.95 2.25.95h.23v6H5v-6h.25c.91 0 1.64-.33 2.2-.95"></svg:path>`,
})
export class MdiStorefrontOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontPlusIcon],svg[mdi-storefront-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 3.42c.38-.28.79-.42 1.22-.42h13.88c.44 0 .83.14 1.19.42c.37.28.6.64.73 1.08l1.03 4.41c.25 1.09.05 2.04-.61 2.86l-.15.15l-.13.14c-.57.59-1.24.94-2.19.94s-1.7-.38-2.27-.95c-.63.62-1.37.95-2.24.95c-.85 0-1.62-.3-2.3-.93c-.56.56-1.36.93-2.2.93c-.94 0-1.7-.33-2.33-.95c-.56.54-1.31.95-2.25.95s-1.59-.36-2.18-.93c-.11-.1-.23-.22-.35-.34c-.63-.81-.83-1.73-.58-2.82L3.14 4.5c.1-.44.32-.8.7-1.08m16.13 5.96l-1.08-4.41l-1.92.03l.61 4.84c.03.32.15.59.37.82c.22.24.49.34.8.34c.38 0 .69-.14.94-.45c.28-.35.37-.74.28-1.17M7.03 5H5.06L4.03 9.38c-.09.43 0 .82.28 1.17c.22.31.53.45.94.45c.66 0 1.05-.37 1.17-1.16M11 5H9.05L8.5 9.5v.16c0 .34.11.64.34.93s.52.41.86.41c.38 0 .69-.12.94-.38c.25-.27.36-.57.36-.92M14.95 5H13v4.7c0 .35.11.65.36.92c.25.26.53.38.84.38c.41 0 .75-.13 1.01-.43c.29-.3.37-.65.29-1.07M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3m-5-2.93c.28.27.61.49.97.65c-.61.94-.97 2.07-.97 3.28c0 1.09.29 2.12.8 3H5c-1.11 0-2-.89-2-2v-4.97c.66.62 1.33.97 2.23.97c.87 0 1.66-.36 2.24-.95c.6.6 1.4.95 2.31.95c.87 0 1.65-.36 2.22-.93"></svg:path>`,
})
export class MdiStorefrontPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontPlusOutlineIcon],svg[mdi-storefront-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 3.42c.38-.28.79-.42 1.22-.42h13.88c.44 0 .83.14 1.19.42c.37.28.6.64.73 1.08l1.03 4.41c.25 1.09.05 2.04-.61 2.86l-.15.15l-.13.14c-.57.59-1.24.94-2.19.94s-1.7-.38-2.27-.95c-.63.62-1.37.95-2.24.95c-.85 0-1.62-.3-2.3-.93c-.56.56-1.36.93-2.2.93c-.94 0-1.7-.33-2.33-.95c-.56.54-1.31.95-2.25.95H5v6h7.08c.12.72.37 1.39.72 2H5c-.5 0-1-.22-1.39-.61S3 19.5 3 19v-6.97c-.1-.09-.2-.19-.31-.3c-.63-.81-.83-1.73-.58-2.82L3.14 4.5c.1-.44.32-.8.7-1.08m16.13 5.96l-1.08-4.41l-1.92.03l.61 4.84c.03.32.15.59.37.82c.22.24.49.34.8.34c.38 0 .69-.14.94-.45c.28-.35.37-.74.28-1.17M7.03 5H5.06L4.03 9.38c-.09.43 0 .82.28 1.17c.22.31.53.45.94.45c.66 0 1.05-.37 1.17-1.16M11 5H9.05L8.5 9.5v.16c0 .34.11.64.34.93s.52.41.86.41c.38 0 .69-.12.94-.38c.25-.27.36-.57.36-.92M14.95 5H13v4.7c0 .35.11.65.36.92c.25.26.53.38.84.38c.41 0 .75-.13 1.01-.43c.29-.3.37-.65.29-1.07M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3Z"></svg:path>`,
})
export class MdiStorefrontPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontRemoveIcon],svg[mdi-storefront-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 3.42c.38-.28.79-.42 1.22-.42h13.88c.44 0 .83.14 1.19.42c.37.28.6.64.73 1.08l1.03 4.41c.25 1.09.05 2.04-.61 2.86l-.15.15l-.13.14c-.57.59-1.24.94-2.19.94s-1.7-.38-2.27-.95c-.63.62-1.37.95-2.24.95c-.85 0-1.62-.3-2.3-.93c-.56.56-1.36.93-2.2.93c-.94 0-1.7-.33-2.33-.95c-.56.54-1.31.95-2.25.95s-1.59-.36-2.18-.93c-.11-.1-.23-.22-.35-.34c-.63-.81-.83-1.73-.58-2.82L3.14 4.5c.1-.44.32-.8.7-1.08m16.13 5.96l-1.08-4.41l-1.92.03l.61 4.84c.03.32.15.59.37.82c.22.24.49.34.8.34c.38 0 .69-.14.94-.45c.28-.35.37-.74.28-1.17M7.03 5H5.06L4.03 9.38c-.09.43 0 .82.28 1.17c.22.31.53.45.94.45c.66 0 1.05-.37 1.17-1.16zM11 5H9.05L8.5 9.5v.16c0 .34.11.64.34.93s.52.41.86.41c.38 0 .69-.12.94-.38c.25-.27.36-.57.36-.92zm3.95 0H13v4.7c0 .35.11.65.36.92c.25.26.53.38.84.38c.41 0 .75-.13 1.01-.43c.29-.3.37-.65.29-1.07zm5.17 9.46l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.41-1.42L16.59 18l-2.12-2.12l1.41-1.41L18 16.59zM12 14.07c.28.27.61.49.97.65c-.61.94-.97 2.07-.97 3.28c0 1.09.29 2.12.8 3H5c-1.11 0-2-.89-2-2v-4.97c.66.62 1.33.97 2.23.97c.87 0 1.66-.36 2.24-.95c.6.6 1.4.95 2.31.95c.87 0 1.65-.36 2.22-.93"></svg:path>`,
})
export class MdiStorefrontRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStorefrontRemoveOutlineIcon],svg[mdi-storefront-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 3.42c.38-.28.79-.42 1.22-.42h13.88c.44 0 .83.14 1.19.42c.37.28.6.64.73 1.08l1.03 4.41c.25 1.09.05 2.04-.61 2.86l-.15.15l-.13.14c-.57.59-1.24.94-2.19.94s-1.7-.38-2.27-.95c-.63.62-1.37.95-2.24.95c-.85 0-1.62-.3-2.3-.93c-.56.56-1.36.93-2.2.93c-.94 0-1.7-.33-2.33-.95c-.56.54-1.31.95-2.25.95H5v6h7.08c.12.72.37 1.39.72 2H5c-.5 0-1-.22-1.39-.61S3 19.5 3 19v-6.97c-.1-.09-.2-.19-.31-.3c-.63-.81-.83-1.73-.58-2.82L3.14 4.5c.1-.44.32-.8.7-1.08m16.13 5.96l-1.08-4.41l-1.92.03l.61 4.84c.03.32.15.59.37.82c.22.24.49.34.8.34c.38 0 .69-.14.94-.45c.28-.35.37-.74.28-1.17M7.03 5H5.06L4.03 9.38c-.09.43 0 .82.28 1.17c.22.31.53.45.94.45c.66 0 1.05-.37 1.17-1.16zM11 5H9.05L8.5 9.5v.16c0 .34.11.64.34.93s.52.41.86.41c.38 0 .69-.12.94-.38c.25-.27.36-.57.36-.92zm3.95 0H13v4.7c0 .35.11.65.36.92c.25.26.53.38.84.38c.41 0 .75-.13 1.01-.43c.29-.3.37-.65.29-1.07zm6.59 10.88l-1.42-1.41L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.42L18 19.41l2.12 2.13l1.42-1.42L19.41 18z"></svg:path>`,
})
export class MdiStorefrontRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStoveIcon],svg[mdi-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h2l3 3H9zM4 4h1V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2v1h-3v-1H7v1H4v-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6-1H4v4h16zM4 19h16v-7H4zM6 7a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 7h2l3 3h-2z"></svg:path>`,
})
export class MdiStoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStrategyIcon],svg[mdi-strategy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.91 5.5l2.3 2.29l-1.42 1.42l-2.29-2.3l-2.29 2.3l-1.42-1.42l2.3-2.29l-2.3-2.29l1.42-1.42l2.29 2.3l2.29-2.3l1.42 1.42m13 13l-1.42-1.42l-2.29 2.3l-2.29-2.3l-1.42 1.42l2.3 2.29l-2.3 2.29l1.42 1.42l2.29-2.3l2.29 2.3l1.42-1.42l-2.3-2.29m.49-11.67L17.18 11L15.6 9.73l1.17-1.5a9.08 9.08 0 0 0-6.66 5.62A4.5 4.5 0 1 1 7.5 13a4 4 0 0 1 .78.08a11.27 11.27 0 0 1 8.15-6.82L15 5.18l1.27-1.58M10 17.5A2.5 2.5 0 1 0 7.5 20a2.5 2.5 0 0 0 2.5-2.5"></svg:path>`,
})
export class MdiStrategyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStravaIcon],svg[mdi-strava-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.92 17.16l1.83-3.63h2.7l-4.51 8.97l-4.57-8.97h2.7l1.85 3.63m-4.29-8.5l-2.45 4.89H4.55L10.61 1.5l6.13 12.05h-3.63l-2.48-4.89z" fill="currentColor"></svg:path>`,
})
export class MdiStravaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStretchToPageIcon],svg[mdi-stretch-to-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2M9 19H5v-4l1.29 1.29l1.54-1.54l1.42 1.42l-1.54 1.54m.12-8.46L6.29 7.71L5 9V5h4L7.71 6.29l1.54 1.54M19 19h-4l1.29-1.29l-1.54-1.54l1.42-1.42l1.54 1.54L19 15m0-6l-1.29-1.29l-1.54 1.54l-1.42-1.42l1.54-1.54L15 5h4"></svg:path>`,
})
export class MdiStretchToPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStretchToPageOutlineIcon],svg[mdi-stretch-to-page-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 18H4V4h16M8.83 10.25L7.29 8.71L6 10V6h4L8.71 7.29l1.54 1.54m3.5 0l1.54-1.54L14 6h4v4l-1.29-1.29l-1.54 1.54m0 3.5l1.54 1.54L18 14v4h-4l1.29-1.29l-1.54-1.54m-3.5 0l-1.54 1.54L10 18H6v-4l1.29 1.29l1.54-1.54"></svg:path>`,
})
export class MdiStretchToPageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStringLightsIcon],svg[mdi-string-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.56 11.39c-.2-.8-.74-1.54-1.51-1.95l-.42-1.7c.48-.16.94-.33 1.37-.51V5c-2 1.07-5.47 2.03-10 2.03S4 6.07 2 5v2.23c.43.18.89.35 1.37.51l-.42 1.7a3.07 3.07 0 0 0-1.51 1.95c-.535 2.18-1.055 5.92 1.48 6.54C4 18.2 6 17.89 7.27 12.82c.19-.82.06-1.7-.43-2.43l.42-1.72c.88.14 1.79.23 2.74.29v1.78c-.65.59-1 1.43-1 2.26c0 2.24.39 6 3 6c1.12 0 3-.78 3-6c0-.83-.35-1.67-1-2.26V8.96c.95-.06 1.86-.15 2.74-.29l.42 1.72a3.1 3.1 0 0 0-.43 2.43C18 17.89 20 18.2 21.08 17.93c2.53-.62 2.01-4.36 1.48-6.54M5.81 12.47s-1.07 4.37-2.53 4.03c-1.46-.38-.38-4.75-.38-4.75s.36-1.46 1.81-1.1s1.1 1.82 1.1 1.82M12 17.5c-1.5 0-1.5-4.5-1.5-4.5s0-1.5 1.5-1.5s1.5 1.5 1.5 1.5s0 4.5-1.5 4.5m8.72-1c-1.45.34-2.53-4.03-2.53-4.03s-.36-1.47 1.1-1.82s1.81 1.1 1.81 1.1s1.08 4.37-.38 4.75"></svg:path>`,
})
export class MdiStringLightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiStringLightsOffIcon],svg[mdi-string-lights-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10.74V8.96c.95-.06 1.86-.15 2.74-.29l.42 1.72a3.1 3.1 0 0 0-.43 2.43c.09.35.18.68.27.98l4.12 4.12c2.49-.66 1.97-4.37 1.44-6.53c-.2-.8-.74-1.54-1.51-1.95l-.42-1.7c.48-.16.94-.33 1.37-.51V5c-2 1.07-5.47 2.03-10 2.03c-.63 0-1.24-.03-1.83-.06m10.55 9.53c-1.45.34-2.53-4.03-2.53-4.03s-.36-1.47 1.1-1.82s1.81 1.1 1.81 1.1s1.08 4.37-.38 4.75m-5.77-2.21l-1.45-1.46l-1.32-1.33L10 9.34l-.42-.41h.01L7.32 6.66L2.39 1.73L1.11 3l2.8 2.8C3.19 5.55 2.53 5.28 2 5v2.23c.43.18.89.35 1.37.51l-.42 1.7a3.07 3.07 0 0 0-1.51 1.95c-.535 2.18-1.055 5.92 1.48 6.54C4 18.2 6 17.89 7.27 12.82c.19-.82.06-1.7-.43-2.43l.33-1.33l2.33 2.32c-.32.49-.5 1.06-.5 1.62c0 2.24.39 6 3 6c.8 0 1.97-.41 2.59-2.5l6.25 6.23l1.27-1.27l-7.16-7.16zm-9.14-1.82s-1.07 4.37-2.53 4.03c-1.46-.38-.38-4.75-.38-4.75s.36-1.46 1.81-1.1s1.1 1.82 1.1 1.82M12 17.5c-1.5 0-1.5-4.5-1.5-4.5s0-.23.1-.5l2.72 2.71c-.19 1.14-.56 2.29-1.32 2.29"></svg:path>`,
})
export class MdiStringLightsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubdirectoryArrowLeftIcon],svg[mdi-subdirectory-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z"></svg:path>`,
})
export class MdiSubdirectoryArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubdirectoryArrowRightIcon],svg[mdi-subdirectory-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 15l-6 6l-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z"></svg:path>`,
})
export class MdiSubdirectoryArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubmarineIcon],svg[mdi-submarine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.67C6.78 4.53 5.39 4.93 4 5H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62.94 4 1h2V5h-2c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0m8 5L15 10v2h-1l-2 2H9l-3 2l-1-2H4v2l-2 1l2 1v2h1.14L6 18l3 2h11a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2l-1-1v-1h-1v-2h1V8.67Z"></svg:path>`,
})
export class MdiSubmarineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubtitlesIcon],svg[mdi-subtitles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 12h4v2H4zm10 6H4v-2h10zm6 0h-4v-2h4zm0-4H10v-2h10z"></svg:path>`,
})
export class MdiSubtitlesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubtitlesOutlineIcon],svg[mdi-subtitles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 14V6H4v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"></svg:path>`,
})
export class MdiSubtitlesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubwayIcon],svg[mdi-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 15a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 9h10v5H7zm8.5 6a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m2.5.88V9c0-2.62-2.68-3-6-3c-3 0-6 .37-6 3v6.88a2.62 2.62 0 0 0 2.62 2.62L7.5 19.62V20h1.67l1.5-1.5h2.83L15 20h1.5v-.38l-1.13-1.12c1.45 0 2.63-1.17 2.63-2.62M17.8 2.8C20.47 3.84 22 6.05 22 8.86V22H2V8.86C2 6.05 3.53 3.84 6.2 2.8C8 2.09 10.14 2 12 2s4 .09 5.8.8"></svg:path>`,
})
export class MdiSubwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubwayAlertVariantIcon],svg[mdi-subway-alert-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V6h-5v5zm-1.5 6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5M9 11V6H4v5zm-3.5 6c.8 0 1.5-.7 1.5-1.5S6.3 14 5.5 14S4 14.7 4 15.5S4.7 17 5.5 17M10 2c4.4 0 8 .5 8 4v9.5c0 1.9-1.6 3.5-3.5 3.5l1.5 1.5v.5H4v-.5L5.5 19C3.6 19 2 17.4 2 15.5V6c0-3.5 3.6-4 8-4m10 11V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiSubwayAlertVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSubwayVariantIcon],svg[mdi-subway-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h-5V6h5m-1.5 11a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5M11 11H6V6h5M7.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 14A1.5 1.5 0 0 1 9 15.5A1.5 1.5 0 0 1 7.5 17M12 2c-4.42 0-8 .5-8 4v9.5A3.5 3.5 0 0 0 7.5 19L6 20.5v.5h12v-.5L16.5 19a3.5 3.5 0 0 0 3.5-3.5V6c0-3.5-3.58-4-8-4"></svg:path>`,
})
export class MdiSubwayVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSummitIcon],svg[mdi-summit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h2l5 2l-5 2v3.17L22 21H2l6-8l3.5 4.7l3.5-7.53z"></svg:path>`,
})
export class MdiSummitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunAngleIcon],svg[mdi-sun-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.8 5.2C13 5 12.2 5 11.4 5l3.2-2.7l1.4 4c-.7-.5-1.4-.8-2.2-1.1M7 7.1c.6-.6 1.3-1.1 2-1.4l-4.1-.8l.7 4.1c.4-.7.8-1.4 1.4-1.9m-1.8 6.7C5 13 5 12.2 5 11.4l-2.7 3.2l4 1.4c-.5-.6-.9-1.4-1.1-2.2M22 19v2H3l5.4-5.5c-1.9-2-1.9-5.1 0-7.1c1.9-1.9 5.1-1.9 7 0l3-3l1.4 1.4L7.7 19z"></svg:path>`,
})
export class MdiSunAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunAngleOutlineIcon],svg[mdi-sun-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.8 5.2C13 5 12.2 5 11.4 5l3.2-2.7l1.4 4c-.7-.5-1.4-.8-2.2-1.1M7 7.1c.6-.6 1.3-1.1 2-1.4l-4.1-.8l.7 4.1c.4-.7.8-1.4 1.4-1.9m-1.8 6.7C5 13 5 12.2 5 11.4l-2.7 3.2l4 1.4c-.5-.6-.9-1.4-1.1-2.2M22 19v2H3l5.4-5.5c-1.9-2-1.9-5.1 0-7.1c1.9-1.9 5.1-1.9 7 0l3-3l1.4 1.4L7.7 19zM9.8 14.1L14 9.8c-1.2-1.1-3-1.1-4.2 0c-1.1 1.2-1.1 3.1 0 4.3"></svg:path>`,
})
export class MdiSunAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunClockIcon],svg[mdi-sun-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.1 9.3L19.6 6l-4.1-.4c.6.5 1.1 1.1 1.5 1.9c.3.6.5 1.1.7 1.7c-.5-.1-1.1-.2-1.7-.2h-.4c-.8-1.8-2.5-3-4.6-3c-2.8 0-5 2.2-5 5c0 2.1 1.2 3.8 3 4.6v.4c0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.1-2.1-5.8-4.9-6.7M16 21c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m.5-4.8l2.9 1.7l-.8 1.2L15 17v-5h1.5zM11 4c-.8 0-1.6.2-2.4.4L11 1l2.4 3.4c-.8-.2-1.6-.4-2.4-.4M4.9 14.5c.4.7 1 1.4 1.6 1.9L2.4 16l1.8-3.8c.1.8.3 1.6.7 2.3m-.8-4.7L2.3 6l4.2-.3c-.6.5-1.1 1.1-1.6 1.8c-.4.7-.7 1.5-.8 2.3"></svg:path>`,
})
export class MdiSunClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunClockOutlineIcon],svg[mdi-sun-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.1 9.32L19.65 6l-4.15-.36c.6.51 1.13 1.14 1.55 1.86c.32.55.53 1.13.68 1.72C17.18 9.08 16.6 9 16 9h-.42A5.01 5.01 0 0 0 11 6c-2.76 0-5 2.24-5 5a5.01 5.01 0 0 0 3 4.58V16c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.13-2.06-5.79-4.9-6.68M8 11c0-1.65 1.35-3 3-3c1.08 0 2.03.58 2.56 1.45c-1.9.7-3.41 2.21-4.11 4.11A3 3 0 0 1 8 11m8 10c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5zM11 4c-.84 0-1.65.15-2.39.42L11 1l2.39 3.42C12.65 4.15 11.84 4 11 4M4.95 14.5c.42.74.96 1.36 1.55 1.87L2.36 16l1.76-3.77c.14.77.41 1.55.83 2.27m-.84-4.71L2.34 6l4.16-.35A7.2 7.2 0 0 0 4.94 7.5c-.44.74-.69 1.5-.83 2.29"></svg:path>`,
})
export class MdiSunClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunCompassIcon],svg[mdi-sun-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.7 4.3L12 1l2.3 3.3c-.7-.2-1.5-.3-2.3-.3s-1.6.1-2.3.3m7.8 1.9c1.1 1.1 2 2.5 2.3 4.1l1.7-3.7zM5 8.1q.15-.15 0 0c.1-.1.1-.1.1-.2c.4-.6.9-1.2 1.4-1.7l-4 .3l1.7 3.7c.2-.7.5-1.5.8-2.1m14.2 7.3s0 .1 0 0c-.1.2-.2.4-.3.5v.2c-.4.7-.9 1.2-1.4 1.8l4.1-.3l-1.7-3.7c-.2.5-.4 1-.7 1.5m-14 .8c0-.1-.1-.1-.1-.2c-.1-.1-.1-.1-.1-.2c-.1-.2-.2-.3-.2-.5c-.2-.5-.4-1-.5-1.5l-1.7 3.7l4.1.3c-.7-.5-1.1-1-1.5-1.6m7.4 3.8h-1.2c-.6 0-1.2-.2-1.7-.3L12 23l2.3-3.3c-.5.1-1.1.2-1.7.3m3.6-12.2c-2.3-2.3-6.1-2.3-8.5 0s-2.3 6.1 0 8.5s6.1 2.3 8.5 0s2.4-6.2 0-8.5m-7.7 7.7l2.1-4.9l5-2.2l-2.1 4.9zm4.2-2.8c-.4.4-1 .4-1.4 0s-.4-1 0-1.4s1-.4 1.4 0s.4 1 0 1.4"></svg:path>`,
})
export class MdiSunCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunSnowflakeIcon],svg[mdi-sun-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31l1-1v-4.48l3.24 3.24l1.42-1.41L13 15v-2h2l4.66 4.66l1.41-1.42L17.83 13H22v-2h-4.17l3.24-3.24l-1.41-1.42L15 11h-2V9l4.66-4.66l-1.42-1.41L13 6.17V1.69m-2 4.4v2.04c-1.76.46-3 2.05-3 3.87a4.01 4.01 0 0 0 3 3.87v2.04A6 6 0 0 1 6 12c0-2.93 2.11-5.43 5-5.91"></svg:path>`,
})
export class MdiSunSnowflakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunSnowflakeVariantIcon],svg[mdi-sun-snowflake-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.92 1.58l-1.74 1l1.21 2.09l-.59 2.18L9 7.6L7.38 6l.04-2.41H5.43v1.83H3.59l.01 2H6l1.65 1.61l-.75 2.79l-2.22.58l-2.09-1.2l-1 1.73l1.58.91l-.91 1.58l1.74 1l1.19-2.09l2.23-.58l.5.51l1.4-1.4l-.54-.54l.75-2.78l2.79-.76l.53.54l1.41-1.41l-.53-.54l.59-2.18L16.41 4l-1-1.75l-1.58.91zM20.72 4L4 20.72L5.27 22l4.89-4.89a4.99 4.99 0 0 0 7.67-2.82c.39-1.43.1-2.93-.72-4.13L22 5.27zm-1.98 5c.44.63.79 1.38 1.01 2.19s.28 1.62.21 2.42l2.69-3.2zm.58 6.95c-.32.72-.82 1.4-1.39 1.99c-.59.59-1.27 1.06-1.97 1.4l4.09.72zM9 18.71l1.41 3.95l3.18-2.71c-.78.05-1.59.02-2.4-.19c-.83-.22-1.57-.59-2.19-1.05"></svg:path>`,
})
export class MdiSunSnowflakeVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunThermometerIcon],svg[mdi-sun-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2L7.6 5.4C8.4 5.2 9.2 5 10 5s1.6.2 2.4.4M19 5c-1.11 0-2 .89-2 2v6.76c-.64.57-1 1.39-1 2.24c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.85-.36-1.67-1-2.23V7c0-1.11-.89-2-2-2m0 1c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1m-13.5.7L1.3 7l1.8 3.8c.1-.8.4-1.6.8-2.3c.5-.7 1-1.3 1.6-1.8M10 7c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m-6.8 6.2L1.4 17l4.1.4c-.5-.5-1.1-1.2-1.5-1.9c-.5-.7-.7-1.5-.8-2.3m4.4 5.4L10 22l2.4-3.4c-.8.2-1.6.4-2.4.4c-.9 0-1.7-.2-2.4-.4"></svg:path>`,
})
export class MdiSunThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunThermometerOutlineIcon],svg[mdi-sun-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2L7.6 5.4C8.4 5.2 9.2 5 10 5s1.6.2 2.4.4zm11 11.8V7c0-1.1-.9-2-2-2s-2 .9-2 2v6.8c-.6.6-1 1.4-1 2.2c0 1.7 1.3 3 3 3s3-1.3 3-3c0-.9-.4-1.7-1-2.2M20 8h-2V7c0-.6.4-1 1-1s1 .4 1 1zM5.5 6.7L1.3 7l1.8 3.8c.1-.8.4-1.6.8-2.3c.5-.7 1-1.3 1.6-1.8M10 7c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m-6.8-1.8L1.4 17l4.1.4c-.5-.5-1.1-1.2-1.5-1.9c-.5-.7-.7-1.5-.8-2.3m4.4 5.4L10 22l2.4-3.4c-.8.2-1.6.4-2.4.4c-.9 0-1.7-.2-2.4-.4"></svg:path>`,
})
export class MdiSunThermometerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunWirelessIcon],svg[mdi-sun-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6c2.76 0 5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5m0-5l2.39 3.42C12.65 4.15 11.84 4 11 4s-1.65.15-2.39.42zM2.34 6l4.16-.35A7.2 7.2 0 0 0 4.94 7.5c-.44.74-.69 1.5-.83 2.29zm.02 10l1.76-3.77a7.13 7.13 0 0 0 2.38 4.14zM19.65 6l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zM23 13h-2c0 2.05-.78 4.1-2.34 5.66A7.96 7.96 0 0 1 13 21v2c2.56 0 5.12-1 7.07-2.93S23 15.56 23 13m-4 0h-2c0 1-.39 2.05-1.17 2.83S14 17 13 17v2a5.99 5.99 0 0 0 6-6"></svg:path>`,
})
export class MdiSunWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunWirelessOutlineIcon],svg[mdi-sun-wireless-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 1l2.39 3.42C12.65 4.15 11.84 4 11 4s-1.65.15-2.39.42zM2.34 6l4.16-.35A7.2 7.2 0 0 0 4.94 7.5c-.44.74-.69 1.5-.83 2.29zm.02 10l1.76-3.77a7.13 7.13 0 0 0 2.38 4.14zM19.65 6l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zM23 13h-2c0 2.05-.78 4.1-2.34 5.66A7.96 7.96 0 0 1 13 21v2c2.56 0 5.12-1 7.07-2.93S23 15.56 23 13m-4 0h-2c0 1-.39 2.05-1.17 2.83S14 17 13 17v2a5.99 5.99 0 0 0 6-6m-8-5c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5"></svg:path>`,
})
export class MdiSunWirelessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSunglassesIcon],svg[mdi-sunglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17H4C2.38 17 .96 15.74.76 14.14l-.5-2.99C.15 10.3.39 9.5.91 8.92S2.19 8 3 8h6c.83 0 1.58.35 2.06.96c.11.15.21.31.29.49c.43-.09.87-.09 1.29 0c.08-.18.18-.34.3-.49C13.41 8.35 14.16 8 15 8h6c.81 0 1.57.34 2.09.92c.51.58.75 1.38.65 2.19l-.51 3.07C23.04 15.74 21.61 17 20 17h-3c-1.56 0-3.08-1.19-3.46-2.7l-.9-2.71c-.38-.28-.91-.28-1.29 0l-.92 2.78C10.07 15.82 8.56 17 7 17"></svg:path>`,
})
export class MdiSunglassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurfingIcon],svg[mdi-surfing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 23v-2c-1.41.05-2.78-.1-4-1c-1.76 1.25-4.23 1.25-6 0c-1.77 1.25-4.24 1.25-6 0c-1.22.9-2.59 1.05-4 1v2c1.37.05 2.78-.06 4-.75c1.84 1 4.15 1 6 0c1.85 1 4.16 1 6 0c1.22.69 2.63.8 4 .75m-1.5-11.03V9.95c-1.76.01-3.5-.95-4.32-2.54l-.89-1.55c-.29-.46-.74-.75-1.22-.89L8.5 3.94L5 6.38L6.13 8l2.82-1.9l2.02.33l-2.16 1.45C8.21 8.29 7.88 9 8 9.71l.53 3.1C7.12 12.26 3.21 11 3 13.23c.36 2.44 3.07 4.09 5.06 5.59c1.44.47 3-.24 3.94-1.36c1.32 1.7 3.89 2 5.5.54c-.47-.42-1-.85-1.5-1.2v-3.85l-3.81-3l2.25-1.51C15.62 10.59 18 12 20.5 11.97M14 14v1.47c0-.04-2.34-1.31-2.19-1.23l-1.08-.54l-.42-2.62zm5-10.5c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class MdiSurfingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSoundIcon],svg[mdi-surround-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M7.76 16.24l-1.41 1.41A7.9 7.9 0 0 1 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41A6.05 6.05 0 0 0 6 12c0 1.54.59 3.07 1.76 4.24M12 16a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m5.66 1.66l-1.41-1.41A6.05 6.05 0 0 0 18 12c0-1.54-.59-3.07-1.76-4.24l1.41-1.41A7.9 7.9 0 0 1 20 12c0 2.05-.78 4.1-2.34 5.66M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiSurroundSoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound20Icon],svg[mdi-surround-sound-2-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h4v2H5c-1.1 0-2 .9-2 2v4h6v-2H5v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm10 10h-2v-2h2zm4-10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiSurroundSound20Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound21Icon],svg[mdi-surround-sound-2-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v2h4v2H6c-1.1 0-2 .9-2 2v4h6v-2H6v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm10 10h-2v-2h2zm2-10v2h2v8h2V7z"></svg:path>`,
})
export class MdiSurroundSound21Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound31Icon],svg[mdi-surround-sound-3-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2v-2h2zm6-10v10h-2V9h-2V7zm-10 8c0 1.1-.9 2-2 2H4v-2h4v-2H6v-2h2V9H4V7h4c1.1 0 2 .9 2 2v1.5c0 .8-.7 1.5-1.5 1.5c.8 0 1.5.7 1.5 1.5z"></svg:path>`,
})
export class MdiSurroundSound31Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound51Icon],svg[mdi-surround-sound-5-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2v-2h2zm6-10v10h-2V9h-2V7zM10 7v2H6v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H4v-2h4v-2H4V7z"></svg:path>`,
})
export class MdiSurroundSound51Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound512Icon],svg[mdi-surround-sound-5-1-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7v2h4v2h-2c-1.1 0-2 .9-2 2v4h6v-2h-4v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 17H7v-2h2zM9 7v2h2v8h2V7zM0 7v6h4v2H0v2h4c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H2V9h4V7zm17 10h-2v-2h2z"></svg:path>`,
})
export class MdiSurroundSound512Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSurroundSound71Icon],svg[mdi-surround-sound-7-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2v-2h2zm6-10v10h-2V9h-2V7zM4 17l4-8H4V7h6v2l-4 8"></svg:path>`,
})
export class MdiSurroundSound71Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSvgIcon],svg[mdi-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.13 10.71h3.74L6.22 8.06c-1.01 0-1.83-.82-1.83-1.84a1.83 1.83 0 0 1 1.83-1.83c1.02 0 1.84.82 1.84 1.83l2.65 2.65V5.13a1.84 1.84 0 0 1 0-2.59a1.81 1.81 0 0 1 2.58 0c.71.71.71 1.87 0 2.59v3.74l2.66-2.65a1.83 1.83 0 0 1 3.66 0c0 1.02-.82 1.84-1.83 1.84l-2.65 2.65h3.74a1.84 1.84 0 0 1 2.59 0c.72.71.72 1.87 0 2.58c-.71.71-1.87.71-2.59 0h-3.74l2.65 2.66c1.01 0 1.83.81 1.83 1.83a1.83 1.83 0 0 1-1.83 1.83c-1.02 0-1.83-.82-1.83-1.83l-2.66-2.65v3.74c.71.72.71 1.88 0 2.59c-.71.72-1.87.72-2.58 0a1.84 1.84 0 0 1 0-2.59v-3.74l-2.65 2.65c0 1.01-.82 1.83-1.84 1.83a1.83 1.83 0 0 1 0-3.66l2.65-2.66H5.13c-.72.71-1.88.71-2.59 0a1.81 1.81 0 0 1 0-2.58a1.84 1.84 0 0 1 2.59 0"></svg:path>`,
})
export class MdiSvgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalIcon],svg[mdi-swap-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 9l-4-4v3h-7v2h7v3M7 11l-4 4l4 4v-3h7v-2H7z"></svg:path>`,
})
export class MdiSwapHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalBoldIcon],svg[mdi-swap-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10v3h6v5H8v3l-6-5.5zm14-1.5L16 3v3h-6v5h6v3z"></svg:path>`,
})
export class MdiSwapHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalCircleIcon],svg[mdi-swap-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10s10-4.5 10-10m-7-5.5l3.5 3.5l-3.5 3.5V11h-4V9h4zm-6 11L5.5 14L9 10.5V13h4v2H9z"></svg:path>`,
})
export class MdiSwapHorizontalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalCircleOutlineIcon],svg[mdi-swap-horizontal-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14L9 17.5V15h4v-2H9z"></svg:path>`,
})
export class MdiSwapHorizontalCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalHiddenIcon],svg[mdi-swap-horizontal-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 5l4 4l-4 4zm-1 3h-3v2h3zm-4 2V8h-2v2zm-9 5l4-4v8zm5 1h3v-2H8zm4-2v2h2v-2z"></svg:path>`,
})
export class MdiSwapHorizontalHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalVariantIcon],svg[mdi-swap-horizontal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 6l4 4V7h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H8a4 4 0 0 0-4 4a4 4 0 0 0 4 4h8v3l4-4l-4-4v3H8a2 2 0 0 1-2-2a2 2 0 0 1 2-2h8a4 4 0 0 0 4-4a4 4 0 0 0-4-4H8V2z"></svg:path>`,
})
export class MdiSwapHorizontalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapVerticalIcon],svg[mdi-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3L5 7h3v7h2V7h3m3 10v-7h-2v7h-3l4 4l4-4z"></svg:path>`,
})
export class MdiSwapVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapVerticalBoldIcon],svg[mdi-swap-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8h-3v6H6V8H3l5.5-6zm1.5 14l5.5-6h-3v-6h-5v6h-3z"></svg:path>`,
})
export class MdiSwapVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapVerticalCircleIcon],svg[mdi-swap-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M6.5 9L10 5.5L13.5 9H11v4H9V9zm11 6L14 18.5L10.5 15H13v-4h2v4z"></svg:path>`,
})
export class MdiSwapVerticalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapVerticalCircleOutlineIcon],svg[mdi-swap-vertical-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8M6.5 9L10 5.5L13.5 9H11v4H9V9zm11 6L14 18.5L10.5 15H13v-4h2v4z"></svg:path>`,
})
export class MdiSwapVerticalCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwapVerticalVariantIcon],svg[mdi-swap-vertical-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l-4 4h3v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a4 4 0 0 0-4-4a4 4 0 0 0-4 4v8H2l4 4l4-4H7V8a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8a4 4 0 0 0 4 4a4 4 0 0 0 4-4V8h3z"></svg:path>`,
})
export class MdiSwapVerticalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwimIcon],svg[mdi-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18c2.22-1 4.44-2 6.67-2c2.22 0 4.44 2 6.66 2c2.23 0 4.45-2 6.67-2v3c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2zm6.67-5c-.78 0-1.55.12-2.32.32l4.92-3.44l-1.04-1.24c-.14-.17-.23-.4-.23-.64c0-.34.17-.65.44-.83l5.72-4l1.15 1.63l-4.84 3.39l5.23 6.23c-.79.33-1.58.58-2.37.58c-2.22 0-4.44-2-6.66-2M18 7a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiSwimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwitchIcon],svg[mdi-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3zm0-12h1V4h-1zM9 4v2h2V4zm0 4v2h2V8zm0 4v2h2v-2z"></svg:path>`,
})
export class MdiSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwordIcon],svg[mdi-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.92 5H5l9 9l1-.94m4.96 6.06l-.84.84a.996.996 0 0 1-1.41 0l-3.12-3.12l-2.68 2.66l-1.41-1.41l1.42-1.42L3 7.75V3h4.75l8.92 8.92l1.42-1.42l1.41 1.41l-2.67 2.67l3.12 3.12c.4.4.4 1.03.01 1.42"></svg:path>`,
})
export class MdiSwordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSwordCrossIcon],svg[mdi-sword-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.2 2.44l11.9 11.9l2.12-2.12l1.41 1.41l-2.47 2.47l3.18 3.18c.39.39.39 1.02 0 1.41l-.71.71a.996.996 0 0 1-1.41 0L17 18.23l-2.44 2.47l-1.41-1.41l2.12-2.12l-11.9-11.9V2.44zM15.89 10l4.74-4.74V2.44H17.8l-4.74 4.74zm-4.95 5l-2.83-2.87l-2.21 2.21l-2.12-2.12l-1.41 1.41l2.47 2.47l-3.18 3.19a.996.996 0 0 0 0 1.41l.71.71c.39.39 1.02.39 1.41 0L7 18.23l2.44 2.47l1.41-1.41l-2.12-2.12z"></svg:path>`,
})
export class MdiSwordCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyllabaryHangulIcon],svg[mdi-syllabary-hangul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v2H4v2h2.39C5.55 8.74 5 9.8 5 11c0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.2-.55-2.26-1.39-3H14V6h-4V4m5 0v12h2v-5h3V9h-3V4M9 9c1.12 0 2 .88 2 2s-.88 2-2 2s-2-.88-2-2s.88-2 2-2m-2 7v4h10v-2H9v-2Z"></svg:path>`,
})
export class MdiSyllabaryHangulIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyllabaryHiraganaIcon],svg[mdi-syllabary-hiragana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v2H6v2h3v2c-2.75 0-5 2.27-5 5.03a5.04 5.04 0 0 0 5.03 5.03c.86 0 1.69-.29 2.37-.8c.23.28.48.56.75.83l1.41-1.42c-.26-.25-.49-.52-.7-.78l1-1c1.07-1.07 1.92-2.66 2.56-4.3c.89.52 1.58 1.31 1.58 2.41c0 1.32-.53 2.6-1.46 3.54l1.41 1.41A7 7 0 0 0 20 15c0-1.96-1.18-3.64-2.85-4.45l.35-1.26l-1.95-.51l-.34 1.27c-.08 0-.15-.05-.24-.05H11V8h5V6h-5V4m0 8h3.5c-.56 1.37-1.31 2.72-2.06 3.47l-.65.66c-.54-1.2-.79-2.54-.79-4.13m-2 0c0 2.07.41 3.94 1.3 5.59c-.36.3-.8.47-1.27.47c-1.7 0-3.03-1.33-3.03-3.03C6 13.34 7.32 12 9 12"></svg:path>`,
})
export class MdiSyllabaryHiraganaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyllabaryKatakanaIcon],svg[mdi-syllabary-katakana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h14v.09l-3.71 3.7l1.42 1.42L20 6.91V4m-9 5v4c0 2.78-.75 3.89-2.64 5.46L9.64 20c2.11-1.76 3.36-3.78 3.36-7V9Z"></svg:path>`,
})
export class MdiSyllabaryKatakanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyllabaryKatakanaHalfwidthIcon],svg[mdi-syllabary-katakana-halfwidth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v2h6l-1 4.81l2 .39l1-5.1V4m-6 5v3c0 2.86-.66 5.29-1.92 6.61L9.5 20c1.85-1.92 2.5-4.85 2.5-8V9Z"></svg:path>`,
})
export class MdiSyllabaryKatakanaHalfwidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSymbolIcon],svg[mdi-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v7h2V7zm4 0v2h4v2H8v3h2v-1c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm9.8 0l-.2 2H14v2h1.4l-.2 2H14v2h1l-.2 2h2l.2-2h1.4l-.2 2h2l.2-2H22v-2h-1.4l.2-2H22V9h-1l.2-2h-2L19 9h-1.4l.2-2zm1.6 4h1.4l-.2 2h-1.4zM2 15v2h2v-2zm6 0v2h2v-2z"></svg:path>`,
})
export class MdiSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSymfonyIcon],svg[mdi-symfony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.37 3.7c1.02-.03 1.78.43 1.84 1.14c.01.31-.17.91-.79.93c-.47.02-.79-.27-.8-.68c-.01-.16.26-.67.26-.76c-.01-.27-.41-.28-.52-.27c-1.5.05-1.9 2.07-2.22 3.72l-.14.87c.84.13 1.46-.03 1.8-.25c.48-.31-.14-.63-.06-.99c.08-.37.41-.54.67-.55c.37-.01.63.37.62.76c-.03.64-.86 1.52-2.53 1.48c-.22 0-.41-.02-.59-.04c-.61 3.1-.99 4.94-2.35 6.52c-1.17 1.39-2.36 1.6-2.89 1.62c-1 .04-1.67-.49-1.67-1.2c-.03-.68.57-1.06.97-1.07c.53-.02.9.37.91.81c.02.37-.18.49-.31.56c-.07.07-.22.15-.21.3c0 .07.07.22.29.21c.42-.01.69-.22.89-.36c.96-.8 1.34-2.21 1.83-4.77c.26-1.45.45-2.38.73-3.3c-.68-.51-1.1-1.15-2.01-1.38c-.63-.19-1.01-.04-1.28.3c-.31.41-.21.93.09 1.24c1.15 1.28 1.49 1.84 1.36 2.6c-.2 1.21-1.64 2.13-3.34 1.61c-1.45-.45-1.72-1.47-1.55-2.04c.16-.49.55-.59.94-.47c.42.13.58.63.46 1.02c-.02.04-.22.41-.27.53c-.09.31.33.52.62.61c.65.2 1.28-.14 1.43-.67c.15-.48-.15-.82-.28-.95c-.89-.98-1.51-1.85-1.21-2.83c.12-.37.36-.77.72-1.04c.75-.55 1.57-.65 2.34-.41c1.01.27 1.49.94 2.12 1.45c.35-1.02.84-2.03 1.57-2.88c.66-.77 1.54-1.33 2.56-1.37"></svg:path>`,
})
export class MdiSymfonyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSynagogueIcon],svg[mdi-synagogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8v13h4v-5c0-1.1.9-2 2-2s2 .9 2 2v5h4V8l-6-5zm7.5 2c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5M3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2M1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2m-2 4h4v12h-4z"></svg:path>`,
})
export class MdiSynagogueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSynagogueOutlineIcon],svg[mdi-synagogue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4c-1.7 0-3 1.3-3 3v.3L12 3L7 7.3V7c0-1.7-1.3-3-3-3S1 5.3 1 7v14h10v-5c0-.6.4-1 1-1s1 .4 1 1v5h10V7c0-1.7-1.3-3-3-3m0 2c.5 0 1 .4 1 1v1h-2V7c0-.6.5-1 1-1M4 6c.6 0 1 .4 1 1v1H3V7c0-.6.5-1 1-1M3 19v-9h2v9zm14 0h-2v-3c0-1.6-1.4-3-3-3s-3 1.4-3 3v3H7V9.9l5-4.3l5 4.3zm2 0v-9h2v9zM12 8.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></svg:path>`,
})
export class MdiSynagogueOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyncIcon],svg[mdi-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a6 6 0 0 1-6-6c0-1 .25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12a8 8 0 0 0 8 8v3l4-4l-4-4m0-11V1L8 5l4 4V6a6 6 0 0 1 6 6c0 1-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyncAlertIcon],svg[mdi-sync-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h2V7h-2m10-3h-6v6l2.24-2.24A6 6 0 0 1 19 12a5.99 5.99 0 0 1-4 5.65v2.09c3.45-.89 6-4.01 6-7.74c0-2.21-.91-4.2-2.36-5.64M11 17h2v-2h-2m-8-3c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24A6 6 0 0 1 5 12a5.99 5.99 0 0 1 4-5.65V4.26C5.55 5.15 3 8.27 3 12"></svg:path>`,
})
export class MdiSyncAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyncCircleIcon],svg[mdi-sync-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m13.6 1.72A4 4 0 0 0 16 12a4 4 0 0 0-4-4v2L8.88 7L12 4v2a6 6 0 0 1 6 6a5.9 5.9 0 0 1-.93 3.19M6 12a5.9 5.9 0 0 1 .93-3.19l1.47 1.47A4 4 0 0 0 8 12a4 4 0 0 0 4 4v-2l3 3l-3 3v-2a6 6 0 0 1-6-6"></svg:path>`,
})
export class MdiSyncCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiSyncOffIcon],svg[mdi-sync-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-6v6l2.24-2.24A6 6 0 0 1 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46a7.925 7.925 0 0 0-1.14-9.87zM2.86 5.41l2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6 6 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.26.13-.5.25-.76.34v2.09c.79-.21 1.54-.54 2.22-.96l2.36 2.36l1.27-1.27L4.14 4.14zm7.14.94V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.27-.12.5-.24.77-.33"></svg:path>`,
})
export class MdiSyncOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabIcon],svg[mdi-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h10v4h8z"></svg:path>`,
})
export class MdiTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabMinusIcon],svg[mdi-tab-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h10v4h8v10H3zm4 8v2h8v-2z"></svg:path>`,
})
export class MdiTabMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabPlusIcon],svg[mdi-tab-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h10v4h8v10H3zm7 5v3H7v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiTabPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabRemoveIcon],svg[mdi-tab-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.46 11.88l1.42-1.42L11 12.59l2.12-2.13l1.42 1.42L12.41 14l2.13 2.12l-1.42 1.42L11 15.41l-2.12 2.13l-1.42-1.42L9.59 14zM3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h18V9h-8V5z"></svg:path>`,
})
export class MdiTabRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabSearchIcon],svg[mdi-tab-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11C5 11 3 13 3 15.5c0 .88.25 1.71.69 2.4L.61 21L2 22.39l3.12-3.07c.69.43 1.51.68 2.38.68c2.5 0 4.5-2 4.5-4.5S10 11 7.5 11m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M23 5v14c0 1.11-.89 2-2 2H10.95c.81-.5 1.5-1.19 2.02-2H21V9h-8V5H3v5.82C1.77 12 1 13.66 1 15.5V5c0-1.1.9-2 2-2h18a2 2 0 0 1 2 2"></svg:path>`,
})
export class MdiTabSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabUnselectedIcon],svg[mdi-tab-unselected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 9h2V7H1zm0 4h2v-2H1zm0-8h2V3a2 2 0 0 0-2 2m8 16h2v-2H9zm-8-4h2v-2H1zm2 4v-2H1a2 2 0 0 0 2 2M21 3h-8v6h10V5a2 2 0 0 0-2-2m0 14h2v-2h-2zM9 5h2V3H9zM5 21h2v-2H5zM5 5h2V3H5zm16 16a2 2 0 0 0 2-2h-2zm0-8h2v-2h-2zm-8 8h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiTabUnselectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableIcon],svg[mdi-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8zm8 0v4h6V8zm-8 6v4h6v-4zm8 0v4h6v-4z"></svg:path>`,
})
export class MdiTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableAccountIcon],svg[mdi-table-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm19 9v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2"></svg:path>`,
})
export class MdiTableAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableAlertIcon],svg[mdi-table-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h14c1.11 0 2 .89 2 2v12c0 1.11-.89 2-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8zm8 0v4h6V8zm-8 6v4h6v-4zm8 0v4h6v-4zm12-7h-2v6h2zm0 8h-2v2h2z"></svg:path>`,
})
export class MdiTableAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableArrowDownIcon],svg[mdi-table-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm11.94 5.5h2v-4h2v4h2l-3 3z"></svg:path>`,
})
export class MdiTableArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableArrowLeftIcon],svg[mdi-table-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm14.44 2v2h4v2h-4v2l-3-3z"></svg:path>`,
})
export class MdiTableArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableArrowRightIcon],svg[mdi-table-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm15.44 8v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiTableArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableArrowUpIcon],svg[mdi-table-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm17.94 4.5h-2v4h-2v-4h-2l3-3z"></svg:path>`,
})
export class MdiTableArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableBorderIcon],svg[mdi-table-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19a1 1 0 0 1-1 1h-1v-2h2zm-6 1v-2h2v2zm-4 0v-2h2v2zm-4 0v-2h2v2zm-3 0a1 1 0 0 1-1-1v-1h2v2zM19 4H5a2 2 0 0 0-2 2v2h18V6c0-1.11-.89-2-2-2M5 14H3v2h2zm0-4H3v2h2zm16 0h-2v2h2zm0 4h-2v2h2zm-10 2v-2h2v2zm0-4v-2h2v2z"></svg:path>`,
})
export class MdiTableBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableCancelIcon],svg[mdi-table-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H11v4h1.08c-.11.68-.11 1.35 0 2H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm15.5 1C16 14 14 16 14 18.5s2 4.5 4.5 4.5s4.5-2 4.5-4.5s-2-4.5-4.5-4.5m0 7.5c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5L20 21.08c-.42.27-.94.42-1.5.42m2.58-1.5L17 15.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5"></svg:path>`,
})
export class MdiTableCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableChairIcon],svg[mdi-table-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22H6a2 2 0 0 1 2-2V8H2V5h14v3h-6v12a2 2 0 0 1 2 2M22 2v20h-2v-7h-5v7h-2v-8a2 2 0 0 1 2-2h5V2Z"></svg:path>`,
})
export class MdiTableChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableCheckIcon],svg[mdi-table-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm13.75 8L15 18l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiTableCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableClockIcon],svg[mdi-table-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 15.82l2.44 1.41l-.75 1.3L15 16.69V13h1.5zm3.5-5.56V5a2 2 0 0 0-2-2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h5.68c1.13 2.36 3.53 4 6.32 4c3.87 0 7-3.13 7-7c0-2.38-1.19-4.47-3-5.74M18 7v2.29c-.63-.18-1.3-.29-2-.29c-1.5 0-2.87.47-4 1.26V7zM4 7h6v4H4zm0 10v-4h5.68A7 7 0 0 0 9 16c0 .34.03.67.08 1zm12 4c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class MdiTableClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableCogIcon],svg[mdi-table-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H11v4h1.08c-.11.68-.11 1.35 0 2H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm19.78 6.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.33-.13l-1.22.5c-.28-.18-.54-.35-.85-.47l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.56-.29.84-.47l1.22.5c.14 0 .27 0 .34-.13l1-1.73a.26.26 0 0 0-.06-.32M18 19.5c-.83 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5s1.5.67 1.5 1.5s-.66 1.5-1.5 1.5"></svg:path>`,
})
export class MdiTableCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnIcon],svg[mdi-table-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 8v4h8v-4zm0 6v4h8v-4zM8 4v4h8V4z"></svg:path>`,
})
export class MdiTableColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnPlusAfterIcon],svg[mdi-table-column-plus-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2V2zm-7 8v4h7v-4zm0 6v4h7v-4zM4 4v4h7V4zm11 7h3V8h2v3h3v2h-3v3h-2v-3h-3z"></svg:path>`,
})
export class MdiTableColumnPlusAfterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnPlusBeforeIcon],svg[mdi-table-column-plus-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9V2zm7 8v4h-7v-4zm0 6v4h-7v-4zm0-12v4h-7V4zM9 11H6V8H4v3H1v2h3v3h2v-3h3z"></svg:path>`,
})
export class MdiTableColumnPlusBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnRemoveIcon],svg[mdi-table-column-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 8v4h7v-4zm0 6v4h7v-4zM4 4v4h7V4zm13.59 8L15 9.41L16.41 8L19 10.59L21.59 8L23 9.41L20.41 12L23 14.59L21.59 16L19 13.41L16.41 16L15 14.59z"></svg:path>`,
})
export class MdiTableColumnRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnWidthIcon],svg[mdi-table-column-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m0 4v3h6v-3zm8 0v3h6v-3zm-8 5v3h6v-3zm8 0v3h6v-3zM11 2h10v4h-2V4h-6v2h-2z"></svg:path>`,
})
export class MdiTableColumnWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableEditIcon],svg[mdi-table-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 13.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M12 18.94l6.07-6.06l2.05 2.05L14.06 21H12zM4 2h14a2 2 0 0 1 2 2v4.17L16.17 12H12v4.17L10.17 18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 4v4h6V6zm8 0v4h6V6zm-8 6v4h6v-4z"></svg:path>`,
})
export class MdiTableEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableEyeIcon],svg[mdi-table-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16.88c.56 0 1 .44 1 1s-.44 1-1 1s-1-.45-1-1s.44-1 1-1m0-3c2.73 0 5.06 1.66 6 4c-.94 2.34-3.27 4-6 4s-5.06-1.66-6-4c.94-2.34 3.27-4 6-4m0 1.5a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5M18 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5.42c-.16-.32-.3-.66-.42-1c.12-.34.26-.68.42-1H4v-4h6v2.97c.55-.86 1.23-1.6 2-2.21V13h1.15c1.16-.64 2.47-1 3.85-1c1.06 0 2.07.21 3 .59V5c0-1.1-.9-2-2-2m-8 8H4V7h6zm8 0h-6V7h6z"></svg:path>`,
})
export class MdiTableEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableEyeOffIcon],svg[mdi-table-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.8L6.2 3H18c1.1 0 2 .9 2 2v7.59c-.93-.38-1.94-.59-3-.59c-.55 0-1.09.07-1.62.18L14.2 11H18V7h-6zm5.09 5.09l5.22 5.22c.27-.38.51-.79.69-1.23c-.93-2.31-3.22-3.96-5.91-3.99m5.02 7.57l-1.27 1.27l-1.34-1.36c-.79.32-1.62.51-2.5.51c-2.73 0-5.06-1.66-6-4a6.34 6.34 0 0 1 2.21-2.78l-1.28-1.28c-.74.6-1.4 1.32-1.93 2.15V13H4v4h5.42c-.16.32-.3.66-.42 1c.12.34.26.68.42 1H4c-1.1 0-2-.9-2-2V5c0-.32.08-.62.22-.89L1.11 3l1.28-1.27zM9.11 11l-4-4H4v4zm9.07 9.07l-3.37-3.37c-.2.35-.31.75-.31 1.18a2.5 2.5 0 0 0 2.5 2.5c.43 0 .83-.11 1.18-.31"></svg:path>`,
})
export class MdiTableEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableFilterIcon],svg[mdi-table-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 21l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18zm-5-10h8V3a2 2 0 0 0-2-2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h9.42L12 15zm0-6h6v4h-6zm-2 10H4v-4h6zm0-6H4V5h6z"></svg:path>`,
})
export class MdiTableFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableFurnitureIcon],svg[mdi-table-furniture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h20v3h-2l1 9h-2.5l-.56-5H6.06l-.56 5H3l1-9H2zm15.5 3h-11l-.21 2h11.42z"></svg:path>`,
})
export class MdiTableFurnitureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableHeadersEyeIcon],svg[mdi-table-headers-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6v13a2 2 0 0 0 2 2h6V11h12V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2m2 0h4v3H3m4 10H3v-3h4m0-2H3v-3h4m2-2V6h4v3m6 0h-4V6h4m-2 10a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0-3a6.45 6.45 0 0 1 6 4a6.5 6.5 0 0 1-12 0a6.45 6.45 0 0 1 6-4m0 1.5a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiTableHeadersEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableHeadersEyeOffIcon],svg[mdi-table-headers-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.38 1.73L1.11 3l1.15 1.15A2 2 0 0 0 1 6v13a2 2 0 0 0 2 2h6V11h.11l3.61 3.61A6.2 6.2 0 0 0 11 17a6.45 6.45 0 0 0 6 4a6.6 6.6 0 0 0 1.84-.27l2 2l1.27-1.27l-1.53-1.53M7 19H3v-3h4m0-2H3v-3h4m0-2H3V6h1.11L7 8.89M17 19.5a2.5 2.5 0 0 1-2.44-3.05l3 3a2.5 2.5 0 0 1-.56.05m-.76-6.5l1.61 1.61a2.5 2.5 0 0 1 1.5 1.5l2.59 2.59A6.4 6.4 0 0 0 23 17a6.45 6.45 0 0 0-6-4zM13 6v3h-.8l2 2H21V6a2 2 0 0 0-2-2H7.2l2 2M15 6h4v3h-4Z"></svg:path>`,
})
export class MdiTableHeadersEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableHeartIcon],svg[mdi-table-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm15 9.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6z"></svg:path>`,
})
export class MdiTableHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableKeyIcon],svg[mdi-table-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.8 17c-.4-1.2-1.5-2-2.8-2c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H19v2h2v-2h2v-2zM14 19c-.6 0-1-.5-1-1s.4-1 1-1s1 .5 1 1s-.4 1-1 1m-5-1H4v-4h6v1c.9-1.2 2.4-2 4-2c1.1 0 2.1.4 3 1h1v1h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5.4c-.3-.6-.4-1.3-.4-2m3-10h6v4h-6zM4 8h6v4H4z"></svg:path>`,
})
export class MdiTableKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableLargeIcon],svg[mdi-table-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 4v3h4V7zm6 0v3h4V7zm10 3V7h-4v3zM4 12v3h4v-3zm0 8h4v-3H4zm6-8v3h4v-3zm0 8h4v-3h-4zm10 0v-3h-4v3zm0-8h-4v3h4z"></svg:path>`,
})
export class MdiTableLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableLargePlusIcon],svg[mdi-table-large-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.35 20H10v-3h2.09c.12-.72.37-1.39.72-2H10v-3h4v1.54c.58-.54 1.25-.93 2-1.19V12h4v.35c.75.26 1.42.65 2 1.19V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h9.54c-.54-.58-.93-1.25-1.19-2M16 7h4v3h-4zm-6 0h4v3h-4zM8 20H4v-3h4zm0-5H4v-3h4zm0-5H4V7h4zm9 4h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></svg:path>`,
})
export class MdiTableLargePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableLargeRemoveIcon],svg[mdi-table-large-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.35 20H10v-3h2.09c.12-.72.37-1.39.72-2H10v-3h4v1.54c.58-.54 1.25-.93 2-1.19V12h4v.35c.75.26 1.42.65 2 1.19V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h9.54c-.54-.58-.93-1.25-1.19-2M16 7h4v3h-4zm-6 0h4v3h-4zM8 20H4v-3h4zm0-5H4v-3h4zm0-5H4V7h4zm6.46 5.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18z"></svg:path>`,
})
export class MdiTableLargeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableLockIcon],svg[mdi-table-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16v-.5a2.5 2.5 0 0 0-5 0v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zm-7 2h-1v-4h2.26c.28-.79.78-1.5 1.43-2H12V8h6v3.05c.17-.02.33-.05.5-.05c.53 0 1.03.1 1.5.26V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9zm-3 0H4v-4h6zm0-6H4V8h6z"></svg:path>`,
})
export class MdiTableLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableMergeCellsIcon],svg[mdi-table-merge-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10H3V4h8v2H5zm14 8h-6v2h8v-6h-2zM5 18v-4H3v6h8v-2zM21 4h-8v2h6v4h2zM8 13v2l3-3l-3-3v2H3v2zm8-2V9l-3 3l3 3v-2h5v-2z"></svg:path>`,
})
export class MdiTableMergeCellsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableMinusIcon],svg[mdi-table-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19v-2h8v2zM4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4z"></svg:path>`,
})
export class MdiTableMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableMultipleIcon],svg[mdi-table-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h14a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 4v4h6V6zm8 0v4h6V6zm-8 6v4h6v-4zm8 0v4h6v-4zM3 20V6H1v14c0 1.11.89 2 2 2h16v-2z"></svg:path>`,
})
export class MdiTableMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableNetworkIcon],svg[mdi-table-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20c0-.55-.45-1-1-1h-1v-2h6c1.11 0 2-.89 2-2V3a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h6v2h-1c-.55 0-1 .45-1 1H2v2h7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h7v-2zM13 5h6v4h-6zm0 6h6v4h-6zM5 5h6v4H5zm0 10v-4h6v4z"></svg:path>`,
})
export class MdiTableNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableOfContentsIcon],svg[mdi-table-of-contents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2z"></svg:path>`,
})
export class MdiTableOfContentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableOffIcon],svg[mdi-table-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l2.11 2.11C3.08 5.38 3 5.68 3 6v12a2 2 0 0 0 2 2h13.11l2.73 2.73zm-12-9.46H5V8h1.11zm.89 6H5v-4h6zm2 0v-3.11L16.11 18zm0-8.2L7.2 4H19c1.11 0 2 .89 2 2v11.8l-2-2V14h-1.8l-2-2H19V8h-6z"></svg:path>`,
})
export class MdiTableOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTablePicnicIcon],svg[mdi-table-picnic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v3h-2l.22 2H23v2h-4.56l.56 5h-2.5l-.56-5H8.06l-.56 5H5l.56-5H1v-2h4.78L6 9H4m11.5 0h-7l-.21 2h7.42Z"></svg:path>`,
})
export class MdiTablePicnicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTablePivotIcon],svg[mdi-table-pivot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15h-2v3c0 1.11-.89 2-2 2h-3v2l-3-3l3-3v2h3v-3h-2l3-3zm0-11v4c0 1.1-.9 2-2 2H10v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2M4 8h4V4H4zm0 2v4h4v-4zm4 10v-4H4v4zm6-12V4h-4v4zm6-4h-4v4h4z"></svg:path>`,
})
export class MdiTablePivotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTablePlusIcon],svg[mdi-table-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4z"></svg:path>`,
})
export class MdiTablePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableQuestionIcon],svg[mdi-table-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 20.5V22H18v-1.5zm-2-5H16V15c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.01-.91 1.7v.2H18v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5zM18 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10v-2h-2v-4h2.42c.36-.8.92-1.5 1.61-2H12V7h6v3.1c.32-.06.66-.1 1-.1s.68.04 1 .1V5a2 2 0 0 0-2-2m-8 14H4v-4h6zm0-6H4V7h6z"></svg:path>`,
})
export class MdiTableQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableRefreshIcon],svg[mdi-table-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.5c1.11 0 2.11.45 2.83 1.17L22 14.5v4h-4l1.77-1.77A2.5 2.5 0 1 0 20 20h1.71A3.99 3.99 0 0 1 18 22.5c-2.21 0-4-1.79-4-4s1.79-4 4-4M4 3h14a2 2 0 0 1 2 2v7.17c-.5-.11-1-.17-1.5-.17c-1.27 0-2.46.37-3.46 1H12v4h.18q-.18.75-.18 1.5v.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4z"></svg:path>`,
})
export class MdiTableRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableRemoveIcon],svg[mdi-table-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.46 15.88l1.42-1.42L19 16.59l2.12-2.13l1.42 1.42L20.41 18l2.13 2.12l-1.42 1.42L19 19.41l-2.12 2.13l-1.42-1.42L17.59 18zM4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4z"></svg:path>`,
})
export class MdiTableRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowIcon],svg[mdi-table-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM4 14h4v-4H4zm6 0h4v-4h-4zm6 0h4v-4h-4z"></svg:path>`,
})
export class MdiTableRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowHeightIcon],svg[mdi-table-row-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 4v3h5V9zm7 0v3h5V9zm-7 5v3h5v-3zm7 0v3h5v-3zm13 0V7h-4v2h2v3h-2v2z"></svg:path>`,
})
export class MdiTableRowHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowPlusAfterIcon],svg[mdi-table-row-plus-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h2v2h4V3h2v2h4V3h2v2h4V3h2zM4 10h4V7H4zm6 0h4V7h-4zm10 0V7h-4v3zm-9 4h2v3h3v2h-3v3h-2v-3H8v-2h3z"></svg:path>`,
})
export class MdiTableRowPlusAfterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowPlusBeforeIcon],svg[mdi-table-row-plus-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7h2v-2h4v2h2v-2h4v2h2v-2h4v2h2zM4 14h4v3H4zm6 0h4v3h-4zm10 0v3h-4v-3zm-9-4h2V7h3V5h-3V2h-2v3H8v2h3z"></svg:path>`,
})
export class MdiTableRowPlusBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowRemoveIcon],svg[mdi-table-row-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.41 13L12 15.59L14.59 13L16 14.41L13.41 17L16 19.59L14.59 21L12 18.41L9.41 21L8 19.59L10.59 17L8 14.41zM22 9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM4 9h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4z"></svg:path>`,
})
export class MdiTableRowRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableSearchIcon],svg[mdi-table-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 17.89c1.32-2.1.7-4.89-1.41-6.21a4.52 4.52 0 0 0-6.21 1.41C10.36 15.2 11 18 13.09 19.3c1.47.92 3.33.92 4.8 0L21 22.39L22.39 21zm-2-.62c-.98.98-2.56.97-3.54 0c-.97-.98-.97-2.56.01-3.54c.97-.97 2.55-.97 3.53 0c.96.99.95 2.57-.03 3.54zM19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.81a6.3 6.3 0 0 1-1.31-2H5v-4h4.18c.16-.71.43-1.39.82-2H5V8h6v2.81a6.3 6.3 0 0 1 2-1.31V8h6v2a6.5 6.5 0 0 1 2 2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTableSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableSettingsIcon],svg[mdi-table-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8zm8 0v4h6V8zm-8 6v4h6v-4zm8 0v4h6v-4z"></svg:path>`,
})
export class MdiTableSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableSplitCellIcon],svg[mdi-table-split-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14h2v6H3v-6h2v4h14zM3 4v6h2V6h14v4h2V4zm8 7v2H8v2l-3-3l3-3v2zm5 0V9l3 3l-3 3v-2h-3v-2z"></svg:path>`,
})
export class MdiTableSplitCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableStarIcon],svg[mdi-table-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm12.5 8.6l.7-2.8l-2.2-1.9l2.9-.2L19 14l1.1 2.6l2.9.2l-2.2 1.9l.7 2.8l-2.5-1.4z"></svg:path>`,
})
export class MdiTableStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableSyncIcon],svg[mdi-table-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v1.5c2.21 0 4 1.79 4 4c0 .82-.24 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25zm0 11v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20v-1.5l2.25 2.25zM4 3h14a2 2 0 0 1 2 2v6h-.5c-1.84 0-3.5.77-4.69 2H12v4h1v.5c0 .5.06 1 .17 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4z"></svg:path>`,
})
export class MdiTableSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTableTennisIcon],svg[mdi-table-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 14c1.4 0 2.5 1.1 2.5 2.5S19.9 19 18.5 19S16 17.9 16 16.5s1.1-2.5 2.5-2.5M7 15s1 1 1 2v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V17c0-1 1-2 1-2zm1-1h3s5 0 5-5s-4-7-6.5-7S3 4 3 9s5 5 5 5"></svg:path>`,
})
export class MdiTableTennisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabletIcon],svg[mdi-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18H5V6h14m2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabletAndroidIcon],svg[mdi-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 19H4.75V3h14.5M14 22h-4v-1h4m4-21H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"></svg:path>`,
})
export class MdiTabletAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabletCellphoneIcon],svg[mdi-tablet-cellphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17a2 2 0 0 1 2 2v2h-4V6H5v12h9v2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 6h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1m1 2v7h4v-7z"></svg:path>`,
})
export class MdiTabletCellphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabletDashboardIcon],svg[mdi-tablet-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18H5V6h14m2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M7 8h6v5H7zm7 0h3v2h-3zm3 3v5h-3v-5zM7 14h6v2H7z"></svg:path>`,
})
export class MdiTabletDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTabletIpadIcon],svg[mdi-tablet-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 19H4V3h15m-7.5 20a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m7-23h-14A2.5 2.5 0 0 0 2 2.5v19A2.5 2.5 0 0 0 4.5 24h14a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0z" fill="currentColor"></svg:path>`,
})
export class MdiTabletIpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTacoIcon],svg[mdi-taco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18H5a4 4 0 0 1-4-4a8 8 0 0 1 8-8c1.06 0 2.07.21 3 .58c.93-.37 1.94-.58 3-.58a8 8 0 0 1 8 8a4 4 0 0 1-4 4M3 14a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-2.37 1.03-4.5 2.67-5.96L9 8a6 6 0 0 0-6 6m16 2a2 2 0 0 0 2-2a6 6 0 0 0-6-6a6 6 0 0 0-6 6c0 .73-.19 1.41-.54 2z"></svg:path>`,
})
export class MdiTacoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagIcon],svg[mdi-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"></svg:path>`,
})
export class MdiTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowDownIcon],svg[mdi-tag-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81c3.31 0 6 2.69 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7M7 19v-4H5v4H3l3 3l3-3z"></svg:path>`,
})
export class MdiTagArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowDownOutlineIcon],svg[mdi-tag-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m0 0C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m14.91 6.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.42l.41.4c.64-.38 1.35-.63 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08c-.1.74-.36 1.44-.74 2.08l.41.41c.37.38.88.59 1.41.59s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5M8 18v-4H6v4H4l3 3l3-3z"></svg:path>`,
})
export class MdiTagArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowLeftIcon],svg[mdi-tag-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81c3.31 0 6 2.69 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7M5 19h4v-2H5v-2l-3 3l3 3z"></svg:path>`,
})
export class MdiTagArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowLeftOutlineIcon],svg[mdi-tag-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m0 0C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m14.91 6.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.42l.41.4c.64-.38 1.35-.63 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08c-.1.74-.36 1.44-.74 2.08l.41.41c.37.38.88.59 1.41.59s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5M5 19h4v-2H5v-2l-3 3l3 3z"></svg:path>`,
})
export class MdiTagArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowRightIcon],svg[mdi-tag-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81c3.31 0 6 2.69 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7M6 17H2v2h4v2l3-3l-3-3z"></svg:path>`,
})
export class MdiTagArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowRightOutlineIcon],svg[mdi-tag-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m0 0C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m14.91 6.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.42l.41.4c.64-.38 1.35-.63 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08c-.1.74-.36 1.44-.74 2.08l.41.41c.37.38.88.59 1.41.59s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5M6 17H2v2h4v2l3-3l-3-3z"></svg:path>`,
})
export class MdiTagArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowUpIcon],svg[mdi-tag-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81c3.31 0 6 2.69 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7M5 17v4h2v-4h2l-3-3l-3 3z"></svg:path>`,
})
export class MdiTagArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagArrowUpOutlineIcon],svg[mdi-tag-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m0 0C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m14.91 6.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.42l.41.4c.64-.38 1.35-.63 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08c-.1.74-.36 1.44-.74 2.08l.41.41c.37.38.88.59 1.41.59s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5M6 17v4h2v-4h2l-3-3l-3 3z"></svg:path>`,
})
export class MdiTagArrowUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagCheckIcon],svg[mdi-tag-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81c3.31 0 6 2.69 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7m3.13 7.27l-3.87 3.9l-1.35-1.37L2 18.22L4.75 21l5.28-5.32z"></svg:path>`,
})
export class MdiTagCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagCheckOutlineIcon],svg[mdi-tag-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m0 0C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m14.91 6.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.42l.41.4c.64-.38 1.35-.63 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08c-.1.74-.36 1.44-.74 2.08l.41.41c.37.38.88.59 1.41.59s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m2.13 9.27l-3.87 3.9l-1.35-1.37L2 18.22L4.75 21l5.28-5.32z"></svg:path>`,
})
export class MdiTagCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagEditIcon],svg[mdi-tag-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.41 2.58l9 9c.36.36.59.86.59 1.42c0 .55-.22 1.05-.59 1.41l-7 7c-.36.36-.86.59-1.41.59s-1.05-.23-1.42-.59l-2.13-2.13l1.25-1.25v.01l2.41-2.42c1-.99 1-2.62 0-3.62l-1.28-1.26c-.99-.99-2.6-.99-3.59 0l-.17.17h-.01L4.57 14.4l-1.98-1.99C2.22 12.05 2 11.55 2 11V4c0-1.11.89-2 2-2h7c.55 0 1.05.22 1.41.58M4.44 6.56a1.499 1.499 0 1 0 2.12-2.12a1.499 1.499 0 1 0-2.12 2.12m6.26 8.79l1-1a.55.55 0 0 0 0-.77l-1.28-1.28a.55.55 0 0 0-.77 0l-1 1zm-2.64-1.47L2 19.94V22h2.06l6.05-6.07z"></svg:path>`,
})
export class MdiTagEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagEditOutlineIcon],svg[mdi-tag-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4c-.53 0-1.04.21-1.41.59C2.21 2.96 2 3.47 2 4v7c0 .26.05.53.15.77c.1.23.25.46.44.65l1.98 1.98L6 13l-2-2V4h7l9 9l-7 7l-2.13-2.13l-.17.17v-.01l-1.25 1.25l2.14 2.14c.38.37.88.58 1.41.58s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41c0-.26-.05-.5-.15-.77c-.1-.23-.25-.46-.44-.65M6.5 5a1.5 1.5 0 0 1 1.39.93c.11.27.14.57.08.86s-.2.56-.41.77s-.48.35-.77.41s-.59.03-.86-.08A1.5 1.5 0 0 1 6.5 5m4.2 10.35l1-1a.55.55 0 0 0 0-.77l-1.28-1.28a.55.55 0 0 0-.77 0l-1 1zm-2.64-1.47L2 19.94V22h2.06l6.05-6.07z"></svg:path>`,
})
export class MdiTagEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagFacesIcon],svg[mdi-tag-faces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18c-3.32 0-6-2.69-6-6c0-3.32 2.68-6 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6M4 13a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M22 3H7.63c-.66 0-1.25.32-1.63.81L0 12l6 8.18c.38.5.97.82 1.63.82H22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 8a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m2 5c1.86 0 3.35-1.28 3.8-3h-7.6c.45 1.72 1.94 3 3.8 3m2-5a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1"></svg:path>`,
})
export class MdiTagFacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagHeartIcon],svg[mdi-tag-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4a2 2 0 0 0-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m11.77 8.27L13 19.54l-4.27-4.27A2.52 2.52 0 0 1 8 13.5a2.5 2.5 0 0 1 2.5-2.5c.69 0 1.32.28 1.77.74l.73.72l.73-.73c.45-.45 1.08-.73 1.77-.73a2.5 2.5 0 0 1 2.5 2.5c0 .69-.28 1.32-.73 1.77"></svg:path>`,
})
export class MdiTagHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagHeartOutlineIcon],svg[mdi-tag-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42l-9-9C12.05 2.22 11.55 2 11 2zm7 2l9 9l-7 7l-9-9V4zM6.5 5A1.5 1.5 0 0 0 5 6.5A1.5 1.5 0 0 0 6.5 8A1.5 1.5 0 0 0 8 6.5A1.5 1.5 0 0 0 6.5 5m4.45 5.5c-1.13 0-2.05.92-2.05 2.05c0 .57.23 1.07.6 1.45l3.5 3.5l3.5-3.5c.37-.37.6-.89.6-1.45a2.05 2.05 0 0 0-2.05-2.05c-.55 0-1.08.23-1.45.6l-.6.6l-.6-.59c-.37-.38-.9-.61-1.45-.61"></svg:path>`,
})
export class MdiTagHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagHiddenIcon],svg[mdi-tag-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.64 3.81l-1.23-1.23C12.04 2.21 11.53 2 11 2h-1v2h1l1.23 1.23zm-.71 2.12l1.42-1.43l2.12 2.14l-1.42 1.41zM4 11l1.23 1.23l-1.42 1.41l-1.22-1.22c-.19-.19-.34-.42-.44-.65c-.1-.24-.15-.51-.15-.77v-1h2zm.5 3.35l1.43-1.42l2.12 2.12l-1.41 1.42zm4.97 4.95l-2.12-2.12l1.41-1.42l2.12 2.12zm6.29-10.54l2.12 2.12l1.42-1.41l-2.12-2.12zm2.83 2.83L20 10.17l1.41 1.41c.19.19.34.42.44.65c.1.27.15.51.15.77c0 .53-.21 1.04-.59 1.41zm2.11 3.53l-1.41-1.41l-2.44 2.44l1.41 1.41zm-4.55 1.73l1.41 1.41l-2.44 2.44l-1.41-1.41zm-1.74 4.56l-2.82-2.82L10.17 20l1.42 1.42c.38.37.88.58 1.41.58s1.04-.21 1.41-.59M4 9H2V6h2zM2 5h2V4h1V2H4c-.53 0-1.04.21-1.41.59C2.21 2.96 2 3.47 2 4zm4-1V2h3v2zm.5 4C7.33 8 8 7.33 8 6.5S7.33 5 6.5 5S5 5.67 5 6.5S5.67 8 6.5 8"></svg:path>`,
})
export class MdiTagHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagMinusIcon],svg[mdi-tag-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4a2 2 0 0 0-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81a6 6 0 0 1 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7M10 19H2v-2h8z"></svg:path>`,
})
export class MdiTagMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagMinusOutlineIcon],svg[mdi-tag-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m0 0C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5m14.91 6.58l-9-9C12.04 2.21 11.53 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .53.21 1.04.59 1.42l.41.4c.64-.38 1.35-.63 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08c-.1.74-.36 1.44-.74 2.08l.41.41c.37.38.88.59 1.41.59s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5M10 19H2v-2h8z"></svg:path>`,
})
export class MdiTagMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagMultipleIcon],svg[mdi-tag-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 9A1.5 1.5 0 0 0 7 7.5A1.5 1.5 0 0 0 5.5 6A1.5 1.5 0 0 0 4 7.5A1.5 1.5 0 0 0 5.5 9m11.91 2.58c.36.36.59.86.59 1.42c0 .55-.22 1.05-.59 1.41l-5 5a1.996 1.996 0 0 1-2.83 0l-6.99-6.99C2.22 12.05 2 11.55 2 11V6c0-1.11.89-2 2-2h5c.55 0 1.05.22 1.41.58zm-3.87-5.87l1-1l6.87 6.87c.37.36.59.87.59 1.42s-.22 1.05-.58 1.41l-5.38 5.38l-1-1L20.75 13z"></svg:path>`,
})
export class MdiTagMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagMultipleOutlineIcon],svg[mdi-tag-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 10C7.3 10 8 9.3 8 8.5S7.3 7 6.5 7S5 7.7 5 8.5S5.7 10 6.5 10M9 6l7 7l-5 5l-7-7V6zm0-2H4c-1.1 0-2 .9-2 2v5c0 .6.2 1.1.6 1.4l7 7c.3.4.8.6 1.4.6s1.1-.2 1.4-.6l5-5c.4-.4.6-.9.6-1.4c0-.6-.2-1.1-.6-1.4l-7-7C10.1 4.2 9.6 4 9 4m4.5 1.7l1-1l6.9 6.9c.4.4.6.9.6 1.4s-.2 1.1-.6 1.4L16 19.8l-1-1l5.7-5.8z"></svg:path>`,
})
export class MdiTagMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagOffIcon],svg[mdi-tag-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.33 8.5l4.59-4.58L21.5 2.5l-19 19l1.42 1.42l4.58-4.59l3.08 3.08A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42m-15.8 3.85l9.86-9.78l-3.06-3.07A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.41M5.5 4A1.5 1.5 0 1 1 4 5.5A1.5 1.5 0 0 1 5.5 4"></svg:path>`,
})
export class MdiTagOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagOffOutlineIcon],svg[mdi-tag-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5m0 0A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5m11.83 3.5l4.59-4.58L21.5 2.5l-19 19l1.42 1.42l4.58-4.59l3.09 3.09A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-3.08-3.08l7-7L20 13M5.61 15.43L7 14l-3-3V4h7l3.06 3.06l1.41-1.4l-3.06-3.08A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42M5 6.5A1.5 1.5 0 1 0 6.5 5A1.5 1.5 0 0 0 5 6.5"></svg:path>`,
})
export class MdiTagOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagOutlineIcon],svg[mdi-tag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5"></svg:path>`,
})
export class MdiTagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagPlusIcon],svg[mdi-tag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4a2 2 0 0 0-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81a6 6 0 0 1 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7M10 19H7v3H5v-3H2v-2h3v-3h2v3h3z"></svg:path>`,
})
export class MdiTagPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagPlusOutlineIcon],svg[mdi-tag-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5m0 0A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5m14.91 6.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l.41.4a5.6 5.6 0 0 1 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08a5.6 5.6 0 0 1-.74 2.08l.41.41A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5M10 19H7v3H5v-3H2v-2h3v-3h2v3h3Z"></svg:path>`,
})
export class MdiTagPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagRemoveIcon],svg[mdi-tag-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.04 2.21 11.53 2 11 2H4a2 2 0 0 0-2 2v7c0 .53.21 1.04.59 1.41l.41.4c.9-.54 1.94-.81 3-.81a6 6 0 0 1 6 6c0 1.06-.28 2.09-.82 3l.4.4c.37.38.89.6 1.42.6s1.04-.21 1.41-.59l7-7c.38-.37.59-.88.59-1.41s-.21-1.04-.59-1.42M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m2.62 14.54L6 19.41l-2.12 2.13l-1.42-1.42L4.59 18l-2.13-2.12l1.41-1.41L6 16.59l2.12-2.12l1.41 1.41L7.41 18l2.12 2.12z"></svg:path>`,
})
export class MdiTagRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagRemoveOutlineIcon],svg[mdi-tag-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5m0 0A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5m14.91 6.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l.41.4a5.6 5.6 0 0 1 2.08-.74L4 11V4h7l9 9l-7 7l-1.08-1.08a5.6 5.6 0 0 1-.74 2.08l.41.41A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5m1.62 16.54L6 19.41l-2.12 2.13l-1.42-1.42L4.59 18l-2.13-2.12l1.42-1.42L6 16.59l2.12-2.13l1.42 1.42L7.41 18l2.13 2.12Z"></svg:path>`,
})
export class MdiTagRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagSearchIcon],svg[mdi-tag-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l.42-.41C11.6 20.9 9 18.26 9 15c0-3.31 2.69-6 6-6c3.26 0 5.9 2.6 6 5.83l.41-.42c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7m9.61 3.61c2.5 0 4.5 2 4.5 4.5c0 .89-.25 1.71-.69 2.39L22 20.61L20.61 22l-3.11-3.07c-.7.43-1.5.68-2.39.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 1 0 2.5 2.5c0-1.39-1.11-2.5-2.5-2.5"></svg:path>`,
})
export class MdiTagSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagSearchOutlineIcon],svg[mdi-tag-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13c0 .53-.21 1.04-.59 1.41l-.41.42a6.004 6.004 0 0 0-4.89-5.72L11 4H4v7l5.11 5.11c.51 2.73 2.86 4.8 5.72 4.89l-.42.41c-.37.38-.88.59-1.41.59s-1.03-.21-1.41-.58l-9-9C2.21 12.04 2 11.53 2 11V4c0-1.1.9-2 2-2h7c.53 0 1.04.21 1.41.58l9 9c.38.38.59.89.59 1.42M5 6.5C5 7.33 5.67 8 6.5 8S8 7.33 8 6.5S7.33 5 6.5 5S5 5.67 5 6.5m10.11 4.11c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c.89 0 1.69-.25 2.39-.68L20.61 22L22 20.61l-3.08-3.11c.44-.68.69-1.5.69-2.39c0-2.5-2-4.5-4.5-4.5m0 2c1.39 0 2.5 1.12 2.5 2.5s-1.11 2.5-2.5 2.5s-2.5-1.11-2.5-2.5s1.12-2.5 2.5-2.5"></svg:path>`,
})
export class MdiTagSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagTextIcon],svg[mdi-tag-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.41l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M6.5 8A1.5 1.5 0 1 1 8 6.5A1.5 1.5 0 0 1 6.5 8m5.09 7.41l-4-4L9 10l4 4m2.59.41l-5.5-5.5L11.5 7.5L17 13Z"></svg:path>`,
})
export class MdiTagTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTagTextOutlineIcon],svg[mdi-tag-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.4 11.6l-9-9C12 2.2 11.5 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .5.2 1 .6 1.4l9 9c.4.4.9.6 1.4.6s1-.2 1.4-.6l7-7c.4-.4.6-.9.6-1.4s-.2-1-.6-1.4M13 20l-9-9V4h7l9 9M6.5 5C7.3 5 8 5.7 8 6.5S7.3 8 6.5 8S5 7.3 5 6.5S5.7 5 6.5 5m3.6 3.9l1.4-1.4L17 13l-1.4 1.4zm-2.5 2.5L9 10l4 4l-1.4 1.4z"></svg:path>`,
})
export class MdiTagTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTailwindIcon],svg[mdi-tailwind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"></svg:path>`,
})
export class MdiTailwindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark1Icon],svg[mdi-tally-mark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19h-2V5h2z"></svg:path>`,
})
export class MdiTallyMark1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark2Icon],svg[mdi-tally-mark-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19H9V5h2zm4-14h-2v14h2z"></svg:path>`,
})
export class MdiTallyMark2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark3Icon],svg[mdi-tally-mark-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19H7V5h2zm4-14h-2v14h2zm4 0h-2v14h2z"></svg:path>`,
})
export class MdiTallyMark3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark4Icon],svg[mdi-tally-mark-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19H5V5h2zm4-14H9v14h2zm4 0h-2v14h2zm4 0h-2v14h2z"></svg:path>`,
})
export class MdiTallyMark4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark5Icon],svg[mdi-tally-mark-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10.73V19h-2v-7.64L15 12v7h-2v-6.38l-2 .64V19H9v-5.11l-2 .61V19H5v-3.85l-2.43.77L2 14l3-.95V5h2v7.42l2-.63V5h2v6.16l2-.63V5h2v4.9l2-.64V5h2v3.63L21 8l.57 1.92z"></svg:path>`,
})
export class MdiTallyMark5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTangramIcon],svg[mdi-tangram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1.41 2L12 10.59L5.41 4zm-5.18 8l3.09-3.09L19.59 12l-3.09 3.09zm1.18 4H9.41L12 13.41zM4 5.41L10.59 12L4 18.59zM11.59 20H5.41l2-2h6.18zM20 20h-5.59L20 14.41zm0-10.41L17.91 7.5L20 5.41z"></svg:path>`,
})
export class MdiTangramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTankIcon],svg[mdi-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12H4v-1h2l1-5h5l1 5h7zm-6.78-5l.4 2H22V7zM22 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M6 16a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTankerTruckIcon],svg[mdi-tanker-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-5v6H2v3h1c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5zM6 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m12 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M17 12V9.5h2.5l2 2.5zm-3-2.5c0 1.9-1.6 3.5-3.5 3.5h-6C2.6 13 1 11.4 1 9.5S2.6 6 4.5 6H5V5H4V4h4v1H7v1h3.5C12.4 6 14 7.6 14 9.5"></svg:path>`,
})
export class MdiTankerTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTapeDriveIcon],svg[mdi-tape-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4M5 3h14a2 2 0 0 1 2 2v12h-4.1a6.96 6.96 0 0 0 2.1-5c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7h9c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2"></svg:path>`,
})
export class MdiTapeDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTapeMeasureIcon],svg[mdi-tape-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a7 7 0 0 1 7 7h1v3h-1v4H9a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 3a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m8 9h5v4h-2v-2h-3z"></svg:path>`,
})
export class MdiTapeMeasureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTargetIcon],svg[mdi-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v2.07A8 8 0 0 0 4.07 11H2v2h2.07A8 8 0 0 0 11 19.93V22h2v-2.07A8 8 0 0 0 19.93 13H22v-2h-2.07A8 8 0 0 0 13 4.07V2m-2 4.08V8h2V6.09c2.5.41 4.5 2.41 4.92 4.91H16v2h1.91c-.41 2.5-2.41 4.5-4.91 4.92V16h-2v1.91C8.5 17.5 6.5 15.5 6.08 13H8v-2H6.09C6.5 8.5 8.5 6.5 11 6.08M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTargetAccountIcon],svg[mdi-target-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.95 11h1.55v2h-1.55c-.45 4.17-3.78 7.5-7.95 7.95v1.55h-2v-1.55C6.83 20.5 3.5 17.17 3.05 13H1.5v-2h1.55C3.5 6.83 6.83 3.5 11 3.05V1.5h2v1.55c4.17.45 7.5 3.78 7.95 7.95M5.07 11H6.5v2H5.07A6.98 6.98 0 0 0 11 18.93V17.5h2v1.43A6.98 6.98 0 0 0 18.93 13H17.5v-2h1.43A6.98 6.98 0 0 0 13 5.07V6.5h-2V5.07A6.98 6.98 0 0 0 5.07 11M16 16H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zm-4-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiTargetAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTargetVariantIcon],svg[mdi-target-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.08 11.04h-2V4h-7.03V2h-2.01v2H4v7.04H2v2.01h2v7.03h7.04v2h2.01v-2h7.03v-7.03h2zm-4.01 7.03h-5.02v-2.01h-2.01v2.01H6v-5.02h2.03v-2.01H6V6h5.04v2.03h2.01V6h5.02v5.04h-2.01v2.01h2.01zm-5.02-6.02a1 1 0 0 1-1 1c-.55 0-1.01-.45-1.01-1s.46-1.01 1.01-1.01s1 .46 1 1.01"></svg:path>`,
})
export class MdiTargetVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTaxiIcon],svg[mdi-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1H15V3H9v2H6.5c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"></svg:path>`,
})
export class MdiTaxiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTeaIcon],svg[mdi-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v2H4zM20 8V5h-2v3zm0-5c.6 0 1 .2 1.4.6s.6.9.6 1.4v3c0 .6-.2 1-.6 1.4s-.8.6-1.4.6h-2v3c0 1.1-.4 2-1.2 2.8S15.1 17 14 17H8c-1.1 0-2-.4-2.8-1.2S4 14.1 4 13V3h5v2.4L7.2 6.8c-.1.1-.2.3-.2.4v4.3c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5V7.2c0-.2-.1-.3-.2-.4L10 5.4V3z"></svg:path>`,
})
export class MdiTeaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTeaOutlineIcon],svg[mdi-tea-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v2H4zM21.4 3.6C21 3.2 20.6 3 20 3H4v10c0 1.1.4 2 1.2 2.8S6.9 17 8 17h6c1.1 0 2-.4 2.8-1.2S18 14.1 18 13v-3h2c.6 0 1-.2 1.4-.6s.6-.8.6-1.4V5c0-.5-.2-1-.6-1.4M16 5v8c0 .6-.2 1-.6 1.4s-.8.6-1.4.6H8c-.6 0-1-.2-1.4-.6S6 13.5 6 13V5h4v1.4L8.2 7.8c-.2.1-.2.3-.2.4v4.3c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5V8.2c0-.2-.1-.3-.2-.4L11 6.4V5zm4 3h-2V5h2z"></svg:path>`,
})
export class MdiTeaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTeamspeakIcon],svg[mdi-teamspeak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12.202 13.027c.087.125.208.326.148.47c-.036.089-.207.137-.318.175l-.36.122l-.442.163c-.263.14-.269.393-.239.559l.108.32c.05.128.145.262.116.41c-.037.196-.411.21-.413.47c0 .119.076.176.158.236l.159.12l-.123.153l-.205.297l-.014.032l-.047.157l.016.22l.027.1v.002c.106.404.224.907.04 1.238c-.473.85-2.376.578-3.383.379c-.01-.06.061-.084.095-.113c.648-.543 1.187-1.278 1.56-2.105a6.93 6.93 0 0 0 .625-3.22c-.09-1.847-.662-3.189-1.58-4.253l-.753-.715l-.233-.181V3.656c1.102.428 1.879 1.213 2.513 2.176c.461.7.843 1.488 1.145 2.392c.15.445.317.999.074 1.42c-.102.178-.336.3-.37.542c-.028.188.08.347.158.49c.465.849.988 1.564 1.538 2.351zm9.321-3.83a7.83 7.83 0 0 1 .477 2.7a8.593 8.593 0 0 1-.426 2.75c-1.046 3.117-3.45 5.097-6.401 6.273c-1.49.593-3.09.954-5.204.954c-2.06 0-3.723-.483-5.336-1.015l.091-.081c.091-.059.315-.242.426-.244l.305.091c1.433.435 3.285.708 5.163.528c1.907-.183 3.352-.699 4.768-1.41c1.344-.676 2.538-1.569 3.449-2.741c.456-.588.814-1.228 1.167-1.928c.346-.69.532-1.55.598-2.487a9.17 9.17 0 0 0-.223-2.832a6.571 6.571 0 0 0-.964-2.131c-.843-1.252-1.82-2.292-3.084-3.096c-1.266-.805-2.678-1.432-4.433-1.746c-1.759-.314-3.797-.31-5.427.102V6.5h.001v1.602a2.987 2.987 0 0 1 1.431 2.556c0 1.564-1.19 2.846-2.706 2.972h-.006l-.12.008l-.073.001l-.045.002h-.016l-.121-.004h-.02l-.192-.016a2.978 2.978 0 0 1-1.714-.812c-.428-.4-.744-.97-.852-1.675L2 10.67L2 10.66c0-1.266.78-2.346 1.88-2.78l.732-3.464c.077-.368.143-.83.345-1.086c.41-.517 1.264-.67 2.02-.852c.796-.193 1.57-.301 2.515-.345c1.012-.047 2.11.072 2.992.213c2.751.44 4.81 1.542 6.442 3.086c1.076 1.017 2.03 2.203 2.597 3.765zM6.588 10.852c0-1.13-.914-2.046-2.042-2.046c-1.127 0-2.04.916-2.04 2.046s.913 2.046 2.04 2.046a2.044 2.044 0 0 0 2.042-2.046zm4.38-7.242c4.556.624 8.023 3.78 8.023 7.581c0 3.407-2.784 6.294-6.64 7.307c-.362.135-1.006.187-.975.115l-.002.003l.16-.573c.048-.274.08-.609.026-.902l-.013-.064c0-.004-.12-.239.083-.425v-.001l.03-.023c.076-.067.27-.271.191-.562l-.044-.082c-.092-.1-.065-.192-.007-.264l.13-.111c.198-.156.141-.373.075-.508l-.138-.195l-.019-.023l-.001-.001c-.334-.419.15-.615.492-.697l.092-.02c.246-.062.891-.277.735-.819l-.12-.216l-.47-.706h.015L11.32 10.69c-.135-.171-.076-.312-.014-.392l.319-.562c.096-.288.091-.588.07-.792a5.244 5.244 0 0 1 1.643 1.277c.456.528.842 1.204.842 2.145c0 .955-.39 1.618-.842 2.156a4.733 4.733 0 0 1-1.457 1.16l-.08.039c-.052.065-.078.146-.017.234l.127-.027a7.381 7.381 0 0 0 1.766-.831c.888-.577 1.719-1.279 2.258-2.197c.178-.301.315-.674.442-1.047c.257-.757.34-1.685.102-2.556c-.205-.75-.58-1.402-.995-1.98c-1.227-1.71-3.407-2.583-6.066-2.792v.004a8.958 8.958 0 0 0-1.06-.995s-.067-.087.303-.087s1.684.063 2.27.157l.038.007z" fill="currentColor"></svg:path>`,
})
export class MdiTeamspeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTeamviewerIcon],svg[mdi-teamviewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.04 9.2L9.3 11h5.45L14 9.2l5.55 2.8L14 14.8l.75-1.8H9.3l.74 1.8L4.5 12zM20.83 22H3.17C2.53 22 2 21.5 2 20.83V3.17C2 2.53 2.53 2 3.17 2h17.66C21.5 2 22 2.53 22 3.17v17.66c0 .64-.5 1.17-1.17 1.17m-8.9-18.24C7.41 3.82 3.78 7.5 3.76 12c-.04 4.5 3.59 8.2 8.1 8.24H12A8.346 8.346 0 0 0 20.24 12c.07-4.5-3.5-8.17-7.98-8.24c-.11-.01-.22 0-.33 0"></svg:path>`,
})
export class MdiTeamviewerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTeddyBearIcon],svg[mdi-teddy-bear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 19.13c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 11.25c-1.24 0-2.25-.84-2.25-1.87c0-1.04 1.01-1.88 2.25-1.88s2.25.84 2.25 1.88c0 1.03-1.01 1.87-2.25 1.87m-3.75 7.88c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 8.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M18.75 12c-.32 0-.63.07-.91.2c-.48-.61-1.13-1.13-1.91-1.53c.57-.8.91-1.77.91-2.82v-.06c1.09-.23 1.91-1.2 1.91-2.37c0-1.33-1.09-2.42-2.42-2.42c-.69 0-1.33.29-1.75.75a4.81 4.81 0 0 0-5.16 0C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42c0 1.16.82 2.13 1.9 2.37v.06c0 1.05.35 2.03.91 2.82c-.77.4-1.42.92-1.9 1.53A2.24 2.24 0 0 0 3 14.25c0 1.25 1 2.25 2.25 2.25h.06c-.04.24-.06.5-.06.75c0 2.07 1.34 3.75 3 3.75c1.01 0 1.9-.63 2.45-1.59c.42.06.85.09 1.3.09s.88-.03 1.3-.09c.55.96 1.44 1.59 2.45 1.59c1.66 0 3-1.68 3-3.75c0-.25-.02-.51-.06-.75h.06c1.25 0 2.25-1 2.25-2.25S20 12 18.75 12"></svg:path>`,
})
export class MdiTeddyBearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelegramIcon],svg[mdi-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="currentColor"></svg:path>`,
})
export class MdiTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelescopeIcon],svg[mdi-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 8.9l-1.7 1l-4-6.9l1.7-1zm-12.1-1l3 5.2l6.1-3.5l-3-5.2zm1.6 4.8l-2-3.5l-4.3 2.5l2 3.5zm-9.3 1.9l1 1.7l2.6-1.5l-1-1.7zm10-.6l-.3-.4l-4.3 2.5l.3.4c.2.3.5.6.8.8L7 22h2l1.4-4.3h.1L12 22h2l-1.9-5.6c.5-.7.5-1.6 0-2.4"></svg:path>`,
})
export class MdiTelescopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionIcon],svg[mdi-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTelevisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionAmbientLightIcon],svg[mdi-television-ambient-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11H0V9h3zm0 3H0v2h3zm2-8.88L2.88 3L1.46 4.41l2.13 2.13zM10 5V2H8v3zm14 4h-3v2h3zm-8-4V2h-2v3zm4.41 1.54l2.13-2.12L21.12 3L19 5.12zM24 14h-3v2h3zm-5-5v7c0 1.1-.9 2-2 2h-2v2H9v-2H7c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2m-2 0H7v7h10zm2 10.88L21.12 22l1.42-1.41l-2.13-2.12zM3.59 18.46l-2.12 2.13L2.88 22L5 19.88z"></svg:path>`,
})
export class MdiTelevisionAmbientLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionBoxIcon],svg[mdi-television-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m11 13l3-8h-2.5L15 12.5L13.5 8H5v2h3v6h2v-6h1.77L14 16z"></svg:path>`,
})
export class MdiTelevisionBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionClassicIcon],svg[mdi-television-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.16 3L6.75 4.41L9.34 7H4c-1.11 0-2 .89-2 2v10c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-5.34l2.59-2.59L15.84 3L12 6.84zM4 9h13v10H4zm15.5 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiTelevisionClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionClassicOffIcon],svg[mdi-television-classic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L21 21.72L19.73 23l-2-2H4c-1.11 0-2-.89-2-2V9c0-1 .76-1.86 1.75-2zM8.16 3L12 6.84L15.84 3l1.41 1.41L14.66 7H20c1.11 0 2 .89 2 2v10c0 .34-.08.66-.23.94L17 15.18V9h-6.18l-2-2h.52L6.75 4.41zM4 9v10h11.73l-10-10zm15.5 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 3a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiTelevisionClassicOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionGuideIcon],svg[mdi-television-guide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V5H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5v2H8v-2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 7h6v4H5zm0 6h6v2H5zm8-6h6v2h-6zm0 4h6v4h-6z"></svg:path>`,
})
export class MdiTelevisionGuideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionOffIcon],svg[mdi-television-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 2.77L1.78 1.5L21 20.72L19.73 22l-3-3H16v2H8v-2H3a2 2 0 0 1-2-2V5c0-.5.17-.93.46-1.27zM21 17V5H7.82l-2-2H21a2 2 0 0 1 2 2v12c0 .85-.55 1.59-1.3 1.87L19.82 17zM3 17h11.73L3 5.27z"></svg:path>`,
})
export class MdiTelevisionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionPauseIcon],svg[mdi-television-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2M3 5h18v12H3m6-9v6h2V8m2 0v6h2V8"></svg:path>`,
})
export class MdiTelevisionPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionPlayIcon],svg[mdi-television-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 14H3V5h18m-5 6l-7 4V7"></svg:path>`,
})
export class MdiTelevisionPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionShimmerIcon],svg[mdi-television-shimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17H3V5h18m0-2H3c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-6 3.5l-.62 1.37L13 8.5l1.38.63l.62 1.37l.63-1.37L17 8.5l-1.37-.63zm-4.5 2l-1.09 2.41L7 12l2.41 1.09l1.09 2.41l1.1-2.41L14 12l-2.4-1.09z"></svg:path>`,
})
export class MdiTelevisionShimmerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionSpeakerIcon],svg[mdi-television-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h4v-4H3V5h18v2h2V5c0-1.1-.9-2-2-2zm18 6h-5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m-2.5 1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S17 12.8 17 12s.7-1.5 1.5-1.5m0 10c-1.7 0-3-1.3-3-3c0-1.6 1.3-3 2.9-3h.1c1.7 0 3 1.3 3 3s-1.3 3-3 3m0-4.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5"></svg:path>`,
})
export class MdiTelevisionSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionSpeakerOffIcon],svg[mdi-television-speaker-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9h-5c-1 0-1.9.8-2 1.8l3.8 3.8c.2-.1.4-.1.7-.1h.1c1.7 0 3 1.3 3 3c0 .2 0 .5-.1.7l1.6 1.6V11c-.1-1.1-1-2-2.1-2m-2.5 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M23 5v2h-2V5H8.2l-2-2H21c1.1 0 2 .9 2 2M2.4 1.7L1.1 3l.5.5c-.3.4-.6.9-.6 1.5v12c0 1.1.9 2 2 2h5v2h4v-4H3V5h.1L14 15.9V20c0 1.1.9 2 2 2h4.1l.7.7l1.4-1.2zm16.1 18.8c-1.7 0-3-1.3-3-3v-.1l3.1 3.1z"></svg:path>`,
})
export class MdiTelevisionSpeakerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionStopIcon],svg[mdi-television-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a2 2 0 0 1 2 2v12c0 1.1-.9 2-2 2h-5v2H8v-2H3c-1.1 0-2-.9-2-2V5c0-1.11.89-2 2-2m0 2v12h18V5zm6 3h6v6H9z"></svg:path>`,
})
export class MdiTelevisionStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTemperatureCelsiusIcon],svg[mdi-temperature-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 5c1.55 0 3 .47 4.19 1.28l-1.16 2.89A4.47 4.47 0 0 0 16.5 8C14 8 12 10 12 12.5s2 4.5 4.5 4.5c1.03 0 1.97-.34 2.73-.92l1.14 2.85A7.47 7.47 0 0 1 16.5 20A7.5 7.5 0 0 1 9 12.5A7.5 7.5 0 0 1 16.5 5M6 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiTemperatureCelsiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTemperatureFahrenheitIcon],svg[mdi-temperature-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20V5h9v3h-6v3h5v3h-5v6zM6 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiTemperatureFahrenheitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTemperatureKelvinIcon],svg[mdi-temperature-kelvin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h3v6l5-6h4l-5.12 5.78L19 20h-3.62l-3.62-6.83L10 15.15V20H7z"></svg:path>`,
})
export class MdiTemperatureKelvinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTempleBuddhistIcon],svg[mdi-temple-buddhist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2H1c0 1.9 1.3 3.4 3 3.8V22h6v-3c0-1.1.9-2 2-2s2 .9 2 2v3h6v-9.1c.5-.1 3-1 3-3.9zM6 8.9V10h12V8.9c.5-.1 3-1 3-3.9h-2c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2H3c0 1.9 1.3 3.4 3 3.9M12 1L8.2 6h7.5z"></svg:path>`,
})
export class MdiTempleBuddhistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTempleBuddhistOutlineIcon],svg[mdi-temple-buddhist-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9c0 1.1-.9 2-2 2h-1V8.9c1.7-.4 3-2 3-3.8h-2c0 1.1-.9 2-2 2h-.5L12 1L7.5 7H7c-1.1 0-2-.9-2-2H3c0 1.9 1.3 3.4 3 3.8V11H5c-1.1 0-2-.9-2-2H1c0 1.9 1.3 3.4 3 3.8V22h7v-4c0-.5.4-1 1-1s1 .5 1 1v4h7v-9.1c1.7-.4 3-2 3-3.8zm-9-4.7L14 7h-4zM8 9h8v2H8zm10 11h-3v-2c0-1.6-1.4-3-3-3s-3 1.4-3 3v2H6v-7h12z"></svg:path>`,
})
export class MdiTempleBuddhistOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTempleHinduIcon],svg[mdi-temple-hindu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zm-4.1-5L15 3V1h-2v2h-2V1H9v2.1L8.1 6z"></svg:path>`,
})
export class MdiTempleHinduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTempleHinduOutlineIcon],svg[mdi-temple-hindu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11v2h-2L15 3V1h-2v2h-2V1H9v2.1L6 13H4v-2H2v11h9v-5h2v5h9V11zm-4.7 0H8.7l.6-2h5.4zm-1.2-4H9.9l.6-2h3zM20 20h-5v-5H9v5H4v-5h3.5l.6-2h7.8l.6 2H20z"></svg:path>`,
})
export class MdiTempleHinduOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTennisIcon],svg[mdi-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M6.05 14.54s1.41-1.42 1.42-4.24c-.36-2.19.5-4.76 2.47-6.72C12.87.65 17.14.17 19.5 2.5c2.33 2.36 1.85 6.63-1.08 9.56c-1.96 1.97-4.53 2.83-6.72 2.47c-2.82.01-4.24 1.42-4.24 1.42l-4.24 4.24l-1.41-1.41zM18.07 3.93C16.5 2.37 13.5 2.84 11.35 5c-2.14 2.14-2.62 5.15-1.06 6.71c1.57 1.56 4.57 1.08 6.71-1.06c2.16-2.15 2.63-5.15 1.07-6.72"></svg:path>`,
})
export class MdiTennisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTennisBallIcon],svg[mdi-tennis-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c2.5 0 4.75.9 6.5 2.4A9.98 9.98 0 0 0 15 12c0 3.04 1.36 5.77 3.5 7.6c-1.75 1.5-4 2.4-6.5 2.4s-4.75-.9-6.5-2.4A9.98 9.98 0 0 0 9 12c0-3.04-1.36-5.77-3.5-7.6C7.25 2.9 9.5 2 12 2m10 10c0 2.32-.79 4.45-2.12 6.15A8 8 0 0 1 17 12c0-2.47 1.12-4.68 2.88-6.15A9.94 9.94 0 0 1 22 12M2 12c0-2.32.79-4.45 2.12-6.15A8 8 0 0 1 7 12c0 2.47-1.12 4.68-2.88 6.15A9.94 9.94 0 0 1 2 12"></svg:path>`,
})
export class MdiTennisBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTennisBallOutlineIcon],svg[mdi-tennis-ball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.17 2.76A10.1 10.1 0 0 1 12 2c1.31 0 2.61.26 3.83.76c1.21.5 2.31 1.24 3.24 2.17s1.67 2.03 2.17 3.24c.5 1.22.76 2.52.76 3.83c0 2.65-1.05 5.2-2.93 7.07A9.97 9.97 0 0 1 12 22a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17M6.89 18.15a7.98 7.98 0 0 0 10.22 0A9.97 9.97 0 0 1 15 12c0-2.32.79-4.45 2.11-6.15A7.96 7.96 0 0 0 12 4c-1.88 0-3.68.66-5.11 1.85A10 10 0 0 1 9 12c0 2.32-.79 4.46-2.11 6.15M5.5 16.67C6.44 15.35 7 13.74 7 12s-.56-3.35-1.5-4.66A8 8 0 0 0 4 12c0 1.68.53 3.31 1.5 4.67m13-9.33A7.97 7.97 0 0 0 17 12c0 1.74.56 3.35 1.5 4.67A8.02 8.02 0 0 0 20 12c0-1.68-.53-3.31-1.5-4.66"></svg:path>`,
})
export class MdiTennisBallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTentIcon],svg[mdi-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c0 1.19.39 2.27 1 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c-.61.73-1 1.81-1 3M2 21v-2h2.76L12 4.78L19.24 19H22v2zM12 9.19L7 19h10z"></svg:path>`,
})
export class MdiTentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTerraformIcon],svg[mdi-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5.4v6.4L15.4 15V8.7zm-6.2 3.3V15l-5.6-3.2V5.4zm0 7v6.4l-5.6-3.2v-6.4zM8.6 5.1v6.4L3 8.3V1.9z"></svg:path>`,
})
export class MdiTerraformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTerrainIcon],svg[mdi-terrain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"></svg:path>`,
})
export class MdiTerrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTestTubeIcon],svg[mdi-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h1v14a4 4 0 0 0 4 4a4 4 0 0 0 4-4V4h1V2zm4 14c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1-5h-4V4h4z"></svg:path>`,
})
export class MdiTestTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTestTubeEmptyIcon],svg[mdi-test-tube-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v2h-1v14a4 4 0 0 1-4 4a4 4 0 0 1-4-4V4H7zm7 2h-4v14a2 2 0 0 0 2 2a2 2 0 0 0 2-2z"></svg:path>`,
})
export class MdiTestTubeEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTestTubeOffIcon],svg[mdi-test-tube-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-2.89-2.89A4.01 4.01 0 0 1 12 22a4 4 0 0 1-4-4v-6.73zM7 2h10v2h-1v10.18l-2.37-2.37c.23-.18.37-.46.37-.81c0-.6-.4-1-1-1c-.35 0-.63.14-.81.37L8 6.18V4H7zm4 14c.5 0 .88-.29 1-.76L10.76 14c-.47.12-.76.5-.76 1c0 .6.4 1 1 1m3-9V4h-4v3z"></svg:path>`,
})
export class MdiTestTubeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextIcon],svg[mdi-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6v2H3V6zM3 18h9v-2H3zm0-5h18v-2H3z"></svg:path>`,
})
export class MdiTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextAccountIcon],svg[mdi-text-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v2H3V5zM3 17h9v-2H3zm0-5h18v-2H3zm15 2a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m-4 8v-1c0-1.1 1.79-2 4-2s4 .9 4 2v1z"></svg:path>`,
})
export class MdiTextAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxIcon],svg[mdi-text-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17H7v-2h7m3-2H7v-2h10m0-2H7V7h10m2-4H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTextBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxCheckIcon],svg[mdi-text-box-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 21l-2.75-3l1.16-1.16L17 18.43l3.59-3.59l1.16 1.41M12.8 21H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08V11H7v2h7.69A5.98 5.98 0 0 0 12 18c0 1.09.29 2.12.8 3m-.8-6H7v2h5m5-10H7v2h10"></svg:path>`,
})
export class MdiTextBoxCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxCheckOutlineIcon],svg[mdi-text-box-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 21l-2.75-3l1.16-1.16L17 18.43l3.59-3.59l1.16 1.41M12.8 21H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2m-.8-4H7v-2h5m2.68-2H7v-2h10v1.08c-.85.14-1.63.46-2.32.92M17 9H7V7h10"></svg:path>`,
})
export class MdiTextBoxCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxEditIcon],svg[mdi-text-box-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19.11L12.11 17H7v-2h7v.12L16.12 13H7v-2h10v1.12l1.24-1.23c.48-.48 1.11-.75 1.8-.75c.33 0 .66.07.96.19V5a2 2 0 0 0-2-2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5zM7 7h10v2H7zm14.7 7.35l-1 1l-2.05-2.05l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 19.94l6.06-6.06l2.05 2.05L14.06 22H12z"></svg:path>`,
})
export class MdiTextBoxEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxEditOutlineIcon],svg[mdi-text-box-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2h14c1.11 0 2 .89 2 2v5.33c-.3-.12-.63-.19-.96-.19c-.37 0-.72.08-1.04.23V5H5v14h5.11l-.11.11zM7 9h10V7H7zm0 8h5.11L14 15.12V15H7zm0-4h9.12l.88-.88V11H7zm14.7.58l-1.28-1.28a.55.55 0 0 0-.77 0l-1 1l2.05 2.05l1-1a.55.55 0 0 0 0-.77M12 22h2.06l6.05-6.07l-2.05-2.05L12 19.94z"></svg:path>`,
})
export class MdiTextBoxEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxMinusIcon],svg[mdi-text-box-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zm-10 0v-2H7v2zm5-6H7v2h7.69A5.98 5.98 0 0 0 12 18c0 1.09.29 2.12.8 3H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08zm0-2V7H7v2z"></svg:path>`,
})
export class MdiTextBoxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxMinusOutlineIcon],svg[mdi-text-box-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zM5 3h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7zm0 4h10v1.08c-.85.14-1.63.46-2.32.92H7zm0 4h5v2H7z"></svg:path>`,
})
export class MdiTextBoxMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxMultipleIcon],svg[mdi-text-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15H9v-2h7m3-2H9V9h10m0-2H9V5h10m2-4H7c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V3a2 2 0 0 0-2-2M3 5v16h16v2H3a2 2 0 0 1-2-2V5z"></svg:path>`,
})
export class MdiTextBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxMultipleOutlineIcon],svg[mdi-text-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15H9v-2h7zm3-4H9V9h10zm0-4H9V5h10zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm18-4a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2zM7 3v14h14V3z"></svg:path>`,
})
export class MdiTextBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxOutlineIcon],svg[mdi-text-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 2h14v14H5zm2 2v2h10V7zm0 4v2h10v-2zm0 4v2h7v-2z"></svg:path>`,
})
export class MdiTextBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxPlusIcon],svg[mdi-text-box-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zm-5 3v-2H7v2zm5-6H7v2h7.69A5.98 5.98 0 0 0 12 18c0 1.09.29 2.12.8 3H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08zm0-2V7H7v2z"></svg:path>`,
})
export class MdiTextBoxPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxPlusOutlineIcon],svg[mdi-text-box-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM5 3h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7zm0 4h10v1.08c-.85.14-1.63.46-2.32.92H7zm0 4h5v2H7z"></svg:path>`,
})
export class MdiTextBoxPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxRemoveIcon],svg[mdi-text-box-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18zM12 17v-2H7v2zm5-6H7v2h7.69A5.98 5.98 0 0 0 12 18c0 1.09.29 2.12.8 3H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08zm0-2V7H7v2z"></svg:path>`,
})
export class MdiTextBoxRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxRemoveOutlineIcon],svg[mdi-text-box-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.13l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18zM5 3h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7zm0 4h10v1.08c-.85.14-1.63.46-2.32.92H7zm0 4h5v2H7z"></svg:path>`,
})
export class MdiTextBoxRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxSearchIcon],svg[mdi-text-box-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M7 15v2h2c.14 1.55.8 2.94 1.81 4H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v8.03A6.49 6.49 0 0 0 15.5 10c-1.27 0-2.46.37-3.46 1H7v2h3c-.36.6-.66 1.28-.83 2zm10-6V7H7v2z"></svg:path>`,
})
export class MdiTextBoxSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxSearchOutlineIcon],svg[mdi-text-box-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M5 3h14c1.11 0 2 .89 2 2v8.03c-.5-.8-1.19-1.49-2-2.03V5H5v14h4.5c.31.75.76 1.42 1.31 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7zm0 4h5.03c-.8.5-1.49 1.19-2.03 2H7zm0 4h2.17c-.11.5-.17 1-.17 1.5v.5H7z"></svg:path>`,
})
export class MdiTextBoxSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextLongIcon],svg[mdi-text-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4z"></svg:path>`,
})
export class MdiTextLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextRecognitionIcon],svg[mdi-text-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c0-1.1.9-2 2-2h4v2H4v4H2zm20 16c0 1.11-.89 2-2 2h-4v-2h4v-4h2zM4 22a2 2 0 0 1-2-2v-4h2v4h4v2zM20 2a2 2 0 0 1 2 2v4h-2V4h-4V2zM9 7v2h2v8h2V9h2V7z"></svg:path>`,
})
export class MdiTextRecognitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextSearchIcon],svg[mdi-text-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.31 18.9l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4m-3.81.1a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 0 0 5M21 4v2H3V4zM3 16v-2h6v2zm0-5V9h18v2h-2.03c-1.01-.63-2.2-1-3.47-1s-2.46.37-3.47 1z"></svg:path>`,
})
export class MdiTextSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextSearchVariantIcon],svg[mdi-text-search-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v2H2V6zm0 5v2H2v-2zm9 5v2H2v-2zm1.31-4.5c.44-.68.69-1.5.69-2.39c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 16l1.39-1.39zm-3.81.11c-1.38 0-2.5-1.11-2.5-2.5s1.12-2.5 2.5-2.5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class MdiTextSearchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextShadowIcon],svg[mdi-text-shadow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h13v3h-5v12H8V6H3zm9 4h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"></svg:path>`,
})
export class MdiTextShadowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextShortIcon],svg[mdi-text-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h16v2H4zm0 4h10v2H4z"></svg:path>`,
})
export class MdiTextShortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextureIcon],svg[mdi-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.29 21h2.83L21 12.12V9.29M19 21c.55 0 1.05-.22 1.41-.59c.37-.36.59-.86.59-1.41v-2l-4 4M5 3a2 2 0 0 0-2 2v2l4-4m4.88 0L3 11.88v2.83L14.71 3m4.79.08L3.08 19.5c.09.35.27.66.51.91c.25.24.56.42.91.51L20.93 4.5c-.19-.7-.73-1.24-1.43-1.42"></svg:path>`,
})
export class MdiTextureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTextureBoxIcon],svg[mdi-texture-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6l2-2h4.9L4 10.9zm0 7.7L13.7 4h4.9L4 18.6zM20 18l-2 2h-4.9l6.9-6.9zm0-7.7L10.3 20H5.4L20 5.4z"></svg:path>`,
})
export class MdiTextureBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTheaterIcon],svg[mdi-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v3H1v-3h1v-2a2 2 0 0 1 2-2m7-8l4 3l-4 3zM4 2h16a2 2 0 0 1 2 2v9.54a3.9 3.9 0 0 0-2-.54V4H4v9c-.73 0-1.41.19-2 .54V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiTheaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThemeLightDarkIcon],svg[mdi-theme-light-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07zm-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13zm-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87zM19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35zm4.33-2.7l1.15-2.77l2.2 2.54zm1.15-4.96l-1.14-2.78l3.34.24zM9.63 18.93l2.77 1.15l-2.53 2.19z"></svg:path>`,
})
export class MdiThemeLightDarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerIcon],svg[mdi-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerAlertIcon],svg[mdi-thermometer-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13V7h2v6zm0 4v-2h2v2zm-4-4V5c0-1.7-1.3-3-3-3S7 3.3 7 5v8c-2.2 1.7-2.7 4.8-1 7s4.8 2.7 7 1s2.7-4.8 1-7c-.3-.4-.6-.7-1-1m-3-9c.6 0 1 .4 1 1v3H9V5c0-.6.4-1 1-1"></svg:path>`,
})
export class MdiThermometerAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerAutoIcon],svg[mdi-thermometer-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c-.3-.4-.6-.7-1-1V5c0-1.7-1.3-3-3-3S5 3.3 5 5v8c-2.2 1.7-2.7 4.8-1 7s4.8 2.7 7 1s2.7-4.8 1-7M9 8H7V5c0-.5.5-1 1-1s1 .5 1 1zm9-5h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.2 5.7L17 5l1.2 3.7z"></svg:path>`,
})
export class MdiThermometerAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerBluetoothIcon],svg[mdi-thermometer-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13V5c0-1.66-1.34-3-3-3S5 3.34 5 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M8 4c.55 0 1 .45 1 1v3H7V5c0-.55.45-1 1-1m10 4v3.79L15.71 9.5l-.71.71L17.79 13L15 15.79l.71.71L18 14.21V18h.5l2.85-2.86L19.21 13l2.14-2.15L18.5 8zm1 1.91l.94.94l-.94.94zm0 4.3l.94.93l-.94.94z"></svg:path>`,
})
export class MdiThermometerBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerCheckIcon],svg[mdi-thermometer-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13V5c0-1.66-1.34-3-3-3S4 3.34 4 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M7 4c.55 0 1 .45 1 1v3H6V5c0-.55.45-1 1-1m9.25 11.16l-2.75-3L14.66 11l1.59 1.59L19.84 9L21 10.41z"></svg:path>`,
})
export class MdiThermometerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerChevronDownIcon],svg[mdi-thermometer-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.41 12.17L14.24 9l-1.41 1.41L17.41 15L22 10.41L20.58 9M10 13V5c0-1.66-1.34-3-3-3S4 3.34 4 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M7 4c.55 0 1 .45 1 1v3H6V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerChevronUpIcon],svg[mdi-thermometer-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.41 11.83L20.58 15L22 13.59L17.41 9l-4.59 4.59L14.24 15zM10 13V5c0-1.66-1.34-3-3-3S4 3.34 4 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M7 4c.55 0 1 .45 1 1v3H6V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerHighIcon],svg[mdi-thermometer-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1h-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiThermometerHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerLinesIcon],svg[mdi-thermometer-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-3.25l-.75-.9zm4 4v2h-2c0-.69-.1-1.37-.29-2zM7 3v2H3V3zm0 4v2H3V7zm0 4v1.1l-.75.9H3v-2zm-4 4h2.29c-.19.63-.29 1.31-.29 2H3zm12-2V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1m-3-9c.55 0 1 .45 1 1v3h-2V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerLinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerLowIcon],svg[mdi-thermometer-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v7h-2V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiThermometerLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerMinusIcon],svg[mdi-thermometer-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-8v2h8zm-11 2V5c0-1.66-1.34-3-3-3S5 3.34 5 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M8 4c.55 0 1 .45 1 1v3H7V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerOffIcon],svg[mdi-thermometer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 7.8l-2-2V5c0-1.66 1.34-3 3-3s3 1.34 3 3v6.8L11.2 8H13V5c0-.55-.45-1-1-1s-1 .45-1 1zm11.11 13.66L2.39 1.73L1.11 3L9 10.89V13a4.997 4.997 0 0 0-1 7a4.997 4.997 0 0 0 7 1c.84-.63 1.4-1.5 1.71-2.4l4.13 4.13z"></svg:path>`,
})
export class MdiThermometerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerPlusIcon],svg[mdi-thermometer-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11V8h-2v3h-3v2h3v3h2v-3h3v-2m-11 2V5c0-1.66-1.34-3-3-3S5 3.34 5 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M8 4c.55 0 1 .45 1 1v3H7V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerProbeIcon],svg[mdi-thermometer-probe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.47 3.47l-6 6l-2.94.53c-.31.03-.59.18-.81.4l-6.91 6.91a2.76 2.76 0 0 0 0 3.89a2.76 2.76 0 0 0 3.89 0l6.91-6.91c.22-.22.39-.5.42-.79l.51-2.96l6-6L22 2zM11 14.38c-.76 0-1.38-.62-1.38-1.38s.62-1.38 1.38-1.38s1.38.62 1.38 1.38A1.39 1.39 0 0 1 11 14.38"></svg:path>`,
})
export class MdiThermometerProbeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerProbeOffIcon],svg[mdi-thermometer-probe-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 3.64l7.24 7.24l-6.43 6.43a2.76 2.76 0 0 0 0 3.89a2.76 2.76 0 0 0 3.89 0l6.43-6.43l7.6 7.6L22 21.1L3.27 2.37zm8.23 8.22l1.91 1.91a1.376 1.376 0 1 1-1.91-1.91m4.23-.86L13 9.55l.47-.08l6-6L22 2l-1.46 2.54l-6 6z"></svg:path>`,
})
export class MdiThermometerProbeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerWaterIcon],svg[mdi-thermometer-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13V5c0-1.66-1.34-3-3-3S4 3.34 4 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M7 4c.55 0 1 .45 1 1v3H6V5c0-.55.45-1 1-1m11 3s-4 4.34-4 7.07c0 5.24 8 5.24 8 0C22 11.34 18 7 18 7"></svg:path>`,
})
export class MdiThermometerWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermostatIcon],svg[mdi-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.95 16.95l-2.12-2.12C15.55 14.1 16 13.1 16 12c0-.74-.21-1.43-.57-2l2.17-2.19A6.86 6.86 0 0 1 19 12c0 1.93-.78 3.68-2.05 4.95M12 5c1.57 0 3 .5 4.19 1.4L14 8.56c-.57-.35-1.26-.56-2-.56a4 4 0 0 0-4 4c0 1.1.45 2.1 1.17 2.83l-2.12 2.12A6.98 6.98 0 0 1 5 12a7 7 0 0 1 7-7m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"></svg:path>`,
})
export class MdiThermostatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermostatAutoIcon],svg[mdi-thermostat-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.4 0 .7 0 1.1-.1l2.3-6.6l-.6-.6c.7-.7 1.2-1.7 1.2-2.8c0-.7-.2-1.4-.6-2l2.2-2.2C18.5 9 19 10.4 19 12h1c.3 0 .6.1.8.2c0 0 .1 0 .1.1c.4.2.8.6 1 1.1c.1-.5.1-.9.1-1.4c0-5.5-4.5-10-10-10m2 6.6c-.6-.4-1.3-.6-2-.6c-2.2 0-4 1.8-4 4c0 1.1.4 2.1 1.2 2.8l-2.1 2.1C5.8 15.7 5 13.9 5 12c0-3.9 3.1-7 7-7c1.6 0 3 .5 4.2 1.4zm6 5.4h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.2 5.7L19 16l1.2 3.7z"></svg:path>`,
})
export class MdiThermostatAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermostatBoxIcon],svg[mdi-thermostat-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm7 2c1.57 0 3 .5 4.19 1.4L14 8.56c-.57-.35-1.26-.56-2-.56a4 4 0 0 0-4 4c0 1.1.45 2.1 1.17 2.83l-2.12 2.12A6.98 6.98 0 0 1 5 12a7 7 0 0 1 7-7m5.6 2.81A6.86 6.86 0 0 1 19 12c0 1.93-.78 3.68-2.05 4.95l-2.12-2.12C15.55 14.1 16 13.1 16 12c0-.74-.21-1.43-.57-2z"></svg:path>`,
})
export class MdiThermostatBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermostatBoxAutoIcon],svg[mdi-thermostat-box-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.2 5.7L19 16l1.2 3.7zm-2.4-4.3l-.6-.6c.7-.7 1.2-1.7 1.2-2.8c0-.7-.2-1.4-.6-2l2.2-2.2C18.5 9 19 10.4 19 12h2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8.4zm-6.2-.6L7 17c-1.3-1.3-2-3-2-5c0-3.9 3.1-7 7-7c1.6 0 3 .5 4.2 1.4L14 8.6c-.6-.4-1.3-.6-2-.6c-2.2 0-4 1.8-4 4c0 1.1.5 2.1 1.2 2.8"></svg:path>`,
})
export class MdiThermostatBoxAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThermostatCogIcon],svg[mdi-thermostat-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.66c-.93-.42-1.93-.66-3-.66c0-1.57-.5-3-1.4-4.19L15.43 10c.36.57.57 1.26.57 2c0 .24 0 .5-.06.7A7.01 7.01 0 0 0 12 19c0 1.07.24 2.07.66 3H12a10.1 10.1 0 0 1-3.83-.76a10 10 0 0 1-3.24-2.17A9.97 9.97 0 0 1 2 12c0-2.65 1.05-5.2 2.93-7.07c.93-.93 2.03-1.67 3.24-2.17A10.1 10.1 0 0 1 12 2c5.5 0 10 4.47 10 10zM12 5a7.001 7.001 0 0 0-4.95 11.95l2.12-2.12a4.004 4.004 0 0 1 0-5.66C9.92 8.42 10.94 8 12 8c.74 0 1.43.21 2 .56l2.19-2.16A6.86 6.86 0 0 0 12 5m11.83 15.64c.06-.11.04-.25-.06-.32l-1.05-.82a4.3 4.3 0 0 0 0-1l1.05-.82c.1-.07.12-.18.06-.32l-1-1.72c-.06-.11-.19-.14-.3-.11l-1.25.47l-.14-.09c-.23-.14-.44-.27-.7-.37l-.19-1.33A.25.25 0 0 0 20 14h-2c-.12 0-.23.09-.25.21l-.18 1.33c-.27.1-.48.24-.71.38l-.14.08l-1.22-.47c-.13-.03-.27 0-.33.11l-1 1.72c-.06.14-.03.25.06.32l1.06.82v.03c-.02.16-.04.31-.04.47s.02.31.04.47v.03l-1.06.82c-.09.07-.12.21-.06.32l1 1.73c.06.13.2.13.33.13l1.22-.53c.28.2.53.37.85.5l.18 1.32c.02.12.13.21.25.21h2c.13 0 .23-.09.25-.21l.19-1.32c.31-.13.56-.3.84-.5l1.25.53c.11 0 .24 0 .3-.13zM19 17.25c.97 0 1.75.78 1.75 1.75s-.79 1.75-1.75 1.75s-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75"></svg:path>`,
})
export class MdiThermostatCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThoughtBubbleIcon],svg[mdi-thought-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 19A1.5 1.5 0 0 1 5 20.5A1.5 1.5 0 0 1 3.5 22A1.5 1.5 0 0 1 2 20.5A1.5 1.5 0 0 1 3.5 19m5-3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 21A2.5 2.5 0 0 1 6 18.5A2.5 2.5 0 0 1 8.5 16m6-1c-1.19 0-2.27-.5-3-1.35c-.73.85-1.81 1.35-3 1.35c-1.96 0-3.59-1.41-3.93-3.26A4.02 4.02 0 0 1 2 8a4 4 0 0 1 4-4c.26 0 .5.03.77.07C7.5 3.41 8.45 3 9.5 3c1.19 0 2.27.5 3 1.35c.73-.85 1.81-1.35 3-1.35c1.96 0 3.59 1.41 3.93 3.26A4.02 4.02 0 0 1 22 10a4 4 0 0 1-4 4l-.77-.07c-.73.66-1.68 1.07-2.73 1.07"></svg:path>`,
})
export class MdiThoughtBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThoughtBubbleOutlineIcon],svg[mdi-thought-bubble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 19A1.5 1.5 0 0 1 5 20.5A1.5 1.5 0 0 1 3.5 22A1.5 1.5 0 0 1 2 20.5A1.5 1.5 0 0 1 3.5 19m5-3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 21A2.5 2.5 0 0 1 6 18.5A2.5 2.5 0 0 1 8.5 16m6-1c-1.19 0-2.27-.5-3-1.35c-.73.85-1.81 1.35-3 1.35c-1.96 0-3.59-1.41-3.93-3.26A4.02 4.02 0 0 1 2 8a4 4 0 0 1 4-4l.77.07C7.5 3.41 8.45 3 9.5 3c1.19 0 2.27.5 3 1.35c.73-.85 1.81-1.35 3-1.35c1.96 0 3.59 1.41 3.93 3.26A4.02 4.02 0 0 1 22 10a4 4 0 0 1-4 4l-.77-.07c-.73.66-1.68 1.07-2.73 1.07M6 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2c.33 0 .64-.08.92-.22A2 2 0 0 0 6.5 11a2 2 0 0 0 2 2c.6 0 1.14-.27 1.5-.69l1.47-1.68L13 12.34c.38.4.91.66 1.5.66c1 0 1.83-.74 2-1.7c.34.43.89.7 1.5.7a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.33 0-.64.08-.92.22A2 2 0 0 0 17.5 7a2 2 0 0 0-2-2c-.59 0-1.12.26-1.5.66l-1.53 1.71L11 5.69c-.36-.42-.9-.69-1.5-.69c-1 0-1.83.74-2 1.7C7.16 6.27 6.61 6 6 6m2.5 11.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiThoughtBubbleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThumbDownIcon],svg[mdi-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiThumbDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThumbDownOutlineIcon],svg[mdi-thumb-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V3h4v12zM15 3a2 2 0 0 1 2 2v10c0 .55-.22 1.05-.59 1.41L9.83 23l-1.06-1.06c-.27-.27-.44-.64-.44-1.06l.03-.31l.95-4.57H3a2 2 0 0 1-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3zm0 2H5.97L3 12v2h8.78l-1.13 5.32L15 14.97z"></svg:path>`,
})
export class MdiThumbDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThumbUpIcon],svg[mdi-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"></svg:path>`,
})
export class MdiThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThumbUpOutlineIcon],svg[mdi-thumb-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9v12H1V9zm4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21zm0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03z"></svg:path>`,
})
export class MdiThumbUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThumbsUpDownIcon],svg[mdi-thumbs-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 10h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18a1 1 0 0 0 1 1h5.18l-.68 3.18v.24c0 .31.13.58.33.8l.79.78l4.94-4.94c.27-.27.44-.65.44-1.06v-6.5a1.5 1.5 0 0 0-1.5-1.5M12 6a1 1 0 0 0-1-1H5.82l.68-3.18v-.23c0-.31-.13-.59-.33-.8L5.38 0L.44 4.94C.17 5.21 0 5.59 0 6v6.5A1.5 1.5 0 0 0 1.5 14h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55z"></svg:path>`,
})
export class MdiThumbsUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiThumbsUpDownOutlineIcon],svg[mdi-thumbs-up-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c0-.55-.45-1-1-1H5.82l.68-3.18v-.23c0-.31-.13-.59-.33-.8L5.38 0L.44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55zm-2 1.13L7.92 12H2V6.21l1.93-1.93L3.36 7H10zM22.5 10h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.68 3.18v.24c0 .31.13.58.33.8l.79.78l4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5m-.5 7.79l-1.93 1.93l.57-2.72H14v-.13L16.08 12H22z"></svg:path>`,
})
export class MdiThumbsUpDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTicketIcon],svg[mdi-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.58 16.8L12 14.5l-3.58 2.3l1.08-4.12L6.21 10l4.25-.26L12 5.8l1.54 3.94l4.25.26l-3.29 2.68M20 12a2 2 0 0 1 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2a2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2"></svg:path>`,
})
export class MdiTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTicketAccountIcon],svg[mdi-ticket-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a2 2 0 0 0 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 0 2-2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 0-2 2m-3.5 4.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zm-4.5-4A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"></svg:path>`,
})
export class MdiTicketAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTicketConfirmationIcon],svg[mdi-ticket-confirmation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8.5h-2v-2h2zm0 4.5h-2v-2h2zm0 4.5h-2v-2h2zm9-7.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2a2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiTicketConfirmationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTicketConfirmationOutlineIcon],svg[mdi-ticket-confirmation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 1 1 0 4v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.5-.8-2.77-2-3.46V6h16zM11 15h2v2h-2m0-6h2v2h-2m0-6h2v2h-2Z"></svg:path>`,
})
export class MdiTicketConfirmationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTicketOutlineIcon],svg[mdi-ticket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2a2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2a2 2 0 0 1 2-2V6a2 2 0 0 0-2-2zm0 2h16v2.54c-1.24.71-2 2.03-2 3.46s.76 2.75 2 3.46V18H4v-2.54c1.24-.71 2-2.03 2-3.46s-.76-2.75-2-3.46z"></svg:path>`,
})
export class MdiTicketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTicketPercentIcon],svg[mdi-ticket-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2a2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2a2 2 0 0 1 2-2V6a2 2 0 0 0-2-2zm11.5 3L17 8.5L8.5 17L7 15.5zm-6.69.04c.98 0 1.77.79 1.77 1.77a1.77 1.77 0 0 1-1.77 1.77c-.98 0-1.77-.79-1.77-1.77a1.77 1.77 0 0 1 1.77-1.77m6.38 6.38c.98 0 1.77.79 1.77 1.77a1.77 1.77 0 0 1-1.77 1.77c-.98 0-1.77-.79-1.77-1.77a1.77 1.77 0 0 1 1.77-1.77"></svg:path>`,
})
export class MdiTicketPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTicketPercentOutlineIcon],svg[mdi-ticket-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.8 8L16 9.2L9.2 16L8 14.8zM4 4h16c1.11 0 2 .89 2 2v4a2 2 0 1 0 0 4v4c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2m0 2v2.54a3.994 3.994 0 0 1 0 6.92V18h16v-2.54a3.994 3.994 0 0 1 0-6.92V6zm5.5 2c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11S8 10.33 8 9.5S8.67 8 9.5 8m5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiTicketPercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTieIcon],svg[mdi-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 2l4 4l-3 11l5 5l5-5l-3-11l4-4Z"></svg:path>`,
})
export class MdiTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTildeIcon],svg[mdi-tilde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15s0-6 6-6c4 0 4.5 3.5 7.5 3.5c4 0 4-3.5 4-3.5H22s0 6-6 6c-4 0-5.5-3.5-7.5-3.5c-4 0-4 3.5-4 3.5z"></svg:path>`,
})
export class MdiTildeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTildeOffIcon],svg[mdi-tilde-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L10.78 12.67C10 12.03 9.27 11.5 8.5 11.5c-4 0-4 3.5-4 3.5H2s0-5.41 5.16-5.95L1.11 3l1.28-1.27l7.64 7.64L15.64 15h-.01l6.48 6.46zM22 9h-2.5s0 3.38-3.81 3.5l2.26 2.25C22 13.62 22 9 22 9"></svg:path>`,
})
export class MdiTildeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelapseIcon],svg[mdi-timelapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.24 5.76A5.95 5.95 0 0 0 12 6v6l-4.24 4.24a6 6 0 0 0 8.48 0a5.98 5.98 0 0 0 0-8.48"></svg:path>`,
})
export class MdiTimelapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineIcon],svg[mdi-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2"></svg:path>`,
})
export class MdiTimelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineAlertIcon],svg[mdi-timeline-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-9 1v6h2V7zm0 8v2h2v-2z"></svg:path>`,
})
export class MdiTimelineAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineAlertOutlineIcon],svg[mdi-timeline-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2M10 6v12h12V6zm5 1h2v6h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class MdiTimelineAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineCheckIcon],svg[mdi-timeline-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H2V2h2zM2 22h2v-6H2zm1-12a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m21-4v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-4.25 4.33l-1.16-1.41L15 12.5l-1.59-1.58l-1.16 1.16l2.75 3z"></svg:path>`,
})
export class MdiTimelineCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineCheckOutlineIcon],svg[mdi-timeline-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H10a2 2 0 0 0-2 2v4l-2 2l2 2v4a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H10V6h12zM4 8H2V2h2zm-2 8h2v6H2zm3-4c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m10 3.08l-2.75-3l1.16-1.16L15 12.5l3.59-3.58l1.16 1.41z"></svg:path>`,
})
export class MdiTimelineCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineClockIcon],svg[mdi-timeline-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m11-8c4.42 0 8 3.58 8 8s-3.58 8-8 8c-3.6 0-6.64-2.38-7.65-5.65L6 12l2.35-2.35C9.36 6.38 12.4 4 16 4m-1 9l4.53 2.79l.8-1.29l-3.83-2.3V7H15z"></svg:path>`,
})
export class MdiTimelineClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineClockOutlineIcon],svg[mdi-timeline-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m11-8c4.42 0 8 3.58 8 8s-3.58 8-8 8c-3.6 0-6.64-2.38-7.65-5.65L6 12l2.35-2.35C9.36 6.38 12.4 4 16 4m0 2c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-1 7V8h1.5v4.2l3 1.8l-.82 1.26z"></svg:path>`,
})
export class MdiTimelineClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineMinusIcon],svg[mdi-timeline-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H2V2h2zm20-2v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-4 5h-8v2h8zM2 22h2v-6H2zm1-12a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTimelineMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineMinusOutlineIcon],svg[mdi-timeline-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h2v6H2zM4 2H2v6h2zm16 9h-8v2h8zM3 10a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m21-4v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-2 0H10v12h12z"></svg:path>`,
})
export class MdiTimelineMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineOutlineIcon],svg[mdi-timeline-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2M10 6v12h12V6z"></svg:path>`,
})
export class MdiTimelineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelinePlusIcon],svg[mdi-timeline-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-4 5h-3V8h-2v3h-3v2h3v3h2v-3h3z"></svg:path>`,
})
export class MdiTimelinePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelinePlusOutlineIcon],svg[mdi-timeline-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m15-1v2h-3v3h-2v-3h-3v-2h3V8h2v3zm4-5v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2M10 6v12h12V6z"></svg:path>`,
})
export class MdiTimelinePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineQuestionIcon],svg[mdi-timeline-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22v-6h2v6zm3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-7.5 9.5H15V17h1.5zm-2-5V10c0-.83.67-1.5 1.5-1.5s1.5.68 1.5 1.5c0 .47-.23.9-.62 1.16l-.29.19C15.6 12 15 13.11 15 14.3v.2h1.5v-.2c0-.68.34-1.3.91-1.7l.3-.19C18.5 11.88 19 10.97 19 10c0-1.66-1.34-3-3-3s-3 1.34-3 3v.5z"></svg:path>`,
})
export class MdiTimelineQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineQuestionOutlineIcon],svg[mdi-timeline-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12c0 1.11-.89 2-2 2a2 2 0 1 1 2-2M4 2v6H2V2zM2 22v-6h2v6zM24 6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-2 0H10v4.83L8.83 12L10 13.17V18h12zm-5.5 9.5V17H15v-1.5zm-2-5H13V10c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .97-.5 1.88-1.29 2.41l-.3.19c-.57.4-.91 1.02-.91 1.7v.2H15v-.2c0-1.19.6-2.3 1.59-2.95l.29-.19c.39-.26.62-.69.62-1.16c0-.82-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5z"></svg:path>`,
})
export class MdiTimelineQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineRemoveIcon],svg[mdi-timeline-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H2V2h2zM2 22h2v-6H2zm1-12a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m21-4v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-6.59 6l2.12-2.12l-1.41-1.41L16 10.59l-2.12-2.12l-1.41 1.41L14.59 12l-2.12 2.12l1.41 1.41L16 13.41l2.12 2.12l1.41-1.41z"></svg:path>`,
})
export class MdiTimelineRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineRemoveOutlineIcon],svg[mdi-timeline-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H2V2h2zM2 22h2v-6H2zm1-12a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m10.88 5.54L16 13.41l2.12 2.12l1.41-1.41L17.41 12l2.12-2.12l-1.41-1.41L16 10.59l-2.12-2.12l-1.41 1.41L14.59 12l-2.12 2.12zM24 6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-2 0H10v12h12z"></svg:path>`,
})
export class MdiTimelineRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineTextIcon],svg[mdi-timeline-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v6H2V2zM2 22h2v-6H2zm3-10a2 2 0 1 0-2 2c1.11 0 2-.89 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-5 7h-8v2h8zm2-4H11v2h10z"></svg:path>`,
})
export class MdiTimelineTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimelineTextOutlineIcon],svg[mdi-timeline-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12c0 1.11-.89 2-2 2a2 2 0 1 1 2-2M4 2v6H2V2zM2 22v-6h2v6zM24 6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-2 0H10v4.83L8.83 12L10 13.17V18h12zM12 9h8v2h-8zm0 4h6v2h-6z"></svg:path>`,
})
export class MdiTimelineTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerIcon],svg[mdi-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2zm2-13H9v2h6z"></svg:path>`,
})
export class MdiTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimer10Icon],svg[mdi-timer-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.9 13.22q0 .9-.12 1.53c-.08.42-.2.75-.36 1.02c-.16.26-.36.45-.59.57s-.51.16-.83.16c-.29 0-.57-.04-.81-.16q-.36-.18-.6-.57c-.16-.27-.29-.6-.38-1.02s-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52s.21-.74.38-1c.16-.25.36-.43.6-.55c.24-.11.51-.15.81-.15c.31 0 .58.04.81.15c.24.11.44.29.6.55c.16.25.29.58.37.99s.13.92.13 1.52v2.51m.91-6.17c-.32-.4-.75-.7-1.23-.88A4.7 4.7 0 0 0 11 5.9c-.58 0-1.11.1-1.59.27c-.48.18-.91.47-1.23.88c-.34.41-.6.95-.79 1.59c-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39c.19.66.45 1.19.8 1.6c.34.41.75.71 1.23.89a4.66 4.66 0 0 0 3.18 0c.48-.18.9-.48 1.22-.89c.34-.41.6-.94.78-1.6c.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39c-.18-.64-.44-1.19-.78-1.59m9.96 7.32c-.14-.28-.35-.53-.63-.74s-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.22c-.23-.09-.42-.17-.55-.26a.7.7 0 0 1-.28-.3a.9.9 0 0 1-.09-.39c0-.14.04-.28.1-.41a.8.8 0 0 1 .27-.34c.13-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.03.66.11c.19.07.35.17.48.29c.13.13.22.26.29.42c.06.16.11.32.11.49h1.94c0-.39-.08-.75-.24-1.09s-.39-.63-.7-.88c-.29-.25-.65-.44-1.08-.59C21.5 9.07 21 9 20.46 9c-.51 0-.96.07-1.39.21c-.41.14-.77.33-1.07.57c-.28.22-.5.52-.66.84a2.2 2.2 0 0 0-.23 1.01c0 .37.08.69.23.96c.16.28.36.52.66.73c.25.21.58.38.96.53s.81.26 1.27.36c.39.08.71.17.95.26s.43.19.57.29c.13.1.22.24.25.34c.07.12.09.25.09.4c0 .31-.13.56-.4.76s-.66.29-1.19.29c-.2 0-.41-.02-.62-.08a1.9 1.9 0 0 1-.56-.24c-.17-.11-.32-.26-.41-.44c-.11-.18-.17-.41-.18-.67h-1.89c0 .38.08.71.24 1.05c.16.33.39.65.7.93c.31.27.69.49 1.15.66s.98.24 1.57.24c.54 0 1-.05 1.45-.18c.43-.13.8-.32 1.11-.54c.31-.23.54-.51.71-.83s.23-.67.23-1.06s-.07-.74-.22-1.02M0 7.72V9.4l3-1V18h2V6h-.25z"></svg:path>`,
})
export class MdiTimer10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimer3Icon],svg[mdi-timer-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.87 14.37c-.14-.28-.37-.53-.63-.74c-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.88-.22c-.22-.09-.4-.17-.54-.26a.7.7 0 0 1-.28-.3a.9.9 0 0 1-.08-.39c0-.15.03-.28.09-.41a.8.8 0 0 1 .27-.34q.18-.15.45-.24c.18-.06.4-.09.64-.09c.25 0 .45.03.66.11c.19.07.35.17.48.29c.13.13.22.26.31.42c.04.16.08.32.08.49h1.95a2.52 2.52 0 0 0-.93-1.97c-.3-.25-.66-.44-1.1-.59c-.42-.15-.91-.22-1.45-.22c-.51 0-.98.07-1.39.21s-.77.33-1.06.57c-.29.22-.51.52-.67.84a2.2 2.2 0 0 0-.23 1.01c0 .37.08.68.23.96s.37.52.64.73s.6.38.98.53s.81.26 1.27.36c.39.08.71.17.95.26c.23.09.43.19.57.29c.13.1.22.24.27.34c.05.12.07.25.07.4c0 .31-.13.56-.4.76c-.28.2-.66.29-1.17.29c-.22 0-.43-.02-.64-.08c-.21-.05-.4-.13-.56-.24a1.33 1.33 0 0 1-.59-1.11h-1.89c0 .38.07.71.24 1.05c.16.33.39.65.7.93c.31.27.69.49 1.13.66c.5.17 1 .24 1.6.24c.53 0 1.01-.05 1.44-.18s.8-.32 1.11-.54c.31-.23.54-.51.71-.83s.25-.67.25-1.06c-.02-.39-.11-.74-.24-1.02m-9.26-1.4c-.16-.24-.36-.47-.61-.65a3.6 3.6 0 0 0-.94-.48c.3-.14.57-.3.8-.5s.42-.41.57-.64s.27-.46.34-.7c.08-.25.11-.5.11-.74c0-.55-.09-1.04-.28-1.46c-.18-.42-.44-.77-.78-1.06c-.32-.28-.73-.5-1.2-.64c-.45-.13-.97-.2-1.53-.2c-.55 0-1.06.1-1.52.24q-.705.255-1.2.69c-.33.29-.6.63-.78 1.03c-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69c.08-.2.22-.38.38-.52c.17-.14.36-.25.58-.33s.46-.11.73-.11c.61 0 1.06.15 1.36.46s.44.75.44 1.32c0 .27-.04.52-.12.72c-.08.24-.21.43-.38.59s-.38.28-.63.37s-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11c.27.08.5.19.69.35s.34.38.44.61c.1.24.16.54.16.87c0 .62-.18 1.09-.53 1.4c-.35.35-.84.5-1.45.5c-.29 0-.56-.03-.8-.12c-.24-.08-.44-.2-.61-.38q-.255-.21-.39-.54c-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.31 1.45c.22.42.5.77.87 1.05c.36.26.77.49 1.24.63c.47.13.96.21 1.48.21c.57 0 1.09-.08 1.58-.23s.91-.38 1.26-.68c.36-.3.64-.67.84-1.1s.3-.93.3-1.48c0-.29-.04-.59-.11-.86c-.08-.23-.19-.51-.35-.76"></svg:path>`,
})
export class MdiTimer3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerAlertIcon],svg[mdi-timer-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.45 5.97c-.45-.51-.9-.97-1.41-1.41L15.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM11 14H9V7h2zm2-11H7V1h6zm10 4v6h-2V7zm-2 8h2v2h-2z"></svg:path>`,
})
export class MdiTimerAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerAlertOutlineIcon],svg[mdi-timer-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8h2v6H9zm4-7H7v2h6zm4.03 6.39A8.96 8.96 0 0 1 19 13c0 4.97-4 9-9 9a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41zM17 13c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7m4-6v6h2V7zm0 10h2v-2h-2z"></svg:path>`,
})
export class MdiTimerAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerCancelIcon],svg[mdi-timer-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-3 15.5c0 1.27.37 2.44 1 3.44c-.33.06-.66.06-1 .06a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A9.16 9.16 0 0 1 21 12.5a6.5 6.5 0 0 0-9 6M13 7h-2v7h2zm10 11.5c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiTimerCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerCancelOutlineIcon],svg[mdi-timer-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7c3.54 0 6.45 2.62 6.93 6.03c.72.05 1.41.2 2.07.47a9.16 9.16 0 0 0-1.97-5.11l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.34 0 .67 0 1-.06c-.37-.59-.65-1.25-.82-1.94zm11-1.5c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiTimerCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerCheckIcon],svg[mdi-timer-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-2 16c0 1.03.26 2 .71 2.83c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13v.35c-.64-.22-1.3-.35-2-.35c-3.31 0-6 2.69-6 6m0-12h-2v7h2zm8.34 8.84l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiTimerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerCheckOutlineIcon],svg[mdi-timer-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17c-.31-.58-.53-1.23-.63-1.92c-.36.05-.71.09-1.08.09m9.34-4.16l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiTimerCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerCogIcon],svg[mdi-timer-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.8 19.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM19.5 18c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5M11 18c0-1.5.5-2.9 1.3-4H11V7h2v6.1c1.3-1.3 3-2.1 5-2.1c1 0 2 .2 2.9.6c-.3-1.6-.9-3-1.9-4.2L20.5 6c-.5-.5-1-1-1.5-1.4L17.6 6c-1.5-1.3-3.5-2-5.6-2c-5 0-9 4-9 9s4 9 9 9h.3c-.8-1.1-1.3-2.5-1.3-4m4-17H9v2h6z"></svg:path>`,
})
export class MdiTimerCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerCogOutlineIcon],svg[mdi-timer-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.8 19.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM19.5 18c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5M13 14V8h-2v6m4-13H9v2h6zm-3.7 19C7.8 19.6 5 16.6 5 13c0-3.9 3.1-7 7-7c3.2 0 5.9 2.1 6.7 5c.8.1 1.5.3 2.2.6c-.3-1.6-.9-3-1.9-4.2L20.5 6c-.5-.5-1-1-1.5-1.4L17.6 6c-1.5-1.3-3.5-2-5.6-2c-5 0-9 4-9 9s4 9 9 9h.3c-.5-.6-.8-1.3-1-2"></svg:path>`,
})
export class MdiTimerCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerEditIcon],svg[mdi-timer-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm4.39 7.74L11 19.13v2.81c-4.5-.5-8-4.31-8-8.94a9 9 0 0 1 9-9c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42c.64.8 1.14 1.72 1.47 2.71c-.4.11-.79.32-1.11.64M13 7h-2v7h2zm0 12.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiTimerEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerEditOutlineIcon],svg[mdi-timer-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2V8h2zm2-13H9v2h6zM5 13a6.995 6.995 0 0 1 13.79-1.66l.6-.6c.32-.32.71-.53 1.11-.64a8.6 8.6 0 0 0-1.47-2.71l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0-9 9c0 4.63 3.5 8.44 8 8.94v-2.02c-3.39-.49-6-3.39-6-6.92m8 6.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiTimerEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerLockIcon],svg[mdi-timer-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-.8 11.5v.24c-.7.6-1.2 1.5-1.2 2.46v3.5c0 .42.09.83.24 1.21c-.41.05-.82.09-1.24.09a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42c.68.85 1.2 1.83 1.54 2.89c-.5-.17-1.02-.28-1.57-.28c-2.6 0-4.8 2.06-4.8 4.5M13 7h-2v7h2zm10 10.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiTimerLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerLockOpenIcon],svg[mdi-timer-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-.8 10.5v1.24c-.7.6-1.2 1.5-1.2 2.46v3.5c0 .42.09.83.24 1.21c-.41.05-.82.09-1.24.09a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42c.43.54.79 1.11 1.09 1.75C19.76 9.06 19.39 9 19 9c-2.6 0-4.8 2.06-4.8 4.5M13 7h-2v7h2zm8.8 9h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiTimerLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerLockOpenOutlineIcon],svg[mdi-timer-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm2 11.92c-.33.05-.66.08-1 .08c-3.87 0-7-3.13-7-7s3.13-7 7-7c2.44 0 4.59 1.26 5.85 3.15c.37-.09.75-.15 1.15-.15c.39 0 .76.06 1.12.14c-.3-.64-.66-1.21-1.09-1.75l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.42 0 .83-.04 1.24-.09c-.15-.38-.24-.79-.24-1.21zM15 1H9v2h6zm6.8 15h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiTimerLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerLockOutlineIcon],svg[mdi-timer-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm2 11.92c-.33.05-.66.08-1 .08c-3.87 0-7-3.13-7-7s3.13-7 7-7c2.82 0 5.24 1.67 6.35 4.06c.21-.02.43-.06.65-.06c.55 0 1.07.11 1.57.28a9 9 0 0 0-1.54-2.89l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.42 0 .83-.04 1.24-.09c-.15-.38-.24-.79-.24-1.21zM15 1H9v2h6zm8 16.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiTimerLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerMarkerIcon],svg[mdi-timer-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-2 12.5c0 2 1.28 4.23 2.42 5.83c-1.05.43-2.21.67-3.42.67a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42c.71.89 1.26 1.93 1.59 3.05A5.4 5.4 0 0 0 18.5 10c-3 0-5.5 2.5-5.5 5.5m0-1.5V7h-2v7zm9 1.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiTimerMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerMarkerOutlineIcon],svg[mdi-timer-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7c2.79 0 5.2 1.64 6.32 4h.18c.75 0 1.47.16 2.12.44a9 9 0 0 0-1.59-3.05l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c1.21 0 2.37-.24 3.42-.67c-.37-.52-.75-1.11-1.1-1.73c-.73.25-1.51.4-2.32.4m10-4.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiTimerMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerMinusIcon],svg[mdi-timer-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17C13.26 21 13 20.03 13 19c0-3.31 2.69-6 6-6m-6 1h-2V7h2zm2-11H9V1h6zm8 15v2h-8v-2z"></svg:path>`,
})
export class MdiTimerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerMinusOutlineIcon],svg[mdi-timer-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17c-.31-.58-.53-1.23-.63-1.92c-.36.05-.71.09-1.08.09m3-2v2h8v-2z"></svg:path>`,
})
export class MdiTimerMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerMusicIcon],svg[mdi-timer-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 16.11V11h4.27a9.05 9.05 0 0 0-1.74-3.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.42 0 .83-.04 1.24-.09c-.15-.45-.24-.91-.24-1.41c0-2.14 1.5-3.93 3.5-4.39M13 14h-2V7h2zm2-11H9V1h6zm7 10v2h-2v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 3.5-2.29V13z"></svg:path>`,
})
export class MdiTimerMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerMusicOutlineIcon],svg[mdi-timer-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-4 11h2V8h-2zm2.05 5.91Q12.54 20 12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7c3.17 0 5.85 2.11 6.71 5h2.06a9.05 9.05 0 0 0-1.74-3.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.42 0 .83-.04 1.24-.09c-.15-.45-.24-.91-.24-1.41c0-.2.03-.39.05-.59M18.5 13v5.21a2.5 2.5 0 1 0-1 4.79a2.5 2.5 0 0 0 2.5-2.5V15h2v-2z"></svg:path>`,
})
export class MdiTimerMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerOffIcon],svg[mdi-timer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4L1.75 5.27L4.5 8.03A8.9 8.9 0 0 0 3 13a9 9 0 0 0 9 9c1.84 0 3.55-.55 5-1.5l2.5 2.5l1.25-1.27L13.04 14zm12-3H9v2h6m6 10c0 1.83-.55 3.53-1.5 4.94L13 11.45V7h-2v2.45L7.05 5.5C8.47 4.55 10.17 4 12 4c2.12 0 4.07.74 5.62 1.97l1.42-1.42l1.41 1.42l-1.42 1.42A8.96 8.96 0 0 1 21 13"></svg:path>`,
})
export class MdiTimerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerOffOutlineIcon],svg[mdi-timer-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a7 7 0 0 1-7-7c0-1.28.35-2.5.95-3.5l9.55 9.54c-1 .61-2.22.96-3.5.96M3 4L1.75 5.27L4.5 8.03A8.9 8.9 0 0 0 3 13a9 9 0 0 0 9 9c1.84 0 3.55-.55 5-1.5l2.5 2.5l1.25-1.27L13.04 14zm8 5.44l2 2V8h-2m4-7H9v2h6m4.04 1.55l-1.42 1.42A9 9 0 0 0 12 4c-1.83 0-3.53.55-4.95 1.5L8.5 6.94C9.53 6.35 10.73 6 12 6a7 7 0 0 1 7 7c0 1.27-.35 2.47-.94 3.5l1.44 1.44c.95-1.41 1.5-3.11 1.5-4.94c0-2.12-.74-4.07-1.97-5.61l1.42-1.42z"></svg:path>`,
})
export class MdiTimerOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerOutlineIcon],svg[mdi-timer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m7.03-12.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0-9 9a9 9 0 0 0 9 9c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M11 14h2V8h-2m4-7H9v2h6z"></svg:path>`,
})
export class MdiTimerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerPauseIcon],svg[mdi-timer-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 16.5h1.88v5H16.5zm3.13 0v5h1.87v-5zM15 1H9v2h6zm6 12.35c-.64-.22-1.3-.35-2-.35c-3.31 0-6 2.69-6 6c0 1.03.26 2 .71 2.83c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13zM13 7h-2v7h2z"></svg:path>`,
})
export class MdiTimerPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerPauseOutlineIcon],svg[mdi-timer-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.35c-.64-.22-1.3-.35-2-.35c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7c.37 0 .72-.04 1.08-.09c.1.69.32 1.34.63 1.92c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13zM11 14h2V8h-2zm4-13H9v2h6zm4.63 15.5v5h1.87v-5zm-3.13 5h1.88v-5H16.5z"></svg:path>`,
})
export class MdiTimerPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerPlayIcon],svg[mdi-timer-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-2 16c0 1.03.26 2 .71 2.83c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13v.35c-.64-.22-1.3-.35-2-.35c-3.31 0-6 2.69-6 6m0-12h-2v7h2zm4 9v6l5-3z"></svg:path>`,
})
export class MdiTimerPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerPlayOutlineIcon],svg[mdi-timer-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-4 11h2V8h-2zm8-1c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17c-.31-.58-.53-1.23-.63-1.92c-.36.05-.71.09-1.08.09c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7m-2 3v6l5-3z"></svg:path>`,
})
export class MdiTimerPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerPlusIcon],svg[mdi-timer-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-2 16c0 1.03.26 2 .71 2.83c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13v.35c-.64-.22-1.3-.35-2-.35c-3.31 0-6 2.69-6 6m0-12h-2v7h2zm7 11v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiTimerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerPlusOutlineIcon],svg[mdi-timer-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17c-.31-.58-.53-1.23-.63-1.92c-.36.05-.71.09-1.08.09m8-2v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiTimerPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerRefreshIcon],svg[mdi-timer-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-3 15.5c0 1.27.37 2.44 1 3.44c-.33.06-.66.06-1 .06a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A9.16 9.16 0 0 1 21 12.5a6.5 6.5 0 0 0-9 6M13 7h-2v7h2zm9 11.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiTimerRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerRefreshOutlineIcon],svg[mdi-timer-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7c3.54 0 6.45 2.62 6.93 6.03c.72.05 1.41.2 2.07.47a9.16 9.16 0 0 0-1.97-5.11l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.34 0 .67 0 1-.06c-.37-.59-.65-1.25-.82-1.94zm10-1.5v-4l-1.17 1.17A4 4 0 0 0 18 14.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5z"></svg:path>`,
})
export class MdiTimerRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerRemoveIcon],svg[mdi-timer-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-2 16c0 1.03.26 2 .71 2.83c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13v.35c-.64-.22-1.3-.35-2-.35c-3.31 0-6 2.69-6 6m0-12h-2v7h2zm9.54 9.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiTimerRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerRemoveOutlineIcon],svg[mdi-timer-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.08 19.91c.1.69.32 1.34.63 1.92c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13v.35c-.64-.22-1.3-.35-2-.35c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7c.37 0 .72-.04 1.08-.09M11 14h2V8h-2zm4-13H9v2h6zm7.54 15.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiTimerRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandIcon],svg[mdi-timer-sand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v6l-4 4l4 4v6H6v-6l4-4l-4-4zm10 14.5l-4-4l-4 4V20h8zm-4-5l4-4V4H8v3.5zM10 6h4v.75l-2 2l-2-2z"></svg:path>`,
})
export class MdiTimerSandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandCompleteIcon],svg[mdi-timer-sand-complete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6v-6l4-4l-4-4V2h12v6l-4 4l4 4M8 7.5l4 4l4-4V4H8m4 8.5l-4 4V20h8v-3.5M14 18h-4v-.8l2-2l2 2Z"></svg:path>`,
})
export class MdiTimerSandCompleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandEmptyIcon],svg[mdi-timer-sand-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v6l4 4l-4 4v6h12v-6l-4-4l4-4V2zm10 14.5V20H8v-3.5l4-4zm-4-5l-4-4V4h8v3.5z"></svg:path>`,
})
export class MdiTimerSandEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandFullIcon],svg[mdi-timer-sand-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v6l4 4l-4 4v6h12v-6l-4-4l4-4V2z"></svg:path>`,
})
export class MdiTimerSandFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandPausedIcon],svg[mdi-timer-sand-paused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6v12h-6l-4-4l-4 4H2V6h6l4 4l4-4M7.5 16l4-4l-4-4H4v8m8.5-4l4 4H20V8h-3.5m1.5 4v2h-.8l-2-2m-6.4 0l-2 2H6v-2Z"></svg:path>`,
})
export class MdiTimerSandPausedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSettingsIcon],svg[mdi-timer-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6.4L20.5 5c-.5-.5-1-1-1.5-1.4L17.6 5C16 3.7 14.1 3 12 3c-5 0-9 4-9 9s4 9 9 9s9-4 9-9c0-2.1-.7-4.1-2-5.6M13 13h-2V6h2zm2-13H9v2h6zm-2 24h-2v-2h2zm4 0h-2v-2h2zm-8 0H7v-2h2z"></svg:path>`,
})
export class MdiTimerSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSettingsOutlineIcon],svg[mdi-timer-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7m7-12.6L20.5 5c-.5-.5-1-1-1.5-1.4L17.6 5C16 3.7 14.1 3 12 3c-5 0-9 4-9 9s4 9 9 9s9-4 9-9c0-2.1-.7-4.1-2-5.6M11 13h2V7h-2m4-7H9v2h6zm-2 22h-2v2h2zm4 0h-2v2h2zm-8 0H7v2h2z"></svg:path>`,
})
export class MdiTimerSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerStarIcon],svg[mdi-timer-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-2 16c0 1.03.26 2 .71 2.83c-.55.11-1.12.17-1.71.17a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42A8.96 8.96 0 0 1 21 13v.35c-.64-.22-1.3-.35-2-.35c-3.31 0-6 2.69-6 6m0-12h-2v7h2zm10 10.89l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiTimerStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerStarOutlineIcon],svg[mdi-timer-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17c-.31-.58-.53-1.23-.63-1.92c-.36.05-.71.09-1.08.09m11-2.11l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></svg:path>`,
})
export class MdiTimerStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerStopIcon],svg[mdi-timer-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17C13.26 21 13 20.03 13 19c0-3.31 2.69-6 6-6m-6 1h-2V7h2zm2-11H9V1h6zm6.5 13.5v5h-5v-5z"></svg:path>`,
})
export class MdiTimerStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerStopOutlineIcon],svg[mdi-timer-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm1 12c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17c-.31-.58-.53-1.23-.63-1.92c-.36.05-.71.09-1.08.09m3-19H9v2h6zm1.5 15.5v5h5v-5z"></svg:path>`,
})
export class MdiTimerStopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSyncIcon],svg[mdi-timer-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm-2 14.5c0 1.58.56 3 1.5 4.15c-.8.22-1.63.35-2.5.35a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42a9 9 0 0 1 1.77 3.74A6.5 6.5 0 0 0 13 17.5M13 7h-2v7h2zm6 6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5z"></svg:path>`,
})
export class MdiTimerSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSyncOutlineIcon],svg[mdi-timer-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h2v6h-2zm1 12c-3.87 0-7-3.13-7-7s3.13-7 7-7c3.19 0 5.88 2.14 6.72 5.05c.28-.05.52-.05.78-.05c.44 0 .88.05 1.3.13c-.3-1.39-.91-2.67-1.77-3.74l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.87 0 1.7-.13 2.5-.35c-.45-.54-.8-1.15-1.05-1.8c-.45.1-.95.15-1.45.15m3-19H9v2h6zm4 12.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5z"></svg:path>`,
})
export class MdiTimerSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTimetableIcon],svg[mdi-timetable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12h1.5v2.82l2.44 1.41l-.75 1.3L14 15.69zM4 2h14a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-1.91 0-3.64-.76-4.9-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 13v3h4.67c-.43-.91-.67-1.93-.67-3zm0-7h6V5H4zm14 0V5h-6v3zM4 13h4.29c.34-1.15.97-2.18 1.81-3H4zm11-2.85A4.85 4.85 0 0 0 10.15 15c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0 0 19.85 15c0-2.68-2.17-4.85-4.85-4.85"></svg:path>`,
})
export class MdiTimetableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTireIcon],svg[mdi-tire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.66 9.64l-.36-.94l1.86-.7c-.92-2.12-2.56-3.82-4.62-4.86l-.8 1.78l-.92-.42l.8-1.8C14.5 2.26 13.28 2 12 2c-1.06 0-2.08.22-3.04.5l.68 1.84l-.94.36L8 2.84c-2.12.92-3.82 2.56-4.86 4.62l1.78.8l-.42.92l-1.8-.8C2.26 9.5 2 10.72 2 12c0 1.06.22 2.08.5 3.04l1.84-.68l.36.94l-1.86.7c.92 2.12 2.56 3.82 4.62 4.86l.8-1.78l.92.42l-.8 1.8c1.12.44 2.34.7 3.62.7c1.06 0 2.08-.22 3.04-.5l-.68-1.84l.94-.36l.7 1.86c2.12-.92 3.82-2.56 4.86-4.62l-1.78-.8l.42-.92l1.8.8c.44-1.12.7-2.34.7-3.62c0-1.06-.22-2.08-.5-3.04zm-5.36 7.9c-3.06 1.26-6.58-.18-7.84-3.24s.18-6.58 3.24-7.84s6.58.18 7.84 3.24a5.986 5.986 0 0 1-3.24 7.84"></svg:path>`,
})
export class MdiTireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToasterIcon],svg[mdi-toaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2H2v2h1v7h18v-7h1v-2m-5 4a2 2 0 1 1 2-2a2 2 0 0 1-2 2m1-7H6c.33-2.25 2.88-4 6-4s5.63 1.75 6 4"></svg:path>`,
})
export class MdiToasterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToasterOffIcon],svg[mdi-toaster-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 22.7L18.1 20H3v-7H2v-2h1c0-1.1.9-2 2-2h2.1l-6-6l1.3-1.3l19.7 19.7zm-5.5-10.6c.3-.6 1-1.1 1.7-1.1c1.1 0 2 .9 2 2c0 .8-.4 1.4-1.1 1.7l3.1 3.1V13h1v-2h-1c0-1.1-.9-2-2-2h-6.8zM18 8c-.4-2.2-2.9-4-6-4c-1.4 0-2.8.4-3.8 1l3 3z"></svg:path>`,
})
export class MdiToasterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToasterOvenIcon],svg[mdi-toaster-oven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 2h12v10H4zm15 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M6 9v2h8V9zm13 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiToasterOvenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchIcon],svg[mdi-toggle-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MdiToggleSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchOffIcon],svg[mdi-toggle-switch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5a5 5 0 0 0-5-5M7 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MdiToggleSwitchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchOffOutlineIcon],svg[mdi-toggle-switch-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6m0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4M7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class MdiToggleSwitchOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchOutlineIcon],svg[mdi-toggle-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6m0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4m0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class MdiToggleSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchVariantIcon],svg[mdi-toggle-switch-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.4 1.6C18 1.2 17.5 1 17 1H7c-.5 0-1 .2-1.4.6S5 2.5 5 3v18c0 .5.2 1 .6 1.4s.9.6 1.4.6h10c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V3c0-.5-.2-1-.6-1.4M16 7c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1z"></svg:path>`,
})
export class MdiToggleSwitchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToggleSwitchVariantOffIcon],svg[mdi-toggle-switch-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.6 1.6C6 1.2 6.5 1 7 1h10c.5 0 1 .2 1.4.6s.6.9.6 1.4v18c0 .5-.2 1-.6 1.4s-.9.6-1.4.6H7c-.5 0-1-.2-1.4-.6S5 21.5 5 21V3c0-.5.2-1 .6-1.4M8 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm0 14c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1z"></svg:path>`,
})
export class MdiToggleSwitchVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToiletIcon],svg[mdi-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22h8v-2.5c2.41-1.63 4-4.38 4-7.5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H3c0 3.09 2 6 6 7.5zm-3.71-8h13.42A7.02 7.02 0 0 1 15 18.33V20h-4v-1.67C9 18 5.86 15.91 5.29 14M15 4h4v8h-4zm1 1v3h2V5z"></svg:path>`,
})
export class MdiToiletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToolboxIcon],svg[mdi-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h-2v-1H8v1H6v-1H2v5h20v-5h-4zm2-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-2h2v2h8v-2h2v2h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></svg:path>`,
})
export class MdiToolboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToolboxOutlineIcon],svg[mdi-toolbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2M9 6h6v2H9zm11 12H4v-3h2v1h2v-1h8v1h2v-1h2zm-2-5v-1h-2v1H8v-1H6v1H4v-3h16v3z"></svg:path>`,
})
export class MdiToolboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToolsIcon],svg[mdi-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.8 3.8 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.8 3.8 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"></svg:path>`,
})
export class MdiToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipIcon],svg[mdi-tooltip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiTooltipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipAccountIcon],svg[mdi-tooltip-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 2.3c1.5 0 2.7 1.2 2.7 2.7S13.5 9.7 12 9.7S9.3 8.5 9.3 7s1.2-2.7 2.7-2.7M18 15H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1z"></svg:path>`,
})
export class MdiTooltipAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipCellphoneIcon],svg[mdi-tooltip-cellphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6v8H9zm13-2v12c0 1.11-.89 2-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2m-6 1.09C16 4.5 15.5 4 14.86 4H9.14C8.5 4 8 4.5 8 5.09v9.82C8 15.5 8.5 16 9.14 16h5.72c.64 0 1.14-.5 1.14-1.09z"></svg:path>`,
})
export class MdiTooltipCellphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipCheckIcon],svg[mdi-tooltip-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.54 12l-3.5-3.5l1.41-1.42l2.09 2.09L15.64 6l1.41 1.41z"></svg:path>`,
})
export class MdiTooltipCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipCheckOutlineIcon],svg[mdi-tooltip-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14h-4.83L12 19.17L8.83 16H4V4h16zm-9.25-2.29l-3.5-3.5l1.41-1.42l2.09 2.09l4.59-4.58l1.41 1.41z"></svg:path>`,
})
export class MdiTooltipCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipEditIcon],svg[mdi-tooltip-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M9.08 15H7v-2.09l6.17-6.19l2.07 2.08zm7.76-7.8l-1.01 1.01l-2.07-2.03l1.01-1.02c.2-.21.54-.22.78 0l1.29 1.25c.21.21.22.55 0 .79"></svg:path>`,
})
export class MdiTooltipEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipEditOutlineIcon],svg[mdi-tooltip-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4zm11.84 4.2l-1.01 1.01l-2.07-2.03l1.01-1.02c.2-.21.54-.22.78 0l1.29 1.25c.21.21.22.55 0 .79M8 11.91l4.17-4.19l2.07 2.08l-4.16 4.2H8z"></svg:path>`,
})
export class MdiTooltipEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipImageIcon],svg[mdi-tooltip-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m15 13V7l-4 4l-2-2l-6 6zM7 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiTooltipImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipImageOutlineIcon],svg[mdi-tooltip-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4zm3.5 2A1.5 1.5 0 0 1 9 7.5A1.5 1.5 0 0 1 7.5 9A1.5 1.5 0 0 1 6 7.5A1.5 1.5 0 0 1 7.5 6M6 14l5-5l2 2l5-5v8z"></svg:path>`,
})
export class MdiTooltipImageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipMinusIcon],svg[mdi-tooltip-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-4 9H8V9h8z"></svg:path>`,
})
export class MdiTooltipMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipMinusOutlineIcon],svg[mdi-tooltip-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14h-4.83L12 19.17L8.83 16H4V4h16zm-4-5H8V9h8z"></svg:path>`,
})
export class MdiTooltipMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipOutlineIcon],svg[mdi-tooltip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4z"></svg:path>`,
})
export class MdiTooltipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipPlusIcon],svg[mdi-tooltip-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 4v3H8v2h3v3h2v-3h3V9h-3V6z"></svg:path>`,
})
export class MdiTooltipPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipPlusOutlineIcon],svg[mdi-tooltip-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4zm7 2h2v3h3v2h-3v3h-2v-3H8V9h3z"></svg:path>`,
})
export class MdiTooltipPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipQuestionIcon],svg[mdi-tooltip-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-.53 0-1.04.21-1.41.59C2.21 2.96 2 3.47 2 4v12c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h4l4 4l4-4h4c.53 0 1.04-.21 1.41-.59S22 16.53 22 16V4c0-.53-.21-1.04-.59-1.41C21.04 2.21 20.53 2 20 2m-9.95 4.04c.54-.36 1.25-.54 2.14-.54c.94 0 1.69.21 2.23.62q.81.63.81 1.68c0 .44-.15.83-.44 1.2c-.29.36-.67.64-1.13.85c-.26.15-.43.3-.52.47c-.09.18-.14.4-.14.68h-2c0-.5.1-.84.29-1.08c.21-.24.55-.52 1.07-.84c.26-.14.47-.32.64-.54c.14-.21.22-.46.22-.74c0-.3-.09-.52-.27-.69c-.18-.18-.45-.26-.76-.26c-.27 0-.49.07-.69.21c-.16.14-.26.35-.26.63H9.27c-.05-.69.23-1.29.78-1.65M11 14v-2h2v2Z"></svg:path>`,
})
export class MdiTooltipQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipQuestionOutlineIcon],svg[mdi-tooltip-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-.53 0-1.04.21-1.41.59C2.21 2.96 2 3.47 2 4v12c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h4l4 4l4-4h4c.53 0 1.04-.21 1.41-.59S22 16.53 22 16V4c0-.53-.21-1.04-.59-1.41C21.04 2.21 20.53 2 20 2M4 16V4h16v12h-4.83L12 19.17L8.83 16m1.22-9.96c.54-.36 1.25-.54 2.14-.54c.94 0 1.69.21 2.23.62q.81.63.81 1.68c0 .44-.15.83-.44 1.2c-.29.36-.67.64-1.13.85c-.26.15-.43.3-.52.47c-.09.18-.14.4-.14.68h-2c0-.5.1-.84.29-1.08c.21-.24.55-.52 1.07-.84c.26-.14.47-.32.64-.54c.14-.21.22-.46.22-.74c0-.3-.09-.52-.27-.69c-.18-.18-.45-.26-.76-.26c-.27 0-.49.07-.69.21c-.16.14-.26.35-.26.63H9.27c-.05-.69.23-1.29.78-1.65M11 14v-2h2v2Z"></svg:path>`,
})
export class MdiTooltipQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipRemoveIcon],svg[mdi-tooltip-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-4.46 10.12l-1.42 1.42L12 11.41l-2.12 2.13l-1.41-1.42L10.59 10L8.46 7.88l1.42-1.41L12 8.59l2.12-2.12l1.42 1.41L13.41 10z"></svg:path>`,
})
export class MdiTooltipRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipRemoveOutlineIcon],svg[mdi-tooltip-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4l4 4l4-4h4c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 14h-4.83L12 19.17L8.83 16H4V4h16zM8.46 12.12L10.59 10L8.46 7.88l1.42-1.41L12 8.59l2.12-2.12l1.42 1.41L13.41 10l2.13 2.12l-1.42 1.42L12 11.41l-2.12 2.13z"></svg:path>`,
})
export class MdiTooltipRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipTextIcon],svg[mdi-tooltip-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 3v2h14V5zm0 4v2h10V9zm0 4v2h12v-2z"></svg:path>`,
})
export class MdiTooltipTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTooltipTextOutlineIcon],svg[mdi-tooltip-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4l-4 4l-4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v12h4.83L12 19.17L15.17 16H20V4zm2 3h12v2H6zm0 4h10v2H6z"></svg:path>`,
})
export class MdiTooltipTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToothIcon],svg[mdi-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2C4 2 2 5 2 8c0 2.11 1 5 2 6s2 8 4 8c4.54 0 2-7 4-7s-.54 7 4 7c2 0 3-7 4-8s2-3.89 2-6c0-3-2-6-5-6s-3 1-5 1s-2-1-5-1"></svg:path>`,
})
export class MdiToothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToothOutlineIcon],svg[mdi-tooth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2C4 2 2 5 2 8c0 2.11 1 5 2 6s2 8 4 8c4.54 0 2-7 4-7s-.54 7 4 7c2 0 3-7 4-8s2-3.89 2-6c0-3-2-6-5-6s-3 1-5 1s-2-1-5-1m0 2c2 0 3 1 5 1s3-1 5-1c1.67 0 3 2 3 4c0 1.75-.86 4.11-1.81 5.06c-.86.86-2.13 6.88-2.69 6.88c-.21 0-.5-1.06-.5-2.35c0-2.04-.57-4.59-3-4.59s-3 2.55-3 4.59c0 1.29-.29 2.35-.5 2.35c-.56 0-1.83-6.02-2.69-6.88C4.86 12.11 4 9.75 4 8c0-2 1.33-4 3-4"></svg:path>`,
})
export class MdiToothOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToothbrushIcon],svg[mdi-toothbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.91 6.43l2.12 2.12l1.06-1.05l-1.06-1.07l2.83-2.83l1.06 1.06L20 3.6l-2.14-2.1M3 20.57L4.43 22L14.5 11.9l2.13-.71l4.77-4.76c.78-.78.78-2.05 0-2.83l-5.85 5.84l-2.12.71Z"></svg:path>`,
})
export class MdiToothbrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToothbrushElectricIcon],svg[mdi-toothbrush-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5V14c-1.66 0-3 1.34-3 3v5h8v-5c0-1.66-1.34-3-3-3V3.5a2 2 0 0 0-2-2M7.5 2v7H11V7.5H9v-4h2V2zM13 17.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class MdiToothbrushElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToothbrushPasteIcon],svg[mdi-toothbrush-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.86 1.5l-4.95 4.93l2.12 2.12l1.06-1.05l-1.06-1.07l2.83-2.83l1.06 1.06L20 3.6m1.4 0l-5.84 5.84l-2.13.71L3 20.57L4.43 22l5.65-5.67l4.25 4.24l4.24-4.24l-4.24-4.24l.17-.19l2.13-.71l4.77-4.76c.78-.78.78-2.05 0-2.83m-14.85.71L2.31 8.55l4.95 4.95l4.24-4.24m6.72 8.84l-2.13 2.12l1.41 1.41l2.13-2.13Z"></svg:path>`,
})
export class MdiToothbrushPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTorIcon],svg[mdi-tor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 14c-1 0-3 1-3 2c0 2 3 2 3 2v-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1v-1m0 5s-4-.5-4-2.5c0-3 3-3.75 4-3.75V11.5c-1 0-5 1.5-5 4.5c0 4 5 4 5 4v-1M10.07 7.03l1.19.53c.43-2.44 1.58-4.06 1.58-4.06c-.43 1.03-.71 1.88-.89 2.55C13.16 3.55 15.61 2 15.61 2a15.916 15.916 0 0 0-2.64 3.53c1.58-1.68 3.77-2.78 3.77-2.78c-2.69 1.72-3.9 4.45-4.2 5.21l.55.08c0 .52 0 1 .25 1.38C14.1 11.31 18 11.47 18 16s-4.03 6-6.17 6C9.69 22 5 21.03 5 16s4.95-5.07 5.83-7.08c.12-.38-.76-1.89-.76-1.89z" fill="currentColor"></svg:path>`,
})
export class MdiTorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTorchIcon],svg[mdi-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.6 9.6c.4.6.9 1.1 1.6 1.4h4c.3-.1.5-.3.7-.5c1-1 1.4-2.5.9-3.8l-.1-.2c-.1-.3-.3-.5-.5-.7c-.1-.2-.3-.3-.4-.5c-.4-.3-.8-.6-1.2-1c-.9-.9-1-2.3-.5-3.3c-.5.1-1 .4-1.4.8C10.2 3 9.6 5.1 10.3 7v.2c0 .1-.1.2-.2.3s-.3 0-.4-.1l-.1-.1c-.6-.8-.7-2-.3-3c-.9.8-1.4 2.1-1.3 3.4c0 .3.1.6.2.9c0 .3.2.7.4 1m3.7-1.5c.1-.5-.1-.9-.2-1.3s-.1-.8.1-1.2l.3.6c.4.6 1.1.8 1.3 1.6v.3c0 .5-.2 1-.5 1.3c-.2.1-.4.3-.6.3c-.6.2-1.3-.1-1.7-.5c.8 0 1.2-.6 1.3-1.1M15 12v2h-1l-1 8h-2l-1-8H9v-2z"></svg:path>`,
})
export class MdiTorchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTortoiseIcon],svg[mdi-tortoise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 5.6c-1.22-.04-2.43.9-2.81 2.4c-.5 2-.5 2-1.5 3c-2 2-5 3-11 4c-1 .16-1.5.5-2 1c2 0 4 0 2.5 1.5L3 19h3l2-2c2 1 3.33 1 5.33 0l.67 2h3l-1-3s1-4 2-5s1 0 2 0s2-1 2-2.5C22 8 22 7 20.5 6c-.35-.24-.76-.38-1.19-.4M9 6a6 6 0 0 0-6 6c0 .6.13 1.08.23 1.6c5.92-.98 9.06-2.01 10.7-3.66l.5-.5A6.01 6.01 0 0 0 9 6"></svg:path>`,
})
export class MdiTortoiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToslinkIcon],svg[mdi-toslink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V7l-3-3H7L4 7v3c-1.1 0-2 .9-2 2s.9 2 2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.11 0 2-.89 2-2s-.89-2-2-2m-8 6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4m2-4c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class MdiToslinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTouchTextOutlineIcon],svg[mdi-touch-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h10v2H7zm5.69 8.81h.51V15H7v2h3.38l.33-.35c.47-.52 1.21-.84 1.98-.84M9 19H5V5h14v8.56l2 .89V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.33zm-2-6h6.2v-1.27c0-.23.05-.49.11-.73H7zm8.2 6.07l-2.35-1.26h-.16c-.19 0-.4.08-.54.23l-.54.57l3.59 3.08c.19.2.46.31.73.31h4.77c.6 0 1.08-.5 1.1-1.1v-3.2c0-.42-.23-.81-.62-.99l-3.63-1.6l-.88-.11v-3.27a.736.736 0 0 0-1.47 0z"></svg:path>`,
})
export class MdiTouchTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTournamentIcon],svg[mdi-tournament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v2h5v4H2v2h5c1.11 0 2-.89 2-2V7h5v10H9v-1c0-1.11-.89-2-2-2H2v2h5v4H2v2h5c1.11 0 2-.89 2-2v-1h5c1.11 0 2-.89 2-2v-4h6v-2h-6V7c0-1.11-.89-2-2-2H9V4c0-1.11-.89-2-2-2z"></svg:path>`,
})
export class MdiTournamentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTowTruckIcon],svg[mdi-tow-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10h5.39l-3.33-4H15zm2.5 8.5c.39 0 .74-.13 1.04-.43S19 17.42 19 17c0-.39-.16-.74-.46-1.04s-.65-.46-1.04-.46c-.42 0-.77.16-1.07.46S16 16.61 16 17c0 .42.13.77.43 1.07s.65.43 1.07.43M6 18.5c.44 0 .8-.13 1.08-.43s.42-.65.42-1.07c0-.39-.14-.74-.42-1.04S6.44 15.5 6 15.5s-.8.16-1.08.46s-.42.65-.42 1.04c0 .42.14.77.42 1.07s.64.43 1.08.43M18 4l5 6v7h-2.5c0 .83-.31 1.53-.91 2.13c-.59.59-1.29.87-2.09.87c-.83 0-1.53-.28-2.12-.87c-.6-.6-.88-1.3-.88-2.13H9c0 .83-.3 1.53-.89 2.13c-.61.59-1.3.87-2.11.87s-1.5-.28-2.11-.87C3.3 18.53 3 17.83 3 17H1v-4h8.19L3 8.11V11H1V5h1l11 6.06V4z"></svg:path>`,
})
export class MdiTowTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTowerBeachIcon],svg[mdi-tower-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v4h1v2h-.36L21 23h-2.07l-.56-2.17L12 17.15l-6.37 3.68L5.07 23H3l3.36-13H6V8h1V4H6V3l12-2v3zM7.28 14.43l-.95 3.69L10 16zM15.57 10H8.43l-.63 2.42l4.2 2.43l4.2-2.43zm2.1 8.12l-.95-3.69L14 16z"></svg:path>`,
})
export class MdiTowerBeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTowerFireIcon],svg[mdi-tower-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v4h1v2h-.36L21 23h-2.07l-.56-2.17L12 17.15l-6.37 3.68L5.07 23H3l3.36-13H6V8h1V4H6V3l6-2l6 2v1zM7.28 14.43l-.95 3.69L10 16zM15.57 10H8.43l-.63 2.42l4.2 2.43l4.2-2.43zm2.1 8.12l-.95-3.69L14 16z"></svg:path>`,
})
export class MdiTowerFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiTownHallIcon],svg[mdi-town-hall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h-4V8l-4.5-1.8V4H15V2h-3.5v4.2L7 8v2H3c-.55 0-1 .45-1 1v11h8v-5h4v5h8V11c0-.55-.45-1-1-1M8 20H4v-3h4zm0-5H4v-3h4zm4-7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m2 7h-4v-3h4zm6 5h-4v-3h4zm0-5h-4v-3h4z"></svg:path>`,
})
export class MdiTownHallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickIcon],svg[mdi-toy-brick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h18V6Z"></svg:path>`,
})
export class MdiToyBrickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickMarkerIcon],svg[mdi-toy-brick-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h11.54A9.55 9.55 0 0 1 13 15.5a5.58 5.58 0 0 1 5.5-5.5a5.3 5.3 0 0 1 2.5.63V6m-2.5 6a3.54 3.54 0 0 0-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5a3.54 3.54 0 0 0-3.5-3.5m0 4.8a1.2 1.2 0 1 1 0-2.4a1.29 1.29 0 0 1 1.2 1.2a1.15 1.15 0 0 1-1.2 1.2"></svg:path>`,
})
export class MdiToyBrickMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickMarkerOutlineIcon],svg[mdi-toy-brick-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12a3.54 3.54 0 0 0-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5a3.54 3.54 0 0 0-3.5-3.5m0 4.8a1.2 1.2 0 1 1 0-2.4a1.29 1.29 0 0 1 1.2 1.2a1.15 1.15 0 0 1-1.2 1.2M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h11.54a15.6 15.6 0 0 1-1-2H5V8h14v2a5.1 5.1 0 0 1 2 .6V6Z"></svg:path>`,
})
export class MdiToyBrickMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickMinusIcon],svg[mdi-toy-brick-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20h-8v-2h8zm-10-1c0-3.31 2.69-6 6-6c.7 0 1.37.13 2 .35V6h-2V5a2 2 0 0 0-2-2h-2c-1.1 0-2 .9-2 2v1h-2V5a2 2 0 0 0-2-2H7c-1.1 0-2 .9-2 2v1H3v14h10.09c-.05-.33-.09-.66-.09-1"></svg:path>`,
})
export class MdiToyBrickMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
