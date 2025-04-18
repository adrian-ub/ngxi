import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCodeReferenceIcon],svg[carbon-code-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm26-10l-6-6l-1.414 1.414L27.172 10l-4.586 4.586L24 16zm-16.08 7.484l4.15-15.483l1.932.517l-4.15 15.484zM4 10l6-6l1.414 1.414L6.828 10l4.586 4.586L10 16z"></svg:path>`,
})
export class CarbonCodeReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
