import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCheqIcon],svg[arcticons-cheq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.348 28.83c4.46-9.265-4.074-19.265-13.195-19.265H4.5c.936 3.632 2.764 6.524 6.081 6.524l13.266.065c5.354.027 9.442 7.188 6.839 12.675zm-26.696-9.66c-4.46 9.265 4.074 19.265 13.195 19.265H43.5c-.936-3.632-2.764-6.524-6.081-6.524l-13.266-.065c-5.354-.027-9.442-7.188-6.839-12.675z"></svg:path>`,
})
export class ArcticonsCheqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
