import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnParallelMiMarkerIcon],svg[bpmn-parallel-mi-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M500 400v1200h200V400zm400 0v1200h200V400zm400 0v1200h200V400z"></svg:path>`,
})
export class BpmnParallelMiMarkerIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
