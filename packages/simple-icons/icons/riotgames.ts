import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRiotgamesIcon],svg[simple-icons-riotgames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.458.86L0 7.093l3.353 12.761l2.552-.313l-.701-8.024l.838-.373l1.447 8.202l4.361-.535l-.775-8.857l.83-.37l1.591 9.025l4.412-.542l-.849-9.708l.84-.374l1.74 9.87L24 17.318V3.5Zm.316 19.356l.222 1.256L24 23.14v-4.18l-10.22 1.256Z"></svg:path>`,
})
export class SimpleIconsRiotgamesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
