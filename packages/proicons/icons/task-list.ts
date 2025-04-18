import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTaskListIcon],svg[proicons-task-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 4.5h11m-14-1.446L4.357 5.946L2.75 4.34m7.5 7.66h11m-14-1.446l-2.893 2.892L2.75 11.84m7.5 7.66h11m-14-1.446l-2.893 2.892L2.75 19.34"></svg:path>`,
})
export class ProiconsTaskListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
