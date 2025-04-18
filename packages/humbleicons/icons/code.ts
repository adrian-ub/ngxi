import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCodeIcon],svg[humbleicons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="m7 8l-4 4l4 4"></svg:path><svg:path d="m10.5 18l3-12"></svg:path><svg:path stroke-linejoin="round" d="m17 8l4 4l-4 4"></svg:path></svg:g>`,
})
export class HumbleiconsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
