import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVipIcon],svg[icon-park-vip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 4H4L15 44H23L12 4Z"></svg:path><svg:path stroke-linecap="round" d="M23 44L44 4"></svg:path></svg:g>`,
})
export class IconParkVipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
