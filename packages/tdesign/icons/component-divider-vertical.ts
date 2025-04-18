import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentDividerVerticalIcon],svg[tdesign-component-divider-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14v7H5zm2 2v3h10V4zm-5 7h20v2H2zm3 4h14v7H5zm2 2v3h10v-3z"></svg:path>`,
})
export class TdesignComponentDividerVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
