import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGagIcon],svg[arcticons-gag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.5l16 8.05v22.9l-16 8l-16-8V28l16 8l9.42-4.75v-8L24 28L8 20v-7.45Zm0 7.42l-8.62 4.34L24 20.61l8.62-4.35Z"></svg:path>`,
})
export class ArcticonsGagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
