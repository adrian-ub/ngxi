import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIcdOutlineIcon],svg[healthicons-icd-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 20a1 1 0 1 0 0 2h1v4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4h1a1 1 0 1 0 0-2zm12.856 2.37a2.2 2.2 0 1 0 0 3.111a1 1 0 0 1 1.414 1.414a4.2 4.2 0 1 1 0-5.94a1 1 0 0 1-1.414 1.415"></svg:path><svg:path fill-rule="evenodd" d="M31 20a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a4 4 0 0 0 0-8zm1 6v-4h1a2 2 0 1 1 0 4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsIcdOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
