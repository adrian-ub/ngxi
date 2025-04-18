import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPowerShutdownIcon],svg[grommet-icons-power-shutdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 1v8M6.994 4.52a9 9 0 0 0-1.358 1.116a9 9 0 1 0 11.37-1.117"></svg:path>`,
})
export class GrommetIconsPowerShutdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
