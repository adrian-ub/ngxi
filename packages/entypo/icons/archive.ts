import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoArchiveIcon],svg[entypo-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.981 2H6.018s-.996 0-.996 1h9.955c0-1-.996-1-.996-1m2.987 3c0-1-.995-1-.995-1H4.027s-.995 0-.995 1v1h13.936zm1.99 1l-.588-.592V7H1.63V5.408L1.041 6C.452 6.592.03 6.75.267 8c.236 1.246 1.379 8.076 1.549 9c.186 1.014 1.217 1 1.217 1h13.936s1.03.014 1.217-1c.17-.924 1.312-7.754 1.549-9c.235-1.25-.187-1.408-.777-2M14 11.997c0 .554-.449 1.003-1.003 1.003H7.003A1.003 1.003 0 0 1 6 11.997V10h1v2h6v-2h1z"></svg:path>`,
})
export class EntypoArchiveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
