import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTicketAltIcon],svg[lets-icons-ticket-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M18 21V3l-3 2l-3-2l-3 2l-3-2v18l3-1.5l3 1.5l3-1.5z"></svg:path><svg:path stroke-linecap="round" d="M10 9h4m-4 6h4m-4-3h4"></svg:path></svg:g>`,
})
export class LetsIconsTicketAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
