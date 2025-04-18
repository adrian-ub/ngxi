import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFolderPlaceholderRtlIcon],svg[ooui-folder-placeholder-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h12V4a2 2 0 0 0-2-2h-6z"></svg:path><svg:rect width="20" height="14" y="4" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiFolderPlaceholderRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
