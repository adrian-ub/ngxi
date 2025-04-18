import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLaptopOneIcon],svg[icon-park-outline-laptop-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M8 11a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v21H8zM4 32h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path>`,
})
export class IconParkOutlineLaptopOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
