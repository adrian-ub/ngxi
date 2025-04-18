import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEmmetIcon],svg[logos-emmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="127.555" cy="128.184" r="127.555" fill="#1C1C20"></svg:circle><svg:path fill="#BAFFA9" d="m178.496 124.737l-14.205-14.205l7.306-30.035l-30.441 6.9l-13.8-13.8l68.187-17.047z"></svg:path><svg:path fill="#7ACB16" d="M154.956 218.901L33.192 97.138L101.38 80.09l13.8 13.8l-48.706 12.176l27.6 27.6l32.064-7.712l-8.117 31.658l27.6 27.6l12.176-48.705l14.205 14.206z"></svg:path>`,
})
export class LogosEmmetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
