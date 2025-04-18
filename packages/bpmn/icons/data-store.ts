import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnDataStoreIcon],svg[bpmn-data-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="70" d="M355.105 530.563v938.874c42.996 208.638 1246.884 208.638 1289.88 0V530.563c-42.996-208.638-1246.884-208.638-1289.88 0c42.996 208.639 1246.884 208.639 1289.88 0M355.105 708.61c42.996 208.639 1246.884 208.639 1289.88 0M355.105 886.657c42.996 208.639 1246.884 208.639 1289.88 0"></svg:path>`,
})
export class BpmnDataStoreIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
