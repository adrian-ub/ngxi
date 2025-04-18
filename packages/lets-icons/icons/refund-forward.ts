import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefundForwardIcon],svg[lets-icons-refund-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 8l.707.707l.707-.707l-.707-.707zm-5 12a1 1 0 1 0 0-2zm.707-6.293l5-5l-1.414-1.414l-5 5zm5-6.414l-5-5l-1.414 1.414l5 5zM20 7H9.5v2H20zM9.5 20H15v-2H9.5zM3 13.5A6.5 6.5 0 0 0 9.5 20v-2A4.5 4.5 0 0 1 5 13.5zM9.5 7A6.5 6.5 0 0 0 3 13.5h2A4.5 4.5 0 0 1 9.5 9z"></svg:path>`,
})
export class LetsIconsRefundForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
