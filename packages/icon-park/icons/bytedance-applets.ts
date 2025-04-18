import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBytedanceAppletsIcon],svg[icon-park-bytedance-applets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24 4V23L8 36"></svg:path><svg:path d="M24 23L40 36"></svg:path><svg:path d="M31 20L40 14"></svg:path><svg:path d="M17 20L8 14"></svg:path><svg:path d="M24 31V43"></svg:path></svg:g>`,
})
export class IconParkBytedanceAppletsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
