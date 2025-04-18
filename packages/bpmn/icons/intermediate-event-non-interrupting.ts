import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnIntermediateEventNonInterruptingIcon],svg[bpmn-intermediate-event-non-interrupting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="100" transform="translate(0 995.638)"><svg:circle cx="1024" cy="28.357" r="875" stroke-dasharray="418.31 361.233"></svg:circle><svg:circle cx="1024" cy="28.357" r="685" stroke-dasharray="348.31 261.233" stroke-dashoffset="500"></svg:circle></svg:g>`,
})
export class BpmnIntermediateEventNonInterruptingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
