import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignTopSimpleBoldIcon],svg[ph-align-top-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 32a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12m-32 48v144a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20m-24 4h-56v136h56Z"></svg:path>`,
})
export class PhAlignTopSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
