import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexBracketsVerticalIcon],svg[codex-brackets-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M13.333 7.5L10 4.167L6.667 7.5m6.666 5L10 15.833L6.667 12.5"></svg:path>`,
})
export class CodexBracketsVerticalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
