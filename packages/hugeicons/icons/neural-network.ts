import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNeuralNetworkIcon],svg[hugeicons-neural-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-8-8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-6-4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3-14.5l4 5m-3 5.5l-4 3m-2.5-1l-3-8m1.313-2.846L10.5 4.5m2 7l4.005.344M12 5.5L11 10" color="currentColor"></svg:path>`,
})
export class HugeiconsNeuralNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
