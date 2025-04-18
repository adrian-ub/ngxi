import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNDialIcon],svg[arcticons-n-dial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.824" cy="35.204" r="6.676" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.176" cy="12.408" r="6.676" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.408c0 2.968 0 5.936 1.38 9.81c1.38 3.873 4.139 8.652 7.643 12.268s7.753 6.07 11.428 7.108c3.675 1.039 6.774.662 9.874.286"></svg:path>`,
})
export class ArcticonsNDialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
