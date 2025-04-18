import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnDataOutputIcon],svg[bpmn-data-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="90" d="M438.243 252.897h794.702l328.812 337.647v1156.564H438.243V252.897h754.486v371.647h369.028"></svg:path><svg:path fill="currentColor" d="M789.963 367.952v185.303H577.928V712.8h212.035v185.305l282.15-265.078z"></svg:path>`,
})
export class BpmnDataOutputIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
