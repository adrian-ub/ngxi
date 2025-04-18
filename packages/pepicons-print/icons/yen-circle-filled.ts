import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintYenCircleFilledIcon],svg[pepicons-print-yen-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2s12 5.373 12 12" opacity=".2"></svg:path><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.336 11.87a.5.5 0 0 1-.706-.034l-5-5.512a.5.5 0 1 1 .74-.672l5 5.512a.5.5 0 0 1-.034.706"></svg:path><svg:path d="M11.664 11.87a.5.5 0 0 0 .706-.034l5-5.512a.5.5 0 1 0-.74-.672l-5 5.512a.5.5 0 0 0 .034.706"></svg:path><svg:path d="M6.5 11.988a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m0 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M12 11a.5.5 0 0 1 .5.5v8.488a.5.5 0 0 1-1 0V11.5a.5.5 0 0 1 .5-.5"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintYenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
