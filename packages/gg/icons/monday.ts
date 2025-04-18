import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMondayIcon],svg[gg-monday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.779 6.14a3 3 0 0 1 4.915 3.44l-5.736 8.192a3 3 0 0 1-4.915-3.441zm8.489.088a3 3 0 0 1 4.915 3.442l-5.736 8.191a3 3 0 0 1-4.915-3.441zM20.5 18.86a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgMondayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
