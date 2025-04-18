import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuseumpoolIcon],svg[arcticons-museumpool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.717 20.39h.07m0 0l4.212 3.657l4.213-3.658m0 0h.07m-8.495 6.25l4.212 3.599l4.213-3.598M9.249 20.39v15.996H7.092v1.366H5.5v3.592h37v-3.592h-1.593v-1.366h-2.158V20.39h-4.144v15.999h-2.25v-16h-4.144v15.999h-8.425V20.389h-4.145v15.999h-2.249V20.389zm-2.006-4.543h33.513v4.542H7.243zm31.393 0v-2.11l-14.574-7.08l-14.573 7.082v2.109z"></svg:path>`,
})
export class ArcticonsMuseumpoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
