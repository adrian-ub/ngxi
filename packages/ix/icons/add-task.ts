import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddTaskIcon],svg[ix-add-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64.001v42.667l-64.001-.001l.001 64H384v-64h-64V384h64v-64zM192 128v149.333H42.667V128zm-42.666 42.667h-64v64h64zM256 192h213.334v42.667H256z"></svg:path>`,
})
export class IxAddTaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
