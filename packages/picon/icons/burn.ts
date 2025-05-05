import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBurnIcon],svg[picon-burn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8Q0 6 4 0q4 6 1 8m0-1q1-1-1-4q-2 3-1 4"></svg:path>`,
})
export class PiconBurnIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
