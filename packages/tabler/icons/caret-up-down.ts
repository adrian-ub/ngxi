import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCaretUpDownIcon],svg[tabler-caret-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 10l-6-6l-6 6zm0 4l-6 6l-6-6z"></svg:path>`,
})
export class TablerCaretUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
