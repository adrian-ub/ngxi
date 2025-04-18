import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNewFolderSolidIcon],svg[streamline-new-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.127.805A1.5 1.5 0 0 0 5.183.5H1.5A1.5 1.5 0 0 0 0 2v10a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 14 12V4a1.5 1.5 0 0 0-1.5-1.5H6.89l-.215-.86a1.5 1.5 0 0 0-.548-.835"></svg:path>`,
})
export class StreamlineNewFolderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
