import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChromiumautoupdaterIcon],svg[arcticons-chromiumautoupdater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.18" cy="24.02" r="8.05" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 15.95h19.94M17.21 28.02L7.24 10.75m23.91 17.29l-9.97 17.27M24 19.64v8.53m-2.91-3.05L24 28.36l2.91-3.24"></svg:path>`,
})
export class ArcticonsChromiumautoupdaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
