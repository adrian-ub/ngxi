import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeFrontcommerceIcon],svg[vscode-icons-folder-type-frontcommerce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8b1835" d="M27.35 5.542h-9.227l-2.083 4.2H4.433v16.8h25v-21zm0 4.2h-8.135l1.091-2.1h7.044z"></svg:path><svg:path fill="#e5e5e5" d="M23.814 29.366a6.985 6.985 0 1 0 0-13.97a6.985 6.985 0 0 0 0 13.97"></svg:path><svg:path fill="#ac304f" fill-rule="evenodd" d="M30.1 22.381a6.287 6.287 0 1 1-12.573 0a6.287 6.287 0 0 1 12.574 0m-4.193-1.226l2.098-1.22l-4.19-2.444l-4.192 2.443v4.886l2.1 1.224l-.002-2.449l2.093 1.22v2.456l4.191-2.451l-2.098-1.229l-2.093 1.224v-2.438l-2.093-1.222l2.093-1.22z" clip-rule="evenodd"></svg:path>`,
})
export class VscodeIconsFolderTypeFrontcommerceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
