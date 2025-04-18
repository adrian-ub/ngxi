import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCardmembershipIcon],svg[tdesign-cardmembership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v18H1V3zm-2 2H3v4h18zm0 6h-2v6.766l-3.5-2.1l-3.5 2.1V11H3v8h18zm-4 0h-3v3.234l1.5-.9l1.5.9z"></svg:path>`,
})
export class TdesignCardmembershipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
