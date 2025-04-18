import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFilePngOutlineIcon],svg[lsicon-file-png-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M15 7.5h-3v4h2.5v-2H13m-8.5.5H7V7.5H4.5m0 2.5v2m0-2V7.5m0 0V7m4 .5c0 1.5 2 3 2 4m-2-4V12m0-4.5V7m2 4.5v.5m0-.5V7m1 6.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFilePngOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
