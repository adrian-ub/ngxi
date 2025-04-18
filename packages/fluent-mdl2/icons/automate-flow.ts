import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AutomateFlowIcon],svg[fluent-mdl2-automate-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M821 768h568L313 1792H56l304-640H0L535 128h612zm-559 896l807-768H613l325-640H613l-402 768h351l-304 640zM2048 640h-256v640h256v640h-640v-640h256v-256h-384l128-128h256V640h-256V0h640zm-128 768h-384v384h384zm-384-896h384V128h-384z"></svg:path>`,
})
export class FluentMdl2AutomateFlowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
