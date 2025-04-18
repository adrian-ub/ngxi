import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFolderClosedFill16Icon],svg[garden-folder-closed-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15H2c-.55 0-1-.45-1-1V3.5C1 2.67 1.67 2 2.5 2h5C8.33 2 9 2.67 9 3.5V4h5c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1"></svg:path>`,
})
export class GardenFolderClosedFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
