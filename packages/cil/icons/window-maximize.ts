import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWindowMaximizeIcon],svg[cil-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 48H40.335a24.027 24.027 0 0 0-24 24v384a24.027 24.027 0 0 0 24 24H472a24.027 24.027 0 0 0 24-24V72a24.027 24.027 0 0 0-24-24m-8 32v71.981l-415.665-.491V80ZM48.335 448V183.49l415.665.491V448Z"></svg:path>`,
})
export class CilWindowMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
