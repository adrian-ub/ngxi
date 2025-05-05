import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRoadworkIcon],svg[picon-roadwork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V1h1v6M1 7V1h1v6M0 4V2h8v2"></svg:path>`,
})
export class PiconRoadworkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
