import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLinuxfoundationIcon],svg[simple-icons-linuxfoundation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.8 19.2h9.6V24H0V9.6h4.8zM0 0v7.2h4.8V4.822h14.4V19.2h-2.4V24H24V0z"></svg:path>`,
})
export class SimpleIconsLinuxfoundationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
