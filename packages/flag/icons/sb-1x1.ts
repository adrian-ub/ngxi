import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSb1x1Icon],svg[flag-sb-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSb1x10"><svg:path fill-opacity=".7" d="M0 0h496v496H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagSb1x10)" transform="scale(1.0321)"><svg:path fill="#0000d6" d="M0 491.4L956.7 0H0z"></svg:path><svg:path fill="#006000" d="M992.1 0L26.3 496h965.8z"></svg:path><svg:path fill="#fc0" d="M992.2 0H939L0 470.3V496h53.1l939-469.4V0z"></svg:path><svg:path fill="#fff" d="m39 96.1l11.6-33.3l-30.2-20.6h37.3L69.2 8.8l11.5 33.4h37.2L87.8 62.8L99.3 96L69.2 75.5zm185.2 0l11.6-33.3l-30.2-20.6h37.3l11.5-33.4l11.5 33.4H303l-30 20.6L284.5 96l-30.1-20.6zm0 140l11.6-33.3l-30.2-20.6h37.3l11.5-33.4l11.5 33.4H303l-30 20.6l11.6 33.3l-30.1-20.6zm-92-69.2l11.5-33.3l-30.1-20.6h37.2l11.5-33.3l11.5 33.3h37.3l-30.2 20.6l11.5 33.3l-30-20.6zM39 236.1l11.6-33.3l-30.2-20.6h37.3l11.5-33.4l11.5 33.4h37.2l-30.1 20.6L99.3 236l-30.1-20.6z"></svg:path></svg:g>`,
})
export class FlagSb1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
