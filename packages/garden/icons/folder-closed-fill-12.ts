import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFolderClosedFill12Icon],svg[garden-folder-closed-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11H2c-.55 0-1-.45-1-1V3.5C1 2.67 1.67 2 2.5 2h3C6.33 2 7 2.67 7 3.5V4h3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1"></svg:path>`,
})
export class GardenFolderClosedFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
