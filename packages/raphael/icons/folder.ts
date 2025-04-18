import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelFolderIcon],svg[raphael-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.625 26.75h-26.5V8.375H3.25c1.75 0 .747-3.125 3-3.125h5.125c2.25 0 1.25 3.125 3 3.125h14.25z"></svg:path>`,
})
export class RaphaelFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
