import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGwentIcon],svg[arcticons-gwent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.719 40.148H42.28M5.719 37.71H42.28M4.5 32.706l2.438 2.567h7.007v-4.875h-2.742v-4.875L12.727 24L4.5 15.773Zm39 0l-2.437 2.568h-7.008v-4.875h2.742v-4.875L35.273 24l8.227-8.227Zm-27.422 2.567h15.844v-18.89L24 7.852l-7.922 8.53Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.602 26.133L24 19.734l6.398 6.399L24 32.53Z"></svg:path>`,
})
export class ArcticonsGwentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
