import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceInfoIcon],svg[ix-maintenance-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M160 106.667c64.802 0 117.334 52.532 117.334 117.333c0 12.184-1.857 23.933-5.303 34.981L389.377 376.33c21.276 21.276 21.276 55.771 0 77.047s-55.771 21.276-77.047 0L194.982 336.03c-11.048 3.447-22.798 5.304-34.982 5.304c-64.8 0-117.333-52.532-117.333-117.334c0-12.505 1.956-24.553 5.58-35.856l55.502 55.412l50.238-16.732a54 54 0 0 1 3.437-3.778l1.623-1.623a54 54 0 0 1 3.767-3.428l16.742-50.179l-55.568-55.52c11.348-3.655 23.45-5.629 36.012-5.629m266.667 42.667v128H384v-128zm-21.333-90.667c14.727 0 26.666 11.94 26.666 26.667S420.061 112 405.334 112s-26.667-11.939-26.667-26.666s11.94-26.667 26.667-26.667"></svg:path>`,
})
export class IxMaintenanceInfoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
