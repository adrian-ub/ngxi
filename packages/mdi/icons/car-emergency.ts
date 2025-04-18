import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarEmergencyIcon],svg[mdi-car-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0v3h2V0zM7.88 1.46L6.46 2.87L8.59 5L10 3.58zm8.24 0L14 3.58L15.41 5l2.13-2.12zM12 5a2 2 0 0 0-2 2v1H6.5c-.66 0-1.22.42-1.42 1L3 15v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8l-2.08-6c-.2-.58-.76-1-1.42-1H14V7a2 2 0 0 0-2-2M6.5 9.5h11L19 14H5zm0 6.5A1.5 1.5 0 0 1 8 17.5A1.5 1.5 0 0 1 6.5 19A1.5 1.5 0 0 1 5 17.5A1.5 1.5 0 0 1 6.5 16m11 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiCarEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
