import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiGoogleIcon],svg[flat-ui-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#08B059" d="M49.997 47.169L62.775 34.39C39.436 20.568 4.949.29 3 0l-.156.016z"></svg:path><svg:path fill="#1BB899" d="M.016 2.845L0 3v94l.015.149l47.153-47.152z"></svg:path><svg:path fill="#F04F3E" d="M50.003 52.832L2.852 99.984l.148.017c1.958-.312 36.439-20.58 59.775-34.396z"></svg:path><svg:path fill="#F99C1C" d="M84 47s-7.372-4.398-17.665-10.5L52.832 50.004l13.497 13.497C76.625 57.398 84 53 84 53c1.607-.844 3-1.343 3-3c0-1.656-1.584-2.225-3-3"></svg:path>`,
})
export class FlatUiGoogleIcon {
  readonly viewBox = input("0 0 87 100.001")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
