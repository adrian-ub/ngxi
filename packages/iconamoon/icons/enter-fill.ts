import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonEnterFillIcon],svg[iconamoon-enter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3a1 1 0 0 0 0 2h9v13a1 1 0 0 1-1 1H9a1 1 0 0 0 0 2h8a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1zm3.707 5.293A1 1 0 0 0 11 9v2H5a1 1 0 0 0 0 2h6v2a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonEnterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
