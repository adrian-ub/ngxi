import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerScrollUpDownMoveScrollVerticalIcon],svg[streamline-interface-page-controller-scroll-up-down-move-scroll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.25 5L6.74.61a.36.36 0 0 1 .52 0L11.75 5m-9.5 4l4.49 4.39a.36.36 0 0 0 .52 0L11.75 9"></svg:path>`,
})
export class StreamlineInterfacePageControllerScrollUpDownMoveScrollVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
