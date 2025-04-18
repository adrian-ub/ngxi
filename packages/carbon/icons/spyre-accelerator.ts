import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSpyreAcceleratorIcon],svg[carbon-spyre-accelerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M2 7v17h6v-3h3v4h16v-4h3V7zm23 16H13v-2h12zm3-4H6v3H4V9h24zm-6-8h-6v6h6zm-2 4h-2v-2h2z"></svg:path>`,
})
export class CarbonSpyreAcceleratorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
