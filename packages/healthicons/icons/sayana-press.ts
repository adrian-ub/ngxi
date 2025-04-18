import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressIcon],svg[healthicons-sayana-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25 4l-2 2v5h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2zm0 7h-2v8h-1v1a1 1 0 0 0 1 1v3h2v-3a1 1 0 0 0 1-1v-1h-1zm-1 25a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-1 2v2h2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
