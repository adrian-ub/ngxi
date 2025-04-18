import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNovaTelekommunicationsIcon],svg[arcticons-nova-telekommunications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 28.444v-8.889l5.889 8.889v-8.889"></svg:path><svg:rect width="5.889" height="8.889" x="18.614" y="19.555" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.944" ry="2.944"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.863 19.556l-2.944 8.889l-2.945-8.889M36.525 25.5h-3.938m-.976 2.944l2.945-8.889l2.944 8.889"></svg:path>`,
})
export class ArcticonsNovaTelekommunicationsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
