import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitDraghandleIcon],svg[formkit-draghandle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 72c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8m0-32c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8m30 64c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8m0-32c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8m0-32c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8"></svg:path>`,
})
export class FormkitDraghandleIcon {
  readonly viewBox = input("0 0 46 80")
  readonly width = input("0.58em")
  readonly height = input("1em")
}
