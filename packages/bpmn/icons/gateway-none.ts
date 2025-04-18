import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnGatewayNoneIcon],svg[bpmn-gateway-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.937 971.017c-28.669 28.668-28.536 77.296.134 105.963l849.97 849.965c28.67 28.677 77.294 28.803 105.963 0l850.105-850.1c28.67-28.668 28.536-77.296-.135-105.964l-849.971-849.974c-28.67-28.668-77.294-28.803-105.963 0l-850.105 850.11zm104.36 53.05l798.66-798.667l798.66 798.666l-798.66 798.657l-798.66-798.657z"></svg:path>`,
})
export class BpmnGatewayNoneIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
