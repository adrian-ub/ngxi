import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosLitIconIcon],svg[logos-lit-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00E8FF" d="m64 192l25.926-44.727l38.233-19.114l63.974 63.974l10.833 61.754L192 320l-64-64l-38.074-25.615z"></svg:path><svg:path fill="#283198" d="M128 256V128l64-64v128zM0 256l64 64l9.202-60.602L64 192l-37.542 23.71z"></svg:path><svg:path fill="#324FFF" d="M64 192V64l64-64v128zm128 128V192l64-64v128zM0 256V128l64 64z"></svg:path><svg:path fill="#0FF" d="M64 320V192l64 64z"></svg:path>`,
})
export class LogosLitIconIcon {
  readonly viewBox = input("0 0 256 320")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
