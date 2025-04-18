import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMufgBankIcon],svg[arcticons-mufg-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 10.5c-7.456 0-13.5 6.044-13.5 13.5S10.544 37.5 18 37.5a13.5 13.5 0 0 0 6-1.435a13.5 13.5 0 0 0 6 1.435c7.456 0 13.5-6.044 13.5-13.5S37.456 10.5 30 10.5a13.5 13.5 0 0 0-5.978 1.422A13.5 13.5 0 0 0 18 10.5"></svg:path><svg:circle cx="24" cy="24" r="5.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMufgBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
