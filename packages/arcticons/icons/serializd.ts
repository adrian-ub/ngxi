import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSerializdIcon],svg[arcticons-serializd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.529 7.096a3 3 0 0 0-3.674 2.122L17.349 37.23a3 3 0 1 0 5.796 1.553L30.65 10.77a3 3 0 0 0-2.121-3.675m-2.401 5.099l-6.183 23.075"></svg:path>`,
})
export class ArcticonsSerializdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
