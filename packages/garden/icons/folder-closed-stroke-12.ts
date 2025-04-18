import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFolderClosedStroke12Icon],svg[garden-folder-closed-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 10.5h8c.3 0 .5-.2.5-.5V5c0-.3-.2-.5-.5-.5H6.5v-1c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1V10c0 .3.2.5.5.5z"></svg:path>`,
})
export class GardenFolderClosedStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
