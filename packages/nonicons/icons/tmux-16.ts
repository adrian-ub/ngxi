import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsTmux16Icon],svg[nonicons-tmux-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 1.5a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h5.5v-13zm7 0v5.75h5.75v-5.5a.25.25 0 0 0-.25-.25zm5.75 7.25H8.75v5.75h5.5a.25.25 0 0 0 .25-.25zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25z"></svg:path>`,
})
export class NoniconsTmux16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
