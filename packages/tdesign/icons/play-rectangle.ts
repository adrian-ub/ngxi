import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayRectangleIcon],svg[tdesign-play-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm5 1.37L17.75 12L8 17.63zm2 3.465v4.33L13.75 12z"></svg:path>`,
})
export class TdesignPlayRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
