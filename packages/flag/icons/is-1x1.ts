import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagIs1x1Icon],svg[flag-is-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagIs1x10"><svg:path fill-opacity=".7" d="M85.4 0h486v486h-486z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="0" clip-path="url(#flagIs1x10)" transform="translate(-90)scale(1.0535)"><svg:path fill="#003897" d="M0 0h675v486H0z"></svg:path><svg:path fill="#fff" d="M0 189h189V0h108v189h378v108H297v189H189V297H0z"></svg:path><svg:path fill="#d72828" d="M0 216h216V0h54v216h405v54H270v216h-54V270H0z"></svg:path></svg:g>`,
})
export class FlagIs1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
