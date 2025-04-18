import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSatelliteIcon],svg[hugeicons-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 22l-3-7l-3 7z"></svg:path><svg:path d="M18.192 13.335c1.293 1.293 1.94 1.94 1.786 2.938a3 3 0 0 1-.034.172c-.24.98-.9 1.254-2.216 1.8A9.928 9.928 0 0 1 4.756 5.271c.545-1.317.818-1.975 1.8-2.216c.045-.01.125-.027.17-.034c1-.153 1.646.493 2.939 1.786z"></svg:path><svg:circle cx="19" cy="4" r="2"></svg:circle><svg:path d="m12.5 7.133l5.213-1.604l-1.836 5"></svg:path></svg:g>`,
})
export class HugeiconsSatelliteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
