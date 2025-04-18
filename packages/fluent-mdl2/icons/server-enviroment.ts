import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ServerEnviromentIcon],svg[fluent-mdl2-server-enviroment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 384h512v128H768zm0 768h512v128H768zm0 256h512v128H768zm1170 640H110l160-640h242V256q0-26 10-49t27-41t41-28t50-10h768q26 0 49 10t41 27t28 41t10 50v1152h242zM640 1664h768V256H640zm1134 256l-96-384h-142v256H512v-256H370l-96 384z"></svg:path>`,
})
export class FluentMdl2ServerEnviromentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
