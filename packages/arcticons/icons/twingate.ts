import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTwingateIcon],svg[arcticons-twingate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.713 43.5l11.092-7.623a10.86 10.86 0 0 0 4.709-8.95v-16.49L24.42 18.058a10.86 10.86 0 0 0-4.708 8.95z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.286 15.402V4.5l-11.087 7.623a10.86 10.86 0 0 0-4.713 8.948v16.494l7.232-4.973"></svg:path>`,
})
export class ArcticonsTwingateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
