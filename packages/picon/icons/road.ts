import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRoadIcon],svg[picon-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-8h3l2 8M4 3V1H3v2m1 4V5H3v2"></svg:path>`,
})
export class PiconRoadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
