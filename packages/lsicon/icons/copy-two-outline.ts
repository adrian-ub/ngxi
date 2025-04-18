import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCopyTwoOutlineIcon],svg[lsicon-copy-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6.5 7v2.5m0 0V12m0-2.5H4m2.5 0H9M5.5 4V2.5h8v8H12m-9.5 3v-8h8v8z"></svg:path>`,
})
export class LsiconCopyTwoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
