import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFriendicaFillIcon],svg[ri-friendica-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v4.5H9v4h6v5H9V21h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path>`,
})
export class RiFriendicaFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
