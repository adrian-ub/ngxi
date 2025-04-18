import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCutleryIcon],svg[zmdi-cutlery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m114 221l-89-90Q0 106 0 71t25-60l150 149zm145-39l-31 31l146 147l-30 30l-146-147L51 390l-31-30l209-208q-12-24-4-56t33-57q31-30 69-35t61.5 18.5T407 84t-36 69q-25 25-56.5 33t-55.5-4"></svg:path>`,
})
export class ZmdiCutleryIcon {
  readonly viewBox = input("0 0 408 392")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
