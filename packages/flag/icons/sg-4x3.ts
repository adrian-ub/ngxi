import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSg4x3Icon],svg[flag-sg-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSg4x30"><svg:path fill-opacity=".7" d="M0 0h640v480H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagSg4x30)"><svg:path fill="#fff" d="M-20 0h720v480H-20z"></svg:path><svg:path fill="#df0000" d="M-20 0h720v240H-20z"></svg:path><svg:path fill="#fff" d="M146 40.2a84.4 84.4 0 0 0 .8 165.2a86 86 0 0 1-106.6-59a86 86 0 0 1 59-106c16-4.6 30.8-4.7 46.9-.2z"></svg:path><svg:path fill="#fff" d="m133 110l4.9 15l-13-9.2l-12.8 9.4l4.7-15.2l-12.8-9.3l15.9-.2l5-15l5 15h15.8zm17.5 52l5 15.1l-13-9.2l-12.9 9.3l4.8-15.1l-12.8-9.4l15.9-.1l4.9-15.1l5 15h16zm58.5-.4l4.9 15.2l-13-9.3l-12.8 9.3l4.7-15.1l-12.8-9.3l15.9-.2l5-15l5 15h15.8zm17.4-51.6l4.9 15.1l-13-9.2l-12.8 9.3l4.8-15.1l-12.9-9.4l16-.1l4.8-15.1l5 15h16zm-46.3-34.3l5 15.2l-13-9.3l-12.9 9.4l4.8-15.2l-12.8-9.4l15.8-.1l5-15.1l5 15h16z"></svg:path></svg:g>`,
})
export class FlagSg4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
