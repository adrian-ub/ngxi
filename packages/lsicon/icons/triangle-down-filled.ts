import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleDownFilledIcon],svg[lsicon-triangle-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.554 5.773A.5.5 0 0 1 4 5.5h8a.5.5 0 0 1 .404.794l-4 5.5a.5.5 0 0 1-.808 0l-4-5.5a.5.5 0 0 1-.042-.52" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
