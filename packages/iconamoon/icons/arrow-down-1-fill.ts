import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowDown1FillIcon],svg[iconamoon-arrow-down-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 11a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 19 11h-6V5a1 1 0 1 0-2 0v6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowDown1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
