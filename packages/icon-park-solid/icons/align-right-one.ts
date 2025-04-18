import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAlignRightOneIcon],svg[icon-park-solid-align-right-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M42 42V6"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M16 6h16v6H16zm-4 15h20v6H12zM6 36h26v6H6z"></svg:path></svg:g>`,
})
export class IconParkSolidAlignRightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
