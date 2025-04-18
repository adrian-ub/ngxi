import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumAlignTopIcon],svg[circum-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.548 4.078h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1M9 20.922H6.565a2.5 2.5 0 0 1-2.5-2.5V7.582a2.5 2.5 0 0 1 2.5-2.5H9a2.5 2.5 0 0 1 2.5 2.5v10.84a2.5 2.5 0 0 1-2.5 2.5M6.565 6.082a1.5 1.5 0 0 0-1.5 1.5v10.84a1.5 1.5 0 0 0 1.5 1.5H9a1.5 1.5 0 0 0 1.5-1.5V7.582a1.5 1.5 0 0 0-1.5-1.5Zm10.873 9.869H15a2.5 2.5 0 0 1-2.5-2.5V7.582a2.5 2.5 0 0 1 2.5-2.5h2.435a2.5 2.5 0 0 1 2.5 2.5v5.869a2.5 2.5 0 0 1-2.497 2.5M15 6.082a1.5 1.5 0 0 0-1.5 1.5v5.869a1.5 1.5 0 0 0 1.5 1.5h2.435a1.5 1.5 0 0 0 1.5-1.5V7.582a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class CircumAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
