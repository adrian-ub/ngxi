import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TabOneColumnIcon],svg[fluent-mdl2-tab-one-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 256h896v1792H0V0h1024zm768 1664V384H896V128H128v1792zM256 1792V512h1408v1280zM384 640v1024h1152V640z"></svg:path>`,
})
export class FluentMdl2TabOneColumnIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
