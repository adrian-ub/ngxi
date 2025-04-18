import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagDj1x1Icon],svg[flag-dj-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagDj1x10"><svg:path fill-opacity=".7" d="M55.4 0H764v708.7H55.4z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagDj1x10)" transform="translate(-40)scale(.722)"><svg:path fill="#0c0" d="M0 0h1063v708.7H0z"></svg:path><svg:path fill="#69f" d="M0 0h1063v354.3H0z"></svg:path><svg:path fill="#fffefe" d="m0 0l529.7 353.9L0 707.3z"></svg:path><svg:path fill="red" d="m221.2 404.3l-42.7-30.8l-42.4 31l15.8-50.3l-42.4-31.2l52.4-.4l16.3-50.2l16.6 50l52.4.2l-42.1 31.4z"></svg:path></svg:g>`,
})
export class FlagDj1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
