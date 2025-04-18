import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCrossIcon],svg[la-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v6H7v6h6v14h6V15h6V9h-6V3zm2 2h2v6h6v2h-6v14h-2V13H9v-2h6z"></svg:path>`,
})
export class LaCrossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
