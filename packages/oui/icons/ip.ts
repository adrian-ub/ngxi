import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiIpIcon],svg[oui-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-2 3H8v6h1V9.014h1c.298-.013 2 0 2-2.018c0-1.74-1.314-1.952-1.825-1.987zM6 5H5v6h1zm4 .984q1 0 1 1.008T10 8H9V5.984Z"></svg:path>`,
})
export class OuiIpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
