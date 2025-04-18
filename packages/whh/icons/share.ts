import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhShareIcon],svg[whh-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h448v128h-384q-27 0-45.5 19t-18.5 45v640q0 27 18.5 45.5t45.5 18.5h640q27 0 45.5-18.5t18.5-45.5V530l128-107v473q0 53-37.5 90.5t-90.5 37.5m-200-457q-13 13-34.5 8t-21.5-19V384q-224 0-384 320v-64q0-116 30-204t83-140t121-78t150-26V22q0-14 21.5-19.5t34.5 7.5l314 246q13 13 13 32t-13 33z"></svg:path>`,
})
export class WhhShareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
