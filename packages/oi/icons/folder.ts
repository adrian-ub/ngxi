import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiFolderIcon],svg[oi-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v2h8V1H3V0zm0 3v4.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5V3z"></svg:path>`,
})
export class OiFolderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
