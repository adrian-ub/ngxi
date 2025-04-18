import { Component, input } from '@angular/core'

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
