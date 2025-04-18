import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAworkIcon],svg[arcticons-awork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.69 4.5L6.739 14.438l10.59 6.224l6.363-3.68l6.74 3.68l10.831-6.224Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.07 20.424v15.098L23.69 43.5l13.24-7.737v-15.51l-6.5 3.507v11.575l-6.74-4.23l-6.361 4.265V23.76Z"></svg:path>`,
})
export class ArcticonsAworkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
