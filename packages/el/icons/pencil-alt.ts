import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPencilAltIcon],svg[el-pencil-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m201.861 187.424c17.59.139 34.667 6.627 47.568 19.529l99.849 99.81c27.6 27.601 25.709 74.104-4.143 104.027c-29.925 29.925-76.502 31.704-104.026 4.18l-99.811-99.81c-27.601-27.525-25.671-74.177 4.18-104.027c15.859-15.899 36.45-23.866 56.383-23.709M637.348 319.301l199.658 199.62l-324.468 324.391L312.88 643.655zM261.056 681.459l210.6 210.601l-263.335 52.735z"></svg:path>`,
})
export class ElPencilAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
