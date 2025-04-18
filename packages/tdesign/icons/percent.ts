import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPercentIcon],svg[tdesign-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2.5 6.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M20.414 5L5 20.414L3.586 19L19 3.586zM18 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-3.5 1.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path>`,
})
export class TdesignPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
