import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsKeypadSharpIcon],svg[famicons-keypad-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="96" height="96" x="80" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="16" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="80" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="144" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="80" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="208" y="400" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="96" height="96" x="336" y="272" fill="currentColor" rx="8" ry="8"></svg:rect>`,
})
export class FamiconsKeypadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
