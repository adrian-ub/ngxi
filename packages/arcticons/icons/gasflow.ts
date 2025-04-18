import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGasflowIcon],svg[arcticons-gasflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 9.61a9.15 9.15 0 0 1 9.14 9.14h0A9.15 9.15 0 0 1 24 27.88h0a9.14 9.14 0 1 1 0-18.27m4.57 4.57l-5.82 3.32l-.2 2.69l2.7-.19z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.07 32.04h39.86"></svg:path>`,
})
export class ArcticonsGasflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
