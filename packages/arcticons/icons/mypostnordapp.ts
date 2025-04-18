import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMypostnordappIcon],svg[arcticons-mypostnordapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.666 14.584h29.356m-29.356 0l7.044-8.372a2 2 0 0 1 1.53-.712h19.52a2 2 0 0 1 1.53.712l6.574 7.814a2 2 0 0 1 .47 1.287v23.871a3.316 3.316 0 0 1-3.316 3.316H8.982a3.316 3.316 0 0 1-3.316-3.316V26.88M24 14.584v-3.545M5.666 22.449v-1.551"></svg:path><svg:ellipse cx="31.477" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.32" ry="3.102"></svg:ellipse>`,
})
export class ArcticonsMypostnordappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
