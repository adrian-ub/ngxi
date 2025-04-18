import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBa1x1Icon],svg[flag-ba-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBa1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagBa1x10)"><svg:path fill="#009" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fc0" d="m77 0l437 437V0z"></svg:path><svg:path fill="#FFF" d="m461.4 470.4l-26.1-19.1l-26.9 19l10.2-31.2l-26.4-19.2h32.7l10.2-31l10 31.1l32.8.1l-26.2 19.4zm76.7 10.4h-32.7l-10-31.2l-10.2 31.1h-32.8l26.4 19.2l-10.1 31.2l26.8-19l26.2 19l-9.8-30.9zM391.8 379.6l26.2-19.4h-32.7L375.2 329L365 360h-32.7l26.4 19.3l-10.1 31.1l26.8-19l26.1 19.1zm-60.3-60.4l26.2-19.4l-32.8-.1l-10-31.2l-10.2 31.2l-32.7-.1l26.4 19.2l-10.2 31.2l26.9-19l26.1 19.1zm-59.7-59.7l26.2-19.4h-32.7l-10.1-31.2L245 240h-32.7l26.4 19.2l-10.1 31.2l26.8-19l26.1 19zm-60.4-60.3l26.2-19.3l-32.8-.1l-10-31.2l-10.2 31.2l-32.7-.1l26.4 19.2l-10.2 31.2l26.9-19l26.1 19l-9.7-30.8zm-59.7-59.9L178 120l-32.7-.1l-10-31.2l-10.3 31.1H92.2l26.4 19.2l-10.1 31.2l26.8-19l26.1 19zm-60-60L118 60l-32.7-.1l-10-31.2L65 59.8H32.2L58.6 79l-10.1 31.2l26.8-19l26.2 19zm-60-60L58 0L25.2-.1l-10-31.2L4.8-.2h-32.7L-1.4 19l-10.1 31.2l26.8-19l26.1 19z"></svg:path></svg:g>`,
})
export class FlagBa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
