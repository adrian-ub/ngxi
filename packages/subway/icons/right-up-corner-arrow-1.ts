import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRightUpCornerArrow1Icon],svg[subway-right-up-corner-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.5 23.3L314.2 128L0 442.2L69.8 512L384 197.8l104.7 104.7L512 0z"></svg:path>`,
})
export class SubwayRightUpCornerArrow1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
