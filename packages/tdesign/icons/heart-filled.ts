import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHeartFilledIcon],svg[tdesign-heart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 4.818a6.228 6.228 0 0 1 8.51 9.087l-5.225 5.225L12 22.415l-7.28-7.279l-1.23-1.232a6.228 6.228 0 0 1 8.511-9.086"></svg:path>`,
})
export class TdesignHeartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
