import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsComposerIcon],svg[arcticons-composer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.97 36.55c-3.18 0-5.65-2.58-5.76-5.76V17.21c0-3.18 2.58-5.76 5.76-5.76s5.83 2.58 5.82 5.76v13.54a5.817 5.817 0 0 1-5.82 5.81Z"></svg:path><svg:rect width="11.52" height="11.52" x="4.5" y="25.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.3" ry="2.3"></svg:rect><svg:circle cx="37.74" cy="30.79" r="5.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.26" cy="17.21" r="5.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="11.52" height="11.52" x="31.98" y="11.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.3" ry="2.3"></svg:rect>`,
})
export class ArcticonsComposerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
