import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdsilenceIcon],svg[arcticons-adsilence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.57v14.596h9.709l12.152 9.379V6.63l-12.02 9.94zm39-10.468L7.802 41.898m28.086-27.847a12.09 12.09 0 0 1 0 19.805"></svg:path>`,
})
export class ArcticonsAdsilenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
