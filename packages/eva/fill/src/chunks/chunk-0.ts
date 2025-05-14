import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaActivityFillIcon],svg[eva-activity-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20"></svg:path>`,
})
export class EvaActivityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaAlertCircleFillIcon],svg[eva-alert-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 15a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class EvaAlertCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaAlertTriangleFillIcon],svg[eva-alert-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66a3 3 0 0 0-.05-3.04M12 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class EvaAlertTriangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArchiveFillIcon],svg[eva-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 18 3m-3 10.13a.87.87 0 0 1-.87.87H9.87a.87.87 0 0 1-.87-.87v-.26a.87.87 0 0 1 .87-.87h4.26a.87.87 0 0 1 .87.87ZM18 7H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaArchiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowBackFillIcon],svg[eva-arrow-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1 1 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaArrowBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowCircleDownFillIcon],svg[eva-arrow-circle-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m3.69 11.86l-3 2.86a.5.5 0 0 1-.15.1a.5.5 0 0 1-.16.1a.94.94 0 0 1-.76 0a1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45"></svg:path>`,
})
export class EvaArrowCircleDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowCircleLeftFillIcon],svg[eva-arrow-circle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a10 10 0 1 0-10 10a10 10 0 0 0 10-10m-11.86 3.69l-2.86-3a.5.5 0 0 1-.1-.15a.5.5 0 0 1-.1-.16a.94.94 0 0 1 0-.76a1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38"></svg:path>`,
})
export class EvaArrowCircleLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowCircleUpFillIcon],svg[eva-arrow-circle-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10M8.31 10.14l3-2.86a.5.5 0 0 1 .15-.1a.5.5 0 0 1 .16-.1a.94.94 0 0 1 .76 0a1 1 0 0 1 .33.21l3 3a1 1 0 0 1-1.42 1.42L13 10.41V16a1 1 0 0 1-2 0v-5.66l-1.31 1.25a1 1 0 0 1-1.38-1.45"></svg:path>`,
})
export class EvaArrowCircleUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowCircleRightFillIcon],svg[eva-arrow-circle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m11.86-3.69l2.86 3a.5.5 0 0 1 .1.15a.5.5 0 0 1 .1.16a.94.94 0 0 1 0 .76a1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38"></svg:path>`,
})
export class EvaArrowCircleRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowDownFillIcon],svg[eva-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17"></svg:path>`,
})
export class EvaArrowDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowDownwardFillIcon],svg[eva-arrow-downward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5l.15.09l.13.07a1 1 0 0 0 .72 0l.13-.07l.15-.09l6-5a1 1 0 0 0 .13-1.41"></svg:path>`,
})
export class EvaArrowDownwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowForwardFillIcon],svg[eva-arrow-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1 1 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1 1 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23a1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2"></svg:path>`,
})
export class EvaArrowForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowIosBackFillIcon],svg[eva-arrow-ios-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"></svg:path>`,
})
export class EvaArrowIosBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowIosDownwardFillIcon],svg[eva-arrow-ios-downward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"></svg:path>`,
})
export class EvaArrowIosDownwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowIosForwardFillIcon],svg[eva-arrow-ios-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"></svg:path>`,
})
export class EvaArrowIosForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowIosUpwardFillIcon],svg[eva-arrow-ios-upward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15a1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15"></svg:path>`,
})
export class EvaArrowIosUpwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowLeftFillIcon],svg[eva-arrow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26a1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59a2.2 2.2 0 0 1-.91.2"></svg:path>`,
})
export class EvaArrowLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowRightFillIcon],svg[eva-arrow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.46 18a2.2 2.2 0 0 1-.91-.2a1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46"></svg:path>`,
})
export class EvaArrowRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowUpFillIcon],svg[eva-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"></svg:path>`,
})
export class EvaArrowUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowUpwardFillIcon],svg[eva-arrow-upward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5l-.15-.09l-.13-.07a1 1 0 0 0-.72 0l-.13.07l-.15.09l-6 5a1 1 0 0 0-.13 1.41"></svg:path>`,
})
export class EvaArrowUpwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowheadDownFillIcon],svg[eva-arrowhead-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41a1 1 0 0 0-1.41-.14"></svg:path><svg:path fill="currentColor" d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41a1 1 0 0 0-1.41-.15L12 9.71L6.64 5.23a1 1 0 0 0-1.28 1.54Z"></svg:path>`,
})
export class EvaArrowheadDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowheadLeftFillIcon],svg[eva-arrowhead-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4"></svg:path><svg:path fill="currentColor" d="m14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63Z"></svg:path>`,
})
export class EvaArrowheadLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowheadRightFillIcon],svg[eva-arrowhead-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"></svg:path><svg:path fill="currentColor" d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27Z"></svg:path>`,
})
export class EvaArrowheadRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaArrowheadUpFillIcon],svg[eva-arrowhead-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36a1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41a1 1 0 0 0 1.41.14"></svg:path><svg:path fill="currentColor" d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41a1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36a1 1 0 0 0-.13-1.41Z"></svg:path>`,
})
export class EvaArrowheadUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaAtFillIcon],svg[eva-at-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a10 10 0 0 0-5 19.1a10.15 10.15 0 0 0 4 .9a10 10 0 0 0 6.08-2.06a1 1 0 0 0 .19-1.4a1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4A8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7a1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1a1 1 0 0 0-1 .87a5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2m-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09"></svg:path>`,
})
export class EvaAtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaAttach2FillIcon],svg[eva-attach-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a5.86 5.86 0 0 1-6-5.7V6.13A4.24 4.24 0 0 1 10.33 2a4.24 4.24 0 0 1 4.34 4.13v10.18a2.67 2.67 0 0 1-5.33 0V6.92a1 1 0 0 1 1-1a1 1 0 0 1 1 1v9.39a.67.67 0 0 0 1.33 0V6.13A2.25 2.25 0 0 0 10.33 4A2.25 2.25 0 0 0 8 6.13V16.3a3.86 3.86 0 0 0 4 3.7a3.86 3.86 0 0 0 4-3.7V6.13a1 1 0 1 1 2 0V16.3a5.86 5.86 0 0 1-6 5.7"></svg:path>`,
})
export class EvaAttach2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaAttachFillIcon],svg[eva-attach-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88a6 6 0 0 1-.22-8.49L12 3.2A4.1 4.1 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35a4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75a2.72 2.72 0 0 1-1.95-.82a2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95a.78.78 0 0 0 .53.23a.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31a2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67a4.22 4.22 0 0 0 3 1.29a3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21"></svg:path>`,
})
export class EvaAttachFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaAwardFillIcon],svg[eva-award-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8A6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13l5.68 3.14A.9.9 0 0 0 18 22a1 1 0 0 0 1-1.25M12 4a4 4 0 1 1-4 4a4 4 0 0 1 4-4"></svg:path>`,
})
export class EvaAwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBackspaceFillIcon],svg[eva-backspace-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.14 4h-9.77a3 3 0 0 0-2 .78l-.1.11l-6 7.48a1 1 0 0 0 .11 1.37l6 5.48a3 3 0 0 0 2 .78h9.77A1.84 1.84 0 0 0 22 18.18V5.82A1.84 1.84 0 0 0 20.14 4m-3.43 9.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L14 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L15.41 12Z"></svg:path>`,
})
export class EvaBackspaceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBarChart2FillIcon],svg[eva-bar-chart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m7-4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaBarChart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBarChartFillIcon],svg[eva-bar-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1m7 8a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1M5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaBarChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBatteryFillIcon],svg[eva-battery-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaBatteryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBehanceFillIcon],svg[eva-behance-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.76 11.19a1 1 0 0 0-1 1.09h2.06a1 1 0 0 0-1.06-1.09M9.49 12.3H8.26v1.94h1c1 0 1.44-.33 1.44-1s-.46-.94-1.21-.94m.87-1.78c0-.53-.35-.85-.95-.85H8.26v1.74h.85c.89 0 1.25-.32 1.25-.89"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2M9.7 15.2H7V8.7h2.7c1.17 0 1.94.61 1.94 1.6a1.4 1.4 0 0 1-1.12 1.43A1.52 1.52 0 0 1 12 13.37c0 1.16-1 1.83-2.3 1.83m3.55-6h3v.5h-3ZM17 13.05h-3.3v.14a1.07 1.07 0 0 0 1.09 1.19a.9.9 0 0 0 1-.63H17a2 2 0 0 1-2.17 1.55a2.15 2.15 0 0 1-2.36-2.3v-.44a2.11 2.11 0 0 1 2.28-2.25A2.12 2.12 0 0 1 17 12.58Z"></svg:path>`,
})
export class EvaBehanceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBellFillIcon],svg[eva-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88a6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79M14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4Z"></svg:path>`,
})
export class EvaBellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBellOffFillIcon],svg[eva-bell-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.88 18.71l-.59-.59L14 16.78l-.07-.07L6.58 9.4L5.31 8.14a6 6 0 0 0 0 .59v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22ZM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4ZM7.13 4.3l1.46 1.46l9.53 9.53l2 2l.31.3a1.6 1.6 0 0 0 .45-.6a1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.83-6.88a6.7 6.7 0 0 0-5.32 1.61a7 7 0 0 0-.58.54Zm13.58 14.99L19.41 18l-2-2l-9.52-9.53L6.42 5L4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7l7.31 7.3l.07.07L16 17.41l.59.59l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class EvaBellOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBluetoothFillIcon],svg[eva-bluetooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.63 12l4-3.79a1.14 1.14 0 0 0-.13-1.77l-4.67-3.23a1.17 1.17 0 0 0-1.21-.08a1.15 1.15 0 0 0-.62 1v6.2l-3.19-4a1 1 0 0 0-1.56 1.3L9.72 12l-3.5 4.43a1 1 0 0 0 .16 1.4A1 1 0 0 0 7 18a1 1 0 0 0 .78-.38L11 13.56v6.29A1.16 1.16 0 0 0 12.16 21a1.16 1.16 0 0 0 .67-.21l4.64-3.18a1.17 1.17 0 0 0 .49-.85a1.15 1.15 0 0 0-.34-.91ZM13 5.76l2.5 1.73L13 9.85Zm0 12.49v-4.07l2.47 2.38Z"></svg:path>`,
})
export class EvaBluetoothFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBookFillIcon],svg[eva-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M7 19a1 1 0 0 1 0-2h11v2Z"></svg:path>`,
})
export class EvaBookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBookOpenFillIcon],svg[eva-book-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4.34a1.24 1.24 0 0 0-1.08-.23L13 5.89v14.27l7.56-1.94A1.25 1.25 0 0 0 21.5 17V5.32a1.25 1.25 0 0 0-.5-.98M11 5.89L4.06 4.11A1.27 1.27 0 0 0 3 4.34a1.25 1.25 0 0 0-.48 1V17a1.25 1.25 0 0 0 .94 1.21L11 20.16Z"></svg:path>`,
})
export class EvaBookOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBookmarkFillIcon],svg[eva-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86a1 1 0 0 1-1 0l-5.67-3.21l-5.33 3.2A1 1 0 0 1 6 21"></svg:path>`,
})
export class EvaBookmarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBriefcaseFillIcon],svg[eva-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7Zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4ZM19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"></svg:path>`,
})
export class EvaBriefcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBrowserFillIcon],svg[eva-browser-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-6 3a1 1 0 1 1-1 1a1 1 0 0 1 1-1M8 6a1 1 0 1 1-1 1a1 1 0 0 1 1-1m11 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14Z"></svg:path>`,
})
export class EvaBrowserFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBrushFillIcon],svg[eva-brush-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.12 12.55a4 4 0 0 0-3.07 3.86v3.11a.47.47 0 0 0 .48.48l3.24-.06a3.78 3.78 0 0 0 3.44-2.2a3.65 3.65 0 0 0-4.09-5.19m12.14-8.09a2.14 2.14 0 0 0-2.88.21L10 11.08a.47.47 0 0 0 0 .66L12.25 14a.47.47 0 0 0 .66 0l6.49-6.47a2.06 2.06 0 0 0 .6-1.47a2 2 0 0 0-.74-1.6"></svg:path>`,
})
export class EvaBrushFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaBulbFillIcon],svg[eva-bulb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9m0-1a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1m9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m2.66-4.58L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28a1 1 0 0 0 .72-.31a1 1 0 0 0-.06-1.41m11.53-1.37a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41a1 1 0 0 0 .72.31a1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class EvaBulbFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCalendarFillIcon],svg[eva-calendar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M8 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class EvaCalendarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCameraFillIcon],svg[eva-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4Zm2 12a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"></svg:path>`,
})
export class EvaCameraFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCarFillIcon],svg[eva-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88a3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78M20 12.48V15h-3v-4.92ZM7 18a1 1 0 1 1-1-1a1 1 0 0 1 1 1m12 0a1 1 0 1 1-1-1a1 1 0 0 1 1 1"></svg:path>`,
})
export class EvaCarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCastFillIcon],svg[eva-cast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.4 3H5.6A2.7 2.7 0 0 0 3 5.78V7a1 1 0 0 0 2 0V5.78A.72.72 0 0 1 5.6 5h12.8a.72.72 0 0 1 .6.78v12.44a.72.72 0 0 1-.6.78H17a1 1 0 0 0 0 2h1.4a2.7 2.7 0 0 0 2.6-2.78V5.78A2.7 2.7 0 0 0 18.4 3M3.86 14A1 1 0 0 0 3 15.17a1 1 0 0 0 1.14.83a2.49 2.49 0 0 1 2.12.72a2.52 2.52 0 0 1 .51 2.84a1 1 0 0 0 .48 1.33a1.1 1.1 0 0 0 .42.09a1 1 0 0 0 .91-.58A4.52 4.52 0 0 0 3.86 14"></svg:path><svg:path fill="currentColor" d="M3.86 10.08a1 1 0 0 0 .28 2a6 6 0 0 1 5.09 1.71a6 6 0 0 1 1.53 5.95a1 1 0 0 0 .68 1.26a.9.9 0 0 0 .28 0a1 1 0 0 0 1-.72a8 8 0 0 0-8.82-10.2Z"></svg:path><svg:circle cx="4" cy="19" r="1" fill="currentColor"></svg:circle>`,
})
export class EvaCastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaChargingFillIcon],svg[eva-charging-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.28 13H7a1 1 0 0 1-.86-.5a1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25Z"></svg:path><svg:path fill="currentColor" d="M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5a1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaChargingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCheckmarkCircle2FillIcon],svg[eva-checkmark-circle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z"></svg:path>`,
})
export class EvaCheckmarkCircle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCheckmarkCircleFillIcon],svg[eva-checkmark-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54Z"></svg:path><svg:path fill="currentColor" d="M21 11a1 1 0 0 0-1 1a8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36A7.93 7.93 0 0 1 12 4a8.8 8.8 0 0 1 1.9.22a1 1 0 1 0 .47-1.94A10.5 10.5 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaCheckmarkCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCheckmarkFillIcon],svg[eva-checkmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z"></svg:path>`,
})
export class EvaCheckmarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCheckmarkSquare2FillIcon],svg[eva-checkmark-square-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-1.7 6.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z"></svg:path>`,
})
export class EvaCheckmarkSquare2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCheckmarkSquareFillIcon],svg[eva-checkmark-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31a1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26Z"></svg:path>`,
})
export class EvaCheckmarkSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaChevronDownFillIcon],svg[eva-chevron-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28"></svg:path>`,
})
export class EvaChevronDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaChevronLeftFillIcon],svg[eva-chevron-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41a1 1 0 0 1-.72.29"></svg:path>`,
})
export class EvaChevronLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaChevronRightFillIcon],svg[eva-chevron-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17a1 1 0 0 1-.71-.29a1 1 0 0 1 0-1.42L13.1 12L9.92 8.69a1 1 0 0 1 0-1.41a1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32"></svg:path>`,
})
export class EvaChevronRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaChevronUpFillIcon],svg[eva-chevron-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42a1 1 0 0 1-.69.28"></svg:path>`,
})
export class EvaChevronUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaClipboardFillIcon],svg[eva-clipboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></svg:path><svg:rect width="10" height="6" x="7" y="2" fill="currentColor" rx="1" ry="1"></svg:rect>`,
})
export class EvaClipboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaClockFillIcon],svg[eva-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4 11h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCloseCircleFillIcon],svg[eva-close-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z"></svg:path>`,
})
export class EvaCloseCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCloseFillIcon],svg[eva-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCloseSquareFillIcon],svg[eva-close-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-3.29 10.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z"></svg:path>`,
})
export class EvaCloseSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCloudDownloadFillIcon],svg[eva-cloud-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="evaCloudDownloadFill0" fill="currentColor" d="M21.9 11c0-.11-.06-.22-.09-.33a4 4 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37s-.21-.2-.32-.3L20 8l-.36-.24a4 4 0 0 0-.44-.23l-.39-.18a4 4 0 0 0-.5-.15a3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09a4 4 0 0 0-.5.15l-.39.18a4 4 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37s-.18.23-.26.36s-.16.29-.24.44s-.13.25-.18.37a4 4 0 0 0-.18.57c0 .11-.07.22-.09.33A5 5 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a6 6 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a1 1 0 0 0 .05.08L3 15a5 5 0 0 0 4 2a2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.9 1.9 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27a2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a1 1 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a6 6 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5 5 0 0 0-.1-1"></svg:path><svg:path id="evaCloudDownloadFill1" fill="currentColor" d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44"></svg:path></svg:defs><svg:use href="#evaCloudDownloadFill0"></svg:use><svg:use href="#evaCloudDownloadFill1"></svg:use><svg:use href="#evaCloudDownloadFill0"></svg:use><svg:use href="#evaCloudDownloadFill1"></svg:use>`,
})
export class EvaCloudDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCloudUploadFillIcon],svg[eva-cloud-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.9 12c0-.11-.06-.22-.09-.33a4 4 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 10.08 21 10s-.2-.25-.31-.37s-.21-.2-.32-.3L20 9l-.36-.24a4 4 0 0 0-.44-.23l-.39-.18a4 4 0 0 0-.5-.15a3 3 0 0 0-.41-.09L17.67 8A6 6 0 0 0 6.33 8l-.18.05a3 3 0 0 0-.41.09a4 4 0 0 0-.5.15l-.39.18a4 4 0 0 0-.44.23l-.36.3l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37s-.18.23-.26.36s-.16.29-.24.44s-.13.25-.18.37a4 4 0 0 0-.18.57c0 .11-.07.22-.09.33A5 5 0 0 0 2 13a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a6 6 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a1 1 0 0 0 .05.08L3 16a5 5 0 0 0 4 2h3v-1.37a2 2 0 0 1-1 .27a2.05 2.05 0 0 1-1.44-.61a2 2 0 0 1 .05-2.83l3-2.9A2 2 0 0 1 12 10a2 2 0 0 1 1.41.59l3 3a2 2 0 0 1 0 2.82A2 2 0 0 1 15 17a1.9 1.9 0 0 1-1-.27V18h3a5 5 0 0 0 4-2l.05-.05a1 1 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a6 6 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 13a5 5 0 0 0-.1-1"></svg:path><svg:path fill="currentColor" d="M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaCloudUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCodeDownloadFillIcon],svg[eva-code-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63Zm17.49-.63l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"></svg:path><svg:path fill="currentColor" d="M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41"></svg:path>`,
})
export class EvaCodeDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCodeFillIcon],svg[eva-code-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41m13.14 6.14l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"></svg:path>`,
})
export class EvaCodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCollapseFillIcon],svg[eva-collapse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2m-9 4H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaCollapseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaColorPaletteFillIcon],svg[eva-color-palette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.54 5.08A10.6 10.6 0 0 0 11.91 2a10 10 0 0 0-.05 20a2.58 2.58 0 0 0 2.53-1.89a2.52 2.52 0 0 0-.57-2.28a.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25m-12.7 9.66a1.5 1.5 0 1 1 .4-2.08a1.49 1.49 0 0 1-.4 2.08M8.3 9.25a1.5 1.5 0 1 1-.55-2a1.5 1.5 0 0 1 .55 2M11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7m5.75.8a1.5 1.5 0 1 1 .55-2a1.5 1.5 0 0 1-.55 2"></svg:path>`,
})
export class EvaColorPaletteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaColorPickerFillIcon],svg[eva-color-picker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2l-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8L5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58l1.24 1.24a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-1.24-1.24l2-2a1.92 1.92 0 0 0-.07-2.71m-13 7.6L12 9.36l2.69 2.7l-2.79 2.79"></svg:path>`,
})
export class EvaColorPickerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCompassFillIcon],svg[eva-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.8 13.21l1.69-.68l.71-1.74l-1.69.68z"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m3.93 7.42l-1.75 4.26a1 1 0 0 1-.55.55l-4.21 1.7A1 1 0 0 1 9 16a1 1 0 0 1-.71-.31h-.05a1 1 0 0 1-.18-1l1.75-4.26a1 1 0 0 1 .55-.55l4.21-1.7a1 1 0 0 1 1.1.25a1 1 0 0 1 .26.99"></svg:path>`,
})
export class EvaCompassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCopyFillIcon],svg[eva-copy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3"></svg:path>`,
})
export class EvaCopyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerDownLeftFillIcon],svg[eva-corner-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a1 1 0 0 0-1-1a1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37a1 1 0 0 0 .62-.22a1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3Z"></svg:path>`,
})
export class EvaCornerDownLeftFillIcon {
  readonly viewBox = input("0.05 0.05 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerDownRightFillIcon],svg[eva-corner-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.78 12.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a1 1 0 0 1-1-1V6a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 19a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24"></svg:path>`,
})
export class EvaCornerDownRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerLeftDownFillIcon],svg[eva-corner-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaCornerLeftDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerLeftUpFillIcon],svg[eva-corner-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38a1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaCornerLeftUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerRightDownFillIcon],svg[eva-corner-right-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4"></svg:path>`,
})
export class EvaCornerRightDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerRightUpFillIcon],svg[eva-corner-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.62 8.22l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38a1 1 0 0 0-.16-1.4"></svg:path>`,
})
export class EvaCornerRightUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerUpLeftFillIcon],svg[eva-corner-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22a1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3"></svg:path>`,
})
export class EvaCornerUpLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCornerUpRightFillIcon],svg[eva-corner-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.78 10.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24"></svg:path>`,
})
export class EvaCornerUpRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCreditCardFillIcon],svg[eva-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-8 10H7a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m3-6H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class EvaCreditCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCropFillIcon],svg[eva-crop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2M8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16Z"></svg:path>`,
})
export class EvaCropFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaCubeFillIcon],svg[eva-cube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 11.83L3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06ZM12 10.5l8.51-3.57a1.6 1.6 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.6 1.6 0 0 0-.51.38Zm.75 1.33V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36Z"></svg:path>`,
})
export class EvaCubeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDiagonalArrowLeftDownFillIcon],svg[eva-diagonal-arrow-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class EvaDiagonalArrowLeftDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDiagonalArrowLeftUpFillIcon],svg[eva-diagonal-arrow-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0a1 1 0 0 0 .03-1.42"></svg:path>`,
})
export class EvaDiagonalArrowLeftUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDiagonalArrowRightDownFillIcon],svg[eva-diagonal-arrow-right-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaDiagonalArrowRightDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDiagonalArrowRightUpFillIcon],svg[eva-diagonal-arrow-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class EvaDiagonalArrowRightUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDoneAllFillIcon],svg[eva-done-all-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9l-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37a1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41m5 0a1 1 0 0 0-1.41.17l-7 9l-.61-.75l-1.26 1.62l1.1 1.37a1 1 0 0 0 .78.37a1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4"></svg:path><svg:path fill="currentColor" d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2a1 1 0 0 0-.15 1.41Z"></svg:path>`,
})
export class EvaDoneAllFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDownloadFillIcon],svg[eva-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16" height="2" x="4" y="18" fill="currentColor" rx="1" ry="1"></svg:rect><svg:rect width="4" height="2" x="3" y="17" fill="currentColor" rx="1" ry="1" transform="rotate(-90 5 18)"></svg:rect><svg:rect width="4" height="2" x="17" y="17" fill="currentColor" rx="1" ry="1" transform="rotate(-90 19 18)"></svg:rect><svg:path fill="currentColor" d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2"></svg:path><svg:path fill="currentColor" d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDropletFillIcon],svg[eva-droplet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28a7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3a1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1"></svg:path>`,
})
export class EvaDropletFillIcon {
  readonly viewBox = input("0.1 0.1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaDropletOffFillIcon],svg[eva-droplet-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16.14A7.73 7.73 0 0 0 17.34 8l-4.56-4.69a1 1 0 0 0-.71-.31a1 1 0 0 0-.72.3L8.74 5.92ZM6 8.82a7.73 7.73 0 0 0 .64 9.9A7.44 7.44 0 0 0 11.92 21a7.34 7.34 0 0 0 4.64-1.6Zm14.71 10.47l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class EvaDropletOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaEdit2FillIcon],svg[eva-edit-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18M15.27 4L18 6.73l-2 1.95L13.32 6Z"></svg:path>`,
})
export class EvaEdit2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaEditFillIcon],svg[eva-edit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71M16 10.68L13.32 8l1.95-2L18 8.73Z"></svg:path>`,
})
export class EvaEditFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaEmailFillIcon],svg[eva-email-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z"></svg:path>`,
})
export class EvaEmailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaExpandFillIcon],svg[eva-expand-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1a1 1 0 0 0 1-1Zm-9.29 8.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class EvaExpandFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaExternalLinkFillIcon],svg[eva-external-link-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2"></svg:path>`,
})
export class EvaExternalLinkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaEyeFillIcon],svg[eva-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5c-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1m-9.87 4a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"></svg:path>`,
})
export class EvaEyeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaEyeOff2FillIcon],svg[eva-eye-off-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24a7.07 7.07 0 0 1-14 0a1 1 0 1 0-2 .24a8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9 9 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9 9 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41Z"></svg:path>`,
})
export class EvaEyeOff2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaEyeOffFillIcon],svg[eva-eye-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.29 18.12L14 16.78l-.07-.07l-1.27-1.27a4 4 0 0 1-.61.06A3.5 3.5 0 0 1 8.5 12a4 4 0 0 1 .06-.61l-2-2L5 7.87a15.9 15.9 0 0 0-2.87 3.63a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.5 9.5 0 0 0 3.23-.67ZM8.59 5.76l2.8 2.8A4 4 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a4 4 0 0 1-.06.61l2.68 2.68l.84.84a15.9 15.9 0 0 0 2.91-3.63a1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.5 9.5 0 0 0-3.23.67Zm12.12 13.53L19.41 18l-2-2l-9.52-9.53L6.42 5L4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7l7.31 7.3l.07.07L16 17.41l.59.59l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class EvaEyeOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFacebookFillIcon],svg[eva-facebook-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"></svg:path>`,
})
export class EvaFacebookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFileAddFillIcon],svg[eva-file-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2m.71-7a.79.79 0 0 1-.71-.85V4l3.74 4Z"></svg:path>`,
})
export class EvaFileAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFileFillIcon],svg[eva-file-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M14 4l3.74 4h-3a.79.79 0 0 1-.74-.85Z"></svg:path>`,
})
export class EvaFileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFileRemoveFillIcon],svg[eva-file-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m.71-7a.79.79 0 0 1-.71-.85V4l3.74 4Z"></svg:path>`,
})
export class EvaFileRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFileTextFillIcon],svg[eva-file-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4Z"></svg:path>`,
})
export class EvaFileTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFilmFillIcon],svg[eva-film-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3M7 11H5V9h2Zm-2 2h2v2H5Zm14-2h-2V9h2Zm-2 2h2v2h-2Zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74M5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5M5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74m14 0a.74.74 0 0 1-.74.74H17v-2h2Z"></svg:path>`,
})
export class EvaFilmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFlagFillIcon],svg[eva-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25a7.5 7.5 0 0 1-2.17.28a8.5 8.5 0 0 1-3.13-.78A10.2 10.2 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.3 6.3 0 0 1 2.5-.41a8.5 8.5 0 0 1 3.13.78a10.2 10.2 0 0 0 3.87.93a7.66 7.66 0 0 0 3.5-.7a1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43"></svg:path>`,
})
export class EvaFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFlashFillIcon],svg[eva-flash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44"></svg:path>`,
})
export class EvaFlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFlashOffFillIcon],svg[eva-flash-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.33 14.5l2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1a1 1 0 0 0-1.17.38L8.94 6.11Zm-10.66-5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05a1 1 0 0 0 .34.06a1 1 0 0 0 .83-.44l3.12-4.67Zm14.04 9.79l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class EvaFlashOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFlip2FillIcon],svg[eva-flip-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19m-.3-9.29a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42Z"></svg:path>`,
})
export class EvaFlip2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFlipFillIcon],svg[eva-flip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09m9.29-.3a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0Z"></svg:path>`,
})
export class EvaFlipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFolderAddFillIcon],svg[eva-folder-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaFolderAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFolderFillIcon],svg[eva-folder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43"></svg:path>`,
})
export class EvaFolderFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFolderRemoveFillIcon],svg[eva-folder-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaFolderRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaFunnelFillIcon],svg[eva-funnel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49a1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9a1 1 0 0 1-.41.1"></svg:path>`,
})
export class EvaFunnelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaGiftFillIcon],svg[eva-gift-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.64 15.27v4.82a.92.92 0 0 0 .92.91h5.62v-5.73ZM12.82 21h5.62a.92.92 0 0 0 .92-.91v-4.82h-6.54ZM20.1 7.09h-1.84a2.8 2.8 0 0 0 .29-1.23A2.87 2.87 0 0 0 15.68 3A4.21 4.21 0 0 0 12 5.57A4.21 4.21 0 0 0 8.32 3a2.87 2.87 0 0 0-2.87 2.86a2.8 2.8 0 0 0 .29 1.23H3.9c-.5 0-.9.59-.9 1.31v3.93c0 .72.4 1.31.9 1.31h7.28V7.09h1.64v6.55h7.28c.5 0 .9-.59.9-1.31V8.4c0-.72-.4-1.31-.9-1.31m-11.78 0a1.23 1.23 0 1 1 0-2.45c1.4 0 2.19 1.44 2.58 2.45Zm7.36 0H13.1c.39-1 1.18-2.45 2.58-2.45a1.23 1.23 0 1 1 0 2.45"></svg:path>`,
})
export class EvaGiftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaGithubFillIcon],svg[eva-github-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1A10.89 10.89 0 0 0 1 11.77A10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11a2.37 2.37 0 0 0 3.2.89a2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91a3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.7 10.7 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77A10.89 10.89 0 0 0 12 1"></svg:path>`,
})
export class EvaGithubFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaGlobe2FillIcon],svg[eva-globe-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 2a8.2 8.2 0 0 1 1.79.21a2.6 2.6 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67a6.5 6.5 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87c-1.37 1.07-3.46.47-4.76-.07A8.3 8.3 0 0 1 4 12a8 8 0 0 1 8-8m4.89 14.32a7 7 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49c-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .58-2.43a5.4 5.4 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28Z"></svg:path>`,
})
export class EvaGlobe2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaGlobe3FillIcon],svg[eva-globe-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2M5 15.8a8.4 8.4 0 0 0 2 .27a5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34a2.86 2.86 0 0 1 1.12-.91a10 10 0 0 0 .92-.61a4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4c.12.21.25.41.38.61a2.3 2.3 0 0 1 .52 1.08A7.9 7.9 0 0 1 12 20a8 8 0 0 1-7-4.2"></svg:path>`,
})
export class EvaGlobe3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaGlobeFillIcon],svg[eva-globe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20a10 10 0 0 0 10-10m-2.07-1H17a12.9 12.9 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11M9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13m0-2A11.4 11.4 0 0 1 12 4.4a11.2 11.2 0 0 1 3 6.6Zm.36-6.57A13.2 13.2 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57M4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13m10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55"></svg:path>`,
})
export class EvaGlobeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaGoogleFillIcon],svg[eva-google-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.1 6.1 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"></svg:path>`,
})
export class EvaGoogleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaGridFillIcon],svg[eva-grid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></svg:path>`,
})
export class EvaGridFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaHardDriveFillIcon],svg[eva-hard-drive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9M8 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2M5.62 11l2.72-5.45a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11Z"></svg:path>`,
})
export class EvaHardDriveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaHashFillIcon],svg[eva-hash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19a1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2M9.7 14l.73-4h3.87l-.73 4Z"></svg:path>`,
})
export class EvaHashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaHeadphonesFillIcon],svg[eva-headphones-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4a3.9 3.9 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.9 3.9 0 0 0-2-.56a4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2"></svg:path>`,
})
export class EvaHeadphonesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaHeartFillIcon],svg[eva-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4a5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0a5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21"></svg:path>`,
})
export class EvaHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaHomeFillIcon],svg[eva-home-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h4v7h-4z"></svg:path><svg:path fill="currentColor" d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44"></svg:path>`,
})
export class EvaHomeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaImage2FillIcon],svg[eva-image-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M8 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 7m11 10.83A1.09 1.09 0 0 1 18 19H6l7.57-6.82a.69.69 0 0 1 .93 0l4.5 4.48Z"></svg:path>`,
})
export class EvaImage2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaImageFillIcon],svg[eva-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1"></svg:path><svg:circle cx="8" cy="8.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class EvaImageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaInboxFillIcon],svg[eva-inbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9M8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62Z"></svg:path>`,
})
export class EvaInboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaInfoFillIcon],svg[eva-info-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaInfoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaKeypadFillIcon],svg[eva-keypad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 6a3 3 0 1 0-3-3a3 3 0 0 0 3 3M5 9a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3M5 16a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3"></svg:path>`,
})
export class EvaKeypadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLayersFillIcon],svg[eva-layers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.24 7.29l8.52 4.63a.51.51 0 0 0 .48 0l8.52-4.63a.44.44 0 0 0-.05-.81L12.19 3a.5.5 0 0 0-.38 0L3.29 6.48a.44.44 0 0 0-.05.81"></svg:path><svg:path fill="currentColor" d="m20.71 10.66l-1.83-.78l-6.64 3.61a.51.51 0 0 1-.48 0L5.12 9.88l-1.83.78a.48.48 0 0 0 0 .85l8.52 4.9a.46.46 0 0 0 .48 0l8.52-4.9a.48.48 0 0 0-.1-.85"></svg:path><svg:path fill="currentColor" d="m20.71 15.1l-1.56-.68l-6.91 3.76a.51.51 0 0 1-.48 0l-6.91-3.76l-1.56.68a.49.49 0 0 0 0 .87l8.52 5a.51.51 0 0 0 .48 0l8.52-5a.49.49 0 0 0-.1-.87"></svg:path>`,
})
export class EvaLayersFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLayoutFillIcon],svg[eva-layout-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2ZM3 10v8a3 3 0 0 0 3 3h5V10Zm10 0v11h5a3 3 0 0 0 3-3v-8Z"></svg:path>`,
})
export class EvaLayoutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLink2FillIcon],svg[eva-link-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.29 9.29l-4 4a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42"></svg:path><svg:path fill="currentColor" d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4a4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07a6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42m7.38-14.18a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61a1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4a4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06"></svg:path>`,
})
export class EvaLink2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLinkFillIcon],svg[eva-link-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1"></svg:path><svg:path fill="currentColor" d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37A4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2m14-4.76A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63A4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76"></svg:path>`,
})
export class EvaLinkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLinkedinFillIcon],svg[eva-linkedin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82"></svg:path><svg:rect width="4.5" height="11.7" x="3" y="9.3" fill="currentColor" rx=".9" ry=".9"></svg:rect><svg:circle cx="5.25" cy="5.25" r="2.25" fill="currentColor"></svg:circle>`,
})
export class EvaLinkedinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaListFillIcon],svg[eva-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="17" r="1" fill="currentColor"></svg:circle><svg:rect width="14" height="2" x="7" y="11" fill="currentColor" rx=".94" ry=".94"></svg:rect><svg:rect width="14" height="2" x="7" y="16" fill="currentColor" rx=".94" ry=".94"></svg:rect><svg:rect width="14" height="2" x="7" y="6" fill="currentColor" rx=".94" ry=".94"></svg:rect>`,
})
export class EvaListFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLockFillIcon],svg[eva-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="15" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4ZM12 18a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class EvaLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLogInFillIcon],svg[eva-log-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-7.2 3.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4a1 1 0 0 0 .58.18a1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18Z"></svg:path>`,
})
export class EvaLogInFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaLogOutFillIcon],svg[eva-log-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6Zm13.82 5.42l-2.82-4a1 1 0 0 0-1.39-.24a1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4a1 1 0 0 0 .6.2a1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18"></svg:path>`,
})
export class EvaLogOutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMapFillIcon],svg[eva-map-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.41 5.89l-4-1.8h-.82L12 5.7L8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91M9 6.55l2 .89v10l-2-.89Zm10 10.9l-2-.89v-10l2 .89Z"></svg:path>`,
})
export class EvaMapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMaximizeFillIcon],svg[eva-maximize-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M13 12h-1v1a1 1 0 0 1-2 0v-1H9a1 1 0 0 1 0-2h1V9a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaMaximizeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMenu2FillIcon],svg[eva-menu-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="12" r="1" fill="currentColor"></svg:circle><svg:rect width="14" height="2" x="7" y="11" fill="currentColor" rx=".94" ry=".94"></svg:rect><svg:rect width="18" height="2" x="3" y="16" fill="currentColor" rx=".94" ry=".94"></svg:rect><svg:rect width="18" height="2" x="3" y="6" fill="currentColor" rx=".94" ry=".94"></svg:rect>`,
})
export class EvaMenu2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMenuArrowFillIcon],svg[eva-menu-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1"></svg:path><svg:rect width="18" height="2" x="3" y="17" fill="currentColor" rx=".95" ry=".95"></svg:rect><svg:rect width="18" height="2" x="3" y="5" fill="currentColor" rx=".95" ry=".95"></svg:rect>`,
})
export class EvaMenuArrowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMenuFillIcon],svg[eva-menu-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18" height="2" x="3" y="11" fill="currentColor" rx=".95" ry=".95"></svg:rect><svg:rect width="18" height="2" x="3" y="16" fill="currentColor" rx=".95" ry=".95"></svg:rect><svg:rect width="18" height="2" x="3" y="6" fill="currentColor" rx=".95" ry=".95"></svg:rect>`,
})
export class EvaMenuFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMessageCircleFillIcon],svg[eva-message-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.07 4.93a10 10 0 0 0-16.28 11a1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09a10 10 0 0 0 11-16.28ZM8 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaMessageCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMessageSquareFillIcon],svg[eva-message-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M8 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaMessageSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMicFillIcon],svg[eva-mic-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4"></svg:path><svg:path fill="currentColor" d="M19 11a1 1 0 0 0-2 0a5 5 0 0 1-10 0a1 1 0 0 0-2 0a7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11"></svg:path>`,
})
export class EvaMicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMicOffFillIcon],svg[eva-mic-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.58 12.75A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75M19 11a1 1 0 0 0-2 0a4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11m-7 4h.16L8 10.83V11a4 4 0 0 0 4 4m8.71 4.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path><svg:path fill="currentColor" d="M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.6 4.6 0 0 1 12 16a5 5 0 0 1-5-5a1 1 0 0 0-2 0a7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaMicOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMinimizeFillIcon],svg[eva-minimize-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M13 12H9a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaMinimizeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMinusCircleFillIcon],svg[eva-minus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m3 11H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaMinusCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMinusFillIcon],svg[eva-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMinusSquareFillIcon],svg[eva-minus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-3 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaMinusSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMonitorFillIcon],svg[eva-monitor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3M2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2Z"></svg:path>`,
})
export class EvaMonitorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMoonFillIcon],svg[eva-moon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 22h-.1a10.3 10.3 0 0 1-7.34-3.15a10.46 10.46 0 0 1-.26-14a10.1 10.1 0 0 1 4-2.74a1 1 0 0 1 1.06.22a1 1 0 0 1 .24 1a8.4 8.4 0 0 0 1.94 8.81a8.47 8.47 0 0 0 8.83 1.94a1 1 0 0 1 1.27 1.29A10.2 10.2 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3"></svg:path>`,
})
export class EvaMoonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMoreHorizontalFillIcon],svg[eva-more-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="5" cy="12" r="2" fill="currentColor"></svg:circle>`,
})
export class EvaMoreHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMoreVerticalFillIcon],svg[eva-more-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="5" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="19" r="2" fill="currentColor"></svg:circle>`,
})
export class EvaMoreVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMoveFillIcon],svg[eva-move-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69"></svg:path>`,
})
export class EvaMoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaMusicFillIcon],svg[eva-music-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V4a1 1 0 0 0-.38-.78a1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18a4 4 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17a5 5 0 0 0 0-.51"></svg:path>`,
})
export class EvaMusicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaNavigation2FillIcon],svg[eva-navigation-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.67 22h-.06a1 1 0 0 1-.92-.8l-1.54-7.57a1 1 0 0 0-.78-.78L2.8 11.31a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68"></svg:path>`,
})
export class EvaNavigation2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaNavigationFillIcon],svg[eva-navigation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a.94.94 0 0 1-.55-.17l-6.9-4.56a1 1 0 0 0-1.1 0l-6.9 4.56a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20"></svg:path>`,
})
export class EvaNavigationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaNpmFillIcon],svg[eva-npm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3"></svg:path>`,
})
export class EvaNpmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaOptions2FillIcon],svg[eva-options-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2m18 10h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaOptions2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaOptionsFillIcon],svg[eva-options-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13m-6-8a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5"></svg:path>`,
})
export class EvaOptionsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPantoneFillIcon],svg[eva-pantone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.18h-2.7l-1.86 2L11.88 19l-1.41 1.52L10 21h10a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1M18.19 9.3l-4.14-3.86a.89.89 0 0 0-.71-.26a1 1 0 0 0-.7.31l-.82.89v10.71a5 5 0 0 1-.06.57l6.48-6.95a1 1 0 0 0-.05-1.41M10.82 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09a3.91 3.91 0 0 0 7.82 0Zm-2 13.09a1.91 1.91 0 0 1-3.82 0V15h3.82Zm0-4.09H5v-3h3.82Zm0-5H5V5h3.82Z"></svg:path>`,
})
export class EvaPantoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPaperPlaneFillIcon],svg[eva-paper-plane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3a1 1 0 0 0-.29-.19h-.09a.9.9 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84l2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4m-4.7 2.29l-5.57 5.57L5.16 10ZM14 18.84l-1.86-5.57l5.57-5.57Z"></svg:path>`,
})
export class EvaPaperPlaneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPauseCircleFillIcon],svg[eva-pause-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-2 13a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class EvaPauseCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPeopleFillIcon],svg[eva-people-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m8 2a3 3 0 1 0-3-3a3 3 0 0 0 3 3m4 7a1 1 0 0 0 1-1a5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></svg:path>`,
})
export class EvaPeopleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPercentFillIcon],svg[eva-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11m0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6m8 8a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14m0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19m3.74-14.74a.89.89 0 0 0-1.26 0L4.26 18.48a.9.9 0 0 0-.26.63a.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26"></svg:path>`,
})
export class EvaPercentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPersonAddFillIcon],svg[eva-person-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2m-11 5a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1"></svg:path>`,
})
export class EvaPersonAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPersonDeleteFillIcon],svg[eva-person-delete-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73l-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5ZM10 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1Z"></svg:path>`,
})
export class EvaPersonDeleteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPersonDoneFillIcon],svg[eva-person-done-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15l-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33a1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41M10 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1"></svg:path>`,
})
export class EvaPersonDoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPersonFillIcon],svg[eva-person-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1Z"></svg:path>`,
})
export class EvaPersonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPersonRemoveFillIcon],svg[eva-person-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-11 5a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1"></svg:path>`,
})
export class EvaPersonRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPhoneCallFillIcon],svg[eva-phone-call-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8a3 3 0 0 1 3 3a1 1 0 0 0 2 0a5 5 0 0 0-5-5a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" d="M13 4a7 7 0 0 1 7 7a1 1 0 0 0 2 0a9 9 0 0 0-9-9a1 1 0 0 0 0 2m8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.9 9.9 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a4 4 0 0 0-.72-.18A4 4 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a5 5 0 0 0-.06-.76a4.3 4.3 0 0 0-.19-.73"></svg:path>`,
})
export class EvaPhoneCallFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPhoneFillIcon],svg[eva-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 22A15.42 15.42 0 0 1 2 6.6A4.6 4.6 0 0 1 6.6 2a4 4 0 0 1 .77.07a4 4 0 0 1 .72.18a1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.9 9.9 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65a4.3 4.3 0 0 1 .19.73a5 5 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22"></svg:path>`,
})
export class EvaPhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPhoneMissedFillIcon],svg[eva-phone-missed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.94 16.64a4.3 4.3 0 0 0-.19-.73a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a4 4 0 0 0-.72-.18A4 4 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6A15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a5 5 0 0 0-.06-.76M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73l.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73l-.73.73a1.05 1.05 0 0 0 0 1.47"></svg:path>`,
})
export class EvaPhoneMissedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPhoneOffFillIcon],svg[eva-phone-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.27 12.06a10.4 10.4 0 0 1-.8-1.42C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72a4 4 0 0 0-.72-.18A4 4 0 0 0 6.6 2A4.6 4.6 0 0 0 2 6.6a15.33 15.33 0 0 0 3.27 9.46Zm12.67 4.58a4.3 4.3 0 0 0-.19-.73a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a11 11 0 0 1-1.41-.8l-4 4A15.33 15.33 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6a5 5 0 0 0-.06-.76m-2.2-12.38a.89.89 0 0 0-1.26 0L4.26 18.48a.9.9 0 0 0-.26.63a.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26"></svg:path>`,
})
export class EvaPhoneOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPieChart2FillIcon],svg[eva-pie-chart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5A7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83m.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94Z"></svg:path><svg:path fill="currentColor" d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11a.92.92 0 0 0-.92-1"></svg:path>`,
})
export class EvaPieChart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPieChartFillIcon],svg[eva-pie-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5A7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83"></svg:path><svg:path fill="currentColor" d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11a.92.92 0 0 0-.92-1"></svg:path>`,
})
export class EvaPieChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPinFillIcon],svg[eva-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2m0 11a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 13"></svg:path>`,
})
export class EvaPinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPlayCircleFillIcon],svg[eva-play-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 14.6l2.81-2.6l-2.81-2.6z"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4 11.18l-3.64 3.37a1.74 1.74 0 0 1-1.16.45a1.7 1.7 0 0 1-.69-.15a1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48a1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36"></svg:path>`,
})
export class EvaPlayCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPlusCircleFillIcon],svg[eva-plus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaPlusCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPlusFillIcon],svg[eva-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPlusSquareFillIcon],svg[eva-plus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaPlusSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPowerFillIcon],svg[eva-power-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1"></svg:path><svg:path fill="currentColor" d="M16.59 3.11a1 1 0 0 0-.92 1.78a8 8 0 1 1-7.34 0a1 1 0 1 0-.92-1.78a10 10 0 1 0 9.18 0"></svg:path>`,
})
export class EvaPowerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPricetagsFillIcon],svg[eva-pricetags-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.47 11.58l-6.42-6.41a1 1 0 0 0-.61-.29L5.09 4a1 1 0 0 0-.8.29a1 1 0 0 0-.29.8l.88 9.35a1 1 0 0 0 .29.61l6.41 6.42a1.84 1.84 0 0 0 1.29.53a1.82 1.82 0 0 0 1.28-.53l7.32-7.32a1.82 1.82 0 0 0 0-2.57m-9.91 0a1.5 1.5 0 1 1 0-2.12a1.49 1.49 0 0 1 0 2.1Z"></svg:path>`,
})
export class EvaPricetagsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaPrinterFillIcon],svg[eva-printer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7M8 5h8v2H8Zm-.5 14v-4h9v4Z"></svg:path>`,
})
export class EvaPrinterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaQuestionMarkCircleFillIcon],svg[eva-question-mark-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 16a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.5-1.5a1 1 0 0 1-2 0a3.5 3.5 0 1 1 4.5 3.34"></svg:path>`,
})
export class EvaQuestionMarkCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaQuestionMarkFillIcon],svg[eva-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0a3 3 0 1 1 3 3a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9"></svg:path><svg:circle cx="12" cy="19" r="1" fill="currentColor"></svg:circle>`,
})
export class EvaQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRadioButtonOffFillIcon],svg[eva-radio-button-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10m0-18a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class EvaRadioButtonOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRadioButtonOnFillIcon],svg[eva-radio-button-on-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12 7a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class EvaRadioButtonOnFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRadioFillIcon],svg[eva-radio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a3 3 0 0 0-1 5.83a1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8m-8.5 3a6.87 6.87 0 0 1 2.64-5.23a1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77a1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11"></svg:path><svg:path fill="currentColor" d="M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76m-7.88.12a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76a1 1 0 0 0 1.4-.12a1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24a1 1 0 0 0 .12-1.4"></svg:path><svg:path fill="currentColor" d="M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23a1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77"></svg:path>`,
})
export class EvaRadioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRecordingFillIcon],svg[eva-recording-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a4 4 0 0 0-4 4a3.9 3.9 0 0 0 .56 2H9.44a3.9 3.9 0 0 0 .56-2a4 4 0 1 0-4 4h12a4 4 0 0 0 0-8"></svg:path>`,
})
export class EvaRecordingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRefreshFillIcon],svg[eva-refresh-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19A7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7a7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83a1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06a.3.3 0 0 0 .1-.06a.8.8 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.3 1.3 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.2 9.2 0 0 0 12.18 3A9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25"></svg:path>`,
})
export class EvaRefreshFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRepeatFillIcon],svg[eva-repeat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5m.3 9.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaRepeatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRewindLeftFillIcon],svg[eva-rewind-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59a2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46a2.2 2.2 0 0 0 .91-.2a1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46a2.2 2.2 0 0 0 .91-.2a1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59"></svg:path>`,
})
export class EvaRewindLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaRewindRightFillIcon],svg[eva-rewind-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.86 10.67l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26a1.76 1.76 0 0 0-1.05 1.59v2.59L7.76 6.46a2.1 2.1 0 0 0-2.21-.26a1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59a2.2 2.2 0 0 0 .91.2a2.06 2.06 0 0 0 1.3-.46l4.74-3.92v2.59a1.76 1.76 0 0 0 1.05 1.59a2.2 2.2 0 0 0 .91.2a2.06 2.06 0 0 0 1.3-.46l5.1-4.21a1.7 1.7 0 0 0 0-2.66"></svg:path>`,
})
export class EvaRewindRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSaveFillIcon],svg[eva-save-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17h4v4h-4z"></svg:path><svg:path fill="currentColor" d="m20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H10v6h5a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h2a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12"></svg:path>`,
})
export class EvaSaveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaScissorsFillIcon],svg[eva-scissors-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31l-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3a3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3a3 3 0 0 0-.29-1.26ZM6.5 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaScissorsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSearchFillIcon],svg[eva-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"></svg:path>`,
})
export class EvaSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSettings2FillIcon],svg[eva-settings-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 0 1 0-.37l.81-.74a1.63 1.63 0 0 0 .5-1.18a1.67 1.67 0 0 0-.5-1.19L18.4 4.26a1.67 1.67 0 0 0-2.37 0l-.77.74a.38.38 0 0 1-.41 0a.34.34 0 0 1-.22-.29V3.68A1.68 1.68 0 0 0 13 2h-1.94a1.69 1.69 0 0 0-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 0 1-.37 0L8 4.26a1.72 1.72 0 0 0-1.19-.5a1.65 1.65 0 0 0-1.18.5L4.26 5.6a1.67 1.67 0 0 0 0 2.4l.74.74a.38.38 0 0 1 0 .41a.34.34 0 0 1-.29.22H3.68A1.68 1.68 0 0 0 2 11.05v1.89a1.69 1.69 0 0 0 1.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 0 1 0 .37l-.81.74a1.72 1.72 0 0 0-.5 1.19a1.66 1.66 0 0 0 .5 1.19l1.34 1.36a1.67 1.67 0 0 0 2.37 0l.77-.74a.38.38 0 0 1 .41 0a.34.34 0 0 1 .22.29v1.09A1.68 1.68 0 0 0 11.05 22h1.89a1.69 1.69 0 0 0 1.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 0 1 .37 0l.76.77a1.72 1.72 0 0 0 1.19.5a1.65 1.65 0 0 0 1.18-.5l1.34-1.34a1.67 1.67 0 0 0 0-2.37l-.73-.73a.34.34 0 0 1 0-.37a.34.34 0 0 1 .29-.22h1.09A1.68 1.68 0 0 0 22 13v-1.94a1.69 1.69 0 0 0-1.68-1.69M12 15.5a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"></svg:path>`,
})
export class EvaSettings2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSettingsFillIcon],svg[eva-settings-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68a2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29a2.14 2.14 0 0 0-1.68.12a2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86a2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77a1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93M12 15.5a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"></svg:path>`,
})
export class EvaSettingsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShakeFillIcon],svg[eva-shake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76a1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24a1 1 0 0 1 .13 1.4a1 1 0 0 1-.77.36M12 7a4 4 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4 4 0 0 1 12 7m0 8a4 4 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4 4 0 0 1-1 .14m4 1a1 1 0 0 1-.77-.36a1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24a1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.2 6.2 0 0 1-2.36 4.76A1 1 0 0 1 16 16"></svg:path><svg:path fill="currentColor" d="M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76a1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24a1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16m10.5 2a1 1 0 0 1-.77-.36a1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24a1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76a1 1 0 0 1-.64.24M12 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0-1"></svg:path>`,
})
export class EvaShakeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShareFillIcon],svg[eva-share-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15a3 3 0 0 0-2.1.86L8 12.34v-.67l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3"></svg:path>`,
})
export class EvaShareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShieldFillIcon],svg[eva-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25"></svg:path>`,
})
export class EvaShieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShieldOffFillIcon],svg[eva-shield-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.73 6.56A2 2 0 0 0 3 8.09v.14a15.17 15.17 0 0 0 7.72 13.2l.3.17a2 2 0 0 0 2 0l.3-.17a15.2 15.2 0 0 0 3-2.27ZM18.84 16A15.1 15.1 0 0 0 21 8.23v-.14a2 2 0 0 0-1-1.75L13 2.4a2 2 0 0 0-2 0L7.32 4.49ZM4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaShieldOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShoppingBagFillIcon],svg[eva-shopping-bag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12M12 16a4 4 0 0 1-4-4a1 1 0 0 1 2 0a2 2 0 0 0 4 0a1 1 0 0 1 2 0a4 4 0 0 1-4 4M6.41 7l1.71-1.71A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7Z"></svg:path>`,
})
export class EvaShoppingBagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShoppingCartFillIcon],svg[eva-shopping-cart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7"></svg:path><svg:circle cx="7.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class EvaShoppingCartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShuffle2FillIcon],svg[eva-shuffle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71Z"></svg:path>`,
})
export class EvaShuffle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaShuffleFillIcon],svg[eva-shuffle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9.31a1 1 0 0 0 1 1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1a1 1 0 0 0 1 1h1.89L12 10.59L6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L18 7.42Z"></svg:path><svg:path fill="currentColor" d="M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaShuffleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSkipBackFillIcon],svg[eva-skip-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21l-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15l5.1 4.21a2.06 2.06 0 0 0 1.3.46a2.2 2.2 0 0 0 .91-.2a1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59"></svg:path>`,
})
export class EvaSkipBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSkipForwardFillIcon],svg[eva-skip-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a1 1 0 0 0-1 1v3.82l-.14-.15l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26a1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59a2.2 2.2 0 0 0 .91.2a2.06 2.06 0 0 0 1.3-.46l5.1-4.21l.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaSkipForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSlashFillIcon],svg[eva-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8M4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8"></svg:path>`,
})
export class EvaSlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSmartphoneFillIcon],svg[eva-smartphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 16a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 18m2.5-10h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2"></svg:path>`,
})
export class EvaSmartphoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSmilingFaceFillIcon],svg[eva-smiling-face-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m5 9a5 5 0 0 1-10 0Z"></svg:path>`,
})
export class EvaSmilingFaceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSpeakerFillIcon],svg[eva-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="15.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 3a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 14a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 19"></svg:path>`,
})
export class EvaSpeakerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSquareFillIcon],svg[eva-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class EvaSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaStarFillIcon],svg[eva-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63l-4.12-4a1 1 0 0 1-.25-1a1 1 0 0 1 .81-.68l5.7-.83l2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12l5.7.83a1 1 0 0 1 .81.68a1 1 0 0 1-.25 1l-4.12 4l1 5.63a1 1 0 0 1-.4 1a1 1 0 0 1-.62.18"></svg:path>`,
})
export class EvaStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaStopCircleFillIcon],svg[eva-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4 12.75A1.25 1.25 0 0 1 14.75 16h-5.5A1.25 1.25 0 0 1 8 14.75v-5.5A1.25 1.25 0 0 1 9.25 8h5.5A1.25 1.25 0 0 1 16 9.25Z"></svg:path><svg:path fill="currentColor" d="M10 10h4v4h-4z"></svg:path>`,
})
export class EvaStopCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSunFillIcon],svg[eva-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1m9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1m.22-7a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28a1 1 0 0 0 .72-.31a1 1 0 0 0 0-1.41ZM17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.31M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m5.73-1.86a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28a1 1 0 0 0 .72-.3a1 1 0 0 0 0-1.42Zm-11.46 0l-1.44 1.39a1 1 0 0 0 0 1.42a1 1 0 0 0 .72.3a1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44ZM12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4"></svg:path>`,
})
export class EvaSunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSwapFillIcon],svg[eva-swap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4a1 1 0 0 0 .8.4a1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2m16 7H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21a1 1 0 0 0 .79-.39a1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaSwapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaSyncFillIcon],svg[eva-sync-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.66 10.37a.6.6 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84a1 1 0 0 0 .55 1.3a1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.9.9 0 0 0 .34-.06a.3.3 0 0 0 .1-.06a.8.8 0 0 0 .2-.11l.08-.1a1 1 0 0 0 .14-.16a.6.6 0 0 0 .05-.16m-1.78 3.7a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.9.9 0 0 0-.33 0H3a1.2 1.2 0 0 0-.32.14a1 1 0 0 0-.18.18l-.09.1a1 1 0 0 0-.07.19a.4.4 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83a1 1 0 0 0-.57-1.28"></svg:path>`,
})
export class EvaSyncFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaTextFillIcon],svg[eva-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaThermometerFillIcon],svg[eva-thermometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v8a5 5 0 0 1-3 9m1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4a1 1 0 0 0-1 1v4.54Z"></svg:path>`,
})
export class EvaThermometerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaThermometerMinusFillIcon],svg[eva-thermometer-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="2" x="2" y="5" fill="currentColor" rx="1" ry="1"></svg:rect><svg:path fill="currentColor" d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v8a5 5 0 0 1-3 9m1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54Z"></svg:path>`,
})
export class EvaThermometerMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaThermometerPlusFillIcon],svg[eva-thermometer-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="2" x="2" y="5" fill="currentColor" rx="1" ry="1"></svg:rect><svg:rect width="6" height="2" x="2" y="5" fill="currentColor" rx="1" ry="1" transform="rotate(-90 5 6)"></svg:rect><svg:path fill="currentColor" d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v8a5 5 0 0 1-3 9m1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54Z"></svg:path>`,
})
export class EvaThermometerPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaToggleLeftFillIcon],svg[eva-toggle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14M9 15a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="M9 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaToggleLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaToggleRightFillIcon],svg[eva-toggle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14m0 10a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class EvaToggleRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaTrash2FillIcon],svg[eva-trash-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2M10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4ZM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class EvaTrash2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaTrashFillIcon],svg[eva-trash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2M10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4Z"></svg:path>`,
})
export class EvaTrashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaTrendingDownFillIcon],svg[eva-trending-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7L4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57l4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1 1 0 0 0 .15-.09a.8.8 0 0 0 .14-.17a1 1 0 0 0 .09-.14a.6.6 0 0 0 .05-.17A.8.8 0 0 0 21 17Z"></svg:path>`,
})
export class EvaTrendingDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaTrendingUpFillIcon],svg[eva-trending-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7a.8.8 0 0 0 0-.21a.6.6 0 0 0-.05-.17a1 1 0 0 0-.09-.14a.8.8 0 0 0-.14-.17l-.12-.07a.7.7 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71l-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34l4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0z"></svg:path>`,
})
export class EvaTrendingUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaTvFillIcon],svg[eva-tv-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class EvaTvFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaTwitterFillIcon],svg[eva-twitter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.1 8.1 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"></svg:path>`,
})
export class EvaTwitterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaUmbrellaFillIcon],svg[eva-umbrella-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0a1 1 0 0 0-2 0a1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2"></svg:path>`,
})
export class EvaUmbrellaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaUndoFillIcon],svg[eva-undo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.22 21a1 1 0 0 1-1-.76a8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3a1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.3 10.3 0 0 1-.31 2.49a1 1 0 0 1-1 .76Z"></svg:path>`,
})
export class EvaUndoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaUnlockFillIcon],svg[eva-unlock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="15" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 8h-7V6a2 2 0 0 1 4 0a1 1 0 0 0 2 0a4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-5 10a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class EvaUnlockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaUploadFillIcon],svg[eva-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16" height="2" x="4" y="4" fill="currentColor" rx="1" ry="1" transform="rotate(180 12 5)"></svg:rect><svg:rect width="4" height="2" x="17" y="5" fill="currentColor" rx="1" ry="1" transform="rotate(90 19 6)"></svg:rect><svg:rect width="4" height="2" x="3" y="5" fill="currentColor" rx="1" ry="1" transform="rotate(90 5 6)"></svg:rect><svg:path fill="currentColor" d="M8 14a1 1 0 0 1-.8-.4a1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39a1 1 0 0 1-1.4.24L12 11.24L8.6 13.8a1 1 0 0 1-.6.2"></svg:path><svg:path fill="currentColor" d="M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaVideoFillIcon],svg[eva-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45a1.7 1.7 0 0 0 .69-.15a1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15"></svg:path>`,
})
export class EvaVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaVideoOffFillIcon],svg[eva-video-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.22 17.05L4.88 7.71L3.12 6L3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51ZM21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l1.29 1.29l6.59 6.59l2 2l2 2a1.7 1.7 0 0 0 .6.11a1.7 1.7 0 0 0 .69-.15a1.6 1.6 0 0 0 1-1.48V8.63a1.6 1.6 0 0 0-1-1.48m-4 8.44l-2-2L8.41 7l-2-2l-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34l1.46 1.46l2.9 2.91a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaVideoOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaVolumeDownFillIcon],svg[eva-volume-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.78 8.37a1 1 0 1 0-1.56 1.26a4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37a6 6 0 0 0 0-7.26m-4.31-5.25a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88"></svg:path>`,
})
export class EvaVolumeDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaVolumeMuteFillIcon],svg[eva-volume-mute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaVolumeMuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaVolumeOffFillIcon],svg[eva-volume-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15a1 1 0 1 0-1.56 1.26a4 4 0 0 1 .19 4.45"></svg:path><svg:path fill="currentColor" d="M21 12a6.5 6.5 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12m-6 .17V4a1 1 0 0 0-1.57-.83L9 6.2ZM4.74 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1v-2.17Zm-.03-4.28a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></svg:path>`,
})
export class EvaVolumeOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaVolumeUpFillIcon],svg[eva-volume-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.28 8.37a1 1 0 1 0-1.56 1.26a4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37a6 6 0 0 0 0-7.26"></svg:path><svg:path fill="currentColor" d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23a1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77m-5.17-2.11a1 1 0 0 0-1 0L7 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88"></svg:path>`,
})
export class EvaVolumeUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaWifiFillIcon],svg[eva-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="19" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 14a5 5 0 0 0-3.47 1.4a1 1 0 1 0 1.39 1.44a3.08 3.08 0 0 1 4.16 0a1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14m0-5a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0a1 1 0 0 0 .71.3a1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9"></svg:path><svg:path fill="currentColor" d="M21.72 7.93a14 14 0 0 0-19.44 0a1 1 0 0 0 1.38 1.44a12 12 0 0 1 16.68 0a1 1 0 0 0 .69.28a1 1 0 0 0 .72-.31a1 1 0 0 0-.03-1.41"></svg:path>`,
})
export class EvaWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[evaWifiOffFillIcon],svg[eva-wifi-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="19" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m12.44 11l-1.9-1.89l-2.46-2.44l-1.55-1.55l-1.82-1.83a1 1 0 0 0-1.42 1.42l1.38 1.37l1.46 1.46l2.23 2.24l1.55 1.54l2.74 2.74l2.79 2.8l3.85 3.85a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Zm9.28-3.07A13.93 13.93 0 0 0 12 4a14.1 14.1 0 0 0-4.44.73l1.62 1.62a11.89 11.89 0 0 1 11.16 3a1 1 0 0 0 .69.28a1 1 0 0 0 .72-.31a1 1 0 0 0-.03-1.39M3.82 6.65a14 14 0 0 0-1.54 1.28a1 1 0 0 0 1.38 1.44a13 13 0 0 1 1.6-1.29ZM17 13.14a1 1 0 0 0 .71.3a1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9h-.16l2.35 2.35A7 7 0 0 1 17 13.14m-9.57-2.88a8.8 8.8 0 0 0-1.9 1.49A1 1 0 0 0 7 13.14a7.3 7.3 0 0 1 2-1.41Zm1.1 5.14a1 1 0 1 0 1.39 1.44a3.06 3.06 0 0 1 3.84-.25l-2.52-2.52a5 5 0 0 0-2.71 1.33"></svg:path>`,
})
export class EvaWifiOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
