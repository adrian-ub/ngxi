import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiPaperBagIcon],svg[flat-ui-paper-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F39C12" d="M100 93a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V20h100z"></svg:path><svg:path fill="#E57D22" d="M4 0h92v20H4z"></svg:path><svg:path fill="#F39C12" d="M96 20h-8V8l8-8zM4 20h8V8L4 0z"></svg:path><svg:path fill="#F1C40F" d="M12 8v12H0zm76 0v12h12z"></svg:path><svg:circle cx="26" cy="40" r="5" opacity=".3"></svg:circle><svg:circle cx="74" cy="40" r="5" opacity=".3"></svg:circle><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6" d="M74 40c0 13.254-10.745 24-24 24S26 53.255 26 40" clip-rule="evenodd"></svg:path>`,
})
export class FlatUiPaperBagIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
