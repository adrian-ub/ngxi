import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaTvIcon],svg[gala-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 191.99999,208 H 64 C 46.272,208 32,193.728 32,176 V 96 C 32,78.272 46.272,64 64,64 h 128 c 17.728,0 32,14.272 32,32 v 80 c 0,17.728 -14.272,32 -32,32"></svg:path><svg:path d="m 96,240 h 64"></svg:path><svg:path d="M 128,64 176,16"></svg:path><svg:path d="M 128,64 80,16"></svg:path></svg:g>`,
})
export class GalaTvIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
