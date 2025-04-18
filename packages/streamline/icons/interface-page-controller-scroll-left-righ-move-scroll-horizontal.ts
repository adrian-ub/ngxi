import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerScrollLeftRighMoveScrollHorizontalIcon],svg[streamline-interface-page-controller-scroll-left-righ-move-scroll-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 2.25l4.39 4.49a.36.36 0 0 1 0 .52L9 11.75m-4-9.5L.61 6.74a.36.36 0 0 0 0 .52L5 11.75"></svg:path>`,
})
export class StreamlineInterfacePageControllerScrollLeftRighMoveScrollHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
