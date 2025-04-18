import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileTxtOutlineIcon],svg[lsicon-file-txt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M15 7.5h-1.5m0 0H12m1.5 0V12M7 7.5H5.5m0 0H4m1.5 0V12M8 7c0 .5.75 1.5 1.5 2.5m0 0c.75 1 1.5 2 1.5 2.5M9.5 9.5c-.75 1-1.5 2-1.5 2.5m1.5-2.5c.75-1 1.5-2 1.5-2.5m.5 6.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFileTxtOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
