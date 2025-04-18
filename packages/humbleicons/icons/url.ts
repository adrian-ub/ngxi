import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsUrlIcon],svg[humbleicons-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="3" d="M5 10h.01M5 16h.01"></svg:path><svg:path stroke-width="2" d="m10 17l4-10m2 10l4-10"></svg:path></svg:g>`,
})
export class HumbleiconsUrlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
