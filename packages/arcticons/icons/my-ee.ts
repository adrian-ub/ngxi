import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyEeIcon],svg[arcticons-my-ee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.07 24a11 11 0 0 0 3.963-8.467C35.033 9.44 30.093 4.5 24 4.5S12.967 9.44 12.967 15.533c0 3.403 1.542 6.443 3.964 8.467a11 11 0 0 0-3.964 8.467C12.967 38.56 17.907 43.5 24 43.5s11.033-4.94 11.033-11.033A11.01 11.01 0 0 0 31.069 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.66 32.467h3.051m1.629 4.68h-4.68v-9.36h4.68m-4.68-12.254h3.051m1.629 4.68h-4.68v-9.36h4.68"></svg:path>`,
})
export class ArcticonsMyEeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
