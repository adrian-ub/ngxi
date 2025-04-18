import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRulerCombinedIcon],svg[la-ruler-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h24v-9H13V4zm2 2h5v2H8v2h3v2H8v2h3v2H8v2h3v1.586l-5 5zm6.414 15H14v3h2v-3h2v3h2v-3h2v3h2v-3h2v5H7.414z"></svg:path>`,
})
export class LaRulerCombinedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
