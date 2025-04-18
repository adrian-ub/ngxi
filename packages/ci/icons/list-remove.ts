import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciListRemoveIcon],svg[ci-list-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h7m5-1h6M3 12h11M3 7h11"></svg:path>`,
})
export class CiListRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
