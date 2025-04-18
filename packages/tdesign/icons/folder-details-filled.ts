import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderDetailsFilledIcon],svg[tdesign-folder-details-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.48 2.5H1V21h22V5H11.48zm-2.482 9.498h2.004v2.004H6.998zm4 0h2.004v2.004h-2.004zm6.004 0v2.004h-2.004v-2.004z"></svg:path>`,
})
export class TdesignFolderDetailsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
