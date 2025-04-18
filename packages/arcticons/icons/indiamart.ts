import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndiamartIcon],svg[arcticons-indiamart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="13.615" cy="9.941" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.322" ry="2.787"></svg:ellipse><svg:ellipse cx="29.287" cy="9.414" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.344" ry="4.273"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.854 19.322c-1.667 2.224-1.926 3.73-1.635 6.31c.292 2.58 1.147 6.149 5.246 9.794s11.44 7.368 18.667 7.432s14.337-3.53 15.557-8.741s-3.453-12.04-9.524-16c-6.072-3.96-13.253-5.01-18.635-4.21c-5.381.8-8.009 3.19-9.676 5.415"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.1 37.467c.3-5.712.6-11.424.787-14.883c.188-3.46.265-4.666 1.382-2.933s3.273 6.405 5.43 11.077m1.684.115c2.199-4.043 4.397-8.086 5.823-10.268s2.081-2.503 2.954 1.43s1.963 12.116 3.053 20.3"></svg:path>`,
})
export class ArcticonsIndiamartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
