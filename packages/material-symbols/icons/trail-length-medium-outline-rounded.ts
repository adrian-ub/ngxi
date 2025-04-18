import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTrailLengthMediumOutlineRoundedIcon],svg[material-symbols-trail-length-medium-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17q-.425 0-.712-.288T7 16t.288-.712T8 15h4q-.35-.425-.562-.925T11.1 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5.1q.125-.575.338-1.075T12 9H8q-.425 0-.712-.288T7 8t.288-.712T8 7h8q2.075 0 3.538 1.463T21 12t-1.463 3.538T16 17zm8-2q1.25 0 2.125-.875T19 12t-.875-2.125T16 9t-2.125.875T13 12t.875 2.125T16 15M4 17q-.425 0-.712-.288T3 16t.288-.712T4 15h1q.425 0 .713.288T6 16t-.288.713T5 17zm12-5"></svg:path>`,
})
export class MaterialSymbolsTrailLengthMediumOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
