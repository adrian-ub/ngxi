import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnTaskIcon],svg[bpmn-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="17.563" height="14.478" x="1.23" y="1035.052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.034" rx="2.759" transform="translate(55.328 -99820.702)scale(96.7529)"></svg:rect>`,
})
export class BpmnTaskIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
