import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnBusinessRuleIcon],svg[bpmn-business-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.277 418v382.37h1574.785V418z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="70" d="M213.105 1000V418h1573.79v1164H600V791.606V1582H213.105v-401.564h1573.79h-1573.79z"></svg:path>`,
})
export class BpmnBusinessRuleIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
