import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineExpandHorizontal1SolidIcon],svg[streamline-expand-horizontal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 7 0M3.671 3.408a.5.5 0 0 1 .309.462v6.26a.5.5 0 0 1-.854.354L.26 7.617a.86.86 0 0 1 0-1.233l2.867-2.867a.5.5 0 0 1 .545-.109Zm6.658 0a.5.5 0 0 1 .545.109l2.867 2.867a.86.86 0 0 1 0 1.233l-2.867 2.867a.5.5 0 0 1-.854-.354V3.87a.5.5 0 0 1 .309-.462" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineExpandHorizontal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
