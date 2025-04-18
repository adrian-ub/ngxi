import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiHomeIcon],svg[oi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L0 3h1v4h2V5h2v2h2V2.97L8 3z"></svg:path>`,
})
export class OiHomeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
