import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBasketballFillIcon],svg[ph-basketball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.6 46.39a103.5 103.5 0 0 1 52-21.65a4 4 0 0 1 4.45 4V120H95.7a103.77 103.77 0 0 0-32.32-67.56a4 4 0 0 1 .22-6.05M46 64.07a103.5 103.5 0 0 0-21.29 51.46a4 4 0 0 0 4 4.47h50.92a87.86 87.86 0 0 0-27.74-56.41a4 4 0 0 0-5.89.48m146.4-17.68a103.5 103.5 0 0 0-52-21.65a4 4 0 0 0-4.45 4V120h24.3a103.77 103.77 0 0 1 32.32-67.56a4 4 0 0 0-.17-6.05m38.86 69.14A103.5 103.5 0 0 0 210 64.07a4 4 0 0 0-5.86-.48A87.86 87.86 0 0 0 176.37 120h50.91a4 4 0 0 0 3.98-4.47M24.74 140.47A103.5 103.5 0 0 0 46 191.93a4 4 0 0 0 5.86.48A87.86 87.86 0 0 0 79.63 136H28.72a4 4 0 0 0-3.98 4.47M210 191.93a103.5 103.5 0 0 0 21.29-51.46a4 4 0 0 0-4-4.47h-50.92a87.86 87.86 0 0 0 27.74 56.41a4 4 0 0 0 5.89-.48M63.6 209.61a103.5 103.5 0 0 0 52 21.65a4 4 0 0 0 4.45-4V136H95.7a103.77 103.77 0 0 1-32.32 67.56a4 4 0 0 0 .22 6.05M160.3 136H136v91.28a4 4 0 0 0 4.45 4a103.5 103.5 0 0 0 52-21.65a4 4 0 0 0 .22-6.05A103.77 103.77 0 0 1 160.3 136"></svg:path>`,
})
export class PhBasketballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
