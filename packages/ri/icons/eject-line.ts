import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEjectLineIcon],svg[ri-eject-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.737 13h8.526L12 6.606zm4.679-9.376l7.066 10.599a.5.5 0 0 1-.416.777H4.934a.5.5 0 0 1-.416-.777l7.066-10.599a.5.5 0 0 1 .832 0M5 17h14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2"></svg:path>`,
})
export class RiEjectLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
