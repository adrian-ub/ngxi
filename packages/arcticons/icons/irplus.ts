import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrplusIcon],svg[arcticons-irplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.8 8.5H16m-3.2 4.8H16m-3.2 4.8H16m3.2-9.6h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2m3.2-9.6h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M32 8.5h3.2M32 13.3h3.2M32 18.1h3.2M12.8 25H16m-3.2 4.9H16m-3.2 4.8H16m-3.2 4.8H16M19.2 25h3.2m-3.2 4.9h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M25.6 25h3.2m-3.2 4.9h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M32 25h3.2M32 29.9h3.2M32 34.7h3.2M32 39.5h3.2"></svg:path><svg:rect width="31" height="39" x="8.5" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsIrplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
