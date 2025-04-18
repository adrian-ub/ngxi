import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSurprised1FilledIcon],svg[tdesign-surprised-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5c0-1.048.644-1.5 1-1.5s1 .452 1 1.5s-.644 1.5-1 1.5s-1-.452-1-1.5"></svg:path><svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm-5 0c-1.854 0-3 1.787-3 3.5s1.146 3.5 3 3.5s3-1.787 3-3.5s-1.146-3.5-3-3.5"></svg:path>`,
})
export class TdesignSurprised1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
