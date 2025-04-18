import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFolderImageBoldIcon],svg[iconamoon-folder-image-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="2.5" d="M3 17V5h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path><svg:path stroke-linecap="round" stroke-width="2.5" d="m5 19l7-7l7 7"></svg:path><svg:path stroke-width="3.75" d="M7.5 9.5h.01v.01H7.5z"></svg:path></svg:g>`,
})
export class IconamoonFolderImageBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
