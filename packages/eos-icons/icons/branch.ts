import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsBranchIcon],svg[eos-icons-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5a3 3 0 1 0-4 2.816V11H7V7.816a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0V13h10a2 2 0 0 0 2-2V7.816A2.99 2.99 0 0 0 21 5"></svg:path>`,
})
export class EosIconsBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
