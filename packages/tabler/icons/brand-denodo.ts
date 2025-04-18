import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDenodoIcon],svg[tabler-brand-denodo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 11h2v2h-2zm-7.366 4.634l1.732-1l1 1.732l-1.732 1zM11 19h2v2h-2zm7.634-4.366l1.732 1l-1 1.732l-1.732-1zm-1-7l1.732-1l1 1.732l-1.732 1zM11 3h2v2h-2zM3.634 8.366l1-1.732l1.732 1l-1 1.732z"></svg:path>`,
})
export class TablerBrandDenodoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
