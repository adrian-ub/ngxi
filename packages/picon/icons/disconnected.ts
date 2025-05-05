import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDisconnectedIcon],svg[picon-disconnected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6V5h2v1M2 3V2h2v1m2-2q4 3 0 6M2 7q-4-3 0-6"></svg:path>`,
})
export class PiconDisconnectedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
