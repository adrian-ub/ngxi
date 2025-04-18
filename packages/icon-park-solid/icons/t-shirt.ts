import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTShirtIcon],svg[icon-park-solid-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="m9 9l9-5h12l9 5l4 15l-8 6v14H13V30l-8-6z"></svg:path><svg:path d="M13 31v-7m22 7v-7"></svg:path></svg:g>`,
})
export class IconParkSolidTShirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
