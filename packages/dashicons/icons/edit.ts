import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditIcon],svg[dashicons-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02l-5.56 1.16l1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07m-2.73 2.79l-5.59 5.61l1.11 1.11l5.54-5.65zm-2.97 8.23l5.58-5.6l-1.07-1.08l-5.59 5.6z"></svg:path>`,
})
export class DashiconsEditIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
