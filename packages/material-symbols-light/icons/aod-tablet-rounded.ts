import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAodTabletRoundedIcon],svg[material-symbols-light-aod-tablet-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19q-.667 0-1.141-.475T2 17.386V6.615q0-.666.475-1.14T3.614 5h16.77q.666 0 1.14.475T22 6.615v10.77q0 .666-.475 1.14t-1.14.475zM5.5 18h13V6h-13zm3.442-6.808q-.191 0-.317-.125q-.125-.125-.125-.316t.125-.317t.317-.126h6.116q.191 0 .317.125q.125.125.125.316q0 .192-.125.317q-.126.126-.317.126zm1 3q-.191 0-.317-.125q-.125-.125-.125-.316t.125-.317t.317-.126h4.116q.191 0 .317.125q.125.125.125.316q0 .192-.125.317q-.126.126-.317.126z"></svg:path>`,
})
export class MaterialSymbolsLightAodTabletRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
