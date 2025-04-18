import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWarzoneLoadoutCodmunityIcon],svg[arcticons-warzone-loadout-codmunity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.413 24L24 31.167L11.587 24v-7.167L24 9.667l18.62 10.75V34.75L24 45.5L5.38 34.75v-7.167"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.587 24L24 16.833L36.413 24v7.167L24 38.333L5.38 27.583V13.25L24 2.5l18.62 10.75v7.167"></svg:path>`,
})
export class ArcticonsWarzoneLoadoutCodmunityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
