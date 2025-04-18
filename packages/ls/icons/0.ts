import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ls0Icon],svg[ls-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247 0c205 0 255 224 255 386s-50 386-255 386S0 546 0 386S41 0 247 0m3 706c157 0 183-201 183-319c0-117-26-318-183-318C88 69 70 269 70 387s18 319 180 319"></svg:path>`,
})
export class Ls0Icon {
  readonly viewBox = input("0 0 502 772")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
