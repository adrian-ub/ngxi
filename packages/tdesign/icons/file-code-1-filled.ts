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
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM9.293 18.207L6.086 15l3.207-3.207l1.414 1.414L8.914 15l1.793 1.793zm4-1.414L15.086 15l-1.793-1.793l1.414-1.414L17.914 15l-3.207 3.207z"></svg:path>`,
})
export class TdesignFileCode1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
