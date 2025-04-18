import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnTaskNoneIcon],svg[bpmn-task-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.65 210C214.934 210 40 384.196 40 598.5v803c0 214.304 174.934 388.5 389.65 388.5h1140.7c214.716 0 389.65-174.196 389.65-388.5v-803c0-214.304-174.934-388.5-389.65-388.5zm0 120h1140.7C1720.887 330 1840 448.826 1840 598.5v803c0 149.674-119.113 268.5-269.65 268.5H429.65C279.113 1670 160 1551.174 160 1401.5v-803C160 448.826 279.113 330 429.65 330"></svg:path>`,
})
export class BpmnTaskNoneIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
