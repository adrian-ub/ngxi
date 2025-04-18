import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReplikaIcon],svg[arcticons-replika-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.438 14.094l4.402 1.756l3.734-2.32l4.2 2.372l3.056-3.234"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5c8.784 0 17.319 11.402 17.319 21.75A17.264 17.264 0 0 1 24 43.5m0-39c-8.784 0-17.319 11.402-17.319 21.75A17.264 17.264 0 0 0 24 43.5"></svg:path>`,
})
export class ArcticonsReplikaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
