import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNotebookAndPenIcon],svg[icon-park-outline-notebook-and-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 6v36h26V6zm8 36V6m32 0h-8v32l4 4l4-4zm-8 6h8M30 6H4m26 36H4M36 6v16m8-16v16"></svg:path>`,
})
export class IconParkOutlineNotebookAndPenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
