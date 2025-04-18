import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMenuAltLeftIcon],svg[bx-menu-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></svg:path>`,
})
export class BxMenuAltLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
