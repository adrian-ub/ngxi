import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderHookIcon],svg[material-icon-theme-folder-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d1c4e9" d="M23 16c-4.97 0-9 2.24-9 5c0 2.18 2.5 4.03 6 4.71V28l4-3l-4-3v1.67c-2.48-.58-4-1.79-4-2.67c0-1.19 2.79-3 7-3s7 1.81 7 3c0 .88-1.52 2.09-4 2.67v2.04c3.5-.68 6-2.53 6-4.71c0-2.76-4.03-5-9-5"></svg:path>`,
})
export class MaterialIconThemeFolderHookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
