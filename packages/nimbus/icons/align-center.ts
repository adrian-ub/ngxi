import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusAlignCenterIcon],svg[nimbus-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.13 9h9.75v1.25H3.13zM.5 5.75h15V7H.5zm0 6.5h15v1.25H.5zM3.13 2.5h9.75v1.25H3.13z"></svg:path>`,
})
export class NimbusAlignCenterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
