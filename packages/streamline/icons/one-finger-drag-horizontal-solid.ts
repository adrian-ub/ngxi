import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerDragHorizontalSolidIcon],svg[streamline-one-finger-drag-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5.5a.5.5 0 0 0-.854-.354l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5A.5.5 0 0 0 2.5 3.5v-1h1a.5.5 0 0 0 0-1h-1zm2.407 3.299l.947 5.86l-.52.188a1.715 1.715 0 0 0-.658 2.799l1 1.045a1 1 0 0 0 .722.309h6.482a1 1 0 0 0 .994-1.113l-.367-3.236a2.573 2.573 0 0 0-2.951-2.13l-2.432.394l-.73-4.519a1.26 1.26 0 0 0-2.487.403m5.402-3.76a.5.5 0 0 1 .545.107l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5A.5.5 0 0 1 10 3.5v-1H9a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 .309-.462Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneFingerDragHorizontalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
