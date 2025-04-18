import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallMissedRoundedIcon],svg[material-symbols-light-call-missed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9.617v4.787q0 .213-.143.357t-.357.143t-.357-.143T4 14.404V8.71q0-.348.23-.577q.23-.23.578-.23H10.5q.214 0 .357.143t.143.357t-.143.356t-.357.144H5.708l5.946 5.946q.173.173.442.173t.443-.173l6.419-6.42q.146-.145.344-.152t.364.159q.159.165.162.354t-.162.353l-6.433 6.433q-.243.242-.54.354q-.299.111-.597.111t-.596-.111t-.54-.354z"></svg:path>`,
})
export class MaterialSymbolsLightCallMissedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
