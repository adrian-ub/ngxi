import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLanCableSolidIcon],svg[teenyicons-lan-cable-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6.5V5h1v1.5a.5.5 0 0 1-1 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 0h2v4h1v3.618L9.809 12H9v3H8v-3H7v3H6v-3h-.809L3 7.618V4h1V0h2v3h3zm0 4H6v2.5a1.5 1.5 0 1 0 3 0zM6 9v1h3V9z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 0H7v2h1z"></svg:path>`,
})
export class TeenyiconsLanCableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
