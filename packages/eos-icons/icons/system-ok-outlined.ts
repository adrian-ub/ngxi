import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSystemOkOutlinedIcon],svg[eos-icons-system-ok-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.005 8.92L7.42 7.508l3.336 3.336l5.835-5.836l1.415 1.415l-7.25 7.248Z"></svg:path><svg:path fill="currentColor" d="M21 2H3a2.006 2.006 0 0 0-2 2l.004 12.004A2 2 0 0 0 3 18h7v2l-1.996.004L8 22h8l.004-1.996L14 20v-2h7a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2m0 14H3V4h18Z"></svg:path>`,
})
export class EosIconsSystemOkOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
