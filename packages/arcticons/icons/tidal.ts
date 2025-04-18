import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTidalIcon],svg[arcticons-tidal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.333 12.333l6.834 6.834L24 12.333l6.833 6.834l6.834-6.834l6.833 6.834L37.667 26l-6.834-6.833L24 26l6.833 6.833L24 39.667l-6.833-6.834L24 26l-6.833-6.833L10.333 26L3.5 19.167Z"></svg:path>`,
})
export class ArcticonsTidalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
