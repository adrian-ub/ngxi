import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWormholeWilliamIcon],svg[arcticons-wormhole-william-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="19.151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.5" ry="12.886"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.774 30.838c3.638 4.328 16.881 8.134 16.881 8.134"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.18 28.649c-.719 2.137 2.045 2.867 2.045 7.143s-4.901 5.943-7.821 5.943s-3.494-1.381-5.397-1.381a1.81 1.81 0 0 1-1.929-2.073a1.88 1.88 0 0 1 1.245-1.855"></svg:path>`,
})
export class ArcticonsWormholeWilliamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
