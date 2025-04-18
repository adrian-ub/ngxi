import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnDataInputIcon],svg[bpmn-data-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-dashoffset="200" stroke-width="40" d="M799.876 406.976v159.072H587.842v119.547h212.034v159.073l232.942-218.846z"></svg:path><svg:path stroke-width="90" d="M438.243 252.897h794.702l328.812 337.647v1156.564H438.243V252.897h754.486v371.647h369.028"></svg:path></svg:g>`,
})
export class BpmnDataInputIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
