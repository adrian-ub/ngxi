import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconElevatorIcon],svg[picon-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 5l1.5 2L8 5M5 3l1.5-2L8 3M0 0v8h5V0M2 1h1v1H2m0 5V5H1V3h3v2H3v2"></svg:path>`,
})
export class PiconElevatorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
