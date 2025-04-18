import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGrofersIcon],svg[arcticons-grofers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="42.75" cy="5.25" r="2.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.44 42.56c-11.59 0-17.07-9.31-17.07-11.72v-7.95a.63.63 0 0 1 .82-.61c2.61.83 10.81 3.3 15.89 3.3s13.28-2.47 15.92-3.3a.63.63 0 0 1 .82.61v8c-.03 2.36-4.82 11.67-16.38 11.67"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.37 24a22.6 22.6 0 0 1-4.11-5.08m4.11 11.39c-1.25-.9-4-4.89-4.71-6M40.79 24a22.6 22.6 0 0 0 4.11-5.08m-4.11 11.39c1.25-.9 4-4.89 4.71-6"></svg:path>`,
})
export class ArcticonsGrofersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
