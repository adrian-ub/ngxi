import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCandleFIcon],svg[jam-candle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9h6v6H7zm-5 8h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2m8-8.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3"></svg:path>`,
})
export class JamCandleFIcon {
  readonly viewBox = input("-2 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
