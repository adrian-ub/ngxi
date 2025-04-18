import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaToggleRightFillIcon],svg[eva-toggle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14m0 10a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class EvaToggleRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
