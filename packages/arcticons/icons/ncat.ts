import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNcatIcon],svg[arcticons-ncat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.04 43.5C7.373 27.3 35.24 17.767 36.307 14.167c1.066-3.6-2.38-9.667-9.134-9.667c-10.766 0-20.688 9.244-20.688 21.044C6.485 38.878 18.24 43.5 24.04 43.5c10.848 0 17.333-5 17.467-6.933s-1.267-4.867-3.333-4.4s-6.58 3.138-11.134 3.266c-5.57.158-6.482-3.018-7.217-6.474"></svg:path>`,
})
export class ArcticonsNcatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
