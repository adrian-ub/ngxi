import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCornerLeftDownIcon],svg[humbleicons-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M19 4h-6.5a3 3 0 0 0-3 3v12"></svg:path><svg:path d="M6 16.5L9.5 20l3.5-3.5"></svg:path></svg:g>`,
})
export class HumbleiconsCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
