import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosKtorIconIcon],svg[logos-ktor-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosKtorIcon0" x1="23.965%" x2="74.641%" y1="23.965%" y2="74.641%"><svg:stop offset="29.6%" stop-color="#00AFFF"></svg:stop><svg:stop offset="69.4%" stop-color="#5282FF"></svg:stop><svg:stop offset="100%" stop-color="#945DFF"></svg:stop></svg:lineargradient><svg:lineargradient id="logosKtorIcon1" x1="26.206%" x2="74.117%" y1="26.206%" y2="74.117%"><svg:stop offset="10.8%" stop-color="#C757BC"></svg:stop><svg:stop offset="17.3%" stop-color="#CD5CA9"></svg:stop><svg:stop offset="49.2%" stop-color="#E8744F"></svg:stop><svg:stop offset="71.6%" stop-color="#F88316"></svg:stop><svg:stop offset="82.3%" stop-color="#FF8900"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosKtorIcon0)" d="m170.667 85.333l-42.49-42.489L85.333 0L40.277 45.056L0 85.333l85.333 85.334z"></svg:path><svg:path fill="url(#logosKtorIcon1)" d="m85.333 170.667l42.49 42.489L170.667 256l45.056-45.056L256 170.667l-85.333-85.334z"></svg:path><svg:path d="M170.667 85.333H85.333v85.334h85.334z"></svg:path>`,
})
export class LogosKtorIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
