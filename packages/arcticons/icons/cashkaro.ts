import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCashkaroIcon],svg[arcticons-cashkaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.984 27.352v.083a6.74 6.74 0 0 1-6.742 6.742h0A6.74 6.74 0 0 1 9.5 27.435v-6.87a6.74 6.74 0 0 1 6.742-6.741h0a6.74 6.74 0 0 1 6.742 6.742v.083m4.576-6.826v20.354m0-7.09L38.5 13.892m0 20.285L30.12 24"></svg:path>`,
})
export class ArcticonsCashkaroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
