import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBs4x3Icon],svg[flag-bs-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBs4x30"><svg:path fill-opacity=".7" d="M-12 0h640v480H-12z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagBs4x30)" transform="translate(12)"><svg:path fill="#fff" d="M968.5 480h-979V1.8h979z"></svg:path><svg:path fill="#ffe900" d="M968.5 344.5h-979V143.3h979z"></svg:path><svg:path fill="#08ced6" d="M968.5 480h-979V320.6h979zm0-318.7h-979V2h979z"></svg:path><svg:path fill="#000001" d="M-11 0c2.3 0 391.8 236.8 391.8 236.8L-12 479.2z"></svg:path></svg:g>`,
})
export class FlagBs4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
