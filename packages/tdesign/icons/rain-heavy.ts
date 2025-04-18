import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRainHeavyIcon],svg[tdesign-rain-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 4h-.064C8.6 4.033 6.7 5.935 6.7 8.2q0 .394.073.765l.184.956l-.95.21C4.832 10.391 4 11.391 4 12.533c0 .947.566 1.79 1.432 2.205l.902.431l-.864 1.804l-.902-.431C3.063 15.822 2 14.309 2 12.533c0-1.83 1.125-3.375 2.706-4.07A6 6 0 0 1 4.7 8.2c0-3.43 2.851-6.152 6.309-6.2h.091c.546 0 1.078.066 1.586.192c2.147.53 3.88 2.12 4.533 4.187a5.6 5.6 0 0 1 2.654 1.074C21.158 8.422 22 9.943 22 11.667c0 2.21-1.382 4.082-3.313 4.894l-.922.388l-.767-1.824V18h-2v-5.998h2v3.1l.914-.384C19.16 14.193 20 13.01 20 11.667c0-1.051-.511-1.999-1.331-2.616a3.6 3.6 0 0 0-2.228-.717l-.854.013l-.147-.842c-.282-1.62-1.55-2.956-3.234-3.371A4.6 4.6 0 0 0 11.1 4m1.898 6.002V20h-2v-9.998zm-4 2V18h-2v-5.998z"></svg:path>`,
})
export class TdesignRainHeavyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
