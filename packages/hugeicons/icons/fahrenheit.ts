import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFahrenheitIcon],svg[hugeicons-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="5" cy="6" r="2"></svg:circle><svg:path d="M21 4h-3c-2.828 0-4.243 0-5.121.879C12 5.757 12 7.172 12 10v10m0-8h7"></svg:path></svg:g>`,
})
export class HugeiconsFahrenheitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
