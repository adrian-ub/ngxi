import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRightUpCornerArrowIcon],svg[subway-right-up-corner-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m186.1.1l-93 93.1H349L0 442.2L69.8 512l349-349v255.9l93.1-93L512 0z"></svg:path>`,
})
export class SubwayRightUpCornerArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
