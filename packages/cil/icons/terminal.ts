import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTerminalIcon],svg[cil-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 40H40a24.03 24.03 0 0 0-24 24v392a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V64a24.03 24.03 0 0 0-24-24m-8 408H48V72h416Z"></svg:path><svg:path fill="currentColor" d="m115.962 282.627l73.445-82.672l-73.451-82.588l-23.912 21.266l54.549 61.333l-54.555 61.407zM216 240h128v32H216z"></svg:path>`,
})
export class CilTerminalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
