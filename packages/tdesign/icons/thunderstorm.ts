import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThunderstormIcon],svg[tdesign-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 5h-.064C8.6 5.033 6.7 6.935 6.7 9.2q0 .394.073.765l.184.956l-.95.21C4.832 11.391 4 12.391 4 13.533c0 .947.566 1.79 1.432 2.205l.902.431l-.864 1.804l-.902-.431C3.063 16.822 2 15.309 2 13.533c0-1.83 1.125-3.375 2.706-4.07A6 6 0 0 1 4.7 9.2c0-3.43 2.851-6.152 6.309-6.2h.091c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.654 1.074c1.285.969 2.127 2.49 2.127 4.214c0 2.21-1.382 4.082-3.313 4.894l-.922.388l-.775-1.843l.922-.388C19.16 15.193 20 14.01 20 12.667c0-1.051-.511-1.998-1.331-2.616a3.6 3.6 0 0 0-2.228-.717l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 5m2.777 5.677L11.817 14h4.018l-4.023 6.38l-1.691-1.067L12.21 16H8.226l3.95-6.377zm-6.879 7.321h2.004v2.004H6.998zm8 0h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignThunderstormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
