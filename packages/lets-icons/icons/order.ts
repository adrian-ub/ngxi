import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOrderIcon],svg[lets-icons-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="17" x="5" y="4" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M9 9h6m-6 4h6m-6 4h4"></svg:path></svg:g>`,
})
export class LetsIconsOrderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
