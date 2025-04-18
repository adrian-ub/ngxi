import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder01Icon],svg[hugeicons-cylinder-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 5.5C20 7.433 16.418 9 12 9S4 7.433 4 5.5S7.582 2 12 2s8 1.567 8 3.5m0 13c0 1.933-3.582 3.5-8 3.5s-8-1.567-8-3.5S7.582 15 12 15s8 1.567 8 3.5m0 0v-13m-16 13v-13" color="currentColor"></svg:path>`,
})
export class HugeiconsCylinder01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
