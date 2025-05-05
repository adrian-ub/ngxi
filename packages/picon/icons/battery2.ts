import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBattery2Icon],svg[picon-battery2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5V2H3v3M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
