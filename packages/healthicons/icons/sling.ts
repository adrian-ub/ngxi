import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingIcon],svg[healthicons-sling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0M16.212 31.011a2 2 0 0 0-2.117 2.601zm8.583 4.236A3.501 3.501 0 0 1 24 41.965V42h-8a9 9 0 1 1 0-18h16a9 9 0 1 1 0 18h-4.257a5.502 5.502 0 0 0-2.175-8.598zM23.035 26h3.462l-5.86 14H16a6.97 6.97 0 0 1-3.677-1.042l9.647-11.852zM34 33a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
