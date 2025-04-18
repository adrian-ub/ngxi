import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnLaneDivideTwoIcon],svg[bpmn-lane-divide-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 294v1460h1856V294zm96 90.758h1660V974h-26v100h26v582.299H192V1074h36V974h-36zM328 974v100h200V974zm300 0v100h200V974zm300 0v100h200V974zm300 0v100h200V974zm300 0v100h200V974z"></svg:path>`,
})
export class BpmnLaneDivideTwoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
