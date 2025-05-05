import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRfidIcon],svg[picon-rfid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h2V2H4v1H3M1 1v6h6V1M2 6V2h4v4"></svg:path>`,
})
export class PiconRfidIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
