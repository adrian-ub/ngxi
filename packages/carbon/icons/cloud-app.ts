import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCloudAppIcon],svg[carbon-cloud-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.829 13.116A10.02 10.02 0 0 0 16 5v2a8.02 8.02 0 0 1 7.865 6.493l.259 1.346l1.349.245A5.502 5.502 0 0 1 24.508 26H16v2h8.508a7.502 7.502 0 0 0 1.32-14.884M8 24h6v2H8zm-4 0h2v2H4zm2-4h8v2H6zm-4 0h2v2H2zm6-4h6v2H8zm-4 0h2v2H4zm6-4h4v2h-4zm-4 0h2v2H6zm6-4h2v2h-2z"></svg:path>`,
})
export class CarbonCloudAppIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
