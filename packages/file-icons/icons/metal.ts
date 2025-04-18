import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMetalIcon],svg[file-icons-metal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 464.102V47.898l194.972 236.186V109.719L512 464.102h-79.257L255.207 269.818v194.284L64.374 225.15v238.952z"></svg:path>`,
})
export class FileIconsMetalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
