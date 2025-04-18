import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStethoscopeIcon],svg[streamline-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.625 4.27a1.738 1.738 0 1 0 3.388.776a1.738 1.738 0 1 0-3.388-.776M1.74 1.656H.645V5.25a3.22 3.22 0 0 0 3.218 3.219v0a3.22 3.22 0 0 0 3.22-3.219V1.656H5.989"></svg:path><svg:path d="M3.927 8.5v1.208a3.7 3.7 0 0 0 3.698 3.698v0a3.7 3.7 0 0 0 3.699-3.698V6.594"></svg:path></svg:g>`,
})
export class StreamlineStethoscopeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
