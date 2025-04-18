import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggServerlessIcon],svg[gg-serverless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.787 6H5v3h5.695zm-1.82 5H5v3h3.875zm1.037 3l1.092-3H20v3zm-2.856 2H5v3h2.056zm1.036 3l1.092-3H20v3zm3.64-10l1.092-3H20v3z"></svg:path>`,
})
export class GgServerlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
