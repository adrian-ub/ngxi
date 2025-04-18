import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonBoxFillIcon],svg[iconamoon-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a1 1 0 0 0-.707.293l-4 4A1 1 0 0 0 3 7.954m0 .054V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.008l-.001-.054a1 1 0 0 0-.292-.661l-4-4A1 1 0 0 0 16 3H8m9.586 4l-2-2H8.414l-2 2zM7 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
