import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightButtonsAltRoundedIcon],svg[material-symbols-light-buttons-alt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 17q-.691 0-1.153-.462T3 15.378V8.622q0-.697.463-1.16T4.615 7h14.77q.69 0 1.152.463T21 8.622v6.756q0 .697-.463 1.16T19.385 17zm2.942-4.558v1.616q0 .191.125.317q.125.125.316.125q.192 0 .317-.125q.126-.126.126-.317v-1.616h1.616q.191 0 .317-.125q.125-.125.125-.316t-.125-.317t-.317-.126H8.442V9.942q0-.191-.125-.317q-.125-.125-.316-.125t-.317.125t-.126.317v1.616H5.942q-.191 0-.317.125q-.125.125-.125.316q0 .192.125.317q.126.126.317.126z"></svg:path>`,
})
export class MaterialSymbolsLightButtonsAltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
