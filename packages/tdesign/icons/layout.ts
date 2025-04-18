import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLayoutIcon],svg[tdesign-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v5h16V4zm16 7h-7v9h7zm-9 9v-9H4v9z"></svg:path>`,
})
export class TdesignLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
