import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBareMetalServer01Icon],svg[carbon-bare-metal-server-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 28v-6h-2v6H5v2h22v-2z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 20H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 14v4h20v-4Z"></svg:path>`,
})
export class CarbonBareMetalServer01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
