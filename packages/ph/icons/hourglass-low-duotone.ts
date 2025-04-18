import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHourglassLowDuotoneIcon],svg[ph-hourglass-low-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 184v32a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8v-32Z" opacity=".2"></svg:path><svg:path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.08 16.08 0 0 0-6.35-12.76L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M178.23 176H77.33L128 138ZM72 216v-24h112v24ZM184 75.64L128 118L72 76V40h112Z"></svg:path></svg:g>`,
})
export class PhHourglassLowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
