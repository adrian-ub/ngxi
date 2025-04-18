import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWaterfallsVIcon],svg[icon-park-waterfalls-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 20L23 6L6 6L6 20L23 20Z"></svg:path><svg:path d="M42 42V28L25 28L25 42H42Z"></svg:path><svg:path d="M31 6V20H42V6H31Z"></svg:path><svg:path d="M6 28L6 42H17V28H6Z"></svg:path></svg:g>`,
})
export class IconParkWaterfallsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
