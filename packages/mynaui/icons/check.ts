import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckIcon],svg[mynaui-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 13.626l1.606 1.722c.886.95 1.329 1.424 1.825 1.574c.436.131.9.096 1.315-.1c.473-.224.852-.761 1.612-1.836L18 7"></svg:path>`,
})
export class MynauiCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
