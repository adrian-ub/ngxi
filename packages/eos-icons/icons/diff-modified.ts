import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsDiffModifiedIcon],svg[eos-icons-diff-modified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.2 3H4.8A1.8 1.8 0 0 0 3 4.8v14.4A1.8 1.8 0 0 0 4.8 21h14.4a1.8 1.8 0 0 0 1.8-1.8V4.8A1.8 1.8 0 0 0 19.2 3M12 16a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path>`,
})
export class EosIconsDiffModifiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
