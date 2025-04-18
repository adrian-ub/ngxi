import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKp1x1Icon],svg[flag-kp-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKp1x10"><svg:path fill-opacity=".7" d="M92.2 7.8h593.6v485.5H92.2z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagKp1x10)" transform="matrix(.86254 0 0 1.0546 -79.5 -8.3)"><svg:path fill="#fff" stroke="#000" stroke-width="1.1" d="M991.8 492.9H4.2V8.4h987.6z"></svg:path><svg:path fill="#3e5698" d="M991.8 405.2H4.2V493h987.6z"></svg:path><svg:path fill="#c60000" d="M991.8 384.9H4.2V116.4h987.6z"></svg:path><svg:path fill="#3e5698" d="M991.8 8.4H4.2V96h987.6z"></svg:path><svg:path fill="#fff" d="M473 250.7c0 60.1-61.5 108.9-137.4 108.9S198 310.8 198 250.6c0-60.1 61.6-108.9 137.6-108.9S473 190.5 473 250.7"></svg:path><svg:path fill="#c40000" d="m402.9 326.8l-66.1-38.6l-67.1 39l26.3-62.8l-66.1-38.5l82.4-.3l26.2-63l24.5 62.8l82.4-.4l-67.2 39z"></svg:path></svg:g>`,
})
export class FlagKp1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
