import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHardDriveOutlineSharpIcon],svg[material-symbols-light-hard-drive-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.423h16v-5.77H4zm13.113-1.884q.416 0 .709-.292q.294-.29.294-.706t-.291-.71q-.292-.292-.707-.292q-.416 0-.71.29t-.292.707t.29.71t.707.292M21 9.654h-1.402l-2.423-2.5H6.825l-2.423 2.5H3l3.404-3.5h11.192zM3 17.423v-7.77h18v7.77z"></svg:path>`,
})
export class MaterialSymbolsLightHardDriveOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
