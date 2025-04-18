import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileCdrOutlineIcon],svg[lsicon-file-cdr-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 7.5H5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2m7.5.5c0-.5-1-2-1-2m0 0h1V7.5H12m1.5 2.5H12m0 0V7.5m0 2.5v2m0-4.5V7m-.5 6.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6M8 7.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H8z"></svg:path>`,
})
export class LsiconFileCdrOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
