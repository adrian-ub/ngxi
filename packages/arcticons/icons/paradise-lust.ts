import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParadiseLustIcon],svg[arcticons-paradise-lust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="23.966" r="11.199" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.287 7.597l7.113 7.322m-9.976-4.424l7.32 7.166M37.535 7.449l-7.248 7.25m10.46-3.99l-7.489 6.956M30.35 33.19l7.26 7.298m-4.281-10.326l7.362 7.198m-25.856-6.957L7.357 37.42m10.473-4.107l-7.318 7.276"></svg:path>`,
})
export class ArcticonsParadiseLustIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
