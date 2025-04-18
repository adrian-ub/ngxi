import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderEyeSharpIcon],svg[material-symbols-light-folder-eye-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h6.596l2 2H21v7.379q-1.083-.762-2.314-1.224q-1.23-.463-2.552-.463q-2.92 0-5.245 1.946Q8.566 16.586 7.262 19zm13.134 3q-1.832 0-3.382-.94t-2.483-2.521q.933-1.581 2.483-2.522t3.383-.94t3.382.94T22 18.538q-.933 1.581-2.483 2.521q-1.55.941-3.383.941m0-1.692q.743 0 1.257-.513t.513-1.256t-.513-1.256t-1.256-.514t-1.256.513t-.513 1.256t.512 1.256t1.256.514m.003-.77q-.416 0-.709-.29q-.294-.292-.294-.707t.292-.71q.29-.292.706-.292t.71.29t.293.707t-.291.71t-.707.293"></svg:path>`,
})
export class MaterialSymbolsLightFolderEyeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
