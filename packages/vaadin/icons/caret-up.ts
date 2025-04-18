import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretUpIcon],svg[vaadin-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12H3l5-7z"></svg:path>`,
})
export class VaadinCaretUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
