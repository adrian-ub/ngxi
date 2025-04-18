import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBytedanceIcon],svg[icon-park-bytedance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 7L10 9V37L5 39V7Z"></svg:path><svg:path d="M16 23L21 25V37L16 39V23Z"></svg:path><svg:path d="M27 21L32 19V35L27 33V21Z"></svg:path><svg:path d="M38 9L43 11V37L38 39V9Z"></svg:path></svg:g>`,
})
export class IconParkBytedanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
