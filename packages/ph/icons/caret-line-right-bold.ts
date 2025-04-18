import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightBoldIcon],svg[ph-caret-line-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.49 119.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17-17L127 128L55.51 56.49a12 12 0 0 1 17-17ZM184 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCaretLineRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
