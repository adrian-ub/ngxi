import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRneEnDirectoIcon],svg[arcticons-rne-en-directo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 20.648a4.327 4.327 0 0 1 4.315-4.315h0m-4.315 0v11.434m15.177 0v-7.12a4.327 4.327 0 0 0-4.315-4.314h0a4.327 4.327 0 0 0-4.315 4.315v7.12m0-7.12v-4.315m21.585 12.441c-.868 1.736-2.893 2.893-4.918 2.893h0c-3.183 0-5.787-2.604-5.787-5.786v-3.762c0-3.182 2.604-5.786 5.786-5.786h0c3.183 0 5.787 2.604 5.787 5.786v2.026H26.927"></svg:path>`,
})
export class ArcticonsRneEnDirectoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
