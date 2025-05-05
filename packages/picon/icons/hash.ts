import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHashIcon],svg[picon-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V5h6v1M1 3V2h6v1M5 7V1h1v6M2 7V1h1v6"></svg:path>`,
})
export class PiconHashIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
