import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderOneIcon],svg[mynaui-folder-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.661 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m8.661 0a2 2 0 0 1-1.322-.5l-2.272-2A2 2 0 0 0 6.745 4H5a2 2 0 0 0-2 2v1m8.661 0H3"></svg:path>`,
})
export class MynauiFolderOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
