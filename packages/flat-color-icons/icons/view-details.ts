import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsViewDetailsIcon],svg[flat-color-icons-view-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BBDEFB" d="M7 4h34v40H7z"></svg:path><svg:path fill="#2196F3" d="M13 26h4v4h-4zm0-8h4v4h-4zm0 16h4v4h-4zm0-24h4v4h-4zm8 16h14v4H21zm0-8h14v4H21zm0 16h14v4H21zm0-24h14v4H21z"></svg:path>`,
})
export class FlatColorIconsViewDetailsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
