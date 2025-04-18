import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibFlipboardIcon],svg[cib-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v32h32V0zm25.599 12.803h-6.401v6.395h-6.395v6.401H6.402V6.402h19.197z"></svg:path>`,
})
export class CibFlipboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
