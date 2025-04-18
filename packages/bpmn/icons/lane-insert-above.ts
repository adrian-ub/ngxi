import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnLaneInsertAboveIcon],svg[bpmn-lane-insert-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95 196v182h100v-82h32V196zm232 0v100h200V196zm300 0v100h200V196zm300 0v100h200V196zm300 0v100h200V196zm300 0v100h200V196zm298 0v100h26v82h100V196zM95 478v188h100V478zm1756 0v188h100V478zM96 762.643v1080h1856v-1080zm1756 97.699v891.543H192V860.344z"></svg:path>`,
})
export class BpmnLaneInsertAboveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
