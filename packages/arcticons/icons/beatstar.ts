import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeatstarIcon],svg[arcticons-beatstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.117 16.149H8.749L4.5 30.373h39l-4.249-14.224h-2.368"></svg:path><svg:path d="M38.765 25.041v2.744H9.235v-2.744l2.367-10.673h24.796zM11 25.389h26"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 30.373h39v3.259h-39z"></svg:path>`,
})
export class ArcticonsBeatstarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
