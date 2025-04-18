import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCu1x1Icon],svg[flag-cu-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCu1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagCu1x10)"><svg:path fill="#002a8f" d="M-32 0h768v512H-32z"></svg:path><svg:path fill="#fff" d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"></svg:path><svg:path fill="#cb1515" d="m-32 0l440.7 255.7L-32 511z"></svg:path><svg:path fill="#fff" d="M161.8 325.5L114.3 290l-47.2 35.8l17.6-58.1l-47.2-36l58.3-.4l18.1-58l18.5 57.8l58.3.1l-46.9 36.3z"></svg:path></svg:g>`,
})
export class FlagCu1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
