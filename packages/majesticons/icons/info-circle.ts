import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsInfoCircleIcon],svg[majesticons-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 14a1 1 0 0 0 1-1v-3a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1m1-7a1 1 0 1 1-2 0a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
