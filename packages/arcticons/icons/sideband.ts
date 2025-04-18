import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSidebandIcon],svg[arcticons-sideband-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.358 18.206a5.97 5.97 0 0 1 7.257 4.332a5.97 5.97 0 0 1-4.333 7.256a5.966 5.966 0 0 1-7.245-4.332c-.806-3.203 1.129-6.45 4.321-7.256m6.719 2.634l6.386-4.214m5.396 12.05l-.032-9.31m-1.634-11.91a5.966 5.966 0 0 1 7.245 4.332c.806 3.203-1.129 6.45-4.321 7.256a5.97 5.97 0 0 1-7.257-4.332a5.97 5.97 0 0 1 4.333-7.256m0 21.5a5.966 5.966 0 0 1 7.245 4.332c.806 3.204-1.129 6.45-4.321 7.256a5.97 5.97 0 0 1-7.257-4.332a5.97 5.97 0 0 1 4.333-7.256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.879 0 21.5 9.621 21.5 21.5S35.879 45.5 24 45.5S2.5 35.879 2.5 24S12.121 2.5 24 2.5"></svg:path>`,
})
export class ArcticonsSidebandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
