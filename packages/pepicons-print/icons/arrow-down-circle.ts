import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintArrowDownCircleIcon],svg[pepicons-print-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.5 26C20.404 26 26 20.404 26 13.5S20.404 1 13.5 1S1 6.596 1 13.5S6.596 26 13.5 26m0-2C19.299 24 24 19.299 24 13.5S19.299 3 13.5 3S3 7.701 3 13.5S7.701 24 13.5 24" opacity=".2"></svg:path><svg:g opacity=".2"><svg:path d="M20.152 14.206a1.5 1.5 0 0 1-.192 2.113l-4 3.333a1.5 1.5 0 1 1-1.92-2.304l4-3.334a1.5 1.5 0 0 1 2.112.192"></svg:path><svg:path d="M9.848 14.206a1.5 1.5 0 0 1 2.112-.192l4 3.334a1.5 1.5 0 1 1-1.92 2.304l-4-3.333a1.5 1.5 0 0 1-.192-2.113"></svg:path><svg:path d="M15 18a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 3 0v8A1.5 1.5 0 0 1 15 18"></svg:path></svg:g><svg:path d="M17.384 14.347a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064"></svg:path><svg:path d="M8.616 14.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704"></svg:path><svg:path d="M13 18a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPrintArrowDownCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
