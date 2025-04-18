import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMailIcon],svg[tdesign-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v1.83l9 4.55l9-4.55V5zm18 4.07l-9 4.55l-9-4.55V19h18z"></svg:path>`,
})
export class TdesignMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
