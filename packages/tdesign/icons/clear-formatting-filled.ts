import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFormattingFilledIcon],svg[tdesign-clear-formatting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.031 1.888l9.657 9.657l-8.345 8.345l-.27.272H20v2H6.748L.253 15.667zM5.788 12.96l-2.707 2.707l4.495 4.495h4.68l.365-.37z"></svg:path>`,
})
export class TdesignClearFormattingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
