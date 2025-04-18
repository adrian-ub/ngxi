import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderOutIcon],svg[uil-border-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m4 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-4 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m8-14H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14ZM8 13a1 1 0 1 0-1-1a1 1 0 0 0 1 1"></svg:path>`,
})
export class UilBorderOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
