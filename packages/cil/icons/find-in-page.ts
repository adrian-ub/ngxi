import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFindInPageIcon],svg[cil-find-in-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M334.627 16H48v480h424V153.373ZM440 464H80V48h241.373L440 166.627Z"></svg:path><svg:path fill="currentColor" d="M239.861 152a95.861 95.861 0 1 0 53.624 175.284l68.03 68.029l22.627-22.626l-67.5-67.5A95.816 95.816 0 0 0 239.861 152M176 247.861a63.862 63.862 0 1 1 63.861 63.861A63.933 63.933 0 0 1 176 247.861"></svg:path>`,
})
export class CilFindInPageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
