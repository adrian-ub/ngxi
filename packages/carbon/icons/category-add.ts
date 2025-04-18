import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCategoryAddIcon],svg[carbon-category-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 6l-1.41 1.41L17.17 11l-3.58 3.59L15 16l5-5z"></svg:path><svg:path fill="currentColor" d="M28 24H17v-4h6a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6v4H4a2 2 0 0 0-2 2v4h2v-4h11v4h2v-4h11v4h2v-4a2 2 0 0 0-2-2M9 4h14l.002 14H9Z"></svg:path>`,
})
export class CarbonCategoryAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
