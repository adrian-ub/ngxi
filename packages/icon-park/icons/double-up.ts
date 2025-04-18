import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleUpIcon],svg[icon-park-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 24L24 12L36 24"></svg:path><svg:path d="M12 36L24 24L36 36"></svg:path></svg:g>`,
})
export class IconParkDoubleUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
