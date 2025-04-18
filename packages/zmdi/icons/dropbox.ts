import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDropboxIcon],svg[zmdi-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m126 3l87 72l88-72l126 81l-87 69l87 69l-126 82l-88-73l-87 73L0 222l87-69L0 84zm87 72L87 153l126 78l127-78zm0 172l89 73l37-25v27l-126 75l-125-75v-27l38 25z"></svg:path>`,
})
export class ZmdiDropboxIcon {
  readonly viewBox = input("0 0 432 400")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
