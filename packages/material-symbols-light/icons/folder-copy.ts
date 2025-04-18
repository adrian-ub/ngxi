import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderCopyIcon],svg[material-symbols-light-folder-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19.77q-.667 0-1.141-.475T2 18.154V7.077h1v11.077q0 .269.173.442t.443.173H19v1zm3-3q-.667 0-1.141-.475T5 15.154V4.616q0-.667.475-1.142T6.615 3h4.962l2 2h6.808q.666 0 1.14.475T22 6.615v8.539q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightFolderCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
