import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightThinIcon],svg[ph-caret-line-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146.83 125.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66-5.66L138.34 128L61.17 50.83a4 4 0 0 1 5.66-5.66ZM184 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCaretLineRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
