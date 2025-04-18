import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoorulhudaIcon],svg[arcticons-noorulhuda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c-4.17-4.036-11-2.763-11-7.15v-24.7c0-4.387 6.83-3.114 11-7.15c4.17 4.036 11 2.763 11 7.15v24.7c0 4.387-6.83 3.114-11 7.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 35h9V13h-9m9 0h8m-8 22h8m9-22h-9v22h9"></svg:path>`,
})
export class ArcticonsNoorulhudaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
