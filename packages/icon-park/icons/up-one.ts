import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUpOneIcon],svg[icon-park-up-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M12 29L24 17L36 29H12Z"></svg:path>`,
})
export class IconParkUpOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
