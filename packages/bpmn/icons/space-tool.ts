import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnSpaceToolIcon],svg[bpmn-space-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M731.39 100v1800h76V100zm466.824 0v1800h76V100zm401.938 574v216.91l-189.083 1.943v211.667h189.084V1326l325.916-326zm-1190.834 0L81.29 1000l328.03 326v-221.951h186.97V895.008H409.318z"></svg:path>`,
})
export class BpmnSpaceToolIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
