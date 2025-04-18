import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PYIcon],svg[fluent-mdl2-p-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v1792H128V128zm-119 119H247v1554h1554zM602 1664h-90V896h211q55 0 102 13t83 41t54 71t20 104q0 61-22 107t-60 78t-89 48t-108 16H602zm0-372h94q40 0 75-8t61-28t40-51t15-76q0-42-13-71t-38-47t-57-26t-72-8H602zm680 90l-247-486h102l172 347q6 11 10 23t11 24q3-13 8-24t12-23l180-347h95l-253 484v284h-90z"></svg:path>`,
})
export class FluentMdl2PYIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
