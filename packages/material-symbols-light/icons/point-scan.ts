import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPointScanIcon],svg[material-symbols-light-point-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.5q-.633 0-1.066-.434Q10.5 12.633 10.5 12t.434-1.066T12 10.5t1.066.434q.434.433.434 1.066t-.434 1.066T12 13.5M11.5 8V4h1v4zm0 12v-4h1v4zm4.5-7.5v-1h4v1zm-12 0v-1h4v1z"></svg:path>`,
})
export class MaterialSymbolsLightPointScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
