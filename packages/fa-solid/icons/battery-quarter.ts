import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidBatteryQuarterIcon],svg[fa-solid-battery-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160zm16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48m-336 96H96v128h128z"></svg:path>`,
})
export class FaSolidBatteryQuarterIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
