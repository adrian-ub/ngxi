import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSb4x3Icon],svg[flag-sb-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSb4x30"><svg:path fill-opacity=".7" d="M0 0h682.7v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagSb4x30)" transform="scale(.9375)"><svg:path fill="#0000d6" d="M0 507.2L987.4 0H0z"></svg:path><svg:path fill="#006000" d="M1024 0L27.2 512H1024z"></svg:path><svg:path fill="#fc0" d="M1024 0h-54.9L0 485.4V512h54.9L1024 27.6z"></svg:path><svg:path fill="#fff" d="m71.4 9.1l11.8 34.5h38.5L90.6 64.7l11.9 34.4L71.4 78L40.3 99.2l11.9-34.4l-31.1-21.3h38.4zm191.1 0l11.9 34.5h38.5l-31.2 21.2l12 34.4L262.4 78l-31 21.3l11.9-34.4l-31.2-21.3h38.5zm0 144.5l11.9 34.5h38.5l-31.2 21.2l12 34.4l-31.2-21.3l-31 21.3l11.9-34.4l-31.2-21.3h38.5zm-95-71.4l11.9 34.4h38.4l-31 21.3l11.8 34.4l-31-21.3l-31.2 21.3l12-34.4l-31.2-21.3h38.5zm-96.1 71.4l11.8 34.5h38.5l-31.1 21.2l11.9 34.4l-31.1-21.3l-31.1 21.3l12-34.4L21 188h38.4z"></svg:path></svg:g>`,
})
export class FlagSb4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
