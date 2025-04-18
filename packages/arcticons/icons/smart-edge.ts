import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartEdgeIcon],svg[arcticons-smart-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.5 24a7.12 7.12 0 0 1-2.306 5.264H5.806C4.384 27.958 3.5 26.084 3.5 24s.884-3.958 2.306-5.264h36.388A7.12 7.12 0 0 1 44.5 24"></svg:path>`,
})
export class ArcticonsSmartEdgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
