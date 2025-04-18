import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRightIcon],svg[icon-park-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 12L31 24L19 36"></svg:path>`,
})
export class IconParkRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
