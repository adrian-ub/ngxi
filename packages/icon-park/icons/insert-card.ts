import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInsertCardIcon],svg[icon-park-insert-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M10 18H4L4 6H44V18H38"></svg:path><svg:path fill="#2F88FF" d="M12 12L4 41H44L36 12H12Z"></svg:path></svg:g>`,
})
export class IconParkInsertCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
