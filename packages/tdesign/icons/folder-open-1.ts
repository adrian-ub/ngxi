import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderOpen1Icon],svg[tdesign-folder-open-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.844 9l-3.6 12H0V2.5h7.362l3 2.5H20.5v4zM18.5 9V7H9.638l-3-2.5H2v8.687L3.256 9zM2.344 19h16.412l2.4-8H4.744z"></svg:path>`,
})
export class TdesignFolderOpen1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
