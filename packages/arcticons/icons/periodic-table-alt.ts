import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPeriodicTableAltIcon],svg[arcticons-periodic-table-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4.5 9v21h3v-6h3v6h33V9h-3v3h-10v6h-20v-6h-3V9zm6 24v6h27v-6z"></svg:path>`,
})
export class ArcticonsPeriodicTableAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
