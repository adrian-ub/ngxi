import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconProcessModeFilledIcon],svg[lsicon-process-mode-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.146-.354l-3.5-3.5A.5.5 0 0 0 9 1zm7.793 3.5L9.5 2.707V4.5zM7.5 5.5H5v-1h2.5zm3.5 3H5v-1h6zm-6 3h6v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconProcessModeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
