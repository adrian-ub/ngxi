import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaToggleLeftOutlineIcon],svg[eva-toggle-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14m0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10"></svg:path><svg:path fill="currentColor" d="M9 9a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaToggleLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
