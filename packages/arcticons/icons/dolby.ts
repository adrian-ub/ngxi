import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDolbyIcon],svg[arcticons-dolby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.182 11.59H43.5v24.82h0h-5.318A12.41 12.41 0 0 1 25.772 24v0a12.41 12.41 0 0 1 12.41-12.41M9.819 36.41H4.5h0V11.59h5.318A12.41 12.41 0 0 1 22.228 24h0a12.41 12.41 0 0 1-12.41 12.41"></svg:path>`,
})
export class ArcticonsDolbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
