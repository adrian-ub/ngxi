import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonTypeFillIcon],svg[iconamoon-type-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-4v14h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonTypeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
