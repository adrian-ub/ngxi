import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEyecityIcon],svg[arcticons-eyecity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.342 9.5a3.843 3.843 0 0 0 0 7.686h0q.452-.006.893-.116A12 12 0 0 0 12 24c0 6.627 5.373 12 12 12s12-5.372 12-12s-5.372-12-12-12a12 12 0 0 0-6.93 2.235q.11-.44.116-.893A3.843 3.843 0 0 0 13.342 9.5"></svg:path>`,
})
export class ArcticonsEyecityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
