import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCornerLeftUpIcon],svg[humbleicons-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M19 20h-6.5a3 3 0 0 1-3-3V5"></svg:path><svg:path d="M6 7.5L9.5 4L13 7.5"></svg:path></svg:g>`,
})
export class HumbleiconsCornerLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
