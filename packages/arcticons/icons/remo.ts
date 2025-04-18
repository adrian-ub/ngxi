import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRemoIcon],svg[arcticons-remo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8v32M7 18.2h13.2v11.7H7z"></svg:path><svg:circle cx="10.7" cy="21.2" r="1.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.8 29.6l3.3-5l1.9 2l3.1-5.4l3.2 8.5m8.6-11.5h13.2v11.7H27.9z"></svg:path><svg:circle cx="31.6" cy="21.2" r="1.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.7 29.6l3.3-5l1.9 2l3.1-5.4l3.2 8.5"></svg:path>`,
})
export class ArcticonsRemoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
