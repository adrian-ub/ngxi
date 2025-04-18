import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderZipFilledIcon],svg[tdesign-folder-zip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.48 2.5l2 2.5H23v16H1V2.5zM14 19h2.004v-1.996h2V15h-2v-1.996h2V11h-2V9.004h2V7H16v2h-2v2.004h2V13h-2v2.004h2V17h-2z"></svg:path>`,
})
export class TdesignFolderZipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
