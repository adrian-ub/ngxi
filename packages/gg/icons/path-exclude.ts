import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathExcludeIcon],svg[gg-path-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h10v4H9v6H5zm4 10v4h10V9h-4v6z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathExcludeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
