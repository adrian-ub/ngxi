import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsPluginIcon],svg[zondicons-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14v4a2 2 0 0 1-2 2h-4v-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2H6a2 2 0 0 1-2-2v-4H2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2V6c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v4h-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2z"></svg:path>`,
})
export class ZondiconsPluginIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
