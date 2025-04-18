import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBibleprojectIcon],svg[arcticons-bibleproject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.661 5.5v31.411l8.414-2.89V42.5l10.178-10.177l18.086 4.524V5.5l-18.202 4.981z"></svg:path>`,
})
export class ArcticonsBibleprojectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
