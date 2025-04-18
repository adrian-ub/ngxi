import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTheswitchIcon],svg[arcticons-theswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.4 4.5a4 4 0 0 0-4 4v31a4 4 0 0 0 4 4h23.2a4 4 0 0 0 4-4v-31a4 4 0 0 0-4-4zm4.548 8.564h14.104c.558 0 1.007.449 1.007 1.007v19.858c0 .558-.45 1.007-1.007 1.007H16.948c-.558 0-1.007-.45-1.007-1.007V14.07c0-.558.45-1.007 1.007-1.007"></svg:path>`,
})
export class ArcticonsTheswitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
