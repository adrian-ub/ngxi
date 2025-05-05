import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWheelchairIcon],svg[picon-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V2h3v1H5v1h2v3H6V5M4 1l1-1l1 1l-1 1M3.5 4C0 3 2 10 4.5 6M5 7c-5 4-5-5-2-4"></svg:path>`,
})
export class PiconWheelchairIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
