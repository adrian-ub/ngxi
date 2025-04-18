import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsSaveDiskIcon],svg[zondicons-save-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5 0v6h10V2zm6 1h3v4h-3z"></svg:path>`,
})
export class ZondiconsSaveDiskIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
