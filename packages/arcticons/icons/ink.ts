import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInkIcon],svg[arcticons-ink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 18.755v10.472m3.217 0v-7.003a3.47 3.47 0 0 1 3.469-3.469h0a3.47 3.47 0 0 1 3.468 3.469v7.003m3.217-10.454v10.472m0-3.648l5.629-6.789m0 10.437l-4.312-5.236"></svg:path>`,
})
export class ArcticonsInkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
