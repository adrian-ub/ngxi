import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCaretLeftIcon],svg[tabler-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 6l-6 6l6 6z"></svg:path>`,
})
export class TablerCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
