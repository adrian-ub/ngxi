import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSustainableEnergyIcon],svg[hugeicons-sustainable-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.253 19.917A9.5 9.5 0 0 0 9.89 2.736m7.364 17.18V17m0 2.917H20.5M6.722 4.1a9.5 9.5 0 0 0 7.389 17.165M6.722 4.1V7m0-2.9H3.5"></svg:path><svg:path d="M12.5 7L9 12h6l-3.5 5"></svg:path></svg:g>`,
})
export class HugeiconsSustainableEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
