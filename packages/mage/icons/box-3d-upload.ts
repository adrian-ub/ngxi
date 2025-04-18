import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBox3dUploadIcon],svg[mage-box-3d-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="M19.97 14.245v5"></svg:path><svg:path stroke-linejoin="round" d="m22.262 16.35l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967"></svg:path></svg:g>`,
})
export class MageBox3dUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
