import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmileUpsideIcon],svg[gg-smile-upside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 11h-2a2 2 0 1 0-4 0H8a4 4 0 1 1 8 0m-6 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0m5-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-2 0a8 8 0 1 0-16 0a8 8 0 0 0 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileUpsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
