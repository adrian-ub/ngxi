import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsForkOutlinedIcon],svg[eos-icons-fork-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a2.993 2.993 0 0 0-1 5.816V11H6V7.816a3 3 0 1 0-2 0V11a2 2 0 0 0 2 2h5v4.184a3 3 0 1 0 2 0V13h5a2 2 0 0 0 2-2V7.816A2.993 2.993 0 0 0 19 2M5 6a1 1 0 1 1 1-1a1 1 0 0 1-1 1m7 15a1 1 0 1 1 1-1a1 1 0 0 1-1 1m7-15a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EosIconsForkOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
