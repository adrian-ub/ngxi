import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWaterPumpIcon],svg[mdi-water-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14.5s2 2.17 2 3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.33 2-3.5 2-3.5M5 18V9a2 2 0 0 1-2-2a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h8a2 2 0 0 1 2 2v4a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1V9h-6v9h1a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiWaterPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
