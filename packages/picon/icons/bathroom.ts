import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBathroomIcon],svg[picon-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H3v3H1V5H0V2h4m0 4l1-4h2l1 4H7v2H5V6m0-5l1-1l1 1l-1 1M1 1l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconBathroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
