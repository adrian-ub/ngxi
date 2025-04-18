import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagFm1x1Icon],svg[flag-fm-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagFm1x10"><svg:path fill-opacity=".7" d="M244.2 0h496v496h-496z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagFm1x10)" transform="translate(-252)scale(1.032)"><svg:path fill="#6797d6" d="M0 0h992.1v496H0z"></svg:path><svg:path fill="#fff" d="M507.9 84.5h38.8l-31.5 21.4l12 34.8l-31.3-21.5l-31.5 21.5l12-34.8L445 84.4h39l12-34.7m12 363h38.8l-31.5-21.5l12-34.8l-31.3 21.5l-31.5-21.5l12 34.8l-31.4 21.5H484l12 34.7M346 230.1l37.2-11.4l-23.9 29.8l21.7 29.7l-36.3-11.4l-23.8 29.8l1.4-36.8l-36.4-11.4l37.2-11.3l1.3-36.8m321 29.8l-37.1-11.4l23.8 29.7l-21.7 29.8l36.4-11.4l23.7 29.8l-1.3-36.8l36.4-11.4l-37.2-11.3l-1.3-36.8"></svg:path></svg:g>`,
})
export class FlagFm1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
