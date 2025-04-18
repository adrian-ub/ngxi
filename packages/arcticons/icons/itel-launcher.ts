import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsItelLauncherIcon],svg[arcticons-itel-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22.248" cy="10.214" r="5.715" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.747 19.456h4.005c4.144 0 6.906 2.366 7.422 6.345L31.467 43.5H20.863z"></svg:path>`,
})
export class ArcticonsItelLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
