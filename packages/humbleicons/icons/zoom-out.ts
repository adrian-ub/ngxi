import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsZoomOutIcon],svg[humbleicons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M16 10a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"></svg:path><svg:path stroke-linecap="round" d="m20 20l-5-5m-7.5-5h5"></svg:path></svg:g>`,
})
export class HumbleiconsZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
