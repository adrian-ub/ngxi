import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnDataObjectIcon],svg[bpmn-data-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="90" d="M438.243 252.897h794.703l328.81 337.647v1156.564H438.244V252.897h754.486v371.647h369.028"></svg:path>`,
})
export class BpmnDataObjectIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
