import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineXiaoduHomeIcon],svg[icon-park-outline-xiaodu-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 20L24 6l20 14v22H4z"></svg:path><svg:path d="M12.687 26.686a16 16 0 0 1 22.627 0m-16.971 5.657a8 8 0 0 1 11.314 0"></svg:path></svg:g>`,
})
export class IconParkOutlineXiaoduHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
