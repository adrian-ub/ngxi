import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayLeftDownCornerArrowIcon],svg[subway-left-down-corner-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 69.8L442.2 0l-349 349V93.1l-93.1 93L0 512l325.9-.1l93-93.1H163z"></svg:path>`,
})
export class SubwayLeftDownCornerArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
