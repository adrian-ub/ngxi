import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYeolpumtaIcon],svg[arcticons-yeolpumta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.943 9.198v29.245c0 4.304 3.676 4.853 6.574 3.11l20.106-12.089c7.257-4.363 7.266-6.506-.096-10.902l-21.1-12.603c-1.557-.93-5.484-.61-5.484 3.239m26.584 9.364l.096 10.902M8.943 15.419l31.962 7.805m-.075 1.816L8.943 32.8"></svg:path>`,
})
export class ArcticonsYeolpumtaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
