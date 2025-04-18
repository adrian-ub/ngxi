import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconStampOutlineIcon],svg[lsicon-stamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 13.5h12m-3-8a3 3 0 0 1-1.367 2.517C9.277 8.248 9 8.613 9 9.037V9.5h3.5a1 1 0 0 1 1 1v1h-11v-1a1 1 0 0 1 1-1H7v-.464c0-.423-.277-.788-.633-1.019A3 3 0 1 1 11 5.5Z"></svg:path>`,
})
export class LsiconStampOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
