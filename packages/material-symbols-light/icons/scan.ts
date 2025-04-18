import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScanIcon],svg[material-symbols-light-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8h4l-4-4zM6.616 21q-.667 0-1.141-.475T5 19.386V16.5h14v2.885q0 .666-.475 1.14t-1.14.475zm-5.039-6.5v-1h20.846v1zM5 11.5V4.616q0-.667.475-1.141T6.615 3H14.5L19 7.5v4z"></svg:path>`,
})
export class MaterialSymbolsLightScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
