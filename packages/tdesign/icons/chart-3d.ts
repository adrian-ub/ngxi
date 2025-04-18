import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChart3dIcon],svg[tdesign-chart-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zm0 2.31L5.34 7L12 10.845L18.66 7zm7.66 5.577L13 12.577v7.69l6.66-3.844zM11 20.268v-7.69L4.34 8.731v7.69zM13 5v4h-2V5zm-3.098 9.366l-3.464 2l-1-1.732l3.464-2zm5.196-1.732l3.464 2l-1 1.732l-3.464-2z"></svg:path>`,
})
export class TdesignChart3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
