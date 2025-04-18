import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBacktopRectangleFilledIcon],svg[tdesign-backtop-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM6.5 8V6h11v2zM12 9l4 5h-3v4.5h-2V14H8z"></svg:path>`,
})
export class TdesignBacktopRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
