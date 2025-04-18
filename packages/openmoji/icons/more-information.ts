import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMoreInformationIcon],svg[openmoji-more-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M56 32.8H39.2V16h-6.4v16.8H16v6.4h16.8V56h6.4V39.2H56z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M56 32.8H39.2V16h-6.4v16.8H16v6.4h16.8V56h6.4V39.2H56z"></svg:path>`,
})
export class OpenmojiMoreInformationIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
