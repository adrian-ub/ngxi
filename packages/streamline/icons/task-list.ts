import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTaskListIcon],svg[streamline-task-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.719 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707zM6.777 6.375h2.5m-2.5 3.469h2.5"></svg:path><svg:path d="m2.91 9.787l.838.838L5.145 8.67M2.91 6.256l.838.838l1.397-1.955"></svg:path></svg:g>`,
})
export class StreamlineTaskListIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
