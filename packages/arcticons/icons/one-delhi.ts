import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOneDelhiIcon],svg[arcticons-one-delhi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 29.64h-6.37a2.82 2.82 0 0 1-2.82-2.82v-5.64a2.82 2.82 0 0 1 2.82-2.82h6.37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.14 29.64h7.078a2.82 2.82 0 0 0 2.82-2.82v-5.64a2.82 2.82 0 1 1 5.64 0v5.64a2.82 2.82 0 1 0 5.64 0v-5.64a2.82 2.82 0 0 1 2.82-2.82h4.993"></svg:path><svg:circle cx="9.14" cy="24" r="5.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 24h-9.189"></svg:path>`,
})
export class ArcticonsOneDelhiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
