import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAbtIcon],svg[token-abt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm7.25 4.64l-7-3.936v7.874zm.25.423L12.5 12l7 3.937zm-.25 8.296l-7-3.937v7.875zm-7.5 3.938l-7-3.938l7-3.937zm0-8.72l-7-3.936l7-3.937zM4.5 8.064l7 3.937l-7 3.937z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12.002 7.152l4.216 7.115L12 16.64l-4.215-2.371zm0 .975l-3.533 5.962L12 16.077l3.534-1.988z"></svg:path>`,
})
export class TokenAbtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
