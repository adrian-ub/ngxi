import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexListBulletedIcon],svg[codex-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7h10M9 12h10M9 17h10M5 17h-.01M5 12h-.01M5 7h-.01"></svg:path>`,
})
export class CodexListBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
