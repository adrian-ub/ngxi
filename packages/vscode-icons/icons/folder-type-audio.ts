import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeAudioIcon],svg[vscode-icons-folder-type-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5555bf" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#00007f" d="M21.422 13a.68.68 0 0 0-.427.174l-5.7 4.74a.87.87 0 0 1-.716.246h-3.673a.9.9 0 0 0-.906.894s0 .008 0 .012v5.87a.9.9 0 0 0 .9.9h3.68a.87.87 0 0 1 .716.246l5.7 4.74c.391.325.811.168.811-.217V13.391a.37.37 0 0 0-.354-.391Zm7.328 1.725l-1.343 1.345a11.03 11.03 0 0 1 0 11.883l1.339 1.332a12.89 12.89 0 0 0 .004-14.561Zm-3.25 3.241L24.179 19.3a4.53 4.53 0 0 1 0 5.428l1.321 1.316a6.416 6.416 0 0 0 .008-8.077Z"></svg:path>`,
})
export class VscodeIconsFolderTypeAudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
