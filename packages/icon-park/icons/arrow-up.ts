import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowUpIcon],svg[icon-park-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 6V42"></svg:path><svg:path d="M12 18L24 6L36 18"></svg:path></svg:g>`,
})
export class IconParkArrowUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
