import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffFillIcon],svg[iconamoon-bookmark-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.657 3a1 1 0 0 1 1-1H16a3 3 0 0 1 3 3v7.343a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H8.657a1 1 0 0 1-1-1m11.061 14.304l-.023-.023L6.72 5.304l-.023-.023l-1.989-1.988a1 1 0 0 0-1.414 1.414L5 6.414V21a1 1 0 0 0 1.447.894L12 19.118l5.553 2.776A1 1 0 0 0 19 21v-.586l.293.293a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBookmarkOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
