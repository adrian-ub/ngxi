import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAirportIcon],svg[mdi-airport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.97 5.92a.967.967 0 0 0-1.18-.68l-3.4.91l-4.44-4.12l-1.23.33l2.66 4.59l-3.19.85l-1.26-.98l-.93.25l1.66 2.88l10.62-2.84c.52-.15.82-.68.69-1.19M21 10l-1 2h-5l-1-2l1-1h2V7h1v2h2zm1 10v2H2v-2h13v-7h5v7z"></svg:path>`,
})
export class MdiAirportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
