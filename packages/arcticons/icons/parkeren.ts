import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParkerenIcon],svg[arcticons-parkeren-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.843 27.35V14.806h4.077a4.234 4.234 0 1 1 0 8.467h-4.077"></svg:path><svg:circle cx="24" cy="21.078" r="11.729" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.596 43.301a.994.994 0 0 1-1.192 0C18.46 39.617 7.899 30.866 7.899 20.92a16.105 16.105 0 1 1 32.203 0c0 9.946-10.562 18.697-15.506 22.381"></svg:path>`,
})
export class ArcticonsParkerenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
