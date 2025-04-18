import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMirrorIcon],svg[icon-park-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M34 44H14C9 44 7.0003 43 7.0003 40L7 34L17.9999 34L19 38H30L31 34L41.0003 34V40C41.0003 43 39 44 34 44Z"></svg:path><svg:path d="M12 34C9.95549 30.882 7 27 7 21.8544C7 11.4224 14.6112 4 24 4C33.3888 4 41 11.4224 41 21.8544C41 27 38.0445 30.882 36 34"></svg:path></svg:g>`,
})
export class IconParkMirrorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
