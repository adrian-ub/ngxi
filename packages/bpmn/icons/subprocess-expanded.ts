import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnSubprocessExpandedIcon],svg[bpmn-subprocess-expanded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(0 995.638)"><svg:path fill="currentColor" d="M677.543 49.587V742.5h692.914V49.587zm63.468 63.489h565.978v565.956H741.01z"></svg:path><svg:path fill="currentColor" d="M816.126 337.803v96.207h415.748v-96.207z"></svg:path><svg:rect width="1699.302" height="1400.778" x="174.349" y="-672.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="100" rx="266.951"></svg:rect></svg:g>`,
})
export class BpmnSubprocessExpandedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
