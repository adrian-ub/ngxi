import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZtelinkIcon],svg[arcticons-ztelink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.144 13.303L15.697 43.5h15.565h-19.21L23.5 13.303h-8.824M27.144 4.5a8.804 8.804 0 0 1 8.804 8.804h0m-8.804-4.402a4.4 4.4 0 0 1 4.402 4.402h0"></svg:path>`,
})
export class ArcticonsZtelinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
