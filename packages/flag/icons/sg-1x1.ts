import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSg1x1Icon],svg[flag-sg-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSg1x10"><svg:path fill-opacity=".7" d="M27.7 0h708.6v708.7H27.7z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagSg1x10)" transform="translate(-20)scale(.72249)"><svg:path fill="#fff" d="M0 0h1063v708.7H0z"></svg:path><svg:path fill="#df0000" d="M0 0h1063v354.3H0z"></svg:path><svg:path fill="#fff" d="M245.2 59.4a124.6 124.6 0 0 0 1.1 243.9a126.9 126.9 0 1 1-1.1-243.9"></svg:path><svg:path fill="#fff" d="m202 162.4l-18.9-13.8l23.5-.2l7.2-22.3l7.5 22.3h23.4l-18.8 14l7.2 22.3L214 171l-19 13.8zm26 76.9l-19-13.8l23.5-.2l7.3-22.3l7.4 22.2h23.5l-19 14l7.3 22.3l-19-13.6l-19 13.8zm86.3-.6l-19-13.8l23.4-.2l7.3-22.3l7.4 22.3H357l-18.9 14l7.3 22.3l-19.1-13.7l-19 13.8zm25.7-76.2l-19-13.8l23.5-.2l7.2-22.3l7.5 22.2h23.4l-18.8 14l7.2 22.3l-19.1-13.6l-19 13.8zM271.7 112l-19-13.8l23.5-.2l7.3-22.3l7.4 22.3h23.5l-19 14l7.3 22.2l-19-13.6l-19 13.8z"></svg:path></svg:g>`,
})
export class FlagSg1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
