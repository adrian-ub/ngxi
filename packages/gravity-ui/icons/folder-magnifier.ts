import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderMagnifierIcon],svg[gravity-ui-folder-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.879 4.5l-.44-.44l-.621-.62A1.5 1.5 0 0 0 4.758 3H3.5A1.5 1.5 0 0 0 2 4.5V11a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 11V6a1.5 1.5 0 0 0-1.5-1.5zM3.5 1.5a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1.5zm6.217 7.656a2.5 2.5 0 1 0-1.06 1.06l.813.814a.75.75 0 1 0 1.06-1.06zM7.5 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderMagnifierIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
