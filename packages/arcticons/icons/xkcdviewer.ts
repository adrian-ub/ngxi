import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXkcdviewerIcon],svg[arcticons-xkcdviewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.202 32.514l40.715-13.393m-10.542 3.468l-1.951-5.963l-20.71 6.854l1.951 5.963"></svg:path>`,
})
export class ArcticonsXkcdviewerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
