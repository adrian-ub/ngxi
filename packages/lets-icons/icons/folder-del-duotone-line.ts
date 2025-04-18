import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderDelDuotoneLineIcon],svg[lets-icons-folder-del-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsFolderDelDuotoneLine0"><svg:g fill="none" stroke-width="1.2"><svg:path stroke="#fff" d="m17 21l5-5m0 5l-5-5"></svg:path><svg:path stroke="silver" stroke-opacity=".25" d="M19.5 14v-1.5c0-1.886 0-2.828-.586-3.414S17.386 8.5 15.5 8.5h-1.343c-.818 0-1.226 0-1.594-.152s-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02S8.66 5.5 7.843 5.5H7.5c-1.886 0-2.828 0-3.414.586S3.5 7.614 3.5 9.5v5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H15"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsFolderDelDuotoneLine0)"></svg:path>`,
})
export class LetsIconsFolderDelDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
