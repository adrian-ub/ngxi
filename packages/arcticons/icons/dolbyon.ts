import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDolbyonIcon],svg[arcticons-dolbyon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.53h3.8A13.47 13.47 0 0 1 21.77 24v0A13.47 13.47 0 0 1 8.3 37.47H4.5h0V10.53h0Zm39 26.94h-3.77A13.47 13.47 0 0 1 26.23 24h0a13.47 13.47 0 0 1 13.5-13.47h3.8v26.94h-.03Z"></svg:path>`,
})
export class ArcticonsDolbyonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
