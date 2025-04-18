import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnLaneIcon],svg[bpmn-lane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 484v1080h1856V484zm96 989.242v-891.54l1660-.003v891.543z"></svg:path>`,
})
export class BpmnLaneIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
