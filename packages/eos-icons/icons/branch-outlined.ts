import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsBranchOutlinedIcon],svg[eos-icons-branch-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a2.993 2.993 0 0 0-1 5.816V11H7V7.816a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0V13h10a2 2 0 0 0 2-2V7.816A2.993 2.993 0 0 0 18 2M6 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1M6 6a1 1 0 1 1 1-1a1 1 0 0 1-1 1m12 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EosIconsBranchOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
