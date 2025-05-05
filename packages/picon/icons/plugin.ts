import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPluginIcon],svg[picon-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V6c2.5 0 2.5-2 0-2V2h2C2-.5 4-.5 4 2h2v2c2.5 0 2.5 2 0 2v2"></svg:path>`,
})
export class PiconPluginIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
