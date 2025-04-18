import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFolderPlaceholderLtrIcon],svg[ooui-folder-placeholder-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H2a2 2 0 0 0-2 2v2h12z"></svg:path><svg:rect width="20" height="14" y="4" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiFolderPlaceholderLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
