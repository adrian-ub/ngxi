import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLa1x1Icon],svg[flag-la-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagLa1x10"><svg:path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagLa1x10)" transform="translate(-128)scale(.72249)"><svg:path fill="#ce1126" d="M0 0h1063v708.7H0z"></svg:path><svg:path fill="#002868" d="M0 176h1063v356.6H0z"></svg:path><svg:path fill="#fff" d="M684.2 354.3a152.7 152.7 0 1 1-305.4 0a152.7 152.7 0 0 1 305.4 0"></svg:path></svg:g>`,
})
export class FlagLa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
