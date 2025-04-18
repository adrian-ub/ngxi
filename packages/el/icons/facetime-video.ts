import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFacetimeVideoIcon],svg[el-facetime-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 134.81v930.381h930.381V673.936L1200 1065.19V134.81L930.381 526.064V134.81z"></svg:path>`,
})
export class ElFacetimeVideoIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
