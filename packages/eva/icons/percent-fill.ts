import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaPercentFillIcon],svg[eva-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11m0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6m8 8a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14m0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19m3.74-14.74a.89.89 0 0 0-1.26 0L4.26 18.48a.9.9 0 0 0-.26.63a.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26"></svg:path>`,
})
export class EvaPercentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
