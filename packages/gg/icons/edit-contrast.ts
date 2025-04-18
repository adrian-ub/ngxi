import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditContrastIcon],svg[gg-edit-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 18a5.98 5.98 0 0 1-4-1.528A6 6 0 0 1 6 12c0-1.777.773-3.374 2-4.472A5.98 5.98 0 0 1 12 6z"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
