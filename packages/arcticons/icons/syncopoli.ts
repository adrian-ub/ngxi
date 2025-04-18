import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSyncopoliIcon],svg[arcticons-syncopoli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.52 20.8c8.69-7.51 16.29-11.9 23.55-11.9c6.58 0 8.79 5.18 7.4 9.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.35 15.55l12.15 5.02l-11.28 5.29zM41.48 27.2c-8.69 7.51-16.29 11.9-23.55 11.9c-6.58 0-8.79-5.18-7.4-9.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.65 32.45L4.5 27.43l11.28-5.29z"></svg:path>`,
})
export class ArcticonsSyncopoliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
