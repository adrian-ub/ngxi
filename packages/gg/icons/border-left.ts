import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderLeftIcon],svg[gg-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M16 8v8H9v3h10V5H9v3z"></svg:path><svg:path d="M7 5v14H4V5z"></svg:path></svg:g>`,
})
export class GgBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
