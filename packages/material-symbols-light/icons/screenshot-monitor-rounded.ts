import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotMonitorRoundedIcon],svg[material-symbols-light-screenshot-monitor-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.808 14.808h-1.866q-.191 0-.317.125q-.125.125-.125.316t.125.317t.317.126h1.942q.344 0 .576-.232t.232-.576v-1.942q0-.191-.125-.317q-.125-.125-.316-.125t-.317.125t-.126.317zM6.192 7.192h1.866q.191 0 .317-.125q.125-.125.125-.316t-.125-.317t-.317-.126H6.116q-.344 0-.576.232t-.232.575v1.943q0 .191.125.317q.125.125.316.125q.192 0 .317-.125q.126-.126.126-.317zM4.615 18q-.69 0-1.153-.462T3 16.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v10.769q0 .69-.463 1.153T19.385 18H15v1.192q0 .344-.232.576t-.576.232H9.808q-.343 0-.576-.232T9 19.192V18z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotMonitorRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
