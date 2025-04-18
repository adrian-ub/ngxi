import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDisplaySpacingIcon],svg[gg-display-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 21V3h2v18z"></svg:path><svg:path fill-rule="evenodd" d="M7 3h10v18H7zm2 2v14h6V5z" clip-rule="evenodd"></svg:path><svg:path d="M19 3v18h2V3z"></svg:path></svg:g>`,
})
export class GgDisplaySpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
