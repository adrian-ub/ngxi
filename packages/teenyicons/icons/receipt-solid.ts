import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsReceiptSolidIcon],svg[teenyicons-receipt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.724.447L11.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L7.5 14.06l-1.776.888a.5.5 0 0 1-.448 0L3.5 14.06l-1.776.888A.5.5 0 0 1 1 14.5zM4 5h2V4H4zm4 0h3V4H8zM6 8H4V7h2zm2 0h3V7H8zm3 3H8v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsReceiptSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
