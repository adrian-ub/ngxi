import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightIcon],svg[ph-caret-line-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.66 122.34a8 8 0 0 1 0 11.32l-80 80a8 8 0 0 1-11.32-11.32L132.69 128L58.34 53.66a8 8 0 0 1 11.32-11.32ZM184 40a8 8 0 0 0-8 8v160a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCaretLineRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
