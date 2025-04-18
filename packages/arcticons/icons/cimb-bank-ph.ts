import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCimbBankPhIcon],svg[arcticons-cimb-bank-ph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24H12.798L4.5 7.404h30.702zm-30.702 0L4.5 40.596h30.702L43.5 24"></svg:path>`,
})
export class ArcticonsCimbBankPhIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
