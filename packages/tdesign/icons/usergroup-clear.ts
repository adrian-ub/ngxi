import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUsergroupClearIcon],svg[tdesign-usergroup-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a3 3 0 0 0 0 6v2a5 5 0 0 0-5 5v4H2v-4a7 7 0 0 1 3.75-6.2A5 5 0 0 1 9 3h1v2zm6 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0M7 19a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0-3 3v1h6v2H7zm10.879-4.536L20 16.586l2.121-2.122l1.415 1.415L21.414 18l2.121 2.121l-1.414 1.415L20 19.414l-2.121 2.121l-1.415-1.414L18.587 18l-2.121-2.121z"></svg:path>`,
})
export class TdesignUsergroupClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
