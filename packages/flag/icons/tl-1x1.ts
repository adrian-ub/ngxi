import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTl1x1Icon],svg[flag-tl-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagTl1x10"><svg:path fill-opacity=".7" d="M0 0h496v496H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagTl1x10)" transform="scale(1.0321)"><svg:path fill="#cb000f" d="M0 0h999v496H0z"></svg:path><svg:path fill="#f8c00c" d="M0 0c3.1 0 496 248.7 496 248.7L0 496.1z"></svg:path><svg:path fill="#000001" d="M0 0c2 0 330 248.7 330 248.7L0 496.1z"></svg:path><svg:path fill="#fff" d="m181.9 288.9l-59-13L93 327l-5-57.8l-58.8-13l53.1-24l-3.2-57.5l39 42l53.6-24.4l-28 52.2l38 44.4z"></svg:path></svg:g>`,
})
export class FlagTl1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
