import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsEjectIcon],svg[bx-bxs-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 6l-6 8h12zM6 16h12v2H6z" fill="currentColor"></svg:path>`,
})
export class BxBxsEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
