import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamWaterDropIcon],svg[jam-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13a5 5 0 0 0 10 0c0-1.726-1.66-5.031-5-9.653C3.66 7.969 2 11.274 2 13M7 0q7 9.135 7 13a7 7 0 0 1-14 0Q0 9.135 7 0"></svg:path>`,
})
export class JamWaterDropIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
