import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGtaIiiIcon],svg[arcticons-gta-iii-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.427 17.356a2.08 2.08 0 0 0 2.073-2.073V10.3a2.08 2.08 0 0 0-2.073-2.073H6.573A2.08 2.08 0 0 0 4.5 10.3v4.983a2.08 2.08 0 0 0 2.073 2.073h1.113v13.487H6.573A2.08 2.08 0 0 0 4.5 32.916v4.983a2.08 2.08 0 0 0 2.073 2.073h34.854a2.08 2.08 0 0 0 2.073-2.073v-4.983a2.08 2.08 0 0 0-2.073-2.073h-1.113V17.356ZM15.44 30.843V17.356h4.683v13.487Zm17.12 0h-4.683V17.356h4.684Z"></svg:path>`,
})
export class ArcticonsGtaIiiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
