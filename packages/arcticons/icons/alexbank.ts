import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlexbankIcon],svg[arcticons-alexbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 15.726h27m-27 16.548v-9.263a3.629 3.629 0 1 1 7.258 0v9.263m2.613 0v-9.263a3.629 3.629 0 1 1 7.258 0v9.263m2.613 0v-9.263a3.629 3.629 0 1 1 7.258 0v9.263"></svg:path>`,
})
export class ArcticonsAlexbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
