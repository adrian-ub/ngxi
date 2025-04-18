import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggToolbarTopIcon],svg[gg-toolbar-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 11H6V9h12z"></svg:path><svg:path fill-rule="evenodd" d="M2 16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3zm3 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToolbarTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
