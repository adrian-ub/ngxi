import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrailLengthShortOutlineRoundedIcon],svg[material-symbols-trail-length-short-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17q-1.825 0-3.187-1.137T10.1 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h5.1q.125-.575.338-1.075T11 9H7q-.425 0-.712-.288T6 8t.288-.712T7 7h8q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17m0-2q1.25 0 2.125-.875T18 12t-.875-2.125T15 9t-2.125.875T12 12t.875 2.125T15 15m-7 2q-.425 0-.712-.288T7 16t.288-.712T8 15h1q.425 0 .713.288T10 16t-.288.713T9 17zm7-5"></svg:path>`,
})
export class MaterialSymbolsTrailLengthShortOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
