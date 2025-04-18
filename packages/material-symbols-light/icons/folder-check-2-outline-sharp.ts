import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderCheck2OutlineSharpIcon],svg[material-symbols-light-folder-check-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6v5.935v-.627zm-1 1V5h6.596l2 2H21v5.487q-.238-.172-.479-.303q-.24-.132-.521-.25V8h-8.806l-2-2H4v12h6.942q.02.256.037.506t.09.494zm13.602.712l3.34-3.335l-.626-.627l-2.714 2.702L15.3 17.15l-.627.633zm.706-6.02q1.67 0 2.835 1.165t1.165 2.835q0 1.672-1.165 2.836q-1.164 1.164-2.835 1.164t-2.836-1.164t-1.164-2.836q0-1.67 1.164-2.835q1.165-1.165 2.836-1.165"></svg:path>`,
})
export class MaterialSymbolsLightFolderCheck2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
