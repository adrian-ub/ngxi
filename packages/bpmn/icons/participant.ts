import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnParticipantIcon],svg[bpmn-participant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 402v1280h1856V402zm1756 97.7v1091.542H480V499.702zm-1660 0h192v1091.541H192z"></svg:path>`,
})
export class BpmnParticipantIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
