import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEBikeFillIcon],svg[ri-e-bike-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6.937A7 7 0 0 1 19 13v8h-4.17a3.001 3.001 0 0 1-5.66 0H5v-8a7 7 0 0 1 3.5-6.063A4 4 0 0 1 8.125 6H5V4h3.126a4.002 4.002 0 0 1 7.748 0H19v2h-3.126q-.13.497-.373.937M12 14a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m0-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiEBikeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
