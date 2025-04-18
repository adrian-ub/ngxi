import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber8FillIcon],svg[iconamoon-number-8-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0m4.906 2.75a4 4 0 1 0-5.811 0a6 6 0 1 0 5.811 0M12 11a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber8FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
