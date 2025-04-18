import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPw1x1Icon],svg[flag-pw-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPw1x10"><svg:path fill-opacity=".7" d="M61.7 4.2h170.8V175H61.7z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagPw1x10)" transform="translate(-185 -12.5)scale(2.9973)"><svg:path fill="#4aadd6" d="M0 4.2h301.2V175H0z"></svg:path><svg:path fill="#ffde00" d="M185.9 86.8a52 52 0 0 1-53 50.8a52 52 0 0 1-53.2-50.8c0-28 23.8-50.8 53.1-50.8s53 22.7 53 50.8z"></svg:path></svg:g>`,
})
export class FlagPw1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
