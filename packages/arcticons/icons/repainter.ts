import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRepainterIcon],svg[arcticons-repainter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.539 24.326V5.5h-3.726v10.213h-4.412L30.33 5.5l.04 5.814l-2.895 2.774h-1.888v-1.907H23.56V5.5H9.461v18.826m-.001 0v4.154a3.115 3.115 0 0 0 3.116 3.116h7.789V42.5h7.27V31.596h7.788a3.115 3.115 0 0 0 3.116-3.116v-4.154z"></svg:path>`,
})
export class ArcticonsRepainterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
