import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShrinkScreenIcon],svg[carbon-shrink-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28H17a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h11a2.003 2.003 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2m-11-8v6h11.002L28 20zm-5-10v3.586L7.707 9.293l-1.414 1.414L10.586 15H7v2h7v-7z"></svg:path><svg:path fill="currentColor" d="M13 22H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v9h-2V7H4v13h9Z"></svg:path>`,
})
export class CarbonShrinkScreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
