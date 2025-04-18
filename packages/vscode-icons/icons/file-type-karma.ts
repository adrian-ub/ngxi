import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeKarmaIcon],svg[vscode-icons-file-type-karma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#429f87" d="m18.842 20.224l4.295 6.407h6.79l-7.695-11.369l-3.39 4.961M5.154 23.659L8.3 20.7l5.028 5.934L10.1 14.727L7.374 19.21z"></svg:path><svg:path fill="#56c5a8" d="m5.154 23.659l4.946-8.932l-3.144 2.964l-5.029-5.935l3.228 11.9M29.28 5.122h-6.79l-4.158 6.144V5.122H12.1v6.372l3.321 12.239l.774 2.9h2.134v-5.379z"></svg:path>`,
})
export class VscodeIconsFileTypeKarmaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
