import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneInsertPageBreakIcon],svg[ic-twotone-insert-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11H6V4h7v5h5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"></svg:path><svg:path fill="currentColor" d="M6 17h12v3H6z" opacity=".3"></svg:path>`,
})
export class IcTwotoneInsertPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
