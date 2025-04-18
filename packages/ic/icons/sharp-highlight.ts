import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHighlightIcon],svg[ic-sharp-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.88l1.41-1.41l2.12 2.12L5.62 8zm13.46.71l2.12-2.12l1.41 1.41L18.38 8z"></svg:path>`,
})
export class IcSharpHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
