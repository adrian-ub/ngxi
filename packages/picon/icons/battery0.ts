import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBattery0Icon],svg[picon-battery0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7V2H3v5M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery0Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
