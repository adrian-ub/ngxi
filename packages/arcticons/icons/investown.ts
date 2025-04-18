import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvestownIcon],svg[arcticons-investown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.165 24.894v-7.828c.457-7.544 11.55-7.913 12.335 0v7.843c-.376 6.823-11.235 7.465-12.335-.015"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.834 24.94v-7.83c.457-7.543 11.55-7.912 12.335 0v14.263c-.376 6.822-11.235 7.465-12.335-.015z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 31.2v-7.83c.457-7.543 11.55-7.912 12.335 0v7.844C17.459 38.037 6.6 38.679 5.5 31.199"></svg:path>`,
})
export class ArcticonsInvestownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
