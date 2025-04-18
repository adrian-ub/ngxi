import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGpsFixLightIcon],svg[ph-gps-fix-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 122h-26.23A86.12 86.12 0 0 0 134 42.23V16a6 6 0 0 0-12 0v26.23A86.12 86.12 0 0 0 42.23 122H16a6 6 0 0 0 0 12h26.23A86.12 86.12 0 0 0 122 213.77V240a6 6 0 0 0 12 0v-26.23A86.12 86.12 0 0 0 213.77 134H240a6 6 0 0 0 0-12m-112 80a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74m0-112a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhGpsFixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
