import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHospitalAltIcon],svg[la-hospital-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.906L3.625 10.063l-.625.28V27h26V10.344l-.625-.281zm0 2.188l11 4.593V25H5V11.687zM15 13v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaHospitalAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
