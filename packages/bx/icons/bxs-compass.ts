import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsCompassIcon],svg[bx-bxs-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm3 13l-8 2l2-8l8-2l-2 8z" fill="currentColor"></svg:path><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle>`,
})
export class BxBxsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
