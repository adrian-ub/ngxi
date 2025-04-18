import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMarsStrokeVIcon],svg[la-mars-stroke-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 1.594l-.719.687l-6 6L10.72 9.72L15 5.438V10h-3v2h3v2.063c-3.934.5-7 3.87-7 7.937c0 4.406 3.594 8 8 8s8-3.594 8-8c0-4.066-3.066-7.438-7-7.938V12h3v-2h-3V5.437l4.281 4.282L22.72 8.28l-6-6zM16 16c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMarsStrokeVIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
