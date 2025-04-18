import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAudiBkkServiceIcon],svg[arcticons-audi-bkk-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9.567" cy="17.817" r="6.067"></svg:circle><svg:circle cx="19.189" cy="17.817" r="6.067"></svg:circle><svg:circle cx="28.811" cy="17.817" r="6.067"></svg:circle><svg:circle cx="38.433" cy="17.817" r="6.067"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.35 32.25a2 2 0 1 1 0 4h-3.3v-8h3.3a2 2 0 1 1 0 4m0 0h-3.3m7.3-4v8m4.3 0l-3.294-4l3.294-3.973m-3.294 3.973H22.35m6.3-4v8m4.3 0l-3.294-4l3.294-3.973m-3.294 3.973H28.65"></svg:path>`,
})
export class ArcticonsAudiBkkServiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
