import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAppleAppStoreIcon],svg[grommet-icons-apple-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997zM4 18.5c.5-1 3.5-2 2.5-.28A853 853 0 0 1 4.867 21a1 1 0 0 1-1.734-.998zM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998zM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998z"></svg:path>`,
})
export class GrommetIconsAppleAppStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
