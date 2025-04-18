import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbitePrinterSolidIcon],svg[flowbite-printer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbitePrinterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
