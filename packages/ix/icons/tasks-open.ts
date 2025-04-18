import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTasksOpenIcon],svg[ix-tasks-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 42.667H192v106.667H85.333zm32 32v42.667H160V74.667zM256 85.334h170.666V128H256zM85.333 192H192v106.667H85.333zm32 32v42.667H160V224zM256 234.667h170.666v42.667H256zM85.333 341.334H192V448H85.333zm32 32V416H160v-42.666zM256 384h170.666v42.667H256z"></svg:path>`,
})
export class IxTasksOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
