import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTasksDoneIcon],svg[ix-tasks-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.334h170.666V128H256zm0 149.333h170.666v42.667H256zM85.332 341.334h106.666V448H85.333zm32 32V416h42.666v-42.666zM255.999 384h170.667v42.667H256zM189.815 46.126l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.333l25.364 19.511l-76.032 98.842l-68.617-60.04l21.072-24.082l42.968 37.574z"></svg:path>`,
})
export class IxTasksDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
