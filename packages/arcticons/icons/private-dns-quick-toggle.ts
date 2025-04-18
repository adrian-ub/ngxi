import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrivateDnsQuickToggleIcon],svg[arcticons-private-dns-quick-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.281 36.889h26.705c14.496 0 12.071-21.813-2.467-16.976c0-12.113-21.813-12.113-21.813 2.426C-.42 19.913-.42 36.889 9.28 36.889"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.02 23.908V21.4c0-2.557-2.051-4.63-4.583-4.63s-4.583 2.073-4.583 4.63v2.508m-2.291 0h13.75v9.454h-13.75z"></svg:path><svg:ellipse cx="23.437" cy="28.635" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.432" ry="1.447"></svg:ellipse>`,
})
export class ArcticonsPrivateDnsQuickToggleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
