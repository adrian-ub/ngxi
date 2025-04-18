import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUpIcon],svg[icon-park-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 30L25 18L37 30"></svg:path>`,
})
export class IconParkUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
