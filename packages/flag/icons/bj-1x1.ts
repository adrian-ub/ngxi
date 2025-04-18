import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBj1x1Icon],svg[flag-bj-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBj1x10"><svg:path fill="gray" d="M67.6-154h666v666h-666z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagBj1x10)" transform="translate(-52 118.4)scale(.7688)"><svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#319400" d="M0-154h333v666H0z"></svg:path><svg:path fill="#ffd600" d="M333-154h666v333H333z"></svg:path><svg:path fill="#de2110" d="M333 179h666v333H333z"></svg:path></svg:g></svg:g>`,
})
export class FlagBj1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
