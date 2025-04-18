import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZalandoIcon],svg[arcticons-zalando-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.368 5.765c9.867-2.32 30.508 11.19 32.038 17.726c1.482 6.332-22.66 21.338-31.713 18.701c-6.262-1.824-7.361-34.774-.325-36.428Z"></svg:path>`,
})
export class ArcticonsZalandoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
