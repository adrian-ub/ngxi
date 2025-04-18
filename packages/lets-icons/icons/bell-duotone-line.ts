import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellDuotoneLineIcon],svg[lets-icons-bell-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBellDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M6.5 8a5.5 5.5 0 1 1 11 0v2a7.5 7.5 0 0 0 1.5 4.5l.214.286a4 4 0 0 1 .13.18a1 1 0 0 1-.765 1.53c-.04.004-.1.004-.222.004H5.643c-.122 0-.183 0-.222-.003a1 1 0 0 1-.766-1.532c.021-.033.058-.082.13-.18L5 14.5A7.5 7.5 0 0 0 6.5 10z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M9.585 18.647a2.5 2.5 0 0 0 4.83 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBellDuotoneLine0)"></svg:path>`,
})
export class LetsIconsBellDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
