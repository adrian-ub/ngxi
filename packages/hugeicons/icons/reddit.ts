import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedditIcon],svg[hugeicons-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="15.5" rx="9" ry="6.5"></svg:ellipse><svg:path d="M15.5 16.78A5.67 5.67 0 0 1 12 18a5.67 5.67 0 0 1-3.5-1.22"></svg:path><svg:circle cx="19" cy="4" r="2"></svg:circle><svg:path d="M18 10.07A2.14 2.14 0 0 1 19.86 9c1.182 0 2.14.95 2.14 2.12c0 .817-.466 1.526-1.15 1.88M6 10.07A2.14 2.14 0 0 0 4.14 9A2.13 2.13 0 0 0 2 11.12c0 .817.466 1.526 1.15 1.88M17 4c-2.357 0-3.536 0-4.268.732S12 6.643 12 9m-2.992 4h-.009m6.009 0h-.009"></svg:path></svg:g>`,
})
export class HugeiconsRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
