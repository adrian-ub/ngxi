import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextFootnoteIcon],svg[proicons-text-footnote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 17.248l1.44-3.384m0 0h5.188m-5.187 0l2.208-5.186a.412.412 0 0 1 .771 0l2.208 5.186m0 0l1.441 3.384m2.398-8.838v8.838m5.833-2.916a2.916 2.916 0 1 1-5.833 0a2.916 2.916 0 0 1 5.833 0m0-7.707l2.2-1.375v5.5"></svg:path>`,
})
export class ProiconsTextFootnoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
