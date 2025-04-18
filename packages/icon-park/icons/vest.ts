import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVestIcon],svg[icon-park-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 4H31L24 24V44H40V19L36 13V4Z"></svg:path><svg:path d="M12 4H17L24 24V44H8V19L12 13V4Z"></svg:path></svg:g>`,
})
export class IconParkVestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
