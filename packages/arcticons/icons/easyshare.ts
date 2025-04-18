import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEasyshareIcon],svg[arcticons-easyshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.806 24c0 4.186-3.426 7.611-7.612 7.611h-9.083C6.925 31.611 3.5 28.186 3.5 24h0c0-4.186 3.425-7.611 7.611-7.611h9.083c1.384 0 2.685.374 3.807 1.027"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.194 24c0-4.186 3.426-7.611 7.612-7.611h9.083c4.186 0 7.611 3.425 7.611 7.611h0c0 4.186-3.425 7.611-7.611 7.611h-9.083a7.55 7.55 0 0 1-3.807-1.027"></svg:path>`,
})
export class ArcticonsEasyshareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
