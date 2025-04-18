import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobileDeIcon],svg[arcticons-mobile-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m-22.6.3v36.4m4.8-23.8v11.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.7 22.629a4.225 4.225 0 0 1 4.225-4.225h0a4.225 4.225 0 0 1 4.225 4.225V29.6M20.7 18.404V29.6m8.45-6.971a4.225 4.225 0 0 1 4.225-4.225h0a4.225 4.225 0 0 1 4.225 4.225V29.6"></svg:path>`,
})
export class ArcticonsMobileDeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
