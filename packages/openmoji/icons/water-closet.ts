import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWaterClosetIcon],svg[openmoji-water-closet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M50.085 41.732a4.9 4.9 0 0 1-3.264 1.238h0a4.92 4.92 0 0 1-4.92-4.92v-3.937v3.936v-3.936a4.92 4.92 0 0 1 4.92-4.92h0c1.253 0 2.396.467 3.264 1.238m-12.424-1.239L33.724 42.97l-3.936-13.778l-3.937 13.778l-3.936-13.778"></svg:path><svg:path fill="#61B2E4" d="M60 61H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1v48a1 1 0 0 1-1 1"></svg:path><svg:path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M50.085 41.732a4.9 4.9 0 0 1-3.264 1.238h0a4.92 4.92 0 0 1-4.92-4.92v-3.937v3.936v-3.936a4.92 4.92 0 0 1 4.92-4.92h0c1.253 0 2.396.467 3.264 1.238m-12.424-1.239L33.724 42.97l-3.936-13.778l-3.937 13.778l-3.936-13.778"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M60 61H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1v48a1 1 0 0 1-1 1"></svg:path>`,
})
export class OpenmojiWaterClosetIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
