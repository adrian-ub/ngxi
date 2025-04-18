import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPw4x3Icon],svg[flag-pw-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPw4x30"><svg:path fill-opacity=".7" d="M-70.3 0h640v480h-640z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagPw4x30)" transform="translate(70.3)"><svg:path fill="#4aadd6" d="M-173.4 0h846.3v480h-846.3z"></svg:path><svg:path fill="#ffde00" d="M335.6 232.1a135.9 130.1 0 1 1-271.7 0a135.9 130.1 0 1 1 271.7 0"></svg:path></svg:g>`,
})
export class FlagPw4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
