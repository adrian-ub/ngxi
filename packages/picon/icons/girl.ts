import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGirlIcon],svg[picon-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6L2 5h4M5 4V3h1v1M2 4V3h1v1M2 2c-4 7 8 7 4 0m1-2c5 11-11 11-6 0m3 1L2 0L1 2m3-1l3 1l-1-2"></svg:path>`,
})
export class PiconGirlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
