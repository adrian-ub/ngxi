import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderCheckDuotoneLineIcon],svg[lets-icons-folder-check-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsFolderCheckDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="silver" stroke-opacity=".25" d="M5 13V9c0-1.886 0-2.828.586-3.414S7.114 5 9 5h.343c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02l.656.656c.579.578.867.868 1.235 1.02S14.84 8 15.657 8H17c1.886 0 2.828 0 3.414.586S21 10.114 21 12v3c0 1.886 0 2.828-.586 3.414S18.886 19 17 19h-6"></svg:path><svg:path stroke="#fff" d="M4 16.5L6.5 19l5-5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsFolderCheckDuotoneLine0)"></svg:path>`,
})
export class LetsIconsFolderCheckDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
