import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMinimizeFilledIcon],svg[lsicon-shell-window-minimize-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 8.5H3v-1h10z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShellWindowMinimizeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
