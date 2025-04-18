import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIcdIcon],svg[healthicons-icd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 26v-4h1a2 2 0 1 1 0 4z"></svg:path><svg:path fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm4 14a1 1 0 1 0 0 2h1v4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4h1a1 1 0 1 0 0-2zm12.856 2.37a2.2 2.2 0 1 0 0 3.111a1 1 0 0 1 1.414 1.414a4.2 4.2 0 1 1 0-5.94a1 1 0 0 1-1.414 1.415M31 20a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a4 4 0 0 0 0-8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsIcdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
