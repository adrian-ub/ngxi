import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDownloadLightIcon],svg[iconamoon-download-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 9l-5-5m0 0L7 9m5-5v13m-6 3h12"></svg:path>`,
})
export class IconamoonDownloadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
