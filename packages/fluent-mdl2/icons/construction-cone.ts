import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ConstructionConeIcon],svg[fluent-mdl2-construction-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1650 1920h270v128H128v-128h270L846 128h356zM626 1536l-96 384h988L1102 256H946l-192 768h414l32 128H722l-64 256h606l32 128z"></svg:path>`,
})
export class FluentMdl2ConstructionConeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
