import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSink01Icon],svg[hugeicons-sink-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14a7.05 7.05 0 0 0 6.773-5.026c.232-.782.347-1.173.045-1.573C18.515 7 18.024 7 17.04 7H6.96c-.983 0-1.474 0-1.777.4c-.302.401-.187.792.045 1.574A7.05 7.05 0 0 0 12 14m1-7V3.5a1.5 1.5 0 0 1 3 0V4m-6 3V6c0-.943 0-1.414-.293-1.707S8.943 4 8 4m6.5 10l-.5 8m-4.5-8l.5 8m-2 0h8" color="currentColor"></svg:path>`,
})
export class HugeiconsSink01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
