import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNotebookFilledIcon],svg[ix-notebook-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 85.333c-11.782 0-21.334 9.552-21.334 21.334v256h341.334v-256c0-11.782-9.551-21.334-21.334-21.334zM384 128H128v192h256zM277.333 384h192v21.333c0 11.783-9.551 21.334-21.333 21.334H64c-11.782 0-21.333-9.551-21.333-21.334V384h192v21.333h42.666z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M149.333 149.333h213.334v149.334H149.333z"></svg:path>`,
})
export class IxNotebookFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
