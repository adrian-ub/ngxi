import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFolderOpenStroke16Icon],svg[garden-folder-open-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M1.5 8.5h13V5c0-.28-.22-.5-.5-.5H8.5v-1c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"></svg:path><svg:path stroke-linejoin="round" d="m1.43 14.08l-.83-5c-.05-.3.18-.58.49-.58h13.82c.31 0 .54.28.49.58l-.83 5c-.04.24-.25.42-.49.42H1.92c-.24 0-.45-.18-.49-.42z"></svg:path></svg:g>`,
})
export class GardenFolderOpenStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
