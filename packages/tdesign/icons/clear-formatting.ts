import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignClearFormattingIcon],svg[tdesign-clear-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.031 1.888l9.657 9.657l-8.345 8.345l-.27.272H20v2H6.748L.253 15.667zm.322 16.164l6.507-6.507l-6.829-6.828l-6.828 6.828l6.828 6.828l.32-.323zM5.788 12.96l-2.707 2.707l4.495 4.495h4.68l.365-.37z"></svg:path>`,
})
export class TdesignClearFormattingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
