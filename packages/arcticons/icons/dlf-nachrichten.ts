import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDlfNachrichtenIcon],svg[arcticons-dlf-nachrichten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.715 19.586h14.682M19.668 25.68H39.61v-2.3H19.668zm22.48 3.795v4.135H19.72v-4.135ZM16.67 22.77a9.197 9.197 0 1 1 7.002-5.803M19.715 43.5h14.682m-14.729-6.093H39.61v2.298H19.668z"></svg:path>`,
})
export class ArcticonsDlfNachrichtenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
