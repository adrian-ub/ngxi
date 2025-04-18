import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRenaultIcon],svg[icon-park-renault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 4H18L8 24H17L22 14H26L31 24H40L30 4Z"></svg:path><svg:path d="M30 44H18L8 24H17L22 34H26L31 24H40L30 44Z"></svg:path></svg:g>`,
})
export class IconParkRenaultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
