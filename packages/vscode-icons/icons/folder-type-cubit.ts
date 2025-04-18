import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeCubitIcon],svg[vscode-icons-folder-type-cubit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#55a3bf" d="M27.417 5.5H18.19l-2.083 4.2H4.5v16.8h25v-21Zm0 4.2h-8.135l1.091-2.1h7.044Z"></svg:path><svg:path d="m22.428 11.161l8.217 4.92v9.838l-8.216 4.92l-8.217-4.92v-9.838Z"></svg:path><svg:path fill="#82eddf" d="M14.878 16.451L22.429 21v9.1l-7.55-4.549Z"></svg:path><svg:path fill="#00d3b9" d="M29.977 16.451L22.427 21v9.1l7.55-4.549Z"></svg:path><svg:path fill="#0084c1" d="m14.878 16.451l7.551-4.55l7.549 4.55L22.429 21Z"></svg:path><svg:path d="m22.428 15.076l4.948 2.962v5.925l-4.948 2.962l-4.948-2.962v-5.925Z"></svg:path><svg:path fill="#82eddf" d="M19.979 19.519L22.43 21v2.963l-2.45-1.48Z"></svg:path><svg:path fill="#00d3b9" d="M24.876 19.519L22.428 21v2.963l2.448-1.48Z"></svg:path><svg:path fill="#0084c1" d="m19.979 19.519l2.451-1.48l2.447 1.48L22.429 21Z"></svg:path>`,
})
export class VscodeIconsFolderTypeCubitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
