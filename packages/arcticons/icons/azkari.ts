import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAzkariIcon],svg[arcticons-azkari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="29.5" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.983 22.167L24 29.5l-4.983-7.333M24 36.833V29.5m-4.701 0h9.402m-9.402 3.666h9.402M17 17.376V11.5c0-3.878 3.122-7 7-7s7 3.122 7 7v5.876"></svg:path>`,
})
export class ArcticonsAzkariIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
