import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPlayRectangleFilledIcon],svg[tdesign-play-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-6.25 9l-8 4.5v-9z"></svg:path>`,
})
export class TdesignPlayRectangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
