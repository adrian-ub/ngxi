import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPublicIndiaIcon],svg[arcticons-public-india-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="15.884" r="5.811" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="15.884" r="2.324" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.703 35.534s5.224-10.46 9.297-10.46s9.297 10.46 9.297 10.46"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.351 35.534s2.618-5.81 4.649-5.81s4.649 5.81 4.649 5.81m-13.946 0c-.872 1.51 2.034 4.53 4.648 0m13.946 0c.872 1.51-2.034 4.53-4.648 0"></svg:path>`,
})
export class ArcticonsPublicIndiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
