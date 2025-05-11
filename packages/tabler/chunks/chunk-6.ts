import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGrillIcon],svg[tabler-grill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zm-2 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-2-6l1 2m-7-2l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4"></svg:path>`,
})
export class TablerGrillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGrillForkIcon],svg[tabler-grill-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 5l11.5 11.5m2.847.075l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1-4.1L7 3"></svg:path>`,
})
export class TablerGrillForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGrillOffIcon],svg[tabler-grill-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8H5a6 6 0 0 0 6 6h2q.473 0 .926-.071m2.786-1.214a5.99 5.99 0 0 0 2.284-4.49V8h-7m6.831 10.815a2 2 0 1 1-2.663-2.633M9 14l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4M3 3l18 18"></svg:path>`,
})
export class TablerGrillOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGrillSpatulaIcon],svg[tabler-grill-spatula-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.2 10.2l6.3 6.3m2.847.075l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1-4.1L7 3z"></svg:path>`,
})
export class TablerGrillSpatulaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGripHorizontalIcon],svg[tabler-grip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7-6a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7-6a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path>`,
})
export class TablerGripHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGripVerticalIcon],svg[tabler-grip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path>`,
})
export class TablerGripVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGrowthIcon],svg[tabler-growth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 15a4.5 4.5 0 0 0-4.5 4.5m4.5-8.5a4.5 4.5 0 0 0-4.5 4.5M16.5 7a4.5 4.5 0 0 0-4.5 4.5M8 15c2.21 0 4 2.015 4 4.5M8 11c2.21 0 4 2.015 4 4.5M8 7c2.21 0 4 2.015 4 4.5M12 4v6"></svg:path>`,
})
export class TablerGrowthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGuitarPickIcon],svg[tabler-guitar-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18.5C18 16 20 12 20 8c0-2.946-2.084-4.157-4.204-4.654Q14.5 3.001 12 3q-2.5 0-3.796.346C6.084 3.843 4 5.054 4 8c0 3.312 2 8 4 10.5q.445.556.963 1.081l.354.347a3.9 3.9 0 0 0 5.364 0A14 14 0 0 0 16 18.5"></svg:path>`,
})
export class TablerGuitarPickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGuitarPickFilledIcon],svg[tabler-guitar-pick-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-1.613 0-2.882.104-3.825.323l-.23.057C4.926 3.088 3 4.883 3 8c0 3.367 1.939 8.274 4.22 11.125q.48.6 1.03 1.158l.367.36a4.904 4.904 0 0 0 6.752.011a15 15 0 0 0 1.41-1.528C19.27 16.013 21 11.832 21 8c0-3.025-1.813-4.806-4.71-5.562l-.266-.066C15.088 2.122 13.743 2 12 2"></svg:path>`,
})
export class TablerGuitarPickFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerGymnasticsIcon],svg[tabler-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 14l1-9l7-6M3 11h6l5 1m-2.5-3.5L16 5"></svg:path>`,
})
export class TablerGymnasticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerH1Icon],svg[tabler-h-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 18v-8l-2 2M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path>`,
})
export class TablerH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerH2Icon],svg[tabler-h-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L17 18.001h4M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path>`,
})
export class TablerH2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerH3Icon],svg[tabler-h-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14a2 2 0 1 0-2-2m0 4a2 2 0 1 0 2-2M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path>`,
})
export class TablerH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerH4Icon],svg[tabler-h-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18v-8l-4 6h5M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path>`,
})
export class TablerH4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerH5Icon],svg[tabler-h-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 18h2a2 2 0 1 0 0-4h-2v-4h4M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path>`,
})
export class TablerH5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerH6Icon],svg[tabler-h-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path d="M21 12a2 2 0 1 0-4 0v4M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path></svg:g>`,
})
export class TablerH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHammerIcon],svg[tabler-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.414 10l-7.383 7.418a2.09 2.09 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0L14.414 13m3.707 2.293l2.586-2.586a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0L9.121 6.293a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0"></svg:path>`,
})
export class TablerHammerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHammerOffIcon],svg[tabler-hammer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.698 10.72L4.03 17.418a2.09 2.09 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l6.696-6.676m5.011.993l2-2a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0l-2 2M3 3l18 18"></svg:path>`,
})
export class TablerHammerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandClickIcon],svg[tabler-hand-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 0 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13M5 3L4 2m0 5H3m11-4l1-1m0 4h1"></svg:path></svg:g>`,
})
export class TablerHandClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandClickOffIcon],svg[tabler-hand-click-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V8m.06-3.923A1.5 1.5 0 0 1 11 4.5V7m0 4v1m1.063-3.935A1.5 1.5 0 0 1 14 9.5v.5m.06.082A1.5 1.5 0 0 1 17 10.5V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16m-.88 3.129A6 6 0 0 1 14 22h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13M3 3l18 18M4 7H3m11-4l1-1m0 4h1"></svg:path></svg:g>`,
})
export class TablerHandClickOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandFingerIcon],svg[tabler-hand-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 1 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path></svg:g>`,
})
export class TablerHandFingerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandFingerDownIcon],svg[tabler-hand-finger-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 12v8.5a1.5 1.5 0 0 0 3 0V13m0 .5v2a1.5 1.5 0 0 0 3 0V13m0 1.5a1.5 1.5 0 0 0 3 0V13"></svg:path><svg:path d="M17 13.5a1.5 1.5 0 0 0 3 0V9a6 6 0 0 0-6-6h-2h.208a6 6 0 0 0-5.012 2.7L7 6q-.468.718-3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734.44 1.674.325 2.28-.28L8 12"></svg:path></svg:g>`,
})
export class TablerHandFingerDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandFingerLeftIcon],svg[tabler-hand-finger-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8H3.5a1.5 1.5 0 0 0 0 3H11m-.5 0h-2a1.5 1.5 0 1 0 0 3H11m-1.5 0a1.5 1.5 0 0 0 0 3H11"></svg:path><svg:path d="M10.5 17a1.5 1.5 0 0 0 0 3H15a6 6 0 0 0 6-6v-2v.208a6 6 0 0 0-2.7-5.012L18 7q-.718-.468-5.728-3.286a1.5 1.5 0 0 0-2.022.536a1.87 1.87 0 0 0 .28 2.28L12 8"></svg:path></svg:g>`,
})
export class TablerHandFingerLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandFingerOffIcon],svg[tabler-hand-finger-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V8m.06-3.923A1.5 1.5 0 0 1 11 4.5V7m0 4v1m1.063-3.935A1.5 1.5 0 0 1 14 9.5v.5m.06.082A1.5 1.5 0 0 1 17 10.5V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16m-.88 3.129A6 6 0 0 1 14 22h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHandFingerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandFingerRightIcon],svg[tabler-hand-finger-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8h8.5a1.5 1.5 0 0 1 0 3H13m.5 0h2a1.5 1.5 0 0 1 0 3H13m1.5 0a1.5 1.5 0 0 1 0 3H13"></svg:path><svg:path d="M13.5 17a1.5 1.5 0 1 1 0 3H9a6 6 0 0 1-6-6v-2v.208a6 6 0 0 1 2.7-5.012L6 7q.718-.468 5.728-3.286a1.5 1.5 0 0 1 2.022.536c.44.734.325 1.674-.28 2.28L12 8"></svg:path></svg:g>`,
})
export class TablerHandFingerRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandGrabIcon],svg[tabler-hand-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V10m0-.5v-3a1.5 1.5 0 0 1 3 0V10m0-2.5a1.5 1.5 0 0 1 3 0V10"></svg:path><svg:path d="M17 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 17q-.468-.718-3.286-5.728A1.5 1.5 0 0 1 4.25 9.25a1.87 1.87 0 0 1 2.28.28L8 11"></svg:path></svg:g>`,
})
export class TablerHandGrabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandLittleFingerIcon],svg[tabler-hand-little-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13v-2.5a1.5 1.5 0 0 1 3 0V12m0-.5v-1a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 12V6.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path><svg:path d="M14 10.5a1.5 1.5 0 0 1 3 0V12"></svg:path></svg:g>`,
})
export class TablerHandLittleFingerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandLoveYouIcon],svg[tabler-hand-love-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 12V5.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path><svg:path d="M14 10.5a1.5 1.5 0 0 1 3 0V12m-9 1V4.5a1.5 1.5 0 0 1 3 0V12"></svg:path></svg:g>`,
})
export class TablerHandLoveYouIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandMiddleFingerIcon],svg[tabler-hand-middle-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13v-2.5a1.5 1.5 0 0 1 3 0V12m3-1.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path><svg:path d="M11 11.5v-8a1.5 1.5 0 1 1 3 0V12"></svg:path></svg:g>`,
})
export class TablerHandMiddleFingerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandMoveIcon],svg[tabler-hand-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 0 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13M2.541 5.594a13.5 13.5 0 0 1 2.46-1.427M14 3.458a13.4 13.4 0 0 1 3.685 1.612"></svg:path></svg:g>`,
})
export class TablerHandMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandOffIcon],svg[tabler-hand-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18M8 13.5V8m.44-3.562A1.5 1.5 0 0 1 11 5.5V7m0 4.008V12m0-6.5v-2a1.5 1.5 0 1 1 3 0V10m0-4.5a1.5 1.5 0 0 1 3 0V12m0-4.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2c-2.114-.292-3.956-1.397-5-3l-2.7-5.25a1.7 1.7 0 0 1 2.75-2l.9 1.75"></svg:path>`,
})
export class TablerHandOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandRingFingerIcon],svg[tabler-hand-ring-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13v-2.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path><svg:path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0V12m0 0V5.5a1.5 1.5 0 0 1 3 0V12"></svg:path></svg:g>`,
})
export class TablerHandRingFingerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandSanitizerIcon],svg[tabler-hand-sanitizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3zm8-18H9a2 2 0 0 0-2 2m5-2v5m0 3v4m-2-2h4"></svg:path>`,
})
export class TablerHandSanitizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandStopIcon],svg[tabler-hand-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12m0-6.5v-2a1.5 1.5 0 1 1 3 0V12m0-6.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 7.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path></svg:g>`,
})
export class TablerHandStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandThreeFingersIcon],svg[tabler-hand-three-fingers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path><svg:path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0V12m0-6.5a1.5 1.5 0 0 1 3 0V12"></svg:path></svg:g>`,
})
export class TablerHandThreeFingersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHandTwoFingersIcon],svg[tabler-hand-two-fingers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12"></svg:path><svg:path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"></svg:path><svg:path d="M14 10.5a1.5 1.5 0 0 1 3 0V12m-6-6.5v-2a1.5 1.5 0 1 1 3 0V12"></svg:path></svg:g>`,
})
export class TablerHandTwoFingersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHangerIcon],svg[tabler-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 1 0-4 0c0 1.667.67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749V17a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.029-1.749L11.992 10"></svg:path>`,
})
export class TablerHangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHanger2Icon],svg[tabler-hanger-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 9l-7.971 4.428A2 2 0 0 0 3 15.177V16a2 2 0 0 0 2 2h1"></svg:path><svg:path d="M18 18h1a2 2 0 0 0 2-2v-.823a2 2 0 0 0-1.029-1.749L12 9c-1.457-.81-1.993-2.333-2-4a2 2 0 1 1 4 0"></svg:path><svg:path d="M6 18a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class TablerHanger2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHanger2FilledIcon],svg[tabler-hanger-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 1 3 3a1 1 0 0 1-1.993.117L13 5a1 1 0 0 0-2-.004c.006 1.516.495 2.579 1.486 3.13l7.97 4.428A3 3 0 0 1 22 15.177V16a3 3 0 0 1-2.824 2.995L19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3a3 3 0 0 1-3-3v-.823a3 3 0 0 1 1.543-2.623l6.695-3.72C9.406 7.858 9.006 6.538 9 5a3 3 0 0 1 3-3m0 8.144l-7.486 4.158a1 1 0 0 0-.514.875V16a1 1 0 0 0 1 1h.17A3 3 0 0 1 8 15h8c1.306 0 2.418.835 2.83 2H19a1 1 0 0 0 1-1v-.823a1 1 0 0 0-.515-.875z"></svg:path>`,
})
export class TablerHanger2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHangerOffIcon],svg[tabler-hanger-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 1 0-4 0m6.506 6.506l3.461 1.922a2 2 0 0 1 1.029 1.749V17m-2 2h-14a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.029-1.749l6.673-3.707M3 3l18 18"></svg:path>`,
})
export class TablerHangerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHashIcon],svg[tabler-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9h14M5 15h14M11 4L7 20M17 4l-4 16"></svg:path>`,
})
export class TablerHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHazeIcon],svg[tabler-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M8 12a4 4 0 1 1 8 0M3 16h18M3 20h18"></svg:path>`,
})
export class TablerHazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHazeMoonIcon],svg[tabler-haze-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16h18M3 20h18M8.296 16c-2.268-1.4-3.598-4.087-3.237-6.916c.443-3.48 3.308-6.083 6.698-6.084v.006h.296c-1.991 1.916-2.377 5.03-.918 7.405s4.346 3.33 6.865 2.275A6.9 6.9 0 0 1 15.223 16"></svg:path>`,
})
export class TablerHazeMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHdrIcon],svg[tabler-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16V8m4 0v8m-4-4h4m3-4v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm7 4h2a2 2 0 1 0 0-4h-2v8m4 0l-3-4"></svg:path>`,
})
export class TablerHdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeadingIcon],svg[tabler-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h10M7 5v14M17 5v14m-2 0h4M15 5h4M5 19h4M5 5h4"></svg:path>`,
})
export class TablerHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeadingOffIcon],svg[tabler-heading-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h5m4 0h1M7 7v12M17 5v8m0 4v2m-2 0h4M15 5h4M5 19h4M3 3l18 18"></svg:path>`,
})
export class TablerHeadingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeadphonesIcon],svg[tabler-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 0a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z"></svg:path><svg:path d="M4 15v-3a8 8 0 0 1 16 0v3"></svg:path></svg:g>`,
})
export class TablerHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeadphonesFilledIcon],svg[tabler-headphones-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18a3 3 0 0 1-2.824 2.995L18 21h-1a3 3 0 0 1-2.995-2.824L14 18v-3a3 3 0 0 1 2.824-2.995L17 12h1c.351 0 .688.06 1 .171V12a7 7 0 0 0-13.996-.24L5 12v.17q.377-.133.791-.163L6 12h1a3 3 0 0 1 2.995 2.824L10 15v3a3 3 0 0 1-2.824 2.995L7 21H6a3 3 0 0 1-2.995-2.824L3 18v-6a9 9 0 0 1 17.996-.265L21 12z"></svg:path>`,
})
export class TablerHeadphonesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeadphonesOffIcon],svg[tabler-headphones-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 3l18 18M4 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm13-2h1a2 2 0 0 1 2 2v1m-.589 3.417c-.361.36-.86.583-1.411.583h-1a2 2 0 0 1-2-2v-3"></svg:path><svg:path d="M4 15v-3c0-2.21.896-4.21 2.344-5.658m2.369-1.638A8 8 0 0 1 20 12v3"></svg:path></svg:g>`,
})
export class TablerHeadphonesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeadsetIcon],svg[tabler-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 14v-3a8 8 0 1 1 16 0v3m-2 5c0 1.657-2.686 3-6 3"></svg:path><svg:path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11 0a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class TablerHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeadsetOffIcon],svg[tabler-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 14v-3c0-1.953.7-3.742 1.862-5.13m2.182-1.825A8 8 0 0 1 20 11v3m-2 5c0 1.657-2.686 3-6 3"></svg:path><svg:path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12.169-1.82c.253-.115.534-.18.831-.18h1a2 2 0 0 1 2 2v2m-1.183 2.826c-.25.112-.526.174-.817.174h-1a2 2 0 0 1-2-2v-2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHealthRecognitionIcon],svg[tabler-health-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M8.603 9.61a2.04 2.04 0 0 1 2.912 0L12 10l.5-.396a2.035 2.035 0 0 1 2.897.007a2.104 2.104 0 0 1 0 2.949L12 16l-3.397-3.44a2.104 2.104 0 0 1 0-2.95"></svg:path>`,
})
export class TablerHealthRecognitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartIcon],svg[tabler-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"></svg:path>`,
})
export class TablerHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartBitcoinIcon],svg[tabler-heart-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16"></svg:path><svg:path d="m13 19l-1 1l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.785 4.444"></svg:path></svg:g>`,
})
export class TablerHeartBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartBoltIcon],svg[tabler-heart-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19l-1 1l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.003 5.997M19 16l-2 3h4l-2 3"></svg:path>`,
})
export class TablerHeartBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartBrokenIcon],svg[tabler-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"></svg:path><svg:path d="m12 6l-2 4l4 3l-2 4v3"></svg:path></svg:g>`,
})
export class TablerHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartCancelIcon],svg[tabler-heart-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 7.993 6.01M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4"></svg:path>`,
})
export class TablerHeartCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartCheckIcon],svg[tabler-heart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.5 12.572l-3 2.928M11 19a8917 8917 0 0 0-6.5-6.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M15 19l2 2l4-4"></svg:path>`,
})
export class TablerHeartCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartCodeIcon],svg[tabler-heart-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.5 12.572l-.536.53m-7.91 5.96L4.5 12.573A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerHeartCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartCogIcon],svg[tabler-heart-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.21 5.697M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"></svg:path>`,
})
export class TablerHeartCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartDiscountIcon],svg[tabler-heart-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19l-1 1l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M16 21l5-5m0 5v.01M16 16v.01"></svg:path>`,
})
export class TablerHeartDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartDollarIcon],svg[tabler-heart-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19l-1 1l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.785 4.444M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"></svg:path>`,
})
export class TablerHeartDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartDownIcon],svg[tabler-heart-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.907 6.12M19 16v6m3-3l-3 3l-3-3"></svg:path>`,
})
export class TablerHeartDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartExclamationIcon],svg[tabler-heart-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.03 17L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.922 6.102M19 16v3m0 3v.01"></svg:path>`,
})
export class TablerHeartExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartFilledIcon],svg[tabler-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074"></svg:path>`,
})
export class TablerHeartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartHandshakeIcon],svg[tabler-heart-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"></svg:path><svg:path d="M12 6L8.707 9.293a1 1 0 0 0 0 1.414l.543.543c.69.69 1.81.69 2.5 0l1-1a3.18 3.18 0 0 1 4.5 0l2.25 2.25m-7 3l2 2M15 13l2 2"></svg:path></svg:g>`,
})
export class TablerHeartHandshakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartMinusIcon],svg[tabler-heart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.5 12.572l-2.494 2.47M12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M16 19h6"></svg:path>`,
})
export class TablerHeartMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartOffIcon],svg[tabler-heart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18m-1.5-8.428L18 14m-2 2l-4 4l-7.5-7.428a5 5 0 0 1-1.288-5.068A4.98 4.98 0 0 1 5 5m3-1c1.56 0 3.05.727 4 2a5 5 0 1 1 7.5 6.572"></svg:path>`,
})
export class TablerHeartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartPauseIcon],svg[tabler-heart-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.5 12.572l-.784.777m-5.725 5.67L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M17 17v5m4-5v5"></svg:path>`,
})
export class TablerHeartPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartPinIcon],svg[tabler-heart-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.5 5.179m.621 8.936a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"></svg:path>`,
})
export class TablerHeartPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartPlusIcon],svg[tabler-heart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.96 6.053M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerHeartPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartQuestionIcon],svg[tabler-heart-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.105 17.915L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.524 5.127M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path>`,
})
export class TablerHeartQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartRateMonitorIcon],svg[tabler-heart-rate-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 15h10m-8-4v4m6-4v4"></svg:path><svg:path d="M7 10h2l2 3l2-6l1 3h3"></svg:path></svg:g>`,
})
export class TablerHeartRateMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartSearchIcon],svg[tabler-heart-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 20l-.975-.966L4.5 12.572A5 5 0 1 1 12 6.006a5 5 0 0 1 8.37 5.428"></svg:path><svg:path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path></svg:g>`,
})
export class TablerHeartSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartShareIcon],svg[tabler-heart-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.5 12.572l-.468.464m-6.077 6.019L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M16 22l5-5m0 4.5V17h-4.5"></svg:path>`,
})
export class TablerHeartShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartSparkIcon],svg[tabler-heart-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.537 19.542L4.5 12.572A5 5 0 1 1 12 6.006a5 5 0 0 1 8.212 5.693M19 22.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></svg:path>`,
})
export class TablerHeartSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartStarIcon],svg[tabler-heart-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.73 17.753L4.5 12.572A5 5 0 1 1 12 6.006a5 5 0 0 1 8.563 5.041m-2.763 9.77l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411z"></svg:path>`,
})
export class TablerHeartStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartUpIcon],svg[tabler-heart-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.893 6.139M19 22v-6m3 3l-3-3l-3 3"></svg:path>`,
})
export class TablerHeartUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartXIcon],svg[tabler-heart-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L19 13m-6 6l-1 1l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M22 22l-5-5m0 5l5-5"></svg:path>`,
})
export class TablerHeartXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartbeatIcon],svg[tabler-heartbeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.5 13.572L12 21l-2.896-2.868m-6.117-8.104A5 5 0 0 1 12 7.006a5 5 0 1 1 7.5 6.572"></svg:path><svg:path d="M3 13h2l2 3l2-6l1 3h3"></svg:path></svg:g>`,
})
export class TablerHeartbeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartsIcon],svg[tabler-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.017 18L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.153 5.784"></svg:path><svg:path d="m15.99 20l4.197-4.223a2.81 2.81 0 0 0 0-3.948a2.747 2.747 0 0 0-3.91-.007l-.28.282l-.279-.283a2.747 2.747 0 0 0-3.91-.007a2.81 2.81 0 0 0-.007 3.948L15.983 20z"></svg:path></svg:g>`,
})
export class TablerHeartsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHeartsOffIcon],svg[tabler-hearts-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.017 18L12 20l-7.5-7.428a5 5 0 0 1 .49-7.586m3.01-1a5 5 0 0 1 4 2.018a5 5 0 0 1 8.153 5.784"></svg:path><svg:path d="M11.814 11.814a2.81 2.81 0 0 0-.007 3.948L15.989 20l2.01-2.021m1.977-1.99l.211-.212a2.81 2.81 0 0 0 0-3.948a2.747 2.747 0 0 0-3.91-.007l-.283.178M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHeartsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelicopterIcon],svg[tabler-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 10l1 2h6m2-3a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2c0-3.31-3.13-5-7-5zm1 0V6M5 6h15"></svg:path><svg:path d="M15 9.1V13h5.5M15 19v-3m4 3h-8"></svg:path></svg:g>`,
})
export class TablerHelicopterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelicopterFilledIcon],svg[tabler-helicopter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a1 1 0 0 1 0 2h-6v1c4.642 0 8 2.218 8 6a3 3 0 0 1-3 3h-3v1h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h3v-1h-2c-1.652 0-3-1.348-3-3v-1.001L3 13a1 1 0 0 1-.894-.553l-1-2a1 1 0 0 1 1.788-.894L3.618 11L9 10.999l.005-.175A3 3 0 0 1 12 8V7H5a1 1 0 1 1 0-2zm-3.999 5.174L16 12h3.36c-.665-.906-1.825-1.539-3.359-1.826"></svg:path>`,
})
export class TablerHelicopterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelicopterLandingIcon],svg[tabler-helicopter-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 3v8m0-4h6m0-4v8"></svg:path>`,
})
export class TablerHelicopterLandingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelicopterLandingFilledIcon],svg[tabler-helicopter-landing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4 5a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-.883-.993L9 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 .883.993L15 17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHelicopterLandingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelmetIcon],svg[tabler-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 4a9 9 0 0 1 5.656 16H6.344A9 9 0 0 1 12 4"></svg:path><svg:path d="M20 9h-8.8a1 1 0 0 0-.968 1.246q.76 3 3.268 4.254q3 1.5 7 1.5"></svg:path></svg:g>`,
})
export class TablerHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelmetOffIcon],svg[tabler-helmet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486A9 9 0 0 1 17.656 20H6.344a9 9 0 0 1-.185-13.847"></svg:path><svg:path d="M20 9h-7m-2.768 1.246q.76 3 3.268 4.254q.786.393 1.64.683M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHelmetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpIcon],svg[tabler-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 5v.01"></svg:path><svg:path d="M12 13.5a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4"></svg:path></svg:g>`,
})
export class TablerHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpCircleIcon],svg[tabler-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9 4v.01"></svg:path><svg:path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerHelpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpCircleFilledIcon],svg[tabler-help-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m0 13a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerHelpCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpHexagonIcon],svg[tabler-help-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM12 16v.01"></svg:path><svg:path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerHelpHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpHexagonFilledIcon],svg[tabler-help-hexagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.026-.097l.19.097l6.775 3.995l.096.063l.092.077l.107.075a3.22 3.22 0 0 1 1.266 2.188l.018.202l.005.204v7.284c0 1.106-.57 2.129-1.454 2.693l-.17.1l-6.803 4.302c-.918.504-2.019.535-3.004.068l-.196-.1l-6.695-4.237a3.23 3.23 0 0 1-1.671-2.619L2 15.502V8.217c0-1.106.57-2.128 1.476-2.705zM12 15a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerHelpHexagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpOctagonIcon],svg[tabler-help-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12.802 2.165l5.575 2.389c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-2.389 5.575c-.206.48-.589.863-1.07 1.07l-5.574 2.388c-.512.22-1.092.22-1.604 0l-5.575-2.389a2.04 2.04 0 0 1-1.07-1.07l-2.388-5.574a2.04 2.04 0 0 1 0-1.604l2.389-5.575c.206-.48.589-.863 1.07-1.07l5.574-2.388a2.04 2.04 0 0 1 1.604 0M12 16v.01"></svg:path><svg:path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerHelpOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpOctagonFilledIcon],svg[tabler-help-octagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.897 1a4 4 0 0 1 2.664 1.016l.165.156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006.227v5.794a4 4 0 0 1-1.016 2.664l-.156.165l-4.1 4.1a4 4 0 0 1-2.603 1.168l-.227.006H9.103a4 4 0 0 1-2.664-1.017l-.165-.156l-4.1-4.1a4 4 0 0 1-1.168-2.604L1 14.897V9.103a4 4 0 0 1 1.016-2.664l.156-.165l4.1-4.1a4 4 0 0 1 2.605-1.168L9.104 1zM12 15a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerHelpOctagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpOffIcon],svg[tabler-help-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M12 17v.01"></svg:path><svg:path d="M12 13.5a1.5 1.5 0 0 1 .394-1.1m2.106-1.9a2.6 2.6 0 0 0-3.347-3.361M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHelpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpSmallIcon],svg[tabler-help-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v.01M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path>`,
})
export class TablerHelpSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpSquareIcon],svg[tabler-help-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm9 11v.01"></svg:path><svg:path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerHelpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpSquareFilledIcon],svg[tabler-help-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 2.995 2.824L22 5v14a3 3 0 0 1-2.824 2.995L19 22H5a3 3 0 0 1-2.995-2.824L2 19V5a3 3 0 0 1 2.824-2.995L5 2zm-7 13a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerHelpSquareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpSquareRoundedIcon],svg[tabler-help-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9m0 13v.01"></svg:path><svg:path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerHelpSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpSquareRoundedFilledIcon],svg[tabler-help-square-rounded-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l.642.005l.616.017l.299.013l.579.034l.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29l.046.553l.041.727l.006.15l.017.617L22 12l-.005.642l-.017.616l-.013.299l-.034.579l-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03l-.553.046l-.727.041l-.15.006l-.617.017L12 22l-.642-.005l-.616-.017l-.299-.013l-.579-.034l-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29l-.046-.553l-.041-.727l-.006-.15l-.017-.617l-.004-.318v-.648l.004-.318l.017-.616l.013-.299l.034-.579l.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03l.553-.046l.727-.041l.15-.006l.617-.017Q11.673 2 12 2m0 13a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerHelpSquareRoundedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpTriangleIcon],svg[tabler-help-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 16v.01M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0z"></svg:path><svg:path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerHelpTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHelpTriangleFilledIcon],svg[tabler-help-triangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.67c.955 0 1.845.467 2.39 1.247l.105.16l8.114 13.548a2.914 2.914 0 0 1-2.307 4.363l-.195.008H3.882a2.914 2.914 0 0 1-2.582-4.2l.099-.185l8.11-13.538A2.91 2.91 0 0 1 12 1.67M12 15a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerHelpTriangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHemisphereIcon],svg[tabler-hemisphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9"></svg:path><svg:path d="M3 9a9 9 0 0 0 18 0"></svg:path></svg:g>`,
})
export class TablerHemisphereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHemisphereOffIcon],svg[tabler-hemisphere-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.588 6.603C4.41 7.15 3 8.02 3 9c0 1.657 4.03 3 9 3m3.72-.267C18.834 11.26 21 10.215 21 9c0-1.657-4.03-3-9-3q-.995 0-1.93.07"></svg:path><svg:path d="M3 9a9 9 0 0 0 13.677 7.69m2.165-1.843A8.97 8.97 0 0 0 21 9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHemisphereOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHemispherePlusIcon],svg[tabler-hemisphere-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9"></svg:path><svg:path d="M3 9a9 9 0 0 0 9 9m8.396-5.752A9 9 0 0 0 21 9m-5 10h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerHemispherePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonIcon],svg[tabler-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path>`,
})
export class TablerHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon0FilledIcon],svg[tabler-hexagon-0-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM12 7a3 3 0 0 0-2.995 2.824L9 10v4l.005.176a3 3 0 0 0 5.99 0L15 14v-4l-.005-.176A3 3 0 0 0 12 7m0 2a1 1 0 0 1 .993.883L13 10v4l-.007.117a1 1 0 0 1-1.986 0L11 14v-4l.007-.117A1 1 0 0 1 12 9"></svg:path></svg:g>`,
})
export class TablerHexagon0FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon1FilledIcon],svg[tabler-hexagon-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zm.952 5.803l-.084.076l-2 2l-.083.094a1 1 0 0 0 0 1.226l.083.094l.094.083a1 1 0 0 0 1.226 0l.094-.083l.293-.293V16l.007.117a1 1 0 0 0 1.986 0L13 16V8l-.006-.114c-.083-.777-1.008-1.16-1.617-.67z"></svg:path></svg:g>`,
})
export class TablerHexagon1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon2FilledIcon],svg[tabler-hexagon-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-3l-.117.007a1 1 0 0 0 0 1.986L10 9h3v2h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 13v2l.005.15a2 2 0 0 0 1.838 1.844L11 17h3l.117-.007a1 1 0 0 0 0-1.986L14 15h-3v-2h2l.15-.005a2 2 0 0 0 1.844-1.838L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844z"></svg:path></svg:g>`,
})
export class TablerHexagon2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon3FilledIcon],svg[tabler-hexagon-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005A2 2 0 0 0 9 9a1 1 0 0 0 1.974.23l.02-.113L11 9h2v2h-2l-.133.007c-1.111.12-1.154 1.73-.128 1.965l.128.021L11 13h2v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a1.988 1.988 0 0 0-.17-.667l-.075-.152l-.019-.032l.02-.03a2.01 2.01 0 0 0 .242-.795L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844z"></svg:path></svg:g>`,
})
export class TablerHexagon3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon3dIcon],svg[tabler-hexagon-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 6.844a2.01 2.01 0 0 1 1 1.752v6.555c0 .728-.394 1.399-1.03 1.753l-6 3.844a2 2 0 0 1-1.942 0l-6-3.844a2.01 2.01 0 0 1-1.029-1.752V8.596c0-.729.394-1.4 1.029-1.753l6-3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03zM12 16.5V21M4.5 7.5L8 10m8 0l4-2.5"></svg:path><svg:path d="M12 7.5V12l-4 2m4-2l4 2"></svg:path><svg:path d="m12 16.5l4-2.5v-4l-4-2.5L8 10v4z"></svg:path></svg:g>`,
})
export class TablerHexagon3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon4FilledIcon],svg[tabler-hexagon-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7a1 1 0 0 0-.993.883L13 8v3h-2V8l-.007-.117a1 1 0 0 0-1.986 0L9 8v3l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v3l.007.117a1 1 0 0 0 1.986 0L15 16V8l-.007-.117A1 1 0 0 0 14 7"></svg:path></svg:g>`,
})
export class TablerHexagon4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon5FilledIcon],svg[tabler-hexagon-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7h-4a1 1 0 0 0-.993.883L9 8v4a1 1 0 0 0 .883.993L10 13h3v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2a2 2 0 0 0 1.995-1.85L15 15v-2a2 2 0 0 0-1.85-1.995L13 11h-2V9h3a1 1 0 0 0 .993-.883L15 8a1 1 0 0 0-.883-.993z"></svg:path></svg:g>`,
})
export class TablerHexagon5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon6FilledIcon],svg[tabler-hexagon-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v6l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-1.838-1.844L13 11h-2V9h2l.007.117A1 1 0 0 0 15 9a2 2 0 0 0-1.85-1.995zm0 6v2h-2v-2z"></svg:path></svg:g>`,
})
export class TablerHexagon6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon7FilledIcon],svg[tabler-hexagon-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7h-4l-.117.007a1 1 0 0 0-.876.876L9 8l.007.117a1 1 0 0 0 .876.876L10 9h2.718l-1.688 6.757l-.022.115a1 1 0 0 0 1.927.482l.035-.111l2-8l.021-.112a1 1 0 0 0-.878-1.125z"></svg:path></svg:g>`,
})
export class TablerHexagon7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon8FilledIcon],svg[tabler-hexagon-8-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15c.018.236.077.46.17.667l.075.152l.018.03l-.018.032c-.133.24-.218.509-.243.795L9 13v2l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a1.988 1.988 0 0 0-.17-.667l-.075-.152l-.019-.032l.02-.03a2.01 2.01 0 0 0 .242-.795L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 6v2h-2v-2zm0-4v2h-2V9z"></svg:path></svg:g>`,
})
export class TablerHexagon8FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagon9FilledIcon],svg[tabler-hexagon-9-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007l.107.076a3.223 3.223 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.226 3.226 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 2v2h-2V9z"></svg:path></svg:g>`,
})
export class TablerHexagon9FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonFilledIcon],svg[tabler-hexagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414L3.65 5.41A3.21 3.21 0 0 0 2 8.217v7.285a3.23 3.23 0 0 0 1.678 2.826l6.695 4.237c1.034.57 2.22.57 3.2.032l6.804-4.302c.98-.537 1.623-1.618 1.623-2.793V8.218l-.005-.204a3.22 3.22 0 0 0-1.284-2.39l-.107-.075l-.007-.007a1 1 0 0 0-.181-.133L13.64 1.414a3.33 3.33 0 0 0-3.216 0z"></svg:path>`,
})
export class TablerHexagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterAIcon],svg[tabler-hexagon-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 16v-6a2 2 0 1 1 4 0v6m-4-3h4"></svg:path></svg:g>`,
})
export class TablerHexagonLetterAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterAFilledIcon],svg[tabler-hexagon-letter-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7a3 3 0 0 0-3 3v6a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 .883.993L14 17a1 1 0 0 0 1-1v-6a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 .883-.993z"></svg:path>`,
})
export class TablerHexagonLetterAFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterBIcon],svg[tabler-hexagon-letter-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 16h2a2 2 0 1 0 0-4h-2h2a2 2 0 1 0 0-4h-2z"></svg:path></svg:g>`,
})
export class TablerHexagonLetterBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterBFilledIcon],svg[tabler-hexagon-letter-b-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3-3l-.005-.176a3 3 0 0 0-.654-1.7L14.235 12l.106-.124A3 3 0 0 0 12 7m0 6a1 1 0 0 1 0 2h-1v-2zm0-4a1 1 0 0 1 0 2h-1V9z"></svg:path>`,
})
export class TablerHexagonLetterBFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterCIcon],svg[tabler-hexagon-letter-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M14 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0"></svg:path></svg:g>`,
})
export class TablerHexagonLetterCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterCFilledIcon],svg[tabler-hexagon-letter-c-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0a1 1 0 0 0-1.993-.117L13 14a1 1 0 0 1-2 0v-4a1 1 0 0 1 1.993-.117L13 10a1 1 0 0 0 2 0a3 3 0 0 0-3-3"></svg:path>`,
})
export class TablerHexagonLetterCFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterDIcon],svg[tabler-hexagon-letter-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class TablerHexagonLetterDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterDFilledIcon],svg[tabler-hexagon-letter-d-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1V9z"></svg:path>`,
})
export class TablerHexagonLetterDFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterEIcon],svg[tabler-hexagon-letter-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M14 8h-4v8h4m-4-4h2.5"></svg:path></svg:g>`,
})
export class TablerHexagonLetterEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterEFilledIcon],svg[tabler-hexagon-letter-e-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 14 15h-3v-2h1.5a1 1 0 0 0 .993-.883L13.5 12a1 1 0 0 0-1-1H11V9h3a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerHexagonLetterEFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterFIcon],svg[tabler-hexagon-letter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM10 12h3"></svg:path><svg:path d="M14 8h-4v8"></svg:path></svg:g>`,
})
export class TablerHexagonLetterFIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterFFilledIcon],svg[tabler-hexagon-letter-f-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-3h2a1 1 0 0 0 .993-.883L14 12a1 1 0 0 0-1-1h-2V9h3a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerHexagonLetterFFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterGIcon],svg[tabler-hexagon-letter-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M14 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1"></svg:path></svg:g>`,
})
export class TablerHexagonLetterGIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterGFilledIcon],svg[tabler-hexagon-letter-g-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7h-2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 13 13v2h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerHexagonLetterGFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterHIcon],svg[tabler-hexagon-letter-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM10 16V8m4 0v8m-4-4h4"></svg:path>`,
})
export class TablerHexagonLetterHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterHFilledIcon],svg[tabler-hexagon-letter-h-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7a1 1 0 0 0-1 1v3h-2V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3h2v3a1 1 0 0 0 .883.993L14 17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHexagonLetterHFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterIIcon],svg[tabler-hexagon-letter-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM12 8v8"></svg:path>`,
})
export class TablerHexagonLetterIIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterIFilledIcon],svg[tabler-hexagon-letter-i-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHexagonLetterIFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterJIcon],svg[tabler-hexagon-letter-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 8h4v6a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class TablerHexagonLetterJIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterJFilledIcon],svg[tabler-hexagon-letter-j-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 9h3v5a1 1 0 0 1-1.993.117L11 14a1 1 0 0 0-2 0a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHexagonLetterJFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterKIcon],svg[tabler-hexagon-letter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM10 8v8"></svg:path><svg:path d="m14 8l-2.5 4l2.5 4m-4-4h1.5"></svg:path></svg:g>`,
})
export class TablerHexagonLetterKIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterKFilledIcon],svg[tabler-hexagon-letter-k-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015m.864 5.723a1 1 0 0 0-1.378.318L11 10.912V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-2.914l2.152 3.444a1 1 0 0 0 1.276.374l.102-.056l.095-.068a1 1 0 0 0 .223-1.31L12.678 12l2.17-3.47a1 1 0 0 0-.318-1.378"></svg:path>`,
})
export class TablerHexagonLetterKFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterLIcon],svg[tabler-hexagon-letter-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 8v8h4"></svg:path></svg:g>`,
})
export class TablerHexagonLetterLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterLFilledIcon],svg[tabler-hexagon-letter-l-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 14 15h-3V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHexagonLetterLFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterMIcon],svg[tabler-hexagon-letter-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M9 16V8l3 5l3-5v8"></svg:path></svg:g>`,
})
export class TablerHexagonLetterMIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterMFilledIcon],svg[tabler-hexagon-letter-m-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M16 8c0-1.014-1.336-1.384-1.857-.514L12 11.056l-2.143-3.57C9.336 6.616 8 6.986 8 8v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 10 16v-4.39l1.143 1.904l.074.108a1 1 0 0 0 1.64-.108L14 11.61V16a1 1 0 0 0 2 0z"></svg:path>`,
})
export class TablerHexagonLetterMFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterNIcon],svg[tabler-hexagon-letter-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 16V8l4 8V8"></svg:path></svg:g>`,
})
export class TablerHexagonLetterNIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterNFilledIcon],svg[tabler-hexagon-letter-n-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015m-2.772 6.124C10.423 6.609 9 6.945 9 8v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-3.764l2.106 4.211c.471.944 1.894.608 1.894-.447V8a1 1 0 0 0-1-1l-.117.007A1 1 0 0 0 13 8v3.764z"></svg:path>`,
})
export class TablerHexagonLetterNFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterOIcon],svg[tabler-hexagon-letter-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class TablerHexagonLetterOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterOFilledIcon],svg[tabler-hexagon-letter-o-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerHexagonLetterOFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterPIcon],svg[tabler-hexagon-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 12h2a2 2 0 1 0 0-4h-2v8"></svg:path></svg:g>`,
})
export class TablerHexagonLetterPIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterPFilledIcon],svg[tabler-hexagon-letter-p-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-3h1a3 3 0 0 0 0-6m0 2a1 1 0 0 1 0 2h-1V9z"></svg:path>`,
})
export class TablerHexagonLetterPFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterQIcon],svg[tabler-hexagon-letter-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m1 7l1 1"></svg:path></svg:g>`,
})
export class TablerHexagonLetterQIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterQFilledIcon],svg[tabler-hexagon-letter-q-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7a3 3 0 0 0-3 3v4a3 3 0 0 0 4.168 2.764l.125-.057a1 1 0 0 0 1.414-1.414l.057-.125A3 3 0 0 0 15 14v-4a3 3 0 0 0-3-3m1 7.002h-.059A.996.996 0 0 0 12 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0z"></svg:path>`,
})
export class TablerHexagonLetterQFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterRIcon],svg[tabler-hexagon-letter-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 12h2a2 2 0 1 0 0-4h-2v8m4 0l-3-4"></svg:path></svg:g>`,
})
export class TablerHexagonLetterRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterRFilledIcon],svg[tabler-hexagon-letter-r-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 7h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-2.332l2.2 2.932a1 1 0 0 0 1.4.2l.096-.081A1 1 0 0 0 14.8 15.4l-1.903-2.538l.115-.037A3.001 3.001 0 0 0 12 7m0 2a1 1 0 0 1 0 2h-1V9z"></svg:path>`,
})
export class TablerHexagonLetterRFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterSIcon],svg[tabler-hexagon-letter-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1"></svg:path></svg:g>`,
})
export class TablerHexagonLetterSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterSFilledIcon],svg[tabler-hexagon-letter-s-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M13 7h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-2a1 1 0 0 0-2 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h2l.007.117A1 1 0 0 0 15 9a2 2 0 0 0-2-2"></svg:path>`,
})
export class TablerHexagonLetterSFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterTIcon],svg[tabler-hexagon-letter-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM10 8h4m-2 0v8"></svg:path>`,
})
export class TablerHexagonLetterTIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterTFilledIcon],svg[tabler-hexagon-letter-t-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7h-4a1 1 0 1 0 0 2h1v7a1 1 0 0 0 .883.993L12 17a1 1 0 0 0 1-1V9h1a1 1 0 0 0 .993-.883L15 8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHexagonLetterTFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterUIcon],svg[tabler-hexagon-letter-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 8v6a2 2 0 1 0 4 0V8"></svg:path></svg:g>`,
})
export class TablerHexagonLetterUIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterUFilledIcon],svg[tabler-hexagon-letter-u-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7a1 1 0 0 0-1 1v6a1 1 0 0 1-2 0V8a1 1 0 0 0-2 0v6a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHexagonLetterUFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterVIcon],svg[tabler-hexagon-letter-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="m10 8l2 8l2-8"></svg:path></svg:g>`,
})
export class TablerHexagonLetterVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterVFilledIcon],svg[tabler-hexagon-letter-v-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015m.577 5.6a1 1 0 0 0-1.213.728L12 11.875l-1.03-4.118a1 1 0 1 0-1.94.486l2 8c.252 1.01 1.688 1.01 1.94 0l2-8a1 1 0 0 0-.727-1.213"></svg:path>`,
})
export class TablerHexagonLetterVFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterWIcon],svg[tabler-hexagon-letter-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="m9 8l1 8l2-5l2 5l1-8"></svg:path></svg:g>`,
})
export class TablerHexagonLetterWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterWFilledIcon],svg[tabler-hexagon-letter-w-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015m.342 6.447l-.52 4.153l-.56-1.4c-.319-.799-1.41-.837-1.803-.114l-.053.114l-.561 1.4l-.519-4.153a1 1 0 0 0-1-.876l-.116.008a1 1 0 0 0-.868 1.116l1 8c.128 1.025 1.537 1.207 1.92.247L12 13.693l1.072 2.678c.383.96 1.792.778 1.92-.247l1-8a1 1 0 0 0-1.984-.248"></svg:path>`,
})
export class TablerHexagonLetterWFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterXIcon],svg[tabler-hexagon-letter-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM10 8l4 8m-4 0l4-8"></svg:path>`,
})
export class TablerHexagonLetterXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterXFilledIcon],svg[tabler-hexagon-letter-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015m.781 5.677a1 1 0 0 0-1.341.447L12 9.763l-1.106-2.21a1 1 0 0 0-1.234-.494l-.107.047a1 1 0 0 0-.447 1.341L10.88 12l-1.775 3.553a1 1 0 0 0 .345 1.283l.102.058a1 1 0 0 0 1.341-.447L12 14.237l1.106 2.21a1 1 0 0 0 1.234.494l.107-.047a1 1 0 0 0 .447-1.341L13.118 12l1.776-3.553a1 1 0 0 0-.345-1.283z"></svg:path>`,
})
export class TablerHexagonLetterXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterYIcon],svg[tabler-hexagon-letter-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="m10 8l2 5l2-5m-2 8v-3"></svg:path></svg:g>`,
})
export class TablerHexagonLetterYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterYFilledIcon],svg[tabler-hexagon-letter-y-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015m.705 5.643a1 1 0 0 0-1.3.557L12 10.307l-1.072-2.678a1 1 0 0 0-1.856.742L11 13.194V16a1 1 0 0 0 .883.993L12 17a1 1 0 0 0 1-1v-2.809l1.928-4.82a1 1 0 0 0-.45-1.25z"></svg:path>`,
})
export class TablerHexagonLetterYFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterZIcon],svg[tabler-hexagon-letter-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 8h4l-4 8h4"></svg:path></svg:g>`,
})
export class TablerHexagonLetterZIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterZFilledIcon],svg[tabler-hexagon-letter-z-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M14 7h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 9h2.382l-3.276 6.553A1 1 0 0 0 10 17h4a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 14 15h-2.382l3.276-6.553A1 1 0 0 0 14 7"></svg:path>`,
})
export class TablerHexagonLetterZFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonMinusIcon],svg[tabler-hexagon-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM9 12h6"></svg:path>`,
})
export class TablerHexagonMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonMinus2Icon],svg[tabler-hexagon-minus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.092 21.72a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7.398 1.13 1.143 1.125 1.948V15m-5 4h6"></svg:path>`,
})
export class TablerHexagonMinus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonMinusFilledIcon],svg[tabler-hexagon-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerHexagonMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber0Icon],svg[tabler-hexagon-number-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerHexagonNumber0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber0FilledIcon],svg[tabler-hexagon-number-0-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM12 7a3 3 0 0 0-2.995 2.824L9 10v4l.005.176a3 3 0 0 0 5.99 0L15 14v-4l-.005-.176A3 3 0 0 0 12 7m0 2a1 1 0 0 1 .993.883L13 10v4l-.007.117a1 1 0 0 1-1.986 0L11 14v-4l.007-.117A1 1 0 0 1 12 9"></svg:path>`,
})
export class TablerHexagonNumber0FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber1Icon],svg[tabler-hexagon-number-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="m10 10l2-2v8"></svg:path></svg:g>`,
})
export class TablerHexagonNumber1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber1FilledIcon],svg[tabler-hexagon-number-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zm.952 5.803l-.084.076l-2 2l-.083.094a1 1 0 0 0 0 1.226l.083.094l.094.083a1 1 0 0 0 1.226 0l.094-.083l.293-.293V16l.007.117a1 1 0 0 0 1.986 0L13 16V8l-.006-.114c-.083-.777-1.008-1.16-1.617-.67z"></svg:path>`,
})
export class TablerHexagonNumber1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber2Icon],svg[tabler-hexagon-number-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"></svg:path></svg:g>`,
})
export class TablerHexagonNumber2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber2FilledIcon],svg[tabler-hexagon-number-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-3l-.117.007a1 1 0 0 0 0 1.986L10 9h3v2h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 13v2l.005.15a2 2 0 0 0 1.838 1.844L11 17h3l.117-.007a1 1 0 0 0 0-1.986L14 15h-3v-2h2l.15-.005a2 2 0 0 0 1.844-1.838L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844z"></svg:path>`,
})
export class TablerHexagonNumber2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber3Icon],svg[tabler-hexagon-number-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class TablerHexagonNumber3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber3FilledIcon],svg[tabler-hexagon-number-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005A2 2 0 0 0 9 9a1 1 0 0 0 1.974.23l.02-.113L11 9h2v2h-2l-.133.007c-1.111.12-1.154 1.73-.128 1.965l.128.021L11 13h2v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-.17-.667l-.075-.152l-.019-.032l.02-.03a2 2 0 0 0 .242-.795L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844z"></svg:path>`,
})
export class TablerHexagonNumber3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber4Icon],svg[tabler-hexagon-number-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 8v3a1 1 0 0 0 1 1h3m0-4v8"></svg:path></svg:g>`,
})
export class TablerHexagonNumber4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber4FilledIcon],svg[tabler-hexagon-number-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7a1 1 0 0 0-.993.883L13 8v3h-2V8l-.007-.117a1 1 0 0 0-1.986 0L9 8v3l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v3l.007.117a1 1 0 0 0 1.986 0L15 16V8l-.007-.117A1 1 0 0 0 14 7"></svg:path>`,
})
export class TablerHexagonNumber4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber5Icon],svg[tabler-hexagon-number-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V8h4"></svg:path></svg:g>`,
})
export class TablerHexagonNumber5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber5FilledIcon],svg[tabler-hexagon-number-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7h-4a1 1 0 0 0-.993.883L9 8v4a1 1 0 0 0 .883.993L10 13h3v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2a2 2 0 0 0 1.995-1.85L15 15v-2a2 2 0 0 0-1.85-1.995L13 11h-2V9h3a1 1 0 0 0 .993-.883L15 8a1 1 0 0 0-.883-.993z"></svg:path>`,
})
export class TablerHexagonNumber5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber6Icon],svg[tabler-hexagon-number-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M14 9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3"></svg:path></svg:g>`,
})
export class TablerHexagonNumber6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber6FilledIcon],svg[tabler-hexagon-number-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v6l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-1.838-1.844L13 11h-2V9h2l.007.117A1 1 0 0 0 15 9a2 2 0 0 0-1.85-1.995zm0 6v2h-2v-2z"></svg:path>`,
})
export class TablerHexagonNumber6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber7Icon],svg[tabler-hexagon-number-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728-.395 1.4-1.032 1.753l-6.017 3.844a2 2 0 0 1-1.948 0l-6.016-3.844a2 2 0 0 1-1.032-1.752V8.61c0-.728.395-1.4 1.032-1.753l6.017-3.582a2.06 2.06 0 0 1 2 0l6.017 3.583h-.029z"></svg:path><svg:path d="M10 8h4l-2 8"></svg:path></svg:g>`,
})
export class TablerHexagonNumber7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber7FilledIcon],svg[tabler-hexagon-number-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7h-4l-.117.007a1 1 0 0 0-.876.876L9 8l.007.117a1 1 0 0 0 .876.876L10 9h2.718l-1.688 6.757l-.022.115a1 1 0 0 0 1.927.482l.035-.111l2-8l.021-.112a1 1 0 0 0-.878-1.125z"></svg:path>`,
})
export class TablerHexagonNumber7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber8Icon],svg[tabler-hexagon-number-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M12 12h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class TablerHexagonNumber8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber8FilledIcon],svg[tabler-hexagon-number-8-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15q.029.355.17.667l.075.152l.018.03l-.018.032c-.133.24-.218.509-.243.795L9 13v2l.005.15a2 2 0 0 0 1.838 1.844L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15v-2l-.005-.15a2 2 0 0 0-.17-.667l-.075-.152l-.019-.032l.02-.03a2 2 0 0 0 .242-.795L15 11V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 6v2h-2v-2zm0-4v2h-2V9z"></svg:path>`,
})
export class TablerHexagonNumber8FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber9Icon],svg[tabler-hexagon-number-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path><svg:path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"></svg:path></svg:g>`,
})
export class TablerHexagonNumber9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonNumber9FilledIcon],svg[tabler-hexagon-number-9-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007l.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 2v2h-2V9z"></svg:path>`,
})
export class TablerHexagonNumber9FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonOffIcon],svg[tabler-hexagon-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.693 4.69l2.336-1.39a2.06 2.06 0 0 1 2 0l6 3.573H19a2 2 0 0 1 1 1.747v6.536c0 .246-.045.485-.13.707m-2.16 1.847l-4.739 3.027a2 2 0 0 1-1.942 0l-6-3.833A2 2 0 0 1 4 15.157V8.62a2 2 0 0 1 1.029-1.748l1.154-.687M3 3l18 18"></svg:path>`,
})
export class TablerHexagonOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonPlusIcon],svg[tabler-hexagon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM9 12h6m-3-3v6"></svg:path>`,
})
export class TablerHexagonPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonPlus2Icon],svg[tabler-hexagon-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.092 21.72a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7.398 1.13 1.143 1.125 1.948V12.5M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerHexagonPlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonPlusFilledIcon],svg[tabler-hexagon-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M12 8a1 1 0 0 0-1 1v2H9a1 1 0 0 0-.993.883L8 12a1 1 0 0 0 1 1h2v2a1 1 0 0 0 .883.993L12 16a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .993-.883L16 12a1 1 0 0 0-1-1h-2V9a1 1 0 0 0-.883-.993z"></svg:path>`,
})
export class TablerHexagonPlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPrismIcon],svg[tabler-hexagonal-prism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20.792 6.996l-3.775 2.643A2 2 0 0 1 15.87 10H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11m8-11v11"></svg:path><svg:path d="m3.853 18.274l3.367 2.363A2 2 0 0 0 8.367 21h7.265c.41 0 .811-.126 1.147-.363l3.367-2.363c.536-.375.854-.99.854-1.643V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367c-.41 0-.811.126-1.147.363L3.853 5.726A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.269.853 1.644z"></svg:path></svg:g>`,
})
export class TablerHexagonalPrismIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPrismOffIcon],svg[tabler-hexagonal-prism-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20.792 6.996l-3.775 2.643A2 2 0 0 1 15.87 10H14m-4 0H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11m8-11v2m0 4v5"></svg:path><svg:path d="M20.972 16.968a2 2 0 0 0 .028-.337V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367a2 2 0 0 0-1.066.309M4.956 4.952l-1.103.774A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.269.853 1.644l3.367 2.363A2 2 0 0 0 8.367 21h7.265c.41 0 .811-.126 1.147-.363l2.26-1.587M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHexagonalPrismOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPrismPlusIcon],svg[tabler-hexagonal-prism-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20.792 6.996l-3.775 2.643A2 2 0 0 1 15.87 10H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11m8-11v3.5"></svg:path><svg:path d="M21 12.5V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367c-.41 0-.811.126-1.147.363L3.853 5.726A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.269.853 1.644l3.367 2.363A2 2 0 0 0 8.367 21H12.5m3.5-2h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerHexagonalPrismPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPyramidIcon],svg[tabler-hexagonal-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.162 2.457L3.316 15.411a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l2.527-2.523a1.99 1.99 0 0 0 .267-2.483L12.838 2.457a.996.996 0 0 0-1.676 0M12 2L7 20.9M12 2l5 18.9"></svg:path>`,
})
export class TablerHexagonalPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPyramidOffIcon],svg[tabler-hexagonal-pyramid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.877 7.88l-4.56 7.53a1.99 1.99 0 0 0 .266 2.484l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l1.264-1.263m1.792-2.205a2 2 0 0 0-.262-1.538L12.838 2.457a.996.996 0 0 0-1.676 0L9.39 5.383M12 2l-1.254 4.742m-.841 3.177L7 20.9M12 2l2.153 8.14m1.444 5.457L17 20.9M3 3l18 18"></svg:path>`,
})
export class TablerHexagonalPyramidOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPyramidPlusIcon],svg[tabler-hexagonal-pyramid-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18.642 12.04l-5.804-9.583a.996.996 0 0 0-1.676 0L3.316 15.411a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583H12.5M12 2L7 20.9M12 2l3.304 12.489M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerHexagonalPyramidPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonsIcon],svg[tabler-hexagons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18v-5l4-2l4 2v5l-4 2zm4-7V6l4-2l4 2v5m-4 2l4-2l4 2v5l-4 2l-4-2"></svg:path>`,
})
export class TablerHexagonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonsOffIcon],svg[tabler-hexagons-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18v-5l4-2l4 2v5l-4 2zm4-7V8m1.332-2.666L12 4l4 2v5m-4 2l.661-.331m2.684-1.341L16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18"></svg:path>`,
})
export class TablerHexagonsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHierarchyIcon],svg[tabler-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M6.5 17.5L12 13l5.5 4.5M12 7v6"></svg:path></svg:g>`,
})
export class TablerHierarchyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHierarchy2Icon],svg[tabler-hierarchy-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3h4v4h-4zM3 17h4v4H3zm14 0h4v4h-4zM7 17l5-4l5 4M12 7v6"></svg:path>`,
})
export class TablerHierarchy2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHierarchy3Icon],svg[tabler-hierarchy-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-4 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12-7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9 5l2-3m2-4l2-3m2 0l2 3m2 4l2 3m-4-3l-2 3m-4-3l2 3"></svg:path>`,
})
export class TablerHierarchy3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHierarchyOffIcon],svg[tabler-hierarchy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14.585-1.413a2 2 0 0 0 2.813 2.843"></svg:path><svg:path d="M6.5 17.5L12 13l5.5 4.5M12 7v1m0 4v1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHierarchyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHighlightIcon],svg[tabler-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19h4L17.5 8.5a2.828 2.828 0 1 0-4-4L3 15zm9.5-13.5l4 4m-12 4l4 4M21 15v4h-8l4-4z"></svg:path>`,
})
export class TablerHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHighlightOffIcon],svg[tabler-highlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 9l-6 6v4h4l6-6m2-2l2.503-2.503a2.828 2.828 0 1 0-4-4l-2.497 2.497M12.5 5.5l4 4m-12 4l4 4M19 15h2v2m-2 2h-6l3-3M3 3l18 18"></svg:path>`,
})
export class TablerHighlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHistoryIcon],svg[tabler-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8v4l2 2"></svg:path><svg:path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></svg:path></svg:g>`,
})
export class TablerHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHistoryOffIcon],svg[tabler-history-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.05 11a8.98 8.98 0 0 1 2.54-5.403M7.904 3.9a9 9 0 0 1 12.113 12.112m-1.695 2.312A9 9 0 0 1 3.55 15m-.5 5v-5h5M3 3l18 18"></svg:path>`,
})
export class TablerHistoryOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHistoryToggleIcon],svg[tabler-history-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A9 9 0 0 1 10 3.223"></svg:path><svg:path d="M12 8v4l3 3"></svg:path></svg:g>`,
})
export class TablerHistoryToggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeIcon],svg[tabler-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></svg:path></svg:g>`,
})
export class TablerHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHome2Icon],svg[tabler-home-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></svg:path><svg:path d="M10 12h4v4h-4z"></svg:path></svg:g>`,
})
export class TablerHome2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeBitcoinIcon],svg[tabler-home-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16"></svg:path><svg:path d="M19.5 10.5L12 3l-9 9h2v7a2 2 0 0 0 2 2h6"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.387 0 .748.11 1.054.3M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17"></svg:path></svg:g>`,
})
export class TablerHomeBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeBoltIcon],svg[tabler-home-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m19 10l-7-7l-9 9h2v7a2 2 0 0 0 2 2h7.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.661 0 1.248.32 1.612.815M19 14l-2 4h4l-2 4"></svg:path></svg:g>`,
})
export class TablerHomeBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeCancelIcon],svg[tabler-home-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4m-2-5h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.58 0 1.103.247 1.468.642"></svg:path></svg:g>`,
})
export class TablerHomeCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeCheckIcon],svg[tabler-home-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></svg:path><svg:path d="M19 13.488V12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h4.525M15 19l2 2l4-4"></svg:path></svg:g>`,
})
export class TablerHomeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeCogIcon],svg[tabler-home-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h1.6"></svg:path><svg:path d="m20 11l-8-8l-9 9h2v7a2 2 0 0 0 2 2h4.159M16 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V16m0 4v1.5m3.032-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"></svg:path></svg:g>`,
})
export class TablerHomeCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeDollarIcon],svg[tabler-home-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m19 10l-7-7l-9 9h2v7a2 2 0 0 0 2 2h6"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.387 0 .748.11 1.054.3M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"></svg:path></svg:g>`,
})
export class TablerHomeDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeDotIcon],svg[tabler-home-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5m4-2a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771"></svg:path></svg:g>`,
})
export class TablerHomeDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeDownIcon],svg[tabler-home-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m4 1v6m3-3l-3 3l-3-3"></svg:path></svg:g>`,
})
export class TablerHomeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeEcoIcon],svg[tabler-home-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20 11l-8-8l-9 9h2v7a2 2 0 0 0 2 2h5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.325 0 .631.077.902.215M16 22s0-2 3-4"></svg:path><svg:path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3"></svg:path></svg:g>`,
})
export class TablerHomeEcoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeEditIcon],svg[tabler-home-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.645 0 1.218.305 1.584.78"></svg:path><svg:path d="m20 11l-8-8l-9 9h2v7a2 2 0 0 0 2 2h4m7.42-5.39a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"></svg:path></svg:g>`,
})
export class TablerHomeEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeExclamationIcon],svg[tabler-home-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 12l-9-9l-9 9h2v7a2 2 0 0 0 2 2h8"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.857 1.257M19 16v3m0 3v.01"></svg:path></svg:g>`,
})
export class TablerHomeExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeFilledIcon],svg[tabler-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"></svg:path>`,
})
export class TablerHomeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeHandIcon],svg[tabler-home-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 9l-6-6l-9 9h2v7a2 2 0 0 0 2 2h3.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2m3 4.5l-.585-.578a1.516 1.516 0 0 0-2 0c-.477.433-.551 1.112-.177 1.622L15 21c.37.506 1.331 1 2 1h3c1.009 0 1.497-.683 1.622-1.593Q22 19 22 18c0-1-.939-1.843-2-2h-1v-2.636C19 12.61 18.328 12 17.5 12s-1.5.61-1.5 1.364z"></svg:path></svg:g>`,
})
export class TablerHomeHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeHeartIcon],svg[tabler-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 12l-9-9l-9 9h2v7a2 2 0 0 0 2 2h6"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 0 0 0-2.413a1.627 1.627 0 0 0-2.346 0l-.168.172l-.168-.172a1.627 1.627 0 0 0-2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z"></svg:path></svg:g>`,
})
export class TablerHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeInfinityIcon],svg[tabler-home-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 14v-2h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h2.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.75 1.032m.786 3.554a2.123 2.123 0 0 0-2.929 0a1.95 1.95 0 0 0 0 2.828c.809.781 2.12.781 2.929 0s-.805.778 0 0l1.46-1.41l1.46-1.419"></svg:path><svg:path d="m15.54 17.582l1.46 1.42l1.46 1.41c.809.78-.805-.779 0 0s2.12.781 2.929 0a1.95 1.95 0 0 0 0-2.828a2.123 2.123 0 0 0-2.929 0"></svg:path></svg:g>`,
})
export class TablerHomeInfinityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeLinkIcon],svg[tabler-home-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.085 11.085L12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M20 21a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-5 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="m21 16l-5 3l5 2"></svg:path></svg:g>`,
})
export class TablerHomeLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeMinusIcon],svg[tabler-home-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 15v-3h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5m3.5-2h6"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class TablerHomeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeMoveIcon],svg[tabler-home-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"></svg:path><svg:path d="M19 12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5m3.5-2h6m-3-3l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerHomeMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeOffIcon],svg[tabler-home-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12H3l4.497-4.497m2-2l2.504-2.504l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHomeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomePlusIcon],svg[tabler-home-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m1 4h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerHomePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeQuestionIcon],svg[tabler-home-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.136 11.136L12 3l-9 9h2v7a2 2 0 0 0 2 2h7"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.467 0 .896.16 1.236.428M19 22v.01M19 19a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerHomeQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeRibbonIcon],svg[tabler-home-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 15h5v7l-2.5-1.5L16 22z"></svg:path><svg:path d="m20 11l-8-8l-9 9h2v7a2 2 0 0 0 2 2h5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h1.5"></svg:path></svg:g>`,
})
export class TablerHomeRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeSearchIcon],svg[tabler-home-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 12l-9-9l-9 9h2v7a2 2 0 0 0 2 2h4.7"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2m2 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path></svg:g>`,
})
export class TablerHomeSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeShareIcon],svg[tabler-home-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.247 0 .484.045.702.127"></svg:path><svg:path d="M19 12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5m4 1l5-5m0 4.5V17h-4.5"></svg:path></svg:g>`,
})
export class TablerHomeShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeShieldIcon],svg[tabler-home-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h1.341"></svg:path><svg:path d="M19.682 10.682L12 3l-9 9h2v7a2 2 0 0 0 2 2h5"></svg:path><svg:path d="M22 16c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5c1 1 2.5 1.5 3.5 1.5"></svg:path></svg:g>`,
})
export class TablerHomeShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeSignalIcon],svg[tabler-home-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 22v-2m3 2v-4m3 4v-6m-2-3.506V12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5"></svg:path></svg:g>`,
})
export class TablerHomeSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeSparkIcon],svg[tabler-home-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m4 7.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></svg:path></svg:g>`,
})
export class TablerHomeSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeStarIcon],svg[tabler-home-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.258 10.258L12 3l-9 9h2v7a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h1.5m5.3 7.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411z"></svg:path></svg:g>`,
})
export class TablerHomeStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeStatsIcon],svg[tabler-home-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 13v-1h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h2.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-2 7l3-3l2 2l4-4"></svg:path><svg:path d="M19 17h3v3"></svg:path></svg:g>`,
})
export class TablerHomeStatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeUpIcon],svg[tabler-home-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771"></svg:path><svg:path d="M20.136 11.136L12 3l-9 9h2v7a2 2 0 0 0 2 2h6.344M19 22v-6m3 3l-3-3l-3 3"></svg:path></svg:g>`,
})
export class TablerHomeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHomeXIcon],svg[tabler-home-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 13.4V12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.402 0 .777.119 1.091.323M21.5 21.5l-5-5m0 5l5-5"></svg:path></svg:g>`,
})
export class TablerHomeXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHorseIcon],svg[tabler-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l-.85 8.507A1.357 1.357 0 0 0 7.5 20h.146a2 2 0 0 0 1.857-1.257l.994-2.486A2 2 0 0 1 12.354 15h1.292a2 2 0 0 1 1.857 1.257l.994 2.486A2 2 0 0 0 18.354 20h.146a1.37 1.37 0 0 0 1.364-1.494L19 9h-8c0-3-3-5-6-5l-3 6l2 2zm15 4v-2a3 3 0 0 0-3-3"></svg:path>`,
})
export class TablerHorseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHorseToyIcon],svg[tabler-horse-toy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.5 17.5q8.5 7 17 0"></svg:path><svg:path d="M19 18.5L17 10l1-2l2 1l1.5-1.5L19 3c-5.052.218-5.99 3.133-7 6H6a3 3 0 0 0-3 3m2 6.5L7 9"></svg:path><svg:path d="m8 20l2-5h4l2 5"></svg:path></svg:g>`,
})
export class TablerHorseToyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHorseshoeIcon],svg[tabler-horseshoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 17c.5-1.242 2-2 2-5s-1-9-9-9s-9 6-9 9s1.495 3.749 2 5l-2 1l2 3l2.406-1.147c1.25-.714 1.778-2.08 1.203-3.363C7.531 14.083 7 8 12 8s4.469 6.083 3.39 8.49c-.574 1.284-.045 2.649 1.204 3.363L19 21l2-3z"></svg:path>`,
})
export class TablerHorseshoeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHospitalIcon],svg[tabler-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7 11V8m4 8V8m-4 4h4"></svg:path>`,
})
export class TablerHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHospitalCircleIcon],svg[tabler-hospital-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16V8m-7 4a9 9 0 1 0 18 0a9 9 0 0 0-18 0m11 4V8m-4 4h4"></svg:path>`,
})
export class TablerHospitalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHospitalCircleFilledIcon],svg[tabler-hospital-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m2 5a1 1 0 0 0-1 1v2.999h-2V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3.001h2V16a1 1 0 0 0 .883.993L14 17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerHospitalCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHotelServiceIcon],svg[tabler-hotel-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 10A1.5 1.5 0 0 1 7 8.5a5.5 5.5 0 0 1 11 0V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2c0-1.38.71-2.444 1.88-3.175l4.424-2.765C14.359 10.4 15 9.744 15 8.5a2.5 2.5 0 1 0-5 0A1.5 1.5 0 0 1 8.5 10"></svg:path>`,
})
export class TablerHotelServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassIcon],svg[tabler-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.5 7h11m-11 10h11M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"></svg:path><svg:path d="M6 4v2a6 6 0 1 0 12 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1"></svg:path></svg:g>`,
})
export class TablerHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassEmptyIcon],svg[tabler-hourglass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"></svg:path><svg:path d="M6 4v2a6 6 0 1 0 12 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1"></svg:path></svg:g>`,
})
export class TablerHourglassEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassFilledIcon],svg[tabler-hourglass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a2 2 0 0 1 1.995 1.85L19 4v2a7 7 0 0 1-3.393 6a7 7 0 0 1 3.388 5.728L19 18v2a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20v-2a7 7 0 0 1 3.393-6a7 7 0 0 1-3.388-5.728L5 6V4a2 2 0 0 1 1.85-1.995L7 2z"></svg:path>`,
})
export class TablerHourglassFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassHighIcon],svg[tabler-hourglass-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.5 7h11M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"></svg:path><svg:path d="M6 4v2a6 6 0 1 0 12 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1"></svg:path></svg:g>`,
})
export class TablerHourglassHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassLowIcon],svg[tabler-hourglass-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.5 17h11M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"></svg:path><svg:path d="M6 4v2a6 6 0 1 0 12 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1"></svg:path></svg:g>`,
})
export class TablerHourglassLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassOffIcon],svg[tabler-hourglass-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a6 6 0 0 1 6-6M6 6a6 6 0 0 0 6 6m3.13-.88A6 6 0 0 0 18 6V4a1 1 0 0 0-1-1H7M3 3l18 18"></svg:path>`,
})
export class TablerHourglassOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHours12Icon],svg[tabler-hours-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4c.468 3.6 3.384 6.546 7 7m7-5h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2m-6 0v-6"></svg:path>`,
})
export class TablerHours12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHours24Icon],svg[tabler-hours-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 13c.325 2.532 1.881 4.781 4 6m12-8A8.1 8.1 0 0 0 4.5 9"></svg:path><svg:path d="M4 5v4h4m4 6h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2m3-6v2a1 1 0 0 0 1 1h1m1-3v6"></svg:path></svg:g>`,
})
export class TablerHours24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHtmlIcon],svg[tabler-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V8l2 5l2-5v8M1 16V8m4 0v8m-4-4h4m2-4h4M9 8v8m11-8v8h3"></svg:path>`,
})
export class TablerHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpConnectIcon],svg[tabler-http-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m10 2V8l4 8V8m-9 0a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerHttpConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpConnectOffIcon],svg[tabler-http-connect-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m10-1V8l4 8V8m-7 6a2 2 0 1 1-4 0v-4m2-2a2 2 0 0 1 2 2M3 3l18 18"></svg:path>`,
})
export class TablerHttpConnectOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpDeleteIcon],svg[tabler-http-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm11 0h-4v8h4m-4-4h2.5M17 8v8h4"></svg:path>`,
})
export class TablerHttpDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpDeleteOffIcon],svg[tabler-http-delete-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm11 0h-2m-2 2v6h4m-4-4h2m5-4v5m3 3h1M3 3l18 18"></svg:path>`,
})
export class TablerHttpDeleteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpGetIcon],svg[tabler-http-get-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H6m8-4h-4v8h4m-4-4h2.5M17 8h4m-2 0v8"></svg:path>`,
})
export class TablerHttpGetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpGetOffIcon],svg[tabler-http-get-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H6m8-4h-2m-2 2v6h4m-4-4h2m5-4h4m-2 0v7M3 3l18 18"></svg:path>`,
})
export class TablerHttpGetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpHeadIcon],svg[tabler-http-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16V8m4 0v8m-4-4h4m7-4h-4v8h4m-4-4h2.5m4.5 4v-6a2 2 0 1 1 4 0v6m-4-3h4"></svg:path>`,
})
export class TablerHttpHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpHeadOffIcon],svg[tabler-http-head-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16V8m4 0v8m-4-4h4m7-4h-2m-2 2v6h4m-4-4h2m5 1v-3a2 2 0 1 1 4 0v6m-4-3h4M3 3l18 18"></svg:path>`,
})
export class TablerHttpHeadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpOptionsIcon],svg[tabler-http-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m5 4h2a2 2 0 1 0 0-4h-2v8m7-8h4m-2 0v8"></svg:path>`,
})
export class TablerHttpOptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpOptionsOffIcon],svg[tabler-http-options-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m5 4h2m2-2a2 2 0 0 0-2-2m-2 2v6m7-8h4m-2 0v7M3 3l18 18"></svg:path>`,
})
export class TablerHttpOptionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpPatchIcon],svg[tabler-http-patch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h2a2 2 0 1 0 0-4H3v8m7 0v-6a2 2 0 1 1 4 0v6m-4-3h4m3-5h4m-2 0v8"></svg:path>`,
})
export class TablerHttpPatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpPatchOffIcon],svg[tabler-http-patch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h2a2 2 0 1 0 0-4H3v8m7 0v-6m2-2a2 2 0 0 1 2 2m0 4v2m-4-3h3m4-5h4m-2 0v7M3 3l18 18"></svg:path>`,
})
export class TablerHttpPatchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpPostIcon],svg[tabler-http-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h2a2 2 0 1 0 0-4H3v8m9-8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m5 7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1"></svg:path>`,
})
export class TablerHttpPostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpPostOffIcon],svg[tabler-http-post-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h2a2 2 0 1 0 0-4H3v8m9-8a2 2 0 0 1 2 2m0 4a2 2 0 1 1-4 0v-4m10 6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1M3 3l18 18"></svg:path>`,
})
export class TablerHttpPostOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpPutIcon],svg[tabler-http-put-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h2a2 2 0 1 0 0-4H3v8m14-8h4m-2 0v8m-9-8v6a2 2 0 1 0 4 0V8"></svg:path>`,
})
export class TablerHttpPutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpPutOffIcon],svg[tabler-http-put-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h2a2 2 0 1 0 0-4H3v8m14-8h4m-2 0v8m-9-6v4a2 2 0 1 0 4 0m0-4V8M3 3l18 18"></svg:path>`,
})
export class TablerHttpPutOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpQueIcon],svg[tabler-http-que-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m1 7l1 1m14-8h-4v8h4m-4-4h2.5M10 8v6a2 2 0 1 0 4 0V8"></svg:path>`,
})
export class TablerHttpQueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpQueOffIcon],svg[tabler-http-que-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m1 7l1 1m14-8h-4v8h4m-4-4h2.5M10 10v4a2 2 0 1 0 4 0m0-4V8M3 3l18 18"></svg:path>`,
})
export class TablerHttpQueOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpTraceIcon],svg[tabler-http-trace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h4M5 8v8m5-4h2a2 2 0 1 0 0-4h-2v8m4 0l-3-4m6 4v-6a2 2 0 1 1 4 0v6m-4-3h4"></svg:path>`,
})
export class TablerHttpTraceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerHttpTraceOffIcon],svg[tabler-http-trace-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h4M5 8v8m5-4h2m2-2a2 2 0 0 0-2-2m-2 2v6m4 0l-3-4m6 1v-3a2 2 0 1 1 4 0v6m-4-3h4M3 3l18 18"></svg:path>`,
})
export class TablerHttpTraceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIceCreamIcon],svg[tabler-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21.5V17m-4 0h8V7a4 4 0 1 0-8 0zm0-6.5L16 7m-8 7.5l8-3.5"></svg:path>`,
})
export class TablerIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIceCream2Icon],svg[tabler-ice-cream-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 11a6 6 0 1 0-11.315 0m0 0L12 22l5.657-11z"></svg:path>`,
})
export class TablerIceCream2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIceCreamOffIcon],svg[tabler-ice-cream-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21.5V17M8 8v9h8v-1m0-4V7a4 4 0 0 0-7.277-2.294M8 10.5l1.74-.76m2.79-1.222L16 7m-8 7.5l4.488-1.964M3 3l18 18"></svg:path>`,
})
export class TablerIceCreamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIceSkatingIcon],svg[tabler-ice-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.905 5h3.418a1 1 0 0 1 .928.629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717.926A2.084 2.084 0 0 1 20 13.286V14a1 1 0 0 1-1 1H5.105a1 1 0 0 1-1-1.1l.8-8a1 1 0 0 1 1-.9M3 19h17a1 1 0 0 0 1-1M9 15v4m6-4v4"></svg:path>`,
})
export class TablerIceSkatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIconsIcon],svg[tabler-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M2.5 21h8l-4-7zM14 3l7 7m-7 0l7-7m-7 11h7v7h-7z"></svg:path>`,
})
export class TablerIconsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIconsFilledIcon],svg[tabler-icons-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.25 2.603A4.5 4.5 0 1 1 2 6.5l.006-.229A4.5 4.5 0 0 1 4.25 2.603m1.382 10.901a1 1 0 0 1 1.736 0l4 7A1 1 0 0 1 10.5 22h-8a1 1 0 0 1-.868-1.496zm7.661-11.211a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M20.293 2.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414-1.414zM21 13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class TablerIconsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIconsOffIcon],svg[tabler-icons-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.01 4.041A3.5 3.5 0 0 0 6.5 10c.975 0 1.865-.357 2.5-1m.958-3.044a3.5 3.5 0 0 0-2.905-2.912M2.5 21h8l-4-7zM14 3l7 7m-7 0l7-7m-3 11h3v3m0 4h-7v-7M3 3l18 18"></svg:path>`,
})
export class TablerIconsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIdIcon],svg[tabler-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M7 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8-2h2m-2 4h2M7 16h10"></svg:path></svg:g>`,
})
export class TablerIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIdBadgeIcon],svg[tabler-id-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"></svg:path><svg:path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0-7h4M9 18h6"></svg:path></svg:g>`,
})
export class TablerIdBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIdBadge2Icon],svg[tabler-id-badge-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 12h3v4H7z"></svg:path><svg:path d="M10 6H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6"></svg:path><svg:path d="M10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm4 12h2m-2-4h4"></svg:path></svg:g>`,
})
export class TablerIdBadge2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIdBadgeOffIcon],svg[tabler-id-badge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.141 3.125A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v9m-.13 3.874A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3V6a3 3 0 0 1 .128-.869"></svg:path><svg:path d="M11.179 11.176a2 2 0 1 0 2.635 2.667M10 6h4M9 18h6M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerIdBadgeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIdOffIcon],svg[tabler-id-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455.279-.99.439-1.563.439H6a3 3 0 0 1-3-3V7c0-1.083.573-2.031 1.433-2.559"></svg:path><svg:path d="M8.175 8.178a2 2 0 1 0 2.646 2.65M15 8h2m-1 4h1M7 16h9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerIdOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIkosaedrIcon],svg[tabler-ikosaedr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 8.007v7.986a2 2 0 0 1-1.006 1.735l-7 4.007a2 2 0 0 1-1.988 0l-7-4.007A2 2 0 0 1 3 15.993V8.007a2 2 0 0 1 1.006-1.735l7-4.007a2 2 0 0 1 1.988 0l7 4.007A2 2 0 0 1 21 8.007M3.29 6.97L7.5 9m13.21-2.03L16.5 9m4.2 8H3.3"></svg:path><svg:path d="M11.76 2.03L7.5 9l-4.3 7.84m9.04-14.81Q15.037 6.47 16.5 9t4.3 7.84"></svg:path><svg:path d="M12 17L7.5 9h9zm0 0v5"></svg:path></svg:g>`,
})
export class TablerIkosaedrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerImageInPictureIcon],svg[tabler-image-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 15c-2 0-5 1-5 5"></svg:path><svg:path d="M4 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0-6V5a1 1 0 0 1 1-1h2m4 0h2m4 0h2a1 1 0 0 1 1 1v2m0 4v2m0 4v2a1 1 0 0 1-1 1h-2"></svg:path></svg:g>`,
})
export class TablerImageInPictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInboxIcon],svg[tabler-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M4 13h3l3 3h4l3-3h3"></svg:path></svg:g>`,
})
export class TablerInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInboxOffIcon],svg[tabler-inbox-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.056.59-1.418"></svg:path><svg:path d="M4 13h3l3 3h4l.987-.987M17 13h3M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerInboxOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIndentDecreaseIcon],svg[tabler-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6h-7m7 6h-9m9 6h-7M8 8l-4 4l4 4"></svg:path>`,
})
export class TablerIndentDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIndentIncreaseIcon],svg[tabler-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6H9m11 6h-7m7 6H9M4 8l4 4l-4 4"></svg:path>`,
})
export class TablerIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfinityIcon],svg[tabler-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.828 9.172a4 4 0 1 0 0 5.656A10 10 0 0 0 12 12a10 10 0 0 1 2.172-2.828a4 4 0 1 1 0 5.656A10 10 0 0 1 12 12a10 10 0 0 0-2.172-2.828"></svg:path>`,
})
export class TablerInfinityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfinityOffIcon],svg[tabler-infinity-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.165 8.174A4 4 0 0 0 2.999 12a4 4 0 0 0 6.829 2.828A10 10 0 0 0 12 12m1.677-2.347a10 10 0 0 1 .495-.481a4 4 0 1 1 5.129 6.1m-3.521.537a4 4 0 0 1-1.608-.981A10 10 0 0 1 12 12M3 3l18 18"></svg:path>`,
})
export class TablerInfinityOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoCircleIcon],svg[tabler-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-3h.01"></svg:path><svg:path d="M11 12h1v4h1"></svg:path></svg:g>`,
})
export class TablerInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoCircleFilledIcon],svg[tabler-info-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m0 9h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerInfoCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoHexagonIcon],svg[tabler-info-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM12 9h.01"></svg:path><svg:path d="M11 12h1v4h1"></svg:path></svg:g>`,
})
export class TablerInfoHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoHexagonFilledIcon],svg[tabler-info-hexagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.026-.097l.19.097l6.775 3.995l.096.063l.092.077l.107.075a3.22 3.22 0 0 1 1.266 2.188l.018.202l.005.204v7.284c0 1.106-.57 2.129-1.454 2.693l-.17.1l-6.803 4.302c-.918.504-2.019.535-3.004.068l-.196-.1l-6.695-4.237a3.23 3.23 0 0 1-1.671-2.619L2 15.502V8.217c0-1.106.57-2.128 1.476-2.705zM12 11h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerInfoHexagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoOctagonIcon],svg[tabler-info-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12.802 2.165l5.575 2.389c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-2.389 5.575c-.206.48-.589.863-1.07 1.07l-5.574 2.388c-.512.22-1.092.22-1.604 0l-5.575-2.389a2.04 2.04 0 0 1-1.07-1.07l-2.388-5.574a2.04 2.04 0 0 1 0-1.604l2.389-5.575c.206-.48.589-.863 1.07-1.07l5.574-2.388a2.04 2.04 0 0 1 1.604 0M12 9h.01"></svg:path><svg:path d="M11 12h1v4h1"></svg:path></svg:g>`,
})
export class TablerInfoOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoOctagonFilledIcon],svg[tabler-info-octagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.897 1a4 4 0 0 1 2.664 1.016l.165.156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006.227v5.794a4 4 0 0 1-1.016 2.664l-.156.165l-4.1 4.1a4 4 0 0 1-2.603 1.168l-.227.006H9.103a4 4 0 0 1-2.664-1.017l-.165-.156l-4.1-4.1a4 4 0 0 1-1.168-2.604L1 14.897V9.103a4 4 0 0 1 1.016-2.664l.156-.165l4.1-4.1a4 4 0 0 1 2.605-1.168L9.104 1zM12 11h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerInfoOctagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoSmallIcon],svg[tabler-info-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9h.01M11 12h1v4h1"></svg:path>`,
})
export class TablerInfoSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoSquareIcon],svg[tabler-info-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 9h.01M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M11 12h1v4h1"></svg:path></svg:g>`,
})
export class TablerInfoSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoSquareFilledIcon],svg[tabler-info-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 2.995 2.824L22 5v14a3 3 0 0 1-2.824 2.995L19 22H5a3 3 0 0 1-2.995-2.824L2 19V5a3 3 0 0 1 2.824-2.995L5 2zm-7 9h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerInfoSquareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoSquareRoundedIcon],svg[tabler-info-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 9h.01M11 12h1v4h1"></svg:path><svg:path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9"></svg:path></svg:g>`,
})
export class TablerInfoSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoSquareRoundedFilledIcon],svg[tabler-info-square-rounded-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l.642.005l.616.017l.299.013l.579.034l.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29l.046.553l.041.727l.006.15l.017.617L22 12l-.005.642l-.017.616l-.013.299l-.034.579l-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03l-.553.046l-.727.041l-.15.006l-.617.017L12 22l-.642-.005l-.616-.017l-.299-.013l-.579-.034l-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29l-.046-.553l-.041-.727l-.006-.15l-.017-.617l-.004-.318v-.648l.004-.318l.017-.616l.013-.299l.034-.579l.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03l.553-.046l.727-.041l.15-.006l.617-.017Q11.673 2 12 2m0 9h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerInfoSquareRoundedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoTriangleIcon],svg[tabler-info-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0zM12 9h.01"></svg:path><svg:path d="M11 12h1v4h1"></svg:path></svg:g>`,
})
export class TablerInfoTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInfoTriangleFilledIcon],svg[tabler-info-triangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.67c.955 0 1.845.467 2.39 1.247l.105.16l8.114 13.548a2.914 2.914 0 0 1-2.307 4.363l-.195.008H3.882a2.914 2.914 0 0 1-2.582-4.2l.099-.185l8.11-13.538A2.91 2.91 0 0 1 12 1.67M12 11h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerInfoTriangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomIcon],svg[tabler-inner-shadow-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.364 18.364A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728"></svg:path><svg:path d="M7.757 16.243a6 6 0 0 0 8.486 0"></svg:path></svg:g>`,
})
export class TablerInnerShadowBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomFilledIcon],svg[tabler-inner-shadow-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.144 4.72c3.92-3.695 10.093-3.625 13.927.209c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142zm3.32 10.816A1 1 0 1 0 7.05 16.95a7 7 0 0 0 9.9 0a1 1 0 0 0-1.414-1.414a5 5 0 0 1-7.072 0"></svg:path>`,
})
export class TablerInnerShadowBottomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomLeftIcon],svg[tabler-inner-shadow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M6 12a6 6 0 0 0 6 6"></svg:path></svg:g>`,
})
export class TablerInnerShadowBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomLeftFilledIcon],svg[tabler-inner-shadow-bottom-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-6 9a1 1 0 0 0-1 1a7 7 0 0 0 7 7a1 1 0 0 0 0-2a5 5 0 0 1-5-5a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerInnerShadowBottomLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomRightIcon],svg[tabler-inner-shadow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path><svg:path d="M18 12a6 6 0 0 1-6 6"></svg:path></svg:g>`,
})
export class TablerInnerShadowBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomRightFilledIcon],svg[tabler-inner-shadow-bottom-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m6 9a1 1 0 0 0-1 1a5 5 0 0 1-5 5a1 1 0 0 0 0 2a7 7 0 0 0 7-7a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerInnerShadowBottomRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowLeftIcon],svg[tabler-inner-shadow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.636 5.636a9 9 0 1 1 12.728 12.728A9 9 0 0 1 5.636 5.636"></svg:path><svg:path d="M7.757 16.243a6 6 0 0 1 0-8.486"></svg:path></svg:g>`,
})
export class TablerInnerShadowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowLeftFilledIcon],svg[tabler-inner-shadow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142M8.464 7.05a1 1 0 0 0-1.414 0a7 7 0 0 0 0 9.9a1 1 0 1 0 1.414-1.414a5 5 0 0 1 0-7.072a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class TablerInnerShadowLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowRightIcon],svg[tabler-inner-shadow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728"></svg:path><svg:path d="M16.243 7.757a6 6 0 0 1 0 8.486"></svg:path></svg:g>`,
})
export class TablerInnerShadowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowRightFilledIcon],svg[tabler-inner-shadow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142m12.02 2.121a1 1 0 0 0-1.413 1.414a5 5 0 0 1 0 7.072a1 1 0 0 0 1.414 1.414a7 7 0 0 0 0-9.9z"></svg:path>`,
})
export class TablerInnerShadowRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopIcon],svg[tabler-inner-shadow-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.636 5.636a9 9 0 1 0 12.728 12.728A9 9 0 0 0 5.636 5.636"></svg:path><svg:path d="M16.243 7.757a6 6 0 0 0-8.486 0"></svg:path></svg:g>`,
})
export class TablerInnerShadowTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopFilledIcon],svg[tabler-inner-shadow-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142m12.02 2.121a7 7 0 0 0-9.899 0a1 1 0 0 0 1.414 1.414a5 5 0 0 1 7.072 0A1 1 0 0 0 16.95 7.05z"></svg:path>`,
})
export class TablerInnerShadowTopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopLeftIcon],svg[tabler-inner-shadow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18"></svg:path><svg:path d="M6 12a6 6 0 0 1 6-6"></svg:path></svg:g>`,
})
export class TablerInnerShadowTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopLeftFilledIcon],svg[tabler-inner-shadow-top-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 3a7 7 0 0 0-7 7a1 1 0 0 0 2 0a5 5 0 0 1 5-5a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerInnerShadowTopLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopRightIcon],svg[tabler-inner-shadow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18"></svg:path><svg:path d="M18 12a6 6 0 0 0-6-6"></svg:path></svg:g>`,
})
export class TablerInnerShadowTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowTopRightFilledIcon],svg[tabler-inner-shadow-top-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 3a1 1 0 0 0 0 2a5 5 0 0 1 5 5a1 1 0 0 0 2 0a7 7 0 0 0-7-7"></svg:path>`,
})
export class TablerInnerShadowTopRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInputAiIcon],svg[tabler-input-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 11V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4m4 5v-4a2 2 0 1 1 4 0v4m-4-2h4m3-4v6"></svg:path>`,
})
export class TablerInputAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInputCheckIcon],svg[tabler-input-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6m3 3l2 2l4-4"></svg:path>`,
})
export class TablerInputCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInputSearchIcon],svg[tabler-input-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 11V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5m4 2a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path>`,
})
export class TablerInputSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInputSparkIcon],svg[tabler-input-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 22.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5m1-11V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7"></svg:path>`,
})
export class TablerInputSparkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInputXIcon],svg[tabler-input-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7m9 6l-5-5m0 5l5-5"></svg:path>`,
})
export class TablerInputXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerInvoiceIcon],svg[tabler-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M19 12v7a1.78 1.78 0 0 1-3.1 1.4a1.65 1.65 0 0 0-2.6 0a1.65 1.65 0 0 1-2.6 0a1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 19V5a2 2 0 0 1 2-2h7l5 5v4.25"></svg:path></svg:g>`,
})
export class TablerInvoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroningIcon],svg[tabler-ironing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865A1 1 0 0 1 19.82 18H3a7 7 0 0 1 7-7h9.8"></svg:path>`,
})
export class TablerIroningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroning1Icon],svg[tabler-ironing-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865A1 1 0 0 1 19.82 18H3a7 7 0 0 1 7-7h9.8M12 15h.01"></svg:path>`,
})
export class TablerIroning1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroning1FilledIcon],svg[tabler-ironing-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.459 5a4 4 0 0 1 3.945 3.343l1.387 8.329A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 1 1 0-2zm-4.449 9H12a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerIroning1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroning2Icon],svg[tabler-ironing-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15h.01M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865A1 1 0 0 1 19.82 18H3a7 7 0 0 1 7-7h9.8M14 15h.01"></svg:path>`,
})
export class TablerIroning2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroning2FilledIcon],svg[tabler-ironing-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.459 5a4 4 0 0 1 3.945 3.343l1.387 8.329A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 1 1 0-2zm-6.449 9H10a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m4 0H14a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerIroning2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroning3Icon],svg[tabler-ironing-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15h.01M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865A1 1 0 0 1 19.82 18H3a7 7 0 0 1 7-7h9.8M9 15h.01M15 15h.01"></svg:path>`,
})
export class TablerIroning3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroning3FilledIcon],svg[tabler-ironing-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.459 5a4 4 0 0 1 3.945 3.343l1.387 8.329A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 1 1 0-2zm-4.449 9H12a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m-3 0H9a1 1 0 0 0-.117 1.993L9.01 16a1 1 0 0 0 0-2m6 0H15a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerIroning3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroningFilledIcon],svg[tabler-ironing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.459 5a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 1 1 0-2z"></svg:path>`,
})
export class TablerIroningFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroningOffIcon],svg[tabler-ironing-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h6.459a3 3 0 0 1 2.959 2.507l.577 3.464l.804 4.821l.007.044M18 18H3a7 7 0 0 1 7-7h1m4 0h4.8M3 3l18 18"></svg:path>`,
})
export class TablerIroningOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroningSteamIcon],svg[tabler-ironing-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19v2M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865A1 1 0 0 1 19.82 16H3a7 7 0 0 1 7-7h9.8M8 19l-1 2m9-2l1 2"></svg:path>`,
})
export class TablerIroningSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroningSteamFilledIcon],svg[tabler-ironing-steam-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m4.459-15a4 4 0 0 1 3.945 3.343l.577 3.464l.81 4.865A2 2 0 0 1 19.82 17H3a1 1 0 0 1-1-1a8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 5H9a1 1 0 1 1 0-2zM7.106 18.553a1 1 0 0 1 1.788.894l-1 2a1 1 0 0 1-1.788-.894zm8.447-.447a1 1 0 0 1 1.341.447l1 2a1 1 0 0 1-1.788.894l-1-2a1 1 0 0 1 .447-1.341"></svg:path>`,
})
export class TablerIroningSteamFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIroningSteamOffIcon],svg[tabler-ironing-steam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1-.821 1.15M16 16H3a7 7 0 0 1 6.056-6.937M13 9h6.8M12 19v2m-4-2l-1 2m9-2l1 2M3 3l18 18"></svg:path>`,
})
export class TablerIroningSteamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIrregularPolyhedronIcon],svg[tabler-irregular-polyhedron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282-2.503a1 1 0 0 0 .592-1.204L18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L4.84 4.665a1 1 0 0 0-.592 1.204z"></svg:path><svg:path d="m4.5 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0L18 12m-6 10V8"></svg:path></svg:g>`,
})
export class TablerIrregularPolyhedronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIrregularPolyhedronOffIcon],svg[tabler-irregular-polyhedron-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.706 4.73a1 1 0 0 0-.458 1.14L6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282-2.503q.06-.024.116-.055m-.474-4.474L18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L7.578 3.574"></svg:path><svg:path d="M4.5 5.5q.991.32 1.5.5m6 2c.29-.003.603-.06.878-.17L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l.742-.265m2.956-1.057q.468-.166 1.512-.54m-6 10V12M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerIrregularPolyhedronOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerIrregularPolyhedronPlusIcon],svg[tabler-irregular-polyhedron-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L4.84 4.665a1 1 0 0 0-.592 1.204L6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l.221-.088"></svg:path><svg:path d="m4.5 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0L18 12m-6 10V8m4 11h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerIrregularPolyhedronPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerItalicIcon],svg[tabler-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5h6M7 19h6m1-14l-4 14"></svg:path>`,
})
export class TablerItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJacketIcon],svg[tabler-jacket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 3l-4 5l-4-5"></svg:path><svg:path d="M12 19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.172a2 2 0 0 1 .586-1.414l.828-.828A2 2 0 0 0 6 7.172V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828.828A2 2 0 0 1 20 10.828V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2"></svg:path><svg:path d="M20 13h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3M4 17h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4m8 6V8"></svg:path></svg:g>`,
})
export class TablerJacketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJetpackIcon],svg[tabler-jetpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6a3 3 0 1 0-6 0v7h6zm4 7h6V6a3 3 0 0 0-6 0zm-9 3q0 3.5 2 5q2-1.5 2-5m6 0q0 3.5 2 5q2-1.5 2-5m-9-8h4m-4 3h4"></svg:path>`,
})
export class TablerJetpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJetpackFilledIcon],svg[tabler-jetpack-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a4 4 0 0 1 4 4v7a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1h-2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a4 4 0 0 1 8 0v1h2V6a4 4 0 0 1 4-4m-4 8V9h-2v1zm-4 5a1 1 0 0 1 1 1c0 2.623-.787 4.59-2.4 5.8a1 1 0 0 1-1.2 0C4.787 20.59 4 18.623 4 16a1 1 0 0 1 2 0c0 1.532.308 2.684.906 3.498l.094.119l.094-.12c.558-.759.864-1.813.902-3.196L8 16a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1c0 2.623-.787 4.59-2.4 5.8a1 1 0 0 1-1.2 0C14.787 20.59 14 18.623 14 16a1 1 0 0 1 2 0c0 1.532.308 2.684.906 3.498l.094.119l.094-.12c.558-.759.864-1.813.902-3.196L18 16a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerJetpackFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJewishStarIcon],svg[tabler-jewish-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2l3 5h6l-3 5l3 5h-6l-3 5l-3-5H3l3-5l-3-5h6z"></svg:path>`,
})
export class TablerJewishStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJewishStarFilledIcon],svg[tabler-jewish-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.433 6H3l-.114.006a1 1 0 0 0-.743 1.508L4.833 12l-2.69 4.486l-.054.1A1 1 0 0 0 3 18h5.434l2.709 4.514l.074.108a1 1 0 0 0 1.64-.108L15.565 18H21l.114-.006a1 1 0 0 0 .743-1.508L19.166 12l2.691-4.486l.054-.1A1 1 0 0 0 21 6h-5.434l-2.709-4.514a1 1 0 0 0-1.714 0z"></svg:path>`,
})
export class TablerJewishStarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJoinBevelIcon],svg[tabler-join-bevel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6.586a1 1 0 0 1-.707-.293l-6.414-6.414A1 1 0 0 1 4 12.586V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerJoinBevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJoinRoundIcon],svg[tabler-join-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a8 8 0 0 1-8-8V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerJoinRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJoinStraightIcon],svg[tabler-join-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerJoinStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJokerIcon],svg[tabler-joker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17.5A1.5 1.5 0 0 1 6.5 16h11a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5m7-1.5Q9.5 8 6 8q-2.5 0-3 2c2.953.31 3.308 3.33 4 6m5 0q2.5-8 6-8q2.5 0 3 2c-2.953.31-3.308 3.33-4 6"></svg:path><svg:path d="M9 9.5Q11 6 12 6t3 3.5"></svg:path></svg:g>`,
})
export class TablerJokerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJpgIcon],svg[tabler-jpg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1m-10 4V8h2a2 2 0 1 1 0 4h-2M3 8h4v6a2 2 0 0 1-2 2H3.5a.5.5 0 0 1-.5-.5V15"></svg:path>`,
})
export class TablerJpgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJsonIcon],svg[tabler-json-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 16V8l3 8V8m-8 0a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2M1 8h3v6.5a1.5 1.5 0 0 1-3 0V14m6 1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1"></svg:path>`,
})
export class TablerJsonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerJumpRopeIcon],svg[tabler-jump-rope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 14V8a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6"></svg:path><svg:path d="M16 5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2zM4 16a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class TablerJumpRopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKarateIcon],svg[tabler-karate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 9l4.5 1l3 2.5M13 21v-8l3-5.5"></svg:path><svg:path d="m8 4.5l4 2l4 1l4 3.5l-2 3.5"></svg:path></svg:g>`,
})
export class TablerKarateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKayakIcon],svg[tabler-kayak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172L2.172 5l1.414 1.414a2 2 0 0 0 2.828 0m11.172 11.172a2 2 0 0 0 0 2.828L19 21.828L21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0M6.5 6.5l11 11m4.5-15C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5m-15.5 10l5 5m1-11l5 5"></svg:path>`,
})
export class TablerKayakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKerningIcon],svg[tabler-kerning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-3.5a2.5 2.5 0 1 1 5 0V15m0-2h-5M3 9l3 6l3-6m0 11l6-16"></svg:path>`,
})
export class TablerKerningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyIcon],svg[tabler-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1-4.069 0l-.301-.301l-6.558 6.558a2 2 0 0 1-1.239.578L5.172 21H4a1 1 0 0 1-.993-.883L3 20v-1.172a2 2 0 0 1 .467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144l-.301-.301a2.877 2.877 0 0 1 0-4.069l2.643-2.643a2.877 2.877 0 0 1 4.069 0M15 9h.01"></svg:path>`,
})
export class TablerKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyFilledIcon],svg[tabler-key-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.52 2c1.029 0 2.015.409 2.742 1.136l3.602 3.602a3.877 3.877 0 0 1 0 5.483l-2.643 2.643a3.88 3.88 0 0 1-4.941.452l-.105-.078l-5.882 5.883a3 3 0 0 1-1.68.843l-.22.027l-.221.009H4c-1.014 0-1.867-.759-1.991-1.823L2 20v-1.172c0-.704.248-1.386.73-1.96l.149-.161l.414-.414A1 1 0 0 1 4 16h1v-1a1 1 0 0 1 .883-.993L6 14h1v-1a1 1 0 0 1 .206-.608l.087-.1l1.468-1.469l-.076-.103a3.9 3.9 0 0 1-.678-1.963L8 8.521c0-1.029.409-2.015 1.136-2.742l2.643-2.643A3.88 3.88 0 0 1 14.52 2m.495 5h-.02a2 2 0 1 0 0 4h.02a2 2 0 1 0 0-4"></svg:path>`,
})
export class TablerKeyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyOffIcon],svg[tabler-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.17 6.159l2.316-2.316a2.877 2.877 0 0 1 4.069 0l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.33 2.33m-2.896 1.104a2.86 2.86 0 0 1-1.486-.79l-.301-.302l-6.558 6.558a2 2 0 0 1-1.239.578L5.172 21H4a1 1 0 0 1-.993-.883L3 20v-1.172a2 2 0 0 1 .467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144l-.301-.301a2.86 2.86 0 0 1-.794-1.504M15 9h.01M3 3l18 18"></svg:path>`,
})
export class TablerKeyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyboardIcon],svg[tabler-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 2v.01m4-.01v.01m4-.01v.01m4-.01v.01M6 14v.01M18 14v.01M10 14l4 .01"></svg:path>`,
})
export class TablerKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyboardFilledIcon],svg[tabler-keyboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM6 13a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V14a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V14a1 1 0 0 0-1-1m-7.998 0a1 1 0 0 0-.004 2l4 .01a1 1 0 0 0 .005-2zM6 9a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerKeyboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyboardHideIcon],svg[tabler-keyboard-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 2v.01M10 7v.01M14 7v.01M18 7v.01M6 11v.01M18 11v.01M10 11h4m-4 10l2-2l2 2"></svg:path>`,
})
export class TablerKeyboardHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyboardOffIcon],svg[tabler-keyboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554-.226 1.056-.59 1.418M6 10v.01m4-.01v.01m4-.01v.01m4-.01v.01M6 14v.01M18 14v.01M10 14h4M3 3l18 18"></svg:path>`,
})
export class TablerKeyboardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyboardShowIcon],svg[tabler-keyboard-show-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 2v.01M10 7v.01M14 7v.01M18 7v.01M6 11v.01M18 11v.01M10 11h4m-4 8l2 2l2-2"></svg:path>`,
})
export class TablerKeyboardShowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeIcon],svg[tabler-keyframe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.225 18.412A1.6 1.6 0 0 1 12 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 0 1 0-2.328l4.361-5.248A1.6 1.6 0 0 1 12 5c.468 0 .914.214 1.225.588l4.361 5.248a1.844 1.844 0 0 1 0 2.328z"></svg:path>`,
})
export class TablerKeyframeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeAlignCenterIcon],svg[tabler-keyframe-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20v2m.816-5.42c-.207.267-.504.42-.816.42s-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42s.61.153.816.42l2.908 3.748a1.39 1.39 0 0 1 0 1.664zM12 2v2m-9 8h2m14 0h2"></svg:path>`,
})
export class TablerKeyframeAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeAlignCenterFilledIcon],svg[tabler-keyframe-align-center-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a1 1 0 0 1 .993.883L13 20v2a1 1 0 0 1-1.993.117L11 22v-2a1 1 0 0 1 1-1m0-13c-.629 0-1.214.301-1.606.807l-2.908 3.748a2.395 2.395 0 0 0-.011 2.876l2.919 3.762c.39.505.977.807 1.606.807s1.214-.301 1.606-.807l2.908-3.748a2.395 2.395 0 0 0 .011-2.876l-2.919-3.762A2.03 2.03 0 0 0 12 6m0-5a1 1 0 0 1 .993.883L13 2v2a1 1 0 0 1-1.993.117L11 4V2a1 1 0 0 1 1-1M5 11a1 1 0 0 1 .117 1.993L5 13H3a1 1 0 0 1-.117-1.993L3 11zm16 0a1 1 0 0 1 .117 1.993L21 13h-2a1 1 0 0 1-.117-1.993L19 11z"></svg:path>`,
})
export class TablerKeyframeAlignCenterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeAlignHorizontalIcon],svg[tabler-keyframe-align-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.816 16.58c-.207.267-.504.42-.816.42s-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42s.61.153.816.42l2.908 3.748a1.39 1.39 0 0 1 0 1.664zM3 12h2m14 0h2"></svg:path>`,
})
export class TablerKeyframeAlignHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeAlignHorizontalFilledIcon],svg[tabler-keyframe-align-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-.629 0-1.214.301-1.606.807l-2.908 3.748a2.395 2.395 0 0 0-.011 2.876l2.919 3.762c.39.505.977.807 1.606.807s1.214-.301 1.606-.807l2.908-3.748a2.395 2.395 0 0 0 .011-2.876l-2.919-3.762A2.03 2.03 0 0 0 12 6m-7 5a1 1 0 0 1 .117 1.993L5 13H3a1 1 0 0 1-.117-1.993L3 11zm16 0a1 1 0 0 1 .117 1.993L21 13h-2a1 1 0 0 1-.117-1.993L19 11z"></svg:path>`,
})
export class TablerKeyframeAlignHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeAlignVerticalIcon],svg[tabler-keyframe-align-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m.816 12.58c-.207.267-.504.42-.816.42s-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42s.61.153.816.42l2.908 3.748a1.39 1.39 0 0 1 0 1.664zM12 20v2"></svg:path>`,
})
export class TablerKeyframeAlignVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeAlignVerticalFilledIcon],svg[tabler-keyframe-align-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a1 1 0 0 1 .993.883L13 2v2a1 1 0 0 1-1.993.117L11 4V2a1 1 0 0 1 1-1m0 5c-.629 0-1.214.301-1.606.807l-2.908 3.748a2.395 2.395 0 0 0-.011 2.876l2.919 3.762c.39.505.977.807 1.606.807s1.214-.301 1.606-.807l2.908-3.748a2.395 2.395 0 0 0 .011-2.876l-2.919-3.762A2.03 2.03 0 0 0 12 6m0 13a1 1 0 0 1 .993.883L13 20v2a1 1 0 0 1-1.993.117L11 22v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerKeyframeAlignVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframeFilledIcon],svg[tabler-keyframe-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a2.6 2.6 0 0 0-2 .957l-4.355 5.24a2.85 2.85 0 0 0-.007 3.598l4.368 5.256c.499.6 1.225.949 1.994.949a2.6 2.6 0 0 0 2-.957l4.355-5.24a2.85 2.85 0 0 0 .007-3.598l-4.368-5.256A2.6 2.6 0 0 0 12 4"></svg:path>`,
})
export class TablerKeyframeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframesIcon],svg[tabler-keyframes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.225 18.412A1.6 1.6 0 0 1 8 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 0 1 0-2.328l4.361-5.248A1.6 1.6 0 0 1 8 5c.468 0 .914.214 1.225.588l4.361 5.248a1.844 1.844 0 0 1 0 2.328zM17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328L17 19"></svg:path><svg:path d="m13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328L13 19"></svg:path></svg:g>`,
})
export class TablerKeyframesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframesFilledIcon],svg[tabler-keyframes-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 4a2.6 2.6 0 0 0-2 .957l-4.355 5.24a2.85 2.85 0 0 0-.007 3.598l4.368 5.256C6.505 19.651 7.23 20 8 20a2.6 2.6 0 0 0 2-.957l4.355-5.24a2.85 2.85 0 0 0 .007-3.598L9.994 4.949A2.6 2.6 0 0 0 8 4m8.382.214a1 1 0 0 1 1.32.074l.084.094l4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158l-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104l4.596-5.85a.845.845 0 0 0 .06-.978l-.07-.1l-4.586-5.836a1 1 0 0 1 .168-1.404"></svg:path><svg:path d="M12.382 4.214a1 1 0 0 1 1.32.074l.084.094l4.576 5.823c.808.993.848 2.396.13 3.419l-.12.158l-4.586 5.836a1 1 0 0 1-1.644-1.132l.072-.104l4.596-5.85a.845.845 0 0 0 .06-.978l-.07-.1l-4.586-5.836a1 1 0 0 1 .168-1.404"></svg:path></svg:g>`,
})
export class TablerKeyframesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLabelIcon],svg[tabler-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.52 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .78-.375L21 12l-3.7-4.625A1 1 0 0 0 16.52 7"></svg:path>`,
})
export class TablerLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLabelFilledIcon],svg[tabler-label-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.52 6a2 2 0 0 1 1.561.75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624A2 2 0 0 1 16.52 18H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLabelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLabelImportantIcon],svg[tabler-label-important-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.52 7H4l4 5l-4 5h12.52a1 1 0 0 0 .78-.375L21 12l-3.7-4.625A1 1 0 0 0 16.52 7"></svg:path>`,
})
export class TablerLabelImportantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLabelImportantFilledIcon],svg[tabler-label-important-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.52 6a2 2 0 0 1 1.561.75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624A2 2 0 0 1 16.52 18H4a1 1 0 0 1-.78-1.625L6.72 12l-3.5-4.375a1 1 0 0 1 .668-1.62L4 6z"></svg:path>`,
})
export class TablerLabelImportantFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLabelOffIcon],svg[tabler-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .394-.081m1.86-2.137L21 12l-3.7-4.625A1 1 0 0 0 16.52 7H11M3 3l18 18"></svg:path>`,
})
export class TablerLabelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLadderIcon],svg[tabler-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3v18m8-18v18m-8-7h8m-8-4h8M8 6h8M8 18h8"></svg:path>`,
})
export class TablerLadderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLadderOffIcon],svg[tabler-ladder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3v1m0 4v13m8-18v9m0 4v5m-8-7h6m-6-4h2m4 0h2m-6-4h6M8 18h8M3 3l18 18"></svg:path>`,
})
export class TablerLadderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLadleIcon],svg[tabler-ladle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 14v1a6 6 0 1 0 12 0V6a3 3 0 0 1 6 0"></svg:path><svg:path d="M9 16c-.663 0-1.3-.036-1.896-.102l-.5-.064C4.481 15.526 3 14.821 3 14c0-.82 1.482-1.526 3.603-1.834l.5-.064A17 17 0 0 1 9 12c.663 0 1.3.036 1.896.102l.5.064C13.519 12.474 15 13.179 15 14c0 .82-1.482 1.526-3.603 1.834l-.5.064A17 17 0 0 1 9 16"></svg:path></svg:g>`,
})
export class TablerLadleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLambdaIcon],svg[tabler-lambda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 20l6.5-9m6.5 9C13 20 13 4 7 4"></svg:path>`,
})
export class TablerLambdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLampIcon],svg[tabler-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20h6m-3 0v-8m-7 0h14l-4-8H9z"></svg:path>`,
})
export class TablerLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLamp2Icon],svg[tabler-lamp-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21h9m-4 0l-7-8l8.5-5.5"></svg:path><svg:path d="M13 14c-2.148-2.148-2.148-5.852 0-8c2.088-2.088 5.842-1.972 8 0z"></svg:path><svg:path d="m11.742 7.574l-1.156-1.156a2 2 0 0 1 2.828-2.829l1.144 1.144M15.5 12l.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4l-.366-.369"></svg:path></svg:g>`,
})
export class TablerLamp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLampOffIcon],svg[tabler-lamp-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20h6m-3 0v-8M7.325 7.35L5 12h7m4 0h3l-4-8H9l-.338.676M3 3l18 18"></svg:path>`,
})
export class TablerLampOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLaneIcon],svg[tabler-lane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6v13M20 6v13"></svg:path>`,
})
export class TablerLaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageIcon],svg[tabler-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8"></svg:path><svg:path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7l4-9l4 9m-.9-2h-6.2"></svg:path></svg:g>`,
})
export class TablerLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageHiraganaIcon],svg[tabler-language-hiragana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h7M7 4c0 4.846 0 7 .5 8"></svg:path><svg:path d="M10 8.5c0 2.286-2 4.5-3.5 4.5S4 11.865 4 11q0-3 3-3c3 0 5 .57 5 2.857q0 2.286-2 3.143m2 6l4-9l4 9m-.9-2h-6.2"></svg:path></svg:g>`,
})
export class TablerLanguageHiraganaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageKatakanaIcon],svg[tabler-language-katakana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h6.586a1 1 0 0 1 .707 1.707L11 8M8 8c0 1.5.5 3-2 5m6 7l4-9l4 9m-.9-2h-6.2"></svg:path>`,
})
export class TablerLanguageKatakanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLanguageOffIcon],svg[tabler-language-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13"></svg:path><svg:path d="M5 9c0 2.144 2.952 3.908 6.7 4m.3 7l2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLanguageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLassoIcon],svg[tabler-lasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7s-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255"></svg:path><svg:path d="M3 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17c0 1.42.316 2.805 1 4"></svg:path></svg:g>`,
})
export class TablerLassoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLassoOffIcon],svg[tabler-lasso-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-1.804.878-3.449 2.319-4.69m2.49-1.506A11.1 11.1 0 0 1 12 3c4.97 0 9 3.134 9 7c0 1.799-.873 3.44-2.307 4.68m-2.503 1.517A11.1 11.1 0 0 1 12 17c-1.913 0-3.686-.464-5.144-1.255"></svg:path><svg:path d="M3 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17c0 1.42.316 2.805 1 4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLassoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLassoPolygonIcon],svg[tabler-lasso-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.028 13.252L3 10l2-7l7 5l8-3l1 9l-9 3l-5.144-1.255"></svg:path><svg:path d="M3 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17c0 1.42.316 2.805 1 4"></svg:path></svg:g>`,
})
export class TablerLassoPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLassoPolygonFilledIcon],svg[tabler-lasso-polygon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.581 2.186l6.566 4.69l7.502-2.812a1 1 0 0 1 1.326.714l.019.112l1 9a1 1 0 0 1-.678 1.059l-9 3a1 1 0 0 1-.553.023L7.329 16.89a3 3 0 0 1-1.287.923c.095.986.374 1.9.826 2.69a1 1 0 0 1-1.736.993c-.624-1.09-.99-2.335-1.098-3.656A3 3 0 0 1 2 15l.005-.176a3 3 0 0 1 .86-1.932l-.818-2.59a1 1 0 0 1-.009-.577l2-7a1 1 0 0 1 1.543-.539m-.009 2.451L4.044 9.985l.642 2.031Q4.841 12 5 12a3 3 0 0 1 3 2.995l3.957.965l7.96-2.654l-.769-6.919l-6.797 2.55a1 1 0 0 1-.827-.058l-.105-.065z"></svg:path>`,
})
export class TablerLassoPolygonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLaurelWreathIcon],svg[tabler-laurel-wreath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.436 8A8.6 8.6 0 0 0 6 10.727C6 14.744 8.686 18 12 18s6-3.256 6-7.273A8.6 8.6 0 0 0 17.564 8M14.5 21s-.682-3-2.5-3s-2.5 3-2.5 3m9.02-15.77C18.812 6.896 17.5 8 17.5 8s-1.603-.563-1.895-2.23C15.313 4.104 16.625 3 16.625 3s1.603.563 1.895 2.23"></svg:path><svg:path d="M21.094 12.14c-1.281 1.266-3.016.76-3.016.76s-.454-1.772.828-3.04c1.28-1.266 3.016-.76 3.016-.76s.454 1.772-.828 3.04m-3.36 6.686c-1.5-.575-1.734-2.19-1.734-2.19s1.267-1.038 2.767-.462c1.5.575 1.733 2.19 1.733 2.19s-1.267 1.038-2.767.462m-11.466 0c1.5-.575 1.733-2.19 1.733-2.19s-1.267-1.038-2.767-.462c-1.5.575-1.733 2.19-1.733 2.19s1.267 1.038 2.767.462M2.906 12.14c1.281 1.266 3.016.76 3.016.76s.454-1.772-.828-3.04C3.813 8.595 2.078 9.1 2.078 9.1s-.454 1.772.828 3.04M5.48 5.23C5.188 6.896 6.5 8 6.5 8s1.603-.563 1.895-2.23C8.687 4.104 7.375 3 7.375 3s-1.603.563-1.895 2.23"></svg:path></svg:g>`,
})
export class TablerLaurelWreathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLaurelWreath1Icon],svg[tabler-laurel-wreath-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.436 8A8.6 8.6 0 0 0 6 10.727C6 14.744 8.686 18 12 18s6-3.256 6-7.273A8.6 8.6 0 0 0 17.564 8M14.5 21s-.682-3-2.5-3s-2.5 3-2.5 3m9.02-15.77C18.812 6.896 17.5 8 17.5 8s-1.603-.563-1.895-2.23C15.313 4.104 16.625 3 16.625 3s1.603.563 1.895 2.23"></svg:path><svg:path d="M21.094 12.14c-1.281 1.266-3.016.76-3.016.76s-.454-1.772.828-3.04c1.28-1.266 3.016-.76 3.016-.76s.454 1.772-.828 3.04m-3.36 6.686c-1.5-.575-1.734-2.19-1.734-2.19s1.267-1.038 2.767-.462c1.5.575 1.733 2.19 1.733 2.19s-1.267 1.038-2.767.462m-11.466 0c1.5-.575 1.733-2.19 1.733-2.19s-1.267-1.038-2.767-.462c-1.5.575-1.733 2.19-1.733 2.19s1.267 1.038 2.767.462M2.906 12.14c1.281 1.266 3.016.76 3.016.76s.454-1.772-.828-3.04C3.813 8.595 2.078 9.1 2.078 9.1s-.454 1.772.828 3.04M5.48 5.23C5.188 6.896 6.5 8 6.5 8s1.603-.563 1.895-2.23C8.687 4.104 7.375 3 7.375 3s-1.603.563-1.895 2.23M11 9l1-1v6"></svg:path></svg:g>`,
})
export class TablerLaurelWreath1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLaurelWreath2Icon],svg[tabler-laurel-wreath-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.436 8A8.6 8.6 0 0 0 6 10.727C6 14.744 8.686 18 12 18s6-3.256 6-7.273A8.6 8.6 0 0 0 17.564 8M14.5 21s-.682-3-2.5-3s-2.5 3-2.5 3m9.02-15.77C18.812 6.896 17.5 8 17.5 8s-1.603-.563-1.895-2.23C15.313 4.104 16.625 3 16.625 3s1.603.563 1.895 2.23"></svg:path><svg:path d="M21.094 12.14c-1.281 1.266-3.016.76-3.016.76s-.454-1.772.828-3.04c1.28-1.266 3.016-.76 3.016-.76s.454 1.772-.828 3.04m-3.36 6.686c-1.5-.575-1.734-2.19-1.734-2.19s1.267-1.038 2.767-.462c1.5.575 1.733 2.19 1.733 2.19s-1.267 1.038-2.767.462m-11.466 0c1.5-.575 1.733-2.19 1.733-2.19s-1.267-1.038-2.767-.462c-1.5.575-1.733 2.19-1.733 2.19s1.267 1.038 2.767.462M2.906 12.14c1.281 1.266 3.016.76 3.016.76s.454-1.772-.828-3.04C3.813 8.595 2.078 9.1 2.078 9.1s-.454 1.772.828 3.04M5.48 5.23C5.188 6.896 6.5 8 6.5 8s1.603-.563 1.895-2.23C8.687 4.104 7.375 3 7.375 3s-1.603.563-1.895 2.23M10.6 8h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2"></svg:path></svg:g>`,
})
export class TablerLaurelWreath2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLaurelWreath3Icon],svg[tabler-laurel-wreath-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.436 8A8.6 8.6 0 0 0 6 10.727C6 14.744 8.686 18 12 18s6-3.256 6-7.273A8.6 8.6 0 0 0 17.564 8M14.5 21s-.682-3-2.5-3s-2.5 3-2.5 3m9.02-15.77C18.812 6.896 17.5 8 17.5 8s-1.603-.563-1.895-2.23C15.313 4.104 16.625 3 16.625 3s1.603.563 1.895 2.23"></svg:path><svg:path d="M21.094 12.14c-1.281 1.266-3.016.76-3.016.76s-.454-1.772.828-3.04c1.28-1.266 3.016-.76 3.016-.76s.454 1.772-.828 3.04m-3.36 6.686c-1.5-.575-1.734-2.19-1.734-2.19s1.267-1.038 2.767-.462c1.5.575 1.733 2.19 1.733 2.19s-1.267 1.038-2.767.462m-11.466 0c1.5-.575 1.733-2.19 1.733-2.19s-1.267-1.038-2.767-.462c-1.5.575-1.733 2.19-1.733 2.19s1.267 1.038 2.767.462M2.906 12.14c1.281 1.266 3.016.76 3.016.76s.454-1.772-.828-3.04C3.813 8.595 2.078 9.1 2.078 9.1s-.454 1.772.828 3.04M5.48 5.23C5.188 6.896 6.5 8 6.5 8s1.603-.563 1.895-2.23C8.687 4.104 7.375 3 7.375 3s-1.603.563-1.895 2.23M10.5 8H12a1.5 1.5 0 0 1 0 3h-1h1a1.5 1.5 0 0 1 0 3h-1.5"></svg:path></svg:g>`,
})
export class TablerLaurelWreath3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLaurelWreathFilledIcon],svg[tabler-laurel-wreath-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.956 2.057c.355.124.829.375 1.303.796a3.77 3.77 0 0 1 1.246 2.204c.173.989-.047 1.894-.519 2.683l-.123.194q-.097.147-.196.272q.066.234.117.471q.26-.178.545-.307c.851-.389 1.727-.442 2.527-.306q.226.04.346.076a1 1 0 0 1 .689.712l.029.13q.015.08.03.18a4.45 4.45 0 0 1-.324 2.496a3.94 3.94 0 0 1-1.71 1.85l-.242.12a4.23 4.23 0 0 1-2.234.349A9 9 0 0 1 17.997 15c.37.016.748.093 1.128.24c.732.28 1.299.758 1.711 1.367a3.95 3.95 0 0 1 .654 1.613a1 1 0 0 1-.356.917a3.8 3.8 0 0 1-.716.443c-.933.455-1.978.588-3.043.179l-.032-.015l-.205-.086a3.6 3.6 0 0 1-1.33-1.069l-.143-.197a4 4 0 0 1-.26-.433a6 6 0 0 1-.927.511q.18.262.337.56a7.4 7.4 0 0 1 .66 1.747a1 1 0 0 1-1.95.444l-.028-.11a6 6 0 0 0-.449-1.143C12.706 19.323 12.338 19 12 19s-.706.323-1.048.969a5.6 5.6 0 0 0-.367.874l-.082.269l-.028.11a1 1 0 0 1-1.95-.444a7.3 7.3 0 0 1 .66-1.747q.158-.298.337-.561a6.4 6.4 0 0 1-.93-.508a4 4 0 0 1-.256.43c-.366.541-.855.98-1.473 1.267l-.238.1c-.994.382-1.97.292-2.855-.091l-.188-.087a3.8 3.8 0 0 1-.716-.443a1 1 0 0 1-.356-.917a3.95 3.95 0 0 1 .654-1.613a3.6 3.6 0 0 1 1.71-1.368c.38-.146.758-.223 1.13-.24a9 9 0 0 1-.445-1.023a4.23 4.23 0 0 1-2.233-.348a4 4 0 0 1-.916-.587l-.207-.191a4 4 0 0 1-.724-.977l-.105-.216a4.45 4.45 0 0 1-.265-2.806a1 1 0 0 1 .69-.712q.119-.036.345-.076c.801-.135 1.678-.082 2.53.308q.283.129.545.304q.048-.235.112-.47a5 5 0 0 1-.194-.272c-.556-.832-.83-1.806-.642-2.877l.05-.242a3.75 3.75 0 0 1 1.027-1.803l.169-.159a4 4 0 0 1 1.303-.796a1 1 0 0 1 .975.178c.2.168.462.446.719.83c.556.833.83 1.807.642 2.878a3.77 3.77 0 0 1-1.246 2.204c-.303.27-.607.47-.879.61A7.5 7.5 0 0 0 7 10.728C7 14.23 9.285 17 12 17s5-2.77 5-6.276a7.6 7.6 0 0 0-.253-1.967a4.3 4.3 0 0 1-.881-.61a3.77 3.77 0 0 1-1.246-2.204c-.188-1.07.086-2.045.642-2.877c.257-.385.52-.663.72-.831a1 1 0 0 1 .974-.178"></svg:path>`,
})
export class TablerLaurelWreathFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersDifferenceIcon],svg[tabler-layers-difference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"></svg:path><svg:path d="M10 8H8v2m0 4v2h2m4-8h2v2m0 4v2h-2"></svg:path></svg:g>`,
})
export class TablerLayersDifferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersIntersectIcon],svg[tabler-layers-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path><svg:path d="M4 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class TablerLayersIntersectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersIntersect2Icon],svg[tabler-layers-intersect-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path><svg:path d="M4 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 5l6-6"></svg:path></svg:g>`,
})
export class TablerLayersIntersect2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersLinkedIcon],svg[tabler-layers-linked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 8.268A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3"></svg:path><svg:path d="M5 15.734A2 2 0 0 1 4 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"></svg:path></svg:g>`,
})
export class TablerLayersLinkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersOffIcon],svg[tabler-layers-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.59 4.581C8.952 4.222 9.45 4 10 4h8a2 2 0 0 1 2 2v8c0 .556-.227 1.06-.594 1.422M16 16h-6a2 2 0 0 1-2-2V8"></svg:path><svg:path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLayersOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersSelectedIcon],svg[tabler-layers-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 10.5l6.492-6.492M13.496 16L20 9.496zm-4.91-.586L19.413 4.587M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path><svg:path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2"></svg:path></svg:g>`,
})
export class TablerLayersSelectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersSelectedBottomIcon],svg[tabler-layers-selected-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 14.5l4-4M9.496 20l4.004-4zm-4.91-.586L8.5 15.5M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path><svg:path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2"></svg:path></svg:g>`,
})
export class TablerLayersSelectedBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersSubtractIcon],svg[tabler-layers-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path><svg:path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2"></svg:path></svg:g>`,
})
export class TablerLayersSubtractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayersUnionIcon],svg[tabler-layers-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"></svg:path>`,
})
export class TablerLayersUnionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutIcon],svg[tabler-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayout2Icon],svg[tabler-layout-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm0 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayout2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayout2FilledIcon],svg[tabler-layout-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 9a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3zm10-9a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 11a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayout2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignBottomIcon],svg[tabler-layout-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignBottomFilledIcon],svg[tabler-layout-align-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM13 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutAlignBottomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignCenterIcon],svg[tabler-layout-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v5m0 6v5m-6-9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignCenterFilledIcon],svg[tabler-layout-align-center-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3v4a1 1 0 0 1-2 0v-4H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerLayoutAlignCenterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignLeftIcon],svg[tabler-layout-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16m4-9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignLeftFilledIcon],svg[tabler-layout-align-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m14 5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutAlignLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignMiddleIcon],svg[tabler-layout-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h5m6 0h5M9 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutAlignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignMiddleFilledIcon],svg[tabler-layout-align-middle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5a3 3 0 0 1 3 3v3h4a1 1 0 0 1 0 2h-4v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3H4a1 1 0 0 1 0-2h4V8a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutAlignMiddleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignRightIcon],svg[tabler-layout-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v16M4 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignRightFilledIcon],svg[tabler-layout-align-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m-6 5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutAlignRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignTopIcon],svg[tabler-layout-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutAlignTopFilledIcon],svg[tabler-layout-align-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm-7 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutAlignTopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBoardIcon],svg[tabler-layout-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 3h8m0 6h8M12 4v16"></svg:path>`,
})
export class TablerLayoutBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBoardSplitIcon],svg[tabler-layout-board-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 6h8m0 3h8m-8-6h8m-8-5v16"></svg:path>`,
})
export class TablerLayoutBoardSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBottombarIcon],svg[tabler-layout-bottombar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 9h16"></svg:path>`,
})
export class TablerLayoutBottombarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBottombarCollapseIcon],svg[tabler-layout-bottombar-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m0 9H4"></svg:path><svg:path d="m14 8l-2 2l-2-2"></svg:path></svg:g>`,
})
export class TablerLayoutBottombarCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBottombarCollapseFilledIcon],svg[tabler-layout-bottombar-collapse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H6a1 1 0 0 0-.993.883L5 6v9h14V6a1 1 0 0 0-.883-.993zm-7.387 3.21l.094.083L12 9.585l1.293-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094l-2 2a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497"></svg:path>`,
})
export class TablerLayoutBottombarCollapseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBottombarExpandIcon],svg[tabler-layout-bottombar-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m0 9H4"></svg:path><svg:path d="m14 10l-2-2l-2 2"></svg:path></svg:g>`,
})
export class TablerLayoutBottombarExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBottombarExpandFilledIcon],svg[tabler-layout-bottombar-expand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H6a1 1 0 0 0-.993.883L5 6v9h14V6a1 1 0 0 0-.883-.993zm-5.387 3.21l.094.083l2 2a1 1 0 0 1-1.32 1.497l-.094-.083L12 10.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l2-2a1 1 0 0 1 1.32-.083"></svg:path>`,
})
export class TablerLayoutBottombarExpandFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBottombarFilledIcon],svg[tabler-layout-bottombar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H6a1 1 0 0 0-.993.883L5 6v9h14V6a1 1 0 0 0-.883-.993z"></svg:path>`,
})
export class TablerLayoutBottombarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutBottombarInactiveIcon],svg[tabler-layout-bottombar-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 9h1m14 0h1M9 15h1m4 0h1"></svg:path>`,
})
export class TablerLayoutBottombarInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutCardsIcon],svg[tabler-layout-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutCardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutCardsFilledIcon],svg[tabler-layout-cards-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm10 0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutCardsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutCollageIcon],svg[tabler-layout-collage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm6-2l4 16m-2-8l-8 2"></svg:path>`,
})
export class TablerLayoutCollageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutColumnsIcon],svg[tabler-layout-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm8-2v16"></svg:path>`,
})
export class TablerLayoutColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutDashboardIcon],svg[tabler-layout-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 12h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m10-4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m0-8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerLayoutDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutDashboardFilledIcon],svg[tabler-layout-dashboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm10-4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></svg:path>`,
})
export class TablerLayoutDashboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutDistributeHorizontalIcon],svg[tabler-layout-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16M4 20h16M6 11a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutDistributeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutDistributeHorizontalFilledIcon],svg[tabler-layout-distribute-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM16 8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutDistributeHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutDistributeVerticalIcon],svg[tabler-layout-distribute-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16M20 4v16M9 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutDistributeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutDistributeVerticalFilledIcon],svg[tabler-layout-distribute-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m-7 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutDistributeVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutFilledIcon],svg[tabler-layout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 9a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3zm10-9a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutGridIcon],svg[tabler-layout-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class TablerLayoutGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutGridAddIcon],svg[tabler-layout-grid-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 2h6m-3-3v6"></svg:path>`,
})
export class TablerLayoutGridAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutGridFilledIcon],svg[tabler-layout-grid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"></svg:path>`,
})
export class TablerLayoutGridFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutGridRemoveIcon],svg[tabler-layout-grid-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 2h6"></svg:path>`,
})
export class TablerLayoutGridRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutKanbanIcon],svg[tabler-layout-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h6m4 0h6M4 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutKanbanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutKanbanFilledIcon],svg[tabler-layout-kanban-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm10 0a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zM8 7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zm10 0a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutKanbanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutListIcon],svg[tabler-layout-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerLayoutListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutListFilledIcon],svg[tabler-layout-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerLayoutListFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutNavbarIcon],svg[tabler-layout-navbar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 3h16"></svg:path>`,
})
export class TablerLayoutNavbarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutNavbarCollapseIcon],svg[tabler-layout-navbar-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m0-9h16"></svg:path><svg:path d="m10 16l2-2l2 2"></svg:path></svg:g>`,
})
export class TablerLayoutNavbarCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutNavbarCollapseFilledIcon],svg[tabler-layout-navbar-collapse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm1 6H5v9a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18zm-6.387 3.21l.094.083l2 2a1 1 0 0 1-1.32 1.497l-.094-.083L12 14.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l2-2a1 1 0 0 1 1.32-.083"></svg:path>`,
})
export class TablerLayoutNavbarCollapseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutNavbarExpandIcon],svg[tabler-layout-navbar-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m0-9h16"></svg:path><svg:path d="m10 14l2 2l2-2"></svg:path></svg:g>`,
})
export class TablerLayoutNavbarExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutNavbarExpandFilledIcon],svg[tabler-layout-navbar-expand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm1 6H5v9a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18zm-8.387 3.21l.094.083L12 13.585l1.293-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094l-2 2a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497"></svg:path>`,
})
export class TablerLayoutNavbarExpandFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutNavbarFilledIcon],svg[tabler-layout-navbar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm1 6H5v9a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18z"></svg:path>`,
})
export class TablerLayoutNavbarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutNavbarInactiveIcon],svg[tabler-layout-navbar-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 3h1m14 0h1M9 9h1m4 0h1"></svg:path>`,
})
export class TablerLayoutNavbarInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutOffIcon],svg[tabler-layout-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4a2 2 0 0 1 2 2M8.838 8.816A2 2 0 0 1 8 9H6a2 2 0 0 1-2-2V6c0-.549.221-1.046.58-1.407M4 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-.595 3.423A2 2 0 0 1 18 20h-2a2 2 0 0 1-2-2v-4M3 3l18 18"></svg:path>`,
})
export class TablerLayoutOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutRowsIcon],svg[tabler-layout-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 6h16"></svg:path>`,
})
export class TablerLayoutRowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarIcon],svg[tabler-layout-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16"></svg:path>`,
})
export class TablerLayoutSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarFilledIcon],svg[tabler-layout-sidebar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM18 5h-8v14h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerLayoutSidebarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarInactiveIcon],svg[tabler-layout-sidebar-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v1m0 4v1m0 4v1m0 4v1"></svg:path>`,
})
export class TablerLayoutSidebarInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarLeftCollapseIcon],svg[tabler-layout-sidebar-left-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16"></svg:path><svg:path d="m15 10l-2 2l2 2"></svg:path></svg:g>`,
})
export class TablerLayoutSidebarLeftCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarLeftCollapseFilledIcon],svg[tabler-layout-sidebar-left-collapse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H9v14h9a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993zm-2.293 4.293a1 1 0 0 1 .083 1.32l-.083.094L14.415 12l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1-.083-1.32l.083-.094l2-2a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class TablerLayoutSidebarLeftCollapseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarLeftExpandIcon],svg[tabler-layout-sidebar-left-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16"></svg:path><svg:path d="m14 10l2 2l-2 2"></svg:path></svg:g>`,
})
export class TablerLayoutSidebarLeftExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarLeftExpandFilledIcon],svg[tabler-layout-sidebar-left-expand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H9v14h9a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993zm-4.387 4.21l.094.083l2 2a1 1 0 0 1 .083 1.32l-.083.094l-2 2a1 1 0 0 1-1.497-1.32l.083-.094L13.585 12l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083"></svg:path>`,
})
export class TablerLayoutSidebarLeftExpandFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarRightIcon],svg[tabler-layout-sidebar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11-2v16"></svg:path>`,
})
export class TablerLayoutSidebarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarRightCollapseIcon],svg[tabler-layout-sidebar-right-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11-2v16"></svg:path><svg:path d="m9 10l2 2l-2 2"></svg:path></svg:g>`,
})
export class TablerLayoutSidebarRightCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarRightCollapseFilledIcon],svg[tabler-layout-sidebar-right-collapse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm-3 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h9zM9.613 9.21l.094.083l2 2a1 1 0 0 1 .083 1.32l-.083.094l-2 2a1 1 0 0 1-1.497-1.32l.083-.094L9.585 12l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083"></svg:path>`,
})
export class TablerLayoutSidebarRightCollapseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarRightExpandIcon],svg[tabler-layout-sidebar-right-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11-2v16"></svg:path><svg:path d="m10 10l-2 2l2 2"></svg:path></svg:g>`,
})
export class TablerLayoutSidebarRightExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarRightExpandFilledIcon],svg[tabler-layout-sidebar-right-expand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm-3 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h9zm-3.293 4.293a1 1 0 0 1 .083 1.32l-.083.094L10.415 12l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1-.083-1.32l.083-.094l2-2a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class TablerLayoutSidebarRightExpandFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarRightFilledIcon],svg[tabler-layout-sidebar-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm8-16H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8z"></svg:path>`,
})
export class TablerLayoutSidebarRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLayoutSidebarRightInactiveIcon],svg[tabler-layout-sidebar-right-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm11-2v1m0 4v1m0 4v1m0 4v1"></svg:path>`,
})
export class TablerLayoutSidebarRightInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLeafIcon],svg[tabler-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21c.5-4.5 2.5-8 7-10"></svg:path><svg:path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9c0 1 0 3 2 5h3z"></svg:path></svg:g>`,
})
export class TablerLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLeaf2Icon],svg[tabler-leaf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21c.5-4.5 2.5-8 7-10"></svg:path><svg:path d="M7.5 15Q4 15 3 9a8.4 8.4 0 0 1 3.438.402a12 12 0 0 1-.052-.793C6.386 5.003 9.59 3 9.59 3s2.003 1.252 2.842 3.557Q15 5 19 5q.396 3.775-1.557 6.568C19.748 12.407 21 14.41 21 14.41S18 17 14 17c0 1 0 1 .5 3q-6 0-7-5"></svg:path></svg:g>`,
})
export class TablerLeaf2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLeafOffIcon],svg[tabler-leaf-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21c.475-4.27 2.3-7.64 6.331-9.683"></svg:path><svg:path d="M6.618 6.623C4.744 8.248 3.993 10.5 3.986 13c0 1 0 3 2 5H9c2.733 0 5.092-.635 6.92-2.087m1.899-2.099C19.043 11.942 19.806 9.38 20 6V4h-4.014c-2.863 0-5.118.405-6.861 1.118M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLeafOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLegoIcon],svg[tabler-lego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.5 11h.01m4.99 0h.01M9.5 15a3.5 3.5 0 0 0 5 0"></svg:path><svg:path d="M7 5h1V3h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3v1H7v-1a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class TablerLegoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLegoFilledIcon],svg[tabler-lego-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a1 1 0 0 1 1 1v1l.2.005A4 4 0 0 1 20.995 7.8L21 8v9a4 4 0 0 1-2.845 3.83l-.155.043V21a1 1 0 0 1-.883.993L17 22H7a1 1 0 0 1-1-1v-.127l-.155-.042a4 4 0 0 1-2.84-3.631L3 17V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1zm-.8 12.286a1 1 0 0 0-1.414.014a2.5 2.5 0 0 1-3.572 0a1 1 0 0 0-1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0-.014-1.414M9.51 10H9.5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerLegoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLegoOffIcon],svg[tabler-lego-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.5 11h.01m-.01 4a3.5 3.5 0 0 0 5 0"></svg:path><svg:path d="M8 4V3h8v2h1a3 3 0 0 1 3 3v8m-.884 3.127A3 3 0 0 1 17 20v1H7v-1a3 3 0 0 1-3-3V8c0-1.083.574-2.032 1.435-2.56M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerLegoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLemonIcon],svg[tabler-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905-10.237 3.905-14.143 0z"></svg:path><svg:path d="M5.868 15.06a6.5 6.5 0 0 0 9.193-9.192m-4.597 4.596l4.597 4.597m-4.597-4.597v6.364m0-6.364h6.364"></svg:path></svg:g>`,
})
export class TablerLemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLemon2Icon],svg[tabler-lemon-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 4a2 2 0 0 1 1.185 3.611c1.55 2.94.873 6.917-1.892 9.682s-6.743 3.442-9.682 1.892a2 2 0 1 1-2.796-2.796c-1.55-2.94-.873-6.917 1.892-9.682s6.743-3.442 9.682-1.892A2 2 0 0 1 18 4"></svg:path>`,
})
export class TablerLemon2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLemon2FilledIcon],svg[tabler-lemon-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.443 4.742l-.06.076l.037.087c1.269 3.187.428 7.084-2.203 9.872L18 18c-2.8 2.8-6.823 3.723-10.095 2.42l-.087-.036l-.133.098a3 3 0 0 1-2.11.488l-.205-.036a3 3 0 0 1-1.852-4.62l.098-.134l-.036-.085c-1.269-3.187-.428-7.084 2.203-9.872L6 6c2.8-2.8 6.823-3.723 10.095-2.42l.085.037l.124-.091a3 3 0 0 1 1.493-.52z"></svg:path>`,
})
export class TablerLemon2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLetterAIcon],svg[tabler-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v12M7 13h10"></svg:path>`,
})
export class TablerLetterAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerLetterASmallIcon],svg[tabler-letter-a-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16v-6a2 2 0 1 1 4 0v6m-4-3h4"></svg:path>`,
})
export class TablerLetterASmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
