import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBlackTieIcon],svg[fa-black-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h1536v1536H0zm1085 1115L864 484l221-297H451l221 297l-221 631l317 304z"></svg:path>`,
})
export class FaBlackTieIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
