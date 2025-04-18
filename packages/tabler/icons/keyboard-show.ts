import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerKeyboardShowIcon],svg[tabler-keyboard-show-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 2v.01M10 7v.01M14 7v.01M18 7v.01M6 11v.01M18 11v.01M10 11h4m-4 8l2 2l2-2"></svg:path>`,
})
export class TablerKeyboardShowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
