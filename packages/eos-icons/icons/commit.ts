import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCommitIcon],svg[eos-icons-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-6.141a3.981 3.981 0 0 0-7.718 0H2v2h6.141a3.981 3.981 0 0 0 7.718 0H22Z"></svg:path>`,
})
export class EosIconsCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
