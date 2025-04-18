import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCg1x1Icon],svg[flag-cg-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCg1x10"><svg:path fill-opacity=".7" d="M115.7 0h496.1v496h-496z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagCg1x10)" transform="translate(-119.5)scale(1.032)"><svg:path fill="#ff0" d="M0 0h744v496H0z"></svg:path><svg:path fill="#00ca00" d="M0 0v496L496 0z"></svg:path><svg:path fill="red" d="M248 496h496V0z"></svg:path></svg:g>`,
})
export class FlagCg1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
