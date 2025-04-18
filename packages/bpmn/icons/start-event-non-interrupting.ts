import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnStartEventNonInterruptingIcon],svg[bpmn-start-event-non-interrupting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="418.31 361.233" stroke-linecap="round" stroke-width="100" d="M1899 1023.995c21.545 567.431-598.38 1023.5-1133.58 835.92C217.327 1712.701-36.147 985.964 301.83 529.931C604.45 49.634 1373.576 22.397 1709.411 480.086c122.14 153.124 190.066 348.066 189.589 543.909z"></svg:path>`,
})
export class BpmnStartEventNonInterruptingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
