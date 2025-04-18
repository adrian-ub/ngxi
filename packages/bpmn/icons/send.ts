import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnSendIcon],svg[bpmn-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke="currentColor"><svg:path d="M198 484h1604l-802 454z"></svg:path><svg:path d="m200 652l800 448l804-448v896H200z"></svg:path></svg:g>`,
})
export class BpmnSendIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
