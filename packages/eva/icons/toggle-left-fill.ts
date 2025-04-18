import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaToggleLeftFillIcon],svg[eva-toggle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14M9 15a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="M9 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaToggleLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
