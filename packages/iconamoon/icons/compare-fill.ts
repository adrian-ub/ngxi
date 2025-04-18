import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCompareFillIcon],svg[iconamoon-compare-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 2a1 1 0 1 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h5v1a1 1 0 0 0 2 0v-1a1 1 0 0 0 0-2V5a1 1 0 1 0 0-2zm4 1a1 1 0 1 0 0 2h1a1 1 0 0 1 1 1v1a1 1 0 1 0 2 0V6a3 3 0 0 0-3-3zm4 8a1 1 0 1 0-2 0v2a1 1 0 0 0 2 0zm0 6a1 1 0 1 0-2 0v1a1 1 0 0 1-1 1h-1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCompareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
