import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPepperoniIcon],svg[whh-pepperoni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M943.593 943.5q-49.5 49.5-47.5 80.5q-6 0-11.5-6t-11.5-14.5t-9-11.5q-4-4-9-16.5t-12-32t-13-33.5q-85 58-190 48.5t-180-84.5l-310-310q-75-75-84.5-180t48.5-190q-14-6-33.5-13t-32-12t-16.5-9q-3-3-11.5-9t-14.5-11.5t-6-11.5q32 2 81-47q49-50 47-81q6 0 11.5 6t11.5 14.5t9 11.5q4 4 9 16.5t12 32t13 33.5q85-58 190-48.5t180 84.5l310 310q75 75 84.5 180t-48.5 190q14 6 33.5 13t32 12t16.5 9q3 3 11.5 8.5t14.5 11.5t6 12q-31-2-80.5 47.5"></svg:path>`,
})
export class WhhPepperoniIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
