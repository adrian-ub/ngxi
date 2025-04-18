import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInvizibleproIcon],svg[arcticons-inviziblepro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" rx="19.5" ry="12.01"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M40 40L8 8"></svg:path><svg:circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"></svg:circle><svg:circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"></svg:circle>`,
})
export class ArcticonsInvizibleproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
