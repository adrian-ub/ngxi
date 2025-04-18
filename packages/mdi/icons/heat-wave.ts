import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHeatWaveIcon],svg[mdi-heat-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 4.5l-3.1 5l3.1 5.2l-3.3 5.8l-1.8-.9l2.7-4.9L3 9.5l3.7-5.9zm6.2-.1l-3.1 5.1l3.1 5l-3.3 5.8l-1.8-.9l2.7-4.9l-3.1-5l3.7-6zm6.3 0l-3.1 5.1l3.1 5l-3.3 5.8l-1.8-.9l2.7-4.9l-3.1-5l3.7-6z"></svg:path>`,
})
export class MdiHeatWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
