import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCloudIcon],svg[grommet-icons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18 17v1c0 3-2 4-5 4h-2c-3 0-5-1-5-4v-1A5 5 0 0 1 6 7h6M6 7V6c0-3 2-4 5-4h2c3 0 5 1 5 4v1a5 5 0 0 1 0 10h-6"></svg:path>`,
})
export class GrommetIconsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
