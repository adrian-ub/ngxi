import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAreaIcon],svg[token-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L7.737 9.632h2.131L12 6.06l2.132 3.572h2.131zm0 18l-4.263-6.632h2.131L12 17.94l2.132-3.572h2.131zm-4.974-9.947l-1.658 1.895h13.264l-1.658-1.895z"></svg:path>`,
})
export class TokenAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
