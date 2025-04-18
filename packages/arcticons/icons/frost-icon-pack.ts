import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFrostIconPackIcon],svg[arcticons-frost-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5L5.38 13.25v21.5L24 45.5l18.62-10.75v-21.5Zm-3.39 10.23h6.78v22.54h-6.78Z"></svg:path>`,
})
export class ArcticonsFrostIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
