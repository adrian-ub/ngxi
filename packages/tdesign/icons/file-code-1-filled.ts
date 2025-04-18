import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileCode1FilledIcon],svg[tdesign-file-code-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h10v8h8v14H3zm6.293 18.207l1.414-1.414L8.914 16l1.793-1.793l-1.414-1.414L6.086 16zm4-1.414l1.414 1.414L17.914 16l-3.207-3.207l-1.414 1.414L15.086 16z"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414z"></svg:path>`,
})
export class TdesignFileCode1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
