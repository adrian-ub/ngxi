import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elBriefcaseIcon],svg[el-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M318.141 73.72v167.244H0v487.372h541.219V628.314h117.562v100.021H1200V240.964H881.808V73.72zm86.456 86.456h390.755v80.788H404.597zM0 822.188v304.092h1200V822.188H658.781v96.617H541.219v-96.617z"></svg:path>`,
})
export class ElBriefcaseIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
