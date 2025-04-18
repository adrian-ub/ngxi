import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnConditionalFlowIcon],svg[bpmn-conditional-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1866.407 206.692s-585.454 298.724-882.844 438.406c63.707 58.178 122.963 120.927 184.437 181.407c-302.353 306.387-144.71 152.769-447.062 459.156c22.172 21.16 44.327 42.309 66.5 63.469c302.352-306.388 144.71-152.738 447.062-459.125c61.588 61.37 122.828 123.086 184.438 184.437c158.845-312.83 447.469-867.75 447.469-867.75"></svg:path><svg:path fill="transparent" stroke="currentColor" stroke-linecap="square" stroke-width="84.852" d="m717.5 1703.126l-417.555 67.921l67.91-417.576l417.557-67.891z"></svg:path>`,
})
export class BpmnConditionalFlowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
