import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsArrowsIcon],svg[humbleicons-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M12 4v6m0 4v6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.5 6.5L12 4l2.5 2.5m-5 11L12 20l2.5-2.5m-8-8L4 12l2.5 2.5m11-5L20 12l-2.5 2.5M5.5 12h13"></svg:path></svg:g>`,
})
export class HumbleiconsArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
