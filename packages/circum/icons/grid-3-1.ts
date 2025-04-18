import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumGrid31Icon],svg[circum-grid-3-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.434 20.936H5.563a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 2.5-2.5h5.871a2.5 2.5 0 0 1 2.5 2.5v2.933a2.5 2.5 0 0 1-2.5 2.503M5.563 14a1.5 1.5 0 0 0-1.5 1.5v2.933a1.5 1.5 0 0 0 1.5 1.5h5.871a1.5 1.5 0 0 0 1.5-1.5V15.5a1.5 1.5 0 0 0-1.5-1.5Zm12.872 6.936a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 5 0v2.934a2.5 2.5 0 0 1-2.5 2.502m0-6.934a1.5 1.5 0 0 0-1.5 1.5v2.934a1.5 1.5 0 0 0 3 0V15.5a1.5 1.5 0 0 0-1.5-1.5Zm0-3.002H5.563a2.5 2.5 0 0 1-2.5-2.5V5.564a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5V8.5a2.5 2.5 0 0 1-2.5 2.5M5.563 4.064a1.5 1.5 0 0 0-1.5 1.5V8.5a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V5.564a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class CircumGrid31Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
