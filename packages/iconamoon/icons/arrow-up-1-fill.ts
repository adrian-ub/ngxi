import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonArrowUp1FillIcon],svg[iconamoon-arrow-up-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 13a1 1 0 0 0 .707-1.707l-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 13h6v6a1 1 0 1 0 2 0v-6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonArrowUp1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
