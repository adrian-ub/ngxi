import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsItaloTrenoIcon],svg[arcticons-italo-treno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="10.201" cy="29.541" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.673 26.77a3.013 3.013 0 0 1-3.004 3.005h0a3.013 3.013 0 0 1-3.004-3.004v-1.953a3.013 3.013 0 0 1 3.004-3.004h0a3.013 3.013 0 0 1 3.004 3.004m0 4.957v-7.961m3.004-4.056v10.514c0 .901.601 1.502 1.502 1.502h.451M16.661 19.26v10.515m-1.652-7.961h3.154"></svg:path><svg:circle cx="12.396" cy="19.494" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.396 21.814v7.961m23.1 0a3.013 3.013 0 0 1-3.004-3.004v-1.953a3.013 3.013 0 0 1 3.004-3.004h0a3.013 3.013 0 0 1 3.004 3.004v1.953a3.013 3.013 0 0 1-3.004 3.004"></svg:path>`,
})
export class ArcticonsItaloTrenoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
