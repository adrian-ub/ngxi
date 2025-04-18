import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentDividerHorizontalIcon],svg[tdesign-component-divider-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v20h-2V2zM2 5h7v14H2zm2 2v10h3V7zm11-2h7v14h-7zm2 2v10h3V7z"></svg:path>`,
})
export class TdesignComponentDividerHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
