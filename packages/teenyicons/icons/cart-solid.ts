import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCartSolidIcon],svg[teenyicons-cart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.979.356L.02.644L3.128 11H15V4.5A2.5 2.5 0 0 0 12.5 2H1.472z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5 13.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m7.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-.5 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsCartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
