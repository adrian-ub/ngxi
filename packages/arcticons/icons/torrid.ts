import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTorridIcon],svg[arcticons-torrid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.586 27.5v-7h1.58a3.06 3.06 0 0 1 3.06 3.06h0v.88a3.06 3.06 0 0 1-3.06 3.06zm-2.015-7v7m-4.447-2.3l2.28 2.3m-4.58 0v-7h2.3a2.35 2.35 0 1 1 0 4.7h-2.3m-4.2 0l2.28 2.3m-4.58 0v-7h2.3a2.35 2.35 0 1 1 0 4.7h-2.3m-4.429-4.69a2.32 2.32 0 0 1 2.315 2.32v2.35a2.32 2.32 0 0 1-2.315 2.32h0a2.32 2.32 0 0 1-2.315-2.32v-2.35a2.32 2.32 0 0 1 2.315-2.32m-5.801 6.99v-7m-2.32 0h4.64"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTorridIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
