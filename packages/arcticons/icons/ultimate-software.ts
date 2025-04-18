import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUltimateSoftwareIcon],svg[arcticons-ultimate-software-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.1 16.2h7.8V24h-7.8zm0 15.6h7.8v7.8h-7.8zm7.8-23.4h7.8v7.8h-7.8zm7.8 7.8h7.8V24h-7.8zM12.3 8.4h7.8v7.8h-7.8zM27.9 24h7.8v7.8h-7.8zm-15.6 0h7.8v7.8h-7.8zm-7.8-7.8h7.8V24H4.5z"></svg:path>`,
})
export class ArcticonsUltimateSoftwareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
