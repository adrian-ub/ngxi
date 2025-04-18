import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMaximizeOutlineIcon],svg[lsicon-shell-window-maximize-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3.5 4.5h9v7h-9z"></svg:path>`,
})
export class LsiconShellWindowMaximizeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
