import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCodeIcon],svg[bx-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.293 6.293L2.586 12l5.707 5.707l1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707l-1.414 1.414L18.586 12l-4.293 4.293z"></svg:path>`,
})
export class BxCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
