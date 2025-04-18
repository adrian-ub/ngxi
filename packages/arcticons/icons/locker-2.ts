import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLocker2Icon],svg[arcticons-locker-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.962" cy="24" r="4.956" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.918 24h13.536m-2.772 2.349V24m-6.605 2.5v13.542a3.46 3.46 0 0 0 3.458 3.458h17a3.46 3.46 0 0 0 3.459-3.458V7.958A3.46 3.46 0 0 0 39.535 4.5h-17a3.46 3.46 0 0 0-3.458 3.458V21.5m-.001-12.005h23.918m-23.918 29.01h23.918"></svg:path>`,
})
export class ArcticonsLocker2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
