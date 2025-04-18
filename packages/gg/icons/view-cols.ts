import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggViewColsIcon],svg[gg-view-cols-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm14-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm-2 0h-4v10h4zM8 17V7H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewColsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
