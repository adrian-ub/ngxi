import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsEjectIcon],svg[bxs-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-6 8h12zM6 16h12v2H6z"></svg:path>`,
})
export class BxsEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
