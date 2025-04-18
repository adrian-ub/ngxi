import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDantotsuIcon],svg[arcticons-dantotsu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.232 32.467H24a8.467 8.467 0 1 0 0-16.934H4.232"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.345 9.224H24c8.16 0 14.776 6.616 14.776 14.776S32.16 38.776 24 38.776H8.345"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.974 22.763l-6.272-3.621a1.43 1.43 0 0 0-2.143 1.237v7.242c0 1.1 1.19 1.787 2.143 1.237l6.272-3.62a1.43 1.43 0 0 0 0-2.475"></svg:path>`,
})
export class ArcticonsDantotsuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
