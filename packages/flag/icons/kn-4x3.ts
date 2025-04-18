import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKn4x3Icon],svg[flag-kn-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKn4x30"><svg:path fill-opacity=".7" d="M-80.1 0h682.7v512H-80.1z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagKn4x30)" transform="translate(75.1)scale(.9375)"><svg:path fill="#ffe900" d="M-107.8.2h737.6v511.3h-737.6z"></svg:path><svg:path fill="#35a100" d="m-108.2.2l.8 368.6L466.6 0z"></svg:path><svg:path fill="#c70000" d="m630.7 511.5l-1.4-383.2l-579 383.5z"></svg:path><svg:path fill="#000001" d="m-107.9 396.6l.5 115.4l125.3-.2l611.7-410.1L629 1.4L505.2.2z"></svg:path><svg:path fill="#fff" d="m380.4 156.6l-9.8-42.2l33.3 27l38-24.6l-17.4 41.3l33.4 27l-44.2-1.5l-17.3 41.3l-9.9-42.2l-44.1-1.5zm-275.2 179l-9.9-42.3l33.3 27l38-24.6l-17.4 41.3l33.4 27l-44.1-1.5l-17.4 41.3l-9.8-42.2l-44.1-1.5z"></svg:path></svg:g>`,
})
export class FlagKn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
