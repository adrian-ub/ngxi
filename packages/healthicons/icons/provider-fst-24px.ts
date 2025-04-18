import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsProviderFst24pxIcon],svg[healthicons-provider-fst-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v6H2zm6.264 6.385h4.733v2h-1.239l1.656 1.583l-1.382 1.446l-1.765-1.687l.002 1.272l-2 .002zM14 12.586L16.414 15L15 16.414L12.586 14zM22 16h-6v6h6z"></svg:path>`,
})
export class HealthiconsProviderFst24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
