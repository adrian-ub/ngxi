import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamThunderFIcon],svg[jam-thunder-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.708 4.968h1.789a1.5 1.5 0 0 1 1.378 2.09l-3.96 9.243a1.049 1.049 0 0 1-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 0 1 0 7.423V1.5A1.5 1.5 0 0 1 1.5 0h2.708a1.5 1.5 0 0 1 1.5 1.5z"></svg:path>`,
})
export class JamThunderFIcon {
  readonly viewBox = input("-7.5 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
