import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeBuildkiteOpenedIcon],svg[vscode-icons-folder-type-buildkite-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7bdbb6" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.626Z"></svg:path><svg:path fill="#30f2a2" d="m7 15l8 3.92v8L7 23Zm16.08 0L31 18.92L23.08 23Z"></svg:path><svg:path fill="#14cc80" d="M23.08 15L15 18.92v8L23.08 23ZM31 18.92L23.08 23v8L31 26.92Z"></svg:path>`,
})
export class VscodeIconsFolderTypeBuildkiteOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
