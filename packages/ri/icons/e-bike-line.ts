import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEBikeLineIcon],svg[ri-e-bike-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6.937A7 7 0 0 1 19 13v8h-4.17a3.001 3.001 0 0 1-5.66 0H5v-8a7 7 0 0 1 3.5-6.063A4 4 0 0 1 8.125 6H5V4h3.126a4.002 4.002 0 0 1 7.748 0H19v2h-3.126q-.13.497-.373.937m-1.453 1.5c-.6.358-1.3.563-2.048.563a4 4 0 0 1-2.047-.563A5 5 0 0 0 7 13v6h2v-4a3 3 0 1 1 6 0v4h2v-6a5 5 0 0 0-2.953-4.563M12 14a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m0-7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiEBikeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
