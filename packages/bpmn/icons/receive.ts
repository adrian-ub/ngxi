import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnReceiveIcon],svg[bpmn-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="70"><svg:path d="M224 500h1552v1000H224z"></svg:path><svg:path stroke-miterlimit="1.4" d="m240 500l760 500l760-500z"></svg:path></svg:g>`,
})
export class BpmnReceiveIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
