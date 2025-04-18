import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLogicDiagramIcon],svg[ix-logic-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.666V85.333H42.667v341.333zm-42.667-42.667H85.334V128h341.333zM256 277.333h21.334v-85.334H256zm0 21.333h85.334v-21.333H256zm-64-85.333h64v-21.334h-64zm0 42.666V149.333h-85.333v106.666zm0 106.667v-21.333h149.334v21.333h64V255.999h-64v64H192v-21.333h-85.333v64z"></svg:path>`,
})
export class IxLogicDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
