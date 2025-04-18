import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCayanTowerIcon],svg[hugeicons-cayan-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 22c0-2.167-1.586-6.7-3.05-9.5c-1.465-2.8-2.573-8.167-2.98-10.5L6.473 4c-1.83 5.5 2.009 11.6 5.425 18M10 18h1.5M8 15.018L10.5 15m-3-3H10"></svg:path><svg:path d="m12 2l5.572 2c1.006 3 .147 6.362-1.621 10.416M6 22c0-1.72.85-4.848 2-7.5M4 22h16"></svg:path></svg:g>`,
})
export class HugeiconsCayanTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
