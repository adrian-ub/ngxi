import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalOutline24pxIcon],svg[healthicons-hospital-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 6.706V5.194h-2v1.512H9.488v2H11v1.51h2v-1.51h1.512v-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 21a2 2 0 0 1-2-2V9.71a2 2 0 0 1 2-1.999h2.053V4a2 2 0 0 1 2-1.999h7.894a2 2 0 0 1 2 2v3.71L20 7.712a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2zM6.053 9.71H4V19h2.053zM9.438 19H8.053V4h7.894v15h-1.385v-5.449H9.438zm8.51 0H20V9.712h-2.053zm-6.8-.02v-3.46h1.704v3.46z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHospitalOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
