import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeHaxelibIcon],svg[vscode-icons-folder-type-haxelib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#bf8a55" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#f68712" d="M20.5 12.625L12.625 20.5l7.875 7.875l7.875-7.875z"></svg:path><svg:path fill="#fab20b" d="m10 10l10.5 2.625l-7.875 7.875z"></svg:path><svg:path fill="#f47216" d="m31 10l-2.625 10.5l-7.875-7.875z"></svg:path><svg:path fill="#f25c19" d="m31 31l-10.5-2.625l7.875-7.875z"></svg:path><svg:path fill="#f89c0e" d="m10 31l2.625-10.5l7.875 7.875z"></svg:path><svg:path fill="#fbc707" d="M20.5 12.625L10 10h5.25zm0 0L31 10h-5.25z"></svg:path><svg:path fill="#f68712" d="M20.5 28.375L31 31h-5.25z"></svg:path><svg:path fill="#f25c19" d="M20.5 28.375L10 31h5.25z"></svg:path><svg:path fill="#fff200" d="M12.625 20.5L10 31v-5.25zm0 0L10 10v5.25z"></svg:path><svg:path fill="#f1471d" d="M28.375 20.5L31 10v5.25zm0 0L31 31v-5.25z"></svg:path>`,
})
export class VscodeIconsFolderTypeHaxelibIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
