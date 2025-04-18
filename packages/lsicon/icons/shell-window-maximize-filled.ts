import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMaximizeFilledIcon],svg[lsicon-shell-window-maximize-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.146 4.146A.5.5 0 0 1 3.5 4h9a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShellWindowMaximizeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
