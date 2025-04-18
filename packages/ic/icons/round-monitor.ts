import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundMonitorIcon],svg[ic-round-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3c-.55.55-1 .87-1 1.59c0 .78.63 1.41 1.41 1.41h9.17c.78 0 1.41-.63 1.41-1.41c0-.72-.44-1.03-1-1.59h3c1.1 0 2-.9 2-2V5C22 3.9 21.1 3 20 3m0 13H4V5h16z"></svg:path>`,
})
export class IcRoundMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
