import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesFold2Icon],svg[material-symbols-devices-fold-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21H7q-.825 0-1.412-.587T5 19V5q0-.825.588-1.412T7 3h10.6q.625 0 1.125.338t.725.912l2.4 6q.4 1-.187 1.875T20 13h-1v6q0 .825-.587 1.413T17 21m0-2v-6H9.4q-.625 0-1.125-.337t-.725-.913L7 10.375V19z"></svg:path>`,
})
export class MaterialSymbolsDevicesFold2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
