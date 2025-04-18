import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFolderClosedStroke16Icon],svg[garden-folder-closed-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 14.5h12c.3 0 .5-.2.5-.5V5c0-.3-.2-.5-.5-.5H8.5v-1c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1V14c0 .3.2.5.5.5z"></svg:path>`,
})
export class GardenFolderClosedStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
