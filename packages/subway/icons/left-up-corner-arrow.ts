import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayLeftUpCornerArrowIcon],svg[subway-left-up-corner-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163 93.2h255.9L325.9.1L0 0l.1 325.9l93.1 93V163l349 349l69.8-69.8z"></svg:path>`,
})
export class SubwayLeftUpCornerArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
