import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTableFilledIcon],svg[lsicon-table-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1 2.5v2h2.5v-2zm3.5 0v2h3v-2zm6.5-1H3V3h10zm0 4h-2.5v2H13zM9.5 13v-1.5h-3V13zm-4 0v-1.5H3V13zm1-4.5v2h3v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTableFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
