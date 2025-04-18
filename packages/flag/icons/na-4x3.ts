import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagNa4x3Icon],svg[flag-na-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagNa4x30"><svg:path fill-opacity=".7" d="M0 0h640v480H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagNa4x30)"><svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#3662a2" d="m-26.4.2l.8 345.6L512.5 0z"></svg:path><svg:path fill="#38a100" d="M666.4 479.6L665 120.3L122.3 479.8l544-.2z"></svg:path><svg:path fill="#c70000" d="m-26 371.8l.4 108.2l117.5-.1L665.4 95.4l-.7-94.1l-116-1L-26 371.7z"></svg:path><svg:path fill="#ffe700" d="m219.6 172l-21.8-13.2l-12.6 22.1l-12.2-22.2l-22 12.9l.6-25.4l-25.4.2l13.2-21.8l-22.1-12.5l22.2-12.3l-12.8-22l25.4.6l-.1-25.5l21.7 13.2L186.3 44l12.2 22.2l22-12.9l-.6 25.4l25.4-.2l-13.2 21.8l22.1 12.5l-22.2 12.3l12.8 22l-25.4-.6z"></svg:path><svg:path fill="#3662a2" d="M232.4 112.4c0 25.6-20.9 46.3-46.6 46.3s-46.6-20.7-46.6-46.3s20.8-46.2 46.6-46.2s46.6 20.7 46.6 46.2"></svg:path><svg:path fill="#ffe700" d="M222.3 112.4a36.5 36.5 0 1 1-73 0a36.5 36.5 0 0 1 73 0"></svg:path></svg:g>`,
})
export class FlagNa4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
