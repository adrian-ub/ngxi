import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMagnet02Icon],svg[hugeicons-magnet-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 10V9c0-.943 0-1.414.293-1.707S17.057 7 18 7s1.414 0 1.707.293S20 8.057 20 9v1m-4 0v4a4 4 0 0 1-8 0v-4m8 0h4m0 0v4a8 8 0 1 1-16 0v-4m4 0V9c0-.943 0-1.414-.293-1.707S6.943 7 6 7s-1.414 0-1.707.293S4 8.057 4 9v1m4 0H4m8.5-8l-1.875 3h3L11.75 8" color="currentColor"></svg:path>`,
})
export class HugeiconsMagnet02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
