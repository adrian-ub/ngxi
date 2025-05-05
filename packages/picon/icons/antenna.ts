import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAntennaIcon],svg[picon-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6Q1 7 2 0M0 8l3-3l3 3M5 3c4-1 1-4 0 0"></svg:path>`,
})
export class PiconAntennaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
