import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ServerIcon],svg[fluent-mdl2-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 384H640V256h640zm0 1024H640v-128h640zm0 256H640v-128h640zM1408 0q27 0 50 10t40 27t28 41t10 50v1792H384V128q0-27 10-50t27-40t41-28t50-10zm0 128H512v1664h896z"></svg:path>`,
})
export class FluentMdl2ServerIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
