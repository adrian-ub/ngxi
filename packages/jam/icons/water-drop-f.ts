import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamWaterDropFIcon],svg[jam-water-drop-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 .565q7 9.135 7 13a7 7 0 1 1-14 0q0-3.865 7-13"></svg:path>`,
})
export class JamWaterDropFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
