import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHospitalFilledIcon],svg[lsicon-hospital-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.768 1.833a2.5 2.5 0 0 0-3.536 0L1.697 6.368a2.5 2.5 0 0 0 0 3.536l4.535 4.535a2.5 2.5 0 0 0 3.536 0l4.535-4.535a2.5 2.5 0 0 0 0-3.536zM7.5 5v2.5H5v1h2.5V11h1V8.5H11v-1H8.5V5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHospitalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
