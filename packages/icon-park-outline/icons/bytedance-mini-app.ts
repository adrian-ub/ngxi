import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBytedanceMiniAppIcon],svg[icon-park-outline-bytedance-mini-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m2.122-22.121l-4.243 4.243"></svg:path><svg:path d="m32.485 26.829l1.414-1.415a4 4 0 0 0 0-5.657L28.242 14.1a4 4 0 0 0-5.656 0l-1.415 1.415m5.657 16.97L25.414 33.9a4 4 0 0 1-5.657 0L14.1 28.243a4 4 0 0 1 0-5.657l1.415-1.414"></svg:path></svg:g>`,
})
export class IconParkOutlineBytedanceMiniAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
