import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCollapseAllIcon],svg[material-symbols-collapse-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 22L6 20.6l6-6l6 6l-1.4 1.4l-4.6-4.6zM12 9.4l-6-6L7.4 2L12 6.6L16.6 2L18 3.4z"></svg:path>`,
})
export class MaterialSymbolsCollapseAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
