import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsScrollTextIcon],svg[majesticons-scroll-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8H9m2 4H9"></svg:path><svg:path fill="currentColor" d="M3 16h8c0 1.333.8 4 4 4a3 3 0 0 0 3-3V4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v7a3 3 0 0 1-3 3H5a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 20c-3.2 0-4-2.667-4-4H3v2a2 2 0 0 0 2 2zm0 0a3 3 0 0 0 3-3v-7m0-6H7a2 2 0 0 0-2 2v9.5M18 4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1m0-6v6"></svg:path></svg:g>`,
})
export class MajesticonsScrollTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
