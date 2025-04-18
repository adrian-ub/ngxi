import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTemplateIcon],svg[tdesign-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h16V4zm16 6h-9v10h9zM9 20V10H4v10z"></svg:path>`,
})
export class TdesignTemplateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
