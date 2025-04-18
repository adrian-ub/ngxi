import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDna01Icon],svg[hugeicons-dna-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.667 22c.534-.534 1.068-1.068.574-4m-.574-2.666C7.334 10 8.334 9 8.667 8.667s1.333-1.333 6.667 0m-6.667 6.667c-5.333-1.334-6-.668-6.667-.001m6.667 0c5.333 1.334 6.333.333 6.666 0s1.334-1.333 0-6.666m6.667 0c-.667.667-1.333 1.333-6.666 0M15.333 2c-.534.534-1.068 1.068-.574 4" color="currentColor"></svg:path>`,
})
export class HugeiconsDna01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
