import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeployIcon],svg[fluent-mdl2-deploy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 870l301 301l-90 90l-147-146v677H896v-677l-147 146l-90-90zM768 128h512v512H768zm128 384h256V256H896zM128 128h512v512H128zm1792 0v512h-512V128z"></svg:path>`,
})
export class FluentMdl2DeployIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
