import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEgldIcon],svg[token-egld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.125 12L21 7.785L19.648 5.25l-7.354 2.756a.8.8 0 0 1-.588 0L4.352 5.25L3 7.793L10.875 12L3 16.207l1.352 2.543l7.354-2.756a.8.8 0 0 1 .588 0l7.354 2.756L21 16.193z"></svg:path>`,
})
export class TokenEgldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
