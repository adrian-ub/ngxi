import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDistributeVerticalCenterIcon],svg[mdi-distribute-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16h3v-2h14v2h3v2h-3v2H5v-2H2zm0-8h5v2h10V8h5V6h-5V4H7v2H2z"></svg:path>`,
})
export class MdiDistributeVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
