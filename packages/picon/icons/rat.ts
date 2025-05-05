import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRatIcon],svg[picon-rat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2c0-4 5 0 2 1c2 6-8 6-6 0c-3-1 2-5 2-1m0 2Q2 2 2 4m4 0q0-2-1 0M3 7h2V6H3"></svg:path>`,
})
export class PiconRatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
