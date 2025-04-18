import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTower3Icon],svg[tdesign-tower-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.126V1h2v2.126a4.002 4.002 0 0 1 1.575 6.935L16.127 23H7.873l1.553-12.939A4.002 4.002 0 0 1 11 3.126m.334 7.819L10.127 21h3.746l-1.207-10.055a4 4 0 0 1-1.332 0M12 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class TdesignTower3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
