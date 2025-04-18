import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumOutlineIcon],svg[healthicons-triangle-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 10c.379 0 .725.187.894.484l15 26.25a.78.78 0 0 1-.043.851A1.04 1.04 0 0 1 39 38H9c-.347 0-.668-.157-.85-.415a.78.78 0 0 1-.044-.851l15-26.25c.169-.297.515-.484.894-.484m0 2.832L10.618 36.25h26.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
