import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAccountBoxIcon],svg[memory-account-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h14v1h1v1h1v14h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1zm0 14h1v-1h2v-1h8v1h2v1h1V5h-1V4H5v1H4zm12 2v-1h-2v-1H8v1H6v1zM9 5h4v1h1v1h1v4h-1v1h-1v1H9v-1H8v-1H7V7h1V6h1zm3 3V7h-2v1H9v2h1v1h2v-1h1V8z"></svg:path>`,
})
export class MemoryAccountBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertIcon],svg[memory-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H2v-1H1v-4h1v-2h1v-2h1V9h1V7h1V5h1V3h1V2h6v1h1v2h1v2h1v2h1v2h1v2h1v2h1v4h-1zM9 6H8v2H7v2H6v2H5v2H4v2H3v2h16v-2h-1v-2h-1v-2h-1v-2h-1V8h-1V6h-1V4H9zm1 1h2v6h-2zm0 7h2v2h-2z"></svg:path>`,
})
export class MemoryAlertIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertBoxIcon],svg[memory-alert-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h-2V6h2m0 10h-2v-2h2m6 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryAlertBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAccountIcon],svg[memory-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3h4v1h1v1h1v4h-1v1h-1v1H9v-1H8V9H7V5h1V4h1zm1 5v1h2V8h1V6h-1V5h-2v1H9v2zm-3 4h8v1h2v1h1v1h1v4H3v-4h1v-1h1v-1h2zm-1 4H5v1h12v-1h-1v-1h-2v-1H8v1H6z"></svg:path>`,
})
export class MemoryAccountIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertBoxFillIcon],svg[memory-alert-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-6-8V6h-2v6Zm0 4v-2h-2v2Z"></svg:path>`,
})
export class MemoryAlertBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertCircleIcon],svg[memory-alert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h-2V6h2Zm0 4h-2v-2h2Zm3 5H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2Zm-1-2v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1Z"></svg:path>`,
})
export class MemoryAlertCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertHexagonIcon],svg[memory-alert-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h-2V6h2m0 10h-2v-2h2m0 7h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-1v-1h2v-1h2v-1h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v10h2v1h2v1h2v1Z"></svg:path>`,
})
export class MemoryAlertHexagonIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertOctagonIcon],svg[memory-alert-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h1V5h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1V7h1zm13 11h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5h-1V4h-1V3H8v1H7v1H6v1H5v1H4v1H3v6h1v1h1v1h1v1h1v1h1v1h6v-1h1zM10 6h2v7h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class MemoryAlertOctagonIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertRhombusIcon],svg[memory-alert-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h-2V6h2Zm0 4h-2v-2h2Zm0 5h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-2h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1Zm0-3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-2v1H9v1H8v1H7v1H6v1H5v1H4v2h1v1h1v1h1v1h1v1h1v1h1v1Z"></svg:path>`,
})
export class MemoryAlertRhombusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlertRhombusFillIcon],svg[memory-alert-rhombus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-2h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1Zm0-9V6h-2v6Zm0 4v-2h-2v2Z"></svg:path>`,
})
export class MemoryAlertRhombusFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalCenterIcon],svg[memory-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20h-2v-4H6v-4h4v-2H4V6h6V2h2v4h6v4h-6v2h4v4h-4Z"></svg:path>`,
})
export class MemoryAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalDistributeIcon],svg[memory-align-horizontal-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16H8V6h6M4 20H2V2h2m16 18h-2V2h2Z"></svg:path>`,
})
export class MemoryAlignHorizontalDistributeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalLeftIcon],svg[memory-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10H6V6h12m-4 10H6v-4h8M4 20H2V2h2Z"></svg:path>`,
})
export class MemoryAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalRightIcon],svg[memory-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H4V6h12m0 10H8v-4h8m4 8h-2V2h2Z"></svg:path>`,
})
export class MemoryAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignVerticalBottomIcon],svg[memory-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16H6V4h4m6 12h-4V8h4m4 12H2v-2h18Z"></svg:path>`,
})
export class MemoryAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignVerticalCenterIcon],svg[memory-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18H6v-6H2v-2h4V4h4v6h2V6h4v4h4v2h-4v4h-4v-4h-2Z"></svg:path>`,
})
export class MemoryAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignVerticalDistributeIcon],svg[memory-align-vertical-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2V2h18m-4 12H6V8h10m4 12H2v-2h18Z"></svg:path>`,
})
export class MemoryAlignVerticalDistributeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignVerticalTopIcon],svg[memory-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2V2h18m-4 12h-4V6h4m-6 12H6V6h4Z"></svg:path>`,
})
export class MemoryAlignVerticalTopIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaAIcon],svg[memory-alpha-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zm-1 3v1h1v9h-2v-4h-2v4H8V7h1V6zm-1 2h-2v2h2z"></svg:path>`,
})
export class MemoryAlphaAIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaAFillIcon],svg[memory-alpha-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8h2v2h-2zm5-7v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-2 5H9v1H8v9h2v-4h2v4h2V7h-1z"></svg:path>`,
})
export class MemoryAlphaAFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaBIcon],svg[memory-alpha-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h5v1h1v3h-1v2h1v3h-1v1H8zm2 2v2h2V8zm2 4h-2v2h2z"></svg:path>`,
})
export class MemoryAlphaBIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaBFillIcon],svg[memory-alpha-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h5v-1h1v-3h-1v-2h1V7h-1V6zm2 2h2v2h-2zm2 4v2h-2v-2z"></svg:path>`,
})
export class MemoryAlphaBFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaCIcon],svg[memory-alpha-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM9 6h4v1h1v2h-2V8h-2v6h2v-1h2v2h-1v1H9v-1H8V7h1z"></svg:path>`,
})
export class MemoryAlphaCIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaCFillIcon],svg[memory-alpha-c-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM9 6v1H8v8h1v1h4v-1h1v-2h-2v1h-2V8h2v1h2V7h-1V6z"></svg:path>`,
})
export class MemoryAlphaCFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaDIcon],svg[memory-alpha-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h5v1h1v1h1v6h-1v1h-1v1H8zm2 2v6h2v-1h1V9h-1V8z"></svg:path>`,
})
export class MemoryAlphaDIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaDFillIcon],svg[memory-alpha-d-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h5v-1h1v-1h1V8h-1V7h-1V6zm2 2h2v1h1v4h-1v1h-2z"></svg:path>`,
})
export class MemoryAlphaDFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaEIcon],svg[memory-alpha-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h6v2h-4v2h4v2h-4v2h4v2H8z"></svg:path>`,
})
export class MemoryAlphaEIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaEFillIcon],svg[memory-alpha-e-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h6v-2h-4v-2h4v-2h-4V8h4V6z"></svg:path>`,
})
export class MemoryAlphaEFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaFIcon],svg[memory-alpha-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h6v2h-4v2h3v2h-3v4H8z"></svg:path>`,
})
export class MemoryAlphaFIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaFFillIcon],svg[memory-alpha-f-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h2v-4h3v-2h-3V8h4V6z"></svg:path>`,
})
export class MemoryAlphaFFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaGIcon],svg[memory-alpha-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM9 6h5v2h-4v6h2v-2h-1v-2h3v5h-1v1H9v-1H8V7h1z"></svg:path>`,
})
export class MemoryAlphaGIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaGFillIcon],svg[memory-alpha-g-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM9 6v1H8v8h1v1h4v-1h1v-5h-3v2h1v2h-2V8h4V6z"></svg:path>`,
})
export class MemoryAlphaGFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaHIcon],svg[memory-alpha-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h2v4h2V6h2v10h-2v-4h-2v4H8z"></svg:path>`,
})
export class MemoryAlphaHIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaHFillIcon],svg[memory-alpha-h-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h2v-4h2v4h2V6h-2v4h-2V6z"></svg:path>`,
})
export class MemoryAlphaHFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaIIcon],svg[memory-alpha-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zm-1 3v2h-1v6h1v2H9v-2h1V8H9V6z"></svg:path>`,
})
export class MemoryAlphaIIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaIFillIcon],svg[memory-alpha-i-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-2 5H9v2h1v6H9v2h4v-2h-1V8h1z"></svg:path>`,
})
export class MemoryAlphaIFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaJIcon],svg[memory-alpha-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zm-2 3h2v9h-1v1H9v-1H8v-2h2v1h2z"></svg:path>`,
})
export class MemoryAlphaJIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaJFillIcon],svg[memory-alpha-j-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-3 5v8h-2v-1H8v2h1v1h4v-1h1V6z"></svg:path>`,
})
export class MemoryAlphaJFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaKIcon],svg[memory-alpha-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h2v2h1V7h1V6h2v2h-1v1h-1v1h-1v1h1v1h1v1h1v3h-2v-2h-1v-1h-1v3H8z"></svg:path>`,
})
export class MemoryAlphaKIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaKFillIcon],svg[memory-alpha-k-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h2v-3h1v1h1v2h2v-3h-1v-1h-1v-1h-1v-1h1V9h1V8h1V6h-2v1h-1v1h-1V6z"></svg:path>`,
})
export class MemoryAlphaKFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaLIcon],svg[memory-alpha-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h2v8h4v2H8z"></svg:path>`,
})
export class MemoryAlphaLIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaLFillIcon],svg[memory-alpha-l-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h6v-2h-4V6z"></svg:path>`,
})
export class MemoryAlphaLFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaMIcon],svg[memory-alpha-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM7 6h8v1h1v9h-2V8h-2v7h-2V8H8v8H6V7h1z"></svg:path>`,
})
export class MemoryAlphaMIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaMFillIcon],svg[memory-alpha-m-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM7 6v1H6v9h2V8h2v7h2V8h2v8h2V7h-1V6z"></svg:path>`,
})
export class MemoryAlphaMFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaNIcon],svg[memory-alpha-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h2v2h1v2h1V6h2v10h-2v-2h-1v-2h-1v4H8z"></svg:path>`,
})
export class MemoryAlphaNIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaNFillIcon],svg[memory-alpha-n-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h2v-4h1v2h1v2h2V6h-2v4h-1V8h-1V6z"></svg:path>`,
})
export class MemoryAlphaNFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaOIcon],svg[memory-alpha-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM9 6h4v1h1v8h-1v1H9v-1H8V7h1zm1 2v6h2V8z"></svg:path>`,
})
export class MemoryAlphaOIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaOFillIcon],svg[memory-alpha-o-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM9 6v1H8v8h1v1h4v-1h1V7h-1V6zm1 2h2v6h-2z"></svg:path>`,
})
export class MemoryAlphaOFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaPIcon],svg[memory-alpha-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h5v1h1v4h-1v1h-3v4H8zm2 2v2h2V8z"></svg:path>`,
})
export class MemoryAlphaPIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaPFillIcon],svg[memory-alpha-p-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h2v-4h3v-1h1V7h-1V6zm2 2h2v2h-2z"></svg:path>`,
})
export class MemoryAlphaPFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaQIcon],svg[memory-alpha-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM9 6h4v1h1v8h1v1h-1v1h-1v-1h-1v-1h-1v1H9v-1H8V7h1zm1 2v6h1v-1h1V8z"></svg:path>`,
})
export class MemoryAlphaQIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaQFillIcon],svg[memory-alpha-q-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM9 6v1H8v8h1v1h2v-1h1v1h1v1h1v-1h1v-1h-1V7h-1V6zm1 2h2v5h-1v1h-1z"></svg:path>`,
})
export class MemoryAlphaQFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaRIcon],svg[memory-alpha-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h5v1h1v4h-1v2h1v3h-2v-2h-1v-2h-1v4H8zm2 2v2h2V8z"></svg:path>`,
})
export class MemoryAlphaRIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaRFillIcon],svg[memory-alpha-r-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v10h2v-4h1v2h1v2h2v-3h-1v-2h1V7h-1V6zm2 2h2v2h-2z"></svg:path>`,
})
export class MemoryAlphaRFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaSIcon],svg[memory-alpha-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM9 6h5v2h-4v2h3v1h1v4h-1v1H8v-2h4v-2H9v-1H8V7h1z"></svg:path>`,
})
export class MemoryAlphaSIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaSFillIcon],svg[memory-alpha-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM9 6v1H8v4h1v1h3v2H8v2h5v-1h1v-4h-1v-1h-3V8h4V6z"></svg:path>`,
})
export class MemoryAlphaSFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaTIcon],svg[memory-alpha-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h6v2h-2v8h-2V8H8z"></svg:path>`,
})
export class MemoryAlphaTIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaTFillIcon],svg[memory-alpha-t-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v2h2v8h2V8h2V6z"></svg:path>`,
})
export class MemoryAlphaTFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaUIcon],svg[memory-alpha-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h2v8h2V6h2v9h-1v1H9v-1H8z"></svg:path>`,
})
export class MemoryAlphaUIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaUFillIcon],svg[memory-alpha-u-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v9h1v1h4v-1h1V6h-2v8h-2V6z"></svg:path>`,
})
export class MemoryAlphaUFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaVIcon],svg[memory-alpha-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM7 6h2v3h1v2h2V9h1V6h2v4h-1v2h-1v2h-1v2h-2v-2H9v-2H8v-2H7z"></svg:path>`,
})
export class MemoryAlphaVIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaVFillIcon],svg[memory-alpha-v-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM7 6v4h1v2h1v2h1v2h2v-2h1v-2h1v-2h1V6h-2v3h-1v2h-2V9H9V6z"></svg:path>`,
})
export class MemoryAlphaVFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaWIcon],svg[memory-alpha-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM6 6h2v6h1v1h1V8h2v5h1v-1h1V6h2v7h-1v2h-1v1h-2v-1h-2v1H8v-1H7v-2H6z"></svg:path>`,
})
export class MemoryAlphaWIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaWFillIcon],svg[memory-alpha-w-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM6 6v7h1v2h1v1h2v-1h2v1h2v-1h1v-2h1V6h-2v6h-1v1h-1V8h-2v5H9v-1H8V6z"></svg:path>`,
})
export class MemoryAlphaWFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaXIcon],svg[memory-alpha-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zm-1 13v-2h-1v-1h-2v1H9v2H7v-3h1v-1h1v-2H8V9H7V6h2v2h1v1h2V8h1V6h2v3h-1v1h-1v2h1v1h1v3z"></svg:path>`,
})
export class MemoryAlphaXIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaXFillIcon],svg[memory-alpha-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-2 15h2v-3h-1v-1h-1v-2h1V9h1V6h-2v2h-1v1h-2V8H9V6H7v3h1v1h1v2H8v1H7v3h2v-2h1v-1h2v1h1z"></svg:path>`,
})
export class MemoryAlphaXFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaYIcon],svg[memory-alpha-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM7 6h2v2h1v2h2V8h1V6h2v3h-1v2h-1v2h-1v3h-2v-3H9v-2H8V9H7z"></svg:path>`,
})
export class MemoryAlphaYIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaYFillIcon],svg[memory-alpha-y-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM7 6v3h1v2h1v2h1v3h2v-3h1v-2h1V9h1V6h-2v2h-1v2h-2V8H9V6z"></svg:path>`,
})
export class MemoryAlphaYFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaZIcon],svg[memory-alpha-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zM8 6h6v4h-1v1h-1v1h-1v1h-1v1h4v2H8v-4h1v-1h1v-1h1V9h1V8H8z"></svg:path>`,
})
export class MemoryAlphaZIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlphaZFillIcon],svg[memory-alpha-z-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zM8 6v2h4v1h-1v1h-1v1H9v1H8v4h6v-2h-4v-1h1v-1h1v-1h1v-1h1V6z"></svg:path>`,
})
export class MemoryAlphaZFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAnvilIcon],svg[memory-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11H4v-1H2V8H1V6h5m14 13H3v-2h1v-1h2v-1h1v-1h1v-3H7V5h13v3h-2v1h-1v1h-1v1h-1v3h1v1h1v1h2v1h1Z"></svg:path>`,
})
export class MemoryAnvilIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryApplicationIcon],svg[memory-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-1H2V3h1V2h16v1h1v16h-1ZM18 6V4H4v2Zm0 12V8H4v10Z"></svg:path>`,
})
export class MemoryApplicationIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryApplicationCodeIcon],svg[memory-application-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16H9v-1H8v-4h1v-1h2v2h-1v2h1m4 2h-2v-2h1v-2h-1v-2h2v1h1v4h-1m4 5H3v-1H2V3h1V2h16v1h1v16h-1M18 6V4H4v2m14 12V8H4v10Z"></svg:path>`,
})
export class MemoryApplicationCodeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAppsIcon],svg[memory-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H3V3h4m6 4H9V3h4m6 4h-4V3h4M7 13H3V9h4m6 4H9V9h4m6 4h-4V9h4M7 19H3v-4h4m6 4H9v-4h4m6 4h-4v-4h4Z"></svg:path>`,
})
export class MemoryAppsIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAppsBoxIcon],svg[memory-apps-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8H6V6h2m4 2h-2V6h2m4 2h-2V6h2m-8 6H6v-2h2m4 2h-2v-2h2m4 2h-2v-2h2m-8 6H6v-2h2m4 2h-2v-2h2m4 2h-2v-2h2m2 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryAppsBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAppsBoxFillIcon],svg[memory-apps-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1M8 8V6H6v2m6 0V6h-2v2m6 0V6h-2v2m-6 4v-2H6v2m6 0v-2h-2v2m6 0v-2h-2v2m-6 4v-2H6v2m6 0v-2h-2v2m6 0v-2h-2v2Z"></svg:path>`,
})
export class MemoryAppsBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArchiveIcon],svg[memory-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v6h-1v12H3V8H2zm15 16V8H5v10zM4 4v2h14V4zm3 6h8v2H7z"></svg:path>`,
})
export class MemoryArchiveIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowIcon],svg[memory-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h-3v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H3v1H2v1H1v1h1v1h1v1h1v1h1v-1h1v-1h1v-3h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h2"></svg:path>`,
})
export class MemoryArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowBottomLeftIcon],svg[memory-arrow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17H5V8h2v5h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h5z"></svg:path>`,
})
export class MemoryArrowBottomLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowBottomLeftCircleIcon],svg[memory-arrow-bottom-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2zm4 1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2zm9-1H7V8h2v3h1v-1h1V9h1V8h1V7h1v1h1v1h-1v1h-1v1h-1v1h-1v1h3z"></svg:path>`,
})
export class MemoryArrowBottomLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowBottomRightIcon],svg[memory-arrow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8v9H8v-2h5v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V8H6V7h1V6h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1V8z"></svg:path>`,
})
export class MemoryArrowBottomRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowBottomRightCircleIcon],svg[memory-arrow-bottom-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2zm1-4h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2zm-1-9v7H8v-2h3v-1h-1v-1H9v-1H8V9H7V8h1V7h1v1h1v1h1v1h1v1h1V8z"></svg:path>`,
})
export class MemoryArrowBottomRightCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownIcon],svg[memory-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h-2v-1H9v-1H8v-1H7v-1H6v-2h2v1h1v1h1V4h2v9h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1"></svg:path>`,
})
export class MemoryArrowDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownBoldIcon],svg[memory-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2h5V2h8v8zm-4 2h-3V4H9v8H6v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1z"></svg:path>`,
})
export class MemoryArrowDownBoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownBoxIcon],svg[memory-arrow-down-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-2v-1H9v-1H8v-1H7v-1H6v-2h2v1h1v1h1V6h2v6h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1m6 5H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowDownBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownCircleIcon],svg[memory-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10v2h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-2h2v1h1v1h1V6h2v6h1v-1h1v-1zm5-3v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2zm-4-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6z"></svg:path>`,
})
export class MemoryArrowDownCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownLeftIcon],svg[memory-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v2h1v1h1v1h1v1h1v1h2v-2H8v-1H7v-1h4v-1h2v-1h1v-2h1V3h-2v6h-1v2h-2v1H7v-1h1v-1h1V8H7v1H6v1H5v1H4v1"></svg:path>`,
})
export class MemoryArrowDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownLeftBoxIcon],svg[memory-arrow-down-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15H7V8h2v3h1v-1h1V9h1V8h1V7h1v1h1v1h-1v1h-1v1h-1v1h-1v1h3m4 7H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowDownLeftBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownRightIcon],svg[memory-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1h-4v-1H9v-1H8v-2H7V3h2v6h1v2h2v1h3v-1h-1v-1h-1V8h2v1h1v1h1v1h1v1"></svg:path>`,
})
export class MemoryArrowDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownRightBoxIcon],svg[memory-arrow-down-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15H8v-2h3v-1h-1v-1H9v-1H8V9H7V8h1V7h1v1h1v1h1v1h1v1h1V8h2m3 12H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowDownRightBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftIcon],svg[memory-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12v-2h1V9h1V8h1V7h1V6h2v2h-1v1H9v1h9v2H9v1h1v1h1v2H9v-1H8v-1H7v-1H6v-1"></svg:path>`,
})
export class MemoryArrowLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftBoldIcon],svg[memory-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h2v5h8v8h-8zm-2-4v-3h8V9h-8V6H9v1H8v1H7v1H6v1H5v2h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class MemoryArrowLeftBoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftBoxIcon],svg[memory-arrow-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-2v-1H9v-1H8v-1H7v-1H6v-2h1V9h1V8h1V7h1V6h2v2h-1v1h-1v1h6v2h-6v1h1v1h1m6 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowLeftBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftCircleIcon],svg[memory-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-2v-1H9v-1H8v-1H7v-1H6v-2h1V9h1V8h1V7h1V6h2v2h-1v1h-1v1h6v2h-6v1h1v1h1zm3 5H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2zm1-4h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2z"></svg:path>`,
})
export class MemoryArrowLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftDownIcon],svg[memory-arrow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19H8v-1H7v-1H6v-1H5v-1H4v-2h2v1h1v1h1v-4h1V9h1V8h2V7h7v2h-6v1h-2v2h-1v3h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1"></svg:path>`,
})
export class MemoryArrowLeftDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftRightIcon],svg[memory-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1H7v1h1v1h1v2H7v-1H6v-1H5v-1H4v-1H3v-2h1V9h1V8h1V7h1V6h2v2H8v1H7v1h8V9h-1V8h-1V6h2v1h1v1h1v1h1v1"></svg:path>`,
})
export class MemoryArrowLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowLeftUpIcon],svg[memory-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H8v1H7v1H6v1H5v1H4v2h2V8h1V7h1v4h1v2h1v1h2v1h7v-2h-6v-1h-2v-2h-1V7h1v1h1v1h2V7h-1V6h-1V5h-1V4h-1"></svg:path>`,
})
export class MemoryArrowLeftUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightIcon],svg[memory-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1H4v-2h9V9h-1V8h-1V6h2v1h1v1h1v1h1v1"></svg:path>`,
})
export class MemoryArrowRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightBoldIcon],svg[memory-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-5H2V7h8zm2 4v3H4v4h8v3h1v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6z"></svg:path>`,
})
export class MemoryArrowRightBoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightBoxIcon],svg[memory-arrow-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-2v-2h1v-1h1v-1H6v-2h6V9h-1V8h-1V6h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1m6 5H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowRightBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightCircleIcon],svg[memory-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2zM6 5H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6zm4 1h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1H6v-2h6V9h-1V8h-1z"></svg:path>`,
})
export class MemoryArrowRightCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightDownIcon],svg[memory-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19h2v-1h1v-1h1v-1h1v-1h1v-2h-2v1h-1v1h-1v-4h-1V9h-1V8h-2V7H3v2h6v1h2v2h1v3h-1v-1h-1v-1H8v2h1v1h1v1h1v1h1"></svg:path>`,
})
export class MemoryArrowRightDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightUpIcon],svg[memory-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3h2v1h1v1h1v1h1v1h1v2h-2V8h-1V7h-1v4h-1v2h-1v1h-2v1H3v-2h6v-1h2v-2h1V7h-1v1h-1v1H8V7h1V6h1V5h1V4h1"></svg:path>`,
})
export class MemoryArrowRightUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowTopLeftIcon],svg[memory-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14V5h9v2H9v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7v5z"></svg:path>`,
})
export class MemoryArrowTopLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowTopLeftCircleIcon],svg[memory-arrow-top-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2zM6 5H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6zm1 9V7h7v2h-3v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1H9v3z"></svg:path>`,
})
export class MemoryArrowTopLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowTopRightIcon],svg[memory-arrow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5h9v9h-2V9h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v-1H6v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7H8z"></svg:path>`,
})
export class MemoryArrowTopRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowTopRightCircleIcon],svg[memory-arrow-top-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2zm-4-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6zM8 7h7v7h-2v-3h-1v1h-1v1h-1v1H9v1H8v-1H7v-1h1v-1h1v-1h1v-1h1V9H8z"></svg:path>`,
})
export class MemoryArrowTopRightCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpIcon],svg[memory-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h2v1h1v1h1v1h1v1h1v2h-2v-1h-1V9h-1v9h-2V9H9v1H8v1H6V9h1V8h1V7h1V6h1"></svg:path>`,
})
export class MemoryArrowUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpBoldIcon],svg[memory-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v-2h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-5v8H7v-8zm4-2h3v8h4v-8h3V9h-1V8h-1V7h-1V6h-1V5h-2v1H9v1H8v1H7v1H6z"></svg:path>`,
})
export class MemoryArrowUpBoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpBoxIcon],svg[memory-arrow-up-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-2v-6H9v1H8v1H6v-2h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1m6 10H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowUpBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpCircleIcon],svg[memory-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12v-2h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v6h-2v-6H9v1H8v1zm-5 3V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2zm4 1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2z"></svg:path>`,
})
export class MemoryArrowUpCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpDownIcon],svg[memory-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h2v1h1v1h1v1h1v1h1v2h-2V8h-1V7h-1v8h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-2h2v1h1v1h1V7H9v1H8v1H6V7h1V6h1V5h1V4h1"></svg:path>`,
})
export class MemoryArrowUpDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpLeftIcon],svg[memory-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10V8h1V7h1V6h1V5h1V4h2v2H8v1H7v1h4v1h2v1h1v2h1v7h-2v-6h-1v-2h-2v-1H7v1h1v1h1v2H7v-1H6v-1H5v-1H4v-1"></svg:path>`,
})
export class MemoryArrowUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpLeftBoxIcon],svg[memory-arrow-up-left-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h-1v-1h-1v-1h-1v-1h-1v-1H9v3H7V7h7v2h-3v1h1v1h1v1h1v1h1v1h-1m4 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowUpLeftBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpRightIcon],svg[memory-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10V8h-1V7h-1V6h-1V5h-1V4h-2v2h1v1h1v1h-4v1H9v1H8v2H7v7h2v-6h1v-2h2v-1h3v1h-1v1h-1v2h2v-1h1v-1h1v-1h1v-1"></svg:path>`,
})
export class MemoryArrowUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryArrowUpRightBoxIcon],svg[memory-arrow-up-right-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15H8v-1H7v-1h1v-1h1v-1h1v-1h1V9H8V7h7v7h-2v-3h-1v1h-1v1h-1v1H9m9 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryArrowUpRightBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAspectRatioIcon],svg[memory-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h-2V8h-2V6h4M9 16H5v-4h2v2h2m10 5H3v-1H2V4h1V3h16v1h1v14h-1m-1-1V5H4v12Z"></svg:path>`,
})
export class MemoryAspectRatioIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAxeIcon],svg[memory-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v1h1v1h1v1h2v1h2v1h1v1h1v2h-1v2h-1v1h-1v1h-2v1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1V9H9V8H8V6h1V5h1V4h1m-1 6v1h1v2h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1"></svg:path>`,
})
export class MemoryAxeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBagPersonalIcon],svg[memory-bag-personal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15H9v2H7v-2H5v4h12zm0-6h-1V8h-1V7H7v1H6v1H5v4h12zm-4 2H9v-1h1V9h2v1h1zM3 8h1V6h2V5h1V2h1V1h6v1h1v3h1v1h2v2h1v12h-1v1H4v-1H3zm6-5v2h4V3z"></svg:path>`,
})
export class MemoryBagPersonalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBagPersonalFillIcon],svg[memory-bag-personal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h1V6h2V5h1V2h1V1h6v1h1v3h1v1h2v2h1v12h-1v1H4v-1H3zm6-5v2h4V3zm8 11H5v1h2v2h1v-2h9zm-5-3h1V9h-1V8h-2v1H9v2h1v1h2z"></svg:path>`,
})
export class MemoryBagPersonalFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBankIcon],svg[memory-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19H2v-2h2V9H2V7h1V6h2V5h2V4h2V3h4v1h2v1h2v1h2v1h1v2h-2v8h2m-3-8V7h-2V6h-2V5H9v1H7v1H5v2m3 8v-6H6v6m6 0v-6h-2v6m6 0v-6h-2v6Z"></svg:path>`,
})
export class MemoryBankIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBarcodeIcon],svg[memory-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17H2V5h2m2 12H5V5h1m4 12H7V5h3m2 12h-1V5h1m3 12h-2V5h2m2 12h-1V5h1m3 12h-2V5h2Z"></svg:path>`,
})
export class MemoryBarcodeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBattery0Icon],svg[memory-battery-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h15v1h1v3h1v4h-1v3h-1v1H3v-1H2V6h1zm1 2v8h13V7z"></svg:path>`,
})
export class MemoryBattery0Icon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBattery100Icon],svg[memory-battery-100-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h2v6H5zm3 0h2v6H8zm10-3v1h1v3h1v4h-1v3h-1v1H3v-1H2V6h1V5zm-1 2H4v8h13zm-6 1h2v6h-2zm3 0h2v6h-2z"></svg:path>`,
})
export class MemoryBattery100Icon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBattery25Icon],svg[memory-battery-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8v6H5V8zm11-3v1h1v3h1v4h-1v3h-1v1H3v-1H2V6h1V5zm-1 2H4v8h13z"></svg:path>`,
})
export class MemoryBattery25Icon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBattery50Icon],svg[memory-battery-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h2v6H5zm3 0h2v6H8zm10-3v1h1v3h1v4h-1v3h-1v1H3v-1H2V6h1V5zm-1 2H4v8h13z"></svg:path>`,
})
export class MemoryBattery50Icon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBattery75Icon],svg[memory-battery-75-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h2v6H5zm3 0h2v6H8zm10-3v1h1v3h1v4h-1v3h-1v1H3v-1H2V6h1V5zm-1 2H4v8h13zm-6 1h2v6h-2z"></svg:path>`,
})
export class MemoryBattery75Icon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBattleAxeIcon],svg[memory-battle-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1h-4v1h-1v1H9v1H8v4h4v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v4h4v-1h1v-1h1v-1h1V7h-4V5h-2"></svg:path>`,
})
export class MemoryBattleAxeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBeerIcon],svg[memory-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15H7V8h2m3 7h-2V8h2m3 11H4V3h11v4h3v1h1v8h-1v1h-3m2-2V9h-2v6m-2 2V6H6v11Z"></svg:path>`,
})
export class MemoryBeerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBellIcon],svg[memory-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17H3v-1h1v-1h1V7h1V6h1V5h2V4h1V2h2v2h1v1h2v1h1v1h1v8h1v1h1m-7 4h-2v-1H9v-1h4v1h-1m3-4V8h-1V7h-1V6H9v1H8v1H7v7Z"></svg:path>`,
})
export class MemoryBellIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBloodIcon],svg[memory-blood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h1v-2H5Zm1 1h1v-1H6Zm8 4H8v-1H6v-1H5v-1H4v-2H3v-3h1v-1h1v-2h1V9h1V7h1V5h1V3h1V1h2v2h1v2h1v2h1v2h1v1h1v2h1v1h1v3h-1v2h-1v1h-1v1h-2Zm-5-3v-1H7v1Zm3 1v-1H9v1Z"></svg:path>`,
})
export class MemoryBloodIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBookIcon],svg[memory-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h1V1h14v1h1v18h-1v1H4v-1H3zm8 7h-1V8H9v1H8v1H7V3H5v16h12V3h-5v7h-1z"></svg:path>`,
})
export class MemoryBookIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBookmarkIcon],svg[memory-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h12v1h1v17h-2v-1h-2v-1h-2v-1h-2v1H8v1H6v1H4V3h1zm1 2v13h1v-1h2v-1h1v-1h2v1h1v1h2v1h1V4z"></svg:path>`,
})
export class MemoryBookmarkIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderBottomIcon],svg[memory-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12h-2v-2h2zM4 12H2v-2h2zm8-8h-2V2h2zm4 0h-2V2h2zm4 4h-2V6h2zm0-4h-2V2h2zm0 12h-2v-2h2zM4 16H2v-2h2zM8 4H6V2h2zM4 4H2V2h2zm0 4H2V6h2zm16 12H2v-2h18z"></svg:path>`,
})
export class MemoryBorderBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderBottomLeftIcon],svg[memory-border-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V2h2v2zm8 8v-2h2v2zm0 4v-2h2v2zM6 4V2h2v2zm12 4V6h2v2zm0-4V2h2v2zm-4 0V2h2v2zM2 20V2h2v16h16v2z"></svg:path>`,
})
export class MemoryBorderBottomLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderBottomLeftRightIcon],svg[memory-border-bottom-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V2h2v2zM6 4V2h2v2zm8 0V2h2v2zm4-2h2v18H2V2h2v16h14z"></svg:path>`,
})
export class MemoryBorderBottomLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderBottomRightIcon],svg[memory-border-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12H2v-2h2zm8-8h-2V2h2zm4 0h-2V2h2zM4 16H2v-2h2zM8 4H6V2h2zM4 4H2V2h2zm0 4H2V6h2zm16 12H2v-2h16V2h2z"></svg:path>`,
})
export class MemoryBorderBottomRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderInsideIcon],svg[memory-border-inside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h8V2h2v8h8v2h-8v8h-2v-8H2zm4 8h2v2H6zm-4-4h2v2H2zm0 4h2v2H2zM2 2h2v2H2zm0 4h2v2H2zm4-4h2v2H6zm8 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 12h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MemoryBorderInsideIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderLeftIcon],svg[memory-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-2h2v2zm0-16V2h2v2zm8 8v-2h2v2zm0 4v-2h2v2zm-4 4v-2h2v2zm4 0v-2h2v2zM6 20v-2h2v2zM6 4V2h2v2zm12 4V6h2v2zm0-4V2h2v2zm-4 0V2h2v2zM2 20V2h2v18z"></svg:path>`,
})
export class MemoryBorderLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderLeftRightIcon],svg[memory-border-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v2h-2V2zm0 16v2h-2v-2zM8 2v2H6V2zm8 0v2h-2V2zm0 16v2h-2v-2zm-8 0v2H6v-2zM4 2v18H2V2zm14 0h2v18h-2z"></svg:path>`,
})
export class MemoryBorderLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderNoneIcon],svg[memory-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h2v2H2zm16 0h2v2h-2zm-8-8h2v2h-2zm0 16h2v2h-2zm-4 0h2v2H6zm-4-4h2v2H2zm0 4h2v2H2zM2 2h2v2H2zm0 4h2v2H2zm4-4h2v2H6zm8 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 12h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MemoryBorderNoneIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderOutsideIcon],svg[memory-border-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v18H2zm2 2v14h14V4zm6 2h2v2h-2zm0 4h2v2h-2zm-4 0h2v2H6zm8 0h2v2h-2zm-4 4h2v2h-2z"></svg:path>`,
})
export class MemoryBorderOutsideIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderRightIcon],svg[memory-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v2h-2V2zm0 16v2h-2v-2zm-8-8v2H2v-2zm0-4v2H2V6zm4-4v2H6V2zM4 2v2H2V2zm12 0v2h-2V2zm0 16v2h-2v-2zM4 14v2H2v-2zm0 4v2H2v-2zm4 0v2H6v-2zM20 2v18h-2V2z"></svg:path>`,
})
export class MemoryBorderRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopIcon],svg[memory-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h2v2H2zm16 0h2v2h-2zm-8 8h2v2h-2zm-4 0h2v2H6zm-4-4h2v2H2zm0 4h2v2H2zM2 6h2v2H2zm16 0h2v2h-2zm-4 12h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zM2 2h18v2H2z"></svg:path>`,
})
export class MemoryBorderTopIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopBottomIcon],svg[memory-border-top-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h2v2H2zm16 0h2v2h-2zM2 14h2v2H2zm0-8h2v2H2zm16 0h2v2h-2zm0 8h2v2h-2zM2 18h18v2H2zM2 4V2h18v2z"></svg:path>`,
})
export class MemoryBorderTopBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopLeftIcon],svg[memory-border-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h2v2h-2zm-8 8h2v2h-2zm-4 0h2v2H6zM18 6h2v2h-2zm-4 12h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zM2 2h18v2H4v16H2z"></svg:path>`,
})
export class MemoryBorderTopLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopLeftBottomIcon],svg[memory-border-top-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h2v2h-2zm0-4h2v2h-2zm0 8h2v2h-2zm2 4v2H2V2h18v2H4v14z"></svg:path>`,
})
export class MemoryBorderTopLeftBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopLeftRightIcon],svg[memory-border-top-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18v2h-2v-2zm4 0v2h-2v-2zm-8 0v2H6v-2zm-4 2H2V2h18v18h-2V4H4z"></svg:path>`,
})
export class MemoryBorderTopLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopRightIcon],svg[memory-border-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18v2h-2v-2zm-8-8v2H2v-2zm0-4v2H2V6zm12 12v2h-2v-2zM4 14v2H2v-2zm0 4v2H2v-2zm4 0v2H6v-2zM20 2v18h-2V4H2V2z"></svg:path>`,
})
export class MemoryBorderTopRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopRightBottomIcon],svg[memory-border-top-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12H2v-2h2zm0 4H2v-2h2zm0-8H2V6h2zM2 4V2h18v18H2v-2h16V4z"></svg:path>`,
})
export class MemoryBorderTopRightBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBowIcon],svg[memory-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h10v1h2v1h2v1h1v1h1v2h1v2h1v10h-2v-2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6V9H5V8H4V7H3V5H1m15 13h1v-6h-1v-2h-1V8h-1V7h-2V6h-2V5H4v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1"></svg:path>`,
})
export class MemoryBowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBowArrowIcon],svg[memory-bow-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h10v1h2v1h3V4h1V2h3v3h-2v1h-1v3h1v2h1v10h-2v-2h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v1H8v1H7v3H6v1H5v1H4v-1H3v-1H2v-1H1v-1h1v-1h1v-1h3v-1h1v-1h1v-2H7v-1H6V9H5V8H4V7H3V5H1zm15 15h1v-6h-1v-2h-1V9h-1v1h-1v1h-1v1h-1v1h1v1h1v1h1v1h1v1h1zM12 7V6h-2V5H4v1h1v1h1v1h1v1h1v1h1v1h1v-1h1V9h1V8h1V7z"></svg:path>`,
})
export class MemoryBowArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxIcon],svg[memory-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h14v1h1v1h1v14h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1zm13 3V4H5v1H4v12h1v1h12v-1h1V5z"></svg:path>`,
})
export class MemoryBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedDownLeftIcon],svg[memory-box-light-dashed-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h-2v-2h2zm-4 0h-3v-2h3zm-5 0h-3V9h2v1h1zM12 0v2h-2V0zm0 4v3h-2V4z"></svg:path>`,
})
export class MemoryBoxLightDashedDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedDownRightIcon],svg[memory-box-light-dashed-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v2h-2V0zm0 4v3h-2V4zm0 5v3H9v-2h1V9zM.002 10H2v2H.002zM4 10h3v2H4z"></svg:path>`,
})
export class MemoryBoxLightDashedDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedHorizontalIcon],svg[memory-box-light-dashed-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12H0v-2h2m5 2H4v-2h3m6 2H9v-2h4m5 2h-3v-2h3m4 2h-2v-2h2Z"></svg:path>`,
})
export class MemoryBoxLightDashedHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedUpLeftIcon],svg[memory-box-light-dashed-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-2h2v2zm0-4v-3h2v3zm0-5v-3h3v2h-1v1zm12-1h-2v-2h2zm-4 0h-3v-2h3z"></svg:path>`,
})
export class MemoryBoxLightDashedUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedUpRightIcon],svg[memory-box-light-dashed-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h2v2H0zm4 0h3v2H4zm5 0h3v3h-2v-1H9zm1 12v-2h2v2zm0-4v-3h2v3z"></svg:path>`,
})
export class MemoryBoxLightDashedUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedVerticalIcon],svg[memory-box-light-dashed-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 7h-2V4h2m0 9h-2V9h2m0 9h-2v-3h2m0 7h-2v-2h2Z"></svg:path>`,
})
export class MemoryBoxLightDashedVerticalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDashedVerticalHorizontalIcon],svg[memory-box-light-dashed-vertical-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 7h-2V4h2M2 12H0v-2h2m5 2H4v-2h3m11 2h-3v-2h3m4 2h-2v-2h2m-10 3h-2v-1H9v-2h1V9h2v1h1v2h-1m0 6h-2v-3h2m0 7h-2v-2h2Z"></svg:path>`,
})
export class MemoryBoxLightDashedVerticalHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleDownLeftIcon],svg[memory-box-light-double-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H12V0h2v8h8m0 6H8V0h2v12h12Z"></svg:path>`,
})
export class MemoryBoxLightDoubleDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleDownRightIcon],svg[memory-box-light-double-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H0V8h8V0h2m4 14H0v-2h12V0h2Z"></svg:path>`,
})
export class MemoryBoxLightDoubleDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalIcon],svg[memory-box-light-double-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12h22v2H0zm0-4h22v2H0z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalDownIcon],svg[memory-box-light-double-horizontal-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H0V8h22M10 22H8v-8H0v-2h10m4 10h-2V12h10v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalLightDownIcon],svg[memory-box-light-double-horizontal-light-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H0V8h22M12 22h-2v-8H0v-2h22v2H12Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalLightDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalLightUpIcon],svg[memory-box-light-double-horizontal-light-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H0V8h10V0h2v8h10m0 6H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalLightUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleHorizontalUpIcon],svg[memory-box-light-double-horizontal-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H0V8h8V0h2m12 10H12V0h2v8h8m0 6H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxLightDoubleHorizontalUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundDownLeftIcon],svg[memory-box-light-double-round-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0v3h1v2h1v2h1v1h1v1h1v1h2v1h2v1h3v2h-4v-1h-2v-1h-2v-1h-1v-1h-1V9h-1V8h-1V6H9V4H8V0zm12 10h-2V9h-3V8h-1V7h-1V6h-1V5h-1V2h-1V0h2v1h1v3h1v1h1v1h1v1h3v1h1z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundDownRightIcon],svg[memory-box-light-double-round-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12h3v-1h2v-1h2V9h1V8h1V7h1V5h1V3h1V0h2v4h-1v2h-1v2h-1v1h-1v1H9v1H8v1H6v1H4v1H0zM10 0v2H9v3H8v1H7v1H6v1H5v1H2v1H0V8h1V7h3V6h1V5h1V4h1V1h1V0z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundUpLeftIcon],svg[memory-box-light-double-round-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10h-3v1h-2v1h-2v1h-1v1h-1v1h-1v2h-1v2h-1v3H8v-4h1v-2h1v-2h1v-1h1v-1h1v-1h1v-1h2V9h2V8h4zM12 22v-2h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h2v2h-1v1h-3v1h-1v1h-1v1h-1v3h-1v1z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleRoundUpRightIcon],svg[memory-box-light-double-round-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22v-3h-1v-2h-1v-2H9v-1H8v-1H7v-1H5v-1H3v-1H0V8h4v1h2v1h2v1h1v1h1v1h1v1h1v2h1v2h1v4zM0 12h2v1h3v1h1v1h1v1h1v1h1v3h1v2H8v-1H7v-3H6v-1H5v-1H4v-1H1v-1H0z"></svg:path>`,
})
export class MemoryBoxLightDoubleRoundUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleUpLeftIcon],svg[memory-box-light-double-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H8V8h14v2H10m4 12h-2V12h10v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleUpRightIcon],svg[memory-box-light-double-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H8v-8H0v-2h10m4 10h-2V10H0V8h14Z"></svg:path>`,
})
export class MemoryBoxLightDoubleUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalIcon],svg[memory-box-light-double-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22V0h2v22zm-4 0V0h2v22z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalHorizontalIcon],svg[memory-box-light-double-vertical-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H0V8h8V0h2m12 10H12V0h2v8h8M10 22H8v-8H0v-2h10m4 10h-2V12h10v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalLeftIcon],svg[memory-box-light-double-vertical-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H0V8h8V0h2Zm0 12H8v-8H0v-2h10Zm4 0h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalLightLeftIcon],svg[memory-box-light-double-vertical-light-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H8V12H0v-2h8V0h2m4 22h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalLightLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalLightRightIcon],svg[memory-box-light-double-vertical-light-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22H8V0h2m4 22h-2V0h2v10h8v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalLightRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDoubleVerticalRightIcon],svg[memory-box-light-double-vertical-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10H12V0h2v8h8M10 22H8V0h2m4 22h-2V12h10v2h-8Z"></svg:path>`,
})
export class MemoryBoxLightDoubleVerticalRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownLeftIcon],svg[memory-box-light-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H10V0h2v10h10z"></svg:path>`,
})
export class MemoryBoxLightDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownLeftCircleIcon],svg[memory-box-light-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15H9v-1H8v-1H7V9h1V8h1V7h1V0h2v7h1v1h1v1h1v1h7v2h-7v1h-1v1h-1zm-4-3h1v1h2v-1h1v-2h-1V9h-2v1H9z"></svg:path>`,
})
export class MemoryBoxLightDownLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownLeftStippleIcon],svg[memory-box-light-down-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M7 5h1V4H7m10 2h-1V5h1m4 1h-1V5h1M6 7H5V6h1m8 2h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M7 9h1V8H7m-1 3H5v-1h1m16 2H10V0h2v10h10M8 15H7v-1h1m5 1h1v-1h-1m4 1h1v-1h-1m1 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1H9v-1h1v-1H9v-1H8v-1H7v1H6v-1h1v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h-1v-1h-1v1h-1m-6 2h-1v-1h1m4 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightDownLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownLeftStippleInnerIcon],svg[memory-box-light-down-left-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m1 4H10V0h2v10h10Z"></svg:path>`,
})
export class MemoryBoxLightDownLeftStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownLeftStippleOuterIcon],svg[memory-box-light-down-left-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m1 3h1V4H7M6 7H5V6h1m1 3h1V8H7m-1 3H5v-1h1m16 2H10V0h2v10h10M8 15H7v-1h1m5 1h1v-1h-1m4 1h1v-1h-1m1 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1H9v-1h1v-1H9v-1H8v-1H7v1H6v-1h1v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h-1v-1h-1v1h-1m-6 2h-1v-1h1m4 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightDownLeftStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownRightIcon],svg[memory-box-light-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v12H0v-2h10V0z"></svg:path>`,
})
export class MemoryBoxLightDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownRightCircleIcon],svg[memory-box-light-down-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9v4h-1v1h-1v1H9v-1H8v-1H7v-1H0v-2h7V9h1V8h1V7h1V0h2v7h1v1h1v1zm-3 4v-1h1v-2h-1V9h-2v1H9v2h1v1z"></svg:path>`,
})
export class MemoryBoxLightDownRightCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownRightStippleIcon],svg[memory-box-light-down-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m3 3h-1V9h1m-3 3h1v-1h-1m3 3h-1v-1h1m-2 2h-1v-1h1M3 15h1v-1H3m4 1h1v-1H7m4 1h1v-1h-1m1 2h-1v-1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1H0v-2h10V0h2v12h1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v-1h-1v1h-1v1h1v1h-1M2 17H1v-1h1m4 1H5v-1h1m4 1H9v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightDownRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownRightStippleInnerIcon],svg[memory-box-light-down-right-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m3 4H0v-2h10V0h2Z"></svg:path>`,
})
export class MemoryBoxLightDownRightStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightDownRightStippleOuterIcon],svg[memory-box-light-down-right-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m-3 3h1V7h-1m3 3h-1V9h1m-3 3h1v-1h-1m3 3h-1v-1h1m-2 2h-1v-1h1M3 15h1v-1H3m4 1h1v-1H7m4 1h1v-1h-1m1 2h-1v-1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1H0v-2h10V0h2v12h1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v-1h-1v1h-1v1h1v1h-1M2 17H1v-1h1m4 1H5v-1h1m4 1H9v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightDownRightStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightFoldDownLeftIcon],svg[memory-box-light-fold-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h1V3h-6v1h1v1h1v1h1v1h1v1h1m4 4h-3v-1h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V0h2v1h9v9h1Z"></svg:path>`,
})
export class MemoryBoxLightFoldDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightFoldDownRightIcon],svg[memory-box-light-fold-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h1V8h1V7h1V6h1V5h1V4h1V3H3m0 9H0v-2h1V1h9V0h2v3h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3Z"></svg:path>`,
})
export class MemoryBoxLightFoldDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightFoldUpLeftIcon],svg[memory-box-light-fold-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-3h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h3v2h-1v9h-9m7-2v-6h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1Z"></svg:path>`,
})
export class MemoryBoxLightFoldUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightFoldUpRightIcon],svg[memory-box-light-fold-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-1H1v-9H0v-2h3v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1m-3 0v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v6Z"></svg:path>`,
})
export class MemoryBoxLightFoldUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalIcon],svg[memory-box-light-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h22v2H0z"></svg:path>`,
})
export class MemoryBoxLightHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalCircleIcon],svg[memory-box-light-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15H9v-1H8v-1H7v-1H0v-2h7V9h1V8h1V7h4v1h1v1h1v1h7v2h-7v1h-1v1h-1m-1-1v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalDownIcon],svg[memory-box-light-horizontal-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2V12H0v-2h22v2H12Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalDownStippleIcon],svg[memory-box-light-horizontal-down-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m4 1H6V5h1m5 1h-1V5h1m5 1h-1V5h1m4 1h-1V5h1M4 8h1V7H4m4 1h1V7H8m6 1h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M3 15h1v-1H3m4 1h1v-1H7m10 1h1v-1h-1M2 17H1v-1h1m4 1H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h22v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalDownStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalDownStippleDownIcon],svg[memory-box-light-horizontal-down-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m4 1h1v-1H7m10 1h1v-1h-1M2 17H1v-1h1m4 1H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h22v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalDownStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalDownStippleDownLeftIcon],svg[memory-box-light-horizontal-down-stipple-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m4 1h1v-1H7m-5 3H1v-1h1m4 1H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h22v2H12Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalDownStippleDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalDownStippleDownRightIcon],svg[memory-box-light-horizontal-down-stipple-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V12H0v-2h22v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalDownStippleDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalMenuDownIcon],svg[memory-box-light-horizontal-menu-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h-2v-1H9v-1H8V9H7V8H6V7H5V5h12v2h-1v1h-1v1h-1v1h-1v1h-1m0 6h-2v-1H9v-1H8v-1H7v-1H6v-1H0v-2h7v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h7v2h-6v1h-1v1h-1v1h-1v1h-1m0-7V8h1V7H9v1h1v1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalMenuDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalMenuLeftIcon],svg[memory-box-light-horizontal-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12H0v-2h5m17 2h-6v-2h6m-11 3h1V9h-1v1h-1v2h1m3 5h-2v-1h-1v-1h-1v-1H9v-1H8v-1H7v-2h1V9h1V8h1V7h1V6h1V5h2Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalMenuLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalMenuRightIcon],svg[memory-box-light-horizontal-menu-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H0v-2h6m16 2h-5v-2h5m-12 3h1v-1h1v-2h-1V9h-1m0 8H8V5h2v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalMenuRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalMenuUpIcon],svg[memory-box-light-horizontal-menu-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h-7v-1h-1v-1h-1V9h-1V8h-2v1H9v1H8v1H7v1H0v-2h6V9h1V8h1V7h1V6h1V5h2v1h1v1h1v1h1v1h1v1h6m-5 7H5v-2h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h1m-4 0v-1h-1v-1h-2v1H9v1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalMenuUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalStippleIcon],svg[memory-box-light-horizontal-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m4 1H6V5h1m5 1h-1V5h1m5 1h-1V5h1m4 1h-1V5h1M4 8h1V7H4m4 1h1V7H8m6 1h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m1 4H0v-2h22M3 15h1v-1H3m4 1h1v-1H7m6 1h1v-1h-1m4 1h1v-1h-1m5 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1M2 17H1v-1h1m4 1H5v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalStippleDownIcon],svg[memory-box-light-horizontal-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H0v-2h22M3 15h1v-1H3m4 1h1v-1H7m6 1h1v-1h-1m4 1h1v-1h-1m5 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1M2 17H1v-1h1m4 1H5v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalStippleUpIcon],svg[memory-box-light-horizontal-stipple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m4 1H6V5h1m5 1h-1V5h1m5 1h-1V5h1m4 1h-1V5h1M4 8h1V7H4m4 1h1V7H8m6 1h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m1 4H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalStippleUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalUpIcon],svg[memory-box-light-horizontal-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H0v-2h10V0h2v10h10Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalUpStippleIcon],svg[memory-box-light-horizontal-up-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1m4 1h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m1 4H0v-2h10V0h2v10h10M3 15h1v-1H3m4 1h1v-1H7m6 1h1v-1h-1m4 1h1v-1h-1m5 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1M2 17H1v-1h1m4 1H5v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalUpStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalUpStippleDownIcon],svg[memory-box-light-horizontal-up-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H0v-2h10V0h2v10h10M3 15h1v-1H3m4 1h1v-1H7m6 1h1v-1h-1m4 1h1v-1h-1m5 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1M2 17H1v-1h1m4 1H5v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalUpStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalUpStippleUpIcon],svg[memory-box-light-horizontal-up-stipple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1m4 1h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m1 4H0v-2h10V0h2v10h10Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalUpStippleUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalUpStippleUpLeftIcon],svg[memory-box-light-horizontal-up-stipple-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m13 4H0v-2h10V0h2v10h10Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalUpStippleUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightHorizontalUpStippleUpRightIcon],svg[memory-box-light-horizontal-up-stipple-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m1 4H0v-2h10V0h2v10h10Z"></svg:path>`,
})
export class MemoryBoxLightHorizontalUpStippleUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownLeftIcon],svg[memory-box-light-round-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h-4v-1h-3v-1h-1V9h-1V8h-1V7h-1V4h-1V0h2v3h1v3h1v1h1v1h1v1h3v1h3z"></svg:path>`,
})
export class MemoryBoxLightRoundDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownLeftStippleIcon],svg[memory-box-light-round-down-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m12 1h-1V2h1m2 3h-1V4h1M7 5h1V4H7m8 1h1V4h-1M8 6h1V5H8m13 4h-1V8h-1V7h-1v1h-1V7h-1V6h-1V5h-1V4h1V3h-1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h1v1h-1v1h1v1h1V6h1v1h1v1h1V7h1v1h-1M9 10H8V9h1m13 3h-4v-1h-3v-1h-1V9h-1V8h-1V7h-1V4h-1V0h2v3h1v3h1v1h1v1h1v1h3v1h3m-10 3h-1v-1h1m4 2h1v-1h-1m-1 3h-1v-1h1m2 0h1v-1h-1m5 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v1h-1v-1h1v-1h-1v-1h-1v-1h-1v1h-1v-1h1V9h-1V8H9V7H8v1H7V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1h1v1H9v1h1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1m-2 2h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownLeftStippleInnerIcon],svg[memory-box-light-round-down-left-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3h-1V2h1m2 3h-1V4h1m-5 1h1V4h-1m6 5h-1V8h-1V7h-1v1h-1V7h-1V6h-1V5h-1V4h1V3h-1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h1v1h-1v1h1v1h1V6h1v1h1v1h1V7h1v1h-1m1 4h-4v-1h-3v-1h-1V9h-1V8h-1V7h-1V4h-1V0h2v3h1v3h1v1h1v1h1v1h3v1h3Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownLeftStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownLeftStippleOuterIcon],svg[memory-box-light-round-down-left-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m1 3h1V4H7m1 2h1V5H8m1 5H8V9h1m13 3h-4v-1h-3v-1h-1V9h-1V8h-1V7h-1V4h-1V0h2v3h1v3h1v1h1v1h1v1h3v1h3m-10 3h-1v-1h1m4 2h1v-1h-1m-1 3h-1v-1h1m2 0h1v-1h-1m5 2h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v1h-1v-1h1v-1h-1v-1h-1v-1h-1v1h-1v-1h1V9h-1V8H9V7H8v1H7V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1h1v1H9v1h1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1m-2 2h-1v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownLeftStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownRightIcon],svg[memory-box-light-round-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v4h-1v3h-1v1H9v1H8v1H7v1H4v1H0v-2h3V9h3V8h1V7h1V6h1V3h1V0z"></svg:path>`,
})
export class MemoryBoxLightRoundDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownRightStippleIcon],svg[memory-box-light-round-down-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H4V1h1m12 1h-1V1h1M2 5H1V4h1m4 0h1V3H6m8 1h1V3h-1m2 4h-1V6h1M3 7h1V6H3M1 9H0V8h1V7h1V6h1V5h1v1h1V5h1V4H5V3h1V2h1V1h1V0h1v1H8v1H7v1h1v1H7v1H6v1H5v1H4v1H3V7H2v1H1m13 3h-1v-1h1M4 12H0v-2h3V9h3V8h1V7h1V6h1V3h1V0h2v4h-1v3h-1v1H9v1H8v1H7v1H4m7 3h-1v-1h1m-5 1h1v-1H6m-3 2h1v-1H3m1 2H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v1h1v-1h1v-1h1v-1h1V9h1V8h1V7h-1V6h1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h-1v1h1v1h-1v1h-1v1h-1v1h1v1h-1v-1h-1v1H9v1H8v1H7v1H6v-1H5v1H4m5 1H8v-1h1m-7 2H1v-1h1m4 1H5v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownRightStippleInnerIcon],svg[memory-box-light-round-down-right-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H4V1h1M2 5H1V4h1m4 0h1V3H6M3 7h1V6H3M1 9H0V8h1V7h1V6h1V5h1v1h1V5h1V4H5V3h1V2h1V1h1V0h1v1H8v1H7v1h1v1H7v1H6v1H5v1H4v1H3V7H2v1H1m3 4H0v-2h3V9h3V8h1V7h1V6h1V3h1V0h2v4h-1v3h-1v1H9v1H8v1H7v1H4Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownRightStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundDownRightStippleOuterIcon],svg[memory-box-light-round-down-right-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m2 4h-1V6h1m-2 5h-1v-1h1M4 12H0v-2h3V9h3V8h1V7h1V6h1V3h1V0h2v4h-1v3h-1v1H9v1H8v1H7v1H4m7 3h-1v-1h1m-5 1h1v-1H6m-3 2h1v-1H3m1 2H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v1h1v-1h1v-1h1v-1h1V9h1V8h1V7h-1V6h1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h-1v1h1v1h-1v1h-1v1h-1v1h1v1h-1v-1h-1v1H9v1H8v1H7v1H6v-1H5v1H4m5 1H8v-1h1m-7 2H1v-1h1m4 1H5v-1h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundDownRightStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpLeftIcon],svg[memory-box-light-round-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22v-4h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h4v2h-3v1h-3v1h-1v1h-1v1h-1v3h-1v3z"></svg:path>`,
})
export class MemoryBoxLightRoundUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpLeftStippleIcon],svg[memory-box-light-round-up-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h-1V5h1m4 1h-1V5h1m-7 2h-1V6h1m-2 3h-1V8h1m6 0h1V7h-1m-3 2h1V8h-1m-6 4H8v-1h1m-2 5H6v-1h1m11 1h1v-1h-1m3 3h-1v-1h1M7 19h1v-1H7m8 1h1v-1h-1m-9 3H5v-1h1m12 1h-1v-1h1M8 22H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1h1v-1H8v-1h1v-1h1v-1h1v-1h-1v-1h1v1h1v-1h1V9h1V8h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1v1h-1V8h-1v1h-1V8h-1v1h-1v1h-1V9h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h1v1H9v1H8v1h1v1H8v1h1v1H8m4 1h-2v-4h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h4v2h-3v1h-3v1h-1v1h-1v1h-1v3h-1m2 3h-1v-1h1v-1h1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v-1h1v-1h1v1h-1v1h-1v1h-1v1h-1v-1h-1v1h-1v1h1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpLeftStippleInnerIcon],svg[memory-box-light-round-up-left-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-6 2h-2v-4h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h4v2h-3v1h-3v1h-1v1h-1v1h-1v3h-1m2 3h-1v-1h1v-1h1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v1h1v-1h1v-1h1v1h-1v1h-1v1h-1v1h-1v-1h-1v1h-1v1h1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpLeftStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpLeftStippleOuterIcon],svg[memory-box-light-round-up-left-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h-1V5h1m4 1h-1V5h1m-7 2h-1V6h1m-2 3h-1V8h1m6 0h1V7h-1m-3 2h1V8h-1m-6 4H8v-1h1m-2 5H6v-1h1m0 4h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1h1v-1H8v-1h1v-1h1v-1h1v-1h-1v-1h1v1h1v-1h1V9h1V8h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1v1h-1V8h-1v1h-1V8h-1v1h-1v1h-1V9h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h1v1H9v1H8v1h1v1H8v1h1v1H8m4 1h-2v-4h1v-3h1v-1h1v-1h1v-1h1v-1h3v-1h4v2h-3v1h-3v1h-1v1h-1v1h-1v3h-1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpLeftStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpRightIcon],svg[memory-box-light-round-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h4v1h3v1h1v1h1v1h1v1h1v3h1v4h-2v-3H9v-3H8v-1H7v-1H6v-1H3v-1H0z"></svg:path>`,
})
export class MemoryBoxLightRoundUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpRightStippleIcon],svg[memory-box-light-round-up-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m5 2H7V6h1M4 8h1V7H4m1 2h1V8H5m6 2h-1V9h1m3 4h-1v-1h1M3 18H2v-1h1m10 0h1v-1h-1m-7 2h1v-1H6m8 1h1v-1h-1m-9 3H4v-1h1m12 1h-1v-1h1m-9 3H7v-1h1v-1H7v-1H6v-1H5v-1h1v-1H5v-1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v1h1v-1h1v1h1v1h1v1h1v1H7v1h1v1h1v1H8m4 1h-2v-3H9v-3H8v-1H7v-1H6v-1H3v-1H0v-2h4v1h3v1h1v1h1v1h1v1h1v3h1m4 4h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h-1v-1h1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7V9H6v1H5V9H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1v1h1V8h1v1H8v1h1v1h1v1h1v-1h1v1h-1v1h1v1h1v1h1v-1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpRightStippleInnerIcon],svg[memory-box-light-round-up-right-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18H2v-1h1m3 1h1v-1H6m-1 3H4v-1h1m3 3H7v-1h1v-1H7v-1H6v-1H5v-1h1v-1H5v-1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v1h1v-1h1v1h1v1h1v1h1v1H7v1h1v1h1v1H8m4 1h-2v-3H9v-3H8v-1H7v-1H6v-1H3v-1H0v-2h4v1h3v1h1v1h1v1h1v1h1v3h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpRightStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightRoundUpRightStippleOuterIcon],svg[memory-box-light-round-up-right-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m5 2H7V6h1M4 8h1V7H4m1 2h1V8H5m6 2h-1V9h1m3 4h-1v-1h1m-1 5h1v-1h-1m1 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2v-3H9v-3H8v-1H7v-1H6v-1H3v-1H0v-2h4v1h3v1h1v1h1v1h1v1h1v3h1m4 4h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h-1v-1h1v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7V9H6v1H5V9H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1v1h1V8h1v1H8v1h1v1h1v1h1v-1h1v1h-1v1h1v1h1v1h1v-1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightRoundUpRightStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpLeftIcon],svg[memory-box-light-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22V10h12v2H12v10z"></svg:path>`,
})
export class MemoryBoxLightUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpLeftCircleIcon],svg[memory-box-light-up-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13V9h1V8h1V7h4v1h1v1h1v1h7v2h-7v1h-1v1h-1v1h-1v7h-2v-7H9v-1H8v-1zm3-4v1H9v2h1v1h2v-1h1v-2h-1V9z"></svg:path>`,
})
export class MemoryBoxLightUpLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpLeftStippleIcon],svg[memory-box-light-up-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H8V5h1m4 1h-1V5h1m4 1h-1V5h1m4 1h-1V5h1M8 8H7V7h1M6 9H5V8h1m4 0h1V7h-1m4 1h1V7h-1m4 1h1V7h-1M7 11h1v-1H7m-1 3H5v-1h1m1 3h1v-1H7m10 1h1v-1h-1M6 17H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m6 2h-2V10H9v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1V9h1v1h1V9h1V8H9V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1v1h12v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightUpLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpLeftStippleInnerIcon],svg[memory-box-light-up-left-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V10h12v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightUpLeftStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpLeftStippleOuterIcon],svg[memory-box-light-up-left-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H8V5h1m4 1h-1V5h1m4 1h-1V5h1m4 1h-1V5h1M8 8H7V7h1M6 9H5V8h1m4 0h1V7h-1m4 1h1V7h-1m4 1h1V7h-1M7 11h1v-1H7m-1 3H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m6 2h-2V10H9v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1V9h1v1h1V9h1V8H9V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1v1h12v2H12Z"></svg:path>`,
})
export class MemoryBoxLightUpLeftStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpRightIcon],svg[memory-box-light-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10h12v12h-2V12H0z"></svg:path>`,
})
export class MemoryBoxLightUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpRightCircleIcon],svg[memory-box-light-up-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4v1h1v1h1v4h-1v1h-1v1h-1v7h-2v-7H9v-1H8v-1H7v-1H0v-2h7V9h1V8h1zm4 3h-1V9h-2v1H9v2h1v1h2v-1h1z"></svg:path>`,
})
export class MemoryBoxLightUpRightCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpRightStippleIcon],svg[memory-box-light-up-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m4 1H6V5h1m4 1h-1V5h1m4 3h-1V7h1M4 8h1V7H4m4 1h1V7H8m9 5h-1v-1h1m-3 3h1v-1h-1M3 15h1v-1H3m4 1h1v-1H7m10 2h-1v-1h1M2 17H1v-1h1m4 1H5v-1h1m8 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h12m4 12h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h-1v1h1v1h1v1h1V9h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightUpRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpRightStippleInnerIcon],svg[memory-box-light-up-right-stipple-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m4 1h1v-1H7m-5 3H1v-1h1m4 1H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h12Z"></svg:path>`,
})
export class MemoryBoxLightUpRightStippleInnerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightUpRightStippleOuterIcon],svg[memory-box-light-up-right-stipple-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6H2V5h1m4 1H6V5h1m4 1h-1V5h1m4 3h-1V7h1M4 8h1V7H4m4 1h1V7H8m9 5h-1v-1h1m-3 3h1v-1h-1m3 3h-1v-1h1m-3 3h1v-1h-1m3 3h-1v-1h1m-5 3h-2V12H0v-2h12m4 12h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h-1v1h1v1h1v1h1V9h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightUpRightStippleOuterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalIcon],svg[memory-box-light-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0v22h-2V0z"></svg:path>`,
})
export class MemoryBoxLightVerticalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalCircleIcon],svg[memory-box-light-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-7H9v-1H8v-1H7V9h1V8h1V7h1V0h2v7h1v1h1v1h1v4h-1v1h-1v1h-1m0-2v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalIcon],svg[memory-box-light-vertical-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2V12H0v-2h10V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleIcon],svg[memory-box-light-vertical-horizontal-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1m4 1h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M3 15h1v-1H3m4 1h1v-1H7m10 1h1v-1h-1M2 17H1v-1h1m4 1H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleDownIcon],svg[memory-box-light-vertical-horizontal-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m4 1h1v-1H7m10 1h1v-1h-1M2 17H1v-1h1m4 1H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleDownLeftIcon],svg[memory-box-light-vertical-horizontal-stipple-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V12H0v-2h10V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleDownRightIcon],svg[memory-box-light-vertical-horizontal-stipple-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m4 1h1v-1H7m-5 3H1v-1h1m4 1H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleLeftIcon],svg[memory-box-light-vertical-horizontal-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m-6 7h1v-1H3m4 1h1v-1H7m-5 3H1v-1h1m4 1H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleLeftDownRightIcon],svg[memory-box-light-vertical-horizontal-stipple-left-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m-6 7h1v-1H3m4 1h1v-1H7m10 1h1v-1h-1M2 17H1v-1h1m4 1H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleLeftDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleLeftUpRightIcon],svg[memory-box-light-vertical-horizontal-stipple-left-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1m4 1h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M3 15h1v-1H3m4 1h1v-1H7m-5 3H1v-1h1m4 1H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleLeftUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleRightIcon],svg[memory-box-light-vertical-horizontal-stipple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m-4 7h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V12H0v-2h10V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleRightDownLeftIcon],svg[memory-box-light-vertical-horizontal-stipple-right-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M3 15h1v-1H3m4 1h1v-1H7m10 1h1v-1h-1M2 17H1v-1h1m4 1H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleRightDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleRightUpLeftIcon],svg[memory-box-light-vertical-horizontal-stipple-right-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1m4 1h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m-4 7h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V12H0v-2h10V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleRightUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleUpIcon],svg[memory-box-light-vertical-horizontal-stipple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1m4 1h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m-9 14h-2V12H0v-2h10V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleUpLeftIcon],svg[memory-box-light-vertical-horizontal-stipple-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m3 14h-2V12H0v-2h10V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalHorizontalStippleUpRightIcon],svg[memory-box-light-vertical-horizontal-stipple-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m-9 14h-2V12H0v-2h10V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalHorizontalStippleUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalLeftIcon],svg[memory-box-light-vertical-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2V12H0v-2h10V0h2Z"></svg:path>`,
})
export class MemoryBoxLightVerticalLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalLeftStippleIcon],svg[memory-box-light-vertical-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M3 6H2V5h1m4 0h1V4H7m10 2h-1V5h1M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1V7h-1m3 4h-1v-1h1m-3 4h1v-1h-1M3 15h1v-1H3m4 1h1v-1H7m10 2h-1v-1h1M2 17H1v-1h1m4 1H5v-1h1m8 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2m4 22h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalLeftStippleDownLeftIcon],svg[memory-box-light-vertical-left-stipple-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m4 1h1v-1H7m-5 3H1v-1h1m4 1H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2Z"></svg:path>`,
})
export class MemoryBoxLightVerticalLeftStippleDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalLeftStippleLeftIcon],svg[memory-box-light-vertical-left-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m-6 7h1v-1H3m4 1h1v-1H7m-5 3H1v-1h1m4 1H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V12H0v-2h10V0h2Z"></svg:path>`,
})
export class MemoryBoxLightVerticalLeftStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalLeftStippleUpLeftIcon],svg[memory-box-light-vertical-left-stipple-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1M3 6H2V5h1m4 0h1V4H7M4 8h1V7H4m5 2H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m3 14h-2V12H0v-2h10V0h2Z"></svg:path>`,
})
export class MemoryBoxLightVerticalLeftStippleUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuDownIcon],svg[memory-box-light-vertical-menu-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6h-2V0h2m0 15h-2v-1H9v-1H8v-1H7v-1H6v-1H5V8h12v2h-1v1h-1v1h-1v1h-1v1h-1m0 8h-2v-5h2m0-5v-1h1v-1H9v1h1v1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuLeftIcon],svg[memory-box-light-vertical-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h1V9h-1v1h-1v2h1m3 5h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1V6h1V5h2m-5 17h-2v-6H9v-1H8v-1H7v-1H6v-1H5v-2h1V9h1V8h1V7h1V6h1V0h2v7h-1v1h-1v1H9v1H8v2h1v1h1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuRightIcon],svg[memory-box-light-vertical-menu-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13h1v-1h1v-2H8V9H7Zm0 4H5V5h2v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1H9v1H8v1H7Zm5 5h-2v-7h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V0h2v6h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalMenuUpIcon],svg[memory-box-light-vertical-menu-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h-2V0h2m5 14H5v-2h1v-1h1v-1h1V9h1V8h1V7h2v1h1v1h1v1h1v1h1v1h1m-5 10h-2v-6h2m1-4v-1h-1v-1h-2v1H9v1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalMenuUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightIcon],svg[memory-box-light-vertical-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightStippleIcon],svg[memory-box-light-vertical-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M7 5h1V4H7m10 2h-1V5h1m4 1h-1V5h1M6 7H5V6h1m8 2h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M7 9h1V8H7m-1 4H5v-1h1m1 4h1v-1H7m10 1h1v-1h-1M6 17H5v-1h1m14 1h-1v-1h1m-6 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightStippleDownRightIcon],svg[memory-box-light-vertical-right-stipple-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightStippleDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightStippleLeftIcon],svg[memory-box-light-vertical-right-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m1 3h1V4H7M6 7H5V6h1m1 3h1V8H7m-1 4H5v-1h1m1 4h1v-1H7m-1 3H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightStippleRightIcon],svg[memory-box-light-vertical-right-stipple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m-4 7h1v-1h-1m3 3h-1v-1h1m-6 2h1v-1h-1m3 3h-1v-1h1m-5 3h-2V0h2v10h10v2H12m4 10h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightStippleRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalRightStippleUpRightIcon],svg[memory-box-light-vertical-right-stipple-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m4 1h-1V5h1m-7 3h1V7h-1m4 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1m-9 14h-2V0h2v10h10v2H12Z"></svg:path>`,
})
export class MemoryBoxLightVerticalRightStippleUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalStippleIcon],svg[memory-box-light-vertical-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M7 5h1V4H7m10 2h-1V5h1M6 7H5V6h1m8 2h1V7h-1M7 9h1V8H7m10 3h-1v-1h1M6 12H5v-1h1m8 3h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 17H5v-1h1m8 2h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V0h2m4 22h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalStippleLeftIcon],svg[memory-box-light-vertical-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m1 3h1V4H7M6 7H5V6h1m1 3h1V8H7m-1 4H5v-1h1m1 4h1v-1H7m-1 3H5v-1h1m1 3h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxLightVerticalStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightVerticalStippleRightIcon],svg[memory-box-light-vertical-stipple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 3h-1V5h1m-3 3h1V7h-1m3 4h-1v-1h1m-3 4h1v-1h-1m3 3h-1v-1h1m-3 3h1v-1h-1m3 3h-1v-1h1m-5 3h-2V0h2m4 22h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxLightVerticalStippleRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightAllIcon],svg[memory-box-outer-light-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h22v22H0zm2 2v18h18V2z"></svg:path>`,
})
export class MemoryBoxOuterLightAllIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedAllIcon],svg[memory-box-outer-light-dashed-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2H2v2H0V0zM2 6v4H0V6zm0 6v4H0v-4zm0 6v2h2v2H0v-4zM6 0h4v2H6zm6 0h4v2h-4zm6 0h4v4h-2V2h-2zm0 22v-2h2v-2h2v4zm-2 0h-4v-2h4zm-6 0H6v-2h4zM20 6h2v4h-2zm0 6h2v4h-2z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedAllIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedDownIcon],svg[memory-box-outer-light-dashed-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20h4v2H1zm6 0h3v2H7zm5 0h4v2h-4zm6 0h3v2h-3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedDownLeftIcon],svg[memory-box-outer-light-dashed-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 18h2v2h2v2H0zm6 2h4v2H6zm6 0h4v2h-4zm6 0h3v2h-3zM0 16v-4h2v4zm0-6V7h2v3zm0-5V1h2v4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedDownLeftRightIcon],svg[memory-box-outer-light-dashed-down-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 18h2v2h2v2H0zm6 2h4v2H6zm6 0h4v2h-4zm6 0h2v-2h2v4h-4zM0 16v-4h2v4zm0-6V7h2v3zm0-5V1h2v4zm22-4v4h-2V1zm0 6v3h-2V7zm0 5v4h-2v-4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedDownLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedDownRightIcon],svg[memory-box-outer-light-dashed-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22v-2h2v-2h2v4zm2-6v-4h2v4zm0-6V6h2v4zm0-6V1h2v3zm-4 18h-4v-2h4zm-6 0H7v-2h3zm-5 0H1v-2h4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedFoldDownLeftIcon],svg[memory-box-outer-light-dashed-fold-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4H4V2h4m6 2h-4V2h4M2 6H1V5H0V1h2v3h1v1H2m18 1h-2V4h-2V2h4M7 10H5V9H4V8H3V6h2v1h1v1h1m13 4h-2V8h2m-9 7h-1v-1H9v-1H8v-1H7v-1h1v-1h1v1h1v1h1v1h1v1h-1m9 4h-2v-4h2m-4 5h-2v-1h-1v-1h-1v-2h2v1h1v1h1m5 5h-4v-1h-1v-1h1v-1h1v1h3Z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedFoldDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedFoldDownRightIcon],svg[memory-box-outer-light-dashed-fold-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H8V2h4m6 2h-4V2h4M4 6H2V2h4v2H4m17 2h-1V5h-1V4h1V1h2v4h-1m-4 5h-2V8h1V7h1V6h2v2h-1v1h-1M4 12H2V8h2m8 7h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v1h1v1h-1v1h-1v1h-1m-8 4H2v-4h2m4 5H6v-2h1v-1h1v-1h2v2H9v1H8m-3 4H1v-2h3v-1h1v1h1v1H5Z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedFoldDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedFoldUpLeftIcon],svg[memory-box-outer-light-dashed-fold-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3h-1V2h-1V1h1V0h4v2h-3m-4 5h-2V5h1V4h1V3h2v2h-1v1h-1m6 2h-2V4h2M9 12H8v-1H7v-1h1V9h1V8h1V7h1v1h1v1h-1v1h-1v1H9m11 3h-2v-4h2M5 16H3v-2h1v-1h1v-1h2v2H6v1H5m3 5H4v-2h4m6 2h-4v-2h4m6 2h-4v-2h2v-2h2M2 21H0v-4h1v-1h1v1h1v1H2Z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedFoldUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedFoldUpRightIcon],svg[memory-box-outer-light-dashed-fold-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H4V2H1V0h4v1h1v1H5m5 5H8V6H7V5H6V3h2v1h1v1h1M4 8H2V4h2m10 8h-1v-1h-1v-1h-1V9h-1V8h1V7h1v1h1v1h1v1h1v1h-1M4 14H2v-4h2m15 6h-2v-1h-1v-1h-1v-2h2v1h1v1h1M6 20H2v-4h2v2h2m6 2H8v-2h4m6 2h-4v-2h4m4 3h-2v-3h-1v-1h1v-1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedFoldUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedLeftIcon],svg[memory-box-outer-light-dashed-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21v-4h2v4zm0-6v-3h2v3zm0-5V6h2v4zm0-6V1h2v3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedLeftRightIcon],svg[memory-box-outer-light-dashed-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21v-4h2v4zm0-6v-3h2v3zm0-5V6h2v4zm0-6V1h2v3zM0 21v-4h2v4zm0-6v-3h2v3zm0-5V6h2v4zm0-6V1h2v3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedRightIcon],svg[memory-box-outer-light-dashed-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21v-4h2v4zm0-6v-3h2v3zm0-5V6h2v4zm0-6V1h2v3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpIcon],svg[memory-box-outer-light-dashed-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h4v2H1zm6 0h3v2H7zm5 0h4v2h-4zm6 0h3v2h-3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpDownIcon],svg[memory-box-outer-light-dashed-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2h-4V0h4zm-6 0h-3V0h3zm-5 0H6V0h4zM4 2H1V0h3zm17 20h-4v-2h4zm-6 0h-3v-2h3zm-5 0H6v-2h4zm-6 0H1v-2h3z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpDownLeftIcon],svg[memory-box-outer-light-dashed-up-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2H2v2H0V0zM2 6v4H0V6zm0 6v4H0v-4zm0 6v2h2v2H0v-4zM6 0h4v2H6zm6 0h3v2h-3zm5 0h4v2h-4zm4 22h-4v-2h4zm-6 0h-3v-2h3zm-5 0H6v-2h4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpDownRightIcon],svg[memory-box-outer-light-dashed-up-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22v-2h2v-2h2v4zm2-6v-4h2v4zm0-6V6h2v4zm0-6V2h-2V0h4v4zm-4 18h-4v-2h4zm-6 0H7v-2h3zm-5 0H1v-2h4zM1 0h4v2H1zm6 0h3v2H7zm5 0h4v2h-4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpLeftIcon],svg[memory-box-outer-light-dashed-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2H2v2H0V0zM2 6v4H0V6zm0 6v4H0v-4zm0 6v3H0v-3zM6 0h4v2H6zm6 0h3v2h-3zm5 0h4v2h-4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpLeftRightIcon],svg[memory-box-outer-light-dashed-up-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4h-2V2h-2V0h4zm-6-2h-4V0h4zm-6 0H6V0h4zM4 2H2v2H0V0h4zm18 4v4h-2V6zm0 6v3h-2v-3zm0 5v4h-2v-4zM0 21v-4h2v4zm0-6v-3h2v3zm0-5V6h2v4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDashedUpRightIcon],svg[memory-box-outer-light-dashed-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4h-2V2h-2V0h4zm-6-2h-4V0h4zm-6 0H6V0h4zM4 2H1V0h3zm18 4v4h-2V6zm0 6v3h-2v-3zm0 5v4h-2v-4z"></svg:path>`,
})
export class MemoryBoxOuterLightDashedUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownIcon],svg[memory-box-outer-light-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 20h22v2H0z"></svg:path>`,
})
export class MemoryBoxOuterLightDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownLeftIcon],svg[memory-box-outer-light-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v20h20v2H0z"></svg:path>`,
})
export class MemoryBoxOuterLightDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownLeftRightIcon],svg[memory-box-outer-light-down-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H0V0h2v20h18V0h2z"></svg:path>`,
})
export class MemoryBoxOuterLightDownLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownLeftStippleIcon],svg[memory-box-outer-light-down-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6V1h1M4 4h1V3H4m3 3H6V5h1M4 8h1V7H4m3 4H6v-1h1m-3 4h1v-1H4m3 3H6v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1M4 18h1v-1H4m4 1h1v-1H8m6 1h1v-1h-1m4 1h1v-1h-1m3 2h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3V9h1V8H3V7h1V6H3V5h1V4H3V3h1V2H3V1h1V0h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h-1m1 4H0V0h2v20h20Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownRightIcon],svg[memory-box-outer-light-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 22v-2h20V0h2v22z"></svg:path>`,
})
export class MemoryBoxOuterLightDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownRightStippleIcon],svg[memory-box-outer-light-down-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6V1h1M4 4h1V3H4m3 3H6V5h1M4 8h1V7H4m3 4H6v-1h1m-3 4h1v-1H4m3 3H6v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1M4 18h1v-1H4m4 1h1v-1H8m6 1h1v-1h-1m4 1h1v-1h-1m3 2h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3V9h1V8H3V7h1V6H3V5h1V4H3V3h1V2H3V1h1V0h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h-1m1 4H0V0h2v20h20Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownStippleIcon],svg[memory-box-outer-light-down-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16H2v-1h1m4 1H6v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1M4 18h1v-1H4m4 1h1v-1H8m6 1h1v-1h-1m4 1h1v-1h-1m3 2h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v1H0v-1h1v-1H0v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h-1m1 4H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownVerticalStippleIcon],svg[memory-box-outer-light-down-vertical-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1M6 3H5V2h1m8 2h1V3h-1M7 5h1V4H7m10 3h-1V6h1M6 8H5V7h1m8 3h1V9h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 13H5v-1h1m8 2h1v-1h-1M3 16H2v-1h1m4 0h1v-1H7m10 2h-1v-1h1m4 1h-1v-1h1M4 18h1v-1H4m5 2H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v1H0v-1h1v-1H0v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1V9h1V8H7V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m5 0h1v-1h-1m4 1h1v-1h-1m3 2h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h-1m1 4H0v-2h10V0h2v20h10Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownVerticalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownVerticalStippleLeftIcon],svg[memory-box-outer-light-down-vertical-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V2h1m1 3h1V4H7M6 8H5V7h1m1 4h1v-1H7m-1 3H5v-1h1m-3 4H2v-1h1m4 0h1v-1H7m-3 4h1v-1H4m5 2H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v1H0v-1h1v-1H0v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1H6v-1h1V9h1V8H7V7h1V6H7V5H6V4h1V3h1V2H7V1H6V0h1v1h1V0h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1m13 4H0v-2h10V0h2v20h10Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownVerticalStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightDownVerticalStippleRightIcon],svg[memory-box-outer-light-down-vertical-stipple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1h1m-3 3h1V3h-1m3 4h-1V6h1m-3 4h1V9h-1m3 3h-1v-1h1m-3 3h1v-1h-1m3 3h-1v-1h1m4 1h-1v-1h1m-7 3h1v-1h-1m4 1h1v-1h-1m3 2h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1V2h-1V1h1V0h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h-1m1 4H0v-2h10V0h2v20h10Z"></svg:path>`,
})
export class MemoryBoxOuterLightDownVerticalStippleRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftIcon],svg[memory-box-outer-light-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 22V0h2v22z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftHorizontalStippleIcon],svg[memory-box-outer-light-left-horizontal-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6V1h1M4 4h1V3H4m3 3H6V5h1m4 1h-1V5h1m5 1h-1V5h1m5 1h-1V5h1M4 8h1V7H4m4 1h1V7H8m4 1h1V7h-1m6 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3V7h1V6H3V5h1V4H3V3h1V2H3V1h1V0h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M7 15h1v-1H7m4 1h1v-1h-1m6 1h1v-1h-1m-7 3H9v-1h1m5 1h-1v-1h1m5 1h-1v-1h1M4 18h1v-1H4m3 3H6v-1h1m-5 3H0V0h2v10h20v2H2m4 10H5v-1H4v1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v-1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1h1v1h1v1H5v1H4v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftHorizontalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftHorizontalStippleDownIcon],svg[memory-box-outer-light-left-horizontal-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h1v-1H7m4 1h1v-1h-1m6 1h1v-1h-1m-7 3H9v-1h1m5 1h-1v-1h1m5 1h-1v-1h1M4 18h1v-1H4m3 3H6v-1h1m-5 3H0V0h2v10h20v2H2m4 10H5v-1H4v1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h-1v1h1v1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v-1h-1v-1H9v1H8v1H7v-1H6v-1H5v1H4v1h1v1h1v1H5v1H4v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftHorizontalStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftHorizontalStippleUpIcon],svg[memory-box-outer-light-left-horizontal-stipple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6V1h1M4 4h1V3H4m3 3H6V5h1m4 1h-1V5h1m5 1h-1V5h1m5 1h-1V5h1M4 8h1V7H4m4 1h1V7H8m4 1h1V7h-1m6 1h1V7h-1m3 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3V7h1V6H3V5h1V4H3V3h1V2H3V1h1V0h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1v1h-1M2 22H0V0h2v10h20v2H2Z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftHorizontalStippleUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftRightIcon],svg[memory-box-outer-light-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 22V0h2v22zm20 0V0h2v22z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftRightStippleIcon],svg[memory-box-outer-light-left-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6V1h1m9 2h-1V2h1M4 4h1V3H4m3 3H6V5h1m10 0h1V4h-1m-1 3h-1V6h1M4 8h1V7H4m13 2h1V8h-1M7 11H6v-1h1m9 2h-1v-1h1M4 14h1v-1H4m3 3H6v-1h1m10 0h1v-1h-1m-1 3h-1v-1h1M4 18h1v-1H4m3 3H6v-1h1m10 0h1v-1h-1m-1 3h-1v-1h1M2 22H0V0h2m4 22H5v-1H4v1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3V9h1V8H3V7h1V6H3V5h1V4H3V3h1V2H3V1h1V0h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1h1m12 1h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h1v-1h-1V9h-1V8h1V7h1V6h-1V5h-1V4h1V3h1V2h-1V1h-1V0h1v1h1V0h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightLeftStippleIcon],svg[memory-box-outer-light-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H6V1h1M4 4h1V3H4m3 3H6V5h1M4 8h1V7H4m3 4H6v-1h1m-3 4h1v-1H4m3 3H6v-1h1m-3 3h1v-1H4m3 3H6v-1h1m-5 3H0V0h2m4 22H5v-1H4v1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3V9h1V8H3V7h1V6H3V5h1V4H3V3h1V2H3V1h1V0h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRightIcon],svg[memory-box-outer-light-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22V0h2v22z"></svg:path>`,
})
export class MemoryBoxOuterLightRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRightHorizontalStippleIcon],svg[memory-box-outer-light-right-horizontal-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3h-1V2h1M3 6H2V5h1m5 1H7V5h1m5 1h-1V5h1m4 0h1V4h-1M4 8h1V7H4m6 1h1V7h-1m4 1h1V7h-1m5 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h-1V5h-1V4h1V3h1V2h-1V1h-1V0h1v1h1V0h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1M3 15h1v-1H3m6 1h1v-1H9m4 1h1v-1h-1m4 1h1v-1h-1M2 17H1v-1h1m5 1H6v-1h1m5 1h-1v-1h1m4 1h-1v-1h1m1 3h1v-1h-1m-1 3h-1v-1h1m2 2h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1H9v-1H8v-1H7v1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V12H0v-2h20V0h2Z"></svg:path>`,
})
export class MemoryBoxOuterLightRightHorizontalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRightHorizontalStippleDownIcon],svg[memory-box-outer-light-right-horizontal-stipple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15h1v-1H3m6 1h1v-1H9m4 1h1v-1h-1m4 1h1v-1h-1M2 17H1v-1h1m5 1H6v-1h1m5 1h-1v-1h1m4 1h-1v-1h1m1 3h1v-1h-1m-1 3h-1v-1h1m2 2h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h-1v1h-1v1h-1v-1h-1v-1h-1v1h-1v1H9v-1H8v-1H7v1H6v-1H5v1H4v1H3v-1H2v-1H1v1H0v-1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V12H0v-2h20V0h2Z"></svg:path>`,
})
export class MemoryBoxOuterLightRightHorizontalStippleDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRightHorizontalStippleUpIcon],svg[memory-box-outer-light-right-horizontal-stipple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3h-1V2h1M3 6H2V5h1m5 1H7V5h1m5 1h-1V5h1m4 0h1V4h-1M4 8h1V7H4m6 1h1V7h-1m4 1h1V7h-1m5 2h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8h-1v1h-1V8H9v1H8V8H7v1H6V8H5v1H4V8H3v1H2V8H1v1H0V8h1V7H0V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1v1h1V7h1V6h1v1h1v1h1V7h1V6h1v1h1v1h1V7h1V6h-1V5h-1V4h1V3h1V2h-1V1h-1V0h1v1h1V0h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1m3 14h-2V12H0v-2h20V0h2Z"></svg:path>`,
})
export class MemoryBoxOuterLightRightHorizontalStippleUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRightStippleIcon],svg[memory-box-outer-light-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3h-1V2h1m1 3h1V4h-1m-1 3h-1V6h1m1 3h1V8h-1m-1 4h-1v-1h1m1 4h1v-1h-1m-1 3h-1v-1h1m1 3h1v-1h-1m-1 3h-1v-1h1m2 2h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h1v-1h-1V9h-1V8h1V7h1V6h-1V5h-1V4h1V3h1V2h-1V1h-1V0h1v1h1V0h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V0h2Z"></svg:path>`,
})
export class MemoryBoxOuterLightRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundDownLeftIcon],svg[memory-box-outer-light-round-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2v5h1v4h1v2h1v2h1v1h1v1h1v1h1v1h2v1h2v1h4v1h5v2h-6v-1h-4v-1h-2v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V6H0z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundDownRightIcon],svg[memory-box-outer-light-round-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 22v-2h5v-1h4v-1h2v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V9h1V5h1V0h2v6h-1v4h-1v2h-1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-2v1h-2v1H6v1z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundUpLeftIcon],svg[memory-box-outer-light-round-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 0v2h-5v1h-4v1h-2v1H9v1H8v1H7v1H6v1H5v2H4v2H3v4H2v5H.004v-6H1v-4h1v-2h1V8h1V7h1V6h1V5h1V4h1V3h2V2h2V1h4V0z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightRoundUpRightIcon],svg[memory-box-outer-light-round-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-2v-5h-1v-4h-1v-2h-1V9h-1V8h-1V7h-1V6h-1V5h-2V4H9V3H5V2H.004V0H6v1h4v1h2v1h2v1h1v1h1v1h1v1h1v1h1v2h1v2h1v4h1z"></svg:path>`,
})
export class MemoryBoxOuterLightRoundUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpIcon],svg[memory-box-outer-light-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h22v2H0z"></svg:path>`,
})
export class MemoryBoxOuterLightUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpDownIcon],svg[memory-box-outer-light-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h22v2H0zm0 20h22v2H0z"></svg:path>`,
})
export class MemoryBoxOuterLightUpDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpDownLeftIcon],svg[memory-box-outer-light-up-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 22V0h22v2H2v18h20v2z"></svg:path>`,
})
export class MemoryBoxOuterLightUpDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpDownRightIcon],svg[memory-box-outer-light-up-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 0v22H0v-2h20V2H0V0z"></svg:path>`,
})
export class MemoryBoxOuterLightUpDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpDownStippleIcon],svg[memory-box-outer-light-up-down-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H0V0h22M3 5h1V4H3m4 1h1V4H7m6 1h1V4h-1m4 1h1V4h-1m5 2h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1V4H9v1H8v1H7V5H6V4H5v1H4v1H3V5H2V4H1v1H0V4h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h-1v1h1M2 7H1V6h1m4 1H5V6h1m5 1h-1V6h1m5 1h-1V6h1m4 1h-1V6h1M3 16H2v-1h1m4 1H6v-1h1m5 1h-1v-1h1m5 1h-1v-1h1m4 1h-1v-1h1M4 18h1v-1H4m4 1h1v-1H8m6 1h1v-1h-1m4 1h1v-1h-1m3 2h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v1H0v-1h1v-1H0v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v-1h1v1h1v1h1v-1h1v1h-1m1 4H0v-2h22Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpDownStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpLeftIcon],svg[memory-box-outer-light-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 0v2H2v20H0V0z"></svg:path>`,
})
export class MemoryBoxOuterLightUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpLeftRightIcon],svg[memory-box-outer-light-up-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h22v22h-2V2H2v20H0z"></svg:path>`,
})
export class MemoryBoxOuterLightUpLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpLeftStippleIcon],svg[memory-box-outer-light-up-left-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h1V4H5m2 1h1V4H7m6 1h1V4h-1m4 1h1V4h-1M4 6h1V5H4m7 2h-1V6h1m5 1h-1V6h1m4 1h-1V6h1M8 8H7V7h1M4 8h1V7H4m3 4H6v-1h1m-3 4h1v-1H4m3 3H6v-1h1m-3 3h1v-1H4m3 3H6v-1h1m-5 3H0V0h22v2H2m4 20H5v-1H4v1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3v-1h1v-1H3V9h1V8H3V7h1V6H3V5h1V4H3V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h-1v1h1v1h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1V4H9v1H8v1H7V5H6v1H5v1h1v1H5v1H4v1h1v1H4v1h1v1h1v1H5v1H4v1h1v1h1v1H5v1H4v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpLeftStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpRightIcon],svg[memory-box-outer-light-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-2V2H.002V0H22z"></svg:path>`,
})
export class MemoryBoxOuterLightUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpRightStippleIcon],svg[memory-box-outer-light-up-right-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h1V4H3m4 1h1V4H7m6 1h1V4h-1m4 1h1V4h-1M2 7H1V6h1m4 1H5V6h1m5 1h-1V6h1m5 1h-1V6h1m1 3h1V8h-1m-1 4h-1v-1h1m1 4h1v-1h-1m-1 3h-1v-1h1m1 3h1v-1h-1m-1 3h-1v-1h1m2 2h-1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h1v-1h1v-1h-1v-1h1v-1h-1V9h-1V8h1V7h1V6h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1V4H9v1H8v1H7V5H6V4H5v1H4v1H3V5H2V4H1v1H0V4h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1m4 1h-2V2H0V0h22Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpRightStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpStippleIcon],svg[memory-box-outer-light-up-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H0V0h22M3 5h1V4H3m4 1h1V4H7m6 1h1V4h-1m4 1h1V4h-1m5 2h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1V4H9v1H8v1H7V5H6V4H5v1H4v1H3V5H2V4H1v1H0V4h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h-1v1h1M2 7H1V6h1m4 1H5V6h1m5 1h-1V6h1m5 1h-1V6h1m4 1h-1V6h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpVerticalStippleIcon],svg[memory-box-outer-light-up-vertical-stipple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h1V4H3m4 1h1V4H7m10 1h1V4h-1M2 7H1V6h1m4 1H5V6h1m14 1h-1V6h1m-6 2h1V7h-1M7 9h1V8H7m10 2h-1V9h1M6 11H5v-1h1m8 2h1v-1h-1m-7 2h1v-1H7m10 3h-1v-1h1M6 16H5v-1h1m8 3h1v-1h-1m-7 2h1v-1H7m10 2h-1v-1h1M6 21H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4H5v1H4v1H3V5H2V4H1v1H0V4h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V2H0V0h22v2H12m4 20h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h-1v1h1v1h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpVerticalStippleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpVerticalStippleLeftIcon],svg[memory-box-outer-light-up-vertical-stipple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h1V4H3m4 1h1V4H7M2 7H1V6h1m4 1H5V6h1m1 3h1V8H7m-1 3H5v-1h1m1 3h1v-1H7m-1 4H5v-1h1m1 4h1v-1H7m-1 3H5v-1h1m2 2H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7v-1h1v-1H7v-1H6v-1h1v-1h1v-1H7V9H6V8h1V7h1V6H7V5H6V4H5v1H4v1H3V5H2V4H1v1H0V4h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8v1h1v1H8m4 1h-2V2H0V0h22v2H12Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpVerticalStippleLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBoxOuterLightUpVerticalStippleRightIcon],svg[memory-box-outer-light-up-vertical-stipple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5h1V4h-1m3 3h-1V6h1m-6 2h1V7h-1m3 3h-1V9h1m-3 3h1v-1h-1m3 4h-1v-1h1m-3 4h1v-1h-1m3 3h-1v-1h1m-5 3h-2V2H0V0h22v2H12m4 20h-1v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1V9h1V8h-1V7h1V6h-1V5h1V4h-1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h1V3h1v1h-1v1h1v1h-1V5h-1V4h-1v1h-1v1h-1V5h-1V4h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h-1v1h1v1h1v1h-1v1h-1v1h1v1h1Z"></svg:path>`,
})
export class MemoryBoxOuterLightUpVerticalStippleRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBriefcaseIcon],svg[memory-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h5V3h1V2h6v1h1v3h5v1h1v12h-1v1H2v-1H1V7h1zm7 0h4V4H9zm10 2H3v10h16z"></svg:path>`,
})
export class MemoryBriefcaseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBroadcastIcon],svg[memory-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-1H9v-2h1V9h2v1h1v2h-1m3 4h-1v-1h-1v-1h1v-1h1V9h-1V8h-1V7H9v1H8v1H7v4h1v1h1v1H8v1H7v-1H6v-1H5V8h1V7h1V6h1V5h6v1h1v1h1v1h1v6h-1v1h-1m2 5h-1v-1h-1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h1v1H6v1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryBroadcastIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBugIcon],svg[memory-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h3V6h1V5h1V4H7V3H6V2h1V1h1v1h1v1h1v1h2V3h1V2h1V1h1v1h1v1h-1v1h-1v1h1v1h1v1h3v2h-2v2h2v2h-2v2h2v2h-3v1h-1v1h-1v1H8v-1H7v-1H6v-1H3v-2h2v-2H3v-2h2V9H3zm10 11v-1h1v-1h1V8h-1V7h-1V6H9v1H8v1H7v8h1v1h1v1zm-4-5h4v2H9zm0-4h4v2H9z"></svg:path>`,
})
export class MemoryBugIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryBugFillIcon],svg[memory-bug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h3V6h1V5h1V4H7V3H6V2h1V1h1v1h1v1h1v1h2V3h1V2h1V1h1v1h1v1h-1v1h-1v1h1v1h1v1h3v2h-2v2h2v2h-2v2h2v2h-3v1h-1v1h-1v1H8v-1H7v-1H6v-1H3v-2h2v-2H3v-2h2V9H3zm6 6v2h4v-2zm0-4v2h4V9z"></svg:path>`,
})
export class MemoryBugFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCalculatorIcon],svg[memory-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21H4v-1H3V3h1V2h14v1h1v17h-1ZM16 7V4H6v3Zm-8 4V9H6v2Zm4 0V9h-2v2Zm4 0V9h-2v2Zm-8 4v-2H6v2Zm4 0v-2h-2v2Zm4 0v-2h-2v2Zm-8 4v-2H6v2Zm4 0v-2h-2v2Zm4 0v-2h-2v2Z"></svg:path>`,
})
export class MemoryCalculatorIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCalendarIcon],svg[memory-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-1H2V3h1V2h2V0h2v2h8V0h2v2h2v1h1v16h-1zM4 4v2h14V4zm0 4v10h14V8zm8 4h4v4h-4z"></svg:path>`,
})
export class MemoryCalendarIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCalendarImportIcon],svg[memory-calendar-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-6v-2h5V9H4v8h5v2H3v-1H2V4h1V3h2V1h2v2h8V1h2v2h2v1h1v14h-1m-7 3h-2v-6H7v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h-3m6-8V5H4v2Z"></svg:path>`,
})
export class MemoryCalendarImportIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCalendarMonthIcon],svg[memory-calendar-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-1H2V3h1V2h2V0h2v2h8V0h2v2h2v1h1v16h-1zM4 4v2h14V4zm0 4v10h14V8zm10 6h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2H6zm0-4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MemoryCalendarMonthIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCancelIcon],svg[memory-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2zm-4-1V5h-1V4h-2V3H8v1H6v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v-2h1V8h-1V6zm-3 10v-1h-1v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V8H6V7H5V6H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h-1v-1z"></svg:path>`,
})
export class MemoryCancelIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCardIcon],svg[memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h18v1h1v14h-1v1H2v-1H1V4h1zm1 2v12h16V5z"></svg:path>`,
})
export class MemoryCardIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCardTextIcon],svg[memory-card-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8v2H5V8zM5 12h10v2H5zM2 3h18v1h1v14h-1v1H2v-1H1V4h1zm1 2v12h16V5z"></svg:path>`,
})
export class MemoryCardTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCartIcon],svg[memory-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v2H6v-1H5v-4H4V8H3V3H1V1h4v3h16v4h-1v3h-1v1H7v2zM5 7h1v3h12V7h1V6H5zm2 10h2v1h1v2H9v1H7v-1H6v-2h1zm8 0h2v1h1v2h-1v1h-2v-1h-1v-2h1z"></svg:path>`,
})
export class MemoryCartIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCashIcon],svg[memory-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-1H9v-2h1V9h2v1h1v2h-1m8 5H2V5h18m-4 10v-2h2V9h-2V7H6v2H4v4h2v2Z"></svg:path>`,
})
export class MemoryCashIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCastIcon],svg[memory-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H2v-3h2v1h1m3 2H6v-3H5v-1H2v-2h3v1h2v2h1m3 3H9v-4H8v-2H6v-1H2v-2h4v1h2v1h1v1h1v2h1m8 4h-6v-2h5V5H4v3H2V4h1V3h16v1h1v14h-1Z"></svg:path>`,
})
export class MemoryCastIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCastleIcon],svg[memory-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19h-7v-6h-2v6H3v-6H2V4h5v2h1V4h6v2h1V4h5v9h-1m-2 4v-5h1V6h-1v2h-5V6h-2v2H5V6H4v6h1v5h3v-5h1v-1h4v1h1v5Z"></svg:path>`,
})
export class MemoryCastleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChartBarIcon],svg[memory-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v16h16v2H2zm4 14V8h4v8zm5 0V4h4v12zm5 0v-5h4v5z"></svg:path>`,
})
export class MemoryChartBarIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChatIcon],svg[memory-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20H1v-2h1v-1h1v-1h1v-2H3V8h1V7h1V6h1V5h2V4h8v1h2v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-2v1H8v1H6m0-1v-1h1v-1h8v-1h2v-1h1v-1h1V9h-1V8h-1V7h-2V6H9v1H7v1H6v1H5v4h1v3H5v1H4v1Z"></svg:path>`,
})
export class MemoryChatIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChatProcessingIcon],svg[memory-chat-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12H7v-2h2m4 2h-2v-2h2m4 2h-2v-2h2M6 20H1v-2h1v-1h1v-1h1v-2H3V8h1V7h1V6h1V5h2V4h8v1h2v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-2v1H8v1H6m0-1v-1h1v-1h8v-1h2v-1h1v-1h1V9h-1V8h-1V7h-2V6H9v1H7v1H6v1H5v4h1v3H5v1H4v1Z"></svg:path>`,
})
export class MemoryChatProcessingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckIcon],svg[memory-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h2v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4z"></svg:path>`,
})
export class MemoryCheckIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxBlankIcon],svg[memory-checkbox-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h1V3h14v1h1v14h-1v1H4v-1H3zm2 13h12V5H5z"></svg:path>`,
})
export class MemoryCheckboxBlankIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxCrossIcon],svg[memory-checkbox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h1v1h1v2h-2v-1h-1v-1h-2v1H9v1H7v-2h1v-1h1v-2H8V9H7V7h2v1h1v1h2V8h1V7h2v2h-1v1h-1zm5 7H4v-1H3V4h1V3h14v1h1v14h-1zM5 5v12h12V5z"></svg:path>`,
})
export class MemoryCheckboxCrossIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxIntermediateIcon],svg[memory-checkbox-intermediate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15H7V7h8m3 12H4v-1H3V4h1V3h14v1h1v14h-1m-1-1V5H5v12Z"></svg:path>`,
})
export class MemoryCheckboxIntermediateIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxIntermediateVariantIcon],svg[memory-checkbox-intermediate-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15H7V7h8v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8m10 5H4v-1H3V4h1V3h14v1h1v14h-1m-1-1V5H5v12Z"></svg:path>`,
})
export class MemoryCheckboxIntermediateVariantIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxMarkedIcon],svg[memory-checkbox-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h1V3h14v1h-1v1H5v12h12v-6h1v-1h1v8h-1v1H4v-1H3zm3 5h2v1h1v1h1v1h2v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6z"></svg:path>`,
})
export class MemoryCheckboxMarkedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckerLargeIcon],svg[memory-checker-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-6v-6h-6v6H5v-6H0v-6h5V5H0V0h5v5h5V0h6v5h6v5h-6v6h6m-6-6V5h-6v5m0 6v-6H5v6Z"></svg:path>`,
})
export class MemoryCheckerLargeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckerMediumIcon],svg[memory-checker-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-4v-3h-3v3h-4v-3H7v3H4v-3H0v-4h4v-4H0V8h4V4H0V0h4v4h3V0h4v4h4V0h3v4h4v4h-4v3h4v4h-4v4h4M11 8V4H7v4m11 0V4h-3v4m-8 3V8H4v3m11 0V8h-4v3m0 4v-4H7v4m11 0v-4h-3v4m-8 4v-4H4v4m11 0v-4h-4v4Z"></svg:path>`,
})
export class MemoryCheckerMediumIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckerSmallIcon],svg[memory-checker-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h1V1H2Zm2 0h1V1H4Zm2 0h1V1H6Zm2 0h1V1H8Zm2 0h1V1h-1Zm2 0h1V1h-1Zm2 0h1V1h-1Zm2 0h1V1h-1Zm2 0h1V1h-1Zm2 0h1V1h-1ZM1 3h1V2H1Zm2 0h1V2H3Zm2 0h1V2H5Zm2 0h1V2H7Zm2 0h1V2H9Zm2 0h1V2h-1Zm2 0h1V2h-1Zm2 0h1V2h-1Zm2 0h1V2h-1Zm2 0h1V2h-1ZM2 4h1V3H2Zm2 0h1V3H4Zm2 0h1V3H6Zm2 0h1V3H8Zm2 0h1V3h-1Zm2 0h1V3h-1Zm2 0h1V3h-1Zm2 0h1V3h-1Zm2 0h1V3h-1Zm2 0h1V3h-1ZM1 5h1V4H1Zm2 0h1V4H3Zm2 0h1V4H5Zm2 0h1V4H7Zm2 0h1V4H9Zm2 0h1V4h-1Zm2 0h1V4h-1Zm2 0h1V4h-1Zm2 0h1V4h-1Zm2 0h1V4h-1ZM2 6h1V5H2Zm2 0h1V5H4Zm2 0h1V5H6Zm2 0h1V5H8Zm2 0h1V5h-1Zm2 0h1V5h-1Zm2 0h1V5h-1Zm2 0h1V5h-1Zm2 0h1V5h-1Zm2 0h1V5h-1ZM1 7h1V6H1Zm2 0h1V6H3Zm2 0h1V6H5Zm2 0h1V6H7Zm2 0h1V6H9Zm2 0h1V6h-1Zm2 0h1V6h-1Zm2 0h1V6h-1Zm2 0h1V6h-1Zm2 0h1V6h-1ZM2 8h1V7H2Zm2 0h1V7H4Zm2 0h1V7H6Zm2 0h1V7H8Zm2 0h1V7h-1Zm2 0h1V7h-1Zm2 0h1V7h-1Zm2 0h1V7h-1Zm2 0h1V7h-1Zm2 0h1V7h-1ZM1 9h1V8H1Zm2 0h1V8H3Zm2 0h1V8H5Zm2 0h1V8H7Zm2 0h1V8H9Zm2 0h1V8h-1Zm2 0h1V8h-1Zm2 0h1V8h-1Zm2 0h1V8h-1Zm2 0h1V8h-1ZM2 10h1V9H2Zm2 0h1V9H4Zm2 0h1V9H6Zm2 0h1V9H8Zm2 0h1V9h-1Zm2 0h1V9h-1Zm2 0h1V9h-1Zm2 0h1V9h-1Zm2 0h1V9h-1Zm2 0h1V9h-1ZM1 11h1v-1H1Zm2 0h1v-1H3Zm2 0h1v-1H5Zm2 0h1v-1H7Zm2 0h1v-1H9Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM2 12h1v-1H2Zm2 0h1v-1H4Zm2 0h1v-1H6Zm2 0h1v-1H8Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM1 13h1v-1H1Zm2 0h1v-1H3Zm2 0h1v-1H5Zm2 0h1v-1H7Zm2 0h1v-1H9Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM2 14h1v-1H2Zm2 0h1v-1H4Zm2 0h1v-1H6Zm2 0h1v-1H8Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM1 15h1v-1H1Zm2 0h1v-1H3Zm2 0h1v-1H5Zm2 0h1v-1H7Zm2 0h1v-1H9Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM2 16h1v-1H2Zm2 0h1v-1H4Zm2 0h1v-1H6Zm2 0h1v-1H8Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM1 17h1v-1H1Zm2 0h1v-1H3Zm2 0h1v-1H5Zm2 0h1v-1H7Zm2 0h1v-1H9Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM2 18h1v-1H2Zm2 0h1v-1H4Zm2 0h1v-1H6Zm2 0h1v-1H8Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM1 19h1v-1H1Zm2 0h1v-1H3Zm2 0h1v-1H5Zm2 0h1v-1H7Zm2 0h1v-1H9Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM2 20h1v-1H2Zm2 0h1v-1H4Zm2 0h1v-1H6Zm2 0h1v-1H8Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1ZM1 21h1v-1H1Zm2 0h1v-1H3Zm2 0h1v-1H5Zm2 0h1v-1H7Zm2 0h1v-1H9Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm2 0h1v-1h-1Zm3 1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1H9v-1H8v1H7v-1H6v1H5v-1H4v1H3v-1H2v1H1v-1H0v-1h1v-1H0v-1h1v-1H0v-1h1v-1H0v-1h1v-1H0v-1h1v-1H0v-1h1V9H0V8h1V7H0V6h1V5H0V4h1V3H0V2h1V1H0V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1V0h1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1Z"></svg:path>`,
})
export class MemoryCheckerSmallIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCheckerboardIcon],svg[memory-checkerboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1M11 7V4H7v3m11 0V5h-1V4h-2v3m-8 4V7H4v4m11 0V7h-4v4m0 4v-4H7v4m11 0v-4h-3v4m-8 3v-3H4v2h1v1m10 0v-3h-4v3Z"></svg:path>`,
})
export class MemoryCheckerboardIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChestIcon],svg[memory-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H3v-1H2V4h1V3h16v1h1v14h-1M18 8V5H4v3m8 4v-2h-2v2m8 5v-7h-4v3h-1v1H9v-1H8v-3H4v7Z"></svg:path>`,
})
export class MemoryChestIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChestFillIcon],svg[memory-chest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h-5V7H7v2H2V4h1V3h16v1h1m-8 9h-2v-1H9V9h4v3h-1m7 7H3v-1H2v-7h5v2h1v1h1v1h4v-1h1v-1h1v-2h5v7h-1Z"></svg:path>`,
})
export class MemoryChestFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronDownIcon],svg[memory-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h1V9h1V7h-2v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8V9H7V8H6V7H4v2h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1"></svg:path>`,
})
export class MemoryChevronDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronDownCircleIcon],svg[memory-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9v2h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6V9h2v1h1v1h1v1h2v-1h1v-1h1V9zm-1-8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2z"></svg:path>`,
})
export class MemoryChevronDownCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronLeftIcon],svg[memory-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1V6h1V4h-2v1h-1v1h-1v1h-1v1H9v1H8v1H7v2h1v1h1v1h1v1h1v1"></svg:path>`,
})
export class MemoryChevronLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronLeftCircleIcon],svg[memory-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16h-2v-1h-1v-1H9v-1H8v-1H7v-2h1V9h1V8h1V7h1V6h2v2h-1v1h-1v1h-1v2h1v1h1v1h1zm2-15v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2z"></svg:path>`,
})
export class MemoryChevronLeftCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronRightIcon],svg[memory-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6V5H9V4H7v2h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1H9v1H8v1H7v2h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6"></svg:path>`,
})
export class MemoryChevronRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronRightCircleIcon],svg[memory-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h2v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6H9v2h1v1h1v1h1v2h-1v1h-1v1H9zm6-15v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2z"></svg:path>`,
})
export class MemoryChevronRightCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronUpIcon],svg[memory-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H5v1H4v2h2v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-1V7h-2v1H9v1H8v1H7v1H6"></svg:path>`,
})
export class MemoryChevronUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryChevronUpCircleIcon],svg[memory-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13v-2h1v-1h1V9h1V8h1V7h2v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-2v1H9v1H8v1zm9-12v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2z"></svg:path>`,
})
export class MemoryChevronUpCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCircleIcon],svg[memory-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2z"></svg:path>`,
})
export class MemoryCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryClipboardIcon],svg[memory-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h1V4h4V2h2V1h4v1h2v2h4v1h1v15h-1v1H3v-1H2zm8-2v2h2V3zm8 3h-2v2H6V6H4v13h14z"></svg:path>`,
})
export class MemoryClipboardIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryClockIcon],svg[memory-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h2v6h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-1zm5-4v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2z"></svg:path>`,
})
export class MemoryClockIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryClockFillIcon],svg[memory-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15h1v-1h1v-1h-1v-1h-1v-1h-1V5h-2v7h1v1h1v1h1m2 7H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2Z"></svg:path>`,
})
export class MemoryClockFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCloseIcon],svg[memory-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17h-1v-1h-1v-1h-1v-1h-1v-1h-2v1H9v1H8v1H7v1H6v-1H5v-1h1v-1h1v-1h1v-1h1v-2H8V9H7V8H6V7H5V6h1V5h1v1h1v1h1v1h1v1h2V8h1V7h1V6h1V5h1v1h1v1h-1v1h-1v1h-1v1h-1v2h1v1h1v1h1v1h1v1h-1Z"></svg:path>`,
})
export class MemoryCloseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCloseOutlineIcon],svg[memory-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h1v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1V6h-1V5h-1v1h-1v1h-1v1h-1v1h-2V8H9V7H8V6H7V5H6v1H5v1h1v1h1v1h1v1h1v2H8v1H7v1H6v1H5v1h1v1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1m2 3h-3v-1h-1v-1h-1v-1h-2v1H9v1H8v1H5v-1H4v-1H3v-3h1v-1h1v-1h1v-2H5V9H4V8H3V5h1V4h1V3h3v1h1v1h1v1h2V5h1V4h1V3h3v1h1v1h1v3h-1v1h-1v1h-1v2h1v1h1v1h1v3h-1v1h-1Z"></svg:path>`,
})
export class MemoryCloseOutlineIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCloudIcon],svg[memory-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18H3v-1H2v-1H1v-5h1v-1h1V9h2V8h1V6h1V5h1V4h6v1h1v1h1v1h1v3h2v1h1v1h1v4h-1v1h-1m-1-1v-1h1v-2h-1v-1h-4v-1h1V8h-1V7h-1V6H9v1H8v2h1v1H6v1H4v1H3v3h1v1Z"></svg:path>`,
})
export class MemoryCloudIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCloudDownIcon],svg[memory-cloud-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15h-5v-2h4v-1h1v-2h-1V9h-4V8h1V5h-1V4h-1V3H9v1H8v2h1v1H6v1H4v1H3v3h1v1h4v2H3v-1H2v-1H1V8h1V7h1V6h2V5h1V3h1V2h1V1h6v1h1v1h1v1h1v3h2v1h1v1h1v4h-1v1h-1m-7 7h-2v-1H9v-1H8v-1H7v-1h3v-6h2v6h3v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryCloudDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCloudUpIcon],svg[memory-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16h-3v-2h2v-1h1v-2h-1v-1h-4V9h1V6h-1V5h-1V4H9v1H8v2h1v1H6v1H4v1H3v3h1v1h2v2H3v-1H2v-1H1V9h1V8h1V7h2V6h1V4h1V3h1V2h6v1h1v1h1v1h1v3h2v1h1v1h1v4h-1v1h-1m-7 5h-2v-4H7v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h-3Z"></svg:path>`,
})
export class MemoryCloudUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCoffeeIcon],svg[memory-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20v-2h16v2zM2 3h17v1h1v6h-1v1h-3v3h-1v1h-1v1H4v-1H3v-1H2zm14 2v4h2V5zM4 5v8h1v1h8v-1h1V5z"></svg:path>`,
})
export class MemoryCoffeeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCoinCopperIcon],svg[memory-coin-copper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14h-2v-1H9v-1H8v-2h1V9h1V8h2v1h1v1h1v2h-1v1h-1Zm3 5H7v-1H6v-1H5v-1H4v-1H3V7h1V6h1V5h1V4h1V3h8v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1Zm-3-7v-2h-2v2Zm2 5v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5H8v1H7v1H6v1H5v6h1v1h1v1h1v1Z"></svg:path>`,
})
export class MemoryCoinCopperIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCoinElectrumIcon],svg[memory-coin-electrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H5v-1H4v-2H3v-2H2V8h1V6h1V4h1V3h12v1h1v2h1v2h1v6h-1v2h-1v2h-1Zm-5-3v-2h-2v2Zm4 1v-2h1v-3h1v-2h-1V7h-1V5H6v2H5v3H4v2h1v3h1v2h3v-1H8v-2h1v-1h1v-1h2v1h1v1h1v2h-1v1Z"></svg:path>`,
})
export class MemoryCoinElectrumIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCoinGoldIcon],svg[memory-coin-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H3v-2h1v-2h1v-3h1v-2H5V7H4V5H3V3h16v2h-1v2h-1v3h-1v2h1v3h1v2h1Zm-3-2v-1h-1v-2h-1V8h1V6h1V5H6v1h1v2h1v6H7v2H6v1Z"></svg:path>`,
})
export class MemoryCoinGoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCoinPlatinumIcon],svg[memory-coin-platinum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1Zm-1-2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3H9v1H8v1H7v1H6v1H5v1H4v1H3v4h1v1h1v1h1v1h1v1h1v1h1v1Z"></svg:path>`,
})
export class MemoryCoinPlatinumIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCoinSilverIcon],svg[memory-coin-silver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h1V9h-1V7h-1V5h-2v2H9v2H8v2h1v-1h1V9h2v1h1Zm6 8H3v-1H2v-2h1v-2h1v-2h1v-2h1V8h1V6h1V4h1V3h1V2h2v1h1v1h1v2h1v2h1v2h1v2h1v2h1v2h1v2h-1Zm-7-6v-2h-2v2Zm5 4v-2h-1v-2h-1v-2h-1v2h-1v1h-1v1h-2v-1H9v-1H8v-2H7v2H6v2H5v2Z"></svg:path>`,
})
export class MemoryCoinSilverIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCommentIcon],svg[memory-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v1h1v14h-1v1h-8v1h-1v1h-1v1H6v-3H2v-1H1V3h1zm1 2v12h5v3h1v-1h1v-1h1v-1h8V4z"></svg:path>`,
})
export class MemoryCommentIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCommentTextIcon],svg[memory-comment-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v1h1v14h-1v1h-8v1h-1v1h-1v1H6v-3H2v-1H1V3h1zm1 2v12h5v3h1v-1h1v-1h1v-1h8V4zm2 3h12v2H5zm0 4h10v2H5z"></svg:path>`,
})
export class MemoryCommentTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCommentUserIcon],svg[memory-comment-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h-2V9H9V7h1V6h2v1h1v2h-1m3 5H7v-2h1v-1h6v1h1m-7 7h1v-1h1v-1h1v-1h8V4H3v12h5m2 5H6v-3H2v-1H1V3h1V2h18v1h1v14h-1v1h-8v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryCommentUserIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassIcon],svg[memory-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1zm-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2zm-4 6V8h2V7h2V6h2v2h-1v2h-1v2h-1v1h-1v1h-2v1H8v1H6v-2h1v-2h1v-2h1V9zm2 1h-2v2h2z"></svg:path>`,
})
export class MemoryCompassIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassEastArrowIcon],svg[memory-compass-east-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10v2H5v1H4v1H3v1H2v1H0v-2h1v-1h1v-1h1v-2H2V9H1V8H0V6h2v1h1v1h1v1h1v1m5-4h6v2h-4v2h4v2h-4v2h4v2h-6"></svg:path>`,
})
export class MemoryCompassEastArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassNorthArrowIcon],svg[memory-compass-north-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h2v1.5h1V8h1V4h2v10h-2v-2h-1v-2h-1v4H8m2 3v-1h2v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1v-1h-2v1H9v1H8v1H6v-2h1v-1h1v-1h1v-1"></svg:path>`,
})
export class MemoryCompassNorthArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassNorthEastIcon],svg[memory-compass-north-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v1.5h1V10h1V6h2v10H8v-2H7v-2H6v4H4m8-10h6v2h-4v2h4v2h-4v2h4v2h-6"></svg:path>`,
})
export class MemoryCompassNorthEastIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassNorthWestIcon],svg[memory-compass-north-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h2v1.5h1V10h1V6h2v10H6v-2H5v-2H4v4H2m8-10h2v6h1v1h1V8h2v5h1v-1h1V6h2v7h-1v2h-1v1h-2v-1h-2v1h-2v-1h-1v-2h-1"></svg:path>`,
})
export class MemoryCompassNorthWestIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassSouthArrowIcon],svg[memory-compass-south-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h2V5h1V4h1V3h1V2h1V0h-2v1h-1v1h-1v1h-2V2H9V1H8V0H6v2h1v1h1v1h1v1h1M9 8h5v2h-4v2h3v1h1v4h-1v1H8v-2h4v-2H9v-1H8V9h1"></svg:path>`,
})
export class MemoryCompassSouthArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassSouthEastIcon],svg[memory-compass-south-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6h5v2H6v2h3v1h1v4H9v1H4v-2h4v-2H5v-1H4V7h1m7-1h6v2h-4v2h4v2h-4v2h4v2h-6"></svg:path>`,
})
export class MemoryCompassSouthEastIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassSouthWestIcon],svg[memory-compass-south-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h5v2H4v2h3v1h1v4H7v1H2v-2h4v-2H3v-1H2V7h1m7-1h2v6h1v1h1V8h2v5h1v-1h1V6h2v7h-1v2h-1v1h-2v-1h-2v1h-2v-1h-1v-2h-1"></svg:path>`,
})
export class MemoryCompassSouthWestIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCompassWestArrowIcon],svg[memory-compass-west-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v6h1v1h1V8h2v5h1v-1h1V6h2v7h-1v2h-1v1h-2v-1H8v1H6v-1H5v-2H4m12-3v2h1v1h1v1h1v1h1v1h2v-2h-1v-1h-1v-1h-1v-2h1V9h1V8h1V6h-2v1h-1v1h-1v1h-1v1"></svg:path>`,
})
export class MemoryCompassWestArrowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCreditCardIcon],svg[memory-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h18v1h1v12h-1v1H2v-1H1V5h1zm1 2v2h16V6zm0 10h16v-5H3z"></svg:path>`,
})
export class MemoryCreditCardIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCrossbowIcon],svg[memory-crossbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11h1v-1h1V9h1V7h1V5h-1V4H7v1H5v2h1v1h1v1h1v1h1m7 7h1v-1h1v-6h-1V9h-2v1h-2v1h-1v2h1v1h1v1h1v1h1m2 4h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1H9v1H8v1H7v1H6v1H4v-1H3v-2h1v-1h1v-1h1v-1h1v-1h1v-2H7V9H6V8H5V7H4V6H3V5H2V4h2V3h2V2h8v1h1v1h2V3h2v2h-1v2h1v2h1v7h-1v2h-1Z"></svg:path>`,
})
export class MemoryCrossbowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCrownIcon],svg[memory-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h18v2H2zM4 6v1h1v1h1V7h1V6h1V5h1V4h1V3h2v1h1v1h1v1h1v1h1v1h1V7h1V6h1V5h1v11H2V5h1v1zm3 8h11v-4h-3V9h-1V8h-1V7h-1V6h-2v1H9v1H8v1H7v1H4v4z"></svg:path>`,
})
export class MemoryCrownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCubeIcon],svg[memory-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-10V9h2V8h2V7h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v1h2v1h2v1h2v1m0 8v-7H8v-1H6V9H4v7h2v1h2v1m6 0v-1h2v-1h2V9h-2v1h-2v1h-2v7Z"></svg:path>`,
})
export class MemoryCubeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryCubeUnfoldedIcon],svg[memory-cube-unfolded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v5h10v7h-5v5h-7v-5H0V8h5V3zm-2 2H7v3h3zm-3 5v3h3v-3zm-2 0H2v3h3zm12 0v3h3v-3zm-2 5h-3v3h3zm-3-5v3h3v-3z"></svg:path>`,
})
export class MemoryCubeUnfoldedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDaggerIcon],svg[memory-dagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V5h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h1Zm-4 6H4v-1H3v-2h1v-1h1v-1h1v-1H5v-1H4v-2h1V9h2v1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h5v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h1v2h-1v1h-2v-1H9v-1H8v1H7v1H6Z"></svg:path>`,
})
export class MemoryDaggerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDatabaseIcon],svg[memory-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h8v1h2v1h1v1h1v12h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3V5h1V4h1V3h2zm1 14v-1H6v-1H5v2h1v1h2v1h6v-1h2v-1h1v-2h-1v1h-2v1zm0-5v-1H6V9H5v3h2v1h2v1h4v-1h2v-1h2V9h-1v1h-2v1zm1-3v1h4V8h2V7h2V6h-1V5h-2V4H8v1H6v1H5v1h2v1z"></svg:path>`,
})
export class MemoryDatabaseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDeviceIcon],svg[memory-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h.94v18H20v1H2v-1h-.94V2H2zm1 2v16h16V3zm1 1h14v8H4zm1 10h3v3H5zm7 1h2v2h-2zm3-1h2v2h-2z"></svg:path>`,
})
export class MemoryDeviceIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDiamondIcon],svg[memory-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h10v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2V6h1V5h1V4h1V3h1zm9 3V4h-1v2h1v1h2V6h-1V5zm-3 1V4h-2v2H9v1h4V6zM8 6V4H7v1H6v1H5v1h2V6zm-4 5h1v1h1v1h1v1h1v-2H7V9H4zm6 1v4h2v-4h1V9H9v3zm4 0v2h1v-1h1v-1h1v-1h1V9h-3v3z"></svg:path>`,
})
export class MemoryDiamondIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDivisionIcon],svg[memory-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8h-2V7H9V5h1V4h2v1h1v2h-1Zm5 4H5v-2h12Zm-5 6h-2v-1H9v-2h1v-1h2v1h1v2h-1Z"></svg:path>`,
})
export class MemoryDivisionIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDoorIcon],svg[memory-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h2v2h-2zm4-8v1h1v15h2v2H3v-2h2V3h1V2zm-1 2H7v14h8z"></svg:path>`,
})
export class MemoryDoorIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDoorBoxIcon],svg[memory-door-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14h-2v-2h2Zm3 4h1v-1h1V5h-1V4H5v1H4v12h1v1h1V6h10Zm2 2H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-4-2V8H8v10Z"></svg:path>`,
})
export class MemoryDoorBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDoorOpenIcon],svg[memory-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10v2H9v-2zM6 2h10v1h1v15h2v2H3v-2h2V3h1zm1 2v14h4V4zm6 0v1h1V4zm1 1v1h1V5zm0 1h-1v1h1zm0 1v1h1V7zm0 1h-1v1h1zm0 1v1h1V9zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1z"></svg:path>`,
})
export class MemoryDoorOpenIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDotHexagonIcon],svg[memory-dot-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-1H9v-2h1V9h2v1h1v2h-1m0 9h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-1v-1h2v-1h2v-1h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v10h2v1h2v1h2v1Z"></svg:path>`,
})
export class MemoryDotHexagonIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDotHexagonFillIcon],svg[memory-dot-hexagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-7v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryDotHexagonFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDotOctagonIcon],svg[memory-dot-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-1H9v-2h1V9h2v1h1v2h-1m3 9H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1V7h1V6h1V5h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1m-1-1v-1h1v-1h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5h-1V4h-1V3H8v1H7v1H6v1H5v1H4v1H3v6h1v1h1v1h1v1h1v1h1v1Z"></svg:path>`,
})
export class MemoryDotOctagonIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDotOctagonFillIcon],svg[memory-dot-octagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1V7h1V6h1V5h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1m-3-7v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryDotOctagonFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryDownloadIcon],svg[memory-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v2H4v-2zM14 2v6h4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5V9H4V8h4V2zm-2 2h-2v6H9v1h1v1h2v-1h1v-1h-1z"></svg:path>`,
})
export class MemoryDownloadIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryEmailIcon],svg[memory-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5h1V4h18v1h1v13h-1v1H2v-1H1zm2 12h16V9h-1v1h-2v1h-2v1h-2v1h-2v-1H8v-1H6v-1H4V9H3zM19 6H3v1h2v1h2v1h2v1h4V9h2V8h2V7h2z"></svg:path>`,
})
export class MemoryEmailIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryEyeIcon],svg[memory-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14H9v-1H8V9h1V8h4v1h1v4h-1m2 4H7v-1H5v-1H3v-1H2v-1H1V9h1V8h1V7h2V6h2V5h8v1h2v1h2v1h1v1h1v4h-1v1h-1v1h-2v1h-2m-3-4v-2h-2v2m5 3v-1h2v-1h1v-1h1v-2h-1V9h-1V8h-2V7H7v1H5v1H4v1H3v2h1v1h1v1h2v1Z"></svg:path>`,
})
export class MemoryEyeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryEyeFillIcon],svg[memory-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14h-2v-1H9v-1H8v-2h1V9h1V8h2v1h1v1h1v2h-1v1h-1m3 4H7v-1H5v-1H3v-1H2v-1H1V9h1V8h1V7h2V6h2V5h8v1h2v1h2v1h1v1h1v4h-1v1h-1v1h-2v1h-2m-2-1v-1h1v-1h1V9h-1V8h-1V7H9v1H8v1H7v4h1v1h1v1Z"></svg:path>`,
})
export class MemoryEyeFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFileIcon],svg[memory-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1h1v1h1v1h1v1h1v1h1v1h1v13h-1v1H4v-1H3V2h1V1zm0 3h-1v4h4V7h-1V6h-1V5h-1zM5 3v16h12v-9h-6V9h-1V3z"></svg:path>`,
})
export class MemoryFileIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFillIcon],svg[memory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H0V0h22Z"></svg:path>`,
})
export class MemoryFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFilterIcon],svg[memory-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17h1v-7h1V9h1V8h1V7h1V5H6v2h1v1h1v1h1v1h1v6h1m3 4h-3v-1h-1v-1H9v-1H8v-6H7v-1H6V9H5V8H4V4h1V3h12v1h1v4h-1v1h-1v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryFilterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFireIcon],svg[memory-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20H7v-1H6v-1H5v-1H4v-5h1v-2h1V9h1V8h1v1h1v2h1V9h1V5h-1V4H9V3H8V2h3v1h2v1h1v1h1v1h1v1h1v2h1v7h-1v2h-1v1h-2m-2-1v-1h2v-1h1v-2h1v-4h-1V8h-1V7h-1v4h-1v2h-1v1h-1v1H9v-1H8v-3H7v1H6v4h1v1h1v1Z"></svg:path>`,
})
export class MemoryFireIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskIcon],svg[memory-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12h2v2h-2zm3-11v1h1v3h-1v2h1v2h1v2h1v2h1v1h1v2h1v4h-1v1H3v-1H2v-4h1v-2h1v-1h1v-2h1V9h1V7h1V5H7V2h1V1zm-2 2h-2v5H9v2H8v2H7v1H6v2H5v2h1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1h2v-1h1v-2h1v-1h-1v-2h-1v-2h-1V8h-1z"></svg:path>`,
})
export class MemoryFlaskIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskEmptyIcon],svg[memory-flask-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1h6v1h1v3h-1v2h1v2h1v2h1v2h1v1h1v2h1v4h-1v1H3v-1H2v-4h1v-2h1v-1h1v-2h1V9h1V7h1V5H7V2h1zm2 2v5H9v2H8v2H7v1H6v2H5v2H4v2h14v-2h-1v-2h-1v-1h-1v-2h-1v-2h-1V8h-1V3z"></svg:path>`,
})
export class MemoryFlaskEmptyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskRoundBottomIcon],svg[memory-flask-round-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h2v2h-2zm2-10v2h1v5h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-6h1v-1h1V9h1V8h1V3h1V1zm-1 4h-2v4H9v1H8v1H7v1H6v2h1v-1h2v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h-1v-1h-1v-1h-1V9h-1z"></svg:path>`,
})
export class MemoryFlaskRoundBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFlaskRoundBottomEmptyIcon],svg[memory-flask-round-bottom-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h4v2h1v5h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v1H8v-1H7v-1H6v-1H5v-1H4v-6h1v-1h1V9h1V8h1V3h1zm1 4v4H9v1H8v1H7v1H6v4h1v1h1v1h1v1h4v-1h1v-1h1v-1h1v-4h-1v-1h-1v-1h-1V9h-1V5z"></svg:path>`,
})
export class MemoryFlaskRoundBottomEmptyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFloppyDiskIcon],svg[memory-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h1V2h13v1h1v1h1v1h1v1h1v13h-1v1H3v-1H2zm16 4h-1V6h-1V5h-1v4H6V4H4v14h2v-5h10v5h2zm-7-3v3h2V4zm3 14v-3H8v3z"></svg:path>`,
})
export class MemoryFloppyDiskIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFolderIcon],svg[memory-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h7v1h1v1h10v1h1v12h-1v1H2v-1H1V4h1zm1 4v10h16V7z"></svg:path>`,
})
export class MemoryFolderIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFolderOpenIcon],svg[memory-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h1V3h7v1h1v1h10v1h1v12h-1v1H2v-1H1zm2 5h16V7H9V6H8V5H3zm0 8h16v-6H3z"></svg:path>`,
})
export class MemoryFolderOpenIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignBottomIcon],svg[memory-format-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h-2v-1H9V9H8V8H7V7H6V6h4V2h2v4h4v1h-1v1h-1v1h-1v1h-1m6 5H4v-2h14m-4 5H4v-2h10Z"></svg:path>`,
})
export class MemoryFormatAlignBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignCenterIcon],svg[memory-format-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m-3 5H7V7h8m3 5H4v-2h14m-3 5H7v-2h8m3 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatAlignCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignJustifyIcon],svg[memory-format-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m0 5H4V7h14m0 5H4v-2h14m0 5H4v-2h14m0 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatAlignJustifyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignLeftIcon],svg[memory-format-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m-4 5H4V7h10m4 5H4v-2h14m-4 5H4v-2h10m4 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatAlignLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignRightIcon],svg[memory-format-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m0 5H8V7h10m0 5H4v-2h14m0 5H8v-2h10m0 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatAlignRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignTopIcon],svg[memory-format-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m-4 5H4V7h10m-2 13h-2v-4H6v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h-4Z"></svg:path>`,
})
export class MemoryFormatAlignTopIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatBoldIcon],svg[memory-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19H6v-2h1V5H6V3h7v1h1v1h1v1h1v4h-1v2h1v1h1v4h-1v1h-1m-3-8V9h1V7h-1V6h-2v4m3 6v-1h1v-1h-1v-1h-3v3Z"></svg:path>`,
})
export class MemoryFormatBoldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatFloatLeftIcon],svg[memory-format-float-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m-2 5h-6V7h6m-7 5H4V7h5m9 5h-8v-2h8m-2 5H4v-2h12m2 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatFloatLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatFloatRightIcon],svg[memory-format-float-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m-2 5h-6V7h6m-7 5H4V7h5m9 5h-8v-2h8m-2 5H4v-2h12m2 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatFloatRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatHorizontalAlignCenterIcon],svg[memory-format-horizontal-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15H5v-3H2v-2h3V7h1v1h1v1h1v1h1v2H8v1H7v1H6m11 1h-1v-1h-1v-1h-1v-1h-1v-2h1V9h1V8h1V7h1v3h3v2h-3m-5 6h-2V4h2Z"></svg:path>`,
})
export class MemoryFormatHorizontalAlignCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatItalicIcon],svg[memory-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19H4v-2h3v-1h1v-2h1v-2h1v-2h1V8h1V5h-2V3h8v2h-3v1h-1v2h-1v2h-1v2h-1v2h-1v3h2Z"></svg:path>`,
})
export class MemoryFormatItalicIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatLineSpacingIcon],svg[memory-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-9V5h9m0 7h-9v-2h9m0 7h-9v-2h9M7 19H5v-1H4v-1H3v-1H2v-1h3V7H2V6h1V5h1V4h1V3h2v1h1v1h1v1h1v1H7v8h3v1H9v1H8v1H7Z"></svg:path>`,
})
export class MemoryFormatLineSpacingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatTextIcon],svg[memory-format-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6h-8V4h8m0 6h-8V8h8M7 14H5V6H3V4h6v2H7m12 8h-8v-2h8m0 6H3v-2h16Z"></svg:path>`,
})
export class MemoryFormatTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatTextMultilineIcon],svg[memory-format-text-multiline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6H3V4h16m-6 6H3V8h10m0 6H3v-2h10m0 6H3v-2h10m5 2h-2v-1h-1v-1h-1v-1h2V8h2v7h2v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryFormatTextMultilineIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatTextSingleLineIcon],svg[memory-format-text-single-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6H3V4h16m-6 6h-1V9h-1v1h-1V9H9v1H8V9H7v1H6V9H5v1H4V9H3V8h1v1h1V8h1v1h1V8h1v1h1V8h1v1h1V8h1v1h1m0 5h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1m0 5h-1v-1h-1v1h-1v-1H9v1H8v-1H7v1H6v-1H5v1H4v-1H3v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1m5 1h-2v-7h-2v-1h1V9h1V8h2v1h1v1h1v1h-2Z"></svg:path>`,
})
export class MemoryFormatTextSingleLineIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryFormatVerticalAlignCenterIcon],svg[memory-format-vertical-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9h-2V8H9V7H8V6H7V5h3V2h2v3h3v1h-1v1h-1v1h-1m6 4H4v-2h14m-6 10h-2v-3H7v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h-3Z"></svg:path>`,
})
export class MemoryFormatVerticalAlignCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadIcon],svg[memory-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v1h1v5h5v1h1v6h-1v1h-5v5h-1v1H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1zm-1 2H9v6H3v4h6v6h4v-6h6V9h-6z"></svg:path>`,
})
export class MemoryGamepadIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadCenterIcon],svg[memory-gamepad-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-1H9v-2h1V9h2v1h1v2h-1m2 9H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadCenterFillIcon],svg[memory-gamepad-center-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1m-1-7v-1h1v-2h-1V9h-2v1H9v2h1v1Z"></svg:path>`,
})
export class MemoryGamepadCenterFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownIcon],svg[memory-gamepad-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18h-2v-2h2m2 5H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownFillIcon],svg[memory-gamepad-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1m-1-1v-2h-2v2Z"></svg:path>`,
})
export class MemoryGamepadDownFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownLeftIcon],svg[memory-gamepad-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H4v-2h2m6 8h-2v-2h2m2 5H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadDownLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownLeftFillIcon],svg[memory-gamepad-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1m-8-8v-2H3v2m9 7v-2h-2v2Z"></svg:path>`,
})
export class MemoryGamepadDownLeftFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownRightIcon],svg[memory-gamepad-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h-2v-2h2m-6 8h-2v-2h2m2 5H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadDownRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadDownRightFillIcon],svg[memory-gamepad-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1m6-8v-2h-2v2m-5 7v-2h-2v2Z"></svg:path>`,
})
export class MemoryGamepadDownRightFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadFillIcon],svg[memory-gamepad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1Z"></svg:path>`,
})
export class MemoryGamepadFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadLeftIcon],svg[memory-gamepad-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H4v-2h2m8 11H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadLeftFillIcon],svg[memory-gamepad-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1m-8-8v-2H3v2Z"></svg:path>`,
})
export class MemoryGamepadLeftFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadRightIcon],svg[memory-gamepad-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h-2v-2h2m-4 11H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadRightFillIcon],svg[memory-gamepad-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1m6-8v-2h-2v2Z"></svg:path>`,
})
export class MemoryGamepadRightFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadUpIcon],svg[memory-gamepad-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6h-2V4h2m2 17H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadUpFillIcon],svg[memory-gamepad-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1M12 5V3h-2v2Z"></svg:path>`,
})
export class MemoryGamepadUpFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadUpLeftIcon],svg[memory-gamepad-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6h-2V4h2m-6 8H4v-2h2m8 11H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadUpLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadUpLeftFillIcon],svg[memory-gamepad-up-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1M12 5V3h-2v2m-5 7v-2H3v2Z"></svg:path>`,
})
export class MemoryGamepadUpLeftFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadUpRightIcon],svg[memory-gamepad-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6h-2V4h2m6 8h-2v-2h2m-4 11H8v-1H7v-5H2v-1H1V8h1V7h5V2h1V1h6v1h1v5h5v1h1v6h-1v1h-5v5h-1m-1-1v-6h6V9h-6V3H9v6H3v4h6v6Z"></svg:path>`,
})
export class MemoryGamepadUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGamepadUpRightFillIcon],svg[memory-gamepad-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21H9v-1H8v-6H2v-1H1V9h1V8h6V2h1V1h4v1h1v6h6v1h1v4h-1v1h-6v6h-1M12 5V3h-2v2m9 7v-2h-2v2Z"></svg:path>`,
})
export class MemoryGamepadUpRightFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGlaiveIcon],svg[memory-glaive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18H3v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9H9V8h1V7h1v1h1V7h2V6h1V5h1V3h1V2h1v5h-1v1h-1v1h-3v1h1v1h-1v1h-1v-1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryGlaiveIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryGlassesIcon],svg[memory-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16h-6v-1h-1v-1h-2v1H9v1H3v-1H2v-1H1V8h1V7h18v1h1v6h-1v1h-1M8 14v-1h1v-1h1V9H3v4h1v1m14 0v-1h1V9h-7v3h1v1h1v1Z"></svg:path>`,
})
export class MemoryGlassesIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHalberdIcon],svg[memory-halberd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18H3v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h-1V5h2v1h1V5h1V4h1V3h1v3h-1v1h-1v1h2V7h2v5h-1v1h-1v1h-4v-1h-1v-1h1v-1h1V9h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryHalberdIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHeartIcon],svg[memory-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2H1V5h1V4h1V3h1V2h5v1h1v1h2V3h1V2h5v1h1v1h1v1h1v5h-1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1zm-7-9v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V6h-1V5h-1V4h-3v1h-1v1h-1v1h-2V6H9V5H8V4H5v1H4v1H3v3h1v2z"></svg:path>`,
})
export class MemoryHeartIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHeartBrokenIcon],svg[memory-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14h1v-1h1v-1h1v-1h1V9h1V6h-1V5h-1V4h-3v5h-1v2h1Zm-6 1h1v-2H8v-1H7V8h1V6h1V5H8V4H5v1H4v1H3v3h1v2h1v1h1v1h1v1h1Zm6 3h-1v-1h-1v-5h-1V8h1V3h1V2h5v1h1v1h1v1h1v5h-1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1Zm-2 2h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2H1V5h1V4h1V3h1V2h5v1h1v1h1v3h-1v2H9v2h1v2h1v5h1Z"></svg:path>`,
})
export class MemoryHeartBrokenIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHelpIcon],svg[memory-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15h-2v-3h1v-1h1v-1h1V9h1V6h-1V5H9v1H8v3H6V5h1V4h1V3h6v1h1v1h1v5h-1v1h-1v1h-1v1h-1m0 6h-2v-2h2Z"></svg:path>`,
})
export class MemoryHelpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHelpBoxIcon],svg[memory-help-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-2h1v-1h1V8h-2v2H8V7h1V6h4v1h1v4h-1v1h-1m0 4h-2v-2h2m6 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryHelpBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHelpBoxFillIcon],svg[memory-help-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-6-6v-1h1v-1h1V7h-1V6H9v1H8v3h2V8h2v2h-1v1h-1v2m2 3v-2h-2v2Z"></svg:path>`,
})
export class MemoryHelpBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHexagonIcon],svg[memory-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-1v-1h2v-1h2v-1h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v10h2v1h2v1h2v1Z"></svg:path>`,
})
export class MemoryHexagonIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryHomeThatchedIcon],svg[memory-home-thatched-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-8H1V9h1V6h1V3h1V2h14v3h1v2h1v2h1v3h-1v1h-1m-3-3V9h2V8h-1V6h-1V4H6v2H5v2H4v1h2v1h3V9h4v1m-1 8v-3h-2v3m7 0v-7h-1v1h-4v-1h-2v1H6v-1H5v7h3v-5h6v5Z"></svg:path>`,
})
export class MemoryHomeThatchedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryImageIcon],svg[memory-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h1V3h18v1h1v14h-1v1H2v-1H1zm2 10h1v-1h1v-1h1v-1h1v-1h1V9h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2V5H3zm11 3v-1h-1v-1h-1v-1h-1v-1h-1v-1H8v1H7v1H6v1H5v1H4v1zm-1-9h1V7h2v1h1v2h-1v1h-2v-1h-1z"></svg:path>`,
})
export class MemoryImageIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryJavalinIcon],svg[memory-javalin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18H3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h-1V6h2V5h1V4h2V3h1v3h-1v2h-1v1h-1V8h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryJavalinIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryJournalIcon],svg[memory-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8H8V6h7m-1 7H9v-2h5m4 10H4v-1H3v-3H2v-3h1v-2H2v-2h1V8H2V5h1V2h1V1h14v1h1v18h-1m-1-1V3H5v2h1v3H5v2h1v2H5v2h1v3H5v2Z"></svg:path>`,
})
export class MemoryJournalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryKeyIcon],svg[memory-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15H5v-1H4v-1H3V9h1V8h1V7h4v1h1v1h1v1h8v2h-2v2h-2v-2h-4v1h-1v1H9m-1-1v-1h1v-2H8V9H6v1H5v2h1v1Z"></svg:path>`,
})
export class MemoryKeyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLabelIcon],svg[memory-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h13v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H2v-1H1V5h1zm14 9h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6H3v10h11v-1h1v-1h1z"></svg:path>`,
})
export class MemoryLabelIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLabelVariantIcon],svg[memory-label-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H2v-2h1v-1h1v-1h1v-1h1v-1h1v-2H6V9H5V8H4V7H3V6H2V4zm-1 12v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6H6v1h1v1h1v1h1v1h1v2H9v1H8v1H7v1H6v1z"></svg:path>`,
})
export class MemoryLabelVariantIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLanceIcon],svg[memory-lance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H3v-2h1v-1h1v-1h1v-1H5v-1h1v-1h1v-1h2v-1h1V9h1V8h2V7h1V6h1V5h1V4h2V3h1v1h-1v2h-1v1h-1v1h-1v1h-1v2h-1v1h-1v1h-1v2h-1v1H9v1H8v-1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryLanceIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLedIcon],svg[memory-led-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-6H4v-2h2V6h1V4h1V3h1V2h4v1h1v1h1v2h1v7h2v2h-4v6h-2v-6h-2v6zm4-16V4h-2v1H9v2H8v6h1v-1h4v1h1V7h-1V5z"></svg:path>`,
})
export class MemoryLedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLightbulbIcon],svg[memory-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19h6v2H8zm0-1v-4H7v-1H6v-1H5v-1H4V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-1v4zm5-6h1v-1h1v-1h1V6h-1V5h-1V4h-1V3H9v1H8v1H7v1H6v4h1v1h1v1h1v1h1v3h2v-3h1z"></svg:path>`,
})
export class MemoryLightbulbIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLinenIcon],svg[memory-linen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-1v-1H9v-1H7v-1H4v-1H2v-1H1v-4h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h4v1h1v1h1v3h1v1h2v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1m-3-7v-1h1v-1h1v-1h1V9h1V8h1V7h1V5h-1V4h-3v1h-1v1H9v1H8v1H7v1H6v1H5v1h1v1h1v1m-1 3v-2H5v-1H3v2h1v1m8 3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1V9h-2V8h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1h1v1h2v1Z"></svg:path>`,
})
export class MemoryLinenIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLockIcon],svg[memory-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12h2v1h1v2h-1v1h-2v-1H9v-2h1zM8 2h6v1h1v1h1v4h1v1h1v10h-1v1H5v-1H4V9h1V8h1V4h1V3h1zm1 2v1H8v3h6V5h-1V4zm7 6H6v8h10z"></svg:path>`,
})
export class MemoryLockIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLockOpenIcon],svg[memory-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h2v1h1v2h-1v1h-2v-1H9v-2h1zm4-11v1h1v1h1v5h1v1h1v10h-1v1H5v-1H4V10h1V9h9V5h-1V4H9v1H8v2H6V4h1V3h1V2zm2 9H6v8h10z"></svg:path>`,
})
export class MemoryLockOpenIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLoginIcon],svg[memory-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h12v1h1v18h-1v1H5v-1H4v-6h2v5h10V3H6v5H4V2h1zm3 5h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1H8v-2h1v-1h1v-1H2v-2h8V9H9V8H8z"></svg:path>`,
})
export class MemoryLoginIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryLogoutIcon],svg[memory-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1v1h1v4h-1V5h-1V3H6v16h10v-2h1v-1h1v4h-1v1H5v-1H4V2h1V1zm-4 5h2v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1H8v-2h7V9h-1V8h-1z"></svg:path>`,
})
export class MemoryLogoutIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMagnifyMinusIcon],svg[memory-magnify-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10H6V8h6m7 12h-2v-1h-1v-1h-1v-1h-1v-2h-2v1H6v-1H5v-1H4v-1H3v-1H2V6h1V5h1V4h1V3h1V2h6v1h1v1h1v1h1v1h1v6h-1v2h2v1h1v1h1v1h1v2h-1m-8-5v-1h2v-2h1V7h-1V5h-2V4H7v1H5v2H4v4h1v2h2v1Z"></svg:path>`,
})
export class MemoryMagnifyMinusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMagnifyPlusIcon],svg[memory-magnify-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12H8v-2H6V8h2V6h2v2h2v2h-2m9 10h-2v-1h-1v-1h-1v-1h-1v-2h-2v1H6v-1H5v-1H4v-1H3v-1H2V6h1V5h1V4h1V3h1V2h6v1h1v1h1v1h1v1h1v6h-1v2h2v1h1v1h1v1h1v2h-1m-8-5v-1h2v-2h1V7h-1V5h-2V4H7v1H5v2H4v4h1v2h2v1Z"></svg:path>`,
})
export class MemoryMagnifyPlusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMapIcon],svg[memory-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h2V3h2V2h4v1h3v1h2V3h2V2h3v16h-2v1h-2v1h-4v-1H9v-1H7v1H5v1H2zm2 2v11h2v-1h1V5H5v1zm8-1H9v11h1v1h3V6h-1zm4 1h-1v11h2v-1h1V5h-2z"></svg:path>`,
})
export class MemoryMapIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuBottomLeftIcon],svg[memory-menu-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2H7zm2 4v5h5v-1h-1v-1h-1v-1h-1V9h-1V8z"></svg:path>`,
})
export class MemoryMenuBottomLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuBottomRightIcon],svg[memory-menu-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15v-2h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h2v11zm4-2h5V8h-1v1h-1v1h-1v1H9v1H8z"></svg:path>`,
})
export class MemoryMenuBottomRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuDownIcon],svg[memory-menu-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h14v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4zm4 2v1h1v1h1v1h2v-1h1v-1h1v-1z"></svg:path>`,
})
export class MemoryMenuDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuDownFillIcon],svg[memory-menu-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9V8H5v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1V9"></svg:path>`,
})
export class MemoryMenuDownFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuLeftIcon],svg[memory-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v14h-2v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-2h1V9h1V8h1V7h1V6h1V5h1V4zm-2 4h-1v1h-1v1h-1v2h1v1h1v1h1z"></svg:path>`,
})
export class MemoryMenuLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuLeftFillIcon],svg[memory-menu-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17h1V5h-1v1h-1v1h-1v1h-1v1H9v1H8v2h1v1h1v1h1v1h1v1h1"></svg:path>`,
})
export class MemoryMenuLeftFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuLeftRightIcon],svg[memory-menu-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4h2v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2zm-2 0v14H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2h1V9h1V8h1V7h1V6h1V5h1V4zm4 4v6h1v-1h1v-1h1v-2h-1V9h-1V8zM8 8H7v1H6v1H5v2h1v1h1v1h1z"></svg:path>`,
})
export class MemoryMenuLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
