import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentBreadcrumbIcon],svg[tdesign-component-breadcrumb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5v11h7.914l5.5-5.5l-5.5-5.5zm2 2h5.086l3.5 3.5l-3.5 3.5H4zm10.586-1l4.5 4.5l-4.5 4.5L16 17.914L21.914 12L16 6.086z"></svg:path>`,
})
export class TdesignComponentBreadcrumbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
