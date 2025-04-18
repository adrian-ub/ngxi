import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowDownIcon],svg[gg-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.672h2V16.5l3.243-3.243l1.414 1.415L12 20.328l-5.657-5.656l1.414-1.415L11 16.5z"></svg:path>`,
})
export class GgArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
