import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAnguishedFaceIcon],svg[twemoji-anguished-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"></svg:path><svg:ellipse cx="11.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:ellipse cx="24.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:path fill="#664500" d="M5.999 12a1 1 0 0 1-.799-1.6C8.462 6.05 12.816 6 13 6a1 1 0 0 1 .004 2c-.155.002-3.568.086-6.204 3.6a1 1 0 0 1-.801.4m24.002 0a1 1 0 0 1-.801-.4c-2.64-3.521-6.061-3.598-6.206-3.6a1 1 0 0 1-.991-1.005A.997.997 0 0 1 23 6c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.799 1.6m-6.516 15.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379a.5.5 0 0 0 .232.544a.51.51 0 0 0 .596-.06c.009-.008 1.013-.863 4.657-.863c3.59 0 4.617.83 4.656.863a.5.5 0 0 0 .829-.484"></svg:path>`,
})
export class TwemojiAnguishedFaceIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
