import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnSendTaskIcon],svg[bpmn-send-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="currentColor" transform="translate(0 947.638)"><svg:rect width="1800" height="1460" x="100" y="-677.638" fill="transparent" stroke-linecap="round" stroke-width="120" rx="329.651" ry="328.5"></svg:rect><svg:g fill="currentColor" fill-rule="evenodd" stroke-width=".623"><svg:path d="M346.858-428.042h999.853l-499.927 283z"></svg:path><svg:path d="m348.104-323.32l498.68 279.261l501.174-279.26V235.2H348.104z"></svg:path></svg:g></svg:g>`,
})
export class BpmnSendTaskIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
