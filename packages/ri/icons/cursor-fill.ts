import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCursorFillIcon],svg[ri-cursor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.91 12.36L17 20.854l-2.818 1.026l-3.092-8.494l-4.172 3.156l1.49-14.909l10.726 10.463z"></svg:path>`,
})
export class RiCursorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
