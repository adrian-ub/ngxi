import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeBuildkiteIcon],svg[vscode-icons-folder-type-buildkite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#55bf91" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#30f2a2" d="m7 15l8 3.92v8L7 23Zm16.08 0L31 18.92L23.08 23Z"></svg:path><svg:path fill="#14cc80" d="M23.08 15L15 18.92v8L23.08 23ZM31 18.92L23.08 23v8L31 26.92Z"></svg:path>`,
})
export class VscodeIconsFolderTypeBuildkiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
