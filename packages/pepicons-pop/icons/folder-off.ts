import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFolderOffIcon],svg[pepicons-pop-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 5h-4.991l-.565-.988A3 3 0 0 0 7.34 2.5H4.5a3 3 0 0 0-3 3V15a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-11 11a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492A1 1 0 0 0 9.93 7h5.57a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFolderOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
