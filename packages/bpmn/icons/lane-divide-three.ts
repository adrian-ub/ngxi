import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnLaneDivideThreeIcon],svg[bpmn-lane-divide-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 294v1460h1856V294zm96 90.758h1660V737h-26v100h26v374h-26v100h26v345.299H192V1311h36v-100h-36V837h36V737h-36zM328 737v100h200V737zm300 0v100h200V737zm300 0v100h200V737zm300 0v100h200V737zm300 0v100h200V737zM328 1211v100h200v-100zm300 0v100h200v-100zm300 0v100h200v-100zm300 0v100h200v-100zm300 0v100h200v-100z"></svg:path>`,
})
export class BpmnLaneDivideThreeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
