import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFountainPenIcon],svg[mdi-fountain-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.95 14.93l4.24-5.66l8.49-7.07c.39-.39 1.04-.39 1.41 0l.71.71c.39.37.39 1.02 0 1.41l-7.07 8.49l-5.66 4.24zm1.41 2.83l-2.12-2.12l-2.83 1.41L2 21.29l2.12-2.12c.2-.17.51-.17.71 0c.17.2.17.51 0 .71L2.71 22l4.24-1.41z"></svg:path>`,
})
export class MdiFountainPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
