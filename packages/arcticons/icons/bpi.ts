import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBpiIcon],svg[arcticons-bpi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-6 14.447v8.106"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 28.053v-8.106h2.634c1.52 0 2.735 1.216 2.735 2.736s-1.215 2.736-2.735 2.736H24M18.844 24c1.114 0 2.026.912 2.026 2.026s-.912 2.027-2.027 2.027H15.5v-8.106h3.343c1.115 0 2.027.912 2.027 2.026S19.958 24 18.843 24Zm-.001 0H15.5"></svg:path>`,
})
export class ArcticonsBpiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
