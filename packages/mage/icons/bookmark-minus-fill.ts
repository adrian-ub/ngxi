import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkMinusFillIcon],svg[mage-bookmark-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.585 3.194a4.4 4.4 0 0 0-3.19-1.2h-6.73a4.49 4.49 0 0 0-4.65 4.34v13.36c.03.447.178.879.43 1.25c.254.36.6.646 1 .83a2.4 2.4 0 0 0 1 .22h.3a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53c.352.278.774.454 1.22.51c.443.049.892-.02 1.3-.2a2.47 2.47 0 0 0 1.45-2.13V6.314a4.4 4.4 0 0 0-1.4-3.12m-3.57 7.55h-6a.75.75 0 1 1 0-1.5h6a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageBookmarkMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
