import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAbsherIcon],svg[arcticons-absher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.692 17.655V43.5m4.651-25.845v19.932m4.651-19.932v19.932m4.65-19.932v19.932m4.651-26.244v26.244m4.651-27.905v29.3"></svg:path><svg:circle cx="25.644" cy="13.669" r="1.362" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.308 4.5a2.724 2.724 0 0 0-2.724 2.724h2.724z"></svg:path><svg:circle cx="30.295" cy="40.972" r="1.362" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.994" cy="13.669" r="1.362" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.343" cy="13.669" r="1.362" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAbsherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
