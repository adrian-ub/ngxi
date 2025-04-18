import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookmarkMultipleVarIcon],svg[proicons-bookmark-multiple-var-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.421 8.45v11.884c0 .763.88 1.19 1.48.718l4.883-3.843a.914.914 0 0 1 1.13 0l4.884 3.843a.914.914 0 0 0 1.48-.718V8.45a3.2 3.2 0 0 0-3.2-3.2H7.621a3.2 3.2 0 0 0-3.2 3.2Z"></svg:path><svg:path stroke-linecap="round" d="M21.278 16.334V8.25a6 6 0 0 0-6-6H8.421"></svg:path></svg:g>`,
})
export class ProiconsBookmarkMultipleVarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
