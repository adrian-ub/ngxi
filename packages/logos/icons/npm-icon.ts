import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNpmIconIcon],svg[logos-npm-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C12127" d="M0 256V0h256v256z"></svg:path><svg:path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z"></svg:path>`,
})
export class LogosNpmIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
