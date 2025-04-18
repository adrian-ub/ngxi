import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnReceiveTaskIcon],svg[bpmn-receive-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="currentColor" transform="translate(0 947.638)"><svg:rect width="1800" height="1460" x="100" y="-677.638" fill="transparent" stroke-linecap="round" stroke-width="120" rx="329.651" ry="328.5"></svg:rect><svg:g fill="none" stroke-width="45.443"><svg:path d="M376.496-429.067h1007.533v649.183H376.496z"></svg:path><svg:path stroke-miterlimit="1.4" d="m386.883-429.067l493.38 324.592l493.379-324.592z"></svg:path></svg:g></svg:g>`,
})
export class BpmnReceiveTaskIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
