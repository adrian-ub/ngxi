import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAtmRoundedIcon],svg[material-symbols-light-atm-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.587 10.192H8.779q-.192 0-.317-.125t-.125-.316t.125-.317t.317-.126h4.5q.192 0 .317.125t.125.316t-.125.317t-.317.126H11.47v4.058q0 .192-.125.317t-.316.125t-.317-.125t-.126-.317zM3.385 13v1.25q0 .192-.125.317t-.317.125t-.317-.125t-.126-.317v-4.173q0-.327.221-.548t.548-.221h2.847q.326 0 .548.22q.22.222.22.549v4.173q0 .192-.125.317t-.316.125t-.317-.125T6 14.25V13zm0-.885H6v-1.923H3.385zm12.73-1.923v4.058q0 .192-.125.317t-.316.125t-.317-.125t-.126-.317v-4.173q0-.327.221-.548T16 9.308h4.73q.328 0 .549.22q.221.222.221.549v4.173q0 .192-.125.317t-.316.125t-.318-.125t-.126-.317v-4.058h-1.807v3.058q0 .192-.125.317q-.126.125-.317.125t-.317-.125t-.126-.317v-3.058z"></svg:path>`,
})
export class MaterialSymbolsLightAtmRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
