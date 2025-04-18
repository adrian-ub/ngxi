import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCf1x1Icon],svg[flag-cf-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCf1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagCf1x10)"><svg:path fill="#00f" d="M-52-.5h768v127H-52z"></svg:path><svg:path fill="#ff0" d="M-52 383.5h768V512H-52z"></svg:path><svg:path fill="#009a00" d="M-52 255h768v128.5H-52z"></svg:path><svg:path fill="#fff" d="M-52 126.5h768V255H-52z"></svg:path><svg:path fill="red" d="M268 0h128v512H268z"></svg:path><svg:path fill="#ff0" d="M109.5 112.3L75.9 89.1l-33.4 23.4l11.6-39.2l-32.5-24.6l40.7-1L75.7 8.8l13.5 38.6l40.8.8L97.6 73"></svg:path></svg:g>`,
})
export class FlagCf1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
