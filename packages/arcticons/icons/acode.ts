import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAcodeIcon],svg[arcticons-acode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.303 32.1H12.51L4.5 23.96l7.998-8.06h5.065l-7.797 7.816l6.81 6.826"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 19.468l3.355 18.642h5.4L27.79 9.89h-7.58l-4.965 28.22h5.4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.423 30.542l6.811-6.826l-7.797-7.816h5.065l7.998 8.06l-8.011 8.14h-3.792"></svg:path>`,
})
export class ArcticonsAcodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
