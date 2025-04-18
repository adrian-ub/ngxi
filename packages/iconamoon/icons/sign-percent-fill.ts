import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignPercentFillIcon],svg[iconamoon-sign-percent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.894 4.447a1 1 0 1 0-1.788-.894l-8 16a1 1 0 1 0 1.788.894zM8 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m11 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonSignPercentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
