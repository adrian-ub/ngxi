import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddTaskListIcon],svg[ix-add-task-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.334h170.666V128H256zm0 149.333h170.666v42.667H256zM189.814 46.126l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.333l25.364 19.511l-76.032 98.842l-68.617-60.04l21.072-24.082l42.968 37.574zM426.666 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64z"></svg:path>`,
})
export class IxAddTaskListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
