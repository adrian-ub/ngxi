import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRemotenumpadIcon],svg[arcticons-remotenumpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 43.5h27a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2h-27a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2"></svg:path><svg:rect width="5" height="12.11" x="32.17" y="28.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="12.11" x="32.17" y="14.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="12.11" x="14.39" y="32.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" transform="rotate(-90 16.885 38.075)"></svg:rect><svg:rect width="5" height="5" x="25.06" y="35.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="25.06" y="28.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="10.83" y="28.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="17.94" y="28.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="25.06" y="21.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="10.83" y="21.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="17.94" y="21.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="25.06" y="14.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="10.83" y="14.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="17.94" y="14.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="25.06" y="6.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="32.17" y="6.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="10.83" y="6.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:rect width="5" height="5" x="17.94" y="6.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect>`,
})
export class ArcticonsRemotenumpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
