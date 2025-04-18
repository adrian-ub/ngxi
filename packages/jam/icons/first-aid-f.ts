import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamFirstAidFIcon],svg[jam-first-aid-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.858v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zm6 6v-2H9v2H7v2h2v2h2v-2h2v-2zm-4-6h6v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1z"></svg:path>`,
})
export class JamFirstAidFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
