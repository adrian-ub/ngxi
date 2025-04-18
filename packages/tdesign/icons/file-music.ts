import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileMusicIcon],svg[tdesign-file-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm15.586 6L15 3.414V7zM13 3H5v18h14V9h-6zm-1 7h4v2h-2v4a2.5 2.5 0 1 1-2-2.45zm0 6a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"></svg:path>`,
})
export class TdesignFileMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
