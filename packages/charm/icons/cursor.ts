import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCursorIcon],svg[charm-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.75 1.75l4.5 12.5l2.5-5.5l5.5-2.5zm7.5 7.5l4 4"></svg:path>`,
})
export class CharmCursorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
