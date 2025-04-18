import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoVueIcon],svg[carbon-logo-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.9 3.9L16 19.4L7.1 3.9H2l14 24.3L30 3.9z"></svg:path><svg:path fill="currentColor" d="m16 9.5l-3.2-5.6H8.1L16 17.5l7.9-13.6h-4.6z"></svg:path>`,
})
export class CarbonLogoVueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
