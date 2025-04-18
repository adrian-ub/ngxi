import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTorchainIcon],svg[tabler-brand-torchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.588 15.537L12.035 12l-7.742 8.18c-.791.85.153 2.18 1.238 1.73l9.616-4.096a1.398 1.398 0 0 0 .44-2.277zM8.412 8.464L11.965 12l7.742-8.18c.791-.85-.153-2.18-1.238-1.73L8.853 6.188a1.398 1.398 0 0 0-.44 2.277z"></svg:path>`,
})
export class TablerBrandTorchainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
