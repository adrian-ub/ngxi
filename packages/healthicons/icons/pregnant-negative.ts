import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPregnantNegativeIcon],svg[healthicons-pregnant-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPregnantNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm29 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-8.176 19.118c.254.184.537.3.827.352c.346 3.873.349 7.675.349 13.53v1a2 2 0 0 0 4 0v-1l1.462-7.692c.2-.061.448-.143.73-.25c.677-.256 1.604-.675 2.484-1.315c.877-.638 1.816-1.574 2.329-2.893c.533-1.372.517-2.93-.148-4.593c-1.148-2.869-3.243-5.346-4.943-7.046a33 33 0 0 0-2.247-2.048a27 27 0 0 0-.906-.718l-.058-.043l-.017-.013l-.006-.004l-.002-.001c-.001-.001-.002-.002-1.178 1.616l1.176-1.617A2 2 0 0 0 23.5 14h-2c-.748 0-1.355.32-1.71.543c-.397.25-.766.564-1.087.871c-.645.617-1.294 1.396-1.848 2.113a42 42 0 0 0-1.996 2.827l-.033.051l-.01.015l-.002.004v.001h-.001L16.5 21.5l-1.687-1.074a2 2 0 0 0 .51 2.692zm-.345-7.722c.195 1.024.366 1.983.514 2.899l-1.75-1.273c.238-.334.502-.692.777-1.05q.231-.298.459-.576" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPregnantNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPregnantNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
