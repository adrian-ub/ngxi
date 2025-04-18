import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDomestikaIcon],svg[arcticons-domestika-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.331 10.51L4.5 23.39l10.4 14.1h18.29l10.31-14.1l-8.741-12.88l-10.826 14.416z"></svg:path>`,
})
export class ArcticonsDomestikaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
