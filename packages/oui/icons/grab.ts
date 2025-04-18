import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiGrabIcon],svg[oui-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 6c.276 0 .5.232.5.5c0 .276-.229.5-.5.5h-11a.505.505 0 0 1-.5-.5c0-.276.229-.5.5-.5zm0 3c.276 0 .5.232.5.5c0 .276-.229.5-.5.5h-11a.505.505 0 0 1-.5-.5c0-.276.229-.5.5-.5z"></svg:path>`,
})
export class OuiGrabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
