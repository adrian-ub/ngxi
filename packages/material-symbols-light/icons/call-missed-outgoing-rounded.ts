import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallMissedOutgoingRoundedIcon],svg[material-symbols-light-call-missed-outgoing-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 9.617l-5.96 5.96q-.242.242-.54.354t-.596.111t-.596-.111t-.54-.354L4.334 9.144q-.14-.14-.15-.341t.15-.367q.165-.165.356-.165q.192 0 .357.165l6.414 6.414q.173.173.442.173t.442-.173l5.946-5.946H13.5q-.213 0-.357-.143T13 8.404t.143-.357t.357-.143h5.692q.349 0 .578.23q.23.23.23.578v5.692q0 .213-.143.357t-.357.143t-.357-.143t-.143-.357z"></svg:path>`,
})
export class MaterialSymbolsLightCallMissedOutgoingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
