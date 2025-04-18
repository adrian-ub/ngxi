import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibYCombinatorIcon],svg[cib-y-combinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 2v28H2V2zM16.75 17.969l4.844-9.094H19.55l-2.863 5.688a38 38 0 0 0-.8 1.675l-.762-1.675L12.3 8.875h-2.188l4.794 8.988v5.906h1.844z"></svg:path>`,
})
export class CibYCombinatorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
