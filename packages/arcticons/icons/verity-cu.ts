import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVerityCuIcon],svg[arcticons-verity-cu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.869 6.214h15.207m9.665 9.54h7.39"></svg:path><svg:circle cx="36.436" cy="8.98" r="3.481" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.743 6.214L25.23 42.5h2.344l8.862-26.746m-17.252-9.54l11.492 26.925"></svg:path>`,
})
export class ArcticonsVerityCuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
