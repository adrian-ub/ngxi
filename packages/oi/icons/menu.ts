import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMenuIcon],svg[oi-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v1h8V1zm0 2.97v1h8v-1zm0 3v1h8v-1z"></svg:path>`,
})
export class OiMenuIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
