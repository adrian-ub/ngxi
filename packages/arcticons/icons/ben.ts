import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBenIcon],svg[arcticons-ben-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.793 28.86a3.25 3.25 0 0 1-2.824 1.64h0a3.25 3.25 0 0 1-3.25-3.25v-2.112a3.25 3.25 0 0 1 3.25-3.25h0a3.25 3.25 0 0 1 3.25 3.25v1.056h-6.5M36.907 30.5v-5.362a3.25 3.25 0 0 0-3.25-3.25h0a3.25 3.25 0 0 0-3.25 3.25V30.5m0-5.363v-3.25M16.456 24a3.25 3.25 0 0 1 0 6.5h-5.363v-13h5.363a3.25 3.25 0 0 1 0 6.5m0 0h-5.363"></svg:path>`,
})
export class ArcticonsBenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
