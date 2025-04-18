import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsYenIcon],svg[lineicons-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.108 3.472a.75.75 0 0 0-1.06 1.06L11.5 9.984v1.498H7.928a.75.75 0 0 0 0 1.5H11.5v1.5H7.928a.75.75 0 0 0 0 1.5H11.5V20a.75.75 0 0 0 1.5 0v-4.018h3.574a.75.75 0 0 0 0-1.5H13v-1.5h3.574a.75.75 0 0 0 0-1.5H13V9.985l5.453-5.453a.75.75 0 0 0-1.061-1.06L12.25 8.613z"></svg:path>`,
})
export class LineiconsYenIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
