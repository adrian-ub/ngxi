import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaAwardFillIcon],svg[eva-award-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8A6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13l5.68 3.14A.9.9 0 0 0 18 22a1 1 0 0 0 1-1.25M12 4a4 4 0 1 1-4 4a4 4 0 0 1 4-4"></svg:path>`,
})
export class EvaAwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
