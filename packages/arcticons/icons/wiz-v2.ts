import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWizV2Icon],svg[arcticons-wiz-v2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.96 43.5l-7.032-.13m6.967-3.394l-7.296-.13c-2.391-.044-2.44-3.748 0-3.721l5.85.065c1.404.016 2.13-.745 2.214-3.459c.204-6.572 2.712-9.615 4.818-14.032h-19.87C10.097.722 34.893.092 34.73 15.239"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.802 22.054c2.515 3.306 3.055 7.136 2.957 11.134"></svg:path>`,
})
export class ArcticonsWizV2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
