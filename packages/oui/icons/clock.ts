import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiClockIcon],svg[oui-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 13A5.506 5.506 0 0 1 2 7.5C2 4.467 4.467 2 7.5 2S13 4.467 13 7.5S10.533 13 7.5 13m0-12a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m3 6H8V3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1"></svg:path>`,
})
export class OuiClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
