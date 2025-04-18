import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotTabletRoundedIcon],svg[material-symbols-light-screenshot-tablet-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19q-.667 0-1.141-.475T2 17.386V6.615q0-.666.475-1.14T3.614 5h16.77q.666 0 1.14.475T22 6.615v10.77q0 .666-.475 1.14t-1.14.475zM5.5 18h13V6h-13zm10.73-2.27h-1.864q-.192 0-.317.126q-.126.125-.126.316t.126.318t.317.126h2.153q.248 0 .422-.184q.175-.184.175-.432v-2.134q0-.192-.126-.317q-.125-.126-.316-.126t-.317.126t-.126.317zM7.77 8.27h1.865q.191 0 .316-.126q.126-.125.126-.316t-.125-.318t-.318-.125H7.5q-.248 0-.432.174q-.183.174-.183.422v2.153q0 .192.125.317q.125.126.316.126t.317-.125t.126-.318z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotTabletRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
