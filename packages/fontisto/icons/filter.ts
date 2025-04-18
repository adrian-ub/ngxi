import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFilterIcon],svg[fontisto-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.2 24l6.4-4v-6.4L28.8 0H0l11.2 13.6z"></svg:path>`,
})
export class FontistoFilterIcon {
  readonly viewBox = input("0 0 29 24")
  readonly width = input("1.21em")
  readonly height = input("1em")
}
