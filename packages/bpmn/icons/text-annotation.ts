import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnTextAnnotationIcon],svg[bpmn-text-annotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="square" stroke-width="100.849" d="M1894.928-831.939h-458.41V852.603h458.41" transform="matrix(1.00396 0 0 1.01551 -3.915 995.337)"></svg:path><svg:path stroke-dasharray="196.992 196.992" stroke-width="196.992" d="m201.143 840.592l1205.186-954.18" transform="matrix(1.00396 0 0 1.01551 -3.915 995.337)"></svg:path></svg:g>`,
})
export class BpmnTextAnnotationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
