import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChatAlt3DuotoneIcon],svg[lets-icons-chat-alt-3-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M19.326 5.778C20 6.787 20 8.19 20 11s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4 4 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104" clip-rule="evenodd"></svg:path><svg:circle cx="16" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="11" r="1" fill="currentColor"></svg:circle>`,
})
export class LetsIconsChatAlt3DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
