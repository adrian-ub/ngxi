import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRegalIcon],svg[arcticons-regal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.013l16.44 7.918l4.06 17.79l-11.376 14.266H14.876L3.5 29.72l4.06-17.79z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 41.179l-12.617-6.076L8.267 21.45l8.731-10.948h14.004l8.73 10.948l-3.115 13.653z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.137 31.113V18.969h9.088c2.561 0 4.638.56 4.638 3.055s-2.076 3.056-4.639 3.056h-9.087m7.492 0l6.746 6.033"></svg:path>`,
})
export class ArcticonsRegalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
