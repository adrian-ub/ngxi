import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnStartEventNoneIcon],svg[bpmn-start-event-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015.477 98.928C654.779 97.73 308.674 330.794 171.775 664.19c-144.118 330.153-69.237 740.284 182.862 997.772c242.463 260.992 641.949 356.786 976.52 234.672c346.739-118.074 602.723-458.594 616.638-825.092c23.34-360.13-188.535-719.421-512.953-876.293C1307.807 131.856 1165.949 98.797 1024 99a832 832 0 0 0-8.523-.072m25.351 99.972c353.073 1.939 685.605 257.36 776.918 599.03c97.03 326.907-34.214 705.405-315.906 899.025C1209.227 1912.03 775.3 1896.47 498.977 1660.8c-278.414-221.98-378.072-632.576-235.227-958.182C387.557 401.605 698.338 195.18 1024 199q8.421-.146 16.828-.1"></svg:path>`,
})
export class BpmnStartEventNoneIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
