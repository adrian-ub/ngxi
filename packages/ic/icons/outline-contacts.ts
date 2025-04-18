import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineContactsIcon],svg[ic-outline-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM4 0h16v2H4zm0 22h16v2H4zm8-10a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 0 0 5m0-3.5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m5 7.49C17 13.9 13.69 13 12 13s-5 .9-5 2.99V17h10zm-8.19-.49c.61-.52 2.03-1 3.19-1c1.17 0 2.59.48 3.2 1z"></svg:path>`,
})
export class IcOutlineContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
