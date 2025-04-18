import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRipioIcon],svg[arcticons-ripio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.693 27.848l-13.225 6.093a.63.63 0 0 1-.895-.572V21.298a1.26 1.26 0 0 1 .734-1.146l13.225-6.093a.63.63 0 0 1 .895.572v12.071a1.26 1.26 0 0 1-.734 1.146"></svg:path>`,
})
export class ArcticonsRipioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
