import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeViewIcon],svg[vscode-icons-folder-type-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#bf6d55" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#e44f26" d="M14.167 28.901L12.482 10h18.516l-1.687 18.898L21.729 31z"></svg:path><svg:path fill="#f1662a" d="m21.74 29.393l6.127-1.699l1.442-16.149H21.74z"></svg:path><svg:path fill="#fff" d="m20.99 24.011l-6-3.607v-1.307l6-3.608v2.023l-3.828 2.238l3.828 2.239zm1.5-.002v-2.021l3.855-2.238l-3.855-2.237v-2.022l6 3.591v1.336z"></svg:path>`,
})
export class VscodeIconsFolderTypeViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
