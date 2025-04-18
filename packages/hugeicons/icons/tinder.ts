import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTinderIcon],svg[hugeicons-tinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.256 8.515c3.128 5.904.177 13.06-6.818 13.485C3.44 22 .307 11.364 7.38 6.455C7.38 14.5 14.13 7.5 12 2c3 1 5.794 3.562 7.256 6.515" color="currentColor"></svg:path>`,
})
export class HugeiconsTinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
