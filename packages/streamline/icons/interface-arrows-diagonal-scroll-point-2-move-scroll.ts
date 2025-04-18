import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalScrollPoint2MoveScrollIcon],svg[streamline-interface-arrows-diagonal-scroll-point-2-move-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M5 .5H1a.5.5 0 0 0-.5.5v4M9 13.5h4a.5.5 0 0 0 .5-.5V9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDiagonalScrollPoint2MoveScrollIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
