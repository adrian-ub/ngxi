import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJrIcon],svg[arcticons-jr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.438 26.2v3.653c0 1.196.97 2.165 2.165 2.165h6.935c1.195 0 2.165-.97 2.165-2.165V17.327H34.1c1.189 0 2.152.963 2.152 2.152v2.816a2.15 2.15 0 0 1-2.152 2.152h-3.64l5.978 7.571"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsJrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
