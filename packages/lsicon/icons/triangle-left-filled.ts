import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleLeftFilledIcon],svg[lsicon-triangle-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.227 3.554A.5.5 0 0 1 10.5 4v8a.5.5 0 0 1-.794.404l-5.5-4a.5.5 0 0 1 0-.808l5.5-4a.5.5 0 0 1 .52-.042" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
