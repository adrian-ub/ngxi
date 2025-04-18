import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnCallActivityIcon],svg[bpmn-call-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="1700" height="1360" x="150" y="-627.638" fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-width="220" rx="311.337" ry="306" transform="translate(0 947.638)"></svg:rect>`,
})
export class BpmnCallActivityIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
