import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsElement2Icon],svg[arcticons-element-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.053 32.736V42.5L24 33.1L7.947 42.5v-9.764L24 23.336zm0-17.837v9.764L24 15.264l-16.053 9.4v-9.765L24 5.5z"></svg:path>`,
})
export class ArcticonsElement2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
