import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnSubprocessCollapsedIcon],svg[bpmn-subprocess-collapsed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(0 995.638)"><svg:path fill="currentColor" d="M677.543 48.007V740.92h692.914V48.007zm63.473 63.472h565.968v565.97H741.016zm235.505 80.502v157.701H818.817v94.963H976.52v157.702h94.958V444.645h157.704v-94.963h-157.703v-157.7h-94.957z"></svg:path><svg:rect width="1699.302" height="1400.778" x="174.349" y="-672.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="100" rx="266.951"></svg:rect></svg:g>`,
})
export class BpmnSubprocessCollapsedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
