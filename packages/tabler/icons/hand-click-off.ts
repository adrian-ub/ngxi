import { Component, input } from '@angular/core'

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
