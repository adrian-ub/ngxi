import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCoinAFillIcon],svg[mage-coin-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.25c-5.59 0-10 2.82-10 6.46v4.58c0 3.62 4.39 6.46 10 6.46s10-2.84 10-6.46V9.72c0-3.63-4.43-6.47-10-6.47m8.5 11c0 2.69-3.89 5-8.5 5s-8.5-2.27-8.5-5V13.1c1.78 1.87 5 3 8.5 3s6.73-1.18 8.5-3z"></svg:path>`,
})
export class MageCoinAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
