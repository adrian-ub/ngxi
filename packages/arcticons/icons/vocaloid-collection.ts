import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVocaloidCollectionIcon],svg[arcticons-vocaloid-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.632 17.988l21.824 12V17.963l10.912 6.034l-10.912 5.99V42.01L7.632 29.987v12.024l10.912-5.958l-10.912-6.065v-24l10.912 6.035z"></svg:path>`,
})
export class ArcticonsVocaloidCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
