import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAddDuotoneLineIcon],svg[lets-icons-add-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsAddDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8.4" stroke="silver" stroke-opacity=".25"></svg:circle><svg:path stroke="#fff" stroke-linecap="square" d="M12 8v8m4-4H8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsAddDuotoneLine0)"></svg:path>`,
})
export class LetsIconsAddDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
