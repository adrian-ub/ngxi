import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonFlexIcon],svg[arcticons-amazon-flex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.156L18.344 24L5.5 36.844M11.156 5.5L24 18.344L36.844 5.5M42.5 36.844L29.656 24L42.5 11.156M36.844 42.5L24 29.656L11.156 42.5"></svg:path>`,
})
export class ArcticonsAmazonFlexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
