import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggToggleOnIcon],svg[gg-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path fill-rule="evenodd" d="M24 12a7 7 0 0 0-7-7H7a7 7 0 0 0 0 14h10a7 7 0 0 0 7-7m-7-5H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
