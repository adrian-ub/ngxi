import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFireStationJpIcon],svg[maki-fire-station-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.149v3.601a1 1 0 0 1-2 0V8.149a5.01 5.01 0 0 1-4-4.899a1 1 0 0 1 2 0a3 3 0 0 0 6 0a1 1 0 0 1 2 0a5.01 5.01 0 0 1-4 4.899"></svg:path>`,
})
export class MakiFireStationJpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
