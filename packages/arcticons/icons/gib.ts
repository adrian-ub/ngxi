import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGibIcon],svg[arcticons-gib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.107 43.5a32.4 32.4 0 0 1-1.438-19.238C23.556 16.205 28.688 8.957 35.66 4.5H20.832c-5.594 5.185-9.42 12.245-10.713 19.762A35.27 35.27 0 0 0 12.235 43.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.262 21.51l-.919 4.318h6.322l-4.446 17.67h8.053l3.712-21.988z"></svg:path><svg:ellipse cx="35.107" cy="15.293" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.808" ry="3.236" transform="rotate(-82.098 35.107 15.294)"></svg:ellipse>`,
})
export class ArcticonsGibIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
