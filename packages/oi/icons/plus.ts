import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiPlusIcon],svg[oi-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v3H0v2h3v3h2V5h3V3H5V0z"></svg:path>`,
})
export class OiPlusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
