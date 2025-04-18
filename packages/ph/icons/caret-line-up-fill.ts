import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpFillIcon],svg[ph-caret-line-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 186.34A8 8 0 0 1 208 200H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0ZM48 80h160a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCaretLineUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
