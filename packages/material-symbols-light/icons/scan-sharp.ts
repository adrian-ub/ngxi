import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScanSharpIcon],svg[material-symbols-light-scan-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8h4l-4-4zM5 21v-4.5h14V21zm-3.423-6.5v-1h20.846v1zM5 11.5V3h9.5L19 7.5v4z"></svg:path>`,
})
export class MaterialSymbolsLightScanSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
