import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiEjectIcon],svg[oi-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L0 5h8zM0 6v2h8V6z"></svg:path>`,
})
export class OiEjectIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
