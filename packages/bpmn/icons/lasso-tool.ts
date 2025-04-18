import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnLassoToolIcon],svg[bpmn-lasso-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linejoin="round" stroke-width="205.238" d="M1304.97 699.019H868.856"></svg:path><svg:path stroke-width="80" d="M1566.732 696.368h285.2v273.246m.001 592.034v273.247h-277.985m277.304-652.426v153.246m-1140.123 228.21v273.247h277.984m209.817 0h165.201"></svg:path><svg:path stroke-linejoin="round" stroke-width="205.238" d="M708.49 104.8v436.115m0 323.815v436.114M545.042 699.019H108.927"></svg:path></svg:g>`,
})
export class BpmnLassoToolIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
