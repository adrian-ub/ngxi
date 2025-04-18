import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCinetrakIcon],svg[arcticons-cinetrak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.947" cy="10.573" r="2.086" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.703 8.519l2.054 2.055l-2.054 2.054m7.184-4.109l2.054 2.055l-2.054 2.054m7.183-4.109l2.055 2.055l-2.055 2.054m-6.26 18.601a5.15 5.15 0 0 1-4.47 2.593h0a5.15 5.15 0 0 1-5.15-5.148v-3.347a5.15 5.15 0 0 1 5.149-5.15h0a5.15 5.15 0 0 1 4.466 2.585"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 32.925c0 .982-.4 1.922-1.106 2.605l-5.596 5.527a4.85 4.85 0 0 1-3.453 1.443H9.5a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4z"></svg:path>`,
})
export class ArcticonsCinetrakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
