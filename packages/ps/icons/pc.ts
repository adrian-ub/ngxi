import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPcIcon],svg[ps-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M261 0H69Q42 0 23.5 18.5T5 64v384q0 27 18.5 45.5T69 512h192q28 0 46-18.5t18-45.5V64q0-27-18-45.5T261 0m22 448q0 21-22 21H69q-21 0-21-21V213h235zm0-256H48V64q0-21 21-21h192q22 0 22 21zm-22 64q0 9-6 15t-15 6t-15-6t-6-15t6-15t15-6t15 6t6 15M69 85h192v43H69zm171 75q0 11-11 11q-10 0-10-11t10-11q11 0 11 11M91 427h64v21H91zm85 0h64v21h-64z"></svg:path>`,
})
export class PsPcIcon {
  readonly viewBox = input("0 0 328 512")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
