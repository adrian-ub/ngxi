import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMediaCodeIcon],svg[dashicons-media-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4 4v12H4V2zM9 13l-2-2l2-2l-1-1l-3 3l3 3zm3 1l3-3l-3-3l-1 1l2 2l-2 2z"></svg:path>`,
})
export class DashiconsMediaCodeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
