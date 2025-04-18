import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFilePptOutlineIcon],svg[lsicon-file-ppt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M15 7.5h-1.5m0 0H12m1.5 0V12M5 10h1.5V7.5h-2V12M9 10h1.5V7.5h-2V12m3 1.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFilePptOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
