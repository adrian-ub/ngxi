import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWalgreensIcon],svg[arcticons-walgreens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.5c4.42-4.877 11.095.884 14.935-3.505c-4.053 5.883-15.522 19.377-7.223 22.434c9.268 3.414 24.536-15.911 19.263-19.142c-5.13-3.143-15.453 18.532-4.785 20.026c9.494 1.329 19.355-18.502 16.215-24.69"></svg:path>`,
})
export class ArcticonsWalgreensIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
