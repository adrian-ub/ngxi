import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderSendDuotoneLineIcon],svg[lets-icons-folder-send-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsFolderSendDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="silver" stroke-opacity=".25" d="M5 13V9c0-1.886 0-2.828.586-3.414S7.114 5 9 5h.343c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02l.656.656c.579.578.867.868 1.235 1.02S14.84 8 15.657 8H17c1.886 0 2.828 0 3.414.586S21 10.114 21 12v3c0 1.886 0 2.828-.586 3.414S18.886 19 17 19h-3"></svg:path><svg:path stroke="#fff" d="M5 17h5m0 0l-2.5-2.5M10 17l-2.5 2.5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsFolderSendDuotoneLine0)"></svg:path>`,
})
export class LetsIconsFolderSendDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
