import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconServingIcon],svg[picon-serving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h7v.5H1M2 3c0-3 5-3 5 0M4 0h1v1H4M2 5h1l1 1l3-1h1L5 7v1H3V7"></svg:path>`,
})
export class PiconServingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
