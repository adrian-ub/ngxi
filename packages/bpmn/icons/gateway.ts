import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnGatewayIcon],svg[bpmn-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12.824" height="12.824" x="-736.344" y="737.679" fill="transparent" stroke="currentColor" stroke-width="1.15" ry=".199" transform="rotate(-45 -120466.552 -49977.13)scale(96.7529)"></svg:rect>`,
})
export class BpmnGatewayIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
