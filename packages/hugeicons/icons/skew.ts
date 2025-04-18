import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSkewIcon],svg[hugeicons-skew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="9" cy="4" r="2"></svg:circle><svg:circle cx="19" cy="7" r="2"></svg:circle><svg:circle cx="20" cy="20" r="2"></svg:circle><svg:circle cx="4" cy="18" r="2"></svg:circle><svg:path d="m10.917 4.575l6.168 1.85m2.07 2.57l.693 9.011m-1.832 1.746l-12.03-1.504M8.328 5.884L4.674 16.116"></svg:path></svg:g>`,
})
export class HugeiconsSkewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
