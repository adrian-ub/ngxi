import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPencilIcon],svg[charm-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 11.25v3h3l9.5-9.5l-3-3zm7-6.5l2.5 2.5"></svg:path>`,
})
export class CharmPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
