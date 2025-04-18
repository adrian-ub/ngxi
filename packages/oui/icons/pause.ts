import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPauseIcon],svg[oui-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2.5c0-.276.232-.5.5-.5c.276 0 .5.229.5.5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5zm7 0c0-.276.232-.5.5-.5c.276 0 .5.229.5.5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5z"></svg:path>`,
})
export class OuiPauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
