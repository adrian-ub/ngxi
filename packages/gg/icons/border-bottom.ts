import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderBottomIcon],svg[gg-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M8 8h8v7h3V5H5v10h3z"></svg:path><svg:path d="M5 17h14v3H5z"></svg:path></svg:g>`,
})
export class GgBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
