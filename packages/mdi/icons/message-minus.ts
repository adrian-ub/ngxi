import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageMinusIcon],svg[mdi-message-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2H6l-4 4V4a2 2 0 0 1 2-2zM8 9v2h8V9z"></svg:path>`,
})
export class MdiMessageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
