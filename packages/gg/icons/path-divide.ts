import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathDivideIcon],svg[gg-path-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5h10v4H9v6H5z"></svg:path><svg:path d="M9 15v4h10V9h-4v6z"></svg:path><svg:path d="M10 10h4v4h-4z"></svg:path></svg:g>`,
})
export class GgPathDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
