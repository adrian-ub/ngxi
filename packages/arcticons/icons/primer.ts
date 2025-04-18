import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrimerIcon],svg[arcticons-primer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4h29c2.216 0 4 1.784 4 4m0 18.037c0 2.216-1.784 4-4 4M26.056 38.5c0 2.216-1.785 4-4 4H9.5m16.556-6.963c0-2.216 1.783-4 4-4H38.5m4-4.111V9.61M26.056 35.537V38.5"></svg:path>`,
})
export class ArcticonsPrimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
