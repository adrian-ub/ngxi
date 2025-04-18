import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlipVerticalSquare2SolidIcon],svg[streamline-flip-vertical-square-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.75 0a.75.75 0 0 0 0 1.5h.5a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0v-.5A1.75 1.75 0 0 0 12.25 0zM14 7V5.5a.75.75 0 0 0-1.5 0v.75h-11V5.5a.75.75 0 0 0-1.5 0v6.75C0 13.216.784 14 1.75 14h10.5A1.75 1.75 0 0 0 14 12.25zM1.75 1.5a.25.25 0 0 0-.25.25v.5a.75.75 0 1 1-1.5 0v-.5C0 .784.784 0 1.75 0h.5a.75.75 0 1 1 0 1.5zM6 0a.75.75 0 0 0 0 1.5h2A.75.75 0 0 0 8 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFlipVerticalSquare2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
