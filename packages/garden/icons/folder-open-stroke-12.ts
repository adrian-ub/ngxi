import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFolderOpenStroke12Icon],svg[garden-folder-open-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M1.5 6.5h9V5c0-.3-.2-.5-.5-.5H6.5v-1c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1z"></svg:path><svg:path stroke-linejoin="round" d="m1.5 10.5l-1-4h11l-1 4z"></svg:path></svg:g>`,
})
export class GardenFolderOpenStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
