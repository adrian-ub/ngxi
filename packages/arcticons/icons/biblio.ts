import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBiblioIcon],svg[arcticons-biblio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.73v23.72m6.5-26.9v26.9M17.5 19v20.45M24 8.55v30.9M30.5 15v24.45m6.5-17.9v17.9M43.5 11v28.45"></svg:path>`,
})
export class ArcticonsBiblioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
