import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers41Icon],svg[tdesign-numbers-4-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.989 4H15.5v10h2v2h-2v4h-2v-4H6v-2.323zm.511 10V6.708L8.234 14z"></svg:path>`,
})
export class TdesignNumbers41Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
