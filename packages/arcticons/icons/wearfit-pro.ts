import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWearfitProIcon],svg[arcticons-wearfit-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 13.965v5.638a1.089 1.089 0 1 1-2.177 0v-7.496a1.089 1.089 0 1 0-2.176 0v13.688a1.089 1.089 0 1 1-2.177 0V9.465a1.089 1.089 0 1 0-2.176 0v21.21a1.089 1.089 0 1 1-2.177 0V11.533a1.089 1.089 0 1 0-2.176 0v23.504a1.089 1.089 0 1 1-2.176 0V14.418a1.089 1.089 0 1 0-2.177 0v24.116a1.089 1.089 0 1 1-2.176 0V14.418a1.089 1.089 0 1 0-2.177 0v20.619a1.089 1.089 0 1 1-2.176 0V11.532a1.089 1.089 0 1 0-2.176 0v19.145a1.089 1.089 0 1 1-2.177 0V9.467a1.089 1.089 0 1 0-2.176 0v16.328a1.089 1.089 0 1 1-2.177 0V12.106a1.089 1.089 0 1 0-2.176 0v7.496a1.089 1.089 0 1 1-2.176 0v-5.638"></svg:path>`,
})
export class ArcticonsWearfitProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
