import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsC6YellowIcon],svg[arcticons-c6-yellow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.737 26.633v.066c0 2.926-2.322 5.297-5.186 5.297s-5.186-2.371-5.186-5.297V21.3c0-2.926 2.322-5.298 5.186-5.298s5.186 2.372 5.186 5.298v.066"></svg:path><svg:ellipse cx="31.448" cy="26.699" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.186" ry="5.298"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.184 17.954c-.864-1.156-2.181-1.95-4.363-1.95h-.365c-2.864 0-5.185 2.371-5.185 5.297V26.7"></svg:path>`,
})
export class ArcticonsC6YellowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
