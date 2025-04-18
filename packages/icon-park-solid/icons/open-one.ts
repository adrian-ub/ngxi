import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidOpenOneIcon],svg[icon-park-solid-open-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 18V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v9m-21 8l12-13m-7 8l4 4m1-9l4 4M6 30v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9"></svg:path><svg:circle cx="18" cy="30" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidOpenOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
