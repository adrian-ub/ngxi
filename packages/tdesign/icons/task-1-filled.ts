import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTask1FilledIcon],svg[tdesign-task-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M3 3h3v4h12V3h3v20H3z"></svg:path>`,
})
export class TdesignTask1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
