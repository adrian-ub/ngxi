import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSo1x1Icon],svg[flag-so-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSo1x10"><svg:path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagSo1x10)" transform="translate(-128)scale(.72249)"><svg:path fill="#40a6ff" d="M0 0h1063v708.7H0z"></svg:path><svg:path fill="#fff" d="m643 527.6l-114.3-74l-113.6 74.8l42.3-121.5l-113.5-75l140.4-1l43.5-121.1l44.5 120.8l140.3.1l-112.9 75.7z"></svg:path></svg:g>`,
})
export class FlagSo1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
