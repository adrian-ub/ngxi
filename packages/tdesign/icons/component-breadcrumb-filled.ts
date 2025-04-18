import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentBreadcrumbFilledIcon],svg[tdesign-component-breadcrumb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5v11h7.914l5.5-5.5l-5.5-5.5zm12.586 1l4.5 4.5l-4.5 4.5L16 17.914L21.914 12L16 6.086z"></svg:path>`,
})
export class TdesignComponentBreadcrumbFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
