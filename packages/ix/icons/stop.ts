import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStopIcon],svg[ix-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 128v256H128V128zm-42.667 42.667H170.667v170.666h170.666z"></svg:path>`,
})
export class IxStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
