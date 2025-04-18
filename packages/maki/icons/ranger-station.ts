import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiRangerStationIcon],svg[maki-ranger-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 .5l-2 1v3.773L2 8v6h4v-4h3v4h4V8L8 5.273V4l1-.5l2 1l2-1v-3l-2 1z"></svg:path>`,
})
export class MakiRangerStationIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
