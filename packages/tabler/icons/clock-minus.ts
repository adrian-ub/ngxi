import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockMinusIcon],svg[tabler-clock-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.477 15.022a9 9 0 1 0-7.998 5.965"></svg:path><svg:path d="M12 7v5l3 3m1 4h6"></svg:path></svg:g>`,
})
export class TablerClockMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
