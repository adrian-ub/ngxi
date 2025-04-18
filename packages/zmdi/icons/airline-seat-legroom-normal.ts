import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatLegroomNormalIcon],svg[zmdi-airline-seat-legroom-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 192q0 27 18.5 45.5T107 256h128v43H107q-44 0-75.5-31.5T0 192V0h43zm330 128q14 0 23 9.5t9 22.5t-9 22.5t-23 9.5h-96V235H128q-26 0-45-19t-19-45V0h128v128h107q17 0 29.5 12.5T341 171v149z"></svg:path>`,
})
export class ZmdiAirlineSeatLegroomNormalIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
